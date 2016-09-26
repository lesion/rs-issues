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

	// require remotestoragejs
	var RemoteStorage = __webpack_require__(1)
	__webpack_require__(3)(RemoteStorage);

	var rs = new RemoteStorage()
	rs.displayWidget()
	rs.access.claim('bookmarks','rw')

	var bookmark = {url: 'http://remotestorage.io', title: 'title'}
	rs.bookmarks.archive.store(bookmark)




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define("RemoteStorage", ["xmlhttprequest"], factory);
		else if(typeof exports === 'object')
			exports["RemoteStorage"] = factory(require("xmlhttprequest"));
		else
			root["RemoteStorage"] = factory(root["xmlhttprequest"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_29__) {
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

		__webpack_require__(1);
		__webpack_require__(3);
		__webpack_require__(4);
		__webpack_require__(5);
		__webpack_require__(6);
		__webpack_require__(11);
		__webpack_require__(12);
		__webpack_require__(13);
		__webpack_require__(14);
		__webpack_require__(15);
		__webpack_require__(16);
		__webpack_require__(17);
		__webpack_require__(18);
		__webpack_require__(19);
		__webpack_require__(20);
		__webpack_require__(22);
		__webpack_require__(23);
		__webpack_require__(24);
		__webpack_require__(25);
		__webpack_require__(26);
		__webpack_require__(27);
		__webpack_require__(30);
		module.exports = __webpack_require__(2);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		  /**
		   * Class: RemoteStorage.I18n
		   *
		   * TODO add documentation
		   **/
		
		  var RemoteStorage = __webpack_require__(2);
		  
		  var dictionary = {
		    "view_info": 'This app allows you to use your own storage. <a href="http://remotestorage.io/" target="_blank">Learn more!</a>',
		    "view_connect": "<strong>Connect</strong> remote storage",
		    "view_connecting": "Connecting <strong>%s</strong>",
		    "view_offline": "Offline",
		    "view_error_occured": "Sorry! An error occured.",
		    "view_invalid_key": "Wrong key!",
		    "view_confirm_reset": "Are you sure you want to reset everything? This will clear your local data and reload the page.",
		    "view_get_me_out": "Get me out of here!",
		    "view_error_plz_report": 'If this problem persists, please <a href="http://remotestorage.io/community/" target="_blank">let us know</a>!',
		    "view_unauthorized": "Unauthorized! Click here to reconnect."
		  };
		
		 RemoteStorage.I18n = {
		
		    translate: function () {
		      var str    = arguments[0],
		          params = Array.prototype.splice.call(arguments, 1);
		
		      if (typeof dictionary[str] !== "string") {
		        throw "Unknown translation string: " + str;
		      } else {
		        str = dictionary[str];
		      }
		      return (str.replace(/%s/g, function (){ return params.shift(); }));
		    },
		
		    getDictionary: function () {
		      return dictionary;
		    },
		
		    setDictionary: function (newDictionary) {
		      dictionary = newDictionary;
		    },
		
		    _rs_init: function() {
		    }
		  };

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {
		  var hasLocalStorage;
		
		  // wrapper to implement defer() functionality
		  Promise.defer = function () {
		    var resolve, reject;
		    var promise = new Promise(function() {
		      resolve = arguments[0];
		      reject = arguments[1];
		    });
		    return {
		        resolve: resolve,
		      reject: reject,
		      promise: promise
		    };
		  };
		
		  function logError(error) {
		    if (typeof(error) === 'string') {
		      console.error(error);
		    } else {
		      console.error(error.message, error.stack);
		    }
		  }
		
		  function emitUnauthorized(r) {
		    if (r.statusCode === 403  || r.statusCode === 401) {
		      this._emit('error', new RemoteStorage.Unauthorized());
		    }
		    return Promise.resolve(r);
		  }
		
		  var SyncedGetPutDelete = __webpack_require__(3);
		  /**
		   * Class: RemoteStorage
		   *
		   * TODO needs proper introduction and links to relevant classes etc
		   *
		   * Constructor for global remoteStorage object.
		   *
		   * This class primarily contains feature detection code and a global convenience API.
		   *
		   * Depending on which features are built in, it contains different attributes and
		   * functions. See the individual features for more information.
		   *
		   *  (start code)
		   *  var remoteStorage = new RemoteStorage({
		   *    logging: true,  // defaults to false
		   *    cordovaRedirectUri: 'https://app.mygreatapp.com' // defaults to undefined
		   *  });
		   *  (end code)
		   */
		  var RemoteStorage = function (cfg) {
		    /**
		     * Event: ready
		     *
		     * Fired when ready
		     **/
		    /**
		     * Event: not-connected
		     *
		     * Fired when ready, but no storage connected ("anonymous mode")
		     **/
		    /**
		     * Event: connected
		     *
		     * Fired when a remote storage has been connected
		     **/
		    /**
		     * Event: disconnected
		     *
		     * Fired after disconnect
		     **/
		    /**
		     * Event: error
		     *
		     * Fired when an error occurs
		     *
		     * Arguments:
		     * the error
		     **/
		    /**
		     * Event: features-loaded
		     *
		     * Fired when all features are loaded
		     **/
		    /**
		     * Event: connecting
		     *
		     * Fired before webfinger lookup
		     **/
		    /**
		     * Event: authing
		     *
		     * Fired before redirecting to the authing server
		     **/
		    /**
		     * Event: wire-busy
		     *
		     * Fired when a wire request starts
		     **/
		    /**
		     * Event: wire-done
		     *
		     * Fired when a wire request completes
		     **/
		
		    // Initial configuration property settings.
		    if (typeof cfg === 'object') {
		      RemoteStorage.config.logging = !!cfg.logging;
		      RemoteStorage.config.cordovaRedirectUri = cfg.cordovaRedirectUri;
		    }
		
		    RemoteStorage.eventHandling(
		      this, 'ready', 'connected', 'disconnected', 'not-connected', 'conflict',
		            'error', 'features-loaded', 'connecting', 'authing', 'wire-busy',
		            'wire-done', 'sync-interval-change'
		    );
		
		    // pending get/put/delete calls.
		    this._pending = [];
		
		    this._setGPD({
		      get: this._pendingGPD('get'),
		      put: this._pendingGPD('put'),
		      delete: this._pendingGPD('delete')
		    });
		
		    this._cleanups = [];
		
		    this._pathHandlers = { change: {} };
		
		    this.apiKeys = {};
		
		    hasLocalStorage = RemoteStorage.util.localStorageAvailable();
		
		    if (hasLocalStorage) {
		      try {
		        this.apiKeys = JSON.parse(localStorage.getItem('remotestorage:api-keys')) || {};
		      } catch(exc) {
		        // ignored
		      }
		      this.setBackend(localStorage.getItem('remotestorage:backend') || 'remotestorage');
		    }
		
		    var origOn = this.on;
		
		    this.on = function (eventName, handler) {
		      if (eventName === 'ready' && this.remote.connected && this._allLoaded) {
		        setTimeout(handler, 0);
		      } else if (eventName === 'features-loaded' && this._allLoaded) {
		        setTimeout(handler, 0);
		      }
		      return origOn.call(this, eventName, handler);
		    };
		
		    this._init();
		
		    this.fireInitial = function () {
		      if (this.local) {
		        setTimeout(this.local.fireInitial.bind(this.local), 0);
		      }
		    }.bind(this);
		
		    this.on('ready', this.fireInitial.bind(this));
		  };
		
		  RemoteStorage.SyncedGetPutDelete = SyncedGetPutDelete;
		
		  RemoteStorage.DiscoveryError = function (message) {
		    Error.apply(this, arguments);
		    this.message = message;
		  };
		
		  RemoteStorage.DiscoveryError.prototype = Object.create(Error.prototype);
		
		  RemoteStorage.Unauthorized = function () { Error.apply(this, arguments); };
		  RemoteStorage.Unauthorized.prototype = Object.create(Error.prototype);
		
		  /**
		   * Method: RemoteStorage.log
		   *
		   * Log using console.log, when remoteStorage logging is enabled.
		   *
		   * You can enable logging with <enableLog>.
		   *
		   * (In node.js you can also enable logging during remoteStorage object
		   * creation. See: <RemoteStorage>).
		   */
		  RemoteStorage.log = function () {
		    if (RemoteStorage.config.logging) {
		      console.log.apply(console, arguments);
		    }
		  };
		
		  RemoteStorage.config = {
		    logging: false,
		    changeEvents: {
		      local:    true,
		      window:   false,
		      remote:   true,
		      conflict: true
		    },
		    discoveryTimeout: 10000,
		    cordovaRedirectUri: undefined
		  };
		
		  RemoteStorage.prototype = {
		
		    /**
		     * Method: displayWidget
		     *
		     * Displays the widget at the top right of the page. Make sure to call this function
		     * once on every pageload (after the html 'body' tag), unless you use a custom widget.
		     *
		     * Parameters:
		     *
		     *   domID: identifier of the DOM element which should embody the widget (optional)
		     */
		     // (see src/widget.js for implementation)
		
		    /**
		     * Property: remote
		     *
		     * Properties:
		     *
		     *   connected   - Boolean, whether or not a remote store is connected
		     *   online      - Boolean, whether last sync action was successful or not
		     *   userAddress - String, the user address of the connected user
		     *   properties  - String, the properties of the WebFinger link
		     */
		
		    /**
		     * Method: scope
		     *
		     * Returns a BaseClient with a certain scope (base path). Please use this method
		     * only for debugging, and always use defineModule instead, to get access to a
		     * BaseClient from a module in an app.
		     *
		     * Parameters:
		     *
		     *   scope - A string, with a leading and a trailing slash, specifying the
		     *           base path of the BaseClient that will be returned.
		     *
		     * Code example:
		     *
		     * (start code)
		     * remoteStorage.scope('/pictures/').getListing('');
		     * remoteStorage.scope('/public/pictures/').getListing('');
		     */
		
		    /**
		     * Method: connect
		     *
		     * Connect to a remoteStorage server.
		     *
		     * Parameters:
		     *   userAddress        - The user address (user@host) to connect to.
		     *   token              - (optional) A bearer token acquired beforehand
		     *
		     * Discovers the WebFinger profile of the given user address and initiates
		     * the OAuth dance.
		     *
		     * This method must be called *after* all required access has been claimed.
		     * When using the connect widget, it will call this method itself.
		     *
		     * Special cases:
		     *
		     * 1. If a bearer token is supplied as second argument, the OAuth dance
		     *    will be skipped and the supplied token be used instead. This is
		     *    useful outside of browser environments, where the token has been
		     *    acquired in a different way.
		     *
		     * 2. If the Webfinger profile for the given user address doesn't contain
		     *    an auth URL, the library will assume that client and server have
		     *    established authorization among themselves, which will omit bearer
		     *    tokens in all requests later on. This is useful for example when using
		     *    Kerberos and similar protocols.
		     */
		    connect: function (userAddress, token) {
		      this.setBackend('remotestorage');
		      if (userAddress.indexOf('@') < 0) {
		        this._emit('error', new RemoteStorage.DiscoveryError("User address doesn't contain an @."));
		        return;
		      }
		
		      if (global.cordova) {
		        if (typeof RemoteStorage.config.cordovaRedirectUri !== 'string') {
		          this._emit('error', new RemoteStorage.DiscoveryError("Please supply a custom HTTPS redirect URI for your Cordova app"));
		          return;
		        }
		        if (!global.cordova.InAppBrowser) {
		          this._emit('error', new RemoteStorage.DiscoveryError("Please include the InAppBrowser Cordova plugin to enable OAuth"));
		          return;
		        }
		      }
		
		      this.remote.configure({
		        userAddress: userAddress
		      });
		      this._emit('connecting');
		
		      var discoveryTimeout = setTimeout(function () {
		        this._emit('error', new RemoteStorage.DiscoveryError("No storage information found at that user address."));
		      }.bind(this), RemoteStorage.config.discoveryTimeout);
		
		      RemoteStorage.Discover(userAddress).then(function (info) {
		        // Info contains fields: href, storageApi, authURL (optional), properties
		
		        clearTimeout(discoveryTimeout);
		        this._emit('authing');
		        info.userAddress = userAddress;
		        this.remote.configure(info);
		        if (! this.remote.connected) {
		          if (info.authURL) {
		            if (typeof token === 'undefined') {
		              // Normal authorization step; the default way to connect
		              this.authorize(info.authURL, RemoteStorage.config.cordovaRedirectUri);
		            } else if (typeof token === 'string') {
		              // Token supplied directly by app/developer/user
		              RemoteStorage.log('Skipping authorization sequence and connecting with known token');
		              this.remote.configure({ token: token });
		            } else {
		              throw new Error("Supplied bearer token must be a string");
		            }
		          } else {
		            // In lieu of an excplicit authURL, assume that the browser and
		            // server handle any authorization needs; for instance, TLS may
		            // trigger the browser to use a client certificate, or a 401 Not
		            // Authorized response may make the browser send a Kerberos ticket
		            // using the SPNEGO method.
		            this.impliedauth();
		          }
		        }
		      }.bind(this), function(err) {
		        this._emit('error', new RemoteStorage.DiscoveryError("Failed to contact storage server."));
		      }.bind(this));
		    },
		
		    /**
		     * Method: disconnect
		     *
		     * "Disconnect" from remotestorage server to terminate current session.
		     * This method clears all stored settings and deletes the entire local
		     * cache.
		     */
		    disconnect: function () {
		      if (this.remote) {
		        this.remote.configure({
		          userAddress: null,
		          href: null,
		          storageApi: null,
		          token: null,
		          properties: null
		        });
		      }
		      this._setGPD({
		        get: this._pendingGPD('get'),
		        put: this._pendingGPD('put'),
		        delete: this._pendingGPD('delete')
		      });
		      var n = this._cleanups.length, i = 0;
		
		      var oneDone = function () {
		        i++;
		        if (i >= n) {
		          this._init();
		          RemoteStorage.log('Done cleaning up, emitting disconnected and disconnect events');
		          this._emit('disconnected');
		        }
		      }.bind(this);
		
		      if (n > 0) {
		        this._cleanups.forEach(function (cleanup) {
		          var cleanupResult = cleanup(this);
		          if (typeof(cleanupResult) === 'object' && typeof(cleanupResult.then) === 'function') {
		            cleanupResult.then(oneDone);
		          } else {
		            oneDone();
		          }
		        }.bind(this));
		      } else {
		        oneDone();
		      }
		    },
		
		    setBackend: function (what) {
		      this.backend = what;
		      if (hasLocalStorage) {
		        if (what) {
		          localStorage.setItem('remotestorage:backend', what);
		        } else {
		          localStorage.removeItem('remotestorage:backend');
		        }
		      }
		    },
		
		    /**
		     * Method: onChange
		     *
		     * Add a "change" event handler to the given path. Whenever a "change"
		     * happens (as determined by the backend, such as e.g.
		     * <RemoteStorage.IndexedDB>) and the affected path is equal to or below
		     * the given 'path', the given handler is called.
		     *
		     * You should usually not use this method directly, but instead use the
		     * "change" events provided by <RemoteStorage.BaseClient>.
		     *
		     * Parameters:
		     *   path    - Absolute path to attach handler to.
		     *   handler - Handler function.
		     */
		    onChange: function (path, handler) {
		      if (! this._pathHandlers.change[path]) {
		        this._pathHandlers.change[path] = [];
		      }
		      this._pathHandlers.change[path].push(handler);
		    },
		
		    /**
		     * Method: enableLog
		     *
		     * Enable remoteStorage logging.
		     */
		    enableLog: function () {
		      RemoteStorage.config.logging = true;
		    },
		
		    /**
		     * Method: disableLog
		     *
		     * Disable remoteStorage logging
		     */
		    disableLog: function () {
		      RemoteStorage.config.logging = false;
		    },
		
		    /**
		     * Method: log
		     *
		     * The same as <RemoteStorage.log>.
		     */
		    log: function () {
		      RemoteStorage.log.apply(RemoteStorage, arguments);
		    },
		
		    /**
		     * Method: setApiKeys (experimental)
		     *
		     * Set API keys for (currently) GoogleDrive and/or Dropbox backend support.
		     * See also the 'backends' example in the starter-kit. Note that support for
		     * both these backends is still experimental.
		     *
		     * Parameters:
		     *   type - string, either 'googledrive' or 'dropbox'
		     *   keys - object, with one string field; 'clientId' for GoogleDrive, or
		     *          'appKey' for Dropbox.
		     *
		     */
		    setApiKeys: function (type, keys) {
		      if (keys) {
		        this.apiKeys[type] = keys;
		        if (type === 'dropbox' && (typeof this.dropbox === 'undefined' ||
		                                   this.dropbox.clientId !== keys.appKey)) {
		          RemoteStorage.Dropbox._rs_init(this);
		        } else if (type === 'googledrive' && (typeof this.googledrive === 'undefined' ||
		                                              this.googledrive.clientId !== keys.clientId)) {
		          RemoteStorage.GoogleDrive._rs_init(this);
		        }
		      } else {
		        delete this.apiKeys[type];
		      }
		      if (hasLocalStorage) {
		        localStorage.setItem('remotestorage:api-keys', JSON.stringify(this.apiKeys));
		      }
		    },
		
		    /**
		     * Method: setCordovaRedirectUri
		     *
		     * Set redirect URI to be used for the OAuth redirect within the
		     * in-app-browser window in Cordova apps.
		     *
		     * Parameters:
		     *   uri - string, valid HTTP(S) URI
		     */
		    setCordovaRedirectUri: function (uri) {
		      if (typeof uri !== 'string' || !uri.match(/http(s)?\:\/\//)) {
		        throw new Error("Cordova redirect URI must be a URI string");
		      }
		      RemoteStorage.config.cordovaRedirectUri = uri;
		    },
		
		    /**
		     ** INITIALIZATION
		     **/
		
		    _init: function () {
		      var self = this,
		          readyFired = false;
		
		      function fireReady() {
		        try {
		          if (!readyFired) {
		            self._emit('ready');
		            readyFired = true;
		          }
		        } catch(e) {
		          console.error("'ready' failed: ", e, e.stack);
		          self._emit('error', e);
		        }
		      }
		
		      this._loadFeatures(function (features) {
		        this.log('[RemoteStorage] All features loaded');
		        this.local = features.local && new features.local();
		        // this.remote set by WireClient._rs_init as lazy property on
		        // RS.prototype
		
		        if (this.local && this.remote) {
		          this._setGPD(SyncedGetPutDelete, this);
		          this._bindChange(this.local);
		        } else if (this.remote) {
		          this._setGPD(this.remote, this.remote);
		        }
		
		        if (this.remote) {
		          this.remote.on('connected', function (){
		            fireReady();
		            self._emit('connected');
		          });
		          this.remote.on('not-connected', function (){
		            fireReady();
		            self._emit('not-connected');
		          });
		          if (this.remote.connected) {
		            fireReady();
		            self._emit('connected');
		          }
		
		          if (!this.hasFeature('Authorize')) {
		            this.remote.stopWaitingForToken();
		          }
		        }
		
		        this._collectCleanupFunctions();
		
		        try {
		          this._allLoaded = true;
		          this._emit('features-loaded');
		        } catch(exc) {
		          logError(exc);
		          this._emit('error', exc);
		        }
		        this._processPending();
		      }.bind(this));
		    },
		
		    _collectCleanupFunctions: function () {
		      this._cleanups = [];
		      for (var i=0; i < this.features.length; i++) {
		        var cleanup = this.features[i].cleanup;
		        if (typeof(cleanup) === 'function') {
		          this._cleanups.push(cleanup);
		        }
		      }
		    },
		
		    /**
		     ** FEATURE DETECTION
		     **/
		    _loadFeatures: function (callback) {
		      var featureList = [
		        'WireClient',
		        'I18n',
		        'Dropbox',
		        'GoogleDrive',
		        'Access',
		        'Caching',
		        'Discover',
		        'Authorize',
		        'Widget',
		        'IndexedDB',
		        'LocalStorage',
		        'InMemoryStorage',
		        'Sync',
		        'BaseClient',
		        'Env'
		      ];
		      var features = [];
		      var featuresDone = 0;
		      var self = this;
		
		      function featureDone() {
		        featuresDone++;
		        if (featuresDone === featureList.length) {
		          setTimeout(function () {
		            features.caching = !!RemoteStorage.Caching;
		            features.sync = !!RemoteStorage.Sync;
		            [
		              'IndexedDB',
		              'LocalStorage',
		              'InMemoryStorage'
		            ].some(function (cachingLayer) {
		              if (features.some(function (feature) { return feature.name === cachingLayer; })) {
		                features.local = RemoteStorage[cachingLayer];
		                return true;
		              }
		            });
		            self.features = features;
		            callback(features);
		          }, 0);
		        }
		      }
		
		      function featureInitialized(name) {
		        self.log("[RemoteStorage] [FEATURE "+name+"] initialized.");
		        features.push({
		          name : name,
		          init :  RemoteStorage[name]._rs_init,
		          supported : true,
		          cleanup : RemoteStorage[name]._rs_cleanup
		        });
		        featureDone();
		      }
		
		      function featureFailed(name, err) {
		        self.log("[RemoteStorage] [FEATURE "+name+"] initialization failed ( "+err+")");
		        featureDone();
		      }
		
		      function featureSupported(name, success) {
		        self.log( true ? "":" not"+" supported");
		        if (!success) {
		          featureDone();
		        }
		      }
		
		      function initFeature(name) {
		        var initResult;
		        try {
		          initResult = RemoteStorage[name]._rs_init(self);
		        } catch(e) {
		          featureFailed(name, e);
		          return;
		        }
		        if (typeof(initResult) === 'object' && typeof(initResult.then) === 'function') {
		          initResult.then(
		            function (){ featureInitialized(name); },
		            function (err){ featureFailed(name, err); }
		          );
		        } else {
		          featureInitialized(name);
		        }
		      }
		
		      featureList.forEach(function (featureName) {
		        self.log("[RemoteStorage] [FEATURE " + featureName + "] initializing...");
		        var impl = RemoteStorage[featureName];
		        var supported;
		
		        if (impl) {
		          supported = !impl._rs_supported || impl._rs_supported();
		
		          if (typeof supported === 'object') {
		            supported.then(
		              function (){
		                featureSupported(featureName, true);
		                initFeature(featureName);
		              },
		              function (){
		                featureSupported(featureName, false);
		              }
		            );
		          } else if (typeof supported === 'boolean') {
		            featureSupported(featureName, supported);
		            if (supported) {
		              initFeature(featureName);
		            }
		          }
		        } else {
		          featureSupported(featureName, false);
		        }
		      });
		    },
		
		    /**
		     * Method: hasFeature
		     *
		     * Checks whether a feature is enabled or not within remoteStorage.
		     * Returns a boolean.
		     *
		     * Parameters:
		     *   name - Capitalized name of the feature. e.g. Authorize, or IndexedDB
		     *
		     * Example:
		     *   (start code)
		     *   if (remoteStorage.hasFeature('LocalStorage')) {
		     *     console.log('LocalStorage is enabled!');
		     *   }
		     *   (end code)
		     *
		     */
		    hasFeature: function (feature) {
		      for (var i = this.features.length - 1; i >= 0; i--) {
		        if (this.features[i].name === feature) {
		          return this.features[i].supported;
		        }
		      }
		      return false;
		    },
		
		    /**
		     ** GET/PUT/DELETE INTERFACE HELPERS
		     **/
		
		    _setGPD: function (impl, context) {
		      function wrap(func) {
		        return function () {
		          return func.apply(context, arguments)
		            .then(emitUnauthorized.bind(this));
		        };
		      }
		      this.get = wrap(impl.get);
		      this.put = wrap(impl.put);
		      this.delete = wrap(impl.delete);
		    },
		
		    _pendingGPD: function (methodName) {
		      return function () {
		        var pending = Promise.defer();
		        this._pending.push({
		          method: methodName,
		          args: Array.prototype.slice.call(arguments),
		          promise: pending
		        });
		        return pending.promise;
		      }.bind(this);
		    },
		
		    _processPending: function () {
		      this._pending.forEach(function (pending) {
		        try {
		          this[pending.method].apply(this, pending.args).then(pending.promise.resolve, pending.promise.reject);
		        } catch(e) {
		          pending.promise.reject(e);
		        }
		      }.bind(this));
		      this._pending = [];
		    },
		
		    /**
		     ** CHANGE EVENT HANDLING
		     **/
		
		    _bindChange: function (object) {
		      object.on('change', this._dispatchEvent.bind(this, 'change'));
		    },
		
		    _dispatchEvent: function (eventName, event) {
		      var self = this;
		      Object.keys(this._pathHandlers[eventName]).forEach(function (path) {
		        var pl = path.length;
		        if (event.path.substr(0, pl) === path) {
		          self._pathHandlers[eventName][path].forEach(function (handler) {
		            var ev = {};
		            for (var key in event) { ev[key] = event[key]; }
		            ev.relativePath = event.path.replace(new RegExp('^' + path), '');
		            try {
		              handler(ev);
		            } catch(e) {
		              console.error("'change' handler failed: ", e, e.stack);
		              self._emit('error', e);
		            }
		          });
		        }
		      });
		    }
		  };
		
		  /**
		   * Property: connected
		   *
		   * Boolean property indicating if remoteStorage is currently connected.
		   */
		  Object.defineProperty(RemoteStorage.prototype, 'connected', {
		    get: function () {
		      return this.remote.connected;
		    }
		  });
		
		  /**
		   * Property: access
		   *
		   * Tracking claimed access scopes. A <RemoteStorage.Access> instance.
		   *
		   *
		   * Property: caching
		   *
		   * Caching settings. A <RemoteStorage.Caching> instance.
		   *
		   * Not available in no-cache builds.
		   *
		   *
		   * Property: remote
		   *
		   * Access to the remote backend used. Usually a <RemoteStorage.WireClient>.
		   *
		   *
		   * Property: local
		   *
		   * Access to the local caching backend used. Usually either a
		   * <RemoteStorage.IndexedDB> or <RemoteStorage.LocalStorage> instance.
		   *
		   * Not available in no-cache builds.
		   */
		
		
		module.exports = RemoteStorage;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		
		var RemoteStorage = __webpack_require__(2)
		
		
		function shareFirst(path) {
		  return ( this.backend === 'dropbox' &&
		           path.match(/^\/public\/.*[^\/]$/) );
		}
		
		var SyncedGetPutDelete = {
		  get: function (path, maxAge) {
		    var self = this;
		    if (this.local) {
		      if (maxAge === undefined) {
		        if ((typeof this.remote === 'object') &&
		             this.remote.connected && this.remote.online) {
		          maxAge = 2*this.getSyncInterval();
		        } else {
		          RemoteStorage.log('Not setting default maxAge, because remote is offline or not connected');
		          maxAge = false;
		        }
		      }
		      var maxAgeInvalid = function (maxAge) {
		        return maxAge !== false && typeof(maxAge) !== 'number';
		      };
		
		      if (maxAgeInvalid(maxAge)) {
		        return Promise.reject('Argument \'maxAge\' must be false or a number');
		      }
		      return this.local.get(path, maxAge, this.sync.queueGetRequest.bind(this.sync));
		    } else {
		      return this.remote.get(path);
		    }
		  },
		
		  put: function (path, body, contentType) {
		    if (shareFirst.bind(this)(path)) {
		      return SyncedGetPutDelete._wrapBusyDone.call(this, this.remote.put(path, body, contentType));
		    }
		    else if (this.local) {
		      return this.local.put(path, body, contentType);
		    } else {
		      return SyncedGetPutDelete._wrapBusyDone.call(this, this.remote.put(path, body, contentType));
		    }
		  },
		
		  'delete': function (path) {
		    if (this.local) {
		      return this.local.delete(path);
		    } else {
		      return SyncedGetPutDelete._wrapBusyDone.call(this, this.remote.delete(path));
		    }
		  },
		
		  _wrapBusyDone: function (result) {
		    var self = this;
		    this._emit('wire-busy');
		    return result.then(function (r) {
		      self._emit('wire-done', { success: true });
		      return Promise.resolve(r);
		    }, function (err) {
		      self._emit('wire-done', { success: false });
		      return Promise.reject(err);
		    });
		  }
		};
		
		module.exports = SyncedGetPutDelete;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  
		  /**
		   * Interface: eventhandling
		   */
		  var methods = {
		    /**
		     * Method: addEventListener
		     *
		     * Install an event handler for the given event name
		     */
		    addEventListener: function (eventName, handler) {
		      if (typeof(eventName) !== 'string') {
		        throw new Error('Argument eventName should be a string');
		      }
		      if (typeof(handler) !== 'function') {
		        throw new Error('Argument handler should be a function');
		      }
		      RemoteStorage.log('[Eventhandling] Adding event listener', eventName, handler);
		      this._validateEvent(eventName);
		      this._handlers[eventName].push(handler);
		    },
		
		    /**
		     * Method: removeEventListener
		     *
		     * Remove a previously installed event handler
		     */
		    removeEventListener: function (eventName, handler) {
		      this._validateEvent(eventName);
		      var hl = this._handlers[eventName].length;
		      for (var i=0;i<hl;i++) {
		        if (this._handlers[eventName][i] === handler) {
		          this._handlers[eventName].splice(i, 1);
		          return;
		        }
		      }
		    },
		
		    _emit: function (eventName) {
		      this._validateEvent(eventName);
		      var args = Array.prototype.slice.call(arguments, 1);
		      this._handlers[eventName].slice().forEach(function (handler) {
		        handler.apply(this, args);
		      });
		    },
		
		    _validateEvent: function (eventName) {
		      if (! (eventName in this._handlers)) {
		        throw new Error("Unknown event: " + eventName);
		      }
		    },
		
		    _delegateEvent: function (eventName, target) {
		      target.on(eventName, function (event) {
		        this._emit(eventName, event);
		      }.bind(this));
		    },
		
		    _addEvent: function (eventName) {
		      this._handlers[eventName] = [];
		    }
		  };
		
		  /**
		   * Method: eventhandling.on
		   *
		   * Alias for <addEventListener>
		   **/
		  methods.on = methods.addEventListener;
		
		  /**
		   * Function: eventHandling
		   *
		   * Mixes event handling functionality into an object.
		   *
		   * The first parameter is always the object to be extended.
		   * All remaining parameter are expected to be strings, interpreted as valid event
		   * names.
		   *
		   * Example:
		   *   (start code)
		   *   var MyConstructor = function () {
		   *     eventHandling(this, 'connected', 'disconnected');
		   *
		   *     this._emit('connected');
		   *     this._emit('disconnected');
		   *     // This would throw an exception:
		   *     // this._emit('something-else');
		   *   };
		   *
		   *   var myObject = new MyConstructor();
		   *   myObject.on('connected', function () { console.log('connected'); });
		   *   myObject.on('disconnected', function () { console.log('disconnected'); });
		   *   // This would throw an exception as well:
		   *   // myObject.on('something-else', function () {});
		   *   (end code)
		   */
		  RemoteStorage.eventHandling = function (object) {
		    var eventNames = Array.prototype.slice.call(arguments, 1);
		    for (var key in methods) {
		      object[key] = methods[key];
		    }
		    object._handlers = {};
		    eventNames.forEach(function (eventName) {
		      object._addEvent(eventName);
		    });
		  };


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {/**
		 * Class: RemoteStorage.Util
		 *
		 * Provides reusable utility functions at RemoteStorage.util
		 *
		 */
		var RemoteStorage = __webpack_require__(2);
		  /**
		   * Function: fixArrayBuffers
		   *
		   * Takes an object and its copy as produced by the _deepClone function
		   * below, and finds and fixes any ArrayBuffers that were cast to `{}` instead
		   * of being cloned to new ArrayBuffers with the same content.
		   *
		   * It recurses into sub-objects, but skips arrays if they occur.
		   */
		  function fixArrayBuffers(srcObj, dstObj) {
		    var field, srcArr, dstArr;
		    if (typeof(srcObj) !== 'object' || Array.isArray(srcObj) || srcObj === null) {
		      return;
		    }
		    for (field in srcObj) {
		      if (typeof(srcObj[field]) === 'object' && srcObj[field] !== null) {
		        if (srcObj[field].toString() === '[object ArrayBuffer]') {
		          dstObj[field] = new ArrayBuffer(srcObj[field].byteLength);
		          srcArr = new Int8Array(srcObj[field]);
		          dstArr = new Int8Array(dstObj[field]);
		          dstArr.set(srcArr);
		        } else {
		          fixArrayBuffers(srcObj[field], dstObj[field]);
		        }
		      }
		    }
		  }
		
		  RemoteStorage.util = {
		    getEventEmitter: function () {
		      var object = {};
		      var args = Array.prototype.slice.call(arguments);
		      args.unshift(object);
		      RemoteStorage.eventHandling.apply(RemoteStorage, args);
		      object.emit = object._emit;
		      return object;
		    },
		
		    extend: function (target) {
		      var sources = Array.prototype.slice.call(arguments, 1);
		      sources.forEach(function (source) {
		        for (var key in source) {
		          target[key] = source[key];
		        }
		      });
		      return target;
		    },
		
		    asyncEach: function (array, callback) {
		      return this.asyncMap(array, callback).
		        then(function () { return array; });
		    },
		
		    asyncMap: function (array, callback) {
		      var pending = Promise.defer();
		      var n = array.length, i = 0;
		      var results = [], errors = [];
		
		      function oneDone() {
		        i++;
		        if (i === n) {
		          pending.resolve(results, errors);
		        }
		      }
		
		      array.forEach(function (item, index) {
		        var result;
		        try {
		          result = callback(item);
		        } catch(exc) {
		          oneDone();
		          errors[index] = exc;
		        }
		        if (typeof(result) === 'object' && typeof(result.then) === 'function') {
		          result.then(function (res) { results[index] = res; oneDone(); },
		                      function (error) { errors[index] = error; oneDone(); });
		        } else {
		          oneDone();
		          results[index] = result;
		        }
		      });
		
		      return pending.promise;
		    },
		
		    containingFolder: function (path) {
		      if (path === '') {
		        return '/';
		      }
		      if (! path) {
		        throw "Path not given!";
		      }
		
		      return path.replace(/\/+/g, '/').replace(/[^\/]+\/?$/, '');
		    },
		
		    isFolder: function (path) {
		      return path.substr(-1) === '/';
		    },
		
		    isDocument: function (path) {
		      return !RemoteStorage.util.isFolder(path);
		    },
		
		    baseName: function (path) {
		      var parts = path.split('/');
		      if (this.isFolder(path)) {
		        return parts[parts.length-2]+'/';
		      } else {
		        return parts[parts.length-1];
		      }
		    },
		
		    cleanPath: function (path) {
		      return path.replace(/\/+/g, '/')
		                 .split('/').map(encodeURIComponent).join('/')
		                 .replace(/'/g, '%27');
		    },
		
		    bindAll: function (object) {
		      for (var key in this) {
		        if (typeof(object[key]) === 'function') {
		          object[key] = object[key].bind(object);
		        }
		      }
		    },
		
		    equal: function (a, b, seen) {
		      var key;
		      seen = seen || [];
		
		      if (typeof(a) !== typeof(b)) {
		        return false;
		      }
		
		      if (typeof(a) === 'number' || typeof(a) === 'boolean' || typeof(a) === 'string') {
		        return a === b;
		      }
		
		      if (typeof(a) === 'function') {
		        return a.toString() === b.toString();
		      }
		
		      if (a instanceof ArrayBuffer && b instanceof ArrayBuffer) {
		        // Without the following conversion the browsers wouldn't be able to
		        // tell the ArrayBuffer instances apart.
		        a = new Uint8Array(a);
		        b = new Uint8Array(b);
		      }
		
		      // If this point has been reached, a and b are either arrays or objects.
		
		      if (a instanceof Array) {
		        if (a.length !== b.length) {
		          return false;
		        }
		
		        for (var i = 0, c = a.length; i < c; i++) {
		          if (!RemoteStorage.util.equal(a[i], b[i], seen)) {
		            return false;
		          }
		        }
		      } else {
		        // Check that keys from a exist in b
		        for (key in a) {
		          if (a.hasOwnProperty(key) && !(key in b)) {
		            return false;
		          }
		        }
		
		        // Check that keys from b exist in a, and compare the values
		        for (key in b) {
		          if (!b.hasOwnProperty(key)) {
		            continue;
		          }
		
		          if (!(key in a)) {
		            return false;
		          }
		
		          var seenArg;
		
		          if (typeof(b[key]) === 'object') {
		            if (seen.indexOf(b[key]) >= 0) {
		              // Circular reference, don't attempt to compare this object.
		              // If nothing else returns false, the objects match.
		              continue;
		            }
		
		            seenArg = seen.slice();
		            seenArg.push(b[key]);
		          }
		
		          if (!RemoteStorage.util.equal(a[key], b[key], seenArg)) {
		            return false;
		          }
		        }
		      }
		
		      return true;
		    },
		
		    equalObj: function (obj1, obj2) {
		      console.warn('DEPRECATION WARNING: RemoteStorage.util.equalObj has been replaced by RemoteStorage.util.equal.');
		      return RemoteStorage.util.equal(obj1, obj2);
		    },
		
		    deepClone: function (obj) {
		      var clone;
		      if (obj === undefined) {
		        return undefined;
		      } else {
		        clone = JSON.parse(JSON.stringify(obj));
		        fixArrayBuffers(obj, clone);
		        return clone;
		      }
		    },
		
		    pathsFromRoot: function (path) {
		      var paths = [path];
		      var parts = path.replace(/\/$/, '').split('/');
		
		      while (parts.length > 1) {
		        parts.pop();
		        paths.push(parts.join('/')+'/');
		      }
		      return paths;
		    },
		
		    /* jshint ignore:start */
		    md5sum: function(str) {
		      //
		      // http://www.myersdaily.org/joseph/javascript/md5.js
		      //
		      function md5cycle(x, k) {
		        var a = x[0], b = x[1], c = x[2], d = x[3];
		
		        a = ff(a, b, c, d, k[0], 7, -680876936);
		        d = ff(d, a, b, c, k[1], 12, -389564586);
		        c = ff(c, d, a, b, k[2], 17,  606105819);
		        b = ff(b, c, d, a, k[3], 22, -1044525330);
		        a = ff(a, b, c, d, k[4], 7, -176418897);
		        d = ff(d, a, b, c, k[5], 12,  1200080426);
		        c = ff(c, d, a, b, k[6], 17, -1473231341);
		        b = ff(b, c, d, a, k[7], 22, -45705983);
		        a = ff(a, b, c, d, k[8], 7,  1770035416);
		        d = ff(d, a, b, c, k[9], 12, -1958414417);
		        c = ff(c, d, a, b, k[10], 17, -42063);
		        b = ff(b, c, d, a, k[11], 22, -1990404162);
		        a = ff(a, b, c, d, k[12], 7,  1804603682);
		        d = ff(d, a, b, c, k[13], 12, -40341101);
		        c = ff(c, d, a, b, k[14], 17, -1502002290);
		        b = ff(b, c, d, a, k[15], 22,  1236535329);
		
		        a = gg(a, b, c, d, k[1], 5, -165796510);
		        d = gg(d, a, b, c, k[6], 9, -1069501632);
		        c = gg(c, d, a, b, k[11], 14,  643717713);
		        b = gg(b, c, d, a, k[0], 20, -373897302);
		        a = gg(a, b, c, d, k[5], 5, -701558691);
		        d = gg(d, a, b, c, k[10], 9,  38016083);
		        c = gg(c, d, a, b, k[15], 14, -660478335);
		        b = gg(b, c, d, a, k[4], 20, -405537848);
		        a = gg(a, b, c, d, k[9], 5,  568446438);
		        d = gg(d, a, b, c, k[14], 9, -1019803690);
		        c = gg(c, d, a, b, k[3], 14, -187363961);
		        b = gg(b, c, d, a, k[8], 20,  1163531501);
		        a = gg(a, b, c, d, k[13], 5, -1444681467);
		        d = gg(d, a, b, c, k[2], 9, -51403784);
		        c = gg(c, d, a, b, k[7], 14,  1735328473);
		        b = gg(b, c, d, a, k[12], 20, -1926607734);
		
		        a = hh(a, b, c, d, k[5], 4, -378558);
		        d = hh(d, a, b, c, k[8], 11, -2022574463);
		        c = hh(c, d, a, b, k[11], 16,  1839030562);
		        b = hh(b, c, d, a, k[14], 23, -35309556);
		        a = hh(a, b, c, d, k[1], 4, -1530992060);
		        d = hh(d, a, b, c, k[4], 11,  1272893353);
		        c = hh(c, d, a, b, k[7], 16, -155497632);
		        b = hh(b, c, d, a, k[10], 23, -1094730640);
		        a = hh(a, b, c, d, k[13], 4,  681279174);
		        d = hh(d, a, b, c, k[0], 11, -358537222);
		        c = hh(c, d, a, b, k[3], 16, -722521979);
		        b = hh(b, c, d, a, k[6], 23,  76029189);
		        a = hh(a, b, c, d, k[9], 4, -640364487);
		        d = hh(d, a, b, c, k[12], 11, -421815835);
		        c = hh(c, d, a, b, k[15], 16,  530742520);
		        b = hh(b, c, d, a, k[2], 23, -995338651);
		
		        a = ii(a, b, c, d, k[0], 6, -198630844);
		        d = ii(d, a, b, c, k[7], 10,  1126891415);
		        c = ii(c, d, a, b, k[14], 15, -1416354905);
		        b = ii(b, c, d, a, k[5], 21, -57434055);
		        a = ii(a, b, c, d, k[12], 6,  1700485571);
		        d = ii(d, a, b, c, k[3], 10, -1894986606);
		        c = ii(c, d, a, b, k[10], 15, -1051523);
		        b = ii(b, c, d, a, k[1], 21, -2054922799);
		        a = ii(a, b, c, d, k[8], 6,  1873313359);
		        d = ii(d, a, b, c, k[15], 10, -30611744);
		        c = ii(c, d, a, b, k[6], 15, -1560198380);
		        b = ii(b, c, d, a, k[13], 21,  1309151649);
		        a = ii(a, b, c, d, k[4], 6, -145523070);
		        d = ii(d, a, b, c, k[11], 10, -1120210379);
		        c = ii(c, d, a, b, k[2], 15,  718787259);
		        b = ii(b, c, d, a, k[9], 21, -343485551);
		
		        x[0] = add32(a, x[0]);
		        x[1] = add32(b, x[1]);
		        x[2] = add32(c, x[2]);
		        x[3] = add32(d, x[3]);
		
		      }
		
		      function cmn(q, a, b, x, s, t) {
		        a = add32(add32(a, q), add32(x, t));
		        return add32((a << s) | (a >>> (32 - s)), b);
		      }
		
		      function ff(a, b, c, d, x, s, t) {
		        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
		      }
		
		      function gg(a, b, c, d, x, s, t) {
		        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
		      }
		
		      function hh(a, b, c, d, x, s, t) {
		        return cmn(b ^ c ^ d, a, b, x, s, t);
		      }
		
		      function ii(a, b, c, d, x, s, t) {
		        return cmn(c ^ (b | (~d)), a, b, x, s, t);
		      }
		
		      function md51(s) {
		        txt = '';
		        var n = s.length,
		            state = [1732584193, -271733879, -1732584194, 271733878], i;
		        for (i=64; i<=s.length; i+=64) {
		          md5cycle(state, md5blk(s.substring(i-64, i)));
		        }
		        s = s.substring(i-64);
		        var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
		        for (i=0; i<s.length; i++)
		          tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
		        tail[i>>2] |= 0x80 << ((i%4) << 3);
		        if (i > 55) {
		          md5cycle(state, tail);
		          for (i=0; i<16; i++) tail[i] = 0;
		        }
		        tail[14] = n*8;
		        md5cycle(state, tail);
		        return state;
		      }
		
		      function md5blk(s) {
		        var md5blks = [], i;
		        for (i=0; i<64; i+=4) {
		          md5blks[i>>2] = s.charCodeAt(i) + (s.charCodeAt(i+1) << 8) + (s.charCodeAt(i+2) << 16) + (s.charCodeAt(i+3) << 24);
		        }
		        return md5blks;
		      }
		
		      var hex_chr = '0123456789abcdef'.split('');
		
		      function rhex(n)
		      {
		        var s='', j=0;
		        for(; j<4; j++)
		          s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
		        return s;
		      }
		
		      function hex(x) {
		        for (var i=0; i<x.length; i++)
		          x[i] = rhex(x[i]);
		        return x.join('');
		      }
		
		      function md5(s) {
		        return hex(md51(s));
		      }
		
		      var add32 = function (a, b) {
		        return (a + b) & 0xFFFFFFFF;
		      };
		
		      if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
		        add32 = function (x, y) {
		          var lsw = (x & 0xFFFF) + (y & 0xFFFF),
		              msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		          return (msw << 16) | (lsw & 0xFFFF);
		        };
		      }
		
		      return md5(str);
		    },
		    /* jshint ignore:end */
		
		
		    localStorageAvailable: function() {
		      if (!('localStorage' in global)) { return false }
		
		      try {
		        global.localStorage.setItem('rs-check', 1);
		        global.localStorage.removeItem('rs-check');
		        return true;
		      } catch(error) {
		        return false;
		      }
		    }
		
		  };
		
		  if (!RemoteStorage.prototype.util) {
		    Object.defineProperty(RemoteStorage.prototype, 'util', {
		      get: function () {
		        console.log('DEPRECATION WARNING: remoteStorage.util was moved to RemoteStorage.util');
		        return RemoteStorage.util;
		      }
		    });
		  }
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, Buffer) {  var RS = __webpack_require__(2);
		  var RemoteStorage = RS;
		  /**
		   * Class: RemoteStorage.WireClient
		   *
		   * WireClient Interface
		   * --------------------
		   *
		   * This file exposes a get/put/delete interface on top of XMLHttpRequest.
		   * It requires to be configured with parameters about the remotestorage server to
		   * connect to.
		   * Each instance of WireClient is always associated with a single remotestorage
		   * server and access token.
		   *
		   * Usually the WireClient instance can be accessed via `remoteStorage.remote`.
		   *
		   * This is the get/put/delete interface:
		   *
		   *   - #get() takes a path and optionally a ifNoneMatch option carrying a version
		   *     string to check. It returns a promise that will be fulfilled with the HTTP
		   *     response status, the response body, the MIME type as returned in the
		   *     'Content-Type' header and the current revision, as returned in the 'ETag'
		   *     header.
		   *   - #put() takes a path, the request body and a content type string. It also
		   *     accepts the ifMatch and ifNoneMatch options, that map to the If-Match and
		   *     If-None-Match headers respectively. See the remotestorage-01 specification
		   *     for details on handling these headers. It returns a promise, fulfilled with
		   *     the same values as the one for #get().
		   *   - #delete() takes a path and the ifMatch option as well. It returns a promise
		   *     fulfilled with the same values as the one for #get().
		   *
		   * In addition to this, the WireClient has some compatibility features to work with
		   * remotestorage 2012.04 compatible storages. For example it will cache revisions
		   * from folder listings in-memory and return them accordingly as the "revision"
		   * parameter in response to #get() requests. Similarly it will return 404 when it
		   * receives an empty folder listing, to mimic remotestorage-01 behavior. Note
		   * that it is not always possible to know the revision beforehand, hence it may
		   * be undefined at times (especially for caching-roots).
		   */
		
		  var hasLocalStorage;
		  var SETTINGS_KEY = 'remotestorage:wireclient';
		
		  var API_2012 = 1, API_00 = 2, API_01 = 3, API_02 = 4, API_HEAD = 5;
		
		  var STORAGE_APIS = {
		    'draft-dejong-remotestorage-00': API_00,
		    'draft-dejong-remotestorage-01': API_01,
		    'draft-dejong-remotestorage-02': API_02,
		    'https://www.w3.org/community/rww/wiki/read-write-web-00#simple': API_2012
		  };
		
		  var isArrayBufferView;
		
		  if (typeof(ArrayBufferView) === 'function') {
		    isArrayBufferView = function (object) { return object && (object instanceof ArrayBufferView); };
		  } else {
		    var arrayBufferViews = [
		      Int8Array, Uint8Array, Int16Array, Uint16Array,
		      Int32Array, Uint32Array, Float32Array, Float64Array
		    ];
		    isArrayBufferView = function (object) {
		      for (var i=0;i<8;i++) {
		        if (object instanceof arrayBufferViews[i]) {
		          return true;
		        }
		      }
		      return false;
		    };
		  }
		
		  var isFolder = RemoteStorage.util.isFolder;
		  var cleanPath = RemoteStorage.util.cleanPath;
		
		  function addQuotes(str) {
		    if (typeof(str) !== 'string') {
		      return str;
		    }
		    if (str === '*') {
		      return '*';
		    }
		
		    return '"' + str + '"';
		  }
		
		  function stripQuotes(str) {
		    if (typeof(str) !== 'string') {
		      return str;
		    }
		
		    return str.replace(/^["']|["']$/g, '');
		  }
		
		  function readBinaryData(content, mimeType, callback) {
		    var blob;
		    global.BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder;
		    if (typeof global.BlobBuilder !== 'undefined') {
		      var bb = new global.BlobBuilder();
		      bb.append(content);
		      blob = bb.getBlob(mimeType);
		    } else {
		      blob = new Blob([content], { type: mimeType });
		    }
		
		    var reader = new FileReader();
		    if (typeof reader.addEventListener === 'function') {
		      reader.addEventListener('loadend', function () {
		        callback(reader.result); // reader.result contains the contents of blob as a typed array
		      });
		    } else {
		      reader.onloadend = function() {
		        callback(reader.result); // reader.result contains the contents of blob as a typed array
		      };
		    }
		    reader.readAsArrayBuffer(blob);
		  }
		
		  function getTextFromArrayBuffer(arrayBuffer, encoding) {
		    var pending = Promise.defer();
		    if (typeof Blob === 'undefined') {
		      var buffer = new Buffer(new Uint8Array(arrayBuffer));
		      pending.resolve(buffer.toString(encoding));
		    } else {
		      var blob;
		      global.BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder;
		      if (typeof global.BlobBuilder !== 'undefined') {
		        var bb = new global.BlobBuilder();
		        bb.append(arrayBuffer);
		        blob = bb.getBlob();
		      } else {
		        blob = new Blob([arrayBuffer]);
		      }
		
		      var fileReader = new FileReader();
		      if (typeof fileReader.addEventListener === 'function') {
		        fileReader.addEventListener('loadend', function (evt) {
		          pending.resolve(evt.target.result);
		        });
		      } else {
		        fileReader.onloadend = function(evt) {
		          pending.resolve(evt.target.result);
		        };
		      }
		      fileReader.readAsText(blob, encoding);
		    }
		    return pending.promise;
		  }
		
		  function determineCharset(mimeType) {
		    var charset = 'UTF-8';
		    var charsetMatch;
		
		    if (mimeType) {
		      charsetMatch = mimeType.match(/charset=(.+)$/);
		      if (charsetMatch) {
		        charset = charsetMatch[1];
		      }
		    }
		    return charset;
		  }
		
		  function isFolderDescription(body) {
		    return ((body['@context'] === 'http://remotestorage.io/spec/folder-description')
		             && (typeof(body['items']) === 'object'));
		  }
		
		  function isSuccessStatus(status) {
		    return [201, 204, 304].indexOf(status) >= 0;
		  }
		
		  function isErrorStatus(status) {
		    return [401, 403, 404, 412].indexOf(status) >= 0;
		  }
		
		  var onErrorCb;
		
		  /**
		   * Class : RemoteStorage.WireClient
		   **/
		  RS.WireClient = function (rs) {
		    this.connected = false;
		
		    /**
		     * Event: change
		     *   Never fired for some reason
		     *   # TODO create issue and fix or remove
		     *
		     * Event: connected
		     *   Fired when the wireclient connect method realizes that it is in
		     *   possession of a token and href
		     **/
		    RS.eventHandling(this, 'change', 'connected', 'wire-busy', 'wire-done', 'not-connected');
		
		    onErrorCb = function (error){
		      if (error instanceof RemoteStorage.Unauthorized) {
		        this.configure({token: null});
		      }
		    }.bind(this);
		    rs.on('error', onErrorCb);
		    if (hasLocalStorage) {
		      var settings;
		      try { settings = JSON.parse(localStorage[SETTINGS_KEY]); } catch(e) {}
		      if (settings) {
		        setTimeout(function () {
		          this.configure(settings);
		        }.bind(this), 0);
		      }
		    }
		
		    this._revisionCache = {};
		
		    if (this.connected) {
		      setTimeout(this._emit.bind(this), 0, 'connected');
		    }
		  };
		
		  RS.WireClient.REQUEST_TIMEOUT = 30000;
		
		  RS.WireClient.prototype = {
		    /**
		     * Property: token
		     *
		     * Holds the bearer token of this WireClient, as obtained in the OAuth dance
		     *
		     * Example:
		     *   (start code)
		     *
		     *   remoteStorage.remote.token
		     *   // -> 'DEADBEEF01=='
		     */
		
		    /**
		     * Property: href
		     *
		     * Holds the server's base URL, as obtained in the Webfinger discovery
		     *
		     * Example:
		     *   (start code)
		     *
		     *   remoteStorage.remote.href
		     *   // -> 'https://storage.example.com/users/jblogg/'
		     */
		
		    /**
		     * Property: storageApi
		     *
		     * Holds the spec version the server claims to be compatible with
		     *
		     * Example:
		     *   (start code)
		     *
		     *   remoteStorage.remote.storageApi
		     *   // -> 'draft-dejong-remotestorage-01'
		     */
		
		    _request: function (method, uri, token, headers, body, getEtag, fakeRevision) {
		      if ((method === 'PUT' || method === 'DELETE') && uri[uri.length - 1] === '/') {
		        return Promise.reject('Don\'t ' + method + ' on directories!');
		      }
		
		      var revision;
		      var reqType;
		      var self = this;
		
		      if (token !== RemoteStorage.Authorize.IMPLIED_FAKE_TOKEN) {
		        headers['Authorization'] = 'Bearer ' + token;
		      }
		
		      this._emit('wire-busy', {
		        method: method,
		        isFolder: isFolder(uri)
		      });
		
		      return RS.WireClient.request(method, uri, {
		        body: body,
		        headers: headers,
		        responseType: 'arraybuffer'
		      }).then(function (response) {
		        self._emit('wire-done', {
		          method: method,
		          isFolder: isFolder(uri),
		          success: true
		        });
		        self.online = true;
		        if (isErrorStatus(response.status)) {
		          RemoteStorage.log('[WireClient] Error response status', response.status);
		          if (getEtag) {
		            revision = stripQuotes(response.getResponseHeader('ETag'));
		          } else {
		            revision = undefined;
		          }
		          return Promise.resolve({statusCode: response.status, revision: revision});
		        } else if (isSuccessStatus(response.status) ||
		                   (response.status === 200 && method !== 'GET')) {
		          revision = stripQuotes(response.getResponseHeader('ETag'));
		          RemoteStorage.log('[WireClient] Successful request', revision);
		          return Promise.resolve({statusCode: response.status, revision: revision});
		        } else {
		          var mimeType = response.getResponseHeader('Content-Type');
		          var body;
		          if (getEtag) {
		            revision = stripQuotes(response.getResponseHeader('ETag'));
		          } else {
		            revision = response.status === 200 ? fakeRevision : undefined;
		          }
		
		          var charset = determineCharset(mimeType);
		
		          if ((!mimeType) || charset === 'binary') {
		            RemoteStorage.log('[WireClient] Successful request with unknown or binary mime-type', revision);
		            return Promise.resolve({statusCode: response.status, body: response.response, contentType: mimeType, revision: revision});
		          } else {
		            return getTextFromArrayBuffer(response.response, charset).then(function (body) {
		              RemoteStorage.log('[WireClient] Successful request', revision);
		              return Promise.resolve({statusCode: response.status, body: body, contentType: mimeType, revision: revision});
		            });
		          }
		        }
		      }, function (error) {
		        self._emit('wire-done', {
		          method: method,
		          isFolder: isFolder(uri),
		          success: false
		        });
		        return Promise.reject(error);
		      });
		    },
		
		    /**
		     *
		     * Method: configure
		     *
		     * Sets the userAddress, href, storageApi, token, and properties of a
		     * remote store. Also sets connected and online to true and emits the
		     * 'connected' event, if both token and href are present.
		     *
		     * Parameters:
		     *   settings - An object that may contain userAddress (string or null),
		     *              href (string or null), storageApi (string or null), token (string
		     *              or null), and/or properties (the JSON-parsed properties object
		     *              from the user's WebFinger record, see section 10 of
		     *              http://tools.ietf.org/html/draft-dejong-remotestorage-03
		     *              or null).
		     *              Fields that are not included (i.e. `undefined`), stay at
		     *              their current value. To set a field, include that field
		     *              with a `string` value. To reset a field, for instance when
		     *              the user disconnected their storage, or you found that the
		     *              token you have has expired, simply set that field to `null`.
		     */
		    configure: function (settings) {
		      if (typeof settings !== 'object') {
		        throw new Error('WireClient configure settings parameter should be an object');
		      }
		      if (typeof settings.userAddress !== 'undefined') {
		        this.userAddress = settings.userAddress;
		      }
		      if (typeof settings.href !== 'undefined') {
		        this.href = settings.href;
		      }
		      if (typeof settings.storageApi !== 'undefined') {
		        this.storageApi = settings.storageApi;
		      }
		      if (typeof settings.token !== 'undefined') {
		        this.token = settings.token;
		      }
		      if (typeof settings.properties !== 'undefined') {
		        this.properties = settings.properties;
		      }
		
		      if (typeof this.storageApi !== 'undefined') {
		        this._storageApi = STORAGE_APIS[this.storageApi] || API_HEAD;
		        this.supportsRevs = this._storageApi >= API_00;
		      }
		      if (this.href && this.token) {
		        this.connected = true;
		        this.online = true;
		        this._emit('connected');
		      } else {
		        this.connected = false;
		      }
		      if (hasLocalStorage) {
		        localStorage[SETTINGS_KEY] = JSON.stringify({
		          userAddress: this.userAddress,
		          href: this.href,
		          storageApi: this.storageApi,
		          token: this.token,
		          properties: this.properties
		        });
		      }
		    },
		
		    stopWaitingForToken: function () {
		      if (!this.connected) {
		        this._emit('not-connected');
		      }
		    },
		
		    get: function (path, options) {
		      var self = this;
		      if (!this.connected) {
		        return Promise.reject('not connected (path: ' + path + ')');
		      }
		      if (!options) { options = {}; }
		      var headers = {};
		      if (this.supportsRevs) {
		        if (options.ifNoneMatch) {
		          headers['If-None-Match'] = addQuotes(options.ifNoneMatch);
		        }
		      } else if (options.ifNoneMatch) {
		        var oldRev = this._revisionCache[path];
		      }
		
		
		      return this._request('GET', this.href + cleanPath(path), this.token, headers,
		                            undefined, this.supportsRevs, this._revisionCache[path])
		      .then(function (r) {
		        if (!isFolder(path)) {
		          return Promise.resolve(r);
		        }
		        var itemsMap = {};
		        if (typeof(r.body) !== 'undefined') {
		          try {
		            r.body = JSON.parse(r.body);
		          } catch (e) {
		            return Promise.reject('Folder description at ' + self.href + cleanPath(path) + ' is not JSON');
		          }
		        }
		
		        if (r.statusCode === 200 && typeof(r.body) === 'object') {
		        // New folder listing received
		          if (Object.keys(r.body).length === 0) {
		          // Empty folder listing of any spec
		            r.statusCode = 404;
		          } else if (isFolderDescription(r.body)) {
		          // >= 02 spec
		            for (var item in r.body.items) {
		              self._revisionCache[path + item] = r.body.items[item].ETag;
		            }
		            itemsMap = r.body.items;
		          } else {
		          // < 02 spec
		            Object.keys(r.body).forEach(function (key){
		              self._revisionCache[path + key] = r.body[key];
		              itemsMap[key] = {'ETag': r.body[key]};
		            });
		          }
		          r.body = itemsMap;
		          return Promise.resolve(r);
		        } else {
		          return Promise.resolve(r);
		        }
		      });
		    },
		
		    put: function (path, body, contentType, options) {
		      if (!this.connected) {
		        return Promise.reject('not connected (path: ' + path + ')');
		      }
		      if (!options) { options = {}; }
		      if ((!contentType.match(/charset=/)) && (body instanceof ArrayBuffer || isArrayBufferView(body))) {
		        contentType +=  '; charset=binary';
		      }
		      var headers = { 'Content-Type': contentType };
		      if (this.supportsRevs) {
		        if (options.ifMatch) {
		          headers['If-Match'] = addQuotes(options.ifMatch);
		        }
		        if (options.ifNoneMatch) {
		          headers['If-None-Match'] = addQuotes(options.ifNoneMatch);
		        }
		      }
		      return this._request('PUT', this.href + cleanPath(path), this.token,
		                     headers, body, this.supportsRevs);
		    },
		
		    'delete': function (path, options) {
		      if (!this.connected) {
		        throw new Error('not connected (path: ' + path + ')');
		      }
		      if (!options) { options = {}; }
		      var headers = {};
		      if (this.supportsRevs) {
		        if (options.ifMatch) {
		          headers['If-Match'] = addQuotes(options.ifMatch);
		        }
		      }
		      return this._request('DELETE', this.href + cleanPath(path), this.token,
		                     headers,
		                     undefined, this.supportsRevs);
		    }
		  };
		
		  // Shared cleanPath used by Dropbox
		  RS.WireClient.cleanPath = cleanPath;
		
		  // Shared isArrayBufferView used by WireClient and Dropbox
		  RS.WireClient.isArrayBufferView = isArrayBufferView;
		
		  RS.WireClient.readBinaryData = readBinaryData;
		
		  // Shared request function used by WireClient, GoogleDrive and Dropbox.
		  RS.WireClient.request = function (method, url, options) {
		    var pending = Promise.defer();
		    RemoteStorage.log('[WireClient]', method, url);
		
		    var timedOut = false;
		
		    var timer = setTimeout(function () {
		      timedOut = true;
		      pending.reject('timeout');
		    }, RS.WireClient.REQUEST_TIMEOUT);
		
		    var xhr = new XMLHttpRequest();
		    xhr.open(method, url, true);
		
		    if (options.responseType) {
		      xhr.responseType = options.responseType;
		    }
		
		    if (options.headers) {
		      for (var key in options.headers) {
		        xhr.setRequestHeader(key, options.headers[key]);
		      }
		    }
		
		    xhr.onload = function () {
		      if (timedOut) { return; }
		      clearTimeout(timer);
		      pending.resolve(xhr);
		    };
		
		    xhr.onerror = function (error) {
		      if (timedOut) { return; }
		      clearTimeout(timer);
		      pending.reject(error);
		    };
		
		    var body = options.body;
		
		    if (typeof(body) === 'object' && !isArrayBufferView(body) && body instanceof ArrayBuffer) {
		      body = new Uint8Array(body);
		    }
		    xhr.send(body);
		    return pending.promise;
		  };
		
		  Object.defineProperty(RemoteStorage.WireClient.prototype, 'storageType', {
		    get: function () {
		      if (this.storageApi) {
		        var spec = this.storageApi.match(/draft-dejong-(remotestorage-\d\d)/);
		        return spec ? spec[1] : '2012.04';
		      }
		    }
		  });
		
		
		  RS.WireClient._rs_init = function (remoteStorage) {
		    hasLocalStorage = RemoteStorage.util.localStorageAvailable();
		    remoteStorage.remote = new RS.WireClient(remoteStorage);
		    this.online = true;
		  };
		
		  RS.WireClient._rs_supported = function () {
		    return !! global.XMLHttpRequest;
		  };
		
		  RS.WireClient._rs_cleanup = function (remoteStorage){
		    if (hasLocalStorage){
		      delete localStorage[SETTINGS_KEY];
		    }
		    remoteStorage.removeEventListener('error', onErrorCb);
		  };
		
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7).Buffer))

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
		/* eslint-disable no-proto */
		
		'use strict'
		
		var base64 = __webpack_require__(8)
		var ieee754 = __webpack_require__(9)
		var isArray = __webpack_require__(10)
		
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
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer, (function() { return this; }())))

	/***/ },
	/* 8 */
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
	/* 9 */
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
	/* 10 */
	/***/ function(module, exports) {

		var toString = {}.toString;
		
		module.exports = Array.isArray || function (arr) {
		  return toString.call(arr) == '[object Array]';
		};


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  
		  var syncInterval = 10000,
		      backgroundSyncInterval = 60000,
		      isBackground = false;
		
		  var isFolder = RemoteStorage.util.isFolder;
		  var isDocument = RemoteStorage.util.isDocument;
		  var equal = RemoteStorage.util.equal;
		  var deepClone = RemoteStorage.util.deepClone;
		  var pathsFromRoot = RemoteStorage.util.pathsFromRoot;
		
		  function taskFor(action, path, promise) {
		    return {
		      action:  action,
		      path:    path,
		      promise: promise
		    };
		  }
		
		  function isStaleChild(node) {
		    return node.remote && node.remote.revision && !node.remote.itemsMap && !node.remote.body;
		  }
		
		  function hasCommonRevision(node) {
		    return node.common && node.common.revision;
		  }
		
		  function handleVisibility() {
		    var hidden,
		        visibilityChange,
		        rs = this;
		
		    function handleVisibilityChange(fg) {
		      var oldValue, newValue;
		      oldValue = rs.getCurrentSyncInterval();
		      isBackground = !fg;
		      newValue = rs.getCurrentSyncInterval();
		      rs._emit('sync-interval-change', {oldValue: oldValue, newValue: newValue});
		    }
		
		    RemoteStorage.Env.on("background", function () {
		      handleVisibilityChange(false);
		    });
		
		    RemoteStorage.Env.on("foreground", function () {
		      handleVisibilityChange(true);
		    });
		  }
		
		  /**
		   * Check if interval is valid: numeric and between 1000ms and 3600000ms
		   *
		   */
		  function isValidInterval(interval) {
		    return (typeof interval === 'number' && interval > 1000 && interval < 3600000);
		  }
		
		  /**
		   * Class: RemoteStorage.Sync
		   *
		   * What this class does is basically six things:
		   * - retrieving the remote version of relevant documents and folders
		   * - add all local and remote documents together into one tree
		   * - push local documents out if they don't exist remotely
		   * - push local changes out to remote documents (conditionally, to
		   *      avoid race conditions where both have changed)
		   * - adopt the local version of a document to its remote version if
		   *      both exist and they differ
		   * - delete the local version of a document if it was deleted remotely
		   * - if any get requests were waiting for remote data, resolve them once
		   *      this data comes in.
		   *
		   * It does this using requests to documents, and to folders. Whenever a
		   * folder GET comes in, it gives information about all the documents it
		   * contains (this is the `markChildren` function).
		   **/
		  RemoteStorage.Sync = function (setLocal, setRemote, setAccess, setCaching) {
		    this.local = setLocal;
		    this.local.onDiff(function (path) {
		      this.addTask(path);
		      this.doTasks();
		    }.bind(this));
		    this.remote = setRemote;
		    this.access = setAccess;
		    this.caching = setCaching;
		    this._tasks = {};
		    this._running = {};
		    this._timeStarted = {};
		    RemoteStorage.eventHandling(this, 'done', 'req-done');
		    this.caching.onActivate(function (path) {
		      this.addTask(path);
		      this.doTasks();
		    }.bind(this));
		  };
		
		  RemoteStorage.Sync.prototype = {
		
		    now: function () {
		      return new Date().getTime();
		    },
		
		    queueGetRequest: function (path) {
		      var pending = Promise.defer();
		
		      if (!this.remote.connected) {
		        pending.reject('cannot fulfill maxAge requirement - remote is not connected');
		      } else if (!this.remote.online) {
		        pending.reject('cannot fulfill maxAge requirement - remote is not online');
		      } else {
		        this.addTask(path, function () {
		          this.local.get(path).then(function (r) {
		            return pending.resolve(r);
		          });
		        }.bind(this));
		
		        this.doTasks();
		      }
		
		      return pending.promise;
		    },
		
		    corruptServerItemsMap: function (itemsMap, force02) {
		      if ((typeof(itemsMap) !== 'object') || (Array.isArray(itemsMap))) {
		        return true;
		      }
		
		      for (var itemName in itemsMap) {
		        var item = itemsMap[itemName];
		
		        if (typeof(item) !== 'object') {
		          return true;
		        }
		        if (typeof(item.ETag) !== 'string') {
		          return true;
		        }
		        if (isFolder(itemName)) {
		          if (itemName.substring(0, itemName.length-1).indexOf('/') !== -1) {
		            return true;
		          }
		        } else {
		          if (itemName.indexOf('/') !== -1) {
		            return true;
		          }
		          if (force02) {
		            if (typeof(item['Content-Type']) !== 'string') {
		              return true;
		            }
		            if (typeof(item['Content-Length']) !== 'number') {
		              return true;
		            }
		          }
		        }
		      }
		
		      return false;
		    },
		
		    corruptItemsMap: function (itemsMap) {
		      if ((typeof(itemsMap) !== 'object') || (Array.isArray(itemsMap))) {
		        return true;
		      }
		
		      for (var itemName in itemsMap) {
		        if (typeof(itemsMap[itemName]) !== 'boolean') {
		          return true;
		        }
		      }
		
		      return false;
		    },
		
		    corruptRevision: function (rev) {
		      return ((typeof(rev) !== 'object') ||
		              (Array.isArray(rev)) ||
		              (rev.revision && typeof(rev.revision) !== 'string') ||
		              (rev.body && typeof(rev.body) !== 'string' && typeof(rev.body) !== 'object') ||
		              (rev.contentType && typeof(rev.contentType) !== 'string') ||
		              (rev.contentLength && typeof(rev.contentLength) !== 'number') ||
		              (rev.timestamp && typeof(rev.timestamp) !== 'number') ||
		              (rev.itemsMap && this.corruptItemsMap(rev.itemsMap)));
		    },
		
		    isCorrupt: function (node) {
		      return ((typeof(node) !== 'object') ||
		              (Array.isArray(node)) ||
		              (typeof(node.path) !== 'string') ||
		              (this.corruptRevision(node.common)) ||
		              (node.local && this.corruptRevision(node.local)) ||
		              (node.remote && this.corruptRevision(node.remote)) ||
		              (node.push && this.corruptRevision(node.push)));
		    },
		
		    hasTasks: function () {
		      return Object.getOwnPropertyNames(this._tasks).length > 0;
		    },
		
		    collectDiffTasks: function () {
		      var num = 0;
		
		      return this.local.forAllNodes(function (node) {
		
		        if (num > 100) {
		          return;
		        }
		
		        if (this.isCorrupt(node)) {
		          RemoteStorage.log('[Sync] WARNING: corrupt node in local cache', node);
		          if (typeof(node) === 'object' && node.path) {
		            this.addTask(node.path);
		            num++;
		          }
		        } else if (this.needsFetch(node) && this.access.checkPathPermission(node.path, 'r')) {
		          this.addTask(node.path);
		          num++;
		        } else if (isDocument(node.path) && this.needsPush(node) &&
		                   this.access.checkPathPermission(node.path, 'rw')) {
		          this.addTask(node.path);
		          num++;
		        }
		      }.bind(this)).then(function () {
		        return num;
		      }, function (err) {
		        throw err;
		      });
		    },
		
		    inConflict: function (node) {
		      return (node.local && node.remote &&
		              (node.remote.body !== undefined || node.remote.itemsMap));
		    },
		
		    needsRefresh: function (node) {
		      if (node.common) {
		        if (!node.common.timestamp) {
		          return true;
		        }
		        return (this.now() - node.common.timestamp > syncInterval);
		      }
		      return false;
		    },
		
		    needsFetch: function (node) {
		      if (this.inConflict(node)) {
		        return true;
		      }
		      if (node.common && node.common.itemsMap === undefined && node.common.body === undefined) {
		        return true;
		      }
		      if (node.remote && node.remote.itemsMap === undefined && node.remote.body === undefined) {
		        return true;
		      }
		      return false;
		    },
		
		    needsPush: function (node) {
		      if (this.inConflict(node)) {
		        return false;
		      }
		      if (node.local && !node.push) {
		        return true;
		      }
		    },
		
		    needsRemotePut: function (node) {
		      return node.local && node.local.body;
		    },
		
		    needsRemoteDelete: function (node) {
		      return node.local && node.local.body === false;
		    },
		
		    getParentPath: function (path) {
		      var parts = path.match(/^(.*\/)([^\/]+\/?)$/);
		
		      if (parts) {
		        return parts[1];
		      } else {
		        throw new Error('Not a valid path: "'+path+'"');
		      }
		    },
		
		    deleteChildPathsFromTasks: function () {
		      for (var path in this._tasks) {
		        var paths = pathsFromRoot(path);
		
		        for (var i=1; i<paths.length; i++) {
		          if (this._tasks[paths[i]]) {
		            // move pending promises to parent task
		            if (Array.isArray(this._tasks[path]) && this._tasks[path].length) {
		              Array.prototype.push.apply(
		                this._tasks[paths[i]],
		                this._tasks[path]
		              );
		            }
		            delete this._tasks[path];
		          }
		        }
		      }
		    },
		
		    collectRefreshTasks: function () {
		      return this.local.forAllNodes(function (node) {
		        var parentPath;
		        if (this.needsRefresh(node)) {
		          try {
		            parentPath = this.getParentPath(node.path);
		          } catch(e) {
		            // node.path is already '/', can't take parentPath
		          }
		          if (parentPath && this.access.checkPathPermission(parentPath, 'r')) {
		            this.addTask(parentPath);
		          } else if (this.access.checkPathPermission(node.path, 'r')) {
		            this.addTask(node.path);
		          }
		        }
		      }.bind(this)).then(function () {
		        this.deleteChildPathsFromTasks();
		      }.bind(this), function (err) {
		        throw err;
		      });
		    },
		
		    flush: function (nodes) {
		      for (var path in nodes) {
		        // Strategy is 'FLUSH' and no local changes exist
		        if (this.caching.checkPath(path) === 'FLUSH' && nodes[path] && !nodes[path].local) {
		          RemoteStorage.log('[Sync] Flushing', path);
		          nodes[path] = undefined; // Cause node to be flushed from cache
		        }
		      }
		      return nodes;
		    },
		
		    doTask: function (path) {
		      return this.local.getNodes([path]).then(function (nodes) {
		        var node = nodes[path];
		        // First fetch:
		        if (typeof(node) === 'undefined') {
		          return taskFor('get', path, this.remote.get(path));
		        }
		        // Fetch known-stale child:
		        else if (isStaleChild(node)) {
		          return taskFor('get', path, this.remote.get(path));
		        }
		        // Push PUT:
		        else if (this.needsRemotePut(node)) {
		          node.push = deepClone(node.local);
		          node.push.timestamp = this.now();
		
		          return this.local.setNodes(this.flush(nodes)).then(function () {
		            var options;
		            if (hasCommonRevision(node)) {
		              options = { ifMatch: node.common.revision };
		            } else {
		              // Initial PUT (fail if something is already there)
		              options = { ifNoneMatch: '*' };
		            }
		
		            return taskFor('put', path,
		              this.remote.put(path, node.push.body, node.push.contentType, options)
		            );
		          }.bind(this));
		        }
		        // Push DELETE:
		        else if (this.needsRemoteDelete(node)) {
		          node.push = { body: false, timestamp: this.now() };
		
		          return this.local.setNodes(this.flush(nodes)).then(function () {
		            if (hasCommonRevision(node)) {
		              return taskFor('delete', path,
		                this.remote.delete(path, { ifMatch: node.common.revision })
		              );
		            } else { // Ascertain current common or remote revision first
		              return taskFor('get', path, this.remote.get(path));
		            }
		          }.bind(this));
		        }
		        // Conditional refresh:
		        else if (hasCommonRevision(node)) {
		          return taskFor('get', path,
		            this.remote.get(path, { ifNoneMatch: node.common.revision })
		          );
		        }
		        else {
		          return taskFor('get', path, this.remote.get(path));
		        }
		      }.bind(this));
		    },
		
		    autoMergeFolder: function (node) {
		      if (node.remote.itemsMap) {
		        node.common = node.remote;
		        delete node.remote;
		
		        if (node.common.itemsMap) {
		          for (var itemName in node.common.itemsMap) {
		            if (!node.local.itemsMap[itemName]) {
		              // Indicates the node is either newly being fetched
		              // has been deleted locally (whether or not leading to conflict);
		              // before listing it in local listings, check if a local deletion
		              // exists.
		              node.local.itemsMap[itemName] = false;
		            }
		          }
		
		          if (equal(node.local.itemsMap, node.common.itemsMap)) {
		            delete node.local;
		          }
		        }
		      }
		      return node;
		    },
		
		    autoMergeDocument: function (node) {
		      hasNoRemoteChanges = function (node) {
		        if (node.remote && node.remote.revision && node.remote.revision !== node.common.revision) {
		          return false;
		        }
		        return (node.common.body === undefined && node.remote.body === false) ||
		               (node.remote.body === node.common.body &&
		                node.remote.contentType === node.common.contentType);
		      };
		      mergeMutualDeletion = function (node) {
		        if (node.remote && node.remote.body === false
		            && node.local && node.local.body === false) {
		           delete node.local;
		        }
		        return node;
		      };
		
		      if (hasNoRemoteChanges(node)) {
		        node = mergeMutualDeletion(node);
		        delete node.remote;
		      } else if (node.remote.body !== undefined) {
		        // keep/revert:
		        RemoteStorage.log('[Sync] Emitting keep/revert');
		
		        this.local._emitChange({
		          origin:         'conflict',
		          path:           node.path,
		          oldValue:       node.local.body,
		          newValue:       node.remote.body,
		          lastCommonValue: node.common.body,
		          oldContentType: node.local.contentType,
		          newContentType: node.remote.contentType,
		          lastCommonContentType: node.common.contentType
		        });
		
		        if (node.remote.body) {
		          node.common = node.remote;
		        } else {
		          node.common = {};
		        }
		        delete node.remote;
		        delete node.local;
		      }
		      return node;
		    },
		
		    autoMerge: function (node) {
		      if (node.remote) {
		        if (node.local) {
		          if (isFolder(node.path)) {
		            return this.autoMergeFolder(node);
		          } else {
		            return this.autoMergeDocument(node);
		          }
		        } else { // no local changes
		          if (isFolder(node.path)) {
		            if (node.remote.itemsMap !== undefined) {
		              node.common = node.remote;
		              delete node.remote;
		            }
		          } else {
		            if (node.remote.body !== undefined) {
		              var change = {
		                origin:   'remote',
		                path:     node.path,
		                oldValue: (node.common.body === false ? undefined : node.common.body),
		                newValue: (node.remote.body === false ? undefined : node.remote.body),
		                oldContentType: node.common.contentType,
		                newContentType: node.remote.contentType
		              };
		              if (change.oldValue || change.newValue) {
		                this.local._emitChange(change);
		              }
		
		              if (!node.remote.body) { // no remote, so delete/don't create
		                return;
		              }
		
		              node.common = node.remote;
		              delete node.remote;
		            }
		          }
		        }
		      } else {
		        if (node.common.body) {
		          this.local._emitChange({
		            origin:   'remote',
		            path:     node.path,
		            oldValue: node.common.body,
		            newValue: undefined,
		            oldContentType: node.common.contentType,
		            newContentType: undefined
		          });
		        }
		
		        return undefined;
		      }
		      return node;
		    },
		
		    updateCommonTimestamp: function (path, revision) {
		      return this.local.getNodes([path]).then(function (nodes) {
		        if (nodes[path] && nodes[path].common && nodes[path].common.revision === revision) {
		          nodes[path].common.timestamp = this.now();
		        }
		        return this.local.setNodes(this.flush(nodes));
		      }.bind(this));
		    },
		
		    markChildren: function (path, itemsMap, changedNodes, missingChildren) {
		      var paths = [];
		      var meta = {};
		      var recurse = {};
		
		      for (var item in itemsMap) {
		        paths.push(path+item);
		        meta[path+item] = itemsMap[item];
		      }
		      for (var childName in missingChildren) {
		        paths.push(path+childName);
		      }
		
		      return this.local.getNodes(paths).then(function (nodes) {
		        var cachingStrategy;
		        var node;
		
		        var nodeChanged = function (node, etag) {
		          return node.common.revision !== etag && (!node.remote || node.remote.revision !== etag);
		        };
		
		        for (var nodePath in nodes) {
		          node = nodes[nodePath];
		
		          if (meta[nodePath]) {
		            if (node && node.common) {
		              if (nodeChanged(node, meta[nodePath].ETag)) {
		                changedNodes[nodePath] = deepClone(node);
		                changedNodes[nodePath].remote = {
		                  revision:  meta[nodePath].ETag,
		                  timestamp: this.now()
		                };
		                changedNodes[nodePath] = this.autoMerge(changedNodes[nodePath]);
		              }
		            } else {
		              cachingStrategy = this.caching.checkPath(nodePath);
		              if (cachingStrategy === 'ALL') {
		                changedNodes[nodePath] = {
		                  path: nodePath,
		                  common: {
		                    timestamp: this.now()
		                  },
		                  remote: {
		                    revision: meta[nodePath].ETag,
		                    timestamp: this.now()
		                  }
		                };
		              }
		            }
		
		            if (changedNodes[nodePath] && meta[nodePath]['Content-Type']) {
		              changedNodes[nodePath].remote.contentType = meta[nodePath]['Content-Type'];
		            }
		
		            if (changedNodes[nodePath] && meta[nodePath]['Content-Length']) {
		              changedNodes[nodePath].remote.contentLength = meta[nodePath]['Content-Length'];
		            }
		          } else if (missingChildren[nodePath.substring(path.length)] && node && node.common) {
		            if (node.common.itemsMap) {
		              for (var commonItem in node.common.itemsMap) {
		                recurse[nodePath+commonItem] = true;
		              }
		            }
		
		            if (node.local && node.local.itemsMap) {
		              for (var localItem in node.local.itemsMap) {
		                recurse[nodePath+localItem] = true;
		              }
		            }
		
		            if (node.remote || isFolder(nodePath)) {
		              changedNodes[nodePath] = undefined;
		            } else {
		              changedNodes[nodePath] = this.autoMerge(node);
		
		              if (typeof changedNodes[nodePath] === 'undefined') {
		                var parentPath = this.getParentPath(nodePath);
		                var parentNode = changedNodes[parentPath];
		                var itemName = nodePath.substring(path.length);
		                if (parentNode && parentNode.local) {
		                  delete parentNode.local.itemsMap[itemName];
		
		                  if (equal(parentNode.local.itemsMap, parentNode.common.itemsMap)) {
		                    delete parentNode.local;
		                  }
		                }
		              }
		            }
		          }
		        }
		
		        return this.deleteRemoteTrees(Object.keys(recurse), changedNodes).then(function (changedObjs2) {
		          return this.local.setNodes(this.flush(changedObjs2));
		        }.bind(this));
		      }.bind(this));
		    },
		
		    deleteRemoteTrees: function (paths, changedNodes) {
		      if (paths.length === 0) {
		        return Promise.resolve(changedNodes);
		      }
		
		      return this.local.getNodes(paths).then(function (nodes) {
		        var subPaths = {};
		
		        collectSubPaths = function (folder, path) {
		          if (folder && folder.itemsMap) {
		            for (var itemName in folder.itemsMap) {
		              subPaths[path+itemName] = true;
		            }
		          }
		        };
		
		        for (var path in nodes) {
		          var node = nodes[path];
		
		          // TODO Why check for the node here? I don't think this check ever applies
		          if (!node) {
		            continue;
		          }
		
		          if (isFolder(path)) {
		            collectSubPaths(node.common, path);
		            collectSubPaths(node.local, path);
		          } else {
		            if (node.common && typeof(node.common.body) !== undefined) {
		              changedNodes[path] = deepClone(node);
		              changedNodes[path].remote = {
		                body:      false,
		                timestamp: this.now()
		              };
		              changedNodes[path] = this.autoMerge(changedNodes[path]);
		            }
		          }
		        }
		
		        // Recurse whole tree depth levels at once:
		        return this.deleteRemoteTrees(Object.keys(subPaths), changedNodes).then(function (changedNodes2) {
		          return this.local.setNodes(this.flush(changedNodes2));
		        }.bind(this));
		      }.bind(this));
		    },
		
		    completeFetch: function (path, bodyOrItemsMap, contentType, revision) {
		      var paths;
		      var parentPath;
		      var pathsFromRootArr = pathsFromRoot(path);
		
		      if (isFolder(path)) {
		        paths = [path];
		      } else {
		        parentPath = pathsFromRootArr[1];
		        paths = [path, parentPath];
		      }
		
		      return this.local.getNodes(paths).then(function (nodes) {
		        var itemName;
		        var missingChildren = {};
		        var node = nodes[path];
		        var parentNode;
		
		        var collectMissingChildren = function (folder) {
		          if (folder && folder.itemsMap) {
		            for (var itemName in folder.itemsMap) {
		              if (!bodyOrItemsMap[itemName]) {
		                missingChildren[itemName] = true;
		              }
		            }
		          }
		        };
		
		        if (typeof(node) !== 'object'  || node.path !== path ||
		            typeof(node.common) !== 'object') {
		          node = {
		            path: path,
		            common: {}
		          };
		          nodes[path] = node;
		        }
		
		        node.remote = {
		          revision: revision,
		          timestamp: this.now()
		        };
		
		        if (isFolder(path)) {
		          collectMissingChildren(node.common);
		          collectMissingChildren(node.remote);
		
		          node.remote.itemsMap = {};
		          for (itemName in bodyOrItemsMap) {
		            node.remote.itemsMap[itemName] = true;
		          }
		        } else {
		          node.remote.body = bodyOrItemsMap;
		          node.remote.contentType = contentType;
		
		          parentNode = nodes[parentPath];
		          if (parentNode && parentNode.local && parentNode.local.itemsMap) {
		            itemName = path.substring(parentPath.length);
		            parentNode.local.itemsMap[itemName] = true;
		            if (equal(parentNode.local.itemsMap, parentNode.common.itemsMap)) {
		              delete parentNode.local;
		            }
		          }
		        }
		
		        nodes[path] = this.autoMerge(node);
		        return {
		          toBeSaved:       nodes,
		          missingChildren: missingChildren
		        };
		      }.bind(this));
		    },
		
		    completePush: function (path, action, conflict, revision) {
		      return this.local.getNodes([path]).then(function (nodes) {
		        var node = nodes[path];
		
		        if (!node.push) {
		          this.stopped = true;
		          throw new Error('completePush called but no push version!');
		        }
		
		        if (conflict) {
		          RemoteStorage.log('[Sync] We have a conflict');
		
		          if (!node.remote || node.remote.revision !== revision) {
		            node.remote = {
		              revision:  revision || 'conflict',
		              timestamp: this.now()
		            };
		            delete node.push;
		          }
		
		          nodes[path] = this.autoMerge(node);
		        } else {
		          node.common = {
		            revision:  revision,
		            timestamp: this.now()
		          };
		
		          if (action === 'put') {
		            node.common.body = node.push.body;
		            node.common.contentType = node.push.contentType;
		
		            if (equal(node.local.body, node.push.body) &&
		                node.local.contentType === node.push.contentType) {
		              delete node.local;
		            }
		
		            delete node.push;
		          } else if (action === 'delete') {
		            if (node.local.body === false) { // No new local changes since push; flush it.
		              nodes[path] = undefined;
		            } else {
		              delete node.push;
		            }
		          }
		        }
		
		        return this.local.setNodes(this.flush(nodes));
		      }.bind(this));
		    },
		
		    dealWithFailure: function (path, action, statusMeaning) {
		      return this.local.getNodes([path]).then(function (nodes) {
		        if (nodes[path]) {
		          delete nodes[path].push;
		          return this.local.setNodes(this.flush(nodes));
		        }
		      }.bind(this));
		    },
		
		    interpretStatus: function (statusCode) {
		      // if (typeof statusCode.length === 'number') {
		      //   statusCode = statusCode[0];
		      // }
		      if (statusCode === 'offline' || statusCode === 'timeout') {
		        return {
		          successful:      false,
		          networkProblems: true,
		          statusCode: statusCode
		        };
		      }
		
		      var series = Math.floor(statusCode / 100);
		
		      return {
		        successful: (series === 2 || statusCode === 304 || statusCode === 412 || statusCode === 404),
		        conflict:   (statusCode === 412),
		        unAuth:     ((statusCode === 401 && this.remote.token !== RemoteStorage.Authorize.IMPLIED_FAKE_TOKEN) ||
		                     statusCode === 402 || statusCode === 403),
		        notFound:   (statusCode === 404),
		        changed:    (statusCode !== 304),
		        statusCode: statusCode
		      };
		    },
		
		    handleGetResponse: function (path, status, bodyOrItemsMap, contentType, revision) {
		      if (status.notFound) {
		        if (isFolder(path)) {
		          bodyOrItemsMap = {};
		        } else {
		          bodyOrItemsMap = false;
		        }
		      }
		
		      if (status.changed) {
		        return this.completeFetch(path, bodyOrItemsMap, contentType, revision).then(function (dataFromFetch) {
		          if (isFolder(path)) {
		            if (this.corruptServerItemsMap(bodyOrItemsMap)) {
		              RemoteStorage.log('[Sync] WARNING: Discarding corrupt folder description from server for ' + path);
		              return false;
		            } else {
		              return this.markChildren(path, bodyOrItemsMap, dataFromFetch.toBeSaved, dataFromFetch.missingChildren).then(function () {
		                return true;
		              });
		            }
		          } else {
		            return this.local.setNodes(this.flush(dataFromFetch.toBeSaved)).then(function () {
		              return true;
		            });
		          }
		        }.bind(this));
		      } else {
		        return this.updateCommonTimestamp(path, revision).then(function () {
		          return true;
		        });
		      }
		    },
		
		    handleResponse: function (path, action, r) {
		      var status = this.interpretStatus(r.statusCode);
		      if (status.successful) {
		        if (action === 'get') {
		          return this.handleGetResponse(path, status, r.body, r.contentType, r.revision);
		        } else if (action === 'put' || action === 'delete') {
		          return this.completePush(path, action, status.conflict, r.revision).then(function () {
		            return true;
		          });
		        } else {
		          throw new Error('cannot handle response for unknown action', action);
		        }
		      } else {
		      // Unsuccessful
		        var error;
		        if (status.unAuth) {
		          error = new RemoteStorage.Unauthorized();
		        } else if (status.networkProblems) {
		          error = new RemoteStorage.SyncError('Network request failed.');
		          this.remote.online = false;
		        } else {
		          error = new Error('HTTP response code ' + status.statusCode + ' received.');
		        }
		
		        return this.dealWithFailure(path, action, status).then(function () {
		          remoteStorageInstance._emit('error', error);
		          throw error;
		        });
		      }
		    },
		
		    numThreads: 10,
		
		    finishTask: function (task) {
		      if (task.action === undefined) {
		        delete this._running[task.path];
		        return;
		      }
		      var self = this;
		
		      return task.promise.then(function (r) {
		        return self.handleResponse(task.path, task.action, r);
		      }, function (err) {
		        RemoteStorage.log('[Sync] wireclient rejects its promise!', task.path, task.action, err);
		        return self.handleResponse(task.path, task.action, {statusCode: 'offline'});
		      })
		
		      .then(function (completed) {
		        delete self._timeStarted[task.path];
		        delete self._running[task.path];
		        self.remote.online = true;
		
		        if (completed) {
		          if (self._tasks[task.path]) {
		            for (var i=0; i<self._tasks[task.path].length; i++) {
		              self._tasks[task.path][i]();
		            }
		            delete self._tasks[task.path];
		          }
		        }
		
		        self._emit('req-done');
		
		        self.collectTasks(false).then(function () {
		          // See if there are any more tasks that are not refresh tasks
		          if (!self.hasTasks() || self.stopped) {
		            RemoteStorage.log('[Sync] Sync is done! Reschedule?', Object.getOwnPropertyNames(self._tasks).length, self.stopped);
		            if (!self.done) {
		              self.done = true;
		              self._emit('done');
		            }
		          } else {
		            // Use a 10ms timeout to let the JavaScript runtime catch its breath
		            // (and hopefully force an IndexedDB auto-commit?), and also to cause
		            // the threads to get staggered and get a good spread over time:
		            setTimeout(function () {
		              self.doTasks();
		            }, 10);
		          }
		        });
		      }, function (err) {
		        console.error('[Sync] Error', err);
		        delete self._timeStarted[task.path];
		        delete self._running[task.path];
		        self._emit('req-done');
		        if (!self.done) {
		          self.done = true;
		          self._emit('done');
		        }
		      });
		    },
		
		    doTasks: function () {
		      var numToHave, numAdded = 0, numToAdd, path;
		      if (this.remote.connected) {
		        if (this.remote.online) {
		          numToHave = this.numThreads;
		        } else {
		          numToHave = 1;
		        }
		      } else {
		        numToHave = 0;
		      }
		      numToAdd = numToHave - Object.getOwnPropertyNames(this._running).length;
		      if (numToAdd <= 0) {
		        return true;
		      }
		      for (path in this._tasks) {
		        if (!this._running[path]) {
		          this._timeStarted[path] = this.now();
		          this._running[path] = this.doTask(path);
		          this._running[path].then(this.finishTask.bind(this));
		          numAdded++;
		          if (numAdded >= numToAdd) {
		            return true;
		          }
		        }
		      }
		      return (numAdded >= numToAdd);
		    },
		
		    collectTasks: function (alsoCheckRefresh) {
		      if (this.hasTasks() || this.stopped) {
		        return Promise.resolve();
		      }
		
		      return this.collectDiffTasks().then(function (numDiffs) {
		        if (numDiffs || alsoCheckRefresh === false) {
		          return Promise.resolve();
		        } else {
		          return this.collectRefreshTasks();
		        }
		      }.bind(this), function (err) {
		        throw err;
		      });
		    },
		
		    addTask: function (path, cb) {
		      if (!this._tasks[path]) {
		        this._tasks[path] = [];
		      }
		      if (typeof(cb) === 'function') {
		        this._tasks[path].push(cb);
		      }
		    },
		
		    /**
		     * Method: sync
		     **/
		    sync: function () {
		      this.done = false;
		
		      if (!this.doTasks()) {
		        return this.collectTasks().then(function () {
		          try {
		            this.doTasks();
		          } catch(e) {
		            console.error('[Sync] doTasks error', e);
		          }
		        }.bind(this), function (e) {
		          console.error('[Sync] Sync error', e);
		          throw new Error('Local cache unavailable');
		        });
		      } else {
		        return Promise.resolve();
		      }
		    },
		  };
		
		  /**
		   * Method: getSyncInterval
		   *
		   * Get the value of the sync interval when application is in the foreground
		   *
		   * Returns a number of milliseconds
		   *
		   */
		  RemoteStorage.prototype.getSyncInterval = function () {
		    return syncInterval;
		  };
		
		  /**
		   * Method: setSyncInterval
		   *
		   * Set the value of the sync interval when application is in the foreground
		   *
		   * Parameters:
		   *   interval - sync interval in milliseconds
		   *
		   */
		  RemoteStorage.prototype.setSyncInterval = function (interval) {
		    if (!isValidInterval(interval)) {
		      throw interval + " is not a valid sync interval";
		    }
		    var oldValue = syncInterval;
		    syncInterval = parseInt(interval, 10);
		    this._emit('sync-interval-change', {oldValue: oldValue, newValue: interval});
		  };
		
		  /**
		   * Method: getBackgroundSyncInterval
		   *
		   * Get the value of the sync interval when application is in the background
		   *
		   * Returns a number of milliseconds
		   *
		   */
		  RemoteStorage.prototype.getBackgroundSyncInterval = function () {
		    return backgroundSyncInterval;
		  };
		
		  /**
		   * Method: setBackgroundSyncInterval
		   *
		   * Set the value of the sync interval when the application is in the background
		   *
		   * Parameters:
		   *   interval - sync interval in milliseconds
		   *
		   */
		  RemoteStorage.prototype.setBackgroundSyncInterval = function (interval) {
		    if(!isValidInterval(interval)) {
		      throw interval + " is not a valid sync interval";
		    }
		    var oldValue = backgroundSyncInterval;
		    backgroundSyncInterval = parseInt(interval, 10);
		    this._emit('sync-interval-change', {oldValue: oldValue, newValue: interval});
		  };
		
		  /**
		   * Method: getCurrentSyncInterval
		   *
		   * Get the value of the current sync interval
		   *
		   * Returns a number of milliseconds
		   *
		   */
		  RemoteStorage.prototype.getCurrentSyncInterval = function () {
		    return isBackground ? backgroundSyncInterval : syncInterval;
		  };
		
		  var SyncError = function (originalError) {
		    var msg = 'Sync failed: ';
		    if (typeof(originalError) === 'object' && 'message' in originalError) {
		      msg += originalError.message;
		    } else {
		      msg += originalError;
		    }
		    this.originalError = originalError;
		    this.message = msg;
		  };
		
		  SyncError.prototype = new Error();
		  SyncError.prototype.constructor = SyncError;
		
		  RemoteStorage.SyncError = SyncError;
		
		  RemoteStorage.prototype.syncCycle = function () {
		    if (this.sync.stopped) {
		      return;
		    }
		
		    this.sync.on('done', function () {
		      RemoteStorage.log('[Sync] Sync done. Setting timer to', this.getCurrentSyncInterval());
		      if (!this.sync.stopped) {
		        if (this._syncTimer) {
		          clearTimeout(this._syncTimer);
		        }
		        this._syncTimer = setTimeout(this.sync.sync.bind(this.sync), this.getCurrentSyncInterval());
		      }
		    }.bind(this));
		
		    this.sync.sync();
		  };
		
		  RemoteStorage.prototype.stopSync = function () {
		    if (this.sync) {
		      RemoteStorage.log('[Sync] Stopping sync');
		      this.sync.stopped = true;
		    } else {
		      // TODO When is this ever the case and what is syncStopped for then?
		      RemoteStorage.log('[Sync] Will instantiate sync stopped');
		      this.syncStopped = true;
		    }
		  };
		
		  RemoteStorage.prototype.startSync = function () {
		    this.sync.stopped = false;
		    this.syncStopped = false;
		    this.sync.sync();
		  };
		
		  var syncCycleCb;
		  var remoteStorageInstance
		  RemoteStorage.Sync._rs_init = function (remoteStorage) {
		    remoteStorageInstance = remoteStorage
		    syncCycleCb = function () {
		      RemoteStorage.log('[Sync] syncCycleCb calling syncCycle');
		      if (RemoteStorage.Env.isBrowser()) {
		        handleVisibility.bind(remoteStorage)();
		      }
		      if (!remoteStorage.sync) {
		        // Call this now that all other modules are also ready:
		        remoteStorage.sync = new RemoteStorage.Sync(
		            remoteStorage.local, remoteStorage.remote, remoteStorage.access,
		            remoteStorage.caching);
		
		        if (remoteStorage.syncStopped) {
		          RemoteStorage.log('[Sync] Instantiating sync stopped');
		          remoteStorage.sync.stopped = true;
		          delete remoteStorage.syncStopped;
		        }
		      }
		
		      RemoteStorage.log('[Sync] syncCycleCb calling syncCycle');
		      remoteStorage.syncCycle();
		    };
		
		    syncOnConnect = function() {
		      remoteStorage.removeEventListener('connected', syncOnConnect);
		      remoteStorage.startSync();
		    };
		
		    remoteStorage.on('ready', syncCycleCb);
		    remoteStorage.on('connected', syncOnConnect);
		  };
		
		  RemoteStorage.Sync._rs_cleanup = function (remoteStorage) {
		    remoteStorage.stopSync();
		    remoteStorage.removeEventListener('ready', syncCycleCb);
		    remoteStorage.removeEventListener('connected', syncOnConnect);
		    delete remoteStorage.sync;
		  };
		


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  
		  RemoteStorage.MODULES = {};
		
		  /*
		   * Method: RemoteStorage.defineModule
		   *
		   * Method for defining a new remoteStorage data module
		   *
		   * Parameters:
		   *   moduleName - Name of the module
		   *   builder    - Builder function defining the module
		   *
		   * The module builder function should return an object containing another
		   * object called exports, which will be exported to any <RemoteStorage>
		   * instance under the module's name. So when defining a locations module,
		   * like in the example below, it would be accessible via
		   * `remoteStorage.locations`, which would in turn have a `features` and a
		   * `collections` property.
		   *
		   * The function receives a private and a public client, which are both
		   * instances of <RemoteStorage.BaseClient>. In the following example, the
		   * scope of privateClient is `/locations` and the scope of publicClient is
		   * `/public/locations`.
		   *
		   * Example:
		   *   (start code)
		   *   RemoteStorage.defineModule('locations', function (privateClient, publicClient) {
		   *     return {
		   *       exports: {
		   *         features: privateClient.scope('features/').defaultType('feature'),
		   *         collections: privateClient.scope('collections/').defaultType('feature-collection')
		   *       }
		   *     };
		   *   });
		   * (end code)
		  */
		
		  RemoteStorage.defineModule = function (moduleName, builder) {
		    RemoteStorage.MODULES[moduleName] = builder;
		
		    Object.defineProperty(RemoteStorage.prototype, moduleName, {
		      configurable: true,
		      get: function () {
		        var instance = this._loadModule(moduleName);
		        Object.defineProperty(this, moduleName, {
		          value: instance
		        });
		        return instance;
		      }
		    });
		
		    if (moduleName.indexOf('-') !== -1) {
		      var camelizedName = moduleName.replace(/\-[a-z]/g, function (s) {
		        return s[1].toUpperCase();
		      });
		      Object.defineProperty(RemoteStorage.prototype, camelizedName, {
		        get: function () {
		          return this[moduleName];
		        }
		      });
		    }
		  };
		
		  RemoteStorage.prototype._loadModule = function (moduleName) {
		    var builder = RemoteStorage.MODULES[moduleName];
		    if (builder) {
		      var module = builder(new RemoteStorage.BaseClient(this, '/' + moduleName + '/'),
		                           new RemoteStorage.BaseClient(this, '/public/' + moduleName + '/'));
		      return module.exports;
		    } else {
		      throw "Unknown module: " + moduleName;
		    }
		  };
		
		  RemoteStorage.prototype.defineModule = function (moduleName) {
		    console.log("remoteStorage.defineModule is deprecated, use RemoteStorage.defineModule instead!");
		    RemoteStorage.defineModule.apply(RemoteStorage, arguments);
		  };
		


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		
		  function deprecate(thing, replacement) {
		    console.log('WARNING: ' + thing + ' is deprecated. Use ' +
		                replacement + ' instead.');
		  }
		
		  var RS = __webpack_require__(2);
		  var RemoteStorage = RS;
		
		  /**
		   * Class: RemoteStorage.BaseClient
		   *
		   * Provides a high-level interface to access data below a given root path.
		   *
		   * A BaseClient deals with three types of data: folders, objects and files.
		   *
		   * <getListing> returns a mapping of all items within a folder. Items that
		   * end with a forward slash ("/") are child folders. For instance:
		   * {
		   *   'folder/': true,
		   *   'document.txt': true
		   * }
		   *
		   * <getObject> / <storeObject> operate on JSON objects. Each object has a type.
		   *
		   * <getFile> / <storeFile> operates on files. Each file has a MIME type.
		   *
		   * <remove> operates on either objects or files (but not folders, folders are
		   * created and removed implictly).
		   */
		  RS.BaseClient = function (storage, base) {
		    if (base[base.length - 1] !== '/') {
		      throw "Not a folder: " + base;
		    }
		
		    if (base === '/') {
		      // allow absolute and relative paths for the root scope.
		      this.makePath = function (path) {
		        return (path[0] === '/' ? '' : '/') + path;
		      };
		    }
		
		    /**
		     * Property: storage
		     *
		     * The <RemoteStorage> instance this <BaseClient> operates on.
		     */
		    this.storage = storage;
		
		    /**
		     * Property: base
		     *
		     * Base path this <BaseClient> operates on.
		     *
		     * For the module's privateClient this would be /<moduleName>/, for the
		     * corresponding publicClient /public/<moduleName>/.
		     */
		    this.base = base;
		
		    var parts = this.base.split('/');
		    if (parts.length > 2) {
		      this.moduleName = parts[1];
		    } else {
		      this.moduleName = 'root';
		    }
		
		    // Defined in baseclient/types.js
		    /**
		     * Property: schemas
		     *
		     * Contains schema objects of all types known to the BaseClient instance
		     **/
		
		    /**
		     * Event: change
		     *
		     * Emitted when a node changes
		     *
		     * Arguments:
		     *   event - Event object containing information about the changed node
		     *
		     * (start code)
		     * {
		     *    path: path, // Absolute path of the changed node, from the storage root
		     *    relativePath: relativePath, // Path of the changed node, relative to this baseclient's scope root
		     *    origin: 'window', 'local', 'remote', or 'conflict' // emitted by user action within the app, local data store, remote sync, or versioning conflicts
		     *    oldValue: oldBody, // Old body of the changed node (local version in conflicts; undefined if creation)
		     *    newValue: newBody, // New body of the changed node (remote version in conflicts; undefined if deletion)
		     *    lastCommonValue: lastCommonValue, //most recent known common ancestor body of 'yours' and 'theirs' in case of conflict
		     *    oldContentType: oldContentType, // Old contentType of the changed node ('yours' for conflicts; undefined if creation)
		     *    newContentType: newContentType, // New contentType of the changed node ('theirs' for conflicts; undefined if deletion)
		     *    lastCommonContentType: lastCommonContentType // Most recent known common ancestor contentType of 'yours' and 'theirs' in case of conflict
		     *  }
		     * (end code)
		     *
		     * Example of an event with origin 'local' (fired on page load):
		     *
		     * (start code)
		     * {
		     *    path: '/public/design/color.txt',
		     *    relativePath: 'color.txt',
		     *    origin: 'local',
		     *    oldValue: undefined,
		     *    newValue: 'white',
		     *    oldContentType: undefined,
		     *    newContentType: 'text/plain'
		     *  }
		     * (end code)
		     *
		     * Example of a conflict:
		     * Say you changed 'color.txt' from 'white' to 'blue'; if you have set `RemoteStorage.config.changeEvents.window` to `true`,
		     * then you will receive:
		     *
		     * (start code)
		     * {
		     *    path: '/public/design/color.txt',
		     *    relativePath: 'color.txt',
		     *    origin: 'window',
		     *    oldValue: 'white',
		     *    newValue: 'blue',
		     *    oldContentType: 'text/plain',
		     *    newContentType: 'text/plain'
		     *  }
		     * (end code)
		     *
		     * But when this change is pushed out by asynchronous synchronization, this change may rejected by the
		     * server, if the remote version has in the meantime changed from 'white' to  for instance 'red'; this will then lead to a change
		     * event with origin 'conflict' (usually a few seconds after the event with origin 'window', if you had that activated). Note
		     * that since you already changed it from 'white' to 'blue' in the local version a few seconds ago, `oldValue` is now your local
		     * value of 'blue':
		     *
		     * (start code)
		     * {
		     *    path: '/public/design/color.txt',
		     *    relativePath: 'color.txt',
		     *    origin: 'conflict',
		     *    oldValue: 'blue',
		     *    newValue: 'red',
		     *    lastCommonValue: 'white',
		     *    oldContentType: 'text/plain,
		     *    newContentType: 'text/plain'
		     *    lastCommonContentType: 'text/plain'
		     *  }
		     * (end code)
		     *
		     * In practice, you should always redraw your views to display the content of the `newValue` field when a change event is received,
		     * regardless of its origin. Events with origin 'local' are fired conveniently during the page load, so that you can fill your views
		     * when the page loads. Events with origin 'window' are fired whenever you change a value by calling a method on the baseClient;
		     * these are disabled by default. Events with origin 'remote' are fired when remote changes are discovered during sync (only for caching
		     * startegies 'SEEN' and 'ALL'). Events with origin 'conflict' are fired when a conflict occurs while pushing out your local changes to
		     * the remote store in asynchronous synchronization (see example above).
		     **/
		
		    RS.eventHandling(this, 'change');
		    this.on = this.on.bind(this);
		    storage.onChange(this.base, this._fireChange.bind(this));
		  };
		
		  RS.BaseClient.prototype = {
		
		    extend: function (object) {
		      for (var key in object) {
		        this[key] = object[key];
		      }
		      return this;
		    },
		
		    /**
		     * Method: scope
		     *
		     * Returns a new <BaseClient> operating on a subpath of the current <base> path.
		     */
		    scope: function (path) {
		      return new RS.BaseClient(this.storage, this.makePath(path));
		    },
		
		    // folder operations
		
		    /**
		     * Method: getListing
		     *
		     * Get a list of child nodes below a given path.
		     *
		     * The callback semantics of getListing are identical to those of getObject.
		     *
		     * Parameters:
		     *   path   - The path to query. It MUST end with a forward slash.
		     *   maxAge - Either false or the maximum age of cached listing in
		     *            milliseconds. Defaults to false in anonymous mode and to
		     *            2*syncInterval in connected mode.
		     *
		     * Returns:
		     *
		     *   A promise for an object, representing child nodes. If the maxAge
		     *   requirement cannot be met because of network problems, this promise
		     *   will be rejected. If the maxAge requirement is set to false or the
		     *   library is in offline state, the promise will always be fulfilled with
		     *   data from the local store.
		     *
		     *   Keys ending in a forward slash represent *folder nodes*, while all
		     *   other keys represent *data nodes*.
		     *
		     *   For spec versions <= 01, the data node information will contain only
		     *   the item's ETag. For later spec versions, it will also contain the
		     *   content type and -length of the item.
		     *
		     * Example:
		     *   (start code)
		     *   client.getListing('', false).then(function (listing) {
		     *     // listing is for instance:
		     *     // {
		     *     //   'folder/': true,
		     *     //   'document.txt': true
		     *     // }
		     *   });
		     *   (end code)
		     */
		    getListing: function (path, maxAge) {
		      if (typeof(path) !== 'string') {
		        path = '';
		      } else if (path.length > 0 && path[path.length - 1] !== '/') {
		        return Promise.reject("Not a folder: " + path);
		      }
		      return this.storage.get(this.makePath(path), maxAge).then(
		        function (r) {
		          return (r.statusCode === 404) ? {} : r.body;
		        }
		      );
		    },
		
		    /**
		     * Method: getAll
		     *
		     * Get all objects directly below a given path.
		     *
		     * Parameters:
		     *   path   - Path to the folder.
		     *   maxAge - Either false or the maximum age of cached objects in
		     *            milliseconds. Defaults to false in anonymous mode and to
		     *            2*syncInterval in connected mode.
		     *
		     * Returns:
		     *   A promise for an object in the form { path : object, ... }. If the
		     *   maxAge requirement cannot be met because of network problems, this
		     *   promise will be rejected. If the maxAge requirement is set to false,
		     *   the promise will always be fulfilled with data from the local store.
		     *
		     *   For items that are not JSON-stringified objects (e.g. stored using
		     *   `storeFile` instead of `storeObject`), the object's value is filled in
		     *   with `true`.
		     *
		     * Example:
		     *   (start code)
		     *   client.getAll('', false).then(function (objects) {
		     *     for (var key in objects) {
		     *       console.log('- ' + key + ': ', objects[key]);
		     *     }
		     *   });
		     *   (end code)
		     */
		    getAll: function (path, maxAge) {
		      if (typeof(path) !== 'string') {
		        path = '';
		      } else if (path.length > 0 && path[path.length - 1] !== '/') {
		        return Promise.reject("Not a folder: " + path);
		      }
		
		      return this.storage.get(this.makePath(path), maxAge).then(function (r) {
		        if (r.statusCode === 404) { return {}; }
		        if (typeof(r.body) === 'object') {
		          var keys = Object.keys(r.body);
		          if (keys.length === 0) {
		            // treat this like 404. it probably means a folder listing that
		            // has changes that haven't been pushed out yet.
		            return {};
		          }
		
		          var calls = keys.map(function (key) {
		            return this.storage.get(this.makePath(path + key), maxAge)
		              .then(function (o) {
		                if (typeof(o.body) === 'string') {
		                  try {
		                    o.body = JSON.parse(o.body);
		                  } catch (e) {
		                  }
		                }
		                if (typeof(o.body) === 'object') {
		                  r.body[key] = o.body;
		                }
		              });
		          }.bind(this));
		          return Promise.all(calls).then(function () {
		            return r.body;
		          });
		        }
		      }.bind(this));
		    },
		
		    // file operations
		
		    /**
		     * Method: getFile
		     *
		     * Get the file at the given path. A file is raw data, as opposed to
		     * a JSON object (use <getObject> for that).
		     *
		     * Except for the return value structure, getFile works exactly like
		     * getObject.
		     *
		     * Parameters:
		     *   path   - See getObject.
		     *   maxAge - Either false or the maximum age of cached file in
		     *            milliseconds. Defaults to false in anonymous mode and to
		     *            2*syncInterval in connected mode.
		     *
		     * Returns:
		     *   A promise for an object:
		     *
		     *   mimeType - String representing the MIME Type of the document.
		     *   data     - Raw data of the document (either a string or an ArrayBuffer)
		     *
		     *   If the maxAge requirement cannot be met because of network problems, this
		     *   promise will be rejected. If the maxAge requirement is set to false, the
		     *   promise will always be fulfilled with data from the local store.
		     *
		     * Example:
		     *   (start code)
		     *   // Display an image:
		     *   client.getFile('path/to/some/image', false).then(function (file) {
		     *     var blob = new Blob([file.data], { type: file.mimeType });
		     *     var targetElement = document.findElementById('my-image-element');
		     *     targetElement.src = window.URL.createObjectURL(blob);
		     *   });
		     *   (end code)
		     */
		    getFile: function (path, maxAge) {
		      if (typeof(path) !== 'string') {
		        return Promise.reject('Argument \'path\' of baseClient.getFile must be a string');
		      }
		      return this.storage.get(this.makePath(path), maxAge).then(function (r) {
		        return {
		          data: r.body,
		          contentType: r.contentType,
		          revision: r.revision // (this is new)
		        };
		      });
		    },
		
		    /**
		     * Method: storeFile
		     *
		     * Store raw data at a given path.
		     *
		     * Parameters:
		     *   mimeType - MIME media type of the data being stored
		     *   path     - path relative to the module root. MAY NOT end in a forward slash.
		     *   data     - string, ArrayBuffer or ArrayBufferView of raw data to store
		     *
		     * The given mimeType will later be returned, when retrieving the data
		     * using <getFile>.
		     *
		     * Example (UTF-8 data):
		     *   (start code)
		     *   client.storeFile('text/html', 'index.html', '<h1>Hello World!</h1>');
		     *   (end code)
		     *
		     * Example (Binary data):
		     *   (start code)
		     *   // MARKUP:
		     *   <input type="file" id="file-input">
		     *   // CODE:
		     *   var input = document.getElementById('file-input');
		     *   var file = input.files[0];
		     *   var fileReader = new FileReader();
		     *
		     *   fileReader.onload = function () {
		     *     client.storeFile(file.type, file.name, fileReader.result);
		     *   };
		     *
		     *   fileReader.readAsArrayBuffer(file);
		     *   (end code)
		     *
		     */
		    storeFile: function (mimeType, path, body) {
		      if (typeof(mimeType) !== 'string') {
		        return Promise.reject('Argument \'mimeType\' of baseClient.storeFile must be a string');
		      }
		      if (typeof(path) !== 'string') {
		        return Promise.reject('Argument \'path\' of baseClient.storeFile must be a string');
		      }
		      if (typeof(body) !== 'string' && typeof(body) !== 'object') {
		        return Promise.reject('Argument \'body\' of baseClient.storeFile must be a string, ArrayBuffer, or ArrayBufferView');
		      }
		      if (!this.storage.access.checkPathPermission(this.makePath(path), 'rw')) {
		        console.warn('WARNING: Editing a document to which only read access (\'r\') was claimed');
		      }
		
		      return this.storage.put(this.makePath(path), body, mimeType).then(function (r) {
		        if (r.statusCode === 200 || r.statusCode === 201) {
		          return r.revision;
		        } else {
		          return Promise.reject("Request (PUT " + this.makePath(path) + ") failed with status: " + r.statusCode);
		        }
		      }.bind(this));
		    },
		
		    // object operations
		
		    /**
		     * Method: getObject
		     *
		     * Get a JSON object from given path.
		     *
		     * Parameters:
		     *   path   - Relative path from the module root (without leading slash).
		     *   maxAge - Either false or the maximum age of cached object in
		     *            milliseconds. Defaults to false in anonymous mode and to
		     *            2*syncInterval in connected mode.
		     *
		     * Returns:
		     *   A promise for the object. If the maxAge requirement cannot be met
		     *   because of network problems, this promise will be rejected. If the
		     *   maxAge requirement is set to false, the promise will always be
		     *   fulfilled with data from the local store.
		     *
		     * Example:
		     *   (start code)
		     *   client.getObject('/path/to/object', false).
		     *     then(function (object) {
		     *       // object is either an object or null
		     *     });
		     *   (end code)
		     */
		    getObject: function (path, maxAge) {
		      if (typeof(path) !== 'string') {
		        return Promise.reject('Argument \'path\' of baseClient.getObject must be a string');
		      }
		      return this.storage.get(this.makePath(path), maxAge).then(function (r) {
		        if (typeof(r.body) === 'object') { // will be the case for documents stored with rs.js <= 0.10.0-beta2
		          return r.body;
		        } else if (typeof(r.body) === 'string') {
		          try {
		            return JSON.parse(r.body);
		          } catch (e) {
		            throw "Not valid JSON: " + this.makePath(path);
		          }
		        } else if (typeof(r.body) !== 'undefined' && r.statusCode === 200) {
		          return Promise.reject("Not an object: " + this.makePath(path));
		        }
		      }.bind(this));
		    },
		
		    /**
		     * Method: storeObject
		     *
		     * Store object at given path. Triggers synchronization.
		     *
		     * Parameters:
		     *
		     *   type     - unique type of this object within this module. See description below.
		     *   path     - path relative to the module root.
		     *   object   - an object to be saved to the given node. It must be serializable as JSON.
		     *
		     * Returns:
		     *   A promise to store the object. The promise fails with a ValidationError, when validations fail.
		     *
		     *
		     * What about the type?:
		     *
		     *   A great thing about having data on the web, is to be able to link to
		     *   it and rearrange it to fit the current circumstances. To facilitate
		     *   that, eventually you need to know how the data at hand is structured.
		     *   For documents on the web, this is usually done via a MIME type. The
		     *   MIME type of JSON objects however, is always application/json.
		     *   To add that extra layer of "knowing what this object is", remoteStorage
		     *   aims to use <JSON-LD at http://json-ld.org/>.
		     *   A first step in that direction, is to add a *@context attribute* to all
		     *   JSON data put into remoteStorage.
		     *   Now that is what the *type* is for.
		     *
		     *   Within remoteStorage.js, @context values are built using three components:
		     *     http://remotestorage.io/spec/modules/ - A prefix to guarantee uniqueness
		     *     the module name     - module names should be unique as well
		     *     the type given here - naming this particular kind of object within this module
		     *
		     *   In retrospect that means, that whenever you introduce a new "type" in calls to
		     *   storeObject, you should make sure that once your code is in the wild, future
		     *   versions of the code are compatible with the same JSON structure.
		     *
		     * How to define types?:
		     *
		     *   See <declareType> for examples.
		     */
		    storeObject: function (typeAlias, path, object) {
		      if (typeof(typeAlias) !== 'string') {
		        return Promise.reject('Argument \'typeAlias\' of baseClient.storeObject must be a string');
		      }
		      if (typeof(path) !== 'string') {
		        return Promise.reject('Argument \'path\' of baseClient.storeObject must be a string');
		      }
		      if (typeof(object) !== 'object') {
		        return Promise.reject('Argument \'object\' of baseClient.storeObject must be an object');
		      }
		
		      this._attachType(object, typeAlias);
		
		      try {
		        var validationResult = this.validate(object);
		        if (! validationResult.valid) {
		          return Promise.reject(validationResult);
		        }
		      } catch(exc) {
		        return Promise.reject(exc);
		      }
		
		      return this.storage.put(this.makePath(path), JSON.stringify(object), 'application/json; charset=UTF-8').then(function (r) {
		        if (r.statusCode === 200 || r.statusCode === 201) {
		          return r.revision;
		        } else {
		          return Promise.reject("Request (PUT " + this.makePath(path) + ") failed with status: " + r.statusCode);
		        }
		      }.bind(this));
		    },
		
		    // generic operations
		
		    /**
		     * Method: remove
		     *
		     * Remove node at given path from storage. Triggers synchronization.
		     *
		     * Parameters:
		     *   path     - Path relative to the module root.
		     */
		    remove: function (path) {
		      if (typeof(path) !== 'string') {
		        return Promise.reject('Argument \'path\' of baseClient.remove must be a string');
		      }
		      if (!this.storage.access.checkPathPermission(this.makePath(path), 'rw')) {
		        console.warn('WARNING: Removing a document to which only read access (\'r\') was claimed');
		      }
		
		      return this.storage.delete(this.makePath(path));
		    },
		
		
		    cache: function (path, strategy) {
		      if (typeof(path) !== 'string') {
		        throw 'Argument \'path\' of baseClient.cache must be a string';
		      }
		      if (strategy === false) {
		        deprecate('caching strategy <false>', '<"FLUSH">');
		        strategy = 'FLUSH';
		      } else if (strategy === undefined) {
		        strategy = 'ALL';
		      } else if (typeof(strategy) !== 'string') {
		        deprecate('that caching strategy', '<"ALL">');
		        strategy = 'ALL';
		      }
		      if (strategy !== 'FLUSH' &&
		          strategy !== 'SEEN' &&
		          strategy !== 'ALL') {
		        throw 'Argument \'strategy\' of baseclient.cache must be one of '
		            + '["FLUSH", "SEEN", "ALL"]';
		      }
		      this.storage.caching.set(this.makePath(path), strategy);
		      return this;
		    },
		
		    flush: function (path) {
		      return this.storage.local.flush(path);
		    },
		
		    makePath: function (path) {
		      return this.base + (path || '');
		    },
		
		    _fireChange: function (event) {
		      if (RemoteStorage.config.changeEvents[event.origin]) {
		        ['new', 'old', 'lastCommon'].forEach(function (fieldNamePrefix) {
		          if ((!event[fieldNamePrefix+'ContentType'])
		              || (/^application\/(.*)json(.*)/.exec(event[fieldNamePrefix+'ContentType']))) {
		            if (typeof(event[fieldNamePrefix+'Value']) === 'string') {
		              try {
		                event[fieldNamePrefix+'Value'] = JSON.parse(event[fieldNamePrefix+'Value']);
		              } catch(e) {
		              }
		            }
		          }
		        });
		        this._emit('change', event);
		      }
		    },
		
		    _cleanPath: RemoteStorage.util.cleanPath,
		
		    /**
		     * Method: getItemURL
		     *
		     * Retrieve full URL of item
		     *
		     * Parameters:
		     *   path     - Path relative to the module root.
		     */
		    getItemURL: function (path) {
		      if (typeof(path) !== 'string') {
		        throw 'Argument \'path\' of baseClient.getItemURL must be a string';
		      }
		      if (this.storage.connected) {
		        path = this._cleanPath( this.makePath(path) );
		        return this.storage.remote.href + path;
		      } else {
		        return undefined;
		      }
		    },
		
		    uuid: function () {
		      return Math.uuid();
		    }
		
		  };
		
		  /**
		   * Method: RS#scope
		   *
		   * Returns a new <RS.BaseClient> scoped to the given path.
		   *
		   * Parameters:
		   *   path - Root path of new BaseClient.
		   *
		   *
		   * Example:
		   *   (start code)
		   *
		   *   var foo = remoteStorage.scope('/foo/');
		   *
		   *   // PUTs data "baz" to path /foo/bar
		   *   foo.storeFile('text/plain', 'bar', 'baz');
		   *
		   *   var something = foo.scope('something/');
		   *
		   *   // GETs listing from path /foo/something/bla/
		   *   something.getListing('bla/');
		   *
		   *   (end code)
		   *
		   */
		  RS.BaseClient._rs_init = function () {
		    RS.prototype.scope = function (path) {
		      if (typeof(path) !== 'string') {
		        throw 'Argument \'path\' of baseClient.scope must be a string';
		      }
		
		      if (!this.access.checkPathPermission(path, 'r')) {
		        var escapedPath = path.replace(/(['\\])/g, '\\$1');
		        console.warn('WARNING: please call remoteStorage.access.claim(\'' + escapedPath + '\', \'r\') (read only) or remoteStorage.access.claim(\'' + escapedPath + '\', \'rw\') (read/write) first');
		      }
		      return new RS.BaseClient(this, path);
		    };
		  };
		
		  /* e.g.:
		  remoteStorage.defineModule('locations', function (priv, pub) {
		    return {
		      exports: {
		        features: priv.scope('features/').defaultType('feature'),
		        collections: priv.scope('collections/').defaultType('feature-collection');
		      }
		    };
		  });
		  */
		
		  // Defined in baseclient/types.js
		  /**
		   * Method: declareType
		   *
		   * Declare a remoteStorage object type using a JSON schema. See
		   * <RemoteStorage.BaseClient.Types>
		   **/
		


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		  /**
		   * Class: RemoteStorage.Caching
		   *
		   * Holds/manages caching configuration.
		   *
		   * Caching strategies:
		   *
		   *   For each subtree, you can set the caching strategy to 'ALL',
		   *   'SEEN' (default), and 'FLUSH'.
		   *
		   *   - 'ALL' means that once all outgoing changes have been pushed, sync
		   *         will start retrieving nodes to cache pro-actively. If a local
		   *         copy exists of everything, it will check on each sync whether
		   *         the ETag of the root folder changed, and retrieve remote changes
		   *         if they exist.
		   *   - 'SEEN' does this only for documents and folders that have been either
		   *         read from or written to at least once since connecting to the current
		   *         remote backend, plus their parent/ancestor folders up to the root
		   *         (to make tree-based sync possible).
		   *   - 'FLUSH' will only cache outgoing changes, and forget them as soon as
		   *         they have been saved to remote successfully.
		   *
		   **/
		
		  var RemoteStorage = __webpack_require__(2);
		  var SETTINGS_KEY = "remotestorage:caching";
		
		  var containingFolder = RemoteStorage.util.containingFolder;
		
		  RemoteStorage.Caching = function () {
		    this.reset();
		  };
		
		  RemoteStorage.Caching.prototype = {
		    pendingActivations: [],
		
		    /**
		     * Method: set
		     *
		     * Configure caching for a given path explicitly.
		     *
		     * Not needed when using <enable>/<disable>.
		     *
		     * Parameters:
		     *   path     - Path to cache
		     *   strategy - Caching strategy. One of 'ALL', 'SEEN', or 'FLUSH'.
		     *
		     * Example:
		     *   (start code)
		     *   remoteStorage.caching.set('/bookmarks/archive')
		     */
		    set: function (path, strategy) {
		      if (typeof path !== 'string') {
		        throw new Error('path should be a string');
		      }
		      if (!RemoteStorage.util.isFolder(path)) {
		        throw new Error('path should be a folder');
		      }
		      if (this._remoteStorage && this._remoteStorage.access &&
		          !this._remoteStorage.access.checkPathPermission(path, 'r')) {
		        throw new Error('No access to path "'+path+'". You have to claim access to it first.');
		      }
		      if (!strategy.match(/^(FLUSH|SEEN|ALL)$/)) {
		        throw new Error("strategy should be 'FLUSH', 'SEEN', or 'ALL'");
		      }
		
		      this._rootPaths[path] = strategy;
		
		      if (strategy === 'ALL') {
		        if (this.activateHandler) {
		          this.activateHandler(path);
		        } else {
		          this.pendingActivations.push(path);
		        }
		      }
		    },
		
		    /**
		     * Method: enable
		     *
		     * Enable caching for a given path.
		     *
		     * Uses caching strategy 'ALL'.
		     *
		     * Parameters:
		     *   path - Path to enable caching for
		     */
		    enable: function (path) {
		      this.set(path, 'ALL');
		    },
		
		    /**
		     * Method: disable
		     *
		     * Disable caching for a given path.
		     *
		     * Uses caching strategy 'FLUSH' (meaning items are only cached until
		     * successfully pushed to the remote).
		     *
		     * Parameters:
		     *   path - Path to disable caching for
		     */
		    disable: function (path) {
		      this.set(path, 'FLUSH');
		    },
		
		    /**
		     * Method: onActivate
		     *
		     * Set a callback for when caching is activated for a path.
		     *
		     * Parameters:
		     *   callback - Callback function
		     */
		    onActivate: function (cb) {
		      var i;
		      RemoteStorage.log('[Caching] Setting activate handler', cb, this.pendingActivations);
		      this.activateHandler = cb;
		      for (i=0; i<this.pendingActivations.length; i++) {
		        cb(this.pendingActivations[i]);
		      }
		      delete this.pendingActivations;
		    },
		
		    /**
		     * Method: checkPath
		     *
		     * Retrieve caching setting for a given path, or its next parent
		     * with a caching strategy set.
		     *
		     * Parameters:
		     *   path - Path to retrieve setting for
		     **/
		    checkPath: function (path) {
		      if (this._rootPaths[path] !== undefined) {
		        return this._rootPaths[path];
		      } else if (path === '/') {
		        return 'SEEN';
		      } else {
		        return this.checkPath(containingFolder(path));
		      }
		    },
		
		    /**
		     * Method: reset
		     *
		     * Reset the state of caching by deleting all caching information.
		     **/
		    reset: function () {
		      this._rootPaths = {};
		      this._remoteStorage = null;
		    }
		  };
		
		  // TODO clean up/harmonize how modules are loaded and/or document this architecture properly
		  //
		  // At this point the global remoteStorage object has not been created yet.
		  // Only its prototype exists so far, so we define a self-constructing
		  // property on there:
		  Object.defineProperty(RemoteStorage.prototype, 'caching', {
		    configurable: true,
		    get: function () {
		      var caching = new RemoteStorage.Caching();
		      Object.defineProperty(this, 'caching', {
		        value: caching
		      });
		      return caching;
		    }
		  });
		
		  RemoteStorage.Caching._rs_init = function (remoteStorage) {
		    this._remoteStorage = remoteStorage;
		  };
		


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		
		  /**
		   * Interface: cachinglayer
		   *
		   * This module defines functions that are mixed into remoteStorage.local when
		   * it is instantiated (currently one of indexeddb.js, localstorage.js, or
		   * inmemorystorage.js).
		   *
		   * All remoteStorage.local implementations should therefore implement
		   * this.getNodes, this.setNodes, and this.forAllNodes. The rest is blended in
		   * here to create a GPD (get/put/delete) interface which the BaseClient can
		   * talk to.
		   */
		
		  var isFolder = RemoteStorage.util.isFolder;
		  var isDocument = RemoteStorage.util.isDocument;
		  var deepClone = RemoteStorage.util.deepClone;
		  var equal = RemoteStorage.util.equal;
		
		  function getLatest(node) {
		    if (typeof(node) !== 'object' || typeof(node.path) !== 'string') {
		      return;
		    }
		    if (isFolder(node.path)) {
		      if (node.local && node.local.itemsMap) {
		        return node.local;
		      }
		      if (node.common && node.common.itemsMap) {
		        return node.common;
		      }
		    } else {
		      if (node.local && node.local.body && node.local.contentType) {
		        return node.local;
		      }
		      if (node.common && node.common.body && node.common.contentType) {
		        return node.common;
		      }
		      // Migration code! Once all apps use at least this version of the lib, we
		      // can publish clean-up code that migrates over any old-format data, and
		      // stop supporting it. For now, new apps will support data in both
		      // formats, thanks to this:
		      if (node.body && node.contentType) {
		        return {
		          body: node.body,
		          contentType: node.contentType
		        };
		      }
		    }
		  }
		
		  function isOutdated(nodes, maxAge) {
		    var path, node;
		    for (path in nodes) {
		      if (nodes[path] && nodes[path].remote) {
		        return true;
		      }
		      var nodeVersion = getLatest(nodes[path]);
		      if (nodeVersion && nodeVersion.timestamp && (new Date().getTime()) - nodeVersion.timestamp <= maxAge) {
		        return false;
		      } else if (!nodeVersion) {
		        return true;
		      }
		    }
		    return true;
		  }
		
		  var pathsFromRoot = RemoteStorage.util.pathsFromRoot;
		
		  function makeNode(path) {
		    var node = { path: path, common: { } };
		
		    if (isFolder(path)) {
		      node.common.itemsMap = {};
		    }
		    return node;
		  }
		
		  function updateFolderNodeWithItemName(node, itemName) {
		    if (!node.common) {
		      node.common = {
		        itemsMap: {}
		      };
		    }
		    if (!node.common.itemsMap) {
		      node.common.itemsMap = {};
		    }
		    if (!node.local) {
		      node.local = deepClone(node.common);
		    }
		    if (!node.local.itemsMap) {
		      node.local.itemsMap = node.common.itemsMap;
		    }
		    node.local.itemsMap[itemName] = true;
		
		    return node;
		  }
		
		  var methods = {
		
		    // TODO: improve our code structure so that this function
		    // could call sync.queueGetRequest directly instead of needing
		    // this hacky third parameter as a callback
		    get: function (path, maxAge, queueGetRequest) {
		      var self = this;
		      if (typeof(maxAge) === 'number') {
		        return self.getNodes(pathsFromRoot(path))
		        .then(function (objs) {
		          var node = getLatest(objs[path]);
		          if (isOutdated(objs, maxAge)) {
		            return queueGetRequest(path);
		          } else if (node) {
		            return {statusCode: 200, body: node.body || node.itemsMap, contentType: node.contentType};
		          } else {
		            return {statusCode: 404};
		          }
		        });
		      } else {
		        return self.getNodes([path])
		        .then(function (objs) {
		          var node = getLatest(objs[path]);
		          if (node) {
		            if (isFolder(path)) {
		              for (var i in node.itemsMap) {
		                // the hasOwnProperty check here is only because our jshint settings require it:
		                if (node.itemsMap.hasOwnProperty(i) && node.itemsMap[i] === false) {
		                  delete node.itemsMap[i];
		                }
		              }
		            }
		            return {statusCode: 200, body: node.body || node.itemsMap, contentType: node.contentType};
		          } else {
		            return {statusCode: 404};
		          }
		        });
		      }
		    },
		
		    put: function (path, body, contentType) {
		      var paths = pathsFromRoot(path);
		      var self = this;
		
		      function _processNodes(paths, nodes) {
		        try {
		          for (var i = 0, len = paths.length; i < len; i++) {
		            var path = paths[i];
		            var node = nodes[path];
		            var previous;
		
		            if (!node) {
		              nodes[path] = node = makeNode(path);
		            }
		
		            // Document
		            if (i === 0) {
		              previous = getLatest(node);
		              node.local = {
		                body:                body,
		                contentType:         contentType,
		                previousBody:        (previous ? previous.body : undefined),
		                previousContentType: (previous ? previous.contentType : undefined),
		              };
		            }
		            // Folder
		            else {
		              var itemName = paths[i-1].substring(path.length);
		              node = updateFolderNodeWithItemName(node, itemName);
		            }
		          }
		          return nodes;
		        } catch (e) {
		          RemoteStorage.log('[Cachinglayer] Error during PUT', nodes, i, e);
		          throw e;
		        }
		      }
		      return this._updateNodes(paths, _processNodes);
		    },
		
		    delete: function (path) {
		      var paths = pathsFromRoot(path);
		
		      return this._updateNodes(paths, function (paths, nodes) {
		        for (var i = 0, len = paths.length; i < len; i++) {
		          var path = paths[i];
		          var node = nodes[path];
		          if (!node) {
		            throw new Error('Cannot delete non-existing node '+path);
		          }
		
		          if (i === 0) {
		          // Document
		            previous = getLatest(node);
		            node.local = {
		              body:                false,
		              previousBody:        (previous ? previous.body : undefined),
		              previousContentType: (previous ? previous.contentType : undefined),
		            };
		          } else {
		          // Folder
		            if (!node.local) {
		              node.local = deepClone(node.common);
		            }
		            var itemName = paths[i-1].substring(path.length);
		            delete node.local.itemsMap[itemName];
		
		            if (Object.getOwnPropertyNames(node.local.itemsMap).length > 0) {
		              // This folder still contains other items, don't remove any further ancestors
		              break;
		            }
		          }
		        }
		        return nodes;
		      });
		    },
		
		    flush: function (path) {
		      var self = this;
		      return self._getAllDescendentPaths(path).then(function (paths) {
		        return self.getNodes(paths);
		      }).then(function (nodes) {
		        for (var path in nodes) {
		          var node = nodes[path];
		
		          if (node && node.common && node.local) {
		            self._emitChange({
		              path:     node.path,
		              origin:   'local',
		              oldValue: (node.local.body === false ? undefined : node.local.body),
		              newValue: (node.common.body === false ? undefined : node.common.body)
		            });
		          }
		          nodes[path] = undefined;
		        }
		        return self.setNodes(nodes);
		      });
		    },
		
		    _emitChange: function (obj) {
		      if (RemoteStorage.config.changeEvents[obj.origin]) {
		        this._emit('change', obj);
		      }
		    },
		
		    fireInitial: function () {
		      if (!RemoteStorage.config.changeEvents.local) {
		        return;
		      }
		      var self = this;
		      self.forAllNodes(function (node) {
		        var latest;
		        if (isDocument(node.path)) {
		          latest = getLatest(node);
		          if (latest) {
		            self._emitChange({
		              path:           node.path,
		              origin:         'local',
		              oldValue:       undefined,
		              oldContentType: undefined,
		              newValue:       latest.body,
		              newContentType: latest.contentType
		            });
		          }
		        }
		      }).then(function () {
		        self._emit('local-events-done');
		      });
		    },
		
		    onDiff: function (diffHandler) {
		      this.diffHandler = diffHandler;
		    },
		
		    migrate: function (node) {
		      if (typeof(node) === 'object' && !node.common) {
		        node.common = {};
		        if (typeof(node.path) === 'string') {
		          if (node.path.substr(-1) === '/' && typeof(node.body) === 'object') {
		            node.common.itemsMap = node.body;
		          }
		        } else {
		          //save legacy content of document node as local version
		          if (!node.local) {
		            node.local = {};
		          }
		          node.local.body = node.body;
		          node.local.contentType = node.contentType;
		        }
		      }
		      return node;
		    },
		
		    // FIXME
		    // this process of updating nodes needs to be heavily documented first, then
		    // refactored. Right now it's almost impossible to refactor as there's no
		    // explanation of why things are implemented certain ways or what the goal(s)
		    // of the behavior are. -slvrbckt
		    _updateNodesRunning: false,
		    _updateNodesQueued: [],
		    _updateNodes: function (paths, _processNodes) {
		      var pending = Promise.defer();
		      this._doUpdateNodes(paths, _processNodes, pending);
		      return pending.promise;
		    },
		    _doUpdateNodes: function (paths, _processNodes, promise) {
		      var self = this;
		
		      if (self._updateNodesRunning) {
		        self._updateNodesQueued.push({
		          paths: paths,
		          cb: _processNodes,
		          promise: promise
		        });
		        return;
		      } else {
		        self._updateNodesRunning = true;
		      }
		
		      self.getNodes(paths).then(function (nodes) {
		        var existingNodes = deepClone(nodes);
		        var changeEvents = [];
		        var node;
		        var equal = RemoteStorage.util.equal;
		
		        nodes = _processNodes(paths, nodes);
		
		        for (var path in nodes) {
		          node = nodes[path];
		          if (equal(node, existingNodes[path])) {
		            delete nodes[path];
		          }
		          else if (isDocument(path)) {
		            if (
		              !equal(node.local.body, node.local.previousBody) ||
		              node.local.contentType !== node.local.previousContentType
		            ) {
		              changeEvents.push({
		                path:           path,
		                origin:         'window',
		                oldValue:       node.local.previousBody,
		                newValue:       node.local.body === false ? undefined : node.local.body,
		                oldContentType: node.local.previousContentType,
		                newContentType: node.local.contentType
		              });
		            }
		            delete node.local.previousBody;
		            delete node.local.previousContentType;
		          }
		        }
		
		        self.setNodes(nodes).then(function () {
		          self._emitChangeEvents(changeEvents);
		          promise.resolve({statusCode: 200});
		        });
		      }).then(function () {
		        return Promise.resolve();
		      }, function (err) {
		        promise.reject(err);
		      }).then(function () {
		        self._updateNodesRunning = false;
		        var nextJob = self._updateNodesQueued.shift();
		        if (nextJob) {
		          self._doUpdateNodes(nextJob.paths, nextJob.cb, nextJob.promise);
		        }
		      });
		    },
		
		    _emitChangeEvents: function (events) {
		      for (var i = 0, len = events.length; i < len; i++) {
		        this._emitChange(events[i]);
		        if (this.diffHandler) {
		          this.diffHandler(events[i].path);
		        }
		      }
		    },
		
		    _getAllDescendentPaths: function (path) {
		      var self = this;
		      if (isFolder(path)) {
		        return self.getNodes([path]).then(function (nodes) {
		          var allPaths = [path];
		          var latest = getLatest(nodes[path]);
		
		          var itemNames = Object.keys(latest.itemsMap);
		          var calls = itemNames.map(function (itemName) {
		            return self._getAllDescendentPaths(path+itemName).then(function (paths) {
		              for (var i = 0, len = paths.length; i < len; i++) {
		                allPaths.push(paths[i]);
		              }
		            });
		          });
		          return Promise.all(calls).then(function () {
		            return allPaths;
		          });
		        });
		      } else {
		        return Promise.resolve([path]);
		      }
		    },
		
		    _getInternals: function () {
		      return {
		        getLatest: getLatest,
		        makeNode: makeNode,
		        isOutdated: isOutdated
		      };
		    }
		  };
		
		  /**
		   * Function: cachingLayer
		   *
		   * Mixes common caching layer functionality into an object.
		   *
		   * The first parameter is always the object to be extended.
		   *
		   * Example:
		   *   (start code)
		   *   var MyConstructor = function () {
		   *     cachingLayer(this);
		   *   };
		   *   (end code)
		   */
		  RemoteStorage.cachingLayer = function (object) {
		    for (var key in methods) {
		      object[key] = methods[key];
		    }
		  };


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {  var RS = __webpack_require__(2);
		  var RemoteStorage = RS;
		
		  /**
		   * File: Dropbox
		   *
		   * WORK IN PROGRESS, NOT RECOMMENDED FOR PRODUCTION USE
		   *
		   * Dropbox backend for RemoteStorage.js
		   * This file exposes a get/put/delete interface which is compatible with
		   * <RemoteStorage.WireClient>.
		   *
		   * When remoteStorage.backend is set to 'dropbox', this backend will
		   * initialize and replace remoteStorage.remote with remoteStorage.dropbox.
		   *
		   * In order to ensure compatibility with the public folder, <BaseClient.getItemURL>
		   * gets hijacked to return the Dropbox public share URL.
		   *
		   * To use this backend, you need to specify the Dropbox app key like so:
		   *
		   * (start code)
		   *
		   * remoteStorage.setApiKeys('dropbox', {
		   *   appKey: 'your-app-key'
		   * });
		   *
		   * (end code)
		   *
		   * An app key can be obtained by registering your app at https://www.dropbox.com/developers/apps
		   *
		   * Known issues:
		   *
		   *   - Storing files larger than 150MB is not yet supported
		   *   - Listing and deleting folders with more than 10'000 files will cause problems
		   *   - Content-Type is not fully supported due to limitations of the Dropbox API
		   *   - Dropbox preserves cases but is not case-sensitive
		   *   - getItemURL is asynchronous which means getIetmURL returns useful values
		   *     after the syncCycle
		   */
		
		  var hasLocalStorage;
		  var AUTH_URL = 'https://www.dropbox.com/1/oauth2/authorize';
		  var SETTINGS_KEY = 'remotestorage:dropbox';
		  var PATH_PREFIX = '/remotestorage';
		
		  /**
		   * Function: getDropboxPath(path)
		   *
		   * Map a local path to a path in DropBox.
		   */
		  var getDropboxPath = function (path) {
		    return RS.WireClient.cleanPath(PATH_PREFIX + '/' + path);
		  };
		
		  var encodeQuery = function (obj) {
		    var pairs = [];
		
		    for (var key in obj) {
		      if (obj.hasOwnProperty(key)) {
		        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
		      }
		    }
		
		    return pairs.join('&');
		  };
		
		  /**
		   * class: LowerCaseCache
		   *
		   * A cache which automatically converts all keys to lower case and can
		   * propagate changes up to parent folders.
		   *
		   * By default the set and delete methods are aliased to justSet and justDelete.
		   *
		   * Parameters:
		   *
		   *   defaultValue - the value that is returned for all keys that don't exist
		   *                  in the cache
		   */
		  function LowerCaseCache(defaultValue){
		    this.defaultValue = defaultValue;
		    this._storage = { };
		    this.set = this.justSet;
		    this.delete = this.justDelete;
		  }
		
		  LowerCaseCache.prototype = {
		    /**
		     * Method: get
		     *
		     * Get a value from the cache or defaultValue, if the key is not in the
		     * cache.
		     */
		    get : function (key) {
		      key = key.toLowerCase();
		      var stored = this._storage[key];
		      if (typeof stored === 'undefined'){
		        stored = this.defaultValue;
		        this._storage[key] = stored;
		      }
		      return stored;
		    },
		
		    /**
		     * Method: propagateSet
		     *
		     * Set a value and also update the parent folders with that value.
		     */
		    propagateSet : function (key, value) {
		      key = key.toLowerCase();
		      if (this._storage[key] === value) {
		        return value;
		      }
		      this._propagate(key, value);
		      this._storage[key] = value;
		      return value;
		    },
		
		    /**
		     * Method: propagateDelete
		     *
		     * Delete a value and propagate the changes to the parent folders.
		     */
		    propagateDelete : function (key) {
		      key = key.toLowerCase();
		      this._propagate(key, this._storage[key]);
		      return delete this._storage[key];
		    },
		
		    _activatePropagation: function (){
		      this.set = this.propagateSet;
		      this.delete = this.propagateDelete;
		      return true;
		    },
		
		    /**
		     * Method: justSet
		     *
		     * Set a value without propagating.
		     */
		    justSet : function (key, value) {
		      key = key.toLowerCase();
		      this._storage[key] = value;
		      return value;
		    },
		
		    /**
		     * Method: justDelete
		     *
		     * Delete a value without propagating.
		     */
		    justDelete : function (key, value) {
		      key = key.toLowerCase();
		      return delete this._storage[key];
		    },
		
		    _propagate: function (key, rev){
		      var folders = key.split('/').slice(0,-1);
		      var path = '';
		
		      for (var i = 0, len = folders.length; i < len; i++){
		        path += folders[i]+'/';
		        if (!rev) {
		          rev = this._storage[path]+1;
		        }
		        this._storage[path] =  rev;
		      }
		    }
		  };
		
		  var onErrorCb;
		
		  /**
		   * Class: RemoteStorage.Dropbox
		   */
		  RS.Dropbox = function (rs) {
		
		    this.rs = rs;
		    this.connected = false;
		    this.rs = rs;
		    var self = this;
		
		    onErrorCb = function (error){
		      if (error instanceof RemoteStorage.Unauthorized) {
		        // Delete all the settings - see the documentation of wireclient.configure
		        self.configure({
		          userAddress: null,
		          href: null,
		          storageApi: null,
		          token: null,
		          options: null
		        });
		      }
		    };
		
		    RS.eventHandling(this, 'change', 'connected', 'wire-busy', 'wire-done', 'not-connected');
		    rs.on('error', onErrorCb);
		
		    this.clientId = rs.apiKeys.dropbox.appKey;
		    this._revCache = new LowerCaseCache('rev');
		    this._itemRefs = {};
		    this._metadataCache = {};
		
		    if (hasLocalStorage){
		      var settings;
		      try {
		        settings = JSON.parse(localStorage[SETTINGS_KEY]);
		      } catch(e){}
		      if (settings) {
		        this.configure(settings);
		      }
		      try {
		        this._itemRefs = JSON.parse(localStorage[ SETTINGS_KEY+':shares' ]);
		      } catch(e) {  }
		    }
		    if (this.connected) {
		      setTimeout(this._emit.bind(this), 0, 'connected');
		    }
		  };
		
		  RS.Dropbox.prototype = {
		    online: true,
		
		    /**
		     * Method: connect
		     *
		     * Set the backed to 'dropbox' and start the authentication flow in order
		     * to obtain an API token from Dropbox.
		     */
		    connect: function () {
		      // TODO handling when token is already present
		      this.rs.setBackend('dropbox');
		      if (this.token){
		        hookIt(this.rs);
		      } else {
		        RS.Authorize(this.rs, AUTH_URL, '', String(RS.Authorize.getLocation()), this.clientId);
		      }
		    },
		
		    /**
		     * Method : configure(settings)
		     * Accepts its parameters according to the <RemoteStorage.WireClient>.
		     * Sets the connected flag
		     **/
		    configure: function (settings) {
		      // We only update this.userAddress if settings.userAddress is set to a string or to null:
		      if (typeof settings.userAddress !== 'undefined') { this.userAddress = settings.userAddress; }
		      // Same for this.token. If only one of these two is set, we leave the other one at its existing value:
		      if (typeof settings.token !== 'undefined') { this.token = settings.token; }
		
		      if (this.token) {
		        this.connected = true;
		        if ( !this.userAddress ){
		          this.info().then(function (info){
		            this.userAddress = info.display_name;
		            this.rs.widget.view.setUserAddress(this.userAddress);
		            this._emit('connected');
		          }.bind(this));
		        }
		      } else {
		        this.connected = false;
		      }
		      if (hasLocalStorage){
		        localStorage[SETTINGS_KEY] = JSON.stringify({
		          userAddress: this.userAddress,
		          token: this.token
		        });
		      }
		    },
		
		    /**
		     * Method: stopWaitingForToken
		     *
		     * Stop waiting for the token and emit not-connected
		     */
		    stopWaitingForToken: function () {
		      if (!this.connected) {
		        this._emit('not-connected');
		      }
		    },
		
		    /**
		     * Method: _getFolder
		     *
		     * Get all items in a folder.
		     *
		     * Parameters:
		     *
		     *   path - path of the folder to get, with leading slash
		     *   options - not used
		     *
		     * Returns:
		     *
		     *  statusCode - HTTP status code
		     *  body - array of the items found
		     *  contentType - 'application/json; charset=UTF-8'
		     *  revision - revision of the folder
		     */
		    _getFolder: function (path, options) {
		      // FIXME simplify promise handling
		      var url = 'https://api.dropbox.com/1/metadata/auto' + getDropboxPath(path);
		      var revCache = this._revCache;
		      var self = this;
		
		      return this._request('GET', url, {}).then(function (resp) {
		        var status = resp.status;
		        if (status === 304) {
		          return Promise.resolve({statusCode: status});
		        }
		        var listing, body, mime, rev;
		        try{
		          body = JSON.parse(resp.responseText);
		        } catch (e) {
		          return Promise.reject(e);
		        }
		        rev = self._revCache.get(path);
		        mime = 'application/json; charset=UTF-8';
		        if (body.contents) {
		          listing = body.contents.reduce(function (m, item) {
		            var itemName = item.path.split('/').slice(-1)[0] + ( item.is_dir ? '/' : '' );
		            if (item.is_dir){
		              m[itemName] = { ETag: revCache.get(path+itemName) };
		            } else {
		              m[itemName] = { ETag: item.rev };
		            }
		            return m;
		          }, {});
		        }
		        return Promise.resolve({statusCode: status, body: listing, contentType: mime, revision: rev});
		      });
		    },
		
		    /**
		     * Method: get
		     *
		     * Compatible with <RemoteStorage.WireClient.get>
		     *
		     * Checks for the path in _revCache and decides based on that if file has
		     * changed. Calls _getFolder is the path points to a folder.
		     *
		     * Calls <RemoteStorage.Dropbox.share> afterwards to fill _itemRefs.
		     */
		    get: function (path, options) {
		      if (! this.connected) { return Promise.reject("not connected (path: " + path + ")"); }
		      var url = 'https://api-content.dropbox.com/1/files/auto' + getDropboxPath(path);
		      var self = this;
		
		      var savedRev = this._revCache.get(path);
		      if (savedRev === null) {
		        // file was deleted server side
		        return Promise.resolve({statusCode: 404});
		      }
		      if (options && options.ifNoneMatch &&
		         savedRev && (savedRev === options.ifNoneMatch)) {
		        // nothing changed.
		        return Promise.resolve({statusCode: 304});
		      }
		
		      //use _getFolder for folders
		      if (path.substr(-1) === '/') { return this._getFolder(path, options); }
		
		      return this._request('GET', url, {}).then(function (resp) {
		        var status = resp.status;
		        var meta, body, mime, rev;
		        if (status !== 200) {
		          return Promise.resolve({statusCode: status});
		        }
		
		        body = resp.responseText;
		        try {
		          meta = JSON.parse( resp.getResponseHeader('x-dropbox-metadata') );
		        } catch(e) {
		          return Promise.reject(e);
		        }
		
		        mime = meta.mime_type; //resp.getResponseHeader('Content-Type');
		        rev = meta.rev;
		        self._revCache.set(path, rev);
		        self._shareIfNeeded(path); // The shared link expires every 4 hours
		
		        // handling binary
		        if (!resp.getResponseHeader('Content-Type') ||
		            resp.getResponseHeader('Content-Type').match(/charset=binary/)) {
		          var pending = Promise.defer();
		
		          RS.WireClient.readBinaryData(resp.response, mime, function (result) {
		            pending.resolve({
		              statusCode: status,
		              body: result,
		              contentType: mime,
		              revision: rev
		            });
		          });
		
		          return pending.promise;
		        }
		
		        // handling json (always try)
		        if (mime && mime.search('application/json') >= 0 || true) {
		          try {
		            body = JSON.parse(body);
		            mime = 'application/json; charset=UTF-8';
		          } catch(e) {
		            //Failed parsing Json, assume it is something else then
		          }
		        }
		
		        return Promise.resolve({statusCode: status, body: body, contentType: mime, revision: rev});
		      });
		    },
		
		    /**
		     * Method: put
		     *
		     * Compatible with <RemoteStorage.WireClient>
		     *
		     * Checks for the path in _revCache and decides based on that if file has
		     * changed.
		     *
		     * Calls <RemoteStorage.Dropbox.share> afterwards to fill _itemRefs.
		     */
		    put: function (path, body, contentType, options) {
		      var self = this;
		
		      if (!this.connected) {
		        throw new Error("not connected (path: " + path + ")");
		      }
		
		      //check if file has changed and return 412
		      var savedRev = this._revCache.get(path);
		      if (options && options.ifMatch &&
		          savedRev && (savedRev !== options.ifMatch)) {
		        return Promise.resolve({statusCode: 412, revision: savedRev});
		      }
		      if (options && (options.ifNoneMatch === '*') &&
		          savedRev && (savedRev !== 'rev')) {
		        return Promise.resolve({statusCode: 412, revision: savedRev});
		      }
		
		      if ((!contentType.match(/charset=/)) &&
		          (body instanceof ArrayBuffer || RS.WireClient.isArrayBufferView(body))) {
		        contentType += '; charset=binary';
		      }
		
		      if (body.length > 150 * 1024 * 1024) {
		        //https://www.dropbox.com/developers/core/docs#chunked-upload
		        return Promise.reject(new Error("Cannot upload file larger than 150MB"));
		      }
		
		      var result;
		      var needsMetadata = options && (options.ifMatch || (options.ifNoneMatch === '*'));
		      var uploadParams = {
		        body: body,
		        contentType: contentType,
		        path: path
		      };
		
		      if (needsMetadata) {
		        result = this._getMetadata(path).then(function (metadata) {
		          if (options && (options.ifNoneMatch === '*') && metadata) {
		            // if !!metadata === true, the file exists
		            return Promise.resolve({
		              statusCode: 412,
		              revision: metadata.rev
		            });
		          }
		
		          if (options && options.ifMatch && metadata && (metadata.rev !== options.ifMatch)) {
		            return Promise.resolve({
		              statusCode: 412,
		              revision: metadata.rev
		            });
		          }
		
		          return self._uploadSimple(uploadParams);
		        });
		      } else {
		        result = self._uploadSimple(uploadParams);
		      }
		
		      return result.then(function (ret) {
		        self._shareIfNeeded(path);
		        return ret;
		      });
		    },
		
		    /**
		     * Method: delete
		     *
		     * Compatible with <RemoteStorage.WireClient.delete>
		     *
		     * Checks for the path in _revCache and decides based on that if file has
		     * changed.
		     *
		     * Calls <RemoteStorage.Dropbox.share> afterwards to fill _itemRefs.
		     */
		    'delete': function (path, options) {
		      var self = this;
		
		      if (!this.connected) {
		        throw new Error("not connected (path: " + path + ")");
		      }
		
		      //check if file has changed and return 412
		      var savedRev = this._revCache.get(path);
		      if (options && options.ifMatch && savedRev && (options.ifMatch !== savedRev)) {
		        return Promise.resolve({ statusCode: 412, revision: savedRev });
		      }
		
		      if (options && options.ifMatch) {
		        return this._getMetadata(path).then(function (metadata) {
		          if (options && options.ifMatch && metadata && (metadata.rev !== options.ifMatch)) {
		            return Promise.resolve({
		              statusCode: 412,
		              revision: metadata.rev
		            });
		          }
		
		          return self._deleteSimple(path);
		        });
		      }
		
		      return self._deleteSimple(path);
		    },
		
		    /**
		     * Method: _shareIfNeeded
		     *
		     * Calls share, if the provided path resides in a public folder.
		     */
		    _shareIfNeeded: function (path) {
		      if (path.match(/^\/public\/.*[^\/]$/) && this._itemRefs[path] === undefined) {
		        this.share(path);
		      }
		    },
		
		    /**
		     * Method: share
		     *
		     * Gets a publicly-accessible URL for the path from Dropbox and stores it
		     * in _itemRefs.
		     *
		     * Returns:
		     *
		     *   A promise for the URL
		     */
		    share: function (path) {
		      var self = this;
		      var url = 'https://api.dropbox.com/1/media/auto' + getDropboxPath(path);
		
		      return this._request('POST', url, {}).then(function (response) {
		        if (response.status !== 200) {
		          return Promise.reject(new Error('Invalid Dropbox API response status when sharing "' + path + '":' + response.status));
		        }
		
		        try {
		          response = JSON.parse(response.responseText);
		        } catch (e) {
		          return Promise.reject(new Error('Invalid Dropbox API response when sharing "' + path + '": ' + response.responseText));
		        }
		
		        self._itemRefs[path] = response.url;
		
		        if (hasLocalStorage) {
		          localStorage[SETTINGS_KEY + ':shares'] = JSON.stringify(self._itemRefs);
		        }
		
		        return Promise.resolve(url);
		      }, function (error) {
		        err.message = 'Sharing dropbox file or folder ("' + path + '") failed.' + err.message;
		        return Promise.reject(error);
		      });
		    },
		
		    /**
		     * Method: info
		     *
		     * Fetches the user's info from dropbox and returns a promise for it.
		     *
		     * Returns:
		     *
		     *   A promise to the user's info
		     */
		    info: function () {
		      var url = 'https://api.dropbox.com/1/account/info';
		      // requesting user info(mainly for userAdress)
		      return this._request('GET', url, {}).then(function (resp){
		        try {
		          var info = JSON.parse(resp.responseText);
		          return Promise.resolve(info);
		        } catch (e) {
		          return Promise.reject(e);
		        }
		      });
		    },
		
		    /**
		     * Method: _request
		     *
		     * Make a HTTP request.
		     *
		     * Options:
		     *
		     *   headers - an object containing the request headers
		     *
		     * Parameters:
		     *
		     *   method - the method to use
		     *   url - the URL to make the request to
		     *   options - see above
		     */
		    _request: function (method, url, options) {
		      var self = this;
		      if (! options.headers) { options.headers = {}; }
		      options.headers['Authorization'] = 'Bearer ' + this.token;
		      return RS.WireClient.request.call(this, method, url, options).then(function (xhr) {
		        //503 means retry this later
		        if (xhr && xhr.status === 503) {
		          return global.setTimeout(self._request(method, url, options), 3210);
		        } else {
		          return Promise.resolve(xhr);
		        }
		      });
		    },
		
		    /**
		     * Method: fetchDelta
		     *
		     * Fetches the revision of all the files from dropbox API and puts them
		     * into _revCache. These values can then be used to determine if something
		     * has changed.
		     */
		    fetchDelta: function () {
		      // TODO: Handle `has_more`
		
		      var args = Array.prototype.slice.call(arguments);
		      var self = this;
		      var body = { path_prefix: PATH_PREFIX };
		
		      if (self._deltaCursor) {
		        body.cursor = self._deltaCursor;
		      }
		
		      return self._request('POST', 'https://api.dropbox.com/1/delta', {
		        body: encodeQuery(body),
		        headers: {
		          'Content-Type': 'application/x-www-form-urlencoded'
		        }
		      }).then(function (response) {
		        // break if status != 200
		        if (response.status !== 200 ) {
		          if (response.status === 400) {
		            self.rs._emit('error', new RemoteStorage.Unauthorized());
		            return Promise.resolve(args);
		          } else {
		            return Promise.reject("dropbox.fetchDelta returned "+response.status+response.responseText);
		          }
		          return;
		        }
		
		        var delta;
		        try {
		          delta = JSON.parse(response.responseText);
		        } catch(error) {
		          RS.log('fetchDeltas can not parse response',error);
		          return Promise.reject("can not parse response of fetchDelta : "+error.message);
		        }
		        // break if no entries found
		        if (!delta.entries) {
		          return Promise.reject('dropbox.fetchDeltas failed, no entries found');
		        }
		
		        // Dropbox sends the complete state
		        if (delta.reset) {
		          self._revCache = new LowerCaseCache('rev');
		        }
		
		        //saving the cursor for requesting further deltas in relation to the cursor position
		        if (delta.cursor) {
		          self._deltaCursor = delta.cursor;
		        }
		
		        //updating revCache
		        delta.entries.forEach(function (entry) {
		          var path = entry[0].substr(PATH_PREFIX.length);
		          var rev;
		          if (!entry[1]){
		            rev = null;
		          } else {
		            if (entry[1].is_dir) {
		              return;
		            }
		            rev = entry[1].rev;
		          }
		          self._revCache.set(path, rev);
		        });
		        return Promise.resolve(args);
		      }, function (err) {
		        this.rs.log('fetchDeltas', err);
		        this.rs._emit('error', new RemoteStorage.SyncError('fetchDeltas failed.' + err));
		        promise.reject(err);
		      }).then(function () {
		        if (self._revCache) {
		          var args = Array.prototype.slice.call(arguments);
		          self._revCache._activatePropagation();
		          return Promise.resolve(args);
		        }
		      });
		    },
		
		    /**
		     * Method: _getMetadata
		     *
		     * Gets metadata for a path (can point to either a file or a folder).
		     *
		     * Options:
		     *
		     *   list - if path points to a folder, specifies whether to list the
		     *          metadata of the folder's children. False by default.
		     *
		     * Parameters:
		     *
		     *   path - the path to get metadata for
		     *   options - see above
		     *
		     * Returns:
		     *
		     *   A promise for the metadata
		     */
		    _getMetadata: function (path, options) {
		      var self = this;
		      var cached = this._metadataCache[path];
		      var url = 'https://api.dropbox.com/1/metadata/auto' + getDropboxPath(path);
		      url += '?list=' + ((options && options.list) ? 'true' : 'false');
		      if (cached && cached.hash) {
		        url += '&hash=' + encodeURIComponent(cached.hash);
		      }
		      return this._request('GET', url, {}).then(function (resp) {
		        if (resp.status === 304) {
		          return Promise.resolve(cached);
		        } else if (resp.status === 200) {
		          var response = JSON.parse(resp.responseText);
		          self._metadataCache[path] = response;
		          return Promise.resolve(response);
		        } else {
		          // The file doesn't exist
		          return Promise.resolve();
		        }
		      });
		    },
		
		    /**
		     * Method: _uploadSimple
		     *
		     * Upload a simple file (the size is no more than 150MB).
		     *
		     * Parameters:
		     *
		     *   ifMatch - same as for get
		     *   path - path of the file
		     *   body - contents of the file to upload
		     *   contentType - mime type of the file
		     *
		     * Returns:
		     *
		     *   statusCode - HTTP status code
		     *   revision - revision of the newly-created file, if any
		     */
		    _uploadSimple: function (params) {
		      var self = this;
		      var url = 'https://api-content.dropbox.com/1/files_put/auto' + getDropboxPath(params.path) + '?';
		
		      if (params && params.ifMatch) {
		        url += "parent_rev=" + encodeURIComponent(params.ifMatch);
		      }
		
		      return self._request('PUT', url, {
		        body: params.body,
		        headers: {
		          'Content-Type': params.contentType
		        }
		      }).then(function (resp) {
		        if (resp.status !== 200) {
		          return Promise.resolve({ statusCode: resp.status });
		        }
		
		        var response;
		
		        try {
		          response = JSON.parse(resp.responseText);
		        } catch (e) {
		          return Promise.reject(e);
		        }
		
		        // Conflict happened. Delete the copy created by dropbox
		        if (response.path !== getDropboxPath(params.path)) {
		          var deleteUrl = 'https://api.dropbox.com/1/fileops/delete?root=auto&path=' + encodeURIComponent(response.path);
		          self._request('POST', deleteUrl, {});
		
		          return self._getMetadata(params.path).then(function (metadata) {
		            return Promise.resolve({
		              statusCode: 412,
		              revision: metadata.rev
		            });
		          });
		        }
		
		        self._revCache.propagateSet(params.path, response.rev);
		        return Promise.resolve({ statusCode: resp.status });
		      });
		    },
		
		    /**
		     * Method: _deleteSimple
		     *
		     * Deletes a file or a folder. If the folder contains more than 10'000 items
		     * (recursively) then the operation may not complete successfully. If that
		     * is the case, an Error gets thrown.
		     *
		     * Parameters:
		     *
		     *   path - the path to delete
		     *
		     * Returns:
		     *
		     *   statusCode - HTTP status code
		     */
		    _deleteSimple: function (path) {
		      var self = this;
		      var url = 'https://api.dropbox.com/1/fileops/delete?root=auto&path=' + encodeURIComponent(getDropboxPath(path));
		
		      return self._request('POST', url, {}).then(function (resp) {
		        if (resp.status === 406) {
		          // Too many files would be involved in the operation for it to
		          // complete successfully.
		          // TODO: Handle this somehow
		          return Promise.reject(new Error("Cannot delete '" + path + "': too many files involved"));
		        }
		
		        if (resp.status === 200 || resp.status === 404) {
		          self._revCache.delete(path);
		          delete self._itemRefs[path];
		        }
		
		        return Promise.resolve({ statusCode: resp.status });
		      });
		    }
		  };
		
		  //hooking and unhooking the sync
		
		  function hookSync(rs) {
		    if (rs._dropboxOrigSync) { return; } // already hooked
		    rs._dropboxOrigSync = rs.sync.sync.bind(rs.sync);
		    rs.sync.sync = function () {
		      return this.dropbox.fetchDelta.apply(this.dropbox, arguments).
		        then(rs._dropboxOrigSync, function (err) {
		          rs._emit('error', new RemoteStorage.SyncError(err));
		        });
		    }.bind(rs);
		  }
		
		  function unHookSync(rs) {
		    if (! rs._dropboxOrigSync) { return; } // not hooked
		    rs.sync.sync = rs._dropboxOrigSync;
		    delete rs._dropboxOrigSync;
		  }
		
		  // hooking and unhooking getItemURL
		
		  function hookGetItemURL(rs) {
		    if (rs._origBaseClientGetItemURL) { return; }
		    rs._origBaseClientGetItemURL = RS.BaseClient.prototype.getItemURL;
		    RS.BaseClient.prototype.getItemURL = function (path){
		      var ret = rs.dropbox._itemRefs[path];
		      return  ret ? ret : '';
		    };
		  }
		
		  function unHookGetItemURL(rs){
		    if (! rs._origBaseClientGetItemURL) { return; }
		    RS.BaseClient.prototype.getItemURL = rs._origBaseClientGetItemURL;
		    delete rs._origBaseClientGetItemURL;
		  }
		
		  function hookRemote(rs){
		    if (rs._origRemote) { return; }
		    rs._origRemote = rs.remote;
		    rs.remote = rs.dropbox;
		  }
		
		  function unHookRemote(rs){
		    if (rs._origRemote) {
		      rs.remote = rs._origRemote;
		      delete rs._origRemote;
		    }
		  }
		
		  function hookIt(rs){
		    hookRemote(rs);
		    if (rs.sync) {
		      hookSync(rs);
		    } else {
		      // when sync is not available yet, we wait for the remote to be connected,
		      // at which point sync should be available as well
		      rs.on('connected', function() {
		        if (rs.sync) {
		          hookSync(rs);
		        }
		      });
		    }
		    hookGetItemURL(rs);
		  }
		
		  function unHookIt(rs){
		    unHookRemote(rs);
		    unHookSync(rs);
		    unHookGetItemURL(rs);
		  }
		
		  RS.Dropbox._rs_init = function (rs) {
		    hasLocalStorage = RemoteStorage.util.localStorageAvailable();
		    if ( rs.apiKeys.dropbox ) {
		      rs.dropbox = new RS.Dropbox(rs);
		    }
		    if (rs.backend === 'dropbox') {
		      hookIt(rs);
		    }
		  };
		
		  RS.Dropbox._rs_supported = function () {
		    return true;
		  };
		
		  RS.Dropbox._rs_cleanup = function (rs) {
		    unHookIt(rs);
		    if (hasLocalStorage){
		      delete localStorage[SETTINGS_KEY];
		    }
		    rs.removeEventListener('error', onErrorCb);
		    rs.setBackend(undefined);
		  };
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {
		  /**
		   * Class: RemoteStorage.IndexedDB
		   *
		   *
		   * IndexedDB Interface
		   * -------------------
		   *
		   * TODO rewrite, doesn't expose GPD anymore, it's in cachinglayer now
		   *
		   * This file exposes a get/put/delete interface, accessing data in an IndexedDB.
		   *
		   * There are multiple parts to this interface:
		   *
		   *   The RemoteStorage integration:
		   *     - RemoteStorage.IndexedDB._rs_supported() determines if IndexedDB support
		   *       is available. If it isn't, RemoteStorage won't initialize the feature.
		   *     - RemoteStorage.IndexedDB._rs_init() initializes the feature. It returns
		   *       a promise that is fulfilled as soon as the database has been opened and
		   *       migrated.
		   *
		   *   The storage interface (RemoteStorage.IndexedDB object):
		   *     - Usually this is accessible via "remoteStorage.local"
		   *     - #get() takes a path and returns a promise.
		   *     - #put() takes a path, body and contentType and also returns a promise.
		   *     - #delete() takes a path and also returns a promise.
		   *     - #on('change', ...) events, being fired whenever something changes in
		   *       the storage. Change events roughly follow the StorageEvent pattern.
		   *       They have "oldValue" and "newValue" properties, which can be used to
		   *       distinguish create/update/delete operations and analyze changes in
		   *       change handlers. In addition they carry a "origin" property, which
		   *       is either "window", "local", or "remote". "remote" events are fired
		   *       whenever a change comes in from RemoteStorage.Sync.
		   *
		   *   The sync interface (also on RemoteStorage.IndexedDB object):
		   *     - #getNodes([paths]) returns the requested nodes in a promise.
		   *     - #setNodes(map) stores all the nodes given in the (path -> node) map.
		   *
		   */
		
		  var RS = __webpack_require__(2);
		  var RemoteStorage = RS;
		
		  var DB_VERSION = 2;
		
		  var DEFAULT_DB_NAME = 'remotestorage';
		  var DEFAULT_DB;
		
		  RS.IndexedDB = function (database) {
		    this.db = database || DEFAULT_DB;
		
		    if (!this.db) {
		      RemoteStorage.log("[IndexedDB] Failed to open DB");
		      return undefined;
		    }
		
		    RS.cachingLayer(this);
		    RS.eventHandling(this, 'change', 'local-events-done');
		
		    this.getsRunning = 0;
		    this.putsRunning = 0;
		
		    /**
		     * Property: changesQueued
		     *
		     * Given a node for which uncommitted changes exist, this cache
		     * stores either the entire uncommitted node, or false for a deletion.
		     * The node's path is used as the key.
		     *
		     * changesQueued stores changes for which no IndexedDB transaction has
		     * been started yet.
		     */
		    this.changesQueued = {};
		
		    /**
		     * Property: changesRunning
		     *
		     * Given a node for which uncommitted changes exist, this cache
		     * stores either the entire uncommitted node, or false for a deletion.
		     * The node's path is used as the key.
		     *
		     * At any time there is at most one IndexedDB transaction running.
		     * changesRunning stores the changes that are included in that currently
		     * running IndexedDB transaction, or if none is running, of the last one
		     * that ran.
		     */
		    this.changesRunning = {};
		  };
		
		  RS.IndexedDB.prototype = {
		    getNodes: function (paths) {
		      var misses = [], fromCache = {};
		      for (var i = 0, len = paths.length; i < len; i++) {
		        if (this.changesQueued[paths[i]] !== undefined) {
		          fromCache[paths[i]] = RemoteStorage.util.deepClone(this.changesQueued[paths[i]] || undefined);
		        } else if(this.changesRunning[paths[i]] !== undefined) {
		          fromCache[paths[i]] = RemoteStorage.util.deepClone(this.changesRunning[paths[i]] || undefined);
		        } else {
		          misses.push(paths[i]);
		        }
		      }
		      if (misses.length > 0) {
		        return this.getNodesFromDb(misses).then(function (nodes) {
		          for (var i in fromCache) {
		            nodes[i] = fromCache[i];
		          }
		          return nodes;
		        });
		      } else {
		        return Promise.resolve(fromCache);
		      }
		    },
		
		    setNodes: function (nodes) {
		      for (var i in nodes) {
		        this.changesQueued[i] = nodes[i] || false;
		      }
		      this.maybeFlush();
		      return Promise.resolve();
		    },
		
		    maybeFlush: function () {
		      if (this.putsRunning === 0) {
		        this.flushChangesQueued();
		      } else {
		        if (!this.commitSlownessWarning) {
		          this.commitSlownessWarning = setInterval(function () {
		            console.log('WARNING: waited more than 10 seconds for previous commit to finish');
		          }, 10000);
		        }
		      }
		    },
		
		    flushChangesQueued: function () {
		      if (this.commitSlownessWarning) {
		        clearInterval(this.commitSlownessWarning);
		        this.commitSlownessWarning = null;
		      }
		      if (Object.keys(this.changesQueued).length > 0) {
		        this.changesRunning = this.changesQueued;
		        this.changesQueued = {};
		        this.setNodesInDb(this.changesRunning).then(this.flushChangesQueued.bind(this));
		      }
		    },
		
		    getNodesFromDb: function (paths) {
		      var pending = Promise.defer();
		      var transaction = this.db.transaction(['nodes'], 'readonly');
		      var nodes = transaction.objectStore('nodes');
		      var retrievedNodes = {};
		      var startTime = new Date().getTime();
		
		      this.getsRunning++;
		
		      paths.map(function (path, i) {
		        nodes.get(path).onsuccess = function (evt) {
		          retrievedNodes[path] = evt.target.result;
		        };
		      });
		
		      transaction.oncomplete = function () {
		        pending.resolve(retrievedNodes);
		        this.getsRunning--;
		      }.bind(this);
		
		      transaction.onerror = transaction.onabort = function () {
		        pending.reject('get transaction error/abort');
		        this.getsRunning--;
		      }.bind(this);
		
		      return pending.promise;
		    },
		
		    setNodesInDb: function (nodes) {
		      var pending = Promise.defer();
		      var transaction = this.db.transaction(['nodes'], 'readwrite');
		      var nodesStore = transaction.objectStore('nodes');
		      var startTime = new Date().getTime();
		
		      this.putsRunning++;
		
		      RemoteStorage.log('[IndexedDB] Starting put', nodes, this.putsRunning);
		
		      for (var path in nodes) {
		        var node = nodes[path];
		        if(typeof(node) === 'object') {
		          try {
		            nodesStore.put(node);
		          } catch(e) {
		            RemoteStorage.log('[IndexedDB] Error while putting', node, e);
		            throw e;
		          }
		        } else {
		          try {
		            nodesStore.delete(path);
		          } catch(e) {
		            RemoteStorage.log('[IndexedDB] Error while removing', nodesStore, node, e);
		            throw e;
		          }
		        }
		      }
		
		      transaction.oncomplete = function () {
		        this.putsRunning--;
		        RemoteStorage.log('[IndexedDB] Finished put', nodes, this.putsRunning, (new Date().getTime() - startTime)+'ms');
		        pending.resolve();
		      }.bind(this);
		
		      transaction.onerror = function () {
		        this.putsRunning--;
		        pending.reject('transaction error');
		      }.bind(this);
		
		      transaction.onabort = function () {
		        pending.reject('transaction abort');
		        this.putsRunning--;
		      }.bind(this);
		
		      return pending.promise;
		    },
		
		    reset: function (callback) {
		      var dbName = this.db.name;
		      var self = this;
		
		      this.db.close();
		
		      RS.IndexedDB.clean(this.db.name, function() {
		        RS.IndexedDB.open(dbName, function (err, other) {
		          if (err) {
		            RemoteStorage.log('[IndexedDB] Error while resetting local storage', err);
		          } else {
		            // hacky!
		            self.db = other;
		          }
		          if (typeof callback === 'function') { callback(self); }
		        });
		      });
		    },
		
		    forAllNodes: function (cb) {
		      var pending = Promise.defer();
		      var transaction = this.db.transaction(['nodes'], 'readonly');
		      var cursorReq = transaction.objectStore('nodes').openCursor();
		
		      cursorReq.onsuccess = function (evt) {
		        var cursor = evt.target.result;
		
		        if (cursor) {
		          cb(this.migrate(cursor.value));
		          cursor.continue();
		        } else {
		          pending.resolve();
		        }
		      }.bind(this);
		
		      return pending.promise;
		    },
		
		    closeDB: function () {
		      this.db.close();
		    }
		
		  };
		
		  RS.IndexedDB.open = function (name, callback) {
		    var timer = setTimeout(function () {
		      callback("timeout trying to open db");
		    }, 10000);
		
		    try {
		      var req = indexedDB.open(name, DB_VERSION);
		
		      req.onerror = function () {
		        RemoteStorage.log('[IndexedDB] Opening DB failed', req);
		
		        clearTimeout(timer);
		        callback(req.error);
		      };
		
		      req.onupgradeneeded = function (event) {
		        var db = req.result;
		
		        RemoteStorage.log("[IndexedDB] Upgrade: from ", event.oldVersion, " to ", event.newVersion);
		
		        if (event.oldVersion !== 1) {
		          RemoteStorage.log("[IndexedDB] Creating object store: nodes");
		          db.createObjectStore('nodes', { keyPath: 'path' });
		        }
		
		        RemoteStorage.log("[IndexedDB] Creating object store: changes");
		
		        db.createObjectStore('changes', { keyPath: 'path' });
		      };
		
		      req.onsuccess = function () {
		        clearTimeout(timer);
		
		        // check if all object stores exist
		        var db = req.result;
		        if(!db.objectStoreNames.contains('nodes') || !db.objectStoreNames.contains('changes')) {
		          RemoteStorage.log("[IndexedDB] Missing object store. Resetting the database.");
		          RS.IndexedDB.clean(name, function() {
		            RS.IndexedDB.open(name, callback);
		          });
		          return;
		        }
		
		        callback(null, req.result);
		      };
		    } catch(error) {
		      RemoteStorage.log("[IndexedDB] Failed to open database: " + error);
		      RemoteStorage.log("[IndexedDB] Resetting database and trying again.");
		
		      clearTimeout(timer);
		
		      RS.IndexedDB.clean(name, function() {
		        RS.IndexedDB.open(name, callback);
		      });
		    };
		  };
		
		  RS.IndexedDB.clean = function (databaseName, callback) {
		    var req = indexedDB.deleteDatabase(databaseName);
		
		    req.onsuccess = function () {
		      RemoteStorage.log('[IndexedDB] Done removing DB');
		      callback();
		    };
		
		    req.onerror = req.onabort = function (evt) {
		      console.error('Failed to remove database "' + databaseName + '"', evt);
		    };
		  };
		
		  RS.IndexedDB._rs_init = function (remoteStorage) {
		    var pending = Promise.defer();
		
		    RS.IndexedDB.open(DEFAULT_DB_NAME, function (err, db) {
		      if (err) {
		        pending.reject(err);
		      } else {
		        DEFAULT_DB = db;
		        db.onerror = function () { remoteStorage._emit('error', err); };
		        pending.resolve();
		      }
		    });
		
		    return pending.promise;
		  };
		
		  RS.IndexedDB._rs_supported = function () {
		    var pending = Promise.defer();
		
		    global.indexedDB = global.indexedDB    || global.webkitIndexedDB ||
		                       global.mozIndexedDB || global.oIndexedDB      ||
		                       global.msIndexedDB;
		
		    // Detect browsers with known IndexedDb issues (e.g. Android pre-4.4)
		    var poorIndexedDbSupport = false;
		    if (typeof global.navigator !== 'undefined' &&
		        global.navigator.userAgent.match(/Android (2|3|4\.[0-3])/)) {
		      // Chrome and Firefox support IndexedDB
		      if (!navigator.userAgent.match(/Chrome|Firefox/)) {
		        poorIndexedDbSupport = true;
		      }
		    }
		
		    if ('indexedDB' in global && !poorIndexedDbSupport) {
		      try {
		        var check = indexedDB.open("rs-check");
		        check.onerror = function (event) {
		          pending.reject();
		        };
		        check.onsuccess = function (event) {
		          check.result.close();
		          indexedDB.deleteDatabase("rs-check");
		          pending.resolve();
		        };
		      } catch(e) {
		        pending.reject();
		      }
		    } else {
		      pending.reject();
		    }
		
		    return pending.promise;
		  };
		
		  RS.IndexedDB._rs_cleanup = function (remoteStorage) {
		    var pending = Promise.defer();
		
		    if (remoteStorage.local) {
		      remoteStorage.local.closeDB();
		    }
		
		    RS.IndexedDB.clean(DEFAULT_DB_NAME, function () {
		      pending.resolve();
		    });
		
		    return pending.promise;
		  };
		
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  /**
		   * Class: RemoteStorage.InMemoryStorage
		   *
		   * In-memory caching adapter. Used when no IndexedDB or localStorage
		   * available.
		   **/
		
		  RemoteStorage.InMemoryStorage = function () {
		    RemoteStorage.cachingLayer(this);
		    RemoteStorage.log('[InMemoryStorage] Registering events');
		    RemoteStorage.eventHandling(this, 'change', 'local-events-done');
		
		    this._storage = {};
		  };
		
		  RemoteStorage.InMemoryStorage.prototype = {
		
		    getNodes: function (paths) {
		      var nodes = {};
		
		      for(var i = 0, len = paths.length; i < len; i++) {
		        nodes[paths[i]] = this._storage[paths[i]];
		      }
		
		      return Promise.resolve(nodes);
		    },
		
		    setNodes: function (nodes) {
		      for (var path in nodes) {
		        if (nodes[path] === undefined) {
		          delete this._storage[path];
		        } else {
		          this._storage[path] = nodes[path];
		        }
		      }
		
		      return Promise.resolve();
		    },
		
		    forAllNodes: function (cb) {
		      for (var path in this._storage) {
		        cb(this.migrate(this._storage[path]));
		      }
		      return Promise.resolve();
		    }
		
		  };
		
		  RemoteStorage.InMemoryStorage._rs_init = function () {};
		
		  RemoteStorage.InMemoryStorage._rs_supported = function () {
		    // In-memory storage is always supported
		    return true;
		  };
		
		  RemoteStorage.InMemoryStorage._rs_cleanup = function () {};


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  /**
		   * Class: RemoteStorage.LocalStorage
		   *
		   * localStorage caching adapter. Used when no IndexedDB available.
		   **/
		
		  var NODES_PREFIX = "remotestorage:cache:nodes:";
		  var CHANGES_PREFIX = "remotestorage:cache:changes:";
		
		  RemoteStorage.LocalStorage = function () {
		    RemoteStorage.cachingLayer(this);
		    RemoteStorage.log('[LocalStorage] Registering events');
		    RemoteStorage.eventHandling(this, 'change', 'local-events-done');
		  };
		
		  function b64ToUint6(nChr) {
		    return nChr > 64 && nChr < 91 ?
		      nChr - 65
		      : nChr > 96 && nChr < 123 ?
		      nChr - 71
		      : nChr > 47 && nChr < 58 ?
		      nChr + 4
		      : nChr === 43 ?
		      62
		      : nChr === 47 ?
		      63
		      :
		      0;
		  }
		
		  function isBinary(node) {
		    return node.match(/charset=binary/);
		  }
		
		  function isRemoteStorageKey(key) {
		    return key.substr(0, NODES_PREFIX.length) === NODES_PREFIX ||
		           key.substr(0, CHANGES_PREFIX.length) === CHANGES_PREFIX;
		  }
		
		  function isNodeKey(key) {
		    return key.substr(0, NODES_PREFIX.length) === NODES_PREFIX;
		  }
		
		  RemoteStorage.LocalStorage.prototype = {
		
		    getNodes: function (paths) {
		      var nodes = {};
		
		      for(var i = 0, len = paths.length; i < len; i++) {
		        try {
		          nodes[paths[i]] = JSON.parse(localStorage[NODES_PREFIX+paths[i]]);
		        } catch(e) {
		          nodes[paths[i]] = undefined;
		        }
		      }
		
		      return Promise.resolve(nodes);
		    },
		
		    setNodes: function (nodes) {
		      for (var path in nodes) {
		        // TODO shouldn't we use getItem/setItem?
		        localStorage[NODES_PREFIX+path] = JSON.stringify(nodes[path]);
		      }
		
		      return Promise.resolve();
		    },
		
		    forAllNodes: function (cb) {
		      var node;
		
		      for(var i = 0, len = localStorage.length; i < len; i++) {
		        if (isNodeKey(localStorage.key(i))) {
		          try {
		            node = this.migrate(JSON.parse(localStorage[localStorage.key(i)]));
		          } catch(e) {
		            node = undefined;
		          }
		          if (node) {
		            cb(node);
		          }
		        }
		      }
		      return Promise.resolve();
		    }
		
		  };
		
		  RemoteStorage.LocalStorage._rs_init = function () {};
		
		  RemoteStorage.LocalStorage._rs_supported = function () {
		    return RemoteStorage.util.localStorageAvailable();
		  };
		
		  // TODO tests missing!
		  RemoteStorage.LocalStorage._rs_cleanup = function () {
		    var keys = [];
		
		    for (var i = 0, len = localStorage.length; i < len; i++) {
		      var key = localStorage.key(i);
		      if (isRemoteStorageKey(key)) {
		        keys.push(key);
		      }
		    }
		
		    keys.forEach(function (key) {
		      RemoteStorage.log('[LocalStorage] Removing', key);
		      delete localStorage[key];
		    });
		  };


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  var tv4 = __webpack_require__(21);
		
		  /**
		   * Class: RemoteStorage.BaseClient.Types
		   *
		   * - Manages and validates types of remoteStorage objects, using JSON-LD and
		   *   JSON Schema
		   * - Adds schema declaration/validation methods to BaseClient instances.
		   **/
		  RemoteStorage.BaseClient.Types = {
		    // <alias> -> <uri>
		    uris: {},
		    // <uri> -> <schema>
		    schemas: {},
		    // <uri> -> <alias>
		    aliases: {},
		
		    declare: function(moduleName, alias, uri, schema) {
		      var fullAlias = moduleName + '/' + alias;
		
		      if (schema.extends) {
		        var extendedAlias;
		        var parts = schema.extends.split('/');
		        if (parts.length === 1) {
		          extendedAlias = moduleName + '/' + parts.shift();
		        } else {
		          extendedAlias = parts.join('/');
		        }
		        var extendedUri = this.uris[extendedAlias];
		        if (! extendedUri) {
		          throw "Type '" + fullAlias + "' tries to extend unknown schema '" + extendedAlias + "'";
		        }
		        schema.extends = this.schemas[extendedUri];
		      }
		
		      this.uris[fullAlias] = uri;
		      this.aliases[uri] = fullAlias;
		      this.schemas[uri] = schema;
		    },
		
		    resolveAlias: function(alias) {
		      return this.uris[alias];
		    },
		
		    getSchema: function(uri) {
		      return this.schemas[uri];
		    },
		
		    inScope: function(moduleName) {
		      var ml = moduleName.length;
		      var schemas = {};
		      for (var alias in this.uris) {
		        if (alias.substr(0, ml + 1) === moduleName + '/') {
		          var uri = this.uris[alias];
		          schemas[uri] = this.schemas[uri];
		        }
		      }
		      return schemas;
		    }
		  };
		
		  var SchemaNotFound = function(uri) {
		    var error = new Error("Schema not found: " + uri);
		    error.name = "SchemaNotFound";
		    return error;
		  };
		
		  SchemaNotFound.prototype = Error.prototype;
		
		  RemoteStorage.BaseClient.Types.SchemaNotFound = SchemaNotFound;
		
		  /**
		   * Class: RemoteStorage.BaseClient
		   **/
		  RemoteStorage.BaseClient.prototype.extend({
		    /**
		     * Method: declareType
		     *
		     * Declare a remoteStorage object type using a JSON schema.
		     *
		     * Parameters:
		     *   alias  - A type alias/shortname
		     *   uri    - (optional) JSON-LD URI of the schema. Automatically generated if none given
		     *   schema - A JSON Schema object describing the object type
		     *
		     * Example:
		     *
		     * (start code)
		     * client.declareType('todo-item', {
		     *   "type": "object",
		     *   "properties": {
		     *     "id": {
		     *       "type": "string"
		     *     },
		     *     "title": {
		     *       "type": "string"
		     *     },
		     *     "finished": {
		     *       "type": "boolean"
		     *       "default": false
		     *     },
		     *     "createdAt": {
		     *       "type": "date"
		     *     }
		     *   },
		     *   "required": ["id", "title"]
		     * })
		     * (end code)
		     *
		     * Visit <http://json-schema.org> for details on how to use JSON Schema.
		     **/
		    declareType: function(alias, uri, schema) {
		      if (! schema) {
		        schema = uri;
		        uri = this._defaultTypeURI(alias);
		      }
		      RemoteStorage.BaseClient.Types.declare(this.moduleName, alias, uri, schema);
		    },
		
		    /**
		     * Method: validate
		     *
		     * Validate an object against the associated schema.
		     *
		     * Parameters:
		     *  object - Object to validate. Must have a @context property.
		     *
		     * Returns:
		     *   An object containing information about validation errors
		     **/
		    validate: function(object) {
		      var schema = RemoteStorage.BaseClient.Types.getSchema(object['@context']);
		      if (schema) {
		        return tv4.validateResult(object, schema);
		      } else {
		        throw new SchemaNotFound(object['@context']);
		      }
		    },
		
		    _defaultTypeURI: function(alias) {
		      return 'http://remotestorage.io/spec/modules/' + encodeURIComponent(this.moduleName) + '/' + encodeURIComponent(alias);
		    },
		
		    _attachType: function(object, alias) {
		      object['@context'] = RemoteStorage.BaseClient.Types.resolveAlias(this.moduleName + '/' + alias) || this._defaultTypeURI(alias);
		    }
		  });
		
		  // Documented in baseclient.js
		  Object.defineProperty(RemoteStorage.BaseClient.prototype, 'schemas', {
		    configurable: true,
		    get: function() {
		      return RemoteStorage.BaseClient.Types.inScope(this.moduleName);
		    }
		  });
		


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
		Author: Geraint Luff and others
		Year: 2013
		
		This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.
		
		If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
		*/
		(function (global, factory) {
		  if (true) {
		    // AMD. Register as an anonymous module.
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if (typeof module !== 'undefined' && module.exports){
		    // CommonJS. Define export.
		    module.exports = factory();
		  } else {
		    // Browser globals
		    global.tv4 = factory();
		  }
		}(this, function () {
		
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
		if (!Object.keys) {
			Object.keys = (function () {
				var hasOwnProperty = Object.prototype.hasOwnProperty,
					hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
					dontEnums = [
						'toString',
						'toLocaleString',
						'valueOf',
						'hasOwnProperty',
						'isPrototypeOf',
						'propertyIsEnumerable',
						'constructor'
					],
					dontEnumsLength = dontEnums.length;
		
				return function (obj) {
					if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
						throw new TypeError('Object.keys called on non-object');
					}
		
					var result = [];
		
					for (var prop in obj) {
						if (hasOwnProperty.call(obj, prop)) {
							result.push(prop);
						}
					}
		
					if (hasDontEnumBug) {
						for (var i=0; i < dontEnumsLength; i++) {
							if (hasOwnProperty.call(obj, dontEnums[i])) {
								result.push(dontEnums[i]);
							}
						}
					}
					return result;
				};
			})();
		}
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
		if (!Object.create) {
			Object.create = (function(){
				function F(){}
		
				return function(o){
					if (arguments.length !== 1) {
						throw new Error('Object.create implementation only accepts one parameter.');
					}
					F.prototype = o;
					return new F();
				};
			})();
		}
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
		if(!Array.isArray) {
			Array.isArray = function (vArg) {
				return Object.prototype.toString.call(vArg) === "[object Array]";
			};
		}
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
				if (this === null) {
					throw new TypeError();
				}
				var t = Object(this);
				var len = t.length >>> 0;
		
				if (len === 0) {
					return -1;
				}
				var n = 0;
				if (arguments.length > 1) {
					n = Number(arguments[1]);
					if (n !== n) { // shortcut for verifying if it's NaN
						n = 0;
					} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
						n = (n > 0 || -1) * Math.floor(Math.abs(n));
					}
				}
				if (n >= len) {
					return -1;
				}
				var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
				for (; k < len; k++) {
					if (k in t && t[k] === searchElement) {
						return k;
					}
				}
				return -1;
			};
		}
		
		// Grungey Object.isFrozen hack
		if (!Object.isFrozen) {
			Object.isFrozen = function (obj) {
				var key = "tv4_test_frozen_key";
				while (obj.hasOwnProperty(key)) {
					key += Math.random();
				}
				try {
					obj[key] = true;
					delete obj[key];
					return false;
				} catch (e) {
					return true;
				}
			};
		}
		// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed
		
		var uriTemplateGlobalModifiers = {
			"+": true,
			"#": true,
			".": true,
			"/": true,
			";": true,
			"?": true,
			"&": true
		};
		var uriTemplateSuffices = {
			"*": true
		};
		
		function notReallyPercentEncode(string) {
			return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
				return "%" + doubleEncoded.substring(3);
			});
		}
		
		function uriTemplateSubstitution(spec) {
			var modifier = "";
			if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
				modifier = spec.charAt(0);
				spec = spec.substring(1);
			}
			var separator = "";
			var prefix = "";
			var shouldEscape = true;
			var showVariables = false;
			var trimEmptyString = false;
			if (modifier === '+') {
				shouldEscape = false;
			} else if (modifier === ".") {
				prefix = ".";
				separator = ".";
			} else if (modifier === "/") {
				prefix = "/";
				separator = "/";
			} else if (modifier === '#') {
				prefix = "#";
				shouldEscape = false;
			} else if (modifier === ';') {
				prefix = ";";
				separator = ";";
				showVariables = true;
				trimEmptyString = true;
			} else if (modifier === '?') {
				prefix = "?";
				separator = "&";
				showVariables = true;
			} else if (modifier === '&') {
				prefix = "&";
				separator = "&";
				showVariables = true;
			}
		
			var varNames = [];
			var varList = spec.split(",");
			var varSpecs = [];
			var varSpecMap = {};
			for (var i = 0; i < varList.length; i++) {
				var varName = varList[i];
				var truncate = null;
				if (varName.indexOf(":") !== -1) {
					var parts = varName.split(":");
					varName = parts[0];
					truncate = parseInt(parts[1], 10);
				}
				var suffices = {};
				while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
					suffices[varName.charAt(varName.length - 1)] = true;
					varName = varName.substring(0, varName.length - 1);
				}
				var varSpec = {
					truncate: truncate,
					name: varName,
					suffices: suffices
				};
				varSpecs.push(varSpec);
				varSpecMap[varName] = varSpec;
				varNames.push(varName);
			}
			var subFunction = function (valueFunction) {
				var result = "";
				var startIndex = 0;
				for (var i = 0; i < varSpecs.length; i++) {
					var varSpec = varSpecs[i];
					var value = valueFunction(varSpec.name);
					if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
						startIndex++;
						continue;
					}
					if (i === startIndex) {
						result += prefix;
					} else {
						result += (separator || ",");
					}
					if (Array.isArray(value)) {
						if (showVariables) {
							result += varSpec.name + "=";
						}
						for (var j = 0; j < value.length; j++) {
							if (j > 0) {
								result += varSpec.suffices['*'] ? (separator || ",") : ",";
								if (varSpec.suffices['*'] && showVariables) {
									result += varSpec.name + "=";
								}
							}
							result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
						}
					} else if (typeof value === "object") {
						if (showVariables && !varSpec.suffices['*']) {
							result += varSpec.name + "=";
						}
						var first = true;
						for (var key in value) {
							if (!first) {
								result += varSpec.suffices['*'] ? (separator || ",") : ",";
							}
							first = false;
							result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
							result += varSpec.suffices['*'] ? '=' : ",";
							result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
						}
					} else {
						if (showVariables) {
							result += varSpec.name;
							if (!trimEmptyString || value !== "") {
								result += "=";
							}
						}
						if (varSpec.truncate != null) {
							value = value.substring(0, varSpec.truncate);
						}
						result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
					}
				}
				return result;
			};
			subFunction.varNames = varNames;
			return {
				prefix: prefix,
				substitution: subFunction
			};
		}
		
		function UriTemplate(template) {
			if (!(this instanceof UriTemplate)) {
				return new UriTemplate(template);
			}
			var parts = template.split("{");
			var textParts = [parts.shift()];
			var prefixes = [];
			var substitutions = [];
			var varNames = [];
			while (parts.length > 0) {
				var part = parts.shift();
				var spec = part.split("}")[0];
				var remainder = part.substring(spec.length + 1);
				var funcs = uriTemplateSubstitution(spec);
				substitutions.push(funcs.substitution);
				prefixes.push(funcs.prefix);
				textParts.push(remainder);
				varNames = varNames.concat(funcs.substitution.varNames);
			}
			this.fill = function (valueFunction) {
				var result = textParts[0];
				for (var i = 0; i < substitutions.length; i++) {
					var substitution = substitutions[i];
					result += substitution(valueFunction);
					result += textParts[i + 1];
				}
				return result;
			};
			this.varNames = varNames;
			this.template = template;
		}
		UriTemplate.prototype = {
			toString: function () {
				return this.template;
			},
			fillFromObject: function (obj) {
				return this.fill(function (varName) {
					return obj[varName];
				});
			}
		};
		var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
			this.missing = [];
			this.missingMap = {};
			this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
			this.schemas = parent ? Object.create(parent.schemas) : {};
			this.collectMultiple = collectMultiple;
			this.errors = [];
			this.handleError = collectMultiple ? this.collectError : this.returnError;
			if (checkRecursive) {
				this.checkRecursive = true;
				this.scanned = [];
				this.scannedFrozen = [];
				this.scannedFrozenSchemas = [];
				this.scannedFrozenValidationErrors = [];
				this.validatedSchemasKey = 'tv4_validation_id';
				this.validationErrorsKey = 'tv4_validation_errors_id';
			}
			if (trackUnknownProperties) {
				this.trackUnknownProperties = true;
				this.knownPropertyPaths = {};
				this.unknownPropertyPaths = {};
			}
			this.errorReporter = errorReporter || defaultErrorReporter('en');
			if (typeof this.errorReporter === 'string') {
				throw new Error('debug');
			}
			this.definedKeywords = {};
			if (parent) {
				for (var key in parent.definedKeywords) {
					this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
				}
			}
		};
		ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
			this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
			this.definedKeywords[keyword].push(keywordFunction);
		};
		ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
			var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
			error.message = this.errorReporter(error, data, schema);
			return error;
		};
		ValidatorContext.prototype.returnError = function (error) {
			return error;
		};
		ValidatorContext.prototype.collectError = function (error) {
			if (error) {
				this.errors.push(error);
			}
			return null;
		};
		ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
			for (var i = startIndex; i < this.errors.length; i++) {
				this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
			}
			return this;
		};
		ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
			for (var unknownPath in this.unknownPropertyPaths) {
				var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "", null, data, schema);
				var result = this.handleError(error);
				if (result) {
					return result;
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.addFormat = function (format, validator) {
			if (typeof format === 'object') {
				for (var key in format) {
					this.addFormat(key, format[key]);
				}
				return this;
			}
			this.formatValidators[format] = validator;
		};
		ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
			if (schema['$ref'] !== undefined) {
				urlHistory = urlHistory || {};
				if (urlHistory[schema['$ref']]) {
					return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '', null, undefined, schema);
				}
				urlHistory[schema['$ref']] = true;
				schema = this.getSchema(schema['$ref'], urlHistory);
			}
			return schema;
		};
		ValidatorContext.prototype.getSchema = function (url, urlHistory) {
			var schema;
			if (this.schemas[url] !== undefined) {
				schema = this.schemas[url];
				return this.resolveRefs(schema, urlHistory);
			}
			var baseUrl = url;
			var fragment = "";
			if (url.indexOf('#') !== -1) {
				fragment = url.substring(url.indexOf("#") + 1);
				baseUrl = url.substring(0, url.indexOf("#"));
			}
			if (typeof this.schemas[baseUrl] === 'object') {
				schema = this.schemas[baseUrl];
				var pointerPath = decodeURIComponent(fragment);
				if (pointerPath === "") {
					return this.resolveRefs(schema, urlHistory);
				} else if (pointerPath.charAt(0) !== "/") {
					return undefined;
				}
				var parts = pointerPath.split("/").slice(1);
				for (var i = 0; i < parts.length; i++) {
					var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
					if (schema[component] === undefined) {
						schema = undefined;
						break;
					}
					schema = schema[component];
				}
				if (schema !== undefined) {
					return this.resolveRefs(schema, urlHistory);
				}
			}
			if (this.missing[baseUrl] === undefined) {
				this.missing.push(baseUrl);
				this.missing[baseUrl] = baseUrl;
				this.missingMap[baseUrl] = baseUrl;
			}
		};
		ValidatorContext.prototype.searchSchemas = function (schema, url) {
			if (Array.isArray(schema)) {
				for (var i = 0; i < schema.length; i++) {
					this.searchSchemas(schema[i], url);
				}
			} else if (schema && typeof schema === "object") {
				if (typeof schema.id === "string") {
					if (isTrustedUrl(url, schema.id)) {
						if (this.schemas[schema.id] === undefined) {
							this.schemas[schema.id] = schema;
						}
					}
				}
				for (var key in schema) {
					if (key !== "enum") {
						if (typeof schema[key] === "object") {
							this.searchSchemas(schema[key], url);
						} else if (key === "$ref") {
							var uri = getDocumentUri(schema[key]);
							if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
								this.missingMap[uri] = uri;
							}
						}
					}
				}
			}
		};
		ValidatorContext.prototype.addSchema = function (url, schema) {
			//overload
			if (typeof url !== 'string' || typeof schema === 'undefined') {
				if (typeof url === 'object' && typeof url.id === 'string') {
					schema = url;
					url = schema.id;
				}
				else {
					return;
				}
			}
			if (url === getDocumentUri(url) + "#") {
				// Remove empty fragment
				url = getDocumentUri(url);
			}
			this.schemas[url] = schema;
			delete this.missingMap[url];
			normSchema(schema, url);
			this.searchSchemas(schema, url);
		};
		
		ValidatorContext.prototype.getSchemaMap = function () {
			var map = {};
			for (var key in this.schemas) {
				map[key] = this.schemas[key];
			}
			return map;
		};
		
		ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
			var list = [];
			for (var key in this.schemas) {
				if (!filterRegExp || filterRegExp.test(key)) {
					list.push(key);
				}
			}
			return list;
		};
		
		ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
			var list = [];
			for (var key in this.missingMap) {
				if (!filterRegExp || filterRegExp.test(key)) {
					list.push(key);
				}
			}
			return list;
		};
		
		ValidatorContext.prototype.dropSchemas = function () {
			this.schemas = {};
			this.reset();
		};
		ValidatorContext.prototype.reset = function () {
			this.missing = [];
			this.missingMap = {};
			this.errors = [];
		};
		
		ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
			var topLevel;
			schema = this.resolveRefs(schema);
			if (!schema) {
				return null;
			} else if (schema instanceof ValidationError) {
				this.errors.push(schema);
				return schema;
			}
		
			var startErrorCount = this.errors.length;
			var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
			if (this.checkRecursive && data && typeof data === 'object') {
				topLevel = !this.scanned.length;
				if (data[this.validatedSchemasKey]) {
					var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
					if (schemaIndex !== -1) {
						this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
						return null;
					}
				}
				if (Object.isFrozen(data)) {
					frozenIndex = this.scannedFrozen.indexOf(data);
					if (frozenIndex !== -1) {
						var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
						if (frozenSchemaIndex !== -1) {
							this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
							return null;
						}
					}
				}
				this.scanned.push(data);
				if (Object.isFrozen(data)) {
					if (frozenIndex === -1) {
						frozenIndex = this.scannedFrozen.length;
						this.scannedFrozen.push(data);
						this.scannedFrozenSchemas.push([]);
					}
					scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
					this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
					this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
				} else {
					if (!data[this.validatedSchemasKey]) {
						try {
							Object.defineProperty(data, this.validatedSchemasKey, {
								value: [],
								configurable: true
							});
							Object.defineProperty(data, this.validationErrorsKey, {
								value: [],
								configurable: true
							});
						} catch (e) {
							//IE 7/8 workaround
							data[this.validatedSchemasKey] = [];
							data[this.validationErrorsKey] = [];
						}
					}
					scannedSchemasIndex = data[this.validatedSchemasKey].length;
					data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
					data[this.validationErrorsKey][scannedSchemasIndex] = [];
				}
			}
		
			var errorCount = this.errors.length;
			var error = this.validateBasic(data, schema, dataPointerPath)
				|| this.validateNumeric(data, schema, dataPointerPath)
				|| this.validateString(data, schema, dataPointerPath)
				|| this.validateArray(data, schema, dataPointerPath)
				|| this.validateObject(data, schema, dataPointerPath)
				|| this.validateCombinations(data, schema, dataPointerPath)
				|| this.validateHypermedia(data, schema, dataPointerPath)
				|| this.validateFormat(data, schema, dataPointerPath)
				|| this.validateDefinedKeywords(data, schema, dataPointerPath)
				|| null;
		
			if (topLevel) {
				while (this.scanned.length) {
					var item = this.scanned.pop();
					delete item[this.validatedSchemasKey];
				}
				this.scannedFrozen = [];
				this.scannedFrozenSchemas = [];
			}
		
			if (error || errorCount !== this.errors.length) {
				while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
					var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
					var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
					if (error) {
						error = error.prefixWith(dataPart, schemaPart);
					}
					this.prefixErrors(errorCount, dataPart, schemaPart);
				}
			}
		
			if (scannedFrozenSchemaIndex !== null) {
				this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
			} else if (scannedSchemasIndex !== null) {
				data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
			}
		
			return this.handleError(error);
		};
		ValidatorContext.prototype.validateFormat = function (data, schema) {
			if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
				return null;
			}
			var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
			if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
				return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}, '', '/format', null, data, schema);
			} else if (errorMessage && typeof errorMessage === 'object') {
				return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema);
			}
			return null;
		};
		ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
			for (var key in this.definedKeywords) {
				if (typeof schema[key] === 'undefined') {
					continue;
				}
				var validationFunctions = this.definedKeywords[key];
				for (var i = 0; i < validationFunctions.length; i++) {
					var func = validationFunctions[i];
					var result = func(data, schema[key], schema, dataPointerPath);
					if (typeof result === 'string' || typeof result === 'number') {
						return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}, '', '', null, data, schema).prefixWith(null, key);
					} else if (result && typeof result === 'object') {
						var code = result.code;
						if (typeof code === 'string') {
							if (!ErrorCodes[code]) {
								throw new Error('Undefined error code (use defineError): ' + code);
							}
							code = ErrorCodes[code];
						} else if (typeof code !== 'number') {
							code = ErrorCodes.KEYWORD_CUSTOM;
						}
						var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
						var schemaPath = result.schemaPath || ("/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
						return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
					}
				}
			}
			return null;
		};
		
		function recursiveCompare(A, B) {
			if (A === B) {
				return true;
			}
			if (A && B && typeof A === "object" && typeof B === "object") {
				if (Array.isArray(A) !== Array.isArray(B)) {
					return false;
				} else if (Array.isArray(A)) {
					if (A.length !== B.length) {
						return false;
					}
					for (var i = 0; i < A.length; i++) {
						if (!recursiveCompare(A[i], B[i])) {
							return false;
						}
					}
				} else {
					var key;
					for (key in A) {
						if (B[key] === undefined && A[key] !== undefined) {
							return false;
						}
					}
					for (key in B) {
						if (A[key] === undefined && B[key] !== undefined) {
							return false;
						}
					}
					for (key in A) {
						if (!recursiveCompare(A[key], B[key])) {
							return false;
						}
					}
				}
				return true;
			}
			return false;
		}
		
		ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
			var error;
			if (error = this.validateType(data, schema, dataPointerPath)) {
				return error.prefixWith(null, "type");
			}
			if (error = this.validateEnum(data, schema, dataPointerPath)) {
				return error.prefixWith(null, "type");
			}
			return null;
		};
		
		ValidatorContext.prototype.validateType = function validateType(data, schema) {
			if (schema.type === undefined) {
				return null;
			}
			var dataType = typeof data;
			if (data === null) {
				dataType = "null";
			} else if (Array.isArray(data)) {
				dataType = "array";
			}
			var allowedTypes = schema.type;
			if (!Array.isArray(allowedTypes)) {
				allowedTypes = [allowedTypes];
			}
		
			for (var i = 0; i < allowedTypes.length; i++) {
				var type = allowedTypes[i];
				if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
					return null;
				}
			}
			return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")}, '', '', null, data, schema);
		};
		
		ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
			if (schema["enum"] === undefined) {
				return null;
			}
			for (var i = 0; i < schema["enum"].length; i++) {
				var enumVal = schema["enum"][i];
				if (recursiveCompare(data, enumVal)) {
					return null;
				}
			}
			return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data}, '', '', null, data, schema);
		};
		
		ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
			return this.validateMultipleOf(data, schema, dataPointerPath)
				|| this.validateMinMax(data, schema, dataPointerPath)
				|| this.validateNaN(data, schema, dataPointerPath)
				|| null;
		};
		
		var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
		var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
		ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
			var multipleOf = schema.multipleOf || schema.divisibleBy;
			if (multipleOf === undefined) {
				return null;
			}
			if (typeof data === "number") {
				var remainder = (data/multipleOf)%1;
				if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
					return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf}, '', '', null, data, schema);
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
			if (typeof data !== "number") {
				return null;
			}
			if (schema.minimum !== undefined) {
				if (data < schema.minimum) {
					return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}, '', '/minimum', null, data, schema);
				}
				if (schema.exclusiveMinimum && data === schema.minimum) {
					return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}, '', '/exclusiveMinimum', null, data, schema);
				}
			}
			if (schema.maximum !== undefined) {
				if (data > schema.maximum) {
					return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}, '', '/maximum', null, data, schema);
				}
				if (schema.exclusiveMaximum && data === schema.maximum) {
					return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}, '', '/exclusiveMaximum', null, data, schema);
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
			if (typeof data !== "number") {
				return null;
			}
			if (isNaN(data) === true || data === Infinity || data === -Infinity) {
				return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}, '', '/type', null, data, schema);
			}
			return null;
		};
		
		ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
			return this.validateStringLength(data, schema, dataPointerPath)
				|| this.validateStringPattern(data, schema, dataPointerPath)
				|| null;
		};
		
		ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
			if (typeof data !== "string") {
				return null;
			}
			if (schema.minLength !== undefined) {
				if (data.length < schema.minLength) {
					return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}, '', '/minLength', null, data, schema);
				}
			}
			if (schema.maxLength !== undefined) {
				if (data.length > schema.maxLength) {
					return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}, '', '/maxLength', null, data, schema);
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
			if (typeof data !== "string" || (typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp))) {
				return null;
			}
			var regexp;
			if (schema.pattern instanceof RegExp) {
			  regexp = schema.pattern;
			}
			else {
			  var body, flags = '';
			  // Check for regular expression literals
			  // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5
			  var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);
			  if (literal) {
			    body = literal[1];
			    flags = literal[2];
			  }
			  else {
			    body = schema.pattern;
			  }
			  regexp = new RegExp(body, flags);
			}
			if (!regexp.test(data)) {
				return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}, '', '/pattern', null, data, schema);
			}
			return null;
		};
		
		ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
			if (!Array.isArray(data)) {
				return null;
			}
			return this.validateArrayLength(data, schema, dataPointerPath)
				|| this.validateArrayUniqueItems(data, schema, dataPointerPath)
				|| this.validateArrayItems(data, schema, dataPointerPath)
				|| null;
		};
		
		ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
			var error;
			if (schema.minItems !== undefined) {
				if (data.length < schema.minItems) {
					error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems}, '', '/minItems', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
			if (schema.maxItems !== undefined) {
				if (data.length > schema.maxItems) {
					error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems}, '', '/maxItems', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
			if (schema.uniqueItems) {
				for (var i = 0; i < data.length; i++) {
					for (var j = i + 1; j < data.length; j++) {
						if (recursiveCompare(data[i], data[j])) {
							var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j}, '', '/uniqueItems', null, data, schema);
							if (this.handleError(error)) {
								return error;
							}
						}
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
			if (schema.items === undefined) {
				return null;
			}
			var error, i;
			if (Array.isArray(schema.items)) {
				for (i = 0; i < data.length; i++) {
					if (i < schema.items.length) {
						if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
							return error;
						}
					} else if (schema.additionalItems !== undefined) {
						if (typeof schema.additionalItems === "boolean") {
							if (!schema.additionalItems) {
								error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema));
								if (this.handleError(error)) {
									return error;
								}
							}
						} else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
							return error;
						}
					}
				}
			} else {
				for (i = 0; i < data.length; i++) {
					if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
						return error;
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
			if (typeof data !== "object" || data === null || Array.isArray(data)) {
				return null;
			}
			return this.validateObjectMinMaxProperties(data, schema, dataPointerPath)
				|| this.validateObjectRequiredProperties(data, schema, dataPointerPath)
				|| this.validateObjectProperties(data, schema, dataPointerPath)
				|| this.validateObjectDependencies(data, schema, dataPointerPath)
				|| null;
		};
		
		ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
			var keys = Object.keys(data);
			var error;
			if (schema.minProperties !== undefined) {
				if (keys.length < schema.minProperties) {
					error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}, '', '/minProperties', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
			if (schema.maxProperties !== undefined) {
				if (keys.length > schema.maxProperties) {
					error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}, '', '/maxProperties', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
			if (schema.required !== undefined) {
				for (var i = 0; i < schema.required.length; i++) {
					var key = schema.required[i];
					if (data[key] === undefined) {
						var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}, '', '/required/' + i, null, data, schema);
						if (this.handleError(error)) {
							return error;
						}
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
			var error;
			for (var key in data) {
				var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
				var foundMatch = false;
				if (schema.properties !== undefined && schema.properties[key] !== undefined) {
					foundMatch = true;
					if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
						return error;
					}
				}
				if (schema.patternProperties !== undefined) {
					for (var patternKey in schema.patternProperties) {
						var regexp = new RegExp(patternKey);
						if (regexp.test(key)) {
							foundMatch = true;
							if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
								return error;
							}
						}
					}
				}
				if (!foundMatch) {
					if (schema.additionalProperties !== undefined) {
						if (this.trackUnknownProperties) {
							this.knownPropertyPaths[keyPointerPath] = true;
							delete this.unknownPropertyPaths[keyPointerPath];
						}
						if (typeof schema.additionalProperties === "boolean") {
							if (!schema.additionalProperties) {
								error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {key: key}, '', '/additionalProperties', null, data, schema).prefixWith(key, null);
								if (this.handleError(error)) {
									return error;
								}
							}
						} else {
							if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
								return error;
							}
						}
					} else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
						this.unknownPropertyPaths[keyPointerPath] = true;
					}
				} else if (this.trackUnknownProperties) {
					this.knownPropertyPaths[keyPointerPath] = true;
					delete this.unknownPropertyPaths[keyPointerPath];
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
			var error;
			if (schema.dependencies !== undefined) {
				for (var depKey in schema.dependencies) {
					if (data[depKey] !== undefined) {
						var dep = schema.dependencies[depKey];
						if (typeof dep === "string") {
							if (data[dep] === undefined) {
								error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}, '', '', null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
								if (this.handleError(error)) {
									return error;
								}
							}
						} else if (Array.isArray(dep)) {
							for (var i = 0; i < dep.length; i++) {
								var requiredKey = dep[i];
								if (data[requiredKey] === undefined) {
									error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}, '', '/' + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
									if (this.handleError(error)) {
										return error;
									}
								}
							}
						} else {
							if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
								return error;
							}
						}
					}
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
			return this.validateAllOf(data, schema, dataPointerPath)
				|| this.validateAnyOf(data, schema, dataPointerPath)
				|| this.validateOneOf(data, schema, dataPointerPath)
				|| this.validateNot(data, schema, dataPointerPath)
				|| null;
		};
		
		ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
			if (schema.allOf === undefined) {
				return null;
			}
			var error;
			for (var i = 0; i < schema.allOf.length; i++) {
				var subSchema = schema.allOf[i];
				if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
					return error;
				}
			}
			return null;
		};
		
		ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
			if (schema.anyOf === undefined) {
				return null;
			}
			var errors = [];
			var startErrorCount = this.errors.length;
			var oldUnknownPropertyPaths, oldKnownPropertyPaths;
			if (this.trackUnknownProperties) {
				oldUnknownPropertyPaths = this.unknownPropertyPaths;
				oldKnownPropertyPaths = this.knownPropertyPaths;
			}
			var errorAtEnd = true;
			for (var i = 0; i < schema.anyOf.length; i++) {
				if (this.trackUnknownProperties) {
					this.unknownPropertyPaths = {};
					this.knownPropertyPaths = {};
				}
				var subSchema = schema.anyOf[i];
		
				var errorCount = this.errors.length;
				var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);
		
				if (error === null && errorCount === this.errors.length) {
					this.errors = this.errors.slice(0, startErrorCount);
		
					if (this.trackUnknownProperties) {
						for (var knownKey in this.knownPropertyPaths) {
							oldKnownPropertyPaths[knownKey] = true;
							delete oldUnknownPropertyPaths[knownKey];
						}
						for (var unknownKey in this.unknownPropertyPaths) {
							if (!oldKnownPropertyPaths[unknownKey]) {
								oldUnknownPropertyPaths[unknownKey] = true;
							}
						}
						// We need to continue looping so we catch all the property definitions, but we don't want to return an error
						errorAtEnd = false;
						continue;
					}
		
					return null;
				}
				if (error) {
					errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
				}
			}
			if (this.trackUnknownProperties) {
				this.unknownPropertyPaths = oldUnknownPropertyPaths;
				this.knownPropertyPaths = oldKnownPropertyPaths;
			}
			if (errorAtEnd) {
				errors = errors.concat(this.errors.slice(startErrorCount));
				this.errors = this.errors.slice(0, startErrorCount);
				return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
			}
		};
		
		ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
			if (schema.oneOf === undefined) {
				return null;
			}
			var validIndex = null;
			var errors = [];
			var startErrorCount = this.errors.length;
			var oldUnknownPropertyPaths, oldKnownPropertyPaths;
			if (this.trackUnknownProperties) {
				oldUnknownPropertyPaths = this.unknownPropertyPaths;
				oldKnownPropertyPaths = this.knownPropertyPaths;
			}
			for (var i = 0; i < schema.oneOf.length; i++) {
				if (this.trackUnknownProperties) {
					this.unknownPropertyPaths = {};
					this.knownPropertyPaths = {};
				}
				var subSchema = schema.oneOf[i];
		
				var errorCount = this.errors.length;
				var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);
		
				if (error === null && errorCount === this.errors.length) {
					if (validIndex === null) {
						validIndex = i;
					} else {
						this.errors = this.errors.slice(0, startErrorCount);
						return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf", null, data, schema);
					}
					if (this.trackUnknownProperties) {
						for (var knownKey in this.knownPropertyPaths) {
							oldKnownPropertyPaths[knownKey] = true;
							delete oldUnknownPropertyPaths[knownKey];
						}
						for (var unknownKey in this.unknownPropertyPaths) {
							if (!oldKnownPropertyPaths[unknownKey]) {
								oldUnknownPropertyPaths[unknownKey] = true;
							}
						}
					}
				} else if (error) {
					errors.push(error);
				}
			}
			if (this.trackUnknownProperties) {
				this.unknownPropertyPaths = oldUnknownPropertyPaths;
				this.knownPropertyPaths = oldKnownPropertyPaths;
			}
			if (validIndex === null) {
				errors = errors.concat(this.errors.slice(startErrorCount));
				this.errors = this.errors.slice(0, startErrorCount);
				return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
			} else {
				this.errors = this.errors.slice(0, startErrorCount);
			}
			return null;
		};
		
		ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
			if (schema.not === undefined) {
				return null;
			}
			var oldErrorCount = this.errors.length;
			var oldUnknownPropertyPaths, oldKnownPropertyPaths;
			if (this.trackUnknownProperties) {
				oldUnknownPropertyPaths = this.unknownPropertyPaths;
				oldKnownPropertyPaths = this.knownPropertyPaths;
				this.unknownPropertyPaths = {};
				this.knownPropertyPaths = {};
			}
			var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
			var notErrors = this.errors.slice(oldErrorCount);
			this.errors = this.errors.slice(0, oldErrorCount);
			if (this.trackUnknownProperties) {
				this.unknownPropertyPaths = oldUnknownPropertyPaths;
				this.knownPropertyPaths = oldKnownPropertyPaths;
			}
			if (error === null && notErrors.length === 0) {
				return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
			}
			return null;
		};
		
		ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
			if (!schema.links) {
				return null;
			}
			var error;
			for (var i = 0; i < schema.links.length; i++) {
				var ldo = schema.links[i];
				if (ldo.rel === "describedby") {
					var template = new UriTemplate(ldo.href);
					var allPresent = true;
					for (var j = 0; j < template.varNames.length; j++) {
						if (!(template.varNames[j] in data)) {
							allPresent = false;
							break;
						}
					}
					if (allPresent) {
						var schemaUrl = template.fillFromObject(data);
						var subSchema = {"$ref": schemaUrl};
						if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
							return error;
						}
					}
				}
			}
		};
		
		// parseURI() and resolveUrl() are from https://gist.github.com/1088850
		//   -  released as public domain by author ("Yaffle") - see comments on gist
		
		function parseURI(url) {
			var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
			// authority = '//' + user + ':' + pass '@' + hostname + ':' port
			return (m ? {
				href     : m[0] || '',
				protocol : m[1] || '',
				authority: m[2] || '',
				host     : m[3] || '',
				hostname : m[4] || '',
				port     : m[5] || '',
				pathname : m[6] || '',
				search   : m[7] || '',
				hash     : m[8] || ''
			} : null);
		}
		
		function resolveUrl(base, href) {// RFC 3986
		
			function removeDotSegments(input) {
				var output = [];
				input.replace(/^(\.\.?(\/|$))+/, '')
					.replace(/\/(\.(\/|$))+/g, '/')
					.replace(/\/\.\.$/, '/../')
					.replace(/\/?[^\/]*/g, function (p) {
						if (p === '/..') {
							output.pop();
						} else {
							output.push(p);
						}
				});
				return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
			}
		
			href = parseURI(href || '');
			base = parseURI(base || '');
		
			return !href || !base ? null : (href.protocol || base.protocol) +
				(href.protocol || href.authority ? href.authority : base.authority) +
				removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
				(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
				href.hash;
		}
		
		function getDocumentUri(uri) {
			return uri.split('#')[0];
		}
		function normSchema(schema, baseUri) {
			if (schema && typeof schema === "object") {
				if (baseUri === undefined) {
					baseUri = schema.id;
				} else if (typeof schema.id === "string") {
					baseUri = resolveUrl(baseUri, schema.id);
					schema.id = baseUri;
				}
				if (Array.isArray(schema)) {
					for (var i = 0; i < schema.length; i++) {
						normSchema(schema[i], baseUri);
					}
				} else {
					if (typeof schema['$ref'] === "string") {
						schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
					}
					for (var key in schema) {
						if (key !== "enum") {
							normSchema(schema[key], baseUri);
						}
					}
				}
			}
		}
		
		function defaultErrorReporter(language) {
			language = language || 'en';
		
			var errorMessages = languages[language];
		
			return function (error) {
				var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
				if (typeof messageTemplate !== 'string') {
					return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
				}
				var messageParams = error.params;
				// Adapted from Crockford's supplant()
				return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
					var subValue = messageParams[varName];
					return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
				});
			};
		}
		
		var ErrorCodes = {
			INVALID_TYPE: 0,
			ENUM_MISMATCH: 1,
			ANY_OF_MISSING: 10,
			ONE_OF_MISSING: 11,
			ONE_OF_MULTIPLE: 12,
			NOT_PASSED: 13,
			// Numeric errors
			NUMBER_MULTIPLE_OF: 100,
			NUMBER_MINIMUM: 101,
			NUMBER_MINIMUM_EXCLUSIVE: 102,
			NUMBER_MAXIMUM: 103,
			NUMBER_MAXIMUM_EXCLUSIVE: 104,
			NUMBER_NOT_A_NUMBER: 105,
			// String errors
			STRING_LENGTH_SHORT: 200,
			STRING_LENGTH_LONG: 201,
			STRING_PATTERN: 202,
			// Object errors
			OBJECT_PROPERTIES_MINIMUM: 300,
			OBJECT_PROPERTIES_MAXIMUM: 301,
			OBJECT_REQUIRED: 302,
			OBJECT_ADDITIONAL_PROPERTIES: 303,
			OBJECT_DEPENDENCY_KEY: 304,
			// Array errors
			ARRAY_LENGTH_SHORT: 400,
			ARRAY_LENGTH_LONG: 401,
			ARRAY_UNIQUE: 402,
			ARRAY_ADDITIONAL_ITEMS: 403,
			// Custom/user-defined errors
			FORMAT_CUSTOM: 500,
			KEYWORD_CUSTOM: 501,
			// Schema structure
			CIRCULAR_REFERENCE: 600,
			// Non-standard validation options
			UNKNOWN_PROPERTY: 1000
		};
		var ErrorCodeLookup = {};
		for (var key in ErrorCodes) {
			ErrorCodeLookup[ErrorCodes[key]] = key;
		}
		var ErrorMessagesDefault = {
			INVALID_TYPE: "Invalid type: {type} (expected {expected})",
			ENUM_MISMATCH: "No enum match for: {value}",
			ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
			ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
			ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
			NOT_PASSED: "Data matches schema from \"not\"",
			// Numeric errors
			NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
			NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
			NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
			NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
			NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
			NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
			// String errors
			STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
			STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
			STRING_PATTERN: "String does not match pattern: {pattern}",
			// Object errors
			OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
			OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
			OBJECT_REQUIRED: "Missing required property: {key}",
			OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
			OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
			// Array errors
			ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
			ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
			ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
			ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
			// Format errors
			FORMAT_CUSTOM: "Format validation failed ({message})",
			KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
			// Schema structure
			CIRCULAR_REFERENCE: "Circular $refs: {urls}",
			// Non-standard validation options
			UNKNOWN_PROPERTY: "Unknown property (not in schema)"
		};
		
		function ValidationError(code, params, dataPath, schemaPath, subErrors) {
			Error.call(this);
			if (code === undefined) {
				throw new Error ("No error code supplied: " + schemaPath);
			}
			this.message = '';
			this.params = params;
			this.code = code;
			this.dataPath = dataPath || "";
			this.schemaPath = schemaPath || "";
			this.subErrors = subErrors || null;
		
			var err = new Error(this.message);
			this.stack = err.stack || err.stacktrace;
			if (!this.stack) {
				try {
					throw err;
				}
				catch(err) {
					this.stack = err.stack || err.stacktrace;
				}
			}
		}
		ValidationError.prototype = Object.create(Error.prototype);
		ValidationError.prototype.constructor = ValidationError;
		ValidationError.prototype.name = 'ValidationError';
		
		ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
			if (dataPrefix !== null) {
				dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
				this.dataPath = "/" + dataPrefix + this.dataPath;
			}
			if (schemaPrefix !== null) {
				schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
				this.schemaPath = "/" + schemaPrefix + this.schemaPath;
			}
			if (this.subErrors !== null) {
				for (var i = 0; i < this.subErrors.length; i++) {
					this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
				}
			}
			return this;
		};
		
		function isTrustedUrl(baseUrl, testUrl) {
			if(testUrl.substring(0, baseUrl.length) === baseUrl){
				var remainder = testUrl.substring(baseUrl.length);
				if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
					|| remainder.charAt(0) === "#"
					|| remainder.charAt(0) === "?") {
					return true;
				}
			}
			return false;
		}
		
		var languages = {};
		function createApi(language) {
			var globalContext = new ValidatorContext();
			var currentLanguage;
			var customErrorReporter;
			var api = {
				setErrorReporter: function (reporter) {
					if (typeof reporter === 'string') {
						return this.language(reporter);
					}
					customErrorReporter = reporter;
					return true;
				},
				addFormat: function () {
					globalContext.addFormat.apply(globalContext, arguments);
				},
				language: function (code) {
					if (!code) {
						return currentLanguage;
					}
					if (!languages[code]) {
						code = code.split('-')[0]; // fall back to base language
					}
					if (languages[code]) {
						currentLanguage = code;
						return code; // so you can tell if fall-back has happened
					}
					return false;
				},
				addLanguage: function (code, messageMap) {
					var key;
					for (key in ErrorCodes) {
						if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
							messageMap[ErrorCodes[key]] = messageMap[key];
						}
					}
					var rootCode = code.split('-')[0];
					if (!languages[rootCode]) { // use for base language if not yet defined
						languages[code] = messageMap;
						languages[rootCode] = messageMap;
					} else {
						languages[code] = Object.create(languages[rootCode]);
						for (key in messageMap) {
							if (typeof languages[rootCode][key] === 'undefined') {
								languages[rootCode][key] = messageMap[key];
							}
							languages[code][key] = messageMap[key];
						}
					}
					return this;
				},
				freshApi: function (language) {
					var result = createApi();
					if (language) {
						result.language(language);
					}
					return result;
				},
				validate: function (data, schema, checkRecursive, banUnknownProperties) {
					var def = defaultErrorReporter(currentLanguage);
					var errorReporter = customErrorReporter ? function (error, data, schema) {
						return customErrorReporter(error, data, schema) || def(error, data, schema);
					} : def;
					var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
					if (typeof schema === "string") {
						schema = {"$ref": schema};
					}
					context.addSchema("", schema);
					var error = context.validateAll(data, schema, null, null, "");
					if (!error && banUnknownProperties) {
						error = context.banUnknownProperties(data, schema);
					}
					this.error = error;
					this.missing = context.missing;
					this.valid = (error === null);
					return this.valid;
				},
				validateResult: function () {
					var result = {};
					this.validate.apply(result, arguments);
					return result;
				},
				validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
					var def = defaultErrorReporter(currentLanguage);
					var errorReporter = customErrorReporter ? function (error, data, schema) {
						return customErrorReporter(error, data, schema) || def(error, data, schema);
					} : def;
					var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
					if (typeof schema === "string") {
						schema = {"$ref": schema};
					}
					context.addSchema("", schema);
					context.validateAll(data, schema, null, null, "");
					if (banUnknownProperties) {
						context.banUnknownProperties(data, schema);
					}
					var result = {};
					result.errors = context.errors;
					result.missing = context.missing;
					result.valid = (result.errors.length === 0);
					return result;
				},
				addSchema: function () {
					return globalContext.addSchema.apply(globalContext, arguments);
				},
				getSchema: function () {
					return globalContext.getSchema.apply(globalContext, arguments);
				},
				getSchemaMap: function () {
					return globalContext.getSchemaMap.apply(globalContext, arguments);
				},
				getSchemaUris: function () {
					return globalContext.getSchemaUris.apply(globalContext, arguments);
				},
				getMissingUris: function () {
					return globalContext.getMissingUris.apply(globalContext, arguments);
				},
				dropSchemas: function () {
					globalContext.dropSchemas.apply(globalContext, arguments);
				},
				defineKeyword: function () {
					globalContext.defineKeyword.apply(globalContext, arguments);
				},
				defineError: function (codeName, codeNumber, defaultMessage) {
					if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
						throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
					}
					if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
						throw new Error('Code number must be an integer > 10000');
					}
					if (typeof ErrorCodes[codeName] !== 'undefined') {
						throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
					}
					if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
						throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
					}
					ErrorCodes[codeName] = codeNumber;
					ErrorCodeLookup[codeNumber] = codeName;
					ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
					for (var langCode in languages) {
						var language = languages[langCode];
						if (language[codeName]) {
							language[codeNumber] = language[codeNumber] || language[codeName];
						}
					}
				},
				reset: function () {
					globalContext.reset();
					this.error = null;
					this.missing = [];
					this.valid = true;
				},
				missing: [],
				error: null,
				valid: true,
				normSchema: normSchema,
				resolveUrl: resolveUrl,
				getDocumentUri: getDocumentUri,
				errorCodes: ErrorCodes
			};
			api.language(language || 'en');
			return api;
		}
		
		var tv4 = createApi();
		tv4.addLanguage('en-gb', ErrorMessagesDefault);
		
		//legacy property
		tv4.tv4 = tv4;
		
		return tv4; // used by _header.js to globalise.
		
		}));

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2)
		
		  var mode = typeof(window) !== 'undefined' ? 'browser' : 'node',
		      env = {},
		      isBackground = false;
		
		
		  RemoteStorage.Env = function () {
		    return env;
		  };
		
		  RemoteStorage.Env.isBrowser = function () {
		    return mode === "browser";
		  };
		
		  RemoteStorage.Env.isNode = function () {
		    return mode === "node";
		  };
		
		  RemoteStorage.Env.goBackground = function () {
		    isBackground = true;
		    RemoteStorage.Env._emit("background");
		  };
		
		  RemoteStorage.Env.goForeground = function () {
		    isBackground = false;
		    RemoteStorage.Env._emit("foreground");
		  };
		
		  RemoteStorage.Env._rs_init = function (remoteStorage) {
		    RemoteStorage.eventHandling(RemoteStorage.Env, "background", "foreground");
		
		    function visibility() {
		      if (document[env.hiddenProperty]) {
		        RemoteStorage.Env.goBackground();
		      } else {
		        RemoteStorage.Env.goForeground();
		      }
		    }
		
		    if ( mode === 'browser') {
		      if ( typeof(document.hidden) !== "undefined" ) {
		        env.hiddenProperty = "hidden";
		        env.visibilityChangeEvent = "visibilitychange";
		      } else if ( typeof(document.mozHidden) !== "undefined" ) {
		        env.hiddenProperty = "mozHidden";
		        env.visibilityChangeEvent = "mozvisibilitychange";
		      } else if ( typeof(document.msHidden) !== "undefined" ) {
		        env.hiddenProperty = "msHidden";
		        env.visibilityChangeEvent = "msvisibilitychange";
		      } else if ( typeof(document.webkitHidden) !== "undefined" ) {
		        env.hiddenProperty = "webkitHidden";
		        env.visibilityChangeEvent = "webkitvisibilitychange";
		      }
		      document.addEventListener(env.visibilityChangeEvent, visibility, false);
		      visibility();
		    }
		  };
		
		  RemoteStorage.Env._rs_cleanup = function (remoteStorage) {
		  };
		


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  
		  var hasLocalStorage;
		  var LS_STATE_KEY = 'remotestorage:widget:state';
		
		  // states allowed to immediately jump into after a reload.
		  var VALID_ENTRY_STATES = {
		    initial: true,
		    connected: true,
		    offline: true
		  };
		
		  /**
		   * Class: RemoteStorage.Widget
		   *
		   * The widget controller that communicates with the view and listens to
		   * its remoteStorage instance.
		   *
		   * While listening to the events emitted by its remoteStorage it sets
		   * corresponding states of the view.
		   *
		   * - connected    ->  connected
		   * - disconnected ->  initial
		   * - connecting   ->  authing
		   * - authing      ->  authing
		   * - wire-busy    ->  busy
		   * - wire-done    ->  connected
		   * - error        ->  one of initial, offline, unauthorized, or error
		   **/
		  RemoteStorage.Widget = function (remoteStorage) {
		    var self = this;
		    var requestsToFlashFor = 0;
		
		    // setting event listeners on rs events to put
		    // the widget into corresponding states
		    this.rs = remoteStorage;
		    this.rs.remote.on('connected', stateSetter(this, 'connected'));
		    this.rs.on('disconnected', stateSetter(this, 'initial'));
		    this.rs.on('connecting', stateSetter(this, 'authing'));
		    this.rs.on('authing', stateSetter(this, 'authing'));
		    this.rs.on('error', errorsHandler(this));
		
		    if (this.rs.remote) {
		      this.rs.remote.on('wire-busy', function (evt) {
		        if (flashFor(evt)) {
		          requestsToFlashFor++;
		          stateSetter(self, 'busy')();
		        }
		      });
		
		      this.rs.remote.on('wire-done', function (evt) {
		        if (flashFor(evt)) {
		          requestsToFlashFor--;
		        }
		        if (requestsToFlashFor <= 0 && evt.success) {
		          stateSetter(self, 'connected')();
		        }
		      });
		    }
		
		    if (hasLocalStorage) {
		      var state = localStorage[LS_STATE_KEY];
		      if (state && VALID_ENTRY_STATES[state]) {
		        this._rememberedState = state;
		      }
		    }
		  };
		
		  RemoteStorage.Widget.prototype = {
		
		    /**
		    * Method: display
		    *
		    * Displays the widget via the view.display method
		    *
		    * Parameters:
		    *
		    *   options
		    **/
		    display: function (options) {
		      if (typeof(options) === 'string') {
		        options = { domID: options };
		      } else if (typeof(options) === 'undefined') {
		        options = {};
		      }
		      if (! this.view) {
		        this.setView(new RemoteStorage.Widget.View(this.rs));
		      }
		      this.view.display(options);
		      return this;
		    },
		
		    linkWidgetToSync: function () {
		      if (typeof(this.rs.sync) === 'object' && typeof(this.rs.sync.sync) === 'function') {
		        this.view.on('sync', this.rs.sync.sync.bind(this.rs.sync));
		      } else {
		        RemoteStorage.log('[Widget] typeof this.rs.sync check fail', this.rs.sync);
		        setTimeout(this.linkWidgetToSync.bind(this), 1000);
		      }
		    },
		
		    /**
		    *  Method: setView(view)
		    *
		    *  Sets the view and initializes event listeners to react on
		    *  widget (widget.view) events
		    **/
		    setView: function (view) {
		      this.view = view;
		      this.view.on('connect', function (options) {
		        if (typeof(options) === 'string') {
		          // options is simply a useraddress
		          this.rs.connect(options);
		        } else if (options.special) {
		          this.rs[options.special].connect(options);
		        }
		      }.bind(this));
		
		      this.view.on('secret-entered', function (secretKey) {
		        this.view.setUserSecretKey(secretKey);
		        stateSetter(this, 'ciphered')();
		      }.bind(this));
		
		      this.view.on('secret-cancelled', function () {
		        stateSetter(this, 'notciphered')();
		      }.bind(this));
		
		      this.view.on('disconnect', this.rs.disconnect.bind(this.rs));
		
		      this.linkWidgetToSync();
		      try {
		        this.view.on('reset', function (){
		          var location = RemoteStorage.Authorize.getLocation();
		          this.rs.on('disconnected', location.reload.bind(location));
		          this.rs.disconnect();
		        }.bind(this));
		      } catch(e) {
		        if (!(e.message && e.message.match(/Unknown event/))) { // ignored. (the 0.7 widget-view interface didn't have a 'reset' event)
		          throw e;
		        }
		      }
		
		      if (this._rememberedState) {
		        setTimeout(stateSetter(this, this._rememberedState), 0);
		        delete this._rememberedState;
		      }
		    }
		  };
		
		  /**
		   * Method: displayWidget
		   *
		   * Same as <display>
		   **/
		  RemoteStorage.prototype.displayWidget = function (options) {
		    return this.widget.display(options);
		  };
		
		  RemoteStorage.Widget._rs_init = function (remoteStorage) {
		    hasLocalStorage = RemoteStorage.util.localStorageAvailable();
		    if (! remoteStorage.widget) {
		      remoteStorage.widget = new RemoteStorage.Widget(remoteStorage);
		    }
		  };
		
		  RemoteStorage.Widget._rs_supported = function (remoteStorage) {
		    return typeof(document) !== 'undefined';
		  };
		
		  function stateSetter(widget, state) {
		    RemoteStorage.log('[Widget] Producing stateSetter for', state);
		    return function () {
		      RemoteStorage.log('[Widget] Setting state', state, arguments);
		      if (hasLocalStorage) {
		        localStorage[LS_STATE_KEY] = state;
		      }
		      if (widget.view) {
		        if (widget.rs.remote) {
		          widget.view.setUserAddress(widget.rs.remote.userAddress);
		        }
		        widget.view.setState(state, arguments);
		      } else {
		        widget._rememberedState = state;
		      }
		    };
		  }
		
		  function errorsHandler(widget) {
		    return function (error) {
		      var s;
		      if (error instanceof RemoteStorage.DiscoveryError) {
		        console.error('Discovery failed', error, '"' + error.message + '"');
		        s = stateSetter(widget, 'initial', [error.message]);
		      } else if (error instanceof RemoteStorage.SyncError) {
		        s = stateSetter(widget, 'offline', []);
		      } else if (error instanceof RemoteStorage.Unauthorized) {
		        s = stateSetter(widget, 'unauthorized');
		      } else {
		        RemoteStorage.log('[Widget] Unknown error');
		        s = stateSetter(widget, 'error', [error]);
		      }
		      s.apply();
		    };
		  }
		
		  function flashFor(evt) {
		    if (evt.method === 'GET' && evt.isFolder) {
		      return false;
		    }
		    return true;
		  }


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		  var t = RemoteStorage.I18n.translate;
		
		  /**
		   * Class: RemoteStorage.Widget.View
		   *
		   * Controls the visible widget
		   *
		   * States:
		   *
		   *   initial      - not connected
		   *   authing      - in auth flow
		   *   connected    - connected to remote storage, not syncing at the moment
		   *   ciphered     - connected, with cipher
		   *   notciphered  - connected, without cipher
		   *   busy         - connected, syncing at the moment
		   *   offline      - connected, but no network connectivity
		   *   error        - connected, but sync error happened
		   *   unauthorized - connected, but request returned 401
		   **/
		  RemoteStorage.Widget.View = function (remoteStorage) {
		    this.rs = remoteStorage;
		    if (typeof(document) === 'undefined') {
		      throw "Widget not supported";
		    }
		    RemoteStorage.eventHandling(this,
		                                'connect',
		                                'secret-entered',
		                                'secret-cancelled',
		                                'disconnect',
		                                'sync',
		                                'display',
		                                'reset');
		
		    // Re-binding the event so they can be called from the window
		    for (var event in this.events){
		      this.events[event] = this.events[event].bind(this);
		    }
		
		    this.hideBubbleOnBodyClick = function (event) {
		      for (var p = event.target; p !== document.body; p = p.parentElement) {
		        if (p.id === 'remotestorage-widget') {
		          return;
		        }
		      }
		      this.hideBubble();
		    }.bind(this);
		  };
		
		  RemoteStorage.Widget.View.prototype = {
		
		    connectGdrive: function () {
		      this._emit('connect', { special: 'googledrive' });
		    },
		
		    connectDropbox: function (){
		      this._emit('connect', { special: 'dropbox'});
		    },
		
		    /**
		     * Method: setState
		     *
		     * Call the function that applies the state to the widget
		     *
		     * Parameters:
		     *
		     *   state
		     *   args
		     **/
		    setState: function (state, args) {
		      RemoteStorage.log('[View] widget.view.setState(',state,',',args,');');
		      var s = this.states[state];
		      if (typeof(s) === 'undefined') {
		        throw new Error("Bad State assigned to view: " + state);
		      }
		      s.apply(this, args);
		    },
		
		    /**
		     * Method: setUserAddress
		     *
		     * Set user address of the input field
		     **/
		    setUserAddress: function (addr) {
		      this.userAddress = addr || '';
		
		      var el;
		      if (this.div && (el = this.div.querySelector('form.remotestorage-initial').userAddress)) {
		        el.value = this.userAddress;
		      }
		    },
		
		    /**
		     * Method: setUserSecretKey
		     *
		     * Set user secret key
		     **/
		    setUserSecretKey: function (secretKey) {
		      this.userSecretKey = secretKey;
		    },
		
		    /**
		    * Method: toggleBubble
		    *
		    * Show the bubble when hidden and the other way around
		    **/
		    toggleBubble: function (event) {
		      if (this.bubble.className.search('rs-hidden') < 0) {
		        this.hideBubble(event);
		      } else {
		        this.showBubble(event);
		      }
		    },
		
		    /**
		     * Method: hideBubble
		     *
		     * Hide the bubble
		     **/
		    hideBubble: function (){
		      addClass(this.bubble, 'rs-hidden');
		      document.body.removeEventListener('click', this.hideBubbleOnBodyClick);
		    },
		
		    /**
		     * Method: showBubble
		     *
		     * Show the bubble
		     **/
		    showBubble: function (event){
		      removeClass(this.bubble, 'rs-hidden');
		      if (typeof(event) !== 'undefined') {
		        stopPropagation(event);
		      }
		      document.body.addEventListener('click', this.hideBubbleOnBodyClick);
		      if (this.div.querySelector('.remotestorage-connected').classList.contains('remotestorage-cipher') && !this.userSecretKey) {
		        this.bubble.querySelector('form.remotestorage-cipher-form').userSecretKey.focus();
		      } else {
		        this.bubble.querySelector('form.remotestorage-initial').userAddress.focus();
		      }
		    },
		
		    /**
		     * Method: display
		     *
		     * Draw the widget inside of the dom element with the id options.domID
		     *
		     * Parameters:
		     *
		     *   options
		     *
		     * Returns:
		     *
		     *   The widget div
		     **/
		    display: function (options) {
		      if (typeof this.div !== 'undefined') {
		        return this.div;
		      }
		
		      var element = document.createElement('div');
		      var style = document.createElement('style');
		      style.innerHTML = RemoteStorage.Assets.widgetCss;
		
		      element.id = "remotestorage-widget";
		
		      element.innerHTML = RemoteStorage.Assets.widget;
		
		      element.appendChild(style);
		      if (options.domID) {
		        var parent = document.getElementById(options.domID);
		        if (! parent) {
		          throw "Failed to find target DOM element with id=\"" + options.domID + "\"";
		        }
		        parent.appendChild(element);
		      } else {
		        document.body.appendChild(element);
		      }
		
		      // Sync button
		      setupButton(element, 'rs-sync', 'syncIcon', this.events.sync);
		
		      // Disconnect button
		      setupButton(element, 'rs-disconnect', 'disconnectIcon', this.events.disconnect);
		
		      // Get me out of here
		      setupButton(element, 'remotestorage-reset', undefined, this.events.reset);
		
		      // Connect button
		      var connectButton = setupButton(element, 'connect', 'connectIcon', this.events.connect);
		
		      // Handle connectButton state
		      this.form = element.querySelector('form.remotestorage-initial');
		      var el = this.form.userAddress;
		      el.addEventListener('load', handleButtonState);
		      el.addEventListener('keyup', handleButtonState);
		      if (this.userAddress) {
		        el.value = this.userAddress;
		      }
		
		      if (options.encryption) {
		        this.cipher = true;
		
		        var secretKeyInput = element.querySelector('form.remotestorage-cipher-form').userSecretKey;
		
		        // This is to avoid the 'password field on an insecured page' warning, when not used and on http (not https)
		        secretKeyInput.type = 'password';
		
		        // Cipher button
		        var cipherButton = setupButton(element, 'rs-cipher', 'cipherIcon', this.events['secret-entered']);
		
		        // Handle cipherButton state
		        secretKeyInput.addEventListener('load', handleButtonState);
		        secretKeyInput.addEventListener('keyup', handleButtonState);
		
		        // No cipher button
		        setupButton(element, 'rs-nocipher', 'nocipherIcon', this.events['secret-cancelled']);
		      }
		
		      // The cube
		      this.cube = setupButton(element, 'rs-cube', 'remoteStorageIcon', this.toggleBubble.bind(this));
		
		      // Google Drive and Dropbox icons
		      setupButton(element, 'rs-dropbox', 'dropbox', this.connectDropbox.bind(this));
		      setupButton(element, 'rs-googledrive', 'googledrive', this.connectGdrive.bind(this));
		
		      var bubbleDontCatch = { INPUT: true, BUTTON: true, IMG: true };
		      var eventListener = function (event) {
		        if (! bubbleDontCatch[event.target.tagName] && ! (this.div.classList.contains('remotestorage-state-unauthorized') )) {
		          this.showBubble(event);
		        }
		      }.bind(this);
		      this.bubble = setupButton(element, 'rs-bubble', undefined, eventListener);
		
		      this.hideBubble();
		
		      this.div = element;
		
		      this.states.initial.call(this);
		      this.events.display.call(this);
		      return this.div;
		    },
		
		    states:  {
		      initial: function (message) {
		        var cube = this.cube;
		        var info = message || t("view_info");
		
		        cube.src = RemoteStorage.Assets.remoteStorageIcon;
		
		        this._renderTranslatedInitialContent();
		
		        if (message) {
		          cube.src = RemoteStorage.Assets.remoteStorageIconError;
		          removeClass(this.cube, 'remotestorage-loading');
		          this.showBubble();
		
		          // Show the red error cube for 5 seconds, then show the normal orange one again
		          setTimeout(function (){
		            cube.src = RemoteStorage.Assets.remoteStorageIcon;
		          },2000);
		        } else {
		          this.hideBubble();
		        }
		        this.div.className = "remotestorage-state-initial";
		
		        if (this.userSecretKey) {
		          delete this.userSecretKey;
		        }
		
		        // Google Drive and Dropbox icons
		        var backends = 1;
		        if (this._activateBackend('dropbox')) { backends += 1; }
		        if (this._activateBackend('googledrive')) { backends += 1; }
		        this.div.querySelector('.rs-bubble-text').style.paddingRight = backends*32+8+'px';
		
		        // If address not empty connect button enabled
		        var cb = this.div.querySelector('.connect');
		        if (this.form.userAddress.value) {
		          cb.removeAttribute('disabled');
		        }
		
		        var infoEl = this.div.querySelector('.rs-info-msg');
		        infoEl.innerHTML = info;
		
		        if (message) {
		          infoEl.classList.add('remotestorage-error-info');
		        } else {
		          infoEl.classList.remove('remotestorage-error-info');
		        }
		      },
		
		      authing: function () {
		        this.div.removeEventListener('click', this.events.connect);
		        this.div.className = "remotestorage-state-authing";
		        this.div.querySelector('.rs-status-text').innerHTML = t("view_connecting", this.userAddress);
		        addClass(this.cube, 'remotestorage-loading');
		      },
		
		      connected: function () {
		        var cube = this.cube;
		        this.div.className = "remotestorage-state-connected";
		        this.div.querySelector('.userAddress').innerHTML = this.userAddress;
		        cube.src = RemoteStorage.Assets.remoteStorageIcon;
		        removeClass(cube, 'remotestorage-loading');
		
		        if (this.cipher) {
		          if (this.userSecretKey) {
		            if (this.userSecretKeyError) {
		              cube.src = RemoteStorage.Assets.remoteStorageIconError;
		              addClass(this.div.querySelector('.remotestorage-connected'), 'remotestorage-cipher');
		              addClass(this.div.querySelector('.remotestorage-invalid-key'), 'remotestorage-cipher-error');
		              this.showBubble();
		
		              // Show the red error cube for 5 seconds, then show the normal orange one again
		              setTimeout(function (){
		                cube.src = RemoteStorage.Assets.remoteStorageIcon;
		              },5000);
		            } else {
		              removeClass(this.div.querySelector('.remotestorage-invalid-key'), 'remotestorage-cipher-error');
		              cube.src = RemoteStorage.Assets.remoteStorageIconCiphered;
		            }
		          } else {
		            addClass(this.div.querySelector('.remotestorage-connected'), 'remotestorage-cipher');
		            this.showBubble();
		          }
		        }
		
		        var icons = {
		          googledrive: this.div.querySelector('.rs-googledrive'),
		          dropbox: this.div.querySelector('.rs-dropbox')
		        };
		        icons.googledrive.style.display = icons.dropbox.style.display = 'none';
		        if (icons[this.rs.backend]) {
		          icons[this.rs.backend].style.display = 'inline-block';
		          this.div.querySelector('.rs-bubble-text').style.paddingRight = 2*32+8+'px';
		        } else {
		          this.div.querySelector('.rs-bubble-text').style.paddingRight = 32+8+'px';
		        }
		      },
		
		      ciphered: function () {
		        this.div.querySelector('form.remotestorage-cipher-form').userSecretKey.value = '';
		        removeClass(this.div.querySelector('.remotestorage-invalid-key'), 'remotestorage-cipher-error');
		        removeClass(this.div.querySelector('.remotestorage-connected'), 'remotestorage-cipher');
		        this.cube.src = RemoteStorage.Assets.remoteStorageIconCiphered;
		        this.hideBubble();
		      },
		
		      notciphered: function () {
		        this.cipher = false;
		        removeClass(this.div.querySelector('.remotestorage-invalid-key'), 'remotestorage-cipher-error');
		        removeClass(this.div.querySelector('.remotestorage-connected'), 'remotestorage-cipher');
		        this.hideBubble();
		      },
		
		      busy: function () {
		        this.div.className = "remotestorage-state-busy";
		        addClass(this.cube, 'remotestorage-loading'); //TODO needs to be undone when is that neccesary
		      },
		
		      offline: function () {
		        this.div.className = "remotestorage-state-offline";
		        this.cube.src = RemoteStorage.Assets.remoteStorageIconOffline;
		        this.div.querySelector('.rs-status-text').innerHTML = t("view_offline");
		      },
		
		      error: function (err) {
		        var errorMsg = err;
		        this.div.className = "remotestorage-state-error";
		
		        this.div.querySelector('.rs-bubble-text').innerHTML = '<strong>'+t('view_error_occured')+'</strong>';
		        //FIXME I don't know what an DOMError is and my browser doesn't know too(how to handle this?)
		        if (err instanceof Error /*|| err instanceof DOMError*/) {
		          errorMsg = err.message + '\n\n' +
		            err.stack;
		        }
		        this.div.querySelector('.rs-error-msg').textContent = errorMsg;
		        this.cube.src = RemoteStorage.Assets.remoteStorageIconError;
		        this.showBubble();
		      },
		
		      unauthorized: function () {
		        this.div.className = "remotestorage-state-unauthorized";
		        this.cube.src = RemoteStorage.Assets.remoteStorageIconError;
		        this.showBubble();
		        this.div.addEventListener('click', this.events.connect);
		      }
		    },
		
		    events: {
		    /**
		     * Event: connect
		     *
		     * Emitted when the connect button is clicked
		     **/
		      connect: function (event) {
		        stopPropagation(event);
		        event.preventDefault();
		        this._emit('connect', this.div.querySelector('form.remotestorage-initial').userAddress.value);
		      },
		
		    /**
		     * Event: secret-entered
		     *
		     * Emitted when the cipher button is clicked
		     **/
		      'secret-entered': function (event) {
		        stopPropagation(event);
		        event.preventDefault();
		        this._emit('secret-entered', this.div.querySelector('form.remotestorage-cipher-form').userSecretKey.value);
		      },
		
		    /**
		     * Event: secret-cancelled
		     *
		     * Emitted when the nocipher button is clicked
		     **/
		      'secret-cancelled': function (event) {
		        stopPropagation(event);
		        event.preventDefault();
		        this._emit('secret-cancelled');
		      },
		
		      /**
		       * Event: sync
		       *
		       * Emitted when the sync button is clicked
		       **/
		      sync: function (event) {
		        stopPropagation(event);
		        event.preventDefault();
		
		        this._emit('sync');
		      },
		
		      /**
		       * Event: disconnect
		       *
		       * Emitted when the disconnect button is clicked
		       **/
		      disconnect: function (event) {
		        stopPropagation(event);
		        event.preventDefault();
		        this._emit('disconnect');
		      },
		
		      /**
		       * Event: reset
		       *
		       * Emitted after crash triggers disconnect
		       **/
		      reset: function (event){
		        event.preventDefault();
		        var result = window.confirm(t('view_confirm_reset'));
		        if (result){
		          this._emit('reset');
		        }
		      },
		
		      /**
		       * Event: display
		       *
		       * Emitted when finished displaying the widget
		       **/
		      display : function (event) {
		        if (event) {
		          event.preventDefault();
		        }
		        this._emit('display');
		      }
		    },
		
		    _renderTranslatedInitialContent: function () {
		      this.div.querySelector('.rs-status-text').innerHTML = t("view_connect");
		      this.div.querySelector('.remotestorage-reset').innerHTML = t("view_get_me_out");
		      this.div.querySelector('.rs-error-plz-report').innerHTML = t("view_error_plz_report");
		      this.div.querySelector('.remotestorage-unauthorized').innerHTML = t("view_unauthorized");
		      this.div.querySelector('.remotestorage-invalid-key').innerHTML = t("view_invalid_key");
		    },
		
		    _activateBackend: function activateBackend(backendName) {
		      var className = 'rs-' + backendName;
		      if (this.rs.apiKeys[backendName]) {
		        this.div.querySelector('.' + className).style.display = 'inline-block';
		        return true;
		      } else {
		        this.div.querySelector('.' + className).style.display = 'none';
		        return false;
		      }
		    }
		  };
		
		  function removeClass(el, className) {
		    return el.classList.remove(className);
		  }
		
		  function addClass(el, className) {
		    return el.classList.add(className);
		  }
		
		  function stopPropagation(event) {
		    if (typeof(event.stopPropagation) === 'function') {
		      event.stopPropagation();
		    } else {
		      event.cancelBubble = true;
		    }
		  }
		
		  function setupButton(parent, className, iconName, eventListener) {
		    var element = parent.querySelector('.' + className);
		    if (typeof iconName !== 'undefined') {
		      var img = element.querySelector('img');
		      (img || element).src = RemoteStorage.Assets[iconName];
		    }
		    element.addEventListener('click', eventListener);
		    return element;
		  }
		
		  function handleButtonState(event) {
		    if (event.target.value) {
		      event.target.nextElementSibling.removeAttribute('disabled');
		    } else {
		      event.target.nextElementSibling.setAttribute('disabled','disabled');
		    }
		  }


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		  var RemoteStorage = __webpack_require__(2);
		
		  var SETTINGS_KEY = "remotestorage:access";
		
		  /**
		   * Class: RemoteStorage.Access
		   *
		   * Keeps track of claimed access and scopes.
		   */
		  RemoteStorage.Access = function() {
		    this.reset();
		  };
		
		  RemoteStorage.Access.prototype = {
		
		    /**
		     * Method: claim
		     *
		     * Claim access on a given scope with given mode.
		     *
		     * Parameters:
		     *   scope - An access scope, such as "contacts" or "calendar"
		     *   mode  - Access mode. Either "r" for read-only or "rw" for read/write
		     *
		     * Example:
		     *   (start code)
		     *   remoteStorage.access.claim('contacts', 'r');
		     *   remoteStorage.access.claim('pictures', 'rw');
		     *   (end code)
		     *
		     * Root access:
		     *   Claiming root access, meaning complete access to all files and folders
		     *   of a storage, can be done using an asterisk:
		     *
		     *   (start code)
		     *   remoteStorage.access.claim('*', 'rw');
		     *   (end code)
		     */
		    claim: function(scope, mode) {
		      if (typeof(scope) !== 'string' || scope.indexOf('/') !== -1 || scope.length === 0) {
		        throw new Error('Scope should be a non-empty string without forward slashes');
		      }
		      if (!mode.match(/^rw?$/)) {
		        throw new Error('Mode should be either \'r\' or \'rw\'');
		      }
		      this._adjustRootPaths(scope);
		      this.scopeModeMap[scope] = mode;
		    },
		
		    get: function(scope) {
		      return this.scopeModeMap[scope];
		    },
		
		    remove: function(scope) {
		      var savedMap = {};
		      var name;
		      for (name in this.scopeModeMap) {
		        savedMap[name] = this.scopeModeMap[name];
		      }
		      this.reset();
		      delete savedMap[scope];
		      for (name in savedMap) {
		        this.set(name, savedMap[name]);
		      }
		    },
		
		    /**
		     * Verify permission for a given scope.
		     */
		    checkPermission: function(scope, mode) {
		      var actualMode = this.get(scope);
		      return actualMode && (mode === 'r' || actualMode === 'rw');
		    },
		
		    /**
		     * Verify permission for a given path.
		     */
		    checkPathPermission: function(path, mode) {
		      if (this.checkPermission('*', mode)) {
		        return true;
		      }
		      return !!this.checkPermission(this._getModuleName(path), mode);
		    },
		
		    reset: function() {
		      this.rootPaths = [];
		      this.scopeModeMap = {};
		    },
		
		    /**
		     * Return the module name for a given path.
		     */
		    _getModuleName: function(path) {
		      if (path[0] !== '/') {
		        throw new Error('Path should start with a slash');
		      }
		      var moduleMatch = path.replace(/^\/public/, '').match(/^\/([^\/]*)\//);
		      return moduleMatch ? moduleMatch[1] : '*';
		    },
		
		    _adjustRootPaths: function(newScope) {
		      if ('*' in this.scopeModeMap || newScope === '*') {
		        this.rootPaths = ['/'];
		      } else if (! (newScope in this.scopeModeMap)) {
		        this.rootPaths.push('/' + newScope + '/');
		        this.rootPaths.push('/public/' + newScope + '/');
		      }
		    },
		
		    _scopeNameForParameter: function(scope) {
		      if (scope.name === '*' && this.storageType) {
		        if (this.storageType === '2012.04') {
		          return '';
		        } else if (this.storageType.match(/remotestorage-0[01]/)) {
		          return 'root';
		        }
		      }
		      return scope.name;
		    },
		
		    setStorageType: function(type) {
		      this.storageType = type;
		    }
		  };
		
		  /**
		   * Property: scopes
		   *
		   * Holds an array of claimed scopes in the form
		   * > { name: "<scope-name>", mode: "<mode>" }
		   */
		  Object.defineProperty(RemoteStorage.Access.prototype, 'scopes', {
		    get: function() {
		      return Object.keys(this.scopeModeMap).map(function(key) {
		        return { name: key, mode: this.scopeModeMap[key] };
		      }.bind(this));
		    }
		  });
		
		  Object.defineProperty(RemoteStorage.Access.prototype, 'scopeParameter', {
		    get: function() {
		      return this.scopes.map(function(scope) {
		        return this._scopeNameForParameter(scope) + ':' + scope.mode;
		      }.bind(this)).join(' ');
		    }
		  });
		
		  // Documented in src/remotestorage.js
		  Object.defineProperty(RemoteStorage.prototype, 'access', {
		    get: function() {
		      var access = new RemoteStorage.Access();
		      Object.defineProperty(this, 'access', {
		        value: access
		      });
		      return access;
		    },
		    configurable: true
		  });
		
		  RemoteStorage.Access._rs_init = function() {};


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		/** THIS FILE WAS GENERATED BY build/compile-assets.js. DO NOT CHANGE IT MANUALLY, BUT INSTEAD CHANGE THE ASSETS IN assets/. **/
		var RemoteStorage = __webpack_require__(2);
		
		RemoteStorage.Assets = {
		
		  cipherIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHdpZHRoPSIyNS4xNzciIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxwYXRoIGQ9Im0yNS4xNzcgNS41MzIzYy0wLjA1NjQtMC4xMTI5MS0wLjA1NjQtMC4yMjU4MS0wLjE2OTM2LTAuMzM4NzEtMC4xMTI5LTAuMTEyOS0wLjI4MjI1LTAuMTY5MzYtMC4zOTUxNi0wLjE2OTM2aC0xMS40MDNjLTAuNzMzLTIuODc5LTMuMzg2NC01LjAyNDItNi40OTEzLTUuMDI0Mi0zLjY2OTMgMC02LjcxNzcgMy4wNDg0LTYuNzE3NyA2LjcxNzcgMCAzLjcyNjMgMy4wNDg0IDYuNzE3MyA2LjcxNzcgNi43MTczIDMuMzMwNyAwIDYuMDQwMy0yLjQyNzQgNi42MDQ4LTUuNTg4N2gyLjU0MDN2My42Njk0YzAgMC4yODIyNiAwLjI4MjI2IDAuNTA4MDYgMC41NjQ1MiAwLjUwODA2aDEuNzVjMC4yODIyNiAwIDAuNTY0NTItMC4yMjU4IDAuNTY0NTItMC41MDgwNnYtMy42Njk0aDEuNDY3N3Y1LjY0NTJjMCAwLjI4MjI1IDAuMjI1OCAwLjUwODA2IDAuNTA4MDYgMC41MDgwNmgxLjgwNjRjMC4yODIyNiAwIDAuNTA4MDctMC4yMjU4MSAwLjU2NDUyLTAuNTA4MDZ2LTUuNjQ1MmgxLjUyNDJjMC4xMTI5MSAwIDAuMjgyMjYgMCAwLjM5NTE2LTAuMTEyOSAwLjExMjkxLTAuMTEyOSAwLjE2OTM2LTAuMjgyMjYgMC4xNjkzNi0wLjM5NTE2di0xLjgwNjR6bS0xOC40NTkgNS4wODA3Yy0yLjA4ODcgMC0zLjgzODctMS42OTM2LTMuODM4Ny0zLjgzODcgMC0yLjE0NTIgMS43NS0zLjgzODcgMy44Mzg3LTMuODM4NyAyLjE0NTIgMCAzLjgzODcgMS42OTM2IDMuODM4NyAzLjgzODcgMCAyLjE0NTItMS42OTM2IDMuODM4Ny0zLjgzODcgMy44Mzg3eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K',
		  connectIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTAzNi40KSI+CiAgPHBhdGggZD0ibTEgMTA0Ny40di02aDd2LTRsNyA3LTcgN3YtNHoiIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+Cg==',
		  disconnectIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4wIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxwYXRoIHN0eWxlPSJibG9jay1wcm9ncmVzc2lvbjp0Yjt0ZXh0LWluZGVudDowO2NvbG9yOiMwMDAwMDA7dGV4dC10cmFuc2Zvcm06bm9uZSIgZD0ibTguMDAwMSAwYy0wLjQ3MTQgMC0wLjk2MTAzIDAuNTQxOS0wLjk1IDF2NmMtMC4wMDc0NyAwLjUyODMxIDAuNDIxNjMgMSAwLjk1IDFzMC45NTc0Ny0wLjQ3MTY5IDAuOTUtMXYtNmMwLjAxNDYyMi0wLjYwNTEtMC40Nzg2LTEtMC45NS0xem0tMy4zNDM4IDIuNWMtMC4wODcxODYgMC4wMTkyOTQtMC4xNzE2MyAwLjA1MDk1OS0wLjI1IDAuMDkzNzUtMi45OTk1IDEuNTcxNS0zLjkxODQgNC43OTc5LTMuMTI1IDcuNDY4OCAwLjc5MzQgMi42NyAzLjI3OTkgNC45MzcgNi42ODc1IDQuOTM3IDMuMzU5MiAwIDUuODc3Mi0yLjE0OSA2LjcxOTItNC43ODEgMC44NDEtMi42MzIxLTAuMDU4LTUuODIzNC0zLjEyNS03LjU5NC0wLjQzNC0wLjI1MzYtMS4wNTktMC4wODk5LTEuMzEzIDAuMzQzNy0wLjI1MzYgMC40MzM2LTAuMDkgMS4wNTg5IDAuMzQ0IDEuMzEyNSAyLjM5MDggMS4zNzk4IDIuODgyNSAzLjQ5NDQgMi4yODEyIDUuMzc1LTAuNjAxMiAxLjg4MDYtMi4zNDQgMy40Mzc1LTQuOTA2MiAzLjQzNzUtMi41NzU5IDAtNC4yOTc2LTEuNjUwMi00Ljg3NS0zLjU5MzgtMC41Nzc2LTEuOTQzNS0wLjA0Ny00LjA0OCAyLjE4NzMtNS4yMTg3IDAuMzc4Ny0wLjIwNjMgMC41NzkxLTAuNjkyNSAwLjQ1NTgtMS4xMDU3LTAuMTIzMi0wLjQxMzMtMC41NTcyLTAuNzEwMy0wLjk4Ny0wLjY3NTUtMC4wMzEzLTAuMDAxNS0wLjA2MjYtMC4wMDE1LTAuMDkzOCAweiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K',
		  dropbox: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgPEBAhEOpfuQAABhZJREFUWMPVl31snVUdxz+/5/2577e3b7QbHaOD0nXshW4ZZkpGQmJYZkJUDAaZzCBGAxGd+pdZQsJIjCaKgFu09GWybIggm8yhMCsY92rcOkPHunbdtKOUbX36svX23uc+xz+eDsrWlztiNJzk5D7JPS+fc8739/2dA5+EsqJtyK18ZlCKbX9Lk6fd1uo5xbTVZmtwa4v35Np5Mry4TLYXCzAnyhsry2SwrmnokdnaTruq6i3e0lXl0tqQlkURCxwdDp9Th5p3+p9iS8afqk/VZq9kaZoDN8apdU3B1KFnmLde7AkezH0n3V0UQOJpz2hIsqEhLU+WOeAagmtCxISYBe1nVf4vfWrByYdSpyf3W9ziLapy6JgbAduAiBn2S1rCQBYODAQP7H01/zxby4JpAW5s8mproxypiRKNGIJrQNT8EMA1wTGEU8MBP/q7umPw0dSbAA3N3n3zI2yLG2oScPgbNYWICY4Be86o/le6g0W576bPXQWwcqvXdJ2t1idMsA1hJoCoCRfGYdOhwsa4TUWFrr7pGmDrzAiQCHfD//Xxwk/33Z/6HoA0tnhLXZ3XMoYqsy4PYs4M4Ohg6pB2ddqO+vR6BWL27AARXbBNiBjwh9Oqs+O8ukcT4eaopjLqGsJSCdSX29SX23x/lctXlzgE1zBAANxWIQuGxlWNACxr8WozJp0lljKsGXbA0qGu1GRBxsTUQRAGLgboIuQVvHI8S+f7eeK2TLsDSQd296rhPaeDm09+PdX/gQYqN3uZ+jh7ro+oRusKDdgmVEY1GqstSiOhdegCmoQAIoImIWTPYIHdXVlyBYhaVwLA70+rPz7fllvLi2W5KcPw9q3eS/VJ7kmYgm1A3BIWV5osq7IIlMLUQJOrAXQBXQtr1BR2d2XpOu8TtULR+gq2nQh+vv8rqUdnNaKGZm/9qnJpmp/U+fxCB5lYsaGFdTYAY9L3jmNj9F9S7OgKVh9/KNVelBVf8untv8TYSS8gbsrHyh8C2LqQtGE0z9CJYfVuUblgRZv3WGOJvJG0cF8/lWPNdo+O93xsHYoVuqkL/xzIs/HPHt2DPg0Zko+v0I8vbfHun9aKE5sH9YaobJsf5V4mRLXv33kSlmAYwspqgw23R7A1EJlahKYOSsHTB0cZHQ9IOBA3NSrjGo4hWAY82xH8rH1b/jF2laoPAOb80jPqYtKTMdRcTQNd+xAgbgmuJbiGELfh3lsc7q41KQSTABBcC1qPjLH/XzniNqScsP1kgMsm9nJ34e2mNcmFAMby1qFPZyz1WlxXrprhuEUgUPDbd8Y59n6edbe61KZ1TF14vSfPLw5dYjhXIOMIM6lGAV+u0+tv+ttI/2+6/LsMQVXpUFCAqJkS9MT5anB2NGDjWxf5Yp3DvjN5th/LUhETolaRTqigxMGIWVKtHVyX2tGTJd2X5agUIfi8CmvUFOKGT++gT8wqLlKUgnwATxwq7P32m35Z+32pPQZA54MpH1iSb/XWZmx2VthTD1AATCBlCZ+dpwNg6EJjlUH3hQIKRaCujhZFaOPtfUH+8HvBnQceSP11yjA8vC616+A5FevL8jt/YiCR0HiQcAUVrnDHHO0jHTUNllXrpC0NRXiefjAxM4rhHLzQpZqf+eFFd/LkM17JGlu9p+xC8IgPhGlaqE1rNJZrxOzQok0dnjviY+nhbSntCH3DAWN+QMIWEhYsqTD4wYHChrPfSP9kqnmM6QAMkYtz4xqmDqeGA+rLNObGZVozkglx1ZfqZAvC2ZGAz9RYlEbAlsLoNd+Kx5RqO5/njKXDsnKdhCXFOaFAZUzjznlhyt5xIjiSLbBz2oVO98fRdalOoGZ5m/dUQ4pvJZ3Zr/CXlS5A74gabzlYePztr6U2faxr+eRy/RYvtjgjHauvkxvi9oTDXaGBuAUJWyh1hb3vqsOvfiG5/L/yMAE483BqdNeuXO3LvcGX3vEUhsZVsaYL9IzACz3BXcVOXvQOfKRsupBZv8R4bnW19rmqGPzqHz4BcMGn5U/Hgod5oiT3P3kvVj7rrfnx/pHBu7d7Azc1eY3/l0drzWbPXNjsGXySy38AbtMqneWU7BkAAAAASUVORK5CYII=',
		  googledrive: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgPEA85ztzJcQAABZVJREFUWMPtl1uoXVcVhr8x5tprn7M1NG1i0pQqSG2jLcXipYJXjPogqFgpaHMSFUkpIjU+leKbDxIQSiHgjZgmrfXgQ6SKj5Ji7YVS05aUUqKQlNLQeDnN5Zzk9Jy99xy/D3OttU/StDlV33TBZM3FXmuMf/5jjv+fG/7XL1vti9tnv3Dtnnf+87JY8YmZNxEMM1sZ7tWpjz764mriVqvKvmfb1ONLy3+dGyWu6EWbvQwoydv5BMSqFuereakmfnls1GP25IDaBGYYjplhljDz5tk7YMtPfurAf6UE9Z6tNwDPAPXwtcxL1x9n4zRgDjjm1gCyC6JpCLoW/OX65of1nzCwG6gNo3aYeXF981mTvK2/WWFiMmoj7X+z5JcE0N87c4e7b3EvyTwZT5/r8ezZHu6GuWGpSegJ8/ZeBu6fHv35s1/7t0rQv29mjWF/ATZ1L4bQwohrpkYc/sBpwhJYAVdKYECzYAESIk4Am3sf+sPCW2LAzb9jbpvMDXfD3fEqkRIcGdbsevlt9LylPYG1K6/K3QzK75uAr78lBgb3b7sc2cl2Uaa21sDiGMvB2iQeu/EMm6bKHjD3SUsCEChnpEAKiLisd/PB+UsyMPjZNwzzh1ixcnOfsFCX51NU/PTvA6pkTUdYw4R3zyu1ArMDqyvBQB82+FiJUQJ4C8YgVT1SSvSTs+vEmkcwe7qEsUnt233Aij0BW4ZPbfngKpRQs7hXpYQNvRiuEtATWOW4bLi+z04pJbCnBAkBJggBQlIBIZCUJM0Cm9+QgcED2+/G7BprdMZaAFZExm1FWcz+NLdj32G/6XfPCB5GoJKp7H5FARHRtgRI1y0/+cm7Lwpg+v7t64DvNd5S2mqirKXHy6RoArp1Ykrc2hKtKCtXlNEyoQ6Ydi498fF1F2FAdwEbV9UnZne+8q19Z7o63vTb+TPnRneeWxwxHGdyziii6wApQNEydKUUd5wHYGrftvci7tKKLSME5bvCaruynI9rNL7vdZgiHhiP898Wl8bMnxty+uyIhcURo1FgjSg1DCDph4uPfuR9AFbvvS25p2cxbiyKVuh2o1O44n2lLLacb5v75v5fX6yl5h753IwUD+YcRAQ5B6FMMhj0jboSRhnAE258wvp7Z7aYcbCYCeCGt97ubfICLDP/q4WZ32x7M20fPfb+hxbH9ZdjHOQIIoR74EDywA3coa6MqtJnrP+LmRmcB63ob8dA1wllRm95LVc//22S16TGeKqqpqoHk10ESGJj/zjjgIhAISKCyJmcY6Uu8Pbq7C0V6ABh35dzvYWQG0QAhmSYCaUlNhzdCrlX2jpE6tV4b9DYcGFKEgG8svQucoicC4CsII8zeTxutAEQzx1duPL3vrxjdlnou0SDLdTulxJQmalXNzN98jpEJiSo+qTeoEnsnWC5lVZNRhkOZiq0G8XCmz1gpp3j/ZYdYLhj9qCkn3fJQ4QKeh9OccWxz6O0hGKM9wakeoBEZ1BmqfOMyYFk4gXS+edG4J4ju6/644VK+AOJhSIYpVRBpn/qPVRL65A51dRavJoG2UQkOqf0hgVrGG7u6syoJDObB+55nRANb589Afy40W0UwkY91h39CiLweg1UU+W3ohLNvC2VurJ1htR6A3QaYPCjI7uvOvGGOlfv2XoSuBzEhmNfZXDqBrweUPVqUlWodneSG+6J1NTevThfDpEjmnsmzuuCPPfCvRvfcakT0S2Aeq9tYPr0ZryeBvOOlZBKUIEiCAVZwTgy41x6v6hm0LFZ4o7N7IuXPA+EDx+XjQ+tP/4lUrW2vCI1ydR0iYgmWdtu4yzG7bOiAdn8iYlA0iFJh1Z1JJv+ye2b3n1419XRH2riP0aqqlKClABIjUMW+rtSlw5qmCpgsynnl56/d+M/+P91wfUvQjDgTzx9h9AAAAAASUVORK5CYII=',
		  nocipherIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPHBhdGggZD0ibSAxMy4yMDMxMjQsMTEuNzczNDM4IGMgMC4yODEyNSwwLjI4MTI1IDAuNDIxODc1LDAuNjA5Mzc1IDAuNDIxODc1LDEuMDMxMjUgMCwwLjM3NSAtMC4xNDA2MjUsMC43NSAtMC40MjE4NzUsMS4wMzEyNSAtMC4yODEyNSwwLjIzNDM3NSAtMC42MDkzNzUsMC4zNzUgLTEuMDMxMjUsMC4zNzUgLTAuMzc1LDAgLTAuNzUsLTAuMTQwNjI1IC0xLjAzMTI1LC0wLjM3NSAwLDAgLTMuMTg3NDk4MSwtMy42NTYyNSAtMy4xODc0OTgxLC0zLjY1NjI1IDAsMCAtMy4xNDA2MjUsMy42NTYyNSAtMy4xNDA2MjUsMy42NTYyNSAtMC4yODEyNSwwLjIzNDM3NSAtMC42NTYyNSwwLjM3NSAtMS4wMzEyNSwwLjM3NSAtMC40MjE4NzUsMCAtMC43NSwtMC4xNDA2MjUgLTEuMDMxMjUsLTAuMzc1IC0wLjI4MTI1LC0wLjI4MTI1IC0wLjM3NSwtMC42NTYyNSAtMC4zNzUsLTEuMDMxMjUgMCwtMC40MjE4NzUgMC4wOTM3NSwtMC43NSAwLjM3NSwtMS4wMzEyNSAwLDAgMy4zMjgxMjUsLTMuNzUwMDAwNSAzLjMyODEyNSwtMy43NTAwMDA1IDAsMCAtMy4zMjgxMjUsLTMuNzk2ODc1IC0zLjMyODEyNSwtMy43OTY4NzUgLTAuMjgxMjUsLTAuMjgxMjUgLTAuMzc1LC0wLjYwOTM3NSAtMC4zNzUsLTEuMDMxMjUgMCwtMC4zNzUgMC4wOTM3NSwtMC43NSAwLjM3NSwtMS4wMzEyNSAwLjI4MTI1LC0wLjIzNDM3NSAwLjYwOTM3NSwtMC4zNzUgMS4wMzEyNSwtMC4zNzUgMC4zNzUsMCAwLjc1LDAuMTQwNjI1IDEuMDMxMjUsMC4zNzUgMCwwIDMuMTQwNjI1LDMuNjU2MjUgMy4xNDA2MjUsMy42NTYyNSAwLDAgMy4xODc0OTgxLC0zLjY1NjI1IDMuMTg3NDk4MSwtMy42NTYyNSAwLjI4MTI1LC0wLjIzNDM3NSAwLjY1NjI1LC0wLjM3NSAxLjAzMTI1LC0wLjM3NSAwLjQyMTg3NSwwIDAuNzUsMC4xNDA2MjUgMS4wMzEyNSwwLjM3NSAwLjI4MTI1LDAuMjgxMjUgMC40MjE4NzUsMC42NTYyNSAwLjQyMTg3NSwxLjAzMTI1IDAsMC40MjE4NzUgLTAuMTQwNjI1LDAuNzUgLTAuNDIxODc1LDEuMDMxMjUgMCwwIC0zLjMyODEyMzEsMy43OTY4NzUgLTMuMzI4MTIzMSwzLjc5Njg3NSAwLDAgMy4zMjgxMjMxLDMuNzUwMDAwNSAzLjMyODEyMzEsMy43NTAwMDA1IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=',
		  remoteStorageIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmNGEwNCIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmY0YTA0IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==',
		  remoteStorageIconCiphered: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmNGEwNCIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZmY0YTA0IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xNiAwbDAuMTI1IDYuMzc1YzIuMDk4IDAuMDY3IDMuNzUgMS43NTk1IDMuNzUgMy44NzV2MS45NjloMS45MzcgMC4wMzJsOC00LjIxOS0xMy44NDQtOHpsLTEzLjg0NCA4IDggNC4yMTloMC4wMzIgMS45MDZ2LTEuOTY5YzAtMi4xMTU1IDEuNjgzLTMuODA4IDMuNzgxLTMuODc1bDAuMTI1LTYuMzc1em0tMTMuODQ0IDh2MTZsNy45OTk4LTQuODQ0di02LjA5NGwtNy45OTk4LTUuMDYyem0wIDE2bDEzLjg0NCA4LTAuMzc1LTEwLjA2MmgtNS40Njl2LTIuMzQ0bC03Ljk5OTggNC40MDZ6bTEzLjg0NCA4bDEzLjg0NC04LTgtNC40MDZ2Mi4zNDRoLTUuNDY5bC0wLjM3NSAxMC4wNjJ6bTEzLjg0NC04di0xNmwtOCA1LjA2MnY2LjA5NGw4IDQuODQ0em0tMTMuOTY5LTE3Yy0xLjczNSAwLjA2NjYtMy4xMjUgMS40OTg3LTMuMTI1IDMuMjV2MS45NjloMy4wMzFsMC4wOTQtNS4yMTl6bTAuMjUgMGwwLjA5NCA1LjIxOWgzLjAzMXYtMS45NjljMC0xLjc1MTMtMS4zOS0zLjE4MzQtMy4xMjUtMy4yNXptLTQuNzUgNS44NDRsNC4zNDQgMi4yODEgMC4wMzEtMi4yODFoLTQuMzc1em00Ljg3NSAwbDAuMDMxIDIuMjgxIDQuMzQ0LTIuMjgxaC00LjM3NXptLTUuNDM4IDAuNjI1djUuMzEybDQuMjgyLTIuNTkzLTQuMjgyLTIuNzE5em0xMC4zNzYgMGwtNC4yODIgMi43MTkgNC4yODIgMi41OTN2LTUuMzEyem0tNS43ODIgMy4yMTlsLTQuNTk0IDIuNTMxdjIuMDYyaDQuNzgybC0wLjE4OC00LjU5M3ptMS4xODggMGwtMC4xODggNC41OTNoNC43ODJ2LTIuMDYybC00LjU5NC0yLjUzMXoiIGZpbGw9InVybCgjYSkiLz4KPC9zdmc+Cg==',
		  remoteStorageIconError: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iI2U5MDAwMCIgc3RvcC1vcGFjaXR5PSIuNzYwNzgiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjZTkwMDAwIiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==',
		  remoteStorageIconOffline: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHdpZHRoPSIzMiIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KIDxkZWZzPgogIDxyYWRpYWxHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN5PSI1NzEuNDIiIGN4PSIxMDQ2LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0NDMzIDAgMCAuMTY2NjcgMTIwMS41IDg3Ny4xMSkiIHI9Ijk2Ij4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzY5Njk2OSIgc3RvcC1vcGFjaXR5PSIuNzYxNTQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjNjc2NzY3IiBvZmZzZXQ9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMzYuNiAtOTU2LjM1KSI+CiAgPHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDAiIGQ9Im0xMzUyLjYgOTU2LjM1IDAuMjg4NiAxNS4xMzYgMTMuNTY3LTcuMTM1Mi0xMy44NTUtOC4wMDExemwtMTMuODU1IDguMDAxMSAxMy41NjcgNy4xMzUyIDAuMjg4Ny0xNS4xMzZ6bS0xMy44NTUgOC4wMDExdjE1Ljk5OGwxMi45NTgtNy44MTYyLTEyLjk1OC04LjE4MTV6bTAgMTUuOTk4IDEzLjg1NSA4LjAwMTEtMC42MDg5LTE1LjMxNy0xMy4yNDYgNy4zMTU2em0xMy44NTUgOC4wMDExIDEzLjg1NS04LjAwMTEtMTMuMjUxLTcuMzE1Ni0wLjYwNDQgMTUuMzE3em0xMy44NTUtOC4wMDExdi0xNS45OThsLTEyLjk2MiA4LjE4MTUgMTIuOTYyIDcuODE2MnoiIGZpbGw9InVybCgjYSkiLz4KIDwvZz4KPC9zdmc+Cg==',
		  syncIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg3LjUgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTUuOTk5OTk5IDE2IiB3aWR0aD0iMTYiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjUxMTIgLTc2LjUyNSkiIGRpc3BsYXk9Im5vbmUiPgoJPHBhdGggZGlzcGxheT0iaW5saW5lIiBkPSJtNTEuNDczIDQyLjI1NS0yLjIwNSAyLjIxMmMxLjQ3OCAxLjQ3NyAyLjI5NSAzLjQ0MiAyLjI5NSA1LjUzMyAwIDQuMzA5LTMuNTA0IDcuODEyLTcuODEyIDcuODEydi0xLjU2MmwtMy4xMjUgMy4xMjUgMy4xMjQgMy4xMjV2LTEuNTYyYzYuMDI5IDAgMTAuOTM4LTQuOTA2IDEwLjkzOC0xMC45MzggMC0yLjkyNy0xLjE0MS01LjY3Ni0zLjIxNS03Ljc0NXoiLz4KCTxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0ibTQ2Ljg3NSA0MC42MjUtMy4xMjUtMy4xMjV2MS41NjJjLTYuMDMgMC0xMC45MzggNC45MDctMTAuOTM4IDEwLjkzOCAwIDIuOTI3IDEuMTQxIDUuNjc2IDMuMjE3IDcuNzQ1bDIuMjAzLTIuMjEyYy0xLjQ3Ny0xLjQ3OS0yLjI5NC0zLjQ0Mi0yLjI5NC01LjUzMyAwLTQuMzA5IDMuNTA0LTcuODEyIDcuODEyLTcuODEydjEuNTYybDMuMTI1LTMuMTI1eiIvPgo8L2c+CjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMCAwbC0wLjc1IDEuOTA2MmMtMS4wMDc4LTAuMjk0Mi0zLjQ1ODYtMC43NzA4LTUuNjU2MiAwLjkzNzYgMC0wLjAwMDItMy45MzAyIDIuNTk0MS0yLjA5MzggNy41OTQybDEuNjU2Mi0wLjcxOTJzLTEuNTM5OS0zLjExMjIgMS42ODc2LTUuNTMxM2MwIDAgMS42OTU3LTEuMTMzOSAzLjY4NzQtMC41OTM3bC0wLjcxODcgMS44MTI0IDMuODEyNS0xLjYyNS0xLjYyNS0zLjc4MTJ6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE0IDUuNTYyNWwtMS42NTYgMC43MTg3czEuNTQxIDMuMTEzNS0xLjY4OCA1LjUzMDhjMCAwLTEuNzI3MiAxLjEzNS0zLjcxODUgMC41OTRsMC43NS0xLjgxMi0zLjgxMjUgMS41OTQgMS41OTM4IDMuODEyIDAuNzgxMi0xLjkwNmMxLjAxMTMgMC4yOTUgMy40NjE1IDAuNzY2IDUuNjU2LTAuOTM4IDAgMCAzLjkyOC0yLjU5NCAyLjA5NC03LjU5MzV6Ii8+Cjwvc3ZnPgo=',
		  widget: '<div class="rs-bubble rs-hidden">   <div class="rs-bubble-text remotestorage-initial remotestorage-error remotestorage-authing remotestorage-offline">     <span class="rs-status-text">{{view_connect}}</span>   </div>   <div class="rs-bubble-expandable">     <!-- error -->     <div class="remotestorage-error">       <pre class="rs-status-text rs-error-msg">{{ERROR_MSG}}</pre>       <button class="remotestorage-reset">{{view_get_me_out}}</button>       <p class="rs-centered-text rs-error-plz-report">{{view_error_plz_report}}</p>     </div>     <!-- connected -->     <div class="rs-bubble-text remotestorage-connected">       <strong class="userAddress">{{USER_ADDRESS}}</strong>       <p class="remotestorage-unauthorized">{{view_unauthorized}}</p>       <p class="remotestorage-invalid-key">{{view_invalid_key}}</p>       <form novalidate class="remotestorage-cipher-form">         <input placeholder="Secret key" name="userSecretKey" novalidate>         <button class="rs-cipher" name="rs-cipher" title="cipher" disabled="disabled">           <img>         </button>         <button class="rs-nocipher" name="rs-nocipher" title="no cipher">           <img>         </button>       </form>     </div>     <div class="rs-content remotestorage-connected">       <button class="rs-sync" title="sync"><img></button>       <button class="rs-disconnect" title="disconnect"><img></button>     </div>     <!-- initial -->     <form novalidate class="remotestorage-initial">       <input type="email" placeholder="user@provider.com" name="userAddress" novalidate>       <button class="connect" name="connect" title="connect" disabled="disabled">         <img>       </button>     </form>     <div class="rs-info-msg remotestorage-initial">{{view_info}}</div>   </div> </div> <img class="rs-dropbox rs-backends rs-action" alt="Connect to Dropbox"> <img class="rs-googledrive rs-backends rs-action" alt="Connect to Google Drive"> <img class="rs-cube rs-action"> ',
		  widgetCss: '/** encoding:utf-8 **/ /* RESET */ #remotestorage-widget{text-align:left;}#remotestorage-widget input, #remotestorage-widget button{font-size:11px;}#remotestorage-widget form input[type=email]{margin-bottom:0;/* HTML5 Boilerplate */}#remotestorage-widget form input[type=submit]{margin-top:0;/* HTML5 Boilerplate */}/* /RESET */ #remotestorage-widget, #remotestorage-widget *{-moz-box-sizing:border-box;box-sizing:border-box;}#remotestorage-widget{position:absolute;right:10px;top:10px;font:normal 16px/100% sans-serif !important;user-select:none;-webkit-user-select:none;-moz-user-select:-moz-none;cursor:default;z-index:10000;}#remotestorage-widget .rs-bubble{background:rgba(80, 80, 80, .7);border-radius:5px 15px 5px 5px;color:white;font-size:0.8em;padding:5px;position:absolute;right:3px;top:9px;min-height:24px;white-space:nowrap;text-decoration:none;}.rs-bubble .rs-bubble-text{padding-right:32px;/* make sure the bubble doesn\'t "jump" when initially opening. */ min-width:182px;}#remotestorage-widget .rs-action{cursor:pointer;}/* less obtrusive cube when connected */ #remotestorage-widget.remotestorage-state-connected .rs-cube, #remotestorage-widget.remotestorage-state-busy .rs-cube{opacity:.3;-webkit-transition:opacity .3s ease;-moz-transition:opacity .3s ease;-ms-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;}#remotestorage-widget.remotestorage-state-connected:hover .rs-cube, #remotestorage-widget.remotestorage-state-busy:hover .rs-cube, #remotestorage-widget.remotestorage-state-connected .rs-bubble:not(.rs-hidden) + .rs-cube{opacity:1 !important;}#remotestorage-widget .rs-backends{position:relative;top:5px;right:0;}#remotestorage-widget .rs-cube{position:relative;top:5px;right:0;}/* pulsing animation for cube when loading */ #remotestorage-widget .rs-cube.remotestorage-loading{-webkit-animation:remotestorage-loading .5s ease-in-out infinite alternate;-moz-animation:remotestorage-loading .5s ease-in-out infinite alternate;-o-animation:remotestorage-loading .5s ease-in-out infinite alternate;-ms-animation:remotestorage-loading .5s ease-in-out infinite alternate;animation:remotestorage-loading .5s ease-in-out infinite alternate;}@-webkit-keyframes remotestorage-loading{to{opacity:.7}}@-moz-keyframes remotestorage-loading{to{opacity:.7}}@-o-keyframes remotestorage-loading{to{opacity:.7}}@-ms-keyframes remotestorage-loading{to{opacity:.7}}@keyframes remotestorage-loading{to{opacity:.7}}#remotestorage-widget a{text-decoration:underline;color:inherit;}#remotestorage-widget form{margin-top:.7em;position:relative;}#remotestorage-widget form input{display:table-cell;vertical-align:top;border:none;border-radius:6px;font-weight:bold;color:white;outline:none;line-height:1.5em;height:2em;}#remotestorage-widget form input:disabled{color:#999;background:#444 !important;cursor:default !important;}#remotestorage-widget form input[type=email]:focus, #remotestorage-widget form input[type=password]:focus{background:#223;}#remotestorage-widget form input[type=email], #remotestorage-widget form input[type=password]{background:#000;width:100%;height:26px;padding:0 30px 0 5px;border-top:1px solid #111;border-bottom:1px solid #999;}#remotestorage-widget form input[type=email]:focus, #remotestorage-widget form input[type=password]:focus{background:#223;}#remotestorage-widget button:focus, #remotestorage-widget input:focus{box-shadow:0 0 4px #ccc;}#remotestorage-widget form input[type=email]::-webkit-input-placeholder, #remotestorage-widget form input[type=password]::-webkit-input-placeholder{color:#999;}#remotestorage-widget form input[type=email]:-moz-placeholder, #remotestorage-widget form input[type=password]:-moz-placeholder{color:#999;}#remotestorage-widget form input[type=email]::-moz-placeholder, #remotestorage-widget form input[type=password]::-moz-placeholder{color:#999;}#remotestorage-widget form input[type=email]:-ms-input-placeholder, #remotestorage-widget form input[type=password]:-ms-input-placeholder{color:#999;}#remotestorage-widget form input[type=submit]{background:#000;cursor:pointer;padding:0 5px;}#remotestorage-widget form input[type=submit]:hover{background:#333;}#remotestorage-widget .rs-info-msg{font-size:10px;color:#eee;margin-top:0.7em;white-space:normal;}#remotestorage-widget .rs-info-msg.last-synced-message{display:inline;white-space:nowrap;margin-bottom:.7em}#remotestorage-widget .rs-info-msg a:hover, #remotestorage-widget .rs-info-msg a:active{color:#fff;}#remotestorage-widget button img{vertical-align:baseline;}#remotestorage-widget button{border:none;border-radius:6px;font-weight:bold;color:white;outline:none;line-height:1.5em;height:26px;width:26px;background:#000;cursor:pointer;margin:0;padding:5px;}#remotestorage-widget button:hover{background:#333;}#remotestorage-widget .rs-bubble button.connect, #remotestorage-widget .rs-bubble button.rs-cipher, #remotestorage-widget .rs-bubble button.rs-nocipher{display:block;background:none;position:absolute;right:0;top:0;opacity:1;/* increase clickable area of connect, rs-cipher & rs-nocipher buttons */ margin:-5px;padding:10px;width:36px;height:36px;}#remotestorage-widget .rs-bubble button.rs-cipher{width:46px;}#remotestorage-widget .rs-bubble button.rs-nocipher{height:26px;margin:0;padding:4px 5px 5px;right:-32px;width:26px;}#remotestorage-widget .rs-bubble button.connect:not([disabled]):hover, #remotestorage-widget .rs-bubble button.rs-cipher:not([disabled]):hover, #remotestorage-widget .rs-bubble button.rs-nocipher:not([disabled]):hover{background:rgba(150,150,150,.5);}#remotestorage-widget .rs-bubble button.connect[disabled], #remotestorage-widget .rs-bubble button.rs-cipher[disabled]{opacity:.5;cursor:default !important;}#remotestorage-widget .rs-bubble button.rs-sync{position:relative;left:-5px;bottom:-5px;padding:4px 4px 0 4px;background:#555;}#remotestorage-widget .rs-bubble button.rs-sync:hover{background:#444;}#remotestorage-widget .rs-bubble button.rs-disconnect{background:#721;position:absolute;right:0;bottom:0;padding:4px 4px 0 4px;}#remotestorage-widget .rs-bubble button.rs-disconnect:hover{background:#921;}#remotestorage-widget .remotestorage-error-info{color:#f92;}#remotestorage-widget .remotestorage-reset{width:100%;background:#721;}#remotestorage-widget .remotestorage-reset:hover{background:#921;}#remotestorage-widget .rs-bubble .rs-content{margin-top:7px;}#remotestorage-widget pre{user-select:initial;-webkit-user-select:initial;-moz-user-select:text;max-width:27em;margin-top:1em;overflow:auto;}#remotestorage-widget .rs-centered-text{text-align:center;}#remotestorage-widget .rs-bubble.rs-hidden{padding-bottom:2px;border-radius:5px 15px 15px 5px;}#remotestorage-widget .rs-error-msg{min-height:5em;}.rs-bubble.rs-hidden .rs-bubble-expandable{display:none;}.remotestorage-state-connected .rs-bubble.rs-hidden{display:none;}.remotestorage-connected{display:none;}.remotestorage-state-connected .remotestorage-connected{display:block;}.remotestorage-cipher-form{display:none;}.remotestorage-cipher .remotestorage-cipher-form{display:block;}.remotestorage-invalid-key{display:none;}.remotestorage-invalid-key.remotestorage-cipher-error{display:block;}.remotestorage-initial{display:none;}.remotestorage-state-initial .remotestorage-initial{display:block;}.remotestorage-error{display:none;}.remotestorage-state-error .remotestorage-error{display:block;}.remotestorage-state-authing .remotestorage-authing{display:block;}.remotestorage-state-offline .remotestorage-connected, .remotestorage-state-offline .remotestorage-offline{display:block;}.remotestorage-unauthorized{display:none;}.remotestorage-state-unauthorized .rs-bubble.rs-hidden{display:none;}.remotestorage-state-unauthorized .remotestorage-connected, .remotestorage-state-unauthorized .remotestorage-unauthorized{display:block;}.remotestorage-state-unauthorized .rs-sync{display:none;}.remotestorage-state-busy .rs-bubble.rs-hidden{display:none;}.remotestorage-state-busy .rs-bubble{display:block;}.remotestorage-state-busy .remotestorage-connected{display:block;}.remotestorage-state-authing .rs-bubble-expandable{display:none;}'
		};


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {  var RemoteStorage = __webpack_require__(2);
		  __webpack_require__(28);
		
		  // feature detection flags
		  var haveXMLHttpRequest, hasLocalStorage;
		  // used to store settings in localStorage
		  var SETTINGS_KEY = 'remotestorage:discover';
		  // cache loaded from localStorage
		  var cachedInfo = {};
		
		  /**
		   * Class: RemoteStorage.Discover
		   *
		   * This function deals with the Webfinger lookup, discovering a connecting
		   * user's storage details.
		   *
		   * The discovery timeout can be configured via
		   * `RemoteStorage.config.discoveryTimeout` (in ms).
		   *
		   * Arguments:
		   *
		   *   userAddress - user@host
		   *
		   * Returns:
		   *
		   * A promise for an object with the following properties.
		   *
		   *   href - Storage base URL,
		   *   storageType - Storage type,
		   *   authUrl - OAuth URL,
		   *   properties - Webfinger link properties
		   **/
		
		  RemoteStorage.Discover = function (userAddress) {
		    if (userAddress in cachedInfo) {
		      return Promise.resolve(cachedInfo[userAddress]);
		    }
		
		    var webFinger = new WebFinger({
		      tls_only: false,
		      uri_fallback: true,
		      request_timeout: 5000
		    });
		
		    var pending = Promise.defer();
		
		    webFinger.lookup(userAddress, function (err, response) {
		      if (err) {
		        return pending.reject(err.message);
		      } else if ((typeof response.idx.links.remotestorage !== 'object') ||
		                 (typeof response.idx.links.remotestorage.length !== 'number') ||
		                 (response.idx.links.remotestorage.length <= 0)) {
		        RemoteStorage.log("[Discover] WebFinger record for " + userAddress + " does not have remotestorage defined in the links section ", JSON.stringify(response.json));
		        return pending.reject("WebFinger record for " + userAddress + " does not have remotestorage defined in the links section.");
		      }
		
		      var rs = response.idx.links.remotestorage[0];
		      var authURL = rs.properties['http://tools.ietf.org/html/rfc6749#section-4.2'] ||
		                    rs.properties['auth-endpoint'];
		      var storageType = rs.properties['http://remotestorage.io/spec/version'] ||
		                        rs.type;
		
		      // cache fetched data
		      cachedInfo[userAddress] = { href: rs.href, storageType: storageType, authURL: authURL, properties: rs.properties };
		
		      if (hasLocalStorage) {
		        localStorage[SETTINGS_KEY] = JSON.stringify({ cache: cachedInfo });
		      }
		
		      return pending.resolve(cachedInfo[userAddress]);
		    });
		
		    return pending.promise;
		  };
		
		  RemoteStorage.Discover._rs_init = function (remoteStorage) {
		    hasLocalStorage = RemoteStorage.util.localStorageAvailable();
		    if (hasLocalStorage) {
		      var settings;
		      try { settings = JSON.parse(localStorage[SETTINGS_KEY]); } catch(e) {}
		      if (settings) {
		        cachedInfo = settings.cache;
		      }
		    }
		  };
		
		  RemoteStorage.Discover._rs_supported = function () {
		    haveXMLHttpRequest = !! global.XMLHttpRequest;
		    return haveXMLHttpRequest;
		  };
		
		  RemoteStorage.Discover._rs_cleanup = function () {
		    if (hasLocalStorage) {
		      delete localStorage[SETTINGS_KEY];
		    }
		  };
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
		/*!
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
		
		if (typeof XMLHttpRequest === 'undefined') {
		  XMLHttpRequest = __webpack_require__(29).XMLHttpRequest;
		}
		
		(function (undefined) {
		
		  // URI to property name map
		  var LINK_URI_MAPS = {
		    'http://webfist.org/spec/rel': 'webfist',
		    'http://webfinger.net/rel/avatar': 'avatar',
		    'remotestorage': 'remotestorage',
		    'http://tools.ietf.org/id/draft-dejong-remotestorage': 'remotestorage',
		    'remoteStorage': 'remotestorage',
		    'http://www.packetizer.com/rel/share': 'share',
		    'http://webfinger.net/rel/profile-page': 'profile',
		    'me': 'profile',
		    'vcard': 'vcard',
		    'blog': 'blog',
		    'http://packetizer.com/rel/blog': 'blog',
		    'http://schemas.google.com/g/2010#updates-from': 'updates',
		    'https://camlistore.org/rel/server': 'camilstore'
		  };
		
		  var LINK_PROPERTIES = {
		    'avatar': [],
		    'remotestorage': [],
		    'blog': [],
		    'vcard': [],
		    'updates': [],
		    'share': [],
		    'profile': [],
		    'webfist': [],
		    'camlistore': []
		  };
		
		  // list of endpoints to try, fallback from beginning to end.
		  var URIS = ['webfinger', 'host-meta', 'host-meta.json'];
		
		  function generateErrorObject(obj) {
		    obj.toString = function () {
		      return this.message;
		    };
		    return obj;
		  }
		
		  // given a URL ensures it's HTTPS.
		  // returns false for null string or non-HTTPS URL.
		  function isSecure(url) {
		    if (typeof url !== 'string') {
		      return false;
		    }
		    var parts = url.split('://');
		    if (parts[0] === 'https') {
		      return true;
		    }
		    return false;
		  }
		
		  /**
		   * Function: WebFinger
		   *
		   * WebFinger constructor
		   *
		   * Returns:
		   *
		   *   return WebFinger object
		   */
		  function WebFinger(config) {
		    if (typeof config !== 'object') {
		      config = {};
		    }
		
		    this.config = {
		      tls_only:         (typeof config.tls_only !== 'undefined') ? config.tls_only : true,
		      webfist_fallback: (typeof config.webfist_fallback !== 'undefined') ? config.webfist_fallback : false,
		      uri_fallback:     (typeof config.uri_fallback !== 'undefined') ? config.uri_fallback : false,
		      request_timeout:  (typeof config.request_timeout !== 'undefined') ? config.request_timeout : 10000
		    };
		  }
		
		  // make an http request and look for JRD response, fails if request fails
		  // or response not json.
		  WebFinger.prototype.__fetchJRD = function (url, errorHandler, sucessHandler) {
		    var self = this;
		
		    var xhr = new XMLHttpRequest();
		
		    function __processState() {
		      if (xhr.status === 200) {
		        if (self.__isValidJSON(xhr.responseText)) {
		          return sucessHandler(xhr.responseText);
		        } else {
		          return errorHandler(generateErrorObject({
		            message: 'invalid json',
		            url: url,
		            status: xhr.status
		          }));
		        }
		      } else if (xhr.status === 404) {
		        return errorHandler(generateErrorObject({
		          message: 'resource not found',
		          url: url,
		          status: xhr.status
		        }));
		      } else if ((xhr.status >= 301) && (xhr.status <= 302)) {
		        var location = xhr.getResponseHeader('Location');
		        if (isSecure(location)) {
		          return __makeRequest(location); // follow redirect
		        } else {
		          return errorHandler(generateErrorObject({
		            message: 'no redirect URL found',
		            url: url,
		            status: xhr.status
		          }));
		        }
		      } else {
		        return errorHandler(generateErrorObject({
		          message: 'error during request',
		          url: url,
		          status: xhr.status
		        }));
		      }
		    }
		
		    function __makeRequest() {
		      xhr.onreadystatechange = function () {
		        if (xhr.readyState === 4) {
		          __processState();
		        }
		      };
		
		      xhr.onload = function (a, b) {
		        __processState();
		      }
		      xhr.open('GET', url, true);
		      xhr.setRequestHeader('Accept', 'application/jrd+json, application/json');
		      xhr.send();
		    }
		
		    return __makeRequest();
		  };
		
		  WebFinger.prototype.__isValidJSON = function (str) {
		    try {
		      JSON.parse(str);
		    } catch (e) {
		      return false;
		    }
		    return true;
		  };
		
		  WebFinger.prototype.__isLocalhost = function (host) {
		    var local = /^localhost(\.localdomain)?(\:[0-9]+)?$/;
		    return local.test(host);
		  };
		
		  // processes JRD object as if it's a webfinger response object
		  // looks for known properties and adds them to profile datat struct.
		  WebFinger.prototype.__processJRD = function (URL, JRD, errorHandler, successHandler) {
		    var parsedJRD = JSON.parse(JRD);
		    if ((typeof parsedJRD !== 'object') ||
		        (typeof parsedJRD.links !== 'object')) {
		      if (typeof parsedJRD.error !== 'undefined') {
		        return errorHandler(generateErrorObject({ message: parsedJRD.error, request: URL }));
		      } else {
		        return errorHandler(generateErrorObject({ message: 'unknown response from server', request: URL }));
		      }
		    }
		
		    var links = parsedJRD.links;
		    var result = {  // webfinger JRD - object, json, and our own indexing
		      object: parsedJRD,
		      json: JRD,
		      idx: {}
		    };
		
		    result.idx.properties = {
		      'name': undefined
		    };
		    result.idx.links = JSON.parse(JSON.stringify(LINK_PROPERTIES));
		
		    // process links
		    links.map(function (link, i) {
		      if (LINK_URI_MAPS.hasOwnProperty(link.rel)) {
		        if (result.idx.links[LINK_URI_MAPS[link.rel]]) {
		          var entry = {};
		          Object.keys(link).map(function (item, n) {
		            entry[item] = link[item];
		          });
		          result.idx.links[LINK_URI_MAPS[link.rel]].push(entry);
		        }
		      }
		    });
		
		    // process properties
		    var props = JSON.parse(JRD).properties;
		    for (var key in props) {
		      if (props.hasOwnProperty(key)) {
		        if (key === 'http://packetizer.com/ns/name') {
		          result.idx.properties.name = props[key];
		        }
		      }
		    }
		    return successHandler(result);
		  };
		
		  WebFinger.prototype.lookup = function (address, cb) {
		    if (typeof address !== 'string') {
		      throw new Error('first parameter must be a user address');
		    } else if (typeof cb !== 'function') {
		      throw new Error('second parameter must be a callback');
		    }
		
		    var self = this;
		    var host = '';
		    if (address.indexOf('://') > -1) {
		      // other uri format
		      host = address.replace(/ /g,'').split('://')[1];
		    } else {
		      // useraddress
		      host = address.replace(/ /g,'').split('@')[1];
		    }
		    var uri_index = 0;      // track which URIS we've tried already
		    var protocol = 'https'; // we use https by default
		
		    if (self.__isLocalhost(host)) {
		      protocol = 'http';
		    }
		
		    function __buildURL() {
		      var uri = '';
		      if (! address.split('://')[1]) {
		        // the URI has not been defined, default to acct
		        uri = 'acct:';
		      }
		      return protocol + '://' + host + '/.well-known/' +
		             URIS[uri_index] + '?resource=' + uri + address;
		    }
		
		    // control flow for failures, what to do in various cases, etc.
		    function __fallbackChecks(err) {
		      if ((self.config.uri_fallback) && (host !== 'webfist.org') && (uri_index !== URIS.length - 1)) { // we have uris left to try
		        uri_index = uri_index + 1;
		        return __call();
		      } else if ((!self.config.tls_only) && (protocol === 'https')) { // try normal http
		        uri_index = 0;
		        protocol = 'http';
		        return __call();
		      } else if ((self.config.webfist_fallback) && (host !== 'webfist.org')) { // webfist attempt
		        uri_index = 0;
		        protocol = 'http';
		        host = 'webfist.org';
		        // webfist will
		        // 1. make a query to the webfist server for the users account
		        // 2. from the response, get a link to the actual webfinger json data
		        //    (stored somewhere in control of the user)
		        // 3. make a request to that url and get the json
		        // 4. process it like a normal webfinger response
		        var URL = __buildURL();
		        self.__fetchJRD(URL, cb, function (data) { // get link to users JRD
		          self.__processJRD(URL, data, cb, function (result) {
		            if ((typeof result.idx.links.webfist === 'object') &&
		                (typeof result.idx.links.webfist[0].href === 'string')) {
		              self.__fetchJRD(result.idx.links.webfist[0].href, cb, function (JRD) {
		                self.__processJRD(URL, JRD, cb, function (result) {
		                  return cb(null, cb);
		                });
		              });
		            }
		          });
		        });
		      } else {
		        return cb(err);
		      }
		    }
		
		    function __call() {
		      // make request
		      var URL = __buildURL();
		      self.__fetchJRD(URL, __fallbackChecks, function (JRD) {
		        self.__processJRD(URL, JRD, cb, function (result) { cb(null, result); });
		      });
		    }
		
		    return setTimeout(__call, 0);
		  };
		
		  WebFinger.prototype.lookupLink = function (address, rel, cb) {
		    if (LINK_PROPERTIES.hasOwnProperty(rel)) {
		      this.lookup(address, function (err, p) {
		        var links  = p.idx.links[rel];
		        if (err) {
		          return cb(err);
		        } else if (links.length === 0) {
		          return cb('no links found with rel="' + rel + '"');
		        } else {
		          return cb(null, links[0]);
		        }
		      });
		    } else {
		      return cb('unsupported rel ' + rel);
		    }
		  };
		
		  if (typeof window === 'object') {
		    window.WebFinger = WebFinger;
		  } else if (true) {
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return WebFinger; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else {
		    try {
		      module.exports = WebFinger;
		    } catch (e) {}
		  }
		})();
		


	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {  var RemoteStorage = __webpack_require__(2);
		  
		  function extractParams(url) {
		    //FF already decodes the URL fragment in document.location.hash, so use this instead:
		    var location = url || RemoteStorage.Authorize.getLocation().href,
		        hashPos  = location.indexOf('#'),
		        hash;
		    if (hashPos === -1) { return; }
		    hash = location.substring(hashPos+1);
		    // if hash is not of the form #key=val&key=val, it's probably not for us
		    if (hash.indexOf('=') === -1) { return; }
		    return hash.split('&').reduce(function (params, kvs) {
		      var kv = kvs.split('=');
		
		      if (kv[0] === 'state' && kv[1].match(/rsDiscovery/)) {
		        // extract rsDiscovery data from the state param
		        var stateValue = decodeURIComponent(kv[1]);
		        var encodedData = stateValue.substr(stateValue.indexOf('rsDiscovery='))
		                                    .split('&')[0]
		                                    .split('=')[1];
		
		        params['rsDiscovery'] = JSON.parse(atob(encodedData));
		
		        // remove rsDiscovery param
		        stateValue = stateValue.replace(new RegExp('\&?rsDiscovery=' + encodedData), '');
		
		        if (stateValue.length > 0) {
		          params['state'] = stateValue;
		        }
		      } else {
		        params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
		      }
		
		      return params;
		    }, {});
		  }
		
		  RemoteStorage.ImpliedAuth = function (storageApi, redirectUri) {
		    RemoteStorage.log('ImpliedAuth proceeding due to absent authURL; storageApi = ' + storageApi + ' redirectUri = ' + redirectUri);
		    // Set a fixed access token, signalling to not send it as Bearer
		    remoteStorage.remote.configure({
		      token: RemoteStorage.Authorize.IMPLIED_FAKE_TOKEN
		    });
		    document.location = redirectUri;
		  };
		
		  RemoteStorage.Authorize = function (remoteStorage, authURL, scope, redirectUri, clientId) {
		    RemoteStorage.log('[Authorize] authURL = ', authURL, 'scope = ', scope, 'redirectUri = ', redirectUri, 'clientId = ', clientId);
		
		    // keep track of the discovery data during redirect if we can't save it in localStorage
		    if (!RemoteStorage.util.localStorageAvailable() &&
		        remoteStorage.backend === 'remotestorage') {
		      redirectUri += redirectUri.indexOf('#') > 0 ? '&' : '#';
		
		      var discoveryData = {
		        userAddress: remoteStorage.remote.userAddress,
		        href: remoteStorage.remote.href,
		        storageApi: remoteStorage.remote.storageApi,
		        properties: remoteStorage.remote.properties
		      };
		
		      redirectUri += 'rsDiscovery=' + btoa(JSON.stringify(discoveryData));
		    }
		
		    var url = authURL, hashPos = redirectUri.indexOf('#');
		    url += authURL.indexOf('?') > 0 ? '&' : '?';
		    url += 'redirect_uri=' + encodeURIComponent(redirectUri.replace(/#.*$/, ''));
		    url += '&scope=' + encodeURIComponent(scope);
		    url += '&client_id=' + encodeURIComponent(clientId);
		    if (hashPos !== - 1 && hashPos+1 !== redirectUri.length) {
		      url += '&state=' + encodeURIComponent(redirectUri.substring(hashPos+1));
		    }
		    url += '&response_type=token';
		
		    if (global.cordova) {
		      return RemoteStorage.Authorize.openWindow(
		          url,
		          redirectUri,
		          'location=yes,clearsessioncache=yes,clearcache=yes'
		        )
		        .then(function(authResult) {
		          remoteStorage.remote.configure({
		            token: authResult.access_token
		          });
		        })
		        .then(null, function(error) {
		          console.error(error);
		          remoteStorage.widget.view.setState('initial');
		        });
		    }
		
		    RemoteStorage.Authorize.setLocation(url);
		  };
		
		  RemoteStorage.Authorize.IMPLIED_FAKE_TOKEN = false;
		
		  RemoteStorage.prototype.authorize = function (authURL, cordovaRedirectUri) {
		    this.access.setStorageType(this.remote.storageType);
		    var scope = this.access.scopeParameter;
		
		    var redirectUri = global.cordova ?
		      cordovaRedirectUri :
		      String(RemoteStorage.Authorize.getLocation());
		
		    var clientId = redirectUri.match(/^(https?:\/\/[^\/]+)/)[0];
		
		    RemoteStorage.Authorize(this, authURL, scope, redirectUri, clientId);
		  };
		
		  /**
		   * Get current document location
		   *
		   * Override this method if access to document.location is forbidden
		   */
		  RemoteStorage.Authorize.getLocation = function () {
		    return global.document.location;
		  };
		
		  /**
		   * Set current document location
		   *
		   * Override this method if access to document.location is forbidden
		   */
		  RemoteStorage.Authorize.setLocation = function (location) {
		    if (typeof location === 'string') {
		      global.document.location.href = location;
		    } else if (typeof location === 'object') {
		      global.document.location = location;
		    } else {
		      throw "Invalid location " + location;
		    }
		  };
		
		  /**
		   * Open new InAppBrowser window for OAuth in Cordova
		   */
		  RemoteStorage.Authorize.openWindow = function (url, redirectUri, options) {
		    var pending = Promise.defer();
		    var newWindow = global.open(url, '_blank', options);
		
		    if (!newWindow || newWindow.closed) {
		      pending.reject('Authorization popup was blocked');
		      return pending.promise;
		    }
		
		    var handleExit = function () {
		      pending.reject('Authorization was canceled');
		    };
		
		    var handleLoadstart = function (event) {
		      if (event.url.indexOf(redirectUri) !== 0) {
		        return;
		      }
		
		      newWindow.removeEventListener('exit', handleExit);
		      newWindow.close();
		
		      var authResult = extractParams(event.url);
		
		      if (!authResult) {
		        return pending.reject('Authorization error');
		      }
		
		      return pending.resolve(authResult);
		    };
		
		    newWindow.addEventListener('loadstart', handleLoadstart);
		    newWindow.addEventListener('exit', handleExit);
		
		    return pending.promise;
		  };
		
		  RemoteStorage.prototype.impliedauth = function () {
		    RemoteStorage.ImpliedAuth(this.remote.storageApi, String(document.location));
		  };
		
		  RemoteStorage.Authorize._rs_supported = function () {
		    return typeof(document) !== 'undefined';
		  };
		
		  var onFeaturesLoaded;
		  RemoteStorage.Authorize._rs_init = function (remoteStorage) {
		
		    onFeaturesLoaded = function () {
		      var authParamsUsed = false;
		      if (params) {
		        if (params.error) {
		          throw "Authorization server errored: " + params.error;
		        }
		
		        // rsDiscovery came with the redirect, because it couldn't be
		        // saved in localStorage
		        if (params.rsDiscovery) {
		          remoteStorage.remote.configure(params.rsDiscovery);
		        }
		
		        if (params.access_token) {
		          remoteStorage.remote.configure({
		            token: params.access_token
		          });
		          authParamsUsed = true;
		        }
		        if (params.remotestorage) {
		          remoteStorage.connect(params.remotestorage);
		          authParamsUsed = true;
		        }
		        if (params.state) {
		          location = RemoteStorage.Authorize.getLocation();
		          RemoteStorage.Authorize.setLocation(location.href.split('#')[0]+'#'+params.state);
		        }
		      }
		      if (!authParamsUsed) {
		        remoteStorage.remote.stopWaitingForToken();
		      }
		    };
		    var params = extractParams(),
		        location;
		    if (params) {
		      location = RemoteStorage.Authorize.getLocation();
		      location.hash = '';
		    }
		    remoteStorage.on('features-loaded', onFeaturesLoaded);
		  };
		
		  RemoteStorage.Authorize._rs_cleanup = function (remoteStorage) {
		    remoteStorage.removeEventListener('features-loaded', onFeaturesLoaded);
		  };
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=build.js.map

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

/***/ }
/******/ ]);