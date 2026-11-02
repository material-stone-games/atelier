(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="170",wi={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,pc=1,mu=2,dd=1,ud=2,ii=3,Ri=0,Qe=1,Je=2,Ei=0,As=1,mc=2,gc=3,vc=4,gu=5,ki=100,vu=101,_u=102,xu=103,yu=104,Mu=200,bu=201,Su=202,wu=203,Va=204,Ga=205,Eu=206,Tu=207,Au=208,Cu=209,Ru=210,Pu=211,Lu=212,Iu=213,Du=214,Wa=0,$a=1,qa=2,Ds=3,Xa=4,Ya=5,ja=6,Ka=7,fd=0,Nu=1,Uu=2,Ti=0,Fu=1,Ou=2,Bu=3,pd=4,zu=5,ku=6,Hu=7,md=300,Ns=301,Us=302,Za=303,Ja=304,Uo=306,Qa=1e3,qi=1001,tl=1002,dn=1003,Vu=1004,Ar=1005,Hn=1006,$o=1007,Xi=1008,ci=1009,gd=1010,vd=1011,gr=1012,kl=1013,ji=1014,Vn=1015,Mr=1016,Hl=1017,Vl=1018,Fs=1020,_d=35902,xd=1021,yd=1022,An=1023,Md=1024,bd=1025,Cs=1026,Os=1027,Gl=1028,Wl=1029,Sd=1030,$l=1031,ql=1033,ho=33776,uo=33777,fo=33778,po=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,ll=37808,cl=37809,hl=37810,dl=37811,ul=37812,fl=37813,pl=37814,ml=37815,gl=37816,vl=37817,_l=37818,xl=37819,yl=37820,Ml=37821,mo=36492,bl=36494,Sl=36495,wd=36283,wl=36284,El=36285,Tl=36286,Gu=3200,Wu=3201,Ed=0,$u=1,Mi="",Ze="srgb",ks="srgb-linear",Fo="linear",pe="srgb",es=7680,_c=519,qu=512,Xu=513,Yu=514,Td=515,ju=516,Ku=517,Zu=518,Ju=519,Al=35044,qo=35048,xc="300 es",ai=2e3,wo=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,Cl=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Xe(s,t,e){return Math.max(t,Math.min(e,s))}function Qu(s,t){return(s%t+t)%t}function Xo(s,t,e){return(1-e)*s+e*t}function zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tf={DEG2RAD:go};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],_=i[1],y=i[4],x=i[7],P=i[2],T=i[5],C=i[8];return r[0]=o*v+a*_+l*P,r[3]=o*m+a*y+l*T,r[6]=o*f+a*x+l*C,r[1]=c*v+h*_+u*P,r[4]=c*m+h*y+u*T,r[7]=c*f+h*x+u*C,r[2]=d*v+p*_+g*P,r[5]=d*m+p*y+g*T,r[8]=d*f+p*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new jt;function Ad(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ef(){const s=Eo("canvas");return s.style.display="block",s}const yc={};function ur(s){s in yc||(yc[s]=!0,console.warn(s))}function nf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],bc=[.2126,.7152,.0722],Sc=[.3127,.329],wc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[ks]:{primaries:Mc,whitePoint:Sc,transfer:Fo,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:bc,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:Mc,whitePoint:Sc,transfer:pe,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:bc,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let ns;class of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=Eo("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let af=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jo(i[o].image)):r.push(jo(i[o]))}else r=jo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?of.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;class Ye extends Ji{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=qi,i=qi,r=Hn,o=Xi,a=An,l=ci,c=Ye.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ai(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=md;Ye.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(p+1)/2,P=(f+1)/2,T=(h+d)/4,C=(u+v)/4,D=(g+m)/4;return y>x&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=C/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=D/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends cf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rd extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,f*_);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new z,Tc=new Zi;class Qi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Rr.subVectors(this.max,qs),is.subVectors(t.a,qs),ss.subVectors(t.b,qs),rs.subVectors(t.c,qs),ui.subVectors(ss,is),fi.subVectors(rs,ss),Ii.subVectors(is,rs);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!Zo(e,is,ss,rs,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,is,ss,rs,Rr))?!1:(Pr.crossVectors(ui,fi),e=[Pr.x,Pr.y,Pr.z],Zo(e,is,ss,rs,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,Cr=new Qi,is=new z,ss=new z,rs=new z,ui=new z,fi=new z,Ii=new z,qs=new z,Rr=new z,Pr=new z,Di=new z;function Zo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const df=new Qi,Xs=new z,Jo=new z;let br=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Jo)),this.expandByPoint(Xs.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Xn=new z,Qo=new z,Lr=new z,pi=new z,ta=new z,Ir=new z,ea=new z;let Xl=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qo.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Qo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=pi.dot(this.direction),l=-pi.dot(Lr),c=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qo).addScaledVector(Lr,d),p}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){ta.subVectors(e,t),Ir.subVectors(n,t),ea.crossVectors(ta,Ir);let o=this.direction.dot(ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(Ir.crossVectors(pi,Ir));if(l<0)return null;const c=a*this.direction.dot(ta.cross(pi));if(c<0||l+c>o)return null;const h=-a*pi.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class _e{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uf,t,ff)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),mi.crossVectors(n,an),mi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),mi.crossVectors(n,an)),mi.normalize(),Dr.crossVectors(an,mi),i[0]=mi.x,i[4]=Dr.x,i[8]=an.x,i[1]=mi.y,i[5]=Dr.y,i[9]=an.y,i[2]=mi.z,i[6]=Dr.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],_=n[3],y=n[7],x=n[11],P=n[15],T=i[0],C=i[4],D=i[8],S=i[12],M=i[1],L=i[5],G=i[9],O=i[13],k=i[2],U=i[6],B=i[10],Z=i[14],H=i[3],K=i[7],dt=i[11],ut=i[15];return r[0]=o*T+a*M+l*k+c*H,r[4]=o*C+a*L+l*U+c*K,r[8]=o*D+a*G+l*B+c*dt,r[12]=o*S+a*O+l*Z+c*ut,r[1]=h*T+u*M+d*k+p*H,r[5]=h*C+u*L+d*U+p*K,r[9]=h*D+u*G+d*B+p*dt,r[13]=h*S+u*O+d*Z+p*ut,r[2]=g*T+v*M+m*k+f*H,r[6]=g*C+v*L+m*U+f*K,r[10]=g*D+v*G+m*B+f*dt,r[14]=g*S+v*O+m*Z+f*ut,r[3]=_*T+y*M+x*k+P*H,r[7]=_*C+y*L+x*U+P*K,r[11]=_*D+y*G+x*B+P*dt,r[15]=_*S+y*O+x*Z+P*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],_=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,P=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,T=e*_+n*y+i*x+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=_*C,t[1]=(v*d*r-u*m*r-v*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*f+n*l*f)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*C,t[4]=y*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=P*C,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,_=l*c,y=l*h,x=l*u,P=n.x,T=n.y,C=n.z;return i[0]=(1-(v+f))*P,i[1]=(p+x)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(p-x)*T,i[5]=(1-(d+f))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+y)*C,i[9]=(m-_)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ai){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===ai)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ai){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,v;if(a===ai)g=(o+r)*u,v=-2*u;else if(a===wo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new z,bn=new _e,uf=new z(0,0,0),ff=new z(1,1,1),mi=new z,Dr=new z,an=new z,Ac=new _e,Cc=new Zi;class Wn{constructor(t=0,e=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pf=0;const Rc=new z,as=new Zi,Yn=new _e,Nr=new z,Ys=new z,mf=new z,gf=new Zi,Pc=new z(1,0,0),Lc=new z(0,1,0),Ic=new z(0,0,1),Dc={type:"added"},vf={type:"removed"},ls={type:"childadded",child:null},na={type:"childremoved",child:null};class Fe extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new z,e=new Wn,n=new Zi,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ys,Nr,this.up):Yn.lookAt(Nr,Ys,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Yn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new z(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new z,jn=new z,ia=new z,Kn=new z,cs=new z,hs=new z,Nc=new z,sa=new z,ra=new z,oa=new z,aa=new ve,la=new ve,ca=new ve;class vn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Sn.subVectors(i,e),jn.subVectors(n,e),ia.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(jn),l=Sn.dot(ia),c=jn.dot(jn),h=jn.dot(ia),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),jn.subVectors(t,e),Sn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Sn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;cs.subVectors(i,n),hs.subVectors(r,n),sa.subVectors(t,n);const l=cs.dot(sa),c=hs.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,i);const h=cs.dot(ra),u=hs.dot(ra);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);oa.subVectors(t,r);const p=cs.dot(oa),g=hs.dot(oa);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nc.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Nc,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Qu(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(Xe($e.r*255,0,255))*65536+Math.round(Xe($e.g*255,0,255))*256+Math.round(Xe($e.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ze){oe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,i=$e.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Ur);const n=Xo(gi.h,Ur.h,e),i=Xo(gi.s,Ur.s,e),r=Xo(gi.l,Ur.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Bt;Bt.NAMES=Pd;let _f=0,Hs=class extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ai(),this.name="",this.blending=As,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class On extends Hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new z,Fr=new Pt;class xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}}class Ld extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Id extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xf=0;const mn=new _e,da=new Fe,ds=new z,ln=new Qi,js=new Qi,He=new z;class tn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?Id:Ld)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(ln.min,js.min),ln.expandByPoint(He),He.addVectors(ln.max,js.max),ln.expandByPoint(He)):(ln.expandByPoint(js.min),ln.expandByPoint(js.max))}ln.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),He.add(ds)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new z,l[D]=new z;const c=new z,h=new z,u=new z,d=new Pt,p=new Pt,g=new Pt,v=new z,m=new z;function f(D,S,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(v),a[S].add(v),a[M].add(v),l[D].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,S=_.length;D<S;++D){const M=_[D],L=M.start,G=M.count;for(let O=L,k=L+G;O<k;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new z,x=new z,P=new z,T=new z;function C(D){P.fromBufferAttribute(i,D),T.copy(P);const S=a[D];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(T,S);const L=x.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,S=_.length;D<S;++D){const M=_[D],L=M.start,G=M.count;for(let O=L,k=L+G;O<k;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new xn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new _e,Ni=new Xl,Or=new br,Fc=new z,Br=new z,zr=new z,kr=new z,ua=new z,Hr=new z,Oc=new z,Vr=new z;class Dt extends Fe{constructor(t=new tn,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ua.fromBufferAttribute(u,t),o?Hr.addScaledVector(ua,h):Hr.addScaledVector(ua.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Or.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Or,Fc)===null||Ni.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,P=y;x<P;x+=3){const T=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);i=Gr(this,f,t,n,c,h,u,T,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Gr(this,o,t,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,P=y;x<P;x+=3){const T=x,C=x+1,D=x+2;i=Gr(this,f,t,n,c,h,u,T,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,y=m+1,x=m+2;i=Gr(this,o,t,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function yf(s,t,e,n,i,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ri,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:s}}function Gr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Br),s.getVertexPosition(l,zr),s.getVertexPosition(c,kr);const h=yf(s,t,e,n,Br,zr,kr,Oc);if(h){const u=new z;vn.getBarycoord(Oc,Br,zr,kr,u),i&&(h.uv=vn.getInterpolatedAttribute(i,a,l,c,u,new Pt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new Pt)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};vn.getNormal(Br,zr,kr,d.normal),h.face=d,h.barycoord=u}return h}class re extends tn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(v,m,f,_,y,x,P,T,C,D,S){const M=x/C,L=P/D,G=x/2,O=P/2,k=T/2,U=C+1,B=D+1;let Z=0,H=0;const K=new z;for(let dt=0;dt<B;dt++){const ut=dt*L-O;for(let lt=0;lt<U;lt++){const te=lt*M-G;K[v]=te*_,K[m]=ut*y,K[f]=k,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(lt/C),u.push(1-dt/D),Z+=1}}for(let dt=0;dt<D;dt++)for(let ut=0;ut<C;ut++){const lt=d+ut+U*dt,te=d+ut+U*(dt+1),et=d+(ut+1)+U*(dt+1),at=d+(ut+1)+U*dt;l.push(lt,te,at),l.push(te,et,at),H+=6}a.addGroup(p,H,S),p+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=Bs(s[e]);for(const i in n)t[i]=n[i]}return t}function Mf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const bf={clone:Bs,merge:Ke};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nd extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new z,Bc=new Pt,zc=new Pt;class hn extends Nd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,zc),e.subVectors(zc,Bc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class Ef extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(us,fs,t,e);i.layers=this.layers,this.add(i);const r=new hn(us,fs,t,e);r.layers=this.layers,this.add(r);const o=new hn(us,fs,t,e);o.layers=this.layers,this.add(o);const a=new hn(us,fs,t,e);a.layers=this.layers,this.add(a);const l=new hn(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new hn(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ud extends Ye{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tf extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ud(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new re(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ei});r.uniforms.tEquirect.value=e;const o=new Dt(i,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Hn),new Ef(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const fa=new z,Af=new z,Cf=new jt;let si=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fa.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cf.getNormalMatrix(t),i=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ui=new br,Wr=new z;class jl{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,o=new si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+g,x+_).normalize(),n[3].setComponents(l-o,d-h,m-g,x-_).normalize(),n[4].setComponents(l-a,d-u,m-v,x-y).normalize(),e===ai)n[5].setComponents(l+a,d+u,m+v,x+y).normalize();else if(e===wo)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rf(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class cn extends tn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const _=f*d-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+c*f,x=_+c*(f+1),P=_+1+c*(f+1),T=_+1+c*f;p.push(y,x,T),p.push(x,P,T)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Nf,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:zf,begin_vertex:kf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:Yf,color_fragment:jf,color_pars_fragment:Kf,color_pars_vertex:Zf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:op,colorspace_pars_fragment:ap,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:up,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:_p,lights_lambert_fragment:xp,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:Sp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Cp,lights_fragment_begin:Rp,lights_fragment_maps:Pp,lights_fragment_end:Lp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Up,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:zp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Vp,morphcolor_vertex:Gp,morphnormal_vertex:Wp,morphtarget_pars_vertex:$p,morphtarget_vertex:qp,normal_fragment_begin:Xp,normal_fragment_maps:Yp,normal_pars_fragment:jp,normal_pars_vertex:Kp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:um,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:vm,skinnormal_vertex:_m,specularmap_fragment:xm,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Cm,background_vert:Rm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Im,cube_vert:Dm,cube_frag:Nm,depth_vert:Um,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:$m,meshlambert_frag:qm,meshmatcap_vert:Xm,meshmatcap_frag:Ym,meshnormal_vert:jm,meshnormal_frag:Km,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},mt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ke([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ke([mt.lights,mt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Bn.physical={uniforms:Ke([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const $r={r:0,b:0,g:0},Fi=new Wn,c0=new _e;function h0(s,t,e,n,i,r,o){const a=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?f(a,l):x&&x.isColor&&(f(x,1),y=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Uo)?(h===void 0&&(h=new Dt(new re(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Bs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(Fi)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Dt(new cn(2,2),new Pi({name:"BackgroundMaterial",uniforms:Bs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB($r,Dd(s)),n.buffers.color.setClear($r.r,$r.g,$r.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:v,addToRenderList:m}}function d0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,L,G,O,k){let U=!1;const B=u(O,G,L);r!==B&&(r=B,c(r.object)),U=p(M,O,G,k),U&&g(M,O,G,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(M,L,G,O),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,G){const O=G.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let U=k[L.id];U===void 0&&(U={},k[L.id]=U);let B=U[O];return B===void 0&&(B=d(l()),U[O]=B),B}function d(M){const L=[],G=[],O=[];for(let k=0;k<e;k++)L[k]=0,G[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,L,G,O){const k=r.attributes,U=L.attributes;let B=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){const dt=k[H];let ut=U[H];if(ut===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),dt===void 0||dt.attribute!==ut||ut&&dt.data!==ut.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(M,L,G,O){const k={},U=L.attributes;let B=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){let dt=U[H];dt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const ut={};ut.attribute=dt,dt&&dt.data&&(ut.data=dt.data),k[H]=ut,B++}r.attributes=k,r.attributesNum=B,r.index=O}function v(){const M=r.newAttributes;for(let L=0,G=M.length;L<G;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const G=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;G[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),k[M]!==L&&(s.vertexAttribDivisor(M,L),k[M]=L)}function _(){const M=r.newAttributes,L=r.enabledAttributes;for(let G=0,O=L.length;G<O;G++)L[G]!==M[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function y(M,L,G,O,k,U,B){B===!0?s.vertexAttribIPointer(M,L,G,k,U):s.vertexAttribPointer(M,L,G,O,k,U)}function x(M,L,G,O){v();const k=O.attributes,U=G.getAttributes(),B=L.defaultAttributeValues;for(const Z in U){const H=U[Z];if(H.location>=0){let K=k[Z];if(K===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const dt=K.normalized,ut=K.itemSize,lt=t.get(K);if(lt===void 0)continue;const te=lt.buffer,et=lt.type,at=lt.bytesPerElement,Ct=et===s.INT||et===s.UNSIGNED_INT||K.gpuType===kl;if(K.isInterleavedBufferAttribute){const pt=K.data,zt=pt.stride,$t=K.offset;if(pt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<H.locationSize;Kt++)f(H.location+Kt,pt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Kt=0;Kt<H.locationSize;Kt++)m(H.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Kt=0;Kt<H.locationSize;Kt++)y(H.location+Kt,ut/H.locationSize,et,dt,zt*at,($t+ut/H.locationSize*Kt)*at,Ct)}else{if(K.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)f(H.location+pt,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let pt=0;pt<H.locationSize;pt++)y(H.location+pt,ut/H.locationSize,et,dt,ut*at,ut/H.locationSize*pt*at,Ct)}}else if(B!==void 0){const dt=B[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(H.location,dt);break;case 3:s.vertexAttrib3fv(H.location,dt);break;case 4:s.vertexAttrib4fv(H.location,dt);break;default:s.vertexAttrib1fv(H.location,dt)}}}}_()}function P(){D();for(const M in n){const L=n[M];for(const G in L){const O=L[G];for(const k in O)h(O[k].object),delete O[k];delete L[G]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const G in L){const O=L[G];for(const k in O)h(O[k].object),delete O[k];delete L[G]}delete n[M.id]}function C(M){for(const L in n){const G=n[L];if(G[M.id]===void 0)continue;const O=G[M.id];for(const k in O)h(O[k].object),delete O[k];delete G[M.id]}}function D(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function u0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function f0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==An&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ci&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function p0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new si,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,y=_*4;let x=f.clippingState||null;l.value=x,x=h(g,d,y,p);for(let P=0;P!==y;++P)x[P]=e[P];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function m0(s){let t=new WeakMap;function e(o,a){return a===Za?o.mapping=Ns:a===Ja&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Za||a===Ja)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tf(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Od extends Nd{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,kc=[.125,.215,.35,.446,.526,.582],Hi=20,pa=new Od,Hc=new Bt;let ma=null,ga=0,va=0,_a=!1;const zi=(1+Math.sqrt(5))/2,ps=1/zi,Vc=[new z(-zi,ps,0),new z(zi,ps,0),new z(-ps,0,zi),new z(ps,0,zi),new z(0,zi,-ps),new z(0,zi,ps),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,va),this._renderer.xr.enabled=_a,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Mr,format:An,colorSpace:ks,depthBuffer:!1},i=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=v0(r,t,e)}return i}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hc),h.toneMapping=Ti,h.autoClear=!1;const p=new On({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Dt(new re,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Hc),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;qr(i,_*y,f>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ns||t.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vc[(i-r-1)%Vc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const f=[];let _=0;for(let C=0;C<Hi;++C){const D=C/v,S=Math.exp(-D*D/2);f.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],P=3*x*(i>y-ws?i-y+ws:0),T=4*(this._cubeSize-x);qr(e,P,T,3*x,2*x),l.setRenderTarget(e),l.render(u,pa)}}function g0(s){const t=[],e=[],n=[];let i=s;const r=s-ws+1+kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ws?l=kc[o-s+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,D=T>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(S,v*g*T),y.set(d,m*g*T);const M=[T,T,T,T,T,T];x.set(M,f*g*T)}const P=new tn;P.setAttribute("position",new xn(_,v)),P.setAttribute("uv",new xn(y,m)),P.setAttribute("faceIndex",new xn(x,f)),t.push(P),i>ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wc(s,t,e){const n=new Ki(s,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function v0(s,t,e){const n=new Float32Array(Hi),i=new z(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function $c(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function qc(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Za||l===Ja,h=l===Ns||l===Us;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Gc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Gc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function y0(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const P=_[y+0],T=_[y+1],C=_[y+2];d.push(P,T,T,C,C,P)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const P=y+0,T=y+1,C=y+2;d.push(P,T,T,C,C,P)}}else return;const m=new(Ad(d)?Id:Ld)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function M0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*v[_];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function S0(s,t,e){const n=new WeakMap,i=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*T*4*u),D=new Rd(C,P,T,u);D.type=Vn,D.needsUpdate=!0;const S=x*4;for(let L=0;L<u;L++){const G=f[L],O=_[L],k=y[L],U=P*T*4*L;for(let B=0;B<G.count;B++){const Z=B*S;g===!0&&(i.fromBufferAttribute(G,B),C[U+Z+0]=i.x,C[U+Z+1]=i.y,C[U+Z+2]=i.z,C[U+Z+3]=0),v===!0&&(i.fromBufferAttribute(O,B),C[U+Z+4]=i.x,C[U+Z+5]=i.y,C[U+Z+6]=i.z,C[U+Z+7]=0),m===!0&&(i.fromBufferAttribute(k,B),C[U+Z+8]=i.x,C[U+Z+9]=i.y,C[U+Z+10]=i.z,C[U+Z+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Pt(P,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function w0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bd extends Ye{constructor(t,e,n,i,r,o,a,l,c,h=Cs){if(h!==Cs&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=ji),n===void 0&&h===Os&&(n=Fs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zd=new Ye,Xc=new Bd(1,1),kd=new Rd,Hd=new hf,Vd=new Ud,Yc=[],jc=[],Kc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Vs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Yc[i];if(r===void 0&&(r=new Float32Array(i),Yc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oo(s,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function E0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function A0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function C0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function R0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Jc.set(n),s.uniformMatrix2fv(this.addr,!1,Jc),ke(e,n)}}function P0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Zc.set(n),s.uniformMatrix3fv(this.addr,!1,Zc),ke(e,n)}}function L0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Kc.set(n),s.uniformMatrix4fv(this.addr,!1,Kc),ke(e,n)}}function I0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function D0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function F0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function B0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function k0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xc.compareFunction=Td,r=Xc):r=zd,e.setTexture2D(t||r,i)}function H0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hd,i)}function V0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vd,i)}function G0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kd,i)}function W0(s){switch(s){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return C0;case 35674:return R0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function $0(s,t){s.uniform1fv(this.addr,t)}function q0(s,t){const e=Vs(t,this.size,2);s.uniform2fv(this.addr,e)}function X0(s,t){const e=Vs(t,this.size,3);s.uniform3fv(this.addr,e)}function Y0(s,t){const e=Vs(t,this.size,4);s.uniform4fv(this.addr,e)}function j0(s,t){const e=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function K0(s,t){const e=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Z0(s,t){const e=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function J0(s,t){s.uniform1iv(this.addr,t)}function Q0(s,t){s.uniform2iv(this.addr,t)}function tg(s,t){s.uniform3iv(this.addr,t)}function eg(s,t){s.uniform4iv(this.addr,t)}function ng(s,t){s.uniform1uiv(this.addr,t)}function ig(s,t){s.uniform2uiv(this.addr,t)}function sg(s,t){s.uniform3uiv(this.addr,t)}function rg(s,t){s.uniform4uiv(this.addr,t)}function og(s,t,e){const n=this.cache,i=t.length,r=Oo(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||zd,r[o])}function ag(s,t,e){const n=this.cache,i=t.length,r=Oo(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hd,r[o])}function lg(s,t,e){const n=this.cache,i=t.length,r=Oo(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Vd,r[o])}function cg(s,t,e){const n=this.cache,i=t.length,r=Oo(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||kd,r[o])}function hg(s){switch(s){case 5126:return $0;case 35664:return q0;case 35665:return X0;case 35666:return Y0;case 35674:return j0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W0(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}}class fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Qc(s,t){s.seq.push(t),s.map[t.id]=t}function pg(s,t,e){const n=s.name,i=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),o=xa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qc(e,c===void 0?new dg(a,s,t):new ug(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new fg(a),Qc(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);pg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function th(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const mg=37297;let gg=0;function vg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const eh=new jt;function _g(s){oe._getMatrix(eh,oe.workingColorSpace,s);const t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Fo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+vg(s.getShaderSource(t),o)}else return i}function xg(s,t){const e=_g(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(s,t){let e;switch(t){case Fu:e="Linear";break;case Ou:e="Reinhard";break;case Bu:e="Cineon";break;case pd:e="ACESFilmic";break;case ku:e="AgX";break;case Hu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new z;function Mg(){oe.getLuminanceCoefficients(Xr);const s=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Sg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fr(s){return s!==""}function ih(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(Eg,Ag)}const Tg=new Map;function Ag(s,t){let e=Jt[t];if(e===void 0){const n=Tg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(s){return s.replace(Cg,Rg)}function Rg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function oh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Us:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fd:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Pg(e),c=Lg(e),h=Ig(e),u=Dg(e),d=Ng(e),p=bg(e),g=Sg(r),v=i.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=Rl(o),o=ih(o,e),o=sh(o,e),a=Rl(a),a=ih(a,e),a=sh(a,e),o=rh(o),a=rh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+o,x=_+f+a,P=th(i,i.VERTEX_SHADER,y),T=th(i,i.FRAGMENT_SHADER,x);i.attachShader(v,P),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(L){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(P).trim(),k=i.getShaderInfoLog(T).trim();let U=!0,B=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,P,T);else{const Z=nh(i,P,"vertex"),H=nh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Z+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||k==="")&&(B=!1);B&&(L.diagnostics={runnable:U,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:f}})}i.deleteShader(P),i.deleteShader(T),D=new vo(i,v),S=wg(i,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,mg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bg(t),e.set(t,n)),n}}class Bg{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function zg(s,t,e,n,i,r,o){const a=new Yl,l=new Og,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,G,O){const k=G.fog,U=O.geometry,B=S.isMeshStandardMaterial?G.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=Z&&Z.mapping===Uo?Z.image.height:null,K=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const dt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ut=dt!==void 0?dt.length:0;let lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let te,et,at,Ct;if(K){const X=Bn[K];te=X.vertexShader,et=X.fragmentShader}else te=S.vertexShader,et=S.fragmentShader,l.update(S),at=l.getVertexShaderID(S),Ct=l.getFragmentShaderID(S);const pt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),$t=O.isInstancedMesh===!0,Kt=O.isBatchedMesh===!0,ye=!!S.map,ne=!!S.matcap,Ce=!!Z,q=!!S.aoMap,De=!!S.lightMap,Zt=!!S.bumpMap,ee=!!S.normalMap,Ft=!!S.displacementMap,de=!!S.emissiveMap,kt=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,j=S.clearcoat>0,nt=S.dispersion>0,ot=S.iridescence>0,it=S.sheen>0,Nt=S.transmission>0,vt=w&&!!S.anisotropyMap,St=j&&!!S.clearcoatMap,ie=j&&!!S.clearcoatNormalMap,ct=j&&!!S.clearcoatRoughnessMap,Tt=ot&&!!S.iridescenceMap,Ht=ot&&!!S.iridescenceThicknessMap,Vt=it&&!!S.sheenColorMap,wt=it&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,qt=!!S.specularColorMap,ue=!!S.specularIntensityMap,V=Nt&&!!S.transmissionMap,gt=Nt&&!!S.thicknessMap,tt=!!S.gradientMap,st=!!S.alphaMap,yt=S.alphaTest>0,_t=!!S.alphaHash,R=!!S.extensions;let F=Ti;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(F=s.toneMapping);const N={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:et,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:Ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&O._colorsTexture!==null,instancing:$t,instancingColor:$t&&O.instanceColor!==null,instancingMorph:$t&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:ne,envMap:Ce,envMapMode:Ce&&Z.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:De,bumpMap:Zt,normalMap:ee,displacementMap:d&&Ft,emissiveMap:de,normalMapObjectSpace:ee&&S.normalMapType===$u,normalMapTangentSpace:ee&&S.normalMapType===Ed,metalnessMap:kt,roughnessMap:I,anisotropy:w,anisotropyMap:vt,clearcoat:j,clearcoatMap:St,clearcoatNormalMap:ie,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:ot,iridescenceMap:Tt,iridescenceThicknessMap:Ht,sheen:it,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:Qt,specularColorMap:qt,specularIntensityMap:ue,transmission:Nt,transmissionMap:V,thicknessMap:gt,gradientMap:tt,opaque:S.transparent===!1&&S.blending===As&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:_t,combine:S.combine,mapUv:ye&&v(S.map.channel),aoMapUv:q&&v(S.aoMap.channel),lightMapUv:De&&v(S.lightMap.channel),bumpMapUv:Zt&&v(S.bumpMap.channel),normalMapUv:ee&&v(S.normalMap.channel),displacementMapUv:Ft&&v(S.displacementMap.channel),emissiveMapUv:de&&v(S.emissiveMap.channel),metalnessMapUv:kt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:vt&&v(S.anisotropyMap.channel),clearcoatMapUv:St&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(S.sheenRoughnessMap.channel),specularMapUv:Qt&&v(S.specularMap.channel),specularColorMapUv:qt&&v(S.specularColorMap.channel),specularIntensityMapUv:ue&&v(S.specularIntensityMap.channel),transmissionMapUv:V&&v(S.transmissionMap.channel),thicknessMapUv:gt&&v(S.thicknessMap.channel),alphaMapUv:st&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ee||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(ye||st),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:F,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:de&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Je,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:R&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return N.vertexUv1s=c.has(1),N.vertexUv2s=c.has(2),N.vertexUv3s=c.has(3),c.clear(),N}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let L;if(M){const G=Bn[M];L=bf.clone(G.uniforms)}else L=S.uniforms;return L}function P(S,M){let L;for(let G=0,O=h.length;G<O;G++){const k=h[G];if(k.cacheKey===M){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Ug(s,M,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:D}}function kg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Hg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ah(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,v,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Hg),n.length>1&&n.sort(d||ah),i.length>1&&i.sort(d||ah)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Vg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new lh,s.set(n,[o])):i>=r.length?(o=new lh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Bt};break;case"SpotLight":e={position:new z,direction:new z,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function Wg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let $g=0;function qg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Xg(s){const t=new Gg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new _e,o=new _e;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,_=0,y=0,x=0,P=0,T=0,C=0;c.sort(qg);for(let S=0,M=c.length;S<M;S++){const L=c[S],G=L.color,O=L.intensity,k=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*O,u+=G.g*O,d+=G.b*O;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],O);C++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=L.shadow.matrix,_++}n.directional[p]=B,p++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(G).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[v]=B;const Z=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=U,x++}v++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(G).multiplyScalar(O),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(O),B.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[f]=B,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==_||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=_,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=C,n.version=$g++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ch(s){const t=new Xg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ch(s),t.set(i,[a])):r>=o.length?(a=new ch(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jg extends Hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kg extends Hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qg(s,t,e){let n=new jl;const i=new Pt,r=new Pt,o=new ve,a=new jg({depthPacking:Wu}),l=new Kg,c={},h=e.maxTextureSize,u={[Ri]:Qe,[Qe]:Ri,[Je]:Je},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let f=this.type;this.render=function(T,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=f!==ii&&this.type===ii,k=f===ii&&this.type!==ii;for(let U=0,B=T.length;U<B;U++){const Z=T[U],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const K=H.getFrameExtents();if(i.multiply(K),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||O===!0||k===!0){const ut=this.type!==ii?{minFilter:dn,magFilter:dn}:{};H.map!==null&&H.map.dispose(),H.map=new Ki(i.x,i.y,ut),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const dt=H.getViewportCount();for(let ut=0;ut<dt;ut++){const lt=H.getViewport(ut);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),G.viewport(o),H.updateMatrices(Z,ut),n=H.getFrustum(),x(C,D,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===ii&&_(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,L)};function _(T,C){const D=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,D,p,v,null)}function y(T,C,D,S){let M=null;const L=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,O=C.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let U=k[O];U===void 0&&(U=M.clone(),k[O]=U,C.addEventListener("dispose",P)),M=U}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ii?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=D}return M}function x(T,C,D,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ii)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const O=t.update(T),k=T.material;if(Array.isArray(k)){const U=O.groups;for(let B=0,Z=U.length;B<Z;B++){const H=U[B],K=k[H.materialIndex];if(K&&K.visible){const dt=y(T,K,S,M);T.onBeforeShadow(s,T,C,D,O,dt,H),s.renderBufferDirect(D,null,O,dt,T,H),T.onAfterShadow(s,T,C,D,O,dt,H)}}}else if(k.visible){const U=y(T,k,S,M);T.onBeforeShadow(s,T,C,D,O,U,null),s.renderBufferDirect(D,null,O,U,T,null),T.onAfterShadow(s,T,C,D,O,U,null)}}const G=T.children;for(let O=0,k=G.length;O<k;O++)x(G[O],C,D,S,M)}function P(T){T.target.removeEventListener("dispose",P);for(const D in c){const S=c[D],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const tv={[Wa]:$a,[qa]:ja,[Xa]:Ka,[Ds]:Ya,[$a]:Wa,[ja]:qa,[Ka]:Xa,[Ya]:Ds};function ev(s,t){function e(){let V=!1;const gt=new ve;let tt=null;const st=new ve(0,0,0,0);return{setMask:function(yt){tt!==yt&&!V&&(s.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){V=yt},setClear:function(yt,_t,R,F,N){N===!0&&(yt*=F,_t*=F,R*=F),gt.set(yt,_t,R,F),st.equals(gt)===!1&&(s.clearColor(yt,_t,R,F),st.copy(gt))},reset:function(){V=!1,tt=null,st.set(-1,0,0,0)}}}function n(){let V=!1,gt=!1,tt=null,st=null,yt=null;return{setReversed:function(_t){if(gt!==_t){const R=t.get("EXT_clip_control");gt?R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT):R.clipControlEXT(R.LOWER_LEFT_EXT,R.NEGATIVE_ONE_TO_ONE_EXT);const F=yt;yt=null,this.setClear(F)}gt=_t},getReversed:function(){return gt},setTest:function(_t){_t?pt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(_t){tt!==_t&&!V&&(s.depthMask(_t),tt=_t)},setFunc:function(_t){if(gt&&(_t=tv[_t]),st!==_t){switch(_t){case Wa:s.depthFunc(s.NEVER);break;case $a:s.depthFunc(s.ALWAYS);break;case qa:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Xa:s.depthFunc(s.EQUAL);break;case Ya:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=_t}},setLocked:function(_t){V=_t},setClear:function(_t){yt!==_t&&(gt&&(_t=1-_t),s.clearDepth(_t),yt=_t)},reset:function(){V=!1,tt=null,st=null,yt=null,gt=!1}}}function i(){let V=!1,gt=null,tt=null,st=null,yt=null,_t=null,R=null,F=null,N=null;return{setTest:function(X){V||(X?pt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(X){gt!==X&&!V&&(s.stencilMask(X),gt=X)},setFunc:function(X,Y,ft){(tt!==X||st!==Y||yt!==ft)&&(s.stencilFunc(X,Y,ft),tt=X,st=Y,yt=ft)},setOp:function(X,Y,ft){(_t!==X||R!==Y||F!==ft)&&(s.stencilOp(X,Y,ft),_t=X,R=Y,F=ft)},setLocked:function(X){V=X},setClear:function(X){N!==X&&(s.clearStencil(X),N=X)},reset:function(){V=!1,gt=null,tt=null,st=null,yt=null,_t=null,R=null,F=null,N=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,_=null,y=null,x=null,P=null,T=null,C=new Bt(0,0,0),D=0,S=!1,M=null,L=null,G=null,O=null,k=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let K=null,dt={};const ut=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),te=new ve().fromArray(ut),et=new ve().fromArray(lt);function at(V,gt,tt,st){const yt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(V,_t),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let R=0;R<tt;R++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(gt+R,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return _t}const Ct={};Ct[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),o.setFunc(Ds),Zt(!1),ee(pc),pt(s.CULL_FACE),q(Ei);function pt(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function zt(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function $t(V,gt){return u[V]!==gt?(s.bindFramebuffer(V,gt),u[V]=gt,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Kt(V,gt){let tt=p,st=!1;if(V){tt=d.get(gt),tt===void 0&&(tt=[],d.set(gt,tt));const yt=V.textures;if(tt.length!==yt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,R=yt.length;_t<R;_t++)tt[_t]=s.COLOR_ATTACHMENT0+_t;tt.length=yt.length,st=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,st=!0);st&&s.drawBuffers(tt)}function ye(V){return g!==V?(s.useProgram(V),g=V,!0):!1}const ne={[ki]:s.FUNC_ADD,[vu]:s.FUNC_SUBTRACT,[_u]:s.FUNC_REVERSE_SUBTRACT};ne[xu]=s.MIN,ne[yu]=s.MAX;const Ce={[Mu]:s.ZERO,[bu]:s.ONE,[Su]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[Ru]:s.SRC_ALPHA_SATURATE,[Au]:s.DST_COLOR,[Eu]:s.DST_ALPHA,[wu]:s.ONE_MINUS_SRC_COLOR,[Ga]:s.ONE_MINUS_SRC_ALPHA,[Cu]:s.ONE_MINUS_DST_COLOR,[Tu]:s.ONE_MINUS_DST_ALPHA,[Pu]:s.CONSTANT_COLOR,[Lu]:s.ONE_MINUS_CONSTANT_COLOR,[Iu]:s.CONSTANT_ALPHA,[Du]:s.ONE_MINUS_CONSTANT_ALPHA};function q(V,gt,tt,st,yt,_t,R,F,N,X){if(V===Ei){v===!0&&(zt(s.BLEND),v=!1);return}if(v===!1&&(pt(s.BLEND),v=!0),V!==gu){if(V!==m||X!==S){if((f!==ki||x!==ki)&&(s.blendEquation(s.FUNC_ADD),f=ki,x=ki),X)switch(V){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mc:s.blendFunc(s.ONE,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,y=null,P=null,T=null,C.set(0,0,0),D=0,m=V,S=X}return}yt=yt||gt,_t=_t||tt,R=R||st,(gt!==f||yt!==x)&&(s.blendEquationSeparate(ne[gt],ne[yt]),f=gt,x=yt),(tt!==_||st!==y||_t!==P||R!==T)&&(s.blendFuncSeparate(Ce[tt],Ce[st],Ce[_t],Ce[R]),_=tt,y=st,P=_t,T=R),(F.equals(C)===!1||N!==D)&&(s.blendColor(F.r,F.g,F.b,N),C.copy(F),D=N),m=V,S=!1}function De(V,gt){V.side===Je?zt(s.CULL_FACE):pt(s.CULL_FACE);let tt=V.side===Qe;gt&&(tt=!tt),Zt(tt),V.blending===As&&V.transparent===!1?q(Ei):q(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const st=V.stencilWrite;a.setTest(st),st&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(V){M!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),M=V)}function ee(V){V!==pu?(pt(s.CULL_FACE),V!==L&&(V===pc?s.cullFace(s.BACK):V===mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),L=V}function Ft(V){V!==G&&(B&&s.lineWidth(V),G=V)}function de(V,gt,tt){V?(pt(s.POLYGON_OFFSET_FILL),(O!==gt||k!==tt)&&(s.polygonOffset(gt,tt),O=gt,k=tt)):zt(s.POLYGON_OFFSET_FILL)}function kt(V){V?pt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function I(V){V===void 0&&(V=s.TEXTURE0+U-1),K!==V&&(s.activeTexture(V),K=V)}function w(V,gt,tt){tt===void 0&&(K===null?tt=s.TEXTURE0+U-1:tt=K);let st=dt[tt];st===void 0&&(st={type:void 0,texture:void 0},dt[tt]=st),(st.type!==V||st.texture!==gt)&&(K!==tt&&(s.activeTexture(tt),K=tt),s.bindTexture(V,gt||Ct[V]),st.type=V,st.texture=gt)}function j(){const V=dt[K];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(V){te.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),te.copy(V))}function wt(V){et.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),et.copy(V))}function Qt(V,gt){let tt=c.get(gt);tt===void 0&&(tt=new WeakMap,c.set(gt,tt));let st=tt.get(V);st===void 0&&(st=s.getUniformBlockIndex(gt,V.name),tt.set(V,st))}function qt(V,gt){const st=c.get(gt).get(V);l.get(gt)!==st&&(s.uniformBlockBinding(gt,st,V.__bindingPointIndex),l.set(gt,st))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,dt={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,_=null,y=null,x=null,P=null,T=null,C=new Bt(0,0,0),D=0,S=!1,M=null,L=null,G=null,O=null,k=null,te.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:zt,bindFramebuffer:$t,drawBuffers:Kt,useProgram:ye,setBlending:q,setMaterial:De,setFlipSided:Zt,setCullFace:ee,setLineWidth:Ft,setPolygonOffset:de,setScissorTest:kt,activeTexture:I,bindTexture:w,unbindTexture:j,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:Tt,texImage3D:Ht,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:ie,texStorage3D:ct,texSubImage2D:it,texSubImage3D:Nt,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:Vt,viewport:wt,reset:ue}}function hh(s,t,e,n){const i=nv(n);switch(e){case xd:return s*t;case Md:return s*t;case bd:return s*t*2;case Gl:return s*t/i.components*i.byteLength;case Wl:return s*t/i.components*i.byteLength;case Sd:return s*t*2/i.components*i.byteLength;case $l:return s*t*2/i.components*i.byteLength;case yd:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case ql:return s*t*4/i.components*i.byteLength;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(t,8)/4;case el:case il:return Math.max(s,8)*Math.max(t,8)/2;case rl:case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mo:case bl:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wd:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nv(s){switch(s){case ci:case gd:return{byteLength:1,components:1};case gr:case vd:case Mr:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case ji:case kl:case Vn:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function iv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return p?new OffscreenCanvas(I,w):Eo("canvas")}function v(I,w,j){let nt=1;const ot=kt(I);if((ot.width>j||ot.height>j)&&(nt=j/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const it=Math.floor(nt*ot.width),Nt=Math.floor(nt*ot.height);u===void 0&&(u=g(it,Nt));const vt=w?g(it,Nt):u;return vt.width=it,vt.height=Nt,vt.getContext("2d").drawImage(I,0,0,it,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+it+"x"+Nt+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,w,j,nt,ot=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=w;if(w===s.RED&&(j===s.FLOAT&&(it=s.R32F),j===s.HALF_FLOAT&&(it=s.R16F),j===s.UNSIGNED_BYTE&&(it=s.R8)),w===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(it=s.R8UI),j===s.UNSIGNED_SHORT&&(it=s.R16UI),j===s.UNSIGNED_INT&&(it=s.R32UI),j===s.BYTE&&(it=s.R8I),j===s.SHORT&&(it=s.R16I),j===s.INT&&(it=s.R32I)),w===s.RG&&(j===s.FLOAT&&(it=s.RG32F),j===s.HALF_FLOAT&&(it=s.RG16F),j===s.UNSIGNED_BYTE&&(it=s.RG8)),w===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(it=s.RG8UI),j===s.UNSIGNED_SHORT&&(it=s.RG16UI),j===s.UNSIGNED_INT&&(it=s.RG32UI),j===s.BYTE&&(it=s.RG8I),j===s.SHORT&&(it=s.RG16I),j===s.INT&&(it=s.RG32I)),w===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(it=s.RGB8UI),j===s.UNSIGNED_SHORT&&(it=s.RGB16UI),j===s.UNSIGNED_INT&&(it=s.RGB32UI),j===s.BYTE&&(it=s.RGB8I),j===s.SHORT&&(it=s.RGB16I),j===s.INT&&(it=s.RGB32I)),w===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),j===s.UNSIGNED_INT&&(it=s.RGBA32UI),j===s.BYTE&&(it=s.RGBA8I),j===s.SHORT&&(it=s.RGBA16I),j===s.INT&&(it=s.RGBA32I)),w===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),w===s.RGBA){const Nt=ot?Fo:oe.getTransfer(nt);j===s.FLOAT&&(it=s.RGBA32F),j===s.HALF_FLOAT&&(it=s.RGBA16F),j===s.UNSIGNED_BYTE&&(it=Nt===pe?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(I,w){let j;return I?w===null||w===ji||w===Fs?j=s.DEPTH24_STENCIL8:w===Vn?j=s.DEPTH32F_STENCIL8:w===gr&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ji||w===Fs?j=s.DEPTH_COMPONENT24:w===Vn?j=s.DEPTH_COMPONENT32F:w===gr&&(j=s.DEPTH_COMPONENT16),j}function P(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==Hn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),D(w),w.isVideoTexture&&h.delete(w)}function C(I){const w=I.target;w.removeEventListener("dispose",C),M(w)}function D(I){const w=n.get(I);if(w.__webglInit===void 0)return;const j=I.source,nt=d.get(j);if(nt){const ot=nt[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(I),Object.keys(nt).length===0&&d.delete(j)}n.remove(I)}function S(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const j=I.source,nt=d.get(j);delete nt[w.__cacheKey],o.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(w.__webglFramebuffer[nt]))for(let ot=0;ot<w.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(w.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(w.__webglFramebuffer[nt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[nt])}else{if(Array.isArray(w.__webglFramebuffer))for(let nt=0;nt<w.__webglFramebuffer.length;nt++)s.deleteFramebuffer(w.__webglFramebuffer[nt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let nt=0;nt<w.__webglColorRenderbuffer.length;nt++)w.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[nt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=I.textures;for(let nt=0,ot=j.length;nt<ot;nt++){const it=n.get(j[nt]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(j[nt])}n.remove(I)}let L=0;function G(){L=0}function O(){const I=L;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),L+=1,I}function k(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function U(I,w){const j=n.get(I);if(I.isVideoTexture&&Ft(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){const nt=I.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,I,w);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+w)}function B(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){et(j,I,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+w)}function Z(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){et(j,I,w);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+w)}function H(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){at(j,I,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+w)}const K={[Qa]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[tl]:s.MIRRORED_REPEAT},dt={[dn]:s.NEAREST,[Vu]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[$o]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},ut={[qu]:s.NEVER,[Ju]:s.ALWAYS,[Xu]:s.LESS,[Td]:s.LEQUAL,[Yu]:s.EQUAL,[Zu]:s.GEQUAL,[ju]:s.GREATER,[Ku]:s.NOTEQUAL};function lt(I,w){if(w.type===Vn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Hn||w.magFilter===$o||w.magFilter===Ar||w.magFilter===Xi||w.minFilter===Hn||w.minFilter===$o||w.minFilter===Ar||w.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,K[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,K[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,K[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,dt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,dt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ut[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===dn||w.minFilter!==Ar&&w.minFilter!==Xi||w.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function te(I,w){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const nt=w.source;let ot=d.get(nt);ot===void 0&&(ot={},d.set(nt,ot));const it=k(w);if(it!==I.__cacheKey){ot[it]===void 0&&(ot[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ot[it].usedTimes++;const Nt=ot[I.__cacheKey];Nt!==void 0&&(ot[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&S(w)),I.__cacheKey=it,I.__webglTexture=ot[it].texture}return j}function et(I,w,j){let nt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=te(I,w),it=w.source;e.bindTexture(nt,I.__webglTexture,s.TEXTURE0+j);const Nt=n.get(it);if(it.version!==Nt.__version||ot===!0){e.activeTexture(s.TEXTURE0+j);const vt=oe.getPrimaries(oe.workingColorSpace),St=w.colorSpace===Mi?null:oe.getPrimaries(w.colorSpace),ie=w.colorSpace===Mi||vt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ct=v(w.image,!1,i.maxTextureSize);ct=de(w,ct);const Tt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type);let Vt=y(w.internalFormat,Tt,Ht,w.colorSpace,w.isVideoTexture);lt(nt,w);let wt;const Qt=w.mipmaps,qt=w.isVideoTexture!==!0,ue=Nt.__version===void 0||ot===!0,V=it.dataReady,gt=P(w,ct);if(w.isDepthTexture)Vt=x(w.format===Os,w.type),ue&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Vt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Vt,ct.width,ct.height,0,Tt,Ht,null));else if(w.isDataTexture)if(Qt.length>0){qt&&ue&&e.texStorage2D(s.TEXTURE_2D,gt,Vt,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)wt=Qt[tt],qt?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,tt,Vt,wt.width,wt.height,0,Tt,Ht,wt.data);w.generateMipmaps=!1}else qt?(ue&&e.texStorage2D(s.TEXTURE_2D,gt,Vt,ct.width,ct.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,Ht,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,ct.width,ct.height,0,Tt,Ht,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Vt,Qt[0].width,Qt[0].height,ct.depth);for(let tt=0,st=Qt.length;tt<st;tt++)if(wt=Qt[tt],w.format!==An)if(Tt!==null)if(qt){if(V)if(w.layerUpdates.size>0){const yt=hh(wt.width,wt.height,w.format,w.type);for(const _t of w.layerUpdates){const R=wt.data.subarray(_t*yt/wt.data.BYTES_PER_ELEMENT,(_t+1)*yt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,_t,wt.width,wt.height,1,Tt,R)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,ct.depth,Tt,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Vt,wt.width,wt.height,ct.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,ct.depth,Tt,Ht,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Vt,wt.width,wt.height,ct.depth,0,Tt,Ht,wt.data)}else{qt&&ue&&e.texStorage2D(s.TEXTURE_2D,gt,Vt,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)wt=Qt[tt],w.format!==An?Tt!==null?qt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Vt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,wt.width,wt.height,Tt,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,tt,Vt,wt.width,wt.height,0,Tt,Ht,wt.data)}else if(w.isDataArrayTexture)if(qt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Vt,ct.width,ct.height,ct.depth),V)if(w.layerUpdates.size>0){const tt=hh(ct.width,ct.height,w.format,w.type);for(const st of w.layerUpdates){const yt=ct.data.subarray(st*tt/ct.data.BYTES_PER_ELEMENT,(st+1)*tt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,Tt,Ht,yt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ht,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,ct.width,ct.height,ct.depth,0,Tt,Ht,ct.data);else if(w.isData3DTexture)qt?(ue&&e.texStorage3D(s.TEXTURE_3D,gt,Vt,ct.width,ct.height,ct.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ht,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,ct.width,ct.height,ct.depth,0,Tt,Ht,ct.data);else if(w.isFramebufferTexture){if(ue)if(qt)e.texStorage2D(s.TEXTURE_2D,gt,Vt,ct.width,ct.height);else{let tt=ct.width,st=ct.height;for(let yt=0;yt<gt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Vt,tt,st,0,Tt,Ht,null),tt>>=1,st>>=1}}else if(Qt.length>0){if(qt&&ue){const tt=kt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Vt,tt.width,tt.height)}for(let tt=0,st=Qt.length;tt<st;tt++)wt=Qt[tt],qt?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Tt,Ht,wt):e.texImage2D(s.TEXTURE_2D,tt,Vt,Tt,Ht,wt);w.generateMipmaps=!1}else if(qt){if(ue){const tt=kt(ct);e.texStorage2D(s.TEXTURE_2D,gt,Vt,tt.width,tt.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Ht,ct)}else e.texImage2D(s.TEXTURE_2D,0,Vt,Tt,Ht,ct);m(w)&&f(nt),Nt.__version=it.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function at(I,w,j){if(w.image.length!==6)return;const nt=te(I,w),ot=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);const it=n.get(ot);if(ot.version!==it.__version||nt===!0){e.activeTexture(s.TEXTURE0+j);const Nt=oe.getPrimaries(oe.workingColorSpace),vt=w.colorSpace===Mi?null:oe.getPrimaries(w.colorSpace),St=w.colorSpace===Mi||Nt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const ie=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let st=0;st<6;st++)!ie&&!ct?Tt[st]=v(w.image[st],!0,i.maxCubemapSize):Tt[st]=ct?w.image[st].image:w.image[st],Tt[st]=de(w,Tt[st]);const Ht=Tt[0],Vt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),Qt=y(w.internalFormat,Vt,wt,w.colorSpace),qt=w.isVideoTexture!==!0,ue=it.__version===void 0||nt===!0,V=ot.dataReady;let gt=P(w,Ht);lt(s.TEXTURE_CUBE_MAP,w);let tt;if(ie){qt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Ht.width,Ht.height);for(let st=0;st<6;st++){tt=Tt[st].mipmaps;for(let yt=0;yt<tt.length;yt++){const _t=tt[yt];w.format!==An?Vt!==null?qt?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,_t.width,_t.height,Vt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,_t.width,_t.height,Vt,wt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,_t.width,_t.height,0,Vt,wt,_t.data)}}}else{if(tt=w.mipmaps,qt&&ue){tt.length>0&&gt++;const st=kt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt[st].width,Tt[st].height,Vt,wt,Tt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Tt[st].width,Tt[st].height,0,Vt,wt,Tt[st].data);for(let yt=0;yt<tt.length;yt++){const R=tt[yt].image[st].image;qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,R.width,R.height,Vt,wt,R.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,R.width,R.height,0,Vt,wt,R.data)}}else{qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,wt,Tt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Vt,wt,Tt[st]);for(let yt=0;yt<tt.length;yt++){const _t=tt[yt];qt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Vt,wt,_t.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,Vt,wt,_t.image[st])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),it.__version=ot.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ct(I,w,j,nt,ot,it){const Nt=r.convert(j.format,j.colorSpace),vt=r.convert(j.type),St=y(j.internalFormat,Nt,vt,j.colorSpace),ie=n.get(w),ct=n.get(j);if(ct.__renderTarget=w,!ie.__hasExternalTextures){const Tt=Math.max(1,w.width>>it),Ht=Math.max(1,w.height>>it);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,St,Tt,Ht,w.depth,0,Nt,vt,null):e.texImage2D(ot,it,St,Tt,Ht,0,Nt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,ct.__webglTexture,0,Zt(w)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,ct.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(I,w,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const nt=w.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,it=x(w.stencilBuffer,ot),Nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Zt(w);ee(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,it,w.width,w.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,it,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,I)}else{const nt=w.textures;for(let ot=0;ot<nt.length;ot++){const it=nt[ot],Nt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),St=y(it.internalFormat,Nt,vt,it.colorSpace),ie=Zt(w);j&&ee(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,St,w.width,w.height):ee(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,St,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,St,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(w.depthTexture);nt.__renderTarget=w,(!nt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const ot=nt.__webglTexture,it=Zt(w);if(w.depthTexture.format===Cs)ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(w.depthTexture.format===Os)ee(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function $t(I){const w=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const nt=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),nt){const ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=nt}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");zt(w.__webglFramebuffer,I)}else if(j){w.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[nt]),w.__webglDepthbuffer[nt]===void 0)w.__webglDepthbuffer[nt]=s.createRenderbuffer(),pt(w.__webglDepthbuffer[nt],I,!1);else{const ot=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,it)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),pt(w.__webglDepthbuffer,I,!1);else{const nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(I,w,j){const nt=n.get(I);w!==void 0&&Ct(nt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&$t(I)}function ye(I){const w=I.texture,j=n.get(I),nt=n.get(w);I.addEventListener("dispose",C);const ot=I.textures,it=I.isWebGLCubeRenderTarget===!0,Nt=ot.length>1;if(Nt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=w.version,o.memory.textures++),it){j.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[vt]=[];for(let St=0;St<w.mipmaps.length;St++)j.__webglFramebuffer[vt][St]=s.createFramebuffer()}else j.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let vt=0;vt<w.mipmaps.length;vt++)j.__webglFramebuffer[vt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let vt=0,St=ot.length;vt<St;vt++){const ie=n.get(ot[vt]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ee(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){const St=ot[vt];j.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[vt]);const ie=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),Tt=y(St.internalFormat,ie,ct,St.colorSpace,I.isXRRenderTarget===!0),Ht=Zt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Tt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,j.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(j.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),lt(s.TEXTURE_CUBE_MAP,w);for(let vt=0;vt<6;vt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Ct(j.__webglFramebuffer[vt][St],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else Ct(j.__webglFramebuffer[vt],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(w)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let vt=0,St=ot.length;vt<St;vt++){const ie=ot[vt],ct=n.get(ie);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),lt(s.TEXTURE_2D,ie),Ct(j.__webglFramebuffer,I,ie,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),m(ie)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),lt(vt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)Ct(j.__webglFramebuffer[St],I,w,s.COLOR_ATTACHMENT0,vt,St);else Ct(j.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,vt,0);m(w)&&f(vt),e.unbindTexture()}I.depthBuffer&&$t(I)}function ne(I){const w=I.textures;for(let j=0,nt=w.length;j<nt;j++){const ot=w[j];if(m(ot)){const it=_(I),Nt=n.get(ot).__webglTexture;e.bindTexture(it,Nt),f(it),e.unbindTexture()}}}const Ce=[],q=[];function De(I){if(I.samples>0){if(ee(I)===!1){const w=I.textures,j=I.width,nt=I.height;let ot=s.COLOR_BUFFER_BIT;const it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=n.get(I),vt=w.length>1;if(vt)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let St=0;St<w.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);const ie=n.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,j,nt,0,0,j,nt,ot,s.NEAREST),l===!0&&(Ce.length=0,q.length=0,Ce.push(s.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ce.push(it),q.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);const ie=n.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,ie,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Zt(I){return Math.min(i.maxSamples,I.samples)}function ee(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ft(I){const w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function de(I,w){const j=I.colorSpace,nt=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==ks&&j!==Mi&&(oe.getTransfer(j)===pe?(nt!==An||ot!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Kt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ee}function sv(s,t){function e(n,i=Mi){let r;const o=oe.getTransfer(i);if(n===ci)return s.UNSIGNED_BYTE;if(n===Hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gd)return s.BYTE;if(n===vd)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===kl)return s.INT;if(n===ji)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===Mr)return s.HALF_FLOAT;if(n===xd)return s.ALPHA;if(n===yd)return s.RGB;if(n===An)return s.RGBA;if(n===Md)return s.LUMINANCE;if(n===bd)return s.LUMINANCE_ALPHA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===Wl)return s.RED_INTEGER;if(n===Sd)return s.RG;if(n===$l)return s.RG_INTEGER;if(n===ql)return s.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===cl||n===hl||n===dl||n===ul||n===fl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===bl||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wd||n===wl||n===El||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class rv extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qe extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ov={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends Ji{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new cv,m=e.getContextAttributes();let f=null,_=null;const y=[],x=[],P=new Pt;let T=null;const C=new hn;C.viewport=new ve;const D=new hn;D.viewport=new ve;const S=[C,D],M=new rv;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let at=y[et];return at===void 0&&(at=new ya,y[et]=at),at.getTargetRaySpace()},this.getControllerGrip=function(et){let at=y[et];return at===void 0&&(at=new ya,y[et]=at),at.getGripSpace()},this.getHand=function(et){let at=y[et];return at===void 0&&(at=new ya,y[et]=at),at.getHandSpace()};function O(et){const at=x.indexOf(et.inputSource);if(at===-1)return;const Ct=y[at];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||o),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",U);for(let et=0;et<y.length;et++){const at=x[et];at!==null&&(x[et]=null,y[et].disconnect(at))}L=null,G=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,_=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ki(p.framebufferWidth,p.framebufferHeight,{format:An,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Ct=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Os:Cs,Ct=m.stencil?Fs:ji);const zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ki(d.textureWidth,d.textureHeight,{format:An,type:ci,depthTexture:new Bd(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function U(et){for(let at=0;at<et.removed.length;at++){const Ct=et.removed[at],pt=x.indexOf(Ct);pt>=0&&(x[pt]=null,y[pt].disconnect(Ct))}for(let at=0;at<et.added.length;at++){const Ct=et.added[at];let pt=x.indexOf(Ct);if(pt===-1){for(let $t=0;$t<y.length;$t++)if($t>=x.length){x.push(Ct),pt=$t;break}else if(x[$t]===null){x[$t]=Ct,pt=$t;break}if(pt===-1)break}const zt=y[pt];zt&&zt.connect(Ct)}}const B=new z,Z=new z;function H(et,at,Ct){B.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(Ct.matrixWorld);const pt=B.distanceTo(Z),zt=at.projectionMatrix.elements,$t=Ct.projectionMatrix.elements,Kt=zt[14]/(zt[10]-1),ye=zt[14]/(zt[10]+1),ne=(zt[9]+1)/zt[5],Ce=(zt[9]-1)/zt[5],q=(zt[8]-1)/zt[0],De=($t[8]+1)/$t[0],Zt=Kt*q,ee=Kt*De,Ft=pt/(-q+De),de=Ft*-q;if(at.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(de),et.translateZ(Ft),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const kt=Kt+Ft,I=ye+Ft,w=Zt-de,j=ee+(pt-de),nt=ne*ye/I*kt,ot=Ce*ye/I*kt;et.projectionMatrix.makePerspective(w,j,nt,ot,kt,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function K(et,at){at===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(at.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let at=et.near,Ct=et.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),M.near=D.near=C.near=at,M.far=D.far=C.far=Ct,(L!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,G=M.far),C.layers.mask=et.layers.mask|2,D.layers.mask=et.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;const pt=et.parent,zt=M.cameras;K(M,pt);for(let $t=0;$t<zt.length;$t++)K(zt[$t],pt);zt.length===2?H(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),dt(et,M,pt)};function dt(et,at,Ct){Ct===null?et.matrix.copy(at.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(at.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Cl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ut=null;function lt(et,at){if(h=at.getViewerPose(c||o),g=at,h!==null){const Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let pt=!1;Ct.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let $t=0;$t<Ct.length;$t++){const Kt=Ct[$t];let ye=null;if(p!==null)ye=p.getViewport(Kt);else{const Ce=u.getViewSubImage(d,Kt);ye=Ce.viewport,$t===0&&(t.setRenderTargetTextures(_,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(_))}let ne=S[$t];ne===void 0&&(ne=new hn,ne.layers.enable($t),ne.viewport=new ve,S[$t]=ne),ne.matrix.fromArray(Kt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Kt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ye.x,ye.y,ye.width,ye.height),$t===0&&(M.matrix.copy(ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(ne)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const $t=u.getDepthInformation(Ct[0]);$t&&$t.isValid&&$t.texture&&v.init(t,$t,i.renderState)}}for(let Ct=0;Ct<y.length;Ct++){const pt=x[Ct],zt=y[Ct];pt!==null&&zt!==void 0&&zt.update(pt,at,c||o)}ut&&ut(et,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const te=new Fd;te.setAnimationLoop(lt),this.setAnimationLoop=function(et){ut=et},this.dispose=function(){}}}const Oi=new Wn,dv=new _e;function uv(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(_,P);const T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){const y=u();_.__bindingPointIndex=y;const x=s.createBuffer(),P=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(p(L,T,S,P)===!0){const G=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let U=0;U<O.length;U++){const B=O[U],Z=v(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,G+k,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,y,x,P){const T=_.value,C=y+"_"+x;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{const D=P[C];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return P[C]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(_){const y=_.uniforms;let x=0;const P=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=S.length;M<L;M++){const G=S[M],O=Array.isArray(G.value)?G.value:[G.value];for(let k=0,U=O.length;k<U;k++){const B=O[k],Z=v(B),H=x%P,K=H%Z.boundary,dt=H+K;x+=K,dt!==0&&P-dt<Z.storage&&(x+=P-dt),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Z.storage}}}const T=x%P;return T>0&&(x+=P-T),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class pv{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let P=!1,T=0,C=0,D=null,S=-1,M=null;const L=new ve,G=new ve;let O=null;const k=new Bt(0);let U=0,B=e.width,Z=e.height,H=1,K=null,dt=null;const ut=new ve(0,0,B,Z),lt=new ve(0,0,B,Z);let te=!1;const et=new jl;let at=!1,Ct=!1;const pt=new _e,zt=new _e,$t=new z,Kt=new ve,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Ce(){return D===null?H:1}let q=n;function De(E,W){return e.getContext(E,W)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),q===null){const W="webgl2";if(q=De(W,E),q===null)throw De(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Zt,ee,Ft,de,kt,I,w,j,nt,ot,it,Nt,vt,St,ie,ct,Tt,Ht,Vt,wt,Qt,qt,ue,V;function gt(){Zt=new x0(q),Zt.init(),qt=new sv(q,Zt),ee=new f0(q,Zt,t,qt),Ft=new ev(q,Zt),ee.reverseDepthBuffer&&d&&Ft.buffers.depth.setReversed(!0),de=new b0(q),kt=new kg,I=new iv(q,Zt,Ft,kt,ee,qt,de),w=new m0(x),j=new _0(x),nt=new Rf(q),ue=new d0(q,nt),ot=new y0(q,nt,de,ue),it=new w0(q,ot,nt,de),Vt=new S0(q,ee,I),ct=new p0(kt),Nt=new zg(x,w,j,Zt,ee,ue,ct),vt=new uv(x,kt),St=new Vg,ie=new Yg(Zt),Ht=new h0(x,w,j,Ft,it,p,l),Tt=new Qg(x,it,ee),V=new fv(q,de,ee,Ft),wt=new u0(q,Zt,de),Qt=new M0(q,Zt,de),de.programs=Nt.programs,x.capabilities=ee,x.extensions=Zt,x.properties=kt,x.renderLists=St,x.shadowMap=Tt,x.state=Ft,x.info=de}gt();const tt=new hv(x,q);this.xr=tt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const E=Zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,W,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=W,e.width=Math.floor(E*H),e.height=Math.floor(W*H),J===!0&&(e.style.width=E+"px",e.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(B*H,Z*H).floor()},this.setDrawingBufferSize=function(E,W,J){B=E,Z=W,H=J,e.width=Math.floor(E*J),e.height=Math.floor(W*J),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,W,J,Q){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,W,J,Q),Ft.viewport(L.copy(ut).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,W,J,Q){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,W,J,Q),Ft.scissor(G.copy(lt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){Ft.setScissorTest(te=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,W=!0,J=!0){let Q=0;if(E){let $=!1;if(D!==null){const ht=D.texture.format;$=ht===ql||ht===$l||ht===Wl}if($){const ht=D.texture.type,xt=ht===ci||ht===ji||ht===gr||ht===Fs||ht===Hl||ht===Vl,Lt=Ht.getClearColor(),At=Ht.getClearAlpha(),Gt=Lt.r,Xt=Lt.g,Ut=Lt.b;xt?(g[0]=Gt,g[1]=Xt,g[2]=Ut,g[3]=At,q.clearBufferuiv(q.COLOR,0,g)):(v[0]=Gt,v[1]=Xt,v[2]=Ut,v[3]=At,q.clearBufferiv(q.COLOR,0,v))}else Q|=q.COLOR_BUFFER_BIT}W&&(Q|=q.DEPTH_BUFFER_BIT),J&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),ie.dispose(),kt.dispose(),w.dispose(),j.dispose(),it.dispose(),ue.dispose(),V.dispose(),Nt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Rt),tt.removeEventListener("sessionend",Wt),se.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=de.autoReset,W=Tt.enabled,J=Tt.autoUpdate,Q=Tt.needsUpdate,$=Tt.type;gt(),de.autoReset=E,Tt.enabled=W,Tt.autoUpdate=J,Tt.needsUpdate=Q,Tt.type=$}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function R(E){const W=E.target;W.removeEventListener("dispose",R),F(W)}function F(E){N(E),kt.remove(E)}function N(E){const W=kt.get(E).programs;W!==void 0&&(W.forEach(function(J){Nt.releaseProgram(J)}),E.isShaderMaterial&&Nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,J,Q,$,ht){W===null&&(W=ye);const xt=$.isMesh&&$.matrixWorld.determinant()<0,Lt=Tr(E,W,J,Q,$);Ft.setMaterial(Q,xt);let At=J.index,Gt=1;if(Q.wireframe===!0){if(At=ot.getWireframeAttribute(J),At===void 0)return;Gt=2}const Xt=J.drawRange,Ut=J.attributes.position;let ae=Xt.start*Gt,Me=(Xt.start+Xt.count)*Gt;ht!==null&&(ae=Math.max(ae,ht.start*Gt),Me=Math.min(Me,(ht.start+ht.count)*Gt)),At!==null?(ae=Math.max(ae,0),Me=Math.min(Me,At.count)):Ut!=null&&(ae=Math.max(ae,0),Me=Math.min(Me,Ut.count));const be=Me-ae;if(be<0||be===1/0)return;ue.setup($,Q,Lt,J,At);let nn,ce=wt;if(At!==null&&(nn=nt.get(At),ce=Qt,ce.setIndex(nn)),$.isMesh)Q.wireframe===!0?(Ft.setLineWidth(Q.wireframeLinewidth*Ce()),ce.setMode(q.LINES)):ce.setMode(q.TRIANGLES);else if($.isLine){let Ot=Q.linewidth;Ot===void 0&&(Ot=1),Ft.setLineWidth(Ot*Ce()),$.isLineSegments?ce.setMode(q.LINES):$.isLineLoop?ce.setMode(q.LINE_LOOP):ce.setMode(q.LINE_STRIP)}else $.isPoints?ce.setMode(q.POINTS):$.isSprite&&ce.setMode(q.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ce.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ot=$._multiDrawStarts,$n=$._multiDrawCounts,he=$._multiDrawCount,yn=At?nt.get(At).bytesPerElement:1,ts=kt.get(Q).currentProgram.getUniforms();for(let on=0;on<he;on++)ts.setValue(q,"_gl_DrawID",on),ce.render(Ot[on]/yn,$n[on])}else if($.isInstancedMesh)ce.renderInstances(ae,be,$.count);else if(J.isInstancedBufferGeometry){const Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$n=Math.min(J.instanceCount,Ot);ce.renderInstances(ae,be,$n)}else ce.render(ae,be)};function X(E,W,J){E.transparent===!0&&E.side===Je&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,Rn(E,W,J),E.side=Ri,E.needsUpdate=!0,Rn(E,W,J),E.side=Je):Rn(E,W,J)}this.compile=function(E,W,J=null){J===null&&(J=E),f=ie.get(J),f.init(W),y.push(f),J.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),E!==J&&E.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();const Q=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ht=$.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){const Lt=ht[xt];X(Lt,J,$),Q.add(Lt)}else X(ht,J,$),Q.add(ht)}),y.pop(),f=null,Q},this.compileAsync=function(E,W,J=null){const Q=this.compile(E,W,J);return new Promise($=>{function ht(){if(Q.forEach(function(xt){kt.get(xt).currentProgram.isReady()&&Q.delete(xt)}),Q.size===0){$(E);return}setTimeout(ht,10)}Zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Y=null;function ft(E){Y&&Y(E)}function Rt(){se.stop()}function Wt(){se.start()}const se=new Fd;se.setAnimationLoop(ft),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(E){Y=E,tt.setAnimationLoop(E),E===null?se.stop():se.start()},tt.addEventListener("sessionstart",Rt),tt.addEventListener("sessionend",Wt),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,W,D),f=ie.get(E,y.length),f.init(W),y.push(f),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(zt),Ct=this.localClippingEnabled,at=ct.init(this.clippingPlanes,Ct),m=St.get(E,_.length),m.init(),_.push(m),tt.enabled===!0&&tt.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Le(ht,W,-1/0,x.sortObjects)}Le(E,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,dt),ne=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ne&&Ht.addToRenderList(m,E),this.info.render.frame++,at===!0&&ct.beginShadows();const J=f.state.shadowsArray;Tt.render(J,E,W),at===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,$=m.transmissive;if(f.setupLights(),W.isArrayCamera){const ht=W.cameras;if($.length>0)for(let xt=0,Lt=ht.length;xt<Lt;xt++){const At=ht[xt];Re(Q,$,E,At)}ne&&Ht.render(E);for(let xt=0,Lt=ht.length;xt<Lt;xt++){const At=ht[xt];fn(m,E,At,At.viewport)}}else $.length>0&&Re(Q,$,E,W),ne&&Ht.render(E),fn(m,E,W);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,W),ue.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],at===!0&&ct.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Le(E,W,J,Q){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){Q&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);const xt=it.update(E),Lt=E.material;Lt.visible&&m.push(E,xt,Lt,J,Kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const xt=it.update(E),Lt=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Kt.copy(xt.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(Lt)){const At=xt.groups;for(let Gt=0,Xt=At.length;Gt<Xt;Gt++){const Ut=At[Gt],ae=Lt[Ut.materialIndex];ae&&ae.visible&&m.push(E,xt,ae,J,Kt.z,Ut)}}else Lt.visible&&m.push(E,xt,Lt,J,Kt.z,null)}}const ht=E.children;for(let xt=0,Lt=ht.length;xt<Lt;xt++)Le(ht[xt],W,J,Q)}function fn(E,W,J,Q){const $=E.opaque,ht=E.transmissive,xt=E.transparent;f.setupLightsView(J),at===!0&&ct.setGlobalState(x.clippingPlanes,J),Q&&Ft.viewport(L.copy(Q)),$.length>0&&fe($,W,J),ht.length>0&&fe(ht,W,J),xt.length>0&&fe(xt,W,J),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Re(E,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new Ki(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Mr:ci,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ht=f.state.transmissionRenderTarget[Q.id],xt=Q.viewport||L;ht.setSize(xt.z,xt.w);const Lt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(k),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Ht.render(J);const At=x.toneMapping;x.toneMapping=Ti;const Gt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),at===!0&&ct.setGlobalState(x.clippingPlanes,Q),fe(E,J,Q),I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ut=0,ae=W.length;Ut<ae;Ut++){const Me=W[Ut],be=Me.object,nn=Me.geometry,ce=Me.material,Ot=Me.group;if(ce.side===Je&&be.layers.test(Q.layers)){const $n=ce.side;ce.side=Qe,ce.needsUpdate=!0,en(be,J,Q,nn,ce,Ot),ce.side=$n,ce.needsUpdate=!0,Xt=!0}}Xt===!0&&(I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht))}x.setRenderTarget(Lt),x.setClearColor(k,U),Gt!==void 0&&(Q.viewport=Gt),x.toneMapping=At}function fe(E,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let $=0,ht=E.length;$<ht;$++){const xt=E[$],Lt=xt.object,At=xt.geometry,Gt=Q===null?xt.material:Q,Xt=xt.group;Lt.layers.test(J.layers)&&en(Lt,W,J,At,Gt,Xt)}}function en(E,W,J,Q,$,ht){E.onBeforeRender(x,W,J,Q,$,ht),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(x,W,J,Q,E,ht),$.transparent===!0&&$.side===Je&&$.forceSinglePass===!1?($.side=Qe,$.needsUpdate=!0,x.renderBufferDirect(J,W,Q,$,E,ht),$.side=Ri,$.needsUpdate=!0,x.renderBufferDirect(J,W,Q,$,E,ht),$.side=Je):x.renderBufferDirect(J,W,Q,$,E,ht),E.onAfterRender(x,W,J,Q,$,ht)}function Rn(E,W,J){W.isScene!==!0&&(W=ye);const Q=kt.get(E),$=f.state.lights,ht=f.state.shadowsArray,xt=$.state.version,Lt=Nt.getParameters(E,$.state,ht,W,J),At=Nt.getProgramCacheKey(Lt);let Gt=Q.programs;Q.environment=E.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(E.isMeshStandardMaterial?j:w).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",R),Gt=new Map,Q.programs=Gt);let Xt=Gt.get(At);if(Xt!==void 0){if(Q.currentProgram===Xt&&Q.lightsStateVersion===xt)return Er(E,Lt),Xt}else Lt.uniforms=Nt.getUniforms(E),E.onBeforeCompile(Lt,x),Xt=Nt.acquireProgram(Lt,At),Gt.set(At,Xt),Q.uniforms=Lt.uniforms;const Ut=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),Er(E,Lt),Q.needsLights=Li(E),Q.lightsStateVersion=xt,Q.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.directionalShadowMap.value=$.state.directionalShadowMap,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotShadowMap.value=$.state.spotShadowMap,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMap.value=$.state.pointShadowMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Xt,Q.uniformsList=null,Xt}function wr(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=vo.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Er(E,W){const J=kt.get(E);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Tr(E,W,J,Q,$){W.isScene!==!0&&(W=ye),I.resetTextureUnits();const ht=W.fog,xt=Q.isMeshStandardMaterial?W.environment:null,Lt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ks,At=(Q.isMeshStandardMaterial?j:w).get(Q.envMap||xt),Gt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ut=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,Me=!!J.morphAttributes.color;let be=Ti;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=x.toneMapping);const nn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ce=nn!==void 0?nn.length:0,Ot=kt.get(Q),$n=f.state.lights;if(at===!0&&(Ct===!0||E!==M)){const pn=E===M&&Q.id===S;ct.setState(Q,E,pn)}let he=!1;Q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==$n.state.version||Ot.outputColorSpace!==Lt||$.isBatchedMesh&&Ot.batching===!1||!$.isBatchedMesh&&Ot.batching===!0||$.isBatchedMesh&&Ot.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ot.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ot.instancing===!1||!$.isInstancedMesh&&Ot.instancing===!0||$.isSkinnedMesh&&Ot.skinning===!1||!$.isSkinnedMesh&&Ot.skinning===!0||$.isInstancedMesh&&Ot.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ot.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ot.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ot.instancingMorph===!1&&$.morphTexture!==null||Ot.envMap!==At||Q.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ct.numPlanes||Ot.numIntersection!==ct.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==Xt||Ot.morphTargets!==Ut||Ot.morphNormals!==ae||Ot.morphColors!==Me||Ot.toneMapping!==be||Ot.morphTargetsCount!==ce)&&(he=!0):(he=!0,Ot.__version=Q.version);let yn=Ot.currentProgram;he===!0&&(yn=Rn(Q,W,$));let ts=!1,on=!1,Ws=!1;const Se=yn.getUniforms(),Pn=Ot.uniforms;if(Ft.useProgram(yn.program)&&(ts=!0,on=!0,Ws=!0),Q.id!==S&&(S=Q.id,on=!0),ts||M!==E){Ft.buffers.depth.getReversed()?(pt.copy(E.projectionMatrix),sf(pt),rf(pt),Se.setValue(q,"projectionMatrix",pt)):Se.setValue(q,"projectionMatrix",E.projectionMatrix),Se.setValue(q,"viewMatrix",E.matrixWorldInverse);const hi=Se.map.cameraPosition;hi!==void 0&&hi.setValue(q,$t.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&Se.setValue(q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(q,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,on=!0,Ws=!0)}if($.isSkinnedMesh){Se.setOptional(q,$,"bindMatrix"),Se.setOptional(q,$,"bindMatrixInverse");const pn=$.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(q,"boneTexture",pn.boneTexture,I))}$.isBatchedMesh&&(Se.setOptional(q,$,"batchingTexture"),Se.setValue(q,"batchingTexture",$._matricesTexture,I),Se.setOptional(q,$,"batchingIdTexture"),Se.setValue(q,"batchingIdTexture",$._indirectTexture,I),Se.setOptional(q,$,"batchingColorTexture"),$._colorsTexture!==null&&Se.setValue(q,"batchingColorTexture",$._colorsTexture,I));const $s=J.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Vt.update($,J,yn),(on||Ot.receiveShadow!==$.receiveShadow)&&(Ot.receiveShadow=$.receiveShadow,Se.setValue(q,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pn.envMap.value=At,Pn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Pn.envMapIntensity.value=W.environmentIntensity),on&&(Se.setValue(q,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Gs(Pn,Ws),ht&&Q.fog===!0&&vt.refreshFogUniforms(Pn,ht),vt.refreshMaterialUniforms(Pn,Q,H,Z,f.state.transmissionRenderTarget[E.id]),vo.upload(q,wr(Ot),Pn,I)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vo.upload(q,wr(Ot),Pn,I),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(q,"center",$.center),Se.setValue(q,"modelViewMatrix",$.modelViewMatrix),Se.setValue(q,"normalMatrix",$.normalMatrix),Se.setValue(q,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const pn=Q.uniformsGroups;for(let hi=0,di=pn.length;hi<di;hi++){const fc=pn[hi];V.update(fc,yn),V.bind(fc,yn)}}return yn}function Gs(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function Li(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,W,J){kt.get(E.texture).__webglTexture=W,kt.get(E.depthTexture).__webglTexture=J;const Q=kt.get(E);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){const J=kt.get(E);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,J=0){D=E,T=W,C=J;let Q=!0,$=null,ht=!1,xt=!1;if(E){const At=kt.get(E);if(At.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1;else if(At.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(At.__hasExternalTextures)I.rebindTextures(E,kt.get(E.texture).__webglTexture,kt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(At.__boundDepthTexture!==Ut){if(Ut!==null&&kt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(xt=!0);const Xt=kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?$=Xt[W][J]:$=Xt[W],ht=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?$=kt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[J]:$=Xt,L.copy(E.viewport),G.copy(E.scissor),O=E.scissorTest}else L.copy(ut).multiplyScalar(H).floor(),G.copy(lt).multiplyScalar(H).floor(),O=te;if(Ft.bindFramebuffer(q.FRAMEBUFFER,$)&&Q&&Ft.drawBuffers(E,$),Ft.viewport(L),Ft.scissor(G),Ft.setScissorTest(O),ht){const At=kt.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,At.__webglTexture,J)}else if(xt){const At=kt.get(E.texture),Gt=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,At.__webglTexture,J||0,Gt)}S=-1},this.readRenderTargetPixels=function(E,W,J,Q,$,ht,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Lt=Lt[xt]),Lt){Ft.bindFramebuffer(q.FRAMEBUFFER,Lt);try{const At=E.texture,Gt=At.format,Xt=At.type;if(!ee.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-Q&&J>=0&&J<=E.height-$&&q.readPixels(W,J,Q,$,qt.convert(Gt),qt.convert(Xt),ht)}finally{const At=D!==null?kt.get(D).__webglFramebuffer:null;Ft.bindFramebuffer(q.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,W,J,Q,$,ht,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Lt=Lt[xt]),Lt){const At=E.texture,Gt=At.format,Xt=At.type;if(!ee.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-Q&&J>=0&&J<=E.height-$){Ft.bindFramebuffer(q.FRAMEBUFFER,Lt);const Ut=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ut),q.bufferData(q.PIXEL_PACK_BUFFER,ht.byteLength,q.STREAM_READ),q.readPixels(W,J,Q,$,qt.convert(Gt),qt.convert(Xt),0);const ae=D!==null?kt.get(D).__webglFramebuffer:null;Ft.bindFramebuffer(q.FRAMEBUFFER,ae);const Me=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await nf(q,Me,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ut),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ht),q.deleteBuffer(Ut),q.deleteSync(Me),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,J=0){E.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);const Q=Math.pow(2,-J),$=Math.floor(E.image.width*Q),ht=Math.floor(E.image.height*Q),xt=W!==null?W.x:0,Lt=W!==null?W.y:0;I.setTexture2D(E,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,xt,Lt,$,ht),Ft.unbindTexture()},this.copyTextureToTexture=function(E,W,J=null,Q=null,$=0){E.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,E=arguments[1],W=arguments[2],$=arguments[3]||0,J=null);let ht,xt,Lt,At,Gt,Xt,Ut,ae,Me;const be=E.isCompressedTexture?E.mipmaps[$]:E.image;J!==null?(ht=J.max.x-J.min.x,xt=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,At=J.min.x,Gt=J.min.y,Xt=J.isBox3?J.min.z:0):(ht=be.width,xt=be.height,Lt=be.depth||1,At=0,Gt=0,Xt=0),Q!==null?(Ut=Q.x,ae=Q.y,Me=Q.z):(Ut=0,ae=0,Me=0);const nn=qt.convert(W.format),ce=qt.convert(W.type);let Ot;W.isData3DTexture?(I.setTexture3D(W,0),Ot=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Ot=q.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Ot=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const $n=q.getParameter(q.UNPACK_ROW_LENGTH),he=q.getParameter(q.UNPACK_IMAGE_HEIGHT),yn=q.getParameter(q.UNPACK_SKIP_PIXELS),ts=q.getParameter(q.UNPACK_SKIP_ROWS),on=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,be.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,be.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,At),q.pixelStorei(q.UNPACK_SKIP_ROWS,Gt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Xt);const Ws=E.isDataArrayTexture||E.isData3DTexture,Se=W.isDataArrayTexture||W.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Pn=kt.get(E),$s=kt.get(W),pn=kt.get(Pn.__renderTarget),hi=kt.get($s.__renderTarget);Ft.bindFramebuffer(q.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ft.bindFramebuffer(q.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let di=0;di<Lt;di++)Ws&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,kt.get(E).__webglTexture,$,Xt+di),E.isDepthTexture?(Se&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,kt.get(W).__webglTexture,$,Me+di),q.blitFramebuffer(At,Gt,ht,xt,Ut,ae,ht,xt,q.DEPTH_BUFFER_BIT,q.NEAREST)):Se?q.copyTexSubImage3D(Ot,$,Ut,ae,Me+di,At,Gt,ht,xt):q.copyTexSubImage2D(Ot,$,Ut,ae,Me+di,At,Gt,ht,xt);Ft.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?q.texSubImage3D(Ot,$,Ut,ae,Me,ht,xt,Lt,nn,ce,be.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Ot,$,Ut,ae,Me,ht,xt,Lt,nn,be.data):q.texSubImage3D(Ot,$,Ut,ae,Me,ht,xt,Lt,nn,ce,be):E.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,$,Ut,ae,ht,xt,nn,ce,be.data):E.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,$,Ut,ae,be.width,be.height,nn,be.data):q.texSubImage2D(q.TEXTURE_2D,$,Ut,ae,ht,xt,nn,ce,be);q.pixelStorei(q.UNPACK_ROW_LENGTH,$n),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,he),q.pixelStorei(q.UNPACK_SKIP_PIXELS,yn),q.pixelStorei(q.UNPACK_SKIP_ROWS,ts),q.pixelStorei(q.UNPACK_SKIP_IMAGES,on),$===0&&W.generateMipmaps&&q.generateMipmap(Ot),Ft.unbindTexture()},this.copyTextureToTexture3D=function(E,W,J=null,Q=null,$=0){return E.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,E=arguments[2],W=arguments[3],$=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,J,Q,$)},this.initRenderTarget=function(E){kt.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),Ft.unbindTexture()},this.resetState=function(){T=0,C=0,D=null,Ft.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Zl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mv extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new z;class To{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gd extends Hs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Ks=new z,gs=new z,vs=new z,_s=new Pt,Zs=new Pt,Wd=new _e,Yr=new z,Js=new z,jr=new z,dh=new Pt,Ma=new Pt,uh=new Pt;class vv extends Fe{constructor(t=new Gd){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new tn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gv(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new To(n,3,0,!1)),ms.setAttribute("uv",new To(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Wd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Kr(Yr.set(-.5,-.5,0),vs,o,gs,i,r),Kr(Js.set(.5,-.5,0),vs,o,gs,i,r),Kr(jr.set(.5,.5,0),vs,o,gs,i,r),dh.set(0,0),Ma.set(1,0),uh.set(1,1);let a=t.ray.intersectTriangle(Yr,Js,jr,!1,Ks);if(a===null&&(Kr(Js.set(-.5,.5,0),vs,o,gs,i,r),Ma.set(0,1),a=t.ray.intersectTriangle(Yr,jr,Js,!1,Ks),a===null))return;const l=t.ray.origin.distanceTo(Ks);l<t.near||l>t.far||e.push({distance:l,point:Ks.clone(),uv:vn.getInterpolation(Ks,Yr,Js,jr,dh,Ma,uh,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(s,t,e,n,i,r){_s.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Zs.x=r*_s.x-i*_s.y,Zs.y=i*_s.x+r*_s.y):Zs.copy(_s),s.copy(t),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(Wd)}class _v extends Ye{constructor(t=null,e=1,n=1,i,r,o,a,l,c=dn,h=dn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fh extends xn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new _e,ph=new _e,Zr=[],mh=new Qi,xv=new _e,Qs=new Dt,tr=new br;class ba extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),mh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),tr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),ph.multiplyMatrices(n,xs),Qs.matrixWorld=ph,Qs.raycast(t,Zr);for(let o=0,a=Zr.length;o<a;o++){const l=Zr[o];l.instanceId=r,l.object=this,e.push(l)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _v(new Float32Array(i*this.count),i,this.count,Gl,Vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jl extends Ye{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends tn{constructor(t=[new Pt(0,-.5),new Pt(.5,0),new Pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Xe(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new z,d=new Pt,p=new z,g=new z,v=new z;let m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=e;_++){const y=n+_*h*i,x=Math.sin(y),P=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),d.x=_/e,d.y=T/(t.length-1),a.push(d.x,d.y);const C=l[3*T+0]*x,D=l[3*T+1],S=l[3*T+0]*P;c.push(C,D,S)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const x=y+_*t.length,P=x,T=x+t.length,C=x+t.length+1,D=x+1;r.push(P,T,D),r.push(C,D,T)}this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.points,t.segments,t.phiStart,t.phiLength)}}class Vi extends tn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new z,h=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends tn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2));function _(){const x=new z,P=new z;let T=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,L=M*(e-t)+t;for(let G=0;G<=i;G++){const O=G/i,k=O*l+a,U=Math.sin(k),B=Math.cos(k);P.x=L*U,P.y=-M*n+m,P.z=L*B,u.push(P.x,P.y,P.z),x.set(U,C,B).normalize(),d.push(x.x,x.y,x.z),p.push(O,1-M),S.push(g++)}v.push(S)}for(let D=0;D<i;D++)for(let S=0;S<r;S++){const M=v[S][D],L=v[S+1][D],G=v[S+1][D+1],O=v[S][D+1];(t>0||S!==0)&&(h.push(M,L,O),T+=3),(e>0||S!==r-1)&&(h.push(L,G,O),T+=3)}c.addGroup(f,T,0),f+=T}function y(x){const P=g,T=new Pt,C=new z;let D=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let G=0;G<=i;G++){const k=G/i*l+a,U=Math.cos(k),B=Math.sin(k);C.x=S*B,C.y=m*M,C.z=S*U,u.push(C.x,C.y,C.z),d.push(0,M,0),T.x=U*.5+.5,T.y=B*.5*M+.5,p.push(T.x,T.y),g++}for(let G=0;G<i;G++){const O=P+G,k=L+G;x===!0?h.push(k,k+1,O):h.push(k+1,k,O),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Ae{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Es(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends tn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new z,x=new z,P=new z;for(let T=0;T<e.length;T+=3)p(e[T+0],y),p(e[T+1],x),p(e[T+2],P),l(y,x,P,_)}function l(_,y,x,P){const T=P+1,C=[];for(let D=0;D<=T;D++){C[D]=[];const S=_.clone().lerp(x,D/T),M=y.clone().lerp(x,D/T),L=T-D;for(let G=0;G<=L;G++)G===0&&D===T?C[D][G]=S:C[D][G]=S.clone().lerp(M,G/L)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[D][M+1]),d(C[D+1][M]),d(C[D][M])):(d(C[D][M+1]),d(C[D+1][M+1]),d(C[D+1][M]))}}function c(_){const y=new z;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const _=new z;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,P=f(_)/Math.PI+.5;o.push(x,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],P=o[_+4],T=Math.max(y,x,P),C=Math.min(y,x,P);T>.9&&C<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new z,y=new z,x=new z,P=new z,T=new Pt,C=new Pt,D=new Pt;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),P.copy(_).add(y).add(x).divideScalar(3);const L=m(P);v(T,M+0,_,L),v(C,M+2,y,L),v(D,M+4,x,L)}}function v(_,y,x,P){P<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class Ql extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ql(t.radius,t.detail)}}class tc extends Bo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class Co extends tn{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new z,g=new Pt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const _=f+m,y=_,x=_+n+1,P=_+n+2,T=_+1;a.push(y,x,T),a.push(x,P,T)}}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gn extends tn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new z,d=new z,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const _=[],y=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const T=P/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+x,1-y),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const y=h[f][_+1],x=h[f][_],P=h[f+1][_],T=h[f+1][_+1];(f!==0||o>0)&&p.push(y,x,T),(f!==n-1||l<Math.PI)&&p.push(x,P,T)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gi extends tn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new z,u=new z,d=new z;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,_=(i+1)*p+g;o.push(v,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ee extends Hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ec extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yv extends ec{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sa=new _e,gh=new z,vh=new z;class $d{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(gh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _h=new _e,er=new z,wa=new z;class Mv extends $d{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class bv extends ec{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sv extends $d{constructor(){super(new Od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xh extends ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Sv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yh(){return performance.now()}const Mh=new _e;class Ev{constructor(t,e,n=0,i=1/0){this.ray=new Xl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mh),this}intersectObject(t,e=!0,n=[]){return Pl(t,this,n,e),n.sort(bh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pl(t[i],this,n,e);return n.sort(bh),n}}function bh(s,t){return s.distance-t.distance}function Pl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Pl(r[o],t,e,!0)}}class Sh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tv extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);class Cn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],p=n[7],g=n[8],v=i[0],m=i[1],f=i[2],_=i[3],y=i[4],x=i[5],P=i[6],T=i[7],C=i[8];return r[0]=o*v+a*_+l*P,r[1]=o*m+a*y+l*T,r[2]=o*f+a*x+l*C,r[3]=c*v+h*_+u*P,r[4]=c*m+h*y+u*T,r[5]=c*f+h*x+u*C,r[6]=d*v+p*_+g*P,r[7]=d*m+p*y+g*T,r[8]=d*f+p*x+g*C,e}scale(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=u;do d=u-h,r[d+i*o]+=r[d+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const p=r[o+i*a]/r[o+i*o];h=u;do d=u-h,r[d+i*a]=d<=o?0:r[d+i*a]-r[d+i*o]*p;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Cn);const e=3,n=6,i=Av;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do u=h-c,i[u+n*r]+=i[u+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const d=i[r+n*o]/i[r+n*r];c=h;do u=h-c,i[u+n*o]=u<=r?0:i[u+n*o]-i[u+n*r]*d;while(--c)}}while(--a);r=2;do{o=r-1;do{const d=i[r+n*o]/i[r+n*r];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*r]*d;while(--c)}while(o--)}while(--r);r=2;do{const d=1/i[r+n*r];c=n;do u=n-c,i[u+n*r]=i[u+n*r]*d;while(--c)}while(r--);r=2;do{o=2;do{if(u=i[e+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,u)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,u=e*l,d=n*a,p=n*l,g=i*l,v=r*o,m=r*a,f=r*l,_=this.elements;return _[3*0+0]=1-(d+g),_[3*0+1]=h-f,_[3*0+2]=u+m,_[3*1+0]=h+f,_[3*1+1]=1-(c+g),_[3*1+2]=p-v,_[3*2+0]=u-m,_[3*2+1]=p+v,_[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new Cn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Av=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Cv,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Rv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(wh),wh.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Cv=new b,Rv=new b,wh=new b;class un{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Eh),c=Eh),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new un().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Th,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Th,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||p>g)}}const Eh=new b,Th=[new b,new b,new b,new b,new b,new b,new b,new b];class Ah{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class qd{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class Ie{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Pv,i=Lv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ie);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new Ie);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ie),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,u=c*i+l*n-o*r,d=c*r+o*i-a*n,p=-o*n-a*i-l*r;return e.x=h*c+p*-o+u*-l-d*-a,e.y=u*c+p*-a+d*-o-h*-l,e.z=d*c+p*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const u=o*o,d=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*p),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*u-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Ie(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ie);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,p,g,v,m;return p=i*l+r*c+o*h+a*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),v=Math.sin((1-e)*d)/g,m=Math.sin(e*d)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*r+m*c,n.z=v*o+m*h,n.w=v*a+m*u,n}integrate(t,e,n,i){i===void 0&&(i=new Ie);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(r*u+o*h-a*c),i.y+=d*(o*u+a*l-r*h),i.z+=d*(a*u+r*c-o*l),i.w+=d*(-r*l-o*c-a*h),i}}const Pv=new b,Lv=new b,Iv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Et{constructor(t){t===void 0&&(t={}),this.id=Et.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Et.idCounter=0;Et.types=Iv;class le{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new Ie,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return le.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return le.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Ch),Ch.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ch=new Ie;class Ps extends Et{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Ps.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new b,o=new b;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new b;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=g)}const p=[];for(let g=0;g<n.faces[u].length;g++){const v=n.vertices[n.faces[u][g]],m=new b;m.copy(v),r.vmult(m,m),i.vadd(m,m),p.push(m)}u>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new b,h=new b,u=new b,d=new b,p=new b,g=new b;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],c);const _=m.testSepAxis(c,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const f=a?a.length:m.faces.length;for(let _=0;_<f;_++){const y=a?a[_]:_;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){r.vmult(t.uniqueAxes[f],h);const _=m.testSepAxis(h,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const f=l?l.length:t.faces.length;for(let _=0;_<f;_++){const y=l?l[_]:_;h.copy(t.faceNormals[y]),r.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],d);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],p),d.cross(p,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;Ps.project(a,t,n,i,Ea),Ps.project(e,t,r,o,Ta);const l=Ea[0],c=Ea[1],h=Ta[0],u=Ta[1];if(l<u||h<c)return!1;const d=l-u,p=h-c;return d<p?d:p}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new b,c=new b,h=new b,u=new b,d=new b,p=new b,g=new b,v=new b,m=this,f=[],_=i,y=f;let x=-1,P=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);const L=l.dot(t);L<P&&(P=L,x=M)}if(x<0)return;const T=m.faces[x];T.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let L=0;L<m.faces[M].length;L++)T.indexOf(m.faces[M][L])!==-1&&M!==x&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);const C=T.length;for(let M=0;M<C;M++){const L=m.vertices[T[M]],G=m.vertices[T[(M+1)%C]];L.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),p.copy(L),n.vmult(p,p),e.vadd(p,p);const O=T.connectedFaces[M];g.copy(this.faceNormals[O]);const k=this.getPlaneConstantOfFace(O);v.copy(g),n.vmult(v,v);const U=k-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,U);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const D=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const S=D-v.dot(e);for(let M=0;M<_.length;M++){let L=v.dot(_[M])+S;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){const G=_[M];if(L<=1e-6){const O={point:G,normal:v,depth:L};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const u=new b;u.copy(c),e.push(u)}else{const u=new b;l.lerp(c,r/(r-o),u),e.push(u)}else if(o<0){const u=new b;l.lerp(c,r/(r-o),u),e.push(u),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,u,d=new b;for(let p=0;p<r.length;p++){d.copy(r[p]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new b;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new b;t.vsub(l,c);const h=a.dot(c),u=new b;r.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=Dv;let l=0,c=0;const h=Nv,u=t.vertices;h.setZero(),le.vectorToLocalFrame(n,i,e,a),le.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let p=1;p<o;p++){const g=u[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const Ea=[],Ta=[];new b;const Dv=new b,Nv=new b;class vr extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ps({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),vr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)_i.set(r[o][0],r[o][1],r[o][2]),e.vmult(_i,_i),t.vadd(_i,_i),n(_i.x,_i.y,_i.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;Ln[0].set(r.x,r.y,r.z),Ln[1].set(-r.x,r.y,r.z),Ln[2].set(-r.x,-r.y,r.z),Ln[3].set(-r.x,-r.y,-r.z),Ln[4].set(r.x,-r.y,-r.z),Ln[5].set(r.x,r.y,-r.z),Ln[6].set(-r.x,r.y,-r.z),Ln[7].set(r.x,-r.y,r.z);const o=Ln[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Ln[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const _i=new b,Ln=[new b,new b,new b,new b,new b,new b,new b,new b],nc={DYNAMIC:1,STATIC:2,KINEMATIC:4},ic={AWAKE:0,SLEEPY:1,SLEEPING:2};class bt extends qd{constructor(t){t===void 0&&(t={}),super(),this.id=bt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?bt.STATIC:bt.DYNAMIC,typeof t.type==typeof bt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=bt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Ie,this.initQuaternion=new Ie,this.previousQuaternion=new Ie,this.interpolatedQuaternion=new Ie,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new un,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=bt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===bt.SLEEPING&&this.dispatchEvent(bt.wakeupEvent)}sleep(){this.sleepState=bt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===bt.AWAKE&&n<i?(this.sleepState=bt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(bt.sleepyEvent)):e===bt.SLEEPY&&n>i?this.wakeUp():e===bt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(bt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===bt.SLEEPING||this.type===bt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,r=new Ie;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Uv,o=Fv,a=this.quaternion,l=this.aabb,c=Ov;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),u.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Bv,i=zv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==bt.DYNAMIC)return;this.sleepState===bt.SLEEPING&&this.wakeUp();const n=kv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==bt.DYNAMIC)return;const n=Hv,i=Vv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===bt.DYNAMIC&&(this.sleepState===bt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==bt.DYNAMIC)return;this.sleepState===bt.SLEEPING&&this.wakeUp();const n=e,i=Gv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Wv;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==bt.DYNAMIC)return;const n=$v,i=qv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Xv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),vr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===bt.DYNAMIC||this.type===bt.KINEMATIC)||this.sleepState===bt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,p=h*t;i.x+=a.x*p*d.x,i.y+=a.y*p*d.y,i.z+=a.z*p*d.z;const g=u.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,_=l.z*v.z;r.x+=t*(g[0]*m+g[1]*f+g[2]*_),r.y+=t*(g[3]*m+g[4]*f+g[5]*_),r.z+=t*(g[6]*m+g[7]*f+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}bt.idCounter=0;bt.COLLIDE_EVENT_NAME="collide";bt.DYNAMIC=nc.DYNAMIC;bt.STATIC=nc.STATIC;bt.KINEMATIC=nc.KINEMATIC;bt.AWAKE=ic.AWAKE;bt.SLEEPY=ic.SLEEPY;bt.SLEEPING=ic.SLEEPING;bt.wakeupEvent={type:"wakeup"};bt.sleepyEvent={type:"sleepy"};bt.sleepEvent={type:"sleep"};const Uv=new b,Fv=new Ie,Ov=new un,Bv=new Cn,zv=new Cn;new Cn;const kv=new b,Hv=new b,Vv=new b,Gv=new b,Wv=new b,$v=new b,qv=new b,Xv=new b;class Xd{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&bt.STATIC||t.sleepState===bt.SLEEPING)&&(e.type&bt.STATIC||e.sleepState===bt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=Yv;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=jv,i=Kv,r=Zv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Yv=new b;new b;new Ie;new b;const jv={keys:[]},Kv=[],Zv=[];new b;new b;new b;class Jv extends Xd{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class Ro{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Yd,jd,Kd,Zd,Jd,Qd,tu;const sc={CLOSEST:1,ANY:2,ALL:4};Yd=Et.types.SPHERE;jd=Et.types.PLANE;Kd=Et.types.BOX;Zd=Et.types.CYLINDER;Jd=Et.types.CONVEXPOLYHEDRON;Qd=Et.types.HEIGHTFIELD;tu=Et.types.TRIMESH;class Ue{get[Yd](){return this._intersectSphere}get[jd](){return this._intersectPlane}get[Kd](){return this._intersectBox}get[Zd](){return this._intersectConvex}get[Jd](){return this._intersectConvex}get[Qd](){return this._intersectHeightfield}get[tu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ue.ANY,this.result=new Ro,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ue.ANY,this.result=e.result||new Ro,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Rh),Aa.length=0,t.broadphase.aabbQuery(t,Rh,Aa),this.intersectBodies(Aa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Qv,r=t_;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(p_(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new b,v=new b,m=new b;o.vsub(n,g);const f=-c.dot(g)/p;l.scale(f,v),o.vadd(v,m),this.reportIntersection(c,m,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=e_;o.from.copy(this.from),o.to.copy(this.to),le.pointToLocalFrame(n,e,o.from,o.from),le.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=n_;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new un;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),le.pointToWorldFrame(n,e,t.pillarOffset,Jr),this._intersectConvex(t.pillarConvex,e,Jr,i,r,Ph),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),le.pointToWorldFrame(n,e,t.pillarOffset,Jr),this._intersectConvex(t.pillarConvex,e,Jr,i,r,Ph)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,p=i_,g=s_;if(!(d<0))if(d===0)o.lerp(a,d,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,r,i,-1);else{const v=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=r_,l=Lh,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=c?c.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<f;y++){const x=c?c[y]:y,P=h[x],T=d[x],C=e,D=n;l.copy(u[P[0]]),C.vmult(l,l),l.vadd(D,l),l.vsub(g,l),C.vmult(T,a);const S=p.dot(a);if(Math.abs(S)<this.precision)continue;const M=a.dot(l)/S;if(!(M<0)){p.scale(M,sn),sn.vadd(g,sn),wn.copy(u[P[0]]),C.vmult(wn,wn),D.vadd(wn,wn);for(let L=1;!_.shouldStop&&L<P.length-1;L++){In.copy(u[P[L]]),Dn.copy(u[P[L+1]]),C.vmult(In,In),C.vmult(Dn,Dn),D.vadd(In,In),D.vadd(Dn,Dn);const G=sn.distanceTo(g);!(Ue.pointInTriangle(sn,wn,In,Dn)||Ue.pointInTriangle(sn,In,wn,Dn))||G>m||this.reportIntersection(a,sn,r,i,x)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=o_,l=u_,c=f_,h=Lh,u=a_,d=l_,p=c_,g=d_,v=h_,m=t.indices;t.vertices;const f=this.from,_=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),le.vectorToLocalFrame(n,e,y,u),le.pointToLocalFrame(n,e,f,d),le.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,p.vsub(d,u),u.normalize();const x=d.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let P=0,T=l.length;!this.result.shouldStop&&P!==T;P++){const C=l[P];t.getNormal(C,a),t.getVertex(m[C*3],wn),wn.vsub(d,h);const D=u.dot(a),S=a.dot(h)/D;if(S<0)continue;u.scale(S,sn),sn.vadd(d,sn),t.getVertex(m[C*3+1],In),t.getVertex(m[C*3+2],Dn);const M=sn.distanceSquared(d);!(Ue.pointInTriangle(sn,In,wn,Dn)||Ue.pointInTriangle(sn,wn,In,Dn))||M>x||(le.vectorToWorldFrame(e,a,v),le.pointToWorldFrame(n,e,sn,g),this.reportIntersection(v,g,r,i,C))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ue.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ue.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ue.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Wi),n.vsub(e,nr),t.vsub(e,Ca);const r=Wi.dot(Wi),o=Wi.dot(nr),a=Wi.dot(Ca),l=nr.dot(nr),c=nr.dot(Ca);let h,u;return(h=l*a-o*c)>=0&&(u=r*c-o*a)>=0&&h+u<r*l-o*o}}Ue.CLOSEST=sc.CLOSEST;Ue.ANY=sc.ANY;Ue.ALL=sc.ALL;const Rh=new un,Aa=[],nr=new b,Ca=new b,Qv=new b,t_=new Ie,sn=new b,wn=new b,In=new b,Dn=new b;new b;new Ro;const Ph={faceList:[0]},Jr=new b,e_=new Ue,n_=[],i_=new b,s_=new b,r_=new b;new b;new b;const Lh=new b,o_=new b,a_=new b,l_=new b,c_=new b,h_=new b,d_=new b;new un;const u_=[],f_=new le,Wi=new b,Qr=new b;function p_(s,t,e){e.vsub(s,Wi);const n=Wi.dot(t);return t.scale(n,Qr),Qr.vadd(s,Qr),e.distanceTo(Qr)}class Ts extends Xd{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=i[a];for(l=a+1;l<r;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Ts.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Ts.insertionSortX(t):e===1?Ts.insertionSortY(t):e===2&&Ts.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let p=0;p!==l;p++){const g=a[p],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;n+=m,i+=m*m;const f=g.position.z;r+=f,o+=f*f}const h=e-t*t*c,u=i-n*n*c,d=o-r*r*c;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class m_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ih{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Sr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Sr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ih,this.jacobianElementB=new Ih,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Dh),a.scale(h,Nh),n.invInertiaWorldSolve.vmult(o,Uh),i.invInertiaWorldSolve.vmult(l,Fh),t.multiplyVectors(Dh,Uh)+e.multiplyVectors(Nh,Fh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,to),c+=to.dot(t.rotational),l.vmult(e.rotational,to),c+=to.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=g_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Sr.idCounter=0;const Dh=new b,Nh=new b,Uh=new b,Fh=new b,to=new b,g_=new b;class v_ extends Sr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=__,c=x_,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=r.velocity,p=r.angularVelocity;r.force,r.torque;const g=y_,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=f.dot(g),y=this.restitution+1,x=y*d.dot(f)-y*h.dot(f)+p.dot(c)-u.dot(l),P=this.computeGiMf();return-_*e-x*n-t*P}getImpactVelocityAlongNormal(){const t=M_,e=b_,n=S_,i=w_,r=E_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const __=new b,x_=new b,y_=new b,M_=new b,b_=new b,S_=new b,w_=new b,E_=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Oh extends Sr{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=T_,o=A_,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const T_=new b,A_=new b;class bi{constructor(t,e,n){n=m_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=bi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}bi.idCounter=0;class Si{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Si.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Si.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ue;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class eo extends Et{constructor(t){if(super({type:Et.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,i[l]=t[l]+r}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;class Bh extends Ps{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],l=[],c=[],h=[],u=Math.cos,d=Math.sin;o.push(new b(-e*d(0),-n*.5,e*u(0))),c.push(0),o.push(new b(-t*d(0),n*.5,t*u(0))),h.push(1);for(let g=0;g<r;g++){const v=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new b(-e*d(v),-n*.5,e*u(v))),c.push(2*g+2),o.push(new b(-t*d(v),n*.5,t*u(v))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new b(-d(m),0,u(m)))}l.push(c),a.push(new b(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);l.push(p),super({vertices:o,faces:l,axes:a}),this.type=Et.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class C_ extends Et{constructor(){super({type:Et.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Zn.set(0,0,1),e.vmult(Zn,Zn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Zn.x===1?i.x=t.x:Zn.x===-1&&(n.x=t.x),Zn.y===1?i.y=t.y:Zn.y===-1&&(n.y=t.y),Zn.z===1?i.z=t.z:Zn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Zn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new un;new b;new un;new b;new b;new b;new b;new b;new b;new b;new un;new b;new le;new un;class R_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class P_ extends R_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,d,p,g,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const f=I_,_=D_,y=L_;f.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const P=o[x];y[x]=0,_[x]=P.computeB(h),f[x]=1/P.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],D=C.vlambda,S=C.wlambda;D.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const C=o[T];u=_[T],d=f[T],m=y[T],v=C.computeGWlambda(),p=d*(u-v-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),y[T]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<r)break}for(let T=0;T!==c;T++){const C=l[T],D=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),D.vadd(C.vlambda,D),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let x=o.length;const P=1/h;for(;x--;)o[x].multiplier=y[x]*P}return n}}const L_=[],I_=[],D_=[];class N_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class U_ extends N_{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const we={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH};class F_{get[we.sphereSphere](){return this.sphereSphere}get[we.spherePlane](){return this.spherePlane}get[we.boxBox](){return this.boxBox}get[we.sphereBox](){return this.sphereBox}get[we.planeBox](){return this.planeBox}get[we.convexConvex](){return this.convexConvex}get[we.sphereConvex](){return this.sphereConvex}get[we.planeConvex](){return this.planeConvex}get[we.boxConvex](){return this.boxConvex}get[we.sphereHeightfield](){return this.sphereHeightfield}get[we.boxHeightfield](){return this.boxHeightfield}get[we.convexHeightfield](){return this.convexHeightfield}get[we.sphereParticle](){return this.sphereParticle}get[we.planeParticle](){return this.planeParticle}get[we.boxParticle](){return this.boxParticle}get[we.convexParticle](){return this.convexParticle}get[we.cylinderCylinder](){return this.convexConvex}get[we.sphereCylinder](){return this.sphereConvex}get[we.planeCylinder](){return this.planeConvex}get[we.boxCylinder](){return this.boxConvex}get[we.convexCylinder](){return this.convexConvex}get[we.heightfieldCylinder](){return this.heightfieldCylinder}get[we.particleCylinder](){return this.particleCylinder}get[we.sphereTrimesh](){return this.sphereTrimesh}get[we.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new U_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new v_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new Oh(n,i,d*p),m=g.length?g.pop():new Oh(n,i,d*p);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-d*p,v.maxForce=m.maxForce=d*p,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Bi.setZero(),ys.setZero(),Ms.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Bi.vadd(e.ni,Bi),ys.vadd(e.ri,ys),Ms.vadd(e.rj,Ms)):(Bi.vsub(e.ni,Bi),ys.vadd(e.rj,ys),Ms.vadd(e.ri,Ms));const o=1/t;ys.scale(o,n.ri),Ms.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Bi.normalize(),Bi.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=z_,c=k_,h=O_,u=B_;for(let d=0,p=t.length;d!==p;d++){const g=t[d],v=e[d];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const f=g.type&bt.KINEMATIC&&v.type&bt.STATIC||g.type&bt.STATIC&&v.type&bt.KINEMATIC||g.type&bt.KINEMATIC&&v.type&bt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],u),u.vadd(v.position,u);const P=v.shapes[x];if(!(y.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+P.boundingSphereRadius)continue;let T=null;y.material&&P.material&&(T=n.getContactMaterial(y.material,P.material)||null),this.currentContactMaterial=T||m||n.defaultContactMaterial;const C=y.type|P.type,D=this[C];if(D){let S=!1;y.type<P.type?S=D.call(this,y,P,h,u,l,c,g,v,y,P,f):S=D.call(this,P,y,u,h,c,l,v,g,y,P,f),S&&f&&(n.shapeOverlapKeeper.set(y.id,P.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,u){const d=this.createContactEquation(a,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,no),d.ni.scale(d.ni.dot(no),zh),no.vsub(zh,d.rj),-no.dot(d.ni)<=t.radius){if(u)return!0;const p=d.ri,g=d.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,u)}sphereBox(t,e,n,i,r,o,a,l,c,h,u){const d=this.v3pool,p=ux;n.vsub(i,io),e.getSideNormals(p,o);const g=t.radius;let v=!1;const m=px,f=mx,_=gx;let y=null,x=0,P=0,T=0,C=null;for(let B=0,Z=p.length;B!==Z&&v===!1;B++){const H=cx;H.copy(p[B]);const K=H.length();H.normalize();const dt=io.dot(H);if(dt<K+g&&dt>0){const ut=hx,lt=dx;ut.copy(p[(B+1)%3]),lt.copy(p[(B+2)%3]);const te=ut.length(),et=lt.length();ut.normalize(),lt.normalize();const at=io.dot(ut),Ct=io.dot(lt);if(at<te&&at>-te&&Ct<et&&Ct>-et){const pt=Math.abs(dt-K-g);if((C===null||pt<C)&&(C=pt,P=at,T=Ct,y=K,m.copy(H),f.copy(ut),_.copy(lt),x++,u))return!0}}}if(x){v=!0;const B=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(y,m),f.scale(P,f),m.vadd(f,m),_.scale(T,_),m.vadd(_,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let D=d.get();const S=fx;for(let B=0;B!==2&&!v;B++)for(let Z=0;Z!==2&&!v;Z++)for(let H=0;H!==2&&!v;H++)if(D.set(0,0,0),B?D.vadd(p[0],D):D.vsub(p[0],D),Z?D.vadd(p[1],D):D.vsub(p[1],D),H?D.vadd(p[2],D):D.vsub(p[2],D),i.vadd(D,S),S.vsub(n,S),S.lengthSquared()<g*g){if(u)return!0;v=!0;const K=this.createContactEquation(a,l,t,e,c,h);K.ri.copy(S),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(g,K.ri),K.rj.copy(D),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}d.release(D),D=null;const M=d.get(),L=d.get(),G=d.get(),O=d.get(),k=d.get(),U=p.length;for(let B=0;B!==U&&!v;B++)for(let Z=0;Z!==U&&!v;Z++)if(B%3!==Z%3){p[Z].cross(p[B],M),M.normalize(),p[B].vadd(p[Z],L),G.copy(n),G.vsub(L,G),G.vsub(i,G);const H=G.dot(M);M.scale(H,O);let K=0;for(;K===B%3||K===Z%3;)K++;k.copy(n),k.vsub(O,k),k.vsub(L,k),k.vsub(i,k);const dt=Math.abs(H),ut=k.length();if(dt<p[K].length()&&ut<g){if(u)return!0;v=!0;const lt=this.createContactEquation(a,l,t,e,c,h);L.vadd(O,lt.rj),lt.rj.copy(lt.rj),k.negate(lt.ni),lt.ni.normalize(),lt.ri.copy(lt.rj),lt.ri.vadd(i,lt.ri),lt.ri.vsub(n,lt.ri),lt.ri.normalize(),lt.ri.scale(g,lt.ri),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}}d.release(M,L,G,O,k)}planeBox(t,e,n,i,r,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,u)}convexConvex(t,e,n,i,r,o,a,l,c,h,u,d,p){const g=Lx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,d,p)){const v=[],m=Ix;t.clipAgainstHull(n,r,e,i,o,g,-100,100,v);let f=0;for(let _=0;_!==v.length;_++){if(u)return!0;const y=this.createContactEquation(a,l,t,e,c,h),x=y.ri,P=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),P.copy(v[_].point),x.vsub(n,x),P.vsub(i,P),x.vadd(n,x),x.vsub(a.position,x),P.vadd(i,P),P.vsub(l.position,P),this.result.push(y),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,vx);const p=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let f=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=Mx;o.vmult(y,x),i.vadd(x,x);const P=yx;if(x.vsub(n,P),P.lengthSquared()<m*m){if(u)return!0;f=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(P),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),x.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&f===!1;_++){const x=p[_],P=g[_],T=bx;o.vmult(x,T);const C=Sx;o.vmult(v[P[0]],C),C.vadd(i,C);const D=wx;T.scale(-m,D),n.vadd(D,D);const S=Ex;D.vsub(C,S);const M=S.dot(T),L=Tx;if(n.vsub(C,L),M<0&&L.dot(T)>0){const G=[];for(let O=0,k=P.length;O!==k;O++){const U=d.get();o.vmult(v[P[O]],U),i.vadd(U,U),G.push(U)}if(lx(G,T,n)){if(u)return!0;f=!0;const O=this.createContactEquation(a,l,t,e,c,h);T.scale(-m,O.ri),T.negate(O.ni);const k=d.get();T.scale(-M,k);const U=d.get();T.scale(-m,U),n.vsub(i,O.rj),O.rj.vadd(U,O.rj),O.rj.vadd(k,O.rj),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),d.release(k),d.release(U),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let B=0,Z=G.length;B!==Z;B++)d.release(G[B]);return}else for(let O=0;O!==P.length;O++){const k=d.get(),U=d.get();o.vmult(v[P[(O+1)%P.length]],k),o.vmult(v[P[(O+2)%P.length]],U),i.vadd(k,k),i.vadd(U,U);const B=_x;U.vsub(k,B);const Z=xx;B.unit(Z);const H=d.get(),K=d.get();n.vsub(k,K);const dt=K.dot(Z);Z.scale(dt,H),H.vadd(k,H);const ut=d.get();if(H.vsub(n,ut),dt>0&&dt*dt<B.lengthSquared()&&ut.lengthSquared()<m*m){if(u)return!0;const lt=this.createContactEquation(a,l,t,e,c,h);H.vsub(i,lt.rj),H.vsub(n,lt.ni),lt.ni.normalize(),lt.ni.scale(m,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);for(let te=0,et=G.length;te!==et;te++)d.release(G[te]);d.release(k),d.release(U),d.release(H),d.release(ut),d.release(K);return}d.release(k),d.release(U),d.release(H),d.release(ut),d.release(K)}for(let O=0,k=G.length;O!==k;O++)d.release(G[O])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,u){const d=Ax,p=Cx;p.set(0,0,1),r.vmult(p,p);let g=0;const v=Rx;for(let m=0;m!==e.vertices.length;m++)if(d.copy(e.vertices[m]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),p.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=Px;p.scale(p.dot(v),y),d.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(p),d.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,u)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,u){const d=e.data,p=t.radius,g=e.elementSize,v=Wx,m=Gx;le.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,_=Math.ceil((m.x+p)/g)+1,y=Math.floor((m.y-p)/g)-1,x=Math.ceil((m.y+p)/g)+1;if(_<0||x<0||f>d.length||y>d[0].length)return;f<0&&(f=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),f>=d.length&&(f=d.length-1),_>=d.length&&(_=d.length-1),x>=d[0].length&&(x=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const P=[];e.getRectMinMax(f,y,_,x,P);const T=P[0],C=P[1];if(m.z-p>C||m.z+p<T)return;const D=this.result;for(let S=f;S<_;S++)for(let M=y;M<x;M++){const L=D.length;let G=!1;if(e.getConvexTrianglePillar(S,M,!1),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,u)),u&&G||(e.getConvexTrianglePillar(S,M,!0),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,u)),u&&G))return!0;if(D.length-L>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,u)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,u){const d=e.data,p=e.elementSize,g=t.boundingSphereRadius,v=Hx,m=Vx,f=kx;le.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-g)/p)-1,y=Math.ceil((f.x+g)/p)+1,x=Math.floor((f.y-g)/p)-1,P=Math.ceil((f.y+g)/p)+1;if(y<0||P<0||_>d.length||x>d[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),P<0&&(P=0),_>=d.length&&(_=d.length-1),y>=d.length&&(y=d.length-1),P>=d[0].length&&(P=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const T=[];e.getRectMinMax(_,x,y,P,T);const C=T[0],D=T[1];if(!(f.z-g>D||f.z+g<C))for(let S=_;S<y;S++)for(let M=x;M<P;M++){let L=!1;if(e.getConvexTrianglePillar(S,M,!1),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,u,m,null)),u&&L||(e.getConvexTrianglePillar(S,M,!0),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,u,m,null)),u&&L))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,u){const d=Fx;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,a,e,t,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,u){const d=Dx;d.set(0,0,1),a.quaternion.vmult(d,d);const p=Nx;if(i.vsub(a.position,p),d.dot(p)<=0){if(u)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=Ux;d.scale(d.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,u)}convexParticle(t,e,n,i,r,o,a,l,c,h,u){let d=-1;const p=Bx,g=zx;let v=null;const m=Ox;if(m.copy(i),m.vsub(n,m),r.conjugate(kh),kh.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let f=0,_=t.faces.length;f!==_;f++){const y=[t.worldVertices[t.faces[f][0]]],x=t.worldFaceNormals[f];i.vsub(y[0],Hh);const P=-x.dot(Hh);if(v===null||Math.abs(P)<Math.abs(v)){if(u)return!0;v=P,d=f,p.copy(x)}}if(d!==-1){const f=this.createContactEquation(l,a,e,t,c,h);p.scale(v,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const _=f.ri,y=f.rj;_.vadd(i,_),_.vsub(l.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,u)}particleCylinder(t,e,n,i,r,o,a,l,c,h,u){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,u)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,u){const d=Y_,p=j_,g=K_,v=Z_,m=J_,f=Q_,_=ix,y=X_,x=$_,P=sx;le.pointToLocalFrame(i,o,n,m);const T=t.radius;_.lowerBound.set(m.x-T,m.y-T,m.z-T),_.upperBound.set(m.x+T,m.y+T,m.z+T),e.getTrianglesInAABB(_,P);const C=q_,D=t.radius*t.radius;for(let O=0;O<P.length;O++)for(let k=0;k<3;k++)if(e.getVertex(e.indices[P[O]*3+k],C),C.vsub(m,x),x.lengthSquared()<=D){if(y.copy(C),le.pointToWorldFrame(i,o,y,C),C.vsub(n,x),u)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(x),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(C),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let O=0;O<P.length;O++)for(let k=0;k<3;k++){e.getVertex(e.indices[P[O]*3+k],d),e.getVertex(e.indices[P[O]*3+(k+1)%3],p),p.vsub(d,g),m.vsub(p,f);const U=f.dot(g);m.vsub(d,f);let B=f.dot(g);if(B>0&&U<0&&(m.vsub(d,f),v.copy(g),v.normalize(),B=f.dot(v),v.scale(B,f),f.vadd(d,f),f.distanceTo(m)<t.radius)){if(u)return!0;const H=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),le.pointToWorldFrame(i,o,f,f),f.vsub(l.position,H.rj),le.vectorToWorldFrame(o,H.ni,H.ni),le.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const S=tx,M=ex,L=nx,G=W_;for(let O=0,k=P.length;O!==k;O++){e.getTriangleVertices(P[O],S,M,L),e.getNormal(P[O],G),m.vsub(S,f);let U=f.dot(G);if(G.scale(U,f),m.vsub(f,f),U=f.distanceTo(m),Ue.pointInTriangle(f,S,M,L)&&U<t.radius){if(u)return!0;let B=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),le.pointToWorldFrame(i,o,f,f),f.vsub(l.position,B.rj),le.vectorToWorldFrame(o,B.ni,B.ni),le.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,u){const d=new b,p=H_;p.set(0,0,1),r.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const v=new b;v.copy(d),le.pointToWorldFrame(i,o,v,d);const m=V_;if(d.vsub(n,m),p.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(p);const y=G_;p.scale(m.dot(p),y),d.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(d),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Bi=new b,ys=new b,Ms=new b,O_=new b,B_=new b,z_=new Ie,k_=new Ie,H_=new b,V_=new b,G_=new b,W_=new b,$_=new b;new b;const q_=new b,X_=new b,Y_=new b,j_=new b,K_=new b,Z_=new b,J_=new b,Q_=new b,tx=new b,ex=new b,nx=new b,ix=new un,sx=[],no=new b,zh=new b,rx=new b,ox=new b,ax=new b;function lx(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=rx;s[(r+1)%i].vsub(o,a);const l=ox;a.cross(t,l);const c=ax;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const io=new b,cx=new b,hx=new b,dx=new b,ux=[new b,new b,new b,new b,new b,new b],fx=new b,px=new b,mx=new b,gx=new b,vx=new b,_x=new b,xx=new b,yx=new b,Mx=new b,bx=new b,Sx=new b,wx=new b,Ex=new b,Tx=new b;new b;new b;const Ax=new b,Cx=new b,Rx=new b,Px=new b,Lx=new b,Ix=new b,Dx=new b,Nx=new b,Ux=new b,Fx=new b,kh=new Ie,Ox=new b;new b;const Bx=new b,Hh=new b,zx=new b,kx=new b,Hx=new b,Vx=[0],Gx=new b,Wx=new b;class Vh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Gh(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Gh(e,h)}}}function Gh(s,t){s.push((t&4294901760)>>16,t&65535)}const Ra=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class $x{constructor(){this.data={keys:[]}}get(t,e){const n=Ra(t,e);return this.data[n]}set(t,e,n){const i=Ra(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Ra(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}let qx=class extends qd{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Jv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new P_,this.constraints=[],this.narrowphase=new F_(this),this.collisionMatrix=new Ah,this.collisionMatrixPrevious=new Ah,this.bodyOverlapKeeper=new Vh,this.shapeOverlapKeeper=new Vh,this.contactmaterials=[],this.contactMaterialTable=new $x,this.defaultMaterial=new Si("default"),this.defaultContactMaterial=new bi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ro?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ue.ALL,n.from=t,n.to=e,n.callback=i,Pa.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ue.ANY,n.from=t,n.to=e,n.result=i,Pa.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ue.CLOSEST,n.from=t,n.to=e,n.result=i,Pa.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof bt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Be.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Be.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Be.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Zx,i=Jx,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=bt.DYNAMIC;let d=-1/0;const p=this.constraints,g=Kx;l.length();const v=l.x,m=l.y,f=l.z;let _=0;for(c&&(d=Be.now()),_=0;_!==r;_++){const O=o[_];if(O.type===u){const k=O.force,U=O.mass;k.x+=U*v,k.y+=U*m,k.z+=U*f}}for(let O=0,k=this.subsystems.length;O!==k;O++)this.subsystems[O].update();c&&(d=Be.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Be.now()-d);let y=p.length;for(_=0;_!==y;_++){const O=p[_];if(!O.collideConnected)for(let k=n.length-1;k>=0;k-=1)(O.bodyA===n[k]&&O.bodyB===i[k]||O.bodyB===n[k]&&O.bodyA===i[k])&&(n.splice(k,1),i.splice(k,1))}this.collisionMatrixTick(),c&&(d=Be.now());const x=jx,P=e.length;for(_=0;_!==P;_++)x.push(e[_]);e.length=0;const T=this.frictionEquations.length;for(_=0;_!==T;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=Be.now()-d),c&&(d=Be.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let O=0;O!==C;O++){const k=e[O],U=k.bi,B=k.bj,Z=k.si,H=k.sj;let K;if(U.material&&B.material?K=this.getContactMaterial(U.material,B.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,U.material&&B.material&&(U.material.friction>=0&&B.material.friction>=0&&U.material.friction*B.material.friction,U.material.restitution>=0&&B.material.restitution>=0&&(k.restitution=U.material.restitution*B.material.restitution)),a.addEquation(k),U.allowSleep&&U.type===bt.DYNAMIC&&U.sleepState===bt.SLEEPING&&B.sleepState===bt.AWAKE&&B.type!==bt.STATIC){const dt=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),ut=B.sleepSpeedLimit**2;dt>=ut*2&&(U.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===bt.DYNAMIC&&B.sleepState===bt.SLEEPING&&U.sleepState===bt.AWAKE&&U.type!==bt.STATIC){const dt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ut=U.sleepSpeedLimit**2;dt>=ut*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,B,!0),this.collisionMatrixPrevious.get(U,B)||(ir.body=B,ir.contact=k,U.dispatchEvent(ir),ir.body=U,B.dispatchEvent(ir)),this.bodyOverlapKeeper.set(U.id,B.id),this.shapeOverlapKeeper.set(Z.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Be.now()-d,d=Be.now()),_=0;_!==r;_++){const O=o[_];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(y=p.length,_=0;_!==y;_++){const O=p[_];O.update();for(let k=0,U=O.equations.length;k!==U;k++){const B=O.equations[k];a.addEquation(B)}}a.solve(t,this),c&&(h.solve=Be.now()-d),a.removeAllEquations();const D=Math.pow;for(_=0;_!==r;_++){const O=o[_];if(O.type&u){const k=D(1-O.linearDamping,t),U=O.velocity;U.scale(k,U);const B=O.angularVelocity;if(B){const Z=D(1-O.angularDamping,t);B.scale(Z,B)}}}this.dispatchEvent(Yx),c&&(d=Be.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Be.now()-d),this.stepnumber+=1,this.dispatchEvent(Xx);let G=!0;if(this.allowSleep)for(G=!1,_=0;_!==r;_++){const O=o[_];O.sleepTick(this.time),O.sleepState!==bt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Jn,Qn),t){for(let r=0,o=Jn.length;r<o;r+=2)sr.bodyA=this.getBodyById(Jn[r]),sr.bodyB=this.getBodyById(Jn[r+1]),this.dispatchEvent(sr);sr.bodyA=sr.bodyB=null}if(e){for(let r=0,o=Qn.length;r<o;r+=2)rr.bodyA=this.getBodyById(Qn[r]),rr.bodyB=this.getBodyById(Qn[r+1]),this.dispatchEvent(rr);rr.bodyA=rr.bodyB=null}Jn.length=Qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Jn,Qn),n){for(let r=0,o=Jn.length;r<o;r+=2){const a=this.getShapeById(Jn[r]),l=this.getShapeById(Jn[r+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}if(i){for(let r=0,o=Qn.length;r<o;r+=2){const a=this.getShapeById(Qn[r]),l=this.getShapeById(Qn[r+1]);ei.shapeA=a,ei.shapeB=l,a&&(ei.bodyA=a.body),l&&(ei.bodyB=l.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new un;const Pa=new Ue,Be=globalThis.performance||{};if(!Be.now){let s=Date.now();Be.timing&&Be.timing.navigationStart&&(s=Be.timing.navigationStart),Be.now=()=>Date.now()-s}new b;const Xx={type:"postStep"},Yx={type:"preStep"},ir={type:bt.COLLIDE_EVENT_NAME,body:null,contact:null},jx=[],Kx=[],Zx=[],Jx=[],Jn=[],Qn=[],sr={type:"beginContact",bodyA:null,bodyB:null},rr={type:"endContact",bodyA:null,bodyB:null},ti={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ei={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Wh={type:"change"},rc={type:"start"},eu={type:"end"},so=new Xl,$h=new si,Qx=Math.cos(70*tf.DEG2RAD),Oe=new z,rn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class ty extends Tv{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Zi,this._lastTargetPosition=new z,this._quat=new Zi().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sh,this._sphericalDelta=new Sh,this._scale=1,this._panOffset=new z,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new z,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ny.bind(this),this._onPointerDown=ey.bind(this),this._onPointerUp=iy.bind(this),this._onContextMenu=hy.bind(this),this._onMouseWheel=oy.bind(this),this._onKeyDown=ay.bind(this),this._onTouchStart=ly.bind(this),this._onTouchMove=cy.bind(this),this._onMouseDown=sy.bind(this),this._onMouseMove=ry.bind(this),this._interceptControlDown=dy.bind(this),this._interceptControlUp=uy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wh),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<Qx?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(Wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Oe.copy(i).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ey(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ny(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eu),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sy(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ge.DOLLY;break;case wi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}break;case wi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(rc)}function ry(s){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function oy(s){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(s.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(eu))}function ay(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ly(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ge.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ge.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(rc)}function cy(s){switch(this._trackPointer(s),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ge.NONE}}function hy(s){this.enabled!==!1&&s.preventDefault()}function dy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rt={startMoney:8e3,startDebt:15e5,dayStart:6,dayEnd:22,sleepWarnHour:21,daySeconds:150,speeds:[1,2,4],chefDailyLimit:3,evaporation:40,nightEvapMul:.5,waterPerDrop:1.2,nutrientPerPot:60,minFill:.6,goodFill:.9,trowelScoop:8,shovelScoop:16,monthDays:7,evictAfter:3,lateFeeRate:.1,debtInterest:.01,utilBase:4e3,utilPerPot:600,fertNutrient:35,limePH:.5,idealMoisture:[35,78],idealPH:[6,6.8],idealNutrient:[40,85],boostPerIdeal:.25,dripOn:50,dripOff:68,dripPerHour:30,dripDryTarget:40,autoFillPerHour:24,autoHarvestWait:.5,utilPerDevice:1500},ri={drip:{name:"점적 호스",icon:"🚰",desc:"수분이 50% 아래면 알아서 물을 줘요"},planter:{name:"자동 파종기",icon:"🤖",desc:"빈 화분에 흙을 채우고 골라 둔 걸 심어요"},harvester:{name:"수확 집게",icon:"🦾",desc:"수확 적기가 되면 대신 거둬요 · 죽은 식물도 치워요"}},Ve=[{name:"단칸방 창가",icon:"🏚️",slots:4,price:0,rent:3e4,desc:"페트병 화분 4칸"},{name:"베란다 선반",icon:"🪜",slots:8,price:6e4,rent:6e4,desc:"화분 8칸 · 토분, 고급 물뿌리개 해금"},{name:"마당 텃밭",icon:"🏡",slots:16,price:25e4,rent:11e4,desc:"화분 16칸 · 대형 화분, 원예 삽, 큐어링 선반 해금"},{name:"비닐하우스",icon:"🛖",slots:24,price:6e5,rent:18e4,desc:"화분 24칸 · 따뜻해서 빨리 자라지만 습해요",growth:1.2,evap:.7,rot:1.6}],nu=()=>Ve[A.tier].growth??1,_r={pet:{name:"페트병 화분",icon:"🧴",radius:.15,height:.3,cap:30,bonus:.9},small:{name:"토분",icon:"🪴",radius:.22,height:.32,cap:45,bonus:1},large:{name:"대형 화분",icon:"🏺",radius:.3,height:.38,cap:70,bonus:1.15}},yi={field:{name:"마당 흙",color:9067061,quality:[.35,.7],ph:[5.2,6.2]},premium:{name:"상토",color:3811355,quality:[.88,.96],ph:[6.3,6.7]}},Ge={seed:{name:"양파 씨앗",icon:"🌰",stages:{sprout:.6,leaf:1.6,bulb:1.4},leaves0:0,leafGain:11,weight0:8,boltChance:.02,qualityBonus:.05},seedling:{name:"양파 모종",icon:"🌱",stages:{sprout:0,leaf:1.3,bulb:1.3},leaves0:3,leafGain:9,weight0:8,boltChance:.07,qualityBonus:.02},set:{name:"양파 구근",icon:"🧅",stages:{sprout:0,leaf:.7,bulb:1.1},leaves0:2,leafGain:8.5,weight0:25,boltChance:.04,qualityBonus:0}},fy=21.6,zo=.6,ko=.4,qh=1.5,or={sprout:{name:"발아",icon:"🌰"},leaf:{name:"잎 성장",icon:"🌿"},bulb:{name:"구 비대",icon:"🧅"},mature:{name:"수확 적기",icon:"✨"}},py=[{g:"S",min:.92},{g:"A",min:.78},{g:"B",min:.6},{g:"C",min:.4},{g:"D",min:-1/0}],my={wholesale:{S:32e3,A:2e4,B:13e3,C:8e3,D:3e3},chef:{S:6e4,A:36e3,B:18e3}},Ll={S:8,A:5,B:3,C:2,D:1},ro={growth:{name:"생장 촉진",icon:"⏩",desc:"성장 기간 -8% / 레벨"},quality:{name:"품종 개량",icon:"🧬",desc:"품질 +0.04, 추대 확률↓ / 레벨"},thrift:{name:"살림 절약",icon:"💡",desc:"전기·수도 요금 -15% / 레벨"},water:{name:"수분 관리",icon:"💧",desc:"증발 -8%, 물 효율 +15% / 레벨"},trade:{name:"협상술",icon:"🤝",desc:"모든 판매가 +8% / 레벨"}},_o=5,Il=s=>(s+1)*4,Po={student:{name:"동네 대학생",icon:"🧑‍🎓",wage:8e3,hours:[14,20],rate:6,does:["water"],desc:"오후에만 와요 · 물 주기만 해요",need:{tier:1}},neighbor:{name:"옆집 아주머니",icon:"👩‍🌾",wage:16e3,hours:[8,18],rate:10,does:["water","harvest"],desc:"물 주기 · 익으면 바로 수확",need:{tier:2}},farmer:{name:"귀농 청년",icon:"🧑‍🌾",wage:28e3,hours:[6,21],rate:16,does:["water","harvest","plant","dry"],desc:"물 · 흙 채우고 심기 · 단수 후 수확까지",need:{tier:3}}},Dl=[35,65],iu=[20,35],Lo={moisture:{icon:"💧",name:"물 조절",need:{harvested:1},text:"수분은 35~78%가 좋아요. 수확 직전(구 비대 막바지)에는 물을 끊어 45% 아래로 두면 양파가 단단해져 등급이 올라가요."},nutrient:{icon:"🧪",name:"영양과 비료",need:{harvested:2},text:"잎과 구가 자라면서 흙의 영양을 먹어요. 영양이 40~85면 더 빨리 자라요(⏩). 비료 한 번에 +35, 90을 넘으면 오히려 해로워요. 수확 직전에 주면 저장성이 떨어져요."},leaves:{icon:"🌿",name:"잎 = 구 크기",need:{harvested:3},text:"잎이 많을수록 양파가 커져요. 잎 성장기에 환경을 좋게 유지하는 게 핵심이에요."},soil:{icon:"🟫",name:"좋은 흙",need:{tier:1},text:"마당 흙은 품질이 들쭉날쭉해요. 상토는 영양·품질이 높아서 큰 양파가 나와요."},ph:{icon:"⚗️",name:"흙 산도(pH)",need:{harvested:5},text:"양파는 pH 6.0~6.8을 좋아해요. 맞춰 주면 더 빨리 자라요(⏩). 마당 흙은 산성이라 ⚪ 석회(8)를 뿌려요. 한 번에 pH +0.5예요."},auto:{icon:"🚰",name:"자동화 설비",need:{tier:1},text:"상점의 설비를 사서 화분 패널에서 설치하면 일을 대신해 줘요. 점적 호스는 물을 계속 대 주지만, 그냥 두면 수확 전 단수를 못 해서 덜 단단해져요. 마당에선 급수 타이머·파종기·수확 집게도 살 수 있어요. 설비마다 공과금이 붙어요."},greenhouse:{icon:"🛖",name:"하우스 재배",need:{tier:3},text:"하우스 안은 따뜻해서 양파가 20% 빨리 자라고 물도 덜 말라요. 대신 습해서 물이 넘치면 훨씬 빨리 썩어요. 물은 조금씩 자주!"},staff:{icon:"👷",name:"알바생 쓰기",need:{tier:1},text:"알바 메뉴에서 일손을 구할 수 있어요. 설비와 달리 설치 없이 모든 화분을 돌봐 주지만, 정해진 시간에만 일하고 매일 아침 일당이 나가요. 일당을 못 주면 그만둬요."},seed:{icon:"🌰",name:"씨앗과 모종",need:{harvested:7},text:"씨앗은 싸고 느리지만 품질 보너스가 있어요. 모종은 그 중간이고 가끔 꽃대(추대)가 올라와요."}},xo=[{id:"set",name:"양파 구근",icon:"🧅",desc:"쉽고 빠름 · 약 2일",price:1500,give:{set:1}},{id:"pet",name:"페트병 화분",icon:"🧴",desc:"흙 30칸 · 작아서 구가 덜 커요",price:500,pot:"pet"},{id:"seedling",name:"양파 모종",icon:"🌱",desc:"약 2.5일 · 가끔 추대",price:700,give:{seedling:1},need:{know:"seed"}},{id:"seed",name:"양파 씨앗",icon:"🌰",desc:"약 3.5일 · 품질 보너스",price:300,give:{seed:1},need:{know:"seed"}},{id:"premiumSoil",name:"상토 1포대",icon:"🟫",desc:"16삽 분량 · 영양·품질↑",price:5e3,give:{premiumScoops:16},need:{know:"soil"}},{id:"fertilizer",name:"비료",icon:"🧪",desc:"영양 +35",price:2e3,give:{fertilizer:1},need:{know:"nutrient"}},{id:"lime",name:"석회",icon:"⚪",desc:"pH +0.5",price:1500,give:{lime:1},need:{know:"ph"}},{id:"potSmall",name:"토분",icon:"🪴",desc:"흙 45칸 · 구 크기 보통",price:6e3,pot:"small",need:{tier:1}},{id:"goodCan",name:"고급 물뿌리개",icon:"🚿",desc:"물줄기가 넓고 빠름",price:15e3,once:"goodCan",need:{tier:1}},{id:"potLarge",name:"대형 화분",icon:"🏺",desc:"흙 70칸 · 구 크기 +15%",price:18e3,pot:"large",need:{tier:2}},{id:"shovel",name:"원예 삽",icon:"🪏",desc:"한 번에 두 배로 퍼요",price:12e3,once:"shovel",need:{tier:2}},{id:"drip",name:"점적 호스",icon:"🚰",desc:"화분 1개 자동 급수 · 설비 요금 +1,500/달",price:9e3,give:{drip:1},need:{tier:1}},{id:"dripTimer",name:"급수 타이머",icon:"⏲️",desc:"점적 호스가 수확 직전엔 물을 끊어요(단수)",price:2e4,once:"dripTimer",need:{tier:2}},{id:"planter",name:"자동 파종기",icon:"🤖",desc:"화분 1개 흙 보충 + 자동 심기",price:22e3,give:{planter:1},need:{tier:2}},{id:"harvester",name:"수확 집게",icon:"🦾",desc:"화분 1개 자동 수확",price:3e4,give:{harvester:1},need:{tier:2}},{id:"curingRack",name:"큐어링 선반",icon:"🪵",desc:"수확한 양파를 말려 품질 +0.05",price:25e3,once:"curingRack",need:{tier:2}}],Ls=[{icon:"🥄",text:"모종삽(2)으로 흙 포대를 눌러 흙 뜨기",done:s=>s.flags.scooped},{icon:"🧴",text:"페트병을 눌러 흙을 60% 넘게 채우기",done:s=>s.pots.some(t=>_n(t)>=rt.minFill)||s.stats.harvested>0},{icon:"🧅",text:"구근(4)을 들고 페트병 위에서 떨어뜨리기",done:s=>s.pots.some(t=>t.plant)||s.stats.harvested>0},{icon:"💧",text:"물뿌리개(3)를 꾹 눌러 수분 35% 넘기기",done:s=>s.pots.some(t=>t.plant&&t.moisture>=35)||s.stats.harvested>0},{icon:"⏳",text:"잎이 쓰러질(✨) 때까지 물 주며 기다리기",done:s=>s.pots.some(t=>{var e;return((e=t.plant)==null?void 0:e.stage)==="mature"})||s.stats.harvested>0},{icon:"✋",text:"손(1)으로 ✨ 화분을 눌러 수확하기",done:s=>s.stats.harvested>0},{icon:"💵",text:"판매 메뉴에서 양파 팔기",done:s=>s.stats.sold>0},{icon:"📮",text:"월말 고지서가 오면 월세 내기",done:s=>s.bills.some(t=>t.paid)},{icon:"🏠",text:`${(Ve[1].price/1e4).toFixed(0)}만원 모아 베란다로 확장하기`,done:s=>s.tier>=1},{icon:"🟫",text:"상토로 A등급 이상 키우기",done:s=>s.stats.best==="S"||s.stats.best==="A"},{icon:"🏡",text:"마당 텃밭으로 확장하기",done:s=>s.tier>=2},{icon:"🏦",text:"빚 모두 갚기",done:s=>s.debt<=0}],Ho="onion-debt-save-v3";let A=null;const Xh=(s,t)=>s+Math.random()*(t-s),Is=(s,t,e)=>Math.max(t,Math.min(e,s)),Yt=s=>`${Math.round(s).toLocaleString("ko-KR")}원`;function su(){return A={day:1,time:rt.dayStart,money:rt.startMoney,debt:rt.startDebt,tier:0,inv:{seed:0,seedling:0,set:2,fertilizer:0,lime:0,premiumScoops:0,drip:0,planter:0,harvester:0},owned:{goodCan:!1,curingRack:!1,shovel:!1,dripTimer:!1},known:{},flags:{scooped:!1},quest:0,pots:[],nextPotId:1,onions:[],nextOnionId:1,research:{points:0,growth:0,quality:0,thrift:0,water:0,trade:0},month:1,bills:[],nextBillId:1,pendingBill:null,worker:null,chefLeft:rt.chefDailyLimit,stats:{harvested:0,sold:0,earned:0,best:null,sCount:0,rentPaid:0},ended:null},Nl("pet"),Nl("pet"),A}function gy(){try{return!!localStorage.getItem(Ho)}catch{return!1}}function Tn(){try{localStorage.setItem(Ho,JSON.stringify(A))}catch{}}function vy(){try{const s=localStorage.getItem(Ho);if(s)return A=JSON.parse(s),_y(),A}catch{}return su()}function _y(){var s,t;for(const e of Object.keys(ri))(s=A.inv)[e]??(s[e]=0);(t=A.owned).dripTimer??(t.dripTimer=!1),A.worker??(A.worker=null);for(const e of A.pots)e.auto??(e.auto=ru())}function xy(){try{localStorage.removeItem(Ho)}catch{}}const Yh="SABCD";function Vo(s){return s?!(s.harvested!=null&&A.stats.harvested<s.harvested||s.tier!=null&&A.tier<s.tier||s.know&&!A.known[s.know]):!0}const Ia=s=>Vo(s);function Da(s){return s?s.tier!=null?`${Ve[s.tier].icon} ${Ve[s.tier].name} 필요`:s.know?`${Lo[s.know].icon} 노하우 필요`:s.harvested!=null?`수확 ${s.harvested}회`:"":""}function yy(){const s=[];for(const[t,e]of Object.entries(Lo))!A.known[t]&&Vo(e.need)&&(A.known[t]=!0,s.push(t));return s}function My(){const s=[];for(;A.quest<Ls.length&&Ls[A.quest].done(A);)s.push(Ls[A.quest++]);return s}function by(){const s=Ve[A.tier+1];return s?A.money<s.price?"돈이 부족해요":(A.money-=s.price,A.tier++,null):"이미 최대로 확장했어요"}const Io=()=>Ve[A.tier].slots;function Nl(s){if(A.pots.length>=Io())return null;const t=new Set(A.pots.map(i=>i.slot));let e=0;for(;t.has(e);)e++;const n={id:A.nextPotId++,type:s,slot:e,soil:0,qualSum:0,phSum:0,lime:0,nutrients:0,moisture:0,plant:null,wetDays:0,dryDays:0,warned:{},auto:ru()};return A.pots.push(n),n}function ru(){return{drip:!1,planter:!1,harvester:!1,dripping:!1,seed:"set",soil:"field",bank:0,fillAcc:0}}function Sy(s){return s.plant?"식물을 먼저 치워야 해요":s.soil>0?"흙을 먼저 비워야 해요":Object.keys(ri).some(t=>s.auto[t])?"설비를 먼저 떼어 내야 해요":(A.pots.splice(A.pots.indexOf(s),1),null)}const kn=s=>A==null?void 0:A.pots.find(t=>t.id===s),xr=s=>_r[s.type].cap,_n=s=>s.soil/xr(s),pr=s=>s.soil?s.qualSum/s.soil:0,zs=s=>s.soil?Is(s.phSum/s.soil+s.lime,4,8.5):7,wy=()=>A.owned.shovel?rt.shovelScoop:rt.trowelScoop;function oc(s){const t=yi[s];return{kind:s,quality:Xh(...t.quality),ph:Xh(...t.ph)}}function ac(s,t){return s.soil>=xr(s)?!1:(s.soil++,s.qualSum+=t.quality,s.phSum+=t.ph,s.nutrients=Math.min(100,s.nutrients+t.quality*rt.nutrientPerPot/xr(s)),!0)}function Ey(s,t){return s.soil<=0?!1:(s.moisture=Math.min(120,s.moisture+t),!0)}function Ty(){return rt.waterPerDrop*(1+.15*A.research.water)}function Ul(s){return s.plant?"이미 무언가 심어져 있어요":_n(s)<rt.minFill?"흙이 부족해요 (60% 이상)":null}function lc(s,t){const e=Ge[t];s.warned={},s.plant={kind:t,stage:e.stages.sprout>0?"sprout":"leaf",progress:0,leaves:e.leaves0,weight:e.weight0,health:1,firm:0,lateFert:!1,bolted:!1,matureDays:0,fill:_n(s),dead:null,age:0}}function Gn(s,t){return Math.max(.2,Ge[s.kind].stages[t]*(1-.08*A.research.growth))}function jh(s,t=1){if(s.dead||s.stage==="mature")return 0;const e=["sprout","leaf","bulb"];let n=Gn(s,s.stage)-s.progress;for(let i=e.indexOf(s.stage)+1;i<e.length;i++)n+=Gn(s,e[i]);return Math.max(0,n)/t}function Ay(s){const t=s.moisture,e=t<15?.15:t<35?.55:t<=78?1:t<=92?.7:.4,n=Is(1-Math.abs(zs(s)-6.4)/1.6,.2,1),i=s.nutrients>85?.8:Is(s.nutrients/40,.2,1),r=Is(pr(s),0,1),o=_n(s)<rt.minFill?.7:1,a=(.35*e+.2*n+.25*i+.2*r)*o;return{moist:e,ph:n,nut:i,soil:r,total:a}}const Na=(s,[t,e])=>s>=t&&s<=e;function Fl(s){const t=Na(s.moisture,rt.idealMoisture),e=s.soil>0&&Na(zs(s),rt.idealPH),n=Na(s.nutrients,rt.idealNutrient),i=t?1+rt.boostPerIdeal*((e?1:0)+(n?1:0)):1;return{moist:t,ph:e,nut:n,speed:i}}function Ua(s){const t=zs(s),e=s.nutrients;return{lime:t>rt.idealPH[1]?"over":Math.max(0,Math.ceil((rt.idealPH[0]-t)/rt.limePH-1e-9)),fert:e>rt.idealNutrient[1]?"over":Math.max(0,Math.ceil((rt.idealNutrient[0]-e)/rt.fertNutrient-1e-9))}}function Cy(s){if(A.inv.fertilizer<=0)return"비료가 없어요";if(s.soil<=0)return"흙이 없어요";A.inv.fertilizer--,s.nutrients=Math.min(100,s.nutrients+rt.fertNutrient);const t=s.plant;return t&&!t.dead&&(t.stage==="mature"||t.stage==="bulb"&&t.progress>=Gn(t,"bulb")-zo)&&(t.lateFert=!0),null}function Ry(s){return A.inv.lime<=0?"석회가 없어요":s.soil<=0?"흙이 없어요":zs(s)>=7.6?"이미 충분히 알칼리성이에요":(A.inv.lime--,s.lime+=rt.limePH,null)}function Py(s){s.plant=null}function Ly(s){return s.plant?"식물을 먼저 뽑아야 해요":(Object.assign(s,{soil:0,qualSum:0,phSum:0,lime:0,nutrients:0,moisture:0,wetDays:0,dryDays:0}),null)}const yr=()=>A.worker?Po[A.worker.id]:null,yo=(s=A.time)=>{const t=yr();return!!t&&s>=t.hours[0]&&s<t.hours[1]};function Iy(s){var e;const t=Po[s];return t?Vo(t.need)?((e=A.worker)==null?void 0:e.id)===s?"이미 일하고 있어요":A.money<t.wage?"첫날 일당이 부족해요":(A.money-=t.wage,A.worker={id:s,days:0,acc:0,cursor:0,done:0},null):"아직 구할 수 없어요":"없는 사람이에요"}function Dy(){return A.worker?(A.worker=null,null):"고용한 알바생이 없어요"}function Ny(s){const t=yr();if(t){if(A.money<t.wage){A.worker=null,s.push({type:"bad",icon:t.icon,text:`일당 ${Yt(t.wage)}을 못 줘서 ${t.name}이(가) 그만뒀어요`});return}A.money-=t.wage,A.worker.days++,A.worker.done=0,s.push({type:"warn",icon:t.icon,text:`${t.name} 일당 ${Yt(t.wage)}을 줬어요`})}}function Uy(s,t){const e=s.plant,n=i=>t.does.includes(i);if(e&&n("harvest")){if(e.dead)return"clear";if(e.stage==="mature"&&(!n("dry")||e.firm>=ko||e.matureDays>=rt.autoHarvestWait))return"harvest"}if(e&&!e.dead&&n("water")&&s.soil>0){const[i]=n("dry")&&cc(e)?iu:Dl;if(s.moisture<i)return"water"}return!e&&n("plant")&&ou.some(i=>A.inv[i]>0)?"plant":null}const ou=["set","seedling","seed"];function Fy(s,t,e){const n=yr();if(!n||!yo(t))return;const i=A.worker;i.acc=Math.min(i.acc+n.rate*s,n.rate);const r=A.pots;for(;i.acc>=1&&r.length;){let o=null,a=null;for(let l=0;l<r.length;l++){const c=r[(i.cursor+l)%r.length];if(a=Uy(c,n),a){o=c,i.cursor=(i.cursor+l+1)%r.length;break}}if(!o){i.acc=Math.min(i.acc,1);break}i.acc--,i.done++,Oy(o,a,n,e)}}function Oy(s,t,e,n){const i=`#${s.id}`;switch(t){case"water":{const r=e.does.includes("dry")&&cc(s.plant)?iu[1]:Dl[1];s.moisture=Math.max(s.moisture,r);break}case"clear":s.plant=null,n.push({type:"warn",kind:"dead",potId:s.id,icon:e.icon,text:`${i} ${e.name}이(가) 죽은 식물을 치웠어요`});break;case"harvest":{const{onion:r}=hc(s);n.push({type:"good",kind:"harvest",potId:s.id,onion:r,icon:e.icon,text:`${i} ${e.name} 수확: ${r.grade}등급 ${r.weight}g`});break}case"plant":{const r=Math.ceil(xr(s)*rt.goodFill);for(;s.soil<r&&ac(s,oc("field")););const o=ou.find(a=>A.inv[a]>0);A.inv[o]--,lc(s,o),s.moisture=Math.max(s.moisture,Dl[1]),n.push({type:"good",kind:"stage",potId:s.id,icon:e.icon,text:`${i} ${e.name}이(가) ${Ge[o].name}을(를) 심었어요`});break}}}function By(s){const t=[];return A.time+=s,Ol(s,1,t,A.time),t}function Ol(s,t,e,n){const i=s/24,r=rt.evaporation*(1-.08*A.research.water)*i*t*(Ve[A.tier].evap??1);for(const o of A.pots){const a=o.plant,l=a&&!a.dead;l&&$y(o,a,i,e),o.soil>0&&(o.moisture=Math.max(0,o.moisture-r*(l?1:.6))),Gy(o,s,e)}Fy(s,n,e)}const au=()=>A.pots.reduce((s,t)=>s+Object.keys(ri).filter(e=>t.auto[e]).length,0);function zy(s,t){return s.auto[t]?"이미 설치돼 있어요":A.inv[t]<=0?`${ri[t].name}가 없어요. 상점에서 사 오세요`:(A.inv[t]--,s.auto[t]=!0,null)}function ky(s,t){return s.auto[t]?(s.auto[t]=!1,t==="drip"&&(s.auto.dripping=!1),A.inv[t]++,null):"설치돼 있지 않아요"}function Hy(s){const t=Object.keys(Ge).filter(e=>e==="set"||A.known.seed);s.auto.seed=t[(t.indexOf(s.auto.seed)+1)%t.length]}function Vy(s){s.auto.soil=s.auto.soil==="field"&&A.known.soil?"premium":"field"}const cc=s=>s.stage==="mature"||s.stage==="bulb"&&s.progress>=Gn(s,"bulb")-zo;function Gy(s,t,e){const n=s.auto,i=`#${s.id}`;let r=s.plant;if(n.harvester&&r){if(r.dead)s.plant=r=null,e.push({type:"warn",kind:"dead",potId:s.id,icon:"🦾",text:`${i} 수확 집게가 죽은 식물을 치웠어요`});else if(r.stage==="mature"&&(r.firm>=ko||r.matureDays>=rt.autoHarvestWait)){const{onion:o}=hc(s);r=null,e.push({type:"good",kind:"harvest",potId:s.id,onion:o,icon:"🦾",text:`${i} 자동 수확: ${o.grade}등급 ${o.weight}g`})}}if(n.planter&&!r){const o=Math.ceil(xr(s)*rt.goodFill);n.fillAcc=(n.fillAcc??0)+rt.autoFillPerHour*t;let a=Math.min(o-s.soil,Math.floor(n.fillAcc));for(n.fillAcc-=Math.floor(n.fillAcc);a-- >0;){let l="field";if(n.soil==="premium"&&(n.bank<=0&&A.inv.premiumScoops>0&&(A.inv.premiumScoops--,n.bank+=rt.trowelScoop),n.bank>0&&(n.bank--,l="premium")),!ac(s,oc(l)))break}s.soil>=o&&!Ul(s)&&(A.inv[n.seed]>0?(A.inv[n.seed]--,lc(s,n.seed),e.push({type:"good",kind:"stage",potId:s.id,icon:"🤖",text:`${i} ${Ge[n.seed].name}을(를) 자동으로 심었어요`})):Mo(s,"noSeed",!0,e,{type:"warn",icon:"🤖",text:`${i} 파종기에 넣을 ${Ge[n.seed].name}이(가) 없어요`}))}if((s.plant||!n.planter)&&(s.warned.noSeed=!1),n.drip){r=s.plant;const o=r&&!r.dead&&s.soil>0,a=o&&A.owned.dripTimer&&cc(r),l=a?rt.dripDryTarget:rt.dripOff;!o||s.moisture>=l?n.dripping=!1:s.moisture<(a?rt.dripDryTarget-15:rt.dripOn)&&(n.dripping=!0),n.dripping&&(s.moisture=Math.min(l,s.moisture+rt.dripPerHour*t))}}function Wy(){const s=[];for(let n=A.time;n<rt.dayEnd;n+=.5)Ol(Math.min(.5,rt.dayEnd-n),1,s,n);const e=24-Math.max(A.time,rt.dayEnd)+rt.dayStart;for(let n=0;n<e;n+=.5)Ol(.5,rt.nightEvapMul,s,rt.dayEnd+n);if(A.day++,A.time=rt.dayStart,A.chefLeft=rt.chefDailyLimit,Ny(s),(A.day-1)%rt.monthDays===0){const n=Ky();A.pendingBill=n.id}else mr()===1&&s.unshift({type:"warn",icon:"📮",text:`내일 아침 ${A.month}월 고지서가 와요. 월세 ${Yt(dc().total)} 준비!`});return Tn(),s}function Mo(s,t,e,n,i){e&&!s.warned[t]?(s.warned[t]=!0,n.push({potId:s.id,...i})):e||(s.warned[t]=!1)}function $y(s,t,e,n){const i=`#${s.id}`,r=Ge[t.kind],o=Ay(s),a=s.moisture;if(t.age+=e,a<15?t.health-=.3*e:a>92&&(t.health-=.15*e),o.ph<.4&&(t.health-=.1*e),s.nutrients>90&&(t.health-=.08*e),a>92){if(s.wetDays+=e*(Ve[A.tier].rot??1),s.wetDays>=.75)return Fa(s,t,"rot",n,`${i} 과습으로 썩었어요`)}else s.wetDays=0;if(Mo(s,"wet",a>92,n,{type:"warn",icon:"🌊",text:`${i} 물이 너무 많아요! 썩을 수 있어요`}),a<=.5){if(s.dryDays+=e,s.dryDays>=1)return Fa(s,t,"dry",n,`${i} 바싹 말라 죽었어요`)}else s.dryDays=0;if(Mo(s,"dry",a<15,n,{type:"warn",icon:"🏜️",text:`${i} 흙이 말랐어요. 물 주세요!`}),t.health<=0)return Fa(s,t,"weak",n,`${i} 시들어 죽었어요`);const l=o.total>.35?1:.5,c=Fl(s).speed*nu(),h=e*c;switch(t.stage){case"sprout":{a>=25&&(t.progress+=h),t.progress>=Gn(t,"sprout")&&(t.stage="leaf",t.progress=0,t.leaves=1,n.push({type:"good",kind:"stage",potId:s.id,icon:"🌱",text:`${i} 싹이 텄어요!`}));break}case"leaf":{const u=Gn(t,"leaf");t.leaves=Math.min(14,t.leaves+r.leafGain*o.total*h/u),s.nutrients=Math.max(0,s.nutrients-15*h/u),t.progress+=h*l,t.progress>=u&&(t.stage="bulb",t.progress=0,Math.random()<r.boltChance*(1-.15*A.research.quality)?(t.bolted=!0,n.push({type:"bad",kind:"stage",potId:s.id,icon:"🌼",text:`${i} 꽃대가 올라왔어요 (추대)`})):n.push({type:"good",kind:"stage",potId:s.id,icon:"🧅",text:`${i} 구가 커지기 시작!`}));break}case"bulb":{const u=Gn(t,"bulb"),d=_r[s.type].bonus;t.weight+=t.leaves*o.total*fy*d*(t.bolted?.5:1)*h/u,s.nutrients=Math.max(0,s.nutrients-20*h/u),t.progress+=h*l,t.progress>=u-zo&&a<45&&(t.firm+=h),t.progress>=u&&(t.stage="mature",n.push({type:"good",kind:"mature",potId:s.id,icon:"✨",text:`${i} 수확 적기!`}));break}case"mature":t.matureDays+=e,a<45&&(t.firm+=e),t.matureDays>qh&&(t.health-=.25*e),Mo(s,"overripe",t.matureDays>qh,n,{type:"warn",icon:"⏰",text:`${i} 과숙되고 있어요. 빨리 수확!`});break}t.health=Is(t.health,0,1)}function Fa(s,t,e,n,i){t.dead=e,n.push({type:"bad",kind:"dead",potId:s.id,icon:"💀",text:i})}function lu(s){return py.find(t=>s>=t.min).g}function cu(s){const t=Ge[s.kind],e=Math.min(Math.pow(s.weight/320,1.3),1.1),n=Is(s.firm/ko,0,1)*(s.lateFert?.6:1);let i=.55*e+.25*s.health+.2*n+t.qualityBonus+.04*A.research.quality+(A.owned.curingRack?.05:0)+(s.fill>=rt.goodFill?.02:0)-(s.bolted?.3:0);return s.stage==="bulb"&&(i-=.1),i}function hc(s){const t=s.plant;if(!t||t.dead)return{error:"수확할 양파가 없어요"};if(t.stage==="sprout"||t.stage==="leaf")return{error:"아직 구가 생기지 않았어요"};const e=cu(t),n={id:A.nextOnionId++,grade:lu(e),score:e,weight:Math.round(t.weight),kind:t.kind,day:A.day};return A.onions.push(n),A.stats.harvested++,n.grade==="S"&&A.stats.sCount++,(!A.stats.best||Yh.indexOf(n.grade)<Yh.indexOf(A.stats.best))&&(A.stats.best=n.grade),s.plant=null,{onion:n}}function bo(s,t){const e=my[t][s.grade];return e?Math.round(e*(1+.08*A.research.trade)/100)*100:0}function Kh(s,t){const e=A.onions.findIndex(r=>r.id===s);if(e<0)return"양파가 없어요";const n=A.onions[e],i=bo(n,t);if(!i)return"이 등급은 받지 않아요";if(t==="chef"){if(A.chefLeft<=0)return"주방장의 오늘 주문이 끝났어요";A.chefLeft--}return A.onions.splice(e,1),A.money+=i,A.stats.sold++,A.stats.earned+=i,null}function qy(s){const t=A.onions.findIndex(n=>n.id===s);if(t<0)return"양파가 없어요";const[e]=A.onions.splice(t,1);return A.research.points+=Ll[e.grade],null}function Xy(s){const t=A.research[s];if(t>=_o)return"최대 레벨이에요";const e=Il(t);return A.research.points<e?"연구 포인트가 부족해요":(A.research.points-=e,A.research[s]++,null)}function Yy(s){const t=xo.find(e=>e.id===s);if(!t)return"없는 상품";if(!Vo(t.need))return"아직 살 수 없어요";if(t.once&&A.owned[t.once])return"이미 가지고 있어요";if(t.pot&&A.pots.length>=Io())return"화분 놓을 자리가 없어요. 집을 확장하세요";if(A.money<t.price)return"돈이 부족해요";if(A.money-=t.price,t.give)for(const[e,n]of Object.entries(t.give))A.inv[e]+=n;return t.pot&&Nl(t.pot),t.once&&(A.owned[t.once]=!0),null}function jy(s){const t=Math.floor(Math.min(s,A.money,A.debt));return t<=0?0:(A.money-=t,A.debt-=t,A.debt<=0&&(A.ended="clear"),Tn(),t)}const mr=()=>rt.monthDays-(A.day-1)%rt.monthDays,oi=()=>A.bills.filter(s=>!s.paid),hu=s=>A.bills.find(t=>t.id===s),Bl=s=>Math.round(s/100)*100;function dc(){const s=Ve[A.tier].rent,t=Bl((rt.utilBase+rt.utilPerPot*A.pots.length+rt.utilPerDevice*au())*(1-.15*A.research.thrift)),e=Bl(oi().reduce((n,i)=>n+i.total,0)*rt.lateFeeRate);return{rent:s,util:t,late:e,total:s+t+e}}function Ky(){const s=dc(),t=Bl(A.debt*rt.debtInterest);A.debt+=t;const e={id:A.nextBillId++,month:A.month,day:A.day,home:A.tier,pots:A.pots.length,devices:au(),unpaidBefore:oi().length,interest:t,...s,paid:!1};A.bills.push(e),A.month++;const n=A.bills.filter(i=>i.paid);return n.length>6&&A.bills.splice(A.bills.indexOf(n[0]),1),e}function Zh(s){const t=hu(s);return!t||t.paid?"이미 낸 고지서예요":A.money<t.total?"돈이 부족해요":(A.money-=t.total,t.paid=!0,A.stats.rentPaid+=t.total,null)}function Zy(){return oi().length>=rt.evictAfter&&(A.ended="evicted"),A.ended==="evicted"}let Nn=null,Ci=null,Do=null,Yi=!1;try{Yi=localStorage.getItem("onion-muted")==="1"}catch{}function No(){if(!Nn){const s=window.AudioContext||window.webkitAudioContext;if(!s)return null;Nn=new s,Ci=Nn.createGain(),Ci.gain.value=Yi?0:.45,Ci.connect(Nn.destination),Do=Nn.createBuffer(1,Nn.sampleRate,Nn.sampleRate);const t=Do.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Nn.state==="suspended"&&Nn.resume(),Nn}function du(s,t,e,n,i){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(e,t+n),s.gain.exponentialRampToValueAtTime(1e-4,t+i)}function Pe(s,t,{type:e="sine",vol:n=.25,at:i=0,slide:r=0,attack:o=.006}={}){const a=No();if(!a||Yi)return;const l=a.currentTime+i,c=a.createOscillator(),h=a.createGain();c.type=e,c.frequency.setValueAtTime(s,l),r&&c.frequency.exponentialRampToValueAtTime(Math.max(40,s+r),l+t),du(h,l,n,o,t),c.connect(h).connect(Ci),c.start(l),c.stop(l+t+.02)}function bs(s,{freq:t=800,q:e=1,vol:n=.25,at:i=0,filter:r="lowpass",slideTo:o=0}={}){const a=No();if(!a||Yi)return;const l=a.currentTime+i,c=a.createBufferSource();c.buffer=Do;const h=a.createBiquadFilter();h.type=r,h.frequency.setValueAtTime(t,l),o&&h.frequency.exponentialRampToValueAtTime(o,l+s),h.Q.value=e;const u=a.createGain();du(u,l,n,.004,s),c.connect(h).connect(u).connect(Ci),c.start(l,Math.random()*.5),c.stop(l+s+.02)}const Jh={};function Oa(s,t){const e=performance.now();return e-(Jh[s]??0)<t?!1:(Jh[s]=e,!0)}let ar=null;const Un=(s,{type:t="triangle",vol:e=.18,gap:n=.08,dur:i=.18}={})=>s.forEach((r,o)=>Pe(r,i,{type:t,vol:e,at:o*n})),It={unlockAudio(){No()},isMuted:()=>Yi,setMuted(s){Yi=s;try{localStorage.setItem("onion-muted",s?"1":"0")}catch{}Ci&&(Ci.gain.value=s?0:.45),s&&this.pour(!1)},click(){Pe(1100,.035,{type:"square",vol:.05})},hover(){Oa("hover",80)&&Pe(1500,.025,{vol:.03})},tool(){Pe(660,.05,{type:"triangle",vol:.12}),Pe(990,.07,{type:"triangle",vol:.1,at:.04})},scoop(){bs(.16,{freq:1400,slideTo:300,vol:.4,filter:"bandpass",q:.8}),Pe(160,.12,{type:"triangle",vol:.18,slide:-50})},dump(){for(let s=0;s<6;s++)bs(.05,{freq:300+Math.random()*500,vol:.22,at:s*.035})},soilIn(){Oa("soil",45)&&bs(.04,{freq:500+Math.random()*400,vol:.08})},drip(){Oa("drip",70)&&Pe(1400+Math.random()*900,.05,{vol:.04,slide:600})},pour(s){const t=No();if(t){if(s&&!ar&&!Yi){const e=t.createBufferSource();e.buffer=Do,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=2200,n.Q.value=.7;const i=t.createGain();i.gain.setValueAtTime(1e-4,t.currentTime),i.gain.exponentialRampToValueAtTime(.12,t.currentTime+.08),e.connect(n).connect(i).connect(Ci),e.start(),ar={s:e,g:i}}else if(!s&&ar){const{s:e,g:n}=ar;n.gain.cancelScheduledValues(t.currentTime),n.gain.setValueAtTime(n.gain.value,t.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.12),e.stop(t.currentTime+.15),ar=null}}},plant(){Pe(320,.09,{type:"triangle",vol:.2,slide:-80}),Un([660,880],{gap:.07,vol:.12})},grow(){Un([523,659,784,1047],{gap:.07,vol:.12,dur:.22})},ready(){Un([784,988,1175,1568],{type:"sine",gap:.09,vol:.14,dur:.3})},harvest(){Pe(220,.12,{type:"triangle",vol:.3,slide:300}),Un([523,659,784,1047,1319],{gap:.06,vol:.13,dur:.25})},coin(){Pe(1319,.07,{type:"square",vol:.07}),Pe(1760,.25,{type:"square",vol:.07,at:.07})},buy(){Pe(880,.06,{type:"triangle",vol:.14}),Pe(1320,.12,{type:"triangle",vol:.12,at:.06})},bad(){Pe(200,.22,{type:"sawtooth",vol:.08,slide:-70})},dead(){Un([392,330,262,196],{type:"sawtooth",gap:.14,vol:.06,dur:.3})},warn(){Pe(880,.08,{type:"square",vol:.06}),Pe(880,.08,{type:"square",vol:.06,at:.14})},quest(){Un([784,1047,1319],{type:"sine",gap:.08,vol:.14,dur:.25})},unlock(){Un([523,659,784],{type:"triangle",gap:.1,vol:.14,dur:.3}),[1047,1319,1568].forEach(s=>Pe(s,.8,{type:"sine",vol:.08,at:.32,attack:.02}))},upgrade(){Un([392,523,659,784,1047],{type:"square",gap:.08,vol:.06,dur:.2}),[523,659,784,1047].forEach(s=>Pe(s,1.1,{type:"triangle",vol:.07,at:.42,attack:.03}))},sleep(){Un([784,659,523,392],{type:"sine",gap:.28,vol:.1,dur:.6})},morning(){Un([523,659,784,1047],{type:"sine",gap:.12,vol:.12,dur:.4})},pop(){Pe(500,.08,{type:"sine",vol:.15,slide:500})},mail(){Pe(988,.5,{type:"sine",vol:.16}),Pe(784,.7,{type:"sine",vol:.16,at:.32}),bs(.12,{freq:2600,filter:"highpass",vol:.08,at:.05})},paper(){for(let s=0;s<4;s++)bs(.07,{freq:3e3+Math.random()*2e3,filter:"bandpass",q:.6,vol:.12,at:s*.06})},tick(){Pe(1800,.03,{type:"square",vol:.04})},stamp(){bs(.12,{freq:260,vol:.5}),Pe(110,.18,{type:"sine",vol:.35,slide:-50})}},Te={GROUND:1,POT:2,SOIL:4,WATER:8,ITEM:16},oo=.026,ao=.014,lr=.026,Qh=500,td=600,ed=400,En=.02,Fn=.03,nd=.14,Jy=[-1.2,-.4,.4,1.2],Qy=[-1.25,-.45,.55,1.35,3.15,3.95],tM=Array.from({length:24},(s,t)=>new z(Jy[t%4],0,Qy[Math.floor(t/4)])),id=[{tier:1,x0:-1.65,x1:1.65,z0:-.85,z1:-.05},{tier:2,x0:-1.65,x1:1.65,z0:.15,z1:1.8},{tier:3,x0:-1.65,x1:1.65,z0:2.75,z1:4.4}],cr={field:new z(-2.15,0,-1.3),premium:new z(-2.15,0,-.45)},sd=[{target:[-.75,.15,-1],off:[0,2.3,3],zoom:1.35},{target:[-.35,.15,-.7],off:[0,2.7,3.4],zoom:1.4},{target:[0,.2,-.15],off:[0,3.3,3.9],zoom:1.5},{target:[0,.2,1.5],off:[0,4.1,4.4],zoom:1.6}],hr={green:new Bt(5025599),yellow:new Bt(12889418),dead:new Bt(5916208)},dr=[[0,922160],[5,1778245],[6,16754807],[8,11066623],[16,11066623],[18,16751196],[19.5,5917322],[21,1909584],[24,922160]],eM=s=>{for(let t=1;t<dr.length;t++)if(s<=dr[t][0]){const[e,n]=dr[t-1],[i,r]=dr[t];return new Bt(n).lerp(new Bt(r),(s-e)/(i-e))}return new Bt(dr[0][1])},ni=(s,t,e)=>{const n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};function rd(s,{scale:t=.2,fg:e="#fff",bg:n="rgba(30,20,10,0.72)"}={}){const i=document.createElement("canvas"),r=i.getContext("2d"),o='800 44px "Noto Sans KR", "Segoe UI Emoji", sans-serif';r.font=o;const a=Math.ceil(r.measureText(s).width)+44;i.width=a,i.height=72,r.font=o,n&&(r.fillStyle=n,r.beginPath(),r.roundRect(0,0,a,72,36),r.fill()),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.fillText(s,a/2,39);const l=new Jl(i);l.colorSpace=Ze;const c=new vv(new Gd({map:l,transparent:!0,depthTest:!1}));return c.renderOrder=20,c.scale.set(a/72*t,t,1),c}function od(s,t,e){const n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);const i=new Jl(n);return i.colorSpace=Ze,i}class nM{constructor(t,e){this.hooks=e,this.container=t,this.potViews=new Map,this.dirty=new Set,this.soil=[],this.water=[],this.items=[],this.fx=[],this.sparks=[],this.pulses=[],this.tool="hand",this.plantKind=null,this.shovelLoad=null,this.toolKick=0,this.pouring=!1,this.dropAccum=0,this.enabled=!1,this.tier=-1,this.pointer=new Pt,this.cursor=new z,this.hasCursor=!1,this.hover=null,this.raycaster=new Ev,this.cursorPlane=new si(new z(0,1,0),-.3),this.dummy=new Fe,this.time=0,this.camTween=null,this.initRenderer(),this.initPhysics(),this.buildEnvironment(),this.buildTools(),this.initParticles(),this.bindEvents(),this.setClock(9),this.clock=new wv,this.renderer.setAnimationLoop(()=>this.frame())}initRenderer(){const t=this.renderer=new pv({antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=ud,t.toneMapping=pd,this.container.appendChild(t.domElement),this.scene=new mv,this.scene.background=new Bt(2760752),this.scene.fog=new Zl(2760752,8,20),this.camera=new hn(45,innerWidth/innerHeight,.05,100);const e=this.controls=new ty(this.camera,t.domElement);e.enablePan=!1,e.enableDamping=!0,e.minDistance=1.4,e.maxPolarAngle=1.25,e.minAzimuthAngle=-1,e.maxAzimuthAngle=1,e.mouseButtons={LEFT:null,MIDDLE:wi.DOLLY,RIGHT:wi.ROTATE},e.touches={ONE:null,TWO:$i.DOLLY_ROTATE},e.autoRotateSpeed=.4,this.resetCamera(0,!0),this.hemi=new yv(16774368,7031339,.9),this.scene.add(this.hemi);const n=this.sun=new xh(16773590,2.2);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:20}),n.shadow.bias=-6e-4,n.target.position.set(0,0,-.5),this.scene.add(n,n.target),this.fill=new xh(16777215,.6),this.fill.position.set(1,4,6),this.scene.add(this.fill),this.lamp=new bv(16761466,0,7,1.4),this.lamp.position.set(0,2.05,-.9),this.scene.add(this.lamp),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),Number.isFinite(this.camera.position.x)?this.controls.maxDistance=this.camPreset((A==null?void 0:A.tier)??0).maxDist:this.resetCamera((A==null?void 0:A.tier)??0,!0)})}camPreset(t){const e=sd[Math.max(0,Math.min(sd.length-1,t))],n=Number.isFinite(this.camera.aspect)&&this.camera.aspect>0?this.camera.aspect:1.6,i=Math.min(Math.max(1,1.6/n),1.8),r=new z(...e.target),o=new z(...e.off).multiplyScalar(i);return{target:r,pos:r.clone().add(o),maxDist:o.length()*e.zoom}}resetCamera(t=(A==null?void 0:A.tier)??0,e=!1){const n=this.camPreset(t);if(this.controls.maxDistance=n.maxDist,e){this.controls.target.copy(n.target),this.camera.position.copy(n.pos),this.controls.update(),this.camTween=null;return}this.camTween={t:0,fromT:this.controls.target.clone(),fromP:this.camera.position.clone(),to:n}}initPhysics(){const t=this.phys=new qx({gravity:new b(0,-9.82,0)});t.broadphase=new Ts(t),t.allowSleep=!0,t.solver.iterations=8,t.defaultContactMaterial.friction=.5,t.defaultContactMaterial.restitution=.05,this.mat={ground:new Si("ground"),soil:new Si("soil"),water:new Si("water"),item:new Si("item")},t.addContactMaterial(new bi(this.mat.soil,this.mat.ground,{friction:.9,restitution:0})),t.addContactMaterial(new bi(this.mat.soil,this.mat.soil,{friction:.8,restitution:0})),t.addContactMaterial(new bi(this.mat.water,this.mat.ground,{friction:.1,restitution:0})),t.addContactMaterial(new bi(this.mat.item,this.mat.ground,{friction:.6,restitution:.3}));const e=new bt({mass:0,shape:new C_,material:this.mat.ground,collisionFilterGroup:Te.GROUND,collisionFilterMask:-1});e.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(e);for(const n of Object.values(cr))t.addBody(new bt({mass:0,shape:new vr(new b(.22,.25,.22)),position:new b(n.x,.25,n.z),material:this.mat.ground,collisionFilterGroup:Te.GROUND,collisionFilterMask:-1}))}buildEnvironment(){const t=this.scene,e=(U,B={})=>new Ee({color:U,roughness:.9,...B}),n=(U,B,Z,H={})=>{const K=new Dt(U,B);return K.position.copy(Z),K.castShadow=H.cast??!0,K.receiveShadow=!0,(H.parent??t).add(K),K},i=(U,B,Z)=>new z(U,B,Z),r=n(new re(6.2,.3,4.9),e(3877408),i(0,-.151,.2),{cast:!1});r.receiveShadow=!0;const o=n(new cn(80,80),e(6261308),i(0,-.004,0),{cast:!1});o.rotation.x=-Math.PI/2;const a=od(512,256,(U,B,Z)=>{U.fillStyle="#d9a866",U.fillRect(0,0,B,Z);for(let H=0;H<16;H++)U.fillStyle=H%2?"rgba(120,70,20,.08)":"rgba(255,240,200,.08)",U.fillRect(0,H*16,B,16);U.strokeStyle="rgba(110,60,20,.25)";for(let H=0;H<B;H+=128)U.beginPath(),U.moveTo(H,0),U.lineTo(H,Z),U.stroke()}),l=n(new cn(5.8,2.2),e(16777215,{map:a,roughness:.7}),i(0,.001,-.95),{cast:!1});l.rotation.x=-Math.PI/2;const c=n(new cn(5.8,2.5),e(8368714),i(0,.001,1.35),{cast:!1});c.rotation.x=-Math.PI/2;const h=n(new cn(3.4,1.7),e(6175519),i(0,.004,.97),{cast:!1});h.rotation.x=-Math.PI/2;const u=e(10185535);n(new re(3.5,.08,.06),u,i(0,.04,.12)),n(new re(3.5,.08,.06),u,i(0,.04,1.82)),n(new re(.06,.08,1.7),u,i(-1.72,.04,.97)),n(new re(.06,.08,1.7),u,i(1.72,.04,.97)),n(new re(5.8,.05,.1),e(8016434),i(0,.025,.15));const d=od(256,64,(U,B,Z)=>{U.fillStyle="#ece6d6",U.fillRect(0,0,B,Z),U.fillStyle="rgba(40,40,40,.35)";for(let H=6;H<Z;H+=5)for(let K=6;K<B-6;K+=42)U.fillRect(K,H,30+K*H%9,2);U.fillStyle="rgba(40,40,40,.7)",U.fillRect(6,4,90,7)}),p=n(new cn(3.3,.72),e(16777215,{map:d}),i(0,.003,-1.25),{cast:!1});p.rotation.x=-Math.PI/2,p.rotation.z=.015;const g=new qe;for(let U=0;U<6;U++)n(new re(3.3,.012,.11),e(12159829),i(0,.007,-.78+U*.13),{parent:g,cast:!1});t.add(g);const v=e(15852748),m=-2.1;n(new re(1.8,2.5,.12),v,i(-2,1.25,m)),n(new re(1.8,2.5,.12),v,i(2,1.25,m)),n(new re(2.2,.85,.12),v,i(0,.425,m)),n(new re(2.2,.45,.12),v,i(0,2.275,m)),n(new re(5.8,.1,.03),e(9067061),i(0,.05,m+.075));const f=e(16777215,{roughness:.5});n(new re(2.3,.08,.2),f,i(0,.85,m+.02)),n(new re(2.3,.06,.16),f,i(0,2.05,m)),n(new re(.06,1.2,.16),f,i(-1.12,1.45,m)),n(new re(.06,1.2,.16),f,i(1.12,1.45,m)),n(new re(.04,1.2,.1),f,i(0,1.45,m),{cast:!1}),n(new re(.12,2.5,2.3),v,i(-2.92,1.25,-.95)),this.skyMat=new On({color:11066623,fog:!1,side:Qe});const _=new Dt(new gn(60,24,12),this.skyMat);t.add(_),this.sunDisc=new Dt(new Vi(.28,24),new On({color:16773808})),this.moonDisc=new Dt(new Vi(.2,24),new On({color:15922431})),t.add(this.sunDisc,this.moonDisc);const y=new Dt(new gn(3,24,8,0,Math.PI*2,0,Math.PI/2),e(6262597));y.scale.set(2.2,.35,.6),y.position.set(-1,.2,-5),t.add(y);for(const[U,B,Z]of[[-1.6,-3.6,.9],[.9,-3.9,1.2],[2.6,-3.4,.8],[-3,-4,1.1]])n(new Es(.45*Z,1.3*Z,8),e(4161327),i(U,.9*Z,B),{cast:!1});n(new Ae(.005,.005,.5,4),e(2236962),i(0,2.3,-.9),{cast:!1}),this.shadeMat=e(16769712,{emissive:16756816,emissiveIntensity:0}),n(new Es(.2,.16,20,1,!0),this.shadeMat,i(0,2.03,-.9),{cast:!1}),this.calCanvas=document.createElement("canvas"),this.calCanvas.width=160,this.calCanvas.height=200,this.calTex=new Jl(this.calCanvas),this.calTex.colorSpace=Ze,n(new cn(.42,.52),new Ee({map:this.calTex,roughness:.9}),i(1.85,1.55,m+.065),{cast:!1}),n(new re(.8,.1,1.3),e(15311779),i(2.25,.05,-1.25)),n(new re(.82,.05,.8),e(16117990),i(2.25,.12,-1)),n(new re(.45,.1,.25),e(16777215),i(2.25,.14,-1.75)),n(new Ae(.15,.13,.32,18),e(4026294,{roughness:.5}),i(2.3,.16,-.25));const x=n(new Vi(.14,18),e(7324671,{roughness:.1}),i(2.3,.31,-.25),{cast:!1});x.rotation.x=-Math.PI/2;const P=e(10976079);for(let U=-2.8;U<=2.81;U+=.4)n(new re(.06,.45,.06),P,i(U,.225,2.5));n(new re(5.7,.05,.04),P,i(0,.33,2.5));for(const[U,B,Z]of[[-3.6,1.8,1],[3.7,1.2,1.2],[3.5,2.6,.8]])n(new Ae(.08*Z,.11*Z,.8*Z,8),e(7031339),i(U,.4*Z,B)),n(new gn(.55*Z,12,10),e(5216826),i(U,1.1*Z,B));n(new re(6.2,.3,2.3),e(3877408),i(0,-.151,3.8),{cast:!1});const T=n(new cn(5.8,2.1),e(8368714),i(0,.001,3.75),{cast:!1});T.rotation.x=-Math.PI/2;const C=n(new cn(3.6,1.8),e(5124896),i(0,.004,3.57),{cast:!1});C.rotation.x=-Math.PI/2;const D=e(14212578,{roughness:.4,metalness:.5}),S=2,M=.95,L=2.65,G=4.55;for(let U=L;U<=G+.01;U+=(G-L)/4)n(new Gi(1,.012,6,32,Math.PI),D,i(0,0,U),{cast:!1}).scale.set(S,M,1);const O=n(new Ae(.01,.01,G-L,6),D,i(0,M,(L+G)/2),{cast:!1});O.rotation.x=Math.PI/2;const k=new Dt(new Ae(1,1,G-L,32,1,!0,-Math.PI/2,Math.PI),new Ee({color:15398655,transparent:!0,opacity:.16,roughness:.2,side:Je,depthWrite:!1}));k.rotation.x=Math.PI/2,k.scale.set(S,1,M),k.position.set(0,0,(L+G)/2),k.renderOrder=3,this.greenhouse=k,t.add(k),this.bags={};for(const U of["field","premium"])this.bags[U]=this.makeBag(U);this.locks=id.map(U=>{const B=new qe,Z=U.x1-U.x0,H=U.z1-U.z0,K=new Dt(new cn(Z,H),new On({color:1709072,transparent:!0,opacity:.55,depthWrite:!1}));K.rotation.x=-Math.PI/2,K.position.set((U.x0+U.x1)/2,.02,(U.z0+U.z1)/2);const dt=Ve[U.tier],ut=rd(`🔒 ${dt.name} · ${Yt(dt.price)}`,{scale:.16});return ut.position.set((U.x0+U.x1)/2,.25,(U.z0+U.z1)/2),B.add(K,ut),t.add(B),{...U,group:B,cover:K}}),this.ring=new Dt(new Co(.045,.065,28),new On({color:16777215,transparent:!0,opacity:.9,depthTest:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=10,t.add(this.ring)}makeBag(t){const e=cr[t],n=new qe;n.position.copy(e);const i=[[0,0],[.2,0],[.24,.08],[.25,.3],[.23,.44],[.21,.48],[.24,.5],[.22,.52]].map(([l,c])=>new Pt(l,c)),r=new Ee({color:t==="field"?13214826:15787724,roughness:1,side:Je}),o=new Dt(new Ao(i,20),r);o.castShadow=o.receiveShadow=!0;const a=new Dt(new Vi(.21,20),new Ee({color:yi[t].color,roughness:1}));if(a.rotation.x=-Math.PI/2,a.position.y=.46,n.add(o,a),t==="premium"){const l=new Dt(new Ae(.252,.252,.1,20,1,!0),new Ee({color:3046706,roughness:.8}));l.position.y=.26,n.add(l)}return this.scene.add(n),{group:n,mat:r,soil:a,label:null,text:""}}setBagLabel(t,e,n){const i=this.bags[t];i.text!==e&&(i.text=e,i.label&&(i.group.remove(i.label),i.label.material.map.dispose()),i.label=rd(e,{scale:.13,bg:n?"rgba(40,90,40,0.8)":"rgba(60,60,60,0.7)"}),i.label.position.y=.75,i.group.add(i.label),i.soil.visible=n)}buildTools(){const t=new Ee({color:12107976,metalness:.7,roughness:.3}),e=new Ee({color:14701869,roughness:.6}),n=this.trowel=new qe,i=new Dt(new Ae(.06,.06,.16,14,1,!0,0,Math.PI),t);i.material.side=Je,i.rotation.set(Math.PI/2,0,Math.PI/2);const r=new Dt(new Es(.06,.06,14,1,!0,0,Math.PI),t);r.rotation.set(Math.PI/2,0,Math.PI/2),r.position.z=-.11;const o=new Dt(new Ae(.016,.02,.2,10),e);o.rotation.x=Math.PI/2-.35,o.position.set(0,.06,.17),this.scoopLump=new Dt(new gn(.055,10,6),new Ee({roughness:1})),this.scoopLump.scale.set(.9,.55,1.4),this.scoopLump.position.y=-.005,n.add(i,r,o,this.scoopLump),n.traverse(d=>{d.castShadow=!0});const a=this.can=new qe,l=new Ee({color:3116891,roughness:.4,metalness:.3});this.canMat=l;const c=new Dt(new Ae(.08,.09,.14,16),l);c.position.set(.21,0,0);const h=new Dt(new Ae(.008,.012,.17,8),l);h.position.set(.075,.01,0),h.rotation.z=1.13,this.canRose=new Dt(new Ae(.025,.012,.025,12),l),this.canRose.rotation.z=1.13;const u=new Dt(new Gi(.055,.01,6,16,Math.PI),l);u.position.set(.23,.07,0),a.add(c,h,this.canRose,u),a.traverse(d=>{d.castShadow=!0}),this.previews={};for(const d of Object.keys(Ge))this.previews[d]=this.makeItemMesh(d);this.scene.add(n,a,...Object.values(this.previews)),n.visible=a.visible=!1,Object.values(this.previews).forEach(d=>{d.visible=!1})}makeItemMesh(t){const e=new qe;if(t==="seed"){const n=new Dt(new gn(lr,10,8),new Ee({color:2038295,roughness:.6}));n.scale.set(1,.7,1.3),e.add(n)}else if(t==="seedling"){const n=new Dt(new Ae(.01,.014,.07,8),new Ee({color:15986912}));e.add(n);for(let i=0;i<3;i++){const r=new Dt(this.leafGeo(),this.leafMat(hr.green));r.scale.set(.7,.2,.7),r.position.y=.03,r.rotation.set(.25*Math.cos(i*2.1),0,.25*Math.sin(i*2.1)),e.add(r)}}else{const n=new Dt(new gn(lr*1.3,14,10),this.bulbMat());n.scale.set(1,1.1,1);const i=new Dt(new Es(.011,.035,8),this.bulbMat());i.position.y=.04,e.add(n,i)}return e.traverse(n=>{n.castShadow=!0}),e}leafGeo(){return this._leafGeo||(this._leafGeo=new Ae(.005,.014,1,6),this._leafGeo.translate(0,.5,0)),this._leafGeo}leafMat(t){this._leafMats??(this._leafMats=new Map);const e=t.getHex();return this._leafMats.has(e)||this._leafMats.set(e,new Ee({color:t,roughness:.55})),this._leafMats.get(e)}bulbMat(t=!1){return this._bulbMats??(this._bulbMats={ok:new Ee({color:14196821,roughness:.4}),dead:new Ee({color:4075554,roughness:.9})}),t?this._bulbMats.dead:this._bulbMats.ok}initParticles(){const t=this.soilIM=new ba(new Ql(oo*1.15,0),new Ee({roughness:1}),Qh);t.instanceMatrix.setUsage(qo),t.setColorAt(0,new Bt),t.count=0,t.frustumCulled=!1,t.castShadow=!0;const e=this.waterIM=new ba(new gn(ao,6,4),new Ee({color:4892927,transparent:!0,opacity:.8,roughness:.05}),td);e.instanceMatrix.setUsage(qo),e.count=0,e.frustumCulled=!1;const n=this.sparkIM=new ba(new tc(1,0),new On({transparent:!0,depthWrite:!1}),ed);n.instanceMatrix.setUsage(qo),n.setColorAt(0,new Bt),n.count=0,n.frustumCulled=!1,n.renderOrder=5,this.scene.add(t,e,n)}setClock(t){if(Math.abs(t-(this._hour??-1))<.02)return;this._hour=t;const e=eM(t);this.skyMat.color.copy(e),this.scene.background.copy(e).lerp(new Bt(2365455),.72),this.scene.fog.color.copy(e);const n=ni(5.5,8,t)*(1-ni(16.5,20,t)),i=ni(16,18.5,t)*(1-ni(19.5,21,t))+(1-ni(6,8,t))*ni(5,6.2,t),r=1-ni(5.5,7,t)+ni(18.5,21,t),o=ni(17,19.5,t),a=(t-6)/16;this.sun.position.set(-4+8*a,1.5+3.2*Math.sin(Math.PI*Math.min(1,Math.max(0,a))),-5.5),this.sun.intensity=.15+2.3*n+.8*i,this.sun.color.setHex(16773590).lerp(new Bt(16747082),Math.min(1,i)),this.hemi.intensity=.35+.6*n+.2*i,this.hemi.color.setHex(16774368).lerp(new Bt(8425727),Math.min(1,r)*.5),this.fill.intensity=.15+.5*n,this.lamp.intensity=4.5*o,this.shadeMat.emissiveIntensity=1.6*o,this.sunDisc.position.set(-3+6*a,1+2.2*Math.sin(Math.PI*Math.min(1,Math.max(0,a))),-5.4),this.sunDisc.visible=t>5.6&&t<20,this.sunDisc.material.color.setHex(16773808).lerp(new Bt(16742970),Math.min(1,i));const l=(t-18)/10;this.moonDisc.position.set(-2.5+5*l,1.4+1.6*Math.sin(Math.PI*Math.min(1,Math.max(0,l))),-5.4),this.moonDisc.visible=t>18.5||t<6}setCalendar(t,e,n,i){const r=this.calCanvas,o=r.getContext("2d");o.fillStyle="#fffaf0",o.fillRect(0,0,r.width,r.height),o.fillStyle=i?"#8b1e1e":n<=1?"#c62828":"#d84a3a",o.fillRect(0,0,r.width,52),o.fillStyle="#fff",o.font='800 32px "Noto Sans KR", sans-serif',o.textAlign="center",o.fillText(`${e}월`,r.width/2,38),o.fillStyle="#2b2118",o.font='800 76px "Noto Sans KR", sans-serif',o.fillText(String(t),r.width/2,132),o.font='700 22px "Noto Sans KR", sans-serif',o.fillStyle=i?"#c62828":"#8a7b6b",o.fillText(i?`미납 ${i}건`:`월세 D-${n}`,r.width/2,178),this.calTex.needsUpdate=!0}setTier(t,e=!1){if(t===this.tier)return;const n=this.tier;this.tier=t,this.greenhouse.visible=t>=3;for(const i of this.locks)i.group.visible=t<i.tier,i.group.children[1].visible=i.tier===t+1;if(e&&n>=0){this.resetCamera(t);const i=id.find(r=>r.tier===t);if(i)for(let r=0;r<6;r++){const o=i.x0+Math.random()*(i.x1-i.x0),a=i.z0+Math.random()*(i.z1-i.z0);this.burst(new z(o,.05,a),{color:16769162,n:14,up:2.2,speed:.8,size:.022,life:1.1})}}}refresh(){const t=(A==null?void 0:A.pots)??[],e=new Set(t.map(i=>i.id));for(const[i,r]of this.potViews)e.has(i)||this.removePotView(r);for(const i of t)this.potViews.has(i.id)||this.createPotView(i),this.dirty.add(this.potViews.get(i.id));if(!A)return;this.setTier(A.tier,!0),this.setBagLabel("field","🟫 마당 흙",!0);const n=A.known.soil||A.inv.premiumScoops>0;this.bags.premium.group.visible=n,this.setBagLabel("premium",A.inv.premiumScoops>0?`✨ 상토 ${A.inv.premiumScoops}`:"상토 (비었음)",A.inv.premiumScoops>0),this.setCalendar(A.day,A.month,mr(),oi().length)}createPotView(t){const e=_r[t.type],n=e.radius,i=e.height,r=tM[t.slot],o=new qe;o.position.copy(r);let a;const l=[];if(t.type==="pet"){a=new Ee({color:13954303,transparent:!0,opacity:.3,roughness:.08,side:Je,depthWrite:!1});const y=new Dt(new Ae(n+.004,n-.006,i,30,1,!0),a);y.position.y=i/2,y.renderOrder=2;const x=new Dt(new Vi(n-.006,30),a);x.rotation.x=-Math.PI/2,x.position.y=.004;const P=new Dt(new Gi(n+.004,.006,6,30),new Ee({color:15398655,roughness:.2}));P.rotation.x=Math.PI/2,P.position.y=i;const T=new Dt(new Ae(n+.006,n+.001,.07,30,1,!0),new Ee({color:2857952,roughness:.5}));T.position.y=.06;const C=(D,S)=>{const M=new Dt(new Gi(n+.005,.0035,4,30),new On({color:S}));return M.rotation.x=Math.PI/2,M.position.y=Fn+D*(i-Fn-.03),M};l.push(y,x,P,T,C(rt.minFill,16762161),C(rt.goodFill,5952346))}else{const y=[[0,0],[n+En-.03,0],[n+En,i-.03],[n+En+.022,i-.03],[n+En+.022,i+.01],[n-.002,i+.01],[n-.012,Fn],[0,Fn]].map(([P,T])=>new Pt(P,T));a=new Ee({color:t.type==="large"?9194031:12872254,roughness:.85,side:Je});const x=new Dt(new Ao(y,32),a);x.castShadow=x.receiveShadow=!0,l.push(x)}const c=new Ee({roughness:1}),h=new Dt(new Ae(n-.008,n-.012,1,28),c);h.receiveShadow=!0,h.castShadow=t.type!=="pet";const u=new qe,d=new qe;d.add(u);const p=new qe;o.add(...l,h,d,p),this.scene.add(o);const g=14,v=new bt({mass:0,collisionFilterGroup:Te.POT,collisionFilterMask:Te.SOIL|Te.WATER|Te.ITEM}),m=2*(n+En)*Math.tan(Math.PI/g)+.01;for(let y=0;y<g;y++){const x=y/g*Math.PI*2,P=new Ie;P.setFromEuler(0,-(x+Math.PI/2),0),v.addShape(new vr(new b(m/2,(i+.02)/2,En/2)),new b(Math.cos(x)*(n+En/2),(i+.02)/2,Math.sin(x)*(n+En/2)),P)}v.addShape(new Bh(n+En,n+En,Fn,g),new b(0,Fn/2,0)),v.position.set(r.x,r.y,r.z),this.phys.addBody(v);const f=new bt({mass:0,shape:new Bh(n-.004,n-.004,nd,g),material:this.mat.ground,collisionFilterGroup:Te.POT,collisionFilterMask:Te.SOIL|Te.WATER|Te.ITEM});this.phys.addBody(f);const _={id:t.id,group:o,potMat:a,soilMesh:h,soilMat:c,plantGroup:u,sway:d,devGroup:p,devKey:null,dripping:!1,dripAcc:0,wall:v,plate:f,r:n,h:i,center:r,surfaceY:Fn,plantKey:null,bounce:0,lastFill:_n(t),lastMoist:t.moisture};return this.potViews.set(t.id,_),_.bounce=1,_}removePotView(t){this.scene.remove(t.group),this.phys.removeBody(t.wall),this.phys.removeBody(t.plate),this.potViews.delete(t.id)}syncPot(t){const e=kn(t.id);if(!e)return;const n=_n(e)*(t.h-Fn-.03);t.surfaceY=Fn+n,t.soilMesh.visible=n>.003,t.soilMesh.scale.y=Math.max(n,.001),t.soilMesh.position.y=Fn+n/2,t.plate.position.set(t.center.x,t.center.y+t.surfaceY-nd/2,t.center.z),t.plate.aabbNeedsUpdate=!0;const i=(pr(e)-.35)/.6,r=new Bt(yi.field.color).lerp(new Bt(yi.premium.color),Math.min(Math.max(i,0),1)),o=Math.min(e.moisture,100)/100;t.soilMat.color.copy(r).multiplyScalar(1-o*.5),e.moisture>92?t.soilMat.color.lerp(new Bt(2767434),.3):e.moisture<15&&e.soil&&t.soilMat.color.lerp(new Bt(13215610),.35);const a=e.auto,l=a?`${+a.drip}${+a.planter}${+a.harvester}`:"";l!==t.devKey&&(t.devKey=l,this.buildDevices(t,a)),t.dripping=!!(a!=null&&a.dripping);const c=e.plant;t.plantGroup.position.y=t.surfaceY;const h=c?[c.kind,c.stage,Math.round(c.leaves*3),Math.round(c.weight/4),c.bolted,c.dead,Math.floor(c.progress*4)].join("|"):"";h!==t.plantKey&&(t.plantKey=h,this.buildPlant(t.plantGroup,c,t.r))}buildDevices(t,e){const n=t.devGroup;if(n.clear(),!e)return;const{r:i,h:r}=t,o=(a,l=.6,c=0)=>new Ee({color:a,roughness:l,metalness:c});if(e.drip){const a=o(2502714,.7),l=new Dt(new Gi(i*.78,.007,6,28),a);l.rotation.x=Math.PI/2,l.position.y=r+.012;const c=new Dt(new Ae(.007,.007,r+.05,6),a);c.position.set(0,(r+.05)/2-.03,-(i+.025));const h=new Dt(new re(.014,.014,i*.3),a);h.position.set(0,r+.012,-(i*.78+i*.15+.01)),n.add(l,c,h)}if(e.planter){const a=new Dt(new re(.07,.09,.06),o(15774761,.5));a.position.set(i+.05,r*.55,0);const l=new Dt(new Ae(.035,.012,.04,10,1,!0),o(7040885,.4,.4));l.position.set(i+.05,r*.55+.065,0);const c=new Dt(new Ae(.006,.006,i*.6,6),o(7040885,.4,.4));c.rotation.z=Math.PI/2-.35,c.position.set(i*.72,r*.55+.05,0),n.add(a,l,c),a.castShadow=!0}if(e.harvester){const a=o(10134702,.35,.6),l=new Dt(new Ae(.009,.009,r+.28,8),a);l.position.set(-(i+.03),(r+.28)/2,-i*.3);const c=new Dt(new re(i+.03,.014,.014),a);c.position.set(-(i+.03)/2,r+.27,-i*.3);const h=new qe;for(const u of[-1,1]){const d=new Dt(new re(.006,.05,.012),o(14698556,.5));d.position.set(u*.012,-.025,0),d.rotation.z=u*.3,h.add(d)}h.position.set(0,r+.26,-i*.3),n.add(l,c,h),l.castShadow=!0}}buildPlant(t,e,n){if(t.clear(),!e)return;const i=!!e.dead,r=e.stage==="mature",o=i?hr.dead:r?hr.yellow:hr.green;if(e.stage==="sprout"){const u=Ge[e.kind].stages.sprout,d=e.progress/u;if(d<.25){const p=this.makeItemMesh(e.kind);p.position.y=.005,t.add(p)}else for(let p=0;p<2;p++){const g=new Dt(this.leafGeo(),this.leafMat(o));g.scale.set(.6,.02+.08*d,.6),g.rotation.z=p?.3:-.2,t.add(g)}return}const a=Math.min(.01+.0042*Math.sqrt(e.weight),n*.75),l=new Dt(this.sphereGeo??(this.sphereGeo=new gn(1,18,14)),this.bulbMat(i));l.scale.set(a,a*.9,a),l.position.y=a*(r||i?.5:.25),l.castShadow=!0,t.add(l);const c=Math.max(1,Math.round(e.leaves)),h=Math.min(.08+e.leaves*.03,.46);for(let u=0;u<c;u++){const d=new Fe;d.rotation.y=u*2.4,d.position.y=a*.7;const p=new Dt(this.leafGeo(),this.leafMat(o)),g=u===c-1?Math.max(.35,e.leaves-Math.floor(e.leaves)||1):1;p.scale.set(1,h*(.75+.25*(u*37%10/10))*g,1),p.rotation.z=r||i?.95+.12*(u%3):.1+.07*(u%4),p.castShadow=!0,d.add(p),t.add(d)}if(e.bolted){const u=new Dt(new Ae(.005,.007,.5,6),this.leafMat(o));u.position.y=.25+a;const d=new Dt(new gn(.045,10,8),new Ee({color:15657205,roughness:.9}));d.position.y=.52+a,t.add(u,d)}}potViewAt(t,e,n=0){for(const i of this.potViews.values()){const r=t-i.center.x,o=e-i.center.z,a=i.r+n;if(r*r+o*o<a*a)return i}return null}screenPos(t){const e=this.potViews.get(t);if(!e)return null;const n=this._tmpV??(this._tmpV=new z);return n.set(e.center.x,e.center.y+e.h+.06,e.center.z).project(this.camera),n.z>1?null:{x:(n.x*.5+.5)*innerWidth,y:(-n.y*.5+.5)*innerHeight}}worldToScreen(t){const e=t.clone().project(this.camera);return{x:(e.x*.5+.5)*innerWidth,y:(-e.y*.5+.5)*innerHeight}}burst(t,{color:e=16777215,n=10,speed:i=1,up:r=1.2,size:o=.015,life:a=.7,gravity:l=-5,spread:c=.03}={}){const h=new Bt(e);for(let u=0;u<n;u++){this.sparks.length>=ed&&this.sparks.shift();const d=Math.random()*Math.PI*2,p=i*(.3+Math.random()*.7);this.sparks.push({p:new z(t.x+Math.cos(d)*c,t.y,t.z+Math.sin(d)*c),v:new z(Math.cos(d)*p,r*(.5+Math.random()*.7),Math.sin(d)*p),life:a,age:0,size:o*(.6+Math.random()*.8),gravity:l,color:h.clone().offsetHSL(0,0,(Math.random()-.5)*.15),spin:Math.random()*6})}}pulse(t,e,n=.2){const i=new Dt(new Co(.85,1,40),new On({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:Je}));i.rotation.x=-Math.PI/2,i.position.copy(t),i.renderOrder=6,this.scene.add(i),this.pulses.push({m:i,age:0,life:.6,r:n})}float(t,e,n=""){var i,r;(r=(i=this.hooks).onFloat)==null||r.call(i,t,this.worldToScreen(e),n)}potTop(t,e=0){return new z(t.center.x,t.center.y+t.surfaceY+e,t.center.z)}sprinkle(t,e){const n=this.potViews.get(t);if(!n)return;const i=e==="fertilizer"?8048895:16053486,r=this.potTop(n,.25);this.burst(r,{color:i,n:22,up:.4,speed:.35,size:.012,life:.8,gravity:-6,spread:n.r*.6}),this.pulse(this.potTop(n,.01),e==="fertilizer"?7197549:16777215,n.r*2),this.float(e==="fertilizer"?`🧪 영양 +${rt.fertNutrient}`:`⚪ pH +${rt.limePH}`,this.potTop(n,.3),"good"),n.bounce=.7}celebrate(t,e){const n=this.potViews.get(t);if(!n)return;this.dirty.add(n),n.bounce=1;const i=this.potTop(n,.08);if(e==="dead"){this.burst(i,{color:6969930,n:16,up:.8,speed:.4,size:.018,life:1});return}const r=e==="mature"?16766282:9166954;this.burst(i,{color:r,n:e==="mature"?26:16,up:1.8,speed:.7,size:.016,life:.9}),this.pulse(this.potTop(n,.01),r,n.r*2.2)}setTool(t,e=null){this.tool=t,this.plantKind=e,this.setPouring(!1),this.toolKick=.6}setPouring(t){this.pouring!==t&&(this.pouring=t,It.pour(t))}setEnabled(t){this.enabled=t,t&&this.controls.autoRotate&&this.resetCamera((A==null?void 0:A.tier)??0,!0),this.controls.autoRotate=!t,t||(this.setPouring(!1),this.hasCursor=!1,this.setHover(null))}dropEverything(){this.setPouring(!1),this.shovelLoad==="premium"&&A.inv.premiumScoops++,this.shovelLoad=null}bindEvents(){const t=this.renderer.domElement;t.addEventListener("pointermove",e=>{e.isPrimary&&this.onMove(e)}),t.addEventListener("pointerdown",e=>{if(It.unlockAudio(),!e.isPrimary)return this.setPouring(!1);!this.enabled||e.button!==0||(this.onMove(e),this.updateTools(0),this.onPrimary())}),addEventListener("pointerup",e=>{e.button===0&&this.setPouring(!1)}),t.addEventListener("pointerleave",()=>{this.setPouring(!1),this.hasCursor=!1,this.setHover(null)})}onMove(t){if(!this.enabled)return;if(this.pointer.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.hasCursor=!!this.raycaster.ray.intersectPlane(this.cursorPlane,this.cursor),!this.hasCursor)return this.setHover(null);const{x:e,z:n}=this.cursor;let i=null;const r=this.pickPot(this.raycaster.ray);if(r)i={type:"pot",id:r.id};else{for(const[o,a]of Object.entries(cr))this.bags[o].group.visible&&Math.hypot(e-a.x,n-a.z)<.34&&(i={type:"bag",kind:o});if(!i){const o=this.locks.find(a=>a.group.visible&&e>a.x0&&e<a.x1&&n>a.z0&&n<a.z1);o&&(i={type:"lock",tier:o.tier})}}this.setHover(i,t.clientX,t.clientY)}pickPot(t){const e=t.origin,n=t.direction;if(n.y>=0)return null;for(let i=.5;i>=0;i-=.025){const r=(i-e.y)/n.y,o=e.x+n.x*r,a=e.z+n.z*r;for(const l of this.potViews.values()){if(i>l.h+.06)continue;const c=o-l.center.x,h=a-l.center.z,u=l.r+En+.03;if(c*c+h*h<u*u)return l}}return null}setHover(t,e,n){var o,a,l,c;const i=this.hover;(i==null?void 0:i.type)===(t==null?void 0:t.type)&&(i==null?void 0:i.id)===(t==null?void 0:t.id)&&(i==null?void 0:i.kind)===(t==null?void 0:t.kind)&&(i==null?void 0:i.tier)===(t==null?void 0:t.tier)||((i==null?void 0:i.type)==="pot"&&((o=this.potViews.get(i.id))==null||o.potMat.emissive.setHex(0)),(i==null?void 0:i.type)==="bag"&&this.bags[i.kind].mat.emissive.setHex(0),(i==null?void 0:i.type)==="lock"&&(this.locks.find(h=>h.tier===i.tier).cover.material.opacity=.55),(t==null?void 0:t.type)==="pot"&&((a=this.potViews.get(t.id))==null||a.potMat.emissive.setHex(4469538)),(t==null?void 0:t.type)==="bag"&&this.bags[t.kind].mat.emissive.setHex(3351057),(t==null?void 0:t.type)==="lock"&&(this.locks.find(h=>h.tier===t.tier).cover.material.opacity=.4),t&&It.hover()),this.hover=t,(c=(l=this.hooks).onHover)==null||c.call(l,t,e,n)}onPrimary(){var e,n,i,r,o,a,l,c,h,u,d,p,g,v,m,f,_,y,x,P,T,C,D;const t=this.hover;if((t==null?void 0:t.type)==="lock")return(n=(e=this.hooks).onLockClick)==null?void 0:n.call(e,t.tier);switch(this.tool){case"hand":(t==null?void 0:t.type)==="pot"?(It.click(),(r=(i=this.hooks).onPotClick)==null||r.call(i,t.id)):(t==null?void 0:t.type)==="bag"&&((a=(o=this.hooks).toast)==null||a.call(o,"🥄 모종삽(2)을 들고 누르면 흙을 떠요"));break;case"trowel":if(this.shovelLoad)this.dumpShovel();else{if((t==null?void 0:t.type)!=="bag")return(c=(l=this.hooks).toast)==null?void 0:c.call(l,"🟫 흙 포대를 눌러 먼저 흙을 뜨세요","bad");if(t.kind==="premium"){if(A.inv.premiumScoops<=0)return(u=(h=this.hooks).toast)==null?void 0:u.call(h,"상토가 없어요. 상점에서 사 오세요","bad");A.inv.premiumScoops--,this.refresh()}this.shovelLoad=t.kind,A.flags.scooped=!0,this.scoopLump.material.color.set(yi[t.kind].color),this.toolKick=1,It.scoop(),this.burst(new z(cr[t.kind].x,.5,cr[t.kind].z),{color:yi[t.kind].color,n:10,up:1.4,speed:.5,size:.014}),(p=(d=this.hooks).onStateChange)==null||p.call(d)}break;case"can":this.setPouring(!0);break;case"apply":if((t==null?void 0:t.type)!=="pot")return(v=(g=this.hooks).toast)==null?void 0:v.call(g,"🧴 화분 위에서 누르세요","bad");if(A.inv[this.plantKind]<=0)return(f=(m=this.hooks).toast)==null?void 0:f.call(m,"다 썼어요. 상점에서 사 오세요","bad");this.toolKick=1,(y=(_=this.hooks).onApply)==null||y.call(_,this.plantKind,t.id);break;case"plant":{const S=this.plantKind;if(!S||A.inv[S]<=0)return(T=(P=this.hooks).toast)==null?void 0:T.call(P,`${((x=Ge[S])==null?void 0:x.name)??"심을 것"}이 없어요. 상점에서 사세요`,"bad");A.inv[S]--,this.spawnItem(S,new b(this.cursor.x,.55,this.cursor.z)),It.pop(),(D=(C=this.hooks).onStateChange)==null||D.call(C);break}}}dumpShovel(){const t=oc(this.shovelLoad),e=new z;this.trowel.getWorldPosition(e);const n=wy();for(let i=0;i<n;i++){const r={kind:t.kind,quality:t.quality+(Math.random()-.5)*.06,ph:t.ph+(Math.random()-.5)*.1},o=Math.random()*Math.PI*2,a=Math.random()*.035;this.spawnSoil(new b(e.x+Math.cos(o)*a,e.y+Math.random()*.06,e.z+Math.sin(o)*a),new b((Math.random()-.5)*.25,-.3-Math.random()*.3,(Math.random()-.5)*.25),r,"soil")}this.shovelLoad=null,this.toolKick=-1.2,It.dump()}spawnSoil(t,e,n,i){this.soil.length>=Qh&&this.removeAt(this.soil,0);const r=new bt({mass:.02,shape:new eo(oo),position:t,velocity:e,material:this.mat.soil,linearDamping:.05,angularDamping:.5,collisionFilterGroup:Te.SOIL,collisionFilterMask:Te.GROUND|Te.POT|Te.SOIL});r.sleepSpeedLimit=.05,this.phys.addBody(r);const o=new Bt(yi[(n==null?void 0:n.kind)??"field"].color).multiplyScalar(.85+Math.random()*.3);this.soil.push({body:r,grain:n,kind:i,age:0,rest:0,color:o})}spawnWater(){this.water.length>=td&&this.removeAt(this.water,0);const t=new z;this.canRose.getWorldPosition(t);const e=A.owned.goodCan?.045:.012,n=new bt({mass:.005,shape:new eo(ao),material:this.mat.water,position:new b(t.x+(Math.random()-.5)*e,t.y,t.z+(Math.random()-.5)*e),velocity:new b(-.45+(Math.random()-.5)*e*8,-.4,(Math.random()-.5)*e*8),collisionFilterGroup:Te.WATER,collisionFilterMask:Te.GROUND|Te.POT});n.allowSleep=!1,this.phys.addBody(n),this.water.push({body:n,age:0})}spawnItem(t,e){const n=this.makeItemMesh(t),i=new bt({mass:.05,shape:new eo(lr),position:e,material:this.mat.item,linearDamping:.3,angularDamping:.6,collisionFilterGroup:Te.ITEM,collisionFilterMask:Te.GROUND|Te.POT|Te.ITEM});i.angularVelocity.set(Math.random()*4-2,0,Math.random()*4-2),this.phys.addBody(i),this.scene.add(n),this.items.push({body:i,mesh:n,kind:t,age:0,rest:0})}popOnion(t,e){const n=this.potViews.get(t);if(!n)return;const i=Math.min(.01+.0042*Math.sqrt(e.weight),n.r*.75),r=new qe,o=new Dt(this.sphereGeo??(this.sphereGeo=new gn(1,18,14)),this.bulbMat());o.scale.set(i,i*.9,i),r.add(o);for(let c=0;c<4;c++){const h=new Dt(this.leafGeo(),this.leafMat(hr.yellow));h.scale.set(1,.16,1),h.position.y=i*.6,h.rotation.set(.3*Math.cos(c*1.6),0,.3*Math.sin(c*1.6)),r.add(h)}r.traverse(c=>{c.castShadow=!0});const a=new bt({mass:.3,shape:new eo(i),material:this.mat.item,position:new b(n.center.x,n.surfaceY+i+.02,n.center.z),velocity:new b((Math.random()-.5)*1,3,.6+Math.random()*.5),collisionFilterGroup:Te.ITEM,collisionFilterMask:Te.GROUND|Te.ITEM});a.angularVelocity.set(Math.random()*8-4,Math.random()*4,Math.random()*8-4),this.phys.addBody(a),this.scene.add(r),this.fx.push({body:a,mesh:r,age:0,life:1.6}),this.dirty.add(n),n.bounce=1;const l=this.potTop(n,.05);this.burst(l,{color:yi.field.color,n:18,up:2,speed:.6,size:.02,life:.9}),this.burst(l,{color:16766282,n:22,up:2.6,speed:.9,size:.014,life:1.1}),this.pulse(this.potTop(n,.01),16766282,n.r*2.6),this.float(`${e.grade}등급!`,this.potTop(n,.35),`grade g-${e.grade}`)}removeAt(t,e){const n=t[e];this.phys.removeBody(n.body),n.mesh&&this.scene.remove(n.mesh),t.splice(e,1)}frame(){var n,i,r,o;const t=Math.min(this.clock.getDelta(),.05);if(this.time+=t,this.updateTools(t),this.pouring&&this.tool==="can"&&this.hasCursor&&this.enabled)for(this.dropAccum+=t*(A.owned.goodCan?60:32);this.dropAccum>=1;)this.spawnWater(),this.dropAccum--;this.phys.step(1/60,t,4);let e=!1;e=this.processSoil(t)||e,e=this.processWater(t)||e,e=this.processItems(t)||e,this.processFx(t);for(const a of this.dirty)this.syncPot(a);this.dirty.clear(),e&&((i=(n=this.hooks).onStateChange)==null||i.call(n)),this.animatePots(t),this.updateSparks(t),this.updateInstances(),this.updateCamera(t),this.renderer.render(this.scene,this.camera),(o=(r=this.hooks).onFrame)==null||o.call(r,t)}updateCamera(t){const e=this.camTween;if(e){e.t=Math.min(1,e.t+t/1.4);const i=1-Math.pow(1-e.t,3);this.controls.target.lerpVectors(e.fromT,e.to.target,i),this.camera.position.lerpVectors(e.fromP,e.to.pos,i),e.t>=1&&(this.camTween=null)}this.controls.update();const n=this.camera.position.distanceTo(this.controls.target);this.scene.fog.near=n*1.1+2.5,this.scene.fog.far=n*2.2+9}animatePots(t){for(const e of this.potViews.values()){if(e.bounce>0){e.bounce=Math.max(0,e.bounce-t*2.2);const n=Math.sin((1-e.bounce)*Math.PI*3)*e.bounce*.14;e.group.scale.set(1+n,1-n,1+n)}if(e.dripping&&(e.dripAcc+=t,e.dripAcc>.35)){e.dripAcc=0;const n=Math.random()*Math.PI*2,i=this.potTop(e,.03);i.x+=Math.cos(n)*e.r*.7,i.z+=Math.sin(n)*e.r*.7,this.burst(i,{color:7127295,n:2,up:.1,speed:.05,size:.01,life:.4,gravity:-3,spread:0})}e.sway.rotation.z=Math.sin(this.time*1.4+e.id*1.7)*.035,e.sway.rotation.x=Math.sin(this.time*1.1+e.id)*.025}for(let e=this.pulses.length-1;e>=0;e--){const n=this.pulses[e];n.age+=t;const i=n.age/n.life;n.m.scale.setScalar(n.r*(.4+i)),n.m.material.opacity=.9*(1-i),i>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.pulses.splice(e,1))}}feedback(t,e){const n=_n(e);t.lastFill<rt.minFill&&n>=rt.minFill?(this.float("🧅 심기 OK!",this.potTop(t,.2),"good"),this.burst(this.potTop(t,.02),{color:16769162,n:14,up:1.4,speed:.6}),It.quest()):t.lastFill<1&&n>=1&&this.float("가득!",this.potTop(t,.2),"good"),t.lastFill=n;const i=e.moisture;e.plant&&t.lastMoist<35&&i>=35&&this.float("💧 촉촉",this.potTop(t,.2),"water"),t.lastMoist<=92&&i>92&&(this.float("🌊 과습!",this.potTop(t,.22),"bad"),It.warn()),t.lastMoist=i}processSoil(t){let e=!1;for(let n=this.soil.length-1;n>=0;n--){const i=this.soil[n],r=i.body,o=r.position;i.age+=t;let a=!1;if(A){const l=this.potViewAt(o.x,o.z,-.006);if(l){const c=l.center.y+l.surfaceY;if(o.y-oo<=c+.02&&o.y>c-.06){const h=kn(l.id);h&&ac(h,i.grain)&&(a=!0,this.dirty.add(l),e=!0,l.bounce=Math.max(l.bounce,.35),It.soilIn(),Math.random()<.3&&this.burst(new z(o.x,c+.01,o.z),{color:i.color.getHex(),n:2,up:.6,speed:.3,size:.01,life:.4}),this.feedback(l,h))}}}!a&&o.y<oo+.03&&r.velocity.length()<.25&&(i.rest+=t),(i.rest>1.4||i.age>7||o.y<-1)&&(a=!0),a&&this.removeAt(this.soil,n)}return e}processWater(t){let e=!1;for(let n=this.water.length-1;n>=0;n--){const i=this.water[n],r=i.body.position;i.age+=t;let o=i.age>5||r.y<ao+.012;if(o&&r.y<.05&&Math.random()<.15&&this.burst(new z(r.x,.01,r.z),{color:9425151,n:2,up:.5,speed:.4,size:.008,life:.3}),!o&&A){const a=this.potViewAt(r.x,r.z,-.004);if(a){const l=a.center.y+a.surfaceY;if(r.y-ao<=l+.03&&r.y>l-.08){const c=kn(a.id);c&&Ey(c,Ty())&&(this.dirty.add(a),e=!0,It.drip(),Math.random()<.25&&this.burst(new z(r.x,l+.01,r.z),{color:10148095,n:2,up:.7,speed:.35,size:.009,life:.35}),this.feedback(a,c)),o=!0}}}o&&this.removeAt(this.water,n)}return e}processItems(t){let e=!1;for(let n=this.items.length-1;n>=0;n--){const i=this.items[n],r=i.body,o=r.position;i.age+=t,i.mesh.position.copy(o),i.mesh.quaternion.copy(r.quaternion);const a=r.velocity.length(),l=Ge[i.kind].name,c=d=>{var p,g;A.inv[i.kind]++,this.removeAt(this.items,n),(g=(p=this.hooks).toast)==null||g.call(p,d,"bad"),It.bad(),e=!0},h=this.potViewAt(o.x,o.z,-.005),u=h?h.center.y+h.surfaceY:0;if(h&&o.y-lr<=u+.035&&o.y>u-.08){if(a<.6){const d=kn(h.id),p=Ul(d);if(!p){lc(d,i.kind),this.removeAt(this.items,n),this.dirty.add(h),h.bounce=1,this.burst(this.potTop(h,.02),{color:9166954,n:16,up:1.5,speed:.6}),this.pulse(this.potTop(h,.01),9166954,h.r*2),this.float(`${Ge[i.kind].icon} 심었어요!`,this.potTop(h,.25),"good"),It.plant(),e=!0;continue}if(i.rest+=t,i.rest>.8){c(`#${d.id} ${p}`);continue}}}else if(o.y<lr+.04&&a<.3&&(i.rest+=t,i.rest>.6)){c(`바닥에 떨어진 ${l}을(를) 주웠어요`);continue}(i.age>8||o.y<-1)&&c(`${l}을(를) 다시 주웠어요`)}return e}processFx(t){for(let e=this.fx.length-1;e>=0;e--){const n=this.fx[e];n.age+=t,n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion);const i=Math.max(0,Math.min(1,(n.life-n.age)/.3));n.mesh.scale.setScalar(i),n.age>n.life&&this.removeAt(this.fx,e)}}updateSparks(t){const e=this.dummy;let n=0;for(let i=this.sparks.length-1;i>=0;i--){const r=this.sparks[i];if(r.age+=t,r.age>=r.life){this.sparks.splice(i,1);continue}r.v.y+=r.gravity*t,r.v.multiplyScalar(1-t*1.5),r.p.addScaledVector(r.v,t),r.p.y<.005&&(r.p.y=.005,r.v.y*=-.3)}for(const i of this.sparks){const r=1-i.age/i.life;e.position.copy(i.p),e.rotation.set(i.spin*i.age,i.spin*i.age*.7,0),e.scale.setScalar(i.size*Math.min(1,r*2)),e.updateMatrix(),this.sparkIM.setMatrixAt(n,e.matrix),this.sparkIM.setColorAt(n,i.color),n++}this.sparkIM.count=n,this.sparkIM.instanceMatrix.needsUpdate=!0,this.sparkIM.instanceColor&&(this.sparkIM.instanceColor.needsUpdate=!0)}updateInstances(){const t=this.dummy;t.rotation.set(0,0,0),t.scale.setScalar(1),this.soil.forEach((e,n)=>{t.position.copy(e.body.position),t.quaternion.copy(e.body.quaternion),t.updateMatrix(),this.soilIM.setMatrixAt(n,t.matrix),this.soilIM.setColorAt(n,e.color)}),this.soilIM.count=this.soil.length,this.soilIM.instanceMatrix.needsUpdate=!0,this.soilIM.instanceColor&&(this.soilIM.instanceColor.needsUpdate=!0),t.quaternion.identity(),this.water.forEach((e,n)=>{t.position.copy(e.body.position),t.scale.set(1,1.6,1),t.updateMatrix(),this.waterIM.setMatrixAt(n,t.matrix)}),this.waterIM.count=this.water.length,this.waterIM.instanceMatrix.needsUpdate=!0}updateTools(t){var r;const e=this.enabled&&this.hasCursor,{x:n,z:i}=this.cursor;if(this.toolKick+=(0-this.toolKick)*Math.min(1,t*8),this.trowel.visible=e&&this.tool==="trowel",this.trowel.visible&&(this.trowel.position.set(n,.5+Math.max(0,this.toolKick)*.08,i+.02),this.trowel.rotation.set(-.25+Math.min(0,this.toolKick)*.9,.3,0),this.trowel.scale.setScalar(A.owned.shovel?1.45:1),this.scoopLump.visible=!!this.shovelLoad),this.can.visible=e&&this.tool==="can",this.can.visible){this.can.position.set(n,.75,i);const o=this.pouring?.65:0;this.can.rotation.z+=(o-this.can.rotation.z)*Math.min(1,t*10),this.canRose.scale.setScalar(A.owned.goodCan?1.6:.6),this.canMat.color.setHex(A.owned.goodCan?3108799:3116891)}for(const[o,a]of Object.entries(this.previews))a.visible=e&&this.tool==="plant"&&this.plantKind===o&&A.inv[o]>0,a.visible&&(a.position.set(n,.55+Math.sin(this.time*4)*.015,i),a.rotation.y+=t);if(this.ring.visible=e,e){const o=this.potViewAt(n,i);this.ring.position.set(n,o?o.center.y+o.surfaceY+.004:.012,i);let a=null;const l=o&&kn(o.id);this.tool==="trowel"?a=this.shovelLoad?l?_n(l)<1:null:((r=this.hover)==null?void 0:r.type)==="bag"?!0:null:this.tool==="plant"?a=l?!Ul(l):null:this.tool==="can"?a=l?l.soil>0?l.moisture<85:!1:null:this.tool==="apply"&&(a=l?l.soil>0&&A.inv[this.plantKind]>0:null),this.ring.material.color.setHex(a==null?16777215:a?7208813:16739693);const c=1+Math.sin(this.time*6)*.08;this.ring.scale.setScalar(o?o.r/.065*c:c)}}}const Mt=s=>document.querySelector(s),lo=s=>document.querySelectorAll(s),Ss=[{key:"1",tool:"hand",icon:"✋",name:"손",hint:[["🧴","화분 누르기"],["📋","상태 · 수확"]]},{key:"2",tool:"trowel",icon:"🪏",name:"모종삽",hint:[["🟫","포대 누르기"],["➜"],["🧴","화분 누르기"]]},{key:"3",tool:"can",icon:"🚿",name:"물뿌리개",hint:[["🖱️","꾹 누르기"],["💧","35~78% 유지"]]},{key:"4",tool:"plant",kind:"set",icon:"🧅",name:"구근",hint:[["🧴","흙 60%↑ 화분 위"],["⬇️","떨어뜨리기"]]},{key:"5",tool:"plant",kind:"seedling",icon:"🌱",name:"모종",hint:[["🧴","흙 60%↑ 화분 위"],["⬇️","떨어뜨리기"]]},{key:"6",tool:"plant",kind:"seed",icon:"🌰",name:"씨앗",hint:[["🧴","흙 60%↑ 화분 위"],["⬇️","떨어뜨리기"]]},{key:"7",tool:"apply",item:"fertilizer",know:"nutrient",icon:"🧪",name:"비료",hint:[["🧴","화분 누르기"],["🌿","잎 자랄 때 효과 최고"]]},{key:"8",tool:"apply",item:"lime",know:"ph",icon:"⚪",name:"석회",hint:[["🧴","화분 누르기"],["⚗️","pH +0.5"]]}],Ba=s=>s.kind??s.item,za=s=>s.know?!!A.known[s.know]:!s.kind||s.kind==="set"||A.known.seed||A.inv[s.kind]>0,iM=[{m:"shop",icon:"🏪",label:"상점"},{m:"sell",icon:"💵",label:"판매"},{m:"home",icon:"🏠",label:"집 확장"},{m:"staff",icon:"👷",label:"알바"},{m:"know",icon:"📖",label:"노하우"},{m:"lab",icon:"🔬",label:"연구소"},{m:"debt",icon:"📮",label:"고지서·빚"},{m:"help",icon:"❔",label:"도움말"},{m:"sound",icon:"🔊",label:"소리"}],ad=["tool:trowel","tool:trowel","tool:plant","tool:can",null,"tool:hand","menu:sell",null,"menu:home","menu:shop","menu:home","menu:debt"],sM={S:"#ffb300",A:"#43a047",B:"#1e88e5",C:"#8d6e63",D:"#9e9e9e"},ka=(s,t=!1)=>`<span class="grade${t?" big":""}" style="--c:${sM[s]}">${s}</span>`,ld=s=>String(s).padStart(2,"0"),rM=s=>{const t=Math.floor(s%1*6)*10;return`${ld(Math.floor(s))}:${ld(t)}`},cd=s=>s<7?"🌅":s<17?"☀️":s<19.5?"🌇":"🌙",xi=s=>new Promise(t=>setTimeout(t,s)),co=s=>Array.from({length:rt.evictAfter},(t,e)=>`<i class="${e<s?"on":""}">${e<s?"🧾":"🏠"}</i>`).join("");function oM(s,t,{onEnding:e}){let n="1",i=null,r="",o=!1,a=null,l=!1,c=!1,h=!1,u=0,d=!1,p=0,g=0,v=!1,m=0,f=null,_="";const y=new Map,x=[];Mt("#ui").innerHTML=`
    <div id="hud-left">
      <div id="clock" class="card">
        <div class="clk-top">
          <span id="c-icon" class="clk-icon">☀️</span>
          <b id="c-time">06:00</b>
          <div class="clk-chips"><span id="c-day" class="chip"></span><span id="c-dd" class="chip dd"></span></div>
        </div>
        <div class="daybar"><div class="zone-late"></div><i id="c-fill"></i><em id="c-sun">☀️</em><span class="end">🛏️</span></div>
        <div class="clk-ctl">
          <button id="c-pause" title="일시정지 (Space)">⏸</button>
          ${rt.speeds.map((R,F)=>`<button data-speed="${F}" title="${R}배속">${"▶".repeat(F+1)}</button>`).join("")}
          <button id="c-sleep" class="sleep" title="지금 잠자기">💤</button>
        </div>
      </div>
      <div id="quest" class="card"></div>
    </div>
    <div id="hud-top">
      <div id="money" class="card"><span class="coin">🪙</span><b id="m-val">0원</b></div>
      <div id="debt" class="card" title="남은 빚"><span>🏦</span><div class="debt-in"><b id="d-val"></b><div class="bar debt"><i id="d-bar"></i></div></div></div>
      <div id="rent" class="card" title="월세 연체 (${rt.evictAfter}번 밀리면 퇴거)"><span class="r-mail">📮</span><div><b id="r-dd"></b><div class="strikes" id="r-strikes"></div></div></div>
    </div>
    <nav id="menu">${iM.map(R=>`<button data-m="${R.m}"><span class="mi">${R.icon}</span><small>${R.label}</small><em class="nb hidden"></em></button>`).join("")}</nav>
    <div id="badges"></div>
    <div id="floats"></div>
    <div id="toolbar"></div>
    <div id="tool-hint"></div>
    <div id="pot-panel" class="hidden"></div>
    <div id="tooltip" class="hidden"></div>
    <div id="toasts"></div>
    <div id="pause-chip" class="hidden">⏸ 일시정지</div>
    <div id="vignette"></div>
    <div id="modal" class="hidden"><div class="modal-box"><div class="modal-head"><h3></h3><button class="x">✕</button></div><div class="modal-body"></div></div></div>
    <div id="unlock" class="hidden"></div>
    <div id="night" class="hidden"></div>
    <div id="bill" class="hidden"></div>
  `,Mt("#menu").addEventListener("click",R=>{const F=R.target.closest("button");if(!F)return;It.click();const N=F.dataset.m;if(N==="sound")return It.setMuted(!It.isMuted()),S();j(N)}),Mt("#clock").addEventListener("click",R=>{const F=R.target.closest("button");if(F){if(It.click(),F.id==="c-pause")h=!h;else{if(F.id==="c-sleep")return ue(!1);F.dataset.speed&&(u=+F.dataset.speed,h=!1)}C()}}),Mt("#modal .x").onclick=()=>{It.click(),nt()},Mt("#modal").addEventListener("pointerdown",R=>{R.target.id==="modal"&&nt()}),addEventListener("keydown",R=>{if(R.target.tagName==="INPUT"||!d||c)return;if(R.key==="Escape"){nt(),De();return}if(R.code==="Space"){R.preventDefault(),h=!h,C();return}const F=Ss.find(N=>N.key===R.key);F&&za(F)&&T(F.key)});function P(){const R=ad[A.quest];Mt("#toolbar").innerHTML=Ss.filter(za).map(N=>{const X=Ba(N),Y=X?`<em>${A.inv[X]}</em>`:"",ft=X&&A.inv[X]<=0?" empty":"",Rt=N.key===n?" on":"",Wt=R===`tool:${N.tool}`&&!Rt?" nudge":"";return`<button class="tool${Rt}${ft}${Wt}" data-k="${N.key}" title="${N.name} (${N.key})"><kbd>${N.key}</kbd><span>${N.icon}</span><small>${N.name}</small>${Y}</button>`}).join("");const F=Ss.find(N=>N.key===n);Mt("#tool-hint").innerHTML=F.hint.map(([N,X])=>X?`<span><i>${N}</i>${X}</span>`:`<b>${N}</b>`).join("")}Mt("#toolbar").addEventListener("click",R=>{const F=R.target.closest("button");F&&T(F.dataset.k)});function T(R){R!==n&&It.tool(),n=R;const F=Ss.find(N=>N.key===R);s.setTool(F.tool,Ba(F)??null),P()}function C(){lo("#clock [data-speed]").forEach(R=>R.classList.toggle("on",!h&&+R.dataset.speed===u)),Mt("#c-pause").classList.toggle("on",h),Mt("#pause-chip").classList.toggle("hidden",!h)}function D(){const R=A.time,F=rM(R);if(F===_)return;_=F,Mt("#c-time").textContent=F,Mt("#c-icon").textContent=cd(R);const N=(R-rt.dayStart)/(rt.dayEnd-rt.dayStart);Mt("#c-fill").style.width=`${Math.min(100,N*100)}%`,Mt("#c-sun").style.left=`${Math.min(100,N*100)}%`,Mt("#c-sun").textContent=cd(R),Mt("#clock").classList.toggle("late",R>=rt.sleepWarnHour),Mt("#vignette").style.opacity=Math.max(0,Math.min(1,(R-19.5)/2.5)).toFixed(2)}function S(){const R=mr(),F=oi().length;if(Mt("#c-day").textContent=`${A.month}월 · ${A.day}일차`,Mt("#c-dd").textContent=`📮 D-${R}`,Mt("#c-dd").classList.toggle("urgent",R<=1),Mt("#r-dd").textContent=F?`미납 ${F}건`:`월세 D-${R}`,Mt("#rent").classList.toggle("danger",F>0),Mt("#r-strikes").innerHTML=co(F),_="",D(),f!=null&&A.money!==f){const Wt=A.money-f,se=Mt("#money").getBoundingClientRect();dt(`${Wt>0?"+":"−"}${Yt(Math.abs(Wt))}`,{x:se.left+se.width/2,y:se.bottom+6},Wt>0?"money":"spend"),Mt("#money").classList.remove("bump"),Mt("#money").offsetWidth,Mt("#money").classList.add("bump")}f=A.money,Mt("#d-val").textContent=Yt(A.debt);const N=1-A.debt/rt.startDebt;Mt("#d-bar").style.width=`${N*100}%`,Mt("#debt").title=`남은 빚 ${Yt(A.debt)} · ${Math.floor(N*100)}% 상환`;const X=ad[A.quest],Y=(Wt,se)=>{const Le=Mt(`#menu [data-m="${Wt}"] .nb`);Le.textContent=se||"",Le.classList.toggle("hidden",!se)};Y("sell",A.onions.length);const ft=Ve[A.tier+1];Y("home",ft&&A.money>=ft.price?"!":""),Y("lab",Object.keys(ro).some(Wt=>A.research[Wt]<_o&&A.research.points>=Il(A.research[Wt]))?"!":"");const Rt=Object.keys(A.known).length-(A.flags.knowSeen??0);Y("know",Rt>0?Rt:""),lo("#menu button").forEach(Wt=>Wt.classList.toggle("nudge",X===`menu:${Wt.dataset.m}`)),Y("debt",F),Y("staff",yo()?yr().icon:""),Mt('#menu [data-m="sound"] .mi').textContent=It.isMuted()?"🔇":"🔊",M()}function M(){const R=Ls[A.quest],F=Ls.length;Mt("#quest").innerHTML=R?`<div class="q-head"><span>🎯 할 일</span><small>${A.quest+1}/${F}</small></div>
         <div class="q-body"><span class="q-icon">${R.icon}</span><p>${R.text}</p></div>
         <div class="q-dots">${Ls.map((N,X)=>`<i class="${X<A.quest?"done":X===A.quest?"now":""}"></i>`).join("")}</div>`:'<div class="q-body"><span class="q-icon">🏆</span><p>모든 목표 달성!</p></div>'}function L(){S(),P(),zt(!0),i!=null&&de(),a==null||a()}function G(){l||(l=!0,requestAnimationFrame(O))}function O(){l=!1,d&&(U(),S(),zt(),i!=null&&de(),k(),et())}function k(){if(lo("#toolbar .tool").length!==Ss.filter(za).length)return P();lo("#toolbar .tool").forEach(R=>{const F=Ss.find(X=>X.key===R.dataset.k),N=Ba(F);N&&(R.querySelector("em").textContent=A.inv[N],R.classList.toggle("empty",A.inv[N]<=0))})}function U(){const R=My();for(const N of R)K(`목표 달성! ${N.text}`,"quest","🎯"),Mt("#quest").classList.remove("flash"),Mt("#quest").offsetWidth,Mt("#quest").classList.add("flash");R.length&&(It.quest(),P());const F=yy();F.length&&(x.push(...F),qt(),P()),(R.length||F.length)&&Tn()}const B=()=>d&&!c&&!h&&!a&&Mt("#unlock").classList.contains("hidden")&&Mt("#bill").classList.contains("hidden")&&!document.hidden;function Z(R){if(!d||($t(),Math.abs(m-A.money)>.5&&(m+=(A.money-m)*Math.min(1,R*7),Math.abs(m-A.money)<1&&(m=A.money),Mt("#m-val").textContent=Yt(m)),!B()))return;const F=R*(rt.dayEnd-rt.dayStart)/rt.daySeconds*rt.speeds[u];H(By(F)),s.setClock(A.time),D(),p+=R,p>.25&&(p=0,s.potViews.forEach(N=>s.dirty.add(N)),O()),g+=R,g>5&&(g=0,Tn()),!v&&A.time>=rt.sleepWarnHour&&(v=!0,K("1시간 뒤 자동으로 잠들어요. 마무리하세요!","warn","🌙"),It.warn()),A.time>=rt.dayEnd&&ue(!0)}function H(R,{quiet:F=!1}={}){if(!R.length)return;let N=null;for(const X of R)F||K(X.text,X.type==="good"?"good":X.type==="bad"?"bad":"warn",X.icon),X.potId!=null&&X.kind?(s.celebrate(X.potId,X.kind),X.onion&&!F&&s.popOnion(X.potId,X.onion),N=X.kind==="dead"?"dead":X.kind==="mature"?"ready":X.kind==="harvest"?"harvest":N??"grow"):X.type==="warn"&&(N??(N="warn"));N&&!F&&It[N](),G()}function K(R,F="",N=""){const X=document.createElement("div");for(X.className=`toast ${F}`,X.innerHTML=`${N?`<span class="ti">${N}</span>`:""}<span>${R}</span>`,Mt("#toasts").appendChild(X),setTimeout(()=>X.classList.add("out"),2800),setTimeout(()=>X.remove(),3300);Mt("#toasts").children.length>4;)Mt("#toasts").firstChild.remove()}function dt(R,{x:F,y:N},X=""){const Y=document.createElement("div");Y.className=`float ${X}`,Y.textContent=R,Y.style.left=`${F}px`,Y.style.top=`${N}px`,Mt("#floats").appendChild(Y),setTimeout(()=>Y.remove(),1400)}let ut=null,lt="";function te(R,F,N){ut=R&&A?{h:R,x:F??(ut==null?void 0:ut.x)??0,y:N??(ut==null?void 0:ut.y)??0}:null,et()}function et(){const R=Mt("#tooltip"),F=ut?at(ut.h):"";if(!F)return lt="",R.classList.add("hidden");F!==lt&&(lt=F,R.innerHTML=F),R.style.left=`${ut.x+18}px`,R.style.top=`${ut.y+18}px`,R.classList.remove("hidden")}function at(R){let F="";if(R.type==="pot"){const N=kn(R.id);if(!N)return"";const X=N.plant;F=`<b>${_r[N.type].icon} #${N.id}</b> 🟫 ${Math.round(_n(N)*100)}% · 💧 ${Math.round(N.moisture)}%`,X&&(F+=`<br/>${X.dead?"💀 죽음":`${or[X.stage].icon} ${or[X.stage].name}`}`),n==="1"&&(F+="<br/><small>👆 눌러서 자세히</small>")}else if(R.type==="bag")F=R.kind==="field"?"<b>🟫 마당 흙</b> · 무료<br/><small>품질 들쭉날쭉</small>":`<b>✨ 상토</b> · ${A.inv.premiumScoops}삽 남음<br/><small>영양·품질 좋음</small>`;else if(R.type==="lock"){const N=Ve[R.tier];F=`<b>🔒 ${N.icon} ${N.name}</b><br/>${Yt(N.price)} · 👆 눌러서 확장`}return F}function Ct(R){const N=(Ge[R.kind].stages.sprout>0?["sprout","leaf","bulb"]:["leaf","bulb"]).reduce((X,Y)=>X+Gn(R,Y),0);return R.stage==="mature"?1:1-jh(R)/N}function pt(R){const F=R.plant,N=_n(R);let X,Y,ft,Rt="",Wt="";if(F)F.dead?(X="💀",Y=0,ft="#777",Wt="dead"):(X=or[F.stage].icon,Y=Ct(F),ft=F.stage==="mature"?"#ffc531":"#5ad35a",F.stage==="mature"?(Wt="ripe",Rt='<span class="pb-alert">✋</span>'):Fl(R).speed>1&&(Wt="boost"));else{const fe=N>=rt.minFill;X=fe?"🧅":"🟫",Y=Math.min(1,N),ft=fe?"#5ad35a":"#ffc531",fe?(Rt='<span class="pb-tag">심기 OK</span>',Wt="ready-plant"):N===0&&(Wt="empty")}const se=R.moisture;R.soil>0&&F&&!F.dead&&(se>92?Rt='<span class="pb-alert">🌊</span>':se<25&&(Rt='<span class="pb-alert">💧</span>'));const Le=se>92?"bad":se>78?"warn":se>=35?"good":se>=15?"warn":"bad",fn=R.soil>0?`<div class="pb-water ${Le}"><u></u><i style="width:${Math.min(100,se)}%"></i></div>`:"",Re=Object.keys(ri).filter(fe=>R.auto[fe]).map(fe=>ri[fe].icon).join("");return`<div class="pb ${Wt}">
      ${Re?`<span class="pb-auto${R.auto.dripping?" on":""}">${Re}</span>`:""}
      <div class="pb-ring" style="--p:${(Y*100).toFixed(1)}%;--c:${ft}"><span>${X}</span>${Wt==="boost"?'<em class="pb-boost">⏩</em>':""}</div>
      ${fn}${Rt}</div>`}function zt(R=!1){const F=Mt("#badges"),N=new Set(A.pots.map(X=>X.id));for(const[X,Y]of y)N.has(X)||(Y.el.remove(),y.delete(X));for(const X of A.pots){let Y=y.get(X.id);if(!Y){const Rt=document.createElement("div");Rt.className="pot-badge",F.appendChild(Rt),Y={el:Rt,html:""},y.set(X.id,Y)}const ft=pt(X);(R||ft!==Y.html)&&(Y.html=ft,Y.el.innerHTML=ft),Y.el.classList.toggle("sel",X.id===i)}}function $t(){for(const[R,F]of y){const N=s.screenPos(R);if(!N){F.el.style.display="none";continue}F.el.style.display="",F.el.style.transform=`translate(${N.x.toFixed(1)}px, ${N.y.toFixed(1)}px)`}}function Kt(R){const F=hc(R);return F.error?F.error:(s.popOnion(R.id,F.onion),It.harvest(),K(`${F.onion.grade}등급 양파 ${F.onion.weight}g 수확!`,"good","🧅"),null)}function ye(R,F){var Y;const N=R==="fertilizer"?Cy(F):Ry(F);if(N)return N;const X=R==="fertilizer"&&((Y=F.plant)==null?void 0:Y.lateFert);return K(R==="fertilizer"?X?"비료를 줬어요… 수확 직전이라 저장성↓":`비료를 줬어요! 영양 +${rt.fertNutrient}`:`석회를 뿌렸어요! pH +${rt.limePH}`,X?"warn":"good",R==="fertilizer"?"🧪":"⚪"),s.sprinkle(F.id,R),It.plant(),null}function ne(R,F){const N=kn(F);if(!N)return;const X=ye(R,N);X&&(K(X,"bad"),It.bad()),Tn(),L()}function Ce(R){var N;const F=kn(R);if(((N=F==null?void 0:F.plant)==null?void 0:N.stage)==="mature"&&!F.plant.dead){Kt(F),s.dirty.add(s.potViews.get(R)),Tn(),i===R&&De(),L();return}q(R)}function q(R){i=R,r="",Mt("#pot-panel").classList.remove("hidden"),Mt("#pot-panel").classList.remove("pp-pop"),Mt("#pot-panel").offsetWidth,Mt("#pot-panel").classList.add("pp-pop"),de(),zt()}function De(){i=null,Mt("#pot-panel").classList.add("hidden"),A&&zt()}const Zt=(R,F,N,X,Y,ft)=>`<div class="meter ${X}" title="${F}"><span class="mi">${R}</span><div class="bar">${ft?`<u style="left:${ft[0]*100}%;width:${(ft[1]-ft[0])*100}%"></u>`:""}<i style="width:${Math.max(0,Math.min(100,N*100))}%"></i></div><b>${Y}</b></div>`;function ee(R,F){const N=A.known;if(!R.soil||!N.nutrient&&!N.ph)return"";const X=Ua(R),Y=[];F.moist||Y.push('<span class="bad">💧 수분 35~78% 맞추기</span>'),N.ph&&Y.push(F.ph?'<span class="ok">⚗️ pH 적정</span>':X.lime==="over"?'<span class="bad">⚗️ pH가 너무 높아요</span>':`<span>⚪ 석회 <b>${X.lime}번</b> 더</span>`),N.nutrient&&Y.push(F.nut?'<span class="ok">🧪 영양 적정</span>':X.fert==="over"?'<span class="bad">🧪 영양 과다 · 기다리기</span>':`<span>🧪 비료 <b>${X.fert}번</b> 더</span>`);const ft=1+rt.boostPerIdeal*((N.ph?1:0)+(N.nutrient?1:0));return`<div class="pp-boost ${F.speed>1?"on":""}"><b>⏩ 성장 속도 ×${F.speed.toFixed(2).replace(/\.?0+$/,"")}</b><small>최대 ×${ft.toFixed(2).replace(/\.?0+$/,"")}</small><div>${Y.join("")}</div></div>`}const Ft=(R,F,N="",X="")=>`<span class="pchip ${N}" title="${X}">${R} ${F}</span>`;function de(){const R=kn(i);if(!R)return De();const F=A.known,N=R.plant,X=zs(R),Y=R.moisture,ft=_n(R),Rt=Y>92?"bad":Y>78?"warn":Y>=35?"good":Y>=15?"warn":"bad",Wt=_r[R.type],se=Fl(R);let Le=Zt("🟫","흙 높이",ft,ft>=rt.minFill?"good":"warn",`${Math.round(ft*100)}%`,[rt.minFill,rt.goodFill]);Le+=Zt("💧","수분",Y/100,Rt,`${Math.round(Y)}%`,[.35,.78]);const[fn,Re]=rt.idealNutrient;F.nutrient&&(Le+=Zt("🧪",`영양 (${fn}~${Re})`,R.nutrients/100,R.nutrients>90?"bad":se.nut?"good":"warn",Math.round(R.nutrients),[fn/100,Re/100])),F.soil&&(Le+=Zt("⭐","흙 품질",pr(R),pr(R)>.75?"good":"warn",R.soil?pr(R).toFixed(2):"-"));const[fe,en]=rt.idealPH;F.ph&&(Le+=Zt("⚗️",`pH (${fe.toFixed(1)}~${en.toFixed(1)})`,R.soil?(X-4)/4.5:0,se.ph?"good":"warn",R.soil?X.toFixed(1):"-",[(fe-4)/4.5,(en-4)/4.5])),Le+=ee(R,se);let Rn=`<div class="pp-empty">${ft>=rt.minFill?"🧅 ⬇️ 심을 준비 완료!":"🪏 흙을 60% 넘게 채우세요"}</div>`;if(N){const Li=Ge[N.kind];if(N.dead)Rn=`<div class="pp-empty bad">💀 ${{rot:"🌊 썩어서",dry:"🏜️ 말라서",weak:"🥀 시들어서"}[N.dead]} 죽었어요</div>`;else{const E=Li.stages.sprout>0?["sprout","leaf","bulb","mature"]:["leaf","bulb","mature"],W=E.indexOf(N.stage),J=N.stage==="mature"?1:Math.min(1,N.progress/Gn(N,N.stage)),Q=E.map((Lt,At)=>{const Gt=At<W?"done":At===W?"now":"",Xt=At<E.length-1?`<div class="tl-seg"><i style="width:${At<W?100:At===W?J*100:0}%"></i></div>`:"";return`<div class="tl-step ${Gt}"><span>${or[Lt].icon}</span><small>${or[Lt].name}</small></div>${Xt}`}).join(""),$=jh(N,se.speed*nu()),ht=N.stage==="bulb"||N.stage==="mature"?lu(cu(N)):null,xt=[Ft("❤️",`${Math.round(N.health*100)}%`,N.health<.6?"bad":"","건강"),Ft("⚖️",`${Math.round(N.weight)}g`,"","무게"),F.leaves?Ft("🌿",`${N.leaves.toFixed(1)}장`,"","잎 수 (많을수록 구가 커져요)"):"",F.moisture?Ft("🪨",`${Math.round(Math.min(1,N.firm/ko)*100)}%`,"","단단함 (수확 직전 물을 끊으면 올라가요)"):"",N.bolted?Ft("🌼","추대","bad","꽃대가 올라와 품질이 떨어져요"):"",N.lateFert?Ft("🧪","늦은 비료","bad","저장성 저하"):""].join("");Rn=`
          <div class="pp-plant-head"><span class="pp-kind">${Li.icon}</span><b>${Li.name}</b>
            <span class="eta">${N.stage==="mature"?"✨ 지금 수확!":`⏳ ${$<1?`${Math.round($*24)}시간`:`${$.toFixed(1)}일`}`}</span></div>
          <div class="timeline">${Q}</div>
          <div class="chips">${xt}${ht?`<span class="pchip est">예상 ${ka(ht)}</span>`:""}</div>`}}const wr=N&&!N.dead&&(N.stage==="bulb"||N.stage==="mature"),Er=kt(R),Tr=["nutrient","soil","ph","leaves","moisture"].filter(Li=>!F[Li]).length,Gs=`
      <div class="pp-head"><span class="pp-icon">${Wt.icon}</span><b>#${R.id}</b><small>${Wt.name}</small><button class="x">✕</button></div>
      <div class="pp-plant">${Rn}</div>
      <div class="meters">${Le}</div>
      ${Er}
      ${Tr?`<div class="pp-lock">🔒 노하우를 깨우치면 더 많은 정보가 보여요 (${5-Tr}/5)</div>`:""}
      <div class="pp-actions">
        ${wr?`<button data-a="harvest" class="primary big${N.stage==="mature"?" glow":""}">✋🧅 수확</button>`:""}
        ${F.nutrient?`<button data-a="fert" class="${A.inv.fertilizer&&R.soil?"buy":""}" ${A.inv.fertilizer&&R.soil?"":"disabled"}>🧪 ${A.inv.fertilizer?"비료 주기":"비료 없음"}<em>×${A.inv.fertilizer}</em></button>`:""}
        ${F.ph?`<button data-a="lime" class="${A.inv.lime&&R.soil?"buy":""}" ${A.inv.lime&&R.soil?"":"disabled"}>⚪ ${A.inv.lime?"석회 뿌리기":"석회 없음"}<em>×${A.inv.lime}</em></button>`:""}
        ${N?`<button data-a="pull" class="danger" title="${N.dead?"치우기":"뽑아 버리기"}">🗑️ ${N.dead?"치우기":"뽑기"}</button>`:""}
        ${!N&&R.soil?'<button data-a="empty" title="흙 비우기">🪣 흙 비우기</button>':""}
        ${!N&&!R.soil?'<button data-a="remove" title="화분을 치워 자리를 비워요">♻️ 화분 치우기</button>':""}
      </div>
      <p class="tip">💡 ${I(R)}</p>`;o||Gs===r||(r=Gs,Mt("#pot-panel").innerHTML=Gs)}function kt(R){const F=R.auto,N=Object.entries(ri).filter(([X])=>F[X]||A.inv[X]>0||Ia(xo.find(Y=>Y.id===X).need)).map(([X,Y])=>{if(!F[X]){const Rt=A.inv[X];return`<div class="dev-row"><span class="dev-icon off">${Y.icon}</span><small>${Y.name}</small>
          <button data-a="inst" data-k="${X}" class="${Rt?"buy":""}" ${Rt?"":"disabled"}>${Rt?`설치 <em>×${Rt}</em>`:"상점에서 구매"}</button></div>`}let ft="";if(X==="drip"&&(ft=F.dripping?'<b class="ok">💧 급수 중</b>':A.owned.dripTimer?"<b>⏲️ 타이머 연결</b>":"<b>대기</b>"),X==="planter"){const Rt=Ge[F.seed];ft=`<button data-a="seed" title="심을 것 바꾸기">${Rt.icon} ${Rt.name} <em>×${A.inv[F.seed]}</em></button>`+(A.known.soil?`<button data-a="soil" title="채울 흙 바꾸기">${F.soil==="premium"?`✨ 상토 <em>×${A.inv.premiumScoops}</em>`:"🟫 마당 흙"}</button>`:"")}return X==="harvester"&&(ft="<b>✨ 적기에 수확</b>"),`<div class="dev-row on"><span class="dev-icon">${Y.icon}</span><small>${Y.name}</small>${ft}
        <button data-a="uninst" data-k="${X}" class="ghost" title="떼어 내기">⏏️</button></div>`});return N.length?`<div class="pp-auto"><div class="pp-auto-h">⚙️ 자동화 설비</div>${N.join("")}</div>`:""}function I(R){const F=R.plant,N=A.known;return R.soil?_n(R)<rt.minFill?"노란 눈금(60%)까지 채우면 심을 수 있어요. 초록 눈금(90%)이면 보너스!":N.ph&&zs(R)<rt.idealPH[0]?`흙이 산성이에요. 석회 ${Ua(R).lime}번이면 적정 pH가 돼요.`:F?F.dead?"치우고 다시 심어요. 흙은 그대로 쓸 수 있어요.":R.moisture<25?"흙이 말랐어요! 물뿌리개(3)로 물을 주세요.":R.moisture>92?"물이 너무 많아요. 썩기 전에 마르길 기다려요.":N.moisture&&F.stage==="bulb"&&F.progress>=Gn(F,"bulb")-zo?R.auto.drip&&!A.owned.dripTimer?"수확이 가까워요. 점적 호스를 떼어(⏏️) 물을 끊으면 단단해져요.":"수확이 가까워요. 물을 끊으면(45%↓) 단단해져요.":F.stage==="mature"?"잎이 쓰러졌어요. 지금 수확하세요!":N.nutrient&&R.nutrients>90?"영양이 넘쳐요! 해로우니 비료는 쉬어요.":N.nutrient&&R.nutrients<rt.idealNutrient[0]?`영양이 부족해요. 비료 ${Ua(R).fert}번이면 적정이에요.`:"수분을 초록 구간(35~78%)에 맞춰 주면 잘 자라요.":"구근(4)을 들고 이 화분 위에서 눌러 떨어뜨려요.":"모종삽(2)으로 포대 흙을 떠서 화분에 넣어요."}Mt("#pot-panel").addEventListener("pointerdown",()=>{o=!0}),addEventListener("pointerup",()=>{o=!1}),Mt("#pot-panel").addEventListener("click",R=>{o=!1,r="";const F=R.target.closest("button");if(!F)return;if(F.classList.contains("x"))return It.click(),De();const N=kn(i);if(!N)return;const X=s.potViews.get(N.id);let Y=null;switch(F.dataset.a){case"fert":Y=ye("fertilizer",N);break;case"lime":Y=ye("lime",N);break;case"harvest":Y=Kt(N);break;case"inst":Y=zy(N,F.dataset.k),Y||(It.plant(),K(`${ri[F.dataset.k].name}를 설치했어요`,"good",ri[F.dataset.k].icon),s.celebrate(N.id,"stage"));break;case"uninst":Y=ky(N,F.dataset.k),Y||It.pop();break;case"seed":Hy(N),It.click();break;case"soil":Vy(N),It.click();break;case"pull":if(!N.plant.dead&&!confirm("정말 뽑아서 버릴까요?"))return;Py(N),s.celebrate(N.id,"dead"),It.dump();break;case"empty":Y=Ly(N),Y||It.dump();break;case"remove":Y=Sy(N),Y||(De(),It.pop(),s.refresh());break}Y&&(K(Y,"bad"),It.bad()),X&&s.dirty.add(X),Tn(),L()});const w={shop:"🏪 농자재 상점",sell:"💵 양파 팔기",home:"🏠 집 확장",know:"📖 양파 노하우",staff:"👷 알바 구하기",lab:"🔬 농업 연구소",debt:"📮 고지서 · 빚",help:"❔ 하는 법"};function j(R){const F={staff:ie,shop:ot,sell:it,home:Nt,know:ct,lab:Tt,debt:Ht,help:Vt};Mt("#modal h3").textContent=w[R],a=()=>{Mt("#modal .modal-body").innerHTML=F[R]()},a(),R==="know"&&(A.flags.knowSeen=Object.keys(A.known).length,S()),Mt("#modal").classList.remove("hidden"),Mt("#modal").dataset.kind=R}function nt(){a=null,Mt("#modal").classList.add("hidden")}function ot(){const R=xo.map(F=>{const N=Ia(F.need),X=F.once&&A.owned[F.once],Y=F.pot&&A.pots.length>=Io(),ft=!N||X||Y||A.money<F.price,Rt=F.give?A.inv[Object.keys(F.give)[0]]:null,Wt=N?X?"✔ 보유 중":Y?"자리 없음":Yt(F.price):`🔒 ${Da(F.need)}`;return`<div class="card${N?"":" locked"}${X?" owned":""}">
        <div class="card-icon">${N?F.icon:"❔"}</div>
        <b>${N?F.name:"???"}</b><small>${N?F.desc:"아직 몰라요"}</small>
        ${Rt!=null&&N?`<span class="have">보유 ${Rt}</span>`:""}
        <button data-buy="${F.id}" class="${ft?"":"buy"}" ${ft?"disabled":""}>${Wt}</button>
      </div>`}).join("");return`<div class="info-row"><span>🪙 ${Yt(A.money)}</span><span>🧴 화분 ${A.pots.length}/${Io()}자리</span></div><div class="shop-grid">${R}</div>`}function it(){const R=`<div class="buyers-row">
      <div class="bcard"><span>🚚</span><b>도매상</b><small>모든 등급</small></div>
      <div class="bcard"><span>👨‍🍳</span><b>주방장</b><small>B 이상 · 오늘 <b>${A.chefLeft}</b>개 더</small></div>
      <div class="bcard"><span>🔬</span><b>연구소</b><small>기증 → 연구 포인트</small></div>
    </div>`;if(!A.onions.length)return`${R}<div class="empty-state">🧺<p>팔 양파가 없어요.<br/>✨ 화분을 손(1)으로 눌러 수확해요.</p></div>`;const N=[...A.onions].sort((Y,ft)=>ft.score-Y.score).map(Y=>{const ft=bo(Y,"wholesale"),Rt=bo(Y,"chef"),Wt=Rt&&A.chefLeft>0?"chef":"wholesale";return`<div class="onion-card">
        <div class="oc-top">${ka(Y.grade,!0)}<div><b>${Ge[Y.kind].icon} ${Y.weight}g</b><small>${Y.day}일차 수확</small></div></div>
        <button data-sell="${Y.id}" data-b="wholesale" class="${Wt==="wholesale"?"buy":""}">🚚 ${Yt(ft)}</button>
        <button data-sell="${Y.id}" data-b="chef" class="${Wt==="chef"?"buy":""}" ${Rt&&A.chefLeft>0?"":"disabled"}>👨‍🍳 ${Rt?Yt(Rt):"안 받아요"}</button>
        <button data-donate="${Y.id}">🔬 +${Ll[Y.grade]}점</button>
      </div>`}).join(""),X=A.onions.reduce((Y,ft)=>Y+bo(ft,"wholesale"),0);return`${R}<div class="onion-grid">${N}</div>
      <div class="center"><button data-bulk="1" class="primary">🚚 전부 도매로 팔기 (${A.onions.length}개 · ${Yt(X)})</button></div>`}function Nt(){return`<div class="home-row">${Ve.map((R,F)=>{const N=F===A.tier,X=F<A.tier,Y=F===A.tier+1,ft=N?'<span class="home-now">🏠 지금 여기</span>':X?'<span class="home-now done">✔ 완료</span>':Y?`<button data-home="${F}" class="${A.money>=R.price?"buy primary":""}" ${A.money>=R.price?"":"disabled"}>🔨 ${Yt(R.price)}</button>`:`<span class="home-now">🔒 ${Ve[F-1].name} 먼저</span>`;return`<div class="home-card${N?" cur":""}${F>A.tier?" future":""}">
        <div class="home-icon">${R.icon}</div><b>${R.name}</b>
        <div class="slots">${Array.from({length:Ve[Ve.length-1].slots},(Rt,Wt)=>`<i class="${Wt<R.slots?"on":""}"></i>`).join("")}</div>
        <small>${R.desc}</small>${ft}</div>`}).join('<div class="home-arrow">➜</div>')}</div>
    <p class="muted center">확장하면 화분 자리와 살 수 있는 물건이 늘어나요.</p>`}const vt={water:"💧 물 주기",harvest:"✋ 수확",plant:"🧅 흙 채우고 심기",dry:"🪨 수확 전 단수"},St=([R,F])=>`${String(R).padStart(2,"0")}~${String(F).padStart(2,"0")}시`;function ie(){const R=A.worker,F=yr(),N=F?`<div class="staff-now">
        <span class="staff-face">${F.icon}</span>
        <div><b>${F.name}</b> <span class="staff-st ${yo()?"on":""}">${yo()?"🟢 근무 중":"🌙 퇴근"}</span>
          <small>${St(F.hours)} · 일한 지 ${R.days+1}일째 · 오늘 ${R.done}번 손봄</small></div>
        <button data-fire="1" class="danger">내보내기</button></div>`:'<div class="empty-state">🙋<p>아직 일손이 없어요. 한 명을 구해 보세요.</p></div>',X=Object.entries(Po).map(([Y,ft])=>{const Rt=Ia(ft.need),Wt=(R==null?void 0:R.id)===Y,se=!Rt||Wt||A.money<ft.wage,Le=Rt?Wt?"✔ 일하는 중":R?`바꾸기 · ${Yt(ft.wage)}`:`고용 · ${Yt(ft.wage)}`:`🔒 ${Da(ft.need)}`;return`<div class="card${Rt?"":" locked"}${Wt?" owned":""}">
        <div class="card-icon">${Rt?ft.icon:"❔"}</div>
        <b>${ft.name}</b><small>${ft.desc}</small>
        <div class="staff-tags"><span>⏰ ${St(ft.hours)}</span><span>🧴 시간당 ${ft.rate}개</span>${ft.does.map(fn=>`<span>${vt[fn]}</span>`).join("")}</div>
        <span class="have">일당 ${Yt(ft.wage)}</span>
        <button data-hire="${Y}" class="${se?"":"buy"}" ${se?"disabled":""}>${Le}</button>
      </div>`}).join("");return`${N}<div class="shop-grid">${X}</div>
      <p class="muted center">한 명만 쓸 수 있어요. 첫날 일당은 바로, 다음부터는 매일 아침 나가요. 못 주면 그만둬요.<br/>설비와 달리 설치 없이 모든 화분을 돌보지만 근무 시간에만 일해요.</p>`}function ct(){return`<div class="know-grid">${Object.entries(Lo).map(([R,F])=>{const N=A.known[R];return`<div class="know-card${N?"":" locked"}"><div class="know-icon">${N?F.icon:"🔒"}</div>
        <b>${N?F.name:"???"}</b><p>${N?F.text:`${Da(F.need)} 하면 깨달아요`}</p></div>`}).join("")}</div>`}function Tt(){return`<div class="info-row"><span>🔬 연구 포인트 <b class="big">${A.research.points}</b></span>
      <span class="muted">기증: ${"SABCD".split("").map(R=>`${ka(R)} ${Ll[R]}`).join(" ")}</span></div>
    <div class="skills">${Object.entries(ro).map(([R,F])=>{const N=A.research[R],X=Il(N),Y=N>=_o;return`<div class="skill"><span class="sk-icon">${F.icon}</span>
        <div class="sk-body"><b>${F.name}</b> <small class="muted">${F.desc}</small>
        <div class="pips">${Array.from({length:_o},(ft,Rt)=>`<i class="${Rt<N?"on":""}"></i>`).join("")}</div></div>
        <button data-skill="${R}" class="${!Y&&A.research.points>=X?"buy":""}" ${Y||A.research.points<X?"disabled":""}>${Y?"MAX":`🔬 ${X}`}</button>
      </div>`}).join("")}</div>`}function Ht(){const R=oi(),F=dc(),N=1-A.debt/rt.startDebt,X=R.length?R.map(Y=>`<div class="bill-row">
          <span class="br-icon">🧾</span><div><b>${Y.month}월 고지서</b><small>월세 ${Yt(Y.rent)} · 공과금 ${Yt(Y.util)}${Y.late?` · 연체료 ${Yt(Y.late)}`:""}</small></div>
          <b class="br-total">${Yt(Y.total)}</b>
          <button data-paybill="${Y.id}" class="${A.money>=Y.total?"buy primary":""}" ${A.money>=Y.total?"":"disabled"}>🪙 납부</button></div>`).join(""):'<div class="bill-ok">✅ 밀린 월세 없음</div>';return`<h4 class="sec">📮 월세</h4>
    <div class="rent-box">
      <div class="strikes big" title="미납 ${rt.evictAfter}건이면 퇴거">${co(R.length)}</div>
      <p>${R.length?`<b class="bad">미납 ${R.length}/${rt.evictAfter}</b> — ${rt.evictAfter}건 쌓이면 집에서 쫓겨나요`:"연체 없음. 잘하고 있어요!"}</p>
    </div>
    ${X}
    <div class="next-bill">📅 다음 고지서 <b>D-${mr()}</b> · 예상 <b>${Yt(F.total)}</b> <small>(🏠 ${Yt(F.rent)} + 💡 ${Yt(F.util)}${F.late?` + ⏰ ${Yt(F.late)}`:""})</small></div>
    <h4 class="sec">🏦 빚</h4>
    <div class="debt-box">
      <div><span>💸</span><small>남은 빚</small><b class="big">${Yt(A.debt)}</b></div>
      <div><span>🪙</span><small>보유 현금</small><b class="big">${Yt(A.money)}</b></div>
      <div><span>📈</span><small>매달 이자</small><b class="big">${Math.round(rt.debtInterest*100)}%</b></div>
    </div>
    <div class="debt-progress"><i style="width:${Math.max(0,N)*100}%"></i><span>${Math.max(0,Math.floor(N*100))}% 상환</span></div>
    <div class="debt-actions">
      ${[1e4,5e4,1e5,5e5].map(Y=>`<button data-pay="${Y}" ${A.money>=Y?"":"disabled"}>${Yt(Y)}</button>`).join("")}
      <button data-pay="all" class="primary" ${A.money>0?"":"disabled"}>💸 가능한 만큼 전부</button>
    </div>
    <p class="muted center">빚은 기한이 없지만 매달 이자가 붙어요. 다 갚으면 클리어! 월세 낼 돈은 꼭 남겨 두세요.</p>`}function Vt(){const R=[["🪏","흙 뜨기"],["🧴","페트병에 넣기"],["🧅","구근 심기"],["🚿","물 주기"],["⏳","기다리기"],["✋","수확"],["💵","팔기"]];return`<div class="help">
      <div class="goal">🎯 빚 <b>${Yt(rt.startDebt)}</b> 다 갚기 · 📮 월세는 <b>${rt.evictAfter}번</b> 밀리면 퇴거</div>
      <div class="flow">${R.map(([F,N])=>`<div><span>${F}</span><small>${N}</small></div>`).join("<b>➜</b>")}</div>
      <div class="help-grid">
        <div><span>⏰</span><b>시간은 계속 흘러요</b><small>06시~22시. 22시엔 자동으로 잠들어요. ⏸·▶ 버튼으로 속도 조절</small></div>
        <div><span>💧</span><b>물은 초록 구간</b><small>너무 마르면 시들고, 너무 많으면 썩어요</small></div>
        <div><span>✨</span><b>잎이 쓰러지면 수확</b><small>너무 오래 두면 과숙돼요</small></div>
        <div><span>📖</span><b>노하우가 쌓여요</b><small>수확할수록 더 좋은 양파 키우는 법을 깨달아요</small></div>
        <div><span>🏠</span><b>집 확장</b><small>돈을 모아 베란다 → 마당 → 비닐하우스로 넓혀요</small></div>
        <div><span>👷</span><b>알바생</b><small>베란다부터 일손을 구할 수 있어요. 근무 시간에 화분을 돌봐 주고 매일 일당을 받아요</small></div>
        <div><span>⚙️</span><b>자동화 설비</b><small>베란다부터 점적 호스, 마당에선 파종기·수확 집게. 화분 패널에서 설치해요</small></div>
        <div><span>📮</span><b>매달 고지서</b><small>${rt.monthDays}일마다 월세·공과금 고지서가 와요. 빚에는 이자가 붙어요</small></div>
      </div>
      ${matchMedia("(pointer: coarse)").matches?'<div class="keys"><span><kbd>👆 탭·꾹 누르기</kbd> 사용</span><span><kbd>✌️ 두 손가락 돌리기</kbd> 회전</span><span><kbd>🤏 벌리기·오므리기</kbd> 확대</span></div>':'<div class="keys"><span><kbd>🖱️ 좌</kbd> 사용</span><span><kbd>🖱️ 우 드래그</kbd> 회전</span><span><kbd>휠</kbd> 확대</span><span><kbd>1~6</kbd> 도구</span><span><kbd>Space</kbd> 일시정지</span></div>'}
    </div>`}function wt(R,F=6){Qt(R,Mt("#money"),F)}function Qt(R,F,N=6){const X=R.getBoundingClientRect(),Y=F.getBoundingClientRect();for(let ft=0;ft<N;ft++){const Rt=document.createElement("span");Rt.className="fly-coin",Rt.textContent="🪙",Rt.style.left=`${X.left+X.width/2+(Math.random()-.5)*40}px`,Rt.style.top=`${X.top+X.height/2+(Math.random()-.5)*20}px`,document.body.appendChild(Rt),setTimeout(()=>{Rt.style.transitionDelay=`${ft*.05}s`,Rt.style.left=`${Y.left+Y.width/2}px`,Rt.style.top=`${Y.top+Y.height/2}px`,Rt.style.transform="scale(.6)"},20),setTimeout(()=>Rt.remove(),800+ft*50)}setTimeout(()=>It.coin(),550)}Mt("#modal").addEventListener("click",R=>{const F=R.target.closest("button");if(!F||F.disabled||F.classList.contains("x"))return;const N=F.dataset;let X=null;if(N.buy){if(X=Yy(N.buy),!X){const Y=xo.find(ft=>ft.id===N.buy);K(`${Y.name} 구매!`,"good",Y.icon),It.buy(),s.refresh()}}else if(N.sell){const Y=A.onions.find(Rt=>Rt.id===+N.sell),ft=A.money;X=Kh(+N.sell,N.b),X||(K(`${Y.grade}등급 → ${Yt(A.money-ft)}`,"good",N.b==="chef"?"👨‍🍳":"🚚"),wt(F))}else if(N.donate)X=qy(+N.donate),X||(K("연구소에 기증했어요","good","🔬"),It.quest());else if(N.bulk){let Y=0;for(const ft of[...A.onions]){const Rt=A.money;Kh(ft.id,"wholesale"),Y+=A.money-Rt}K(`도매로 ${Yt(Y)} 받았어요`,"good","🚚"),wt(F,10)}else if(N.skill)X=Xy(N.skill),X||(K(`${ro[N.skill].name} 연구 완료!`,"good",ro[N.skill].icon),It.unlock());else if(N.hire){if(X=Iy(N.hire),!X){const Y=Po[N.hire];K(`${Y.name}을(를) 고용했어요!`,"good",Y.icon),It.quest()}}else if(N.fire){if(!confirm("알바생을 내보낼까요? 오늘 준 일당은 돌려받지 못해요."))return;X=Dy(),X||(K("알바생을 내보냈어요","warn","👋"),It.pop())}else if(N.home){if(X=by(),!X){const Y=Ve[A.tier];nt(),It.upgrade(),K(`${Y.name}(으)로 확장했어요!`,"quest",Y.icon),s.refresh(),U(),L(),Tn();return}}else if(N.pay){const Y=jy(N.pay==="all"?1/0:+N.pay);if(Y&&(K(`${Yt(Y)} 상환!`,"good","🏦"),It.coin()),A.ended)return st()}else N.paybill&&(X=Zh(+N.paybill),X||(K("월세를 냈어요","good","📮"),wt(F),It.stamp(),s.refresh()));X&&(K(X,"bad"),It.bad()),Tn(),L()});function qt(){const R=Mt("#unlock");if(!R.classList.contains("hidden")||!x.length)return;const F=x.shift(),N=Lo[F];R.innerHTML=`<div class="unlock-card">
      <div class="rays"></div>
      <small>💡 새 노하우를 깨달았어요!</small>
      <div class="u-icon">${N.icon}</div>
      <h3>${N.name}</h3><p>${N.text}</p>
      <button class="primary">알겠어요!</button></div>`,R.classList.remove("hidden"),It.unlock(),R.querySelector("button").onclick=()=>{It.click(),R.classList.add("hidden"),L(),setTimeout(qt,200)}}async function ue(R){if(c)return;c=!0,nt(),De(),s.dropEverything(),s.setEnabled(!1),It.sleep();const F=Mt("#night"),N=Array.from({length:30},()=>`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;animation-delay:${Math.random()*2}s"></i>`).join("");F.innerHTML=`<div class="stars">${N}</div><div class="night-card"><div class="moon">🌙</div>
      <p>${R?"밤 10시! 하던 일을 멈추고 잠들어요":"오늘은 일찍 쉬어요"}</p><div class="zzz"><i>Z</i><i>z</i><i>z</i></div></div>`,F.classList.remove("hidden"),requestAnimationFrame(()=>F.classList.add("in")),await xi(1500);const X=Wy();s.setClock(A.time),s.refresh(),v=!1;const Y=A.pendingBill!=null;if(F.innerHTML=Y?`<div class="night-card morning"><div class="cal-flip"><div class="cal-page new"><small>${A.month}월</small><b>${A.day}</b></div><div class="cal-page old"><small>${A.month-1}월</small><b>${A.day-1}</b></div></div><p><b>${A.month}월</b>이 밝았어요</p></div>`:`<div class="night-card morning"><div class="moon sun">☀️</div><p><b>${A.day}일차</b> 아침</p></div>`,F.classList.add("dawn"),It.morning(),Y&&setTimeout(()=>It.paper(),500),await xi(Y?1800:1100),F.classList.remove("in"),await xi(450),F.classList.add("hidden"),F.classList.remove("dawn"),c=!1,A.ended)return st();s.setEnabled(!0),L(),H(X,{quiet:!0}),!await V()&&tt(X)}async function V(){if(A.pendingBill==null||c)return!1;c=!0;const R=hu(A.pendingBill);return R&&await gt(R),c=!1,A.pendingBill=null,Tn(),s.refresh(),L(),Zy()?(st(),!0):!1}function gt(R){return new Promise(F=>{const N=Mt("#bill"),X=oi().filter(Re=>Re.id!==R.id).length,Y=X+1>=rt.evictAfter,Rt=[["🏠",`월세 · ${Ve[R.home].name}`,R.rent],["💡",`전기·수도 · 화분 ${R.pots}개${R.devices?` · 설비 ${R.devices}개`:""}`,R.util],...R.late?[["⏰",`연체료 · 미납 ${R.unpaidBefore}건`,R.late]]:[]];N.innerHTML=`
        <div class="bill-stage${Y?" final":""}">
          <div class="envelope">
            <div class="env-back"></div>
            <div class="letter">
              <div class="l-head"><span>${Y?"최 종 독 촉":"고 지 서"}</span><small>${R.month}월분 · 집주인 드림</small></div>
              ${Y?'<div class="l-warn">⚠️ 이번에도 못 내면 집을 비워야 합니다</div>':""}
              <div class="l-lines">${Rt.map(([Re,fe,en],Rn)=>`<div class="l-line" style="--d:${Rn}"><span>${Re}</span><em>${fe}</em><b>${Yt(en)}</b></div>`).join("")}</div>
              <div class="l-total"><span>합계</span><b class="l-sum">0원</b></div>
              <div class="l-info">💸 빚 이자 +${Yt(R.interest)} <small>(빚에 더해짐)</small></div>
              <div class="l-strikes"><small>연체</small><div class="strikes">${co(X)}</div></div>
              <div class="l-btns">
                <button class="primary big" data-act="pay" ${A.money>=R.total?"":"disabled"}>🪙 납부하기</button>
                <button class="${Y?"danger":""}" data-act="later">${Y?"못 내요… (퇴거)":"다음에 낼게요"}</button>
              </div>
              <small class="l-have">보유 ${Yt(A.money)}${A.money<R.total?" · 돈이 부족해요":""}</small>
              <div class="l-stamp"></div>
            </div>
            <div class="env-flap"></div>
            <div class="env-front"><span class="env-stamp">${Y?"독촉":"고지서"}</span><small>${R.month}월분</small></div>
          </div>
          <p class="bill-caption">📮 ${R.month}월 고지서가 도착했어요 <small>(눌러서 열기)</small></p>
        </div>`,N.classList.remove("hidden");const Wt=N.querySelector(".bill-stage");setTimeout(()=>It.mail(),350);let se=!1;const Le=async()=>{if(se)return;se=!0,Wt.classList.add("open"),It.paper(),await xi(650),Wt.classList.add("read"),Rt.forEach((fe,en)=>setTimeout(()=>It.tick(),250+en*300)),await xi(300+Rt.length*300);const Re=N.querySelector(".l-sum");for(let fe=1;fe<=12;fe++)Re.textContent=Yt(Math.round(R.total*(1-Math.pow(1-fe/12,3))/100)*100),fe%2&&It.tick(),await xi(45);Re.classList.add("done"),It.stamp(),Wt.classList.add("ready")};Wt.addEventListener("click",Le),setTimeout(Le,1600);const fn=async Re=>{const fe=N.querySelector(".l-stamp");if(fe.textContent=Re?"납부완료":"미 납",fe.className=`l-stamp ${Re?"ok":"no"}`,N.querySelectorAll(".l-btns button").forEach(en=>{en.disabled=!0}),setTimeout(()=>It.stamp(),120),!Re){const en=N.querySelector(".l-strikes .strikes");en.innerHTML=co(X+1),en.classList.add("hit"),Wt.classList.add("shake"),setTimeout(()=>It.bad(),250)}await xi(1400),Wt.classList.add("leave"),await xi(550),N.classList.add("hidden"),N.innerHTML="",F()};N.querySelector('[data-act="pay"]').onclick=Re=>{if(Re.stopPropagation(),!se)return Le();const fe=Zh(R.id);if(fe){K(fe,"bad"),It.bad();return}Qt(Mt("#money"),N.querySelector(".l-total"),8),S(),fn(!0)},N.querySelector('[data-act="later"]').onclick=Re=>{if(Re.stopPropagation(),!se)return Le();fn(!1)}})}function tt(R){Mt("#modal h3").textContent=`☀️ ${A.day}일차 아침`;const F=A.pots.filter(Y=>Y.plant&&!Y.plant.dead&&Y.moisture<35).length,N=A.pots.filter(Y=>{var ft;return((ft=Y.plant)==null?void 0:ft.stage)==="mature"&&!Y.plant.dead}).length,X=R.length?`<ul class="report">${R.map(Y=>`<li class="${Y.type}"><span>${Y.icon??"•"}</span>${Y.text}</li>`).join("")}</ul>`:'<div class="empty-state">😴<p>밤사이 별일 없었어요.</p></div>';a=()=>{Mt("#modal .modal-body").innerHTML=`
        <div class="morning-chips">
          <span>📮 고지서 D-${mr()}</span><span>👨‍🍳 주문 ${A.chefLeft}개</span>
          ${oi().length?`<span class="bad">🧾 미납 ${oi().length}/${rt.evictAfter}</span>`:""}
          ${F?`<span class="warn">💧 목마른 화분 ${F}</span>`:""}${N?`<span class="good">✨ 수확 ${N}</span>`:""}
        </div>${X}
        <div class="center"><button class="primary big" data-close="1">☀️ 하루 시작!</button></div>`,Mt("#modal [data-close]").onclick=()=>{It.click(),nt()}},a(),Mt("#modal").classList.remove("hidden")}function st(){d=!1,nt(),De(),s.setEnabled(!1),_t(),e(A.ended)}function yt(){Mt("#ui").classList.remove("hidden"),d=!0,s.setEnabled(!0),s.setClock(A.time),m=A.money,f=A.money,Mt("#m-val").textContent=Yt(A.money),v=A.time>=rt.sleepWarnHour,T("1"),C(),L(),U(),A.pendingBill!=null&&setTimeout(V,400)}function _t(){Mt("#ui").classList.add("hidden")}return Object.assign(t,{onPotClick:Ce,onApply:ne,onLockClick:()=>{It.click(),j("home")},onHover:te,toast:K,onStateChange:G,onFrame:Z,onFloat:dt}),{show:yt,hide:_t,renderAll:L,toast:K,openModal:j}}const Go=()=>document.getElementById("cinema"),Wo=`
<svg class="onion-svg" viewBox="0 0 200 260" aria-hidden="true">
  <line class="soil-line" x1="10" y1="200" x2="190" y2="200"/>
  <g class="onion-leaves">
    <path d="M100 150 C 96 100, 80 60, 62 20" />
    <path d="M100 150 C 102 95, 108 55, 112 10" />
    <path d="M100 150 C 106 105, 124 72, 146 36" />
  </g>
  <g class="onion-bulb">
    <path d="M100 145 C 140 150, 160 185, 150 212 C 140 240, 60 240, 50 212 C 40 185, 60 150, 100 145 Z"/>
    <path class="onion-line" d="M100 150 C 80 175, 78 215, 92 236"/>
    <path class="onion-line" d="M100 150 C 120 175, 122 215, 108 236"/>
  </g>
</svg>`,aM=`
<svg class="house-svg" viewBox="0 0 400 220" aria-hidden="true">
  <path class="draw" d="M40 200 L360 200"/>
  <path class="draw d1" d="M90 200 L90 110 L200 50 L310 110 L310 200"/>
  <path class="draw d2" d="M175 200 L175 140 L225 140 L225 200"/>
  <path class="draw d3" d="M110 125 L150 125 L150 160 L110 160 Z"/>
  <path class="draw d3" d="M250 125 L290 125 L290 160 L250 160 Z"/>
  <path class="draw d4" d="M20 200 Q 40 190 60 200 M330 200 Q 350 188 380 200"/>
</svg>`,Ha=[{dur:3600,html:`<div class="sc sc-dark">
      <p class="kicker fade-up">가을, 어느 시골 마을</p>
      <h2 class="type-line">사업이 망한 지 석 달째.</h2>
    </div>`},{dur:5200,html:`<div class="sc sc-dark">
      <div class="letter">
        <div class="letter-head">독 촉 장</div>
        <p>채무자 귀하,</p>
        <p>아래 채무의 상환을 최종 통보합니다.</p>
        <div class="letter-row"><span>잔여 채무</span><b class="count" data-to="${rt.startDebt}">0원</b></div>
        <div class="letter-row"><span>이자</span><b>매달 ${Math.round(rt.debtInterest*100)}%</b></div>
        <p class="small">추신: 월세가 ${rt.evictAfter}달 밀리면 집도 비워 주셔야 합니다. — 집주인</p>
        <div class="stamp">최종통보</div>
      </div>
    </div>`,onMount(s){setTimeout(()=>{var t;return(t=s.closest("#cinema"))==null?void 0:t.classList.add("shake")},3150),setTimeout(()=>{var t;return(t=s.closest("#cinema"))==null?void 0:t.classList.remove("shake")},3600)}},{dur:4600,html:`<div class="sc sc-dusk">
      ${aM}
      <h2 class="fade-up delay-2">남은 건 할머니가 물려주신<br/>낡은 시골집 한 채.</h2>
    </div>`},{dur:5200,html:`<div class="sc sc-day">
      <p class="kicker fade-up">방 안을 둘러보니…</p>
      <div class="badges">
        <div class="badge pop d1">🧴<b>빈 페트병 두 개</b><small>반으로 자르면 화분</small></div>
        <div class="badge pop d2">🟫<b>마당 흙 한 포대</b><small>할머니가 퍼 두신 흙</small></div>
        <div class="badge pop d3">☀️<b>해 잘 드는 창가</b><small>양파는 햇빛을 좋아한다</small></div>
      </div>
      <h2 class="fade-up delay-4">작게라도… 양파를 키워 볼까?</h2>
    </div>`},{dur:4800,html:`<div class="sc sc-day">
      ${Wo}
      <h1 class="big-title slam">양파라도 키워서 갚자.</h1>
    </div>`},{dur:5600,html:`<div class="sc sc-warm">
      <p class="kicker fade-up">좋은 양파를 알아보는 사람들</p>
      <div class="buyers">
        <div class="buyer slide d1"><span>👨‍🍳</span><b>읍내 식당 주방장</b><small>B등급 이상만, 대신 비싸게</small></div>
        <div class="buyer slide d2"><span>🔬</span><b>농업 연구소</b><small>양파를 기증하면 기술 연구</small></div>
        <div class="buyer slide d3"><span>🚚</span><b>도매상</b><small>등급 상관없이 다 사감</small></div>
      </div>
      <h2 class="fade-up delay-4">좋은 양파만 키우면, 길은 있다.</h2>
    </div>`}];function lM(s,t,e){const n=performance.now(),i=r=>{const o=Math.min(1,(r-n)/e);s.textContent=Yt(t*(1-Math.pow(1-o,3))),o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)}function cM({canContinue:s,onNew:t,onContinue:e}){var i;const n=Go();n.className="show title-mode",n.innerHTML=`<div class="sc sc-title">
    ${Wo}
    <h1 class="logo slam">양파로 빚 갚기</h1>
    <p class="sub fade-up delay-2">ONION DEBT SIMULATOR</p>
    <div class="title-buttons fade-up delay-3">
      <button class="btn primary" data-act="new">새 게임</button>
      ${s?'<button class="btn" data-act="continue">이어하기</button>':""}
    </div>
  </div>`,n.querySelector('[data-act="new"]').onclick=r=>{r.stopPropagation(),!(s&&!confirm("저장된 게임이 사라집니다. 새로 시작할까요?"))&&t()},(i=n.querySelector('[data-act="continue"]'))==null||i.addEventListener("click",()=>{uu(),e()})}function hM(s){const t=Go();t.className="show";let e=-1,n=null,i=!1;const r=document.createElement("button");r.className="skip",r.textContent="건너뛰기 ⏭";const o=()=>{i||(i=!0,clearTimeout(n),t.onclick=null,l())},a=()=>{var d;if(clearTimeout(n),e++,e>=Ha.length)return o();const c=Ha[e];t.innerHTML=c.html,t.appendChild(r),t.insertAdjacentHTML("beforeend",`<div class="progress">${Ha.map((p,g)=>`<i class="${g<=e?"on":""}"></i>`).join("")}</div>`);const h=t.querySelector(".sc"),u=h.querySelector(".count");u&&setTimeout(()=>lM(u,+u.dataset.to,1600),900),(d=c.onMount)==null||d.call(c,h),n=setTimeout(a,c.dur)},l=()=>{t.className="show title-mode",t.innerHTML=`<div class="sc sc-title">
      ${Wo}
      <h1 class="logo slam">빚 ${Math.round(rt.startDebt/1e4)}만원</h1>
      <p class="sub fade-up delay-1">월세는 꼬박꼬박. ${rt.evictAfter}번 밀리면 쫓겨난다</p>
      <div class="title-buttons fade-up delay-2"><button class="btn primary" data-act="go">시작하기</button></div>
    </div>`,t.querySelector('[data-act="go"]').onclick=c=>{c.stopPropagation(),uu(),s()}};r.onclick=c=>{c.stopPropagation(),o()},t.onclick=()=>{i||a()},a()}function dM(s,t,e){const n=Go();n.className="show";const i=s==="clear";n.innerHTML=`<div class="sc ${i?"sc-warm":"sc-dark"}">
    ${i?Wo:""}
    <p class="kicker fade-up">${i?`${t.day}일째 되던 날`:`${t.month-1}월 고지서를 끝내 못 낸 날`}</p>
    <h1 class="big-title slam">${i?"빚 완납!":"퇴거"}</h1>
    <div class="stamp end-stamp ${i?"green":""}">${i?"완 납":"퇴 거"}</div>
    <h2 class="fade-up delay-2">${i?"양파 덕분에 다시 시작할 수 있게 됐다.":"창가의 양파는 남았지만, 집은 남지 않았다…"}</h2>
    <div class="end-stats fade-up delay-3">
      <div><small>수확한 양파</small><b>${t.stats.harvested}개</b></div>
      <div><small>판매 수익</small><b>${Yt(t.stats.earned)}</b></div>
      <div><small>최고 등급</small><b>${t.stats.best??"-"}</b></div>
      <div><small>S등급</small><b>${t.stats.sCount}개</b></div>
      <div><small>낸 월세</small><b>${Yt(t.stats.rentPaid??0)}</b></div>
      ${i?"":`<div><small>남은 빚</small><b>${Yt(t.debt)}</b></div>`}
    </div>
    <div class="title-buttons fade-up delay-4"><button class="btn primary" data-act="restart">${i?"새 게임":"다시 도전"}</button></div>
  </div>`,i&&uM(n),n.querySelector('[data-act="restart"]').onclick=e}function uM(s){for(let t=0;t<40;t++){const e=document.createElement("span");e.className="confetti",e.textContent=["🧅","✨","💰","🌱"][t%4],e.style.left=`${Math.random()*100}%`,e.style.animationDelay=`${Math.random()*2}s`,e.style.animationDuration=`${2.5+Math.random()*2}s`,s.appendChild(e)}}function uu(){const s=Go();s.className="",s.innerHTML="",s.onclick=null}const fu={},uc=new nM(document.getElementById("scene"),fu),So=oM(uc,fu,{onEnding:fM});function hd(s){uc.refresh(),So.show(),s?setTimeout(()=>So.openModal("help"),300):So.toast(`${A.day}일차에서 이어서 시작해요`)}function fM(s){xy(),dM(s,A,()=>location.reload())}matchMedia("(pointer: coarse)").matches&&addEventListener("pointerdown",()=>{const s=document.documentElement;document.fullscreenElement||!s.requestFullscreen||s.requestFullscreen({navigationUI:"hide"}).then(()=>{var t,e;return(e=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:e.call(t,"landscape")}).catch(()=>{})},{once:!0});So.hide();uc.setEnabled(!1);cM({canContinue:gy(),onNew:()=>hM(()=>{su(),Tn(),hd(!0)}),onContinue:()=>{vy(),hd(!1)}});
