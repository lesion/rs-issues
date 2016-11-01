/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _remotestoragejs = __webpack_require__(1);

	var _remotestoragejs2 = _interopRequireDefault(_remotestoragejs);

	var _remotestorageModuleBookmarks = __webpack_require__(3);

	var _remotestorageModuleBookmarks2 = _interopRequireDefault(_remotestorageModuleBookmarks);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _remotestorageModuleBookmarks2.default)(_remotestoragejs2.default); // require remotestoragejs

	var rs = new _remotestoragejs2.default();
	rs.displayWidget();

	rs.access.claim('bookmarks', 'rw');
	var bookmark = { url: 'http://remotestorage.io', title: 'title' };
	rs.bookmarks.archive.store(bookmark);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(2)):"function"==typeof define&&define.amd?define("RemoteStorage",["xmlhttprequest"],t):"object"==typeof exports?exports.RemoteStorage=t(require("xmlhttprequest")):e.RemoteStorage=t(e.xmlhttprequest)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(1),r(3),r(4),r(5),r(6),r(11),r(12),r(13),r(14),r(15),r(16),r(17),r(18),r(19),r(20),r(22),r(23),r(24),r(25),r(26),r(27),r(30),e.exports=r(2)},function(e,t,r){var n=r(2),o={view_info:'This app allows you to use your own storage. <a href="http://remotestorage.io/" target="_blank">Learn more!</a>',view_connect:"<strong>Connect</strong> remote storage",view_connecting:"Connecting <strong>%s</strong>",view_offline:"Offline",view_error_occured:"Sorry! An error occured.",view_invalid_key:"Wrong key!",view_confirm_reset:"Are you sure you want to reset everything? This will clear your local data and reload the page.",view_get_me_out:"Get me out of here!",view_error_plz_report:'If this problem persists, please <a href="http://remotestorage.io/community/" target="_blank">let us know</a>!',view_unauthorized:"Unauthorized! Click here to reconnect."};n.I18n={translate:function(){var e=arguments[0],t=Array.prototype.splice.call(arguments,1);if("string"!=typeof o[e])throw"Unknown translation string: "+e;return e=o[e],e.replace(/%s/g,function(){return t.shift()})},getDictionary:function(){return o},setDictionary:function(e){o=e},_rs_init:function(){}}},function(e,t,r){(function(t){function n(e){"string"==typeof e?console.error(e):console.error(e.message,e.stack)}function o(e){return 403!==e.statusCode&&401!==e.statusCode||this._emit("error",new a.Unauthorized),Promise.resolve(e)}var i;Promise.defer=function(){var e,t,r=new Promise(function(){e=arguments[0],t=arguments[1]});return{resolve:e,reject:t,promise:r}};var s=r(3),a=function(e){if("object"==typeof e&&(a.config.logging=!!e.logging,a.config.cordovaRedirectUri=e.cordovaRedirectUri),a.eventHandling(this,"ready","connected","disconnected","not-connected","conflict","error","features-loaded","connecting","authing","wire-busy","wire-done","sync-interval-change"),this._pending=[],this._setGPD({get:this._pendingGPD("get"),put:this._pendingGPD("put"),"delete":this._pendingGPD("delete")}),this._cleanups=[],this._pathHandlers={change:{}},this.apiKeys={},i=a.util.localStorageAvailable()){try{this.apiKeys=JSON.parse(localStorage.getItem("remotestorage:api-keys"))||{}}catch(t){}this.setBackend(localStorage.getItem("remotestorage:backend")||"remotestorage")}var r=this.on;this.on=function(e,t){return"ready"===e&&this.remote.connected&&this._allLoaded?setTimeout(t,0):"features-loaded"===e&&this._allLoaded&&setTimeout(t,0),r.call(this,e,t)},this._init(),this.fireInitial=function(){this.local&&setTimeout(this.local.fireInitial.bind(this.local),0)}.bind(this),this.on("ready",this.fireInitial.bind(this))};a.SyncedGetPutDelete=s,a.DiscoveryError=function(e){Error.apply(this,arguments),this.message=e},a.DiscoveryError.prototype=Object.create(Error.prototype),a.Unauthorized=function(){Error.apply(this,arguments)},a.Unauthorized.prototype=Object.create(Error.prototype),a.log=function(){a.config.logging&&console.log.apply(console,arguments)},a.config={logging:!1,changeEvents:{local:!0,window:!1,remote:!0,conflict:!0},discoveryTimeout:1e4,cordovaRedirectUri:void 0},a.prototype={connect:function(e,r){if(this.setBackend("remotestorage"),e.indexOf("@")<0)return void this._emit("error",new a.DiscoveryError("User address doesn't contain an @."));if(t.cordova){if("string"!=typeof a.config.cordovaRedirectUri)return void this._emit("error",new a.DiscoveryError("Please supply a custom HTTPS redirect URI for your Cordova app"));if(!t.cordova.InAppBrowser)return void this._emit("error",new a.DiscoveryError("Please include the InAppBrowser Cordova plugin to enable OAuth"))}this.remote.configure({userAddress:e}),this._emit("connecting");var n=setTimeout(function(){this._emit("error",new a.DiscoveryError("No storage information found at that user address."))}.bind(this),a.config.discoveryTimeout);a.Discover(e).then(function(t){if(clearTimeout(n),this._emit("authing"),t.userAddress=e,this.remote.configure(t),!this.remote.connected)if(t.authURL)if("undefined"==typeof r)this.authorize(t.authURL,a.config.cordovaRedirectUri);else{if("string"!=typeof r)throw new Error("Supplied bearer token must be a string");a.log("Skipping authorization sequence and connecting with known token"),this.remote.configure({token:r})}else this.impliedauth()}.bind(this),function(e){this._emit("error",new a.DiscoveryError("Failed to contact storage server."))}.bind(this))},disconnect:function(){this.remote&&this.remote.configure({userAddress:null,href:null,storageApi:null,token:null,properties:null}),this._setGPD({get:this._pendingGPD("get"),put:this._pendingGPD("put"),"delete":this._pendingGPD("delete")});var e=this._cleanups.length,t=0,r=function(){t++,t>=e&&(this._init(),a.log("Done cleaning up, emitting disconnected and disconnect events"),this._emit("disconnected"))}.bind(this);e>0?this._cleanups.forEach(function(e){var t=e(this);"object"==typeof t&&"function"==typeof t.then?t.then(r):r()}.bind(this)):r()},setBackend:function(e){this.backend=e,i&&(e?localStorage.setItem("remotestorage:backend",e):localStorage.removeItem("remotestorage:backend"))},onChange:function(e,t){this._pathHandlers.change[e]||(this._pathHandlers.change[e]=[]),this._pathHandlers.change[e].push(t)},enableLog:function(){a.config.logging=!0},disableLog:function(){a.config.logging=!1},log:function(){a.log.apply(a,arguments)},setApiKeys:function(e,t){t?(this.apiKeys[e]=t,"dropbox"!==e||"undefined"!=typeof this.dropbox&&this.dropbox.clientId===t.appKey?"googledrive"!==e||"undefined"!=typeof this.googledrive&&this.googledrive.clientId===t.clientId||a.GoogleDrive._rs_init(this):a.Dropbox._rs_init(this)):delete this.apiKeys[e],i&&localStorage.setItem("remotestorage:api-keys",JSON.stringify(this.apiKeys))},setCordovaRedirectUri:function(e){if("string"!=typeof e||!e.match(/http(s)?\:\/\//))throw new Error("Cordova redirect URI must be a URI string");a.config.cordovaRedirectUri=e},_init:function(){function e(){try{r||(t._emit("ready"),r=!0)}catch(e){console.error("'ready' failed: ",e,e.stack),t._emit("error",e)}}var t=this,r=!1;this._loadFeatures(function(r){this.log("[RemoteStorage] All features loaded"),this.local=r.local&&new r.local,this.local&&this.remote?(this._setGPD(s,this),this._bindChange(this.local)):this.remote&&this._setGPD(this.remote,this.remote),this.remote&&(this.remote.on("connected",function(){e(),t._emit("connected")}),this.remote.on("not-connected",function(){e(),t._emit("not-connected")}),this.remote.connected&&(e(),t._emit("connected")),this.hasFeature("Authorize")||this.remote.stopWaitingForToken()),this._collectCleanupFunctions();try{this._allLoaded=!0,this._emit("features-loaded")}catch(o){n(o),this._emit("error",o)}this._processPending()}.bind(this))},_collectCleanupFunctions:function(){this._cleanups=[];for(var e=0;e<this.features.length;e++){var t=this.features[e].cleanup;"function"==typeof t&&this._cleanups.push(t)}},_loadFeatures:function(e){function t(){u++,u===s.length&&setTimeout(function(){c.caching=!!a.Caching,c.sync=!!a.Sync,["IndexedDB","LocalStorage","InMemoryStorage"].some(function(e){if(c.some(function(t){return t.name===e}))return c.local=a[e],!0}),l.features=c,e(c)},0)}function r(e){l.log("[RemoteStorage] [FEATURE "+e+"] initialized."),c.push({name:e,init:a[e]._rs_init,supported:!0,cleanup:a[e]._rs_cleanup}),t()}function n(e,r){l.log("[RemoteStorage] [FEATURE "+e+"] initialization failed ( "+r+")"),t()}function o(e,r){l.log(""),r||t()}function i(e){var t;try{t=a[e]._rs_init(l)}catch(o){return void n(e,o)}"object"==typeof t&&"function"==typeof t.then?t.then(function(){r(e)},function(t){n(e,t)}):r(e)}var s=["WireClient","I18n","Dropbox","GoogleDrive","Access","Caching","Discover","Authorize","Widget","IndexedDB","LocalStorage","InMemoryStorage","Sync","BaseClient","Env"],c=[],u=0,l=this;s.forEach(function(e){l.log("[RemoteStorage] [FEATURE "+e+"] initializing...");var t,r=a[e];r?(t=!r._rs_supported||r._rs_supported(),"object"==typeof t?t.then(function(){o(e,!0),i(e)},function(){o(e,!1)}):"boolean"==typeof t&&(o(e,t),t&&i(e))):o(e,!1)})},hasFeature:function(e){for(var t=this.features.length-1;t>=0;t--)if(this.features[t].name===e)return this.features[t].supported;return!1},_setGPD:function(e,t){function r(e){return function(){return e.apply(t,arguments).then(o.bind(this))}}this.get=r(e.get),this.put=r(e.put),this["delete"]=r(e["delete"])},_pendingGPD:function(e){return function(){var t=Promise.defer();return this._pending.push({method:e,args:Array.prototype.slice.call(arguments),promise:t}),t.promise}.bind(this)},_processPending:function(){this._pending.forEach(function(e){try{this[e.method].apply(this,e.args).then(e.promise.resolve,e.promise.reject)}catch(t){e.promise.reject(t)}}.bind(this)),this._pending=[]},_bindChange:function(e){e.on("change",this._dispatchEvent.bind(this,"change"))},_dispatchEvent:function(e,t){var r=this;Object.keys(this._pathHandlers[e]).forEach(function(n){var o=n.length;t.path.substr(0,o)===n&&r._pathHandlers[e][n].forEach(function(e){var o={};for(var i in t)o[i]=t[i];o.relativePath=t.path.replace(new RegExp("^"+n),"");try{e(o)}catch(s){console.error("'change' handler failed: ",s,s.stack),r._emit("error",s)}})})}},Object.defineProperty(a.prototype,"connected",{get:function(){return this.remote.connected}}),e.exports=a}).call(t,function(){return this}())},function(e,t,r){function n(e){return"dropbox"===this.backend&&e.match(/^\/public\/.*[^\/]$/)}var o=r(2),i={get:function(e,t){if(this.local){void 0===t&&("object"==typeof this.remote&&this.remote.connected&&this.remote.online?t=2*this.getSyncInterval():(o.log("Not setting default maxAge, because remote is offline or not connected"),t=!1));var r=function(e){return e!==!1&&"number"!=typeof e};return r(t)?Promise.reject("Argument 'maxAge' must be false or a number"):this.local.get(e,t,this.sync.queueGetRequest.bind(this.sync))}return this.remote.get(e)},put:function(e,t,r){return n.bind(this)(e)?i._wrapBusyDone.call(this,this.remote.put(e,t,r)):this.local?this.local.put(e,t,r):i._wrapBusyDone.call(this,this.remote.put(e,t,r))},"delete":function(e){return this.local?this.local["delete"](e):i._wrapBusyDone.call(this,this.remote["delete"](e))},_wrapBusyDone:function(e){var t=this;return this._emit("wire-busy"),e.then(function(e){return t._emit("wire-done",{success:!0}),Promise.resolve(e)},function(e){return t._emit("wire-done",{success:!1}),Promise.reject(e)})}};e.exports=i},function(e,t,r){var n=r(2),o={addEventListener:function(e,t){if("string"!=typeof e)throw new Error("Argument eventName should be a string");if("function"!=typeof t)throw new Error("Argument handler should be a function");n.log("[Eventhandling] Adding event listener",e,t),this._validateEvent(e),this._handlers[e].push(t)},removeEventListener:function(e,t){this._validateEvent(e);for(var r=this._handlers[e].length,n=0;n<r;n++)if(this._handlers[e][n]===t)return void this._handlers[e].splice(n,1)},_emit:function(e){this._validateEvent(e);var t=Array.prototype.slice.call(arguments,1);this._handlers[e].slice().forEach(function(e){e.apply(this,t)})},_validateEvent:function(e){if(!(e in this._handlers))throw new Error("Unknown event: "+e)},_delegateEvent:function(e,t){t.on(e,function(t){this._emit(e,t)}.bind(this))},_addEvent:function(e){this._handlers[e]=[]}};o.on=o.addEventListener,n.eventHandling=function(e){var t=Array.prototype.slice.call(arguments,1);for(var r in o)e[r]=o[r];e._handlers={},t.forEach(function(t){e._addEvent(t)})}},function(e,t,r){(function(e){function t(e,r){var n,o,i;if("object"==typeof e&&!Array.isArray(e)&&null!==e)for(n in e)"object"==typeof e[n]&&null!==e[n]&&("[object ArrayBuffer]"===e[n].toString()?(r[n]=new ArrayBuffer(e[n].byteLength),o=new Int8Array(e[n]),i=new Int8Array(r[n]),i.set(o)):t(e[n],r[n]))}var n=r(2);n.util={getEventEmitter:function(){var e={},t=Array.prototype.slice.call(arguments);return t.unshift(e),n.eventHandling.apply(n,t),e.emit=e._emit,e},extend:function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){for(var r in t)e[r]=t[r]}),e},asyncEach:function(e,t){return this.asyncMap(e,t).then(function(){return e})},asyncMap:function(e,t){function r(){i++,i===o&&n.resolve(s,a)}var n=Promise.defer(),o=e.length,i=0,s=[],a=[];return e.forEach(function(e,n){var o;try{o=t(e)}catch(i){r(),a[n]=i}"object"==typeof o&&"function"==typeof o.then?o.then(function(e){s[n]=e,r()},function(e){a[n]=e,r()}):(r(),s[n]=o)}),n.promise},containingFolder:function(e){if(""===e)return"/";if(!e)throw"Path not given!";return e.replace(/\/+/g,"/").replace(/[^\/]+\/?$/,"")},isFolder:function(e){return"/"===e.substr(-1)},isDocument:function(e){return!n.util.isFolder(e)},baseName:function(e){var t=e.split("/");return this.isFolder(e)?t[t.length-2]+"/":t[t.length-1]},cleanPath:function(e){return e.replace(/\/+/g,"/").split("/").map(encodeURIComponent).join("/").replace(/'/g,"%27")},bindAll:function(e){for(var t in this)"function"==typeof e[t]&&(e[t]=e[t].bind(e))},equal:function(e,t,r){var o;if(r=r||[],typeof e!=typeof t)return!1;if("number"==typeof e||"boolean"==typeof e||"string"==typeof e)return e===t;if("function"==typeof e)return e.toString()===t.toString();if(e instanceof ArrayBuffer&&t instanceof ArrayBuffer&&(e=new Uint8Array(e),t=new Uint8Array(t)),e instanceof Array){if(e.length!==t.length)return!1;for(var i=0,s=e.length;i<s;i++)if(!n.util.equal(e[i],t[i],r))return!1}else{for(o in e)if(e.hasOwnProperty(o)&&!(o in t))return!1;for(o in t)if(t.hasOwnProperty(o)){if(!(o in e))return!1;var a;if("object"==typeof t[o]){if(r.indexOf(t[o])>=0)continue;a=r.slice(),a.push(t[o])}if(!n.util.equal(e[o],t[o],a))return!1}}return!0},equalObj:function(e,t){return console.warn("DEPRECATION WARNING: RemoteStorage.util.equalObj has been replaced by RemoteStorage.util.equal."),n.util.equal(e,t)},deepClone:function(e){var r;return void 0===e?void 0:(r=JSON.parse(JSON.stringify(e)),t(e,r),r)},pathsFromRoot:function(e){for(var t=[e],r=e.replace(/\/$/,"").split("/");r.length>1;)r.pop(),t.push(r.join("/")+"/");return t},md5sum:function(e){function t(e,t){var r=e[0],a=e[1],c=e[2],u=e[3];r=n(r,a,c,u,t[0],7,-680876936),u=n(u,r,a,c,t[1],12,-389564586),c=n(c,u,r,a,t[2],17,606105819),a=n(a,c,u,r,t[3],22,-1044525330),r=n(r,a,c,u,t[4],7,-176418897),u=n(u,r,a,c,t[5],12,1200080426),c=n(c,u,r,a,t[6],17,-1473231341),a=n(a,c,u,r,t[7],22,-45705983),r=n(r,a,c,u,t[8],7,1770035416),u=n(u,r,a,c,t[9],12,-1958414417),c=n(c,u,r,a,t[10],17,-42063),a=n(a,c,u,r,t[11],22,-1990404162),r=n(r,a,c,u,t[12],7,1804603682),u=n(u,r,a,c,t[13],12,-40341101),c=n(c,u,r,a,t[14],17,-1502002290),a=n(a,c,u,r,t[15],22,1236535329),r=o(r,a,c,u,t[1],5,-165796510),u=o(u,r,a,c,t[6],9,-1069501632),c=o(c,u,r,a,t[11],14,643717713),a=o(a,c,u,r,t[0],20,-373897302),r=o(r,a,c,u,t[5],5,-701558691),u=o(u,r,a,c,t[10],9,38016083),c=o(c,u,r,a,t[15],14,-660478335),a=o(a,c,u,r,t[4],20,-405537848),r=o(r,a,c,u,t[9],5,568446438),u=o(u,r,a,c,t[14],9,-1019803690),c=o(c,u,r,a,t[3],14,-187363961),a=o(a,c,u,r,t[8],20,1163531501),r=o(r,a,c,u,t[13],5,-1444681467),u=o(u,r,a,c,t[2],9,-51403784),c=o(c,u,r,a,t[7],14,1735328473),a=o(a,c,u,r,t[12],20,-1926607734),r=i(r,a,c,u,t[5],4,-378558),u=i(u,r,a,c,t[8],11,-2022574463),c=i(c,u,r,a,t[11],16,1839030562),a=i(a,c,u,r,t[14],23,-35309556),r=i(r,a,c,u,t[1],4,-1530992060),u=i(u,r,a,c,t[4],11,1272893353),c=i(c,u,r,a,t[7],16,-155497632),a=i(a,c,u,r,t[10],23,-1094730640),r=i(r,a,c,u,t[13],4,681279174),u=i(u,r,a,c,t[0],11,-358537222),c=i(c,u,r,a,t[3],16,-722521979),a=i(a,c,u,r,t[6],23,76029189),r=i(r,a,c,u,t[9],4,-640364487),u=i(u,r,a,c,t[12],11,-421815835),c=i(c,u,r,a,t[15],16,530742520),a=i(a,c,u,r,t[2],23,-995338651),r=s(r,a,c,u,t[0],6,-198630844),u=s(u,r,a,c,t[7],10,1126891415),c=s(c,u,r,a,t[14],15,-1416354905),a=s(a,c,u,r,t[5],21,-57434055),r=s(r,a,c,u,t[12],6,1700485571),u=s(u,r,a,c,t[3],10,-1894986606),c=s(c,u,r,a,t[10],15,-1051523),a=s(a,c,u,r,t[1],21,-2054922799),r=s(r,a,c,u,t[8],6,1873313359),u=s(u,r,a,c,t[15],10,-30611744),c=s(c,u,r,a,t[6],15,-1560198380),a=s(a,c,u,r,t[13],21,1309151649),r=s(r,a,c,u,t[4],6,-145523070),u=s(u,r,a,c,t[11],10,-1120210379),c=s(c,u,r,a,t[2],15,718787259),a=s(a,c,u,r,t[9],21,-343485551),e[0]=f(r,e[0]),e[1]=f(a,e[1]),e[2]=f(c,e[2]),e[3]=f(u,e[3])}function r(e,t,r,n,o,i){return t=f(f(t,e),f(n,i)),f(t<<o|t>>>32-o,r)}function n(e,t,n,o,i,s,a){return r(t&n|~t&o,e,t,i,s,a)}function o(e,t,n,o,i,s,a){return r(t&o|n&~o,e,t,i,s,a)}function i(e,t,n,o,i,s,a){return r(t^n^o,e,t,i,s,a)}function s(e,t,n,o,i,s,a){return r(n^(t|~o),e,t,i,s,a)}function a(e){txt="";var r,n=e.length,o=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=e.length;r+=64)t(o,c(e.substring(r-64,r)));e=e.substring(r-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<e.length;r++)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(t(o,i),r=0;r<16;r++)i[r]=0;return i[14]=8*n,t(o,i),o}function c(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}function u(e){for(var t="",r=0;r<4;r++)t+=d[e>>8*r+4&15]+d[e>>8*r&15];return t}function l(e){for(var t=0;t<e.length;t++)e[t]=u(e[t]);return e.join("")}function h(e){return l(a(e))}var d="0123456789abcdef".split(""),f=function(e,t){return e+t&4294967295};return"5d41402abc4b2a76b9719d911017c592"!==h("hello")&&(f=function(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}),h(e)},localStorageAvailable:function(){if(!("localStorage"in e))return!1;try{return e.localStorage.setItem("rs-check",1),e.localStorage.removeItem("rs-check"),!0}catch(t){return!1}}},n.prototype.util||Object.defineProperty(n.prototype,"util",{get:function(){return console.log("DEPRECATION WARNING: remoteStorage.util was moved to RemoteStorage.util"),n.util}})}).call(t,function(){return this}())},function(e,t,r){(function(e,t){function n(e){return"string"!=typeof e?e:"*"===e?"*":'"'+e+'"'}function o(e){return"string"!=typeof e?e:e.replace(/^["']|["']$/g,"")}function i(t,r,n){var o;if(e.BlobBuilder=e.BlobBuilder||e.WebKitBlobBuilder,"undefined"!=typeof e.BlobBuilder){var i=new e.BlobBuilder;i.append(t),o=i.getBlob(r)}else o=new Blob([t],{type:r});var s=new FileReader;"function"==typeof s.addEventListener?s.addEventListener("loadend",function(){n(s.result)}):s.onloadend=function(){n(s.result)},s.readAsArrayBuffer(o)}function s(r,n){var o=Promise.defer();if("undefined"==typeof Blob){var i=new t(new Uint8Array(r));o.resolve(i.toString(n))}else{var s;if(e.BlobBuilder=e.BlobBuilder||e.WebKitBlobBuilder,"undefined"!=typeof e.BlobBuilder){var a=new e.BlobBuilder;a.append(r),s=a.getBlob()}else s=new Blob([r]);var c=new FileReader;"function"==typeof c.addEventListener?c.addEventListener("loadend",function(e){o.resolve(e.target.result)}):c.onloadend=function(e){o.resolve(e.target.result)},c.readAsText(s,n)}return o.promise}function a(e){var t,r="UTF-8";return e&&(t=e.match(/charset=(.+)$/),t&&(r=t[1])),r}function c(e){return"http://remotestorage.io/spec/folder-description"===e["@context"]&&"object"==typeof e.items}function u(e){return[201,204,304].indexOf(e)>=0}function l(e){return[401,403,404,412].indexOf(e)>=0}var h,d,f=r(2),p=f,g="remotestorage:wireclient",m=1,y=2,v=3,b=4,M=5,w={"draft-dejong-remotestorage-00":y,"draft-dejong-remotestorage-01":v,"draft-dejong-remotestorage-02":b,"https://www.w3.org/community/rww/wiki/read-write-web-00#simple":m};if("function"==typeof ArrayBufferView)d=function(e){return e&&e instanceof ArrayBufferView};else{var A=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];d=function(e){for(var t=0;t<8;t++)if(e instanceof A[t])return!0;return!1}}var I,N=p.util.isFolder,T=p.util.cleanPath;f.WireClient=function(e){if(this.connected=!1,f.eventHandling(this,"change","connected","wire-busy","wire-done","not-connected"),I=function(e){e instanceof p.Unauthorized&&this.configure({token:null})}.bind(this),e.on("error",I),h){var t;try{t=JSON.parse(localStorage[g])}catch(r){}t&&setTimeout(function(){this.configure(t)}.bind(this),0)}this._revisionCache={},this.connected&&setTimeout(this._emit.bind(this),0,"connected")},f.WireClient.REQUEST_TIMEOUT=3e4,f.WireClient.prototype={_request:function(e,t,r,n,i,c,h){if(("PUT"===e||"DELETE"===e)&&"/"===t[t.length-1])return Promise.reject("Don't "+e+" on directories!");var d,g=this;return r!==p.Authorize.IMPLIED_FAKE_TOKEN&&(n.Authorization="Bearer "+r),this._emit("wire-busy",{method:e,isFolder:N(t)}),f.WireClient.request(e,t,{body:i,headers:n,responseType:"arraybuffer"}).then(function(r){if(g._emit("wire-done",{method:e,isFolder:N(t),success:!0}),g.online=!0,l(r.status))return p.log("[WireClient] Error response status",r.status),d=c?o(r.getResponseHeader("ETag")):void 0,Promise.resolve({statusCode:r.status,revision:d});if(u(r.status)||200===r.status&&"GET"!==e)return d=o(r.getResponseHeader("ETag")),p.log("[WireClient] Successful request",d),Promise.resolve({statusCode:r.status,revision:d});var n=r.getResponseHeader("Content-Type");d=c?o(r.getResponseHeader("ETag")):200===r.status?h:void 0;var i=a(n);return n&&"binary"!==i?s(r.response,i).then(function(e){return p.log("[WireClient] Successful request",d),Promise.resolve({statusCode:r.status,body:e,contentType:n,revision:d})}):(p.log("[WireClient] Successful request with unknown or binary mime-type",d),Promise.resolve({statusCode:r.status,body:r.response,contentType:n,revision:d}))},function(r){return g._emit("wire-done",{method:e,isFolder:N(t),success:!1}),Promise.reject(r)})},configure:function(e){if("object"!=typeof e)throw new Error("WireClient configure settings parameter should be an object");"undefined"!=typeof e.userAddress&&(this.userAddress=e.userAddress),"undefined"!=typeof e.href&&(this.href=e.href),"undefined"!=typeof e.storageApi&&(this.storageApi=e.storageApi),"undefined"!=typeof e.token&&(this.token=e.token),"undefined"!=typeof e.properties&&(this.properties=e.properties),"undefined"!=typeof this.storageApi&&(this._storageApi=w[this.storageApi]||M,this.supportsRevs=this._storageApi>=y),this.href&&this.token?(this.connected=!0,this.online=!0,this._emit("connected")):this.connected=!1,h&&(localStorage[g]=JSON.stringify({userAddress:this.userAddress,href:this.href,storageApi:this.storageApi,token:this.token,properties:this.properties}))},stopWaitingForToken:function(){this.connected||this._emit("not-connected")},get:function(e,t){var r=this;if(!this.connected)return Promise.reject("not connected (path: "+e+")");t||(t={});var o={};if(this.supportsRevs)t.ifNoneMatch&&(o["If-None-Match"]=n(t.ifNoneMatch));else if(t.ifNoneMatch){this._revisionCache[e]}return this._request("GET",this.href+T(e),this.token,o,void 0,this.supportsRevs,this._revisionCache[e]).then(function(t){if(!N(e))return Promise.resolve(t);var n={};if("undefined"!=typeof t.body)try{t.body=JSON.parse(t.body)}catch(o){return Promise.reject("Folder description at "+r.href+T(e)+" is not JSON")}if(200===t.statusCode&&"object"==typeof t.body){if(0===Object.keys(t.body).length)t.statusCode=404;else if(c(t.body)){for(var i in t.body.items)r._revisionCache[e+i]=t.body.items[i].ETag;n=t.body.items}else Object.keys(t.body).forEach(function(o){r._revisionCache[e+o]=t.body[o],n[o]={ETag:t.body[o]}});return t.body=n,Promise.resolve(t)}return Promise.resolve(t)})},put:function(e,t,r,o){if(!this.connected)return Promise.reject("not connected (path: "+e+")");o||(o={}),!r.match(/charset=/)&&(t instanceof ArrayBuffer||d(t))&&(r+="; charset=binary");var i={"Content-Type":r};return this.supportsRevs&&(o.ifMatch&&(i["If-Match"]=n(o.ifMatch)),o.ifNoneMatch&&(i["If-None-Match"]=n(o.ifNoneMatch))),this._request("PUT",this.href+T(e),this.token,i,t,this.supportsRevs)},"delete":function(e,t){if(!this.connected)throw new Error("not connected (path: "+e+")");t||(t={});var r={};return this.supportsRevs&&t.ifMatch&&(r["If-Match"]=n(t.ifMatch)),this._request("DELETE",this.href+T(e),this.token,r,void 0,this.supportsRevs)}},f.WireClient.cleanPath=T,f.WireClient.isArrayBufferView=d,f.WireClient.readBinaryData=i,f.WireClient.request=function(e,t,r){var n=Promise.defer();p.log("[WireClient]",e,t);var o=!1,i=setTimeout(function(){o=!0,n.reject("timeout")},f.WireClient.REQUEST_TIMEOUT),s=new XMLHttpRequest;if(s.open(e,t,!0),r.responseType&&(s.responseType=r.responseType),r.headers)for(var a in r.headers)s.setRequestHeader(a,r.headers[a]);s.onload=function(){o||(clearTimeout(i),n.resolve(s))},s.onerror=function(e){o||(clearTimeout(i),n.reject(e))};var c=r.body;return"object"==typeof c&&!d(c)&&c instanceof ArrayBuffer&&(c=new Uint8Array(c)),s.send(c),n.promise},Object.defineProperty(p.WireClient.prototype,"storageType",{get:function(){if(this.storageApi){var e=this.storageApi.match(/draft-dejong-(remotestorage-\d\d)/);return e?e[1]:"2012.04"}}}),f.WireClient._rs_init=function(e){h=p.util.localStorageAvailable(),e.remote=new f.WireClient(e),this.online=!0},f.WireClient._rs_supported=function(){return!!e.XMLHttpRequest},f.WireClient._rs_cleanup=function(e){h&&delete localStorage[g],e.removeEventListener("error",I)}}).call(t,function(){return this}(),r(7).Buffer)},function(e,t,r){(function(e,n){/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
	"use strict";function o(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function i(){return e.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return e.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=e.prototype):(null===t&&(t=new e(r)),t.length=r),t}function e(t,r,n){if(!(e.TYPED_ARRAY_SUPPORT||this instanceof e))return new e(t,r,n);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return a(this,t,r,n)}function a(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?f(e,t,r,n):"string"==typeof t?h(e,t,r):p(e,t)}function c(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t,r,n){return c(t),t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}function l(t,r){if(c(r),t=s(t,r<0?0:0|g(r)),!e.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)t[n]=0;return t}function h(t,r,n){if("string"==typeof n&&""!==n||(n="utf8"),!e.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var o=0|y(r,n);t=s(t,o);var i=t.write(r,n);return i!==o&&(t=t.slice(0,i)),t}function d(e,t){var r=t.length<0?0:0|g(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function f(t,r,n,o){if(r.byteLength,n<0||r.byteLength<n)throw new RangeError("'offset' is out of bounds");if(r.byteLength<n+(o||0))throw new RangeError("'length' is out of bounds");return r=void 0===n&&void 0===o?new Uint8Array(r):void 0===o?new Uint8Array(r,n):new Uint8Array(r,n,o),e.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=e.prototype):t=d(t,r),t}function p(t,r){if(e.isBuffer(r)){var n=0|g(r.length);return t=s(t,n),0===t.length?t:(r.copy(t,0,0,n),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Q(r.length)?s(t,0):d(t,r);if("Buffer"===r.type&&$(r.data))return d(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(e){if(e>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|e}function m(t){return+t!=t&&(t=0),e.alloc(+t)}function y(t,r){if(e.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(t).length;default:if(o)return H(t).length;r=(""+r).toLowerCase(),o=!0}}function v(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return D(this,t,r);case"utf8":case"utf-8":return L(this,t,r);case"ascii":return C(this,t,r);case"latin1":case"binary":return x(this,t,r);case"base64":return j(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function M(t,r,n,o,i){if(0===t.length)return-1;if("string"==typeof n?(o=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof r&&(r=e.from(r,o)),e.isBuffer(r))return 0===r.length?-1:w(t,r,n,o,i);if("number"==typeof r)return r=255&r,e.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,n):Uint8Array.prototype.lastIndexOf.call(t,r,n):w(t,[r],n,o,i);throw new TypeError("val must be string, number or Buffer")}function w(e,t,r,n,o){function i(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,c=t.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,r/=2}var u;if(o){var l=-1;for(u=r;u<a;u++)if(i(e,u)===i(t,l===-1?0:u-l)){if(l===-1&&(l=u),u-l+1===c)return l*s}else l!==-1&&(u-=u-l),l=-1}else for(r+c>a&&(r=a-c),u=r;u>=0;u--){for(var h=!0,d=0;d<c;d++)if(i(e,u+d)!==i(t,d)){h=!1;break}if(h)return u}return-1}function A(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n),n>o&&(n=o)):n=o;var i=t.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[r+s]=a}return s}function I(e,t,r,n){return q(H(t,e.length-r),e,r,n)}function N(e,t,r,n){return q(F(t),e,r,n)}function T(e,t,r,n){return N(e,t,r,n)}function S(e,t,r,n){return q(V(t),e,r,n)}function E(e,t,r,n){return q(J(t,e.length-r),e,r,n)}function j(e,t,r){return 0===t&&r===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,r))}function L(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i=e[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=r){var c,u,l,h;switch(a){case 1:i<128&&(s=i);break;case 2:c=e[o+1],128===(192&c)&&(h=(31&i)<<6|63&c,h>127&&(s=h));break;case 3:c=e[o+1],u=e[o+2],128===(192&c)&&128===(192&u)&&(h=(15&i)<<12|(63&c)<<6|63&u,h>2047&&(h<55296||h>57343)&&(s=h));break;case 4:c=e[o+1],u=e[o+2],l=e[o+3],128===(192&c)&&128===(192&u)&&128===(192&l)&&(h=(15&i)<<18|(63&c)<<12|(63&u)<<6|63&l,h>65535&&h<1114112&&(s=h))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=a}return _(n)}function _(e){var t=e.length;if(t<=ee)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=ee));return r}function C(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function x(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function D(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=Z(e[i]);return o}function P(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function z(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function O(t,r,n,o,i,s){if(!e.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<s)throw new RangeError('"value" argument is out of bounds');if(n+o>t.length)throw new RangeError("Index out of range")}function R(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(e.length-r,2);o<i;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function k(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(e.length-r,4);o<i;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function U(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(e,t,r,n,o){return o||U(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(e,t,r,n,23,4),r+4}function Y(e,t,r,n,o){return o||U(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(e,t,r,n,52,8),r+8}function G(e){if(e=W(e).replace(te,""),e.length<2)return"";for(;e.length%4!==0;)e+="=";return e}function W(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Z(e){return e<16?"0"+e.toString(16):e.toString(16)}function H(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function F(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function J(e,t){for(var r,n,o,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function V(e){return K.toByteArray(G(e))}function q(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function Q(e){return e!==e}var K=r(8),X=r(9),$=r(10);t.Buffer=e,t.SlowBuffer=m,t.INSPECT_MAX_BYTES=50,e.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:o(),t.kMaxLength=i(),e.poolSize=8192,e._augment=function(t){return t.__proto__=e.prototype,t},e.from=function(e,t,r){return a(null,e,t,r)},e.TYPED_ARRAY_SUPPORT&&(e.prototype.__proto__=Uint8Array.prototype,e.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&e[Symbol.species]===e&&Object.defineProperty(e,Symbol.species,{value:null,configurable:!0})),e.alloc=function(e,t,r){return u(null,e,t,r)},e.allocUnsafe=function(e){return l(null,e)},e.allocUnsafeSlow=function(e){return l(null,e)},e.isBuffer=function(e){return!(null==e||!e._isBuffer)},e.compare=function(t,r){if(!e.isBuffer(t)||!e.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var n=t.length,o=r.length,i=0,s=Math.min(n,o);i<s;++i)if(t[i]!==r[i]){n=t[i],o=r[i];break}return n<o?-1:o<n?1:0},e.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},e.concat=function(t,r){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return e.alloc(0);var n;if(void 0===r)for(r=0,n=0;n<t.length;++n)r+=t[n].length;var o=e.allocUnsafe(r),i=0;for(n=0;n<t.length;++n){var s=t[n];if(!e.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(o,i),i+=s.length}return o},e.byteLength=y,e.prototype._isBuffer=!0,e.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},e.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},e.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},e.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?L(this,0,e):v.apply(this,arguments)},e.prototype.equals=function(t){if(!e.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===e.compare(this,t)},e.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},e.prototype.compare=function(t,r,n,o,i){if(!e.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),r<0||n>t.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=n)return 0;if(o>=i)return-1;if(r>=n)return 1;if(r>>>=0,n>>>=0,o>>>=0,i>>>=0,this===t)return 0;for(var s=i-o,a=n-r,c=Math.min(s,a),u=this.slice(o,i),l=t.slice(r,n),h=0;h<c;++h)if(u[h]!==l[h]){s=u[h],a=l[h];break}return s<a?-1:a<s?1:0},e.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},e.prototype.indexOf=function(e,t,r){return M(this,e,t,r,!0)},e.prototype.lastIndexOf=function(e,t,r){return M(this,e,t,r,!1)},e.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t=0|t,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return A(this,e,t,r);case"utf8":case"utf-8":return I(this,e,t,r);case"ascii":return N(this,e,t,r);case"latin1":case"binary":return T(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},e.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var ee=4096;e.prototype.slice=function(t,r){var n=this.length;t=~~t,r=void 0===r?n:~~r,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<t&&(r=t);var o;if(e.TYPED_ARRAY_SUPPORT)o=this.subarray(t,r),o.__proto__=e.prototype;else{var i=r-t;o=new e(i,(void 0));for(var s=0;s<i;++s)o[s]=this[s+t]}return o},e.prototype.readUIntLE=function(e,t,r){e=0|e,t=0|t,r||z(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},e.prototype.readUIntBE=function(e,t,r){e=0|e,t=0|t,r||z(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},e.prototype.readUInt8=function(e,t){return t||z(e,1,this.length),this[e]},e.prototype.readUInt16LE=function(e,t){return t||z(e,2,this.length),this[e]|this[e+1]<<8},e.prototype.readUInt16BE=function(e,t){return t||z(e,2,this.length),this[e]<<8|this[e+1]},e.prototype.readUInt32LE=function(e,t){return t||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},e.prototype.readUInt32BE=function(e,t){return t||z(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},e.prototype.readIntLE=function(e,t,r){e=0|e,t=0|t,r||z(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},e.prototype.readIntBE=function(e,t,r){e=0|e,t=0|t,r||z(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},e.prototype.readInt8=function(e,t){return t||z(e,1,this.length),128&this[e]?(255-this[e]+1)*-1:this[e]},e.prototype.readInt16LE=function(e,t){t||z(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},e.prototype.readInt16BE=function(e,t){t||z(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},e.prototype.readInt32LE=function(e,t){return t||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},e.prototype.readInt32BE=function(e,t){return t||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},e.prototype.readFloatLE=function(e,t){return t||z(e,4,this.length),X.read(this,e,!0,23,4)},e.prototype.readFloatBE=function(e,t){return t||z(e,4,this.length),X.read(this,e,!1,23,4)},e.prototype.readDoubleLE=function(e,t){return t||z(e,8,this.length),X.read(this,e,!0,52,8)},e.prototype.readDoubleBE=function(e,t){return t||z(e,8,this.length),X.read(this,e,!1,52,8)},e.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t=0|t,r=0|r,!n){var o=Math.pow(2,8*r)-1;O(this,e,t,r,o,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},e.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t=0|t,r=0|r,!n){var o=Math.pow(2,8*r)-1;O(this,e,t,r,o,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},e.prototype.writeUInt8=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,1,255,0),e.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},e.prototype.writeUInt16LE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,2,65535,0),e.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):R(this,t,r,!0),r+2},e.prototype.writeUInt16BE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,2,65535,0),e.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):R(this,t,r,!1),r+2},e.prototype.writeUInt32LE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,4,4294967295,0),e.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):k(this,t,r,!0),r+4},e.prototype.writeUInt32BE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,4,4294967295,0),e.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):k(this,t,r,!1),r+4},e.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t=0|t,!n){var o=Math.pow(2,8*r-1);O(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},e.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t=0|t,!n){var o=Math.pow(2,8*r-1);O(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},e.prototype.writeInt8=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,1,127,-128),e.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},e.prototype.writeInt16LE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,2,32767,-32768),e.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):R(this,t,r,!0),r+2},e.prototype.writeInt16BE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,2,32767,-32768),e.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):R(this,t,r,!1),r+2},e.prototype.writeInt32LE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,4,2147483647,-2147483648),e.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):k(this,t,r,!0),r+4},e.prototype.writeInt32BE=function(t,r,n){return t=+t,r=0|r,n||O(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),e.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):k(this,t,r,!1),r+4},e.prototype.writeFloatLE=function(e,t,r){return B(this,e,t,!0,r)},e.prototype.writeFloatBE=function(e,t,r){return B(this,e,t,!1,r)},e.prototype.writeDoubleLE=function(e,t,r){return Y(this,e,t,!0,r)},e.prototype.writeDoubleBE=function(e,t,r){return Y(this,e,t,!1,r)},e.prototype.copy=function(t,r,n,o){if(n||(n=0),o||0===o||(o=this.length),r>=t.length&&(r=t.length),r||(r=0),o>0&&o<n&&(o=n),o===n)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-r<o-n&&(o=t.length-r+n);var i,s=o-n;if(this===t&&n<r&&r<o)for(i=s-1;i>=0;--i)t[i+r]=this[i+n];else if(s<1e3||!e.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)t[i+r]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+s),r);return s},e.prototype.fill=function(t,r,n,o){if("string"==typeof t){if("string"==typeof r?(o=r,r=0,n=this.length):"string"==typeof n&&(o=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==o&&"string"!=typeof o)throw new TypeError("encoding must be a string");if("string"==typeof o&&!e.isEncoding(o))throw new TypeError("Unknown encoding: "+o)}else"number"==typeof t&&(t=255&t);if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var s;if("number"==typeof t)for(s=r;s<n;++s)this[s]=t;else{var a=e.isBuffer(t)?t:H(new e(t,o).toString()),c=a.length;for(s=0;s<n-r;++s)this[s+r]=a[s%c]}return this};var te=/[^+\/0-9A-Za-z-_]/g}).call(t,r(7).Buffer,function(){return this}())},function(e,t){"use strict";function r(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function n(e){return 3*e.length/4-r(e)}function o(e){var t,n,o,i,s,a,c=e.length;s=r(e),a=new l(3*c/4-s),o=s>0?c-4:c;var h=0;for(t=0,n=0;t<o;t+=4,n+=3)i=u[e.charCodeAt(t)]<<18|u[e.charCodeAt(t+1)]<<12|u[e.charCodeAt(t+2)]<<6|u[e.charCodeAt(t+3)],a[h++]=i>>16&255,a[h++]=i>>8&255,a[h++]=255&i;return 2===s?(i=u[e.charCodeAt(t)]<<2|u[e.charCodeAt(t+1)]>>4,a[h++]=255&i):1===s&&(i=u[e.charCodeAt(t)]<<10|u[e.charCodeAt(t+1)]<<4|u[e.charCodeAt(t+2)]>>2,a[h++]=i>>8&255,a[h++]=255&i),a}function i(e){return c[e>>18&63]+c[e>>12&63]+c[e>>6&63]+c[63&e]}function s(e,t,r){for(var n,o=[],s=t;s<r;s+=3)n=(e[s]<<16)+(e[s+1]<<8)+e[s+2],o.push(i(n));return o.join("")}function a(e){for(var t,r=e.length,n=r%3,o="",i=[],a=16383,u=0,l=r-n;u<l;u+=a)i.push(s(e,u,u+a>l?l:u+a));return 1===n?(t=e[r-1],o+=c[t>>2],o+=c[t<<4&63],o+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],o+=c[t>>10],o+=c[t>>4&63],o+=c[t<<2&63],o+="="),i.push(o),i.join("")}t.byteLength=n,t.toByteArray=o,t.fromByteArray=a;for(var c=[],u=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,f=h.length;d<f;++d)c[d]=h[d],u[h.charCodeAt(d)]=d;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,o){var i,s,a=8*o-n-1,c=(1<<a)-1,u=c>>1,l=-7,h=r?o-1:0,d=r?-1:1,f=e[t+h];for(h+=d,i=f&(1<<-l)-1,f>>=-l,l+=a;l>0;i=256*i+e[t+h],h+=d,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+e[t+h],h+=d,l-=8);if(0===i)i=1-u;else{if(i===c)return s?NaN:(f?-1:1)*(1/0);s+=Math.pow(2,n),i-=u}return(f?-1:1)*s*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var s,a,c,u=8*i-o-1,l=(1<<u)-1,h=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:i-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),t+=s+h>=1?d/c:d*Math.pow(2,1-h),t*c>=2&&(s++,c/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(t*c-1)*Math.pow(2,o),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;e[r+f]=255&a,f+=p,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;e[r+f]=255&s,f+=p,s/=256,u-=8);e[r+f-p]|=128*g}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){function n(e,t,r){return{action:e,path:t,promise:r}}function o(e){return e.remote&&e.remote.revision&&!e.remote.itemsMap&&!e.remote.body}function i(e){return e.common&&e.common.revision}function s(){function e(e){var r,n;r=t.getCurrentSyncInterval(),h=!e,n=t.getCurrentSyncInterval(),t._emit("sync-interval-change",{oldValue:r,newValue:n})}var t=this;c.Env.on("background",function(){e(!1)}),c.Env.on("foreground",function(){e(!0)})}function a(e){return"number"==typeof e&&e>1e3&&e<36e5}var c=r(2),u=1e4,l=6e4,h=!1,d=c.util.isFolder,f=c.util.isDocument,p=c.util.equal,g=c.util.deepClone,m=c.util.pathsFromRoot;c.Sync=function(e,t,r,n){this.local=e,this.local.onDiff(function(e){this.addTask(e),this.doTasks()}.bind(this)),this.remote=t,this.access=r,this.caching=n,this._tasks={},this._running={},this._timeStarted={},c.eventHandling(this,"done","req-done"),this.caching.onActivate(function(e){this.addTask(e),this.doTasks()}.bind(this))},c.Sync.prototype={now:function(){return(new Date).getTime()},queueGetRequest:function(e){var t=Promise.defer();return this.remote.connected?this.remote.online?(this.addTask(e,function(){this.local.get(e).then(function(e){return t.resolve(e)})}.bind(this)),this.doTasks()):t.reject("cannot fulfill maxAge requirement - remote is not online"):t.reject("cannot fulfill maxAge requirement - remote is not connected"),t.promise},corruptServerItemsMap:function(e,t){if("object"!=typeof e||Array.isArray(e))return!0;for(var r in e){var n=e[r];if("object"!=typeof n)return!0;if("string"!=typeof n.ETag)return!0;if(d(r)){if(r.substring(0,r.length-1).indexOf("/")!==-1)return!0}else{if(r.indexOf("/")!==-1)return!0;if(t){if("string"!=typeof n["Content-Type"])return!0;if("number"!=typeof n["Content-Length"])return!0}}}return!1},corruptItemsMap:function(e){if("object"!=typeof e||Array.isArray(e))return!0;for(var t in e)if("boolean"!=typeof e[t])return!0;return!1},corruptRevision:function(e){return"object"!=typeof e||Array.isArray(e)||e.revision&&"string"!=typeof e.revision||e.body&&"string"!=typeof e.body&&"object"!=typeof e.body||e.contentType&&"string"!=typeof e.contentType||e.contentLength&&"number"!=typeof e.contentLength||e.timestamp&&"number"!=typeof e.timestamp||e.itemsMap&&this.corruptItemsMap(e.itemsMap)},isCorrupt:function(e){return"object"!=typeof e||Array.isArray(e)||"string"!=typeof e.path||this.corruptRevision(e.common)||e.local&&this.corruptRevision(e.local)||e.remote&&this.corruptRevision(e.remote)||e.push&&this.corruptRevision(e.push)},hasTasks:function(){return Object.getOwnPropertyNames(this._tasks).length>0},collectDiffTasks:function(){var e=0;return this.local.forAllNodes(function(t){e>100||(this.isCorrupt(t)?(c.log("[Sync] WARNING: corrupt node in local cache",t),"object"==typeof t&&t.path&&(this.addTask(t.path),e++)):this.needsFetch(t)&&this.access.checkPathPermission(t.path,"r")?(this.addTask(t.path),e++):f(t.path)&&this.needsPush(t)&&this.access.checkPathPermission(t.path,"rw")&&(this.addTask(t.path),e++))}.bind(this)).then(function(){return e},function(e){throw e})},inConflict:function(e){return e.local&&e.remote&&(void 0!==e.remote.body||e.remote.itemsMap)},needsRefresh:function(e){return!!e.common&&(!e.common.timestamp||this.now()-e.common.timestamp>u)},needsFetch:function(e){return!!this.inConflict(e)||(!(!e.common||void 0!==e.common.itemsMap||void 0!==e.common.body)||!(!e.remote||void 0!==e.remote.itemsMap||void 0!==e.remote.body))},needsPush:function(e){return!this.inConflict(e)&&(!(!e.local||e.push)||void 0)},needsRemotePut:function(e){return e.local&&e.local.body},needsRemoteDelete:function(e){return e.local&&e.local.body===!1},getParentPath:function(e){var t=e.match(/^(.*\/)([^\/]+\/?)$/);if(t)return t[1];throw new Error('Not a valid path: "'+e+'"')},deleteChildPathsFromTasks:function(){for(var e in this._tasks)for(var t=m(e),r=1;r<t.length;r++)this._tasks[t[r]]&&(Array.isArray(this._tasks[e])&&this._tasks[e].length&&Array.prototype.push.apply(this._tasks[t[r]],this._tasks[e]),delete this._tasks[e])},collectRefreshTasks:function(){return this.local.forAllNodes(function(e){var t;if(this.needsRefresh(e)){try{t=this.getParentPath(e.path)}catch(r){}t&&this.access.checkPathPermission(t,"r")?this.addTask(t):this.access.checkPathPermission(e.path,"r")&&this.addTask(e.path)}}.bind(this)).then(function(){this.deleteChildPathsFromTasks()}.bind(this),function(e){throw e})},flush:function(e){for(var t in e)"FLUSH"===this.caching.checkPath(t)&&e[t]&&!e[t].local&&(c.log("[Sync] Flushing",t),e[t]=void 0);return e},doTask:function(e){return this.local.getNodes([e]).then(function(t){var r=t[e];return"undefined"==typeof r?n("get",e,this.remote.get(e)):o(r)?n("get",e,this.remote.get(e)):this.needsRemotePut(r)?(r.push=g(r.local),r.push.timestamp=this.now(),this.local.setNodes(this.flush(t)).then(function(){var t;return t=i(r)?{ifMatch:r.common.revision}:{ifNoneMatch:"*"},n("put",e,this.remote.put(e,r.push.body,r.push.contentType,t))}.bind(this))):this.needsRemoteDelete(r)?(r.push={body:!1,timestamp:this.now()},this.local.setNodes(this.flush(t)).then(function(){return i(r)?n("delete",e,this.remote["delete"](e,{ifMatch:r.common.revision})):n("get",e,this.remote.get(e))}.bind(this))):i(r)?n("get",e,this.remote.get(e,{ifNoneMatch:r.common.revision})):n("get",e,this.remote.get(e))}.bind(this))},autoMergeFolder:function(e){if(e.remote.itemsMap&&(e.common=e.remote,delete e.remote,e.common.itemsMap)){for(var t in e.common.itemsMap)e.local.itemsMap[t]||(e.local.itemsMap[t]=!1);p(e.local.itemsMap,e.common.itemsMap)&&delete e.local}return e},autoMergeDocument:function(e){return hasNoRemoteChanges=function(e){return(!e.remote||!e.remote.revision||e.remote.revision===e.common.revision)&&(void 0===e.common.body&&e.remote.body===!1||e.remote.body===e.common.body&&e.remote.contentType===e.common.contentType)},mergeMutualDeletion=function(e){return e.remote&&e.remote.body===!1&&e.local&&e.local.body===!1&&delete e.local,e},hasNoRemoteChanges(e)?(e=mergeMutualDeletion(e),delete e.remote):void 0!==e.remote.body&&(c.log("[Sync] Emitting keep/revert"),this.local._emitChange({origin:"conflict",path:e.path,oldValue:e.local.body,newValue:e.remote.body,lastCommonValue:e.common.body,oldContentType:e.local.contentType,newContentType:e.remote.contentType,lastCommonContentType:e.common.contentType}),e.remote.body?e.common=e.remote:e.common={},delete e.remote,delete e.local),e},autoMerge:function(e){if(!e.remote)return void(e.common.body&&this.local._emitChange({origin:"remote",path:e.path,oldValue:e.common.body,newValue:void 0,oldContentType:e.common.contentType,newContentType:void 0}));if(e.local)return d(e.path)?this.autoMergeFolder(e):this.autoMergeDocument(e);if(d(e.path))void 0!==e.remote.itemsMap&&(e.common=e.remote,delete e.remote);else if(void 0!==e.remote.body){var t={origin:"remote",path:e.path,oldValue:e.common.body===!1?void 0:e.common.body,newValue:e.remote.body===!1?void 0:e.remote.body,oldContentType:e.common.contentType,newContentType:e.remote.contentType};if((t.oldValue||t.newValue)&&this.local._emitChange(t),!e.remote.body)return;e.common=e.remote,delete e.remote}return e},updateCommonTimestamp:function(e,t){return this.local.getNodes([e]).then(function(r){return r[e]&&r[e].common&&r[e].common.revision===t&&(r[e].common.timestamp=this.now()),this.local.setNodes(this.flush(r))}.bind(this))},markChildren:function(e,t,r,n){var o=[],i={},s={};for(var a in t)o.push(e+a),i[e+a]=t[a];for(var c in n)o.push(e+c);return this.local.getNodes(o).then(function(t){var o,a,c=function(e,t){return e.common.revision!==t&&(!e.remote||e.remote.revision!==t)};for(var u in t)if(a=t[u],i[u])a&&a.common?c(a,i[u].ETag)&&(r[u]=g(a),r[u].remote={revision:i[u].ETag,timestamp:this.now()},r[u]=this.autoMerge(r[u])):(o=this.caching.checkPath(u),"ALL"===o&&(r[u]={path:u,common:{timestamp:this.now()},remote:{revision:i[u].ETag,timestamp:this.now()}})),r[u]&&i[u]["Content-Type"]&&(r[u].remote.contentType=i[u]["Content-Type"]),r[u]&&i[u]["Content-Length"]&&(r[u].remote.contentLength=i[u]["Content-Length"]);else if(n[u.substring(e.length)]&&a&&a.common){if(a.common.itemsMap)for(var l in a.common.itemsMap)s[u+l]=!0;if(a.local&&a.local.itemsMap)for(var h in a.local.itemsMap)s[u+h]=!0;if(a.remote||d(u))r[u]=void 0;else if(r[u]=this.autoMerge(a),"undefined"==typeof r[u]){var f=this.getParentPath(u),m=r[f],y=u.substring(e.length);m&&m.local&&(delete m.local.itemsMap[y],p(m.local.itemsMap,m.common.itemsMap)&&delete m.local)}}return this.deleteRemoteTrees(Object.keys(s),r).then(function(e){return this.local.setNodes(this.flush(e))}.bind(this))}.bind(this))},deleteRemoteTrees:function(e,t){return 0===e.length?Promise.resolve(t):this.local.getNodes(e).then(function(e){var r={};collectSubPaths=function(e,t){if(e&&e.itemsMap)for(var n in e.itemsMap)r[t+n]=!0};for(var n in e){var o=e[n];o&&(d(n)?(collectSubPaths(o.common,n),collectSubPaths(o.local,n)):o.common&&void 0!==typeof o.common.body&&(t[n]=g(o),t[n].remote={body:!1,timestamp:this.now()},t[n]=this.autoMerge(t[n])))}return this.deleteRemoteTrees(Object.keys(r),t).then(function(e){return this.local.setNodes(this.flush(e))}.bind(this))}.bind(this))},completeFetch:function(e,t,r,n){var o,i,s=m(e);return d(e)?o=[e]:(i=s[1],o=[e,i]),this.local.getNodes(o).then(function(o){var s,a,c={},u=o[e],l=function(e){if(e&&e.itemsMap)for(var r in e.itemsMap)t[r]||(c[r]=!0)};if("object"==typeof u&&u.path===e&&"object"==typeof u.common||(u={path:e,common:{}},o[e]=u),u.remote={revision:n,timestamp:this.now()},d(e)){l(u.common),l(u.remote),u.remote.itemsMap={};for(s in t)u.remote.itemsMap[s]=!0}else u.remote.body=t,u.remote.contentType=r,a=o[i],a&&a.local&&a.local.itemsMap&&(s=e.substring(i.length),a.local.itemsMap[s]=!0,
	p(a.local.itemsMap,a.common.itemsMap)&&delete a.local);return o[e]=this.autoMerge(u),{toBeSaved:o,missingChildren:c}}.bind(this))},completePush:function(e,t,r,n){return this.local.getNodes([e]).then(function(o){var i=o[e];if(!i.push)throw this.stopped=!0,new Error("completePush called but no push version!");return r?(c.log("[Sync] We have a conflict"),i.remote&&i.remote.revision===n||(i.remote={revision:n||"conflict",timestamp:this.now()},delete i.push),o[e]=this.autoMerge(i)):(i.common={revision:n,timestamp:this.now()},"put"===t?(i.common.body=i.push.body,i.common.contentType=i.push.contentType,p(i.local.body,i.push.body)&&i.local.contentType===i.push.contentType&&delete i.local,delete i.push):"delete"===t&&(i.local.body===!1?o[e]=void 0:delete i.push)),this.local.setNodes(this.flush(o))}.bind(this))},dealWithFailure:function(e,t,r){return this.local.getNodes([e]).then(function(t){if(t[e])return delete t[e].push,this.local.setNodes(this.flush(t))}.bind(this))},interpretStatus:function(e){if("offline"===e||"timeout"===e)return{successful:!1,networkProblems:!0,statusCode:e};var t=Math.floor(e/100);return{successful:2===t||304===e||412===e||404===e,conflict:412===e,unAuth:401===e&&this.remote.token!==c.Authorize.IMPLIED_FAKE_TOKEN||402===e||403===e,notFound:404===e,changed:304!==e,statusCode:e}},handleGetResponse:function(e,t,r,n,o){return t.notFound&&(r=!!d(e)&&{}),t.changed?this.completeFetch(e,r,n,o).then(function(t){return d(e)?this.corruptServerItemsMap(r)?(c.log("[Sync] WARNING: Discarding corrupt folder description from server for "+e),!1):this.markChildren(e,r,t.toBeSaved,t.missingChildren).then(function(){return!0}):this.local.setNodes(this.flush(t.toBeSaved)).then(function(){return!0})}.bind(this)):this.updateCommonTimestamp(e,o).then(function(){return!0})},handleResponse:function(e,t,r){var n=this.interpretStatus(r.statusCode);if(n.successful){if("get"===t)return this.handleGetResponse(e,n,r.body,r.contentType,r.revision);if("put"===t||"delete"===t)return this.completePush(e,t,n.conflict,r.revision).then(function(){return!0});throw new Error("cannot handle response for unknown action",t)}var o;return n.unAuth?o=new c.Unauthorized:n.networkProblems?(o=new c.SyncError("Network request failed."),this.remote.online=!1):o=new Error("HTTP response code "+n.statusCode+" received."),this.dealWithFailure(e,t,n).then(function(){throw b._emit("error",o),o})},numThreads:10,finishTask:function(e){if(void 0===e.action)return void delete this._running[e.path];var t=this;return e.promise.then(function(r){return t.handleResponse(e.path,e.action,r)},function(r){return c.log("[Sync] wireclient rejects its promise!",e.path,e.action,r),t.handleResponse(e.path,e.action,{statusCode:"offline"})}).then(function(r){if(delete t._timeStarted[e.path],delete t._running[e.path],t.remote.online=!0,r&&t._tasks[e.path]){for(var n=0;n<t._tasks[e.path].length;n++)t._tasks[e.path][n]();delete t._tasks[e.path]}t._emit("req-done"),t.collectTasks(!1).then(function(){!t.hasTasks()||t.stopped?(c.log("[Sync] Sync is done! Reschedule?",Object.getOwnPropertyNames(t._tasks).length,t.stopped),t.done||(t.done=!0,t._emit("done"))):setTimeout(function(){t.doTasks()},10)})},function(r){console.error("[Sync] Error",r),delete t._timeStarted[e.path],delete t._running[e.path],t._emit("req-done"),t.done||(t.done=!0,t._emit("done"))})},doTasks:function(){var e,t,r,n=0;if(e=this.remote.connected?this.remote.online?this.numThreads:1:0,t=e-Object.getOwnPropertyNames(this._running).length,t<=0)return!0;for(r in this._tasks)if(!this._running[r]&&(this._timeStarted[r]=this.now(),this._running[r]=this.doTask(r),this._running[r].then(this.finishTask.bind(this)),n++,n>=t))return!0;return n>=t},collectTasks:function(e){return this.hasTasks()||this.stopped?Promise.resolve():this.collectDiffTasks().then(function(t){return t||e===!1?Promise.resolve():this.collectRefreshTasks()}.bind(this),function(e){throw e})},addTask:function(e,t){this._tasks[e]||(this._tasks[e]=[]),"function"==typeof t&&this._tasks[e].push(t)},sync:function(){return this.done=!1,this.doTasks()?Promise.resolve():this.collectTasks().then(function(){try{this.doTasks()}catch(e){console.error("[Sync] doTasks error",e)}}.bind(this),function(e){throw console.error("[Sync] Sync error",e),new Error("Local cache unavailable")})}},c.prototype.getSyncInterval=function(){return u},c.prototype.setSyncInterval=function(e){if(!a(e))throw e+" is not a valid sync interval";var t=u;u=parseInt(e,10),this._emit("sync-interval-change",{oldValue:t,newValue:e})},c.prototype.getBackgroundSyncInterval=function(){return l},c.prototype.setBackgroundSyncInterval=function(e){if(!a(e))throw e+" is not a valid sync interval";var t=l;l=parseInt(e,10),this._emit("sync-interval-change",{oldValue:t,newValue:e})},c.prototype.getCurrentSyncInterval=function(){return h?l:u};var y=function(e){var t="Sync failed: ";t+="object"==typeof e&&"message"in e?e.message:e,this.originalError=e,this.message=t};y.prototype=new Error,y.prototype.constructor=y,c.SyncError=y,c.prototype.syncCycle=function(){this.sync.stopped||(this.sync.on("done",function(){c.log("[Sync] Sync done. Setting timer to",this.getCurrentSyncInterval()),this.sync.stopped||(this._syncTimer&&clearTimeout(this._syncTimer),this._syncTimer=setTimeout(this.sync.sync.bind(this.sync),this.getCurrentSyncInterval()))}.bind(this)),this.sync.sync())},c.prototype.stopSync=function(){this.sync?(c.log("[Sync] Stopping sync"),this.sync.stopped=!0):(c.log("[Sync] Will instantiate sync stopped"),this.syncStopped=!0)},c.prototype.startSync=function(){this.sync.stopped=!1,this.syncStopped=!1,this.sync.sync()};var v,b;c.Sync._rs_init=function(e){b=e,v=function(){c.log("[Sync] syncCycleCb calling syncCycle"),c.Env.isBrowser()&&s.bind(e)(),e.sync||(e.sync=new c.Sync(e.local,e.remote,e.access,e.caching),e.syncStopped&&(c.log("[Sync] Instantiating sync stopped"),e.sync.stopped=!0,delete e.syncStopped)),c.log("[Sync] syncCycleCb calling syncCycle"),e.syncCycle()},syncOnConnect=function(){e.removeEventListener("connected",syncOnConnect),e.startSync()},e.on("ready",v),e.on("connected",syncOnConnect)},c.Sync._rs_cleanup=function(e){e.stopSync(),e.removeEventListener("ready",v),e.removeEventListener("connected",syncOnConnect),delete e.sync}},function(e,t,r){var n=r(2);n.MODULES={},n.defineModule=function(e,t){if(n.MODULES[e]=t,Object.defineProperty(n.prototype,e,{configurable:!0,get:function(){var t=this._loadModule(e);return Object.defineProperty(this,e,{value:t}),t}}),e.indexOf("-")!==-1){var r=e.replace(/\-[a-z]/g,function(e){return e[1].toUpperCase()});Object.defineProperty(n.prototype,r,{get:function(){return this[e]}})}},n.prototype._loadModule=function(e){var t=n.MODULES[e];if(t){var r=t(new n.BaseClient(this,"/"+e+"/"),new n.BaseClient(this,"/public/"+e+"/"));return r.exports}throw"Unknown module: "+e},n.prototype.defineModule=function(e){console.log("remoteStorage.defineModule is deprecated, use RemoteStorage.defineModule instead!"),n.defineModule.apply(n,arguments)}},function(e,t,r){function n(e,t){console.log("WARNING: "+e+" is deprecated. Use "+t+" instead.")}var o=r(2),i=o;o.BaseClient=function(e,t){if("/"!==t[t.length-1])throw"Not a folder: "+t;"/"===t&&(this.makePath=function(e){return("/"===e[0]?"":"/")+e}),this.storage=e,this.base=t;var r=this.base.split("/");r.length>2?this.moduleName=r[1]:this.moduleName="root",o.eventHandling(this,"change"),this.on=this.on.bind(this),e.onChange(this.base,this._fireChange.bind(this))},o.BaseClient.prototype={extend:function(e){for(var t in e)this[t]=e[t];return this},scope:function(e){return new o.BaseClient(this.storage,this.makePath(e))},getListing:function(e,t){if("string"!=typeof e)e="";else if(e.length>0&&"/"!==e[e.length-1])return Promise.reject("Not a folder: "+e);return this.storage.get(this.makePath(e),t).then(function(e){return 404===e.statusCode?{}:e.body})},getAll:function(e,t){if("string"!=typeof e)e="";else if(e.length>0&&"/"!==e[e.length-1])return Promise.reject("Not a folder: "+e);return this.storage.get(this.makePath(e),t).then(function(r){if(404===r.statusCode)return{};if("object"==typeof r.body){var n=Object.keys(r.body);if(0===n.length)return{};var o=n.map(function(n){return this.storage.get(this.makePath(e+n),t).then(function(e){if("string"==typeof e.body)try{e.body=JSON.parse(e.body)}catch(t){}"object"==typeof e.body&&(r.body[n]=e.body)})}.bind(this));return Promise.all(o).then(function(){return r.body})}}.bind(this))},getFile:function(e,t){return"string"!=typeof e?Promise.reject("Argument 'path' of baseClient.getFile must be a string"):this.storage.get(this.makePath(e),t).then(function(e){return{data:e.body,contentType:e.contentType,revision:e.revision}})},storeFile:function(e,t,r){return"string"!=typeof e?Promise.reject("Argument 'mimeType' of baseClient.storeFile must be a string"):"string"!=typeof t?Promise.reject("Argument 'path' of baseClient.storeFile must be a string"):"string"!=typeof r&&"object"!=typeof r?Promise.reject("Argument 'body' of baseClient.storeFile must be a string, ArrayBuffer, or ArrayBufferView"):(this.storage.access.checkPathPermission(this.makePath(t),"rw")||console.warn("WARNING: Editing a document to which only read access ('r') was claimed"),this.storage.put(this.makePath(t),r,e).then(function(e){return 200===e.statusCode||201===e.statusCode?e.revision:Promise.reject("Request (PUT "+this.makePath(t)+") failed with status: "+e.statusCode)}.bind(this)))},getObject:function(e,t){return"string"!=typeof e?Promise.reject("Argument 'path' of baseClient.getObject must be a string"):this.storage.get(this.makePath(e),t).then(function(t){if("object"==typeof t.body)return t.body;if("string"==typeof t.body)try{return JSON.parse(t.body)}catch(r){throw"Not valid JSON: "+this.makePath(e)}else if("undefined"!=typeof t.body&&200===t.statusCode)return Promise.reject("Not an object: "+this.makePath(e))}.bind(this))},storeObject:function(e,t,r){if("string"!=typeof e)return Promise.reject("Argument 'typeAlias' of baseClient.storeObject must be a string");if("string"!=typeof t)return Promise.reject("Argument 'path' of baseClient.storeObject must be a string");if("object"!=typeof r)return Promise.reject("Argument 'object' of baseClient.storeObject must be an object");this._attachType(r,e);try{var n=this.validate(r);if(!n.valid)return Promise.reject(n)}catch(o){return Promise.reject(o)}return this.storage.put(this.makePath(t),JSON.stringify(r),"application/json; charset=UTF-8").then(function(e){return 200===e.statusCode||201===e.statusCode?e.revision:Promise.reject("Request (PUT "+this.makePath(t)+") failed with status: "+e.statusCode)}.bind(this))},remove:function(e){return"string"!=typeof e?Promise.reject("Argument 'path' of baseClient.remove must be a string"):(this.storage.access.checkPathPermission(this.makePath(e),"rw")||console.warn("WARNING: Removing a document to which only read access ('r') was claimed"),this.storage["delete"](this.makePath(e)))},cache:function(e,t){if("string"!=typeof e)throw"Argument 'path' of baseClient.cache must be a string";if(t===!1?(n("caching strategy <false>",'<"FLUSH">'),t="FLUSH"):void 0===t?t="ALL":"string"!=typeof t&&(n("that caching strategy",'<"ALL">'),t="ALL"),"FLUSH"!==t&&"SEEN"!==t&&"ALL"!==t)throw'Argument \'strategy\' of baseclient.cache must be one of ["FLUSH", "SEEN", "ALL"]';return this.storage.caching.set(this.makePath(e),t),this},flush:function(e){return this.storage.local.flush(e)},makePath:function(e){return this.base+(e||"")},_fireChange:function(e){i.config.changeEvents[e.origin]&&(["new","old","lastCommon"].forEach(function(t){if((!e[t+"ContentType"]||/^application\/(.*)json(.*)/.exec(e[t+"ContentType"]))&&"string"==typeof e[t+"Value"])try{e[t+"Value"]=JSON.parse(e[t+"Value"])}catch(r){}}),this._emit("change",e))},_cleanPath:i.util.cleanPath,getItemURL:function(e){if("string"!=typeof e)throw"Argument 'path' of baseClient.getItemURL must be a string";return this.storage.connected?(e=this._cleanPath(this.makePath(e)),this.storage.remote.href+e):void 0},uuid:function(){return Math.uuid()}},o.BaseClient._rs_init=function(){o.prototype.scope=function(e){if("string"!=typeof e)throw"Argument 'path' of baseClient.scope must be a string";if(!this.access.checkPathPermission(e,"r")){var t=e.replace(/(['\\])/g,"\\$1");console.warn("WARNING: please call remoteStorage.access.claim('"+t+"', 'r') (read only) or remoteStorage.access.claim('"+t+"', 'rw') (read/write) first")}return new o.BaseClient(this,e)}}},function(e,t,r){var n=r(2),o=n.util.containingFolder;n.Caching=function(){this.reset()},n.Caching.prototype={pendingActivations:[],set:function(e,t){if("string"!=typeof e)throw new Error("path should be a string");if(!n.util.isFolder(e))throw new Error("path should be a folder");if(this._remoteStorage&&this._remoteStorage.access&&!this._remoteStorage.access.checkPathPermission(e,"r"))throw new Error('No access to path "'+e+'". You have to claim access to it first.');if(!t.match(/^(FLUSH|SEEN|ALL)$/))throw new Error("strategy should be 'FLUSH', 'SEEN', or 'ALL'");this._rootPaths[e]=t,"ALL"===t&&(this.activateHandler?this.activateHandler(e):this.pendingActivations.push(e))},enable:function(e){this.set(e,"ALL")},disable:function(e){this.set(e,"FLUSH")},onActivate:function(e){var t;for(n.log("[Caching] Setting activate handler",e,this.pendingActivations),this.activateHandler=e,t=0;t<this.pendingActivations.length;t++)e(this.pendingActivations[t]);delete this.pendingActivations},checkPath:function(e){return void 0!==this._rootPaths[e]?this._rootPaths[e]:"/"===e?"SEEN":this.checkPath(o(e))},reset:function(){this._rootPaths={},this._remoteStorage=null}},Object.defineProperty(n.prototype,"caching",{configurable:!0,get:function(){var e=new n.Caching;return Object.defineProperty(this,"caching",{value:e}),e}}),n.Caching._rs_init=function(e){this._remoteStorage=e}},function(e,t,r){function n(e){if("object"==typeof e&&"string"==typeof e.path)if(c(e.path)){if(e.local&&e.local.itemsMap)return e.local;if(e.common&&e.common.itemsMap)return e.common}else{if(e.local&&e.local.body&&e.local.contentType)return e.local;if(e.common&&e.common.body&&e.common.contentType)return e.common;if(e.body&&e.contentType)return{body:e.body,contentType:e.contentType}}}function o(e,t){var r;for(r in e){if(e[r]&&e[r].remote)return!0;var o=n(e[r]);if(o&&o.timestamp&&(new Date).getTime()-o.timestamp<=t)return!1;if(!o)return!0}return!0}function i(e){var t={path:e,common:{}};return c(e)&&(t.common.itemsMap={}),t}function s(e,t){return e.common||(e.common={itemsMap:{}}),e.common.itemsMap||(e.common.itemsMap={}),e.local||(e.local=l(e.common)),e.local.itemsMap||(e.local.itemsMap=e.common.itemsMap),e.local.itemsMap[t]=!0,e}var a=r(2),c=a.util.isFolder,u=a.util.isDocument,l=a.util.deepClone,h=(a.util.equal,a.util.pathsFromRoot),d={get:function(e,t,r){var i=this;return"number"==typeof t?i.getNodes(h(e)).then(function(i){var s=n(i[e]);return o(i,t)?r(e):s?{statusCode:200,body:s.body||s.itemsMap,contentType:s.contentType}:{statusCode:404}}):i.getNodes([e]).then(function(t){var r=n(t[e]);if(r){if(c(e))for(var o in r.itemsMap)r.itemsMap.hasOwnProperty(o)&&r.itemsMap[o]===!1&&delete r.itemsMap[o];return{statusCode:200,body:r.body||r.itemsMap,contentType:r.contentType}}return{statusCode:404}})},put:function(e,t,r){function o(e,o){try{for(var c=0,u=e.length;c<u;c++){var l,h=e[c],d=o[h];if(d||(o[h]=d=i(h)),0===c)l=n(d),d.local={body:t,contentType:r,previousBody:l?l.body:void 0,previousContentType:l?l.contentType:void 0};else{var f=e[c-1].substring(h.length);d=s(d,f)}}return o}catch(p){throw a.log("[Cachinglayer] Error during PUT",o,c,p),p}}var c=h(e);return this._updateNodes(c,o)},"delete":function(e){var t=h(e);return this._updateNodes(t,function(e,t){for(var r=0,o=e.length;r<o;r++){var i=e[r],s=t[i];if(!s)throw new Error("Cannot delete non-existing node "+i);if(0===r)previous=n(s),s.local={body:!1,previousBody:previous?previous.body:void 0,previousContentType:previous?previous.contentType:void 0};else{s.local||(s.local=l(s.common));var a=e[r-1].substring(i.length);if(delete s.local.itemsMap[a],Object.getOwnPropertyNames(s.local.itemsMap).length>0)break}}return t})},flush:function(e){var t=this;return t._getAllDescendentPaths(e).then(function(e){return t.getNodes(e)}).then(function(e){for(var r in e){var n=e[r];n&&n.common&&n.local&&t._emitChange({path:n.path,origin:"local",oldValue:n.local.body===!1?void 0:n.local.body,newValue:n.common.body===!1?void 0:n.common.body}),e[r]=void 0}return t.setNodes(e)})},_emitChange:function(e){a.config.changeEvents[e.origin]&&this._emit("change",e)},fireInitial:function(){if(a.config.changeEvents.local){var e=this;e.forAllNodes(function(t){var r;u(t.path)&&(r=n(t),r&&e._emitChange({path:t.path,origin:"local",oldValue:void 0,oldContentType:void 0,newValue:r.body,newContentType:r.contentType}))}).then(function(){e._emit("local-events-done")})}},onDiff:function(e){this.diffHandler=e},migrate:function(e){return"object"!=typeof e||e.common||(e.common={},"string"==typeof e.path?"/"===e.path.substr(-1)&&"object"==typeof e.body&&(e.common.itemsMap=e.body):(e.local||(e.local={}),e.local.body=e.body,e.local.contentType=e.contentType)),e},_updateNodesRunning:!1,_updateNodesQueued:[],_updateNodes:function(e,t){var r=Promise.defer();return this._doUpdateNodes(e,t,r),r.promise},_doUpdateNodes:function(e,t,r){var n=this;return n._updateNodesRunning?void n._updateNodesQueued.push({paths:e,cb:t,promise:r}):(n._updateNodesRunning=!0,void n.getNodes(e).then(function(o){var i,s=l(o),c=[],h=a.util.equal;o=t(e,o);for(var d in o)i=o[d],h(i,s[d])?delete o[d]:u(d)&&(h(i.local.body,i.local.previousBody)&&i.local.contentType===i.local.previousContentType||c.push({path:d,origin:"window",oldValue:i.local.previousBody,newValue:i.local.body===!1?void 0:i.local.body,oldContentType:i.local.previousContentType,newContentType:i.local.contentType}),delete i.local.previousBody,delete i.local.previousContentType);n.setNodes(o).then(function(){n._emitChangeEvents(c),r.resolve({statusCode:200})})}).then(function(){return Promise.resolve()},function(e){r.reject(e)}).then(function(){n._updateNodesRunning=!1;var e=n._updateNodesQueued.shift();e&&n._doUpdateNodes(e.paths,e.cb,e.promise)}))},_emitChangeEvents:function(e){for(var t=0,r=e.length;t<r;t++)this._emitChange(e[t]),this.diffHandler&&this.diffHandler(e[t].path)},_getAllDescendentPaths:function(e){var t=this;return c(e)?t.getNodes([e]).then(function(r){var o=[e],i=n(r[e]),s=Object.keys(i.itemsMap),a=s.map(function(r){return t._getAllDescendentPaths(e+r).then(function(e){for(var t=0,r=e.length;t<r;t++)o.push(e[t])})});return Promise.all(a).then(function(){return o})}):Promise.resolve([e])},_getInternals:function(){return{getLatest:n,makeNode:i,isOutdated:o}}};a.cachingLayer=function(e){for(var t in d)e[t]=d[t]}},function(e,t,r){(function(e){function t(e){this.defaultValue=e,this._storage={},this.set=this.justSet,this["delete"]=this.justDelete}function n(e){e._dropboxOrigSync||(e._dropboxOrigSync=e.sync.sync.bind(e.sync),e.sync.sync=function(){return this.dropbox.fetchDelta.apply(this.dropbox,arguments).then(e._dropboxOrigSync,function(t){e._emit("error",new f.SyncError(t))})}.bind(e))}function o(e){e._dropboxOrigSync&&(e.sync.sync=e._dropboxOrigSync,delete e._dropboxOrigSync)}function i(e){e._origBaseClientGetItemURL||(e._origBaseClientGetItemURL=d.BaseClient.prototype.getItemURL,d.BaseClient.prototype.getItemURL=function(t){var r=e.dropbox._itemRefs[t];return r?r:""})}function s(e){e._origBaseClientGetItemURL&&(d.BaseClient.prototype.getItemURL=e._origBaseClientGetItemURL,delete e._origBaseClientGetItemURL)}function a(e){e._origRemote||(e._origRemote=e.remote,e.remote=e.dropbox)}function c(e){e._origRemote&&(e.remote=e._origRemote,delete e._origRemote)}function u(e){a(e),e.sync?n(e):e.on("connected",function(){e.sync&&n(e)}),i(e)}function l(e){c(e),o(e),s(e)}var h,d=r(2),f=d,p="https://www.dropbox.com/1/oauth2/authorize",g="remotestorage:dropbox",m="/remotestorage",y=function(e){return d.WireClient.cleanPath(m+"/"+e)},v=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")};t.prototype={get:function(e){e=e.toLowerCase();var t=this._storage[e];return"undefined"==typeof t&&(t=this.defaultValue,this._storage[e]=t),t},propagateSet:function(e,t){return e=e.toLowerCase(),this._storage[e]===t?t:(this._propagate(e,t),this._storage[e]=t,t)},propagateDelete:function(e){return e=e.toLowerCase(),this._propagate(e,this._storage[e]),delete this._storage[e]},_activatePropagation:function(){return this.set=this.propagateSet,this["delete"]=this.propagateDelete,!0},justSet:function(e,t){return e=e.toLowerCase(),this._storage[e]=t,t},justDelete:function(e,t){return e=e.toLowerCase(),delete this._storage[e]},_propagate:function(e,t){for(var r=e.split("/").slice(0,-1),n="",o=0,i=r.length;o<i;o++)n+=r[o]+"/",t||(t=this._storage[n]+1),this._storage[n]=t}};var b;d.Dropbox=function(e){this.rs=e,this.connected=!1,this.rs=e;var r=this;if(b=function(e){e instanceof f.Unauthorized&&r.configure({userAddress:null,href:null,storageApi:null,token:null,options:null})},d.eventHandling(this,"change","connected","wire-busy","wire-done","not-connected"),e.on("error",b),this.clientId=e.apiKeys.dropbox.appKey,this._revCache=new t("rev"),this._itemRefs={},this._metadataCache={},h){var n;try{n=JSON.parse(localStorage[g])}catch(o){}n&&this.configure(n);try{this._itemRefs=JSON.parse(localStorage[g+":shares"])}catch(o){}}this.connected&&setTimeout(this._emit.bind(this),0,"connected")},d.Dropbox.prototype={online:!0,connect:function(){this.rs.setBackend("dropbox"),this.token?u(this.rs):d.Authorize(this.rs,p,"",String(d.Authorize.getLocation()),this.clientId)},configure:function(e){"undefined"!=typeof e.userAddress&&(this.userAddress=e.userAddress),"undefined"!=typeof e.token&&(this.token=e.token),this.token?(this.connected=!0,this.userAddress||this.info().then(function(e){this.userAddress=e.display_name,this.rs.widget.view.setUserAddress(this.userAddress),this._emit("connected")}.bind(this))):this.connected=!1,h&&(localStorage[g]=JSON.stringify({userAddress:this.userAddress,token:this.token}))},stopWaitingForToken:function(){this.connected||this._emit("not-connected")},_getFolder:function(e,t){var r="https://api.dropbox.com/1/metadata/auto"+y(e),n=this._revCache,o=this;return this._request("GET",r,{}).then(function(t){var r=t.status;if(304===r)return Promise.resolve({statusCode:r});var i,s,a,c;try{s=JSON.parse(t.responseText)}catch(u){return Promise.reject(u)}return c=o._revCache.get(e),a="application/json; charset=UTF-8",s.contents&&(i=s.contents.reduce(function(t,r){var o=r.path.split("/").slice(-1)[0]+(r.is_dir?"/":"");return r.is_dir?t[o]={ETag:n.get(e+o)}:t[o]={ETag:r.rev},t},{})),Promise.resolve({statusCode:r,body:i,contentType:a,revision:c})})},get:function(e,t){if(!this.connected)return Promise.reject("not connected (path: "+e+")");var r="https://api-content.dropbox.com/1/files/auto"+y(e),n=this,o=this._revCache.get(e);return null===o?Promise.resolve({statusCode:404}):t&&t.ifNoneMatch&&o&&o===t.ifNoneMatch?Promise.resolve({statusCode:304}):"/"===e.substr(-1)?this._getFolder(e,t):this._request("GET",r,{}).then(function(t){var r,o,i,s,a=t.status;if(200!==a)return Promise.resolve({statusCode:a});o=t.responseText;try{r=JSON.parse(t.getResponseHeader("x-dropbox-metadata"))}catch(c){return Promise.reject(c)}if(i=r.mime_type,s=r.rev,n._revCache.set(e,s),n._shareIfNeeded(e),!t.getResponseHeader("Content-Type")||t.getResponseHeader("Content-Type").match(/charset=binary/)){var u=Promise.defer();return d.WireClient.readBinaryData(t.response,i,function(e){u.resolve({statusCode:a,body:e,contentType:i,revision:s})}),u.promise}if(i&&i.search("application/json")>=0,!0)try{o=JSON.parse(o),i="application/json; charset=UTF-8"}catch(c){}return Promise.resolve({statusCode:a,body:o,contentType:i,revision:s})})},put:function(e,t,r,n){var o=this;if(!this.connected)throw new Error("not connected (path: "+e+")");var i=this._revCache.get(e);if(n&&n.ifMatch&&i&&i!==n.ifMatch)return Promise.resolve({statusCode:412,revision:i});if(n&&"*"===n.ifNoneMatch&&i&&"rev"!==i)return Promise.resolve({statusCode:412,revision:i});if(!r.match(/charset=/)&&(t instanceof ArrayBuffer||d.WireClient.isArrayBufferView(t))&&(r+="; charset=binary"),t.length>157286400)return Promise.reject(new Error("Cannot upload file larger than 150MB"));var s,a=n&&(n.ifMatch||"*"===n.ifNoneMatch),c={body:t,contentType:r,path:e};return s=a?this._getMetadata(e).then(function(e){return n&&"*"===n.ifNoneMatch&&e?Promise.resolve({statusCode:412,revision:e.rev}):n&&n.ifMatch&&e&&e.rev!==n.ifMatch?Promise.resolve({statusCode:412,revision:e.rev}):o._uploadSimple(c)}):o._uploadSimple(c),s.then(function(t){return o._shareIfNeeded(e),t})},"delete":function(e,t){var r=this;if(!this.connected)throw new Error("not connected (path: "+e+")");var n=this._revCache.get(e);return t&&t.ifMatch&&n&&t.ifMatch!==n?Promise.resolve({statusCode:412,revision:n}):t&&t.ifMatch?this._getMetadata(e).then(function(n){return t&&t.ifMatch&&n&&n.rev!==t.ifMatch?Promise.resolve({statusCode:412,revision:n.rev}):r._deleteSimple(e)}):r._deleteSimple(e)},_shareIfNeeded:function(e){e.match(/^\/public\/.*[^\/]$/)&&void 0===this._itemRefs[e]&&this.share(e)},share:function(e){var t=this,r="https://api.dropbox.com/1/media/auto"+y(e);return this._request("POST",r,{}).then(function(n){if(200!==n.status)return Promise.reject(new Error('Invalid Dropbox API response status when sharing "'+e+'":'+n.status));try{n=JSON.parse(n.responseText)}catch(o){return Promise.reject(new Error('Invalid Dropbox API response when sharing "'+e+'": '+n.responseText))}return t._itemRefs[e]=n.url,h&&(localStorage[g+":shares"]=JSON.stringify(t._itemRefs)),Promise.resolve(r)},function(t){return err.message='Sharing dropbox file or folder ("'+e+'") failed.'+err.message,Promise.reject(t)})},info:function(){var e="https://api.dropbox.com/1/account/info";return this._request("GET",e,{}).then(function(e){try{var t=JSON.parse(e.responseText);return Promise.resolve(t)}catch(r){return Promise.reject(r)}})},_request:function(t,r,n){var o=this;return n.headers||(n.headers={}),n.headers.Authorization="Bearer "+this.token,d.WireClient.request.call(this,t,r,n).then(function(i){return i&&503===i.status?e.setTimeout(o._request(t,r,n),3210):Promise.resolve(i)})},fetchDelta:function(){var e=Array.prototype.slice.call(arguments),r=this,n={path_prefix:m};return r._deltaCursor&&(n.cursor=r._deltaCursor),r._request("POST","https://api.dropbox.com/1/delta",{body:v(n),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){if(200!==n.status)return 400===n.status?(r.rs._emit("error",new f.Unauthorized),Promise.resolve(e)):Promise.reject("dropbox.fetchDelta returned "+n.status+n.responseText);var o;try{o=JSON.parse(n.responseText)}catch(i){return d.log("fetchDeltas can not parse response",i),Promise.reject("can not parse response of fetchDelta : "+i.message)}return o.entries?(o.reset&&(r._revCache=new t("rev")),o.cursor&&(r._deltaCursor=o.cursor),o.entries.forEach(function(e){var t,n=e[0].substr(m.length);if(e[1]){if(e[1].is_dir)return;t=e[1].rev}else t=null;r._revCache.set(n,t)}),Promise.resolve(e)):Promise.reject("dropbox.fetchDeltas failed, no entries found")},function(e){this.rs.log("fetchDeltas",e),this.rs._emit("error",new f.SyncError("fetchDeltas failed."+e)),promise.reject(e)}).then(function(){if(r._revCache){var e=Array.prototype.slice.call(arguments);return r._revCache._activatePropagation(),Promise.resolve(e)}})},_getMetadata:function(e,t){var r=this,n=this._metadataCache[e],o="https://api.dropbox.com/1/metadata/auto"+y(e);return o+="?list="+(t&&t.list?"true":"false"),n&&n.hash&&(o+="&hash="+encodeURIComponent(n.hash)),this._request("GET",o,{}).then(function(t){if(304===t.status)return Promise.resolve(n);if(200===t.status){var o=JSON.parse(t.responseText);return r._metadataCache[e]=o,Promise.resolve(o)}return Promise.resolve()})},_uploadSimple:function(e){var t=this,r="https://api-content.dropbox.com/1/files_put/auto"+y(e.path)+"?";return e&&e.ifMatch&&(r+="parent_rev="+encodeURIComponent(e.ifMatch)),t._request("PUT",r,{body:e.body,headers:{"Content-Type":e.contentType}}).then(function(r){if(200!==r.status)return Promise.resolve({statusCode:r.status});var n;try{n=JSON.parse(r.responseText)}catch(o){return Promise.reject(o)}if(n.path!==y(e.path)){var i="https://api.dropbox.com/1/fileops/delete?root=auto&path="+encodeURIComponent(n.path);return t._request("POST",i,{}),t._getMetadata(e.path).then(function(e){return Promise.resolve({statusCode:412,revision:e.rev})})}return t._revCache.propagateSet(e.path,n.rev),Promise.resolve({statusCode:r.status})})},_deleteSimple:function(e){var t=this,r="https://api.dropbox.com/1/fileops/delete?root=auto&path="+encodeURIComponent(y(e));return t._request("POST",r,{}).then(function(r){return 406===r.status?Promise.reject(new Error("Cannot delete '"+e+"': too many files involved")):(200!==r.status&&404!==r.status||(t._revCache["delete"](e),delete t._itemRefs[e]),Promise.resolve({statusCode:r.status}))})}},d.Dropbox._rs_init=function(e){h=f.util.localStorageAvailable(),e.apiKeys.dropbox&&(e.dropbox=new d.Dropbox(e)),"dropbox"===e.backend&&u(e)},d.Dropbox._rs_supported=function(){return!0},d.Dropbox._rs_cleanup=function(e){l(e),h&&delete localStorage[g],e.removeEventListener("error",b),e.setBackend(void 0)}}).call(t,function(){return this}())},function(e,t,r){(function(e){var t,n=r(2),o=n,i=2,s="remotestorage";n.IndexedDB=function(e){return this.db=e||t,this.db?(n.cachingLayer(this),n.eventHandling(this,"change","local-events-done"),this.getsRunning=0,this.putsRunning=0,this.changesQueued={},void(this.changesRunning={})):void o.log("[IndexedDB] Failed to open DB")},n.IndexedDB.prototype={getNodes:function(e){for(var t=[],r={},n=0,i=e.length;n<i;n++)void 0!==this.changesQueued[e[n]]?r[e[n]]=o.util.deepClone(this.changesQueued[e[n]]||void 0):void 0!==this.changesRunning[e[n]]?r[e[n]]=o.util.deepClone(this.changesRunning[e[n]]||void 0):t.push(e[n]);return t.length>0?this.getNodesFromDb(t).then(function(e){for(var t in r)e[t]=r[t];return e}):Promise.resolve(r)},setNodes:function(e){for(var t in e)this.changesQueued[t]=e[t]||!1;return this.maybeFlush(),Promise.resolve()},maybeFlush:function(){0===this.putsRunning?this.flushChangesQueued():this.commitSlownessWarning||(this.commitSlownessWarning=setInterval(function(){console.log("WARNING: waited more than 10 seconds for previous commit to finish")},1e4))},flushChangesQueued:function(){this.commitSlownessWarning&&(clearInterval(this.commitSlownessWarning),this.commitSlownessWarning=null),Object.keys(this.changesQueued).length>0&&(this.changesRunning=this.changesQueued,this.changesQueued={},this.setNodesInDb(this.changesRunning).then(this.flushChangesQueued.bind(this)))},getNodesFromDb:function(e){var t=Promise.defer(),r=this.db.transaction(["nodes"],"readonly"),n=r.objectStore("nodes"),o={};(new Date).getTime();return this.getsRunning++,e.map(function(e,t){n.get(e).onsuccess=function(t){o[e]=t.target.result}}),r.oncomplete=function(){t.resolve(o),this.getsRunning--}.bind(this),r.onerror=r.onabort=function(){t.reject("get transaction error/abort"),this.getsRunning--}.bind(this),t.promise},setNodesInDb:function(e){var t=Promise.defer(),r=this.db.transaction(["nodes"],"readwrite"),n=r.objectStore("nodes"),i=(new Date).getTime();this.putsRunning++,o.log("[IndexedDB] Starting put",e,this.putsRunning);for(var s in e){var a=e[s];if("object"==typeof a)try{n.put(a)}catch(c){throw o.log("[IndexedDB] Error while putting",a,c),c}else try{n["delete"](s)}catch(c){throw o.log("[IndexedDB] Error while removing",n,a,c),c}}return r.oncomplete=function(){this.putsRunning--,o.log("[IndexedDB] Finished put",e,this.putsRunning,(new Date).getTime()-i+"ms"),t.resolve()}.bind(this),r.onerror=function(){this.putsRunning--,t.reject("transaction error")}.bind(this),r.onabort=function(){t.reject("transaction abort"),
	this.putsRunning--}.bind(this),t.promise},reset:function(e){var t=this.db.name,r=this;this.db.close(),n.IndexedDB.clean(this.db.name,function(){n.IndexedDB.open(t,function(t,n){t?o.log("[IndexedDB] Error while resetting local storage",t):r.db=n,"function"==typeof e&&e(r)})})},forAllNodes:function(e){var t=Promise.defer(),r=this.db.transaction(["nodes"],"readonly"),n=r.objectStore("nodes").openCursor();return n.onsuccess=function(r){var n=r.target.result;n?(e(this.migrate(n.value)),n["continue"]()):t.resolve()}.bind(this),t.promise},closeDB:function(){this.db.close()}},n.IndexedDB.open=function(e,t){var r=setTimeout(function(){t("timeout trying to open db")},1e4);try{var s=indexedDB.open(e,i);s.onerror=function(){o.log("[IndexedDB] Opening DB failed",s),clearTimeout(r),t(s.error)},s.onupgradeneeded=function(e){var t=s.result;o.log("[IndexedDB] Upgrade: from ",e.oldVersion," to ",e.newVersion),1!==e.oldVersion&&(o.log("[IndexedDB] Creating object store: nodes"),t.createObjectStore("nodes",{keyPath:"path"})),o.log("[IndexedDB] Creating object store: changes"),t.createObjectStore("changes",{keyPath:"path"})},s.onsuccess=function(){clearTimeout(r);var i=s.result;return i.objectStoreNames.contains("nodes")&&i.objectStoreNames.contains("changes")?void t(null,s.result):(o.log("[IndexedDB] Missing object store. Resetting the database."),void n.IndexedDB.clean(e,function(){n.IndexedDB.open(e,t)}))}}catch(a){o.log("[IndexedDB] Failed to open database: "+a),o.log("[IndexedDB] Resetting database and trying again."),clearTimeout(r),n.IndexedDB.clean(e,function(){n.IndexedDB.open(e,t)})}},n.IndexedDB.clean=function(e,t){var r=indexedDB.deleteDatabase(e);r.onsuccess=function(){o.log("[IndexedDB] Done removing DB"),t()},r.onerror=r.onabort=function(t){console.error('Failed to remove database "'+e+'"',t)}},n.IndexedDB._rs_init=function(e){var r=Promise.defer();return n.IndexedDB.open(s,function(n,o){n?r.reject(n):(t=o,o.onerror=function(){e._emit("error",n)},r.resolve())}),r.promise},n.IndexedDB._rs_supported=function(){var t=Promise.defer();e.indexedDB=e.indexedDB||e.webkitIndexedDB||e.mozIndexedDB||e.oIndexedDB||e.msIndexedDB;var r=!1;if("undefined"!=typeof e.navigator&&e.navigator.userAgent.match(/Android (2|3|4\.[0-3])/)&&(navigator.userAgent.match(/Chrome|Firefox/)||(r=!0)),"indexedDB"in e&&!r)try{var n=indexedDB.open("rs-check");n.onerror=function(e){t.reject()},n.onsuccess=function(e){n.result.close(),indexedDB.deleteDatabase("rs-check"),t.resolve()}}catch(o){t.reject()}else t.reject();return t.promise},n.IndexedDB._rs_cleanup=function(e){var t=Promise.defer();return e.local&&e.local.closeDB(),n.IndexedDB.clean(s,function(){t.resolve()}),t.promise}}).call(t,function(){return this}())},function(e,t,r){var n=r(2);n.InMemoryStorage=function(){n.cachingLayer(this),n.log("[InMemoryStorage] Registering events"),n.eventHandling(this,"change","local-events-done"),this._storage={}},n.InMemoryStorage.prototype={getNodes:function(e){for(var t={},r=0,n=e.length;r<n;r++)t[e[r]]=this._storage[e[r]];return Promise.resolve(t)},setNodes:function(e){for(var t in e)void 0===e[t]?delete this._storage[t]:this._storage[t]=e[t];return Promise.resolve()},forAllNodes:function(e){for(var t in this._storage)e(this.migrate(this._storage[t]));return Promise.resolve()}},n.InMemoryStorage._rs_init=function(){},n.InMemoryStorage._rs_supported=function(){return!0},n.InMemoryStorage._rs_cleanup=function(){}},function(e,t,r){function n(e){return e.substr(0,s.length)===s||e.substr(0,a.length)===a}function o(e){return e.substr(0,s.length)===s}var i=r(2),s="remotestorage:cache:nodes:",a="remotestorage:cache:changes:";i.LocalStorage=function(){i.cachingLayer(this),i.log("[LocalStorage] Registering events"),i.eventHandling(this,"change","local-events-done")},i.LocalStorage.prototype={getNodes:function(e){for(var t={},r=0,n=e.length;r<n;r++)try{t[e[r]]=JSON.parse(localStorage[s+e[r]])}catch(o){t[e[r]]=void 0}return Promise.resolve(t)},setNodes:function(e){for(var t in e)localStorage[s+t]=JSON.stringify(e[t]);return Promise.resolve()},forAllNodes:function(e){for(var t,r=0,n=localStorage.length;r<n;r++)if(o(localStorage.key(r))){try{t=this.migrate(JSON.parse(localStorage[localStorage.key(r)]))}catch(i){t=void 0}t&&e(t)}return Promise.resolve()}},i.LocalStorage._rs_init=function(){},i.LocalStorage._rs_supported=function(){return i.util.localStorageAvailable()},i.LocalStorage._rs_cleanup=function(){for(var e=[],t=0,r=localStorage.length;t<r;t++){var o=localStorage.key(t);n(o)&&e.push(o)}e.forEach(function(e){i.log("[LocalStorage] Removing",e),delete localStorage[e]})}},function(e,t,r){var n=r(2),o=r(21);n.BaseClient.Types={uris:{},schemas:{},aliases:{},declare:function(e,t,r,n){var o=e+"/"+t;if(n["extends"]){var i,s=n["extends"].split("/");i=1===s.length?e+"/"+s.shift():s.join("/");var a=this.uris[i];if(!a)throw"Type '"+o+"' tries to extend unknown schema '"+i+"'";n["extends"]=this.schemas[a]}this.uris[o]=r,this.aliases[r]=o,this.schemas[r]=n},resolveAlias:function(e){return this.uris[e]},getSchema:function(e){return this.schemas[e]},inScope:function(e){var t=e.length,r={};for(var n in this.uris)if(n.substr(0,t+1)===e+"/"){var o=this.uris[n];r[o]=this.schemas[o]}return r}};var i=function(e){var t=new Error("Schema not found: "+e);return t.name="SchemaNotFound",t};i.prototype=Error.prototype,n.BaseClient.Types.SchemaNotFound=i,n.BaseClient.prototype.extend({declareType:function(e,t,r){r||(r=t,t=this._defaultTypeURI(e)),n.BaseClient.Types.declare(this.moduleName,e,t,r)},validate:function(e){var t=n.BaseClient.Types.getSchema(e["@context"]);if(t)return o.validateResult(e,t);throw new i(e["@context"])},_defaultTypeURI:function(e){return"http://remotestorage.io/spec/modules/"+encodeURIComponent(this.moduleName)+"/"+encodeURIComponent(e)},_attachType:function(e,t){e["@context"]=n.BaseClient.Types.resolveAlias(this.moduleName+"/"+t)||this._defaultTypeURI(t)}}),Object.defineProperty(n.BaseClient.prototype,"schemas",{configurable:!0,get:function(){return n.BaseClient.Types.inScope(this.moduleName)}})},function(e,t,r){var n,o,i;!function(r,s){o=[],n=s,i="function"==typeof n?n.apply(t,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){function e(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,function(e){return"%"+e.substring(3)})}function t(t){var r="";d[t.charAt(0)]&&(r=t.charAt(0),t=t.substring(1));var n="",o="",i=!0,s=!1,a=!1;"+"===r?i=!1:"."===r?(o=".",n="."):"/"===r?(o="/",n="/"):"#"===r?(o="#",i=!1):";"===r?(o=";",n=";",s=!0,a=!0):"?"===r?(o="?",n="&",s=!0):"&"===r&&(o="&",n="&",s=!0);for(var c=[],u=t.split(","),l=[],h={},p=0;p<u.length;p++){var g=u[p],m=null;if(g.indexOf(":")!==-1){var y=g.split(":");g=y[0],m=parseInt(y[1],10)}for(var v={};f[g.charAt(g.length-1)];)v[g.charAt(g.length-1)]=!0,g=g.substring(0,g.length-1);var b={truncate:m,name:g,suffices:v};l.push(b),h[g]=b,c.push(g)}var M=function(t){for(var r="",c=0,u=0;u<l.length;u++){var h=l[u],d=t(h.name);if(null===d||void 0===d||Array.isArray(d)&&0===d.length||"object"==typeof d&&0===Object.keys(d).length)c++;else if(r+=u===c?o:n||",",Array.isArray(d)){s&&(r+=h.name+"=");for(var f=0;f<d.length;f++)f>0&&(r+=h.suffices["*"]?n||",":",",h.suffices["*"]&&s&&(r+=h.name+"=")),r+=i?encodeURIComponent(d[f]).replace(/!/g,"%21"):e(d[f])}else if("object"==typeof d){s&&!h.suffices["*"]&&(r+=h.name+"=");var p=!0;for(var g in d)p||(r+=h.suffices["*"]?n||",":","),p=!1,r+=i?encodeURIComponent(g).replace(/!/g,"%21"):e(g),r+=h.suffices["*"]?"=":",",r+=i?encodeURIComponent(d[g]).replace(/!/g,"%21"):e(d[g])}else s&&(r+=h.name,a&&""===d||(r+="=")),null!=h.truncate&&(d=d.substring(0,h.truncate)),r+=i?encodeURIComponent(d).replace(/!/g,"%21"):e(d)}return r};return M.varNames=c,{prefix:o,substitution:M}}function r(e){if(!(this instanceof r))return new r(e);for(var n=e.split("{"),o=[n.shift()],i=[],s=[],a=[];n.length>0;){var c=n.shift(),u=c.split("}")[0],l=c.substring(u.length+1),h=t(u);s.push(h.substitution),i.push(h.prefix),o.push(l),a=a.concat(h.substitution.varNames)}this.fill=function(e){for(var t=o[0],r=0;r<s.length;r++){var n=s[r];t+=n(e),t+=o[r+1]}return t},this.varNames=a,this.template=e}function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1}else{var o;for(o in e)if(void 0===t[o]&&void 0!==e[o])return!1;for(o in t)if(void 0===e[o]&&void 0!==t[o])return!1;for(o in e)if(!n(e[o],t[o]))return!1}return!0}return!1}function o(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function i(e,t){function r(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return t=o(t||""),e=o(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+r(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null}function s(e){return e.split("#")[0]}function a(e,t){if(e&&"object"==typeof e)if(void 0===t?t=e.id:"string"==typeof e.id&&(t=i(t,e.id),e.id=t),Array.isArray(e))for(var r=0;r<e.length;r++)a(e[r],t);else{"string"==typeof e.$ref&&(e.$ref=i(t,e.$ref));for(var n in e)"enum"!==n&&a(e[n],t)}}function c(e){e=e||"en";var t=w[e];return function(e){var r=t[e.code]||M[e.code];if("string"!=typeof r)return"Unknown error code "+e.code+": "+JSON.stringify(e.messageParams);var n=e.params;return r.replace(/\{([^{}]*)\}/g,function(e,t){var r=n[t];return"string"==typeof r||"number"==typeof r?r:e})}}function u(e,t,r,n,o){if(Error.call(this),void 0===e)throw new Error("No error code supplied: "+n);this.message="",this.params=t,this.code=e,this.dataPath=r||"",this.schemaPath=n||"",this.subErrors=o||null;var i=new Error(this.message);if(this.stack=i.stack||i.stacktrace,!this.stack)try{throw i}catch(i){this.stack=i.stack||i.stacktrace}}function l(e,t){if(t.substring(0,e.length)===e){var r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}function h(e){var t,r,n=new p,o={setErrorReporter:function(e){return"string"==typeof e?this.language(e):(r=e,!0)},addFormat:function(){n.addFormat.apply(n,arguments)},language:function(e){return e?(w[e]||(e=e.split("-")[0]),!!w[e]&&(t=e,e)):t},addLanguage:function(e,t){var r;for(r in y)t[r]&&!t[y[r]]&&(t[y[r]]=t[r]);var n=e.split("-")[0];if(w[n]){w[e]=Object.create(w[n]);for(r in t)"undefined"==typeof w[n][r]&&(w[n][r]=t[r]),w[e][r]=t[r]}else w[e]=t,w[n]=t;return this},freshApi:function(e){var t=h();return e&&t.language(e),t},validate:function(e,o,i,s){var a=c(t),u=r?function(e,t,n){return r(e,t,n)||a(e,t,n)}:a,l=new p(n,(!1),u,i,s);"string"==typeof o&&(o={$ref:o}),l.addSchema("",o);var h=l.validateAll(e,o,null,null,"");return!h&&s&&(h=l.banUnknownProperties(e,o)),this.error=h,this.missing=l.missing,this.valid=null===h,this.valid},validateResult:function(){var e={};return this.validate.apply(e,arguments),e},validateMultiple:function(e,o,i,s){var a=c(t),u=r?function(e,t,n){return r(e,t,n)||a(e,t,n)}:a,l=new p(n,(!0),u,i,s);"string"==typeof o&&(o={$ref:o}),l.addSchema("",o),l.validateAll(e,o,null,null,""),s&&l.banUnknownProperties(e,o);var h={};return h.errors=l.errors,h.missing=l.missing,h.valid=0===h.errors.length,h},addSchema:function(){return n.addSchema.apply(n,arguments)},getSchema:function(){return n.getSchema.apply(n,arguments)},getSchemaMap:function(){return n.getSchemaMap.apply(n,arguments)},getSchemaUris:function(){return n.getSchemaUris.apply(n,arguments)},getMissingUris:function(){return n.getMissingUris.apply(n,arguments)},dropSchemas:function(){n.dropSchemas.apply(n,arguments)},defineKeyword:function(){n.defineKeyword.apply(n,arguments)},defineError:function(e,t,r){if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!==0||t<1e4)throw new Error("Code number must be an integer > 10000");if("undefined"!=typeof y[e])throw new Error("Error already defined: "+e+" as "+y[e]);if("undefined"!=typeof v[t])throw new Error("Error code already used: "+v[t]+" as "+t);y[e]=t,v[t]=e,M[e]=M[t]=r;for(var n in w){var o=w[n];o[e]&&(o[t]=o[t]||o[e])}},reset:function(){n.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:a,resolveUrl:i,getDocumentUri:s,errorCodes:y};return o.language(e||"en"),o}Object.keys||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(o){if("object"!=typeof o&&"function"!=typeof o||null===o)throw new TypeError("Object.keys called on non-object");var i=[];for(var s in o)e.call(o,s)&&i.push(s);if(t)for(var a=0;a<n;a++)e.call(o,r[a])&&i.push(r[a]);return i}}()),Object.create||(Object.create=function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return e.prototype=t,new e}}()),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var t=Object(this),r=t.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var o=n>=0?n:Math.max(r-Math.abs(n),0);o<r;o++)if(o in t&&t[o]===e)return o;return-1}),Object.isFrozen||(Object.isFrozen=function(e){for(var t="tv4_test_frozen_key";e.hasOwnProperty(t);)t+=Math.random();try{return e[t]=!0,delete e[t],!1}catch(r){return!0}});var d={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},f={"*":!0};r.prototype={toString:function(){return this.template},fillFromObject:function(e){return this.fill(function(t){return e[t]})}};var p=function(e,t,r,n,o){if(this.missing=[],this.missingMap={},this.formatValidators=e?Object.create(e.formatValidators):{},this.schemas=e?Object.create(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,n&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),o&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=r||c("en"),"string"==typeof this.errorReporter)throw new Error("debug");if(this.definedKeywords={},e)for(var i in e.definedKeywords)this.definedKeywords[i]=e.definedKeywords[i].slice(0)};p.prototype.defineKeyword=function(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)},p.prototype.createError=function(e,t,r,n,o,i,s){var a=new u(e,t,r,n,o);return a.message=this.errorReporter(a,i,s),a},p.prototype.returnError=function(e){return e},p.prototype.collectError=function(e){return e&&this.errors.push(e),null},p.prototype.prefixErrors=function(e,t,r){for(var n=e;n<this.errors.length;n++)this.errors[n]=this.errors[n].prefixWith(t,r);return this},p.prototype.banUnknownProperties=function(e,t){for(var r in this.unknownPropertyPaths){var n=this.createError(y.UNKNOWN_PROPERTY,{path:r},r,"",null,e,t),o=this.handleError(n);if(o)return o}return null},p.prototype.addFormat=function(e,t){if("object"==typeof e){for(var r in e)this.addFormat(r,e[r]);return this}this.formatValidators[e]=t},p.prototype.resolveRefs=function(e,t){if(void 0!==e.$ref){if(t=t||{},t[e.$ref])return this.createError(y.CIRCULAR_REFERENCE,{urls:Object.keys(t).join(", ")},"","",null,void 0,e);t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e},p.prototype.getSchema=function(e,t){var r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);var n=e,o="";if(e.indexOf("#")!==-1&&(o=e.substring(e.indexOf("#")+1),n=e.substring(0,e.indexOf("#"))),"object"==typeof this.schemas[n]){r=this.schemas[n];var i=decodeURIComponent(o);if(""===i)return this.resolveRefs(r,t);if("/"!==i.charAt(0))return;for(var s=i.split("/").slice(1),a=0;a<s.length;a++){var c=s[a].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[c]){r=void 0;break}r=r[c]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[n]&&(this.missing.push(n),this.missing[n]=n,this.missingMap[n]=n)},p.prototype.searchSchemas=function(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.searchSchemas(e[r],t);else if(e&&"object"==typeof e){"string"==typeof e.id&&l(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(var n in e)if("enum"!==n)if("object"==typeof e[n])this.searchSchemas(e[n],t);else if("$ref"===n){var o=s(e[n]);o&&void 0===this.schemas[o]&&void 0===this.missingMap[o]&&(this.missingMap[o]=o)}}},p.prototype.addSchema=function(e,t){if("string"!=typeof e||"undefined"==typeof t){if("object"!=typeof e||"string"!=typeof e.id)return;t=e,e=t.id}e===s(e)+"#"&&(e=s(e)),this.schemas[e]=t,delete this.missingMap[e],a(t,e),this.searchSchemas(t,e)},p.prototype.getSchemaMap=function(){var e={};for(var t in this.schemas)e[t]=this.schemas[t];return e},p.prototype.getSchemaUris=function(e){var t=[];for(var r in this.schemas)e&&!e.test(r)||t.push(r);return t},p.prototype.getMissingUris=function(e){var t=[];for(var r in this.missingMap)e&&!e.test(r)||t.push(r);return t},p.prototype.dropSchemas=function(){this.schemas={},this.reset()},p.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},p.prototype.validateAll=function(e,t,r,n,o){var i;if(t=this.resolveRefs(t),!t)return null;if(t instanceof u)return this.errors.push(t),t;var s,a=this.errors.length,c=null,l=null;if(this.checkRecursive&&e&&"object"==typeof e){if(i=!this.scanned.length,e[this.validatedSchemasKey]){var h=e[this.validatedSchemasKey].indexOf(t);if(h!==-1)return this.errors=this.errors.concat(e[this.validationErrorsKey][h]),null}if(Object.isFrozen(e)&&(s=this.scannedFrozen.indexOf(e),s!==-1)){var d=this.scannedFrozenSchemas[s].indexOf(t);if(d!==-1)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[s][d]),null}if(this.scanned.push(e),Object.isFrozen(e))s===-1&&(s=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),c=this.scannedFrozenSchemas[s].length,this.scannedFrozenSchemas[s][c]=t,this.scannedFrozenValidationErrors[s][c]=[];else{if(!e[this.validatedSchemasKey])try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(f){e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}l=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][l]=t,e[this.validationErrorsKey][l]=[]}}var p=this.errors.length,g=this.validateBasic(e,t,o)||this.validateNumeric(e,t,o)||this.validateString(e,t,o)||this.validateArray(e,t,o)||this.validateObject(e,t,o)||this.validateCombinations(e,t,o)||this.validateHypermedia(e,t,o)||this.validateFormat(e,t,o)||this.validateDefinedKeywords(e,t,o)||null;if(i){for(;this.scanned.length;){var m=this.scanned.pop();delete m[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(g||p!==this.errors.length)for(;r&&r.length||n&&n.length;){var y=r&&r.length?""+r.pop():null,v=n&&n.length?""+n.pop():null;g&&(g=g.prefixWith(y,v)),this.prefixErrors(p,y,v)}return null!==c?this.scannedFrozenValidationErrors[s][c]=this.errors.slice(a):null!==l&&(e[this.validationErrorsKey][l]=this.errors.slice(a)),this.handleError(g)},p.prototype.validateFormat=function(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;var r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(y.FORMAT_CUSTOM,{message:r},"","/format",null,e,t):r&&"object"==typeof r?this.createError(y.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||"",r.schemaPath||"/format",null,e,t):null},p.prototype.validateDefinedKeywords=function(e,t,r){for(var n in this.definedKeywords)if("undefined"!=typeof t[n])for(var o=this.definedKeywords[n],i=0;i<o.length;i++){var s=o[i],a=s(e,t[n],t,r);if("string"==typeof a||"number"==typeof a)return this.createError(y.KEYWORD_CUSTOM,{key:n,message:a},"","",null,e,t).prefixWith(null,n);if(a&&"object"==typeof a){var c=a.code;if("string"==typeof c){if(!y[c])throw new Error("Undefined error code (use defineError): "+c);c=y[c]}else"number"!=typeof c&&(c=y.KEYWORD_CUSTOM);var u="object"==typeof a.message?a.message:{key:n,message:a.message||"?"},l=a.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(c,u,a.dataPath||null,l,null,e,t)}}return null},p.prototype.validateBasic=function(e,t,r){var n;return(n=this.validateType(e,t,r))?n.prefixWith(null,"type"):(n=this.validateEnum(e,t,r))?n.prefixWith(null,"type"):null},p.prototype.validateType=function(e,t){if(void 0===t.type)return null;var r=typeof e;null===e?r="null":Array.isArray(e)&&(r="array");var n=t.type;Array.isArray(n)||(n=[n]);for(var o=0;o<n.length;o++){var i=n[o];if(i===r||"integer"===i&&"number"===r&&e%1===0)return null}return this.createError(y.INVALID_TYPE,{type:r,expected:n.join("/")},"","",null,e,t)},p.prototype.validateEnum=function(e,t){if(void 0===t["enum"])return null;for(var r=0;r<t["enum"].length;r++){var o=t["enum"][r];if(n(e,o))return null}return this.createError(y.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(e):e},"","",null,e,t)},p.prototype.validateNumeric=function(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null};var g=Math.pow(2,-51),m=1-g;p.prototype.validateMultipleOf=function(e,t){var r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){var n=e/r%1;if(n>=g&&n<m)return this.createError(y.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r},"","",null,e,t)}return null},p.prototype.validateMinMax=function(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(y.NUMBER_MINIMUM,{value:e,minimum:t.minimum},"","/minimum",null,e,t);if(t.exclusiveMinimum&&e===t.minimum)return this.createError(y.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum},"","/exclusiveMinimum",null,e,t)}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(y.NUMBER_MAXIMUM,{value:e,maximum:t.maximum},"","/maximum",null,e,t);if(t.exclusiveMaximum&&e===t.maximum)return this.createError(y.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum},"","/exclusiveMaximum",null,e,t)}return null},p.prototype.validateNaN=function(e,t){return"number"!=typeof e?null:isNaN(e)===!0||e===1/0||e===-(1/0)?this.createError(y.NUMBER_NOT_A_NUMBER,{value:e},"","/type",null,e,t):null},p.prototype.validateString=function(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null},p.prototype.validateStringLength=function(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(y.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength},"","/minLength",null,e,t):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(y.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength},"","/maxLength",null,e,t):null},p.prototype.validateStringPattern=function(e,t){if("string"!=typeof e||"string"!=typeof t.pattern&&!(t.pattern instanceof RegExp))return null;var r;if(t.pattern instanceof RegExp)r=t.pattern;else{var n,o="",i=t.pattern.match(/^\/(.+)\/([img]*)$/);i?(n=i[1],o=i[2]):n=t.pattern,r=new RegExp(n,o)}return r.test(e)?null:this.createError(y.STRING_PATTERN,{pattern:t.pattern},"","/pattern",null,e,t)},p.prototype.validateArray=function(e,t,r){return Array.isArray(e)?this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r)||null:null},p.prototype.validateArrayLength=function(e,t){var r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(y.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems},"","/minItems",null,e,t),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(y.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems},"","/maxItems",null,e,t),this.handleError(r))?r:null},p.prototype.validateArrayUniqueItems=function(e,t){if(t.uniqueItems)for(var r=0;r<e.length;r++)for(var o=r+1;o<e.length;o++)if(n(e[r],e[o])){var i=this.createError(y.ARRAY_UNIQUE,{match1:r,match2:o},"","/uniqueItems",null,e,t);if(this.handleError(i))return i}return null},p.prototype.validateArrayItems=function(e,t,r){if(void 0===t.items)return null;var n,o;if(Array.isArray(t.items)){for(o=0;o<e.length;o++)if(o<t.items.length){if(n=this.validateAll(e[o],t.items[o],[o],["items",o],r+"/"+o))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(y.ARRAY_ADDITIONAL_ITEMS,{},"/"+o,"/additionalItems",null,e,t),this.handleError(n)))return n}else if(n=this.validateAll(e[o],t.additionalItems,[o],["additionalItems"],r+"/"+o))return n}else for(o=0;o<e.length;o++)if(n=this.validateAll(e[o],t.items,[o],["items"],r+"/"+o))return n;return null},p.prototype.validateObject=function(e,t,r){return"object"!=typeof e||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null},p.prototype.validateObjectMinMaxProperties=function(e,t){var r,n=Object.keys(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(y.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties},"","/minProperties",null,e,t),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(y.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties},"","/maxProperties",null,e,t),this.handleError(r))?r:null},p.prototype.validateObjectRequiredProperties=function(e,t){if(void 0!==t.required)for(var r=0;r<t.required.length;r++){var n=t.required[r];if(void 0===e[n]){var o=this.createError(y.OBJECT_REQUIRED,{key:n},"","/required/"+r,null,e,t);if(this.handleError(o))return o}}return null},p.prototype.validateObjectProperties=function(e,t,r){var n;for(var o in e){var i=r+"/"+o.replace(/~/g,"~0").replace(/\//g,"~1"),s=!1;if(void 0!==t.properties&&void 0!==t.properties[o]&&(s=!0,n=this.validateAll(e[o],t.properties[o],[o],["properties",o],i)))return n;if(void 0!==t.patternProperties)for(var a in t.patternProperties){var c=new RegExp(a);if(c.test(o)&&(s=!0,n=this.validateAll(e[o],t.patternProperties[a],[o],["patternProperties",a],i)))return n}if(s)this.trackUnknownProperties&&(this.knownPropertyPaths[i]=!0,delete this.unknownPropertyPaths[i]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[i]=!0,delete this.unknownPropertyPaths[i]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(y.OBJECT_ADDITIONAL_PROPERTIES,{key:o},"","/additionalProperties",null,e,t).prefixWith(o,null),this.handleError(n)))return n}else if(n=this.validateAll(e[o],t.additionalProperties,[o],["additionalProperties"],i))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[i]&&(this.unknownPropertyPaths[i]=!0)}return null},p.prototype.validateObjectDependencies=function(e,t,r){var n;if(void 0!==t.dependencies)for(var o in t.dependencies)if(void 0!==e[o]){var i=t.dependencies[o];if("string"==typeof i){if(void 0===e[i]&&(n=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:o,missing:i},"","",null,e,t).prefixWith(null,o).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(i))for(var s=0;s<i.length;s++){var a=i[s];if(void 0===e[a]&&(n=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:o,missing:a},"","/"+s,null,e,t).prefixWith(null,o).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(n=this.validateAll(e,i,[],["dependencies",o],r))return n}return null},p.prototype.validateCombinations=function(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null},p.prototype.validateAllOf=function(e,t,r){if(void 0===t.allOf)return null;for(var n,o=0;o<t.allOf.length;o++){var i=t.allOf[o];if(n=this.validateAll(e,i,[],["allOf",o],r))return n}return null},p.prototype.validateAnyOf=function(e,t,r){if(void 0===t.anyOf)return null;var n,o,i=[],s=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths);for(var a=!0,c=0;c<t.anyOf.length;c++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var u=t.anyOf[c],l=this.errors.length,h=this.validateAll(e,u,[],["anyOf",c],r);if(null===h&&l===this.errors.length){if(this.errors=this.errors.slice(0,s),this.trackUnknownProperties){for(var d in this.knownPropertyPaths)o[d]=!0,delete n[d];for(var f in this.unknownPropertyPaths)o[f]||(n[f]=!0);a=!1;continue}return null}h&&i.push(h.prefixWith(null,""+c).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),a?(i=i.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(y.ANY_OF_MISSING,{},"","/anyOf",i,e,t)):void 0},p.prototype.validateOneOf=function(e,t,r){if(void 0===t.oneOf)return null;var n,o,i=null,s=[],a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths);for(var c=0;c<t.oneOf.length;c++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var u=t.oneOf[c],l=this.errors.length,h=this.validateAll(e,u,[],["oneOf",c],r);if(null===h&&l===this.errors.length){if(null!==i)return this.errors=this.errors.slice(0,a),this.createError(y.ONE_OF_MULTIPLE,{index1:i,index2:c},"","/oneOf",null,e,t);if(i=c,this.trackUnknownProperties){for(var d in this.knownPropertyPaths)o[d]=!0,delete n[d];for(var f in this.unknownPropertyPaths)o[f]||(n[f]=!0)}}else h&&s.push(h)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),null===i?(s=s.concat(this.errors.slice(a)),this.errors=this.errors.slice(0,a),this.createError(y.ONE_OF_MISSING,{},"","/oneOf",s,e,t)):(this.errors=this.errors.slice(0,a),null)},p.prototype.validateNot=function(e,t,r){if(void 0===t.not)return null;var n,o,i=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,o=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var s=this.validateAll(e,t.not,null,null,r),a=this.errors.slice(i);return this.errors=this.errors.slice(0,i),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=o),null===s&&0===a.length?this.createError(y.NOT_PASSED,{},"","/not",null,e,t):null},p.prototype.validateHypermedia=function(e,t,n){if(!t.links)return null;for(var o,i=0;i<t.links.length;i++){var s=t.links[i];if("describedby"===s.rel){for(var a=new r(s.href),c=!0,u=0;u<a.varNames.length;u++)if(!(a.varNames[u]in e)){c=!1;break}if(c){var l=a.fillFromObject(e),h={$ref:l};if(o=this.validateAll(e,h,[],["links",i],n))return o}}}};var y={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,
	STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},v={};for(var b in y)v[y[b]]=b;var M={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u.prototype.name="ValidationError",u.prototype.prefixWith=function(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors)for(var r=0;r<this.subErrors.length;r++)this.subErrors[r].prefixWith(e,t);return this};var w={},A=h();return A.addLanguage("en-gb",M),A.tv4=A,A})},function(e,t,r){var n=r(2),o="undefined"!=typeof window?"browser":"node",i={},s=!1;n.Env=function(){return i},n.Env.isBrowser=function(){return"browser"===o},n.Env.isNode=function(){return"node"===o},n.Env.goBackground=function(){s=!0,n.Env._emit("background")},n.Env.goForeground=function(){s=!1,n.Env._emit("foreground")},n.Env._rs_init=function(e){function t(){document[i.hiddenProperty]?n.Env.goBackground():n.Env.goForeground()}n.eventHandling(n.Env,"background","foreground"),"browser"===o&&("undefined"!=typeof document.hidden?(i.hiddenProperty="hidden",i.visibilityChangeEvent="visibilitychange"):"undefined"!=typeof document.mozHidden?(i.hiddenProperty="mozHidden",i.visibilityChangeEvent="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(i.hiddenProperty="msHidden",i.visibilityChangeEvent="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i.hiddenProperty="webkitHidden",i.visibilityChangeEvent="webkitvisibilitychange"),document.addEventListener(i.visibilityChangeEvent,t,!1),t())},n.Env._rs_cleanup=function(e){}},function(e,t,r){function n(e,t){return a.log("[Widget] Producing stateSetter for",t),function(){a.log("[Widget] Setting state",t,arguments),s&&(localStorage[c]=t),e.view?(e.rs.remote&&e.view.setUserAddress(e.rs.remote.userAddress),e.view.setState(t,arguments)):e._rememberedState=t}}function o(e){return function(t){var r;t instanceof a.DiscoveryError?(console.error("Discovery failed",t,'"'+t.message+'"'),r=n(e,"initial",[t.message])):t instanceof a.SyncError?r=n(e,"offline",[]):t instanceof a.Unauthorized?r=n(e,"unauthorized"):(a.log("[Widget] Unknown error"),r=n(e,"error",[t])),r.apply()}}function i(e){return"GET"!==e.method||!e.isFolder}var s,a=r(2),c="remotestorage:widget:state",u={initial:!0,connected:!0,offline:!0};a.Widget=function(e){var t=this,r=0;if(this.rs=e,this.rs.remote.on("connected",n(this,"connected")),this.rs.on("disconnected",n(this,"initial")),this.rs.on("connecting",n(this,"authing")),this.rs.on("authing",n(this,"authing")),this.rs.on("error",o(this)),this.rs.remote&&(this.rs.remote.on("wire-busy",function(e){i(e)&&(r++,n(t,"busy")())}),this.rs.remote.on("wire-done",function(e){i(e)&&r--,r<=0&&e.success&&n(t,"connected")()})),s){var a=localStorage[c];a&&u[a]&&(this._rememberedState=a)}},a.Widget.prototype={display:function(e){return"string"==typeof e?e={domID:e}:"undefined"==typeof e&&(e={}),this.view||this.setView(new a.Widget.View(this.rs)),this.view.display(e),this},linkWidgetToSync:function(){"object"==typeof this.rs.sync&&"function"==typeof this.rs.sync.sync?this.view.on("sync",this.rs.sync.sync.bind(this.rs.sync)):(a.log("[Widget] typeof this.rs.sync check fail",this.rs.sync),setTimeout(this.linkWidgetToSync.bind(this),1e3))},setView:function(e){this.view=e,this.view.on("connect",function(e){"string"==typeof e?this.rs.connect(e):e.special&&this.rs[e.special].connect(e)}.bind(this)),this.view.on("secret-entered",function(e){this.view.setUserSecretKey(e),n(this,"ciphered")()}.bind(this)),this.view.on("secret-cancelled",function(){n(this,"notciphered")()}.bind(this)),this.view.on("disconnect",this.rs.disconnect.bind(this.rs)),this.linkWidgetToSync();try{this.view.on("reset",function(){var e=a.Authorize.getLocation();this.rs.on("disconnected",e.reload.bind(e)),this.rs.disconnect()}.bind(this))}catch(t){if(!t.message||!t.message.match(/Unknown event/))throw t}this._rememberedState&&(setTimeout(n(this,this._rememberedState),0),delete this._rememberedState)}},a.prototype.displayWidget=function(e){return this.widget.display(e)},a.Widget._rs_init=function(e){s=a.util.localStorageAvailable(),e.widget||(e.widget=new a.Widget(e))},a.Widget._rs_supported=function(e){return"undefined"!=typeof document}},function(e,t,r){function n(e,t){return e.classList.remove(t)}function o(e,t){return e.classList.add(t)}function i(e){"function"==typeof e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function s(e,t,r,n){var o=e.querySelector("."+t);if("undefined"!=typeof r){var i=o.querySelector("img");(i||o).src=c.Assets[r]}return o.addEventListener("click",n),o}function a(e){e.target.value?e.target.nextElementSibling.removeAttribute("disabled"):e.target.nextElementSibling.setAttribute("disabled","disabled")}var c=r(2),u=c.I18n.translate;c.Widget.View=function(e){if(this.rs=e,"undefined"==typeof document)throw"Widget not supported";c.eventHandling(this,"connect","secret-entered","secret-cancelled","disconnect","sync","display","reset");for(var t in this.events)this.events[t]=this.events[t].bind(this);this.hideBubbleOnBodyClick=function(e){for(var t=e.target;t!==document.body;t=t.parentElement)if("remotestorage-widget"===t.id)return;this.hideBubble()}.bind(this)},c.Widget.View.prototype={connectGdrive:function(){this._emit("connect",{special:"googledrive"})},connectDropbox:function(){this._emit("connect",{special:"dropbox"})},setState:function(e,t){c.log("[View] widget.view.setState(",e,",",t,");");var r=this.states[e];if("undefined"==typeof r)throw new Error("Bad State assigned to view: "+e);r.apply(this,t)},setUserAddress:function(e){this.userAddress=e||"";var t;this.div&&(t=this.div.querySelector("form.remotestorage-initial").userAddress)&&(t.value=this.userAddress)},setUserSecretKey:function(e){this.userSecretKey=e},toggleBubble:function(e){this.bubble.className.search("rs-hidden")<0?this.hideBubble(e):this.showBubble(e)},hideBubble:function(){o(this.bubble,"rs-hidden"),document.body.removeEventListener("click",this.hideBubbleOnBodyClick)},showBubble:function(e){n(this.bubble,"rs-hidden"),"undefined"!=typeof e&&i(e),document.body.addEventListener("click",this.hideBubbleOnBodyClick),this.div.querySelector(".remotestorage-connected").classList.contains("remotestorage-cipher")&&!this.userSecretKey?this.bubble.querySelector("form.remotestorage-cipher-form").userSecretKey.focus():this.bubble.querySelector("form.remotestorage-initial").userAddress.focus()},display:function(e){if("undefined"!=typeof this.div)return this.div;var t=document.createElement("div"),r=document.createElement("style");if(r.innerHTML=c.Assets.widgetCss,t.id="remotestorage-widget",t.innerHTML=c.Assets.widget,t.appendChild(r),e.domID){var n=document.getElementById(e.domID);if(!n)throw'Failed to find target DOM element with id="'+e.domID+'"';n.appendChild(t)}else document.body.appendChild(t);s(t,"rs-sync","syncIcon",this.events.sync),s(t,"rs-disconnect","disconnectIcon",this.events.disconnect),s(t,"remotestorage-reset",void 0,this.events.reset);s(t,"connect","connectIcon",this.events.connect);this.form=t.querySelector("form.remotestorage-initial");var o=this.form.userAddress;if(o.addEventListener("load",a),o.addEventListener("keyup",a),this.userAddress&&(o.value=this.userAddress),e.encryption){this.cipher=!0;var i=t.querySelector("form.remotestorage-cipher-form").userSecretKey;i.type="password";s(t,"rs-cipher","cipherIcon",this.events["secret-entered"]);i.addEventListener("load",a),i.addEventListener("keyup",a),s(t,"rs-nocipher","nocipherIcon",this.events["secret-cancelled"])}this.cube=s(t,"rs-cube","remoteStorageIcon",this.toggleBubble.bind(this)),s(t,"rs-dropbox","dropbox",this.connectDropbox.bind(this)),s(t,"rs-googledrive","googledrive",this.connectGdrive.bind(this));var u={INPUT:!0,BUTTON:!0,IMG:!0},l=function(e){u[e.target.tagName]||this.div.classList.contains("remotestorage-state-unauthorized")||this.showBubble(e)}.bind(this);return this.bubble=s(t,"rs-bubble",void 0,l),this.hideBubble(),this.div=t,this.states.initial.call(this),this.events.display.call(this),this.div},states:{initial:function(e){var t=this.cube,r=e||u("view_info");t.src=c.Assets.remoteStorageIcon,this._renderTranslatedInitialContent(),e?(t.src=c.Assets.remoteStorageIconError,n(this.cube,"remotestorage-loading"),this.showBubble(),setTimeout(function(){t.src=c.Assets.remoteStorageIcon},2e3)):this.hideBubble(),this.div.className="remotestorage-state-initial",this.userSecretKey&&delete this.userSecretKey;var o=1;this._activateBackend("dropbox")&&(o+=1),this._activateBackend("googledrive")&&(o+=1),this.div.querySelector(".rs-bubble-text").style.paddingRight=32*o+8+"px";var i=this.div.querySelector(".connect");this.form.userAddress.value&&i.removeAttribute("disabled");var s=this.div.querySelector(".rs-info-msg");s.innerHTML=r,e?s.classList.add("remotestorage-error-info"):s.classList.remove("remotestorage-error-info")},authing:function(){this.div.removeEventListener("click",this.events.connect),this.div.className="remotestorage-state-authing",this.div.querySelector(".rs-status-text").innerHTML=u("view_connecting",this.userAddress),o(this.cube,"remotestorage-loading")},connected:function(){var e=this.cube;this.div.className="remotestorage-state-connected",this.div.querySelector(".userAddress").innerHTML=this.userAddress,e.src=c.Assets.remoteStorageIcon,n(e,"remotestorage-loading"),this.cipher&&(this.userSecretKey?this.userSecretKeyError?(e.src=c.Assets.remoteStorageIconError,o(this.div.querySelector(".remotestorage-connected"),"remotestorage-cipher"),o(this.div.querySelector(".remotestorage-invalid-key"),"remotestorage-cipher-error"),this.showBubble(),setTimeout(function(){e.src=c.Assets.remoteStorageIcon},5e3)):(n(this.div.querySelector(".remotestorage-invalid-key"),"remotestorage-cipher-error"),e.src=c.Assets.remoteStorageIconCiphered):(o(this.div.querySelector(".remotestorage-connected"),"remotestorage-cipher"),this.showBubble()));var t={googledrive:this.div.querySelector(".rs-googledrive"),dropbox:this.div.querySelector(".rs-dropbox")};t.googledrive.style.display=t.dropbox.style.display="none",t[this.rs.backend]?(t[this.rs.backend].style.display="inline-block",this.div.querySelector(".rs-bubble-text").style.paddingRight="72px"):this.div.querySelector(".rs-bubble-text").style.paddingRight="40px"},ciphered:function(){this.div.querySelector("form.remotestorage-cipher-form").userSecretKey.value="",n(this.div.querySelector(".remotestorage-invalid-key"),"remotestorage-cipher-error"),n(this.div.querySelector(".remotestorage-connected"),"remotestorage-cipher"),this.cube.src=c.Assets.remoteStorageIconCiphered,this.hideBubble()},notciphered:function(){this.cipher=!1,n(this.div.querySelector(".remotestorage-invalid-key"),"remotestorage-cipher-error"),n(this.div.querySelector(".remotestorage-connected"),"remotestorage-cipher"),this.hideBubble()},busy:function(){this.div.className="remotestorage-state-busy",o(this.cube,"remotestorage-loading")},offline:function(){this.div.className="remotestorage-state-offline",this.cube.src=c.Assets.remoteStorageIconOffline,this.div.querySelector(".rs-status-text").innerHTML=u("view_offline")},error:function(e){var t=e;this.div.className="remotestorage-state-error",this.div.querySelector(".rs-bubble-text").innerHTML="<strong>"+u("view_error_occured")+"</strong>",e instanceof Error&&(t=e.message+"\n\n"+e.stack),this.div.querySelector(".rs-error-msg").textContent=t,this.cube.src=c.Assets.remoteStorageIconError,this.showBubble()},unauthorized:function(){this.div.className="remotestorage-state-unauthorized",this.cube.src=c.Assets.remoteStorageIconError,this.showBubble(),this.div.addEventListener("click",this.events.connect)}},events:{connect:function(e){i(e),e.preventDefault(),this._emit("connect",this.div.querySelector("form.remotestorage-initial").userAddress.value)},"secret-entered":function(e){i(e),e.preventDefault(),this._emit("secret-entered",this.div.querySelector("form.remotestorage-cipher-form").userSecretKey.value)},"secret-cancelled":function(e){i(e),e.preventDefault(),this._emit("secret-cancelled")},sync:function(e){i(e),e.preventDefault(),this._emit("sync")},disconnect:function(e){i(e),e.preventDefault(),this._emit("disconnect")},reset:function(e){e.preventDefault();var t=window.confirm(u("view_confirm_reset"));t&&this._emit("reset")},display:function(e){e&&e.preventDefault(),this._emit("display")}},_renderTranslatedInitialContent:function(){this.div.querySelector(".rs-status-text").innerHTML=u("view_connect"),this.div.querySelector(".remotestorage-reset").innerHTML=u("view_get_me_out"),this.div.querySelector(".rs-error-plz-report").innerHTML=u("view_error_plz_report"),this.div.querySelector(".remotestorage-unauthorized").innerHTML=u("view_unauthorized"),this.div.querySelector(".remotestorage-invalid-key").innerHTML=u("view_invalid_key")},_activateBackend:function(e){var t="rs-"+e;return this.rs.apiKeys[e]?(this.div.querySelector("."+t).style.display="inline-block",!0):(this.div.querySelector("."+t).style.display="none",!1)}}},function(e,t,r){var n=r(2);n.Access=function(){this.reset()},n.Access.prototype={claim:function(e,t){if("string"!=typeof e||e.indexOf("/")!==-1||0===e.length)throw new Error("Scope should be a non-empty string without forward slashes");if(!t.match(/^rw?$/))throw new Error("Mode should be either 'r' or 'rw'");this._adjustRootPaths(e),this.scopeModeMap[e]=t},get:function(e){return this.scopeModeMap[e]},remove:function(e){var t,r={};for(t in this.scopeModeMap)r[t]=this.scopeModeMap[t];this.reset(),delete r[e];for(t in r)this.set(t,r[t])},checkPermission:function(e,t){var r=this.get(e);return r&&("r"===t||"rw"===r)},checkPathPermission:function(e,t){return!!this.checkPermission("*",t)||!!this.checkPermission(this._getModuleName(e),t)},reset:function(){this.rootPaths=[],this.scopeModeMap={}},_getModuleName:function(e){if("/"!==e[0])throw new Error("Path should start with a slash");var t=e.replace(/^\/public/,"").match(/^\/([^\/]*)\//);return t?t[1]:"*"},_adjustRootPaths:function(e){"*"in this.scopeModeMap||"*"===e?this.rootPaths=["/"]:e in this.scopeModeMap||(this.rootPaths.push("/"+e+"/"),this.rootPaths.push("/public/"+e+"/"))},_scopeNameForParameter:function(e){if("*"===e.name&&this.storageType){if("2012.04"===this.storageType)return"";if(this.storageType.match(/remotestorage-0[01]/))return"root"}return e.name},setStorageType:function(e){this.storageType=e}},Object.defineProperty(n.Access.prototype,"scopes",{get:function(){return Object.keys(this.scopeModeMap).map(function(e){return{name:e,mode:this.scopeModeMap[e]}}.bind(this))}}),Object.defineProperty(n.Access.prototype,"scopeParameter",{get:function(){return this.scopes.map(function(e){return this._scopeNameForParameter(e)+":"+e.mode}.bind(this)).join(" ")}}),Object.defineProperty(n.prototype,"access",{get:function(){var e=new n.Access;return Object.defineProperty(this,"access",{value:e}),e},configurable:!0}),n.Access._rs_init=function(){}},function(e,t,r){var n=r(2);n.Assets={cipherIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHdpZHRoPSIyNS4xNzciIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxwYXRoIGQ9Im0yNS4xNzcgNS41MzIzYy0wLjA1NjQtMC4xMTI5MS0wLjA1NjQtMC4yMjU4MS0wLjE2OTM2LTAuMzM4NzEtMC4xMTI5LTAuMTEyOS0wLjI4MjI1LTAuMTY5MzYtMC4zOTUxNi0wLjE2OTM2aC0xMS40MDNjLTAuNzMzLTIuODc5LTMuMzg2NC01LjAyNDItNi40OTEzLTUuMDI0Mi0zLjY2OTMgMC02LjcxNzcgMy4wNDg0LTYuNzE3NyA2LjcxNzcgMCAzLjcyNjMgMy4wNDg0IDYuNzE3MyA2LjcxNzcgNi43MTczIDMuMzMwNyAwIDYuMDQwMy0yLjQyNzQgNi42MDQ4LTUuNTg4N2gyLjU0MDN2My42Njk0YzAgMC4yODIyNiAwLjI4MjI2IDAuNTA4MDYgMC41NjQ1MiAwLjUwODA2aDEuNzVjMC4yODIyNiAwIDAuNTY0NTItMC4yMjU4IDAuNTY0NTItMC41MDgwNnYtMy42Njk0aDEuNDY3N3Y1LjY0NTJjMCAwLjI4MjI1IDAuMjI1OCAwLjUwODA2IDAuNTA4MDYgMC41MDgwNmgxLjgwNjRjMC4yODIyNiAwIDAuNTA4MDctMC4yMjU4MSAwLjU2NDUyLTAuNTA4MDZ2LTUuNjQ1MmgxLjUyNDJjMC4xMTI5MSAwIDAuMjgyMjYgMCAwLjM5NTE2LTAuMTEyOSAwLjExMjkxLTAuMTEyOSAwLjE2OTM2LTAuMjgyMjYgMC4xNjkzNi0wLjM5NTE2di0xLjgwNjR6bS0xOC40NTkgNS4wODA3Yy0yLjA4ODcgMC0zLjgzODctMS42OTM2LTMuODM4Ny0zLjgzODcgMC0yLjE0NTIgMS43NS0zLjgzODcgMy44Mzg3LTMuODM4NyAyLjE0NTIgMCAzLjgzODcgMS42OTM2IDMuODM4NyAzLjgzODcgMCAyLjE0NTItMS42OTM2IDMuODM4Ny0zLjgzODcgMy44Mzg3eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",connectIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTAzNi40KSI+CiAgPHBhdGggZD0ibTEgMTA0Ny40di02aDd2LTRsNyA3LTcgN3YtNHoiIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+Cg==",disconnectIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4wIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxwYXRoIHN0eWxlPSJibG9jay1wcm9ncmVzc2lvbjp0Yjt0ZXh0LWluZGVudDowO2NvbG9yOiMwMDAwMDA7dGV4dC10cmFuc2Zvcm06bm9uZSIgZD0ibTguMDAwMSAwYy0wLjQ3MTQgMC0wLjk2MTAzIDAuNTQxOS0wLjk1IDF2NmMtMC4wMDc0NyAwLjUyODMxIDAuNDIxNjMgMSAwLjk1IDFzMC45NTc0Ny0wLjQ3MTY5IDAuOTUtMXYtNmMwLjAxNDYyMi0wLjYwNTEtMC40Nzg2LTEtMC45NS0xem0tMy4zNDM4IDIuNWMtMC4wODcxODYgMC4wMTkyOTQtMC4xNzE2MyAwLjA1MDk1OS0wLjI1IDAuMDkzNzUtMi45OTk1IDEuNTcxNS0zLjkxODQgNC43OTc5LTMuMTI1IDcuNDY4OCAwLjc5MzQgMi42NyAzLjI3OTkgNC45MzcgNi42ODc1IDQuOTM3IDMuMzU5MiAwIDUuODc3Mi0yLjE0OSA2LjcxOTItNC43ODEgMC44NDEtMi42MzIxLTAuMDU4LTUuODIzNC0zLjEyNS03LjU5NC0wLjQzNC0wLjI1MzYtMS4wNTktMC4wODk5LTEuMzEzIDAuMzQzNy0wLjI1MzYgMC40MzM2LTAuMDkgMS4wNTg5IDAuMzQ0IDEuMzEyNSAyLjM5MDggMS4zNzk4IDIuODgyNSAzLjQ5NDQgMi4yODEyIDUuMzc1LTAuNjAxMiAxLjg4MDYtMi4zNDQgMy40Mzc1LTQuOTA2MiAzLjQzNzUtMi41NzU5IDAtNC4yOTc2LTEuNjUwMi00Ljg3NS0zLjU5MzgtMC41Nzc2LTEuOTQzNS0wLjA0Ny00LjA0OCAyLjE4NzMtNS4yMTg3IDAuMzc4Ny0wLjIwNjMgMC41NzkxLTAuNjkyNSAwLjQ1NTgtMS4xMDU3LTAuMTIzMi0wLjQxMzMtMC41NTcyLTAuNzEwMy0wLjk4Ny0wLjY3NTUtMC4wMzEzLTAuMDAxNS0wLjA2MjYtMC4wMDE1LTAuMDkzOCAweiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",dropbox:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgPEBAhEOpfuQAABhZJREFUWMPVl31snVUdxz+/5/2577e3b7QbHaOD0nXshW4ZZkpGQmJYZkJUDAaZzCBGAxGd+pdZQsJIjCaKgFu09GWybIggm8yhMCsY92rcOkPHunbdtKOUbX36svX23uc+xz+eDsrWlztiNJzk5D7JPS+fc8739/2dA5+EsqJtyK18ZlCKbX9Lk6fd1uo5xbTVZmtwa4v35Np5Mry4TLYXCzAnyhsry2SwrmnokdnaTruq6i3e0lXl0tqQlkURCxwdDp9Th5p3+p9iS8afqk/VZq9kaZoDN8apdU3B1KFnmLde7AkezH0n3V0UQOJpz2hIsqEhLU+WOeAagmtCxISYBe1nVf4vfWrByYdSpyf3W9ziLapy6JgbAduAiBn2S1rCQBYODAQP7H01/zxby4JpAW5s8mproxypiRKNGIJrQNT8EMA1wTGEU8MBP/q7umPw0dSbAA3N3n3zI2yLG2oScPgbNYWICY4Be86o/le6g0W576bPXQWwcqvXdJ2t1idMsA1hJoCoCRfGYdOhwsa4TUWFrr7pGmDrzAiQCHfD//Xxwk/33Z/6HoA0tnhLXZ3XMoYqsy4PYs4M4Ohg6pB2ddqO+vR6BWL27AARXbBNiBjwh9Oqs+O8ukcT4eaopjLqGsJSCdSX29SX23x/lctXlzgE1zBAANxWIQuGxlWNACxr8WozJp0lljKsGXbA0qGu1GRBxsTUQRAGLgboIuQVvHI8S+f7eeK2TLsDSQd296rhPaeDm09+PdX/gQYqN3uZ+jh7ro+oRusKDdgmVEY1GqstSiOhdegCmoQAIoImIWTPYIHdXVlyBYhaVwLA70+rPz7fllvLi2W5KcPw9q3eS/VJ7kmYgm1A3BIWV5osq7IIlMLUQJOrAXQBXQtr1BR2d2XpOu8TtULR+gq2nQh+vv8rqUdnNaKGZm/9qnJpmp/U+fxCB5lYsaGFdTYAY9L3jmNj9F9S7OgKVh9/KNVelBVf8untv8TYSS8gbsrHyh8C2LqQtGE0z9CJYfVuUblgRZv3WGOJvJG0cF8/lWPNdo+O93xsHYoVuqkL/xzIs/HPHt2DPg0Zko+v0I8vbfHun9aKE5sH9YaobJsf5V4mRLXv33kSlmAYwspqgw23R7A1EJlahKYOSsHTB0cZHQ9IOBA3NSrjGo4hWAY82xH8rH1b/jF2laoPAOb80jPqYtKTMdRcTQNd+xAgbgmuJbiGELfh3lsc7q41KQSTABBcC1qPjLH/XzniNqScsP1kgMsm9nJ34e2mNcmFAMby1qFPZyz1WlxXrprhuEUgUPDbd8Y59n6edbe61KZ1TF14vSfPLw5dYjhXIOMIM6lGAV+u0+tv+ttI/2+6/LsMQVXpUFCAqJkS9MT5anB2NGDjWxf5Yp3DvjN5th/LUhETolaRTqigxMGIWVKtHVyX2tGTJd2X5agUIfi8CmvUFOKGT++gT8wqLlKUgnwATxwq7P32m35Z+32pPQZA54MpH1iSb/XWZmx2VthTD1AATCBlCZ+dpwNg6EJjlUH3hQIKRaCujhZFaOPtfUH+8HvBnQceSP11yjA8vC616+A5FevL8jt/YiCR0HiQcAUVrnDHHO0jHTUNllXrpC0NRXiefjAxM4rhHLzQpZqf+eFFd/LkM17JGlu9p+xC8IgPhGlaqE1rNJZrxOzQok0dnjviY+nhbSntCH3DAWN+QMIWEhYsqTD4wYHChrPfSP9kqnmM6QAMkYtz4xqmDqeGA+rLNObGZVozkglx1ZfqZAvC2ZGAz9RYlEbAlsLoNd+Kx5RqO5/njKXDsnKdhCXFOaFAZUzjznlhyt5xIjiSLbBz2oVO98fRdalOoGZ5m/dUQ4pvJZ3Zr/CXlS5A74gabzlYePztr6U2faxr+eRy/RYvtjgjHauvkxvi9oTDXaGBuAUJWyh1hb3vqsOvfiG5/L/yMAE483BqdNeuXO3LvcGX3vEUhsZVsaYL9IzACz3BXcVOXvQOfKRsupBZv8R4bnW19rmqGPzqHz4BcMGn5U/Hgod5oiT3P3kvVj7rrfnx/pHBu7d7Azc1eY3/l0drzWbPXNjsGXySy38AbtMqneWU7BkAAAAASUVORK5CYII=",googledrive:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgPEA85ztzJcQAABZVJREFUWMPtl1uoXVcVhr8x5tprn7M1NG1i0pQqSG2jLcXipYJXjPogqFgpaHMSFUkpIjU+leKbDxIQSiHgjZgmrfXgQ6SKj5Ji7YVS05aUUqKQlNLQeDnN5Zzk9Jy99xy/D3OttU/StDlV33TBZM3FXmuMf/5jjv+fG/7XL1vti9tnv3Dtnnf+87JY8YmZNxEMM1sZ7tWpjz764mriVqvKvmfb1ONLy3+dGyWu6EWbvQwoydv5BMSqFuereakmfnls1GP25IDaBGYYjplhljDz5tk7YMtPfurAf6UE9Z6tNwDPAPXwtcxL1x9n4zRgDjjm1gCyC6JpCLoW/OX65of1nzCwG6gNo3aYeXF981mTvK2/WWFiMmoj7X+z5JcE0N87c4e7b3EvyTwZT5/r8ezZHu6GuWGpSegJ8/ZeBu6fHv35s1/7t0rQv29mjWF/ATZ1L4bQwohrpkYc/sBpwhJYAVdKYECzYAESIk4Am3sf+sPCW2LAzb9jbpvMDXfD3fEqkRIcGdbsevlt9LylPYG1K6/K3QzK75uAr78lBgb3b7sc2cl2Uaa21sDiGMvB2iQeu/EMm6bKHjD3SUsCEChnpEAKiLisd/PB+UsyMPjZNwzzh1ixcnOfsFCX51NU/PTvA6pkTUdYw4R3zyu1ArMDqyvBQB82+FiJUQJ4C8YgVT1SSvSTs+vEmkcwe7qEsUnt233Aij0BW4ZPbfngKpRQs7hXpYQNvRiuEtATWOW4bLi+z04pJbCnBAkBJggBQlIBIZCUJM0Cm9+QgcED2+/G7BprdMZaAFZExm1FWcz+NLdj32G/6XfPCB5GoJKp7H5FARHRtgRI1y0/+cm7Lwpg+v7t64DvNd5S2mqirKXHy6RoArp1Ykrc2hKtKCtXlNEyoQ6Ydi498fF1F2FAdwEbV9UnZne+8q19Z7o63vTb+TPnRneeWxwxHGdyziii6wApQNEydKUUd5wHYGrftvci7tKKLSME5bvCaruynI9rNL7vdZgiHhiP898Wl8bMnxty+uyIhcURo1FgjSg1DCDph4uPfuR9AFbvvS25p2cxbiyKVuh2o1O44n2lLLacb5v75v5fX6yl5h753IwUD+YcRAQ5B6FMMhj0jboSRhnAE258wvp7Z7aYcbCYCeCGt97ubfICLDP/q4WZ32x7M20fPfb+hxbH9ZdjHOQIIoR74EDywA3coa6MqtJnrP+LmRmcB63ob8dA1wllRm95LVc//22S16TGeKqqpqoHk10ESGJj/zjjgIhAISKCyJmcY6Uu8Pbq7C0V6ABh35dzvYWQG0QAhmSYCaUlNhzdCrlX2jpE6tV4b9DYcGFKEgG8svQucoicC4CsII8zeTxutAEQzx1duPL3vrxjdlnou0SDLdTulxJQmalXNzN98jpEJiSo+qTeoEnsnWC5lVZNRhkOZiq0G8XCmz1gpp3j/ZYdYLhj9qCkn3fJQ4QKeh9OccWxz6O0hGKM9wakeoBEZ1BmqfOMyYFk4gXS+edG4J4ju6/644VK+AOJhSIYpVRBpn/qPVRL65A51dRavJoG2UQkOqf0hgVrGG7u6syoJDObB+55nRANb589Afy40W0UwkY91h39CiLweg1UU+W3ohLNvC2VurJ1htR6A3QaYPCjI7uvOvGGOlfv2XoSuBzEhmNfZXDqBrweUPVqUlWodneSG+6J1NTevThfDpEjmnsmzuuCPPfCvRvfcakT0S2Aeq9tYPr0ZryeBvOOlZBKUIEiCAVZwTgy41x6v6hm0LFZ4o7N7IuXPA+EDx+XjQ+tP/4lUrW2vCI1ydR0iYgmWdtu4yzG7bOiAdn8iYlA0iFJh1Z1JJv+ye2b3n1419XRH2riP0aqqlKClABIjUMW+rtSlw5qmCpgsynnl56/d+M/+P91wfUvQjDgTzx9h9AAAAAASUVORK5CYII=",nocipherIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPHBhdGggZD0ibSAxMy4yMDMxMjQsMTEuNzczNDM4IGMgMC4yODEyNSwwLjI4MTI1IDAuNDIxODc1LDAuNjA5Mzc1IDAuNDIxODc1LDEuMDMxMjUgMCwwLjM3NSAtMC4xNDA2MjUsMC43NSAtMC40MjE4NzUsMS4wMzEyNSAtMC4yODEyNSwwLjIzNDM3NSAtMC42MDkzNzUsMC4zNzUgLTEuMDMxMjUsMC4zNzUgLTAuMzc1LDAgLTAuNzUsLTAuMTQwNjI1IC0xLjAzMTI1LC0wLjM3NSAwLDAgLTMuMTg3NDk4MSwtMy42NTYyNSAtMy4xODc0OTgxLC0zLjY1NjI1IDAsMCAtMy4xNDA2MjUsMy42NTYyNSAtMy4xNDA2MjUsMy42NTYyNSAtMC4yODEyNSwwLjIzNDM3NSAtMC42NTYyNSwwLjM3NSAtMS4wMzEyNSwwLjM3NSAtMC40MjE4NzUsMCAtMC43NSwtMC4xNDA2MjUgLTEuMDMxMjUsLTAuMzc1IC0wLjI4MTI1LC0wLjI4MTI1IC0wLjM3NSwtMC42NTYyNSAtMC4zNzUsLTEuMDMxMjUgMCwtMC40MjE4NzUgMC4wOTM3NSwtMC43NSAwLjM3NSwtMS4wMzEyNSAwLDAgMy4zMjgxMjUsLTMuNzUwMDAwNSAzLjMyODEyNSwtMy43NTAwMDA1IDAsMCAtMy4zMjgxMjUsLTMuNzk2ODc1IC0zLjMyODEyNSwtMy43OTY4NzUgLTAuMjgxMjUsLTAuMjgxMjUgLTAuMzc1LC0wLjYwOTM3NSAtMC4zNzUsLTEuMDMxMjUgMCwtMC4zNzUgMC4wOTM3NSwtMC43NSAwLjM3NSwtMS4wMzEyNSAwLjI4MTI1LC0wLjIzNDM3NSAwLjYwOTM3NSwtMC4zNzUgMS4wMzEyNSwtMC4zNzUgMC4zNzUsMCAwLjc1LDAuMTQwNjI1IDEuMDMxMjUsMC4zNzUgMCwwIDMuMTQwNjI1LDMuNjU2MjUgMy4xNDA2MjUsMy42NTYyNSAwLDAgMy4xODc0OTgxLC0zLjY1NjI1IDMuMTg3NDk4MSwtMy42NTYyNSAwLjI4MTI1LC0wLjIzNDM3NSAwLjY1NjI1LC0wLjM3NSAxLjAzMTI1LC0wLjM3NSAwLjQyMTg3NSwwIDAuNzUsMC4xNDA2MjUgMS4wMzEyNSwwLjM3NSAwLjI4MTI1LDAuMjgxMjUgMC40MjE4NzUsMC42NTYyNSAwLjQyMTg3NSwxLjAzMTI1IDAsMC40MjE4NzUgLTAuMTQwNjI1LDAuNzUgLTAuNDIxODc1LDEuMDMxMjUgMCwwIC0zLjMyODEyMzEsMy43OTY4NzUgLTMuMzI4MTIzMSwzLjc5Njg3NSAwLDAgMy4zMjgxMjMxLDMuNzUwMDAwNSAzLjMyODEyMzEsMy43NTAwMDA1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=",remoteStorageIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmNGEwNCIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmY0YTA0IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==",remoteStorageIconCiphered:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmNGEwNCIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmY0YTA0IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xNiAwbDAuMTI1IDYuMzc1YzIuMDk4IDAuMDY3IDMuNzUgMS43NTk1IDMuNzUgMy44NzV2MS45NjloMS45MzcgMC4wMzJsOC00LjIxOS0xMy44NDQtOHpsLTEzLjg0NCA4IDggNC4yMTloMC4wMzIgMS45MDZ2LTEuOTY5YzAtMi4xMTU1IDEuNjgzLTMuODA4IDMuNzgxLTMuODc1bDAuMTI1LTYuMzc1em0tMTMuODQ0IDh2MTZsNy45OTk4LTQuODQ0di02LjA5NGwtNy45OTk4LTUuMDYyem0wIDE2bDEzLjg0NCA4LTAuMzc1LTEwLjA2MmgtNS40Njl2LTIuMzQ0bC03Ljk5OTggNC40MDZ6bTEzLjg0NCA4bDEzLjg0NC04LTgtNC40MDZ2Mi4zNDRoLTUuNDY5bC0wLjM3NSAxMC4wNjJ6bTEzLjg0NC04di0xNmwtOCA1LjA2MnY2LjA5NGw4IDQuODQ0em0tMTMuOTY5LTE3Yy0xLjczNSAwLjA2NjYtMy4xMjUgMS40OTg3LTMuMTI1IDMuMjV2MS45NjloMy4wMzFsMC4wOTQtNS4yMTl6bTAuMjUgMGwwLjA5NCA1LjIxOWgzLjAzMXYtMS45NjljMC0xLjc1MTMtMS4zOS0zLjE4MzQtMy4xMjUtMy4yNXptLTQuNzUgNS44NDRsNC4zNDQgMi4yODEgMC4wMzEtMi4yODFoLTQuMzc1em00Ljg3NSAwbDAuMDMxIDIuMjgxIDQuMzQ0LTIuMjgxaC00LjM3NXptLTUuNDM4IDAuNjI1djUuMzEybDQuMjgyLTIuNTkzLTQuMjgyLTIuNzE5em0xMC4zNzYgMGwtNC4yODIgMi43MTkgNC4yODIgMi41OTN2LTUuMzEyem0tNS43ODIgMy4yMTlsLTQuNTk0IDIuNTMxdjIuMDYyaDQuNzgybC0wLjE4OC00LjU5M3ptMS4xODggMGwtMC4xODggNC41OTNoNC43ODJ2LTIuMDYybC00LjU5NC0yLjUzMXoiIGZpbGw9InVybCgjYSkiLz4KPC9zdmc+Cg==",remoteStorageIconError:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U5MDAwMCIgc3RvcC1vcGFjaXR5PSIuNzYwNzgiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZTkwMDAwIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==",remoteStorageIconOffline:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzY5Njk2OSIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjNjc2NzY3IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==",
	syncIcon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg3LjUgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTUuOTk5OTk5IDE2IiB3aWR0aD0iMTYiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjUxMTIgLTc2LjUyNSkiIGRpc3BsYXk9Im5vbmUiPgoJPHBhdGggZGlzcGxheT0iaW5saW5lIiBkPSJtNTEuNDczIDQyLjI1NS0yLjIwNSAyLjIxMmMxLjQ3OCAxLjQ3NyAyLjI5NSAzLjQ0MiAyLjI5NSA1LjUzMyAwIDQuMzA5LTMuNTA0IDcuODEyLTcuODEyIDcuODEydi0xLjU2MmwtMy4xMjUgMy4xMjUgMy4xMjQgMy4xMjV2LTEuNTYyYzYuMDI5IDAgMTAuOTM4LTQuOTA2IDEwLjkzOC0xMC45MzggMC0yLjkyNy0xLjE0MS01LjY3Ni0zLjIxNS03Ljc0NXoiLz4KCTxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0ibTQ2Ljg3NSA0MC42MjUtMy4xMjUtMy4xMjV2MS41NjJjLTYuMDMgMC0xMC45MzggNC45MDctMTAuOTM4IDEwLjkzOCAwIDIuOTI3IDEuMTQxIDUuNjc2IDMuMjE3IDcuNzQ1bDIuMjAzLTIuMjEyYy0xLjQ3Ny0xLjQ3OS0yLjI5NC0zLjQ0Mi0yLjI5NC01LjUzMyAwLTQuMzA5IDMuNTA0LTcuODEyIDcuODEyLTcuODEydjEuNTYybDMuMTI1LTMuMTI1eiIvPgo8L2c+CjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMCAwbC0wLjc1IDEuOTA2MmMtMS4wMDc4LTAuMjk0Mi0zLjQ1ODYtMC43NzA4LTUuNjU2MiAwLjkzNzYgMC0wLjAwMDItMy45MzAyIDIuNTk0MS0yLjA5MzggNy41OTQybDEuNjU2Mi0wLjcxOTJzLTEuNTM5OS0zLjExMjIgMS42ODc2LTUuNTMxM2MwIDAgMS42OTU3LTEuMTMzOSAzLjY4NzQtMC41OTM3bC0wLjcxODcgMS44MTI0IDMuODEyNS0xLjYyNS0xLjYyNS0zLjc4MTJ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0IDUuNTYyNWwtMS42NTYgMC43MTg3czEuNTQxIDMuMTEzNS0xLjY4OCA1LjUzMDhjMCAwLTEuNzI3MiAxLjEzNS0zLjcxODUgMC41OTRsMC43NS0xLjgxMi0zLjgxMjUgMS41OTQgMS41OTM4IDMuODEyIDAuNzgxMi0xLjkwNmMxLjAxMTMgMC4yOTUgMy40NjE1IDAuNzY2IDUuNjU2LTAuOTM4IDAgMCAzLjkyOC0yLjU5NCAyLjA5NC03LjU5MzV6Ii8+Cjwvc3ZnPgo=",widget:'<div class="rs-bubble rs-hidden">   <div class="rs-bubble-text remotestorage-initial remotestorage-error remotestorage-authing remotestorage-offline">     <span class="rs-status-text">{{view_connect}}</span>   </div>   <div class="rs-bubble-expandable">     <!-- error -->     <div class="remotestorage-error">       <pre class="rs-status-text rs-error-msg">{{ERROR_MSG}}</pre>       <button class="remotestorage-reset">{{view_get_me_out}}</button>       <p class="rs-centered-text rs-error-plz-report">{{view_error_plz_report}}</p>     </div>     <!-- connected -->     <div class="rs-bubble-text remotestorage-connected">       <strong class="userAddress">{{USER_ADDRESS}}</strong>       <p class="remotestorage-unauthorized">{{view_unauthorized}}</p>       <p class="remotestorage-invalid-key">{{view_invalid_key}}</p>       <form novalidate class="remotestorage-cipher-form">         <input placeholder="Secret key" name="userSecretKey" novalidate>         <button class="rs-cipher" name="rs-cipher" title="cipher" disabled="disabled">           <img>         </button>         <button class="rs-nocipher" name="rs-nocipher" title="no cipher">           <img>         </button>       </form>     </div>     <div class="rs-content remotestorage-connected">       <button class="rs-sync" title="sync"><img></button>       <button class="rs-disconnect" title="disconnect"><img></button>     </div>     <!-- initial -->     <form novalidate class="remotestorage-initial">       <input type="email" placeholder="user@provider.com" name="userAddress" novalidate>       <button class="connect" name="connect" title="connect" disabled="disabled">         <img>       </button>     </form>     <div class="rs-info-msg remotestorage-initial">{{view_info}}</div>   </div> </div> <img class="rs-dropbox rs-backends rs-action" alt="Connect to Dropbox"> <img class="rs-googledrive rs-backends rs-action" alt="Connect to Google Drive"> <img class="rs-cube rs-action"> ',widgetCss:'/** encoding:utf-8 **/ /* RESET */ #remotestorage-widget{text-align:left;}#remotestorage-widget input, #remotestorage-widget button{font-size:11px;}#remotestorage-widget form input[type=email]{margin-bottom:0;/* HTML5 Boilerplate */}#remotestorage-widget form input[type=submit]{margin-top:0;/* HTML5 Boilerplate */}/* /RESET */ #remotestorage-widget, #remotestorage-widget *{-moz-box-sizing:border-box;box-sizing:border-box;}#remotestorage-widget{position:absolute;right:10px;top:10px;font:normal 16px/100% sans-serif !important;user-select:none;-webkit-user-select:none;-moz-user-select:-moz-none;cursor:default;z-index:10000;}#remotestorage-widget .rs-bubble{background:rgba(80, 80, 80, .7);border-radius:5px 15px 5px 5px;color:white;font-size:0.8em;padding:5px;position:absolute;right:3px;top:9px;min-height:24px;white-space:nowrap;text-decoration:none;}.rs-bubble .rs-bubble-text{padding-right:32px;/* make sure the bubble doesn\'t "jump" when initially opening. */ min-width:182px;}#remotestorage-widget .rs-action{cursor:pointer;}/* less obtrusive cube when connected */ #remotestorage-widget.remotestorage-state-connected .rs-cube, #remotestorage-widget.remotestorage-state-busy .rs-cube{opacity:.3;-webkit-transition:opacity .3s ease;-moz-transition:opacity .3s ease;-ms-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;}#remotestorage-widget.remotestorage-state-connected:hover .rs-cube, #remotestorage-widget.remotestorage-state-busy:hover .rs-cube, #remotestorage-widget.remotestorage-state-connected .rs-bubble:not(.rs-hidden) + .rs-cube{opacity:1 !important;}#remotestorage-widget .rs-backends{position:relative;top:5px;right:0;}#remotestorage-widget .rs-cube{position:relative;top:5px;right:0;}/* pulsing animation for cube when loading */ #remotestorage-widget .rs-cube.remotestorage-loading{-webkit-animation:remotestorage-loading .5s ease-in-out infinite alternate;-moz-animation:remotestorage-loading .5s ease-in-out infinite alternate;-o-animation:remotestorage-loading .5s ease-in-out infinite alternate;-ms-animation:remotestorage-loading .5s ease-in-out infinite alternate;animation:remotestorage-loading .5s ease-in-out infinite alternate;}@-webkit-keyframes remotestorage-loading{to{opacity:.7}}@-moz-keyframes remotestorage-loading{to{opacity:.7}}@-o-keyframes remotestorage-loading{to{opacity:.7}}@-ms-keyframes remotestorage-loading{to{opacity:.7}}@keyframes remotestorage-loading{to{opacity:.7}}#remotestorage-widget a{text-decoration:underline;color:inherit;}#remotestorage-widget form{margin-top:.7em;position:relative;}#remotestorage-widget form input{display:table-cell;vertical-align:top;border:none;border-radius:6px;font-weight:bold;color:white;outline:none;line-height:1.5em;height:2em;}#remotestorage-widget form input:disabled{color:#999;background:#444 !important;cursor:default !important;}#remotestorage-widget form input[type=email]:focus, #remotestorage-widget form input[type=password]:focus{background:#223;}#remotestorage-widget form input[type=email], #remotestorage-widget form input[type=password]{background:#000;width:100%;height:26px;padding:0 30px 0 5px;border-top:1px solid #111;border-bottom:1px solid #999;}#remotestorage-widget form input[type=email]:focus, #remotestorage-widget form input[type=password]:focus{background:#223;}#remotestorage-widget button:focus, #remotestorage-widget input:focus{box-shadow:0 0 4px #ccc;}#remotestorage-widget form input[type=email]::-webkit-input-placeholder, #remotestorage-widget form input[type=password]::-webkit-input-placeholder{color:#999;}#remotestorage-widget form input[type=email]:-moz-placeholder, #remotestorage-widget form input[type=password]:-moz-placeholder{color:#999;}#remotestorage-widget form input[type=email]::-moz-placeholder, #remotestorage-widget form input[type=password]::-moz-placeholder{color:#999;}#remotestorage-widget form input[type=email]:-ms-input-placeholder, #remotestorage-widget form input[type=password]:-ms-input-placeholder{color:#999;}#remotestorage-widget form input[type=submit]{background:#000;cursor:pointer;padding:0 5px;}#remotestorage-widget form input[type=submit]:hover{background:#333;}#remotestorage-widget .rs-info-msg{font-size:10px;color:#eee;margin-top:0.7em;white-space:normal;}#remotestorage-widget .rs-info-msg.last-synced-message{display:inline;white-space:nowrap;margin-bottom:.7em}#remotestorage-widget .rs-info-msg a:hover, #remotestorage-widget .rs-info-msg a:active{color:#fff;}#remotestorage-widget button img{vertical-align:baseline;}#remotestorage-widget button{border:none;border-radius:6px;font-weight:bold;color:white;outline:none;line-height:1.5em;height:26px;width:26px;background:#000;cursor:pointer;margin:0;padding:5px;}#remotestorage-widget button:hover{background:#333;}#remotestorage-widget .rs-bubble button.connect, #remotestorage-widget .rs-bubble button.rs-cipher, #remotestorage-widget .rs-bubble button.rs-nocipher{display:block;background:none;position:absolute;right:0;top:0;opacity:1;/* increase clickable area of connect, rs-cipher & rs-nocipher buttons */ margin:-5px;padding:10px;width:36px;height:36px;}#remotestorage-widget .rs-bubble button.rs-cipher{width:46px;}#remotestorage-widget .rs-bubble button.rs-nocipher{height:26px;margin:0;padding:4px 5px 5px;right:-32px;width:26px;}#remotestorage-widget .rs-bubble button.connect:not([disabled]):hover, #remotestorage-widget .rs-bubble button.rs-cipher:not([disabled]):hover, #remotestorage-widget .rs-bubble button.rs-nocipher:not([disabled]):hover{background:rgba(150,150,150,.5);}#remotestorage-widget .rs-bubble button.connect[disabled], #remotestorage-widget .rs-bubble button.rs-cipher[disabled]{opacity:.5;cursor:default !important;}#remotestorage-widget .rs-bubble button.rs-sync{position:relative;left:-5px;bottom:-5px;padding:4px 4px 0 4px;background:#555;}#remotestorage-widget .rs-bubble button.rs-sync:hover{background:#444;}#remotestorage-widget .rs-bubble button.rs-disconnect{background:#721;position:absolute;right:0;bottom:0;padding:4px 4px 0 4px;}#remotestorage-widget .rs-bubble button.rs-disconnect:hover{background:#921;}#remotestorage-widget .remotestorage-error-info{color:#f92;}#remotestorage-widget .remotestorage-reset{width:100%;background:#721;}#remotestorage-widget .remotestorage-reset:hover{background:#921;}#remotestorage-widget .rs-bubble .rs-content{margin-top:7px;}#remotestorage-widget pre{user-select:initial;-webkit-user-select:initial;-moz-user-select:text;max-width:27em;margin-top:1em;overflow:auto;}#remotestorage-widget .rs-centered-text{text-align:center;}#remotestorage-widget .rs-bubble.rs-hidden{padding-bottom:2px;border-radius:5px 15px 15px 5px;}#remotestorage-widget .rs-error-msg{min-height:5em;}.rs-bubble.rs-hidden .rs-bubble-expandable{display:none;}.remotestorage-state-connected .rs-bubble.rs-hidden{display:none;}.remotestorage-connected{display:none;}.remotestorage-state-connected .remotestorage-connected{display:block;}.remotestorage-cipher-form{display:none;}.remotestorage-cipher .remotestorage-cipher-form{display:block;}.remotestorage-invalid-key{display:none;}.remotestorage-invalid-key.remotestorage-cipher-error{display:block;}.remotestorage-initial{display:none;}.remotestorage-state-initial .remotestorage-initial{display:block;}.remotestorage-error{display:none;}.remotestorage-state-error .remotestorage-error{display:block;}.remotestorage-state-authing .remotestorage-authing{display:block;}.remotestorage-state-offline .remotestorage-connected, .remotestorage-state-offline .remotestorage-offline{display:block;}.remotestorage-unauthorized{display:none;}.remotestorage-state-unauthorized .rs-bubble.rs-hidden{display:none;}.remotestorage-state-unauthorized .remotestorage-connected, .remotestorage-state-unauthorized .remotestorage-unauthorized{display:block;}.remotestorage-state-unauthorized .rs-sync{display:none;}.remotestorage-state-busy .rs-bubble.rs-hidden{display:none;}.remotestorage-state-busy .rs-bubble{display:block;}.remotestorage-state-busy .remotestorage-connected{display:block;}.remotestorage-state-authing .rs-bubble-expandable{display:none;}'}},function(e,t,r){(function(e){var t=r(2);r(28);var n,o,i="remotestorage:discover",s={};t.Discover=function(e){if(e in s)return Promise.resolve(s[e]);var r=new WebFinger({tls_only:!1,uri_fallback:!0,request_timeout:5e3}),n=Promise.defer();return r.lookup(e,function(r,a){if(r)return n.reject(r.message);if("object"!=typeof a.idx.links.remotestorage||"number"!=typeof a.idx.links.remotestorage.length||a.idx.links.remotestorage.length<=0)return t.log("[Discover] WebFinger record for "+e+" does not have remotestorage defined in the links section ",JSON.stringify(a.json)),n.reject("WebFinger record for "+e+" does not have remotestorage defined in the links section.");var c=a.idx.links.remotestorage[0],u=c.properties["http://tools.ietf.org/html/rfc6749#section-4.2"]||c.properties["auth-endpoint"],l=c.properties["http://remotestorage.io/spec/version"]||c.type;return s[e]={href:c.href,storageType:l,authURL:u,properties:c.properties},o&&(localStorage[i]=JSON.stringify({cache:s})),n.resolve(s[e])}),n.promise},t.Discover._rs_init=function(e){if(o=t.util.localStorageAvailable()){var r;try{r=JSON.parse(localStorage[i])}catch(n){}r&&(s=r.cache)}},t.Discover._rs_supported=function(){return n=!!e.XMLHttpRequest},t.Discover._rs_cleanup=function(){o&&delete localStorage[i]}}).call(t,function(){return this}())},function(e,t,r){var n,o;/*!
		 * webfinger.js
		 *   version 2.4.2
		 *   http://github.com/silverbucket/webfinger.js
		 *
		 * Developed and Maintained by:
		 *   Nick Jennings <nick@silverbucket.net> 2012 - 2016
		 *
		 * webfinger.js is released under the AGPL (see LICENSE).
		 *
		 * You don't have to do anything special to choose one license or the other and you don't
		 * have to notify anyone which license you are using.
		 * Please see the corresponding license file for details of these licenses.
		 * You are free to use, modify and distribute this software, but all copyright
		 * information must remain.
		 *
		 */
	"undefined"==typeof XMLHttpRequest&&(XMLHttpRequest=r(29).XMLHttpRequest),function(r){function i(e){return e.toString=function(){return this.message},e}function s(e){if("string"!=typeof e)return!1;var t=e.split("://");return"https"===t[0]}function a(e){"object"!=typeof e&&(e={}),this.config={tls_only:"undefined"==typeof e.tls_only||e.tls_only,webfist_fallback:"undefined"!=typeof e.webfist_fallback&&e.webfist_fallback,uri_fallback:"undefined"!=typeof e.uri_fallback&&e.uri_fallback,request_timeout:"undefined"!=typeof e.request_timeout?e.request_timeout:1e4}}var c={"http://webfist.org/spec/rel":"webfist","http://webfinger.net/rel/avatar":"avatar",remotestorage:"remotestorage","http://tools.ietf.org/id/draft-dejong-remotestorage":"remotestorage",remoteStorage:"remotestorage","http://www.packetizer.com/rel/share":"share","http://webfinger.net/rel/profile-page":"profile",me:"profile",vcard:"vcard",blog:"blog","http://packetizer.com/rel/blog":"blog","http://schemas.google.com/g/2010#updates-from":"updates","https://camlistore.org/rel/server":"camilstore"},u={avatar:[],remotestorage:[],blog:[],vcard:[],updates:[],share:[],profile:[],webfist:[],camlistore:[]},l=["webfinger","host-meta","host-meta.json"];a.prototype.__fetchJRD=function(e,t,r){function n(){if(200===c.status)return a.__isValidJSON(c.responseText)?r(c.responseText):t(i({message:"invalid json",url:e,status:c.status}));if(404===c.status)return t(i({message:"resource not found",url:e,status:c.status}));if(c.status>=301&&c.status<=302){var n=c.getResponseHeader("Location");return s(n)?o(n):t(i({message:"no redirect URL found",url:e,status:c.status}))}return t(i({message:"error during request",url:e,status:c.status}))}function o(){c.onreadystatechange=function(){4===c.readyState&&n()},c.onload=function(e,t){n()},c.open("GET",e,!0),c.setRequestHeader("Accept","application/jrd+json, application/json"),c.send()}var a=this,c=new XMLHttpRequest;return o()},a.prototype.__isValidJSON=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},a.prototype.__isLocalhost=function(e){var t=/^localhost(\.localdomain)?(\:[0-9]+)?$/;return t.test(e)},a.prototype.__processJRD=function(e,t,n,o){var s=JSON.parse(t);if("object"!=typeof s||"object"!=typeof s.links)return n("undefined"!=typeof s.error?i({message:s.error,request:e}):i({message:"unknown response from server",request:e}));var a=s.links,l={object:s,json:t,idx:{}};l.idx.properties={name:r},l.idx.links=JSON.parse(JSON.stringify(u)),a.map(function(e,t){if(c.hasOwnProperty(e.rel)&&l.idx.links[c[e.rel]]){var r={};Object.keys(e).map(function(t,n){r[t]=e[t]}),l.idx.links[c[e.rel]].push(r)}});var h=JSON.parse(t).properties;for(var d in h)h.hasOwnProperty(d)&&"http://packetizer.com/ns/name"===d&&(l.idx.properties.name=h[d]);return o(l)},a.prototype.lookup=function(e,t){function r(){var t="";return e.split("://")[1]||(t="acct:"),c+"://"+s+"/.well-known/"+l[a]+"?resource="+t+e}function n(e){if(i.config.uri_fallback&&"webfist.org"!==s&&a!==l.length-1)return a+=1,o();if(!i.config.tls_only&&"https"===c)return a=0,c="http",o();if(!i.config.webfist_fallback||"webfist.org"===s)return t(e);a=0,c="http",s="webfist.org";var n=r();i.__fetchJRD(n,t,function(e){i.__processJRD(n,e,t,function(e){"object"==typeof e.idx.links.webfist&&"string"==typeof e.idx.links.webfist[0].href&&i.__fetchJRD(e.idx.links.webfist[0].href,t,function(e){i.__processJRD(n,e,t,function(e){return t(null,t)})})})})}function o(){var e=r();i.__fetchJRD(e,n,function(r){i.__processJRD(e,r,t,function(e){t(null,e)})})}if("string"!=typeof e)throw new Error("first parameter must be a user address");if("function"!=typeof t)throw new Error("second parameter must be a callback");var i=this,s="";s=e.indexOf("://")>-1?e.replace(/ /g,"").split("://")[1]:e.replace(/ /g,"").split("@")[1];var a=0,c="https";return i.__isLocalhost(s)&&(c="http"),setTimeout(o,0)},a.prototype.lookupLink=function(e,t,r){return u.hasOwnProperty(t)?void this.lookup(e,function(e,n){var o=n.idx.links[t];return e?r(e):0===o.length?r('no links found with rel="'+t+'"'):r(null,o[0])}):r("unsupported rel "+t)},"object"==typeof window?window.WebFinger=a:(n=[],o=function(){return a}.apply(t,n),!(o!==r&&(e.exports=o)))}()},function(t,r){t.exports=e},function(e,t,r){(function(e){function t(e){var t,r=e||n.Authorize.getLocation().href,o=r.indexOf("#");if(o!==-1&&(t=r.substring(o+1),t.indexOf("=")!==-1))return t.split("&").reduce(function(e,t){var r=t.split("=");if("state"===r[0]&&r[1].match(/rsDiscovery/)){var n=decodeURIComponent(r[1]),o=n.substr(n.indexOf("rsDiscovery=")).split("&")[0].split("=")[1];e.rsDiscovery=JSON.parse(atob(o)),n=n.replace(new RegExp("&?rsDiscovery="+o),""),n.length>0&&(e.state=n)}else e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]);return e},{})}var n=r(2);n.ImpliedAuth=function(e,t){n.log("ImpliedAuth proceeding due to absent authURL; storageApi = "+e+" redirectUri = "+t),remoteStorage.remote.configure({token:n.Authorize.IMPLIED_FAKE_TOKEN}),document.location=t},n.Authorize=function(t,r,o,i,s){if(n.log("[Authorize] authURL = ",r,"scope = ",o,"redirectUri = ",i,"clientId = ",s),!n.util.localStorageAvailable()&&"remotestorage"===t.backend){i+=i.indexOf("#")>0?"&":"#";var a={userAddress:t.remote.userAddress,href:t.remote.href,storageApi:t.remote.storageApi,properties:t.remote.properties};i+="rsDiscovery="+btoa(JSON.stringify(a))}var c=r,u=i.indexOf("#");return c+=r.indexOf("?")>0?"&":"?",c+="redirect_uri="+encodeURIComponent(i.replace(/#.*$/,"")),c+="&scope="+encodeURIComponent(o),c+="&client_id="+encodeURIComponent(s),u!==-1&&u+1!==i.length&&(c+="&state="+encodeURIComponent(i.substring(u+1))),c+="&response_type=token",e.cordova?n.Authorize.openWindow(c,i,"location=yes,clearsessioncache=yes,clearcache=yes").then(function(e){t.remote.configure({token:e.access_token})}).then(null,function(e){console.error(e),t.widget.view.setState("initial")}):void n.Authorize.setLocation(c)},n.Authorize.IMPLIED_FAKE_TOKEN=!1,n.prototype.authorize=function(t,r){this.access.setStorageType(this.remote.storageType);var o=this.access.scopeParameter,i=e.cordova?r:String(n.Authorize.getLocation()),s=i.match(/^(https?:\/\/[^\/]+)/)[0];n.Authorize(this,t,o,i,s)},n.Authorize.getLocation=function(){return e.document.location},n.Authorize.setLocation=function(t){if("string"==typeof t)e.document.location.href=t;else{if("object"!=typeof t)throw"Invalid location "+t;e.document.location=t}},n.Authorize.openWindow=function(r,n,o){var i=Promise.defer(),s=e.open(r,"_blank",o);if(!s||s.closed)return i.reject("Authorization popup was blocked"),i.promise;var a=function(){i.reject("Authorization was canceled")},c=function(e){if(0===e.url.indexOf(n)){s.removeEventListener("exit",a),s.close();var r=t(e.url);return r?i.resolve(r):i.reject("Authorization error")}};return s.addEventListener("loadstart",c),s.addEventListener("exit",a),i.promise},n.prototype.impliedauth=function(){n.ImpliedAuth(this.remote.storageApi,String(document.location))},n.Authorize._rs_supported=function(){return"undefined"!=typeof document};var o;n.Authorize._rs_init=function(e){o=function(){var t=!1;if(i){if(i.error)throw"Authorization server errored: "+i.error;i.rsDiscovery&&e.remote.configure(i.rsDiscovery),i.access_token&&(e.remote.configure({token:i.access_token}),t=!0),i.remotestorage&&(e.connect(i.remotestorage),t=!0),i.state&&(r=n.Authorize.getLocation(),n.Authorize.setLocation(r.href.split("#")[0]+"#"+i.state))}t||e.remote.stopWaitingForToken()};var r,i=t();i&&(r=n.Authorize.getLocation(),r.hash=""),e.on("features-loaded",o)},n.Authorize._rs_cleanup=function(e){e.removeEventListener("features-loaded",o)}}).call(t,function(){return this}())}])});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = XMLHttpRequest;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * File: Bookmarks
		 *
		 * Maintainer: - Sebastian Kippe <sebastian@kip.pe>
		 * Version:    - 0.2.0
		 *
		 * This module stores bookmarks. It is used by https://webmarks.5apps.com/
		 */
		
		var md5 = __webpack_require__(1);
		var Bookmarks = function(RemoteStorage){
		
		RemoteStorage.defineModule('bookmarks', function (privateClient, publicClient) {
		
		  var extend = RemoteStorage.util.extend;
		
		  //
		  // Types/Schemas
		  //
		
		  var baseProperties = {
		    "id": {
		      "type": "string"
		    },
		    "url": {
		      "type": "string",
		      "format": "uri"
		    },
		    "title": {
		      "type": "string"
		    },
		    "createdAt": {
		      "type": "string",
		      "format": "date-time"
		    },
		    "updatedAt": {
		      "type": "string",
		      "format": "date-time"
		    }
		  };
		
		
		  /**
		   * Schema: bookmarks/archive-bookmark
		   *
		   * Represents an archived bookmark.
		   *
		   * Properties:
		   *   id          - A string that uniquely identifies this bookmark (required)
		   *   url         - The url of the bookmark (required)
		   *   title       - The user-facing string describing the bookmark (required)
		   *   createdAt   - DateTime string of document creation
		   *   updatedAt   - DateTime string of last update
		   *   description - Like title, but more elaborate
		   *   tags        - Array of strings; use tags to give your bookmarks a loose grouping into categories
		   *   thumbnail   - A base64-encoded screenshot of the bookmarked page
		   */
		
		  privateClient.declareType('archive-bookmark', {
		    "type": "object",
		    "properties": extend({
		      "description": {
		        "type": "string",
		        "default": ""
		      },
		      "tags": {
		        "type": "array",
		        "default": []
		      },
		      "thumbnail": {
		        "description": "A base64-encoded screenshot of the bookmarked page",
		        "type": "string"
		      }
		    }, baseProperties),
		    "required": [ "id", "title", "url" ]
		  });
		
		  /**
		   * Schema: bookmarks/browser-bookmark
		   *
		   * Represents a bookmark that is not archived.
		   *
		   * Properties:
		   *   id          - A string that uniquely identifies this bookmark
		   *   url         - The url of the bookmark
		   *   title       - The user-facing string describing the bookmark
		   *   createdAt   - DateTime string of document creation
		   *   updatedAt   - DateTime string of last update
		   *   tags        - Array of strings; use tags to give your bookmarks a loose grouping into categories
		   */
		
		  privateClient.declareType('browser-bookmark', {
		    "type": "object",
		    "properties": extend({
		      "tags": {
		        "type": "array",
		        "default": []
		      }
		    }, baseProperties)
		  });
		
		  /**
		   * Schema: bookmarks/readlater-bookmark
		   *
		   * Represents a bookmark which the user marked for reading later.
		   *
		   * Properties:
		   *   id          - A string that uniquely identifies this bookmark
		   *   url         - The url of the bookmark
		   *   title       - The user-facing string describing the bookmark
		   *   createdAt   - DateTime string of document creation
		   *   updatedAt   - DateTime string of last update
		   *   unread      - Boolean, whether the bookmark is unread (default: true, required)
		   */
		
		  privateClient.declareType('readlater-bookmark', {
		    "type": "object",
		    "properties": extend({
		      "unread": {
		        "type": "boolean",
		        "default": true,
		        "required": true
		      }
		    }, baseProperties)
		  });
		
		  //
		  // Public functions
		  //
		
		  var bookmarks = {
		
		    archive: {
		
		      find: function(id) {
		        var path = "archive/" + id;
		
		        return privateClient.getObject(path).then(function(bookmark){
		          return bookmark;
		        });
		      },
		
		      getAll: function() {
		        return privateClient.getAll('archive/').then(
		        // return privateClient.getAll('archive/', 'archive-bookmark').then(
		          function(bookmarks) {
		            console.log('got archive bookmarks', bookmarks);
		            if (!bookmarks) {
		              return [];
		            }
		            return Object.keys(bookmarks).map(function(id) {
		              return bookmarks[id];
		            });
		          },
		          function(error) {
		            console.log("Something bad happened: ", error);
		          });
		      },
		
		      store: function(bookmark) {
		        bookmark.id = urlHash(bookmark.url);
		        if (bookmark.createdAt) {
		          bookmark.updatedAt = new Date().toISOString();
		        } else {
		          bookmark.createdAt = new Date().toISOString();
		        }
		        var path = "archive/" + bookmark.id;
		        console.log(bookmark);
		
		        return privateClient.storeObject("archive-bookmark", path, bookmark).
		          then(function() {
		            console.log(bookmark.id);
		            return bookmark;
		          });
		      },
		
		      remove: function(id) {
		        var path = "archive/" + id;
		
		        return privateClient.remove(path);
		      },
		
		      idForUrl: function(url) {
		        return urlHash(url);
		      }
		
		    },
		
		    client: privateClient
		
		  };
		
		  //
		  // Helpers
		  //
		
		  var urlHash = function(url) {
		    url = url; //TODO remove trailing slash
		    return md5(url);
		  };
		
		  //
		  // Return public functions
		  //
		
		  return { exports: bookmarks };
		
		});
		}
		
		if(typeof RemoteStorage !== 'undefined')
		  bookmarks(RemoteStorage);
		else
		  module.exports = Bookmarks


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global) {/**
		 * [js-md5]{@link https://github.com/emn178/js-md5}
		 *
		 * @namespace md5
		 * @version 0.4.0
		 * @author Chen, Yi-Cyuan [emn178@gmail.com]
		 * @copyright Chen, Yi-Cyuan 2014-2016
		 * @license MIT
		 */
		(function (root) {
		  'use strict';
		
		  var NODE_JS = typeof process == 'object' && process.versions && process.versions.node;
		  if (NODE_JS) {
		    root = global;
		  }
		  var COMMON_JS = !root.JS_MD5_TEST && typeof module == 'object' && module.exports;
		  var AMD = "function" == 'function' && __webpack_require__(3);
		  var ARRAY_BUFFER = !root.JS_MD5_TEST && typeof ArrayBuffer != 'undefined';
		  var HEX_CHARS = '0123456789abcdef'.split('');
		  var EXTRA = [128, 32768, 8388608, -2147483648];
		  var SHIFT = [0, 8, 16, 24];
		  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer'];
		
		  var blocks = [], buffer8;
		  if (ARRAY_BUFFER) {
		    var buffer = new ArrayBuffer(68);
		    buffer8 = new Uint8Array(buffer);
		    blocks = new Uint32Array(buffer);
		  }
		
		  /**
		   * @method hex
		   * @memberof md5
		   * @description Output hash as hex string
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {String} Hex string
		   * @example
		   * md5.hex('The quick brown fox jumps over the lazy dog');
		   * // equal to
		   * md5('The quick brown fox jumps over the lazy dog');
		   */
		  /**
		   * @method digest
		   * @memberof md5
		   * @description Output hash as bytes array
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {Array} Bytes array
		   * @example
		   * md5.digest('The quick brown fox jumps over the lazy dog');
		   */
		  /**
		   * @method array
		   * @memberof md5
		   * @description Output hash as bytes array
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {Array} Bytes array
		   * @example
		   * md5.array('The quick brown fox jumps over the lazy dog');
		   */
		  /**
		   * @method arrayBuffer
		   * @memberof md5
		   * @description Output hash as ArrayBuffer
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {ArrayBuffer} ArrayBuffer
		   * @example
		   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
		   */
		  /**
		   * @method buffer
		   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
		   * @memberof md5
		   * @description Output hash as ArrayBuffer
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {ArrayBuffer} ArrayBuffer
		   * @example
		   * md5.buffer('The quick brown fox jumps over the lazy dog');
		   */
		  var createOutputMethod = function (outputType) {
		    return function (message) {
		      return new Md5(true).update(message)[outputType]();
		    };
		  };
		
		  /**
		   * @method create
		   * @memberof md5
		   * @description Create Md5 object
		   * @returns {Md5} Md5 object.
		   * @example
		   * var hash = md5.create();
		   */
		  /**
		   * @method update
		   * @memberof md5
		   * @description Create and update Md5 object
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {Md5} Md5 object.
		   * @example
		   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
		   * // equal to
		   * var hash = md5.create();
		   * hash.update('The quick brown fox jumps over the lazy dog');
		   */
		  var createMethod = function () {
		    var method = createOutputMethod('hex');
		    if (NODE_JS) {
		      method = nodeWrap(method);
		    }
		    method.create = function () {
		      return new Md5();
		    };
		    method.update = function (message) {
		      return method.create().update(message);
		    };
		    for (var i = 0;i < OUTPUT_TYPES.length;++i) {
		      var type = OUTPUT_TYPES[i];
		      method[type] = createOutputMethod(type);
		    }
		    return method;
		  };
		
		  var nodeWrap = function (method) {
		    var crypto, Buffer;
		    try {
		      if (root.JS_MD5_TEST) {
		        throw 'JS_MD5_TEST';
		      }
		      crypto = __webpack_require__(4);
		      Buffer = __webpack_require__(5).Buffer;
		    } catch (e) {
		      console.log(e);
		      return method;
		    }
		    var nodeMethod = function (message) {
		      if (typeof message == 'string') {
		        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
		      } else if (message.constructor == ArrayBuffer) {
		        message = new Uint8Array(message);
		      } else if (message.length === undefined) {
		        return method(message);
		      }
		      return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
		    };
		    return nodeMethod;
		  };
		
		  /**
		   * Md5 class
		   * @class Md5
		   * @description This is internal class.
		   * @see {@link md5.create}
		   */
		  function Md5(sharedMemory) {
		    if (sharedMemory) {
		      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
		      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
		      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
		      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
		      this.blocks = blocks;
		      this.buffer8 = buffer8;
		    } else {
		      if (ARRAY_BUFFER) {
		        var buffer = new ArrayBuffer(68);
		        this.buffer8 = new Uint8Array(buffer);
		        this.blocks = new Uint32Array(buffer);
		      } else {
		        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		      }
		    }
		    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0;
		    this.finalized = this.hashed = false;
		    this.first = true;
		  }
		
		  /**
		   * @method update
		   * @memberof Md5
		   * @instance
		   * @description Update hash
		   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		   * @returns {Md5} Md5 object.
		   * @see {@link md5.update}
		   */
		  Md5.prototype.update = function (message) {
		    if (this.finalized) {
		      return;
		    }
		    var notString = typeof(message) != 'string';
		    if (notString && message.constructor == root.ArrayBuffer) {
		      message = new Uint8Array(message);
		    }
		    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;
		    var buffer8 = this.buffer8;
		
		    while (index < length) {
		      if (this.hashed) {
		        this.hashed = false;
		        blocks[0] = blocks[16];
		        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
		        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
		        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
		        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
		      }
		
		      if (notString) {
		        if (ARRAY_BUFFER) {
		          for (i = this.start;index < length && i < 64; ++index) {
		            buffer8[i++] = message[index];
		          }
		        } else {
		          for (i = this.start;index < length && i < 64; ++index) {
		            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
		          }
		        }
		      } else {
		        if (ARRAY_BUFFER) {
		          for (i = this.start;index < length && i < 64; ++index) {
		            code = message.charCodeAt(index);
		            if (code < 0x80) {
		              buffer8[i++] = code;
		            } else if (code < 0x800) {
		              buffer8[i++] = 0xc0 | (code >> 6);
		              buffer8[i++] = 0x80 | (code & 0x3f);
		            } else if (code < 0xd800 || code >= 0xe000) {
		              buffer8[i++] = 0xe0 | (code >> 12);
		              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
		              buffer8[i++] = 0x80 | (code & 0x3f);
		            } else {
		              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
		              buffer8[i++] = 0xf0 | (code >> 18);
		              buffer8[i++] = 0x80 | ((code >> 12) & 0x3f);
		              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
		              buffer8[i++] = 0x80 | (code & 0x3f);
		            }
		          }
		        } else {
		          for (i = this.start;index < length && i < 64; ++index) {
		            code = message.charCodeAt(index);
		            if (code < 0x80) {
		              blocks[i >> 2] |= code << SHIFT[i++ & 3];
		            } else if (code < 0x800) {
		              blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
		            } else if (code < 0xd800 || code >= 0xe000) {
		              blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
		            } else {
		              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
		              blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
		              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
		            }
		          }
		        }
		      }
		      this.lastByteIndex = i;
		      this.bytes += i - this.start;
		      if (i >= 64) {
		        this.start = i - 64;
		        this.hash();
		        this.hashed = true;
		      } else {
		        this.start = i;
		      }
		    }
		    return this;
		  };
		
		  Md5.prototype.finalize = function () {
		    if (this.finalized) {
		      return;
		    }
		    this.finalized = true;
		    var blocks = this.blocks, i = this.lastByteIndex;
		    blocks[i >> 2] |= EXTRA[i & 3];
		    if (i >= 56) {
		      if (!this.hashed) {
		        this.hash();
		      }
		      blocks[0] = blocks[16];
		      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
		      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
		      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
		      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
		    }
		    blocks[14] = this.bytes << 3;
		    this.hash();
		  };
		
		  Md5.prototype.hash = function () {
		    var a, b, c, d, bc, da, blocks = this.blocks;
		
		    if (this.first) {
		      a = blocks[0] - 680876937;
		      a = (a << 7 | a >>> 25) - 271733879 << 0;
		      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
		      d = (d << 12 | d >>> 20) + a << 0;
		      c = (-271733879 ^ (d & (a ^ -271733879))) + blocks[2] - 1126478375;
		      c = (c << 17 | c >>> 15) + d << 0;
		      b = (a ^ (c & (d ^ a))) + blocks[3] - 1316259209;
		      b = (b << 22 | b >>> 10) + c << 0;
		    } else {
		      a = this.h0;
		      b = this.h1;
		      c = this.h2;
		      d = this.h3;
		      a += (d ^ (b & (c ^ d))) + blocks[0] - 680876936;
		      a = (a << 7 | a >>> 25) + b << 0;
		      d += (c ^ (a & (b ^ c))) + blocks[1] - 389564586;
		      d = (d << 12 | d >>> 20) + a << 0;
		      c += (b ^ (d & (a ^ b))) + blocks[2] + 606105819;
		      c = (c << 17 | c >>> 15) + d << 0;
		      b += (a ^ (c & (d ^ a))) + blocks[3] - 1044525330;
		      b = (b << 22 | b >>> 10) + c << 0;
		    }
		
		    a += (d ^ (b & (c ^ d))) + blocks[4] - 176418897;
		    a = (a << 7 | a >>> 25) + b << 0;
		    d += (c ^ (a & (b ^ c))) + blocks[5] + 1200080426;
		    d = (d << 12 | d >>> 20) + a << 0;
		    c += (b ^ (d & (a ^ b))) + blocks[6] - 1473231341;
		    c = (c << 17 | c >>> 15) + d << 0;
		    b += (a ^ (c & (d ^ a))) + blocks[7] - 45705983;
		    b = (b << 22 | b >>> 10) + c << 0;
		    a += (d ^ (b & (c ^ d))) + blocks[8] + 1770035416;
		    a = (a << 7 | a >>> 25) + b << 0;
		    d += (c ^ (a & (b ^ c))) + blocks[9] - 1958414417;
		    d = (d << 12 | d >>> 20) + a << 0;
		    c += (b ^ (d & (a ^ b))) + blocks[10] - 42063;
		    c = (c << 17 | c >>> 15) + d << 0;
		    b += (a ^ (c & (d ^ a))) + blocks[11] - 1990404162;
		    b = (b << 22 | b >>> 10) + c << 0;
		    a += (d ^ (b & (c ^ d))) + blocks[12] + 1804603682;
		    a = (a << 7 | a >>> 25) + b << 0;
		    d += (c ^ (a & (b ^ c))) + blocks[13] - 40341101;
		    d = (d << 12 | d >>> 20) + a << 0;
		    c += (b ^ (d & (a ^ b))) + blocks[14] - 1502002290;
		    c = (c << 17 | c >>> 15) + d << 0;
		    b += (a ^ (c & (d ^ a))) + blocks[15] + 1236535329;
		    b = (b << 22 | b >>> 10) + c << 0;
		    a += (c ^ (d & (b ^ c))) + blocks[1] - 165796510;
		    a = (a << 5 | a >>> 27) + b << 0;
		    d += (b ^ (c & (a ^ b))) + blocks[6] - 1069501632;
		    d = (d << 9 | d >>> 23) + a << 0;
		    c += (a ^ (b & (d ^ a))) + blocks[11] + 643717713;
		    c = (c << 14 | c >>> 18) + d << 0;
		    b += (d ^ (a & (c ^ d))) + blocks[0] - 373897302;
		    b = (b << 20 | b >>> 12) + c << 0;
		    a += (c ^ (d & (b ^ c))) + blocks[5] - 701558691;
		    a = (a << 5 | a >>> 27) + b << 0;
		    d += (b ^ (c & (a ^ b))) + blocks[10] + 38016083;
		    d = (d << 9 | d >>> 23) + a << 0;
		    c += (a ^ (b & (d ^ a))) + blocks[15] - 660478335;
		    c = (c << 14 | c >>> 18) + d << 0;
		    b += (d ^ (a & (c ^ d))) + blocks[4] - 405537848;
		    b = (b << 20 | b >>> 12) + c << 0;
		    a += (c ^ (d & (b ^ c))) + blocks[9] + 568446438;
		    a = (a << 5 | a >>> 27) + b << 0;
		    d += (b ^ (c & (a ^ b))) + blocks[14] - 1019803690;
		    d = (d << 9 | d >>> 23) + a << 0;
		    c += (a ^ (b & (d ^ a))) + blocks[3] - 187363961;
		    c = (c << 14 | c >>> 18) + d << 0;
		    b += (d ^ (a & (c ^ d))) + blocks[8] + 1163531501;
		    b = (b << 20 | b >>> 12) + c << 0;
		    a += (c ^ (d & (b ^ c))) + blocks[13] - 1444681467;
		    a = (a << 5 | a >>> 27) + b << 0;
		    d += (b ^ (c & (a ^ b))) + blocks[2] - 51403784;
		    d = (d << 9 | d >>> 23) + a << 0;
		    c += (a ^ (b & (d ^ a))) + blocks[7] + 1735328473;
		    c = (c << 14 | c >>> 18) + d << 0;
		    b += (d ^ (a & (c ^ d))) + blocks[12] - 1926607734;
		    b = (b << 20 | b >>> 12) + c << 0;
		    bc = b ^ c;
		    a += (bc ^ d) + blocks[5] - 378558;
		    a = (a << 4 | a >>> 28) + b << 0;
		    d += (bc ^ a) + blocks[8] - 2022574463;
		    d = (d << 11 | d >>> 21) + a << 0;
		    da = d ^ a;
		    c += (da ^ b) + blocks[11] + 1839030562;
		    c = (c << 16 | c >>> 16) + d << 0;
		    b += (da ^ c) + blocks[14] - 35309556;
		    b = (b << 23 | b >>> 9) + c << 0;
		    bc = b ^ c;
		    a += (bc ^ d) + blocks[1] - 1530992060;
		    a = (a << 4 | a >>> 28) + b << 0;
		    d += (bc ^ a) + blocks[4] + 1272893353;
		    d = (d << 11 | d >>> 21) + a << 0;
		    da = d ^ a;
		    c += (da ^ b) + blocks[7] - 155497632;
		    c = (c << 16 | c >>> 16) + d << 0;
		    b += (da ^ c) + blocks[10] - 1094730640;
		    b = (b << 23 | b >>> 9) + c << 0;
		    bc = b ^ c;
		    a += (bc ^ d) + blocks[13] + 681279174;
		    a = (a << 4 | a >>> 28) + b << 0;
		    d += (bc ^ a) + blocks[0] - 358537222;
		    d = (d << 11 | d >>> 21) + a << 0;
		    da = d ^ a;
		    c += (da ^ b) + blocks[3] - 722521979;
		    c = (c << 16 | c >>> 16) + d << 0;
		    b += (da ^ c) + blocks[6] + 76029189;
		    b = (b << 23 | b >>> 9) + c << 0;
		    bc = b ^ c;
		    a += (bc ^ d) + blocks[9] - 640364487;
		    a = (a << 4 | a >>> 28) + b << 0;
		    d += (bc ^ a) + blocks[12] - 421815835;
		    d = (d << 11 | d >>> 21) + a << 0;
		    da = d ^ a;
		    c += (da ^ b) + blocks[15] + 530742520;
		    c = (c << 16 | c >>> 16) + d << 0;
		    b += (da ^ c) + blocks[2] - 995338651;
		    b = (b << 23 | b >>> 9) + c << 0;
		    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
		    a = (a << 6 | a >>> 26) + b << 0;
		    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
		    d = (d << 10 | d >>> 22) + a << 0;
		    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
		    c = (c << 15 | c >>> 17) + d << 0;
		    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
		    b = (b << 21 | b >>> 11) + c << 0;
		    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
		    a = (a << 6 | a >>> 26) + b << 0;
		    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
		    d = (d << 10 | d >>> 22) + a << 0;
		    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
		    c = (c << 15 | c >>> 17) + d << 0;
		    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
		    b = (b << 21 | b >>> 11) + c << 0;
		    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
		    a = (a << 6 | a >>> 26) + b << 0;
		    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
		    d = (d << 10 | d >>> 22) + a << 0;
		    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
		    c = (c << 15 | c >>> 17) + d << 0;
		    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
		    b = (b << 21 | b >>> 11) + c << 0;
		    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
		    a = (a << 6 | a >>> 26) + b << 0;
		    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
		    d = (d << 10 | d >>> 22) + a << 0;
		    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
		    c = (c << 15 | c >>> 17) + d << 0;
		    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
		    b = (b << 21 | b >>> 11) + c << 0;
		
		    if (this.first) {
		      this.h0 = a + 1732584193 << 0;
		      this.h1 = b - 271733879 << 0;
		      this.h2 = c - 1732584194 << 0;
		      this.h3 = d + 271733878 << 0;
		      this.first = false;
		    } else {
		      this.h0 = this.h0 + a << 0;
		      this.h1 = this.h1 + b << 0;
		      this.h2 = this.h2 + c << 0;
		      this.h3 = this.h3 + d << 0;
		    }
		  };
		
		  /**
		   * @method hex
		   * @memberof Md5
		   * @instance
		   * @description Output hash as hex string
		   * @returns {String} Hex string
		   * @see {@link md5.hex}
		   * @example
		   * hash.hex();
		   */
		  Md5.prototype.hex = function () {
		    this.finalize();
		
		    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
		
		    return HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
		       HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
		       HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
		       HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
		       HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
		       HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
		       HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
		       HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
		       HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
		       HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
		       HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
		       HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
		       HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
		       HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
		       HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
		       HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F];
		  };
		
		  /**
		   * @method toString
		   * @memberof Md5
		   * @instance
		   * @description Output hash as hex string
		   * @returns {String} Hex string
		   * @see {@link md5.hex}
		   * @example
		   * hash.toString();
		   */
		  Md5.prototype.toString = Md5.prototype.hex;
		
		  /**
		   * @method digest
		   * @memberof Md5
		   * @instance
		   * @description Output hash as bytes array
		   * @returns {Array} Bytes array
		   * @see {@link md5.digest}
		   * @example
		   * hash.digest();
		   */
		  Md5.prototype.digest = function () {
		    this.finalize();
		
		    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
		    return [
		      h0 & 0xFF, (h0 >> 8) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 24) & 0xFF,
		      h1 & 0xFF, (h1 >> 8) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 24) & 0xFF,
		      h2 & 0xFF, (h2 >> 8) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 24) & 0xFF,
		      h3 & 0xFF, (h3 >> 8) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 24) & 0xFF
		    ];
		  };
		
		  /**
		   * @method array
		   * @memberof Md5
		   * @instance
		   * @description Output hash as bytes array
		   * @returns {Array} Bytes array
		   * @see {@link md5.array}
		   * @example
		   * hash.array();
		   */
		  Md5.prototype.array = Md5.prototype.digest;
		
		  /**
		   * @method arrayBuffer
		   * @memberof Md5
		   * @instance
		   * @description Output hash as ArrayBuffer
		   * @returns {ArrayBuffer} ArrayBuffer
		   * @see {@link md5.arrayBuffer}
		   * @example
		   * hash.arrayBuffer();
		   */
		  Md5.prototype.arrayBuffer = function () {
		    this.finalize();
		
		    var buffer = new ArrayBuffer(16);
		    var blocks = new Uint32Array(buffer);
		    blocks[0] = this.h0;
		    blocks[1] = this.h1;
		    blocks[2] = this.h2;
		    blocks[3] = this.h3;
		    return buffer;
		  };
		
		  /**
		   * @method buffer
		   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
		   * @memberof Md5
		   * @instance
		   * @description Output hash as ArrayBuffer
		   * @returns {ArrayBuffer} ArrayBuffer
		   * @see {@link md5.buffer}
		   * @example
		   * hash.buffer();
		   */
		  Md5.prototype.buffer = Md5.prototype.arrayBuffer;
		
		  var exports = createMethod();
		
		  if (COMMON_JS) {
		    module.exports = exports;
		  } else {
		    /**
		     * @method md5
		     * @description Md5 hash function, export to global in browsers.
		     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
		     * @returns {String} md5 hashes
		     * @example
		     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
		     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
		     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
		     *
		     * // It also supports UTF-8 encoding
		     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
		     *
		     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
		     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
		     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
		     */
		    root.md5 = exports;
		    if (AMD) {
		      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		        return exports;
		      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    }
		  }
		}(this));
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		// shim for using process in browser
		var process = module.exports = {};
		
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
		
		var cachedSetTimeout;
		var cachedClearTimeout;
		
		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }
		
		
		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }
		
		
		
		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
		
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
		
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;
		
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}
		
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};
		
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
		
		function noop() {}
		
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
		
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
		
		/* WEBPACK VAR INJECTION */}.call(exports, {}))

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(9)
		
		function error () {
		  var m = [].slice.call(arguments).join(' ')
		  throw new Error([
		    m,
		    'we accept pull requests',
		    'http://github.com/dominictarr/crypto-browserify'
		    ].join('\n'))
		}
		
		exports.createHash = __webpack_require__(11)
		
		exports.createHmac = __webpack_require__(23)
		
		exports.randomBytes = function(size, callback) {
		  if (callback && callback.call) {
		    try {
		      callback.call(this, undefined, new Buffer(rng(size)))
		    } catch (err) { callback(err) }
		  } else {
		    return new Buffer(rng(size))
		  }
		}
		
		function each(a, f) {
		  for(var i in a)
		    f(a[i], i)
		}
		
		exports.getHashes = function () {
		  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
		}
		
		var p = __webpack_require__(24)(exports)
		exports.pbkdf2 = p.pbkdf2
		exports.pbkdf2Sync = p.pbkdf2Sync
		
		
		// the least I can do is make error messages for the rest of the node.js/crypto api.
		each(['createCredentials'
		, 'createCipher'
		, 'createCipheriv'
		, 'createDecipher'
		, 'createDecipheriv'
		, 'createSign'
		, 'createVerify'
		, 'createDiffieHellman'
		], function (name) {
		  exports[name] = function () {
		    error('sorry,', name, 'is not implemented yet')
		  }
		})
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
		/* eslint-disable no-proto */
		
		'use strict'
		
		var base64 = __webpack_require__(6)
		var ieee754 = __webpack_require__(7)
		var isArray = __webpack_require__(8)
		
		exports.Buffer = Buffer
		exports.SlowBuffer = SlowBuffer
		exports.INSPECT_MAX_BYTES = 50
		
		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Use Object implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * Due to various browser bugs, sometimes the Object implementation will be used even
		 * when the browser supports typed arrays.
		 *
		 * Note:
		 *
		 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
		 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
		 *
		 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
		 *
		 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
		 *     incorrect length in some situations.
		
		 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
		 * get the Object implementation, which is slower but behaves correctly.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
		  ? global.TYPED_ARRAY_SUPPORT
		  : typedArraySupport()
		
		/*
		 * Export kMaxLength after typed array support is determined.
		 */
		exports.kMaxLength = kMaxLength()
		
		function typedArraySupport () {
		  try {
		    var arr = new Uint8Array(1)
		    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
		    return arr.foo() === 42 && // typed array instances can be augmented
		        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
		        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
		  } catch (e) {
		    return false
		  }
		}
		
		function kMaxLength () {
		  return Buffer.TYPED_ARRAY_SUPPORT
		    ? 0x7fffffff
		    : 0x3fffffff
		}
		
		function createBuffer (that, length) {
		  if (kMaxLength() < length) {
		    throw new RangeError('Invalid typed array length')
		  }
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    // Return an augmented `Uint8Array` instance, for best performance
		    that = new Uint8Array(length)
		    that.__proto__ = Buffer.prototype
		  } else {
		    // Fallback: Return an object instance of the Buffer class
		    if (that === null) {
		      that = new Buffer(length)
		    }
		    that.length = length
		  }
		
		  return that
		}
		
		/**
		 * The Buffer constructor returns instances of `Uint8Array` that have their
		 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
		 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
		 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
		 * returns a single octet.
		 *
		 * The `Uint8Array` prototype remains unmodified.
		 */
		
		function Buffer (arg, encodingOrOffset, length) {
		  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
		    return new Buffer(arg, encodingOrOffset, length)
		  }
		
		  // Common case.
		  if (typeof arg === 'number') {
		    if (typeof encodingOrOffset === 'string') {
		      throw new Error(
		        'If encoding is specified then the first argument must be a string'
		      )
		    }
		    return allocUnsafe(this, arg)
		  }
		  return from(this, arg, encodingOrOffset, length)
		}
		
		Buffer.poolSize = 8192 // not used by this implementation
		
		// TODO: Legacy, not needed anymore. Remove in next major version.
		Buffer._augment = function (arr) {
		  arr.__proto__ = Buffer.prototype
		  return arr
		}
		
		function from (that, value, encodingOrOffset, length) {
		  if (typeof value === 'number') {
		    throw new TypeError('"value" argument must not be a number')
		  }
		
		  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
		    return fromArrayBuffer(that, value, encodingOrOffset, length)
		  }
		
		  if (typeof value === 'string') {
		    return fromString(that, value, encodingOrOffset)
		  }
		
		  return fromObject(that, value)
		}
		
		/**
		 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
		 * if value is a number.
		 * Buffer.from(str[, encoding])
		 * Buffer.from(array)
		 * Buffer.from(buffer)
		 * Buffer.from(arrayBuffer[, byteOffset[, length]])
		 **/
		Buffer.from = function (value, encodingOrOffset, length) {
		  return from(null, value, encodingOrOffset, length)
		}
		
		if (Buffer.TYPED_ARRAY_SUPPORT) {
		  Buffer.prototype.__proto__ = Uint8Array.prototype
		  Buffer.__proto__ = Uint8Array
		  if (typeof Symbol !== 'undefined' && Symbol.species &&
		      Buffer[Symbol.species] === Buffer) {
		    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
		    Object.defineProperty(Buffer, Symbol.species, {
		      value: null,
		      configurable: true
		    })
		  }
		}
		
		function assertSize (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('"size" argument must be a number')
		  } else if (size < 0) {
		    throw new RangeError('"size" argument must not be negative')
		  }
		}
		
		function alloc (that, size, fill, encoding) {
		  assertSize(size)
		  if (size <= 0) {
		    return createBuffer(that, size)
		  }
		  if (fill !== undefined) {
		    // Only pay attention to encoding if it's a string. This
		    // prevents accidentally sending in a number that would
		    // be interpretted as a start offset.
		    return typeof encoding === 'string'
		      ? createBuffer(that, size).fill(fill, encoding)
		      : createBuffer(that, size).fill(fill)
		  }
		  return createBuffer(that, size)
		}
		
		/**
		 * Creates a new filled Buffer instance.
		 * alloc(size[, fill[, encoding]])
		 **/
		Buffer.alloc = function (size, fill, encoding) {
		  return alloc(null, size, fill, encoding)
		}
		
		function allocUnsafe (that, size) {
		  assertSize(size)
		  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) {
		    for (var i = 0; i < size; ++i) {
		      that[i] = 0
		    }
		  }
		  return that
		}
		
		/**
		 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		 * */
		Buffer.allocUnsafe = function (size) {
		  return allocUnsafe(null, size)
		}
		/**
		 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		 */
		Buffer.allocUnsafeSlow = function (size) {
		  return allocUnsafe(null, size)
		}
		
		function fromString (that, string, encoding) {
		  if (typeof encoding !== 'string' || encoding === '') {
		    encoding = 'utf8'
		  }
		
		  if (!Buffer.isEncoding(encoding)) {
		    throw new TypeError('"encoding" must be a valid string encoding')
		  }
		
		  var length = byteLength(string, encoding) | 0
		  that = createBuffer(that, length)
		
		  var actual = that.write(string, encoding)
		
		  if (actual !== length) {
		    // Writing a hex string, for example, that contains invalid characters will
		    // cause everything after the first invalid character to be ignored. (e.g.
		    // 'abxxcd' will be treated as 'ab')
		    that = that.slice(0, actual)
		  }
		
		  return that
		}
		
		function fromArrayLike (that, array) {
		  var length = array.length < 0 ? 0 : checked(array.length) | 0
		  that = createBuffer(that, length)
		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}
		
		function fromArrayBuffer (that, array, byteOffset, length) {
		  array.byteLength // this throws if `array` is not a valid ArrayBuffer
		
		  if (byteOffset < 0 || array.byteLength < byteOffset) {
		    throw new RangeError('\'offset\' is out of bounds')
		  }
		
		  if (array.byteLength < byteOffset + (length || 0)) {
		    throw new RangeError('\'length\' is out of bounds')
		  }
		
		  if (byteOffset === undefined && length === undefined) {
		    array = new Uint8Array(array)
		  } else if (length === undefined) {
		    array = new Uint8Array(array, byteOffset)
		  } else {
		    array = new Uint8Array(array, byteOffset, length)
		  }
		
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    // Return an augmented `Uint8Array` instance, for best performance
		    that = array
		    that.__proto__ = Buffer.prototype
		  } else {
		    // Fallback: Return an object instance of the Buffer class
		    that = fromArrayLike(that, array)
		  }
		  return that
		}
		
		function fromObject (that, obj) {
		  if (Buffer.isBuffer(obj)) {
		    var len = checked(obj.length) | 0
		    that = createBuffer(that, len)
		
		    if (that.length === 0) {
		      return that
		    }
		
		    obj.copy(that, 0, 0, len)
		    return that
		  }
		
		  if (obj) {
		    if ((typeof ArrayBuffer !== 'undefined' &&
		        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
		      if (typeof obj.length !== 'number' || isnan(obj.length)) {
		        return createBuffer(that, 0)
		      }
		      return fromArrayLike(that, obj)
		    }
		
		    if (obj.type === 'Buffer' && isArray(obj.data)) {
		      return fromArrayLike(that, obj.data)
		    }
		  }
		
		  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
		}
		
		function checked (length) {
		  // Note: cannot use `length < kMaxLength()` here because that fails when
		  // length is NaN (which is otherwise coerced to zero.)
		  if (length >= kMaxLength()) {
		    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
		                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
		  }
		  return length | 0
		}
		
		function SlowBuffer (length) {
		  if (+length != length) { // eslint-disable-line eqeqeq
		    length = 0
		  }
		  return Buffer.alloc(+length)
		}
		
		Buffer.isBuffer = function isBuffer (b) {
		  return !!(b != null && b._isBuffer)
		}
		
		Buffer.compare = function compare (a, b) {
		  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		    throw new TypeError('Arguments must be Buffers')
		  }
		
		  if (a === b) return 0
		
		  var x = a.length
		  var y = b.length
		
		  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
		    if (a[i] !== b[i]) {
		      x = a[i]
		      y = b[i]
		      break
		    }
		  }
		
		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		}
		
		Buffer.isEncoding = function isEncoding (encoding) {
		  switch (String(encoding).toLowerCase()) {
		    case 'hex':
		    case 'utf8':
		    case 'utf-8':
		    case 'ascii':
		    case 'latin1':
		    case 'binary':
		    case 'base64':
		    case 'ucs2':
		    case 'ucs-2':
		    case 'utf16le':
		    case 'utf-16le':
		      return true
		    default:
		      return false
		  }
		}
		
		Buffer.concat = function concat (list, length) {
		  if (!isArray(list)) {
		    throw new TypeError('"list" argument must be an Array of Buffers')
		  }
		
		  if (list.length === 0) {
		    return Buffer.alloc(0)
		  }
		
		  var i
		  if (length === undefined) {
		    length = 0
		    for (i = 0; i < list.length; ++i) {
		      length += list[i].length
		    }
		  }
		
		  var buffer = Buffer.allocUnsafe(length)
		  var pos = 0
		  for (i = 0; i < list.length; ++i) {
		    var buf = list[i]
		    if (!Buffer.isBuffer(buf)) {
		      throw new TypeError('"list" argument must be an Array of Buffers')
		    }
		    buf.copy(buffer, pos)
		    pos += buf.length
		  }
		  return buffer
		}
		
		function byteLength (string, encoding) {
		  if (Buffer.isBuffer(string)) {
		    return string.length
		  }
		  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
		      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
		    return string.byteLength
		  }
		  if (typeof string !== 'string') {
		    string = '' + string
		  }
		
		  var len = string.length
		  if (len === 0) return 0
		
		  // Use a for loop to avoid recursion
		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return len
		      case 'utf8':
		      case 'utf-8':
		      case undefined:
		        return utf8ToBytes(string).length
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return len * 2
		      case 'hex':
		        return len >>> 1
		      case 'base64':
		        return base64ToBytes(string).length
		      default:
		        if (loweredCase) return utf8ToBytes(string).length // assume utf8
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}
		Buffer.byteLength = byteLength
		
		function slowToString (encoding, start, end) {
		  var loweredCase = false
		
		  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
		  // property of a typed array.
		
		  // This behaves neither like String nor Uint8Array in that we set start/end
		  // to their upper/lower bounds if the value passed is out of range.
		  // undefined is handled specially as per ECMA-262 6th Edition,
		  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
		  if (start === undefined || start < 0) {
		    start = 0
		  }
		  // Return early if start > this.length. Done here to prevent potential uint32
		  // coercion fail below.
		  if (start > this.length) {
		    return ''
		  }
		
		  if (end === undefined || end > this.length) {
		    end = this.length
		  }
		
		  if (end <= 0) {
		    return ''
		  }
		
		  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
		  end >>>= 0
		  start >>>= 0
		
		  if (end <= start) {
		    return ''
		  }
		
		  if (!encoding) encoding = 'utf8'
		
		  while (true) {
		    switch (encoding) {
		      case 'hex':
		        return hexSlice(this, start, end)
		
		      case 'utf8':
		      case 'utf-8':
		        return utf8Slice(this, start, end)
		
		      case 'ascii':
		        return asciiSlice(this, start, end)
		
		      case 'latin1':
		      case 'binary':
		        return latin1Slice(this, start, end)
		
		      case 'base64':
		        return base64Slice(this, start, end)
		
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return utf16leSlice(this, start, end)
		
		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = (encoding + '').toLowerCase()
		        loweredCase = true
		    }
		  }
		}
		
		// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
		// Buffer instances.
		Buffer.prototype._isBuffer = true
		
		function swap (b, n, m) {
		  var i = b[n]
		  b[n] = b[m]
		  b[m] = i
		}
		
		Buffer.prototype.swap16 = function swap16 () {
		  var len = this.length
		  if (len % 2 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 16-bits')
		  }
		  for (var i = 0; i < len; i += 2) {
		    swap(this, i, i + 1)
		  }
		  return this
		}
		
		Buffer.prototype.swap32 = function swap32 () {
		  var len = this.length
		  if (len % 4 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 32-bits')
		  }
		  for (var i = 0; i < len; i += 4) {
		    swap(this, i, i + 3)
		    swap(this, i + 1, i + 2)
		  }
		  return this
		}
		
		Buffer.prototype.swap64 = function swap64 () {
		  var len = this.length
		  if (len % 8 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 64-bits')
		  }
		  for (var i = 0; i < len; i += 8) {
		    swap(this, i, i + 7)
		    swap(this, i + 1, i + 6)
		    swap(this, i + 2, i + 5)
		    swap(this, i + 3, i + 4)
		  }
		  return this
		}
		
		Buffer.prototype.toString = function toString () {
		  var length = this.length | 0
		  if (length === 0) return ''
		  if (arguments.length === 0) return utf8Slice(this, 0, length)
		  return slowToString.apply(this, arguments)
		}
		
		Buffer.prototype.equals = function equals (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return true
		  return Buffer.compare(this, b) === 0
		}
		
		Buffer.prototype.inspect = function inspect () {
		  var str = ''
		  var max = exports.INSPECT_MAX_BYTES
		  if (this.length > 0) {
		    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
		    if (this.length > max) str += ' ... '
		  }
		  return '<Buffer ' + str + '>'
		}
		
		Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
		  if (!Buffer.isBuffer(target)) {
		    throw new TypeError('Argument must be a Buffer')
		  }
		
		  if (start === undefined) {
		    start = 0
		  }
		  if (end === undefined) {
		    end = target ? target.length : 0
		  }
		  if (thisStart === undefined) {
		    thisStart = 0
		  }
		  if (thisEnd === undefined) {
		    thisEnd = this.length
		  }
		
		  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
		    throw new RangeError('out of range index')
		  }
		
		  if (thisStart >= thisEnd && start >= end) {
		    return 0
		  }
		  if (thisStart >= thisEnd) {
		    return -1
		  }
		  if (start >= end) {
		    return 1
		  }
		
		  start >>>= 0
		  end >>>= 0
		  thisStart >>>= 0
		  thisEnd >>>= 0
		
		  if (this === target) return 0
		
		  var x = thisEnd - thisStart
		  var y = end - start
		  var len = Math.min(x, y)
		
		  var thisCopy = this.slice(thisStart, thisEnd)
		  var targetCopy = target.slice(start, end)
		
		  for (var i = 0; i < len; ++i) {
		    if (thisCopy[i] !== targetCopy[i]) {
		      x = thisCopy[i]
		      y = targetCopy[i]
		      break
		    }
		  }
		
		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		}
		
		// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
		// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
		//
		// Arguments:
		// - buffer - a Buffer to search
		// - val - a string, Buffer, or number
		// - byteOffset - an index into `buffer`; will be clamped to an int32
		// - encoding - an optional encoding, relevant is val is a string
		// - dir - true for indexOf, false for lastIndexOf
		function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
		  // Empty buffer means no match
		  if (buffer.length === 0) return -1
		
		  // Normalize byteOffset
		  if (typeof byteOffset === 'string') {
		    encoding = byteOffset
		    byteOffset = 0
		  } else if (byteOffset > 0x7fffffff) {
		    byteOffset = 0x7fffffff
		  } else if (byteOffset < -0x80000000) {
		    byteOffset = -0x80000000
		  }
		  byteOffset = +byteOffset  // Coerce to Number.
		  if (isNaN(byteOffset)) {
		    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
		    byteOffset = dir ? 0 : (buffer.length - 1)
		  }
		
		  // Normalize byteOffset: negative offsets start from the end of the buffer
		  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
		  if (byteOffset >= buffer.length) {
		    if (dir) return -1
		    else byteOffset = buffer.length - 1
		  } else if (byteOffset < 0) {
		    if (dir) byteOffset = 0
		    else return -1
		  }
		
		  // Normalize val
		  if (typeof val === 'string') {
		    val = Buffer.from(val, encoding)
		  }
		
		  // Finally, search either indexOf (if dir is true) or lastIndexOf
		  if (Buffer.isBuffer(val)) {
		    // Special case: looking for empty string/buffer always fails
		    if (val.length === 0) {
		      return -1
		    }
		    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
		  } else if (typeof val === 'number') {
		    val = val & 0xFF // Search for a byte value [0-255]
		    if (Buffer.TYPED_ARRAY_SUPPORT &&
		        typeof Uint8Array.prototype.indexOf === 'function') {
		      if (dir) {
		        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
		      } else {
		        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
		      }
		    }
		    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
		  }
		
		  throw new TypeError('val must be string, number or Buffer')
		}
		
		function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
		  var indexSize = 1
		  var arrLength = arr.length
		  var valLength = val.length
		
		  if (encoding !== undefined) {
		    encoding = String(encoding).toLowerCase()
		    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
		        encoding === 'utf16le' || encoding === 'utf-16le') {
		      if (arr.length < 2 || val.length < 2) {
		        return -1
		      }
		      indexSize = 2
		      arrLength /= 2
		      valLength /= 2
		      byteOffset /= 2
		    }
		  }
		
		  function read (buf, i) {
		    if (indexSize === 1) {
		      return buf[i]
		    } else {
		      return buf.readUInt16BE(i * indexSize)
		    }
		  }
		
		  var i
		  if (dir) {
		    var foundIndex = -1
		    for (i = byteOffset; i < arrLength; i++) {
		      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
		        if (foundIndex === -1) foundIndex = i
		        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
		      } else {
		        if (foundIndex !== -1) i -= i - foundIndex
		        foundIndex = -1
		      }
		    }
		  } else {
		    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
		    for (i = byteOffset; i >= 0; i--) {
		      var found = true
		      for (var j = 0; j < valLength; j++) {
		        if (read(arr, i + j) !== read(val, j)) {
		          found = false
		          break
		        }
		      }
		      if (found) return i
		    }
		  }
		
		  return -1
		}
		
		Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
		  return this.indexOf(val, byteOffset, encoding) !== -1
		}
		
		Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
		}
		
		Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
		}
		
		function hexWrite (buf, string, offset, length) {
		  offset = Number(offset) || 0
		  var remaining = buf.length - offset
		  if (!length) {
		    length = remaining
		  } else {
		    length = Number(length)
		    if (length > remaining) {
		      length = remaining
		    }
		  }
		
		  // must be an even number of digits
		  var strLen = string.length
		  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
		
		  if (length > strLen / 2) {
		    length = strLen / 2
		  }
		  for (var i = 0; i < length; ++i) {
		    var parsed = parseInt(string.substr(i * 2, 2), 16)
		    if (isNaN(parsed)) return i
		    buf[offset + i] = parsed
		  }
		  return i
		}
		
		function utf8Write (buf, string, offset, length) {
		  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}
		
		function asciiWrite (buf, string, offset, length) {
		  return blitBuffer(asciiToBytes(string), buf, offset, length)
		}
		
		function latin1Write (buf, string, offset, length) {
		  return asciiWrite(buf, string, offset, length)
		}
		
		function base64Write (buf, string, offset, length) {
		  return blitBuffer(base64ToBytes(string), buf, offset, length)
		}
		
		function ucs2Write (buf, string, offset, length) {
		  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
		}
		
		Buffer.prototype.write = function write (string, offset, length, encoding) {
		  // Buffer#write(string)
		  if (offset === undefined) {
		    encoding = 'utf8'
		    length = this.length
		    offset = 0
		  // Buffer#write(string, encoding)
		  } else if (length === undefined && typeof offset === 'string') {
		    encoding = offset
		    length = this.length
		    offset = 0
		  // Buffer#write(string, offset[, length][, encoding])
		  } else if (isFinite(offset)) {
		    offset = offset | 0
		    if (isFinite(length)) {
		      length = length | 0
		      if (encoding === undefined) encoding = 'utf8'
		    } else {
		      encoding = length
		      length = undefined
		    }
		  // legacy write(string, encoding, offset, length) - remove in v0.13
		  } else {
		    throw new Error(
		      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
		    )
		  }
		
		  var remaining = this.length - offset
		  if (length === undefined || length > remaining) length = remaining
		
		  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		    throw new RangeError('Attempt to write outside buffer bounds')
		  }
		
		  if (!encoding) encoding = 'utf8'
		
		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'hex':
		        return hexWrite(this, string, offset, length)
		
		      case 'utf8':
		      case 'utf-8':
		        return utf8Write(this, string, offset, length)
		
		      case 'ascii':
		        return asciiWrite(this, string, offset, length)
		
		      case 'latin1':
		      case 'binary':
		        return latin1Write(this, string, offset, length)
		
		      case 'base64':
		        // Warning: maxLength not taken into account in base64Write
		        return base64Write(this, string, offset, length)
		
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return ucs2Write(this, string, offset, length)
		
		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}
		
		Buffer.prototype.toJSON = function toJSON () {
		  return {
		    type: 'Buffer',
		    data: Array.prototype.slice.call(this._arr || this, 0)
		  }
		}
		
		function base64Slice (buf, start, end) {
		  if (start === 0 && end === buf.length) {
		    return base64.fromByteArray(buf)
		  } else {
		    return base64.fromByteArray(buf.slice(start, end))
		  }
		}
		
		function utf8Slice (buf, start, end) {
		  end = Math.min(buf.length, end)
		  var res = []
		
		  var i = start
		  while (i < end) {
		    var firstByte = buf[i]
		    var codePoint = null
		    var bytesPerSequence = (firstByte > 0xEF) ? 4
		      : (firstByte > 0xDF) ? 3
		      : (firstByte > 0xBF) ? 2
		      : 1
		
		    if (i + bytesPerSequence <= end) {
		      var secondByte, thirdByte, fourthByte, tempCodePoint
		
		      switch (bytesPerSequence) {
		        case 1:
		          if (firstByte < 0x80) {
		            codePoint = firstByte
		          }
		          break
		        case 2:
		          secondByte = buf[i + 1]
		          if ((secondByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
		            if (tempCodePoint > 0x7F) {
		              codePoint = tempCodePoint
		            }
		          }
		          break
		        case 3:
		          secondByte = buf[i + 1]
		          thirdByte = buf[i + 2]
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
		            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
		              codePoint = tempCodePoint
		            }
		          }
		          break
		        case 4:
		          secondByte = buf[i + 1]
		          thirdByte = buf[i + 2]
		          fourthByte = buf[i + 3]
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
		            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
		              codePoint = tempCodePoint
		            }
		          }
		      }
		    }
		
		    if (codePoint === null) {
		      // we did not generate a valid codePoint so insert a
		      // replacement char (U+FFFD) and advance only 1 byte
		      codePoint = 0xFFFD
		      bytesPerSequence = 1
		    } else if (codePoint > 0xFFFF) {
		      // encode to utf16 (surrogate pair dance)
		      codePoint -= 0x10000
		      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
		      codePoint = 0xDC00 | codePoint & 0x3FF
		    }
		
		    res.push(codePoint)
		    i += bytesPerSequence
		  }
		
		  return decodeCodePointsArray(res)
		}
		
		// Based on http://stackoverflow.com/a/22747272/680742, the browser with
		// the lowest limit is Chrome, with 0x10000 args.
		// We go 1 magnitude less, for safety
		var MAX_ARGUMENTS_LENGTH = 0x1000
		
		function decodeCodePointsArray (codePoints) {
		  var len = codePoints.length
		  if (len <= MAX_ARGUMENTS_LENGTH) {
		    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
		  }
		
		  // Decode in chunks to avoid "call stack size exceeded".
		  var res = ''
		  var i = 0
		  while (i < len) {
		    res += String.fromCharCode.apply(
		      String,
		      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
		    )
		  }
		  return res
		}
		
		function asciiSlice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)
		
		  for (var i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i] & 0x7F)
		  }
		  return ret
		}
		
		function latin1Slice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)
		
		  for (var i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i])
		  }
		  return ret
		}
		
		function hexSlice (buf, start, end) {
		  var len = buf.length
		
		  if (!start || start < 0) start = 0
		  if (!end || end < 0 || end > len) end = len
		
		  var out = ''
		  for (var i = start; i < end; ++i) {
		    out += toHex(buf[i])
		  }
		  return out
		}
		
		function utf16leSlice (buf, start, end) {
		  var bytes = buf.slice(start, end)
		  var res = ''
		  for (var i = 0; i < bytes.length; i += 2) {
		    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
		  }
		  return res
		}
		
		Buffer.prototype.slice = function slice (start, end) {
		  var len = this.length
		  start = ~~start
		  end = end === undefined ? len : ~~end
		
		  if (start < 0) {
		    start += len
		    if (start < 0) start = 0
		  } else if (start > len) {
		    start = len
		  }
		
		  if (end < 0) {
		    end += len
		    if (end < 0) end = 0
		  } else if (end > len) {
		    end = len
		  }
		
		  if (end < start) end = start
		
		  var newBuf
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    newBuf = this.subarray(start, end)
		    newBuf.__proto__ = Buffer.prototype
		  } else {
		    var sliceLen = end - start
		    newBuf = new Buffer(sliceLen, undefined)
		    for (var i = 0; i < sliceLen; ++i) {
		      newBuf[i] = this[i + start]
		    }
		  }
		
		  return newBuf
		}
		
		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset (offset, ext, length) {
		  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
		  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}
		
		Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)
		
		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }
		
		  return val
		}
		
		Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    checkOffset(offset, byteLength, this.length)
		  }
		
		  var val = this[offset + --byteLength]
		  var mul = 1
		  while (byteLength > 0 && (mul *= 0x100)) {
		    val += this[offset + --byteLength] * mul
		  }
		
		  return val
		}
		
		Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  return this[offset]
		}
		
		Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return this[offset] | (this[offset + 1] << 8)
		}
		
		Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return (this[offset] << 8) | this[offset + 1]
		}
		
		Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		
		  return ((this[offset]) |
		      (this[offset + 1] << 8) |
		      (this[offset + 2] << 16)) +
		      (this[offset + 3] * 0x1000000)
		}
		
		Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		
		  return (this[offset] * 0x1000000) +
		    ((this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    this[offset + 3])
		}
		
		Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)
		
		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }
		  mul *= 0x80
		
		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
		
		  return val
		}
		
		Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)
		
		  var i = byteLength
		  var mul = 1
		  var val = this[offset + --i]
		  while (i > 0 && (mul *= 0x100)) {
		    val += this[offset + --i] * mul
		  }
		  mul *= 0x80
		
		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
		
		  return val
		}
		
		Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  if (!(this[offset] & 0x80)) return (this[offset])
		  return ((0xff - this[offset] + 1) * -1)
		}
		
		Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset] | (this[offset + 1] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}
		
		Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset + 1] | (this[offset] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}
		
		Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		
		  return (this[offset]) |
		    (this[offset + 1] << 8) |
		    (this[offset + 2] << 16) |
		    (this[offset + 3] << 24)
		}
		
		Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		
		  return (this[offset] << 24) |
		    (this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    (this[offset + 3])
		}
		
		Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, true, 23, 4)
		}
		
		Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, false, 23, 4)
		}
		
		Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, true, 52, 8)
		}
		
		Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, false, 52, 8)
		}
		
		function checkInt (buf, value, offset, ext, max, min) {
		  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
		  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		}
		
		Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    var maxBytes = Math.pow(2, 8 * byteLength) - 1
		    checkInt(this, value, offset, byteLength, maxBytes, 0)
		  }
		
		  var mul = 1
		  var i = 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }
		
		  return offset + byteLength
		}
		
		Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    var maxBytes = Math.pow(2, 8 * byteLength) - 1
		    checkInt(this, value, offset, byteLength, maxBytes, 0)
		  }
		
		  var i = byteLength - 1
		  var mul = 1
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }
		
		  return offset + byteLength
		}
		
		Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  this[offset] = (value & 0xff)
		  return offset + 1
		}
		
		function objectWriteUInt16 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
		    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
		      (littleEndian ? i : 1 - i) * 8
		  }
		}
		
		Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}
		
		Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = (value & 0xff)
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}
		
		function objectWriteUInt32 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffffffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
		    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
		  }
		}
		
		Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset + 3] = (value >>> 24)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 1] = (value >>> 8)
		    this[offset] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}
		
		Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}
		
		Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)
		
		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }
		
		  var i = 0
		  var mul = 1
		  var sub = 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
		      sub = 1
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }
		
		  return offset + byteLength
		}
		
		Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)
		
		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }
		
		  var i = byteLength - 1
		  var mul = 1
		  var sub = 0
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
		      sub = 1
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }
		
		  return offset + byteLength
		}
		
		Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  if (value < 0) value = 0xff + value + 1
		  this[offset] = (value & 0xff)
		  return offset + 1
		}
		
		Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}
		
		Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = (value & 0xff)
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}
		
		Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 3] = (value >>> 24)
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}
		
		Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (value < 0) value = 0xffffffff + value + 1
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}
		
		function checkIEEE754 (buf, value, offset, ext, max, min) {
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		  if (offset < 0) throw new RangeError('Index out of range')
		}
		
		function writeFloat (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 23, 4)
		  return offset + 4
		}
		
		Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, true, noAssert)
		}
		
		Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, false, noAssert)
		}
		
		function writeDouble (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 52, 8)
		  return offset + 8
		}
		
		Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, true, noAssert)
		}
		
		Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, false, noAssert)
		}
		
		// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy (target, targetStart, start, end) {
		  if (!start) start = 0
		  if (!end && end !== 0) end = this.length
		  if (targetStart >= target.length) targetStart = target.length
		  if (!targetStart) targetStart = 0
		  if (end > 0 && end < start) end = start
		
		  // Copy 0 bytes; we're done
		  if (end === start) return 0
		  if (target.length === 0 || this.length === 0) return 0
		
		  // Fatal error conditions
		  if (targetStart < 0) {
		    throw new RangeError('targetStart out of bounds')
		  }
		  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
		  if (end < 0) throw new RangeError('sourceEnd out of bounds')
		
		  // Are we oob?
		  if (end > this.length) end = this.length
		  if (target.length - targetStart < end - start) {
		    end = target.length - targetStart + start
		  }
		
		  var len = end - start
		  var i
		
		  if (this === target && start < targetStart && targetStart < end) {
		    // descending copy from end
		    for (i = len - 1; i >= 0; --i) {
		      target[i + targetStart] = this[i + start]
		    }
		  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
		    // ascending copy from start
		    for (i = 0; i < len; ++i) {
		      target[i + targetStart] = this[i + start]
		    }
		  } else {
		    Uint8Array.prototype.set.call(
		      target,
		      this.subarray(start, start + len),
		      targetStart
		    )
		  }
		
		  return len
		}
		
		// Usage:
		//    buffer.fill(number[, offset[, end]])
		//    buffer.fill(buffer[, offset[, end]])
		//    buffer.fill(string[, offset[, end]][, encoding])
		Buffer.prototype.fill = function fill (val, start, end, encoding) {
		  // Handle string cases:
		  if (typeof val === 'string') {
		    if (typeof start === 'string') {
		      encoding = start
		      start = 0
		      end = this.length
		    } else if (typeof end === 'string') {
		      encoding = end
		      end = this.length
		    }
		    if (val.length === 1) {
		      var code = val.charCodeAt(0)
		      if (code < 256) {
		        val = code
		      }
		    }
		    if (encoding !== undefined && typeof encoding !== 'string') {
		      throw new TypeError('encoding must be a string')
		    }
		    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
		      throw new TypeError('Unknown encoding: ' + encoding)
		    }
		  } else if (typeof val === 'number') {
		    val = val & 255
		  }
		
		  // Invalid ranges are not set to a default, so can range check early.
		  if (start < 0 || this.length < start || this.length < end) {
		    throw new RangeError('Out of range index')
		  }
		
		  if (end <= start) {
		    return this
		  }
		
		  start = start >>> 0
		  end = end === undefined ? this.length : end >>> 0
		
		  if (!val) val = 0
		
		  var i
		  if (typeof val === 'number') {
		    for (i = start; i < end; ++i) {
		      this[i] = val
		    }
		  } else {
		    var bytes = Buffer.isBuffer(val)
		      ? val
		      : utf8ToBytes(new Buffer(val, encoding).toString())
		    var len = bytes.length
		    for (i = 0; i < end - start; ++i) {
		      this[i + start] = bytes[i % len]
		    }
		  }
		
		  return this
		}
		
		// HELPER FUNCTIONS
		// ================
		
		var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
		
		function base64clean (str) {
		  // Node strips out invalid characters like \n and \t from the string, base64-js does not
		  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
		  // Node converts strings with length < 2 to ''
		  if (str.length < 2) return ''
		  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
		  while (str.length % 4 !== 0) {
		    str = str + '='
		  }
		  return str
		}
		
		function stringtrim (str) {
		  if (str.trim) return str.trim()
		  return str.replace(/^\s+|\s+$/g, '')
		}
		
		function toHex (n) {
		  if (n < 16) return '0' + n.toString(16)
		  return n.toString(16)
		}
		
		function utf8ToBytes (string, units) {
		  units = units || Infinity
		  var codePoint
		  var length = string.length
		  var leadSurrogate = null
		  var bytes = []
		
		  for (var i = 0; i < length; ++i) {
		    codePoint = string.charCodeAt(i)
		
		    // is surrogate component
		    if (codePoint > 0xD7FF && codePoint < 0xE000) {
		      // last char was a lead
		      if (!leadSurrogate) {
		        // no lead yet
		        if (codePoint > 0xDBFF) {
		          // unexpected trail
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        } else if (i + 1 === length) {
		          // unpaired lead
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        }
		
		        // valid lead
		        leadSurrogate = codePoint
		
		        continue
		      }
		
		      // 2 leads in a row
		      if (codePoint < 0xDC00) {
		        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		        leadSurrogate = codePoint
		        continue
		      }
		
		      // valid surrogate pair
		      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
		    } else if (leadSurrogate) {
		      // valid bmp char, but last char was a lead
		      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		    }
		
		    leadSurrogate = null
		
		    // encode utf8
		    if (codePoint < 0x80) {
		      if ((units -= 1) < 0) break
		      bytes.push(codePoint)
		    } else if (codePoint < 0x800) {
		      if ((units -= 2) < 0) break
		      bytes.push(
		        codePoint >> 0x6 | 0xC0,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x10000) {
		      if ((units -= 3) < 0) break
		      bytes.push(
		        codePoint >> 0xC | 0xE0,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x110000) {
		      if ((units -= 4) < 0) break
		      bytes.push(
		        codePoint >> 0x12 | 0xF0,
		        codePoint >> 0xC & 0x3F | 0x80,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else {
		      throw new Error('Invalid code point')
		    }
		  }
		
		  return bytes
		}
		
		function asciiToBytes (str) {
		  var byteArray = []
		  for (var i = 0; i < str.length; ++i) {
		    // Node's code seems to be doing this and not & 0x7F..
		    byteArray.push(str.charCodeAt(i) & 0xFF)
		  }
		  return byteArray
		}
		
		function utf16leToBytes (str, units) {
		  var c, hi, lo
		  var byteArray = []
		  for (var i = 0; i < str.length; ++i) {
		    if ((units -= 2) < 0) break
		
		    c = str.charCodeAt(i)
		    hi = c >> 8
		    lo = c % 256
		    byteArray.push(lo)
		    byteArray.push(hi)
		  }
		
		  return byteArray
		}
		
		function base64ToBytes (str) {
		  return base64.toByteArray(base64clean(str))
		}
		
		function blitBuffer (src, dst, offset, length) {
		  for (var i = 0; i < length; ++i) {
		    if ((i + offset >= dst.length) || (i >= src.length)) break
		    dst[i + offset] = src[i]
		  }
		  return i
		}
		
		function isnan (val) {
		  return val !== val // eslint-disable-line no-self-compare
		}
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer, (function() { return this; }())))

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict'
		
		exports.byteLength = byteLength
		exports.toByteArray = toByteArray
		exports.fromByteArray = fromByteArray
		
		var lookup = []
		var revLookup = []
		var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
		
		var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
		for (var i = 0, len = code.length; i < len; ++i) {
		  lookup[i] = code[i]
		  revLookup[code.charCodeAt(i)] = i
		}
		
		revLookup['-'.charCodeAt(0)] = 62
		revLookup['_'.charCodeAt(0)] = 63
		
		function placeHoldersCount (b64) {
		  var len = b64.length
		  if (len % 4 > 0) {
		    throw new Error('Invalid string. Length must be a multiple of 4')
		  }
		
		  // the number of equal signs (place holders)
		  // if there are two placeholders, than the two characters before it
		  // represent one byte
		  // if there is only one, then the three characters before it represent 2 bytes
		  // this is just a cheap hack to not do indexOf twice
		  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
		}
		
		function byteLength (b64) {
		  // base64 is 4/3 + up to two characters of the original data
		  return b64.length * 3 / 4 - placeHoldersCount(b64)
		}
		
		function toByteArray (b64) {
		  var i, j, l, tmp, placeHolders, arr
		  var len = b64.length
		  placeHolders = placeHoldersCount(b64)
		
		  arr = new Arr(len * 3 / 4 - placeHolders)
		
		  // if there are placeholders, only get up to the last complete 4 chars
		  l = placeHolders > 0 ? len - 4 : len
		
		  var L = 0
		
		  for (i = 0, j = 0; i < l; i += 4, j += 3) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
		    arr[L++] = (tmp >> 16) & 0xFF
		    arr[L++] = (tmp >> 8) & 0xFF
		    arr[L++] = tmp & 0xFF
		  }
		
		  if (placeHolders === 2) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
		    arr[L++] = tmp & 0xFF
		  } else if (placeHolders === 1) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
		    arr[L++] = (tmp >> 8) & 0xFF
		    arr[L++] = tmp & 0xFF
		  }
		
		  return arr
		}
		
		function tripletToBase64 (num) {
		  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
		}
		
		function encodeChunk (uint8, start, end) {
		  var tmp
		  var output = []
		  for (var i = start; i < end; i += 3) {
		    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
		    output.push(tripletToBase64(tmp))
		  }
		  return output.join('')
		}
		
		function fromByteArray (uint8) {
		  var tmp
		  var len = uint8.length
		  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
		  var output = ''
		  var parts = []
		  var maxChunkLength = 16383 // must be multiple of 3
		
		  // go through the array every three bytes, we'll deal with trailing stuff later
		  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
		    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
		  }
		
		  // pad the end with zeros, but make sure to not forget the extra bytes
		  if (extraBytes === 1) {
		    tmp = uint8[len - 1]
		    output += lookup[tmp >> 2]
		    output += lookup[(tmp << 4) & 0x3F]
		    output += '=='
		  } else if (extraBytes === 2) {
		    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
		    output += lookup[tmp >> 10]
		    output += lookup[(tmp >> 4) & 0x3F]
		    output += lookup[(tmp << 2) & 0x3F]
		    output += '='
		  }
		
		  parts.push(output)
		
		  return parts.join('')
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		exports.read = function (buffer, offset, isLE, mLen, nBytes) {
		  var e, m
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var nBits = -7
		  var i = isLE ? (nBytes - 1) : 0
		  var d = isLE ? -1 : 1
		  var s = buffer[offset + i]
		
		  i += d
		
		  e = s & ((1 << (-nBits)) - 1)
		  s >>= (-nBits)
		  nBits += eLen
		  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
		
		  m = e & ((1 << (-nBits)) - 1)
		  e >>= (-nBits)
		  nBits += mLen
		  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
		
		  if (e === 0) {
		    e = 1 - eBias
		  } else if (e === eMax) {
		    return m ? NaN : ((s ? -1 : 1) * Infinity)
		  } else {
		    m = m + Math.pow(2, mLen)
		    e = e - eBias
		  }
		  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
		}
		
		exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
		  var e, m, c
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
		  var i = isLE ? 0 : (nBytes - 1)
		  var d = isLE ? 1 : -1
		  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
		
		  value = Math.abs(value)
		
		  if (isNaN(value) || value === Infinity) {
		    m = isNaN(value) ? 1 : 0
		    e = eMax
		  } else {
		    e = Math.floor(Math.log(value) / Math.LN2)
		    if (value * (c = Math.pow(2, -e)) < 1) {
		      e--
		      c *= 2
		    }
		    if (e + eBias >= 1) {
		      value += rt / c
		    } else {
		      value += rt * Math.pow(2, 1 - eBias)
		    }
		    if (value * c >= 2) {
		      e++
		      c /= 2
		    }
		
		    if (e + eBias >= eMax) {
		      m = 0
		      e = eMax
		    } else if (e + eBias >= 1) {
		      m = (value * c - 1) * Math.pow(2, mLen)
		      e = e + eBias
		    } else {
		      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
		      e = 0
		    }
		  }
		
		  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
		
		  e = (e << mLen) | m
		  eLen += mLen
		  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
		
		  buffer[offset + i - d] |= s * 128
		}


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		var toString = {}.toString;
		
		module.exports = Array.isArray || function (arr) {
		  return toString.call(arr) == '[object Array]';
		};


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
		  var g = ('undefined' === typeof window ? global : window) || {}
		  _crypto = (
		    g.crypto || g.msCrypto || __webpack_require__(10)
		  )
		  module.exports = function(size) {
		    // Modern Browsers
		    if(_crypto.getRandomValues) {
		      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
		      /* This will not work in older browsers.
		       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
		       */
		    
		      _crypto.getRandomValues(bytes);
		      return bytes;
		    }
		    else if (_crypto.randomBytes) {
		      return _crypto.randomBytes(size)
		    }
		    else
		      throw new Error(
		        'secure random number generation not supported by this browser\n'+
		        'use chrome, FireFox or Internet Explorer 11'
		      )
		  }
		}())
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5).Buffer))

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		/* (ignored) */

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(12)
		
		var md5 = toConstructor(__webpack_require__(20))
		var rmd160 = toConstructor(__webpack_require__(22))
		
		function toConstructor (fn) {
		  return function () {
		    var buffers = []
		    var m= {
		      update: function (data, enc) {
		        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
		        buffers.push(data)
		        return this
		      },
		      digest: function (enc) {
		        var buf = Buffer.concat(buffers)
		        var r = fn(buf)
		        buffers = null
		        return enc ? r.toString(enc) : r
		      }
		    }
		    return m
		  }
		}
		
		module.exports = function (alg) {
		  if('md5' === alg) return new md5()
		  if('rmd160' === alg) return new rmd160()
		  return createHash(alg)
		}
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var exports = module.exports = function (alg) {
		  var Alg = exports[alg]
		  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
		  return new Alg()
		}
		
		var Buffer = __webpack_require__(5).Buffer
		var Hash   = __webpack_require__(13)(Buffer)
		
		exports.sha1 = __webpack_require__(14)(Buffer, Hash)
		exports.sha256 = __webpack_require__(18)(Buffer, Hash)
		exports.sha512 = __webpack_require__(19)(Buffer, Hash)


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		module.exports = function (Buffer) {
		
		  //prototype class for hash functions
		  function Hash (blockSize, finalSize) {
		    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
		    this._finalSize = finalSize
		    this._blockSize = blockSize
		    this._len = 0
		    this._s = 0
		  }
		
		  Hash.prototype.init = function () {
		    this._s = 0
		    this._len = 0
		  }
		
		  Hash.prototype.update = function (data, enc) {
		    if ("string" === typeof data) {
		      enc = enc || "utf8"
		      data = new Buffer(data, enc)
		    }
		
		    var l = this._len += data.length
		    var s = this._s = (this._s || 0)
		    var f = 0
		    var buffer = this._block
		
		    while (s < l) {
		      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
		      var ch = (t - f)
		
		      for (var i = 0; i < ch; i++) {
		        buffer[(s % this._blockSize) + i] = data[i + f]
		      }
		
		      s += ch
		      f += ch
		
		      if ((s % this._blockSize) === 0) {
		        this._update(buffer)
		      }
		    }
		    this._s = s
		
		    return this
		  }
		
		  Hash.prototype.digest = function (enc) {
		    // Suppose the length of the message M, in bits, is l
		    var l = this._len * 8
		
		    // Append the bit 1 to the end of the message
		    this._block[this._len % this._blockSize] = 0x80
		
		    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
		    this._block.fill(0, this._len % this._blockSize + 1)
		
		    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
		      this._update(this._block)
		      this._block.fill(0)
		    }
		
		    // to this append the block which is equal to the number l written in binary
		    // TODO: handle case where l is > Math.pow(2, 29)
		    this._block.writeInt32BE(l, this._blockSize - 4)
		
		    var hash = this._update(this._block) || this._hash()
		
		    return enc ? hash.toString(enc) : hash
		  }
		
		  Hash.prototype._update = function () {
		    throw new Error('_update must be implemented by subclass')
		  }
		
		  return Hash
		}


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
		 * in FIPS PUB 180-1
		 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
		 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
		 * Distributed under the BSD License
		 * See http://pajhome.org.uk/crypt/md5 for details.
		 */
		
		var inherits = __webpack_require__(15).inherits
		
		module.exports = function (Buffer, Hash) {
		
		  var A = 0|0
		  var B = 4|0
		  var C = 8|0
		  var D = 12|0
		  var E = 16|0
		
		  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)
		
		  var POOL = []
		
		  function Sha1 () {
		    if(POOL.length)
		      return POOL.pop().init()
		
		    if(!(this instanceof Sha1)) return new Sha1()
		    this._w = W
		    Hash.call(this, 16*4, 14*4)
		
		    this._h = null
		    this.init()
		  }
		
		  inherits(Sha1, Hash)
		
		  Sha1.prototype.init = function () {
		    this._a = 0x67452301
		    this._b = 0xefcdab89
		    this._c = 0x98badcfe
		    this._d = 0x10325476
		    this._e = 0xc3d2e1f0
		
		    Hash.prototype.init.call(this)
		    return this
		  }
		
		  Sha1.prototype._POOL = POOL
		  Sha1.prototype._update = function (X) {
		
		    var a, b, c, d, e, _a, _b, _c, _d, _e
		
		    a = _a = this._a
		    b = _b = this._b
		    c = _c = this._c
		    d = _d = this._d
		    e = _e = this._e
		
		    var w = this._w
		
		    for(var j = 0; j < 80; j++) {
		      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
		        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)
		
		      var t = add(
		        add(rol(a, 5), sha1_ft(j, b, c, d)),
		        add(add(e, W), sha1_kt(j))
		      )
		
		      e = d
		      d = c
		      c = rol(b, 30)
		      b = a
		      a = t
		    }
		
		    this._a = add(a, _a)
		    this._b = add(b, _b)
		    this._c = add(c, _c)
		    this._d = add(d, _d)
		    this._e = add(e, _e)
		  }
		
		  Sha1.prototype._hash = function () {
		    if(POOL.length < 100) POOL.push(this)
		    var H = new Buffer(20)
		    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
		    H.writeInt32BE(this._a|0, A)
		    H.writeInt32BE(this._b|0, B)
		    H.writeInt32BE(this._c|0, C)
		    H.writeInt32BE(this._d|0, D)
		    H.writeInt32BE(this._e|0, E)
		    return H
		  }
		
		  /*
		   * Perform the appropriate triplet combination function for the current
		   * iteration
		   */
		  function sha1_ft(t, b, c, d) {
		    if(t < 20) return (b & c) | ((~b) & d);
		    if(t < 40) return b ^ c ^ d;
		    if(t < 60) return (b & c) | (b & d) | (c & d);
		    return b ^ c ^ d;
		  }
		
		  /*
		   * Determine the appropriate additive constant for the current iteration
		   */
		  function sha1_kt(t) {
		    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
		           (t < 60) ? -1894007588 : -899497514;
		  }
		
		  /*
		   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
		   * to work around bugs in some JS interpreters.
		   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
		   *
		   */
		  function add(x, y) {
		    return (x + y ) | 0
		  //lets see how this goes on testling.
		  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		  //  return (msw << 16) | (lsw & 0xFFFF);
		  }
		
		  /*
		   * Bitwise rotate a 32-bit number to the left.
		   */
		  function rol(num, cnt) {
		    return (num << cnt) | (num >>> (32 - cnt));
		  }
		
		  return Sha1
		}


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.
		
		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }
		
		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};
		
		
		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  // Allow for deprecating things in the process of starting up.
		  if (isUndefined(global.process)) {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }
		
		  if (process.noDeprecation === true) {
		    return fn;
		  }
		
		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }
		
		  return deprecated;
		};
		
		
		var debugs = {};
		var debugEnviron;
		exports.debuglog = function(set) {
		  if (isUndefined(debugEnviron))
		    debugEnviron = process.env.NODE_DEBUG || '';
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};
		
		
		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;
		
		
		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};
		
		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};
		
		
		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];
		
		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}
		
		
		function stylizeNoColor(str, styleType) {
		  return str;
		}
		
		
		function arrayToHash(array) {
		  var hash = {};
		
		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });
		
		  return hash;
		}
		
		
		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }
		
		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }
		
		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);
		
		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }
		
		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }
		
		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }
		
		  var base = '', array = false, braces = ['{', '}'];
		
		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }
		
		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }
		
		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }
		
		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }
		
		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }
		
		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }
		
		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }
		
		  ctx.seen.push(value);
		
		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }
		
		  ctx.seen.pop();
		
		  return reduceToSingleString(output, base, braces);
		}
		
		
		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}
		
		
		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}
		
		
		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}
		
		
		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }
		
		  return name + ': ' + str;
		}
		
		
		function reduceToSingleString(output, base, braces) {
		  var numLinesEst = 0;
		  var length = output.reduce(function(prev, cur) {
		    numLinesEst++;
		    if (cur.indexOf('\n') >= 0) numLinesEst++;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);
		
		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }
		
		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}
		
		
		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;
		
		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;
		
		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;
		
		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;
		
		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;
		
		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;
		
		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;
		
		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;
		
		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;
		
		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;
		
		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;
		
		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;
		
		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;
		
		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;
		
		exports.isBuffer = __webpack_require__(16);
		
		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}
		
		
		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}
		
		
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];
		
		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}
		
		
		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};
		
		
		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = __webpack_require__(17);
		
		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;
		
		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};
		
		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		module.exports = function isBuffer(arg) {
		  return arg && typeof arg === 'object'
		    && typeof arg.copy === 'function'
		    && typeof arg.fill === 'function'
		    && typeof arg.readUInt8 === 'function';
		}

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		
		/**
		 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
		 * in FIPS 180-2
		 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
		 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
		 *
		 */
		
		var inherits = __webpack_require__(15).inherits
		
		module.exports = function (Buffer, Hash) {
		
		  var K = [
		      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
		      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
		      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
		      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
		      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
		      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
		      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
		      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
		      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
		      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
		      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
		      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
		      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
		      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
		      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
		      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
		    ]
		
		  var W = new Array(64)
		
		  function Sha256() {
		    this.init()
		
		    this._w = W //new Array(64)
		
		    Hash.call(this, 16*4, 14*4)
		  }
		
		  inherits(Sha256, Hash)
		
		  Sha256.prototype.init = function () {
		
		    this._a = 0x6a09e667|0
		    this._b = 0xbb67ae85|0
		    this._c = 0x3c6ef372|0
		    this._d = 0xa54ff53a|0
		    this._e = 0x510e527f|0
		    this._f = 0x9b05688c|0
		    this._g = 0x1f83d9ab|0
		    this._h = 0x5be0cd19|0
		
		    this._len = this._s = 0
		
		    return this
		  }
		
		  function S (X, n) {
		    return (X >>> n) | (X << (32 - n));
		  }
		
		  function R (X, n) {
		    return (X >>> n);
		  }
		
		  function Ch (x, y, z) {
		    return ((x & y) ^ ((~x) & z));
		  }
		
		  function Maj (x, y, z) {
		    return ((x & y) ^ (x & z) ^ (y & z));
		  }
		
		  function Sigma0256 (x) {
		    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
		  }
		
		  function Sigma1256 (x) {
		    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
		  }
		
		  function Gamma0256 (x) {
		    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
		  }
		
		  function Gamma1256 (x) {
		    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
		  }
		
		  Sha256.prototype._update = function(M) {
		
		    var W = this._w
		    var a, b, c, d, e, f, g, h
		    var T1, T2
		
		    a = this._a | 0
		    b = this._b | 0
		    c = this._c | 0
		    d = this._d | 0
		    e = this._e | 0
		    f = this._f | 0
		    g = this._g | 0
		    h = this._h | 0
		
		    for (var j = 0; j < 64; j++) {
		      var w = W[j] = j < 16
		        ? M.readInt32BE(j * 4)
		        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]
		
		      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w
		
		      T2 = Sigma0256(a) + Maj(a, b, c);
		      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
		    }
		
		    this._a = (a + this._a) | 0
		    this._b = (b + this._b) | 0
		    this._c = (c + this._c) | 0
		    this._d = (d + this._d) | 0
		    this._e = (e + this._e) | 0
		    this._f = (f + this._f) | 0
		    this._g = (g + this._g) | 0
		    this._h = (h + this._h) | 0
		
		  };
		
		  Sha256.prototype._hash = function () {
		    var H = new Buffer(32)
		
		    H.writeInt32BE(this._a,  0)
		    H.writeInt32BE(this._b,  4)
		    H.writeInt32BE(this._c,  8)
		    H.writeInt32BE(this._d, 12)
		    H.writeInt32BE(this._e, 16)
		    H.writeInt32BE(this._f, 20)
		    H.writeInt32BE(this._g, 24)
		    H.writeInt32BE(this._h, 28)
		
		    return H
		  }
		
		  return Sha256
		
		}


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var inherits = __webpack_require__(15).inherits
		
		module.exports = function (Buffer, Hash) {
		  var K = [
		    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
		    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
		    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
		    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
		    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
		    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
		    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
		    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
		    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
		    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
		    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
		    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
		    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
		    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
		    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
		    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
		    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
		    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
		    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
		    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
		    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
		    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
		    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
		    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
		    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
		    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
		    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
		    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
		    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
		    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
		    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
		    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
		    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
		    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
		    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
		    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
		    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
		    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
		    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
		    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
		  ]
		
		  var W = new Array(160)
		
		  function Sha512() {
		    this.init()
		    this._w = W
		
		    Hash.call(this, 128, 112)
		  }
		
		  inherits(Sha512, Hash)
		
		  Sha512.prototype.init = function () {
		
		    this._a = 0x6a09e667|0
		    this._b = 0xbb67ae85|0
		    this._c = 0x3c6ef372|0
		    this._d = 0xa54ff53a|0
		    this._e = 0x510e527f|0
		    this._f = 0x9b05688c|0
		    this._g = 0x1f83d9ab|0
		    this._h = 0x5be0cd19|0
		
		    this._al = 0xf3bcc908|0
		    this._bl = 0x84caa73b|0
		    this._cl = 0xfe94f82b|0
		    this._dl = 0x5f1d36f1|0
		    this._el = 0xade682d1|0
		    this._fl = 0x2b3e6c1f|0
		    this._gl = 0xfb41bd6b|0
		    this._hl = 0x137e2179|0
		
		    this._len = this._s = 0
		
		    return this
		  }
		
		  function S (X, Xl, n) {
		    return (X >>> n) | (Xl << (32 - n))
		  }
		
		  function Ch (x, y, z) {
		    return ((x & y) ^ ((~x) & z));
		  }
		
		  function Maj (x, y, z) {
		    return ((x & y) ^ (x & z) ^ (y & z));
		  }
		
		  Sha512.prototype._update = function(M) {
		
		    var W = this._w
		    var a, b, c, d, e, f, g, h
		    var al, bl, cl, dl, el, fl, gl, hl
		
		    a = this._a | 0
		    b = this._b | 0
		    c = this._c | 0
		    d = this._d | 0
		    e = this._e | 0
		    f = this._f | 0
		    g = this._g | 0
		    h = this._h | 0
		
		    al = this._al | 0
		    bl = this._bl | 0
		    cl = this._cl | 0
		    dl = this._dl | 0
		    el = this._el | 0
		    fl = this._fl | 0
		    gl = this._gl | 0
		    hl = this._hl | 0
		
		    for (var i = 0; i < 80; i++) {
		      var j = i * 2
		
		      var Wi, Wil
		
		      if (i < 16) {
		        Wi = W[j] = M.readInt32BE(j * 4)
		        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)
		
		      } else {
		        var x  = W[j - 15*2]
		        var xl = W[j - 15*2 + 1]
		        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
		        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)
		
		        x  = W[j - 2*2]
		        xl = W[j - 2*2 + 1]
		        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
		        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)
		
		        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
		        var Wi7  = W[j - 7*2]
		        var Wi7l = W[j - 7*2 + 1]
		
		        var Wi16  = W[j - 16*2]
		        var Wi16l = W[j - 16*2 + 1]
		
		        Wil = gamma0l + Wi7l
		        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
		        Wil = Wil + gamma1l
		        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
		        Wil = Wil + Wi16l
		        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
		
		        W[j] = Wi
		        W[j + 1] = Wil
		      }
		
		      var maj = Maj(a, b, c)
		      var majl = Maj(al, bl, cl)
		
		      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
		      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
		      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
		      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)
		
		      // t1 = h + sigma1 + ch + K[i] + W[i]
		      var Ki = K[j]
		      var Kil = K[j + 1]
		
		      var ch = Ch(e, f, g)
		      var chl = Ch(el, fl, gl)
		
		      var t1l = hl + sigma1l
		      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
		      t1l = t1l + chl
		      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
		      t1l = t1l + Kil
		      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
		      t1l = t1l + Wil
		      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)
		
		      // t2 = sigma0 + maj
		      var t2l = sigma0l + majl
		      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)
		
		      h  = g
		      hl = gl
		      g  = f
		      gl = fl
		      f  = e
		      fl = el
		      el = (dl + t1l) | 0
		      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
		      d  = c
		      dl = cl
		      c  = b
		      cl = bl
		      b  = a
		      bl = al
		      al = (t1l + t2l) | 0
		      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
		    }
		
		    this._al = (this._al + al) | 0
		    this._bl = (this._bl + bl) | 0
		    this._cl = (this._cl + cl) | 0
		    this._dl = (this._dl + dl) | 0
		    this._el = (this._el + el) | 0
		    this._fl = (this._fl + fl) | 0
		    this._gl = (this._gl + gl) | 0
		    this._hl = (this._hl + hl) | 0
		
		    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
		    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
		    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
		    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
		    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
		    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
		    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
		    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
		  }
		
		  Sha512.prototype._hash = function () {
		    var H = new Buffer(64)
		
		    function writeInt64BE(h, l, offset) {
		      H.writeInt32BE(h, offset)
		      H.writeInt32BE(l, offset + 4)
		    }
		
		    writeInt64BE(this._a, this._al, 0)
		    writeInt64BE(this._b, this._bl, 8)
		    writeInt64BE(this._c, this._cl, 16)
		    writeInt64BE(this._d, this._dl, 24)
		    writeInt64BE(this._e, this._el, 32)
		    writeInt64BE(this._f, this._fl, 40)
		    writeInt64BE(this._g, this._gl, 48)
		    writeInt64BE(this._h, this._hl, 56)
		
		    return H
		  }
		
		  return Sha512
		
		}


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
		 * Digest Algorithm, as defined in RFC 1321.
		 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
		 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
		 * Distributed under the BSD License
		 * See http://pajhome.org.uk/crypt/md5 for more info.
		 */
		
		var helpers = __webpack_require__(21);
		
		/*
		 * Calculate the MD5 of an array of little-endian words, and a bit length
		 */
		function core_md5(x, len)
		{
		  /* append padding */
		  x[len >> 5] |= 0x80 << ((len) % 32);
		  x[(((len + 64) >>> 9) << 4) + 14] = len;
		
		  var a =  1732584193;
		  var b = -271733879;
		  var c = -1732584194;
		  var d =  271733878;
		
		  for(var i = 0; i < x.length; i += 16)
		  {
		    var olda = a;
		    var oldb = b;
		    var oldc = c;
		    var oldd = d;
		
		    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
		    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
		    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
		    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
		    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
		    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
		    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
		    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
		    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
		    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
		    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
		    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
		    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
		    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
		    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
		    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
		
		    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
		    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
		    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
		    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
		    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
		    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
		    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
		    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
		    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
		    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
		    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
		    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
		    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
		    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
		    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
		    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
		
		    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
		    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
		    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
		    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
		    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
		    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
		    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
		    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
		    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
		    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
		    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
		    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
		    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
		    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
		    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
		    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
		
		    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
		    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
		    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
		    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
		    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
		    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
		    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
		    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
		    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
		    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
		    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
		    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
		    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
		    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
		    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
		    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
		
		    a = safe_add(a, olda);
		    b = safe_add(b, oldb);
		    c = safe_add(c, oldc);
		    d = safe_add(d, oldd);
		  }
		  return Array(a, b, c, d);
		
		}
		
		/*
		 * These functions implement the four basic operations the algorithm uses.
		 */
		function md5_cmn(q, a, b, x, s, t)
		{
		  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
		}
		function md5_ff(a, b, c, d, x, s, t)
		{
		  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
		}
		function md5_gg(a, b, c, d, x, s, t)
		{
		  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
		}
		function md5_hh(a, b, c, d, x, s, t)
		{
		  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
		}
		function md5_ii(a, b, c, d, x, s, t)
		{
		  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
		}
		
		/*
		 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
		 * to work around bugs in some JS interpreters.
		 */
		function safe_add(x, y)
		{
		  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		  return (msw << 16) | (lsw & 0xFFFF);
		}
		
		/*
		 * Bitwise rotate a 32-bit number to the left.
		 */
		function bit_rol(num, cnt)
		{
		  return (num << cnt) | (num >>> (32 - cnt));
		}
		
		module.exports = function md5(buf) {
		  return helpers.hash(buf, core_md5, 16);
		};


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
		var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
		var chrsz = 8;
		
		function toArray(buf, bigEndian) {
		  if ((buf.length % intSize) !== 0) {
		    var len = buf.length + (intSize - (buf.length % intSize));
		    buf = Buffer.concat([buf, zeroBuffer], len);
		  }
		
		  var arr = [];
		  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
		  for (var i = 0; i < buf.length; i += intSize) {
		    arr.push(fn.call(buf, i));
		  }
		  return arr;
		}
		
		function toBuffer(arr, size, bigEndian) {
		  var buf = new Buffer(size);
		  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
		  for (var i = 0; i < arr.length; i++) {
		    fn.call(buf, arr[i], i * 4, true);
		  }
		  return buf;
		}
		
		function hash(buf, fn, hashSize, bigEndian) {
		  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
		  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
		  return toBuffer(arr, hashSize, bigEndian);
		}
		
		module.exports = { hash: hash };
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {
		module.exports = ripemd160
		
		
		
		/*
		CryptoJS v3.1.2
		code.google.com/p/crypto-js
		(c) 2009-2013 by Jeff Mott. All rights reserved.
		code.google.com/p/crypto-js/wiki/License
		*/
		/** @preserve
		(c) 2012 by Cédric Mesnil. All rights reserved.
		
		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
		
		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
		
		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/
		
		// Constants table
		var zl = [
		    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
		    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
		    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
		    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
		    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
		var zr = [
		    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
		    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
		    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
		    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
		    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
		var sl = [
		     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
		    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
		    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
		      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
		    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
		var sr = [
		    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
		    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
		    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
		    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
		    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];
		
		var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
		var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];
		
		var bytesToWords = function (bytes) {
		  var words = [];
		  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
		    words[b >>> 5] |= bytes[i] << (24 - b % 32);
		  }
		  return words;
		};
		
		var wordsToBytes = function (words) {
		  var bytes = [];
		  for (var b = 0; b < words.length * 32; b += 8) {
		    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
		  }
		  return bytes;
		};
		
		var processBlock = function (H, M, offset) {
		
		  // Swap endian
		  for (var i = 0; i < 16; i++) {
		    var offset_i = offset + i;
		    var M_offset_i = M[offset_i];
		
		    // Swap
		    M[offset_i] = (
		        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		    );
		  }
		
		  // Working variables
		  var al, bl, cl, dl, el;
		  var ar, br, cr, dr, er;
		
		  ar = al = H[0];
		  br = bl = H[1];
		  cr = cl = H[2];
		  dr = dl = H[3];
		  er = el = H[4];
		  // Computation
		  var t;
		  for (var i = 0; i < 80; i += 1) {
		    t = (al +  M[offset+zl[i]])|0;
		    if (i<16){
		        t +=  f1(bl,cl,dl) + hl[0];
		    } else if (i<32) {
		        t +=  f2(bl,cl,dl) + hl[1];
		    } else if (i<48) {
		        t +=  f3(bl,cl,dl) + hl[2];
		    } else if (i<64) {
		        t +=  f4(bl,cl,dl) + hl[3];
		    } else {// if (i<80) {
		        t +=  f5(bl,cl,dl) + hl[4];
		    }
		    t = t|0;
		    t =  rotl(t,sl[i]);
		    t = (t+el)|0;
		    al = el;
		    el = dl;
		    dl = rotl(cl, 10);
		    cl = bl;
		    bl = t;
		
		    t = (ar + M[offset+zr[i]])|0;
		    if (i<16){
		        t +=  f5(br,cr,dr) + hr[0];
		    } else if (i<32) {
		        t +=  f4(br,cr,dr) + hr[1];
		    } else if (i<48) {
		        t +=  f3(br,cr,dr) + hr[2];
		    } else if (i<64) {
		        t +=  f2(br,cr,dr) + hr[3];
		    } else {// if (i<80) {
		        t +=  f1(br,cr,dr) + hr[4];
		    }
		    t = t|0;
		    t =  rotl(t,sr[i]) ;
		    t = (t+er)|0;
		    ar = er;
		    er = dr;
		    dr = rotl(cr, 10);
		    cr = br;
		    br = t;
		  }
		  // Intermediate hash value
		  t    = (H[1] + cl + dr)|0;
		  H[1] = (H[2] + dl + er)|0;
		  H[2] = (H[3] + el + ar)|0;
		  H[3] = (H[4] + al + br)|0;
		  H[4] = (H[0] + bl + cr)|0;
		  H[0] =  t;
		};
		
		function f1(x, y, z) {
		  return ((x) ^ (y) ^ (z));
		}
		
		function f2(x, y, z) {
		  return (((x)&(y)) | ((~x)&(z)));
		}
		
		function f3(x, y, z) {
		  return (((x) | (~(y))) ^ (z));
		}
		
		function f4(x, y, z) {
		  return (((x) & (z)) | ((y)&(~(z))));
		}
		
		function f5(x, y, z) {
		  return ((x) ^ ((y) |(~(z))));
		}
		
		function rotl(x,n) {
		  return (x<<n) | (x>>>(32-n));
		}
		
		function ripemd160(message) {
		  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
		
		  if (typeof message == 'string')
		    message = new Buffer(message, 'utf8');
		
		  var m = bytesToWords(message);
		
		  var nBitsLeft = message.length * 8;
		  var nBitsTotal = message.length * 8;
		
		  // Add padding
		  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
		      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
		  );
		
		  for (var i=0 ; i<m.length; i += 16) {
		    processBlock(H, m, i);
		  }
		
		  // Swap endian
		  for (var i = 0; i < 5; i++) {
		      // Shortcut
		    var H_i = H[i];
		
		    // Swap
		    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		  }
		
		  var digestbytes = wordsToBytes(H);
		  return new Buffer(digestbytes);
		}
		
		
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(11)
		
		var zeroBuffer = new Buffer(128)
		zeroBuffer.fill(0)
		
		module.exports = Hmac
		
		function Hmac (alg, key) {
		  if(!(this instanceof Hmac)) return new Hmac(alg, key)
		  this._opad = opad
		  this._alg = alg
		
		  var blocksize = (alg === 'sha512') ? 128 : 64
		
		  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key
		
		  if(key.length > blocksize) {
		    key = createHash(alg).update(key).digest()
		  } else if(key.length < blocksize) {
		    key = Buffer.concat([key, zeroBuffer], blocksize)
		  }
		
		  var ipad = this._ipad = new Buffer(blocksize)
		  var opad = this._opad = new Buffer(blocksize)
		
		  for(var i = 0; i < blocksize; i++) {
		    ipad[i] = key[i] ^ 0x36
		    opad[i] = key[i] ^ 0x5C
		  }
		
		  this._hash = createHash(alg).update(ipad)
		}
		
		Hmac.prototype.update = function (data, enc) {
		  this._hash.update(data, enc)
		  return this
		}
		
		Hmac.prototype.digest = function (enc) {
		  var h = this._hash.digest()
		  return createHash(this._alg).update(this._opad).update(h).digest(enc)
		}
		
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var pbkdf2Export = __webpack_require__(25)
		
		module.exports = function (crypto, exports) {
		  exports = exports || {}
		
		  var exported = pbkdf2Export(crypto)
		
		  exports.pbkdf2 = exported.pbkdf2
		  exports.pbkdf2Sync = exported.pbkdf2Sync
		
		  return exports
		}


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
		  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
		    if ('function' === typeof digest) {
		      callback = digest
		      digest = undefined
		    }
		
		    if ('function' !== typeof callback)
		      throw new Error('No callback provided to pbkdf2')
		
		    setTimeout(function() {
		      var result
		
		      try {
		        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
		      } catch (e) {
		        return callback(e)
		      }
		
		      callback(undefined, result)
		    })
		  }
		
		  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
		    if ('number' !== typeof iterations)
		      throw new TypeError('Iterations not a number')
		
		    if (iterations < 0)
		      throw new TypeError('Bad iterations')
		
		    if ('number' !== typeof keylen)
		      throw new TypeError('Key length not a number')
		
		    if (keylen < 0)
		      throw new TypeError('Bad key length')
		
		    digest = digest || 'sha1'
		
		    if (!Buffer.isBuffer(password)) password = new Buffer(password)
		    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)
		
		    var hLen, l = 1, r, T
		    var DK = new Buffer(keylen)
		    var block1 = new Buffer(salt.length + 4)
		    salt.copy(block1, 0, 0, salt.length)
		
		    for (var i = 1; i <= l; i++) {
		      block1.writeUInt32BE(i, salt.length)
		
		      var U = crypto.createHmac(digest, password).update(block1).digest()
		
		      if (!hLen) {
		        hLen = U.length
		        T = new Buffer(hLen)
		        l = Math.ceil(keylen / hLen)
		        r = keylen - (l - 1) * hLen
		
		        if (keylen > (Math.pow(2, 32) - 1) * hLen)
		          throw new TypeError('keylen exceeds maximum length')
		      }
		
		      U.copy(T, 0, 0, hLen)
		
		      for (var j = 1; j < iterations; j++) {
		        U = crypto.createHmac(digest, password).update(U).digest()
		
		        for (var k = 0; k < hLen; k++) {
		          T[k] ^= U[k]
		        }
		      }
		
		      var destPos = (i - 1) * hLen
		      var len = (i == l ? r : hLen)
		      T.copy(DK, destPos, 0, len)
		    }
		
		    return DK
		  }
		
		  return {
		    pbkdf2: pbkdf2,
		    pbkdf2Sync: pbkdf2Sync
		  }
		}
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	!function(M,N){if(true)module.exports=N(__webpack_require__(1));else if("function"==typeof define&&define.amd)define(["remotestoragejs"],N);else{var D=N("object"==typeof exports?require("remotestoragejs"):M.RemoteStorage);for(var j in D)("object"==typeof exports?exports:M)[j]=D[j]}}(this,function(M){return function(M){function N(j){if(D[j])return D[j].exports;var L=D[j]={exports:{},id:j,loaded:!1};return M[j].call(L.exports,L,L.exports,N),L.loaded=!0,L.exports}var D={};return N.m=M,N.c=D,N.p="",N(0)}([function(M,N,D){"use strict";var j=D(9),L=function(M){var N=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.rs=M,this.insertHtmlTemplate(N.domID),this.chooseBox=document.querySelector(".rs-box-choose"),this.chooseBoxHeight=this.chooseBox.clientHeight,this.chooseBox.setAttribute("style","height: 0"),this.signInBox=document.querySelector(".rs-box-sign-in"),this.signInContent=document.querySelector(".rs-sign-in-content"),this.signInContentHeight=this.signInContent.clientHeight,this.rsWidget=document.querySelector("#rs-widget"),this.rsLogo=document.querySelector(".rs-main-logo"),this.rsCloseButton=document.querySelector(".rs-close"),this.rsInitial=document.querySelector(".rs-box-initial"),this.rsChooseRemoteStorageButton=document.querySelector("button.rs-choose-rs"),this.rsChooseDropboxButton=document.querySelector("button.rs-choose-dropbox"),this.rsChooseGoogleDriveButton=document.querySelector("button.rs-choose-gdrive"),this.rsDisconnectButton=document.querySelector(".rs-disconnect"),this.rsSyncButton=document.querySelector(".rs-sync"),this.rsConnected=document.querySelector(".rs-box-connected"),this.rsConnectedUser=document.querySelector(".rs-connected-text h1.rs-user"),this.setAssetUrls(),this.setEventListeners(),this.setClickHandlers()};L.prototype={insertHtmlTemplate:function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,N=document.createElement("div"),j=document.createElement("style");if(j.innerHTML=D(2),N.id="remotestorage-widget",N.innerHTML=D(3),N.appendChild(j),M){var L=document.getElementById(M);if(!L)throw'Failed to find target DOM element with id="'+M+'"';L.appendChild(N)}else document.body.appendChild(N)},setAssetUrls:function(){this.rsCloseButton.src=D(4),this.rsLogo.src=D(1),document.querySelector(".rs-logo").src=D(1),document.querySelector(".dropbox-logo").src=D(5),document.querySelector(".gdrive-logo").src=D(6),document.querySelector(".rs-power-icon").src=D(8),document.querySelector(".rs-loop-icon").src=D(7)},setEventListeners:function(){var M=this,N=document.querySelector(".rs-sign-in-form");N.addEventListener("submit",function(N){N.preventDefault();var D=document.querySelector("input[name=rs-user-address]").value;M.rs.connect(D)}),this.rs.on("connected",function(){M.rsWidget.classList.remove("rs-state-choose"),M.rsWidget.classList.add("rs-state-connected"),M.fadeOut(M.rsInitial),M.chooseBox.setAttribute("style","height: 0"),M.rsConnectedUser.innerHTML=M.rs.remote.userAddress,M.delayFadeIn(M.rsConnected,600)}),this.rs.on("disconnected",function(){M.rsWidget.classList.remove("rs-state-connected"),M.rsWidget.classList.add("rs-state-initial"),M.fadeOut(M.rsConnected),M.delayFadeIn(M.rsInitial,300)})},setClickHandlers:function(){var M=this;this.rsInitial.addEventListener("click",function(){M.rsWidget.classList.remove("rs-state-initial"),M.rsWidget.classList.add("rs-state-choose"),M.fadeOut(M.rsInitial),M.chooseBox.setAttribute("style","height: "+M.chooseBoxHeight)}),this.rsChooseRemoteStorageButton.addEventListener("click",function(){M.rsWidget.classList.remove("rs-state-choose"),M.rsWidget.classList.add("rs-state-sign-in"),M.chooseBox.setAttribute("style","height: 0"),M.signInBox.setAttribute("style","height: "+M.chooseBoxHeight+"px"),M.signInContent.setAttribute("style","padding-top: "+(M.chooseBoxHeight-M.signInContentHeight)/2+"px")}),this.rsChooseDropboxButton.addEventListener("click",function(){M.rs.dropbox.connect()}),this.rsChooseGoogleDriveButton.addEventListener("click",function(){M.rs.googledrive.connect()}),this.rsDisconnectButton.addEventListener("click",function(){M.rs.disconnect()}),this.rsSyncButton.addEventListener("click",function(){M.rsSyncButton.classList.toggle("rs-rotate")}),this.rsCloseButton.addEventListener("click",function(){M.closeWidget()}),document.addEventListener("click",function(){M.rsWidget.classList.contains("rs-state-connected")?(M.rsWidget.classList.toggle("rs-hide",!0),M.fadeOut(M.rsConnected)):M.closeWidget()}),this.rsWidget.addEventListener("click",function(M){M.stopPropagation()}),this.rsLogo.addEventListener("click",function(){M.rsWidget.classList.contains("rs-state-connected")&&(M.rsWidget.classList.toggle("rs-hide",!1),M.delayFadeIn(M.rsConnected,300))})},closeWidget:function(){this.rsWidget.classList.remove("rs-state-sign-in"),this.rsWidget.classList.remove("rs-state-choose"),this.delayFadeIn(this.rsInitial,300),this.signInBox.setAttribute("style","height: 0;"),this.chooseBox.setAttribute("style","height: 0;")},delayFadeIn:function(M,N){var D=this;setTimeout(function(){D.fadeIn(M)},N)},fadeOut:function(M){var N=1,D=setInterval(function(){N<=.1&&(clearInterval(D),M.style.display="none"),M.style.opacity=N,M.style.filter="alpha(opacity="+100*N+")",N-=.1*N},3)},fadeIn:function(M){var N=.1;M.style.display="block";var D=setInterval(function(){N>=1&&clearInterval(D),M.style.opacity=N,M.style.filter="alpha(opacity="+100*N+")",N+=.1*N},3)}},j.prototype.displayWidget=function(M){this.widget=new L(this,M)}},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMC43MzkwMDhpbiIgaGVpZ2h0PSIwLjg1MzMzOWluIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA3MzkgODUzIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5maWwwIHtmaWxsOiNGRjRCMDN9DQogICBdXT4NCiAgPC9zdHlsZT4NCiA8L2RlZnM+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cG9seWdvbiBjbGFzcz0iZmlsMCIgcG9pbnRzPSIzNzAsNzU0IDAsNTQyIDAsNjQwIDE4NSw3NDcgMzcwLDg1MyA1NTQsNzQ3IDczOSw2NDAgNzM5LDUyNSA3MzksNTI1IDczOSw0NzYgNzM5LDQyNyA3MzksMzc4IDY1Myw0MjcgMzcwLDU4OSA4Niw0MjcgODYsNDI3IDg2LDM2MSAxODUsNDE4IDM3MCw1MjQgNTU0LDQxOCA2NTMsMzYxIDczOSwzMTEgNzM5LDIxMyA3MzksMjEzIDU1NCwxMDcgMzcwLDAgMTg1LDEwNyA1OCwxODAgMTQ0LDIzMCAyMjgsMTgxIDM3MCwxMDAgNTExLDE4MSA2NTIsMjYzIDM3MCw0MjUgODcsMjYzIDg3LDI2MyAwLDIxMyAwLDIxMyAwLDMxMSAwLDM3OCAwLDQyNyAwLDQ3NiA4Niw1MjUgMTg1LDU4MiAzNzAsNjg5IDU1NCw1ODIgNjUzLDUyNSA2NTMsNTkwIDY1Myw1OTIgIi8+DQogPC9nPg0KPC9zdmc+DQo="},function(M,N){M.exports=".rs-widget a {\n  color: #0093cc;\n}\n.rs-small-headline {\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 2px;\n}\n.rs-sub-headline {\n  color: #666;\n  font-size: 0.92em;\n}\n.rs-big-headline {\n  font-size: 1.625em;\n  font-weight: normal;\n  display: inline-block;\n}\n.rs-short-desc {\n}\n.rs-choose-backend {\n  font-weight: bold;\n}\n.rs-button {\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  border:1px solid #dcdcdc;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.rs-button-small {\n  padding: 0.563em;\n  margin-left: 0.625em;\n  transition: border-color 300ms ease-out;\n}\n.rs-button-wrap {\n  margin-top: 10px;\n}\n.rs-button-big {\n  padding: 15px 10px;\n  margin-bottom: 10px;\n  display: block;\n  width: 100%;\n  text-align: left;\n  transition: box-shadow 200ms;\n}\n.rs-button-big > div {\n  font-size: 1.125em;\n  padding: 10px 0;\n}\n.rs-button-big:hover {\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 3px 8px 0 rgba(0,0,0,0.2);\n}\n.rs-button-big:active {\n  background-color: #eee;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 3px 8px 0 rgba(0,0,0,0.2);\n}\n.rs-button-big:last-child {\n  margin-bottom: 0;\n}\n.rs-icon {\n  fill: #999;\n  transition: fill 300ms ease-out;\n}\n\n\n/* Widget */\n.rs-widget,\n.rs-widget * {\n  box-sizing: border-box;\n  font-family: arial, sans-serif;\n}\n.rs-widget {\n  max-width: 350px;\n  color: #333;\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 10px;\n  display: inline-block;\n  margin: 10px;\n  overflow: hidden;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 3px 8px 0 rgba(0,0,0,0.2);\n  transition: max-width 300ms ease-out 0ms, background 300ms linear 300ms, box-shadow 300ms linear 300ms;\n}\n\n\n/* Hide everything except logo when connected and clicked outside of box */\n.rs-hide {\n  max-width: 55px;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 0.5;\n  transition: max-width 300ms ease-out 300ms, opacity 300ms linear 0ms, background 300ms linear, box-shadow 300ms linear 0ms;\n}\n.rs-hide:hover {\n  cursor: pointer;\n  opacity: 1;\n}\n\n\n/* Initial Connect remote storage box */\n.rs-box-initial {\n  padding: 1px 0;\n  margin-left: 45px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.rs-box-initial:hover {\n  cursor: pointer;\n}\n.rs-state-initial .rs-box-initial {\n  display: block;\n}\n.rs-state-choose .rs-box-initial {\n  position: absolute;\n}\n\n\n/* Main logo */\n.rs-main-logo {\n  float: left;\n  margin-right: 0.625em;\n  transition: margin-left 300ms ease-out;\n  transition-delay: 300ms;\n}\n\n\n/* Choose provider box */\n.rs-box-choose {\n  clear: both;\n  text-align: center;\n  overflow: hidden;\n  transition: height 300ms ease-out;\n  transition-delay: 0ms;\n}\n.rs-box-choose-content {\n  padding: 0 10px 10px 10px;\n}\n.rs-box-choose .rs-big-headline {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.rs-box-choose p {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.rs-state-choose .rs-main-logo {\n  margin-left: 45%;\n  transition-delay: 0ms;\n}\n.rs-box-choose img {\n  float: left;\n  margin-right: 0.625em;\n}\n.rs-state-choose .rs-box-choose {\n  transition-delay: 300ms;\n}\n\n\n/* Sign in box */\n.rs-box-sign-in {\n  text-align: center;\n  height: 0;\n  overflow: hidden;\n  transition: height 300ms ease-out;\n}\n.rs-sign-in-content {\n  padding: 0 10px 10px 10px;\n}\n.rs-box-sign-in .rs-big-headline {\n  margin-top: 0;\n}\n.rs-state-sign-in .rs-main-logo {\n  margin-left: 45%;\n}\n.rs-sign-in-form input[type=text] {\n  padding: 15px 10px;\n  display: block;\n  width: 100%;\n  font: inherit;\n  margin-bottom: 20px;\n}\n.rs-sign-in-form input[type=submit] {\n  padding: 15px 10px;\n  margin-bottom: 15px;\n  display: block;\n  width: 100%;\n  border-width: 0;\n  border-radius: 3px;\n\tbackground-color: #3fb34f;\n  font: inherit;\n  color: #fff;\n  transition: box-shadow 200ms, background-color 200ms;\n}\n.rs-sign-in-form input[type=submit]:hover {\n  cursor: pointer;\n  background-color: #4BCB5D;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 3px 8px 0 rgba(0,0,0,0.2);\n}\n.rs-sign-in-form input[type=submit]:active {\n\tbackground-color: #3fb34f;\n}\n\n\n/* Connected box */\n.rs-box-connected {\n  display: none;\n}\n.rs-connected-text {\n  float: left;\n}\n.rs-box-connected .rs-user {\n  font-weight: bold;\n}\n.rs-box-connected .rs-button {\n  float: right;\n}\n.rs-connected-buttons {\n  float: right;\n}\n.rs-disconnect:hover {\n  border-color: #FF2D2D;\n}\n.rs-disconnect:hover .rs-icon{\n  fill: #FF2D2D;\n}\n.rs-sync:hover {\n  border-color: #FFBB0C;\n}\n.rs-sync:hover .rs-icon {\n  fill: #FFBB0C;\n}\n.rs-sync.rs-rotate {\n  border-color: #FFBB0C;\n}\n.rs-sync.rs-rotate .rs-icon {\n  fill: #FFBB0C;\n  animation: rs-spin 1s linear infinite;\n}\n@keyframes rs-spin { 100% { transform: rotate(360deg); transform:rotate(360deg); } }\n\n\n/* Floating widget styles*/\n.rs-floating {\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n.rs-close {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n.rs-close:hover {\n  cursor: pointer\n}\n\n/* Mobile styles */\n@media screen and (max-width: 360px) {\n  .rs-widget {\n    font-size: 100%;\n    padding: 10px;\n    transition: all 300ms ease-out;\n  }\n  .rs-floating {\n    position: relative;\n    top: auto;\n    right: auto\n  }\n  .rs-state-choose,\n  .rs-state-sign-in {\n    position: fixed;\n    top: 0;\n    margin: 0;\n    border-radius: 0;\n    height: 100%;\n    max-width: 100%;\n  }\n  .rs-state-choose .rs-close,\n  .rs-state-sign-in .rs-close {\n    display: block;\n  }\n}\n"},function(M,N){M.exports='<!--\n  Other classes:\n\n  rs-state-initial\n  rs-state-choose\n  rs-state-sign-in\n  rs-state-connected\n\n  rs-floating        - will make it fixed in the right corner\n-->\n<div id="rs-widget" class="rs-widget rs-state-initial rs-floating">\n\n  <img class="rs-main-logo" height="40" src="">\n\n  <img role="button" class="rs-close" width="40" src="">\n\n  <div class="rs-box-initial">\n    <h1 class="rs-small-headline">Connect Remote Storage</h1>\n    <span class="rs-sub-headline">To own and control your data</span>\n  </div>\n\n  <div class="rs-box-connected">\n    <div class="rs-connected-text">\n      <h1 class="rs-user rs-small-headline">gilli@axe.is</h1>\n      <span class="rs-sub-headline">Synced 2 min ago</span>\n    </div>\n    <div class="rs-connected-buttons">\n      <button class="rs-button rs-button-small rs-disconnect" title="Disconnect">\n        <img class="rs-icon rs-power-icon" height="16" width="16" src="">\n      </button>\n      <button class="rs-button rs-button-small rs-sync" title="Sync now">\n        <img class="rs-icon rs-loop-icon" height="16" width="16" src="">\n      </button>\n    </div>\n  </div>\n\n  <div class="rs-box-choose">\n    <div class="rs-box-choose-content">\n      <h1 class="rs-big-headline">Own Your Data</h1>\n      <p class="rs-short-desc">\n        This app allows you to own and control your data.\n        <a class="rs-help" href="https://remotestorage.io/" target="_blank">Read more</a>\n      </p>\n      <p class="rs-choose-backend">\n        Please choose your storage:\n      </p>\n      <div class="rs-button-wrap">\n        <button class="rs-button rs-button-big rs-choose-rs">\n          <img class="rs-logo" width="40" height="40" src="">\n          <div>Remote Storage</div>\n        </button>\n        <button class="rs-button rs-button-big rs-choose-dropbox">\n          <img class="dropbox-logo" width="40" height="40" src="">\n          <div>Dropbox</div>\n        </button>\n        <button class="rs-button rs-button-big rs-choose-gdrive">\n          <img class="gdrive-logo" width="40" height="40" src="">\n          <div>Google Drive</div>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="rs-box-sign-in">\n    <div class="rs-sign-in-content">\n      <form name="rs-sign-in-form" class="rs-sign-in-form">\n        <h1 class="rs-big-headline">Connect your Remote Storage</h1>\n        <input type="text" name=\'rs-user-address\' placeholder="user@provider.com">\n        <input type="submit" value="Connect">\n        <a href="https://remotestorage.io/get/" class="rs-help" target="_blank">Need help?</a>\n      </form>\n    </div>\n  </div>\n\n</div>\n'},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KPCFbQ0RBVEFbDQoJLnN0MHtmaWxsOiMwMTAxMDE7fQ0KXV0+DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzNDAuMiwxNjAgMjU1LjgsMjQ0LjMgMTcxLjgsMTYwLjQgMTYwLDE3Mi4yIDI0NCwyNTYgMTYwLDMzOS45IDE3MS44LDM1MS42IDI1NS44LDI2Ny44IDM0MC4yLDM1MiANCgkzNTIsMzQwLjMgMjY3LjYsMjU2IDM1MiwxNzEuOCAiLz4NCjwvc3ZnPg0K"},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDQgOTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+CiAgICA8cGF0aCBkPSJNMzAuNjkxNCwwTDAuMDAwNCwyMC4wMzlMMjEuMjIxNCwzNy4wMzNMNTIuMTY3NCwxNy45MjVMMzAuNjkxNCwwWiIgc3R5bGU9ImZpbGw6cmdiKDAsMTI2LDIyOSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMCw1NC4wMjgzTDMwLjY5MSw3NC4wNjczTDUyLjE2Nyw1Ni4xNDEzTDIxLjIyMiwzNy4wMzMzTDAsNTQuMDI4M1oiIHN0eWxlPSJmaWxsOnJnYigwLDEyNiwyMjkpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUyLjE2Nyw1Ni4xNDE2TDczLjY0NCw3NC4wNjc2TDEwNC4zMzUsNTQuMDI4Nkw4My4xMTMsMzcuMDMzNkw1Mi4xNjcsNTYuMTQxNloiIHN0eWxlPSJmaWxsOnJnYigwLDEyNiwyMjkpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEwNC4zMzUsMjAuMDM5MUw3My42NDQsMC4wMDAxTDUyLjE2NywxNy45MjUxTDgzLjExMywzNy4wMzMxTDEwNC4zMzUsMjAuMDM5MVoiIHN0eWxlPSJmaWxsOnJnYigwLDEyNiwyMjkpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUyLjIzMDUsNTkuOTk4MUwzMC42OTE1LDc3Ljg3MTFMMjEuNDc0NSw3MS44NTMxTDIxLjQ3NDUsNzguNjAwMUw1Mi4yMzA1LDk3LjA0MzFMODIuOTg2NSw3OC42MDAxTDgyLjk4NjUsNzEuODUzMUw3My43Njk1LDc3Ljg3MTFMNTIuMjMwNSw1OS45OTgxWiIgc3R5bGU9ImZpbGw6cmdiKDAsMTI2LDIyOSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+Cjwvc3ZnPgo="},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA1MTEgNDQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS40MTQyMTsiPgogICAgPHBhdGggZD0iTTE2Ni4yMywwLjEwOTU1MkwxNjYuNjcsMC4wOTk1NTE5TDE2Ni43MSwwLjU4OTU1MkwxNjYuMTUsMC42MDk1NTJMMTY2LjIzLDAuMTA5NTUyWiIgc3R5bGU9ImZpbGw6cmdiKDExLDE2Miw5NCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTY0LjUyLDMuMzg5NTVDMTY0LjkxLDIuODI5NTUgMTY1LjY3LDEuNzA5NTUgMTY2LjA2LDEuMTQ5NTVMMTY2Ljc2LDEuMDM5NTVDMTY3LjI4LDcuMzc5NTUgMTY5LjE0LDEzLjQ4OTYgMTcwLjU0LDE5LjY1OTZDMTc2LjU2LDQ2LjQ2OTYgMTgyLjY0LDczLjI1OTYgMTg4Ljk3LDk5Ljk4OTZDMTkzLjEyLDExOC4zMiAxOTcuNzUsMTM2LjU2IDIwMS41NSwxNTQuOTZDMjA0Ljg1LDE2Ni4zNSAyMDYuNjIsMTc4LjEgMjA5LjgxLDE4OS41MUMyMTEuODcsMjAwLjE1IDIxNS4xLDIxMC41MyAyMTYuODMsMjIxLjIzQzIxNi4xMywyMjIuNCAyMTUuNDMsMjIzLjU4IDIxNC43MiwyMjQuNzVDMjE0LjU1LDIyNS4wMiAyMTQuMTksMjI1LjU4IDIxNC4wMiwyMjUuODZMMjEzLjc2LDIyNi4zMUMyMTMuNzIsMjI2LjM5IDIxMy42MywyMjYuNTYgMjEzLjU4LDIyNi42NEMyMTMuMTksMjI3LjM2IDIxMi40MSwyMjguNzkgMjEyLjAyLDIyOS41QzIxMS45NSwyMjkuNjMgMjExLjgsMjI5Ljg5IDIxMS43MiwyMzAuMDJMMjExLjAxLDIzMS4yOEMyMTAuOTIsMjMxLjQzIDIxMC43NSwyMzEuNzIgMjEwLjY3LDIzMS44N0wyMDkuODQsMjMzLjMyQzIwOS44LDIzMy40IDIwOS43MSwyMzMuNTYgMjA5LjY2LDIzMy42NEwyMDguNjMsMjM1LjQ0QzIwOC41NCwyMzUuNTkgMjA4LjM2LDIzNS45MSAyMDguMjcsMjM2LjA3QzIwOC4xNywyMzYuMjQgMjA3Ljk3LDIzNi41NyAyMDcuODcsMjM2Ljc0TDIwNi44NiwyMzguNDhDMjA2Ljc4LDIzOC42MSAyMDYuNjIsMjM4Ljg5IDIwNi41NCwyMzkuMDJMMjA1LjkyLDI0MC4wN0MyMDUuODIsMjQwLjI1IDIwNS42LDI0MC42MiAyMDUuNSwyNDAuOEMyMDUuMSwyNDEuNDkgMjA0LjMxLDI0Mi44NyAyMDMuOTEsMjQzLjU3QzIwMy44NCwyNDMuNjkgMjAzLjY5LDI0My45NCAyMDMuNjIsMjQ0LjA3TDIwMi45OSwyNDUuMTJDMjAyLjg5LDI0NS4zMSAyMDIuNjcsMjQ1LjY3IDIwMi41NiwyNDUuODZDMjAyLjE5LDI0Ni41MSAyMDEuNDMsMjQ3LjggMjAxLjA2LDI0OC40NUMyMDAuOTcsMjQ4LjYgMjAwLjgsMjQ4LjkxIDIwMC43MSwyNDkuMDZMMTk5Ljk2LDI1MC40MUMxOTkuODksMjUwLjUzIDE5OS43NSwyNTAuNzggMTk5LjY4LDI1MC45TDE5OC45MSwyNTIuMjVDMTk4LjgzLDI1Mi4zOSAxOTguNjcsMjUyLjY3IDE5OC41OSwyNTIuODFDMTk4LjE5LDI1My40NyAxOTcuNDEsMjU0LjggMTk3LjAyLDI1NS40N0MxOTYuOTMsMjU1LjYyIDE5Ni43NSwyNTUuOTMgMTk2LjY2LDI1Ni4wOUwxOTUuOTUsMjU3LjM3QzE5NS44OCwyNTcuNDkgMTk1Ljc1LDI1Ny43MiAxOTUuNjksMjU3Ljg0TDE5NC44NywyNTkuMjZDMTk0LjgsMjU5LjM5IDE5NC42NSwyNTkuNjQgMTk0LjU4LDI1OS43NkMxOTQuMTYsMjYwLjQ4IDE5My4zMywyNjEuOTEgMTkyLjkxLDI2Mi42M0MxOTIuODQsMjYyLjc2IDE5Mi42OCwyNjMuMDIgMTkyLjYsMjYzLjE1TDE5MiwyNjQuMTRDMTkxLjksMjY0LjMyIDE5MS42OSwyNjQuNjcgMTkxLjU5LDI2NC44NUMxOTEuMjEsMjY1LjUxIDE5MC40NiwyNjYuODIgMTkwLjA4LDI2Ny40OEMxOTAuMDIsMjY3LjU5IDE4OS44OCwyNjcuODMgMTg5LjgyLDI2Ny45NEwxODksMjY5LjRDMTg4Ljk0LDI2OS41MSAxODguODIsMjY5LjcyIDE4OC43NiwyNjkuODNMMTg3LjkyLDI3MS4zQzE4Ny44NSwyNzEuNDEgMTg3LjcxLDI3MS42NSAxODcuNjQsMjcxLjc2QzE4Ny4yNSwyNzIuNDIgMTg2LjQ2LDI3My43MiAxODYuMDcsMjc0LjM4QzE4NS45NiwyNzQuNTUgMTg1Ljc2LDI3NC45MSAxODUuNjUsMjc1LjA5TDE4NS4wNiwyNzYuMTlDMTg0Ljk4LDI3Ni4zMyAxODQuODMsMjc2LjYxIDE4NC43NiwyNzYuNzRMMTgzLjczLDI3OC41MkMxODMuNjUsMjc4LjY3IDE4My40NywyNzguOTcgMTgzLjM5LDI3OS4xMkMxODMuMywyNzkuMjYgMTgzLjE0LDI3OS41NSAxODMuMDYsMjc5LjY5QzE4MS4zNywyODIuNTQgMTc5Ljg0LDI4NS40OCAxNzcuOTcsMjg4LjIyQzE2Ny4zMiwzMDUuNTkgMTU3LjUyLDMyMy41IDE0Ny4yMSwzNDEuMDhDMTMwLjQ3LDM3MC4wNSAxMTMuNzUsMzk5LjAyIDk3LjAxLDQyNy45OUM5NC41LDQzMi41IDkxLjY0LDQzNi44MiA4OS40OCw0NDEuNTNDODkuMzcsNDQxLjY5IDg5LjE1LDQ0Mi4wMSA4OS4wNCw0NDIuMTdDODUuMDMsNDM2LjM5IDgxLjkzLDQzMC4wMSA3OC4yNiw0MjQuMDFDNjEuNTIsMzk1LjAyIDQ0Ljc3LDM2Ni4wNCAyOC4wNCwzMzcuMDRDMTguNzQsMzIwLjczIDkuMDUsMzA0LjYyIDAsMjg4LjE2QzM1Ljg0LDIyNi4zMSA3MS41MiwxNjQuMzUgMTA3LjI5LDEwMi40NkMxMDcuMzIsMTAyLjQgMTA3LjM5LDEwMi4yOSAxMDcuNDIsMTAyLjIzTDEwOC40LDEwMC41NUMxMDguNDQsMTAwLjQ4IDEwOC41MiwxMDAuMzQgMTA4LjU3LDEwMC4yN0wxMDkuNTYsOTguNTc5NkMxMDkuNjUsOTguNDI5NiAxMDkuODMsOTguMTA5NiAxMDkuOTMsOTcuOTU5NkMxMTAuMDMsOTcuNzc5NiAxMTAuMjMsOTcuNDI5NiAxMTAuMzMsOTcuMjQ5NkwxMTEuMzIsOTUuNDg5NkMxMTEuMzksOTUuMzY5NiAxMTEuNTMsOTUuMTI5NiAxMTEuNiw5NS4wMDk2TDExMi4zNCw5My44Mjk2QzExMi40Nyw5My42Mzk2IDExMi43Myw5My4yNDk2IDExMi44Niw5My4wNDk2QzExMy4yMiw5Mi41MDk2IDExMy45NSw5MS40MTk2IDExNC4zMiw5MC44Nzk2QzExNC4zNiw5MC42OTk2IDExNC40Myw5MC4zNDk2IDExNC40Nyw5MC4xNzk2TDExNS4zNCw4OC41MDk2QzExNS4zOCw4OC40Mzk2IDExNS40Niw4OC4yOTk2IDExNS41LDg4LjIyOTZMMTE2LjUsODYuNTQ5NkMxMTYuNiw4Ni4zODk2IDExNi44LDg2LjA0OTYgMTE2LjksODUuODc5NkMxMTcuMDEsODUuNjg5NiAxMTcuMjMsODUuMjk5NiAxMTcuMzUsODUuMDk5NkwxMTguMTksODMuNjI5NkMxMTguMjgsODMuNDY5NiAxMTguNDYsODMuMTU5NiAxMTguNTUsODMuMDA5NkwxMTkuMjUsODEuNzc5NkMxMTkuMzMsODEuNjQ5NiAxMTkuNDksODEuMzY5NiAxMTkuNTcsODEuMjI5NkMxMTkuOTYsODAuNTU5NiAxMjAuNzQsNzkuMjE5NiAxMjEuMTQsNzguNTQ5NkMxMjEuMjIsNzguNDA5NiAxMjEuMzgsNzguMTI5NiAxMjEuNDYsNzcuOTg5NkwxMjIuMTksNzYuNjU5NkMxMjIuMjUsNzYuNTU5NiAxMjIuMzcsNzYuMzM5NiAxMjIuNDMsNzYuMjM5NkwxMjMuMzksNzQuNTU5NkMxMjMuNTEsNzQuMzU5NiAxMjMuNzYsNzMuOTQ5NiAxMjMuODksNzMuNzQ5NkwxMjQuNTQsNzIuNzY5NkMxMjQuNjgsNzIuNTY5NiAxMjQuOTUsNzIuMTc5NiAxMjUuMDksNzEuOTg5NkMxMjUuMjEsNzEuNzg5NiAxMjUuNDYsNzEuMzg5NiAxMjUuNTksNzEuMTg5NkwxMjYuMTMsNzAuMTQ5NkMxMjYuMzEsNjkuNzU5NiAxMjYuNjgsNjguOTc5NiAxMjYuODYsNjguNTg5NkwxMjcuNDEsNjcuODE5NkMxMjcuNTEsNjcuNjc5NiAxMjcuNyw2Ny40MDk2IDEyNy44LDY3LjI2OTZDMTI4LjE3LDY2Ljk1OTYgMTI4LjkyLDY2LjMxOTYgMTI5LjI5LDY1Ljk5OTZMMTI5LjIyLDY0LjgyOTZDMTI5LjI4LDY0LjY4OTYgMTI5LjQyLDY0LjQwOTYgMTI5LjQ5LDY0LjI2OTZMMTMwLjM0LDYyLjU3OTZDMTMwLjQxLDYyLjQ1OTYgMTMwLjU1LDYyLjIwOTYgMTMwLjYyLDYyLjA4OTZMMTMxLjM3LDYwLjg2OTZDMTMxLjUxLDYwLjY2OTYgMTMxLjc4LDYwLjI2OTYgMTMxLjkyLDYwLjA2OTZDMTMyLjI2LDU5LjUwOTYgMTMyLjk1LDU4LjQwOTYgMTMzLjI5LDU3Ljg1OTZDMTMzLjM5LDU3LjY1OTYgMTMzLjU3LDU3LjI2OTYgMTMzLjY3LDU3LjA2OTZMMTM0LjIsNTUuOTE5NkMxMzQuMzYsNTUuNjE5NiAxMzQuNyw1NS4wMDk2IDEzNC44Nyw1NC42OTk2TDEzNS41Myw1My43NTk2QzEzNS42Nyw1My41Njk2IDEzNS45NSw1My4xODk2IDEzNi4wOSw1Mi45OTk2QzEzNi4yMSw1Mi43OTk2IDEzNi40Niw1Mi4zOTk2IDEzNi41OCw1Mi4xOTk2TDEzNy4wNyw1MS4xNjk2QzEzNy4xOCw1MC45Mzk2IDEzNy40MSw1MC40Njk2IDEzNy41Miw1MC4yMzk2TDEzOC4zOCw0OC41Nzk2QzEzOC41MSw0OC4zNzk2IDEzOC43Niw0Ny45NTk2IDEzOC44OCw0Ny43NDk2TDEzOS41NCw0Ni43Njk2QzEzOS42OCw0Ni41Njk2IDEzOS45Niw0Ni4xODk2IDE0MC4xLDQ1Ljk4OTZDMTQwLjIzLDQ1Ljc4OTYgMTQwLjQ4LDQ1LjM3OTYgMTQwLjYsNDUuMTc5NkwxNDEuMTEsNDQuMTM5NkMxNDEuMjYsNDMuODQ5NiAxNDEuNTUsNDMuMjc5NiAxNDEuNjksNDIuOTg5NkwxNDIuMzcsNDEuODY5NkMxNDIuNDksNDEuNjc5NiAxNDIuNzMsNDEuMjk5NiAxNDIuODYsNDEuMTA5NkMxNDMuMjIsNDAuNTQ5NiAxNDMuOTUsMzkuNDI5NiAxNDQuMzIsMzguODc5NkMxNDQuMzYsMzguNzA5NiAxNDQuNDUsMzguMzY5NiAxNDQuNDksMzguMTk5NkwxNDUuMzYsMzYuNTM5NkMxNDUuMzksMzYuNDY5NiAxNDUuNDcsMzYuMzM5NiAxNDUuNTEsMzYuMjY5NkwxNDYuNTEsMzQuNTU5NkMxNDYuNjEsMzQuMzg5NiAxNDYuOCwzNC4wNTk2IDE0Ni45LDMzLjg4OTZDMTQ3LDMzLjcyOTYgMTQ3LjE5LDMzLjM4OTYgMTQ3LjI5LDMzLjIyOTZMMTQ4LjI5LDMxLjQ3OTZDMTQ4LjMzLDMxLjQwOTYgMTQ4LjQxLDMxLjI2OTYgMTQ4LjQ1LDMxLjE4OTZMMTQ5LjM5LDI5LjU1OTZDMTQ5LjQ0LDI5LjQ4OTYgMTQ5LjUzLDI5LjMzOTYgMTQ5LjU3LDI5LjI1OTZMMTUwLjU4LDI3LjU1OTZDMTUwLjY3LDI3LjM5OTYgMTUwLjg1LDI3LjA5OTYgMTUwLjk0LDI2LjkzOTZDMTUxLjA0LDI2Ljc2OTYgMTUxLjI0LDI2LjQxOTYgMTUxLjM0LDI2LjIzOTZMMTUyLjMsMjQuNTQ5NkMxNTIuMzYsMjQuNDM5NiAxNTIuNDgsMjQuMjI5NiAxNTIuNTQsMjQuMTI5NkwxNTMuMzUsMjIuODE5NkMxNTMuNDgsMjIuNjI5NiAxNTMuNzQsMjIuMjM5NiAxNTMuODYsMjIuMDQ5NkMxNTQuMjMsMjEuNDk5NiAxNTQuOTUsMjAuMzk5NiAxNTUuMzIsMTkuODQ5NkMxNTUuMzUsMTkuNjc5NiAxNTUuNDMsMTkuMzM5NiAxNTUuNDcsMTkuMTY5NkwxNTYuMzIsMTcuNTM5NkMxNTYuMzksMTcuNDE5NiAxNTYuNTQsMTcuMTY5NiAxNTYuNjEsMTcuMDM5NkwxNTcuMzcsMTUuODQ5NkMxNTcuNTEsMTUuNjU5NiAxNTcuNzcsMTUuMjY5NiAxNTcuOTEsMTUuMDY5NkMxNTguMjYsMTQuNTA5NiAxNTguOTYsMTMuMzk5NiAxNTkuMzEsMTIuODM5NkMxNTkuMzYsMTIuNjc5NiAxNTkuNDUsMTIuMzU5NiAxNTkuNSwxMi4xOTk2TDE2MC4zOCwxMC41NDk2QzE2MC40MiwxMC40Njk2IDE2MC41LDEwLjMyOTYgMTYwLjU0LDEwLjI0OTZMMTYxLjU2LDguNTI5NTVDMTYxLjY0LDguMzc5NTUgMTYxLjgyLDguMDc5NTUgMTYxLjkxLDcuOTI5NTVDMTYyLDcuNzU5NTUgMTYyLjE4LDcuNDM5NTUgMTYyLjI3LDcuMjc5NTVMMTYzLjI3LDUuNDk5NTVDMTYzLjMyLDUuNDI5NTUgMTYzLjQsNS4yNzk1NSAxNjMuNDQsNS4yMDk1NUwxNjQuMzksMy41OTk1NUMxNjQuNDIsMy41NDk1NSAxNjQuNDksMy40Mzk1NSAxNjQuNTIsMy4zODk1NVoiIHN0eWxlPSJmaWxsOnJnYigxMSwxNjIsOTQpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggaWQ9IiNmY2NkNDhmZiIgZD0iTTE2Ni42NywwLjA5OTU1MTlDMTk5LjE1LC0wLjA1MDQ0ODEgMjMxLjY0LDAuMDc5NTUxOSAyNjQuMTMsMC4wMjk1NTE5QzI5MS4wMSwwLjEyOTU1MiAzMTcuOTEsLTAuMTgwNDQ4IDM0NC43OCwwLjE3OTU1MkMzNDUuMzEsMS4xOTk1NSAzNDUuODUsMi4yMDk1NSAzNDYuNDIsMy4yMTk1NUMzNDYuNSwzLjM0OTU1IDM0Ni42NSwzLjYyOTU1IDM0Ni43MywzLjc2OTU1QzM0OS4zMyw4LjI5OTU1IDM1MS45NywxMi44MDk2IDM1NC41NCwxNy4zNDk2QzM1NC41OSwxNy40Mjk2IDM1NC42NywxNy41Nzk2IDM1NC43MiwxNy42NDk2QzM1OS43LDI2LjE5OTYgMzY0LjY2LDM0Ljc1OTYgMzY5LjU1LDQzLjM1OTZDMzY5LjU5LDQzLjQyOTYgMzY5LjY4LDQzLjU2OTYgMzY5LjcyLDQzLjY0OTZDMzcwLjYxLDQ1LjE3OTYgMzcxLjUzLDQ2LjcwOTYgMzcyLjQ0LDQ4LjI0OTZDMzcyLjUyLDQ4LjM3OTYgMzcyLjY3LDQ4LjY0OTYgMzcyLjc1LDQ4Ljc4OTZDMzc0LDUwLjk4OTYgMzc1LjI2LDUzLjE3OTYgMzc2LjUzLDU1LjM2OTZDMzc2LjU4LDU1LjQzOTYgMzc2LjY2LDU1LjU3OTYgMzc2LjcsNTUuNjU5NkMzNzcuOTcsNTcuODM5NiAzNzkuMjIsNjAuMDM5NiAzODAuNDgsNjIuMjM5NkMzODAuNTYsNjIuMzY5NiAzODAuNzEsNjIuNjI5NiAzODAuNzksNjIuNzU5NkMzODIuMDYsNjQuODk5NiAzODMuMjksNjcuMDU5NiAzODQuNTEsNjkuMjE5NkMzODQuNTksNjkuMzQ5NiAzODQuNzQsNjkuNjE5NiAzODQuODIsNjkuNzQ5NkMzOTYuNzYsOTAuMzY5NiA0MDguNjcsMTExIDQyMC41NywxMzEuNjVDNDE5LjIxLDEzNy42NCA0MjIuNSwxNDMuNiA0MjAuNjcsMTQ5LjYyQzQxOS41NiwxNjYuMDcgNDEzLjM1LDE4Mi4wOCA0MDMuMTEsMTk1QzM5OS43OCwxOTguNjEgNDAzLjAxLDIwMy42MiA0MDIuNjUsMjA3LjlDMzk5LjA2LDIxMi4yNSAzOTQuNDQsMjE1LjUgMzkwLjA4LDIxOS4wMUMzOTAuMDksMjIyLjI5IDM5MC4xLDIyNS41NyAzODkuOTUsMjI4Ljg2QzM4Ni4wNiwyMzEuNDMgMzgxLjYsMjMyLjkyIDM3Ny42NSwyMzUuNEMzNzcuMjMsMjM2LjczIDM3Ni44LDIzOC4wNyAzNzYuMzksMjM5LjQyQzM3My4yMiwyNDAuOTIgMzY5LjgzLDI0MS44OSAzNjYuNjYsMjQzLjQxQzM1NC4xMSwyMzkuODEgMzQxLjY5LDIzNS44IDMyOS4xNywyMzIuMDlDMzE3LjUyLDIyOC4yNCAzMDUuNTksMjI1LjIyIDI5NC4wNiwyMjAuOThMMjkzLjQsMjE5LjhDMjkzLjM0LDIxOS43MSAyOTMuMjQsMjE5LjUzIDI5My4xOSwyMTkuNDRMMjkyLjI0LDIxNy44M0MyOTIuMTQsMjE3LjY2IDI5MS45NCwyMTcuMzIgMjkxLjg0LDIxNy4xNUMyOTEuNzUsMjE3IDI5MS41OSwyMTYuNzEgMjkxLjUsMjE2LjU2QzI5MC43OSwyMTUuMyAyOTAuMTQsMjE0LjAxIDI4OS41NiwyMTIuNjlMMjg5LjUsMjEyLjU2TDI4OS40MywyMTIuNDZDMjg4Ljk5LDIxMS43NiAyODguMSwyMTAuMzUgMjg3LjY1LDIwOS42NUMyODcuNiwyMDkuNTcgMjg3LjUsMjA5LjQxIDI4Ny40NSwyMDkuMzJMMjg3LjE2LDIwOC44NkMyODYuOTksMjA4LjU3IDI4Ni42NCwyMDggMjg2LjQ3LDIwNy43MUMyODYuMDQsMjA2Ljk4IDI4NS4xNywyMDUuNTIgMjg0Ljc0LDIwNC43OUMyODQuNjMsMjA0LjYxIDI4NC40MiwyMDQuMjQgMjg0LjMxLDIwNC4wNkwyODMuNywyMDMuMDJDMjgzLjYyLDIwMi44OCAyODMuNDYsMjAyLjYxIDI4My4zOCwyMDIuNDdMMjgyLjQxLDIwMC44QzI4Mi4zNywyMDAuNzMgMjgyLjI4LDIwMC41OSAyODIuMjQsMjAwLjUxTDI4MS4yMiwxOTguNzZDMjgxLjEzLDE5OC42IDI4MC45NSwxOTguMjggMjgwLjg2LDE5OC4xM0MyODAuNzYsMTk3Ljk1IDI4MC41NSwxOTcuNTggMjgwLjQ1LDE5Ny40TDI3OS42MiwxOTUuOTRDMjc5LjUyLDE5NS43NyAyNzkuMzIsMTk1LjQxIDI3OS4yMiwxOTUuMjRMMjc4LjU4LDE5NC4xMUMyNzguNDksMTkzLjk2IDI3OC4zMiwxOTMuNjYgMjc4LjIzLDE5My41MUMyNzcuODQsMTkyLjc5IDI3Ny4wNSwxOTEuMzYgMjc2LjY1LDE5MC42NEMyNzYuNjEsMTkwLjU2IDI3Ni41MSwxOTAuMzkgMjc2LjQ3LDE5MC4zMUwyNzYuMiwxODkuODRDMjc2LjAxLDE4OS41NiAyNzUuNjQsMTg5IDI3NS40NSwxODguNzJDMjc0LjQ2LDE4Ny4wNiAyNzMuNTMsMTg1LjM2IDI3Mi42NCwxODMuNjVDMjcyLjU5LDE4My41NyAyNzIuNSwxODMuNCAyNzIuNDYsMTgzLjMyTDI3Mi4yLDE4Mi44NkMyNzIuMDEsMTgyLjU5IDI3MS42MywxODIuMDUgMjcxLjQ0LDE4MS43OUMyNzEsMTgxIDI3MC4xMiwxNzkuNDIgMjY5LjY4LDE3OC42M0MyNjkuNjMsMTc4LjU1IDI2OS41MywxNzguMzggMjY5LjQ5LDE3OC4yOUwyNjkuMjIsMTc3LjgxQzI2OS4wMiwxNzcuNDggMjY4LjYzLDE3Ni44MyAyNjguNDMsMTc2LjVMMjY3LjU3LDE3NS4wNUMyNjcuNDksMTc0LjkxIDI2Ny4zMiwxNzQuNjMgMjY3LjIzLDE3NC40OEMyNjYuODUsMTczLjgyIDI2Ni4wOCwxNzIuNDkgMjY1LjY5LDE3MS44M0MyNjUuNiwxNzEuNjggMjY1LjQzLDE3MS4zNyAyNjUuMzQsMTcxLjIxQzI2NC42NiwxNzAuMDggMjY0LjAxLDE2OC45NCAyNjMuMzcsMTY3LjhDMjYzLjMyLDE2Ny43MSAyNjMuMjEsMTY3LjUzIDI2My4xNiwxNjcuNDRMMjYyLjIxLDE2NS44MUMyNjIuMTEsMTY1LjY1IDI2MS45MiwxNjUuMzMgMjYxLjgzLDE2NS4xNkMyNjEuNzQsMTY1LjAxIDI2MS41NywxNjQuNzEgMjYxLjQ4LDE2NC41NkwyNjAuNDcsMTYyLjhDMjYwLjQyLDE2Mi43MiAyNjAuMzMsMTYyLjU1IDI2MC4yOCwxNjIuNDdMMjU5LjQ2LDE2MUMyNTkuMzksMTYwLjg4IDI1OS4yNiwxNjAuNjUgMjU5LjE5LDE2MC41M0MyNTguODEsMTU5Ljg2IDI1OC4wNCwxNTguNTMgMjU3LjY2LDE1Ny44NkMyNTcuNTgsMTU3LjcyIDI1Ny40MiwxNTcuNDUgMjU3LjM0LDE1Ny4zMkMyNTYuNzIsMTU2LjI5IDI1Ni4xLDE1NS4yNSAyNTUuNSwxNTQuMjJDMjI3Ljc3LDEwNi4xIDIwMCw1OC4wMDk2IDE3Mi4yMSw5LjkxOTU1QzE3MC40Nyw2LjkxOTU1IDE2OC44OSwzLjc5OTU1IDE2Ni43NiwxLjAzOTU1TDE2Ni43MSwwLjU4OTU1MkwxNjYuNjcsMC4wOTk1NTE5WiIgc3R5bGU9ImZpbGw6cmdiKDI1MiwyMDUsNzIpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE2Ni4xNSwwLjYwOTU1MkwxNjYuNzEsMC41ODk1NTJMMTY2Ljc2LDEuMDM5NTVMMTY2LjA2LDEuMTQ5NTVMMTY2LjE1LDAuNjA5NTUyWiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNjYuNzYsMS4wMzk1NUMxNjguODksMy43OTk1NSAxNzAuNDcsNi45MTk1NSAxNzIuMjEsOS45MTk1NUMyMDAsNTguMDA5NiAyMjcuNzcsMTA2LjEgMjU1LjUsMTU0LjIyQzI0Mi42NiwxNzYuNTggMjI5LjcyLDE5OC44OSAyMTYuODMsMjIxLjIzQzIxNS4xLDIxMC41MyAyMTEuODcsMjAwLjE1IDIwOS44MSwxODkuNTFDMjA2LjYyLDE3OC4xIDIwNC44NSwxNjYuMzUgMjAxLjU1LDE1NC45NkMxOTcuNzUsMTM2LjU2IDE5My4xMiwxMTguMzIgMTg4Ljk3LDk5Ljk4OTZDMTgyLjY0LDczLjI1OTYgMTc2LjU2LDQ2LjQ2OTYgMTcwLjU0LDE5LjY1OTZDMTY5LjE0LDEzLjQ4OTYgMTY3LjI4LDcuMzc5NTUgMTY2Ljc2LDEuMDM5NTVaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE2NC4zOSwzLjU5OTU1QzE2NC40MiwzLjU0OTU1IDE2NC40OSwzLjQzOTU1IDE2NC41MiwzLjM4OTU1QzE2NC40OSwzLjQzOTU1IDE2NC40MiwzLjU0OTU1IDE2NC4zOSwzLjU5OTU1WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNjMuMjcsNS40OTk1NUMxNjMuMzIsNS40Mjk1NSAxNjMuNCw1LjI3OTU1IDE2My40NCw1LjIwOTU1QzE2My40LDUuMjc5NTUgMTYzLjMyLDUuNDI5NTUgMTYzLjI3LDUuNDk5NTVaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE2MS45MSw3LjkyOTU1QzE2Miw3Ljc1OTU1IDE2Mi4xOCw3LjQzOTU1IDE2Mi4yNyw3LjI3OTU1QzE2Mi4xOCw3LjQzOTU1IDE2Miw3Ljc1OTU1IDE2MS45MSw3LjkyOTU1WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNjEuNTYsOC41Mjk1NUMxNjEuNjQsOC4zNzk1NSAxNjEuODIsOC4wNzk1NSAxNjEuOTEsNy45Mjk1NUMxNjEuODIsOC4wNzk1NSAxNjEuNjQsOC4zNzk1NSAxNjEuNTYsOC41Mjk1NVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTYwLjM4LDEwLjU0OTZDMTYwLjQyLDEwLjQ2OTYgMTYwLjUsMTAuMzI5NiAxNjAuNTQsMTAuMjQ5NkMxNjAuNSwxMC4zMjk2IDE2MC40MiwxMC40Njk2IDE2MC4zOCwxMC41NDk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNTkuMzEsMTIuODM5NkMxNTkuMzYsMTIuNjc5NiAxNTkuNDUsMTIuMzU5NiAxNTkuNSwxMi4xOTk2QzE1OS40NSwxMi4zNTk2IDE1OS4zNiwxMi42Nzk2IDE1OS4zMSwxMi44Mzk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNTcuOTEsMTUuMDY5NkMxNTguMjYsMTQuNTA5NiAxNTguOTYsMTMuMzk5NiAxNTkuMzEsMTIuODM5NkMxNTguOTYsMTMuMzk5NiAxNTguMjYsMTQuNTA5NiAxNTcuOTEsMTUuMDY5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTU3LjM3LDE1Ljg0OTZDMTU3LjUxLDE1LjY1OTYgMTU3Ljc3LDE1LjI2OTYgMTU3LjkxLDE1LjA2OTZDMTU3Ljc3LDE1LjI2OTYgMTU3LjUxLDE1LjY1OTYgMTU3LjM3LDE1Ljg0OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE1Ni4zMiwxNy41Mzk2QzE1Ni4zOSwxNy40MTk2IDE1Ni41NCwxNy4xNjk2IDE1Ni42MSwxNy4wMzk2QzE1Ni41NCwxNy4xNjk2IDE1Ni4zOSwxNy40MTk2IDE1Ni4zMiwxNy41Mzk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNTUuMzIsMTkuODQ5NkMxNTUuMzUsMTkuNjc5NiAxNTUuNDMsMTkuMzM5NiAxNTUuNDcsMTkuMTY5NkMxNTUuNDMsMTkuMzM5NiAxNTUuMzUsMTkuNjc5NiAxNTUuMzIsMTkuODQ5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTUzLjg2LDIyLjA0OTZDMTU0LjIzLDIxLjQ5OTYgMTU0Ljk1LDIwLjM5OTYgMTU1LjMyLDE5Ljg0OTZDMTU0Ljk1LDIwLjM5OTYgMTU0LjIzLDIxLjQ5OTYgMTUzLjg2LDIyLjA0OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE1My4zNSwyMi44MTk2QzE1My40OCwyMi42Mjk2IDE1My43NCwyMi4yMzk2IDE1My44NiwyMi4wNDk2QzE1My43NCwyMi4yMzk2IDE1My40OCwyMi42Mjk2IDE1My4zNSwyMi44MTk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNTIuMywyNC41NDk2QzE1Mi4zNiwyNC40Mzk2IDE1Mi40OCwyNC4yMjk2IDE1Mi41NCwyNC4xMjk2QzE1Mi40OCwyNC4yMjk2IDE1Mi4zNiwyNC40Mzk2IDE1Mi4zLDI0LjU0OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE1MC45NCwyNi45Mzk2QzE1MS4wNCwyNi43Njk2IDE1MS4yNCwyNi40MTk2IDE1MS4zNCwyNi4yMzk2QzE1MS4yNCwyNi40MTk2IDE1MS4wNCwyNi43Njk2IDE1MC45NCwyNi45Mzk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNTAuNTgsMjcuNTU5NkMxNTAuNjcsMjcuMzk5NiAxNTAuODUsMjcuMDk5NiAxNTAuOTQsMjYuOTM5NkMxNTAuODUsMjcuMDk5NiAxNTAuNjcsMjcuMzk5NiAxNTAuNTgsMjcuNTU5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTQ5LjM5LDI5LjU1OTZDMTQ5LjQ0LDI5LjQ4OTYgMTQ5LjUzLDI5LjMzOTYgMTQ5LjU3LDI5LjI1OTZDMTQ5LjUzLDI5LjMzOTYgMTQ5LjQ0LDI5LjQ4OTYgMTQ5LjM5LDI5LjU1OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE0OC4yOSwzMS40Nzk2QzE0OC4zMywzMS40MDk2IDE0OC40MSwzMS4yNjk2IDE0OC40NSwzMS4xODk2QzE0OC40MSwzMS4yNjk2IDE0OC4zMywzMS40MDk2IDE0OC4yOSwzMS40Nzk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNDYuOSwzMy44ODk2QzE0NywzMy43Mjk2IDE0Ny4xOSwzMy4zODk2IDE0Ny4yOSwzMy4yMjk2QzE0Ny4xOSwzMy4zODk2IDE0NywzMy43Mjk2IDE0Ni45LDMzLjg4OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE0Ni41MSwzNC41NTk2QzE0Ni42MSwzNC4zODk2IDE0Ni44LDM0LjA1OTYgMTQ2LjksMzMuODg5NkMxNDYuOCwzNC4wNTk2IDE0Ni42MSwzNC4zODk2IDE0Ni41MSwzNC41NTk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNDUuMzYsMzYuNTM5NkMxNDUuMzksMzYuNDY5NiAxNDUuNDcsMzYuMzM5NiAxNDUuNTEsMzYuMjY5NkMxNDUuNDcsMzYuMzM5NiAxNDUuMzksMzYuNDY5NiAxNDUuMzYsMzYuNTM5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTQ0LjMyLDM4Ljg3OTZDMTQ0LjM2LDM4LjcwOTYgMTQ0LjQ1LDM4LjM2OTYgMTQ0LjQ5LDM4LjE5OTZDMTQ0LjQ1LDM4LjM2OTYgMTQ0LjM2LDM4LjcwOTYgMTQ0LjMyLDM4Ljg3OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE0Mi44Niw0MS4xMDk2QzE0My4yMiw0MC41NDk2IDE0My45NSwzOS40Mjk2IDE0NC4zMiwzOC44Nzk2QzE0My45NSwzOS40Mjk2IDE0My4yMiw0MC41NDk2IDE0Mi44Niw0MS4xMDk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNDIuMzcsNDEuODY5NkMxNDIuNDksNDEuNjc5NiAxNDIuNzMsNDEuMjk5NiAxNDIuODYsNDEuMTA5NkMxNDIuNzMsNDEuMjk5NiAxNDIuNDksNDEuNjc5NiAxNDIuMzcsNDEuODY5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTQxLjExLDQ0LjEzOTZDMTQxLjI2LDQzLjg0OTYgMTQxLjU1LDQzLjI3OTYgMTQxLjY5LDQyLjk4OTZDMTQxLjU1LDQzLjI3OTYgMTQxLjI2LDQzLjg0OTYgMTQxLjExLDQ0LjEzOTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE0MC4xLDQ1Ljk4OTZDMTQwLjIzLDQ1Ljc4OTYgMTQwLjQ4LDQ1LjM3OTYgMTQwLjYsNDUuMTc5NkMxNDAuNDgsNDUuMzc5NiAxNDAuMjMsNDUuNzg5NiAxNDAuMSw0NS45ODk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMzkuNTQsNDYuNzY5NkMxMzkuNjgsNDYuNTY5NiAxMzkuOTYsNDYuMTg5NiAxNDAuMSw0NS45ODk2QzEzOS45Niw0Ni4xODk2IDEzOS42OCw0Ni41Njk2IDEzOS41NCw0Ni43Njk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMzguMzgsNDguNTc5NkMxMzguNTEsNDguMzc5NiAxMzguNzYsNDcuOTU5NiAxMzguODgsNDcuNzQ5NkMxMzguNzYsNDcuOTU5NiAxMzguNTEsNDguMzc5NiAxMzguMzgsNDguNTc5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTM3LjA3LDUxLjE2OTZDMTM3LjE4LDUwLjkzOTYgMTM3LjQxLDUwLjQ2OTYgMTM3LjUyLDUwLjIzOTZDMTM3LjQxLDUwLjQ2OTYgMTM3LjE4LDUwLjkzOTYgMTM3LjA3LDUxLjE2OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEzNi4wOSw1Mi45OTk2QzEzNi4yMSw1Mi43OTk2IDEzNi40Niw1Mi4zOTk2IDEzNi41OCw1Mi4xOTk2QzEzNi40Niw1Mi4zOTk2IDEzNi4yMSw1Mi43OTk2IDEzNi4wOSw1Mi45OTk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMzUuNTMsNTMuNzU5NkMxMzUuNjcsNTMuNTY5NiAxMzUuOTUsNTMuMTg5NiAxMzYuMDksNTIuOTk5NkMxMzUuOTUsNTMuMTg5NiAxMzUuNjcsNTMuNTY5NiAxMzUuNTMsNTMuNzU5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTM0LjIsNTUuOTE5NkMxMzQuMzYsNTUuNjE5NiAxMzQuNyw1NS4wMDk2IDEzNC44Nyw1NC42OTk2QzEzNC43LDU1LjAwOTYgMTM0LjM2LDU1LjYxOTYgMTM0LjIsNTUuOTE5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTMzLjI5LDU3Ljg1OTZDMTMzLjM5LDU3LjY1OTYgMTMzLjU3LDU3LjI2OTYgMTMzLjY3LDU3LjA2OTZDMTMzLjU3LDU3LjI2OTYgMTMzLjM5LDU3LjY1OTYgMTMzLjI5LDU3Ljg1OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEzMS45Miw2MC4wNjk2QzEzMi4yNiw1OS41MDk2IDEzMi45NSw1OC40MDk2IDEzMy4yOSw1Ny44NTk2QzEzMi45NSw1OC40MDk2IDEzMi4yNiw1OS41MDk2IDEzMS45Miw2MC4wNjk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMzEuMzcsNjAuODY5NkMxMzEuNTEsNjAuNjY5NiAxMzEuNzgsNjAuMjY5NiAxMzEuOTIsNjAuMDY5NkMxMzEuNzgsNjAuMjY5NiAxMzEuNTEsNjAuNjY5NiAxMzEuMzcsNjAuODY5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTMwLjM0LDYyLjU3OTZDMTMwLjQxLDYyLjQ1OTYgMTMwLjU1LDYyLjIwOTYgMTMwLjYyLDYyLjA4OTZDMTMwLjU1LDYyLjIwOTYgMTMwLjQxLDYyLjQ1OTYgMTMwLjM0LDYyLjU3OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEyOS4yMiw2NC44Mjk2QzEyOS4yOCw2NC42ODk2IDEyOS40Miw2NC40MDk2IDEyOS40OSw2NC4yNjk2QzEyOS40Miw2NC40MDk2IDEyOS4yOCw2NC42ODk2IDEyOS4yMiw2NC44Mjk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMjcuOCw2Ny4yNjk2QzEyOC4xNSw2Ni42NTk2IDEyOC44Niw2NS40Mzk2IDEyOS4yMiw2NC44Mjk2TDEyOS4yOSw2NS45OTk2QzEyOC45Miw2Ni4zMTk2IDEyOC4xNyw2Ni45NTk2IDEyNy44LDY3LjI2OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEyNy40MSw2Ny44MTk2QzEyNy41MSw2Ny42Nzk2IDEyNy43LDY3LjQwOTYgMTI3LjgsNjcuMjY5NkMxMjcuNyw2Ny40MDk2IDEyNy41MSw2Ny42Nzk2IDEyNy40MSw2Ny44MTk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTMsNzAuMTQ5NkMxMjYuMzEsNjkuNzU5NiAxMjYuNjgsNjguOTc5NiAxMjYuODYsNjguNTg5NkMxMjYuNjgsNjguOTc5NiAxMjYuMzEsNjkuNzU5NiAxMjYuMTMsNzAuMTQ5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTI1LjA5LDcxLjk4OTZDMTI1LjIxLDcxLjc4OTYgMTI1LjQ2LDcxLjM4OTYgMTI1LjU5LDcxLjE4OTZDMTI1LjQ2LDcxLjM4OTYgMTI1LjIxLDcxLjc4OTYgMTI1LjA5LDcxLjk4OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEyNC41NCw3Mi43Njk2QzEyNC42OCw3Mi41Njk2IDEyNC45NSw3Mi4xNzk2IDEyNS4wOSw3MS45ODk2QzEyNC45NSw3Mi4xNzk2IDEyNC42OCw3Mi41Njk2IDEyNC41NCw3Mi43Njk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMjMuMzksNzQuNTU5NkMxMjMuNTEsNzQuMzU5NiAxMjMuNzYsNzMuOTQ5NiAxMjMuODksNzMuNzQ5NkMxMjMuNzYsNzMuOTQ5NiAxMjMuNTEsNzQuMzU5NiAxMjMuMzksNzQuNTU5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTIyLjE5LDc2LjY1OTZDMTIyLjI1LDc2LjU1OTYgMTIyLjM3LDc2LjMzOTYgMTIyLjQzLDc2LjIzOTZDMTIyLjM3LDc2LjMzOTYgMTIyLjI1LDc2LjU1OTYgMTIyLjE5LDc2LjY1OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEyMS4xNCw3OC41NDk2QzEyMS4yMiw3OC40MDk2IDEyMS4zOCw3OC4xMjk2IDEyMS40Niw3Ny45ODk2QzEyMS4zOCw3OC4xMjk2IDEyMS4yMiw3OC40MDk2IDEyMS4xNCw3OC41NDk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMTkuMjUsODEuNzc5NkMxMTkuMzMsODEuNjQ5NiAxMTkuNDksODEuMzY5NiAxMTkuNTcsODEuMjI5NkMxMTkuNDksODEuMzY5NiAxMTkuMzMsODEuNjQ5NiAxMTkuMjUsODEuNzc5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTE4LjE5LDgzLjYyOTZDMTE4LjI4LDgzLjQ2OTYgMTE4LjQ2LDgzLjE1OTYgMTE4LjU1LDgzLjAwOTZDMTE4LjQ2LDgzLjE1OTYgMTE4LjI4LDgzLjQ2OTYgMTE4LjE5LDgzLjYyOTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTExNi45LDg1Ljg3OTZDMTE3LjAxLDg1LjY4OTYgMTE3LjIzLDg1LjI5OTYgMTE3LjM1LDg1LjA5OTZDMTE3LjIzLDg1LjI5OTYgMTE3LjAxLDg1LjY4OTYgMTE2LjksODUuODc5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTE2LjUsODYuNTQ5NkMxMTYuNiw4Ni4zODk2IDExNi44LDg2LjA0OTYgMTE2LjksODUuODc5NkMxMTYuOCw4Ni4wNDk2IDExNi42LDg2LjM4OTYgMTE2LjUsODYuNTQ5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTE1LjM0LDg4LjUwOTZDMTE1LjM4LDg4LjQzOTYgMTE1LjQ2LDg4LjI5OTYgMTE1LjUsODguMjI5NkMxMTUuNDYsODguMjk5NiAxMTUuMzgsODguNDM5NiAxMTUuMzQsODguNTA5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTE0LjMyLDkwLjg3OTZDMTE0LjM2LDkwLjY5OTYgMTE0LjQzLDkwLjM0OTYgMTE0LjQ3LDkwLjE3OTZDMTE0LjQzLDkwLjM0OTYgMTE0LjM2LDkwLjY5OTYgMTE0LjMyLDkwLjg3OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTExMi44Niw5My4wNDk2QzExMy4yMiw5Mi41MDk2IDExMy45NSw5MS40MTk2IDExNC4zMiw5MC44Nzk2QzExMy45NSw5MS40MTk2IDExMy4yMiw5Mi41MDk2IDExMi44Niw5My4wNDk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMTIuMzQsOTMuODI5NkMxMTIuNDcsOTMuNjM5NiAxMTIuNzMsOTMuMjQ5NiAxMTIuODYsOTMuMDQ5NkMxMTIuNzMsOTMuMjQ5NiAxMTIuNDcsOTMuNjM5NiAxMTIuMzQsOTMuODI5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTExLjMyLDk1LjQ4OTZDMTExLjM5LDk1LjM2OTYgMTExLjUzLDk1LjEyOTYgMTExLjYsOTUuMDA5NkMxMTEuNTMsOTUuMTI5NiAxMTEuMzksOTUuMzY5NiAxMTEuMzIsOTUuNDg5NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTA5LjkzLDk3Ljk1OTZDMTEwLjAzLDk3Ljc3OTYgMTEwLjIzLDk3LjQyOTYgMTEwLjMzLDk3LjI0OTZDMTEwLjIzLDk3LjQyOTYgMTEwLjAzLDk3Ljc3OTYgMTA5LjkzLDk3Ljk1OTZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTEwOS41Niw5OC41Nzk2QzEwOS42NSw5OC40Mjk2IDEwOS44Myw5OC4xMDk2IDEwOS45Myw5Ny45NTk2QzEwOS44Myw5OC4xMDk2IDEwOS42NSw5OC40Mjk2IDEwOS41Niw5OC41Nzk2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xMDguNCwxMDAuNTVDMTA4LjQ0LDEwMC40OCAxMDguNTIsMTAwLjM0IDEwOC41NywxMDAuMjdDMTA4LjUyLDEwMC4zNCAxMDguNDQsMTAwLjQ4IDEwOC40LDEwMC41NVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTA3LjI5LDEwMi40NkMxMDcuMzIsMTAyLjQgMTA3LjM5LDEwMi4yOSAxMDcuNDIsMTAyLjIzQzEwNy4zOSwxMDIuMjkgMTA3LjMyLDEwMi40IDEwNy4yOSwxMDIuNDZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTIxNC4wMiwyMjUuODZDMjE0LjE5LDIyNS41OCAyMTQuNTUsMjI1LjAyIDIxNC43MiwyMjQuNzVDMjE0LjU1LDIyNS4wMiAyMTQuMTksMjI1LjU4IDIxNC4wMiwyMjUuODZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTIxMy41OCwyMjYuNjRDMjEzLjYzLDIyNi41NiAyMTMuNzIsMjI2LjM5IDIxMy43NiwyMjYuMzFDMjEzLjcyLDIyNi4zOSAyMTMuNjMsMjI2LjU2IDIxMy41OCwyMjYuNjRaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTIxMS43MiwyMzAuMDJDMjExLjgsMjI5Ljg5IDIxMS45NSwyMjkuNjMgMjEyLjAyLDIyOS41QzIxMS45NSwyMjkuNjMgMjExLjgsMjI5Ljg5IDIxMS43MiwyMzAuMDJaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTIxMC42NywyMzEuODdDMjEwLjc1LDIzMS43MiAyMTAuOTIsMjMxLjQzIDIxMS4wMSwyMzEuMjhDMjEwLjkyLDIzMS40MyAyMTAuNzUsMjMxLjcyIDIxMC42NywyMzEuODdaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTIwOS42NiwyMzMuNjRDMjA5LjcxLDIzMy41NiAyMDkuOCwyMzMuNCAyMDkuODQsMjMzLjMyQzIwOS44LDIzMy40IDIwOS43MSwyMzMuNTYgMjA5LjY2LDIzMy42NFoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjA4LjI3LDIzNi4wN0MyMDguMzYsMjM1LjkxIDIwOC41NCwyMzUuNTkgMjA4LjYzLDIzNS40NEMyMDguNTQsMjM1LjU5IDIwOC4zNiwyMzUuOTEgMjA4LjI3LDIzNi4wN1oiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjA3Ljg3LDIzNi43NEMyMDcuOTcsMjM2LjU3IDIwOC4xNywyMzYuMjQgMjA4LjI3LDIzNi4wN0MyMDguMTcsMjM2LjI0IDIwNy45NywyMzYuNTcgMjA3Ljg3LDIzNi43NFoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjA2LjU0LDIzOS4wMkMyMDYuNjIsMjM4Ljg5IDIwNi43OCwyMzguNjEgMjA2Ljg2LDIzOC40OEMyMDYuNzgsMjM4LjYxIDIwNi42MiwyMzguODkgMjA2LjU0LDIzOS4wMloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjA1LjUsMjQwLjhDMjA1LjYsMjQwLjYyIDIwNS44MiwyNDAuMjUgMjA1LjkyLDI0MC4wN0MyMDUuODIsMjQwLjI1IDIwNS42LDI0MC42MiAyMDUuNSwyNDAuOFoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjAzLjYyLDI0NC4wN0MyMDMuNjksMjQzLjk0IDIwMy44NCwyNDMuNjkgMjAzLjkxLDI0My41N0MyMDMuODQsMjQzLjY5IDIwMy42OSwyNDMuOTQgMjAzLjYyLDI0NC4wN1oiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjAyLjU2LDI0NS44NkMyMDIuNjcsMjQ1LjY3IDIwMi44OSwyNDUuMzEgMjAyLjk5LDI0NS4xMkMyMDIuODksMjQ1LjMxIDIwMi42NywyNDUuNjcgMjAyLjU2LDI0NS44NloiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjAwLjcxLDI0OS4wNkMyMDAuOCwyNDguOTEgMjAwLjk3LDI0OC42IDIwMS4wNiwyNDguNDVDMjAwLjk3LDI0OC42IDIwMC44LDI0OC45MSAyMDAuNzEsMjQ5LjA2WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xOTkuNjgsMjUwLjlDMTk5Ljc1LDI1MC43OCAxOTkuODksMjUwLjUzIDE5OS45NiwyNTAuNDFDMTk5Ljg5LDI1MC41MyAxOTkuNzUsMjUwLjc4IDE5OS42OCwyNTAuOVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTk4LjU5LDI1Mi44MUMxOTguNjcsMjUyLjY3IDE5OC44MywyNTIuMzkgMTk4LjkxLDI1Mi4yNUMxOTguODMsMjUyLjM5IDE5OC42NywyNTIuNjcgMTk4LjU5LDI1Mi44MVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTk2LjY2LDI1Ni4wOUMxOTYuNzUsMjU1LjkzIDE5Ni45MywyNTUuNjIgMTk3LjAyLDI1NS40N0MxOTYuOTMsMjU1LjYyIDE5Ni43NSwyNTUuOTMgMTk2LjY2LDI1Ni4wOVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTk1LjY5LDI1Ny44NEMxOTUuNzUsMjU3LjcyIDE5NS44OCwyNTcuNDkgMTk1Ljk1LDI1Ny4zN0MxOTUuODgsMjU3LjQ5IDE5NS43NSwyNTcuNzIgMTk1LjY5LDI1Ny44NFoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTk0LjU4LDI1OS43NkMxOTQuNjUsMjU5LjY0IDE5NC44LDI1OS4zOSAxOTQuODcsMjU5LjI2QzE5NC44LDI1OS4zOSAxOTQuNjUsMjU5LjY0IDE5NC41OCwyNTkuNzZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE5Mi42LDI2My4xNUMxOTIuNjgsMjYzLjAyIDE5Mi44NCwyNjIuNzYgMTkyLjkxLDI2Mi42M0MxOTIuODQsMjYyLjc2IDE5Mi42OCwyNjMuMDIgMTkyLjYsMjYzLjE1WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xOTEuNTksMjY0Ljg1QzE5MS42OSwyNjQuNjcgMTkxLjksMjY0LjMyIDE5MiwyNjQuMTRDMTkxLjksMjY0LjMyIDE5MS42OSwyNjQuNjcgMTkxLjU5LDI2NC44NVoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTg5LjgyLDI2Ny45NEMxODkuODgsMjY3LjgzIDE5MC4wMiwyNjcuNTkgMTkwLjA4LDI2Ny40OEMxOTAuMDIsMjY3LjU5IDE4OS44OCwyNjcuODMgMTg5LjgyLDI2Ny45NFoiIHN0eWxlPSJmaWxsOnJnYig4LDE0NSw4Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTg4Ljc2LDI2OS44M0MxODguODIsMjY5LjcyIDE4OC45NCwyNjkuNTEgMTg5LDI2OS40QzE4OC45NCwyNjkuNTEgMTg4LjgyLDI2OS43MiAxODguNzYsMjY5LjgzWiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xODcuNjQsMjcxLjc2QzE4Ny43MSwyNzEuNjUgMTg3Ljg1LDI3MS40MSAxODcuOTIsMjcxLjNDMTg3Ljg1LDI3MS40MSAxODcuNzEsMjcxLjY1IDE4Ny42NCwyNzEuNzZaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE4NS42NSwyNzUuMDlDMTg1Ljc2LDI3NC45MSAxODUuOTYsMjc0LjU1IDE4Ni4wNywyNzQuMzhDMTg1Ljk2LDI3NC41NSAxODUuNzYsMjc0LjkxIDE4NS42NSwyNzUuMDlaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE4NC43NiwyNzYuNzRDMTg0LjgzLDI3Ni42MSAxODQuOTgsMjc2LjMzIDE4NS4wNiwyNzYuMTlDMTg0Ljk4LDI3Ni4zMyAxODQuODMsMjc2LjYxIDE4NC43NiwyNzYuNzRaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE4My4zOSwyNzkuMTJDMTgzLjQ3LDI3OC45NyAxODMuNjUsMjc4LjY3IDE4My43MywyNzguNTJDMTgzLjY1LDI3OC42NyAxODMuNDcsMjc4Ljk3IDE4My4zOSwyNzkuMTJaIiBzdHlsZT0iZmlsbDpyZ2IoOCwxNDUsODYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE4My4wNiwyNzkuNjlDMTgzLjE0LDI3OS41NSAxODMuMywyNzkuMjYgMTgzLjM5LDI3OS4xMkMxODMuMywyNzkuMjYgMTgzLjE0LDI3OS41NSAxODMuMDYsMjc5LjY5WiIgc3R5bGU9ImZpbGw6cmdiKDgsMTQ1LDg2KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0zNDYuNDIsMy4yMTk1NUMzNDYuNSwzLjM0OTU1IDM0Ni42NSwzLjYyOTU1IDM0Ni43MywzLjc2OTU1QzM0Ni42NSwzLjYyOTU1IDM0Ni41LDMuMzQ5NTUgMzQ2LjQyLDMuMjE5NTVaIiBzdHlsZT0iZmlsbDpyZ2IoMTYsMTUyLDkxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0zNTQuNTQsMTcuMzQ5NkMzNTQuNTksMTcuNDI5NiAzNTQuNjcsMTcuNTc5NiAzNTQuNzIsMTcuNjQ5NkMzNTQuNjcsMTcuNTc5NiAzNTQuNTksMTcuNDI5NiAzNTQuNTQsMTcuMzQ5NloiIHN0eWxlPSJmaWxsOnJnYigxNiwxNTIsOTEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTM2OS41NSw0My4zNTk2QzM2OS41OSw0My40Mjk2IDM2OS42OCw0My41Njk2IDM2OS43Miw0My42NDk2QzM2OS42OCw0My41Njk2IDM2OS41OSw0My40Mjk2IDM2OS41NSw0My4zNTk2WiIgc3R5bGU9ImZpbGw6cmdiKDE2LDE1Miw5MSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMzcyLjQ0LDQ4LjI0OTZDMzcyLjUyLDQ4LjM3OTYgMzcyLjY3LDQ4LjY0OTYgMzcyLjc1LDQ4Ljc4OTZDMzcyLjY3LDQ4LjY0OTYgMzcyLjUyLDQ4LjM3OTYgMzcyLjQ0LDQ4LjI0OTZaIiBzdHlsZT0iZmlsbDpyZ2IoMTYsMTUyLDkxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0zNzYuNTMsNTUuMzY5NkMzNzYuNTgsNTUuNDM5NiAzNzYuNjYsNTUuNTc5NiAzNzYuNyw1NS42NTk2QzM3Ni42Niw1NS41Nzk2IDM3Ni41OCw1NS40Mzk2IDM3Ni41Myw1NS4zNjk2WiIgc3R5bGU9ImZpbGw6cmdiKDE2LDE1Miw5MSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMzgwLjQ4LDYyLjIzOTZDMzgwLjU2LDYyLjM2OTYgMzgwLjcxLDYyLjYyOTYgMzgwLjc5LDYyLjc1OTZDMzgwLjcxLDYyLjYyOTYgMzgwLjU2LDYyLjM2OTYgMzgwLjQ4LDYyLjIzOTZaIiBzdHlsZT0iZmlsbDpyZ2IoMTYsMTUyLDkxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0zODQuNTEsNjkuMjE5NkMzODQuNTksNjkuMzQ5NiAzODQuNzQsNjkuNjE5NiAzODQuODIsNjkuNzQ5NkMzODQuNzQsNjkuNjE5NiAzODQuNTksNjkuMzQ5NiAzODQuNTEsNjkuMjE5NloiIHN0eWxlPSJmaWxsOnJnYigxNiwxNTIsOTEpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQyMC41NywxMzEuNjVDNDM3Ljk2LDE2MS43OCA0NTUuNDYsMTkxLjg2IDQ3Mi43MSwyMjIuMDhDNDcyLjc5LDIyMi4yMSA0NzIuOTUsMjIyLjQ5IDQ3My4wMywyMjIuNjJDNDczLjQzLDIyMy4yOCA0NzQuMjMsMjI0LjU5IDQ3NC42MiwyMjUuMjRDNDc0LjcsMjI1LjM3IDQ3NC44NiwyMjUuNjQgNDc0Ljk0LDIyNS43N0w0NzUuNzQsMjI3LjE0QzQ3NS43OSwyMjcuMjMgNDc1Ljg5LDIyNy40MiA0NzUuOTUsMjI3LjUxTDQ3Ni45NSwyMjkuMjVDNDc3LjA1LDIyOS40MiA0NzcuMjQsMjI5Ljc3IDQ3Ny4zNCwyMjkuOTRDNDc3LjQzLDIzMC4wOSA0NzcuNjEsMjMwLjQgNDc3LjcsMjMwLjU2TDQ3OC42OCwyMzIuMjZDNDc4LjcyLDIzMi4zMyA0NzguOCwyMzIuNDcgNDc4Ljg0LDIzMi41NEw0NzkuODIsMjM0LjIyQzQ3OS44NiwyMzQuMjkgNDc5Ljk0LDIzNC40MiA0NzkuOTgsMjM0LjQ5TDQ4MC45NiwyMzYuMTlDNDgxLjA2LDIzNi4zNiA0ODEuMjUsMjM2LjY5IDQ4MS4zNSwyMzYuODZDNDgxLjQ0LDIzNy4wMyA0ODEuNjMsMjM3LjM2IDQ4MS43MiwyMzcuNTJMNDgyLjczLDIzOS4zQzQ4Mi44NywyMzkuNjUgNDgzLjE1LDI0MC4zMyA0ODMuMjksMjQwLjY3TDQ4My41NywyNDEuMjJMNDgzLjcsMjQxLjUxTDQ4My45MiwyNDEuOEw0ODQuNTEsMjQyLjY5QzQ4NC43MiwyNDMuMDIgNDg1LjEzLDI0My42OCA0ODUuMzQsMjQ0LjAxQzQ4NS40NiwyNDQuMjEgNDg1LjcyLDI0NC42MSA0ODUuODQsMjQ0LjgxTDQ4Ni41LDI0NS44NkM0ODYuNywyNDYuMzEgNDg3LjEsMjQ3LjIyIDQ4Ny4zLDI0Ny42N0w0ODcuNiwyNDguMjFMNDg3LjcxLDI0OC40Mkw0ODcuOCwyNDguNTVDNDg4LjI0LDI0OS4yIDQ4OS4xMSwyNTAuNTEgNDg5LjU1LDI1MS4xNkM0ODkuNjYsMjUxLjM0IDQ4OS44OCwyNTEuNyA0OTAsMjUxLjg4TDQ5MC42LDI1Mi44OEM0OTAuNjksMjUzLjA0IDQ5MC44NywyNTMuMzUgNDkwLjk2LDI1My41TDQ5MS45NywyNTUuMjdDNDkyLjA2LDI1NS40MyA0OTIuMjQsMjU1Ljc1IDQ5Mi4zMywyNTUuOTFDNDkyLjQyLDI1Ni4wNyA0OTIuNiwyNTYuMzggNDkyLjY5LDI1Ni41NEw0OTMuNjksMjU4LjI1QzQ5My43MywyNTguMzMgNDkzLjgyLDI1OC40OCA0OTMuODcsMjU4LjU1TDQ5NC43OCwyNjAuMTVDNDk0Ljg0LDI2MC4yNSA0OTQuOTYsMjYwLjQ2IDQ5NS4wMiwyNjAuNTZMNDk1Ljk0LDI2Mi4xN0M0OTYuMDUsMjYyLjM1IDQ5Ni4yNiwyNjIuNzIgNDk2LjM3LDI2Mi45QzQ5Ni40NiwyNjMuMDYgNDk2LjY1LDI2My4zOCA0OTYuNzQsMjYzLjU0QzQ5Ny40OCwyNjQuNzcgNDk4LjE5LDI2Ni4wMiA0OTguODUsMjY3LjNDNDk4Ljk1LDI2Ny41MSA0OTkuMTUsMjY3LjkzIDQ5OS4yNCwyNjguMTRMNDk5LjcsMjY5LjE4QzQ5OS44MiwyNjkuMzggNTAwLjA2LDI2OS43OSA1MDAuMTcsMjY5Ljk5QzUwMC4zMiwyNzAuMTkgNTAwLjYxLDI3MC41NyA1MDAuNzYsMjcwLjc2TDUwMS40NSwyNzEuNzRDNTAxLjU3LDI3MS45MyA1MDEuODEsMjcyLjMxIDUwMS45NCwyNzIuNTFMNTAyLjk1LDI3NC4yNkM1MDMuMDQsMjc0LjQyIDUwMy4yMiwyNzQuNzQgNTAzLjMxLDI3NC45QzUwMy40LDI3NS4wNiA1MDMuNTgsMjc1LjM3IDUwMy42OCwyNzUuNTNMNTA0LjY4LDI3Ny4yNUM1MDQuNzIsMjc3LjMzIDUwNC44LDI3Ny40NyA1MDQuODQsMjc3LjU0TDUwNS43OSwyNzkuMkM1MDUuODMsMjc5LjI3IDUwNS45MSwyNzkuNCA1MDUuOTUsMjc5LjQ3TDUwNi45MiwyODEuMTZDNTA3LjAyLDI4MS4zMyA1MDcuMjIsMjgxLjY3IDUwNy4zMiwyODEuODVDNTA3LjQyLDI4Mi4wMiA1MDcuNjIsMjgyLjM2IDUwNy43MSwyODIuNTNMNTA4LjcxLDI4NC4yNUM1MDguNzUsMjg0LjMyIDUwOC44MiwyODQuNDYgNTA4Ljg2LDI4NC41M0w1MDkuOTIsMjg2LjUxTDUwOS45MSwyODcuNDFDNDg0Ljg5LDI4MC4yMiA0NjAuMjcsMjcxLjY5IDQzNS4xOCwyNjQuNzZDNDEyLjQxLDI1Ny40MSAzODkuNDMsMjUwLjcyIDM2Ni42NiwyNDMuNDFDMzY5LjgzLDI0MS44OSAzNzMuMjIsMjQwLjkyIDM3Ni4zOSwyMzkuNDJDMzc2LjgsMjM4LjA3IDM3Ny4yMywyMzYuNzMgMzc3LjY1LDIzNS40QzM4MS42LDIzMi45MiAzODYuMDYsMjMxLjQzIDM4OS45NSwyMjguODZDMzkwLjEsMjI1LjU3IDM5MC4wOSwyMjIuMjkgMzkwLjA4LDIxOS4wMUMzOTQuNDQsMjE1LjUgMzk5LjA2LDIxMi4yNSA0MDIuNjUsMjA3LjlDNDAzLjAxLDIwMy42MiAzOTkuNzgsMTk4LjYxIDQwMy4xMSwxOTVDNDEzLjM1LDE4Mi4wOCA0MTkuNTYsMTY2LjA3IDQyMC42NywxNDkuNjJDNDIyLjUsMTQzLjYgNDE5LjIxLDEzNy42NCA0MjAuNTcsMTMxLjY1WiIgc3R5bGU9ImZpbGw6cmdiKDI0OSwyMDEsNjUpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUwOS45MSwyODcuNDFMNTEwLjQzLDI4Ny40M0w1MTAuNzIsMjg4LjE5TDUxMC4xMywyODguMjNMNTA5LjkxLDI4Ny40MVoiIHN0eWxlPSJmaWxsOnJnYigyNDksMjAxLDY1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNTcuMzQsMTU3LjMyQzI1Ny40MiwxNTcuNDUgMjU3LjU4LDE1Ny43MiAyNTcuNjYsMTU3Ljg2QzI1Ny41OCwxNTcuNzIgMjU3LjQyLDE1Ny40NSAyNTcuMzQsMTU3LjMyWiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI1OS4xOSwxNjAuNTNDMjU5LjI2LDE2MC42NSAyNTkuMzksMTYwLjg4IDI1OS40NiwxNjFDMjU5LjM5LDE2MC44OCAyNTkuMjYsMTYwLjY1IDI1OS4xOSwxNjAuNTNaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjYwLjI4LDE2Mi40N0MyNjAuMzMsMTYyLjU1IDI2MC40MiwxNjIuNzIgMjYwLjQ3LDE2Mi44QzI2MC40MiwxNjIuNzIgMjYwLjMzLDE2Mi41NSAyNjAuMjgsMTYyLjQ3WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI2MS40OCwxNjQuNTZDMjYxLjU3LDE2NC43MSAyNjEuNzQsMTY1LjAxIDI2MS44MywxNjUuMTZDMjYxLjc0LDE2NS4wMSAyNjEuNTcsMTY0LjcxIDI2MS40OCwxNjQuNTZaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjYxLjgzLDE2NS4xNkMyNjEuOTIsMTY1LjMzIDI2Mi4xMSwxNjUuNjUgMjYyLjIxLDE2NS44MUMyNjIuMTEsMTY1LjY1IDI2MS45MiwxNjUuMzMgMjYxLjgzLDE2NS4xNloiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNjMuMTYsMTY3LjQ0QzI2My4yMSwxNjcuNTMgMjYzLjMyLDE2Ny43MSAyNjMuMzcsMTY3LjhDMjYzLjMyLDE2Ny43MSAyNjMuMjEsMTY3LjUzIDI2My4xNiwxNjcuNDRaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjY1LjM0LDE3MS4yMUMyNjUuNDMsMTcxLjM3IDI2NS42LDE3MS42OCAyNjUuNjksMTcxLjgzQzI2NS42LDE3MS42OCAyNjUuNDMsMTcxLjM3IDI2NS4zNCwxNzEuMjFaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjY3LjIzLDE3NC40OEMyNjcuMzIsMTc0LjYzIDI2Ny40OSwxNzQuOTEgMjY3LjU3LDE3NS4wNUMyNjcuNDksMTc0LjkxIDI2Ny4zMiwxNzQuNjMgMjY3LjIzLDE3NC40OFoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNjguNDMsMTc2LjVDMjY4LjYzLDE3Ni44MyAyNjkuMDIsMTc3LjQ4IDI2OS4yMiwxNzcuODFDMjY5LjAyLDE3Ny40OCAyNjguNjMsMTc2LjgzIDI2OC40MywxNzYuNVoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNjkuNDksMTc4LjI5QzI2OS41MywxNzguMzggMjY5LjYzLDE3OC41NSAyNjkuNjgsMTc4LjYzQzI2OS42MywxNzguNTUgMjY5LjUzLDE3OC4zOCAyNjkuNDksMTc4LjI5WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI3MS40NCwxODEuNzlDMjcxLjYzLDE4Mi4wNSAyNzIuMDEsMTgyLjU5IDI3Mi4yLDE4Mi44NkMyNzIuMDEsMTgyLjU5IDI3MS42MywxODIuMDUgMjcxLjQ0LDE4MS43OVoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNzIuNDYsMTgzLjMyQzI3Mi41LDE4My40IDI3Mi41OSwxODMuNTcgMjcyLjY0LDE4My42NUMyNzIuNTksMTgzLjU3IDI3Mi41LDE4My40IDI3Mi40NiwxODMuMzJaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjc1LjQ1LDE4OC43MkMyNzUuNjQsMTg5IDI3Ni4wMSwxODkuNTYgMjc2LjIsMTg5Ljg0QzI3Ni4wMSwxODkuNTYgMjc1LjY0LDE4OSAyNzUuNDUsMTg4LjcyWiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI3Ni40NywxOTAuMzFDMjc2LjUxLDE5MC4zOSAyNzYuNjEsMTkwLjU2IDI3Ni42NSwxOTAuNjRDMjc2LjYxLDE5MC41NiAyNzYuNTEsMTkwLjM5IDI3Ni40NywxOTAuMzFaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjc4LjIzLDE5My41MUMyNzguMzIsMTkzLjY2IDI3OC40OSwxOTMuOTYgMjc4LjU4LDE5NC4xMUMyNzguNDksMTkzLjk2IDI3OC4zMiwxOTMuNjYgMjc4LjIzLDE5My41MVoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yNzkuMjIsMTk1LjI0QzI3OS4zMiwxOTUuNDEgMjc5LjUyLDE5NS43NyAyNzkuNjIsMTk1Ljk0QzI3OS41MiwxOTUuNzcgMjc5LjMyLDE5NS40MSAyNzkuMjIsMTk1LjI0WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI4MC40NSwxOTcuNEMyODAuNTUsMTk3LjU4IDI4MC43NiwxOTcuOTUgMjgwLjg2LDE5OC4xM0MyODAuNzYsMTk3Ljk1IDI4MC41NSwxOTcuNTggMjgwLjQ1LDE5Ny40WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI4MC44NiwxOTguMTNDMjgwLjk1LDE5OC4yOCAyODEuMTMsMTk4LjYgMjgxLjIyLDE5OC43NkMyODEuMTMsMTk4LjYgMjgwLjk1LDE5OC4yOCAyODAuODYsMTk4LjEzWiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI4Mi4yNCwyMDAuNTFDMjgyLjI4LDIwMC41OSAyODIuMzcsMjAwLjczIDI4Mi40MSwyMDAuOEMyODIuMzcsMjAwLjczIDI4Mi4yOCwyMDAuNTkgMjgyLjI0LDIwMC41MVoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yODMuMzgsMjAyLjQ3QzI4My40NiwyMDIuNjEgMjgzLjYyLDIwMi44OCAyODMuNywyMDMuMDJDMjgzLjYyLDIwMi44OCAyODMuNDYsMjAyLjYxIDI4My4zOCwyMDIuNDdaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjg0LjMxLDIwNC4wNkMyODQuNDIsMjA0LjI0IDI4NC42MywyMDQuNjEgMjg0Ljc0LDIwNC43OUMyODQuNjMsMjA0LjYxIDI4NC40MiwyMDQuMjQgMjg0LjMxLDIwNC4wNloiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yODYuNDcsMjA3LjcxQzI4Ni42NCwyMDggMjg2Ljk5LDIwOC41NyAyODcuMTYsMjA4Ljg2QzI4Ni45OSwyMDguNTcgMjg2LjY0LDIwOCAyODYuNDcsMjA3LjcxWiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI4Ny40NSwyMDkuMzJDMjg3LjUsMjA5LjQxIDI4Ny42LDIwOS41NyAyODcuNjUsMjA5LjY1QzI4Ny42LDIwOS41NyAyODcuNSwyMDkuNDEgMjg3LjQ1LDIwOS4zMloiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0yODkuNDMsMjEyLjQ2TDI4OS41LDIxMi41NkwyODkuNTYsMjEyLjY5QzI4OS41MywyMTIuNjMgMjg5LjQ2LDIxMi41MiAyODkuNDMsMjEyLjQ2WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI5MS41LDIxNi41NkMyOTEuNTksMjE2LjcxIDI5MS43NSwyMTcgMjkxLjg0LDIxNy4xNUMyOTEuNzUsMjE3IDI5MS41OSwyMTYuNzEgMjkxLjUsMjE2LjU2WiIgc3R5bGU9ImZpbGw6cmdiKDIyNywxODMsNTgpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTI5MS44NCwyMTcuMTVDMjkxLjk0LDIxNy4zMiAyOTIuMTQsMjE3LjY2IDI5Mi4yNCwyMTcuODNDMjkyLjE0LDIxNy42NiAyOTEuOTQsMjE3LjMyIDI5MS44NCwyMTcuMTVaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjkzLjE5LDIxOS40NEMyOTMuMjQsMjE5LjUzIDI5My4zNCwyMTkuNzEgMjkzLjQsMjE5LjhDMjkzLjM0LDIxOS43MSAyOTMuMjQsMjE5LjUzIDI5My4xOSwyMTkuNDRaIiBzdHlsZT0iZmlsbDpyZ2IoMjI3LDE4Myw1OCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMjk0LjA2LDIyMC45OEMzMDUuNTksMjI1LjIyIDMxNy41MiwyMjguMjQgMzI5LjE3LDIzMi4wOUMzNDEuNjksMjM1LjggMzU0LjExLDIzOS44MSAzNjYuNjYsMjQzLjQxQzM4OS40MywyNTAuNzIgNDEyLjQxLDI1Ny40MSA0MzUuMTgsMjY0Ljc2QzQzNC44NCwyNjkuNjMgNDM1LjgsMjc0LjYyIDQzNC41OSwyNzkuNEM0MzMuNjYsMjg0LjA1IDQyOC4xLDI4NC43OCA0MjUuODEsMjg4LjQ5QzM5NS4wNCwyODguNSAzNjQuMjgsMjg4LjU5IDMzMy41MiwyODguNDZMMzMyLjg2LDI4OC40MUMzMjAuMTUsMjY1LjgxIDMwNi45MywyNDMuNDkgMjk0LjA2LDIyMC45OFoiIHN0eWxlPSJmaWxsOnJnYigyMjcsMTgzLDU4KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00NzIuNzEsMjIyLjA4QzQ3Mi43OSwyMjIuMjEgNDcyLjk1LDIyMi40OSA0NzMuMDMsMjIyLjYyQzQ3Mi45NSwyMjIuNDkgNDcyLjc5LDIyMi4yMSA0NzIuNzEsMjIyLjA4WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ3NC42MiwyMjUuMjRDNDc0LjcsMjI1LjM3IDQ3NC44NiwyMjUuNjQgNDc0Ljk0LDIyNS43N0M0NzQuODYsMjI1LjY0IDQ3NC43LDIyNS4zNyA0NzQuNjIsMjI1LjI0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ3NS43NCwyMjcuMTRDNDc1Ljc5LDIyNy4yMyA0NzUuODksMjI3LjQyIDQ3NS45NSwyMjcuNTFDNDc1Ljg5LDIyNy40MiA0NzUuNzksMjI3LjIzIDQ3NS43NCwyMjcuMTRaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDc2Ljk1LDIyOS4yNUM0NzcuMDUsMjI5LjQyIDQ3Ny4yNCwyMjkuNzcgNDc3LjM0LDIyOS45NEM0NzcuMjQsMjI5Ljc3IDQ3Ny4wNSwyMjkuNDIgNDc2Ljk1LDIyOS4yNVoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00NzcuMzQsMjI5Ljk0QzQ3Ny40MywyMzAuMDkgNDc3LjYxLDIzMC40IDQ3Ny43LDIzMC41NkM0NzcuNjEsMjMwLjQgNDc3LjQzLDIzMC4wOSA0NzcuMzQsMjI5Ljk0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ3OC42OCwyMzIuMjZDNDc4LjcyLDIzMi4zMyA0NzguOCwyMzIuNDcgNDc4Ljg0LDIzMi41NEM0NzguOCwyMzIuNDcgNDc4LjcyLDIzMi4zMyA0NzguNjgsMjMyLjI2WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ3OS44MiwyMzQuMjJDNDc5Ljg2LDIzNC4yOSA0NzkuOTQsMjM0LjQyIDQ3OS45OCwyMzQuNDlDNDc5Ljk0LDIzNC40MiA0NzkuODYsMjM0LjI5IDQ3OS44MiwyMzQuMjJaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDgwLjk2LDIzNi4xOUM0ODEuMDYsMjM2LjM2IDQ4MS4yNSwyMzYuNjkgNDgxLjM1LDIzNi44NkM0ODEuMjUsMjM2LjY5IDQ4MS4wNiwyMzYuMzYgNDgwLjk2LDIzNi4xOVoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00ODEuMzUsMjM2Ljg2QzQ4MS40NCwyMzcuMDMgNDgxLjYzLDIzNy4zNiA0ODEuNzIsMjM3LjUyQzQ4MS42MywyMzcuMzYgNDgxLjQ0LDIzNy4wMyA0ODEuMzUsMjM2Ljg2WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ4Mi43MywyMzkuM0M0ODIuODcsMjM5LjY1IDQ4My4xNSwyNDAuMzMgNDgzLjI5LDI0MC42N0M0ODMuMTUsMjQwLjMzIDQ4Mi44NywyMzkuNjUgNDgyLjczLDIzOS4zWiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ4My41NywyNDEuMjJDNDgzLjY2LDI0MS4zNyA0ODMuODMsMjQxLjY2IDQ4My45MiwyNDEuOEw0ODMuNywyNDEuNTFMNDgzLjU3LDI0MS4yMloiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00ODQuNTEsMjQyLjY5QzQ4NC43MiwyNDMuMDIgNDg1LjEzLDI0My42OCA0ODUuMzQsMjQ0LjAxQzQ4NS4xMywyNDMuNjggNDg0LjcyLDI0My4wMiA0ODQuNTEsMjQyLjY5WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ4NS4zNCwyNDQuMDFDNDg1LjQ2LDI0NC4yMSA0ODUuNzIsMjQ0LjYxIDQ4NS44NCwyNDQuODFDNDg1LjcyLDI0NC42MSA0ODUuNDYsMjQ0LjIxIDQ4NS4zNCwyNDQuMDFaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDg2LjUsMjQ1Ljg2QzQ4Ni43LDI0Ni4zMSA0ODcuMSwyNDcuMjIgNDg3LjMsMjQ3LjY3QzQ4Ny4xLDI0Ny4yMiA0ODYuNywyNDYuMzEgNDg2LjUsMjQ1Ljg2WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ4Ny42LDI0OC4yMUM0ODcuNjUsMjQ4LjMgNDg3Ljc1LDI0OC40NyA0ODcuOCwyNDguNTVMNDg3LjcxLDI0OC40Mkw0ODcuNiwyNDguMjFaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDg5LjU1LDI1MS4xNkM0ODkuNjYsMjUxLjM0IDQ4OS44OCwyNTEuNyA0OTAsMjUxLjg4QzQ4OS44OCwyNTEuNyA0ODkuNjYsMjUxLjM0IDQ4OS41NSwyNTEuMTZaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDkwLjYsMjUyLjg4QzQ5MC42OSwyNTMuMDQgNDkwLjg3LDI1My4zNSA0OTAuOTYsMjUzLjVDNDkwLjg3LDI1My4zNSA0OTAuNjksMjUzLjA0IDQ5MC42LDI1Mi44OFoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00OTEuOTcsMjU1LjI3QzQ5Mi4wNiwyNTUuNDMgNDkyLjI0LDI1NS43NSA0OTIuMzMsMjU1LjkxQzQ5Mi4yNCwyNTUuNzUgNDkyLjA2LDI1NS40MyA0OTEuOTcsMjU1LjI3WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ5Mi4zMywyNTUuOTFDNDkyLjQyLDI1Ni4wNyA0OTIuNiwyNTYuMzggNDkyLjY5LDI1Ni41NEM0OTIuNiwyNTYuMzggNDkyLjQyLDI1Ni4wNyA0OTIuMzMsMjU1LjkxWiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ5My42OSwyNTguMjVDNDkzLjczLDI1OC4zMyA0OTMuODIsMjU4LjQ4IDQ5My44NywyNTguNTVDNDkzLjgyLDI1OC40OCA0OTMuNzMsMjU4LjMzIDQ5My42OSwyNTguMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDk0Ljc4LDI2MC4xNUM0OTQuODQsMjYwLjI1IDQ5NC45NiwyNjAuNDYgNDk1LjAyLDI2MC41NkM0OTQuOTYsMjYwLjQ2IDQ5NC44NCwyNjAuMjUgNDk0Ljc4LDI2MC4xNVoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik00OTUuOTQsMjYyLjE3QzQ5Ni4wNSwyNjIuMzUgNDk2LjI2LDI2Mi43MiA0OTYuMzcsMjYyLjlDNDk2LjI2LDI2Mi43MiA0OTYuMDUsMjYyLjM1IDQ5NS45NCwyNjIuMTdaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDk2LjM3LDI2Mi45QzQ5Ni40NiwyNjMuMDYgNDk2LjY1LDI2My4zOCA0OTYuNzQsMjYzLjU0QzQ5Ni42NSwyNjMuMzggNDk2LjQ2LDI2My4wNiA0OTYuMzcsMjYyLjlaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNDM1LjE4LDI2NC43NkM0NjAuMjcsMjcxLjY5IDQ4NC44OSwyODAuMjIgNTA5LjkxLDI4Ny40MUw1MTAuMTMsMjg4LjIzQzQ4Mi4wNCwyODguODcgNDUzLjkxLDI4OC4zNCA0MjUuODEsMjg4LjQ5QzQyOC4xLDI4NC43OCA0MzMuNjYsMjg0LjA1IDQzNC41OSwyNzkuNEM0MzUuOCwyNzQuNjIgNDM0Ljg0LDI2OS42MyA0MzUuMTgsMjY0Ljc2WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ5OC44NSwyNjcuM0M0OTguOTUsMjY3LjUxIDQ5OS4xNSwyNjcuOTMgNDk5LjI0LDI2OC4xNEM0OTkuMTUsMjY3LjkzIDQ5OC45NSwyNjcuNTEgNDk4Ljg1LDI2Ny4zWiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTQ5OS43LDI2OS4xOEM0OTkuODIsMjY5LjM4IDUwMC4wNiwyNjkuNzkgNTAwLjE3LDI2OS45OUM1MDAuMDYsMjY5Ljc5IDQ5OS44MiwyNjkuMzggNDk5LjcsMjY5LjE4WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUwMC4xNywyNjkuOTlDNTAwLjMyLDI3MC4xOSA1MDAuNjEsMjcwLjU3IDUwMC43NiwyNzAuNzZDNTAwLjYxLDI3MC41NyA1MDAuMzIsMjcwLjE5IDUwMC4xNywyNjkuOTlaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNTAxLjQ1LDI3MS43NEM1MDEuNTcsMjcxLjkzIDUwMS44MSwyNzIuMzEgNTAxLjk0LDI3Mi41MUM1MDEuODEsMjcyLjMxIDUwMS41NywyNzEuOTMgNTAxLjQ1LDI3MS43NFoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik01MDIuOTUsMjc0LjI2QzUwMy4wNCwyNzQuNDIgNTAzLjIyLDI3NC43NCA1MDMuMzEsMjc0LjlDNTAzLjIyLDI3NC43NCA1MDMuMDQsMjc0LjQyIDUwMi45NSwyNzQuMjZaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNTAzLjMxLDI3NC45QzUwMy40LDI3NS4wNiA1MDMuNTgsMjc1LjM3IDUwMy42OCwyNzUuNTNDNTAzLjU4LDI3NS4zNyA1MDMuNCwyNzUuMDYgNTAzLjMxLDI3NC45WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUwNC42OCwyNzcuMjVDNTA0LjcyLDI3Ny4zMyA1MDQuOCwyNzcuNDcgNTA0Ljg0LDI3Ny41NEM1MDQuOCwyNzcuNDcgNTA0LjcyLDI3Ny4zMyA1MDQuNjgsMjc3LjI1WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUwNS43OSwyNzkuMkM1MDUuODMsMjc5LjI3IDUwNS45MSwyNzkuNCA1MDUuOTUsMjc5LjQ3QzUwNS45MSwyNzkuNCA1MDUuODMsMjc5LjI3IDUwNS43OSwyNzkuMloiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik01MDYuOTIsMjgxLjE2QzUwNy4wMiwyODEuMzMgNTA3LjIyLDI4MS42NyA1MDcuMzIsMjgxLjg1QzUwNy4yMiwyODEuNjcgNTA3LjAyLDI4MS4zMyA1MDYuOTIsMjgxLjE2WiIgc3R5bGU9ImZpbGw6cmdiKDIzMiwxODQsNTMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTUwNy4zMiwyODEuODVDNTA3LjQyLDI4Mi4wMiA1MDcuNjIsMjgyLjM2IDUwNy43MSwyODIuNTNDNTA3LjYyLDI4Mi4zNiA1MDcuNDIsMjgyLjAyIDUwNy4zMiwyODEuODVaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNNTA4LjcxLDI4NC4yNUM1MDguNzUsMjg0LjMyIDUwOC44MiwyODQuNDYgNTA4Ljg2LDI4NC41M0M1MDguODIsMjg0LjQ2IDUwOC43NSwyODQuMzIgNTA4LjcxLDI4NC4yNVoiIHN0eWxlPSJmaWxsOnJnYigyMzIsMTg0LDUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik01MDkuOTIsMjg2LjUxQzUxMC4wNSwyODYuNzQgNTEwLjMsMjg3LjIgNTEwLjQzLDI4Ny40M0w1MDkuOTEsMjg3LjQxTDUwOS45MiwyODYuNTFaIiBzdHlsZT0iZmlsbDpyZ2IoMjMyLDE4NCw1Myk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTQ3LjIxLDM0MS4wOEMxNTcuNTIsMzIzLjUgMTY3LjMyLDMwNS41OSAxNzcuOTcsMjg4LjIyQzIyOS42LDI4OC40MSAyODEuMjQsMjg3LjkzIDMzMi44NiwyODguNDFMMzMzLjUyLDI4OC40NkMzMDcuNDEsMjg5LjMgMjgxLjIzLDI4OC4yNCAyNTUuMTIsMjg4LjlDMjUwLjE0LDI5Mi4xMSAyNDYuODIsMjk3LjMxIDI0Mi4wNSwzMDAuODFDMjM3LjYyLDMwNC4wNCAyMzQuMzYsMzA4LjU0IDIzMC4xMywzMTEuOTlDMjI0LjIsMzE2LjM2IDIxOS43OSwzMjIuNDIgMjEzLjc3LDMyNi43QzIwNi44MSwzMzQuMDcgMTk4Ljc4LDM0MC4yOCAxOTEuNzYsMzQ3LjYxQzE4Ni41LDM1MS42NSAxODIuMSwzNTYuNjQgMTc3LjIsMzYxLjA5QzE3MS44MSwzNjUgMTY3LjY4LDM3MC4zIDE2Mi42NCwzNzQuNjJDMTYyLjUxLDM3NC43MyAxNjIuMjYsMzc0Ljk1IDE2Mi4xMywzNzUuMDdDMTYxLjg2LDM3NS4yOCAxNjEuMzMsMzc1LjcyIDE2MS4wNiwzNzUuOTNDMTYwLjkzLDM3Ni4wNCAxNjAuNjksMzc2LjI0IDE2MC41NiwzNzYuMzVDMTU2LjU5LDM3OS40MiAxNTMuNTUsMzgzLjQ3IDE0OS42NSwzODYuNjJDMTQ5LjUyLDM4Ni43MyAxNDkuMjcsMzg2Ljk0IDE0OS4xNSwzODcuMDRDMTQ5LjAyLDM4Ny4xNSAxNDguNzcsMzg3LjM2IDE0OC42NCwzODcuNDZDMTQyLjk1LDM5Mi4xMyAxMzguMzksMzk4LjA0IDEzMi40Miw0MDIuMzlDMTI2LjQxLDQwOC4zNSAxMTkuNjMsNDEzLjQ3IDExMy45Miw0MTkuNzVDMTA1LjQ4LDQyNi42OSA5OC4xOCw0MzQuODggODkuNDgsNDQxLjUzQzkxLjY0LDQzNi44MiA5NC41LDQzMi41IDk3LjAxLDQyNy45OUMxMTMuNzUsMzk5LjAyIDEzMC40NywzNzAuMDUgMTQ3LjIxLDM0MS4wOFoiIHN0eWxlPSJmaWxsOnJnYig0MSwxMDYsMjE3KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik04OS4wNCw0NDIuMTdDODkuMTUsNDQyLjAxIDg5LjM3LDQ0MS42OSA4OS40OCw0NDEuNTNMODkuNDUsNDQyLjE4TDg5LjA0LDQ0Mi4xN1oiIHN0eWxlPSJmaWxsOnJnYig0MSwxMDYsMjE3KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGlkPSIjMmE3MWU5ZmYiIGQ9Ik0zMzMuNTIsMjg4LjQ2QzM2NC4yOCwyODguNTkgMzk1LjA0LDI4OC41IDQyNS44MSwyODguNDlDNDUzLjkxLDI4OC4zNCA0ODIuMDQsMjg4Ljg3IDUxMC4xMywyODguMjNMNTEwLjcyLDI4OC4xOUw1MTEuMTIsMjg4LjNMNTExLjEyLDI4OC4zOEM0ODEuNDYsMzM5LjY1IDQ1MS44OSwzOTAuOTggNDIyLjIzLDQ0Mi4yNkMzMTEuMyw0NDIuMjMgMjAwLjM3LDQ0Mi4zNiA4OS40NSw0NDIuMThMODkuNDgsNDQxLjUzQzk4LjE4LDQzNC44OCAxMDUuNDgsNDI2LjY5IDExMy45Miw0MTkuNzVDMTE5LjYzLDQxMy40NyAxMjYuNDEsNDA4LjM1IDEzMi40Miw0MDIuMzlDMTM4LjM5LDM5OC4wNCAxNDIuOTUsMzkyLjEzIDE0OC42NCwzODcuNDZDMTQ4Ljc3LDM4Ny4zNiAxNDkuMDIsMzg3LjE1IDE0OS4xNSwzODcuMDRDMTQ5LjI3LDM4Ni45NCAxNDkuNTIsMzg2LjczIDE0OS42NSwzODYuNjJDMTUzLjU1LDM4My40NyAxNTYuNTksMzc5LjQyIDE2MC41NiwzNzYuMzVDMTYwLjY5LDM3Ni4yNCAxNjAuOTMsMzc2LjA0IDE2MS4wNiwzNzUuOTNDMTYxLjMzLDM3NS43MiAxNjEuODYsMzc1LjI4IDE2Mi4xMywzNzUuMDdDMTYyLjI2LDM3NC45NSAxNjIuNTEsMzc0LjczIDE2Mi42NCwzNzQuNjJDMTY3LjY4LDM3MC4zIDE3MS44MSwzNjUgMTc3LjIsMzYxLjA5QzE4Mi4xLDM1Ni42NCAxODYuNSwzNTEuNjUgMTkxLjc2LDM0Ny42MUMxOTguNzgsMzQwLjI4IDIwNi44MSwzMzQuMDcgMjEzLjc3LDMyNi43QzIxOS43OSwzMjIuNDIgMjI0LjIsMzE2LjM2IDIzMC4xMywzMTEuOTlDMjM0LjM2LDMwOC41NCAyMzcuNjIsMzA0LjA0IDI0Mi4wNSwzMDAuODFDMjQ2LjgyLDI5Ny4zMSAyNTAuMTQsMjkyLjExIDI1NS4xMiwyODguOUMyODEuMjMsMjg4LjI0IDMwNy40MSwyODkuMyAzMzMuNTIsMjg4LjQ2WiIgc3R5bGU9ImZpbGw6cmdiKDQyLDExMywyMzMpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE2Mi4xMywzNzUuMDdDMTYyLjI2LDM3NC45NSAxNjIuNTEsMzc0LjczIDE2Mi42NCwzNzQuNjJDMTYyLjUxLDM3NC43MyAxNjIuMjYsMzc0Ljk1IDE2Mi4xMywzNzUuMDdaIiBzdHlsZT0iZmlsbDpyZ2IoNDAsMTEwLDIzMCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTYxLjA2LDM3NS45M0MxNjEuMzMsMzc1LjcyIDE2MS44NiwzNzUuMjggMTYyLjEzLDM3NS4wN0MxNjEuODYsMzc1LjI4IDE2MS4zMywzNzUuNzIgMTYxLjA2LDM3NS45M1oiIHN0eWxlPSJmaWxsOnJnYig0MCwxMTAsMjMwKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDxwYXRoIGQ9Ik0xNjAuNTYsMzc2LjM1QzE2MC42OSwzNzYuMjQgMTYwLjkzLDM3Ni4wNCAxNjEuMDYsMzc1LjkzQzE2MC45MywzNzYuMDQgMTYwLjY5LDM3Ni4yNCAxNjAuNTYsMzc2LjM1WiIgc3R5bGU9ImZpbGw6cmdiKDQwLDExMCwyMzApO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPHBhdGggZD0iTTE0OS4xNSwzODcuMDRDMTQ5LjI3LDM4Ni45NCAxNDkuNTIsMzg2LjczIDE0OS42NSwzODYuNjJDMTQ5LjUyLDM4Ni43MyAxNDkuMjcsMzg2Ljk0IDE0OS4xNSwzODcuMDRaIiBzdHlsZT0iZmlsbDpyZ2IoNDAsMTEwLDIzMCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8cGF0aCBkPSJNMTQ4LjY0LDM4Ny40NkMxNDguNzcsMzg3LjM2IDE0OS4wMiwzODcuMTUgMTQ5LjE1LDM4Ny4wNEMxNDkuMDIsMzg3LjE1IDE0OC43NywzODcuMzYgMTQ4LjY0LDM4Ny40NloiIHN0eWxlPSJmaWxsOnJnYig0MCwxMTAsMjMwKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KPC9zdmc+Cg==";
	},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjczLjQsMzAwLjVsLTAuMyw1OGM0OC45LTguMiw4Ni4zLTUxLDg2LjMtMTAyLjVjMC0xNS45LTMuNi0zMS0xMC00NC41Yy0yLjgtNS44LTYtMTEuMy05LjgtMTYuNWw0Ny4xLTQzLjUNCgkJYzEuMSwxLjMsMi4xLDIuNywzLjEsNGMyMC45LDI4LDMzLjIsNjIuOCwzMy4yLDEwMC41YzAsMS4yLDAsMi41LDAsMy43Yy0xLjUsNzEuNS00Ny42LDEzMi0xMTEuNCwxNTQuNg0KCQljLTEyLjMsNC4zLTI1LjIsNy4zLTM4LjUsOC43bC0wLjEsNTdsLTc2LjItNjdMMTcwLjYsMzkwbDQ0LjQtMzguN0wyNzMuNCwzMDAuNXoiLz4NCgk8cGF0aCBkPSJNODksMjUyLjNjMS42LTcyLjEsNDguMy0xMzMsMTEyLjktMTU1LjJjMTEuNy00LDI0LTYuOCwzNi44LTguMWwwLjEtNTdsNzYuMSw2Ni45bDI2LjIsMjMuMWwtNDQuMywzOC42bC01OC40LDUwLjkNCgkJbDAuMi01Ny45Yy00OC44LDguMy04Niw1MS4xLTg2LDEwMi40YzAsMTYsMy42LDMxLjEsMTAuMSw0NC43YzIuNyw1LjgsNiwxMS4yLDkuNywxNi4zbC00Nyw0My42Yy0xLjMtMS42LTIuNi0zLjMtMy44LTUNCgkJQzEwMS4xLDMyNy43LDg5LDI5My4zLDg5LDI1NkM4OSwyNTQuOCw4OSwyNTMuNSw4OSwyNTIuM3oiLz4NCjwvZz4NCjwvc3ZnPg0K"},function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjU2LDI1NmMtMTcuNywwLTMyLTE0LjMtMzItMzJWNjRjMC0xNy43LDE0LjMtMzIsMzItMzJzMzIsMTQuMywzMiwzMnYxNjBDMjg4LDI0MS43LDI3My43LDI1NiwyNTYsMjU2eiIvPg0KCTxwYXRoIGQ9Ik0zNzksNjguOEwzNzksNjguOGMtNS0zLTEwLjgtNC44LTE3LTQuOGMtMTcuNywwLTMyLDE0LjMtMzIsMzJjMCw2LjIsMS44LDEyLDQuOCwxNi45YzIsMy4yLDQuNiw2LjEsNy42LDguNA0KCQljMS4yLDAuOSwyLjQsMS43LDMuNywyLjVjOC4xLDUuNiwxNS44LDExLjksMjMsMTkuMUMzOTkuNCwxNzMuMSw0MTYsMjEzLjMsNDE2LDI1NmMwLDQyLjctMTYuNiw4Mi45LTQ2LjksMTEzLjENCgkJQzMzOC45LDM5OS40LDI5OC43LDQxNiwyNTYsNDE2Yy00Mi43LDAtODIuOS0xNi42LTExMy4xLTQ2LjlDMTEyLjYsMzM4LjksOTYsMjk4LjcsOTYsMjU2YzAtNDIuNywxNi42LTgyLjksNDYuOS0xMTMuMQ0KCQljNy4xLTcuMSwxNC44LTEzLjUsMjIuOS0xOWMxLjQtMC44LDIuNi0xLjYsMy45LTIuNmMzLTIuMyw1LjUtNS4xLDcuNS04LjNjMy4xLTQuOSw0LjgtMTAuNyw0LjgtMTYuOWMwLTE3LjctMTQuMy0zMi0zMi0zMg0KCQljLTYuMiwwLTEyLDEuOC0xNi45LDQuOGwtMC4xLTAuMUM3Mi4yLDEwOC44LDMyLDE3Ny43LDMyLDI1NmMwLDEyMy43LDEwMC4zLDIyNCwyMjQsMjI0YzEyMy43LDAsMjI0LTEwMC4zLDIyNC0yMjQNCgkJQzQ4MCwxNzcuNyw0MzkuOCwxMDguOCwzNzksNjguOHoiLz4NCjwvZz4NCjwvc3ZnPg0K"},function(N,D){N.exports=M}])});
	//# sourceMappingURL=widget.js.map

/***/ }
/******/ ]);