"use strict";(this.myApptooncoinweb=this.myApptooncoinweb||[]).push([[28],{6553:(e,a,t)=>{t.d(a,{normalize:()=>s});var r=t(912);function s(e){return(0,r.Q6)(e)}},4571:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>w});var r=t(3218),s=t(1159),n=t(9146),o=t(4745);class c extends n.G{constructor({callbackSelector:e,cause:a,data:t,extraData:r,sender:s,urls:n}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map((e=>`    ${(0,o.Gr)(e)}`))],`  Sender: ${s}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class d extends n.G{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(a)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends n.G{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(6929),i=t(4796),f=t(632),p=t(230),h=t(3408),b=t(7644),m=t(9450);const w="0x556f1830",y={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,{blockNumber:a,blockTag:t,data:n,to:o}){const{args:w}=(0,i.p)({data:n,abi:[y]}),[g,k,O,x,G]=w;try{if(!function(e,a){if(!(0,h.U)(e))throw new p.b({address:e});if(!(0,h.U)(a))throw new p.b({address:a});return e.toLowerCase()===a.toLowerCase()}(o,g))throw new l({sender:g,to:o});const n=await async function({data:e,sender:a,urls:t}){let r=new Error("An unknown error occurred.");for(let n=0;n<t.length;n++){const o=t[n],c=o.includes("{sender}")||o.includes("{data}")?"GET":"POST",l="POST"===c?{data:e,sender:a}:void 0;try{const t=await fetch(o.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(l),method:c});let n;if(n=t.headers.get("Content-Type")?.startsWith("application/json")?(await t.json()).data:await t.text(),!t.ok){r=new u.Gg({body:l,details:(0,s.P)(n.error)||t.statusText,headers:t.headers,status:t.status,url:o});continue}if(!(0,m.v)(n)){r=new d({result:n,url:o});continue}return n}catch(e){r=new u.Gg({body:l,details:e.message,url:o})}}throw r}({data:O,sender:g,urls:k}),{data:c}=await(0,r.R)(e,{blockNumber:a,blockTag:t,data:(0,b.zo)([x,(0,f.E)([{type:"bytes"},{type:"bytes"}],[n,G])]),to:o});return c}catch(e){throw new c({callbackSelector:x,cause:e,data:n,extraData:G,sender:g,urls:k})}}}}]);
//# sourceMappingURL=viem.92d3b5f9.js.map