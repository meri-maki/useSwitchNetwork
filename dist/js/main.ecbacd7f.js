/*! For license information please see main.ecbacd7f.js.LICENSE.txt */
!function(){var e,t,n={8099:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7117);function i(e,t,n){return void 0===t&&(t=new Uint8Array(2)),void 0===n&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}function o(e,t,n){return void 0===t&&(t=new Uint8Array(2)),void 0===n&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function c(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function l(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}function d(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}function h(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),u(e/4294967296>>>0,t,n),u(e>>>0,t,n+4),t}function f(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),d(e>>>0,t,n),d(e/4294967296>>>0,t,n+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=c,t.readUint32LE=l,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var n=a(e,t),r=a(e,t+4);return 4294967296*n+r-4294967296*(r>>31)},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var n=c(e,t);return 4294967296*c(e,t+4)+n-4294967296*(n>>31)},t.readUint64LE=function(e,t){void 0===t&&(t=0);var n=l(e,t);return 4294967296*l(e,t+4)+n},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,n){if(void 0===n&&(n=0),e%8!=0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r},t.readUintLE=function(e,t,n){if(void 0===n&&(n=0),e%8!=0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r},t.writeUintBE=function(e,t,n,i){if(void 0===n&&(n=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!r.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var o=1,a=e/8+i-1;a>=i;a--)n[a]=t/o&255,o*=256;return n},t.writeUintLE=function(e,t,n,i){if(void 0===n&&(n=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!r.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var o=1,a=i;a<i+e/8;a++)n[a]=t/o&255,o*=256;return n},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(n,e),t},t.writeFloat32LE=function(e,t,n){return void 0===t&&(t=new Uint8Array(4)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(n,e,!0),t},t.writeFloat64BE=function(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(n,e),t},t.writeFloat64LE=function(e,t,n){return void 0===t&&(t=new Uint8Array(8)),void 0===n&&(n=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(n,e,!0),t}},5439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8099),i=n(7309),o=20;function a(e,t,n){for(var i=1634760805,a=857760878,s=2036477234,c=1797285236,l=n[3]<<24|n[2]<<16|n[1]<<8|n[0],u=n[7]<<24|n[6]<<16|n[5]<<8|n[4],d=n[11]<<24|n[10]<<16|n[9]<<8|n[8],h=n[15]<<24|n[14]<<16|n[13]<<8|n[12],f=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],g=n[27]<<24|n[26]<<16|n[25]<<8|n[24],m=n[31]<<24|n[30]<<16|n[29]<<8|n[28],b=t[3]<<24|t[2]<<16|t[1]<<8|t[0],w=t[7]<<24|t[6]<<16|t[5]<<8|t[4],y=t[11]<<24|t[10]<<16|t[9]<<8|t[8],v=t[15]<<24|t[14]<<16|t[13]<<8|t[12],x=i,C=a,k=s,E=c,S=l,P=u,_=d,A=h,$=f,O=p,I=g,N=m,T=b,R=w,M=y,j=v,U=0;U<o;U+=2)S=(S^=$=$+(T=(T^=x=x+S|0)>>>16|T<<16)|0)>>>20|S<<12,P=(P^=O=O+(R=(R^=C=C+P|0)>>>16|R<<16)|0)>>>20|P<<12,_=(_^=I=I+(M=(M^=k=k+_|0)>>>16|M<<16)|0)>>>20|_<<12,A=(A^=N=N+(j=(j^=E=E+A|0)>>>16|j<<16)|0)>>>20|A<<12,_=(_^=I=I+(M=(M^=k=k+_|0)>>>24|M<<8)|0)>>>25|_<<7,A=(A^=N=N+(j=(j^=E=E+A|0)>>>24|j<<8)|0)>>>25|A<<7,P=(P^=O=O+(R=(R^=C=C+P|0)>>>24|R<<8)|0)>>>25|P<<7,S=(S^=$=$+(T=(T^=x=x+S|0)>>>24|T<<8)|0)>>>25|S<<7,P=(P^=I=I+(j=(j^=x=x+P|0)>>>16|j<<16)|0)>>>20|P<<12,_=(_^=N=N+(T=(T^=C=C+_|0)>>>16|T<<16)|0)>>>20|_<<12,A=(A^=$=$+(R=(R^=k=k+A|0)>>>16|R<<16)|0)>>>20|A<<12,S=(S^=O=O+(M=(M^=E=E+S|0)>>>16|M<<16)|0)>>>20|S<<12,A=(A^=$=$+(R=(R^=k=k+A|0)>>>24|R<<8)|0)>>>25|A<<7,S=(S^=O=O+(M=(M^=E=E+S|0)>>>24|M<<8)|0)>>>25|S<<7,_=(_^=N=N+(T=(T^=C=C+_|0)>>>24|T<<8)|0)>>>25|_<<7,P=(P^=I=I+(j=(j^=x=x+P|0)>>>24|j<<8)|0)>>>25|P<<7;r.writeUint32LE(x+i|0,e,0),r.writeUint32LE(C+a|0,e,4),r.writeUint32LE(k+s|0,e,8),r.writeUint32LE(E+c|0,e,12),r.writeUint32LE(S+l|0,e,16),r.writeUint32LE(P+u|0,e,20),r.writeUint32LE(_+d|0,e,24),r.writeUint32LE(A+h|0,e,28),r.writeUint32LE($+f|0,e,32),r.writeUint32LE(O+p|0,e,36),r.writeUint32LE(I+g|0,e,40),r.writeUint32LE(N+m|0,e,44),r.writeUint32LE(T+b|0,e,48),r.writeUint32LE(R+w|0,e,52),r.writeUint32LE(M+y|0,e,56),r.writeUint32LE(j+v|0,e,60)}function s(e,t,n,r,o){if(void 0===o&&(o=0),32!==e.length)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var s,l;if(0===o){if(8!==t.length&&12!==t.length)throw new Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw new Error("ChaCha nonce with counter must be 16 bytes");s=t,l=o}for(var u=new Uint8Array(64),d=0;d<n.length;d+=64){a(u,s,e);for(var h=d;h<d+64&&h<n.length;h++)r[h]=n[h]^u[h-d];c(s,0,l)}return i.wipe(u),0===o&&i.wipe(s),r}function c(e,t,n){for(var r=1;n--;)r=r+(255&e[t])|0,e[t]=255&r,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}t.streamXOR=s,t.stream=function(e,t,n,r){return void 0===r&&(r=0),i.wipe(n),s(e,t,n,n,r)}},5501:function(e,t,n){"use strict";var r=n(5439),i=n(3027),o=n(7309),a=n(8099),s=n(4153);t.Cv=32,t.WH=12,t.pg=16;var c=new Uint8Array(16),l=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,n,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var a=new Uint8Array(16);a.set(e,a.length-e.length);var s=new Uint8Array(32);r.stream(this._key,a,s,4);var c,l=t.length+this.tagLength;if(i){if(i.length!==l)throw new Error("ChaCha20Poly1305: incorrect destination length");c=i}else c=new Uint8Array(l);return r.streamXOR(this._key,a,t,c,4),this._authenticate(c.subarray(c.length-this.tagLength,c.length),s,c.subarray(0,c.length-this.tagLength),n),o.wipe(a),c},e.prototype.open=function(e,t,n,i){if(e.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a=new Uint8Array(16);a.set(e,a.length-e.length);var c=new Uint8Array(32);r.stream(this._key,a,c,4);var l=new Uint8Array(this.tagLength);if(this._authenticate(l,c,t.subarray(0,t.length-this.tagLength),n),!s.equal(l,t.subarray(t.length-this.tagLength,t.length)))return null;var u,d=t.length-this.tagLength;if(i){if(i.length!==d)throw new Error("ChaCha20Poly1305: incorrect destination length");u=i}else u=new Uint8Array(d);return r.streamXOR(this._key,a,t.subarray(0,t.length-this.tagLength),u,4),o.wipe(a),u},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,n,r){var s=new i.Poly1305(t);r&&(s.update(r),r.length%16>0&&s.update(c.subarray(r.length%16))),s.update(n),n.length%16>0&&s.update(c.subarray(n.length%16));var l=new Uint8Array(8);r&&a.writeUint64LE(r.length,l),s.update(l),a.writeUint64LE(n.length,l),s.update(l);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),o.wipe(u),o.wipe(l)},e}();t.OK=l},4153:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,n){return~(e-1)&t|e-1&n},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=n,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==n(e,t)}},9984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,n){"use strict";var r=n(5629),i=n(7309),o=function(){function e(e,t,n,i){void 0===n&&(n=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=r.hmac(this._hash,n,t);this._hmac=new r.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),n=0;n<t.length;n++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[n]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.t=o},5629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9984),i=n(4153),o=n(7309),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var n=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(n).clean():n.set(t);for(var i=0;i<n.length;i++)n[i]^=54;for(this._inner.update(n),i=0;i<n.length;i++)n[i]^=106;this._outer.update(n),r.isSerializableHash(this._inner)&&r.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(n)}return e.prototype.reset=function(){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){r.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),r.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!r.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!r.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,n){var r=new a(e,t);r.update(n);var i=r.digest();return r.clean(),i},t.equal=i.equal},7117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var n=65535&e,r=65535&t;return n*r+((e>>>16&65535)*r+n*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},3027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4153),i=n(7309);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var n=e[0]|e[1]<<8;this._r[0]=8191&n;var r=e[2]|e[3]<<8;this._r[1]=8191&(n>>>13|r<<3);var i=e[4]|e[5]<<8;this._r[2]=7939&(r>>>10|i<<6);var o=e[6]|e[7]<<8;this._r[3]=8191&(i>>>7|o<<9);var a=e[8]|e[9]<<8;this._r[4]=255&(o>>>4|a<<12),this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=8191&(a>>>14|s<<2);var c=e[12]|e[13]<<8;this._r[7]=8065&(s>>>11|c<<5);var l=e[14]|e[15]<<8;this._r[8]=8191&(c>>>8|l<<8),this._r[9]=l>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,n){for(var r=this._fin?0:2048,i=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],c=this._h[4],l=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],m=this._r[2],b=this._r[3],w=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],k=this._r[9];n>=16;){var E=e[t+0]|e[t+1]<<8;i+=8191&E;var S=e[t+2]|e[t+3]<<8;o+=8191&(E>>>13|S<<3);var P=e[t+4]|e[t+5]<<8;a+=8191&(S>>>10|P<<6);var _=e[t+6]|e[t+7]<<8;s+=8191&(P>>>7|_<<9);var A=e[t+8]|e[t+9]<<8;c+=8191&(_>>>4|A<<12),l+=A>>>1&8191;var $=e[t+10]|e[t+11]<<8;u+=8191&(A>>>14|$<<2);var O=e[t+12]|e[t+13]<<8;d+=8191&($>>>11|O<<5);var I=e[t+14]|e[t+15]<<8,N=0,T=N;T+=i*p,T+=o*(5*k),T+=a*(5*C),T+=s*(5*x),N=(T+=c*(5*v))>>>13,T&=8191,T+=l*(5*y),T+=u*(5*w),T+=d*(5*b),T+=(h+=8191&(O>>>8|I<<8))*(5*m);var R=N+=(T+=(f+=I>>>5|r)*(5*g))>>>13;R+=i*g,R+=o*p,R+=a*(5*k),R+=s*(5*C),N=(R+=c*(5*x))>>>13,R&=8191,R+=l*(5*v),R+=u*(5*y),R+=d*(5*w),R+=h*(5*b),N+=(R+=f*(5*m))>>>13,R&=8191;var M=N;M+=i*m,M+=o*g,M+=a*p,M+=s*(5*k),N=(M+=c*(5*C))>>>13,M&=8191,M+=l*(5*x),M+=u*(5*v),M+=d*(5*y),M+=h*(5*w);var j=N+=(M+=f*(5*b))>>>13;j+=i*b,j+=o*m,j+=a*g,j+=s*p,N=(j+=c*(5*k))>>>13,j&=8191,j+=l*(5*C),j+=u*(5*x),j+=d*(5*v),j+=h*(5*y);var U=N+=(j+=f*(5*w))>>>13;U+=i*w,U+=o*b,U+=a*m,U+=s*g,N=(U+=c*p)>>>13,U&=8191,U+=l*(5*k),U+=u*(5*C),U+=d*(5*x),U+=h*(5*v);var L=N+=(U+=f*(5*y))>>>13;L+=i*y,L+=o*w,L+=a*b,L+=s*m,N=(L+=c*g)>>>13,L&=8191,L+=l*p,L+=u*(5*k),L+=d*(5*C),L+=h*(5*x);var B=N+=(L+=f*(5*v))>>>13;B+=i*v,B+=o*y,B+=a*w,B+=s*b,N=(B+=c*m)>>>13,B&=8191,B+=l*g,B+=u*p,B+=d*(5*k),B+=h*(5*C);var z=N+=(B+=f*(5*x))>>>13;z+=i*x,z+=o*v,z+=a*y,z+=s*w,N=(z+=c*b)>>>13,z&=8191,z+=l*m,z+=u*g,z+=d*p,z+=h*(5*k);var D=N+=(z+=f*(5*C))>>>13;D+=i*C,D+=o*x,D+=a*v,D+=s*y,N=(D+=c*w)>>>13,D&=8191,D+=l*b,D+=u*m,D+=d*g,D+=h*p;var F=N+=(D+=f*(5*k))>>>13;F+=i*k,F+=o*C,F+=a*x,F+=s*v,N=(F+=c*y)>>>13,F&=8191,F+=l*w,F+=u*b,F+=d*m,F+=h*g,i=T=8191&(N=(N=((N+=(F+=f*p)>>>13)<<2)+N|0)+(T&=8191)|0),o=R+=N>>>=13,a=M&=8191,s=j&=8191,c=U&=8191,l=L&=8191,u=B&=8191,d=z&=8191,h=D&=8191,f=F&=8191,t+=16,n-=16}this._h[0]=i,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=c,this._h[5]=l,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var n,r,i,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(n=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=n,n=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*n,n=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=n,n=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=n,a[0]=this._h[0]+5,n=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+n,n=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,r=(1^n)-1,o=0;o<10;o++)a[o]&=r;for(r=~r,o=0;o<10;o++)this._h[o]=this._h[o]&r|a[o];for(this._h[0]=65535&(this._h[0]|this._h[1]<<13),this._h[1]=65535&(this._h[1]>>>3|this._h[2]<<10),this._h[2]=65535&(this._h[2]>>>6|this._h[3]<<7),this._h[3]=65535&(this._h[3]>>>9|this._h[4]<<4),this._h[4]=65535&(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14),this._h[5]=65535&(this._h[6]>>>2|this._h[7]<<11),this._h[6]=65535&(this._h[7]>>>5|this._h[8]<<8),this._h[7]=65535&(this._h[8]>>>8|this._h[9]<<5),i=this._h[0]+this._pad[0],this._h[0]=65535&i,o=1;o<8;o++)i=(this._h[o]+this._pad[o]|0)+(i>>>16)|0,this._h[o]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,n=0,r=e.length;if(this._leftover){(t=16-this._leftover)>r&&(t=r);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[n+i];if(r-=t,n+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(r>=16&&(t=r-r%16,this._blocks(e,n,t),n+=t,r-=t),r){for(i=0;i<r;i++)this._buffer[this._leftover+i]=e[n+i];this._leftover+=r}return this},e.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var n=new o(e);n.update(t);var r=n.digest();return n.clean(),r},t.equal=function(e,n){return e.length===t.DIGEST_LENGTH&&n.length===t.DIGEST_LENGTH&&r.equal(e,n)}},1416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const r=n(6008),i=n(8099),o=n(7309);function a(e,n=t.defaultRandomSource){return n.randomBytes(e)}t.defaultRandomSource=new r.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){const n=a(4,e),r=(0,i.readUint32LE)(n);return(0,o.wipe)(n),r};const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function c(e,n=s,r=t.defaultRandomSource){if(n.length<2)throw new Error("randomString charset is too short");if(n.length>256)throw new Error("randomString charset is too long");let i="";const c=n.length,l=256-256%c;for(;e>0;){const t=a(Math.ceil(256*e/l),r);for(let r=0;r<t.length&&e>0;r++){const o=t[r];o<l&&(i+=n.charAt(o%c),e--)}(0,o.wipe)(t)}return i}t.randomString=c,t.randomStringForEntropy=function(e,n=s,r=t.defaultRandomSource){return c(Math.ceil(e/(Math.log(n.length)/Math.LN2)),n,r)}},5455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},8871:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;const r=n(7309);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{const e=n(5883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const n=new Uint8Array(e);for(let e=0;e<n.length;e++)n[e]=t[e];return(0,r.wipe)(t),n}}},6008:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;const r=n(5455),i=n(8871);t.SystemRandomSource=class{constructor(){return this.isAvailable=!1,this.name="",this._source=new r.BrowserRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Browser")):(this._source=new i.NodeRandomSource,this._source.isAvailable?(this.isAvailable=!0,void(this.name="Node")):void 0)}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},3294:function(e,t,n){"use strict";var r=n(8099),i=n(7309);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var n=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[n++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(n=s(this._temp,this._state,e,n,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[n++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,n=this._bufferLength,i=t/536870912|0,o=t<<3,a=t%64<56?64:128;this._buffer[n]=128;for(var c=n+1;c<a-8;c++)this._buffer[c]=0;r.writeUint32BE(i,this._buffer,a-8),r.writeUint32BE(o,this._buffer,a-4),s(this._temp,this._state,this._buffer,0,a),this._finished=!0}for(c=0;c<this.digestLength/4;c++)r.writeUint32BE(this._state[c],e,4*c);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,n,i,o){for(;o>=64;){for(var s=t[0],c=t[1],l=t[2],u=t[3],d=t[4],h=t[5],f=t[6],p=t[7],g=0;g<16;g++){var m=i+4*g;e[g]=r.readUint32BE(n,m)}for(g=16;g<64;g++){var b=e[g-2],w=(b>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,y=((b=e[g-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3;e[g]=(w+e[g-7]|0)+(y+e[g-16]|0)}for(g=0;g<64;g++)w=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&f)|0)+(p+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&c^s&l^c&l)|0,p=f,f=h,h=d,d=u+w|0,u=l,l=c,c=s,s=w+y|0;t[0]+=s,t[1]+=c,t[2]+=l,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=f,t[7]+=p,i+=64,o-=64}return i}t.vp=function(e){var t=new o;t.update(e);var n=t.digest();return t.clean(),n}},7309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},7664:function(e,t,n){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;const r=n(1416),i=n(7309);function o(e){const t=new Float64Array(16);if(e)for(let n=0;n<e.length;n++)t[n]=e[n];return t}t.kz=32,t.KS=32;const a=new Uint8Array(32);a[0]=9;const s=o([56129,1]);function c(e){let t=1;for(let n=0;n<16;n++){let r=e[n]+t+65535;t=Math.floor(r/65536),e[n]=r-65536*t}e[0]+=t-1+37*(t-1)}function l(e,t,n){const r=~(n-1);for(let n=0;n<16;n++){const i=r&(e[n]^t[n]);e[n]^=i,t[n]^=i}}function u(e,t,n){for(let r=0;r<16;r++)e[r]=t[r]+n[r]}function d(e,t,n){for(let r=0;r<16;r++)e[r]=t[r]-n[r]}function h(e,t,n){let r,i,o=0,a=0,s=0,c=0,l=0,u=0,d=0,h=0,f=0,p=0,g=0,m=0,b=0,w=0,y=0,v=0,x=0,C=0,k=0,E=0,S=0,P=0,_=0,A=0,$=0,O=0,I=0,N=0,T=0,R=0,M=0,j=n[0],U=n[1],L=n[2],B=n[3],z=n[4],D=n[5],F=n[6],W=n[7],H=n[8],q=n[9],G=n[10],V=n[11],K=n[12],Z=n[13],Q=n[14],Y=n[15];r=t[0],o+=r*j,a+=r*U,s+=r*L,c+=r*B,l+=r*z,u+=r*D,d+=r*F,h+=r*W,f+=r*H,p+=r*q,g+=r*G,m+=r*V,b+=r*K,w+=r*Z,y+=r*Q,v+=r*Y,r=t[1],a+=r*j,s+=r*U,c+=r*L,l+=r*B,u+=r*z,d+=r*D,h+=r*F,f+=r*W,p+=r*H,g+=r*q,m+=r*G,b+=r*V,w+=r*K,y+=r*Z,v+=r*Q,x+=r*Y,r=t[2],s+=r*j,c+=r*U,l+=r*L,u+=r*B,d+=r*z,h+=r*D,f+=r*F,p+=r*W,g+=r*H,m+=r*q,b+=r*G,w+=r*V,y+=r*K,v+=r*Z,x+=r*Q,C+=r*Y,r=t[3],c+=r*j,l+=r*U,u+=r*L,d+=r*B,h+=r*z,f+=r*D,p+=r*F,g+=r*W,m+=r*H,b+=r*q,w+=r*G,y+=r*V,v+=r*K,x+=r*Z,C+=r*Q,k+=r*Y,r=t[4],l+=r*j,u+=r*U,d+=r*L,h+=r*B,f+=r*z,p+=r*D,g+=r*F,m+=r*W,b+=r*H,w+=r*q,y+=r*G,v+=r*V,x+=r*K,C+=r*Z,k+=r*Q,E+=r*Y,r=t[5],u+=r*j,d+=r*U,h+=r*L,f+=r*B,p+=r*z,g+=r*D,m+=r*F,b+=r*W,w+=r*H,y+=r*q,v+=r*G,x+=r*V,C+=r*K,k+=r*Z,E+=r*Q,S+=r*Y,r=t[6],d+=r*j,h+=r*U,f+=r*L,p+=r*B,g+=r*z,m+=r*D,b+=r*F,w+=r*W,y+=r*H,v+=r*q,x+=r*G,C+=r*V,k+=r*K,E+=r*Z,S+=r*Q,P+=r*Y,r=t[7],h+=r*j,f+=r*U,p+=r*L,g+=r*B,m+=r*z,b+=r*D,w+=r*F,y+=r*W,v+=r*H,x+=r*q,C+=r*G,k+=r*V,E+=r*K,S+=r*Z,P+=r*Q,_+=r*Y,r=t[8],f+=r*j,p+=r*U,g+=r*L,m+=r*B,b+=r*z,w+=r*D,y+=r*F,v+=r*W,x+=r*H,C+=r*q,k+=r*G,E+=r*V,S+=r*K,P+=r*Z,_+=r*Q,A+=r*Y,r=t[9],p+=r*j,g+=r*U,m+=r*L,b+=r*B,w+=r*z,y+=r*D,v+=r*F,x+=r*W,C+=r*H,k+=r*q,E+=r*G,S+=r*V,P+=r*K,_+=r*Z,A+=r*Q,$+=r*Y,r=t[10],g+=r*j,m+=r*U,b+=r*L,w+=r*B,y+=r*z,v+=r*D,x+=r*F,C+=r*W,k+=r*H,E+=r*q,S+=r*G,P+=r*V,_+=r*K,A+=r*Z,$+=r*Q,O+=r*Y,r=t[11],m+=r*j,b+=r*U,w+=r*L,y+=r*B,v+=r*z,x+=r*D,C+=r*F,k+=r*W,E+=r*H,S+=r*q,P+=r*G,_+=r*V,A+=r*K,$+=r*Z,O+=r*Q,I+=r*Y,r=t[12],b+=r*j,w+=r*U,y+=r*L,v+=r*B,x+=r*z,C+=r*D,k+=r*F,E+=r*W,S+=r*H,P+=r*q,_+=r*G,A+=r*V,$+=r*K,O+=r*Z,I+=r*Q,N+=r*Y,r=t[13],w+=r*j,y+=r*U,v+=r*L,x+=r*B,C+=r*z,k+=r*D,E+=r*F,S+=r*W,P+=r*H,_+=r*q,A+=r*G,$+=r*V,O+=r*K,I+=r*Z,N+=r*Q,T+=r*Y,r=t[14],y+=r*j,v+=r*U,x+=r*L,C+=r*B,k+=r*z,E+=r*D,S+=r*F,P+=r*W,_+=r*H,A+=r*q,$+=r*G,O+=r*V,I+=r*K,N+=r*Z,T+=r*Q,R+=r*Y,r=t[15],v+=r*j,x+=r*U,C+=r*L,k+=r*B,E+=r*z,S+=r*D,P+=r*F,_+=r*W,A+=r*H,$+=r*q,O+=r*G,I+=r*V,N+=r*K,T+=r*Z,R+=r*Q,M+=r*Y,o+=38*x,a+=38*C,s+=38*k,c+=38*E,l+=38*S,u+=38*P,d+=38*_,h+=38*A,f+=38*$,p+=38*O,g+=38*I,m+=38*N,b+=38*T,w+=38*R,y+=38*M,i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,o+=i-1+37*(i-1),i=1,r=o+i+65535,i=Math.floor(r/65536),o=r-65536*i,r=a+i+65535,i=Math.floor(r/65536),a=r-65536*i,r=s+i+65535,i=Math.floor(r/65536),s=r-65536*i,r=c+i+65535,i=Math.floor(r/65536),c=r-65536*i,r=l+i+65535,i=Math.floor(r/65536),l=r-65536*i,r=u+i+65535,i=Math.floor(r/65536),u=r-65536*i,r=d+i+65535,i=Math.floor(r/65536),d=r-65536*i,r=h+i+65535,i=Math.floor(r/65536),h=r-65536*i,r=f+i+65535,i=Math.floor(r/65536),f=r-65536*i,r=p+i+65535,i=Math.floor(r/65536),p=r-65536*i,r=g+i+65535,i=Math.floor(r/65536),g=r-65536*i,r=m+i+65535,i=Math.floor(r/65536),m=r-65536*i,r=b+i+65535,i=Math.floor(r/65536),b=r-65536*i,r=w+i+65535,i=Math.floor(r/65536),w=r-65536*i,r=y+i+65535,i=Math.floor(r/65536),y=r-65536*i,r=v+i+65535,i=Math.floor(r/65536),v=r-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=a,e[2]=s,e[3]=c,e[4]=l,e[5]=u,e[6]=d,e[7]=h,e[8]=f,e[9]=p,e[10]=g,e[11]=m,e[12]=b,e[13]=w,e[14]=y,e[15]=v}function f(e,t){h(e,t,t)}function p(e,t){const n=new Uint8Array(32),r=new Float64Array(80),i=o(),a=o(),p=o(),g=o(),m=o(),b=o();for(let t=0;t<31;t++)n[t]=e[t];n[31]=127&e[31]|64,n[0]&=248,function(e,t){for(let n=0;n<16;n++)e[n]=t[2*n]+(t[2*n+1]<<8);e[15]&=32767}(r,t);for(let e=0;e<16;e++)a[e]=r[e];i[0]=g[0]=1;for(let e=254;e>=0;--e){const t=n[e>>>3]>>>(7&e)&1;l(i,a,t),l(p,g,t),u(m,i,p),d(i,i,p),u(p,a,g),d(a,a,g),f(g,m),f(b,i),h(i,p,i),h(p,a,m),u(m,i,p),d(i,i,p),f(a,i),d(p,g,b),h(i,p,s),u(i,i,g),h(p,p,i),h(i,g,b),h(g,a,r),f(a,m),l(i,a,t),l(p,g,t)}for(let e=0;e<16;e++)r[e+16]=i[e],r[e+32]=p[e],r[e+48]=a[e],r[e+64]=g[e];const w=r.subarray(32),y=r.subarray(16);!function(e,t){const n=o();for(let e=0;e<16;e++)n[e]=t[e];for(let e=253;e>=0;e--)f(n,n),2!==e&&4!==e&&h(n,n,t);for(let t=0;t<16;t++)e[t]=n[t]}(w,w),h(y,y,w);const v=new Uint8Array(32);return function(e,t){const n=o(),r=o();for(let e=0;e<16;e++)r[e]=t[e];c(r),c(r),c(r);for(let e=0;e<2;e++){n[0]=r[0]-65517;for(let e=1;e<15;e++)n[e]=r[e]-65535-(n[e-1]>>16&1),n[e-1]&=65535;n[15]=r[15]-32767-(n[14]>>16&1);const e=n[15]>>16&1;n[14]&=65535,l(r,n,1-e)}for(let t=0;t<16;t++)e[2*t]=255&r[t],e[2*t+1]=r[t]>>8}(v,y),v}t.Au=function(e){const n=(0,r.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw new Error(`x25519: seed must be ${t.KS} bytes`);const n=new Uint8Array(e);return{publicKey:(r=n,p(r,a)),secretKey:n};var r}(n);return(0,i.wipe)(n),o},t.gi=function(e,n,r=!1){if(e.length!==t.kz)throw new Error("X25519: incorrect secret key length");if(n.length!==t.kz)throw new Error("X25519: incorrect public key length");const i=p(e,n);if(r){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw new Error("X25519: invalid shared key")}return i}},1882:function(){},6900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1230);r.__exportStar(n(6869),t),r.__exportStar(n(8033),t)},6869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},8033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},6736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1230);r.__exportStar(n(4273),t),r.__exportStar(n(7001),t),r.__exportStar(n(2939),t),r.__exportStar(n(6900),t)},2939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(1230).__exportStar(n(8766),t)},8766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},3207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;const r=n(6900);t.toMiliseconds=function(e){return e*r.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/r.ONE_THOUSAND)}},3873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))}},4273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1230);r.__exportStar(n(3873),t),r.__exportStar(n(3207),t)},7001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class n{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw new Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){const t=this.get(e);if(void 0!==t.elapsed)throw new Error(`Watch already stopped for label: ${e}`);const n=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:n})}get(e){const t=this.timestamps.get(e);if(void 0===t)throw new Error(`No timestamp found for label: ${e}`);return t}elapsed(e){const t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=n,t.default=n},9795:function(e,t,n){"use strict";n.d(t,{AW:function(){return N},O6:function(){return Lt},rV:function(){return j},gn:function(){return Ee},H1:function(){return we},hF:function(){return ye},WG:function(){return G},pe:function(){return K},m$:function(){return W},vB:function(){return Z},HI:function(){return V},E0:function(){return Pe},Gq:function(){return Ce},$0:function(){return pe},Z4:function(){return xe},Bv:function(){return De},Au:function(){return D},jd:function(){return F},gu:function(){return $},D:function(){return he},Z7:function(){return it},cO:function(){return Ie},_H:function(){return Oe},fc:function(){return Xe},D6:function(){return ot},Hh:function(){return Ae},Ym:function(){return H},rj:function(){return q},jU:function(){return ue},gp:function(){return Je},rF:function(){return Nt},Bw:function(){return Se},UG:function(){return ce},Gg:function(){return Mt},xW:function(){return pt},b$:function(){return le},Ih:function(){return dt},h1:function(){return gt},Q8:function(){return X},o8:function(){return ct},qt:function(){return at},Dd:function(){return mt},$t:function(){return St},nf:function(){return At},Q0:function(){return kt},in:function(){return vt},p8:function(){return $t},sI:function(){return It},al:function(){return Ot},L5:function(){return st},EJ:function(){return Et},Z2:function(){return xt},PM:function(){return Ct},hH:function(){return Pt},ON:function(){return Rt},n:function(){return yt},JT:function(){return _t},M_:function(){return lt},jv:function(){return ft},KC:function(){return me},eG:function(){return _e},fK:function(){return tt},IP:function(){return be},DQ:function(){return A},iP:function(){return ke},M:function(){return et},he:function(){return Be},uw:function(){return jt},Ll:function(){return Q},EN:function(){return Y}});var r=n(5501),i=n(512),o=n(1416),a=n(3294),s=n(7664),c=n(2199),l=n(4155),u=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},d=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=l.platform},f=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},g=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},m=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,b=3,w=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],y=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function v(e){var t=function(e){return""!==e&&w.reduce((function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]}),!1)}(e);if(!t)return null;var n=t[0],r=t[1];if("searchbot"===n)return new p;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<b&&(i=u(u([],i,!0),function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(b-i.length),!0)):i=[];var o=i.join("."),a=function(e){for(var t=0,n=y.length;t<n;t++){var r=y[t],i=r[0];if(r[1].exec(e))return i}return null}(e),s=m.exec(e);return s&&s[1]?new f(n,o,a,s[1]):new d(n,o,a)}var x=n(6736),C=n(2873),k=n(5755),E=n(6151);n(1882);const S={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var P=n(4155);const _=":";function A(e){const[t,n]=e.split(_);return{namespace:t,reference:n}}function $(e,t=[]){const n=[];return Object.keys(e).forEach((r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)})),n}function O(e,t){return e.includes(":")?[e]:t.chains||[]}const I="base10",N="base16",T="base64pad",R="utf8",M=0,j=1,U=0,L=1,B=12,z=32;function D(){const e=s.Au();return{privateKey:(0,c.BB)(e.secretKey,N),publicKey:(0,c.BB)(e.publicKey,N)}}function F(){const e=(0,o.randomBytes)(z);return(0,c.BB)(e,N)}function W(e,t){const n=s.gi((0,c.mL)(e,N),(0,c.mL)(t,N),!0),r=new i.t(a.mE,n).expand(z);return(0,c.BB)(r,N)}function H(e){const t=(0,a.vp)((0,c.mL)(e,N));return(0,c.BB)(t,N)}function q(e){const t=(0,a.vp)((0,c.mL)(e,R));return(0,c.BB)(t,N)}function G(e){return Number((0,c.BB)(e,I))}function V(e){const t=function(e){return(0,c.mL)(`${e}`,I)}(typeof e.type<"u"?e.type:M);if(G(t)===j&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?(0,c.mL)(e.senderPublicKey,N):void 0,i=typeof e.iv<"u"?(0,c.mL)(e.iv,N):(0,o.randomBytes)(B);return function(e){if(G(e.type)===j){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return(0,c.BB)((0,c.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),T)}return(0,c.BB)((0,c.zo)([e.type,e.iv,e.sealed]),T)}({type:t,sealed:new r.OK((0,c.mL)(e.symKey,N)).seal(i,(0,c.mL)(e.message,R)),iv:i,senderPublicKey:n})}function K(e){const t=new r.OK((0,c.mL)(e.symKey,N)),{sealed:n,iv:i}=Z(e.encoded),o=t.open(i,n);if(null===o)throw new Error("Failed to decrypt");return(0,c.BB)(o,R)}function Z(e){const t=(0,c.mL)(e,T),n=t.slice(U,L),r=L;if(G(n)===j){const e=r+z,i=e+B,o=t.slice(r,e),a=t.slice(e,i);return{type:n,sealed:t.slice(i),iv:a,senderPublicKey:o}}const i=r+B,o=t.slice(r,i);return{type:n,sealed:t.slice(i),iv:o}}function Q(e,t){const n=Z(e);return Y({type:G(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?(0,c.BB)(n.senderPublicKey,N):void 0,receiverPublicKey:t?.receiverPublicKey})}function Y(e){const t=e?.type||M;if(t===j){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function X(e){return e.type===j&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var J=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,re=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))te.call(t,n)&&re(e,n,t[n]);if(ee)for(var n of ee(t))ne.call(t,n)&&re(e,n,t[n]);return e};const oe="ReactNative",ae={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},se="js";function ce(){return typeof P<"u"&&typeof P.versions<"u"&&typeof P.versions.node<"u"}function le(){return!(0,C.getDocument)()&&!!(0,C.getNavigator)()&&navigator.product===oe}function ue(){return!ce()&&!!(0,C.getNavigator)()}function de(){return le()?ae.reactNative:ce()?ae.node:ue()?ae.browser:ae.unknown}function he(){return(0,k.D)()||{name:"",description:"",url:"",icons:[""]}}function fe(e,t,r){const i=function(){if(de()===ae.reactNative&&typeof n.g<"u"&&typeof(null==n.g?void 0:n.g.Platform)<"u"){const{OS:e,Version:t}=n.g.Platform;return[e,t].join("-")}const e=t?v(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new g:"undefined"!=typeof navigator?v(navigator.userAgent):void 0!==l&&l.version?new h(l.version.slice(1)):null;var t;if(null===e)return"unknown";const r=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[r,e.name,e.version].join("-"):[r,e.version].join("-")}(),o=function(){var e;const t=de();return t===ae.browser?[t,(null==(e=(0,C.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),[se,r].join("-"),i,o].join("/")}function pe({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:a}){const s=n.split("?"),c={auth:i,ua:fe(e,t,r),projectId:o,useOnCloseEvent:a||void 0},l=function(e,t){let n=E.parse(e);return n=ie(ie({},n),t),E.stringify(n)}(s[1]||"",c);return s[0]+"?"+l}function ge(e,t){return e.filter((e=>t.includes(e))).length===e.length}function me(e){return Object.fromEntries(e.entries())}function be(e){return new Map(Object.entries(e))}function we(e=x.FIVE_MINUTES,t){const n=(0,x.toMiliseconds)(e||x.FIVE_MINUTES);let r,i,o;return{resolve:e=>{o&&r&&(clearTimeout(o),r(e))},reject:e=>{o&&i&&(clearTimeout(o),i(e))},done:()=>new Promise(((e,a)=>{o=setTimeout((()=>{a(new Error(t))}),n),r=e,i=a}))}}function ye(e,t,n){return new Promise((async(r,i)=>{const o=setTimeout((()=>i(new Error(n))),t);try{r(await e)}catch(e){i(e)}clearTimeout(o)}))}function ve(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function xe(e){return ve("topic",e)}function Ce(e){return ve("id",e)}function ke(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof n)r.topic=n;else{if("id"!==t||!Number.isInteger(Number(n)))throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);r.id=Number(n)}return r}function Ee(e,t){return(0,x.fromMiliseconds)((t||Date.now())+(0,x.toMiliseconds)(e))}function Se(e){return Date.now()>=(0,x.toMiliseconds)(e)}function Pe(e,t){return`${e}${t?`:${t}`:""}`}function _e(e=[],t=[]){return[...new Set([...e,...t])]}async function Ae({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;const i="string"==typeof r?JSON.parse(r):r;let o=i?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));const a=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=de();s===ae.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===ae.reactNative&&typeof(null==n.g?void 0:n.g.Linking)<"u"&&await n.g.Linking.openURL(a)}catch(e){console.error(e)}}const $e="irn";function Oe(e){return e?.relay||{protocol:$e}}function Ie(e){const t=S[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Ne=Object.defineProperty,Te=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,je=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&je(e,n,t[n]);if(Te)for(var n of Te(t))Me.call(t,n)&&je(e,n,t[n]);return e};function Le(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach((t=>{if(t.startsWith(r)){const i=t.replace(r,""),o=e[t];n[i]=o}})),n}function Be(e){const t=e.indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",a=E.parse(o);return{protocol:r,topic:ze(i[0]),version:parseInt(i[1],10),symKey:a.symKey,relay:Le(a)}}function ze(e){return e.startsWith("//")?e.substring(2):e}function De(e){return`${e.protocol}:${e.topic}@${e.version}?`+E.stringify(Ue({symKey:e.symKey},function(e,t="-"){const n={};return Object.keys(e).forEach((r=>{const i="relay"+t+r;e[r]&&(n[i]=e[r])})),n}(e.relay)))}var Fe=Object.defineProperty,We=Object.defineProperties,He=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,Ke=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ze=(e,t)=>{for(var n in t||(t={}))Ge.call(t,n)&&Ke(e,n,t[n]);if(qe)for(var n of qe(t))Ve.call(t,n)&&Ke(e,n,t[n]);return e},Qe=(e,t)=>We(e,He(t));function Ye(e){const t=[];return e.forEach((e=>{const[n,r]=e.split(":");t.push(`${n}:${r}`)})),t}function Xe(e,t){const n=vt(e,t);if(n)throw new Error(n.message);const r={};for(const[t,n]of Object.entries(e))r[t]={methods:n.methods,events:n.events,chains:n.accounts.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))};return r}function Je(e){return e.includes(":")}function et(e){return Je(e)?e.split(":")[0]:e}function tt(e){var t,n,r;const i={};if(!st(e))return i;for(const[o,a]of Object.entries(e)){const e=Je(o)?[o]:a.chains,s=a.methods||[],c=a.events||[],l=et(o);i[l]=Qe(Ze({},i[l]),{chains:_e(e,null==(t=i[l])?void 0:t.chains),methods:_e(s,null==(n=i[l])?void 0:n.methods),events:_e(c,null==(r=i[l])?void 0:r.events)})}return i}const nt={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},rt={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function it(e,t){const{message:n,code:r}=rt[e];return{message:t?`${n} ${t}`:n,code:r}}function ot(e,t){const{message:n,code:r}=nt[e];return{message:t?`${n} ${t}`:n,code:r}}function at(e,t){return!!Array.isArray(e)&&(!(typeof t<"u"&&e.length)||e.every(t))}function st(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function ct(e){return typeof e>"u"}function lt(e,t){return!(!t||!ct(e))||"string"==typeof e&&!!e.trim().length}function ut(e,t){return!(!t||!ct(e))||"number"==typeof e&&!isNaN(e)}function dt(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return!!ge(i,r)&&(r.forEach((t=>{const{accounts:r,methods:i,events:a}=e.namespaces[t],s=Ye(r),c=n[t];ge(O(t,c),s)&&ge(c.methods,i)&&ge(c.events,a)||(o=!1)})),o)}function ht(e){return!(!lt(e,!1)||!e.includes(":"))&&2===e.split(":").length}function ft(e){if(lt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function pt(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function gt(e){return e?.topic}function mt(e,t){let n=null;return lt(e?.publicKey,!1)||(n=it("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function bt(e){let t=!0;return at(e)?e.length&&(t=e.every((e=>lt(e,!1)))):t=!1,t}function wt(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=function(e,t){let n=null;return bt(e?.methods)?bt(e?.events)||(n=ot("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=ot("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}(e,`${t}, namespace`);r&&(n=r)})),n}function yt(e,t,n){let r=null;if(e&&st(e)){const i=wt(e,t);i&&(r=i);const o=function(e,t,n){let r=null;return Object.entries(e).forEach((([e,i])=>{if(r)return;const o=function(e,t,n){let r=null;return at(t)&&t.length?t.forEach((e=>{r||ht(e)||(r=ot("UNSUPPORTED_CHAINS",`${n}, chain ${e} should be a string and conform to "namespace:chainId" format`))})):ht(e)||(r=ot("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}(e,O(e,i),`${t} ${n}`);o&&(r=o)})),r}(e,t,n);o&&(r=o)}else r=it("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function vt(e,t){let n=null;if(e&&st(e)){const r=wt(e,t);r&&(n=r);const i=function(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=function(e,t){let n=null;return at(e)?e.forEach((e=>{n||function(e){if(lt(e,!1)&&e.includes(":")){const t=e.split(":");if(3===t.length){const e=t[0]+":"+t[1];return!!t[2]&&ht(e)}}return!1}(e)||(n=ot("UNSUPPORTED_ACCOUNTS",`${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))})):n=ot("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}(e?.accounts,`${t} namespace`);r&&(n=r)})),n}(e,t);i&&(n=i)}else n=it("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function xt(e){return lt(e.protocol,!0)}function Ct(e,t){let n=!1;return t&&!e?n=!0:e&&at(e)&&e.length&&e.forEach((e=>{n=xt(e)})),n}function kt(e){return"number"==typeof e}function Et(e){return typeof e<"u"&&null!==typeof e}function St(e){return!!(e&&"object"==typeof e&&e.code&&ut(e.code,!1)&&e.message&&lt(e.message,!1))}function Pt(e){return!(ct(e)||!lt(e.method,!1))}function _t(e){return!(ct(e)||ct(e.result)&&ct(e.error)||!ut(e.id,!1)||!lt(e.jsonrpc,!1))}function At(e){return!(ct(e)||!lt(e.name,!1))}function $t(e,t){return!(!ht(t)||!function(e){const t=[];return Object.values(e).forEach((e=>{t.push(...Ye(e.accounts))})),t}(e).includes(t))}function Ot(e,t,n){return!!lt(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{Ye(e.accounts).includes(t)&&n.push(...e.methods)})),n}(e,t).includes(n)}function It(e,t,n){return!!lt(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{Ye(e.accounts).includes(t)&&n.push(...e.events)})),n}(e,t).includes(n)}function Nt(e,t,n){let r=null;const i=function(e){const t={};return Object.keys(e).forEach((n=>{var r;n.includes(":")?t[n]=e[n]:null==(r=e[n].chains)||r.forEach((r=>{t[r]={methods:e[n].methods,events:e[n].events}}))})),t}(e),o=function(e){const t={};return Object.keys(e).forEach((n=>{if(n.includes(":"))t[n]=e[n];else{const r=Ye(e[n].accounts);r?.forEach((r=>{t[r]={accounts:e[n].accounts.filter((e=>e.includes(`${r}:`))),methods:e[n].methods,events:e[n].events}}))}})),t}(t),a=Object.keys(i),s=Object.keys(o),c=Tt(Object.keys(e)),l=Tt(Object.keys(t)),u=c.filter((e=>!l.includes(e)));return u.length&&(r=it("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),ge(a,s)||(r=it("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.\n      Required: ${a.toString()}\n      Approved: ${s.toString()}`)),Object.keys(t).forEach((e=>{if(!e.includes(":")||r)return;const i=Ye(t[e].accounts);i.includes(e)||(r=it("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))})),a.forEach((e=>{r||(ge(i[e].methods,o[e].methods)?ge(i[e].events,o[e].events)||(r=it("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${e}`)):r=it("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${e}`))})),r}function Tt(e){return[...new Set(e.map((e=>e.includes(":")?e.split(":")[0]:e)))]}function Rt(e,t){return ut(e,!1)&&e<=t.max&&e>=t.min}function Mt(){const e=de();return new Promise((t=>{switch(e){case ae.browser:t(ue()&&navigator?.onLine);break;case ae.reactNative:t(async function(){if(le()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo){const e=await(null==n.g?void 0:n.g.NetInfo.fetch());return e?.isConnected}return!0}());break;case ae.node:default:t(!0)}}))}function jt(e){switch(de()){case ae.browser:!function(e){!le()&&ue()&&(window.addEventListener("online",(()=>e(!0))),window.addEventListener("offline",(()=>e(!1))))}(e);break;case ae.reactNative:!function(e){le()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo&&n.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))}(e);case ae.node:}}const Ut={};class Lt{static get(e){return Ut[e]}static set(e,t){Ut[e]=t}static delete(e){delete Ut[e]}}},6151:function(e,t,n){"use strict";const r=n(610),i=n(4020),o=n(500),a=n(2806),s=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function h(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const i="string"==typeof n&&n.includes(e.arrayFormatSeparator),o="string"==typeof n&&!i&&u(n,e).includes(e.arrayFormatSeparator);n=o?u(n,e):n;const a=i||o?n.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===n?n:u(n,e);r[t]=a};case"bracket-separator":return(t,n,r)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(r[t]=n?u(n,e):n);const o=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==r[t]?r[t]=[].concat(r[t],o):r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const i of e.split("&")){if(""===i)continue;let[e,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:u(a,t),n(u(e,t),a,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=p(n[e],t);else r[e]=p(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=d(n):e[t]=n,e}),Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const i=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[l(t,e),"[",i,"]"].join("")]:[...n,[l(t,e),"[",l(i,e),"]=",l(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[l(t,e),"[]"].join("")]:[...n,[l(t,e),"[]=",l(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[l(t,e),":list="].join("")]:[...n,[l(t,e),":list=",l(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:(i=null===i?"":i,0===r.length?[[l(n,e),t,l(i,e)].join("")]:[[r,l(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,l(t,e)]:[...n,[l(t,e),"=",l(r,e)].join("")]}}(t),i={};for(const t of Object.keys(e))n(t)||(i[t]=e[t]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((n=>{const i=e[n];return void 0===i?"":null===i?l(n,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?l(n,t)+"[]":i.reduce(r(n),[]).join("&"):l(n,t)+"="+l(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=o(e,"#");return Object.assign({url:n.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:u(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[s]:!0},n);const r=h(e.url).split("?")[0]||"",i=t.extract(e.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,e.query);let c=t.stringify(a,n);c&&(c=`?${c}`);let u=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u=`#${n[s]?l(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${r}${c}${u}`},t.pick=(e,n,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[s]:!1},r);const{url:i,query:o,fragmentIdentifier:c}=t.parseUrl(e,r);return t.stringifyUrl({url:i,query:a(o,n),fragmentIdentifier:c},r)},t.exclude=(e,n,r)=>{const i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,i,r)}},2873:function(e,t){"use strict";function n(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function r(e){const t=n(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=n,t.getFromWindowOrThrow=r,t.getDocumentOrThrow=function(){return r("document")},t.getDocument=function(){return n("document")},t.getNavigatorOrThrow=function(){return r("navigator")},t.getNavigator=function(){return n("navigator")},t.getLocationOrThrow=function(){return r("location")},t.getLocation=function(){return n("location")},t.getCryptoOrThrow=function(){return r("crypto")},t.getCrypto=function(){return n("crypto")},t.getLocalStorageOrThrow=function(){return r("localStorage")},t.getLocalStorage=function(){return n("localStorage")}},5755:function(e,t,n){"use strict";t.D=void 0;const r=n(2873);t.D=function(){let e,t;try{e=r.getDocumentOrThrow(),t=r.getLocationOrThrow()}catch(e){return null}function n(...t){const n=e.getElementsByTagName("meta");for(let e=0;e<n.length;e++){const r=n[e],i=["itemprop","property","name"].map((e=>r.getAttribute(e))).filter((e=>!!e&&t.includes(e)));if(i.length&&i){const e=r.getAttribute("content");if(e)return e}}return""}const i=function(){let t=n("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}();return{description:n("description","og:description","twitter:description","keywords"),url:t.origin,icons:function(){const n=e.getElementsByTagName("link"),r=[];for(let e=0;e<n.length;e++){const i=n[e],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){const e=i.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let n=t.protocol+"//"+t.host;if(0===e.indexOf("/"))n+=e;else{const r=t.pathname.split("/");r.pop(),n+=r.join("/")+"/"+e}r.push(n)}else if(0===e.indexOf("//")){const n=t.protocol+e;r.push(n)}else r.push(e)}}return r}(),name:i}}},739:function(e,t,n){"use strict";n.d(t,{AccountController:function(){return c},ApiController:function(){return S},WM:function(){return p},fz:function(){return F},Lr:function(){return D},ConnectionController:function(){return M},ConnectorController:function(){return m},bq:function(){return o},j1:function(){return a},Xs:function(){return $},IN:function(){return T},NetworkController:function(){return v},OptionsController:function(){return C},Ie:function(){return w},RouterController:function(){return I},SnackController:function(){return U},MO:function(){return h},ThemeController:function(){return B}});var r=n(9528);function i(e,t,n,i){let o=e[t];return(0,r.Ld)(e,(()=>{const r=e[t];Object.is(o,r)||n(o=r)}),i)}Symbol();const o={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},a={isMobile(){return"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return"undefined"!=typeof window},isPairingExpired(e){return!e||e-Date.now()<=o.TEN_SEC_MS},isAllowedRetry(e){return Date.now()-e>=o.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+o.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise((t=>{setTimeout(t,e)}))},debounce(e,t=500){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout((function(){e(...r)}),t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;return n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},formatUniversalUrl(e,t){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;return n.endsWith("/")||(n=`${n}/`),{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,n)=>{const r=new Image;r.onload=t,r.onerror=n,r.crossOrigin="anonymous",r.src=e}));return Promise.race([t,a.wait(2e3)])},formatBalance(e,t){let n;if("0"===e)n="0.000";else if("string"==typeof e){const t=Number(e);t&&(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return o.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return a.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return a.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return a.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}},s=(0,r.sj)({isConnected:!1}),c={state:s,subscribe(e){return(0,r.Ld)(s,(()=>e(s)))},subscribeKey(e,t){return i(s,e,t)},setIsConnected(e){s.isConnected=e},setCaipAddress(e){s.caipAddress=e,s.address=e?a.getPlainAddress(e):void 0},setBalance(e,t){s.balance=e,s.balanceSymbol=t},setProfileName(e){s.profileName=e},setProfileImage(e){s.profileImage=e},setAddressExplorerUrl(e){s.addressExplorerUrl=e},resetAccount(){s.isConnected=!1,s.caipAddress=void 0,s.address=void 0,s.balance=void 0,s.balanceSymbol=void 0,s.profileName=void 0,s.profileImage=void 0,s.addressExplorerUrl=void 0}};class l{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){const n=this.createUrl(t);return(await fetch(n,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){const n=this.createUrl(t);return(await fetch(n,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){const n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&n.searchParams.append(e,t)})),n}}const u="WALLETCONNECT_DEEPLINK_CHOICE",d="@w3m/recent",h={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(u,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(u);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(u)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=h.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(d,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(d);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},f=(0,r.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),p={state:f,subscribeNetworkImages(e){return(0,r.Ld)(f.networkImages,(()=>e(f.networkImages)))},subscribeKey(e,t){return i(f,e,t)},setWalletImage(e,t){f.walletImages[e]=t},setNetworkImage(e,t){f.networkImages[e]=t},setConnectorImage(e,t){f.connectorImages[e]=t},setTokenImage(e,t){f.tokenImages[e]=t}},g=(0,r.sj)({connectors:[]}),m={state:g,subscribeKey(e,t){return i(g,e,t)},setConnectors(e){g.connectors=e.map((e=>(0,r.iH)(e)))},addConnector(e){g.connectors.push((0,r.iH)(e))},getConnectors(){return g.connectors}},b=(0,r.sj)({open:!1,selectedNetworkId:void 0}),w={state:b,subscribe(e){return(0,r.Ld)(b,(()=>e(b)))},set(e){Object.assign(b,{...b,...e})}},y=(0,r.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),v={state:y,subscribeKey(e,t){return i(y,e,t)},_getClient(){if(!y._client)throw new Error("NetworkController client not set");return y._client},setClient(e){y._client=(0,r.iH)(e)},setCaipNetwork(e){y.caipNetwork=e,w.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){y.caipNetwork=e,w.set({selectedNetworkId:e?.id}),y.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){y.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();y.supportsAllNetworks=e.supportsAllNetworks,y.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),y.caipNetwork=e},resetNetwork(){y.isDefaultCaipNetwork||(y.caipNetwork=void 0),y.approvedCaipNetworkIds=void 0,y.supportsAllNetworks=!0}},x=(0,r.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),C={state:x,subscribeKey(e,t){return i(x,e,t)},setProjectId(e){x.projectId=e},setIncludeWalletIds(e){x.includeWalletIds=e},setExcludeWalletIds(e){x.excludeWalletIds=e},setFeaturedWalletIds(e){x.featuredWalletIds=e},setTokens(e){x.tokens=e},setTermsConditionsUrl(e){x.termsConditionsUrl=e},setPrivacyPolicyUrl(e){x.privacyPolicyUrl=e},setCustomWallets(e){x.customWallets=e},setEnableAnalytics(e){x.enableAnalytics=e},setSdkVersion(e){x.sdkVersion=e}},k=new l({baseUrl:a.getApiUrl()}),E=(0,r.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),S={state:E,subscribeKey(e,t){return i(E,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=C.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${k.baseUrl}/getWalletImage/${e}`,n=await k.getBlob({path:t,headers:S._getApiHeaders()});p.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${k.baseUrl}/public/getAssetImage/${e}`,n=await k.getBlob({path:t,headers:S._getApiHeaders()});p.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${k.baseUrl}/public/getAssetImage/${e}`,n=await k.getBlob({path:t,headers:S._getApiHeaders()});p.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=v.state,t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>S._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=m.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>S._fetchConnectorImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=C.state;if(e?.length){const{data:t}=await k.get({path:"/getWallets",headers:S._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)));const n=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(n.map((e=>S._fetchWalletImage(e)))),E.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=C.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await k.get({path:"/getWallets",headers:S._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:r?.join(",")}}),a=h.getRecentWallets(),s=i.map((e=>e.image_id)).filter(Boolean),c=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s,...c].map((e=>S._fetchWalletImage(e)))),E.recommended=i,E.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=C.state,i=[...E.recommended.map((({id:e})=>e)),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await k.get({path:"/getWallets",headers:S._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),c=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c.map((e=>S._fetchWalletImage(e))),a.wait(300)]),E.wallets=[...E.wallets,...o],E.count=s>E.count?s:E.count,E.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=C.state;E.search=[];const{data:r}=await k.get({path:"/getWallets",headers:S._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:n?.join(",")}}),i=r.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>S._fetchWalletImage(e))),a.wait(300)]),E.search=r},prefetch(){E.prefetchPromise=Promise.race([Promise.allSettled([S.fetchFeaturedWallets(),S.fetchRecommendedWallets(),S.fetchNetworkImages(),S.fetchConnectorImages()]),a.wait(3e3)])}},P=new l({baseUrl:a.getAnalyticsUrl()}),_=["MODAL_CREATED"],A=(0,r.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),$={state:A,subscribe(e){return(0,r.Ld)(A,(()=>e(A)))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=C.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(_.includes(e.data.event)||"undefined"==typeof window)return;await P.post({path:"/e",headers:$._getApiHeaders(),body:{eventId:a.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){A.timestamp=Date.now(),A.data=e,C.state.enableAnalytics&&$._sendAnalyticsEvent(A)}},O=(0,r.sj)({view:"Connect",history:["Connect"]}),I={state:O,subscribeKey(e,t){return i(O,e,t)},push(e,t){e!==O.view&&(O.view=e,O.history.push(e),O.data=t)},reset(e){O.view=e,O.history=[e]},replace(e){O.history.length>1&&O.history.at(-1)!==e&&(O.view=e,O.history[O.history.length-1]=e)},goBack(){if(O.history.length>1){O.history.pop();const[e]=O.history.slice(-1);e&&(O.view=e)}}},N=(0,r.sj)({open:!1}),T={state:N,subscribeKey(e,t){return i(N,e,t)},async open(e){await S.state.prefetchPromise,e?.view?I.reset(e.view):c.state.isConnected?I.reset("Account"):I.reset("Connect"),N.open=!0,w.set({open:!0}),$.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){N.open=!1,w.set({open:!1}),$.sendEvent({type:"track",event:"MODAL_CLOSE"})}},R=(0,r.sj)({wcError:!1,buffering:!1}),M={state:R,subscribeKey(e,t){return i(R,e,t)},_getClient(){if(!R._client)throw new Error("ConnectionController client not set");return R._client},setClient(e){R._client=(0,r.iH)(e)},connectWalletConnect(){R.wcPromise=this._getClient().connectWalletConnect((e=>{R.wcUri=e,R.wcPairingExpiry=a.getPairingExpiry()}))},async connectExternal(e){await(this._getClient().connectExternal?.(e))},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){R.wcUri=void 0,R.wcPairingExpiry=void 0,R.wcPromise=void 0,R.wcLinking=void 0,R.recentWallet=void 0,h.deleteWalletConnectDeepLink()},setWcLinking(e){R.wcLinking=e},setWcError(e){R.wcError=e,R.buffering=!1},setRecentWallet(e){R.recentWallet=e},setBuffering(e){R.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},j=(0,r.sj)({message:"",variant:"success",open:!1}),U={state:j,subscribeKey(e,t){return i(j,e,t)},showSuccess(e){j.message=e,j.variant="success",j.open=!0},showError(e){j.message=e,j.variant="error",j.open=!0},hide(){j.open=!1}},L=(0,r.sj)({themeMode:"dark",themeVariables:{}}),B={state:L,subscribe(e){return(0,r.Ld)(L,(()=>e(L)))},setThemeMode(e){L.themeMode=e},setThemeVariables(e){L.themeVariables={...L.themeVariables,...e}}},z=new l({baseUrl:a.getBlockchainApiUrl()}),D={fetchIdentity({caipChainId:e,address:t}){return z.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:C.state.projectId}})}},F={getWalletImage(e){return e?.image_url?e?.image_url:e?.image_id?p.state.walletImages[e.image_id]:void 0},getNetworkImage(e){return e?.imageUrl?e?.imageUrl:e?.imageId?p.state.networkImages[e.imageId]:void 0},getConnectorImage(e){return e?.imageUrl?e.imageUrl:e?.imageId?p.state.connectorImages[e.imageId]:void 0}}},7296:function(e,t,n){"use strict";n.r(t),n.d(t,{W3mModal:function(){return u}});var r=n(739),i=n(7062),o=n(3110),a=n(7390),s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,c=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const l="scroll-lock";let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.IN.state.open,this.initializeTheming(),r.ApiController.prefetch(),this.unsubscribe.push(r.IN.subscribeKey("open",(e=>e?this.onOpen():this.onClose()))),r.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&r.IN.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=r.ThemeController.state,n=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,r.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)r.IN.close();else if("Tab"===t.key){const{tagName:n}=t.target;!n||n.includes("W3M-")||n.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,c([(0,a.SB)()],u.prototype,"open",void 0),u=c([(0,i.customElement)("w3m-modal")],u)},6447:function(e,t,n){"use strict";n.d(t,{fl:function(){return S},iv:function(){return c},Ts:function(){return C},Qu:function(){return k}});const r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}const c=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new s(n,e,o)},l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),i=r.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,b=globalThis,w=b.trustedTypes,y=w?w.emptyScript:"",v=b.reactiveElementPolyfillSupport,x=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},k=(e,t)=>!d(e,t),E={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const o=r?.call(this);i.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...p(e),...g(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:C).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=r,this[r]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??k)(r?i:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,v?.({ReactiveElement:S}),(b.reactiveElementVersions??=[]).push("2.0.0")},655:function(e,t,n){"use strict";n.d(t,{Jb:function(){return E},Ld:function(){return S},dy:function(){return k},sY:function(){return z}});const r=globalThis,i=r.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,c="?"+s,l=`<${c}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,b=/>/g,w=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,v=/"/g,x=/^(?:script|style|textarea|title)$/i,C=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=C(1),E=(C(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),P=new WeakMap,_=u.createTreeWalker(u,129);function A(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const $=(e,t)=>{const n=e.length-1,r=[];let i,o=2===t?"<svg>":"",c=g;for(let t=0;t<n;t++){const n=e[t];let u,d,h=-1,f=0;for(;f<n.length&&(c.lastIndex=f,d=c.exec(n),null!==d);)f=c.lastIndex,c===g?"!--"===d[1]?c=m:void 0!==d[1]?c=b:void 0!==d[2]?(x.test(d[2])&&(i=RegExp("</"+d[2],"g")),c=w):void 0!==d[3]&&(c=w):c===w?">"===d[0]?(c=i??g,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,u=d[1],c=void 0===d[3]?w:'"'===d[3]?v:y):c===v||c===y?c=w:c===m||c===b?c=g:(c=w,i=void 0);const p=c===w&&e[t+1].startsWith("/>")?" ":"";o+=c===g?n+l:h>=0?(r.push(u),n.slice(0,h)+a+n.slice(h)+s+p):n+s+(-2===h?t:p)}return[A(e,o+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class O{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,l=0;const u=e.length-1,h=this.parts,[f,p]=$(e,t);if(this.el=O.createElement(f,n),_.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=_.nextNode())&&h.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(a)){const t=p[l++],n=r.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:i[2],strings:n,ctor:"."===i[1]?M:"?"===i[1]?j:"@"===i[1]?U:R}),r.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),r.removeAttribute(e));if(x.test(r.tagName)){const e=r.textContent.split(s),t=e.length-1;if(t>0){r.textContent=i?i.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],d()),_.nextNode(),h.push({type:2,index:++o});r.append(e[t],d())}}}else if(8===r.nodeType)if(r.data===c)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}o++}}static createElement(e,t){const n=u.createElement("template");return n.innerHTML=e,n}}function I(e,t,n=e,r){if(t===E)return t;let i=void 0!==r?n._$Co?.[r]:n._$Cl;const o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(t=I(e,i._$AS(e,t.values),i,r)),t}class N{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??u).importNode(t,!0);_.currentNode=r;let i=_.nextNode(),o=0,a=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new T(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new L(i,this,e)),this._$AV.push(t),s=n[++a]}o!==s?.index&&(i=_.nextNode(),o++)}return _.currentNode=u,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),h(e)?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>f(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=O.createElement(A(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new N(r,this),n=e.u(this.options);e.p(t),this.$(n),this._$AH=e}}_$AC(e){let t=P.get(e.strings);return void 0===t&&P.set(e.strings,t=new O(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new T(this.k(d()),this.k(d()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){const i=this.strings;let o=!1;if(void 0===i)e=I(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const r=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=I(this,r[n+a],t,a),s===E&&(s=this._$AH[a]),o||=!h(s)||s!==this._$AH[a],s===S?e=S:e!==S&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class j extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class U extends R{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??S)===E)return;const n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const B=r.litHtmlPolyfillSupport;B?.(O,T),(r.litHtmlVersions??=[]).push("3.0.0");const z=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=n?.renderBefore??null;r._$litPart$=i=new T(t.insertBefore(d(),e),e,void 0,n??{})}return i._$AI(e),i}},7390:function(e,t,n){"use strict";n.d(t,{Cb:function(){return a},SB:function(){return s}});var r=n(6447);const i={attribute:!0,type:String,converter:r.Ts,reflect:!1,hasChanged:r.Qu},o=(e=i,t,n)=>{const{kind:r,metadata:o}=n;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function a(e){return(t,n)=>"object"==typeof n?o(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function s(e){return a({...e,state:!0,attribute:!1})}},3110:function(e,t,n){"use strict";n.d(t,{oi:function(){return o},iv:function(){return r.iv},dy:function(){return i.dy}});var r=n(6447),i=n(655);class o extends r.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,i.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});const a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.0")},7062:function(e,t,n){"use strict";n.r(t),n.d(t,{UiHelperUtil:function(){return gn},WuiAccountButton:function(){return _n},WuiAllWalletsImage:function(){return Tn},WuiAvatar:function(){return xn},WuiButton:function(){return jn},WuiCard:function(){return _e},WuiCardSelect:function(){return Vn},WuiCardSelectLoader:function(){return zn},WuiChip:function(){return Qn},WuiConnectButton:function(){return Jn},WuiCtaButton:function(){return nr},WuiEmailInput:function(){return vr},WuiFlex:function(){return wn},WuiGrid:function(){return $i},WuiIcon:function(){return $t},WuiIconBox:function(){return En},WuiIconLink:function(){return kr},WuiImage:function(){return Nt},WuiInputElement:function(){return Pr},WuiInputNumeric:function(){return $r},WuiInputText:function(){return br},WuiLink:function(){return Nr},WuiListItem:function(){return Mr},WuiListTransaction:function(){return qr},WuiListWallet:function(){return Yr},WuiLoadingHexagon:function(){return Rt},WuiLoadingSpinner:function(){return Ut},WuiLoadingThumbnail:function(){return zt},WuiLogo:function(){return ei},WuiLogoSelect:function(){return ri},WuiNetworkButton:function(){return ai},WuiNetworkImage:function(){return Hn},WuiOtp:function(){return li},WuiQrCode:function(){return gi},WuiSearchBar:function(){return bi},WuiSeparator:function(){return Ni},WuiShimmer:function(){return Wt},WuiSnackbar:function(){return vi},WuiTabs:function(){return ki},WuiTag:function(){return Kr},WuiText:function(){return Zt},WuiTooltip:function(){return Pi},WuiTransactionVisual:function(){return Fr},WuiVisual:function(){return fn},WuiWalletImage:function(){return On},customElement:function(){return Se},initializeTheming:function(){return we},setColorTheme:function(){return ye},setThemeVariables:function(){return ve}});const r=globalThis,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new s("string"==typeof e?e:e+"",void 0,o),l=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new s(n,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),i=r.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:b}=Object,w=globalThis,y=w.trustedTypes,v=y?y.emptyScript:"",x=w.reactiveElementPolyfillSupport,C=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},E=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const o=r?.call(this);i.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:k).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=r,this[r]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??E)(r?i:this[e],t))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[C("elementProperties")]=new Map,P[C("finalized")]=new Map,x?.({ReactiveElement:P}),(w.reactiveElementVersions??=[]).push("2.0.0");const _=globalThis,A=_.trustedTypes,$=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,N="?"+I,T=`<${N}>`,R=document,M=()=>R.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,L=e=>U(e)||"function"==typeof e?.[Symbol.iterator],B="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,F=/>/g,W=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,q=/"/g,G=/^(?:script|style|textarea|title)$/i,V=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),K=V(1),Z=V(2),Q=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),X=new WeakMap,J=R.createTreeWalker(R,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}const te=(e,t)=>{const n=e.length-1,r=[];let i,o=2===t?"<svg>":"",a=z;for(let t=0;t<n;t++){const n=e[t];let s,c,l=-1,u=0;for(;u<n.length&&(a.lastIndex=u,c=a.exec(n),null!==c);)u=a.lastIndex,a===z?"!--"===c[1]?a=D:void 0!==c[1]?a=F:void 0!==c[2]?(G.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=W):void 0!==c[3]&&(a=W):a===W?">"===c[0]?(a=i??z,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?W:'"'===c[3]?q:H):a===q||a===H?a=W:a===D||a===F?a=z:(a=W,i=void 0);const d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===z?n+T:l>=0?(r.push(s),n.slice(0,l)+O+n.slice(l)+I+d):n+I+(-2===l?t:d)}return[ee(e,o+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class ne{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,o=0;const a=e.length-1,s=this.parts,[c,l]=te(e,t);if(this.el=ne.createElement(c,n),J.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=J.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(O)){const t=l[o++],n=r.getAttribute(e).split(I),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:n,ctor:"."===a[1]?se:"?"===a[1]?ce:"@"===a[1]?le:ae}),r.removeAttribute(e)}else e.startsWith(I)&&(s.push({type:6,index:i}),r.removeAttribute(e));if(G.test(r.tagName)){const e=r.textContent.split(I),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],M()),J.nextNode(),s.push({type:2,index:++i});r.append(e[t],M())}}}else if(8===r.nodeType)if(r.data===N)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(I,e+1));)s.push({type:7,index:i}),e+=I.length-1}i++}}static createElement(e,t){const n=R.createElement("template");return n.innerHTML=e,n}}function re(e,t,n=e,r){if(t===Q)return t;let i=void 0!==r?n._$Co?.[r]:n._$Cl;const o=j(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(t=re(e,i._$AS(e,t.values),i,r)),t}class ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??R).importNode(t,!0);J.currentNode=r;let i=J.nextNode(),o=0,a=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new oe(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new ue(i,this,e)),this._$AV.push(t),s=n[++a]}o!==s?.index&&(i=J.nextNode(),o++)}return J.currentNode=R,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),j(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==Q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):L(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Y&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ne.createElement(ee(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new ie(r,this),n=e.u(this.options);e.p(t),this.$(n),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new ne(e)),t}T(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new oe(this.k(M()),this.k(M()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}_$AI(e,t=this,n,r){const i=this.strings;let o=!1;if(void 0===i)e=re(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==Q,o&&(this._$AH=e);else{const r=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=re(this,r[n+a],t,a),s===Q&&(s=this._$AH[a]),o||=!j(s)||s!==this._$AH[a],s===Y?e=Y:e!==Y&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ce extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class le extends ae{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??Y)===Q)return;const n=this._$AH,r=e===Y&&n!==Y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Y&&(n===Y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const de={S:O,A:I,P:N,C:1,M:te,L:ie,R:L,V:re,D:oe,I:ae,H:ce,N:le,U:se,B:ue},he=_.litHtmlPolyfillSupport;he?.(ne,oe),(_.litHtmlVersions??=[]).push("3.0.0");class fe extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=n?.renderBefore??null;r._$litPart$=i=new oe(t.insertBefore(M(),e),e,void 0,n??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}fe._$litElement$=!0,fe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:fe});const pe=globalThis.litElementPolyfillSupport;let ge,me,be;function we(e,t){ge=document.createElement("style"),me=document.createElement("style"),be=document.createElement("style"),ge.textContent=xe(e).core.cssText,me.textContent=xe(e).dark.cssText,be.textContent=xe(e).light.cssText,document.head.appendChild(ge),document.head.appendChild(me),document.head.appendChild(be),ye(t)}function ye(e){me&&be&&("light"===e?(me.removeAttribute("media"),be.media="enabled"):(be.removeAttribute("media"),me.media="enabled"))}function ve(e){ge&&me&&be&&(ge.textContent=xe(e).core.cssText,me.textContent=xe(e).dark.cssText,be.textContent=xe(e).light.cssText)}function xe(e){return{core:l`
      :root {
        --w3m-color-mix-strength: ${c(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${c(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${c(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${c(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${c(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:l`
      :root {
        --w3m-color-mix: ${c(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${c(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}pe?.({LitElement:fe}),(globalThis.litElementVersions??=[]).push("4.0.0");const Ce=l`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ke=l`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ee=l`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Se(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var Pe=l`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;let _e=class extends fe{render(){return K`<slot></slot>`}};_e.styles=[Ce,Pe],_e=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([Se("wui-card")],_e);const Ae={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:E},$e=(e=Ae,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e),t}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function Oe(e){return(t,n)=>"object"==typeof n?$e(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Ie(e){return Oe({...e,state:!0,attribute:!1})}var Ne=l`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;const Te=Z`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Re=Z`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Me=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,je=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ue=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Le=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Be=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ze=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,De=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Fe=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,We=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,He=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,qe=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Ge=Z`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ve=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ke=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Ze=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Qe=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Ye=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Xe=Z` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Je=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,et=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tt=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,nt=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,rt=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,it=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ot=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,at=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,st=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ct=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,lt=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ut=Z`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,dt=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ht=Z`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ft=Z`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,pt=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,gt=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,mt=Z` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,bt=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,wt=Z`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,yt=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,vt=Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xt=Z`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ct=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,kt=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Et=Z`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,St=Z`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Pt=Z`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var _t=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const At={allWallets:Te,appStore:Re,chromeStore:Ge,apple:Me,arrowBottom:je,arrowLeft:Ue,arrowRight:Le,arrowTop:Be,browser:ze,checkmark:De,chevronBottom:Fe,chevronLeft:We,chevronRight:He,chevronTop:qe,clock:Ve,close:Ke,compass:Qe,coinPlaceholder:Ze,copy:Ye,cursor:Xe,desktop:Je,disconnect:et,discord:tt,etherscan:nt,extension:rt,externalLink:it,facebook:ot,filters:at,github:st,google:ct,helpCircle:lt,infoCircle:ut,mail:dt,mobile:ht,networkPlaceholder:ft,nftPlaceholder:pt,off:gt,playStore:mt,qrCode:bt,refresh:wt,search:yt,swapHorizontal:vt,swapVertical:xt,telegram:Ct,twitch:kt,twitter:Et,twitterIcon:St,wallet:Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:Z`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:Pt,warningCircle:Z`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`};let $t=class extends fe{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,K`${At[this.name]}`}};$t.styles=[Ce,Ee,Ne],_t([Oe()],$t.prototype,"size",void 0),_t([Oe()],$t.prototype,"name",void 0),_t([Oe()],$t.prototype,"color",void 0),$t=_t([Se("wui-icon")],$t);var Ot=l`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,It=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Nt=class extends fe{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return K`<img src=${this.src} alt=${this.alt} />`}};Nt.styles=[Ce,Ee,Ot],It([Oe()],Nt.prototype,"src",void 0),It([Oe()],Nt.prototype,"alt",void 0),Nt=It([Se("wui-image")],Nt);var Tt=l`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Rt=class extends fe{render(){return K`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Rt.styles=[Ce,Tt],Rt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([Se("wui-loading-hexagon")],Rt);var Mt=l`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,jt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ut=class extends fe{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,K`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ut.styles=[Ce,Mt],jt([Oe()],Ut.prototype,"color",void 0),jt([Oe()],Ut.prototype,"size",void 0),Ut=jt([Se("wui-loading-spinner")],Ut);var Lt=l`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Bt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let zt=class extends fe{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return K`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};zt.styles=[Ce,Lt],Bt([Oe({type:Number})],zt.prototype,"radius",void 0),zt=Bt([Se("wui-loading-thumbnail")],zt);var Dt=l`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Ft=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Wt=class extends fe{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,K`<slot></slot>`}};Wt.styles=[Dt],Ft([Oe()],Wt.prototype,"width",void 0),Ft([Oe()],Wt.prototype,"height",void 0),Ft([Oe()],Wt.prototype,"borderRadius",void 0),Wt=Ft([Se("wui-shimmer")],Wt);const Ht=e=>(...t)=>({_$litDirective$:e,values:t});class qt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Gt=Ht(class extends qt{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.it)e in t||(n.remove(e),this.it.delete(e));for(const e in t){const r=!!t[e];r===this.it.has(e)||this.st?.has(e)||(r?(n.add(e),this.it.add(e)):(n.remove(e),this.it.delete(e)))}return Q}});var Vt=l`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,Kt=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Zt=class extends fe{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,K`<slot class=${Gt(e)}></slot>`}};Zt.styles=[Ce,Vt],Kt([Oe()],Zt.prototype,"variant",void 0),Kt([Oe()],Zt.prototype,"color",void 0),Kt([Oe()],Zt.prototype,"align",void 0),Zt=Kt([Se("wui-text")],Zt);const Qt=Z`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Yt=Z`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Xt=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Jt=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,en=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tn=Z`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,nn=Z`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,rn=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,on=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,an=Z`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,sn=Z`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,cn=Z`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,ln=Z`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var un=l`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,dn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const hn={browser:Qt,dao:Yt,defi:Xt,defiAlt:Jt,eth:en,layers:tn,lock:nn,login:rn,network:on,nft:an,noun:sn,profile:cn,system:ln};let fn=class extends fe{constructor(){super(...arguments),this.name="browser"}render(){return K`${hn[this.name]}`}};fn.styles=[Ce,un],dn([Oe()],fn.prototype,"name",void 0),fn=dn([Se("wui-visual")],fn);const pn=e=>e??Y,gn={getSpacingStyles(e,t){return Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:"end"===r?`${e.substring(0,t)}...`:"start"===r?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(t),r=[];for(let e=0;e<5;e+=1){const t=this.tintColor(n,.15*e);r.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${r[0]};\n    --local-color-2: ${r[1]};\n    --local-color-3: ${r[2]};\n    --local-color-4: ${r[3]};\n    --local-color-5: ${r[4]};\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[n,r,i]=e;return[Math.round(n+(255-n)*t),Math.round(r+(255-r)*t),Math.round(i+(255-i)*t)]},isNumber(e){return/^[0-9]+$/u.test(e)},getColorTheme(e){return e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}};var mn=l`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,bn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let wn=class extends fe{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&gn.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&gn.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&gn.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&gn.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&gn.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&gn.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&gn.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&gn.getSpacingStyles(this.margin,3)};\n    `,K`<slot></slot>`}};wn.styles=[Ce,mn],bn([Oe()],wn.prototype,"flexDirection",void 0),bn([Oe()],wn.prototype,"flexWrap",void 0),bn([Oe()],wn.prototype,"flexBasis",void 0),bn([Oe()],wn.prototype,"flexGrow",void 0),bn([Oe()],wn.prototype,"flexShrink",void 0),bn([Oe()],wn.prototype,"alignItems",void 0),bn([Oe()],wn.prototype,"justifyContent",void 0),bn([Oe()],wn.prototype,"columnGap",void 0),bn([Oe()],wn.prototype,"rowGap",void 0),bn([Oe()],wn.prototype,"gap",void 0),bn([Oe()],wn.prototype,"padding",void 0),bn([Oe()],wn.prototype,"margin",void 0),wn=bn([Se("wui-flex")],wn);var yn=l`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,vn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let xn=class extends fe{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return K`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",K`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=gn.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};xn.styles=[Ce,yn],vn([Oe()],xn.prototype,"imageSrc",void 0),vn([Oe()],xn.prototype,"alt",void 0),vn([Oe()],xn.prototype,"address",void 0),xn=vn([Se("wui-avatar")],xn);var Cn=l`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,kn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let En=class extends fe{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}const t="lg"===this.size,n=t?"12%":"16%",r=t?"xxs":"3xl",i="opaque"===this.background,o="accent-100"===this.backgroundColor&&i||"success-100"===this.backgroundColor&&i||"error-100"===this.backgroundColor&&i||"inverse-100"===this.backgroundColor&&i;return this.style.cssText=`\n       --local-bg-value: ${o?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};\n       --local-bg-mix: ${o?"100%":n};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,K` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};En.styles=[Ce,ke,Cn],kn([Oe()],En.prototype,"size",void 0),kn([Oe()],En.prototype,"backgroundColor",void 0),kn([Oe()],En.prototype,"iconColor",void 0),kn([Oe()],En.prototype,"background",void 0),kn([Oe({type:Boolean})],En.prototype,"border",void 0),kn([Oe()],En.prototype,"borderColor",void 0),kn([Oe()],En.prototype,"icon",void 0),En=kn([Se("wui-icon-box")],En);var Sn=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,Pn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let _n=class extends fe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return K`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${pn(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${gn.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?K`<wui-image src=${this.networkSrc}></wui-image>`:K`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return K`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};_n.styles=[Ce,ke,Sn],Pn([Oe()],_n.prototype,"networkSrc",void 0),Pn([Oe()],_n.prototype,"avatarSrc",void 0),Pn([Oe()],_n.prototype,"balance",void 0),Pn([Oe({type:Boolean})],_n.prototype,"disabled",void 0),Pn([Oe({type:Boolean})],_n.prototype,"isProfileName",void 0),Pn([Oe()],_n.prototype,"address",void 0),_n=Pn([Se("wui-account-button")],_n);var An=l`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,$n=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let On=class extends fe{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),K` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?K`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?K`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:K`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};On.styles=[Ce,An],$n([Oe()],On.prototype,"size",void 0),$n([Oe()],On.prototype,"name",void 0),$n([Oe()],On.prototype,"imageSrc",void 0),$n([Oe()],On.prototype,"walletIcon",void 0),On=$n([Se("wui-wallet-image")],On);var In=l`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,Nn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Tn=class extends fe{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return K`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>K`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${pn(t)}
          ></wui-wallet-image>
        `))}
    ${e?[...Array(4-this.walletImages.length)].map((()=>K` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}`}};Tn.styles=[Ce,In],Nn([Oe({type:Array})],Tn.prototype,"walletImages",void 0),Tn=Nn([Se("wui-all-wallets-image")],Tn);var Rn=l`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Mn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let jn=class extends fe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`\n    --local-width: ${"fullWidth"===this.variant?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return K`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?K`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:K``}};jn.styles=[Ce,ke,Rn],Mn([Oe()],jn.prototype,"size",void 0),Mn([Oe({type:Boolean})],jn.prototype,"disabled",void 0),Mn([Oe({type:Boolean})],jn.prototype,"loading",void 0),Mn([Oe()],jn.prototype,"variant",void 0),jn=Mn([Se("wui-button")],jn);const Un=Z`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var Ln=l`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,Bn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let zn=class extends fe{constructor(){super(...arguments),this.type="wallet"}render(){return K`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?K` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Un}`:K`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};zn.styles=[Ce,ke,Ln],Bn([Oe()],zn.prototype,"type",void 0),zn=Bn([Se("wui-card-select-loader")],zn);const Dn=Z`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var Fn=l`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,Wn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Hn=class extends fe{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,K`${this.templateVisual()} ${e?Dn:Un}`}templateVisual(){return this.imageSrc?K`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:K`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Hn.styles=[Ce,Fn],Wn([Oe()],Hn.prototype,"size",void 0),Wn([Oe()],Hn.prototype,"name",void 0),Wn([Oe()],Hn.prototype,"imageSrc",void 0),Wn([Oe({type:Boolean})],Hn.prototype,"selected",void 0),Hn=Wn([Se("wui-network-image")],Hn);var qn=l`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,Gn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Vn=class extends fe{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return K`
      <button data-selected=${pn(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?K`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${pn(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:K`
      <wui-wallet-image size="md" imageSrc=${pn(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Vn.styles=[Ce,ke,qn],Gn([Oe()],Vn.prototype,"name",void 0),Gn([Oe()],Vn.prototype,"type",void 0),Gn([Oe()],Vn.prototype,"imageSrc",void 0),Gn([Oe({type:Boolean})],Vn.prototype,"disabled",void 0),Gn([Oe({type:Boolean})],Vn.prototype,"selected",void 0),Vn=Gn([Se("wui-card-select")],Vn);var Kn=l`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,Zn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Qn=class extends fe{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e="transparent"===this.variant?"small-600":"paragraph-600";return K`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${gn.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?K`<wui-image src=${this.imageSrc}></wui-image>`:null}};Qn.styles=[Ce,ke,Kn],Zn([Oe()],Qn.prototype,"variant",void 0),Zn([Oe()],Qn.prototype,"imageSrc",void 0),Zn([Oe({type:Boolean})],Qn.prototype,"disabled",void 0),Zn([Oe()],Qn.prototype,"icon",void 0),Zn([Oe()],Qn.prototype,"href",void 0),Qn=Zn([Se("wui-chip")],Qn);var Yn=l`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,Xn=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Jn=class extends fe{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return K`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?K`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Jn.styles=[Ce,ke,Yn],Xn([Oe()],Jn.prototype,"size",void 0),Xn([Oe({type:Boolean})],Jn.prototype,"loading",void 0),Jn=Xn([Se("wui-connect-button")],Jn);var er=l`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nr=class extends fe{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return K`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};nr.styles=[Ce,ke,er],tr([Oe({type:Boolean})],nr.prototype,"disabled",void 0),tr([Oe()],nr.prototype,"label",void 0),tr([Oe()],nr.prototype,"buttonLabel",void 0),nr=tr([Se("wui-cta-button")],nr);const{D:rr}=de,ir=(e,t)=>{const n=e._$AN;if(void 0===n)return!1;for(const e of n)e._$AO?.(t,!1),ir(e,t);return!0},or=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===n?.size)},ar=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),lr(t)}};function sr(e){void 0!==this._$AN?(or(this),this._$AM=e,ar(this)):this._$AM=e}function cr(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)ir(r[e],!1),or(r[e]);else null!=r&&(ir(r,!1),or(r));else ir(this,e)}const lr=e=>{2==e.type&&(e._$AP??=cr,e._$AQ??=sr)};class ur extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ar(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ir(this,e),or(this))}setValue(e){if((e=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const dr=()=>new hr;class hr{}const fr=new WeakMap,pr=Ht(class extends ur{render(e){return Y}update(e,[t]){const n=t!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),Y}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let n=fr.get(t);void 0===n&&(n=new WeakMap,fr.set(t,n)),void 0!==n.get(this.G)&&this.G.call(this.ct,void 0),n.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?fr.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var gr=l`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,mr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let br=class extends fe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=dr()}render(){const e=`wui-size-${this.size}`;return K` ${this.templateIcon()}
      <input
        ${pr(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${pn(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?K`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};br.styles=[Ce,ke,gr],mr([Oe()],br.prototype,"size",void 0),mr([Oe()],br.prototype,"icon",void 0),mr([Oe({type:Boolean})],br.prototype,"disabled",void 0),mr([Oe()],br.prototype,"placeholder",void 0),mr([Oe()],br.prototype,"type",void 0),mr([Oe()],br.prototype,"keyHint",void 0),br=mr([Se("wui-input-text")],br);var wr=l`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,yr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let vr=class extends fe{render(){return K`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?K`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};vr.styles=[Ce,wr],yr([Oe()],vr.prototype,"errorMessage",void 0),vr=yr([Se("wui-email-input")],vr);var xr=l`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,Cr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let kr=class extends fe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return K`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};kr.styles=[Ce,ke,Ee,xr],Cr([Oe()],kr.prototype,"size",void 0),Cr([Oe({type:Boolean})],kr.prototype,"disabled",void 0),Cr([Oe()],kr.prototype,"icon",void 0),Cr([Oe()],kr.prototype,"iconColor",void 0),kr=Cr([Se("wui-icon-link")],kr);var Er=l`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,Sr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Pr=class extends fe{constructor(){super(...arguments),this.icon="copy"}render(){return K`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Pr.styles=[Ce,ke,Er],Sr([Oe()],Pr.prototype,"icon",void 0),Pr=Sr([Se("wui-input-element")],Pr);var _r=l`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,Ar=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let $r=class extends fe{constructor(){super(...arguments),this.disabled=!1}render(){return K`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};$r.styles=[Ce,ke,_r],Ar([Oe({type:Boolean})],$r.prototype,"disabled",void 0),$r=Ar([Se("wui-input-numeric")],$r);var Or=l`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,Ir=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Nr=class extends fe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return K`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Nr.styles=[Ce,ke,Or],Ir([Oe({type:Boolean})],Nr.prototype,"disabled",void 0),Ir([Oe()],Nr.prototype,"color",void 0),Nr=Ir([Se("wui-link")],Nr);var Tr=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,Rr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Mr=class extends fe{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return K`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${pn(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return K`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return K`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return K`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?K`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:K``}chevronTemplate(){return this.chevron?K`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Mr.styles=[Ce,ke,Tr],Rr([Oe()],Mr.prototype,"icon",void 0),Rr([Oe()],Mr.prototype,"variant",void 0),Rr([Oe()],Mr.prototype,"iconVariant",void 0),Rr([Oe({type:Boolean})],Mr.prototype,"disabled",void 0),Rr([Oe()],Mr.prototype,"imageSrc",void 0),Rr([Oe()],Mr.prototype,"alt",void 0),Rr([Oe({type:Boolean})],Mr.prototype,"chevron",void 0),Rr([Oe({type:Boolean})],Mr.prototype,"loading",void 0),Mr=Rr([Se("wui-list-item")],Mr);var jr=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,Ur=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const Lr=["withdrawed","buy","cryptoSent","nftSent"],Br=["deposited","received","bought","minted"],zr=["minted","bought","nftSent"],Dr=["deposited","withdrawed","cryptoSent","buy","received"];let Fr=class extends fe{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return Lr.includes(this.type)?(e="accent-100",t="arrowTop"):Br.includes(this.type)&&zr.includes(this.type)||Br.includes(this.type)&&Dr.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,K`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?K`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:zr.includes(this.type)?K`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:K`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};Fr.styles=[Ce,jr],Ur([Oe()],Fr.prototype,"type",void 0),Ur([Oe()],Fr.prototype,"imageSrc",void 0),Fr=Ur([Se("wui-transaction-visual")],Fr);var Wr=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,Hr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let qr=class extends fe{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const e="nftSent"===this.type||"cryptoSent"===this.type?"Sent":this.type,t=gn.getFormattedDate(this.date);return K`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${e}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${t}</wui-text>
      </button>
    `}};qr.styles=[Ce,ke,Wr],Hr([Oe()],qr.prototype,"type",void 0),Hr([Oe({type:Boolean})],qr.prototype,"disabled",void 0),Hr([Oe()],qr.prototype,"imageSrc",void 0),Hr([Oe({attribute:!1})],qr.prototype,"date",void 0),Hr([Oe()],qr.prototype,"transactionDetail",void 0),qr=Hr([Se("wui-list-transaction")],qr);var Gr=l`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,Vr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Kr=class extends fe{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,K`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Kr.styles=[Ce,Gr],Vr([Oe()],Kr.prototype,"variant",void 0),Kr=Vr([Se("wui-tag")],Kr);var Zr=l`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,Qr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Yr=class extends fe{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return K`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?K` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?K` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?K`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:K`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?K`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?K`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Yr.styles=[Ce,ke,Zr],Qr([Oe({type:Array})],Yr.prototype,"walletImages",void 0),Qr([Oe()],Yr.prototype,"imageSrc",void 0),Qr([Oe()],Yr.prototype,"name",void 0),Qr([Oe()],Yr.prototype,"tagLabel",void 0),Qr([Oe()],Yr.prototype,"tagVariant",void 0),Qr([Oe()],Yr.prototype,"icon",void 0),Qr([Oe()],Yr.prototype,"walletIcon",void 0),Qr([Oe({type:Boolean})],Yr.prototype,"disabled",void 0),Qr([Oe({type:Boolean})],Yr.prototype,"showAllWallets",void 0),Yr=Qr([Se("wui-list-wallet")],Yr);var Xr=l`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,Jr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ei=class extends fe{constructor(){super(...arguments),this.logo="google"}render(){return K`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};ei.styles=[Ce,Xr],Jr([Oe()],ei.prototype,"logo",void 0),ei=Jr([Se("wui-logo")],ei);var ti=l`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,ni=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ri=class extends fe{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return K`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ri.styles=[Ce,ke,ti],ni([Oe()],ri.prototype,"logo",void 0),ni([Oe({type:Boolean})],ri.prototype,"disabled",void 0),ri=ni([Se("wui-logo-select")],ri);var ii=l`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,oi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ai=class extends fe{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return K`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?K`<wui-image src=${this.imageSrc}></wui-image>`:K`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ai.styles=[Ce,ke,ii],oi([Oe()],ai.prototype,"imageSrc",void 0),oi([Oe({type:Boolean})],ai.prototype,"disabled",void 0),ai=oi([Se("wui-network-button")],ai);var si=l`
  :host {
    position: relative;
    display: block;
  }
`,ci=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let li=class extends fe{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{const n=e.target,r=this.getInputElement(n);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=r.selectionStart;switch(e.key){case"ArrowLeft":i&&r.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):r.value=""}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1,n=this.numerics[e<this.length?e:t],r=n?this.getInputElement(n):void 0;r&&r.focus()}if("prev"===e){const e=t-1,n=this.numerics[e>-1?e:t],r=n?this.getInputElement(n):void 0;r&&r.focus()}}}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return K`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map(((e,t)=>K`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}handleInput(e,t){const n=e.target,r=this.getInputElement(n);if(r){const n=r.value;"insertFromPaste"===e.inputType?this.handlePaste(r,n,t):gn.isNumber(n)&&e.data?(r.value=e.data,this.focusInputField("next",t)):r.value=""}}handlePaste(e,t,n){const r=t[0];if(r&&gn.isNumber(r)){e.value=r;const i=t.substring(1);if(n+1<this.length&&i.length){const e=this.numerics[n+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,n+1)}else this.focusInputField("next",n)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};li.styles=[Ce,si],ci([Oe({type:Number})],li.prototype,"length",void 0),li=ci([Se("wui-otp")],li);var ui=n(2592);function di(e,t,n){return e!==t&&(e-t<0?t-e:e-t)<=n+.1}const hi={generate(e,t,n){const r="#141414",i=[],o=function(e,t){const n=Array.prototype.slice.call(ui.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),r=Math.sqrt(n.length);return n.reduce(((e,t,n)=>(n%r==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach((({x:e,y:t})=>{const n=(o.length-7)*a*e,c=(o.length-7)*a*t,l=.45;for(let e=0;e<s.length;e+=1){const t=a*(7-2*e);i.push(Z`
            <rect
              fill=${2===e?r:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*l:t*l}
              ry= ${0===e?(t-5)*l:t*l}
              stroke=${r}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?n+a*e+2.5:n+a*e}
            />
          `)}}));const c=Math.floor((n+25)/a),l=o.length/2-c/2,u=o.length/2+c/2-1,d=[];o.forEach(((e,t)=>{e.forEach(((e,n)=>{if(o[t][n]&&!(t<7&&n<7||t>o.length-8&&n<7||t<7&&n>o.length-8||t>l&&t<u&&n>l&&n<u)){const e=t*a+a/2,r=n*a+a/2;d.push([e,r])}}))}));const h={};return d.forEach((([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]})),Object.entries(h).map((([e,t])=>{const n=t.filter((e=>t.every((t=>!di(e,t,a)))));return[Number(e),n]})).forEach((([e,t])=>{t.forEach((t=>{i.push(Z`<circle cx=${e} cy=${t} fill=${r} r=${a/2.5} />`)}))})),Object.entries(h).filter((([e,t])=>t.length>1)).map((([e,t])=>{const n=t.filter((e=>t.some((t=>di(e,t,a)))));return[Number(e),n]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const n=[];for(const e of t){const t=n.find((t=>t.some((t=>di(e,t,a)))));t?t.push(e):n.push([e])}return[e,n.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,n])=>{i.push(Z`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${n}
                stroke=${r}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),i}};var fi=l`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,pi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let gi=class extends fe{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,K`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return Z`
      <svg height=${e} width=${e}>
        ${hi.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?K`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:K`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};gi.styles=[Ce,fi],pi([Oe()],gi.prototype,"uri",void 0),pi([Oe({type:Number})],gi.prototype,"size",void 0),pi([Oe()],gi.prototype,"theme",void 0),pi([Oe()],gi.prototype,"imageSrc",void 0),pi([Oe()],gi.prototype,"alt",void 0),gi=pi([Se("wui-qr-code")],gi);var mi=l`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let bi=class extends fe{constructor(){super(...arguments),this.inputComponentRef=dr()}render(){return K`
      <wui-input-text
        ${pr(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};bi.styles=[Ce,mi],bi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([Se("wui-search-bar")],bi);var wi=l`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,yi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let vi=class extends fe{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return K`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};vi.styles=[Ce,wi],yi([Oe()],vi.prototype,"backgroundColor",void 0),yi([Oe()],vi.prototype,"iconColor",void 0),yi([Oe()],vi.prototype,"icon",void 0),yi([Oe()],vi.prototype,"message",void 0),vi=yi([Se("wui-snackbar")],vi);var xi=l`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,Ci=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ki=class extends fe{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const n=t===this.activeTab;return K`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],r=this.buttons[e],i=n?.querySelector("wui-text"),o=r?.querySelector("wui-text"),a=r?.getBoundingClientRect(),s=o?.getBoundingClientRect();n&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,r.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:250,delay:t?0:50,fill:"forwards",easing:"ease"}))}};ki.styles=[Ce,ke,xi],Ci([Oe({type:Array})],ki.prototype,"tabs",void 0),Ci([Oe()],ki.prototype,"onTabChange",void 0),Ci([Oe({type:Array})],ki.prototype,"buttons",void 0),Ci([Oe({type:Boolean})],ki.prototype,"disabled",void 0),Ci([Ie()],ki.prototype,"activeTab",void 0),Ci([Ie()],ki.prototype,"localTabWidth",void 0),Ci([Ie()],ki.prototype,"isDense",void 0),ki=Ci([Se("wui-tabs")],ki);var Ei=l`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,Si=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Pi=class extends fe{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return K`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Pi.styles=[Ce,ke,Ei],Si([Oe()],Pi.prototype,"placement",void 0),Si([Oe()],Pi.prototype,"message",void 0),Pi=Si([Se("wui-tooltip")],Pi);var _i=l`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,Ai=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let $i=class extends fe{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&gn.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&gn.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&gn.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&gn.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&gn.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&gn.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&gn.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&gn.getSpacingStyles(this.margin,3)};\n    `,K`<slot></slot>`}};$i.styles=[Ce,_i],Ai([Oe()],$i.prototype,"gridTemplateRows",void 0),Ai([Oe()],$i.prototype,"gridTemplateColumns",void 0),Ai([Oe()],$i.prototype,"justifyItems",void 0),Ai([Oe()],$i.prototype,"alignItems",void 0),Ai([Oe()],$i.prototype,"justifyContent",void 0),Ai([Oe()],$i.prototype,"alignContent",void 0),Ai([Oe()],$i.prototype,"columnGap",void 0),Ai([Oe()],$i.prototype,"rowGap",void 0),Ai([Oe()],$i.prototype,"gap",void 0),Ai([Oe()],$i.prototype,"padding",void 0),Ai([Oe()],$i.prototype,"margin",void 0),$i=Ai([Se("wui-grid")],$i);var Oi=l`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,Ii=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ni=class extends fe{constructor(){super(...arguments),this.text=""}render(){return K`${this.template()}`}template(){return this.text?K`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ni.styles=[Ce,Oi],Ii([Oe()],Ni.prototype,"text",void 0),Ni=Ii([Se("wui-separator")],Ni)},9742:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,o=s(e),a=o[0],c=o[1],l=new i(function(e,t,n){return 3*(t+n)/4-n}(0,a,c)),u=0,d=c>0?a-4:a;for(n=0;n<d;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===c&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,l[u++]=255&t),1===c&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,o=[],a=16383,s=0,l=r-i;s<l;s+=a)o.push(c(e,s,s+a>l?l:s+a));return 1===i?(t=e[r-1],o.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],o.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"=")),o.join("")};for(var n=[],r=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)n[a]=o[a],r[o.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,r){for(var i,o,a=[],s=t;s<r;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},8764:function(e,t,n){"use strict";const r=n(9742),i=n(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.lW=c,t.h2=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return d(e)}return l(e,t,n)}function l(e,t,n){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|g(e,t);let r=s(n);const i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Z(e,Uint8Array)){const t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Z(e,ArrayBuffer)||e&&Z(e.buffer,ArrayBuffer))return f(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Z(e,SharedArrayBuffer)||e&&Z(e.buffer,SharedArrayBuffer)))return f(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return c.from(r,t,n);const i=function(e){if(c.isBuffer(e)){const t=0|p(e.length),n=s(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||Q(e.length)?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return u(e),s(e<0?0:0|p(e))}function h(e){const t=e.length<0?0:0|p(e.length),n=s(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function f(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,c.prototype),r}function p(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function g(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Z(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(e).length;default:if(i)return r?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return P(this,t,n);case"ascii":return A(this,t,n);case"latin1":case"binary":return $(this,t,n);case"base64":return S(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Q(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=c.from(t,r)),c.isBuffer(t))return 0===t.length?-1:y(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,r,i){let o,a=1,s=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,n/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let r=-1;for(o=n;o<s;o++)if(l(e,o)===l(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===c)return r*a}else-1!==r&&(o-=o-r),r=-1}else for(n+c>s&&(n=s-c),o=n;o>=0;o--){let n=!0;for(let r=0;r<c;r++)if(l(e,o+r)!==l(t,r)){n=!1;break}if(n)return o}return-1}function v(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let a;for(r>o/2&&(r=o/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(Q(r))return a;e[n+a]=r}return a}function x(e,t,n,r){return K(G(t,e.length-n),e,n,r)}function C(e,t,n,r){return K(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function k(e,t,n,r){return K(V(t),e,n,r)}function E(e,t,n,r){return K(function(e,t){let n,r,i;const o=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function S(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function P(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=n){let n,r,s,c;switch(a){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(o=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=e[i+1],r=e[i+2],s=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=a}return function(e){const t=e.length;if(t<=_)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=_));return n}(r)}c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,n){return l(e,t,n)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,n){return function(e,t,n){return u(e),e<=0?s(e):void 0!==t?"string"==typeof n?s(e).fill(t,n):s(e).fill(t):s(e)}(e,t,n)},c.allocUnsafe=function(e){return d(e)},c.allocUnsafeSlow=function(e){return d(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(Z(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),Z(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=c.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(Z(t,Uint8Array))i+t.length>r.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},c.byteLength=g,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?P(this,0,e):m.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const n=t.h2;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"},o&&(c.prototype[o]=c.prototype.inspect),c.prototype.compare=function(e,t,n,r,i){if(Z(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0);const s=Math.min(o,a),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<s;++e)if(l[e]!==u[e]){o=l[e],a=u[e];break}return o<a?-1:a<o?1:0},c.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},c.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return v(this,e,t,n);case"utf8":case"utf-8":return x(this,e,t,n);case"ascii":case"latin1":case"binary":return C(this,e,t,n);case"base64":return k(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const _=4096;function A(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function $(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function O(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=Y[e[r]];return i}function I(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function N(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function T(e,t,n,r,i,o){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function R(e,t,n,r,i){F(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function M(e,t,n,r,i){F(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function U(e,t,n,r,o){return t=+t,n>>>=0,o||j(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function L(e,t,n,r,o){return t=+t,n>>>=0,o||j(e,0,n,8),i.write(e,t,n,r,52,8),n+8}c.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,c.prototype),r},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||N(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||N(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||N(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||N(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=X((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||H(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),c.prototype.readBigUInt64BE=X((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||H(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),c.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},c.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||N(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return e>>>=0,t||N(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||N(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){e>>>=0,t||N(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=X((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||H(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=X((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||H(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||N(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||N(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||N(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||N(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||T(this,e,t,n,Math.pow(2,8*n)-1,0);let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||T(this,e,t,n,Math.pow(2,8*n)-1,0);let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=X((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=X((function(e,t=0){return M(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}let i=0,o=1,a=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+n},c.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}let i=n-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=X((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=X((function(e,t=0){return M(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,n){return U(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return U(this,e,t,!1,n)},c.prototype.writeDoubleLE=function(e,t,n){return L(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return L(this,e,t,!1,n)},c.prototype.copy=function(e,t,n,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},c.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=c.isBuffer(e)?e:c.from(e,r),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%a]}return this};const B={};function z(e,t,n){B[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function D(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function F(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new B.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){W(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||H(t,e.length-(n+1))}(r,i,o)}function W(e,t){if("number"!=typeof e)throw new B.ERR_INVALID_ARG_TYPE(t,"number",e)}function H(e,t,n){if(Math.floor(e)!==e)throw W(e,n),new B.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new B.ERR_BUFFER_OUT_OF_BOUNDS;throw new B.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),z("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=D(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=D(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function G(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function V(e){return r.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function K(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function Z(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Q(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function X(e){return"undefined"==typeof BigInt?J:e}function J(){throw new Error("BigInt not supported")}},4020:function(e){"use strict";var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),r=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n)||[],r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var i=o(n[0]);i!==n[0]&&(t[n[0]]=i)}n=r.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var c=a[s];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},5987:function(e){"use strict";var t={single_source_shortest_paths:function(e,n,r){var i={},o={};o[n]=0;var a,s,c,l,u,d,h,f=t.PriorityQueue.make();for(f.push(n,0);!f.empty();)for(c in s=(a=f.pop()).value,l=a.cost,u=e[s]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=o[c],(void 0===o[c]||h>d)&&(o[c]=d,f.push(c,d),i[c]=s));if(void 0!==r&&void 0===o[r]){var p=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,n,r){var i=t.single_source_shortest_paths(e,n,r);return t.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var n,r=t.PriorityQueue,i={};for(n in e=e||{},r)r.hasOwnProperty(n)&&(i[n]=r[n]);return i.queue=[],i.sorter=e.sorter||r.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},2378:function(e){"use strict";e.exports=function(e){for(var t=[],n=e.length,r=0;r<n;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319&&n>r+1){var o=e.charCodeAt(r+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,r+=1)}i<128?t.push(i):i<2048?(t.push(i>>6|192),t.push(63&i|128)):i<55296||i>=57344&&i<65536?(t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128)):i>=65536&&i<=1114111?(t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},6729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,r,o,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new i(r,o||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,a=new Array(o);i<o;i++)a[i]=r[i].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,i,o,a){var s=n?n+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,o),!0;case 6:return u.fn.call(u.context,t,r,i,o,a),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,f=u.length;for(l=0;l<f;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,i);break;default:if(!c)for(h=1,c=new Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||i&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s},2806:function(e){"use strict";e.exports=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var a=r[o],s=e[a];(i?-1!==t.indexOf(a):t(a,s,e))&&(n[a]=s)}return n}},645:function(e,t){t.read=function(e,t,n,r,i){var o,a,s=8*i-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,h=n?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=r;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-l;else{if(o===c)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,r),o-=l}return(f?-1:1)*a*Math.pow(2,o-r)},t.write=function(e,t,n,r,i,o){var a,s,c,l=8*o-i-1,u=(1<<l)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+d>=1?h/c:h*Math.pow(2,1-d))*c>=2&&(a++,c/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*c-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[n+f]=255&s,f+=p,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;e[n+f]=255&a,f+=p,a/=256,l-=8);e[n+f-p]|=128*g}},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],l=!1,u=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||l||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2592:function(e,t,n){const r=n(7138),i=n(5115),o=n(6907),a=n(3776);function s(e,t,n,o,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!r())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=t,t=o=void 0):2!==c||t.getContext||(o=n,n=t,t=void 0),new Promise((function(r,a){try{const a=i.create(n,o);r(e(a,t,o))}catch(e){a(e)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(a=n,n=t,t=o=void 0):3===c&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=n,n=t,t=void 0));try{const r=i.create(n,o);a(null,e(r,t,o))}catch(e){a(e)}}t.create=i.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,(function(e,t,n){return a.render(e,n)}))},7138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},1845:function(e,t,n){const r=n(242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,n=r(e),i=145===n?26:2*Math.ceil((n-13)/(2*t-2)),o=[n-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||n.push([r[e],r[t]]);return n}},8260:function(e,t,n){const r=n(6910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=r.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*i.indexOf(this.data[t]);n+=i.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},7245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},3280:function(e){function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},3424:function(e,t,n){const r=n(2378),i=n(6910);function o(e){this.mode=i.BYTE,"string"==typeof e&&(e=r(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},e.exports=o},5393:function(e,t,n){const r=n(4908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case r.L:return i[4*(e-1)+0];case r.M:return i[4*(e-1)+1];case r.Q:return i[4*(e-1)+2];case r.H:return i[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case r.L:return o[4*(e-1)+0];case r.M:return o[4*(e-1)+1];case r.Q:return o[4*(e-1)+2];case r.H:return o[4*(e-1)+3];default:return}}},4908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(e){return n}}},6526:function(e,t,n){const r=n(242).getSymbolSize;t.getPositions=function(e){const t=r(e);return[[0,0],[t-7,0],[0,t-7]]}},1642:function(e,t,n){const r=n(242),i=r.getBCHDigit(1335);t.getEncodedBits=function(e,t){const n=e.bit<<3|t;let o=n<<10;for(;r.getBCHDigit(o)-i>=0;)o^=1335<<r.getBCHDigit(o)-i;return 21522^(n<<10|o)}},9729:function(e,t){const n=new Uint8Array(512),r=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)n[t]=e,r[e]=t,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)n[e]=n[e-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},t.exp=function(e){return n[e]},t.mul=function(e,t){return 0===e||0===t?0:n[r[e]+r[t]]}},5442:function(e,t,n){const r=n(6910),i=n(242);function o(e){this.mode=r.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=i.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}},e.exports=o},7126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function n(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(n+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return n*r%2+n*r%3==0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let n=0,r=0,i=0,o=null,a=null;for(let s=0;s<t;s++){r=i=0,o=a=null;for(let c=0;c<t;c++){let t=e.get(s,c);t===o?r++:(r>=5&&(n+=r-5+3),o=t,r=1),t=e.get(c,s),t===a?i++:(i>=5&&(n+=i-5+3),a=t,i=1)}r>=5&&(n+=r-5+3),i>=5&&(n+=i-5+3)}return n},t.getPenaltyN2=function(e){const t=e.size;let n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){const t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);4!==t&&0!==t||n++}return 3*n},t.getPenaltyN3=function(e){const t=e.size;let n=0,r=0,i=0;for(let o=0;o<t;o++){r=i=0;for(let a=0;a<t;a++)r=r<<1&2047|e.get(o,a),a>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|e.get(a,o),a>=10&&(1488===i||93===i)&&n++}return 40*n},t.getPenaltyN4=function(e){let t=0;const n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return 10*Math.abs(Math.ceil(100*t/n/5)-10)},t.applyMask=function(e,t){const r=t.size;for(let i=0;i<r;i++)for(let o=0;o<r;o++)t.isReserved(o,i)||t.xor(o,i,n(e,o,i))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let i=0,o=1/0;for(let a=0;a<r;a++){n(a),t.applyMask(a,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),r<o&&(o=r,i=a)}return i}},6910:function(e,t,n){const r=n(3114),i=n(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!r.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(e){return n}}},1085:function(e,t,n){const r=n(6910);function i(e){this.mode=r.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);const i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,3*i+1))},e.exports=i},6143:function(e,t,n){const r=n(9729);t.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)n[i+o]^=r.mul(e[i],t[o]);return n},t.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const e=n[0];for(let i=0;i<t.length;i++)n[i]^=r.mul(t[i],e);let i=0;for(;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},t.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let i=0;i<e;i++)n=t.mul(n,new Uint8Array([1,r.exp(i)]));return n}},5115:function(e,t,n){const r=n(242),i=n(4908),o=n(7245),a=n(3280),s=n(1845),c=n(6526),l=n(7126),u=n(5393),d=n(2882),h=n(3103),f=n(1642),p=n(6910),g=n(6130);function m(e,t,n){const r=e.size,i=f.getEncodedBits(t,n);let o,a;for(o=0;o<15;o++)a=1==(i>>o&1),o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(r-15+o,8,a,!0),o<8?e.set(8,r-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(r-8,8,1,!0)}function b(e,t,n,i){let f;if(Array.isArray(e))f=g.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let r=t;if(!r){const t=g.rawSplit(e);r=h.getBestVersionForData(t,n)}f=g.fromString(e,r||40)}}const b=h.getBestVersionForData(f,n);if(!b)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<b)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+b+".\n")}else t=b;const w=function(e,t,n){const i=new o;n.forEach((function(t){i.put(t.mode.bit,4),i.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(i)}));const a=8*(r.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t));for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);const s=(a-i.getLengthInBits())/8;for(let e=0;e<s;e++)i.put(e%2?17:236,8);return function(e,t,n){const i=r.getSymbolTotalCodewords(t),o=i-u.getTotalCodewordsCount(t,n),a=u.getBlocksCount(t,n),s=a-i%a,c=Math.floor(i/a),l=Math.floor(o/a),h=l+1,f=c-l,p=new d(f);let g=0;const m=new Array(a),b=new Array(a);let w=0;const y=new Uint8Array(e.buffer);for(let e=0;e<a;e++){const t=e<s?l:h;m[e]=y.slice(g,g+t),b[e]=p.encode(m[e]),g+=t,w=Math.max(w,t)}const v=new Uint8Array(i);let x,C,k=0;for(x=0;x<w;x++)for(C=0;C<a;C++)x<m[C].length&&(v[k++]=m[C][x]);for(x=0;x<f;x++)for(C=0;C<a;C++)v[k++]=b[C][x];return v}(i,e,t)}(t,n,f),y=r.getSymbolSize(t),v=new a(y);return function(e,t){const n=e.size,r=c.getPositions(t);for(let t=0;t<r.length;t++){const i=r[t][0],o=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)o+r<=-1||n<=o+r||(t>=0&&t<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===t||6===t)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,o+r,!0,!0):e.set(i+t,o+r,!1,!0))}}(v,t),function(e){const t=e.size;for(let n=8;n<t-8;n++){const t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}(v),function(e,t){const n=s.getPositions(t);for(let t=0;t<n.length;t++){const r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)-2===t||2===t||-2===n||2===n||0===t&&0===n?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}(v,t),m(v,n,0),t>=7&&function(e,t){const n=e.size,r=h.getEncodedBits(t);let i,o,a;for(let t=0;t<18;t++)i=Math.floor(t/3),o=t%3+n-8-3,a=1==(r>>t&1),e.set(i,o,a,!0),e.set(o,i,a,!0)}(v,t),function(e,t){const n=e.size;let r=-1,i=n-1,o=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;a<t.length&&(r=1==(t[a]>>>o&1)),e.set(i,s-n,r),o--,-1===o&&(a++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}(v,w),isNaN(i)&&(i=l.getBestMask(v,m.bind(null,v,n))),l.applyMask(i,v),m(v,n,i),{modules:v,version:t,errorCorrectionLevel:n,maskPattern:i,segments:f}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let n,o,a=i.M;return void 0!==t&&(a=i.from(t.errorCorrectionLevel,i.M),n=h.from(t.version),o=l.from(t.maskPattern),t.toSJISFunc&&r.setToSJISFunction(t.toSJISFunc)),b(e,n,a,o)}},2882:function(e,t,n){const r=n(6143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const e=new Uint8Array(this.degree);return e.set(n,i),e}return n},e.exports=i},7007:function(e,t){const n="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";t.KANJI=new RegExp(r,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(i,"g"),t.NUMERIC=new RegExp(n,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+r+"$"),a=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},6130:function(e,t,n){const r=n(6910),i=n(1085),o=n(8260),a=n(3424),s=n(5442),c=n(7007),l=n(242),u=n(5987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,n){const r=[];let i;for(;null!==(i=e.exec(n));)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function f(e){const t=h(c.NUMERIC,r.NUMERIC,e),n=h(c.ALPHANUMERIC,r.ALPHANUMERIC,e);let i,o;return l.isKanjiModeEnabled()?(i=h(c.BYTE,r.BYTE,e),o=h(c.KANJI,r.KANJI,e)):(i=h(c.BYTE_KANJI,r.BYTE,e),o=[]),t.concat(n,i,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function p(e,t){switch(t){case r.NUMERIC:return i.getBitsLength(e);case r.ALPHANUMERIC:return o.getBitsLength(e);case r.KANJI:return s.getBitsLength(e);case r.BYTE:return a.getBitsLength(e)}}function g(e,t){let n;const c=r.getBestModeForData(e);if(n=r.from(t,c),n!==r.BYTE&&n.bit<c.bit)throw new Error('"'+e+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(c));switch(n!==r.KANJI||l.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new i(e);case r.ALPHANUMERIC:return new o(e);case r.KANJI:return new s(e);case r.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e}),[])},t.fromString=function(e,n){const i=function(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n];switch(i.mode){case r.NUMERIC:t.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.ALPHANUMERIC:t.push([i,{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.KANJI:t.push([i,{data:i.data,mode:r.BYTE,length:d(i.data)}]);break;case r.BYTE:t.push([{data:i.data,mode:r.BYTE,length:d(i.data)}])}}return t}(f(e,l.isKanjiModeEnabled())),o=function(e,t){const n={},i={start:{}};let o=["start"];for(let a=0;a<e.length;a++){const s=e[a],c=[];for(let e=0;e<s.length;e++){const l=s[e],u=""+a+e;c.push(u),n[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){const a=o[e];n[a]&&n[a].node.mode===l.mode?(i[a][u]=p(n[a].lastCount+l.length,l.mode)-p(n[a].lastCount,l.mode),n[a].lastCount+=l.length):(n[a]&&(n[a].lastCount=l.length),i[a][u]=p(l.length,l.mode)+4+r.getCharCountIndicator(l.mode,t))}}o=c}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:n}}(i,n),a=u.find_path(o.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(o.table[a[e]].node);return t.fromArray(s.reduce((function(e,t){const n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[]))},t.rawSplit=function(e){return t.fromArray(f(e,l.isKanjiModeEnabled()))}},242:function(e,t){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return r[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');n=e},t.isKanjiModeEnabled=function(){return void 0!==n},t.toSJIS=function(e){return n(e)}},3114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},3103:function(e,t,n){const r=n(242),i=n(5393),o=n(4908),a=n(6910),s=n(3114),c=r.getBCHDigit(7973);function l(e,t){return a.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach((function(e){const r=l(e.mode,t);n+=r+e.getBitsLength()})),n}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,n){if(!s.isValid(e))throw new Error("Invalid QR Code version");void 0===n&&(n=a.BYTE);const o=8*(r.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t));if(n===a.MIXED)return o;const c=o-l(n,e);switch(n){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,n){let r;const i=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(u(e,r)<=t.getCapacity(r,n,a.MIXED))return r}(e,i);if(0===e.length)return 1;r=e[0]}else r=e;return function(e,n,r){for(let i=1;i<=40;i++)if(n<=t.getCapacity(i,r,e))return i}(r.mode,r.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;r.getBCHDigit(t)-c>=0;)t^=7973<<r.getBCHDigit(t)-c;return e<<12|t}},6907:function(e,t,n){const r=n(9653);t.render=function(e,t,n){let i=n,o=t;void 0!==i||t&&t.getContext||(i=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),i=r.getOptions(i);const a=r.getImageWidth(e.modules.size,i),s=o.getContext("2d"),c=s.createImageData(a,a);return r.qrToImageData(c.data,e,i),function(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+"px",t.style.width=n+"px"}(s,o,a),s.putImageData(c,0,0),o},t.renderToDataURL=function(e,n,r){let i=r;void 0!==i||n&&n.getContext||(i=n,n=void 0),i||(i={});const o=t.render(e,n,i),a=i.type||"image/png",s=i.rendererOpts||{};return o.toDataURL(a,s.quality)}},3776:function(e,t,n){const r=n(9653);function i(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function o(e,t,n){let r=e+t;return void 0!==n&&(r+=" "+n),r}t.render=function(e,t,n){const a=r.getOptions(t),s=e.modules.size,c=e.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(e,t,n){let r="",i=0,a=!1,s=0;for(let c=0;c<e.length;c++){const l=Math.floor(c%t),u=Math.floor(c/t);l||a||(a=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(r+=a?o("M",l+n,.5+u+n):o("m",i,0),i=0,a=!1),l+1<t&&e[c+1]||(r+=o("h",s),s=0)):i++}return r}(c,s,a.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof n&&n(null,f),f}},9653:function(e,t){function n(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:t,color:{dark:n(e.color.dark||"#000000ff"),light:n(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const i=n.modules.size,o=n.modules.data,a=t.getScale(i,r),s=Math.floor((i+2*r.margin)*a),c=r.margin*a,l=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let u=4*(t*s+n),d=r.color.light;t>=c&&n>=c&&t<s-c&&n<s-c&&(d=l[o[Math.floor((t-c)/a)*i+Math.floor((n-c)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},4448:function(e,t,n){"use strict";var r=n(7294),i=n(3840);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,t){l(e,t),l(e+"Capture",t)}function l(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},p={};function g(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function w(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(f,e)&&(h.test(e)?p[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,w);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,w);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,w);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),_=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var T=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function M(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=R&&e[R]||e["@@iterator"])?e:null}var j,U=Object.assign;function L(e){if(void 0===j)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return"\n"+j+e}var B=!1;function z(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var c="\n"+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=a&&0<=s);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function D(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return z(e.type,!1);case 11:return z(e.type.render,!1);case 1:return z(e.type,!0);default:return""}}function F(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case k:return"Fragment";case C:return"Portal";case S:return"Profiler";case E:return"StrictMode";case $:return"Suspense";case O:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case A:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case I:return null!==(t=e.displayName||null)?t:F(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return F(e(t))}catch(e){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return F(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function V(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){Y(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ce(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var le,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((le=le||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var be=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function we(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,ke=null,Ee=null;function Se(e){if(e=yi(e)){if("function"!=typeof Ce)throw Error(o(280));var t=e.stateNode;t&&(t=xi(t),Ce(e.stateNode,e.type,t))}}function Pe(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Ae(e,t){return e(t)}function $e(){}var Oe=!1;function Ie(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Ae(e,t,n)}finally{Oe=!1,(null!==ke||null!==Ee)&&($e(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=xi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));return n}var Te=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Te=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ue){Te=!1}function Me(e,t,n,r,i,o,a,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var je=!1,Ue=null,Le=!1,Be=null,ze={onError:function(e){je=!0,Ue=e}};function De(e,t,n,r,i,o,a,s,c){je=!1,Ue=null,Me.apply(ze,arguments)}function Fe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function He(e){if(Fe(e)!==e)throw Error(o(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Fe(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ve=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Ze=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Ye=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null,at=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(st(e)/ct|0)|0},st=Math.log,ct=Math.LN2,lt=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!=(o&=a)&&(r=dt(o))}else 0!=(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=lt;return 0==(4194240&(lt<<=1))&&(lt=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function vt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var xt,Ct,kt,Et,St,Pt=!1,_t=[],At=null,$t=null,Ot=null,It=new Map,Nt=new Map,Tt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":It.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function jt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&null!==(t=yi(t))&&Ct(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ut(e){var t=wi(e.target);if(null!==t){var n=Fe(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void St(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&Ct(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Bt(e,t,n){Lt(e)&&n.delete(t)}function zt(){Pt=!1,null!==At&&Lt(At)&&(At=null),null!==$t&&Lt($t)&&($t=null),null!==Ot&&Lt(Ot)&&(Ot=null),It.forEach(Bt),Nt.forEach(Bt)}function Dt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zt)))}function Ft(e){function t(t){return Dt(t,e)}if(0<_t.length){Dt(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==At&&Dt(At,e),null!==$t&&Dt($t,e),null!==Ot&&Dt(Ot,e),It.forEach(t),Nt.forEach(t),n=0;n<Tt.length;n++)(r=Tt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&null===(n=Tt[0]).blockedOn;)Ut(n),null===n.blockedOn&&Tt.shift()}var Wt=v.ReactCurrentBatchConfig,Ht=!0;function qt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=1,Vt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Gt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=4,Vt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Vt(e,t,n,r){if(Ht){var i=Zt(e,t,n,r);if(null===i)Hr(e,t,r,Kt,n),Mt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return At=jt(At,e,t,n,r,i),!0;case"dragenter":return $t=jt($t,e,t,n,r,i),!0;case"mouseover":return Ot=jt(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return It.set(o,jt(It.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nt.set(o,jt(Nt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==i;){var o=yi(i);if(null!==o&&xt(o),null===(o=Zt(e,t,n,r))&&Hr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Kt=null;function Zt(e,t,n,r){if(Kt=null,null!==(e=wi(e=xe(r))))if(null===(t=Fe(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Yt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,cn,ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(ln),dn=U({},ln,{view:0,detail:0}),hn=on(dn),fn=U({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&"mousemove"===e.type?(an=e.screenX-cn.screenX,sn=e.screenY-cn.screenY):sn=an=0,cn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=on(fn),gn=on(U({},fn,{dataTransfer:0})),mn=on(U({},dn,{relatedTarget:0})),bn=on(U({},ln,{animationName:0,elapsedTime:0,pseudoElement:0})),wn=U({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(wn),vn=on(U({},ln,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Sn(){return En}var Pn=U({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Cn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=on(Pn),An=on(U({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=on(U({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),On=on(U({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=U({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(In),Tn=[9,13,27,32],Rn=u&&"CompositionEvent"in window,Mn=null;u&&"documentMode"in document&&(Mn=document.documentMode);var jn=u&&"TextEvent"in window&&!Mn,Un=u&&(!Rn||Mn&&8<Mn&&11>=Mn),Ln=String.fromCharCode(32),Bn=!1;function zn(e,t){switch(e){case"keyup":return-1!==Tn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Fn=!1,Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function qn(e,t,n,r){Pe(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Vn=null;function Kn(e){Lr(e,0)}function Zn(e){if(V(vi(e)))return e}function Qn(e,t){if("change"===e)return t}var Yn=!1;if(u){var Xn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"==typeof er.oninput}Xn=Jn}else Xn=!1;Yn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Vn=Gn=null)}function nr(e){if("value"===e.propertyName&&Zn(Vn)){var t=[];qn(t,Vn,e,xe(e)),Ie(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Vn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Zn(Vn)}function or(e,t){if("click"===e)return Zn(t)}function ar(e,t){if("input"===e||"change"===e)return Zn(t)}var sr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function cr(e,t){if(sr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=lr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=lr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=u&&"documentMode"in document&&11>=document.documentMode,mr=null,br=null,wr=null,yr=!1;function vr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==K(r)||(r="selectionStart"in(r=mr)&&fr(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},wr&&cr(wr,r)||(wr=r,0<(r=Gr(br,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},kr={},Er={};function Sr(e){if(kr[e])return kr[e];if(!Cr[e])return e;var t,n=Cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);var Pr=Sr("animationend"),_r=Sr("animationiteration"),Ar=Sr("animationstart"),$r=Sr("transitionend"),Or=new Map,Ir="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Or.set(e,t),c(t,[e])}for(var Tr=0;Tr<Ir.length;Tr++){var Rr=Ir[Tr];Nr(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Nr(Pr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Ar,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr($r,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Ur(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,c,l){if(De.apply(this,arguments),je){if(!je)throw Error(o(198));var u=Ue;je=!1,Ue=null,Le||(Le=!0,Be=u)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;Ur(i,s,l),o=c}else for(a=0;a<r.length;a++){if(c=(s=r[a]).instance,l=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;Ur(i,s,l),o=c}}}if(Le)throw e=Be,Le=!1,Be=null,e}function Br(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function zr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[Dr]){e[Dr]=!0,a.forEach((function(t){"selectionchange"!==t&&(jr.has(t)||zr(t,!1,e),zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Dr]||(t[Dr]=!0,zr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Qt(t)){case 1:var i=qt;break;case 4:i=Gt;break;default:i=Vt}n=i.bind(null,t,n,e),i=void 0,!Te||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&((c=a.stateNode.containerInfo)===i||8===c.nodeType&&c.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=wi(s)))return;if(5===(c=a.tag)||6===c){r=o=a;continue e}s=s.parentNode}}r=r.return}Ie((function(){var r=o,i=xe(n),a=[];e:{var s=Or.get(e);if(void 0!==s){var c=un,l=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":c=_n;break;case"focusin":l="focus",c=mn;break;case"focusout":l="blur",c=mn;break;case"beforeblur":case"afterblur":c=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=$n;break;case Pr:case _r:case Ar:c=bn;break;case $r:c=On;break;case"scroll":c=hn;break;case"wheel":c=Nn;break;case"copy":case"cut":case"paste":c=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=An}var u=0!=(4&t),d=!u&&"scroll"===e,h=u?null!==s?s+"Capture":null:s;u=[];for(var f,p=r;null!==p;){var g=(f=p).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==h&&null!=(g=Ne(p,h))&&u.push(qr(p,g,f))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),a.push({event:s,listeners:u}))}}if(0==(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ve||!(l=n.relatedTarget||n.fromElement)||!wi(l)&&!l[pi])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(l=(l=n.relatedTarget||n.toElement)?wi(l):null)&&(l!==(d=Fe(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(c=null,l=r),c!==l)){if(u=pn,g="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=An,g="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==c?s:vi(c),f=null==l?s:vi(l),(s=new u(g,p+"leave",c,n,i)).target=d,s.relatedTarget=f,g=null,wi(i)===r&&((u=new u(h,p+"enter",l,n,i)).target=f,u.relatedTarget=d,g=u),d=g,c&&l)e:{for(h=l,p=0,f=u=c;f;f=Vr(f))p++;for(f=0,g=h;g;g=Vr(g))f++;for(;0<p-f;)u=Vr(u),p--;for(;0<f-p;)h=Vr(h),f--;for(;p--;){if(u===h||null!==h&&u===h.alternate)break e;u=Vr(u),h=Vr(h)}u=null}else u=null;null!==c&&Kr(a,s,c,u,!1),null!==l&&null!==d&&Kr(a,d,l,u,!0)}if("select"===(c=(s=r?vi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var m=Qn;else if(Hn(s))if(Yn)m=ar;else{m=ir;var b=rr}else(c=s.nodeName)&&"input"===c.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(m=or);switch(m&&(m=m(e,r))?qn(a,m,n,i):(b&&b(e,s,r),"focusout"===e&&(b=s._wrapperState)&&b.controlled&&"number"===s.type&&ee(s,"number",s.value)),b=r?vi(r):window,e){case"focusin":(Hn(b)||"true"===b.contentEditable)&&(mr=b,br=r,wr=null);break;case"focusout":wr=br=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,vr(a,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":vr(a,n,i)}var w;if(Rn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fn?zn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Un&&"ko"!==n.locale&&(Fn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Fn&&(w=en()):(Xt="value"in(Yt=i)?Yt.value:Yt.textContent,Fn=!0)),0<(b=Gr(r,y)).length&&(y=new vn(y,e,null,n,i),a.push({event:y,listeners:b}),(w||null!==(w=Dn(n)))&&(y.data=w))),(w=jn?function(e,t){switch(e){case"compositionend":return Dn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Ln);case"textInput":return(e=t.data)===Ln&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Fn)return"compositionend"===e||!Rn&&zn(e,t)?(e=en(),Jt=Xt=Yt=null,Fn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Un&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=Gr(r,"onBeforeInput")).length&&(i=new vn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=w)}Lr(a,t)}))}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ne(e,n))&&r.unshift(qr(e,o,i)),null!=(o=Ne(e,t))&&r.push(qr(e,o,i))),e=e.return}return r}function Vr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(null!==c&&c===r)break;5===s.tag&&null!==l&&(s=l,i?null!=(c=Ne(n,o))&&a.unshift(qr(n,c,s)):i||null!=(c=Ne(n,o))&&a.push(qr(n,c,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Zr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Yr(e){return("string"==typeof e?e:""+e).replace(Zr,"\n").replace(Qr,"")}function Xr(e,t,n){if(t=Yr(t),Yr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"==typeof setTimeout?setTimeout:void 0,ii="function"==typeof clearTimeout?clearTimeout:void 0,oi="function"==typeof Promise?Promise:void 0,ai="function"==typeof queueMicrotask?queueMicrotask:void 0!==oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function ci(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ft(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ft(t)}function li(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),hi="__reactFiber$"+di,fi="__reactProps$"+di,pi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,bi="__reactHandles$"+di;function wi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[hi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[hi]||e[pi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function xi(e){return e[fi]||null}var Ci=[],ki=-1;function Ei(e){return{current:e}}function Si(e){0>ki||(e.current=Ci[ki],Ci[ki]=null,ki--)}function Pi(e,t){ki++,Ci[ki]=e.current,e.current=t}var _i={},Ai=Ei(_i),$i=Ei(!1),Oi=_i;function Ii(e,t){var n=e.type.contextTypes;if(!n)return _i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ni(e){return null!=e.childContextTypes}function Ti(){Si($i),Si(Ai)}function Ri(e,t,n){if(Ai.current!==_i)throw Error(o(168));Pi(Ai,t),Pi($i,n)}function Mi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return U({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_i,Oi=Ai.current,Pi(Ai,e),Pi($i,$i.current),!0}function Ui(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Mi(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Si($i),Si(Ai),Pi(Ai,e)):Si($i),Pi($i,n)}var Li=null,Bi=!1,zi=!1;function Di(e){null===Li?Li=[e]:Li.push(e)}function Fi(){if(!zi&&null!==Li){zi=!0;var e=0,t=yt;try{var n=Li;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Li=null,Bi=!1}catch(t){throw null!==Li&&(Li=Li.slice(e+1)),Ve(Je,Fi),t}finally{yt=t,zi=!1}}return null}var Wi=[],Hi=0,qi=null,Gi=0,Vi=[],Ki=0,Zi=null,Qi=1,Yi="";function Xi(e,t){Wi[Hi++]=Gi,Wi[Hi++]=qi,qi=e,Gi=t}function Ji(e,t,n){Vi[Ki++]=Qi,Vi[Ki++]=Yi,Vi[Ki++]=Zi,Zi=e;var r=Qi;e=Yi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,Yi=o+e}else Qi=1<<o|n<<i|r,Yi=e}function eo(e){null!==e.return&&(Xi(e,1),Ji(e,1,0))}function to(e){for(;e===qi;)qi=Wi[--Hi],Wi[Hi]=null,Gi=Wi[--Hi],Wi[Hi]=null;for(;e===Zi;)Zi=Vi[--Ki],Vi[Ki]=null,Yi=Vi[--Ki],Vi[Ki]=null,Qi=Vi[--Ki],Vi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Nl(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=li(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Zi?{id:Qi,overflow:Yi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nl(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function co(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function lo(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(co(e))throw Error(o(418));t=li(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(co(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function ho(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(co(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=li(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=li(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?li(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=li(e.nextSibling)}function po(){ro=no=null,io=!1}function go(e){null===oo?oo=[e]:oo.push(e)}var mo=v.ReactCurrentBatchConfig;function bo(e,t){if(e&&e.defaultProps){for(var n in t=U({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var wo=Ei(null),yo=null,vo=null,xo=null;function Co(){xo=vo=yo=null}function ko(e){var t=wo.current;Si(wo),e._currentValue=t}function Eo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function So(e,t){yo=e,xo=vo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Po(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},null===vo){if(null===yo)throw Error(o(308));vo=e,yo.dependencies={lanes:0,firstContext:e}}else vo=vo.next=e;return t}var _o=null;function Ao(e){null===_o?_o=[e]:_o.push(e)}function $o(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ao(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oo(e,r)}function Oo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Io=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ro(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&$c)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oo(e,n)}return null===(i=r.interleaved)?(t.next=t,Ao(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oo(e,n)}function jo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var i=e.updateQueue;Io=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var c=s,l=c.next;c.next=null,null===a?o=l:a.next=l,a=c;var u=e.alternate;null!==u&&(s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c)}if(null!==o){var d=i.baseState;for(a=0,u=l=c=null,s=o;;){var h=s.lane,f=s.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,g=s;switch(h=t,f=n,g.tag){case 1:if("function"==typeof(p=g.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=g.payload)?p.call(f,d,h):p))break e;d=U({},d,h);break e;case 2:Io=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(l=u=f,c=d):u=u.next=f,a|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Uc|=a,e.lanes=a,e.memoizedState=d}}function Bo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(o(191,i));i.call(r)}}}var zo=(new r.Component).refs;function Do(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:U({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return!!(e=e._reactInternals)&&Fe(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tl(),i=nl(e),o=Ro(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=Mo(e,o,i))&&(rl(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tl(),i=nl(e),o=Ro(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=Mo(e,o,i))&&(rl(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tl(),r=nl(e),i=Ro(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Mo(e,i,r))&&(rl(t,e,r,n),jo(t,e,r))}};function Wo(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!(t.prototype&&t.prototype.isPureReactComponent&&cr(n,r)&&cr(i,o))}function Ho(e,t,n){var r=!1,i=_i,o=t.contextType;return"object"==typeof o&&null!==o?o=Po(o):(i=Ni(t)?Oi:Ai.current,o=(r=null!=(r=t.contextTypes))?Ii(e,i):_i),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function Go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zo,No(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Po(o):(o=Ni(t)?Oi:Ai.current,i.context=Ii(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(Do(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&Fo.enqueueReplaceState(i,i.state,null),Lo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function Vo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;t===zo&&(t=i.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!=typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zo(e){return(0,e._init)(e._payload)}function Qo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rl(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function c(e,t,n,r){return null===t||6!==t.tag?((t=Ll(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===N&&Zo(o)===t.type)?((r=i(t,n.props)).ref=Vo(e,t,n),r.return=e,r):((r=Ml(n.type,n.key,n.props,null,e.mode,r)).ref=Vo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Bl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=jl(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Ll(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Ml(t.type,t.key,t.props,null,e.mode,n)).ref=Vo(e,null,t),n.return=e,n;case C:return(t=Bl(t,e.mode,n)).return=e,t;case N:return h(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=jl(t,e.mode,n,null)).return=e,t;Ko(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:c(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?l(e,t,n,r):null;case C:return n.key===i?u(e,t,n,r):null;case N:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||M(n))return null!==i?null:d(e,t,n,r,null);Ko(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return c(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case x:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case C:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return p(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,i,null);Ko(t,r)}return null}function g(i,o,s,c){for(var l=null,u=null,d=o,g=o=0,m=null;null!==d&&g<s.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var b=f(i,d,s[g],c);if(null===b){null===d&&(d=m);break}e&&d&&null===b.alternate&&t(i,d),o=a(b,o,g),null===u?l=b:u.sibling=b,u=b,d=m}if(g===s.length)return n(i,d),io&&Xi(i,g),l;if(null===d){for(;g<s.length;g++)null!==(d=h(i,s[g],c))&&(o=a(d,o,g),null===u?l=d:u.sibling=d,u=d);return io&&Xi(i,g),l}for(d=r(i,d);g<s.length;g++)null!==(m=p(d,i,g,s[g],c))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),o=a(m,o,g),null===u?l=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),io&&Xi(i,g),l}function m(i,s,c,l){var u=M(c);if("function"!=typeof u)throw Error(o(150));if(null==(c=u.call(c)))throw Error(o(151));for(var d=u=null,g=s,m=s=0,b=null,w=c.next();null!==g&&!w.done;m++,w=c.next()){g.index>m?(b=g,g=null):b=g.sibling;var y=f(i,g,w.value,l);if(null===y){null===g&&(g=b);break}e&&g&&null===y.alternate&&t(i,g),s=a(y,s,m),null===d?u=y:d.sibling=y,d=y,g=b}if(w.done)return n(i,g),io&&Xi(i,m),u;if(null===g){for(;!w.done;m++,w=c.next())null!==(w=h(i,w.value,l))&&(s=a(w,s,m),null===d?u=w:d.sibling=w,d=w);return io&&Xi(i,m),u}for(g=r(i,g);!w.done;m++,w=c.next())null!==(w=p(g,i,m,w.value,l))&&(e&&null!==w.alternate&&g.delete(null===w.key?m:w.key),s=a(w,s,m),null===d?u=w:d.sibling=w,d=w);return e&&g.forEach((function(e){return t(i,e)})),io&&Xi(i,m),u}return function e(r,o,a,c){if("object"==typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case x:e:{for(var l=a.key,u=o;null!==u;){if(u.key===l){if((l=a.type)===k){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===N&&Zo(l)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=Vo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===k?((o=jl(a.props.children,r.mode,c,a.key)).return=r,r=o):((c=Ml(a.type,a.key,a.props,null,r.mode,c)).ref=Vo(r,o,a),c.return=r,r=c)}return s(r);case C:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Bl(a,r.mode,c)).return=r,r=o}return s(r);case N:return e(r,o,(u=a._init)(a._payload),c)}if(te(a))return g(r,o,a,c);if(M(a))return m(r,o,a,c);Ko(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Ll(a,r.mode,c)).return=r,r=o),s(r)):n(r,o)}}var Yo=Qo(!0),Xo=Qo(!1),Jo={},ea=Ei(Jo),ta=Ei(Jo),na=Ei(Jo);function ra(e){if(e===Jo)throw Error(o(174));return e}function ia(e,t){switch(Pi(na,t),Pi(ta,e),Pi(ea,Jo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ce(null,"");break;default:t=ce(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Si(ea),Pi(ea,t)}function oa(){Si(ea),Si(ta),Si(na)}function aa(e){ra(na.current);var t=ra(ea.current),n=ce(t,e.type);t!==n&&(Pi(ta,e),Pi(ea,n))}function sa(e){ta.current===e&&(Si(ea),Si(ta))}var ca=Ei(0);function la(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function da(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var ha=v.ReactCurrentDispatcher,fa=v.ReactCurrentBatchConfig,pa=0,ga=null,ma=null,ba=null,wa=!1,ya=!1,va=0,xa=0;function Ca(){throw Error(o(321))}function ka(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function Ea(e,t,n,r,i,a){if(pa=a,ga=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ha.current=null===e||null===e.memoizedState?ss:cs,e=n(r,i),ya){a=0;do{if(ya=!1,va=0,25<=a)throw Error(o(301));a+=1,ba=ma=null,t.updateQueue=null,ha.current=ls,e=n(r,i)}while(ya)}if(ha.current=as,t=null!==ma&&null!==ma.next,pa=0,ba=ma=ga=null,wa=!1,t)throw Error(o(300));return e}function Sa(){var e=0!==va;return va=0,e}function Pa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ba?ga.memoizedState=ba=e:ba=ba.next=e,ba}function _a(){if(null===ma){var e=ga.alternate;e=null!==e?e.memoizedState:null}else e=ma.next;var t=null===ba?ga.memoizedState:ba.next;if(null!==t)ba=t,ma=e;else{if(null===e)throw Error(o(310));e={memoizedState:(ma=e).memoizedState,baseState:ma.baseState,baseQueue:ma.baseQueue,queue:ma.queue,next:null},null===ba?ga.memoizedState=ba=e:ba=ba.next=e}return ba}function Aa(e,t){return"function"==typeof t?t(e):t}function $a(e){var t=_a(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=ma,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var c=s=null,l=null,u=a;do{var d=u.lane;if((pa&d)===d)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(c=l=h,s=r):l=l.next=h,ga.lanes|=d,Uc|=d}u=u.next}while(null!==u&&u!==a);null===l?s=r:l.next=c,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,ga.lanes|=a,Uc|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oa(e){var t=_a(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(vs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ia(){}function Na(e,t){var n=ga,r=_a(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,vs=!0),r=r.queue,Ha(Ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ba&&1&ba.memoizedState.tag){if(n.flags|=2048,Ba(9,Ra.bind(null,n,r,i,t),void 0,null),null===Oc)throw Error(o(349));0!=(30&pa)||Ta(n,t,i)}return i}function Ta(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ga.updateQueue)?(t={lastEffect:null,stores:null},ga.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ra(e,t,n,r){t.value=n,t.getSnapshot=r,ja(t)&&Ua(e)}function Ma(e,t,n){return n((function(){ja(t)&&Ua(e)}))}function ja(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(e){return!0}}function Ua(e){var t=Oo(e,1);null!==t&&rl(t,e,1,-1)}function La(e){var t=Pa();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},t.queue=e,e=e.dispatch=ns.bind(null,ga,e),[t.memoizedState,e]}function Ba(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ga.updateQueue)?(t={lastEffect:null,stores:null},ga.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return _a().memoizedState}function Da(e,t,n,r){var i=Pa();ga.flags|=e,i.memoizedState=Ba(1|t,n,void 0,void 0===r?null:r)}function Fa(e,t,n,r){var i=_a();r=void 0===r?null:r;var o=void 0;if(null!==ma){var a=ma.memoizedState;if(o=a.destroy,null!==r&&ka(r,a.deps))return void(i.memoizedState=Ba(t,n,o,r))}ga.flags|=e,i.memoizedState=Ba(1|t,n,o,r)}function Wa(e,t){return Da(8390656,8,e,t)}function Ha(e,t){return Fa(2048,8,e,t)}function qa(e,t){return Fa(4,2,e,t)}function Ga(e,t){return Fa(4,4,e,t)}function Va(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ka(e,t,n){return n=null!=n?n.concat([e]):null,Fa(4,4,Va.bind(null,t,e),n)}function Za(){}function Qa(e,t){var n=_a();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ya(e,t){var n=_a();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xa(e,t,n){return 0==(21&pa)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),ga.lanes|=n,Uc|=n,e.baseState=!0),t)}function Ja(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{yt=n,fa.transition=r}}function es(){return _a().memoizedState}function ts(e,t,n){var r=nl(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rs(e)?is(t,n):null!==(n=$o(e,t,n,r))&&(rl(n,e,r,tl()),os(n,t,r))}function ns(e,t,n){var r=nl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rs(e))is(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var c=t.interleaved;return null===c?(i.next=i,Ao(t)):(i.next=c.next,c.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=$o(e,t,i,r))&&(rl(n,e,r,i=tl()),os(n,t,r))}}function rs(e){var t=e.alternate;return e===ga||null!==t&&t===ga}function is(e,t){ya=wa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function os(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wt(e,n)}}var as={readContext:Po,useCallback:Ca,useContext:Ca,useEffect:Ca,useImperativeHandle:Ca,useInsertionEffect:Ca,useLayoutEffect:Ca,useMemo:Ca,useReducer:Ca,useRef:Ca,useState:Ca,useDebugValue:Ca,useDeferredValue:Ca,useTransition:Ca,useMutableSource:Ca,useSyncExternalStore:Ca,useId:Ca,unstable_isNewReconciler:!1},ss={readContext:Po,useCallback:function(e,t){return Pa().memoizedState=[e,void 0===t?null:t],e},useContext:Po,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Da(4194308,4,Va.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Da(4194308,4,e,t)},useInsertionEffect:function(e,t){return Da(4,2,e,t)},useMemo:function(e,t){var n=Pa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ts.bind(null,ga,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Pa().memoizedState=e},useState:La,useDebugValue:Za,useDeferredValue:function(e){return Pa().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=Ja.bind(null,e[1]),Pa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ga,i=Pa();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Oc)throw Error(o(349));0!=(30&pa)||Ta(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Wa(Ma.bind(null,r,a,e),[e]),r.flags|=2048,Ba(9,Ra.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Pa(),t=Oc.identifierPrefix;if(io){var n=Yi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=va++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=xa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cs={readContext:Po,useCallback:Qa,useContext:Po,useEffect:Ha,useImperativeHandle:Ka,useInsertionEffect:qa,useLayoutEffect:Ga,useMemo:Ya,useReducer:$a,useRef:za,useState:function(){return $a(Aa)},useDebugValue:Za,useDeferredValue:function(e){return Xa(_a(),ma.memoizedState,e)},useTransition:function(){return[$a(Aa)[0],_a().memoizedState]},useMutableSource:Ia,useSyncExternalStore:Na,useId:es,unstable_isNewReconciler:!1},ls={readContext:Po,useCallback:Qa,useContext:Po,useEffect:Ha,useImperativeHandle:Ka,useInsertionEffect:qa,useLayoutEffect:Ga,useMemo:Ya,useReducer:Oa,useRef:za,useState:function(){return Oa(Aa)},useDebugValue:Za,useDeferredValue:function(e){var t=_a();return null===ma?t.memoizedState=e:Xa(t,ma.memoizedState,e)},useTransition:function(){return[Oa(Aa)[0],_a().memoizedState]},useMutableSource:Ia,useSyncExternalStore:Na,useId:es,unstable_isNewReconciler:!1};function us(e,t){try{var n="",r=t;do{n+=D(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function hs(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var fs="function"==typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Ro(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qc||(qc=!0,Gc=r),hs(0,t)},n}function gs(e,t,n){(n=Ro(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){hs(0,t),"function"!=typeof r&&(null===Vc?Vc=new Set([this]):Vc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pl.bind(null,e,t,n),t.then(e,e))}function bs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ws(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ro(-1,1)).tag=2,Mo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=v.ReactCurrentOwner,vs=!1;function xs(e,t,n,r){t.child=null===e?Xo(t,null,n,r):Yo(t,e.child,n,r)}function Cs(e,t,n,r,i){n=n.render;var o=t.ref;return So(t,i),r=Ea(e,t,n,r,o,i),n=Sa(),null===e||vs?(io&&n&&eo(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function ks(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Tl(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ml(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Es(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:cr)(a,r)&&e.ref===t.ref)return qs(e,t,i)}return t.flags|=1,(e=Rl(o,r)).ref=t.ref,e.return=t,t.child=e}function Es(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(cr(o,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,qs(e,t,i);0!=(131072&e.flags)&&(vs=!0)}}return _s(e,t,n,r,i)}function Ss(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(Rc,Tc),Tc|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(Rc,Tc),Tc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pi(Rc,Tc),Tc|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pi(Rc,Tc),Tc|=r;return xs(e,t,i,n),t.child}function Ps(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,n,r,i){var o=Ni(n)?Oi:Ai.current;return o=Ii(t,o),So(t,i),n=Ea(e,t,n,r,o,i),r=Sa(),null===e||vs?(io&&r&&eo(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function As(e,t,n,r,i){if(Ni(n)){var o=!0;ji(t)}else o=!1;if(So(t,i),null===t.stateNode)Hs(e,t),Ho(t,n,r),Go(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,l=n.contextType;l="object"==typeof l&&null!==l?Po(l):Ii(t,l=Ni(n)?Oi:Ai.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||c!==l)&&qo(t,a,r,l),Io=!1;var h=t.memoizedState;a.state=h,Lo(t,r,a,i),c=t.memoizedState,s!==r||h!==c||$i.current||Io?("function"==typeof u&&(Do(t,n,u,r),c=t.memoizedState),(s=Io||Wo(t,n,s,r,h,c,l))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=l,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,To(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:bo(t.type,s),a.props=l,d=t.pendingProps,h=a.context,c="object"==typeof(c=n.contextType)&&null!==c?Po(c):Ii(t,c=Ni(n)?Oi:Ai.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||h!==c)&&qo(t,a,r,c),Io=!1,h=t.memoizedState,a.state=h,Lo(t,r,a,i);var p=t.memoizedState;s!==d||h!==p||$i.current||Io?("function"==typeof f&&(Do(t,n,f,r),p=t.memoizedState),(l=Io||Wo(t,n,l,r,h,p,c)||!1)?(u||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,c),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,c)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=l):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,o,i)}function $s(e,t,n,r,i,o){Ps(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&Ui(t,n,!1),qs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Yo(t,e.child,null,o),t.child=Yo(t,null,s,o)):xs(e,t,s,o),t.memoizedState=r.state,i&&Ui(t,n,!0),t.child}function Os(e){var t=e.stateNode;t.pendingContext?Ri(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ri(0,t.context,!1),ia(e,t.containerInfo)}function Is(e,t,n,r,i){return po(),go(i),t.flags|=256,xs(e,t,n,r),t.child}var Ns,Ts,Rs,Ms,js={dehydrated:null,treeContext:null,retryLane:0};function Us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ls(e,t,n){var r,i=t.pendingProps,a=ca.current,s=!1,c=0!=(128&t.flags);if((r=c)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Pi(ca,1&a),null===e)return lo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(c=i.children,e=i.fallback,s?(i=t.mode,s=t.child,c={mode:"hidden",children:c},0==(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=c):s=Ul(c,i,0,null),e=jl(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Us(n),t.memoizedState=js,e):Bs(t,c));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,zs(e,t,s,r=ds(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),(a=jl(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&Yo(t,e.child,null,s),t.child.memoizedState=Us(s),t.memoizedState=js,a);if(0==(1&t.mode))return zs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var c=r.dgst;return r=c,zs(e,t,s,r=ds(a=Error(o(419)),r,void 0))}if(c=0!=(s&e.childLanes),vs||c){if(null!==(r=Oc)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Oo(e,i),rl(r,e,i,-1))}return ml(),zs(e,t,s,r=ds(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Al.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=li(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Vi[Ki++]=Qi,Vi[Ki++]=Yi,Vi[Ki++]=Zi,Qi=e.id,Yi=e.overflow,Zi=t),(t=Bs(t,r.children)).flags|=4096,t)}(e,t,c,i,r,a,n);if(s){s=i.fallback,c=t.mode,r=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&c)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Rl(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Rl(r,s):(s=jl(s,c,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,c=null===(c=e.child.memoizedState)?Us(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~n,t.memoizedState=js,i}return e=(s=e.child).sibling,i=Rl(s,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Bs(e,t){return(t=Ul({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function zs(e,t,n,r){return null!==r&&go(r),Yo(t,e.child,null,n),(e=Bs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ds(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Eo(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ws(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xs(e,t,r.children,n),0!=(2&(r=ca.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ds(e,n,t);else if(19===e.tag)Ds(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pi(ca,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===la(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===la(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Uc|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Rl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vs(t),null;case 1:case 17:return Ni(t.type)&&Ti(),Vs(t),null;case 3:return r=t.stateNode,oa(),Si($i),Si(Ai),da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oo&&(sl(oo),oo=null))),Ts(e,t),Vs(t),null;case 5:sa(t);var i=ra(na.current);if(n=t.type,null!==e&&null!=t.stateNode)Rs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Vs(t),null}if(e=ra(ea.current),ho(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[hi]=t,r[fi]=a,e=0!=(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)Br(Mr[i],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Q(r,a),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Br("invalid",r);break;case"textarea":ie(r,a),Br("invalid",r)}for(var c in we(n,a),i=null,a)if(a.hasOwnProperty(c)){var l=a[c];"children"===c?"string"==typeof l?r.textContent!==l&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,l,e),i=["children",l]):"number"==typeof l&&r.textContent!==""+l&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,l,e),i=["children",""+l]):s.hasOwnProperty(c)&&null!=l&&"onScroll"===c&&Br("scroll",r)}switch(n){case"input":G(r),J(r,a,!0);break;case"textarea":G(r),ae(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[hi]=t,e[fi]=r,Ns(e,t,!1,!1),t.stateNode=e;e:{switch(c=ye(n,r),n){case"dialog":Br("cancel",e),Br("close",e),i=r;break;case"iframe":case"object":case"embed":Br("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)Br(Mr[i],e);i=r;break;case"source":Br("error",e),i=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),i=r;break;case"details":Br("toggle",e),i=r;break;case"input":Q(e,r),i=Z(e,r),Br("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),Br("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Br("invalid",e)}for(a in we(n,i),l=i)if(l.hasOwnProperty(a)){var u=l[a];"style"===a?me(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"==typeof u?("textarea"!==n||""!==u)&&he(e,u):"number"==typeof u&&he(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Br("scroll",e):null!=u&&y(e,a,u,c))}switch(n){case"input":G(e),J(e,r,!1);break;case"textarea":G(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Vs(t),null;case 6:if(e&&null!=t.stateNode)Ms(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));if(n=ra(na.current),ra(ea.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[hi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!=(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[hi]=t,t.stateNode=r}return Vs(t),null;case 13:if(Si(ca),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!=(1&t.mode)&&0==(128&t.flags))fo(),po(),t.flags|=98560,a=!1;else if(a=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[hi]=t}else po(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Vs(t),a=!1}else null!==oo&&(sl(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ca.current)?0===Mc&&(Mc=3):ml())),null!==t.updateQueue&&(t.flags|=4),Vs(t),null);case 4:return oa(),Ts(e,t),null===e&&Fr(t.stateNode.containerInfo),Vs(t),null;case 10:return ko(t.type._context),Vs(t),null;case 19:if(Si(ca),null===(a=t.memoizedState))return Vs(t),null;if(r=0!=(128&t.flags),null===(c=a.rendering))if(r)Gs(a,!1);else{if(0!==Mc||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=la(e))){for(t.flags|=128,Gs(a,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(c=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pi(ca,1&ca.current|2),t.child}e=e.sibling}null!==a.tail&&Ye()>Wc&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=la(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Gs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!c.alternate&&!io)return Vs(t),null}else 2*Ye()-a.renderingStartTime>Wc&&1073741824!==n&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=a.last)?n.sibling=c:t.child=c,a.last=c)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ye(),t.sibling=null,n=ca.current,Pi(ca,r?1&n|2:1&n),t):(Vs(t),null);case 22:case 23:return hl(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Tc)&&(Vs(t),6&t.subtreeFlags&&(t.flags|=8192)):Vs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Zs(e,t){switch(to(t),t.tag){case 1:return Ni(t.type)&&Ti(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oa(),Si($i),Si(Ai),da(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return sa(t),null;case 13:if(Si(ca),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));po()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Si(ca),null;case 4:return oa(),null;case 10:return ko(t.type._context),null;case 22:case 23:return hl(),null;default:return null}}Ns=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ts=function(){},Rs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ra(ea.current);var o,a=null;switch(n){case"input":i=Z(e,i),r=Z(e,r),a=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Jr)}for(u in we(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var c=i[u];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(c=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==c&&(null!=l||null!=c))if("style"===u)if(c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,c=c?c.__html:void 0,null!=l&&c!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Br("scroll",e),a||c===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ms=function(e,t,n,r){n!==r&&(t.flags|=4)};var Qs=!1,Ys=!1,Xs="function"==typeof WeakSet?WeakSet:Set,Js=null;function ec(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Sl(e,t,n)}else n.current=null}function tc(e,t,n){try{n()}catch(n){Sl(e,t,n)}}var nc=!1;function rc(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&tc(t,n,o)}i=i.next}while(i!==r)}}function ic(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oc(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ac(e){var t=e.alternate;null!==t&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&(delete t[hi],delete t[fi],delete t[gi],delete t[mi],delete t[bi]),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return 5===e.tag||3===e.tag||4===e.tag}function cc(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function lc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(lc(e,t,n),e=e.sibling;null!==e;)lc(e,t,n),e=e.sibling}function uc(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(uc(e,t,n),e=e.sibling;null!==e;)uc(e,t,n),e=e.sibling}var dc=null,hc=!1;function fc(e,t,n){for(n=n.child;null!==n;)pc(e,t,n),n=n.sibling}function pc(e,t,n){if(ot&&"function"==typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(e){}switch(n.tag){case 5:Ys||ec(n,t);case 6:var r=dc,i=hc;dc=null,fc(e,t,n),hc=i,null!==(dc=r)&&(hc?(e=dc,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dc.removeChild(n.stateNode));break;case 18:null!==dc&&(hc?(e=dc,n=n.stateNode,8===e.nodeType?ci(e.parentNode,n):1===e.nodeType&&ci(e,n),Ft(e)):ci(dc,n.stateNode));break;case 4:r=dc,i=hc,dc=n.stateNode.containerInfo,hc=!0,fc(e,t,n),dc=r,hc=i;break;case 0:case 11:case 14:case 15:if(!Ys&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!=(2&o)||0!=(4&o))&&tc(n,t,a),i=i.next}while(i!==r)}fc(e,t,n);break;case 1:if(!Ys&&(ec(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Sl(n,t,e)}fc(e,t,n);break;case 21:fc(e,t,n);break;case 22:1&n.mode?(Ys=(r=Ys)||null!==n.memoizedState,fc(e,t,n),Ys=r):fc(e,t,n);break;default:fc(e,t,n)}}function gc(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach((function(t){var r=$l.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function mc(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,c=s;e:for(;null!==c;){switch(c.tag){case 5:dc=c.stateNode,hc=!1;break e;case 3:case 4:dc=c.stateNode.containerInfo,hc=!0;break e}c=c.return}if(null===dc)throw Error(o(160));pc(a,s,i),dc=null,hc=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Sl(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mc(t,e),wc(e),4&r){try{rc(3,e,e.return),ic(3,e)}catch(t){Sl(e,e.return,t)}try{rc(5,e,e.return)}catch(t){Sl(e,e.return,t)}}break;case 1:mc(t,e),wc(e),512&r&&null!==n&&ec(n,n.return);break;case 5:if(mc(t,e),wc(e),512&r&&null!==n&&ec(n,n.return),32&e.flags){var i=e.stateNode;try{he(i,"")}catch(t){Sl(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,c=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===c&&"radio"===a.type&&null!=a.name&&Y(i,a),ye(c,s);var u=ye(c,a);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];"style"===d?me(i,h):"dangerouslySetInnerHTML"===d?de(i,h):"children"===d?he(i,h):y(i,d,h,u)}switch(c){case"input":X(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?ne(i,!!a.multiple,p,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(t){Sl(e,e.return,t)}}break;case 6:if(mc(t,e),wc(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){Sl(e,e.return,t)}}break;case 3:if(mc(t,e),wc(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ft(t.containerInfo)}catch(t){Sl(e,e.return,t)}break;case 4:default:mc(t,e),wc(e);break;case 13:mc(t,e),wc(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Fc=Ye())),4&r&&gc(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ys=(u=Ys)||d,mc(t,e),Ys=u):mc(t,e),wc(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!=(1&e.mode))for(Js=e,d=e.child;null!==d;){for(h=Js=d;null!==Js;){switch(p=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:rc(4,f,f.return);break;case 1:ec(f,f.return);var g=f.stateNode;if("function"==typeof g.componentWillUnmount){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(e){Sl(r,n,e)}}break;case 5:ec(f,f.return);break;case 22:if(null!==f.memoizedState){Cc(h);continue}}null!==p?(p.return=f,Js=p):Cc(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{i=h.stateNode,u?"function"==typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(c=h.stateNode,s=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,c.style.display=ge("display",s))}catch(t){Sl(e,e.return,t)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(t){Sl(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mc(t,e),wc(e),4&r&&gc(e);case 21:}}function wc(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(he(i,""),r.flags&=-33),uc(e,cc(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;lc(e,cc(e),a);break;default:throw Error(o(161))}}catch(t){Sl(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yc(e,t,n){Js=e,vc(e,t,n)}function vc(e,t,n){for(var r=0!=(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Qs;if(!a){var s=i.alternate,c=null!==s&&null!==s.memoizedState||Ys;s=Qs;var l=Ys;if(Qs=a,(Ys=c)&&!l)for(Js=i;null!==Js;)c=(a=Js).child,22===a.tag&&null!==a.memoizedState?kc(i):null!==c?(c.return=a,Js=c):kc(i);for(;null!==o;)Js=o,vc(o,t,n),o=o.sibling;Js=i,Qs=s,Ys=l}xc(e)}else 0!=(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):xc(e)}}function xc(e){for(;null!==Js;){var t=Js;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ys||ic(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ys)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bo(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Bo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bo(t,s,n)}break;case 5:var c=t.stateNode;if(null===n&&4&t.flags){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Ft(h)}}}break;default:throw Error(o(163))}Ys||512&t.flags&&oc(t)}catch(e){Sl(t,t.return,e)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function Cc(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kc(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ic(4,t)}catch(e){Sl(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Sl(t,i,e)}}var o=t.return;try{oc(t)}catch(e){Sl(t,o,e)}break;case 5:var a=t.return;try{oc(t)}catch(e){Sl(t,a,e)}}}catch(e){Sl(t,t.return,e)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Ec,Sc=Math.ceil,Pc=v.ReactCurrentDispatcher,_c=v.ReactCurrentOwner,Ac=v.ReactCurrentBatchConfig,$c=0,Oc=null,Ic=null,Nc=0,Tc=0,Rc=Ei(0),Mc=0,jc=null,Uc=0,Lc=0,Bc=0,zc=null,Dc=null,Fc=0,Wc=1/0,Hc=null,qc=!1,Gc=null,Vc=null,Kc=!1,Zc=null,Qc=0,Yc=0,Xc=null,Jc=-1,el=0;function tl(){return 0!=(6&$c)?Ye():-1!==Jc?Jc:Jc=Ye()}function nl(e){return 0==(1&e.mode)?1:0!=(2&$c)&&0!==Nc?Nc&-Nc:null!==mo.transition?(0===el&&(el=gt()),el):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function rl(e,t,n,r){if(50<Yc)throw Yc=0,Xc=null,Error(o(185));bt(e,n,r),0!=(2&$c)&&e===Oc||(e===Oc&&(0==(2&$c)&&(Lc|=n),4===Mc&&cl(e,Nc)),il(e,r),1===n&&0===$c&&0==(1&t.mode)&&(Wc=Ye()+500,Bi&&Fi()))}function il(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,c=i[a];-1===c?0!=(s&n)&&0==(s&r)||(i[a]=ft(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=ht(e,e===Oc?Nc:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Bi=!0,Di(e)}(ll.bind(null,e)):Di(ll.bind(null,e)),ai((function(){0==(6&$c)&&Fi()})),n=null;else{switch(vt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ol(n,ol.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ol(e,t){if(Jc=-1,el=0,0!=(6&$c))throw Error(o(327));var n=e.callbackNode;if(kl()&&e.callbackNode!==n)return null;var r=ht(e,e===Oc?Nc:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=bl(e,r);else{t=r;var i=$c;$c|=2;var a=gl();for(Oc===e&&Nc===t||(Hc=null,Wc=Ye()+500,fl(e,t));;)try{yl();break}catch(t){pl(e,t)}Co(),Pc.current=a,$c=i,null!==Ic?t=0:(Oc=null,Nc=0,t=Mc)}if(0!==t){if(2===t&&0!==(i=pt(e))&&(r=i,t=al(e,i)),1===t)throw n=jc,fl(e,0),cl(e,r),il(e,Ye()),n;if(6===t)cl(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=bl(e,r))&&0!==(a=pt(e))&&(r=a,t=al(e,a)),1===t))throw n=jc,fl(e,0),cl(e,r),il(e,Ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:Cl(e,Dc,Hc);break;case 3:if(cl(e,r),(130023424&r)===r&&10<(t=Fc+500-Ye())){if(0!==ht(e,0))break;if(((i=e.suspendedLanes)&r)!==r){tl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(Cl.bind(null,e,Dc,Hc),t);break}Cl(e,Dc,Hc);break;case 4:if(cl(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Ye()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sc(r/1960))-r)){e.timeoutHandle=ri(Cl.bind(null,e,Dc,Hc),r);break}Cl(e,Dc,Hc);break;default:throw Error(o(329))}}}return il(e,Ye()),e.callbackNode===n?ol.bind(null,e):null}function al(e,t){var n=zc;return e.current.memoizedState.isDehydrated&&(fl(e,t).flags|=256),2!==(e=bl(e,t))&&(t=Dc,Dc=n,null!==t&&sl(t)),e}function sl(e){null===Dc?Dc=e:Dc.push.apply(Dc,e)}function cl(e,t){for(t&=~Bc,t&=~Lc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function ll(e){if(0!=(6&$c))throw Error(o(327));kl();var t=ht(e,0);if(0==(1&t))return il(e,Ye()),null;var n=bl(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=al(e,r))}if(1===n)throw n=jc,fl(e,0),cl(e,t),il(e,Ye()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cl(e,Dc,Hc),il(e,Ye()),null}function ul(e,t){var n=$c;$c|=1;try{return e(t)}finally{0===($c=n)&&(Wc=Ye()+500,Bi&&Fi())}}function dl(e){null!==Zc&&0===Zc.tag&&0==(6&$c)&&kl();var t=$c;$c|=1;var n=Ac.transition,r=yt;try{if(Ac.transition=null,yt=1,e)return e()}finally{yt=r,Ac.transition=n,0==(6&($c=t))&&Fi()}}function hl(){Tc=Rc.current,Si(Rc)}function fl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ic)for(n=Ic.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:oa(),Si($i),Si(Ai),da();break;case 5:sa(r);break;case 4:oa();break;case 13:case 19:Si(ca);break;case 10:ko(r.type._context);break;case 22:case 23:hl()}n=n.return}if(Oc=e,Ic=e=Rl(e.current,null),Nc=Tc=t,Mc=0,jc=null,Bc=Lc=Uc=0,Dc=zc=null,null!==_o){for(t=0;t<_o.length;t++)if(null!==(r=(n=_o[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}_o=null}return e}function pl(e,t){for(;;){var n=Ic;try{if(Co(),ha.current=as,wa){for(var r=ga.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}wa=!1}if(pa=0,ba=ma=ga=null,ya=!1,va=0,_c.current=null,null===n||null===n.return){Mc=1,jc=t,Ic=null;break}e:{var a=e,s=n.return,c=n,l=t;if(t=Nc,c.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,d=c,h=d.tag;if(0==(1&d.mode)&&(0===h||11===h||15===h)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=bs(s);if(null!==p){p.flags&=-257,ws(p,s,c,0,t),1&p.mode&&ms(a,u,t),l=u;var g=(t=p).updateQueue;if(null===g){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}if(0==(1&t)){ms(a,u,t),ml();break e}l=Error(o(426))}else if(io&&1&c.mode){var b=bs(s);if(null!==b){0==(65536&b.flags)&&(b.flags|=256),ws(b,s,c,0,t),go(us(l,c));break e}}a=l=us(l,c),4!==Mc&&(Mc=2),null===zc?zc=[a]:zc.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,ps(0,l,t));break e;case 1:c=l;var w=a.type,y=a.stateNode;if(0==(128&a.flags)&&("function"==typeof w.getDerivedStateFromError||null!==y&&"function"==typeof y.componentDidCatch&&(null===Vc||!Vc.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,gs(a,c,t));break e}}a=a.return}while(null!==a)}xl(n)}catch(e){t=e,Ic===n&&null!==n&&(Ic=n=n.return);continue}break}}function gl(){var e=Pc.current;return Pc.current=as,null===e?as:e}function ml(){0!==Mc&&3!==Mc&&2!==Mc||(Mc=4),null===Oc||0==(268435455&Uc)&&0==(268435455&Lc)||cl(Oc,Nc)}function bl(e,t){var n=$c;$c|=2;var r=gl();for(Oc===e&&Nc===t||(Hc=null,fl(e,t));;)try{wl();break}catch(t){pl(e,t)}if(Co(),$c=n,Pc.current=r,null!==Ic)throw Error(o(261));return Oc=null,Nc=0,Mc}function wl(){for(;null!==Ic;)vl(Ic)}function yl(){for(;null!==Ic&&!Ze();)vl(Ic)}function vl(e){var t=Ec(e.alternate,e,Tc);e.memoizedProps=e.pendingProps,null===t?xl(e):Ic=t,_c.current=null}function xl(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Ks(n,t,Tc)))return void(Ic=n)}else{if(null!==(n=Zs(n,t)))return n.flags&=32767,void(Ic=n);if(null===e)return Mc=6,void(Ic=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ic=t);Ic=t=e}while(null!==t);0===Mc&&(Mc=5)}function Cl(e,t,n){var r=yt,i=Ac.transition;try{Ac.transition=null,yt=1,function(e,t,n,r){do{kl()}while(null!==Zc);if(0!=(6&$c))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Oc&&(Ic=Oc=null,Nc=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Kc||(Kc=!0,Ol(tt,(function(){return kl(),null}))),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=Ac.transition,Ac.transition=null;var s=yt;yt=1;var c=$c;$c|=4,_c.current=null,function(e,t){if(ei=Ht,fr(e=hr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var s=0,c=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||0!==i&&3!==h.nodeType||(c=s+i),h!==a||0!==r&&3!==h.nodeType||(l=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(p=h.firstChild);)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++u===i&&(c=s),f===a&&++d===r&&(l=s),null!==(p=h.nextSibling))break;f=(h=f).parentNode}h=p}n=-1===c||-1===l?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var g=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,b=g.memoizedState,w=t.stateNode,y=w.getSnapshotBeforeUpdate(t.elementType===t.type?m:bo(t.type,m),b);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(o(163))}}catch(e){Sl(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}g=nc,nc=!1}(e,n),bc(n,e),pr(ti),Ht=!!ei,ti=ei=null,e.current=n,yc(n,e,i),Qe(),$c=c,yt=s,Ac.transition=a}else e.current=n;if(Kc&&(Kc=!1,Zc=e,Qc=i),0===(a=e.pendingLanes)&&(Vc=null),function(e){if(ot&&"function"==typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),il(e,Ye()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(qc)throw qc=!1,e=Gc,Gc=null,e;0!=(1&Qc)&&0!==e.tag&&kl(),0!=(1&(a=e.pendingLanes))?e===Xc?Yc++:(Yc=0,Xc=e):Yc=0,Fi()}(e,t,n,r)}finally{Ac.transition=i,yt=r}return null}function kl(){if(null!==Zc){var e=vt(Qc),t=Ac.transition,n=yt;try{if(Ac.transition=null,yt=16>e?16:e,null===Zc)var r=!1;else{if(e=Zc,Zc=null,Qc=0,0!=(6&$c))throw Error(o(331));var i=$c;for($c|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!=(16&Js.flags)){var c=a.deletions;if(null!==c){for(var l=0;l<c.length;l++){var u=c[l];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:rc(8,d,a)}var h=d.child;if(null!==h)h.return=d,Js=h;else for(;null!==Js;){var f=(d=Js).sibling,p=d.return;if(ac(d),d===u){Js=null;break}if(null!==f){f.return=p,Js=f;break}Js=p}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(null!==m)}}Js=a}}if(0!=(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!=(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:rc(9,a,a.return)}var w=a.sibling;if(null!==w){w.return=a.return,Js=w;break e}Js=a.return}}var y=e.current;for(Js=y;null!==Js;){var v=(s=Js).child;if(0!=(2064&s.subtreeFlags)&&null!==v)v.return=s,Js=v;else e:for(s=y;null!==Js;){if(0!=(2048&(c=Js).flags))try{switch(c.tag){case 0:case 11:case 15:ic(9,c)}}catch(e){Sl(c,c.return,e)}if(c===s){Js=null;break e}var x=c.sibling;if(null!==x){x.return=c.return,Js=x;break e}Js=c.return}}if($c=i,Fi(),ot&&"function"==typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(e){}r=!0}return r}finally{yt=n,Ac.transition=t}}return!1}function El(e,t,n){e=Mo(e,t=ps(0,t=us(n,t),1),1),t=tl(),null!==e&&(bt(e,1,t),il(e,t))}function Sl(e,t,n){if(3===e.tag)El(e,e,n);else for(;null!==t;){if(3===t.tag){El(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Vc||!Vc.has(r))){t=Mo(t,e=gs(t,e=us(n,e),1),1),e=tl(),null!==t&&(bt(t,1,e),il(t,e));break}}t=t.return}}function Pl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tl(),e.pingedLanes|=e.suspendedLanes&n,Oc===e&&(Nc&n)===n&&(4===Mc||3===Mc&&(130023424&Nc)===Nc&&500>Ye()-Fc?fl(e,0):Bc|=n),il(e,t)}function _l(e,t){0===t&&(0==(1&e.mode)?t=1:(t=ut,0==(130023424&(ut<<=1))&&(ut=4194304)));var n=tl();null!==(e=Oo(e,t))&&(bt(e,t,n),il(e,n))}function Al(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_l(e,n)}function $l(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),_l(e,n)}function Ol(e,t){return Ve(e,t)}function Il(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nl(e,t,n,r){return new Il(e,t,n,r)}function Tl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rl(e,t){var n=e.alternate;return null===n?((n=Nl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ml(e,t,n,r,i,a){var s=2;if(r=e,"function"==typeof e)Tl(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case k:return jl(n.children,i,a,t);case E:s=8,i|=8;break;case S:return(e=Nl(12,n,t,2|i)).elementType=S,e.lanes=a,e;case $:return(e=Nl(13,n,t,i)).elementType=$,e.lanes=a,e;case O:return(e=Nl(19,n,t,i)).elementType=O,e.lanes=a,e;case T:return Ul(n,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case _:s=9;break e;case A:s=11;break e;case I:s=14;break e;case N:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Nl(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function jl(e,t,n,r){return(e=Nl(7,e,r,t)).lanes=n,e}function Ul(e,t,n,r){return(e=Nl(22,e,r,t)).elementType=T,e.lanes=n,e.stateNode={isHidden:!1},e}function Ll(e,t,n){return(e=Nl(6,e,null,t)).lanes=n,e}function Bl(e,t,n){return(t=Nl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zl(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,o,a,s,c){return e=new zl(e,t,n,s,c),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Nl(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(o),e}function Fl(e){if(!e)return _i;e:{if(Fe(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ni(n))return Mi(e,n,t)}return t}function Wl(e,t,n,r,i,o,a,s,c){return(e=Dl(n,r,!0,e,0,o,0,s,c)).context=Fl(null),n=e.current,(o=Ro(r=tl(),i=nl(n))).callback=null!=t?t:null,Mo(n,o,i),e.current.lanes=i,bt(e,i,r),il(e,r),e}function Hl(e,t,n,r){var i=t.current,o=tl(),a=nl(i);return n=Fl(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ro(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mo(i,t,a))&&(rl(e,i,a,o),jo(e,i,a)),a}function ql(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Gl(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vl(e,t){Gl(e,t),(e=e.alternate)&&Gl(e,t)}Ec=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$i.current)vs=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Os(t),po();break;case 5:aa(t);break;case 1:Ni(t.type)&&ji(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pi(wo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pi(ca,1&ca.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ls(e,t,n):(Pi(ca,1&ca.current),null!==(e=qs(e,t,n))?e.sibling:null);Pi(ca,1&ca.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Ws(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(ca,ca.current),r)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,n)}return qs(e,t,n)}(e,t,n);vs=0!=(131072&e.flags)}else vs=!1,io&&0!=(1048576&t.flags)&&Ji(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Ii(t,Ai.current);So(t,n),i=Ea(null,t,r,e,i,n);var a=Sa();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(a=!0,ji(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,No(t),i.updater=Fo,t.stateNode=i,i._reactInternals=t,Go(t,r,e,n),t=$s(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Tl(e)?1:0;if(null!=e){if((e=e.$$typeof)===A)return 11;if(e===I)return 14}return 2}(r),e=bo(r,e),i){case 0:t=_s(null,t,r,e,n);break e;case 1:t=As(null,t,r,e,n);break e;case 11:t=Cs(null,t,r,e,n);break e;case 14:t=ks(null,t,r,bo(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,_s(e,t,r,i=t.elementType===r?i:bo(r,i),n);case 1:return r=t.type,i=t.pendingProps,As(e,t,r,i=t.elementType===r?i:bo(r,i),n);case 3:e:{if(Os(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,To(e,t),Lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Is(e,t,r,n,i=us(Error(o(423)),t));break e}if(r!==i){t=Is(e,t,r,n,i=us(Error(o(424)),t));break e}for(ro=li(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=Xo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(po(),r===i){t=qs(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return aa(t),null===e&&lo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Ps(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&lo(t),null;case 13:return Ls(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Yo(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:bo(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Pi(wo,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!$i.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var c=a.dependencies;if(null!==c){s=a.child;for(var l=c.firstContext;null!==l;){if(l.context===r){if(1===a.tag){(l=Ro(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Eo(a.return,n,t),c.lanes|=n;break}l=l.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),Eo(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,So(t,n),r=r(i=Po(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=bo(r=t.type,t.pendingProps),ks(e,t,r,i=bo(r.type,i),n);case 15:return Es(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bo(r,i),Hs(e,t),t.tag=1,Ni(r)?(e=!0,ji(t)):e=!1,So(t,n),Ho(t,r,i),Go(t,r,i,n),$s(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return Ss(e,t,n)}throw Error(o(156,t.tag))};var Kl="function"==typeof reportError?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}function Ql(e){this._internalRoot=e}function Yl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jl(){}function eu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"==typeof i){var s=i;i=function(){var e=ql(a);s.call(e)}}Hl(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=ql(a);o.call(e)}}var a=Wl(t,r,e,0,null,!1,0,"",Jl);return e._reactRootContainer=a,e[pi]=a.current,Fr(8===e.nodeType?e.parentNode:e),dl(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ql(c);s.call(e)}}var c=Dl(e,0,!1,null,0,!1,0,"",Jl);return e._reactRootContainer=c,e[pi]=c.current,Fr(8===e.nodeType?e.parentNode:e),dl((function(){Hl(t,c,n,r)})),c}(n,t,e,i,r);return ql(a)}Ql.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hl(e,t,null,null)},Ql.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dl((function(){Hl(null,e,null,null)})),t[pi]=null}},Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&0!==t&&t<Tt[n].priority;n++);Tt.splice(n,0,e),0===n&&Ut(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(wt(t,1|n),il(t,Ye()),0==(6&$c)&&(Wc=Ye()+500,Fi()))}break;case 13:dl((function(){var t=Oo(e,1);if(null!==t){var n=tl();rl(t,e,1,n)}})),Vl(e,1)}},Ct=function(e){if(13===e.tag){var t=Oo(e,134217728);null!==t&&rl(t,e,134217728,tl()),Vl(e,134217728)}},kt=function(e){if(13===e.tag){var t=nl(e),n=Oo(e,t);null!==n&&rl(n,e,t,tl()),Vl(e,t)}},Et=function(){return yt},St=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Ce=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(o(90));V(r),X(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ae=ul,$e=dl;var tu={usingClientEntryPoint:!1,Events:[yi,vi,xi,Pe,_e,ul]},nu={findFiberByHostInstance:wi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ru={bundleType:nu.bundleType,version:nu.version,rendererPackageName:nu.rendererPackageName,rendererConfig:nu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:nu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{it=iu.inject(ru),ot=iu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yl(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:C,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yl(e))throw Error(o(299));var n=!1,r="",i=Kl;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,0,n,0,r,i),e[pi]=t.current,Fr(8===e.nodeType?e.parentNode:e),new Zl(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return null===(e=qe(t))?null:e.stateNode},t.flushSync=function(e){return dl(e)},t.hydrate=function(e,t,n){if(!Xl(t))throw Error(o(200));return eu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yl(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Kl;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Wl(t,null,e,1,null!=n?n:null,i,0,a,s),e[pi]=t.current,Fr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ql(t)},t.render=function(e,t,n){if(!Xl(t))throw Error(o(200));return eu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xl(e))throw Error(o(40));return!!e._reactRootContainer&&(dl((function(){eu(null,null,e,!1,(function(){e._reactRootContainer=null,e[pi]=null}))})),!0)},t.unstable_batchedUpdates=ul,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xl(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return eu(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},745:function(e,t,n){"use strict";var r=n(3935);t.s=r.createRoot,r.hydrateRoot},3935:function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(4448)},2408:function(e,t){"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function w(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var v=y.prototype=new w;v.constructor=y,g(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,C=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+A(c,0):o,x(a)?(i="",null!=e&&(i=e.replace(_,"$&/")+"/"),$(a,t,i,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+A(s=e[l],l);c+=$(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=$(s=s.value,t,i,u=o+A(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:null},R={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)C.call(t,l)&&!E.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},7294:function(e,t,n){"use strict";e.exports=n(2408)},53:function(e,t){"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>o(c,n))l<i&&0>o(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else{if(!(l<i&&0>o(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();t.unstable_now=function(){return s.now()-c}}var l=[],u=[],d=1,h=null,f=3,p=!1,g=!1,m=!1,b="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function v(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(l,t)}t=r(u)}}function x(e){if(m=!1,v(e),!g)if(null!==r(l))g=!0,T(C);else{var t=r(u);null!==t&&R(x,t.startTime-e)}}function C(e,n){g=!1,m&&(m=!1,w(P),P=-1),p=!0;var o=f;try{for(v(n),h=r(l);null!==h&&(!(h.expirationTime>n)||e&&!$());){var a=h.callback;if("function"==typeof a){h.callback=null,f=h.priorityLevel;var s=a(h.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?h.callback=s:h===r(l)&&i(l),v(n)}else i(l);h=r(l)}if(null!==h)var c=!0;else{var d=r(u);null!==d&&R(x,d.startTime-n),c=!1}return c}finally{h=null,f=o,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,S=null,P=-1,_=5,A=-1;function $(){return!(t.unstable_now()-A<_)}function O(){if(null!==S){var e=t.unstable_now();A=e;var n=!0;try{n=S(!0,e)}finally{n?k():(E=!1,S=null)}}else E=!1}if("function"==typeof y)k=function(){y(O)};else if("undefined"!=typeof MessageChannel){var I=new MessageChannel,N=I.port2;I.port1.onmessage=O,k=function(){N.postMessage(null)}}else k=function(){b(O,0)};function T(e){S=e,E||(E=!0,k())}function R(e,n){P=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,T(C))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(l)&&e===r(u)&&(m?(w(P),P=-1):m=!0,R(x,o-a))):(e.sortIndex=s,n(l,e),g||p||(g=!0,T(C))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},3840:function(e,t,n){"use strict";e.exports=n(53)},500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},1230:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return o},__asyncDelegator:function(){return v},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return w},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return P},__createBinding:function(){return h},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return i},__generator:function(){return d},__importDefault:function(){return E},__importStar:function(){return k},__makeTemplateObject:function(){return C},__metadata:function(){return l},__param:function(){return c},__read:function(){return g},__rest:function(){return a},__spread:function(){return m},__spreadArrays:function(){return b},__values:function(){return p}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function f(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof w?Promise.resolve(n.value.v).then(c,l):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:w(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,i,(t=e[n](t)).done,t.value)}))}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function P(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},9480:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(9335);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,r.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},3948:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(9480),i=n(9335);function o(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const n=(0,r.E)(t);let o=0;for(const t of e)n.set(t,o),o+=t.length;return(0,i.P)(n)}},7925:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var r=n(940),i=n(9335);function o(e,t="utf8"){const n=r.Z[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.decoder.decode(`${n.prefix}${e}`):(0,i.P)(globalThis.Buffer.from(e,"utf-8"))}},2199:function(e,t,n){"use strict";n.d(t,{BB:function(){return o.B},mL:function(){return i.m},zo:function(){return r.z}});var r=n(3948),i=n(7925),o=n(2909)},2909:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(940);function i(e,t="utf8"){const n=r.Z[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}},9335:function(e,t,n){"use strict";function r(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}n.d(t,{P:function(){return r}})},940:function(e,t,n){"use strict";n.d(t,{Z:function(){return ze}});var r={};n.r(r),n.d(r,{identity:function(){return _}});var i={};n.r(i),n.d(i,{base2:function(){return A}});var o={};n.r(o),n.d(o,{base8:function(){return $}});var a={};n.r(a),n.d(a,{base10:function(){return O}});var s={};n.r(s),n.d(s,{base16:function(){return I},base16upper:function(){return N}});var c={};n.r(c),n.d(c,{base32:function(){return T},base32hex:function(){return U},base32hexpad:function(){return B},base32hexpadupper:function(){return z},base32hexupper:function(){return L},base32pad:function(){return M},base32padupper:function(){return j},base32upper:function(){return R},base32z:function(){return D}});var l={};n.r(l),n.d(l,{base36:function(){return F},base36upper:function(){return W}});var u={};n.r(u),n.d(u,{base58btc:function(){return H},base58flickr:function(){return q}});var d={};n.r(d),n.d(d,{base64:function(){return G},base64pad:function(){return V},base64url:function(){return K},base64urlpad:function(){return Z}});var h={};n.r(h),n.d(h,{base256emoji:function(){return J}});var f={};n.r(f),n.d(f,{sha256:function(){return xe},sha512:function(){return Ce}});var p={};n.r(p),n.d(p,{identity:function(){return Ee}});var g={};n.r(g),n.d(g,{code:function(){return Pe},decode:function(){return Ae},encode:function(){return _e},name:function(){return Se}});var m={};n.r(m),n.d(m,{code:function(){return Ne},decode:function(){return Re},encode:function(){return Te},name:function(){return Ie}});var b=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),a=o.charCodeAt(0);if(255!==n[a])throw new TypeError(o+" is ambiguous");n[a]=i}var s=e.length,c=e.charAt(0),l=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var r=0,i=0;e[t]===c;)r++,t++;for(var o=(e.length-t)*l+1>>>0,a=new Uint8Array(o);e[t];){var u=n[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=s*a[h]>>>0,a[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(r+(o-f)),g=r;f!==o;)p[g++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var n=0,r=0,i=0,o=t.length;i!==o&&0===t[i];)i++,n++;for(var a=(o-i)*u+1>>>0,l=new Uint8Array(a);i!==o;){for(var d=t[i],h=0,f=a-1;(0!==d||h<r)&&-1!==f;f--,h++)d+=256*l[f]>>>0,l[f]=d%s>>>0,d=d/s>>>0;if(0!==d)throw new Error("Non-zero carry");r=h,i++}for(var p=a-r;p!==a&&0===l[p];)p++;for(var g=c.repeat(n);p<a;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:d,decode:function(e){var n=d(e);if(n)return n;throw new Error(`Non-${t} character`)}}};new Uint8Array(0);const w=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")};class y{constructor(e,t,n){this.name=e,this.prefix=t,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class v{constructor(e,t,n){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=n}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return C(this,e)}}class x{constructor(e){this.decoders=e}or(e){return C(this,e)}decode(e){const t=e[0],n=this.decoders[t];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const C=(e,t)=>new x({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class k{constructor(e,t,n,r){this.name=e,this.prefix=t,this.baseEncode=n,this.baseDecode=r,this.encoder=new y(e,t,n),this.decoder=new v(e,t,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const E=({name:e,prefix:t,encode:n,decode:r})=>new k(e,t,n,r),S=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=b(n,t);return E({prefix:e,name:t,encode:r,decode:e=>w(i(e))})},P=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>E({prefix:t,name:e,encode(e){return((e,t,n)=>{const r="="===t[t.length-1],i=(1<<n)-1;let o="",a=0,s=0;for(let r=0;r<e.length;++r)for(s=s<<8|e[r],a+=8;a>n;)a-=n,o+=t[i&s>>a];if(a&&(o+=t[i&s<<n-a]),r)for(;o.length*n&7;)o+="=";return o})(e,r,n)},decode(t){return((e,t,n,r)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const a=new Uint8Array(o*n/8|0);let s=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${r} character`);c=c<<n|o,s+=n,s>=8&&(s-=8,a[l++]=255&c>>s)}if(s>=n||255&c<<8-s)throw new SyntaxError("Unexpected end of data");return a})(t,r,n,e)}}),_=E({prefix:"\0",name:"identity",encode:e=>{return t=e,(new TextDecoder).decode(t);var t},decode:e=>(e=>(new TextEncoder).encode(e))(e)}),A=P({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),$=P({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),O=S({prefix:"9",name:"base10",alphabet:"0123456789"}),I=P({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),N=P({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),T=P({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),R=P({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),M=P({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),j=P({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),U=P({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),L=P({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),B=P({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),z=P({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),D=P({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),F=S({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),W=S({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),H=S({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),q=S({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),G=P({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),V=P({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),K=P({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Z=P({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Q=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Y=Q.reduce(((e,t,n)=>(e[n]=t,e)),[]),X=Q.reduce(((e,t,n)=>(e[t.codePointAt(0)]=n,e)),[]),J=E({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+Y[t]),"")},decode:function(e){const t=[];for(const n of e){const e=X[n.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${n}`);t.push(e)}return new Uint8Array(t)}});var ee=128,te=-128,ne=Math.pow(2,31),re=Math.pow(2,7),ie=Math.pow(2,14),oe=Math.pow(2,21),ae=Math.pow(2,28),se=Math.pow(2,35),ce=Math.pow(2,42),le=Math.pow(2,49),ue=Math.pow(2,56),de=Math.pow(2,63),he=function e(t,n,r){n=n||[];for(var i=r=r||0;t>=ne;)n[r++]=255&t|ee,t/=128;for(;t&te;)n[r++]=255&t|ee,t>>>=7;return n[r]=0|t,e.bytes=r-i+1,n},fe=function(e){return e<re?1:e<ie?2:e<oe?3:e<ae?4:e<se?5:e<ce?6:e<le?7:e<ue?8:e<de?9:10};const pe=(e,t,n=0)=>(he(e,t,n),t),ge=e=>fe(e),me=(e,t)=>{const n=t.byteLength,r=ge(e),i=r+ge(n),o=new Uint8Array(i+n);return pe(e,o,0),pe(n,o,r),o.set(t,i),new be(e,n,t,o)};class be{constructor(e,t,n,r){this.code=e,this.size=t,this.digest=n,this.bytes=r}}const we=({name:e,code:t,encode:n})=>new ye(e,t,n);class ye{constructor(e,t,n){this.name=e,this.code=t,this.encode=n}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?me(this.code,t):t.then((e=>me(this.code,e)))}throw Error("Unknown type, must be binary type")}}const ve=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),xe=we({name:"sha2-256",code:18,encode:ve("SHA-256")}),Ce=we({name:"sha2-512",code:19,encode:ve("SHA-512")}),ke=w,Ee={code:0,name:"identity",encode:ke,digest:e=>me(0,ke(e))},Se="raw",Pe=85,_e=e=>w(e),Ae=e=>w(e),$e=new TextEncoder,Oe=new TextDecoder,Ie="json",Ne=512,Te=e=>$e.encode(JSON.stringify(e)),Re=e=>JSON.parse(Oe.decode(e));Symbol.toStringTag,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const Me={...r,...i,...o,...a,...s,...c,...l,...u,...d,...h};var je=n(9480);function Ue(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const Le=Ue("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),Be=Ue("ascii","a",(e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}),(e=>{e=e.substring(1);const t=(0,je.E)(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}));var ze={utf8:Le,"utf-8":Le,hex:Me.base16,latin1:Be,ascii:Be,binary:Be,...Me}},3250:function(e,t,n){"use strict";var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s((function(){i.value=n,i.getSnapshot=t,l(i)&&u({inst:i})}),[e,n,t]),a((function(){return l(i)&&u({inst:i}),e((function(){l(i)&&u({inst:i})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},139:function(e,t,n){"use strict";var r=n(7294),i=n(1688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,c=r.useEffect,l=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;d=l((function(){function e(e){if(!c){if(c=!0,a=e,e=r(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(a=e,s=n)}var a,s,c=!1,l=void 0===n?null:n;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]}),[t,n,r,i]);var f=a(e,d[0],d[1]);return c((function(){h.hasValue=!0,h.value=f}),[f]),u(f),f}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)},9528:function(e,t,n){"use strict";n.d(t,{sj:function(){return d},iH:function(){return p},CO:function(){return f},Ld:function(){return h}}),Symbol();const r=Symbol(),i=Object.getPrototypeOf,o=new WeakMap,a=(e,t=!0)=>{o.set(e,t)},s=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,[u]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),n=(e=>s(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),u=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),d=new WeakMap,h=((e,t,n=u)=>{const r=d.get(e);if((null==r?void 0:r[0])===t)return r[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return a(i,!0),d.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(l.has(r))a(r,!1);else if(r instanceof Promise)delete o.value,o.get=()=>n(r);else if(c.has(r)){const[e,t]=c.get(r);o.value=h(e,t(),n)}Object.defineProperty(i,t,o)})),Object.preventExtensions(i)}),f=new WeakMap,p=[1,1],g=(a=>{if(!s(a))throw new Error("object required");const u=f.get(a);if(u)return u;let d=p[0];const m=new Set,b=(e,t=++p[0])=>{d!==t&&(d=t,m.forEach((n=>n(e,t))))};let w=p[1];const y=e=>(t,n)=>{const r=[...t];r[1]=[e,...r[1]],b(r,n)},v=new Map,x=e=>{var t;const n=v.get(e);n&&(v.delete(e),null==(t=n[1])||t.call(n))},C=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),k=t(C,{deleteProperty(e,t){const n=Reflect.get(e,t);x(t);const r=Reflect.deleteProperty(e,t);return r&&b(["delete",[t],n]),r},set(t,a,u,d){const h=Reflect.has(t,a),p=Reflect.get(t,a,d);if(h&&(e(p,u)||f.has(u)&&e(p,f.get(u))))return!0;var w;x(a),s(u)&&(u=(e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype))(w=u)&&w[r]||null||u);let C=u;if(u instanceof Promise)u.then((e=>{u.status="fulfilled",u.value=e,b(["resolve",[a],e])})).catch((e=>{u.status="rejected",u.reason=e,b(["reject",[a],e])}));else{!c.has(u)&&n(u)&&(C=g(u));const e=!l.has(C)&&c.get(C);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(m.size){const n=t[3](y(e));v.set(e,[t,n])}else v.set(e,[t])})(a,e)}return Reflect.set(t,a,C,d),b(["set",[a],u,p]),!0}});f.set(a,k);const E=[C,(e=++p[1])=>(w===e||m.size||(w=e,v.forEach((([t])=>{const n=t[1](e);n>d&&(d=n)}))),d),h,e=>(m.add(e),1===m.size&&v.forEach((([e,t],n)=>{if(t)throw new Error("remove already exists");const r=e[3](y(n));v.set(n,[e,r])})),()=>{m.delete(e),0===m.size&&v.forEach((([e,t],n)=>{t&&(t(),v.set(n,[e]))}))})];return c.set(k,E),Reflect.ownKeys(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(k[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),k}))=>[g,c,l,e,t,n,u,d,h,f,p])();function d(e={}){return u(e)}function h(e,t,n){const r=c.get(e);let i;r||console.warn("Please use proxy object");const o=[],a=r[3];let s=!1;const l=a((e=>{o.push(e),n?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,s&&t(o.splice(0))})))}));return s=!0,()=>{s=!1,l()}}function f(e,t){const n=c.get(e);n||console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),t)}function p(e){return l.add(e),e}},7509:function(e,t,n){"use strict";function r(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}n.d(t,{T:function(){return r}})},3218:function(e,t,n){"use strict";n.d(t,{R:function(){return y}});var r=n(7509),i=n(7290);const o="0x82ad56cb";var a=n(9146),s=n(5315),c=n(4147),l=n(2668),u=n(2106),d=n(3518),h=n(6704),f=n(4163),p=n(7342),g=n(5384),m=n(2721),b=n(7525),w=n(5140);async function y(e,t){const{account:y=e.account,batch:v=Boolean(e.batch?.multicall),blockNumber:x,blockTag:C="latest",accessList:k,data:E,gas:S,gasPrice:P,maxFeePerGas:_,maxPriorityFeePerGas:A,nonce:$,to:O,value:I,...N}=t,T=y?(0,r.T)(y):void 0;try{(0,w.F)(t);const n=(x?(0,h.eC)(x):void 0)||C,r=e.chain?.formatters?.transactionRequest?.format||m.tG,a=r({...(0,g.K)(N,{format:r}),from:T?.address,accessList:k,data:E,gas:S,gasPrice:P,maxFeePerGas:_,maxPriorityFeePerGas:A,nonce:$,to:O,value:I});if(v&&function({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(o)||!n||Object.values(r).filter((e=>void 0!==e)).length>0)}({request:a}))try{return await async function(e,t){const{batchSize:n=1024,wait:r=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:f,multicallAddress:p,to:g}=t;let m=p;if(!m){if(!e.chain)throw new s.pZ;m=(0,d.LI)({blockNumber:o,chain:e.chain,contract:"multicall3"})}const w=(o?(0,h.eC)(o):void 0)||a,{schedule:y}=(0,b.S)({id:`${e.uid}.${w}`,wait:r,shouldSplitBatch(e){const t=e.reduce(((e,{data:t})=>e+(t.length-2)),0);return t>2*n},fn:async t=>{const n=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),r=(0,u.R)({abi:i.F8,args:[n],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:r,to:m},w]});return(0,l.k)({abi:i.F8,args:[n],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:x}]=await y({data:f,to:g});if(!x)throw new c.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}(e,{...a,blockNumber:x,blockTag:C})}catch(e){if(!(e instanceof s.pZ||e instanceof s.mm))throw e}const f=await e.request({method:"eth_call",params:n?[a,n]:[a]});return"0x"===f?{data:void 0}:{data:f}}catch(r){const i=function(e){if(!(e instanceof a.G))return;const t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(r),{offchainLookup:o,offchainLookupSignature:s}=await n.e(28).then(n.bind(n,4571));if(i?.slice(0,10)===s&&O)return{data:await o(e,{data:i,to:O})};throw function(e,{docsPath:t,...n}){const r=(()=>{const t=(0,p.k)(e,n);return t instanceof f.cj?e:t})();return new c.cg(r,{docsPath:t,...n})}(r,{...t,account:T,chain:e.chain})}}},7290:function(e,t,n){"use strict";n.d(t,{$o:function(){return l},F8:function(){return r},X$:function(){return c},du:function(){return a},k3:function(){return o},nZ:function(){return s}});const r=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],c=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],l=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},1687:function(e,t,n){"use strict";n.d(t,{$:function(){return r},Up:function(){return i},hZ:function(){return o}});const r={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},1260:function(e,t,n){"use strict";n.d(t,{Bd:function(){return o},Zn:function(){return i},ez:function(){return r}});const r={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},8008:function(e,t,n){"use strict";n.d(t,{CI:function(){return k},FM:function(){return p},Gy:function(){return x},KY:function(){return y},M4:function(){return d},MX:function(){return w},SM:function(){return v},cO:function(){return s},dh:function(){return C},fM:function(){return a},fs:function(){return h},gr:function(){return u},hn:function(){return E},lC:function(){return g},mv:function(){return m},wM:function(){return S},wb:function(){return l},xB:function(){return c},xL:function(){return b},yP:function(){return f}});var r=n(8789),i=n(7476),o=n(9146);class a extends o.G{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class c extends o.G{constructor({data:e,params:t,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${(0,r.h)(t,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=n}}class l extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends o.G{constructor({abiItem:e,data:t,params:n,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join("\n"),{metaMessages:[`Params: (${(0,r.h)(n,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=n,this.size=i}}class x extends o.G{constructor({abiItem:e,param:t}){super([`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class k extends o.G{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class E extends o.G{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends o.G{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},230:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(9146);class i extends r.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},9146:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(4745);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,r.bo)()});const n=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?o(e.cause,t):t?null:e}},5315:function(e,t,n){"use strict";n.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return i},pZ:function(){return s}});var r=n(9146);class i extends r.G{constructor({blockNumber:e,chain:t,contract:n}){super(`Chain "${t.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends r.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends r.G{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends r.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},4147:function(e,t,n){"use strict";n.d(t,{cg:function(){return m},uq:function(){return b},Lu:function(){return w},Dk:function(){return y},VQ:function(){return v}});var r=n(7509),i=n(1687),o=n(4796),a=n(8789),s=n(1159);function c({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map(((e,n)=>`${r&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?(0,s.P)(t[n]):t[n]}`)).join(", ")})`}var l=n(5578),u=n(1986),d=n(6885),h=n(8008),f=n(9146),p=n(8697),g=n(4745);class m extends f.G{constructor(e,{account:t,docsPath:n,chain:i,data:o,gas:a,gasPrice:s,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:h,to:f,value:g}){const m=t?(0,r.T)(t):void 0,b=(0,p.xr)({from:m?.address,to:f,value:void 0!==g&&`${(0,u.d)(g)} ${i?.nativeCurrency.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends f.G{constructor(e,{abi:t,args:n,contractAddress:r,docsPath:i,functionName:o,sender:s}){const u=(0,l.m)({abi:t,args:n,name:o}),d=u?c({abiItem:u,args:n,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,a.t)(u,{includeName:!0}):void 0,f=(0,p.xr)({address:r&&(0,g.CR)(r),function:h,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map((()=>" ")).join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=n,this.cause=e,this.contractAddress=r,this.functionName=o,this.sender=s}}class w extends f.G{constructor({abi:e,data:t,functionName:n,message:r}){let s,l,u,d,f;if(t&&"0x"!==t)try{l=(0,o.p)({abi:e,data:t});const{abiItem:n,errorName:r,args:s}=l;if("Error"===r)d=s[0];else if("Panic"===r){const[e]=s;d=i.$[e]}else{const e=n?(0,a.t)(n,{includeName:!0}):void 0,t=n&&s?c({abiItem:n,args:s,includeFunctionName:!1,includeName:!1}):void 0;u=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(r?.length??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(e){s=e}else r&&(d=r);s instanceof h.yP&&(f=s.signature,u=[`Unable to decode signature "${f}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${f}.`]),super(d&&"execution reverted"!==d||f?[`The contract function "${n}" reverted with the following ${f?"signature":"reason"}:`,d||f].join("\n"):`The contract function "${n}" reverted.`,{cause:s,metaMessages:u}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=l,this.reason=d,this.signature=f}}class y extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},3305:function(e,t,n){"use strict";n.d(t,{$:function(){return o},m:function(){return i}});var r=n(9146);class i extends r.G{constructor({offset:e,position:t,size:n}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends r.G{constructor({size:e,targetSize:t,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},7694:function(e,t,n){"use strict";n.d(t,{Cd:function(){return o},J5:function(){return i},M6:function(){return a}});var r=n(9146);class i extends r.G{constructor({max:e,min:t,signed:n,size:r,value:i}){super(`Number "${i}" is not in safe ${r?`${8*r}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends r.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends r.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},4163:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return c},cj:function(){return m},cs:function(){return g},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return l}});var r=n(6885),i=n(9146);class o extends i.G{constructor({cause:e,message:t}={}){const n=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class l extends i.G{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.o)(n)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},6929:function(e,t,n){"use strict";n.d(t,{Gg:function(){return a},W5:function(){return l},bs:function(){return c},c9:function(){return s}});var r=n(1159),i=n(9146),o=n(4745);class a extends i.G{constructor({body:e,details:t,headers:n,status:i,url:a}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,r.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=i,this.url=a}}class s extends i.G{constructor({body:e,details:t,url:n}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(n)}`,`Request body: ${(0,r.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class c extends i.G{constructor({body:e,error:t,url:n}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(n)}`,`Request body: ${(0,r.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,r.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},8697:function(e,t,n){"use strict";n.d(t,{Bh:function(){return u},Yb:function(){return d},j3:function(){return c},mc:function(){return h},mk:function(){return l},xY:function(){return s},xr:function(){return a}});var r=n(1986),i=n(6885),o=n(9146);function a(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),n=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(n+1)}  ${t}`)).join("\n")}class s extends o.G{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class c extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class l extends o.G{constructor(e,{account:t,docsPath:n,chain:o,data:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){const g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,r.d)(p)} ${o?.nativeCurrency.symbol||"ETH"}`,data:s,gas:c,gasPrice:void 0!==l&&`${(0,i.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,i.o)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:n,hash:r,index:i}){let o="Transaction";n&&void 0!==i&&(o=`Transaction at block time "${n}" at index "${i}"`),e&&void 0!==i&&(o=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(o=`Transaction at block number "${t}" at index "${i}"`),r&&(o=`Transaction with hash "${r}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},4745:function(e,t,n){"use strict";n.d(t,{CR:function(){return r},Gr:function(){return i},bo:function(){return o}});const r=e=>e,i=e=>e,o=()=>"viem@1.16.5"},6360:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(8008),i=n(4883),o=n(7476),a=n(3525),s=n(2266),c=n(449),l=n(632);function u(e,t){if("0x"===t&&e.length>0)throw new r.wb;if((0,o.d)(t)&&(0,o.d)(t)<32)throw new r.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){const n=[];let i=0;for(let a=0;a<t.length;a++){if(i>=(0,o.d)(e))throw new r.xB({data:e,params:t,size:(0,o.d)(e)});const s=t[a],{consumed:c,value:l}=d({data:e,param:s,position:i});n.push(l),i+=c}return n}({data:t,params:e})}function d({data:e,param:t,position:n}){const o=(0,l.S)(t.type);if(o){const[r,i]=o;return function(e,{param:t,length:n,position:r}){if(!n){const n=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0})),i=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0}));let o=0;const s=[];for(let r=0;r<i;++r){const r=d({data:(0,a.tP)(e,n+32),param:t,position:o});o+=r.consumed,s.push(r.value)}return{value:s,consumed:32}}if(h(t)){const i=(0,l.S)(t.type),o=!i?.[0];let s=0;const u=[];for(let i=0;i<n;++i){const n=(0,c.ly)((0,a.tP)(e,r,r+32,{strict:!0})),l=d({data:(0,a.tP)(e,n),param:t,position:o?s:32*i});s+=l.consumed,u.push(l.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let a=0;a<n;++a){const n=d({data:e,param:t,position:r+i});i+=n.consumed,o.push(n.value)}return{value:o,consumed:i}}(e,{length:r,param:{...t,type:i},position:n})}if("tuple"===t.type)return function(e,{param:t,position:n}){const r=0===t.components.length||t.components.some((({name:e})=>!e)),i=r?[]:{};let o=0;if(h(t)){const s=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0}));for(let n=0;n<t.components.length;++n){const c=t.components[n],l=d({data:(0,a.tP)(e,s),param:c,position:o});o+=l.consumed,i[r?n:c?.name]=l.value}return{consumed:32,value:i}}for(let a=0;a<t.components.length;++a){const s=t.components[a],c=d({data:e,param:s,position:n+o});o+=c.consumed,i[r?a:s?.name]=c.value}return{consumed:o,value:i}}(e,{param:t,position:n});if("string"===t.type)return function(e,{position:t}){const n=(0,c.ly)((0,a.tP)(e,t,t+32,{strict:!0})),r=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0}));if(0===r)return{consumed:32,value:""};return{consumed:32,value:(0,c.rR)((0,s.f)((0,a.tP)(e,n+32,n+32+r,{strict:!0})))}}(e,{position:n});if(t.type.startsWith("bytes"))return function(e,{param:t,position:n}){const[r,i]=t.type.split("bytes");if(!i){const t=(0,c.ly)((0,a.tP)(e,n,n+32,{strict:!0})),r=(0,c.ly)((0,a.tP)(e,t,t+32,{strict:!0}));return 0===r?{consumed:32,value:"0x"}:{consumed:32,value:(0,a.tP)(e,t+32,t+32+r,{strict:!0})}}return{consumed:32,value:(0,a.tP)(e,n,n+parseInt(i),{strict:!0})}}(e,{param:t,position:n});const u=(0,a.tP)(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,c.y_)(e,{signed:n}):(0,c.ly)(e,{signed:n})}}(u,{param:t});if("address"===t.type)return function(e){return{consumed:32,value:(0,i.x)((0,a.tP)(e,-20))}}(u);if("bool"===t.type)return function(e){return{consumed:32,value:(0,c.XA)(e)}}(u);throw new r.CI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function h(e){const{type:t}=e;if("string"===t)return!0;if("bytes"===t)return!0;if(t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);const n=(0,l.S)(e.type);return!(!n||!h({...e,type:n[1]}))}},4796:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(1687),i=n(8008),o=n(3525),a=n(198),s=n(6360),c=n(8789);function l({abi:e,data:t}){const n=(0,o.tP)(t,0,4);if("0x"===n)throw new i.wb;const l=[...e||[],r.Up,r.hZ].find((e=>"error"===e.type&&n===(0,a.o)((0,c.t)(e))));if(!l)throw new i.yP(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:l,args:"inputs"in l&&l.inputs&&l.inputs.length>0?(0,s.r)(l.inputs,(0,o.tP)(t,4)):void 0,errorName:l.name}}},2668:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(8008),i=n(6360),o=n(5578);const a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:n,data:s}){let c=e[0];if(n&&(c=(0,o.m)({abi:e,args:t,name:n}),!c))throw new r.xL(n,{docsPath:a});if("function"!==c.type)throw new r.xL(void 0,{docsPath:a});if(!c.outputs)throw new r.MX(c.name,{docsPath:a});const l=(0,i.r)(c.outputs,s);return l&&l.length>1?l:l&&1===l.length?l[0]:void 0}},632:function(e,t,n){"use strict";n.d(t,{E:function(){return d},S:function(){return p}});var r=n(8008),i=n(230),o=n(3408),a=n(7644),s=n(1593),c=n(7476),l=n(3525),u=n(6704);function d(e,t){if(e.length!==t.length)throw new r.fs({expectedLength:e.length,givenLength:t.length});const n=function({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(h({param:e[r],value:t[r]}));return n}({params:e,values:t}),i=f(n);return 0===i.length?"0x":i}function h({param:e,value:t}){const n=p(e.type);if(n){const[i,o]=n;return function(e,{length:t,param:n}){const i=null===t;if(!Array.isArray(e))throw new r.hn(e);if(!i&&e.length!==t)throw new r.gr({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let o=!1;const s=[];for(let t=0;t<e.length;t++){const r=h({param:n,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(i||o){const e=f(s);if(i){const t=(0,u.eC)(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?(0,a.zo)([t,e]):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(s.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:o}})}if("tuple"===e.type)return function(e,{param:t}){let n=!1;const r=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],a=h({param:o,value:e[Array.isArray(e)?i:o.name]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?f(r):(0,a.zo)(r.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,o.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")});if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,n]=t.type.split("bytes"),i=(0,c.d)(e);if(!n){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(n))throw new r.M4({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=(0,u.$G)(e),n=Math.ceil((0,c.d)(t)/32),r=[];for(let e=0;e<n;e++)r.push((0,s.gc)((0,l.tP)(t,32*e,32*(e+1)),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,c.d)(t),{size:32})),...r])}}(t);throw new r.dh(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function f(e){let t=0;for(let n=0;n<e.length;n++){const{dynamic:r,encoded:i}=e[n];t+=r?32:(0,c.d)(i)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:a,encoded:s}=e[o];a?(n.push((0,u.eC)(t+i,{size:32})),r.push(s),i+=(0,c.d)(s)):n.push(s)}return(0,a.zo)([...n,...r])}function p(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},2106:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(8008),i=n(7644),o=n(198),a=n(632),s=n(8789),c=n(5578);function l({abi:e,args:t,functionName:n}){let l=e[0];if(n&&(l=(0,c.m)({abi:e,args:t,name:n}),!l))throw new r.xL(n,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==l.type)throw new r.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const u=(0,s.t)(l),d=(0,o.o)(u),h="inputs"in l&&l.inputs?(0,a.E)(l.inputs,t??[]):void 0;return(0,i.SM)([d,h??"0x"])}},8789:function(e,t,n){"use strict";n.d(t,{h:function(){return o},t:function(){return i}});var r=n(8008);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new r.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}},5578:function(e,t,n){"use strict";n.d(t,{m:function(){return s}});var r=n(9450),i=n(3853),o=n(198),a=n(3408);function s({abi:e,args:t=[],name:n}){const a=(0,r.v)(n,{strict:!1}),s=e.filter((e=>a?"function"===e.type?(0,o.o)(e)===n:"event"===e.type&&(0,i.e)(e)===n:"name"in e&&e.name===n));if(0!==s.length){if(1===s.length)return s[0];for(const e of s)if("inputs"in e)if(t&&0!==t.length){if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every(((t,n)=>{const r="inputs"in e&&e.inputs[n];return!!r&&c(t,r)})))return e}else if(!e.inputs||0===e.inputs.length)return e;return s[0]}}function c(e,t){const n=typeof e,r=t.type;switch(r){case"address":return(0,a.U)(e);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:return"tuple"===r&&"components"in t?Object.values(t.components).every(((t,n)=>c(Object.values(e)[n],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?"number"===n||"bigint"===n:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?"string"===n||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)&&Array.isArray(e)&&e.every((e=>c(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})))}}},4883:function(e,t,n){"use strict";n.d(t,{K:function(){return c},x:function(){return s}});var r=n(230),i=n(6614),o=n(5090),a=n(3408);function s(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=(0,o.w)((0,i.qX)(n),"bytes"),a=(t?n.substring(`${t}0x`.length):n).split("");for(let e=0;e<40;e+=2)r[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&r[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function c(e,t){if(!(0,a.U)(e))throw new r.b({address:e});return s(e,t)}},3408:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});const r=/^0x[a-fA-F0-9]{40}$/;function i(e){return r.test(e)}},3518:function(e,t,n){"use strict";n.d(t,{LI:function(){return a},ax:function(){return o},qg:function(){return i}});var r=n(5315);function i({chain:e,currentChainId:t}){if(!e)throw new r.Bk;if(t!==e.id)throw new r.Yl({chain:e,currentChainId:t})}function o(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}function a({blockNumber:e,chain:t,contract:n}){const i=t?.contracts?.[n];if(!i)throw new r.mm({chain:t,contract:{name:n}});if(e&&i.blockCreated&&i.blockCreated>e)throw new r.mm({blockNumber:e,chain:t,contract:{name:n,blockCreated:i.blockCreated}});return i.address}},7644:function(e,t,n){"use strict";function r(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(const n of e)t+=n.length;const n=new Uint8Array(t);let r=0;for(const t of e)n.set(t,r),r+=t.length;return n}(e)}function i(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}n.d(t,{SM:function(){return i},zo:function(){return r}})},9450:function(e,t,n){"use strict";function r(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}n.d(t,{v:function(){return r}})},1593:function(e,t,n){"use strict";n.d(t,{gc:function(){return o},vk:function(){return i}});var r=n(3305);function i(e,{dir:t,size:n=32}={}){return"string"==typeof e?o(e,{dir:t,size:n}):function(e,{dir:t,size:n=32}={}){if(null===n)return e;if(e.length>n)throw new r.$({size:e.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let r=0;r<n;r++){const o="right"===t;i[o?r:n-r-1]=e[o?r:e.length-r-1]}return i}(e,{dir:t,size:n})}function o(e,{dir:t,size:n=32}={}){if(null===n)return e;const i=e.replace("0x","");if(i.length>2*n)throw new r.$({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`}},7476:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(9450);function i(e){return(0,r.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3525:function(e,t,n){"use strict";n.d(t,{tP:function(){return a}});var r=n(3305),i=n(9450),o=n(7476);function a(e,t,n,{strict:r}={}){return(0,i.v)(e,{strict:!1})?function(e,t,n,{strict:r}={}){s(e,t);const i=`0x${e.replace("0x","").slice(2*(t??0),2*(n??e.length))}`;return r&&c(i,t,n),i}(e,t,n,{strict:r}):function(e,t,n,{strict:r}={}){s(e,t);const i=e.slice(t,n);return r&&c(i,t,n),i}(e,t,n,{strict:r})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new r.m({offset:t,position:"start",size:(0,o.d)(e)})}function c(e,t,n){if("number"==typeof t&&"number"==typeof n&&(0,o.d)(e)!==n-t)throw new r.m({offset:n,position:"end",size:(0,o.d)(e)})}},2266:function(e,t,n){"use strict";function r(e,{dir:t="left"}={}){let n="string"==typeof e?e.replace("0x",""):e,r=0;for(let e=0;e<n.length-1&&"0"===n["left"===t?e:n.length-e-1].toString();e++)r++;return n="left"===t?n.slice(r):n.slice(0,n.length-r),"string"==typeof e?(1===n.length&&"right"===t&&(n=`${n}0`),`0x${n.length%2==1?`0${n}`:n}`):n}n.d(t,{f:function(){return r}})},449:function(e,t,n){"use strict";n.d(t,{XA:function(){return l},Yf:function(){return s},ly:function(){return u},rR:function(){return d},y_:function(){return c}});var r=n(7694),i=n(7476),o=n(2266),a=n(6614);function s(e,{size:t}){if((0,i.d)(e)>t)throw new r.M6({givenSize:(0,i.d)(e),maxSize:t})}function c(e,t={}){const{signed:n}=t;t.size&&s(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2;return r<=(1n<<8n*BigInt(i)-1n)-1n?r:r-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function l(e,t={}){let n=e;if(t.size&&(s(n,{size:t.size}),n=(0,o.f)(n)),"0x00"===(0,o.f)(n))return!1;if("0x01"===(0,o.f)(n))return!0;throw new r.Cd(n)}function u(e,t={}){return Number(c(e,t))}function d(e,t={}){let n=(0,a.nr)(e);return t.size&&(s(n,{size:t.size}),n=(0,o.f)(n,{dir:"right"})),(new TextDecoder).decode(n)}},6614:function(e,t,n){"use strict";n.d(t,{O0:function(){return l},nr:function(){return h},qX:function(){return f}});var r=n(9146),i=n(9450),o=n(1593),a=n(449),s=n(6704);const c=new TextEncoder;function l(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){return h((0,s.eC)(e,t))}(e,t):"boolean"==typeof e?function(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),"number"==typeof t.size?((0,a.Yf)(n,{size:t.size}),(0,o.vk)(n,{size:t.size})):n}(e,t):(0,i.v)(e)?h(e,t):f(e,t)}const u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let n=e;t.size&&((0,a.Yf)(n,{size:t.size}),n=(0,o.vk)(n,{dir:"right",size:t.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,c=new Uint8Array(s);for(let e=0,t=0;e<s;e++){const n=d(i.charCodeAt(t++)),o=d(i.charCodeAt(t++));if(void 0===n||void 0===o)throw new r.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);c[e]=16*n+o}return c}function f(e,t={}){const n=c.encode(e);return"number"==typeof t.size?((0,a.Yf)(n,{size:t.size}),(0,o.vk)(n,{dir:"right",size:t.size})):n}},6704:function(e,t,n){"use strict";n.d(t,{$G:function(){return h},C4:function(){return c},NC:function(){return s},ci:function(){return l},eC:function(){return u}});var r=n(7694),i=n(1593),o=n(449);const a=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?c(e,t):l(e,t)}function c(e,t={}){const n=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(n,{size:t.size}),(0,i.vk)(n,{size:t.size})):n}function l(e,t={}){let n="";for(let t=0;t<e.length;t++)n+=a[e[t]];const r=`0x${n}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,i.vk)(r,{dir:"right",size:t.size})):r}function u(e,t={}){const{signed:n,size:o}=t,a=BigInt(e);let s;o?s=n?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(s=BigInt(Number.MAX_SAFE_INTEGER));const c="bigint"==typeof s&&n?-s-1n:0;if(s&&a>s||a<c){const t="bigint"==typeof e?"n":"";throw new r.J5({max:s?`${s}${t}`:void 0,min:`${c}${t}`,signed:n,size:o,value:`${e}${t}`})}const l=`0x${(n&&a<0?(1n<<BigInt(8*o))+BigInt(a):a).toString(16)}`;return o?(0,i.vk)(l,{size:o}):l}const d=new TextEncoder;function h(e,t={}){return l(d.encode(e),t)}},7342:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(9146),i=n(4163);function o(e,t){const n=(e.details||"").toLowerCase(),o=e.walk((e=>e.code===i.M_.code));return o instanceof r.G?new i.M_({cause:e,message:o.details}):i.M_.nodeMessage.test(n)?new i.M_({cause:e,message:e.details}):i.Hh.nodeMessage.test(n)?new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.G$.nodeMessage.test(n)?new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):i.ZI.nodeMessage.test(n)?new i.ZI({cause:e,nonce:t?.nonce}):i.vU.nodeMessage.test(n)?new i.vU({cause:e,nonce:t?.nonce}):i.se.nodeMessage.test(n)?new i.se({cause:e,nonce:t?.nonce}):i.C_.nodeMessage.test(n)?new i.C_({cause:e}):i.WF.nodeMessage.test(n)?new i.WF({cause:e,gas:t?.gas}):i.dR.nodeMessage.test(n)?new i.dR({cause:e,gas:t?.gas}):i.pZ.nodeMessage.test(n)?new i.pZ({cause:e}):i.cs.nodeMessage.test(n)?new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new i.cj({cause:e})}},5384:function(e,t,n){"use strict";function r(e,{format:t}){return t?Object.keys(t({})).reduce(((t,n)=>(e?.hasOwnProperty(n)&&(t[n]=e[n]),t)),{}):{}}n.d(t,{K:function(){return r}})},2721:function(e,t,n){"use strict";n.d(t,{tG:function(){return o}});var r=n(6704);const i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,r.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,r.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,r.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,r.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,r.eC)(e.nonce):void 0,type:void 0!==e.type?i[e.type]:void 0,value:void 0!==e.value?(0,r.eC)(e.value):void 0}}},3853:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var r=n(6614),i=n(6797),o=n(5090);const a=e=>{return t=(e=>(0,i.r)(e))(e),(0,o.w)((0,r.O0)(t));var t}},198:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(3525),i=n(6614),o=n(6797),a=n(5090);const s=e=>{return(0,r.tP)((t=(0,o.r)(e),(0,a.w)((0,i.O0)(t))),0,4);var t}},6797:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(8789);const i=/((function|event)\s)?(.*)(\((.*)\))/;function o(e){const t=e.match(i),n=t?.[2]||void 0,r=t?.[3];return{type:n,name:r,params:t?.[5]||void 0}}const a=e=>{if("string"==typeof e){return`${o(e).name}(${(function(e){const t=o(e).params,n=t?.split(",").map((e=>e.trim().split(" ")));return n?.map((e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}})))}(e)||[]).map((({type:e})=>e)).join(",")})`}return(0,r.t)(e)}},5090:function(e,t,n){"use strict";function r(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}n.d(t,{w:function(){return O}});const a=BigInt(2**32-1),s=BigInt(32);function c(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}function l(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:a}=c(e[i],t);[n[i],r[i]]=[o,a]}return[n,r]}if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw new Error("Non little-endian hardware is not supported");function u(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!(e instanceof Uint8Array))throw new Error("expected Uint8Array, got "+typeof e);return e}class d{clone(){return this._cloneInto()}}const[h,f,p]=[[],[],[]],g=BigInt(0),m=BigInt(1),b=BigInt(2),w=BigInt(7),y=BigInt(256),v=BigInt(113);for(let e=0,t=m,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],h.push(2*(5*r+n)),f.push((e+1)*(e+2)/2%64);let i=g;for(let e=0;e<7;e++)t=(t<<m^(t>>w)*v)%y,t&b&&(i^=m<<(m<<BigInt(e))-m);p.push(i)}const[x,C]=l(p,!0),k=(e,t,n)=>n>32?((e,t,n)=>t<<n-32|e>>>64-n)(e,t,n):((e,t,n)=>e<<n|t>>>32-n)(e,t,n),E=(e,t,n)=>n>32?((e,t,n)=>e<<n-32|t>>>64-n)(e,t,n):((e,t,n)=>t<<n|e>>>32-n)(e,t,n);class S extends d{constructor(e,t,n,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,r(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var a;this.state=new Uint8Array(200),this.state32=(a=this.state,new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)))}keccak(){!function(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let t=0;t<10;t++)n[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){const r=(t+8)%10,i=(t+2)%10,o=n[i],a=n[i+1],s=k(o,a,1)^n[r],c=E(o,a,1)^n[r+1];for(let n=0;n<50;n+=10)e[t+n]^=s,e[t+n+1]^=c}let t=e[2],i=e[3];for(let n=0;n<24;n++){const r=f[n],o=k(t,i,r),a=E(t,i,r),s=h[n];t=e[s],i=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let r=0;r<10;r++)n[r]=e[t+r];for(let r=0;r<10;r++)e[t+r]^=~n[(r+2)%10]&n[(r+4)%10]}e[0]^=x[r],e[1]^=C[r]}n.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);const{blockLen:t,state:n}=this,r=(e=u(e)).length;for(let i=0;i<r;){const o=Math.min(t-this.pos,r-i);for(let t=0;t<o;t++)n[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:n,blockLen:r}=this;e[n]^=t,0!=(128&t)&&n===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();const t=this.state,{blockLen:n}=this;for(let r=0,i=e.length;r<i;){this.posOut>=n&&this.keccak();const o=Math.min(n-this.posOut,i-r);e.set(t.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return r(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){i(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:n,outputLen:r,rounds:i,enableXOF:o}=this;return e||(e=new S(t,n,r,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=n,e.outputLen=r,e.enableXOF=o,e.destroyed=this.destroyed,e}}const P=((e,t,n)=>function(e){const t=t=>e().update(u(t)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}((()=>new S(t,e,n))))(1,136,32);var _=n(9450),A=n(6614),$=n(6704);function O(e,t){const n=t||"hex",r=P((0,_.v)(e,{strict:!1})?(0,A.O0)(e):e);return"bytes"===n?r:(0,$.NC)(r)}},7525:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});const r=new Map;function i({fn:e,id:t,shouldSplitBatch:n,wait:i=0}){const o=async()=>{const t=s();a();const n=t.map((({args:e})=>e));0!==n.length&&e(n).then((e=>{t.forEach((({pendingPromise:t},n)=>t.resolve?.([e[n],e])))})).catch((e=>{t.forEach((({pendingPromise:t})=>t.reject?.(e)))}))},a=()=>r.delete(t),s=()=>r.get(t)||[],c=e=>r.set(t,[...s(),e]);return{flush:a,async schedule(e){const t={},r=new Promise(((e,n)=>{t.resolve=e,t.reject=n})),a=n?.([...s().map((({args:e})=>e)),e]);return a&&o(),s().length>0?(c({args:e,pendingPromise:t}),r):(c({args:e,pendingPromise:t}),setTimeout(o,i),r)}}}},1159:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});const r=(e,t,n)=>JSON.stringify(e,((e,n)=>{const r="bigint"==typeof n?n.toString():n;return"function"==typeof t?t(e,r):r}),n)},5140:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var r=n(7509),i=n(230),o=n(4163),a=n(8697),s=n(3408);function c(e){const{account:t,gasPrice:n,maxFeePerGas:c,maxPriorityFeePerGas:l,to:u}=e,d=t?(0,r.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new i.b({address:d.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==n&&(void 0!==c||void 0!==l))throw new a.xY;if(c&&c>2n**256n-1n)throw new o.Hh({maxFeePerGas:c});if(l&&c&&l>c)throw new o.cs({maxFeePerGas:c,maxPriorityFeePerGas:l})}},1986:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(1260),i=n(4062);function o(e,t="wei"){return(0,i.b)(e,r.ez[t])}},6885:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(1260),i=n(4062);function o(e,t="wei"){return(0,i.b)(e,r.Zn[t])}},4062:function(e,t,n){"use strict";function r(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}n.d(t,{b:function(){return r}})},5883:function(){}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=n,i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"js/"+(28===e?"viem":e)+"."+{28:"91fc29c1",411:"a8cb8804",416:"255c55a8",912:"5173e88a",979:"304a6d97"}[e]+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="tooncoinweb:",i.l=function(n,r,o,a){if(e[n])e[n].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var h=function(t,r){s.onerror=s.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"}(),function(){var e={179:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,i){r=e[t]=[n,i]}));n.push(r[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=function(t,n){var r,o,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);c&&c(i)}for(t&&t(n);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=this.myApptooncoinweb=this.myApptooncoinweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";var e=i(7294),t=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},n=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}var o=i(6729),a=i.n(o),s=i(3518);const c=(0,s.ax)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),l=(0,s.ax)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var u=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},d=(e,t,n)=>(u(e,t,"read from private field"),n?n.call(e):t.get(e)),h=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},f=(e,t,n,r)=>(u(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),p=(e,t,n)=>(u(e,t,"access private method"),n),g=class extends(a()){constructor({chains:e=[c,l],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map((e=>e.url))]}isChainUnsupported(e){return!this.chains.some((t=>t.id===e))}setStorage(e){this.storage=e}},m=i(4883),b=i(9146),w=i(6929);class y extends b.G{constructor(e,{code:t,docsPath:n,metaMessages:r,shortMessage:i}){super(i,{cause:e,docsPath:n,metaMessages:r||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof w.bs?e.code:t??-1}}class v extends y{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class x extends y{constructor(e){super(e,{code:x.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class C extends y{constructor(e){super(e,{code:C.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class k extends y{constructor(e){super(e,{code:k.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class E extends y{constructor(e){super(e,{code:E.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class S extends y{constructor(e){super(e,{code:S.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class P extends y{constructor(e){super(e,{code:P.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class _ extends y{constructor(e){super(e,{code:_.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class A extends y{constructor(e){super(e,{code:A.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class $ extends y{constructor(e){super(e,{code:$.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class O extends y{constructor(e){super(e,{code:O.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class I extends y{constructor(e){super(e,{code:I.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class N extends y{constructor(e){super(e,{code:N.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class T extends v{constructor(e){super(e,{code:T.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class R extends v{constructor(e){super(e,{code:R.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class M extends v{constructor(e){super(e,{code:M.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class j extends v{constructor(e){super(e,{code:j.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class U extends v{constructor(e){super(e,{code:U.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class L extends v{constructor(e){super(e,{code:L.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class B extends y{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}var z=i(7509);const D=256;let F,W=D;function H(e=11){if(!F||W+e>2*D){F="",W=0;for(let e=0;e<D;e++)F+=(256+256*Math.random()|0).toString(16).substring(1)}return F.substring(W,W+++e)}function q(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:a="base"}=e,s=e.chain,c=e.account?(0,z.T)(e.account):void 0,{config:l,request:u,value:d}=e.transport({chain:s,pollingInterval:o}),h={account:c,batch:t,cacheTime:n,chain:s,key:r,name:i,pollingInterval:o,request:u,transport:{...l,...d},type:a,uid:H()};return Object.assign(h,{extend:function e(t){return n=>{const r=n(t);for(const e in h)delete r[e];const i={...t,...r};return Object.assign(i,{extend:e(i)})}}(h)})}var G=i(449);async function V(e){const t=await e.request({method:"eth_chainId"});return(0,G.ly)(t)}var K=i(6704),Z=i(8008),Q=i(7644),Y=i(632);const X="/docs/contract/encodeDeployData";function J({abi:e,args:t,bytecode:n}){if(!t||0===t.length)return n;const r=e.find((e=>"type"in e&&"constructor"===e.type));if(!r)throw new Z.fM({docsPath:X});if(!("inputs"in r))throw new Z.cO({docsPath:X});if(!r.inputs||0===r.inputs.length)throw new Z.cO({docsPath:X});const i=(0,Y.E)(r.inputs,t);return(0,Q.SM)([n,i])}class ee extends b.G{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}var te=i(4163),ne=i(8697),re=i(7342),ie=i(5384),oe=i(2721),ae=i(5140),se=i(6885);class ce extends b.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class le extends b.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class ue extends b.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,se.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class de extends b.G{constructor({blockHash:e,blockNumber:t}){let n="Block";e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const he={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function fe(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,G.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,G.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?he[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function pe(e){const t=e.transactions?.map((e=>"string"==typeof e?e:fe(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function ge(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}={}){const o=r??"latest",a=i??!1,s=void 0!==n?(0,K.eC)(n):void 0;let c=null;if(c=t?await e.request({method:"eth_getBlockByHash",params:[t,a]}):await e.request({method:"eth_getBlockByNumber",params:[s||o,a]}),!c)throw new de({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||pe)(c)}async function me(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function be(e,t){const{block:n,chain:r=e.chain,request:i}=t||{};if("function"==typeof r?.fees?.defaultPriorityFee){const t=n||await ge(e);return r.fees.defaultPriorityFee({block:t,client:e,request:i})}if(void 0!==r?.fees?.defaultPriorityFee)return r?.fees?.defaultPriorityFee;try{const t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,G.y_)(t)}catch{const[t,r]=await Promise.all([n?Promise.resolve(n):ge(e),me(e)]);if("bigint"!=typeof t.baseFeePerGas)throw new le;const i=r-t.baseFeePerGas;return i<0n?0n:i}}async function we(e,t){const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},a=await(async()=>"function"==typeof r?.fees?.baseFeeMultiplier?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(a<1)throw new ce;const s=10**(a.toString().split(".")[1]?.length??0),c=e=>e*BigInt(Math.ceil(a*s))/BigInt(s),l=n||await ge(e);if("function"==typeof r?.fees?.estimateFeesPerGas)return r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:o});if("eip1559"===o){if("bigint"!=typeof l.baseFeePerGas)throw new le;const t=i?.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await be(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await me(e))}}var ye=i(1986);class ve extends b.G{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:o,gasPrice:a,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){const h=(0,ne.xr)({from:t?.address,to:u,value:void 0!==d&&`${(0,ye.d)(d)} ${r?.nativeCurrency.symbol||"ETH"}`,data:i,gas:o,gasPrice:void 0!==a&&`${(0,se.o)(a)} gwei`,maxFeePerGas:void 0!==s&&`${(0,se.o)(s)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,se.o)(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}async function xe(e,t){const n=t.account??e.account;if(!n)throw new ee({docsPath:"/docs/actions/public/estimateGas"});const r=(0,z.T)(n);try{const{accessList:n,blockNumber:i,blockTag:o,data:a,gas:s,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:f,...p}="local"===r.type?await ke(e,t):t,g=(i?(0,K.eC)(i):void 0)||o;(0,ae.F)(t);const m=e.chain?.formatters?.transactionRequest?.format||oe.tG,b=m({...(0,ie.K)(p,{format:m}),from:r.address,accessList:n,data:a,gas:s,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:f}),w=await e.request({method:"eth_estimateGas",params:g?[b,g]:[b]});return BigInt(w)}catch(n){throw function(e,{docsPath:t,...n}){const r=(()=>{const t=(0,re.k)(e,n);return t instanceof te.cj?e:t})();return new ve(r,{docsPath:t,...n})}(n,{...t,account:r,chain:e.chain})}}async function Ce(e,{address:t,blockTag:n="latest",blockNumber:r}){const i=await e.request({method:"eth_getTransactionCount",params:[t,r?(0,K.eC)(r):n]});return(0,G.ly)(i)}async function ke(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:a}=t;if(!n)throw new ee;const s=(0,z.T)(n),c=await ge(e,{blockTag:"latest"}),l={...t,from:s.address};if(void 0===o&&(l.nonce=await Ce(e,{address:s.address,blockTag:"pending"})),void 0===a)try{l.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new ne.j3({transaction:e})}(l)}catch{l.type="bigint"==typeof c.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===l.type){const{maxFeePerGas:n,maxPriorityFeePerGas:i}=await we(e,{block:c,chain:r,request:l});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new ue({maxPriorityFeePerGas:i});l.maxPriorityFeePerGas=i,l.maxFeePerGas=n}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new le;const{gasPrice:n}=await we(e,{block:c,chain:r,request:l,type:"legacy"});l.gasPrice=n}return void 0===i&&(l.gas=await xe(e,{...l,account:{address:s.address,type:"json-rpc"}})),(0,ae.F)(l),l}async function Ee(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function Se(e,t){const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:a,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:f,...p}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/sendTransaction"});const g=(0,z.T)(n);try{let n;if((0,ae.F)(t),null!==r&&(n=await V(e),(0,s.qg)({currentChainId:n,chain:r})),"local"===g.type){const t=await ke(e,{account:g,accessList:i,chain:r,data:o,gas:a,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:f,...p});n||(n=await V(e));const s=r?.serializers?.transaction,m=await g.signTransaction({...t,chainId:n},{serializer:s});return await Ee(e,{serializedTransaction:m})}const m=r?.formatters?.transactionRequest?.format||oe.tG,b=m({...(0,ie.K)(p,{format:m}),accessList:i,data:o,from:g.address,gas:a,gasPrice:c,maxFeePerGas:l,maxPriorityFeePerGas:u,nonce:d,to:h,value:f});return await e.request({method:"eth_sendTransaction",params:[b]})}catch(e){throw function(e,{docsPath:t,...n}){const r=(()=>{const t=(0,re.k)(e,n);return t instanceof te.cj?e:t})();return new ne.mk(r,{docsPath:t,...n})}(e,{...t,account:g,chain:t.chain||void 0})}}var Pe=i(9450),_e=i(1159),Ae=i(230),$e=i(3408),Oe=i(7476);const Ie=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Ne=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Te({domain:e,message:t,primaryType:n,types:r}){const i=r,o=(e,t)=>{for(const n of e){const{name:e,type:r}=n,a=r,s=t[e],c=a.match(Ne);if(c&&("number"==typeof s||"bigint"==typeof s)){const[e,t,n]=c;(0,K.eC)(s,{signed:"int"===t,size:parseInt(n)/8})}if("address"===a&&"string"==typeof s&&!(0,$e.U)(s))throw new Ae.b({address:s});const l=a.match(Ie);if(l){const[e,t]=l;if(t&&(0,Oe.d)(s)!==parseInt(t))throw new Z.KY({expectedSize:parseInt(t),givenSize:(0,Oe.d)(s)})}const u=i[a];u&&o(u,s)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),"EIP712Domain"!==n){const e=i[n];o(e,t)}}function Re({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}var Me=i(2106);function je(e){return{addChain:t=>async function(e,{chain:t}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:a}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,K.eC)(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:a?Object.values(a).map((({url:e})=>e)):void 0}]})}(e,t),deployContract:t=>function(e,{abi:t,args:n,bytecode:r,...i}){return Se(e,{...i,data:J({abi:t,args:n,bytecode:r})})}(e,t),getAddresses:()=>async function(e){return"local"===e.account?.type?[e.account.address]:(await e.request({method:"eth_accounts"})).map((e=>(0,m.x)(e)))}(e),getChainId:()=>V(e),getPermissions:()=>async function(e){return await e.request({method:"wallet_getPermissions"})}(e),prepareTransactionRequest:t=>ke(e,t),requestAddresses:()=>async function(e){return(await e.request({method:"eth_requestAccounts"})).map((e=>(0,m.K)(e)))}(e),requestPermissions:t=>async function(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}(e,t),sendRawTransaction:t=>Ee(e,t),sendTransaction:t=>Se(e,t),signMessage:t=>async function(e,{account:t=e.account,message:n}){if(!t)throw new ee({docsPath:"/docs/actions/wallet/signMessage"});const r=(0,z.T)(t);if("local"===r.type)return r.signMessage({message:n});const i="string"==typeof n?(0,K.$G)(n):n.raw instanceof Uint8Array?(0,K.NC)(n.raw):n.raw;return e.request({method:"personal_sign",params:[i,r.address]})}(e,t),signTransaction:t=>async function(e,t){const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new ee({docsPath:"/docs/actions/wallet/signTransaction"});const o=(0,z.T)(n);(0,ae.F)({account:o,...t});const a=await V(e);null!==r&&(0,s.qg)({currentChainId:a,chain:r});const c=r?.formatters||e.chain?.formatters,l=c?.transactionRequest?.format||oe.tG;return"local"===o.type?o.signTransaction({...i,chainId:a},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:(0,K.eC)(a),from:o.address}]})}(e,t),signTypedData:t=>async function(e,{account:t=e.account,domain:n,message:r,primaryType:i,types:o}){if(!t)throw new ee({docsPath:"/docs/actions/wallet/signTypedData"});const a=(0,z.T)(t),s={EIP712Domain:Re({domain:n}),...o};if(Te({domain:n,message:r,primaryType:i,types:s}),"local"===a.type)return a.signTypedData({domain:n,primaryType:i,types:s,message:r});const c=(0,_e.P)({domain:n??{},primaryType:i,types:s,message:r},((e,t)=>(0,Pe.v)(t)?t.toLowerCase():t));return e.request({method:"eth_signTypedData_v4",params:[a.address,c]})}(e,t),switchChain:t=>async function(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,K.eC)(t)}]})}(e,t),watchAsset:t=>async function(e,t){return await e.request({method:"wallet_watchAsset",params:t})}(e,t),writeContract:t=>async function(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...a}){const s=(0,Me.R)({abi:t,args:r,functionName:o});return await Se(e,{data:`${s}${i?i.replace("0x",""):""}`,to:n,...a})}(e,t)}}function Ue(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return q({...e,key:t,name:n,transport:e=>r({...e,retryCount:0}),type:"walletClient"}).extend(je)}async function Le(e){return new Promise((t=>setTimeout(t,e)))}function Be(e,{delay:t=100,retryCount:n=2,shouldRetry:r=(()=>!0)}={}){return new Promise(((i,o)=>{const a=async({count:s=0}={})=>{try{const t=await e();i(t)}catch(e){if(s<n&&await r({count:s,error:e}))return(async({error:e})=>{const n="function"==typeof t?t({count:s,error:e}):t;n&&await Le(n),a({count:s+1})})({error:e});o(e)}};a()}))}const ze=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:!!(e instanceof w.Gg&&e.status)&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function De(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>Be((async()=>{try{return await e(r)}catch(e){const t=e;switch(t.code){case x.code:throw new x(t);case C.code:throw new C(t);case k.code:throw new k(t);case E.code:throw new E(t);case S.code:throw new S(t);case P.code:throw new P(t);case _.code:throw new _(t);case A.code:throw new A(t);case $.code:throw new $(t);case O.code:throw new O(t);case I.code:throw new I(t);case N.code:throw new N(t);case T.code:throw new T(t);case R.code:throw new R(t);case M.code:throw new M(t);case j.code:throw new j(t);case U.code:throw new U(t);case L.code:throw new L(t);case 5e3:throw new T(t);default:if(e instanceof b.G)throw e;throw new B(t)}}}),{delay:({count:e,error:n})=>{if(n&&n instanceof w.Gg){const e=n?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:n,shouldRetry:({error:e})=>!ze(e)})}function Fe({key:e,name:t,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:a},s){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:i,timeout:o,type:a},request:De(n,{retryCount:r,retryDelay:i}),value:s}}function We(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>Fe({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}var He,qe=class extends g{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;const e=window.ethereum;return e?.providers?e.providers[0]:e},...t};super({chains:e,options:n}),this.id="injected",h(this,He,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,m.K)(e[0])})},this.onChainChanged=e=>{const t=r(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=async e=>{1013===e.code&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};const i=n.getProvider();if("string"==typeof n.name)this.name=n.name;else if(i){const e=function(e){if(!e)return"Injected";const t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){const n=new Set;let r=1;for(const i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${r}`,r+=1),n.add(e)}const i=[...n];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);n.name?this.name=n.name(e):this.name="string"==typeof e?e:e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{const t=await this.getProvider();if(!t)throw new n;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await t.request({method:"eth_requestAccounts"}),i=(0,m.K)(r[0]);let o=await this.getChainId(),a=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,a=this.isChainUnsupported(o)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new T(e);if(-32002===e.code)throw new A(e);throw e}}async disconnect(){const e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new n;const t=await e.request({method:"eth_accounts"});return(0,m.K)(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new n;return e.request({method:"eth_chainId"}).then(r)}async getProvider(){const e=this.options.getProvider();return e&&f(this,He,e),d(this,He)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Ue({account:n,chain:r,transport:We(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new n;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const r=await this.getProvider();if(!r)throw new n;const i=(0,K.eC)(e);try{return await Promise.all([r.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),new Promise((t=>this.on("change",(({chain:n})=>{n?.id===e&&t()}))))]),this.chains.find((t=>t.id===e))??{id:e,name:`Chain ${i}`,network:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){const o=this.chains.find((t=>t.id===e));if(!o)throw new t({chainId:e,connectorId:this.id});if(4902===n.code||4902===n?.data?.originalError?.code)try{if(await r.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[o.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),await this.getChainId()!==e)throw new T(new Error("User rejected switch after adding network."));return o}catch(e){throw new T(e)}if(this.isUserRejectedRequestError(n))throw new T(n);throw new L(n)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){const o=await this.getProvider();if(!o)throw new n;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};He=new WeakMap;var Ge=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Ve=(e,t,n)=>(Ge(e,t,"read from private field"),n?n.call(e):t.get(e)),Ke=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Ze=(e,t,n,r)=>(Ge(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Qe=i(7290),Ye=i(2668),Xe=i(2266),Je=i(1687),et=i(4147);function tt(e,t){if(!(e instanceof b.G))return!1;const n=e.walk((e=>e instanceof et.Lu));return n instanceof et.Lu&&("ResolverNotFound"===n.data?.errorName||"ResolverWildcardNotSupported"===n.data?.errorName||!!n.reason?.includes("Wildcard on non-extended resolvers is not supported")||"reverse"===t&&n.reason===Je.$[50])}var nt=i(6614),rt=i(5090);function it(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return(0,Pe.v)(t)?t:null}function ot(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,K.ci)(t);const n=e.split(".");for(let e=n.length-1;e>=0;e-=1){const r=it(n[e]),i=r?(0,nt.O0)(r):(0,rt.w)((0,nt.qX)(n[e]),"bytes");t=(0,rt.w)((0,Q.zo)([t,i]),"bytes")}return(0,K.ci)(t)}function at(e){const t=new Uint8Array(32).fill(0);return e?it(e)||(0,rt.w)((0,nt.qX)(e)):(0,K.ci)(t)}function st(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const n=new Uint8Array((0,nt.qX)(t).byteLength+2);let r=0;const i=t.split(".");for(let e=0;e<i.length;e++){let t=(0,nt.qX)(i[e]);t.byteLength>255&&(t=(0,nt.qX)(`[${at(i[e]).slice(2)}]`)),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}const ct=3;function lt(e,{abi:t,address:n,args:r,docsPath:i,functionName:o,sender:a}){const{code:s,data:c,message:l,shortMessage:u}=e instanceof et.VQ?e:e instanceof b.G?e.walk((e=>"data"in e))||e.walk():{},d=e instanceof Z.wb?new et.Dk({functionName:o}):[ct,S.code].includes(s)&&(c||l||u)?new et.Lu({abi:t,data:"object"==typeof c?c.data:c,functionName:o,message:u??l}):e;return new et.uq(d,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:a})}var ut=i(3218);async function dt(e,{abi:t,address:n,args:r,functionName:i,...o}){const a=(0,Me.R)({abi:t,args:r,functionName:i});try{const{data:s}=await(0,ut.R)(e,{data:a,to:n,...o});return(0,Ye.k)({abi:t,args:r,functionName:i,data:s||"0x"})}catch(e){throw lt(e,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}class ht extends b.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class ft extends b.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class pt extends b.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class gt extends b.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const mt=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,bt=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,wt=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,yt=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function vt(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function xt({uri:e,gatewayUrls:t}){const n=wt.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=vt(t?.ipfs,"https://ipfs.io"),i=vt(t?.arweave,"https://arweave.net"),o=e.match(mt),{protocol:a,subpath:s,target:c,subtarget:l=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||bt.test(e);if(e.startsWith("http")&&!u&&!d){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((u||d)&&c)return{uri:`${r}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&c)return{uri:`${i}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(yt,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new pt({uri:e})}function Ct(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new ht({data:e});return e.image||e.image_url||e.image_data}async function kt({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=xt({uri:t,gatewayUrls:e});if(r)return n;const i=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){return("object"!=typeof t||void 0===t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e}))}}(n);if(i)return n;throw new pt({uri:t})}async function Et(e,{blockNumber:t,blockTag:n,name:r,key:i,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,s.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=await dt(e,{address:a,abi:Qe.k3,functionName:"resolve",args:[(0,K.NC)(st(r)),(0,Me.R)({abi:Qe.nZ,functionName:"text",args:[ot(r),i]})],blockNumber:t,blockTag:n});if("0x"===o[0])return null;const s=(0,Ye.k)({abi:Qe.nZ,functionName:"text",data:o[0]});return""===s?null:s}catch(e){if(tt(e,"resolve"))return null;throw e}}function St(e,{method:t}){const n={};return"fallback"===e.transport.type&&e.transport.onResponse?.((({method:e,response:r,status:i,transport:o})=>{"success"===i&&t===e&&(n[r]=o.request)})),t=>n[t]||e.request}class Pt extends b.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var _t=i(3853),At=i(8789),$t=i(5578);function Ot({abi:e,eventName:t,args:n}){let r=e[0];if(t&&(r=(0,$t.m)({abi:e,args:n,name:t}),!r))throw new Z.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==r.type)throw new Z.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=(0,At.t)(r),o=(0,_t.e)(i);let a=[];if(n&&"inputs"in r){const e=r.inputs?.filter((e=>"indexed"in e&&e.indexed)),t=Array.isArray(n)?n:Object.values(n).length>0?e?.map((e=>n[e.name]))??[]:[];t.length>0&&(a=e?.map(((e,n)=>Array.isArray(t[n])?t[n].map(((r,i)=>It({param:e,value:t[n][i]}))):t[n]?It({param:e,value:t[n]}):null))??[])}return[o,...a]}function It({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,rt.w)((0,nt.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new Pt(e.type);return(0,Y.E)([e],[t])}async function Nt(e,{address:t,abi:n,args:r,eventName:i,fromBlock:o,strict:a,toBlock:s}){const c=St(e,{method:"eth_newFilter"}),l=i?Ot({abi:n,args:r,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,K.eC)(o):o,toBlock:"bigint"==typeof s?(0,K.eC)(s):s,topics:l}]});return{abi:n,args:r,eventName:i,id:u,request:c(u),strict:a,type:"event"}}async function Tt(e,{address:t,args:n,event:r,events:i,fromBlock:o,strict:a,toBlock:s}={}){const c=i??(r?[r]:void 0),l=St(e,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap((e=>Ot({abi:[e],eventName:e.name,args:n})))],r&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,K.eC)(o):o,toBlock:"bigint"==typeof s?(0,K.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:l(d),strict:a,toBlock:s,type:"event"}}async function Rt(e){const t=St(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}const Mt=new Map,jt=new Map;const Ut=e=>`blockNumber.${e}`;async function Lt(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await async function(e,{cacheKey:t,cacheTime:n=1/0}){const r=function(e){const t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Mt),r=t(e,jt);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}(t),i=r.response.get();if(i&&n>0&&(new Date).getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=e(),r.promise.set(o));try{const e=await o;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}((()=>e.request({method:"eth_blockNumber"})),{cacheKey:Ut(e.uid),cacheTime:n??t});return BigInt(r)}var Bt=i(6360);const zt="/docs/contract/decodeEventLog";function Dt({abi:e,data:t,strict:n,topics:r}){const i=n??!0,[o,...a]=r;if(!o)throw new Z.FM({docsPath:zt});const s=e.find((e=>"event"===e.type&&o===(0,_t.e)((0,At.t)(e))));if(!s||!("name"in s)||"event"!==s.type)throw new Z.lC(o,{docsPath:zt});const{name:c,inputs:l}=s,u=l?.some((e=>!("name"in e&&e.name)));let d=u?[]:{};const h=l.filter((e=>"indexed"in e&&e.indexed));for(let e=0;e<h.length;e++){const t=h[e],n=a[e];if(!n)throw new Z.Gy({abiItem:s,param:t});d[t.name||e]=Ft({param:t,value:n})}const f=l.filter((e=>!("indexed"in e&&e.indexed)));if(f.length>0)if(t&&"0x"!==t)try{const e=(0,Bt.r)(f,t);if(e)if(u)d=[...d,...e];else for(let t=0;t<f.length;t++)d[f[t].name]=e[t]}catch(e){if(i){if(e instanceof Z.xB)throw new Z.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new Z.SM({abiItem:s,data:"0x",params:f,size:0});return{eventName:c,args:Object.values(d).length>0?d:void 0}}function Ft({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,Bt.r)([e],t)||[])[0]}function Wt(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}async function Ht(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:a,args:s,strict:c}={}){const l=c??!1,u=a??(o?[o]:void 0);let d,h=[];return u&&(h=[u.flatMap((e=>Ot({abi:[e],eventName:e.name,args:s})))],o&&(h=h[0])),d=n?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:n}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"==typeof r?(0,K.eC)(r):r,toBlock:"bigint"==typeof i?(0,K.eC)(i):i}]}),d.map((e=>{try{const{eventName:t,args:n}=u?Dt({abi:u,data:e.data,topics:e.topics,strict:l}):{eventName:void 0,args:void 0};return Wt(e,{args:n,eventName:t})}catch(t){let n,r;if(t instanceof Z.SM||t instanceof Z.Gy){if(l)return;n=t.abiItem.name,r=t.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Wt(e,{args:r?[]:{},eventName:n})}})).filter(Boolean)}async function qt(e,{abi:t,address:n,args:r,blockHash:i,eventName:o,fromBlock:a,toBlock:s,strict:c}){const l=o?(0,$t.m)({abi:t,name:o}):void 0;return Ht(e,{address:n,args:r,blockHash:i,event:l,events:l?void 0:t.filter((e=>"event"===e.type)),fromBlock:a,toBlock:s,strict:c})}async function Gt(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map((e=>{if("string"==typeof e)return e;try{const{eventName:r,args:i}="abi"in t&&t.abi?Dt({abi:t.abi,data:e.data,topics:e.topics,strict:n}):{eventName:void 0,args:void 0};return Wt(e,{args:i,eventName:r})}catch(n){let r,i;if(n instanceof Z.SM||n instanceof Z.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Wt(e,{args:i?[]:{},eventName:r})}})).filter(Boolean)}async function Vt(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){const a=r||"latest",s=void 0!==n?(0,K.eC)(n):void 0;let c=null;if(i?c=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,K.eC)(o)]}):(s||a)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,K.eC)(o)]})),!c)throw new ne.Bh({blockHash:t,blockNumber:n,blockTag:a,hash:i,index:o});return(e.chain?.formatters?.transaction?.format||fe)(c)}const Kt={"0x0":"reverted","0x1":"success"};function Zt(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>Wt(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,G.ly)(e.transactionIndex):null,status:e.status?Kt[e.status]:null,type:e.type?he[e.type]||e.type:null}}async function Qt(e,{hash:t}){const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new ne.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||Zt)(n)}async function Yt(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}const Xt="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";async function Jt(e,{address:t,hash:n,signature:r,...i}){const o=(0,Pe.v)(r)?r:(0,K.NC)(r);try{const{data:r}=await(0,ut.R)(e,{data:J({abi:Qe.$o,args:[t,n,o],bytecode:Xt}),...i});return a=r??"0x0",s="0x1",function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}((0,Pe.v)(a)?(0,nt.O0)(a):a,(0,Pe.v)(s)?(0,nt.O0)(s):s)}catch(e){if(e instanceof et.cg)return!1;throw e}var a,s}function en({domain:e,message:t,primaryType:n,types:r}){const i=void 0===e?{}:e,o={EIP712Domain:Re({domain:i}),...r};Te({domain:i,message:t,primaryType:n,types:o});const a=["0x1901"];return i&&a.push(function({domain:e,types:t}){return tn({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:o})),"EIP712Domain"!==n&&a.push(tn({data:t,primaryType:n,types:o})),(0,rt.w)((0,Q.zo)(a))}function tn({data:e,primaryType:t,types:n}){const r=nn({data:e,primaryType:t,types:n});return(0,rt.w)(r)}function nn({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],i=[rn({primaryType:t,types:n})];for(const o of n[t]){const[t,a]=an({types:n,name:o.name,type:o.type,value:e[o.name]});r.push(t),i.push(a)}return(0,Y.E)(r,i)}function rn({primaryType:e,types:t}){const n=(0,K.NC)(function({primaryType:e,types:t}){let n="";const r=on({primaryType:e,types:t});r.delete(e);const i=[e,...Array.from(r).sort()];for(const e of i)n+=`${e}(${t[e].map((({name:e,type:t})=>`${t} ${e}`)).join(",")})`;return n}({primaryType:e,types:t}));return(0,rt.w)(n)}function on({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),i=r?.[0];if(n.has(i)||void 0===t[i])return n;n.add(i);for(const e of t[i])on({primaryType:e.type,types:t},n);return n}function an({types:e,name:t,type:n,value:r}){if(void 0!==e[n])return[{type:"bytes32"},(0,rt.w)(nn({data:r,primaryType:n,types:e}))];if("bytes"===n)return r="0x"+((r.length%2?"0":"")+r.slice(2)),[{type:"bytes32"},(0,rt.w)(r)];if("string"===n)return[{type:"bytes32"},(0,rt.w)((0,K.NC)(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map((n=>an({name:t,type:i,types:e,value:n})));return[{type:"bytes32"},(0,rt.w)((0,Y.E)(o.map((([e])=>e)),o.map((([,e])=>e))))]}return[{type:n},r]}BigInt(0),BigInt(1),BigInt(2);const sn=new Map,cn=new Map;let ln=0;function un(e,t,n){const r=++ln,i=()=>sn.get(e)||[],o=()=>{const t=cn.get(e);1===i().length&&t&&t(),(()=>{const t=i();sn.set(e,t.filter((e=>e.id!==r)))})()},a=i();if(sn.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return o;const s={};for(const e in t)s[e]=(...t)=>{const n=i();0!==n.length&&n.forEach((n=>n.fns[e]?.(...t)))};const c=n(s);return"function"==typeof c&&cn.set(e,c),o}function dn(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const s=await(n?.(a))??r;await Le(s);const c=async()=>{i&&(await e({unpoll:o}),await Le(r),c())};c()})(),o}function hn(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:a=e.pollingInterval}){let s;return(void 0!==o?o:"webSocket"!==e.transport.type)?un((0,_e.P)(["watchBlockNumber",e.uid,t,n,a]),{onBlockNumber:r,onError:i},(r=>dn((async()=>{try{const t=await Lt(e,{cacheTime:0});if(s){if(t===s)return;if(t-s>1&&n)for(let e=s+1n;e<t;e++)r.onBlockNumber(e,s),s=e}(!s||t>s)&&(r.onBlockNumber(t,s),s=t)}catch(e){r.onError?.(e)}}),{emitOnBegin:t,interval:a}))):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!t)return;const n=(0,G.y_)(e.result?.number);r(n,s),s=n},onError(e){i?.(e)}});n=o,t||n()}catch(e){i?.(e)}})(),n})()}function fn(e){return{call:t=>(0,ut.R)(e,t),createBlockFilter:()=>async function(e){const t=St(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}(e),createContractEventFilter:t=>Nt(e,t),createEventFilter:t=>Tt(e,t),createPendingTransactionFilter:()=>Rt(e),estimateContractGas:t=>async function(e,{abi:t,address:n,args:r,functionName:i,...o}){const a=(0,Me.R)({abi:t,args:r,functionName:i});try{return await xe(e,{data:a,to:n,...o})}catch(e){const a=o.account?(0,z.T)(o.account):void 0;throw lt(e,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:a?.address})}}(e,t),estimateGas:t=>xe(e,t),getBalance:t=>async function(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n?(0,K.eC)(n):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||r]});return BigInt(o)}(e,t),getBlock:t=>ge(e,t),getBlockNumber:t=>Lt(e,t),getBlockTransactionCount:t=>async function(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const i=void 0!==n?(0,K.eC)(n):void 0;let o;return o=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),(0,G.ly)(o)}(e,t),getBytecode:t=>async function(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=void 0!==n?(0,K.eC)(n):void 0,o=await e.request({method:"eth_getCode",params:[t,i||r]});if("0x"!==o)return o}(e,t),getChainId:()=>V(e),getContractEvents:t=>qt(e,t),getEnsAddress:t=>async function(e,{blockNumber:t,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=(0,s.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o=(0,Me.R)({abi:Qe.X$,functionName:"addr",...null!=r?{args:[ot(i),BigInt(r)]}:{args:[ot(i)]}}),s=await dt(e,{address:a,abi:Qe.k3,functionName:"resolve",args:[(0,K.NC)(st(i)),o],blockNumber:t,blockTag:n});if("0x"===s[0])return null;const c=(0,Ye.k)({abi:Qe.X$,args:null!=r?[ot(i),BigInt(r)]:void 0,functionName:"addr",data:s[0]});return"0x"===c||"0x00"===(0,Xe.f)(c)?null:c}catch(e){if(tt(e,"resolve"))return null;throw e}}(e,t),getEnsAvatar:t=>async function(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const a=await Et(e,{blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!a)return null;try{return await async function(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?async function(e,{gatewayUrls:t,record:n}){const r=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,a]=n.split(":"),[s,c]=r.split(":");if(!o||"eip155"!==o.toLowerCase())throw new ft({reason:"Only EIP-155 supported"});if(!a)throw new ft({reason:"Chain ID not found"});if(!c)throw new ft({reason:"Contract address not found"});if(!i)throw new ft({reason:"Token ID not found"});if(!s)throw new ft({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}(n),i=await async function(e,{nft:t}){if("erc721"===t.namespace)return dt(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return dt(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new gt({namespace:t.namespace})}(e,{nft:r}),{uri:o,isOnChain:a,isEncoded:s}=xt({uri:i,gatewayUrls:t});if(a&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const e=s?atob(o.replace("data:application/json;base64,","")):o;return kt({uri:Ct(JSON.parse(e)),gatewayUrls:t})}let c=r.tokenID;return"erc1155"===r.namespace&&(c=c.replace("0x","").padStart(64,"0")),async function({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then((e=>e.json()));return await kt({gatewayUrls:e,uri:Ct(n)})}catch{throw new pt({uri:t})}}({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}(e,{gatewayUrls:t,record:n}):kt({uri:n,gatewayUrls:t})}(e,{record:a,gatewayUrls:r})}catch{return null}}(e,t),getEnsName:t=>async function(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,s.LI)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const a=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await dt(e,{address:o,abi:Qe.du,functionName:"reverse",args:[(0,K.NC)(st(a))],blockNumber:n,blockTag:r}))[0]}catch(e){if(tt(e,"reverse"))return null;throw e}}(e,t),getEnsResolver:t=>async function(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=(0,s.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[a]=await dt(e,{address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,K.NC)(st(r))],blockNumber:t,blockTag:n});return a}(e,t),getEnsText:t=>Et(e,t),getFeeHistory:t=>async function(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?(0,K.eC)(n):void 0;return{baseFeePerGas:(a=await e.request({method:"eth_feeHistory",params:[(0,K.eC)(t),o||r,i]})).baseFeePerGas.map((e=>BigInt(e))),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map((e=>e.map((e=>BigInt(e)))))};var a}(e,t),estimateFeesPerGas:t=>async function(e,t){return we(e,t)}(e,t),getFilterChanges:e=>Gt(0,e),getFilterLogs:e=>async function(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map((e=>{try{const{eventName:r,args:i}="abi"in t&&t.abi?Dt({abi:t.abi,data:e.data,topics:e.topics,strict:n}):{eventName:void 0,args:void 0};return Wt(e,{args:i,eventName:r})}catch(n){let r,i;if(n instanceof Z.SM||n instanceof Z.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}return Wt(e,{args:i?[]:{},eventName:r})}})).filter(Boolean)}(0,e),getGasPrice:()=>me(e),getLogs:t=>Ht(e,t),getProof:t=>async function(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",a=void 0!==n?(0,K.eC)(n):void 0;return s=await e.request({method:"eth_getProof",params:[t,i,a||o]}),{...s,balance:s.balance?BigInt(s.balance):void 0,nonce:s.nonce?(0,G.ly)(s.nonce):void 0,storageProof:s.storageProof?(c=s.storageProof,c.map((e=>({...e,value:BigInt(e.value)})))):void 0};var s,c}(e,t),estimateMaxPriorityFeePerGas:t=>async function(e,t){return be(e,t)}(e,t),getStorageAt:t=>async function(e,{address:t,blockNumber:n,blockTag:r="latest",slot:i}){const o=void 0!==n?(0,K.eC)(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||r]})}(e,t),getTransaction:t=>Vt(e,t),getTransactionConfirmations:t=>async function(e,{hash:t,transactionReceipt:n}){const[r,i]=await Promise.all([Lt(e),t?Vt(e,{hash:t}):void 0]),o=n?.blockNumber||i?.blockNumber;return o?r-o+1n:0n}(e,t),getTransactionCount:t=>Ce(e,t),getTransactionReceipt:t=>Qt(e,t),multicall:t=>async function(e,t){const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:a,multicallAddress:c}=t,l=r??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024);let u=c;if(!u){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");u=(0,s.LI)({blockNumber:i,chain:e.chain,contract:"multicall3"})}const d=[[]];let h=0,f=0;for(let e=0;e<a.length;e++){const{abi:t,address:r,args:i,functionName:o}=a[e];try{const e=(0,Me.R)({abi:t,args:i,functionName:o});f+=(e.length-2)/2,l>0&&f>l&&d[h].length>0&&(h++,f=(e.length-2)/2,d[h]=[]),d[h]=[...d[h],{allowFailure:!0,callData:e,target:r}]}catch(e){const a=lt(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/multicall",functionName:o});if(!n)throw a;d[h]=[...d[h],{allowFailure:!0,callData:"0x",target:r}]}}const p=await Promise.allSettled(d.map((t=>dt(e,{abi:Qe.F8,address:u,args:[t],blockNumber:i,blockTag:o,functionName:"aggregate3"})))),g=[];for(let e=0;e<p.length;e++){const t=p[e];if("rejected"===t.status){if(!n)throw t.reason;for(let n=0;n<d[e].length;n++)g.push({status:"failure",error:t.reason,result:void 0});continue}const r=t.value;for(let t=0;t<r.length;t++){const{returnData:i,success:o}=r[t],{callData:s}=d[e][t],{abi:c,address:l,functionName:u,args:h}=a[g.length];try{if("0x"===s)throw new Z.wb;if(!o)throw new et.VQ({data:i});const e=(0,Ye.k)({abi:c,args:h,data:i,functionName:u});g.push(n?{result:e,status:"success"}:e)}catch(e){const t=lt(e,{abi:c,address:l,args:h,docsPath:"/docs/contract/multicall",functionName:u});if(!n)throw t;g.push({error:t,result:void 0,status:"failure"})}}}if(g.length!==a.length)throw new b.G("multicall results mismatch");return g}(e,t),prepareTransactionRequest:t=>ke(e,t),readContract:t=>dt(e,t),sendRawTransaction:t=>Ee(e,t),simulateContract:t=>async function(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...a}){const s=a.account?(0,z.T)(a.account):void 0,c=(0,Me.R)({abi:t,args:r,functionName:o});try{const{data:s}=await(0,ut.R)(e,{batch:!1,data:`${c}${i?i.replace("0x",""):""}`,to:n,...a});return{result:(0,Ye.k)({abi:t,args:r,functionName:o,data:s||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...a}}}catch(e){throw lt(e,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}(e,t),verifyMessage:t=>async function(e,{address:t,message:n,signature:r,...i}){const o=function(e,t){const n="string"==typeof e?(0,nt.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,nt.O0)(e.raw),r=(0,nt.qX)(`Ethereum Signed Message:\n${n.length}`);return(0,rt.w)((0,Q.zo)([r,n]),void 0)}(n);return Jt(e,{address:t,hash:o,signature:r,...i})}(e,t),verifyTypedData:t=>async function(e,{address:t,signature:n,message:r,primaryType:i,types:o,domain:a,...s}){return Jt(e,{address:t,hash:en({message:r,primaryType:i,types:o,domain:a}),signature:n,...s})}(e,t),uninstallFilter:e=>Yt(0,e),waitForTransactionReceipt:t=>async function(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:i=e.pollingInterval,timeout:o}){const a=(0,_e.P)(["waitForTransactionReceipt",e.uid,n]);let s,c,l,u=!1;return new Promise(((d,h)=>{o&&setTimeout((()=>h(new ne.mc({hash:n}))),o);const f=un(a,{onReplaced:r,resolve:d,reject:h},(r=>{const o=hn(e,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let a=i;const d=e=>{o(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;return void d((()=>r.resolve(l)))}if(s||(u=!0,await Be((async()=>{s=await Vt(e,{hash:n}),s.blockNumber&&(a=s.blockNumber)}),{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await Qt(e,{hash:n}),t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;d((()=>r.resolve(l)))}catch(n){if(s&&(n instanceof ne.Bh||n instanceof ne.Yb))try{c=s;const n=(await ge(e,{blockNumber:a,includeTransactions:!0})).transactions.find((({from:e,nonce:t})=>e===c.from&&t===c.nonce));if(!n)return;if(l=await Qt(e,{hash:n.hash}),t>1&&(!l.blockNumber||a-l.blockNumber+1n<t))return;let i="replaced";n.to===c.to&&n.value===c.value?i="repriced":n.from===n.to&&0n===n.value&&(i="cancelled"),d((()=>{r.onReplaced?.({reason:i,replacedTransaction:c,transaction:n,transactionReceipt:l}),r.resolve(l)}))}catch(e){d((()=>r.reject(e)))}else d((()=>r.reject(n)))}}})}))}))}(e,t),watchBlocks:t=>function(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:a,poll:s,pollingInterval:c=e.pollingInterval}){const l=void 0!==s?s:"webSocket"!==e.transport.type,u=a??!1;let d;return l?un((0,_e.P)(["watchBlocks",e.uid,n,r,u,c]),{onBlock:i,onError:o},(i=>dn((async()=>{try{const r=await ge(e,{blockTag:t,includeTransactions:u});if(r.number&&d?.number){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){const n=await ge(e,{blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(!d?.number||"pending"===t&&!r?.number||r.number&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}}),{emitOnBegin:r,interval:c}))):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:r}=await e.transport.subscribe({params:["newHeads"],onData(n){if(!t)return;const r=(e.chain?.formatters?.block?.format||pe)(n.result);i(r,d),d=r},onError(e){o?.(e)}});n=r,t||n()}catch(e){o?.(e)}})(),n})()}(e,t),watchBlockNumber:t=>hn(e,t),watchContractEvent:t=>function(e,{abi:t,address:n,args:r,batch:i=!0,eventName:o,onError:a,onLogs:s,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){return(void 0!==c?c:"webSocket"!==e.transport.type)?(()=>{const c=(0,_e.P)(["watchContractEvent",n,r,i,e.uid,o,l]),d=u??!1;return un(c,{onLogs:s,onError:a},(a=>{let s,c,u=!1;const h=dn((async()=>{if(u)try{let o;if(c)o=await Gt(0,{filter:c});else{const i=await Lt(e);o=s&&s!==i?await qt(e,{abi:t,address:n,args:r,fromBlock:s+1n,toBlock:i,strict:d}):[],s=i}if(0===o.length)return;i?a.onLogs(o):o.forEach((e=>a.onLogs([e])))}catch(e){c&&e instanceof P&&(u=!1),a.onError?.(e)}else{try{c=await Nt(e,{abi:t,address:n,args:r,eventName:o,strict:d})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await Yt(0,{filter:c}),h()}}))})():(()=>{let i=!0,c=()=>i=!1;return(async()=>{try{const l=o?Ot({abi:t,eventName:o,args:r}):[],{unsubscribe:d}=await e.transport.subscribe({params:["logs",{address:n,topics:l}],onData(e){if(!i)return;const n=e.result;try{const{eventName:e,args:r}=Dt({abi:t,data:n.data,topics:n.topics,strict:u}),i=Wt(n,{args:r,eventName:e});s([i])}catch(e){let t,r;if(e instanceof Z.SM||e instanceof Z.Gy){if(u)return;t=e.abiItem.name,r=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Wt(n,{args:r?[]:{},eventName:t});s([i])}},onError(e){a?.(e)}});c=d,i||c()}catch(e){a?.(e)}})(),c})()}(e,t),watchEvent:t=>function(e,{address:t,args:n,batch:r=!0,event:i,events:o,onError:a,onLogs:s,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){const d=void 0!==c?c:"webSocket"!==e.transport.type,h=u??!1;return d?un((0,_e.P)(["watchEvent",t,n,r,e.uid,i,l]),{onLogs:s,onError:a},(a=>{let s,c,u=!1;const d=dn((async()=>{if(u)try{let l;if(c)l=await Gt(0,{filter:c});else{const r=await Lt(e);l=s&&s!==r?await Ht(e,{address:t,args:n,event:i,events:o,fromBlock:s+1n,toBlock:r}):[],s=r}if(0===l.length)return;r?a.onLogs(l):l.forEach((e=>a.onLogs([e])))}catch(e){c&&e instanceof P&&(u=!1),a.onError?.(e)}else{try{c=await Tt(e,{address:t,args:n,event:i,events:o,strict:h})}catch{}u=!0}}),{emitOnBegin:!0,interval:l});return async()=>{c&&await Yt(0,{filter:c}),d()}})):(()=>{let r=!0,c=()=>r=!1;return(async()=>{try{const l=o??(i?[i]:void 0);let d=[];l&&(d=[l.flatMap((e=>Ot({abi:[e],eventName:e.name,args:n})))],i&&(d=d[0]));const{unsubscribe:f}=await e.transport.subscribe({params:["logs",{address:t,topics:d}],onData(e){if(!r)return;const t=e.result;try{const{eventName:e,args:n}=Dt({abi:l,data:t.data,topics:t.topics,strict:h}),r=Wt(t,{args:n,eventName:e});s([r])}catch(e){let n,r;if(e instanceof Z.SM||e instanceof Z.Gy){if(u)return;n=e.abiItem.name,r=e.abiItem.inputs?.some((e=>!("name"in e&&e.name)))}const i=Wt(t,{args:r?[]:{},eventName:n});s([i])}},onError(e){a?.(e)}});c=f,r||c()}catch(e){a?.(e)}})(),c})()}(e,t),watchPendingTransactions:t=>function(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=e.pollingInterval}){return(void 0!==i?i:"webSocket"!==e.transport.type)?un((0,_e.P)(["watchPendingTransactions",e.uid,t,o]),{onTransactions:r,onError:n},(n=>{let r;const i=dn((async()=>{try{if(!r)try{return void(r=await Rt(e))}catch(e){throw i(),e}const o=await Gt(0,{filter:r});if(0===o.length)return;t?n.onTransactions(o):o.forEach((e=>n.onTransactions([e])))}catch(e){n.onError?.(e)}}),{emitOnBegin:!0,interval:o});return async()=>{r&&await Yt(0,{filter:r}),i()}})):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{const{unsubscribe:o}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!t)return;const n=e.result;r([n])},onError(e){n?.(e)}});i=o,t||i()}catch(e){n?.(e)}})(),i})()}(e,t)}}function pn(e){const{key:t="public",name:n="Public Client"}=e;return q({...e,key:t,name:n,type:"publicClient"}).extend(fn)}function gn(e,t={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:c})=>{let l=e,u=()=>{};const d=Fe({key:n,name:r,async request({method:e,params:n}){const r=async(i=0)=>{const o=l[i]({chain:t,retryCount:0,timeout:c});try{const t=await o.request({method:e,params:n});return u({method:e,params:n,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:n,transport:o,status:"error"}),ze(t))throw t;if(i===l.length-1)throw t;return r(i+1)}};return r()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:l.map((e=>e({chain:t,retryCount:0})))});if(i){const e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:a={}}){const{stability:s=.7,latency:c=.3}=a,l=[],u=async()=>{const a=await Promise.all(o.map((async t=>{const n=t({chain:e,retryCount:0,timeout:i}),r=Date.now();let o,a;try{await n.request({method:"net_listening"}),a=1}catch{a=0}finally{o=Date.now()}return{latency:o-r,success:a}})));l.push(a),l.length>r&&l.shift();const d=Math.max(...l.map((e=>Math.max(...e.map((({latency:e})=>e)))))),h=o.map(((e,t)=>{const n=l.map((e=>e[t].latency)),r=1-n.reduce(((e,t)=>e+t),0)/n.length/d,i=l.map((e=>e[t].success)),o=i.reduce(((e,t)=>e+t),0)/i.length;return 0===o?[0,t]:[c*r+s*o,t]})).sort(((e,t)=>t[0]-e[0]));n(h.map((([,e])=>o[e]))),await Le(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>l=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:l,weights:e.weights})}return d}}class mn extends b.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var bn=i(7525);const wn=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==i.g.WebSocket)return i.g.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}();function yn(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise(((i,o)=>{(async()=>{let a;try{const s=new AbortController;n>0&&(a=setTimeout((()=>{r?s.abort():o(t)}),n)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()}))}let vn=0;const xn=new Map;async function Cn(e){let t=xn.get(e);if(t)return t;const{schedule:n}=(0,bn.S)({id:e,fn:async()=>{const n=new wn(e),r=new Map,i=new Map,o=({data:e})=>{const t=JSON.parse(e),n="eth_subscription"===t.method,o=n?t.params.subscription:t.id,a=n?i:r,s=a.get(o);s&&s({data:e}),n||a.delete(o)},a=()=>{xn.delete(e),n.removeEventListener("close",a),n.removeEventListener("message",o)};return n.addEventListener("close",a),n.addEventListener("message",o),n.readyState===wn.CONNECTING&&await new Promise(((e,t)=>{n&&(n.onopen=e,n.onerror=t)})),t=Object.assign(n,{requests:r,subscriptions:i}),xn.set(e,t),[t]}}),[r,[i]]=await n();return i}const kn={http:async function(e,{body:t,fetchOptions:n={},timeout:r=1e4}){const{headers:i,method:o,signal:a}=n;try{const s=await yn((async({signal:s})=>await fetch(e,{...n,body:Array.isArray(t)?(0,_e.P)(t.map((e=>({jsonrpc:"2.0",id:e.id??vn++,...e})))):(0,_e.P)({jsonrpc:"2.0",id:t.id??vn++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:a||(r>0?s:void 0)})),{errorInstance:new w.W5({body:t,url:e}),timeout:r,signal:!0});let c;if(c=s.headers.get("Content-Type")?.startsWith("application/json")?await s.json():await s.text(),!s.ok)throw new w.Gg({body:t,details:(0,_e.P)(c.error)||s.statusText,headers:s.headers,status:s.status,url:e});return c}catch(n){if(n instanceof w.Gg)throw n;if(n instanceof w.W5)throw n;throw new w.Gg({body:t,details:n.message,url:e})}},webSocket:function(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new w.c9({body:t,url:e.url,details:"Socket is closed."});const r=vn++,i=({data:o})=>{const a=JSON.parse(o);"number"==typeof a.id&&r!==a.id||(n?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(r,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e},webSocketAsync:async function(e,{body:t,timeout:n=1e4}){return yn((()=>new Promise((n=>kn.webSocket(e,{body:t,onResponse:n})))),{errorInstance:new w.W5({body:t,url:e.url}),timeout:n})}};var En=i(1260);function Sn(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var r;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(r=n.getItem(e))?r:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}const Pn=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(e){return Pn(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return Pn(t)(e)}}}},_n=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"==typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach((n=>n(t,e)))}},i=()=>t,o={setState:r,getState:i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,o),o};var An=i(4062);function $n(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}var On=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},In=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},Nn=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},Tn=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Rn=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Mn(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let n,r;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!=t.length)return!1;for(r=n;0!=r--;)if(!Mn(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const i=Object.keys(e);if(n=i.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){const n=i[r];if(n&&!Mn(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}var jn=(e,{find:t,replace:n})=>e&&t(e)?n(e):"object"!=typeof e?e:Array.isArray(e)?e.map((e=>jn(e,{find:t,replace:n}))):e instanceof Object?Object.entries(e).reduce(((e,[r,i])=>({...e,[r]:jn(i,{find:t,replace:n})})),{}):e;function Un(e){const t=JSON.parse(e),n=jn(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return n}function Ln(e){return{accessList:e.accessList,account:e.account,blockNumber:e.blockNumber,blockTag:e.blockTag,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function Bn(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(En.Bd[e])}function zn(e,t){return e.slice(0,t).join(".")||"."}function Dn(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function Fn(e,t,n,r){return JSON.stringify(e,function(e,t){const n="function"==typeof t,r=[],i=[];return function(o,a){if("object"==typeof a)if(r.length){const e=Dn(r,this);0===e?r[r.length]=this:(r.splice(e),i.splice(e)),i[i.length]=o;const s=Dn(r,a);if(0!==s)return n?t.call(this,o,a,zn(i,s)):`[ref=${zn(i,s)}]`}else r[0]=a,i[0]=o;return e.call(this,o,a)}}(((e,n)=>{const r="bigint"==typeof n?`#bigint.${n.toString()}`:n;return t?.(e,r)||r}),r),n??void 0)}var Wn={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function Hn({deserialize:e=Un,key:t="wagmi",serialize:n=Fn,storage:r}){return{...r,getItem:(n,i=null)=>{const o=r.getItem(`${t}.${n}`);try{return o?e(o):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)r.removeItem(`${t}.${e}`);else try{r.setItem(`${t}.${e}`,n(i))}catch(e){console.error(e)}},removeItem:e=>r.removeItem(`${t}.${e}`)}}var qn,Gn,Vn,Kn,Zn,Qn="store",Yn=class{constructor({autoConnect:e=!1,connectors:t=[new qe],publicClient:n,storage:r=Hn({storage:"undefined"!=typeof window?window.localStorage:Wn}),logger:i={warn:console.warn},webSocketPublicClient:o}){Ke(this,Vn),this.publicClients=new Map,this.webSocketPublicClients=new Map,Ke(this,qn,void 0),Ke(this,Gn,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let a,s="disconnected";if(e)try{const e=r.getItem(Qn),t=e?.state?.data;s=t?.account?"reconnecting":"connecting",a=t?.chain?.id}catch(e){}const c="function"==typeof t?t():t;var l,u,d,h;c.forEach((e=>e.setStorage(r))),this.store=(h=((e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l;try{l=o.getStorage()}catch(e){}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...e)}),r,i);const u=Pn(o.serialize),d=()=>{const e=o.partialize({...r()});let t;const n=u({state:e,version:o.version}).then((e=>l.setItem(o.name,e))).catch((e=>{t=e}));if(t)throw t;return n},h=i.setState;i.setState=(e,t)=>{h(e,t),d()};const f=e(((...e)=>{n(...e),d()}),r,i);let p;const g=()=>{var e;if(!l)return;a=!1,s.forEach((e=>e(r())));const t=(null==(e=o.onRehydrateStorage)?void 0:e.call(o,r()))||void 0;return Pn(l.getItem.bind(l))(o.name).then((e=>{if(e)return o.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return p=o.merge(e,null!=(t=r())?t:f),n(p,!0),d()})).then((()=>{null==t||t(p,void 0),a=!0,c.forEach((e=>e(p)))})).catch((e=>{null==t||t(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.getStorage&&(l=e.getStorage())},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),p||f})(e,t)):((e,t)=>(n,r,i)=>{let o={storage:Sn((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,c=new Set;let l=o.storage;if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...e)}),r,i);const u=()=>{const e=o.partialize({...r()});return l.setItem(o.name,{state:e,version:o.version})},d=i.setState;i.setState=(e,t)=>{d(e,t),u()};const h=e(((...e)=>{n(...e),u()}),r,i);let f;const p=()=>{var e,t;if(!l)return;a=!1,s.forEach((e=>{var t;return e(null!=(t=r())?t:h)}));const i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:h))||void 0;return Pn(l.getItem.bind(l))(o.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return f=o.merge(e,null!=(t=r())?t:h),n(f,!0),u()})).then((()=>{null==i||i(f,void 0),f=r(),a=!0,c.forEach((e=>e(f)))})).catch((e=>{null==i||i(void 0,e)}))};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(l=e.storage)},clearStorage:()=>{null==l||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>p(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||p(),f||h})(e,t))((()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})})),{name:Qn,storage:r,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}),d=(e,t,n)=>{const r=n.subscribe;return n.subscribe=(e,t,i)=>{let o=e;if(t){const r=(null==i?void 0:i.equalityFn)||Object.is;let a=e(n.getState());o=n=>{const i=e(n);if(!r(a,i)){const e=a;t(a=i,e)}},(null==i?void 0:i.fireImmediately)&&t(a,a)}return r(o)},h(e,t,n)},d?_n(d):_n),this.storage=r,Ze(this,Gn,r?.getItem("wallet")),(this,l=Vn,u=Kn,Ge(this,l,"access private method"),u).call(this),e&&"undefined"!=typeof window&&setTimeout((async()=>await this.autoConnect()),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState((e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"})))}async destroy(){this.connector&&await(this.connector.disconnect?.()),Ze(this,qn,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Ve(this,qn))return;Ze(this,qn,!0),this.setState((e=>({...e,status:e.data?.account?"reconnecting":"connecting"})));const e=Ve(this,Gn)?[...this.connectors].sort((e=>e.id===Ve(this,Gn)?-1:1)):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized)continue;if(!await n.isAuthorized())continue;const e=await n.connect();this.setState((t=>({...t,connector:n,chains:n?.chains,data:e,status:"connected"}))),t=!0;break}return t||this.setState((e=>({...e,data:void 0,status:"disconnected"}))),Ze(this,qn,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t="function"==typeof e?e():e;t.forEach((e=>e.setStorage(this.args.storage))),this.setState((e=>({...e,connectors:t})))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.publicClients.get(e??-1),t)return t;const{publicClient:n}=this.args;return t="function"==typeof n?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState((e=>({...e,publicClient:this.getPublicClient({chainId:t})})))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e)return t;if(t=this.webSocketPublicClients.get(e??-1),t)return t;const{webSocketPublicClient:n}=this.args;return t="function"==typeof n?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){const t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState((e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})})))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function Xn(e){const t=new Yn(e);return Zn=t,t}function Jn(){if(!Zn)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Zn}async function er({chainId:e,connector:t}){const n=Jn(),r=n.connector;if(r&&t.id===r.id)throw new Nn;try{n.setState((e=>({...e,status:"connecting"})));const r=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState((e=>({...e,connector:t,chains:t?.chains,data:r,status:"connected"}))),n.storage.setItem("connected",!0),{...r,connector:t}}catch(e){throw n.setState((e=>({...e,status:e.connector?"connected":"disconnected"}))),e}}async function tr(){const e=Jn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}qn=new WeakMap,Gn=new WeakMap,Vn=new WeakSet,Kn=function(){const e=e=>{this.setState((t=>({...t,data:{...t.data,...e}})))},t=()=>{this.clearState()},n=e=>{this.setState((t=>({...t,error:e})))};this.store.subscribe((({connector:e})=>e),((r,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",n),r&&(r.on?.("change",e),r.on?.("disconnect",t),r.on?.("error",n))}));const{publicClient:r,webSocketPublicClient:i}=this.args;("function"==typeof r||"function"==typeof i)&&this.store.subscribe((({data:e})=>e?.chain?.id),(e=>{this.setState((t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})})))}))};var nr=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],rr=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function ir({chainId:e}={}){const t=Jn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function or({chainId:e}={}){const t=Jn();return await(t.connector?.getWalletClient?.({chainId:e}))||null}async function ar({abi:e,address:t,args:r,chainId:i,dataSuffix:o,functionName:a,walletClient:s,...c}){const l=ir({chainId:i}),u=s??await or({chainId:i});if(!u)throw new n;i&&pr({chainId:i});const{account:d,accessList:h,blockNumber:f,blockTag:p,gas:g,gasPrice:m,maxFeePerGas:b,maxPriorityFeePerGas:w,nonce:y,value:v}=Ln(c),{result:x,request:C}=await l.simulateContract({abi:e,address:t,functionName:a,args:r,account:d||u.account,accessList:h,blockNumber:f,blockTag:p,dataSuffix:o,gas:g,gasPrice:m,maxFeePerGas:b,maxPriorityFeePerGas:w,nonce:y,value:v});return{mode:"prepared",request:{...C,abi:e.filter((e=>"name"in e&&e.name===a)),chainId:i},result:x}}async function sr({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const r=ir(),o=e.reduce(((e,t,n)=>{const i=t.chainId??r.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:n}]}}),{}),a=()=>Object.entries(o).map((([e,r])=>async function({chainId:e,contracts:t,blockNumber:n,blockTag:r,...i}){const o=ir({chainId:e});if(!o.chains)throw new Tn;if(e&&o.chain.id!==e)throw new In({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}({allowFailure:i,chainId:parseInt(e),contracts:r.map((({contract:e})=>e)),blockNumber:t,blockTag:n}))),s=(await Promise.all(a())).flat(),c=Object.values(o).flatMap((e=>e.map((({index:e})=>e))));return s.reduce(((e,t,n)=>(e&&(e[c[n]]=t),e)),[])}catch(r){if(r instanceof et.uq)throw r;const o=()=>e.map((e=>async function({address:e,account:t,chainId:n,abi:r,args:i,functionName:o,blockNumber:a,blockTag:s}){return ir({chainId:n}).readContract({abi:r,address:e,account:t,functionName:o,args:i,blockNumber:a,blockTag:s})}({...e,blockNumber:t,blockTag:n})));return i?(await Promise.allSettled(o())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(o())}}async function cr(e){const t=await or({chainId:e.chainId});if(!t)throw new n;let r;if(e.chainId&&pr({chainId:e.chainId}),"prepared"===e.mode)r=e.request;else{const{chainId:t,mode:n,...i}=e;r=(await ar(i)).request}return{hash:await t.writeContract({...r,chain:e.chainId?{id:e.chainId}:null})}}function lr(){const{data:e,connector:t,status:n}=Jn();switch(n){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function ur(){const e=Jn(),t=e.data?.chain?.id,n=e.chains??[],r=[...e.publicClient?.chains||[],...n].find((e=>e.id===t))??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...e.data?.chain,id:t}:void 0,chains:n}}async function dr({chainId:e}){const{connector:t}=Jn();if(!t)throw new n;if(!t.switchChain)throw new Rn({connector:t});return t.switchChain(e)}function hr(e,{selector:t=(e=>e)}={}){const n=Jn().subscribe((({data:e,connector:n,status:r})=>t({address:e?.account,connector:n,status:r})),(()=>e(lr())),{equalityFn:$n});return n}function fr(e,{selector:t=(e=>e)}={}){const n=Jn().subscribe((({data:e,chains:n})=>t({chainId:e?.chain?.id,chains:n})),(()=>e(ur())),{equalityFn:$n});return n}function pr({chainId:e}){const{chain:t,chains:n}=ur(),r=t?.id;if(r&&e!==r)throw new On({activeChain:n.find((e=>e.id===r))?.name??`Chain ${r}`,targetChain:n.find((t=>t.id===e))?.name??`Chain ${e}`})}var gr=i(739),mr=i(7062),br=i(3110),wr=i(7390),yr=i(655);const vr=e=>e??yr.Ld;var xr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Cr=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=gr.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=gr.AccountController.state.address,this.balanceVal=gr.AccountController.state.balance,this.balanceSymbol=gr.AccountController.state.balanceSymbol,this.profileName=gr.AccountController.state.profileName,this.profileImage=gr.AccountController.state.profileImage,this.network=gr.NetworkController.state.caipNetwork,this.unsubscribe.push(gr.AccountController.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),gr.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return br.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${vr(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${vr(e)}
        avatarSrc=${vr(this.profileImage)}
        balance=${t?gr.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){gr.IN.open()}};xr([(0,wr.Cb)({type:Boolean})],Cr.prototype,"disabled",void 0),xr([(0,wr.Cb)()],Cr.prototype,"balance",void 0),xr([(0,wr.SB)()],Cr.prototype,"address",void 0),xr([(0,wr.SB)()],Cr.prototype,"balanceVal",void 0),xr([(0,wr.SB)()],Cr.prototype,"balanceSymbol",void 0),xr([(0,wr.SB)()],Cr.prototype,"profileName",void 0),xr([(0,wr.SB)()],Cr.prototype,"profileImage",void 0),xr([(0,wr.SB)()],Cr.prototype,"network",void 0),Cr=xr([(0,mr.customElement)("w3m-account-button")],Cr);var kr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Er=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=gr.AccountController.state.isConnected,this.unsubscribe.push(gr.AccountController.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?br.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${vr(this.balance)}
          >
          </w3m-account-button>
        `:br.dy`
          <w3m-connect-button
            size=${vr(this.size)}
            label=${vr(this.label)}
            loadingLabel=${vr(this.loadingLabel)}
          ></w3m-connect-button>
        `}};kr([(0,wr.Cb)({type:Boolean})],Er.prototype,"disabled",void 0),kr([(0,wr.Cb)()],Er.prototype,"balance",void 0),kr([(0,wr.Cb)()],Er.prototype,"size",void 0),kr([(0,wr.Cb)()],Er.prototype,"label",void 0),kr([(0,wr.Cb)()],Er.prototype,"loadingLabel",void 0),kr([(0,wr.SB)()],Er.prototype,"isAccount",void 0),Er=kr([(0,mr.customElement)("w3m-button")],Er);var Sr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Pr=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=gr.IN.state.open,this.unsubscribe.push(gr.IN.subscribeKey("open",(e=>this.open=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return br.dy`
      <wui-connect-button
        size=${vr(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?gr.IN.close():gr.IN.open()}};Sr([(0,wr.Cb)()],Pr.prototype,"size",void 0),Sr([(0,wr.Cb)()],Pr.prototype,"label",void 0),Sr([(0,wr.Cb)()],Pr.prototype,"loadingLabel",void 0),Sr([(0,wr.SB)()],Pr.prototype,"open",void 0),Pr=Sr([(0,mr.customElement)("w3m-connect-button")],Pr),i(7296);var _r=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ar=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=gr.NetworkController.state.caipNetwork,this.connected=gr.AccountController.state.isConnected,this.unsubscribe.push(gr.NetworkController.subscribeKey("caipNetwork",(e=>this.network=e)),gr.AccountController.subscribeKey("isConnected",(e=>this.connected=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return br.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${vr(gr.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){gr.IN.open({view:"Networks"})}};_r([(0,wr.Cb)({type:Boolean})],Ar.prototype,"disabled",void 0),_r([(0,wr.SB)()],Ar.prototype,"network",void 0),_r([(0,wr.SB)()],Ar.prototype,"connected",void 0),Ar=_r([(0,mr.customElement)("w3m-network-button")],Ar);var $r=br.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,Or=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ir=class extends br.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=gr.RouterController.state.view,this.unsubscribe.push(gr.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return br.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return br.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return br.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return br.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return br.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return br.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return br.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return br.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return br.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return br.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return br.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return br.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){const{history:t}=gr.RouterController.state;let n=-10,r=10;t.length<this.prevHistoryLength&&(n=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Ir.styles=$r,Or([(0,wr.SB)()],Ir.prototype,"view",void 0),Ir=Or([(0,mr.customElement)("w3m-router")],Ir);var Nr=br.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,Tr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Rr=class extends br.oi{constructor(){super(),this.usubscribe=[],this.networkImages=gr.WM.state.networkImages,this.address=gr.AccountController.state.address,this.profileImage=gr.AccountController.state.profileImage,this.profileName=gr.AccountController.state.profileName,this.balance=gr.AccountController.state.balance,this.balanceSymbol=gr.AccountController.state.balanceSymbol,this.network=gr.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(gr.AccountController.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):gr.IN.close()})),gr.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[this.network?.imageId??""];return br.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${vr(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?mr.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):mr.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${gr.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${vr(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=gr.AccountController.state;return e?br.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=gr.NetworkController.state,t=!!e&&e.length>1,n=e?.find((({id:e})=>e===this.network?.id));return t||!n}onCopyAddress(){try{this.address&&(gr.j1.copyToClopboard(this.address),gr.SnackController.showSuccess("Address copied"))}catch{gr.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&gr.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await gr.ConnectionController.disconnect(),gr.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),gr.IN.close()}catch{gr.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),gr.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=gr.AccountController.state;e&&gr.j1.openHref(e,"_blank")}};Rr.styles=Nr,Tr([(0,wr.SB)()],Rr.prototype,"address",void 0),Tr([(0,wr.SB)()],Rr.prototype,"profileImage",void 0),Tr([(0,wr.SB)()],Rr.prototype,"profileName",void 0),Tr([(0,wr.SB)()],Rr.prototype,"balance",void 0),Tr([(0,wr.SB)()],Rr.prototype,"balanceSymbol",void 0),Tr([(0,wr.SB)()],Rr.prototype,"network",void 0),Tr([(0,wr.SB)()],Rr.prototype,"disconecting",void 0),Rr=Tr([(0,mr.customElement)("w3m-account-view")],Rr);var Mr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let jr=class extends br.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=gr.j1.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return br.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?br.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:br.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return gr.j1.isMobile()?br.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){gr.RouterController.push("ConnectingWalletConnect")}};Mr([(0,wr.SB)()],jr.prototype,"search",void 0),jr=Mr([(0,mr.customElement)("w3m-all-wallets-view")],jr);var Ur=br.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Lr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Br=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.connectors=gr.ConnectorController.state.connectors,this.unsubscribe.push(gr.ConnectorController.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return br.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(gr.j1.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?br.dy`
      <wui-list-wallet
        imageSrc=${vr(gr.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=gr.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map((e=>br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}featuredTemplate(){const{featured:e}=gr.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map((e=>br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)):null}recentTemplate(){return gr.MO.getRecentWallets().map((e=>br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const e=this.connectors.find((e=>"ANNOUNCED"===e.type));return this.connectors.map((t=>"INJECTED"!==t.type?null:gr.ConnectionController.checkInstalled()?br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${vr(e?void 0:"installed")}
          tagVariant=${vr(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){return this.connectors.map((e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const e=10*Math.floor(gr.ApiController.state.count/10);return br.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=gr.ApiController.state,{customWallets:t,featuredWalletIds:n}=gr.OptionsController.state,{connectors:r}=gr.ConnectorController.state,i=gr.MO.getRecentWallets(),o=r.filter((e=>"ANNOUNCED"===e.type));if(n||t||!e.length)return null;const a=o.length+i.length,s=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,s).map((e=>br.dy`
        <wui-list-wallet
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?gr.j1.isMobile()?gr.RouterController.push("AllWallets"):gr.RouterController.push("ConnectingWalletConnect"):gr.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=gr.ConnectorController.state,n=gr.MO.getRecentWallets().map((e=>e.id)),r=t.map((e=>e.info?.rdns)).filter(Boolean);return e.filter((e=>!n.includes(e.id)&&!r.includes(e.rdns??void 0)))}onAllWallets(){gr.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),gr.RouterController.push("AllWallets")}onConnectWallet(e){gr.RouterController.push("ConnectingWalletConnect",{wallet:e})}};Br.styles=Ur,Lr([(0,wr.SB)()],Br.prototype,"connectors",void 0),Br=Lr([(0,mr.customElement)("w3m-connect-view")],Br);var zr=br.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Dr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class Fr extends br.oi{constructor(){super(),this.wallet=gr.RouterController.state.data?.wallet,this.connector=gr.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=gr.fz.getWalletImage(this.wallet)??gr.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=gr.ConnectionController.state.wcUri,this.error=gr.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(gr.ConnectionController.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),gr.ConnectionController.subscribeKey("wcError",(e=>this.error=e)),gr.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),br.dy`
      <wui-flex
        data-error=${vr(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${vr(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?br.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(gr.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=gr.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return br.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(gr.j1.copyToClopboard(this.uri),gr.SnackController.showSuccess("Link copied"))}catch{gr.SnackController.showError("Failed to copy")}}}Fr.styles=zr,Dr([(0,wr.SB)()],Fr.prototype,"uri",void 0),Dr([(0,wr.SB)()],Fr.prototype,"error",void 0),Dr([(0,wr.SB)()],Fr.prototype,"ready",void 0),Dr([(0,wr.SB)()],Fr.prototype,"showRetry",void 0),Dr([(0,wr.SB)()],Fr.prototype,"buffering",void 0),Dr([(0,wr.Cb)({type:Boolean})],Fr.prototype,"isMobile",void 0),Dr([(0,wr.Cb)()],Fr.prototype,"onRetry",void 0);const Wr={INJECTED:"browser",ANNOUNCED:"browser"};let Hr=class extends Fr{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Wr[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await gr.ConnectionController.connectExternal(this.connector),gr.IN.close(),gr.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){gr.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Hr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-external-view")],Hr);var qr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Gr=class extends br.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=gr.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),gr.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),br.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):br.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=gr.ConnectionController.state;(e||gr.j1.isPairingExpired(t))&&(gr.ConnectionController.connectWalletConnect(),await gr.ConnectionController.state.wcPromise,this.finalizeConnection(),gr.IN.close())}catch(e){gr.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),gr.ConnectionController.setWcError(!0),gr.j1.isAllowedRetry(this.lastRetry)&&(gr.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=gr.ConnectionController.state;e&&gr.MO.setWalletConnectDeepLink(e),t&&gr.MO.setWeb3ModalRecent(t),gr.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,o=r?.map((({injected_id:e})=>e)).filter(Boolean),a=i?[i]:o??[],s=a.length,c=e,l=n,u=gr.ConnectionController.checkInstalled(a),d=s&&u,h=t&&!gr.j1.isMobile();d&&this.platforms.push("browser"),c&&this.platforms.push(gr.j1.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return br.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return br.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return br.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return br.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return br.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return br.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?br.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};qr([(0,wr.SB)()],Gr.prototype,"platform",void 0),qr([(0,wr.SB)()],Gr.prototype,"platforms",void 0),Gr=qr([(0,mr.customElement)("w3m-connecting-wc-view")],Gr);let Vr=class extends br.oi{constructor(){super(...arguments),this.wallet=gr.RouterController.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return br.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?br.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?br.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?br.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?br.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&gr.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&gr.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&gr.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&gr.j1.openHref(this.wallet.homepage,"_blank")}};Vr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-downloads-view")],Vr);let Kr=class extends br.oi{render(){return br.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{gr.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=gr.ApiController.state,{customWallets:n}=gr.OptionsController.state;return[...t,...n??[],...e].slice(0,4).map((e=>br.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          @click=${()=>{gr.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};Kr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-get-wallet-view")],Kr);var Zr=br.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Qr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Yr=class extends br.oi{constructor(){super(),this.network=gr.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=gr.NetworkController.state.caipNetwork,this.unsubscribe.push(gr.NetworkController.subscribeKey("caipNetwork",(e=>{e?.id!==this.currentNetwork?.id&&gr.RouterController.goBack()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return br.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${vr(gr.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:br.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await gr.NetworkController.switchActiveNetwork(this.network),gr.RouterController.goBack())}catch{this.error=!0}}};Yr.styles=Zr,Qr([(0,wr.SB)()],Yr.prototype,"showRetry",void 0),Qr([(0,wr.SB)()],Yr.prototype,"error",void 0),Qr([(0,wr.SB)()],Yr.prototype,"currentNetwork",void 0),Yr=Qr([(0,mr.customElement)("w3m-network-switch-view")],Yr);var Xr=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Jr=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=gr.NetworkController.state.caipNetwork,this.unsubscribe.push(gr.NetworkController.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return br.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){gr.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),gr.RouterController.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:n}=gr.NetworkController.state,r=e,i=t;return r?.length&&i?.sort(((e,t)=>r.indexOf(t.id)-r.indexOf(e.id))),i?.map((e=>br.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${vr(gr.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!n&&!r?.includes(e.id)}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=gr.AccountController.state,{approvedCaipNetworkIds:n,supportsAllNetworks:r,caipNetwork:i}=gr.NetworkController.state;t&&i?.id!==e.id?n?.includes(e.id)?await gr.NetworkController.switchActiveNetwork(e):r&&gr.RouterController.push("SwitchNetwork",{network:e}):t||(gr.NetworkController.setCaipNetwork(e),gr.RouterController.push("Connect"))}};Xr([(0,wr.SB)()],Jr.prototype,"caipNetwork",void 0),Jr=Xr([(0,mr.customElement)("w3m-networks-view")],Jr);const ei=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let ti=class extends br.oi{render(){return br.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ei}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{gr.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ti=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-what-is-a-network-view")],ti);const ni=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let ri=class extends br.oi{render(){return br.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ni}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){gr.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),gr.RouterController.push("GetWallet")}};ri=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-what-is-a-wallet-view")],ri);var ii=br.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,oi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const ai="local-paginator";let si=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!gr.ApiController.state.wallets.length,this.wallets=gr.ApiController.state.wallets,this.recommended=gr.ApiController.state.recommended,this.featured=gr.ApiController.state.featured,this.unsubscribe.push(gr.ApiController.subscribeKey("wallets",(e=>this.wallets=e)),gr.ApiController.subscribeKey("recommended",(e=>this.recommended=e)),gr.ApiController.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return br.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await gr.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>br.dy`
        <wui-card-select-loader type="wallet" id=${vr(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map((e=>br.dy`
        <wui-card-select
          imageSrc=${vr(gr.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:r}=gr.ApiController.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let a=Math.ceil(o/i)*i-o+i;return a-=e.length?n.length%i:0,0===r||[...n,...e,...t].length<r?this.shimmerTemplate(a,ai):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ai}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:n}=gr.ApiController.state;n.length<t&&gr.ApiController.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=gr.ConnectorController.state,n=t.find((({explorerId:t})=>t===e.id));n?gr.RouterController.push("ConnectingExternal",{connector:n}):gr.RouterController.push("ConnectingWalletConnect",{wallet:e})}};si.styles=ii,oi([(0,wr.SB)()],si.prototype,"initial",void 0),oi([(0,wr.SB)()],si.prototype,"wallets",void 0),oi([(0,wr.SB)()],si.prototype,"recommended",void 0),oi([(0,wr.SB)()],si.prototype,"featured",void 0),si=oi([(0,mr.customElement)("w3m-all-wallets-list")],si);var ci=br.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,li=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ui=class extends br.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?br.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await gr.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=gr.ApiController.state;return e.length?br.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map((e=>br.dy`
            <wui-card-select
              imageSrc=${vr(gr.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:br.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=gr.ConnectorController.state,n=t.find((({explorerId:t})=>t===e.id));n?gr.RouterController.push("ConnectingExternal",{connector:n}):gr.RouterController.push("ConnectingWalletConnect",{wallet:e})}};ui.styles=ci,li([(0,wr.SB)()],ui.prototype,"loading",void 0),li([(0,wr.Cb)()],ui.prototype,"query",void 0),ui=li([(0,mr.customElement)("w3m-all-wallets-search")],ui);var di=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let hi=class extends br.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(gr.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return br.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};di([(0,wr.Cb)({type:Array})],hi.prototype,"platforms",void 0),di([(0,wr.Cb)()],hi.prototype,"onSelectPlatfrom",void 0),di([(0,wr.SB)()],hi.prototype,"buffering",void 0),hi=di([(0,mr.customElement)("w3m-connecting-header")],hi);let fi=class extends Fr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=gr.ConnectorController.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),n=e.find((e=>"INJECTED"===e.type));t?await gr.ConnectionController.connectExternal(t):n&&await gr.ConnectionController.connectExternal(n),gr.IN.close(),gr.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){gr.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};fi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-browser")],fi);let pi=class extends Fr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=gr.j1.formatNativeUrl(e,this.uri);gr.ConnectionController.setWcLinking({name:t,href:r}),gr.ConnectionController.setRecentWallet(this.wallet),gr.j1.openHref(n,"_self")}catch{this.error=!0}}};pi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-desktop")],pi);let gi=class extends Fr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:n,href:r}=gr.j1.formatNativeUrl(e,this.uri);gr.ConnectionController.setWcLinking({name:t,href:r}),gr.ConnectionController.setRecentWallet(this.wallet),gr.j1.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){const e=gr.j1.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(gr.ConnectionController.setBuffering(!0),setTimeout((()=>{gr.ConnectionController.setBuffering(!1)}),5e3))}};gi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-mobile")],gi);var mi=br.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let bi=class extends Fr{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),br.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return gr.ConnectionController.setWcLinking(void 0),gr.ConnectionController.setRecentWallet(this.wallet),br.dy`<wui-qr-code
      size=${e}
      theme=${gr.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${vr(gr.fz.getWalletImage(this.wallet))}
      alt=${vr(t)}
    ></wui-qr-code>`}};bi.styles=mi,bi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-qrcode")],bi);let wi=class extends br.oi{constructor(){if(super(),this.wallet=gr.RouterController.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return br.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${vr(gr.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};wi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-unsupported")],wi);let yi=class extends Fr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",gr.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=gr.j1.formatUniversalUrl(e,this.uri);gr.ConnectionController.setWcLinking({name:t,href:r}),gr.ConnectionController.setRecentWallet(this.wallet),gr.j1.openHref(n,"_blank")}catch{this.error=!0}}};yi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-connecting-wc-web")],yi);var vi=br.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,xi=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};function Ci(){const e=gr.RouterController.state.data?.connector?.name,t=gr.RouterController.state.data?.wallet?.name,n=gr.RouterController.state.data?.network?.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads"}}let ki=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.heading=Ci()[gr.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(gr.RouterController.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),gr.ConnectionController.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return br.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${gr.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){gr.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),gr.RouterController.push("WhatIsAWallet")}titleTemplate(){return br.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=gr.RouterController.state,t="Connect"===e;return this.showBack?br.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${gr.RouterController.goBack}
      ></wui-icon-link>`:br.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?br.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const n=Ci()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=n,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=gr.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ki.styles=[vi],xi([(0,wr.SB)()],ki.prototype,"heading",void 0),xi([(0,wr.SB)()],ki.prototype,"buffering",void 0),xi([(0,wr.SB)()],ki.prototype,"showBack",void 0),ki=xi([(0,mr.customElement)("w3m-header")],ki);var Ei=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Si=class extends br.oi{constructor(){super(...arguments),this.data=[]}render(){return br.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>br.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>br.dy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Ei([(0,wr.Cb)({type:Array})],Si.prototype,"data",void 0),Si=Ei([(0,mr.customElement)("w3m-help-widget")],Si);var Pi=br.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let _i=class extends br.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=gr.OptionsController.state;return e||t?br.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=gr.OptionsController.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=gr.OptionsController.state;return e?br.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=gr.OptionsController.state;return e?br.dy`<a href=${e}>Privacy Policy</a>`:null}};_i.styles=[Pi],_i=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,mr.customElement)("w3m-legal-footer")],_i);var Ai=br.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,$i=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Oi=class extends br.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:r,homepage:i}=this.wallet,o=gr.j1.isMobile(),a=gr.j1.isIos(),s=gr.j1.isAndroid(),c=[t,n,i,r].filter(Boolean).length>1,l=mr.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?br.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>gr.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?br.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?br.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?br.dy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&gr.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&gr.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&gr.j1.openHref(this.wallet.homepage,"_blank")}};Oi.styles=[Ai],$i([(0,wr.Cb)({type:Object})],Oi.prototype,"wallet",void 0),Oi=$i([(0,mr.customElement)("w3m-mobile-download-links")],Oi);var Ii=br.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,Ni=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const Ti={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Ri=class extends br.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=gr.SnackController.state.open,this.unsubscribe.push(gr.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=gr.SnackController.state,n=Ti[t];return br.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>gr.SnackController.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Ri.styles=Ii,Ni([(0,wr.SB)()],Ri.prototype,"open",void 0),Ri=Ni([(0,mr.customElement)("w3m-snackbar")],Ri);let Mi=!1;class ji{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{gr.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{gr.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{gr.AccountController.setBalance(e,t)},this.setProfileName=e=>{gr.AccountController.setProfileName(e)},this.setProfileImage=e=>{gr.AccountController.setProfileImage(e)},this.resetAccount=()=>{gr.AccountController.resetAccount()},this.setCaipNetwork=e=>{gr.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>gr.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{gr.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>gr.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{gr.NetworkController.resetNetwork()},this.setConnectors=e=>{gr.ConnectorController.setConnectors(e)},this.addConnector=e=>{gr.ConnectorController.addConnector(e)},this.getConnectors=()=>gr.ConnectorController.getConnectors(),this.resetWcConnection=()=>{gr.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>gr.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{gr.AccountController.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),gr.IN.open(e)}async close(){await this.initOrContinue(),gr.IN.close()}getThemeMode(){return gr.ThemeController.state.themeMode}getThemeVariables(){return gr.ThemeController.state.themeVariables}setThemeMode(e){gr.ThemeController.setThemeMode(e),(0,mr.setColorTheme)(gr.ThemeController.state.themeMode)}setThemeVariables(e){gr.ThemeController.setThemeVariables(e),(0,mr.setThemeVariables)(gr.ThemeController.state.themeVariables)}subscribeTheme(e){return gr.ThemeController.subscribe(e)}getState(){return{...gr.Ie.state}}subscribeState(e){return gr.Ie.subscribe(e)}getEvent(){return{...gr.Xs.state}}subscribeEvents(e){return gr.Xs.subscribe(e)}initControllers(e){gr.NetworkController.setClient(e.networkControllerClient),gr.NetworkController.setDefaultCaipNetwork(e.defaultChain),gr.OptionsController.setProjectId(e.projectId),gr.OptionsController.setIncludeWalletIds(e.includeWalletIds),gr.OptionsController.setExcludeWalletIds(e.excludeWalletIds),gr.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),gr.OptionsController.setTokens(e.tokens),gr.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),gr.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),gr.OptionsController.setCustomWallets(e.customWallets),gr.OptionsController.setEnableAnalytics(e.enableAnalytics),gr.OptionsController.setSdkVersion(e._sdkVersion),gr.ConnectionController.setClient(e.connectionControllerClient),e.themeMode&&gr.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&gr.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return this.initPromise||Mi||!gr.j1.isClient()||(Mi=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(i.bind(i,7062)),Promise.resolve().then(i.bind(i,7296))]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}const Ui="walletConnect",Li="injected",Bi="coinbaseWallet",zi="safe",Di="ledger",Fi="eip6963",Wi="eip155",Hi="3.1.0",qi={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},Gi={[Bi]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[zi]:"461db637-8616-43ce-035a-d89b8a1d5800",[Di]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Ui]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Li]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},Vi={[Bi]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[zi]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Di]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},Ki={[Li]:"Browser Wallet",[Ui]:"WalletConnect",[Bi]:"Coinbase",[Di]:"Ledger",[zi]:"Safe"},Zi={[Li]:"INJECTED",[Ui]:"WALLET_CONNECT",[Fi]:"ANNOUNCED"};function Qi(e){if(e)return{id:`${Wi}:${e.id}`,name:e.name,imageId:qi[e.id]}}function Yi(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,n])=>{t[`${Wi}:${e}`]=n})),t}function Xi(e){return e?Number(e.split(":")[1]):void 0}new WeakMap,new WeakMap;var Ji=i(8764);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=Ji.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));const eo=gr.j1.getBlockchainApiUrl();let to;var no=i(745);function ro({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(e){const a=n=>{try{return void e.setItem(t,r(n))}catch(e){return e}};return{persistClient:io((e=>{let t=e,n=a(t),r=0;for(;n&&t;)r++,t=null==o?void 0:o({persistedClient:t,error:n,errorCount:r}),t&&(n=a(t))}),n),restoreClient:()=>{const n=e.getItem(t);if(n)return i(n)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:oo,restoreClient:()=>{},removeClient:oo}}function io(e,t=100){let n,r=null;return function(...i){n=i,null===r&&(r=setTimeout((()=>{e(...n),r=null}),t))}}function oo(){}const ao="undefined"==typeof window||"Deno"in window;function so(){}function co(e){return"number"==typeof e&&e>=0&&e!==1/0}function lo(e,t){return Math.max(e+(t||0)-Date.now(),0)}function uo(e,t,n){return So(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function ho(e,t,n){return So(e)?"function"==typeof t?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function fo(e,t,n){return So(e)?[{...t,queryKey:e},n]:[e||{},t]}function po(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:s}=e;if(So(a))if(r){if(t.queryHash!==mo(a,t.options))return!1}else if(!wo(t.queryKey,a))return!1;if("all"!==n){const e=t.isActive();if("active"===n&&!e)return!1;if("inactive"===n&&e)return!1}return!("boolean"==typeof s&&t.isStale()!==s||void 0!==i&&i!==t.state.fetchStatus||o&&!o(t))}function go(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(So(o)){if(!t.options.mutationKey)return!1;if(n){if(bo(t.options.mutationKey)!==bo(o))return!1}else if(!wo(t.options.mutationKey,o))return!1}return!("boolean"==typeof r&&"loading"===t.state.status!==r||i&&!i(t))}function mo(e,t){return((null==t?void 0:t.queryKeyHashFn)||bo)(e)}function bo(e){return JSON.stringify(e,((e,t)=>ko(t)?Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}):t))}function wo(e,t){return yo(e,t)}function yo(e,t){return e===t||typeof e==typeof t&&!(!e||!t||"object"!=typeof e||"object"!=typeof t)&&!Object.keys(t).some((n=>!yo(e[n],t[n])))}function vo(e,t){if(e===t)return e;const n=Co(e)&&Co(t);if(n||ko(e)&&ko(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let s=0;for(let r=0;r<o;r++){const o=n?r:i[r];a[o]=vo(e[o],t[o]),a[o]===e[o]&&s++}return r===o&&s===r?e:a}return t}function xo(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Co(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ko(e){if(!Eo(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!Eo(n)&&!!n.hasOwnProperty("isPrototypeOf")}function Eo(e){return"[object Object]"===Object.prototype.toString.call(e)}function So(e){return Array.isArray(e)}function Po(e){return new Promise((t=>{setTimeout(t,e)}))}function _o(e){Po(0).then(e)}function Ao(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?vo(e,t):t}const $o=console,Oo=function(){let e=[],t=0,n=e=>{e()},r=e=>{e()};const i=r=>{t?e.push(r):_o((()=>{n(r)}))};return{batch:i=>{let o;t++;try{o=i()}finally{t--,t||(()=>{const t=e;e=[],t.length&&_o((()=>{r((()=>{t.forEach((e=>{n(e)}))}))}))})()}return o},batchCalls:e=>(...t)=>{i((()=>{e(...t)}))},schedule:i,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e}}}();class Io{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const No=new class extends Io{constructor(){super(),this.setup=e=>{if(!ao&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach((({listener:e})=>{e()}))}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},To=["online","offline"],Ro=new class extends Io{constructor(){super(),this.setup=e=>{if(!ao&&window.addEventListener){const t=()=>e();return To.forEach((e=>{window.addEventListener(e,t,!1)})),()=>{To.forEach((e=>{window.removeEventListener(e,t)}))}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach((({listener:e})=>{e()}))}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function Mo(e){return Math.min(1e3*2**e,3e4)}function jo(e){return"online"!==(null!=e?e:"online")||Ro.isOnline()}class Uo{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function Lo(e){return e instanceof Uo}function Bo(e){let t,n,r,i=!1,o=0,a=!1;const s=new Promise(((e,t)=>{n=e,r=t})),c=()=>!No.isFocused()||"always"!==e.networkMode&&!Ro.isOnline(),l=r=>{a||(a=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),n(r))},u=n=>{a||(a=!0,null==e.onError||e.onError(n),null==t||t(),r(n))},d=()=>new Promise((n=>{t=e=>{const t=a||!c();return t&&n(e),t},null==e.onPause||e.onPause()})).then((()=>{t=void 0,a||null==e.onContinue||e.onContinue()})),h=()=>{if(a)return;let t;try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(l).catch((t=>{var n,r;if(a)return;const s=null!=(n=e.retry)?n:3,l=null!=(r=e.retryDelay)?r:Mo,f="function"==typeof l?l(o,t):l,p=!0===s||"number"==typeof s&&o<s||"function"==typeof s&&s(o,t);!i&&p?(o++,null==e.onFail||e.onFail(o,t),Po(f).then((()=>{if(c())return d()})).then((()=>{i?u(t):h()}))):u(t)}))};return jo(e.networkMode)?h():d().then(h),{promise:s,cancel:t=>{a||(u(new Uo(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?s:Promise.resolve(),cancelRetry:()=>{i=!0},continueRetry:()=>{i=!1}}}class zo{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),co(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:ao?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class Do extends zo{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||$o,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){const t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,r=n?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){const n=Ao(this.state.data,e,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),n}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const n=this.promise;return null==(t=this.retryer)||t.cancel(e),n?n.then(so).catch(so):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some((e=>!1!==e.options.enabled))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some((e=>e.getCurrentResult().isStale))}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!lo(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find((e=>e.shouldFetchOnWindowFocus()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;const t=this.observers.find((e=>e.shouldFetchOnReconnect()));t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter((t=>t!==e)),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var n,r;if("idle"!==this.state.fetchStatus)if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find((e=>e.options.queryFn));e&&this.setOptions(e.options)}const o=function(){if("function"==typeof AbortController)return new AbortController}(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},s=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};s(a);const c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};var l;s(c),null==(n=this.options.behavior)||n.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(r=c.fetchOptions)?void 0:r.meta))&&this.dispatch({type:"fetch",meta:null==(l=c.fetchOptions)?void 0:l.meta});const u=e=>{var t,n,r,i;Lo(e)&&e.silent||this.dispatch({type:"error",error:e}),Lo(e)||(null==(t=(n=this.cache.config).onError)||t.call(n,e,this),null==(r=(i=this.cache.config).onSettled)||r.call(i,this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Bo({fn:c.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:e=>{var t,n,r,i;void 0!==e?(this.setData(e),null==(t=(n=this.cache.config).onSuccess)||t.call(n,e,this),null==(r=(i=this.cache.config).onSettled)||r.call(i,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1):u(new Error(this.queryHash+" data is undefined"))},onError:u,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var n,r;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(n=e.meta)?n:null,fetchStatus:jo(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(r=e.dataUpdatedAt)?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=e.error;return Lo(i)&&i.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),Oo.batch((()=>{this.observers.forEach((t=>{t.onQueryUpdate(e)})),this.cache.notify({query:this,type:"updated",action:e})}))}}class Fo extends Io{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,n){var r;const i=t.queryKey,o=null!=(r=t.queryHash)?r:mo(i,t);let a=this.get(o);return a||(a=new Do({cache:this,logger:e.getLogger(),queryKey:i,queryHash:o,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter((t=>t!==e)),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Oo.batch((()=>{this.queries.forEach((e=>{this.remove(e)}))}))}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[n]=fo(e,t);return void 0===n.exact&&(n.exact=!0),this.queries.find((e=>po(n,e)))}findAll(e,t){const[n]=fo(e,t);return Object.keys(n).length>0?this.queries.filter((e=>po(n,e))):this.queries}notify(e){Oo.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}onFocus(){Oo.batch((()=>{this.queries.forEach((e=>{e.onFocus()}))}))}onOnline(){Oo.batch((()=>{this.queries.forEach((e=>{e.onOnline()}))}))}}class Wo extends zo{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||$o,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter((t=>t!==e)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){const e=()=>{var e;return this.retryer=Bo({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t="loading"===this.state.status;try{var n,r,i,o,a,s,c,l;if(!t){var u,d,h,f;this.dispatch({type:"loading",variables:this.options.variables}),await(null==(u=(d=this.mutationCache.config).onMutate)?void 0:u.call(d,this.state.variables,this));const e=await(null==(h=(f=this.options).onMutate)?void 0:h.call(f,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}const p=await e();return await(null==(n=(r=this.mutationCache.config).onSuccess)?void 0:n.call(r,p,this.state.variables,this.state.context,this)),await(null==(i=(o=this.options).onSuccess)?void 0:i.call(o,p,this.state.variables,this.state.context)),await(null==(a=(s=this.mutationCache.config).onSettled)?void 0:a.call(s,p,null,this.state.variables,this.state.context,this)),await(null==(c=(l=this.options).onSettled)?void 0:c.call(l,p,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:p}),p}catch(e){try{var p,g,m,b,w,y,v,x;throw await(null==(p=(g=this.mutationCache.config).onError)?void 0:p.call(g,e,this.state.variables,this.state.context,this)),await(null==(m=(b=this.options).onError)?void 0:m.call(b,e,this.state.variables,this.state.context)),await(null==(w=(y=this.mutationCache.config).onSettled)?void 0:w.call(y,void 0,e,this.state.variables,this.state.context,this)),await(null==(v=(x=this.options).onSettled)?void 0:v.call(x,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!jo(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),Oo.batch((()=>{this.observers.forEach((t=>{t.onMutationUpdate(e)})),this.mutationCache.notify({mutation:this,type:"updated",action:e})}))}}class Ho extends Io{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,n){const r=new Wo({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:n,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(r),r}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter((t=>t!==e)),this.notify({type:"removed",mutation:e})}clear(){Oo.batch((()=>{this.mutations.forEach((e=>{this.remove(e)}))}))}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find((t=>go(e,t)))}findAll(e){return this.mutations.filter((t=>go(e,t)))}notify(e){Oo.batch((()=>{this.listeners.forEach((({listener:t})=>{t(e)}))}))}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then((()=>{const e=this.mutations.filter((e=>e.state.isPaused));return Oo.batch((()=>e.reduce(((e,t)=>e.then((()=>t.continue().catch(so)))),Promise.resolve())))})).then((()=>{this.resuming=void 0})),this.resuming}}function qo(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class Go{constructor(e={}){this.queryCache=e.queryCache||new Fo,this.mutationCache=e.mutationCache||new Ho,this.logger=e.logger||$o,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=No.subscribe((()=>{No.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())})),this.unsubscribeOnline=Ro.subscribe((()=>{Ro.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[n]=fo(e,t);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state.data}ensureQueryData(e,t,n){const r=uo(e,t,n),i=this.getQueryData(r.queryKey);return i?Promise.resolve(i):this.fetchQuery(r)}getQueriesData(e){return this.getQueryCache().findAll(e).map((({queryKey:e,state:t})=>[e,t.data]))}setQueryData(e,t,n){const r=this.queryCache.find(e),i=function(e,t){return"function"==typeof e?e(t):e}(t,null==r?void 0:r.state.data);if(void 0===i)return;const o=uo(e),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,{...n,manual:!0})}setQueriesData(e,t,n){return Oo.batch((()=>this.getQueryCache().findAll(e).map((({queryKey:e})=>[e,this.setQueryData(e,t,n)]))))}getQueryState(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state}removeQueries(e,t){const[n]=fo(e,t),r=this.queryCache;Oo.batch((()=>{r.findAll(n).forEach((e=>{r.remove(e)}))}))}resetQueries(e,t,n){const[r,i]=fo(e,t,n),o=this.queryCache,a={type:"active",...r};return Oo.batch((()=>(o.findAll(r).forEach((e=>{e.reset()})),this.refetchQueries(a,i))))}cancelQueries(e,t,n){const[r,i={}]=fo(e,t,n);void 0===i.revert&&(i.revert=!0);const o=Oo.batch((()=>this.queryCache.findAll(r).map((e=>e.cancel(i)))));return Promise.all(o).then(so).catch(so)}invalidateQueries(e,t,n){const[r,i]=fo(e,t,n);return Oo.batch((()=>{var e,t;if(this.queryCache.findAll(r).forEach((e=>{e.invalidate()})),"none"===r.refetchType)return Promise.resolve();const n={...r,type:null!=(e=null!=(t=r.refetchType)?t:r.type)?e:"active"};return this.refetchQueries(n,i)}))}refetchQueries(e,t,n){const[r,i]=fo(e,t,n),o=Oo.batch((()=>this.queryCache.findAll(r).filter((e=>!e.isDisabled())).map((e=>{var t;return e.fetch(void 0,{...i,cancelRefetch:null==(t=null==i?void 0:i.cancelRefetch)||t,meta:{refetchPage:r.refetchPage}})}))));let a=Promise.all(o).then(so);return null!=i&&i.throwOnError||(a=a.catch(so)),a}fetchQuery(e,t,n){const r=uo(e,t,n),i=this.defaultQueryOptions(r);void 0===i.retry&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(e,t,n){return this.fetchQuery(e,t,n).then(so).catch(so)}fetchInfiniteQuery(e,t,n){const r=uo(e,t,n);return r.behavior={onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const s=null==(t=e.fetchOptions)||null==(n=t.meta)?void 0:n.refetchPage,c=null==(r=e.fetchOptions)||null==(i=r.meta)?void 0:i.fetchMore,l=null==c?void 0:c.pageParam,u="forward"===(null==c?void 0:c.direction),d="backward"===(null==c?void 0:c.direction),h=(null==(o=e.state.data)?void 0:o.pages)||[],f=(null==(a=e.state.data)?void 0:a.pageParams)||[];let p=f,g=!1;const m=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),b=(e,t,n,r)=>(p=r?[t,...p]:[...p,t],r?[n,...e]:[...e,n]),w=(t,n,r,i)=>{if(g)return Promise.reject("Cancelled");if(void 0===r&&!n&&t.length)return Promise.resolve(t);const o={queryKey:e.queryKey,pageParam:r,meta:e.options.meta};var a;a=o,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>{var t,n;return null!=(t=e.signal)&&t.aborted?g=!0:null==(n=e.signal)||n.addEventListener("abort",(()=>{g=!0})),e.signal}});const s=m(o);return Promise.resolve(s).then((e=>b(t,r,e,i)))};let y;if(h.length)if(u){const t=void 0!==l,n=t?l:qo(e.options,h);y=w(h,t,n)}else if(d){const t=void 0!==l,n=t?l:function(e,t){return null==e.getPreviousPageParam?void 0:e.getPreviousPageParam(t[0],t)}(e.options,h);y=w(h,t,n,!0)}else{p=[];const t=void 0===e.options.getNextPageParam;y=s&&h[0]&&!s(h[0],0,h)?Promise.resolve(b([],f[0],h[0])):w([],t,f[0]);for(let n=1;n<h.length;n++)y=y.then((r=>{if(!s||!h[n]||s(h[n],n,h)){const i=t?f[n]:qo(e.options,r);return w(r,t,i)}return Promise.resolve(b(r,f[n],h[n]))}))}else y=w([]);return y.then((e=>({pages:e,pageParams:p})))}}},this.fetchQuery(r)}prefetchInfiniteQuery(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(so).catch(so)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const n=this.queryDefaults.find((t=>bo(e)===bo(t.queryKey)));n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find((t=>wo(e,t.queryKey)));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){const n=this.mutationDefaults.find((t=>bo(e)===bo(t.mutationKey)));n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find((t=>wo(e,t.mutationKey)));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=mo(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function Vo(e){return e.state.isPaused}function Ko(e){return"success"===e.state.status}function Zo(e,t={}){const n=[],r=[];if(!1!==t.dehydrateMutations){const r=t.shouldDehydrateMutation||Vo;e.getMutationCache().getAll().forEach((e=>{r(e)&&n.push(function(e){return{mutationKey:e.options.mutationKey,state:e.state}}(e))}))}if(!1!==t.dehydrateQueries){const n=t.shouldDehydrateQuery||Ko;e.getQueryCache().getAll().forEach((e=>{n(e)&&r.push(function(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}(e))}))}return{mutations:n,queries:r}}const Qo=["added","removed","updated"];function Yo(e){return Qo.includes(e)}async function Xo({queryClient:e,persister:t,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:Zo(e,r)};await t.persistClient(i)}const Jo=e.createContext(void 0),ea=e.createContext(!1);function ta(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Jo),window.ReactQueryClientContext):Jo)}const na=({context:t}={})=>{const n=e.useContext(ta(t,e.useContext(ea)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},ra=({client:t,children:n,context:r,contextSharing:i=!1})=>{e.useEffect((()=>(t.mount(),()=>{t.unmount()})),[t]);const o=ta(r,i);return e.createElement(ea.Provider,{value:!r&&i},e.createElement(o.Provider,{value:t},n))},ia=e.createContext(!1),oa=()=>e.useContext(ia);ia.Provider;const aa=e.createContext(function(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}()),sa=()=>e.useContext(aa);var ca=i(1688);class la extends Io{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;const n=this.options;this.options=this.client.defaultMutationOptions(e),xo(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||null==(e=this.currentMutation)||e.removeObserver(this)}onMutationUpdate(e){this.updateResult();const t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){Oo.batch((()=>{var t,n,r,i;if(this.mutateOptions&&this.hasListeners())if(e.onSuccess)null==(t=(n=this.mutateOptions).onSuccess)||t.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(i=this.mutateOptions).onSettled)||r.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(e.onError){var o,a,s,c;null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(c=this.mutateOptions).onSettled)||s.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}e.listeners&&this.listeners.forEach((({listener:e})=>{e(this.currentResult)}))}))}}const ua=ca.useSyncExternalStore;function da(){}class ha extends Io{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),fa(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return pa(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return pa(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),xo(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();const i=this.hasListeners();i&&ga(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout();const o=this.computeRefetchInterval();!i||this.currentQuery===r&&this.options.enabled===n.enabled&&o===this.currentRefetchInterval||this.updateRefetchInterval(o)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),n=this.createResult(t,e);return function(e,t,n){return!n.keepPreviousData&&(void 0!==n.placeholderData?t.isPlaceholderData:!xo(e.getCurrentResult(),t))}(this,n,e)&&(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach((n=>{Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),e[n])})})),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,t);return n.isFetchingOptimistic=!0,n.fetch().then((()=>this.createResult(n,t)))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(so)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),ao||this.currentResult.isStale||!co(this.options.staleTime))return;const e=lo(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),e)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!ao&&!1!==this.options.enabled&&co(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||No.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const n=this.currentQuery,r=this.options,i=this.currentResult,o=this.currentResultState,a=this.currentResultOptions,s=e!==n,c=s?e.state:this.currentQueryInitialState,l=s?this.currentResult:this.previousQueryResult,{state:u}=e;let d,{dataUpdatedAt:h,error:f,errorUpdatedAt:p,fetchStatus:g,status:m}=u,b=!1,w=!1;if(t._optimisticResults){const i=this.hasListeners(),o=!i&&fa(e,t),a=i&&ga(e,n,t,r);(o||a)&&(g=jo(e.options.networkMode)?"fetching":"paused",h||(m="loading")),"isRestoring"===t._optimisticResults&&(g="idle")}if(t.keepPreviousData&&!u.dataUpdatedAt&&null!=l&&l.isSuccess&&"error"!==m)d=l.data,h=l.dataUpdatedAt,m=l.status,b=!0;else if(t.select&&void 0!==u.data)if(i&&u.data===(null==o?void 0:o.data)&&t.select===this.selectFn)d=this.selectResult;else try{this.selectFn=t.select,d=t.select(u.data),d=Ao(null==i?void 0:i.data,d,t),this.selectResult=d,this.selectError=null}catch(e){this.selectError=e}else d=u.data;if(void 0!==t.placeholderData&&void 0===d&&"loading"===m){let e;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==a?void 0:a.placeholderData))e=i.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(m="success",d=Ao(null==i?void 0:i.data,e,t),w=!0)}this.selectError&&(f=this.selectError,d=this.selectResult,p=Date.now(),m="error");const y="fetching"===g,v="loading"===m,x="error"===m;return{status:m,fetchStatus:g,isLoading:v,isSuccess:"success"===m,isError:x,isInitialLoading:v&&y,data:d,dataUpdatedAt:h,error:f,errorUpdatedAt:p,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>c.dataUpdateCount||u.errorUpdateCount>c.errorUpdateCount,isFetching:y,isRefetching:y&&!v,isLoadingError:x&&0===u.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:w,isPreviousData:b,isRefetchError:x&&0!==u.dataUpdatedAt,isStale:ma(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,xo(n,t))return;this.currentResult=n;const r={cache:!0};!1!==(null==e?void 0:e.listeners)&&(()=>{if(!t)return!0;const{notifyOnChangeProps:e}=this.options,n="function"==typeof e?e():e;if("all"===n||!n&&!this.trackedProps.size)return!0;const r=new Set(null!=n?n:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some((e=>{const n=e;return this.currentResult[n]!==t[n]&&r.has(n)}))})()&&(r.listeners=!0),this.notify({...r,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||Lo(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){Oo.batch((()=>{var t,n,r,i;if(e.onSuccess)null==(t=(n=this.options).onSuccess)||t.call(n,this.currentResult.data),null==(r=(i=this.options).onSettled)||r.call(i,this.currentResult.data,null);else if(e.onError){var o,a,s,c;null==(o=(a=this.options).onError)||o.call(a,this.currentResult.error),null==(s=(c=this.options).onSettled)||s.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach((({listener:e})=>{e(this.currentResult)})),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function fa(e,t){return function(e,t){return!(!1===t.enabled||e.state.dataUpdatedAt||"error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&pa(e,t,t.refetchOnMount)}function pa(e,t,n){if(!1!==t.enabled){const r="function"==typeof n?n(e):n;return"always"===r||!1!==r&&ma(e,t)}return!1}function ga(e,t,n,r){return!1!==n.enabled&&(e!==t||!1===r.enabled)&&(!n.suspense||"error"!==e.state.status)&&ma(e,n)}function ma(e,t){return e.isStaleByTime(t.staleTime)}var ba=i(2798),wa=e.createContext(void 0),ya=e.createContext(void 0);function va({children:t,config:n}){return e.createElement(wa.Provider,{children:e.createElement(ra,{children:t,client:n.queryClient,context:ya}),value:n})}function xa(){const t=e.useContext(wa);if(!t)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join("\n"));return t}var Ca=ca.useSyncExternalStore;function ka(e){return"[object Object]"===Object.prototype.toString.call(e)}function Ea(e){return JSON.stringify(e,((e,t)=>function(e){if(!ka(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!ka(n)&&!!n.hasOwnProperty("isPrototypeOf")}(t)?Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}):"bigint"==typeof t?t.toString():t))}function Sa(t,n,r){const i=ho(t,n,r);return function(t,n,r){const i=ho(t,void 0,void 0),o=na({context:i.context}),[a]=e.useState((()=>new la(o,i)));e.useEffect((()=>{a.setOptions(i)}),[a,i]);const s=ua(e.useCallback((e=>a.subscribe(Oo.batchCalls(e))),[a]),(()=>a.getCurrentResult()),(()=>a.getCurrentResult())),c=e.useCallback(((e,t)=>{a.mutate(e,t).catch(da)}),[a]);if(s.error&&(l=a.options.useErrorBoundary,u=[s.error],"function"==typeof l?l(...u):l))throw s.error;var l,u;return{...s,mutate:c,mutateAsync:s.mutate}}({context:ya,...i})}function Pa(t,n,r){const i=function(e,t,n){return r=e,Array.isArray(r)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e;var r}(t,n,r),o=function(t,n){const r=na({context:t.context}),i=oa(),o=sa(),a=r.defaultQueryOptions({...t,queryKeyHashFn:Ea});a._optimisticResults=i?"isRestoring":"optimistic",a.onError&&(a.onError=Oo.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=Oo.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=Oo.batchCalls(a.onSettled)),a.suspense&&"number"!=typeof a.staleTime&&(a.staleTime=1e3),(a.suspense||a.useErrorBoundary)&&(o.isReset()||(a.retryOnMount=!1));const[s]=e.useState((()=>new n(r,a))),c=s.getOptimisticResult(a);if(Ca(e.useCallback((e=>i?()=>{}:s.subscribe(Oo.batchCalls(e))),[s,i]),(()=>s.getCurrentResult()),(()=>s.getCurrentResult())),e.useEffect((()=>{o.clearReset()}),[o]),e.useEffect((()=>{s.setOptions(a,{listeners:!1})}),[a,s]),a.suspense&&c.isLoading&&c.isFetching&&!i)throw s.fetchOptimistic(a).then((({data:e})=>{a.onSuccess?.(e),a.onSettled?.(e,null)})).catch((e=>{o.clearReset(),a.onError?.(e),a.onSettled?.(void 0,e)}));if(c.isError&&!o.isReset()&&!c.isFetching&&(l=a.useErrorBoundary,u=[c.error,s.getCurrentQuery()],"function"==typeof l?l(...u):l))throw c.error;var l,u;const d="loading"===c.status&&"idle"===c.fetchStatus?"idle":c.status,h="idle"===d,f="loading"===d&&"fetching"===c.fetchStatus;return{...c,defaultedOptions:a,isIdle:h,isLoading:f,observer:s,status:d}}({context:ya,...i},ha),a={data:o.data,error:o.error,fetchStatus:o.fetchStatus,isError:o.isError,isFetched:o.isFetched,isFetchedAfterMount:o.isFetchedAfterMount,isFetching:o.isFetching,isIdle:o.isIdle,isLoading:o.isLoading,isRefetching:o.isRefetching,isSuccess:o.isSuccess,refetch:o.refetch,status:o.status,internal:{dataUpdatedAt:o.dataUpdatedAt,errorUpdatedAt:o.errorUpdatedAt,failureCount:o.failureCount,isFetchedAfterMount:o.isFetchedAfterMount,isLoadingError:o.isLoadingError,isPaused:o.isPaused,isPlaceholderData:o.isPlaceholderData,isPreviousData:o.isPreviousData,isRefetchError:o.isRefetchError,isStale:o.isStale,remove:o.remove}};return o.defaultedOptions.notifyOnChangeProps?a:function(e,t){const n={};return Object.keys(e).forEach((r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(r),e[r])})})),n}(a,o.observer)}var _a=()=>na({context:ya});function Aa({chainId:e}){return[{entity:"walletClient",chainId:e,persist:!1}]}function $a({queryKey:[{chainId:e}]}){return or({chainId:e})}function Oa({chainId:e}={}){return function({chainId:e}={}){return(0,ba.useSyncExternalStoreWithSelector)((t=>function(e,t){const n=Jn().subscribe((({publicClient:e})=>e),(async()=>t(ir(e))));return n}({chainId:e},t)),(()=>ir({chainId:e})),(()=>ir({chainId:e})),(e=>e),((e,t)=>e.uid===t.uid))}({chainId:e}).chain.id}var Ia=e=>"object"==typeof e&&!Array.isArray(e);function Na(t,n,r=n,i=Mn){const o=e.useRef([]),a=(0,ba.useSyncExternalStoreWithSelector)(t,n,r,(e=>e),((e,t)=>{if(Ia(e)&&Ia(t)&&o.current.length){for(const n of o.current)if(!i(e[n],t[n]))return!1;return!0}return i(e,t)}));if(Ia(a)){const e={...a};return Object.defineProperties(e,Object.entries(e).reduce(((e,[t,n])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(o.current.includes(t)||o.current.push(t),n)}})),{})),e}return a}function Ta({onConnect:t,onDisconnect:n}={}){const r=xa(),i=Na(e.useCallback((e=>hr(e)),[r]),lr),o=e.useRef(),a=o.current;return e.useEffect((()=>{"connected"!==a?.status&&"connected"===i.status&&t?.({address:i.address,connector:i.connector,isReconnected:"reconnecting"===a?.status||void 0===a?.status}),"connected"===a?.status&&"disconnected"===i.status&&n?.(),o.current=i}),[t,n,a,i]),i}function Ra(){const t=xa();return Na((0,e.useCallback)((e=>fr(e)),[t]),ur)}var Ma=e=>[{entity:"switchNetwork",...e}],ja=e=>{const{chainId:t}=e;if(!t)throw new Error("chainId is required");return dr({chainId:t})};function Ua(e){if("prepared"===e.mode){if(!e.request)throw new Error("request is required");return cr({mode:"prepared",request:e.request})}if(!e.address)throw new Error("address is required");if(!e.abi)throw new Error("abi is required");if(!e.functionName)throw new Error("functionName is required");return cr({address:e.address,args:e.args,chainId:e.chainId,abi:e.abi,functionName:e.functionName,accessList:e.accessList,account:e.account,dataSuffix:e.dataSuffix,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,value:e.value})}function La({address:t,abi:n,functionName:r,chainId:i,args:o,cacheTime:a,dataSuffix:s,enabled:c=!0,scopeKey:l,staleTime:u,suspense:d,onError:h,onSettled:f,onSuccess:p,...g}={}){const{chain:m}=Ra(),{data:b}=function({chainId:t,suspense:n,onError:r,onSettled:i,onSuccess:o}={}){const{connector:a}=Ta(),s=Oa({chainId:t}),c=Pa(Aa({chainId:s}),$a,{cacheTime:0,enabled:Boolean(a),staleTime:1/0,suspense:n,onError:r,onSettled:i,onSuccess:o}),l=_a();return e.useEffect((()=>{const e=function({chainId:e},t){const n=Jn().subscribe((({data:e,connector:t})=>({account:e?.account,chainId:e?.chain?.id,connector:t})),(async({chainId:n})=>{if(e&&n&&e!==n)return;const r=await or({chainId:e});return Jn().connector?t(r):t(null)}),{equalityFn:$n});return n}({chainId:s},(e=>{e?l.invalidateQueries(Aa({chainId:s})):l.removeQueries(Aa({chainId:s}))}));return e}),[l,s]),c}({chainId:i}),{accessList:w,account:y,blockNumber:v,blockTag:x,gas:C,gasPrice:k,maxFeePerGas:E,maxPriorityFeePerGas:S,nonce:P,value:_}=Ln(g),A=Pa(function({accessList:e,account:t,activeChainId:n,args:r,address:i,blockNumber:o,blockTag:a,chainId:s,dataSuffix:c,functionName:l,gas:u,gasPrice:d,maxFeePerGas:h,maxPriorityFeePerGas:f,nonce:p,scopeKey:g,walletClientAddress:m,value:b}){return[{entity:"prepareContractTransaction",accessList:e,account:t,activeChainId:n,address:i,args:r,blockNumber:o,blockTag:a,chainId:s,dataSuffix:c,functionName:l,gas:u,gasPrice:d,maxFeePerGas:h,maxPriorityFeePerGas:f,nonce:p,scopeKey:g,walletClientAddress:m,value:b}]}({accessList:w,account:y,activeChainId:m?.id,address:t,args:o,blockNumber:v,blockTag:x,chainId:i,dataSuffix:s,functionName:r,gas:C,gasPrice:k,maxFeePerGas:E,maxPriorityFeePerGas:S,nonce:P,scopeKey:l,walletClientAddress:b?.account.address,value:_}),function({abi:e,walletClient:t}){return({queryKey:[{accessList:n,account:r,args:i,address:o,blockNumber:a,blockTag:s,chainId:c,dataSuffix:l,functionName:u,gas:d,gasPrice:h,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,value:m}]})=>{if(!e)throw new Error("abi is required");if(!o)throw new Error("address is required");if(!u)throw new Error("functionName is required");return ar({abi:e,accessList:n,account:r,args:i,address:o,blockNumber:a,blockTag:s,chainId:c,dataSuffix:l,functionName:u,gas:d,gasPrice:h,maxFeePerGas:f,maxPriorityFeePerGas:p,nonce:g,walletClient:t,value:m})}}({abi:n,walletClient:b}),{cacheTime:a,enabled:Boolean(c&&n&&t&&r&&b),staleTime:u,suspense:d,onError:h,onSettled:f,onSuccess:p});return Object.assign(A,{config:{chainId:i,mode:"prepared",request:void 0,...A.data}})}const Ba=(0,s.ax)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}}),za=(0,s.ax)({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Da=(0,s.ax)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var Fa;Fa=new WeakMap;var Wa,Ha,qa,Ga,Va,Ka,Za,Qa,Ya,Xa,Ja,es,ts,ns,rs,is,os,as,ss,cs,ls=i(9795),us="eip155",ds="requestedChains",hs="wallet_addEthereumChain";function fs(){return e.createElement("w3m-account-button",{balance:!1})}function ps(t){var n,r=function(){if(!to)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await(to?.open(e))},close:async function(){await(to?.close())}}}().open,i=Ta({onConnect:function(){p()}}),o=i.isConnected,a=(i.address,Ra().chain),s=function({chainId:t,throwForSwitchChainNotSupported:n,onError:r,onMutate:i,onSettled:o,onSuccess:a}={}){const s=xa(),c=function(){const[,t]=e.useReducer((e=>e+1),0);return t}(),{data:l,error:u,isError:d,isIdle:h,isLoading:f,isSuccess:p,mutate:g,mutateAsync:m,reset:b,status:w,variables:y}=Sa(Ma({chainId:t}),ja,{onError:r,onMutate:i,onSettled:o,onSuccess:a}),v=e.useCallback((e=>g({chainId:e??t})),[t,g]),x=e.useCallback((e=>m({chainId:e??t})),[t,m]);let C,k;e.useEffect((()=>{const e=s.subscribe((({chains:e,connector:t})=>({chains:e,connector:t})),c);return e}),[s,c]);const E=!!s.connector?.switchChain;return(n||E)&&(C=v,k=x),{chains:s.chains??[],data:l,error:u,isError:d,isIdle:h,isLoading:f,isSuccess:p,pendingChainId:y?.chainId,reset:b,status:w,switchNetwork:C,switchNetworkAsync:k,variables:y}}({throwForSwitchChainNotSupported:!0}),c=s.chains,l=s.error,u=s.isLoading,d=s.pendingChainId,h=s.switchNetwork,f=La({address:o?{Sepolia:"0x42Fbf87Cd983c0F0BCdfF2d8A5904CD4968cD76F",Ethereum:"0x49cC7de889C1e4bDc1b4156B882cA5c76C668987","Arbitrum One":"0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",Polygon:"0xA42ccA468fd07491824Ab121CB559f1B3791e92C","BNB Smart Chain":"0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6"}[a.name]:"0x0",abi:[{name:"mint",type:"function",stateMutability:"payable",inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],outputs:[]}],args:["1"],functionName:"mint"}),p=f.refetch,g=function(t){const{address:n,abi:r,args:i,chainId:o,functionName:a,mode:s,request:c,dataSuffix:l}=t,{accessList:u,account:d,gas:h,gasPrice:f,maxFeePerGas:p,maxPriorityFeePerGas:g,nonce:m,value:b}=function(e){return{accessList:e.accessList,account:e.account,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}(t),{data:w,error:y,isError:v,isIdle:x,isLoading:C,isSuccess:k,mutate:E,mutateAsync:S,reset:P,status:_,variables:A}=Sa(function({address:e,abi:t,functionName:n,...r}){const{args:i,accessList:o,account:a,dataSuffix:s,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,request:f,value:p}=r;return[{entity:"writeContract",address:e,args:i,abi:t,accessList:o,account:a,dataSuffix:s,functionName:n,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,request:f,value:p}]}({address:n,abi:r,functionName:a,chainId:o,mode:s,args:i,accessList:u,account:d,dataSuffix:l,gas:h,gasPrice:f,maxFeePerGas:p,maxPriorityFeePerGas:g,nonce:m,request:c,value:b}),Ua,{onError:t.onError,onMutate:t.onMutate,onSettled:t.onSettled,onSuccess:t.onSuccess});return{data:w,error:y,isError:v,isIdle:x,isLoading:C,isSuccess:k,reset:P,status:_,variables:A,write:e.useMemo((()=>{if("prepared"===t.mode){if(!c)return;return()=>E({mode:"prepared",request:t.request,chainId:t.chainId})}return e=>E({address:n,args:i,abi:r,functionName:a,chainId:o,accessList:u,account:d,dataSuffix:l,gas:h,gasPrice:f,maxFeePerGas:p,maxPriorityFeePerGas:g,nonce:m,value:b,...e})}),[u,d,r,n,i,o,t.chainId,t.mode,t.request,l,a,h,f,p,g,E,m,c,b]),writeAsync:e.useMemo((()=>{if("prepared"===t.mode){if(!c)return;return()=>S({mode:"prepared",request:t.request})}return e=>S({address:n,args:i,abi:r,chainId:o,functionName:a,accessList:u,account:d,dataSuffix:l,gas:h,gasPrice:f,maxFeePerGas:p,maxPriorityFeePerGas:g,nonce:m,value:b,...e})}),[u,d,r,n,i,o,t.mode,t.request,l,a,h,f,p,g,S,m,c,b])}}(f.config),m=g.error,b=g.isError,w=g.write,y=g.data,v=function({chainId:e,confirmations:t,hash:n,timeout:r,cacheTime:i,enabled:o=!0,scopeKey:a,staleTime:s,suspense:c,onError:l,onReplaced:u,onSettled:d,onSuccess:h}={}){return Pa(function({confirmations:e,chainId:t,hash:n,scopeKey:r,timeout:i}){return[{entity:"waitForTransaction",confirmations:e,chainId:t,hash:n,scopeKey:r,timeout:i}]}({chainId:Oa({chainId:e}),confirmations:t,hash:n,scopeKey:a,timeout:r}),function({onReplaced:e}){return({queryKey:[{chainId:t,confirmations:n,hash:r,timeout:i}]})=>{if(!r)throw new Error("hash is required");return async function({chainId:e,confirmations:t=1,hash:n,onReplaced:r,timeout:i=0}){const o=ir({chainId:e}),a=await o.waitForTransactionReceipt({hash:n,confirmations:t,onReplaced:r,timeout:i});if("reverted"===a.status){const e=await o.getTransaction({hash:a.transactionHash}),t=await o.call({...e,gasPrice:"eip1559"!==e.type?e.gasPrice:void 0,maxFeePerGas:"eip1559"===e.type?e.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===e.type?e.maxPriorityFeePerGas:void 0}),n=(0,G.rR)(`0x${t.substring(138)}`);throw new Error(n)}return a}({chainId:t,confirmations:n,hash:r,onReplaced:e,timeout:i})}}({onReplaced:u}),{cacheTime:i,enabled:Boolean(o&&n),staleTime:s,suspense:c,onError:l,onSettled:d,onSuccess:h})}({hash:null==y?void 0:y.hash,onSuccess:function(e){console.log("SuccessTrans",e)},onError:function(e){console.log(e)}}),x=(v.isLoading,v.isSuccess,v.error),C=v.isError;return e.createElement(e.Fragment,null,o?e.createElement(e.Fragment,null,e.createElement(fs,null),e.createElement("button",{onClick:function(){null==w||w()}},"MINT"),e.createElement("p",null,b||C?null===(n=m||x)||void 0===n?void 0:n.message:"no mint error"),e.createElement("h2",null,"Currently connected to ",a.name),e.createElement("div",{style:{display:"flex",gap:"8px",marginBottom:"36px",flexWrap:"wrap"}},c.map((function(t){return e.createElement("button",{disabled:!h||t.id===(null==a?void 0:a.id),key:t.id,onClick:function(){return null==h?void 0:h(t.id)}},t.name,u&&d===t.id&&" (switching)")}))),l&&e.createElement("p",null,l&&l.message)):e.createElement("button",{onClick:function(){r()}},"Connect Wallet"))}Wa=new WeakMap,Ha=new WeakMap,qa=new WeakSet,Ga=async function(){return d(this,Ha)||"undefined"==typeof window||f(this,Ha,p(this,Va,Ka).call(this)),d(this,Ha)},Va=new WeakSet,Ka=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await i.e(979).then(i.bind(i,7979)),[r,...o]=this.chains.map((({id:e})=>e));if(r){const{projectId:i,showQrModal:a=!0,qrModalOptions:s,metadata:c,relayUrl:l}=this.options;f(this,Wa,await e.init({showQrModal:a,qrModalOptions:s,projectId:i,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),metadata:c,relayUrl:l}))}},Za=new WeakSet,Qa=function(){if(p(this,ss,cs).call(this).includes(hs))return!1;if(!this.options.isNewChainsStale)return!1;const e=p(this,rs,is).call(this),t=this.chains.map((({id:e})=>e)),n=p(this,os,as).call(this);return!(n.length&&!n.some((e=>t.includes(e)))||t.every((t=>e.includes(t))))},Ya=new WeakSet,Xa=function(){d(this,Wa)&&(p(this,Ja,es).call(this),d(this,Wa).on("accountsChanged",this.onAccountsChanged),d(this,Wa).on("chainChanged",this.onChainChanged),d(this,Wa).on("disconnect",this.onDisconnect),d(this,Wa).on("session_delete",this.onDisconnect),d(this,Wa).on("display_uri",this.onDisplayUri),d(this,Wa).on("connect",this.onConnect))},Ja=new WeakSet,es=function(){d(this,Wa)&&(d(this,Wa).removeListener("accountsChanged",this.onAccountsChanged),d(this,Wa).removeListener("chainChanged",this.onChainChanged),d(this,Wa).removeListener("disconnect",this.onDisconnect),d(this,Wa).removeListener("session_delete",this.onDisconnect),d(this,Wa).removeListener("display_uri",this.onDisplayUri),d(this,Wa).removeListener("connect",this.onConnect))},ts=new WeakSet,ns=function(e){this.storage?.setItem(ds,e)},rs=new WeakSet,is=function(){return this.storage?.getItem(ds)??[]},os=new WeakSet,as=function(){if(!d(this,Wa))return[];const e=d(this,Wa).session?.namespaces;if(!e)return[];const t=(0,ls.fK)(e),n=t[us]?.chains?.map((e=>parseInt(e.split(":")[1]||"")));return n??[]},ss=new WeakSet,cs=function(){if(!d(this,Wa))return[];const e=d(this,Wa).session?.namespaces;if(!e)return[];const t=(0,ls.fK)(e),n=t[us]?.methods;return n??[]};var gs=function(){return e.createElement(e.Fragment,null,e.createElement("div",{id:"content-wrap"},e.createElement("main",{className:"main-sections"},e.createElement(ps,null))))},ms="1",bs=window.localStorage["tooncoin:client_token"]||function(){var e="u",t=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(t)?e="a":/iPad|iPhone|iPod/.test(t)&&!window.MSStream&&(e="i");for(var n="",r=0;r<32;r++)n+="abcdef0123456789".charAt(Math.floor(16*Math.random()));return["b",e,n].join(":")}();window.localStorage["tooncoin:client_token"]=bs,window.localStorage["tooncoin:first_visit_at"]=window.localStorage["tooncoin:first_visit_at"]||Date.now();/^((?!chrome|android).)*safari/i.test(navigator.userAgent),/iphone|ipad|android/i.test(window.navigator.userAgent),/metamask/i.test(window.navigator.userAgent),ms.locale||ms.lang||window.navigator.language;var ws,ys={walletconnect:{key:"08d390b3c49fa9c71e72aed16e58d580"},infura:{key:"5871ff536f3d43e59131d71f88c2b0b5"},alchemy:{key:"wg6wp8N_jgPqBLyx94PxLRrNLVer2Elb"},amplitude:{key:"a280a03e71325ce92bb0695610481006"}},vs=ys.infura.key,xs=ys.walletconnect.key,Cs=[c,Ba,za,Da],ks=function(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const n of e){let e=!1;for(const r of t){const t=r(n);t&&(e=!0,c.some((({id:e})=>e===n.id))||(c=[...c,t.chain]),l[n.id]=[...l[n.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[n.id]=[...u[n.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw new Error([`Could not find valid provider configuration for chain "${n.name}".\n`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join("\n"))}return{chains:c,publicClient:({chainId:t})=>{const u=c.find((e=>e.id===t))??e[0],d=l[u.id];if(!d||!d[0])throw new Error(`No providers configured for chain "${u.id}"`);const h=pn({batch:n,chain:u,transport:gn(d.map((e=>function(e,t={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:d=0}="object"==typeof n?n:{},h=t.retryCount??c,f=l??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new mn;return Fe({key:i,name:o,async request({method:t,params:i}){const o={method:t,params:i},{schedule:a}=(0,bn.S)({id:`${e}`,wait:d,shouldSplitBatch(e){return e.length>u},fn:e=>kn.http(p,{body:e,fetchOptions:r,timeout:f})}),[{error:s,result:c}]=await(async e=>n?a(e):[await kn.http(p,{body:e,fetchOptions:r,timeout:f})])(o);if(s)throw new w.bs({body:o,error:s,url:p});return c},retryCount:h,retryDelay:a,timeout:f,type:"http"},{fetchOptions:r,url:e})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:r});return Object.assign(h,{chains:c})},webSocketPublicClient:({chainId:t})=>{const l=c.find((e=>e.id===t))??e[0],d=u[l.id];if(!d||!d[0])return;const h=pn({batch:n,chain:l,transport:gn(d.map((e=>function(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:a,timeout:s})=>{const c=t.retryCount??a,l=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new mn;return Fe({key:n,name:r,async request({method:e,params:t}){const n={method:e,params:t},r=await Cn(u),{error:i,result:o}=await kn.webSocketAsync(r,{body:n,timeout:l});if(i)throw new w.bs({body:n,error:i,url:u});return o},retryCount:c,retryDelay:i,timeout:l,type:"webSocket"},{getSocket(){return Cn(u)},async subscribe({params:e,onData:t,onError:n}){const r=await Cn(u),{result:i}=await new Promise(((i,o)=>kn.webSocket(r,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error)return o(e.error),void n?.(e.error);"number"!=typeof e.id?"eth_subscription"===e.method&&t(e.params):i(e)}})));return{subscriptionId:i,async unsubscribe(){return new Promise((e=>kn.webSocket(r,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e})))}}}})}}(e,{timeout:s}))),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:r});return Object.assign(h,{chains:c})}}}(Cs,[function({apiKey:e}){return function(t){const n=t.rpcUrls.infura?.http[0],r=t.rpcUrls.infura?.webSocket?.[0];return n?{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[`${n}/${e}`]}}},rpcUrls:{http:[`${n}/${e}`],webSocket:[`${r}/${e}`]}}:null}}({apiKey:vs}),function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;const n=`${eo}/v1/?chainId=${Wi}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[n]}}},rpcUrls:{http:[n]}}}}({projectId:xs}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),Es=ks.chains,Ss=ks.publicClient,Ps=ks.webSocketPublicClient,_s=function({queryClient:e=new Go({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=Hn({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:Wn}),persister:n=("undefined"!=typeof window?ro({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0),...r}){const i=Xn({...r,storage:t});return n&&function(e){let t,n=!1;const r=async function({queryClient:e,persister:t,maxAge:n=864e5,buster:r="",hydrateOptions:i}){try{const o=await t.restoreClient();if(o)if(o.timestamp){const a=Date.now()-o.timestamp>n,s=o.buster!==r;a||s?t.removeClient():function(e,t,n){if("object"!=typeof t||null===t)return;const r=e.getMutationCache(),i=e.getQueryCache(),o=t.mutations||[],a=t.queries||[];o.forEach((t=>{var i;r.build(e,{...null==n||null==(i=n.defaultOptions)?void 0:i.mutations,mutationKey:t.mutationKey},t.state)})),a.forEach((({queryKey:t,state:r,queryHash:o})=>{var a;const s=i.get(o);if(s){if(s.state.dataUpdatedAt<r.dataUpdatedAt){const{fetchStatus:e,...t}=r;s.setState(t)}}else i.build(e,{...null==n||null==(a=n.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:o},{...r,fetchStatus:"idle"})}))}(e,o.clientState,i)}else t.removeClient()}catch(e){t.removeClient()}}(e).then((()=>{n||(t=function(e){const t=e.queryClient.getQueryCache().subscribe((t=>{Yo(t.type)&&Xo(e)})),n=e.queryClient.getMutationCache().subscribe((t=>{Yo(t.type)&&Xo(e)}));return()=>{t(),n()}}(e))}))}({queryClient:e,persister:n,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(i,{queryClient:e})}({autoConnect:!0,connectors:[new qe({chains:Cs}),new class extends qe{constructor({chains:e,options:t}={}){const n={name:"MetaMask",shimDisconnect:!0,getProvider(){function e(e){if(e?.isMetaMask&&(!e.isBraveWallet||e._events||e._state)&&!(e.isApexWallet||e.isAvalanche||e.isBitKeep||e.isBlockWallet||e.isCoin98||e.isFordefi||e.isMathWallet||e.isOkxWallet||e.isOKExWallet||e.isOneInchIOSWallet||e.isOneInchAndroidWallet||e.isOpera||e.isPortal||e.isRabby||e.isDefiant||e.isTokenPocket||e.isTokenary||e.isZeal||e.isZerion))return e}if("undefined"==typeof window)return;const t=window.ethereum;return t?.providers?t.providers.find(e):e(t)},...t};super({chains:e,options:n}),this.id="metaMask",this.shimDisconnectKey=`${this.id}.shimDisconnect`,h(this,Fa,void 0),f(this,Fa,n.UNSTABLE_shimOnConnectSelectAccount)}async connect({chainId:e}={}){try{const t=await this.getProvider();if(!t)throw new n;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=null;if(d(this,Fa)&&this.options?.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey)&&(r=await this.getAccount().catch((()=>null)),r))try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}),r=await this.getAccount()}catch(e){if(this.isUserRejectedRequestError(e))throw new T(e);if(e.code===new A(e).code)throw e}if(!r){const e=await t.request({method:"eth_requestAccounts"});r=(0,m.K)(e[0])}let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),this.options?.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:r,chain:{id:i,unsupported:o},provider:t}}catch(e){if(this.isUserRejectedRequestError(e))throw new T(e);if(-32002===e.code)throw new A(e);throw e}}}({chains:Es}),new class extends g{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),h(this,qa),h(this,Va),h(this,Za),h(this,Ya),h(this,Ja),h(this,ts),h(this,rs),h(this,os),h(this,ss),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,h(this,Wa,void 0),h(this,Ha,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,m.K)(e[0])})},this.onChainChanged=e=>{const t=Number(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})},this.onDisconnect=()=>{p(this,ts,ns).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},p(this,qa,Ga).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let n=e;if(!n){const e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;n=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!n)throw new Error("No chains found on connector.");const r=await this.getProvider();p(this,Ya,Xa).call(this);const i=p(this,Za,Qa).call(this);if(r.session&&i&&await r.disconnect(),!r.session||i){const e=this.chains.filter((e=>e.id!==n)).map((e=>e.id));this.emit("message",{type:"connecting"}),await r.connect({pairingTopic:t,chains:[n],optionalChains:e.length?e:void 0}),p(this,ts,ns).call(this,this.chains.map((({id:e})=>e)))}const o=await r.enable(),a=(0,m.K)(o[0]),s=await this.getChainId();return{account:a,chain:{id:s,unsupported:this.isChainUnsupported(s)}}}catch(e){if(/user rejected/i.test(e?.message))throw new T(e);throw e}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{p(this,Ja,es).call(this),p(this,ts,ns).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return(0,m.K)(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return d(this,Wa)||await p(this,qa,Ga).call(this),e&&await this.switchChain(e),d(this,Wa)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find((t=>t.id===e));if(!t)throw new Error("provider is required.");return Ue({account:n,chain:r,transport:We(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=p(this,Za,Qa).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){const t=this.chains.find((t=>t.id===e));if(!t)throw new L(new Error("chain not found on connector."));try{const n=await this.getProvider(),r=p(this,os,as).call(this),i=p(this,ss,cs).call(this);if(!r.includes(e)&&i.includes(hs)){await n.request({method:hs,params:[{chainId:(0,K.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const r=p(this,rs,is).call(this);r.push(e),p(this,ts,ns).call(this,r)}return await n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,K.eC)(e)}]}),t}catch(e){if(/user rejected request/i.test("string"==typeof e?e:e?.message))throw new T(e);throw new L(e)}}}({chains:Es,options:{infuraId:vs,projectId:xs,showQrModal:!1}})],publicClient:Ss,webSocketPublicClient:Ps});ws={defaultChain:c,wagmiConfig:_s,projectId:xs,chains:Es},to||(to=new class extends ji{constructor(e){const{wagmiConfig:t,chains:n,defaultChain:r,tokens:i,_sdkVersion:o,...a}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find((e=>e.id===Ui)))throw new Error("web3modal:constructor - WalletConnectConnector is required");const s={connectWalletConnect:async e=>{const n=t.connectors.find((e=>e.id===Ui));if(!n)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");n.on("message",(t=>{"display_uri"===t.type&&(e(t.data),n.removeAllListeners())}));const r=Xi(this.getCaipNetwork()?.id);await er({connector:n,chainId:r})},connectExternal:async({id:e,provider:n,info:r})=>{const i=t.connectors.find((t=>t.id===e));if(!i)throw new Error("connectionControllerClient:connectExternal - connector is undefined");n&&r&&i.id===Fi&&i.setEip6963Wallet?.({provider:n,info:r});const o=Xi(this.getCaipNetwork()?.id);await er({connector:i,chainId:o})},checkInstalled:e=>{const t=this.getConnectors().filter((e=>"ANNOUNCED"===e.type)),n=this.getConnectors().find((e=>"INJECTED"===e.type));if(!e)return Boolean(window.ethereum);if(t.length){const n=e.some((e=>t.some((t=>t.info?.rdns===e))));if(n)return!0}return!!n&&!!window?.ethereum&&e.some((e=>Boolean(window.ethereum?.[String(e)])))},disconnect:tr};super({networkControllerClient:{switchCaipNetwork:async e=>{const t=Xi(e?.id);t&&await dr({chainId:t})},async getApprovedCaipNetworksData(){const e=localStorage.getItem("wagmi.wallet");if(e?.includes(Ui)){const e=t.connectors.find((e=>e.id===Ui));if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const n=await e.getProvider(),r=n.signer?.session?.namespaces,i=r?.[Wi]?.methods,o=r?.[Wi]?.chains;return{supportsAllNetworks:i?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:s,defaultChain:Qi(r),tokens:Yi(i),_sdkVersion:o??`html-wagmi-${Hi}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(n),this.syncConnectors(t),this.listenConnectors(t),hr((()=>this.syncAccount())),fr((()=>this.syncNetwork()))}getState(){const e=super.getState();return{...e,selectedNetworkId:Xi(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:Xi(t.selectedNetworkId)})))}syncRequestedNetworks(e){const t=e?.map((e=>({id:`${Wi}:${e.id}`,name:e.name,imageId:qi[e.id],imageUrl:this.options?.chainImages?.[e.id]})));this.setRequestedCaipNetworks(t??[])}async syncAccount(){const{address:e,isConnected:t}=lr(),{chain:n}=ur();if(this.resetAccount(),t&&e&&n){const r=`${Wi}:${n.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(r),await Promise.all([this.syncProfile(e),this.syncBalance(e,n),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){const{address:e,isConnected:t}=lr(),{chain:n}=ur();if(n){const r=String(n.id),i=`${Wi}:${r}`;if(this.setCaipNetwork({id:i,name:n.name,imageId:qi[n.id],imageUrl:this.options?.chainImages?.[n.id]}),t&&e){const t=`${Wi}:${n.id}:${e}`;if(this.setCaipAddress(t),n.blockExplorers?.default?.url){const t=`${n.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,n)}}}async syncProfile(e){try{const{name:t,avatar:n}=await this.fetchIdentity({caipChainId:`${Wi}:${c.id}`,address:e});this.setProfileName(t),this.setProfileImage(n)}catch{const t=await async function({address:e,chainId:t}){return ir({chainId:t}).getEnsName({address:(0,m.K)(e)})}({address:e,chainId:c.id});if(t){this.setProfileName(t);const e=await async function({name:e,chainId:t}){const{normalize:n}=await Promise.all([i.e(28),i.e(912)]).then(i.bind(i,6553)),r=ir({chainId:t});return await r.getEnsAvatar({name:n(e)})}({name:t,chainId:c.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){const n=await async function({address:e,chainId:t,formatUnits:n,token:r}){const i=Jn(),o=ir({chainId:t});if(r){const i=async({abi:i})=>{const o={abi:i,address:r,chainId:t},[a,s,c]=await sr({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,An.b)(a??"0",Bn(n??s)),symbol:c,value:a}};try{return await i({abi:nr})}catch(e){if(e instanceof et.uq){const{symbol:e,...t}=await i({abi:rr});return{symbol:(0,G.rR)((0,Xe.f)(e,{dir:"right"})),...t}}throw e}}const a=[...i.publicClient.chains||[],...i.chains??[]],s=await o.getBalance({address:e}),c=a.find((e=>e.id===o.chain.id));return{decimals:c?.nativeCurrency.decimals??18,formatted:(0,An.b)(s??"0",Bn(n??18)),symbol:c?.nativeCurrency.symbol??"ETH",value:s}}({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(n.formatted,n.symbol)}syncConnectors(e){const t=[];e.connectors.forEach((({id:e,name:n})=>{e!==Fi&&t.push({id:e,explorerId:Vi[e],imageId:Gi[e],imageUrl:this.options?.connectorImages?.[e],name:Ki[e]??n,type:Zi[e]??"EXTERNAL"})})),this.setConnectors(t)}listenConnectors(e){const t=e.connectors.find((e=>e.id===Fi));"undefined"!=typeof window&&t&&(window.addEventListener("eip6963:announceProvider",(e=>{if(e.detail){const{info:n,provider:r}=e.detail;this.addConnector({id:Fi,type:"ANNOUNCED",imageUrl:n.icon??this.options?.connectorImages?.[Fi],name:n.name,provider:r,info:n}),t.isAuthorized({info:n,provider:r})}})),window.dispatchEvent(new Event("eip6963:requestProvider")))}}({...ws,_sdkVersion:`react-wagmi-${Hi}`})),(0,no.s)(document.getElementById("page-container")).render(e.createElement(va,{config:_s},e.createElement(gs,null)))}()}();
//# sourceMappingURL=main.ecbacd7f.js.map