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

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _bodyParser = __webpack_require__(5);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _dataWrapper = __webpack_require__(6);

	var _dataWrapper2 = _interopRequireDefault(_dataWrapper);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	var _api = __webpack_require__(9);

	var _api2 = _interopRequireDefault(_api);

	var _userRoutes = __webpack_require__(11);

	var _userRoutes2 = _interopRequireDefault(_userRoutes);

	var _routes = __webpack_require__(16);

	var _routes2 = _interopRequireDefault(_routes);

	var _reportController = __webpack_require__(61);

	var _reportController2 = _interopRequireDefault(_reportController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /* eslint max-len: [2, 500, 4] */


	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({
	  extended: false
	}));

	app.use(_express2.default.static('static'));

	app.use('/api', _api2.default);
	app.use('/user', _userRoutes2.default);

	var city = 'TIJUANA';
	var reportController = new _reportController2.default();

	app.get('/health', function (req, res) {
	  res.writeHead(200);
	  res.end();
	});

	app.get('/*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      reportController.getReport(city).then(function (results) {
	        var props = {
	          city: city,
	          report: results
	        };
	        var content = (0, _server.renderToString)(_react2.default.createElement(
	          _dataWrapper2.default,
	          { data: props },
	          _react2.default.createElement(_reactRouter.RoutingContext, renderProps)
	        ));
	        res.render('index', { content: content, props: props });
	      }).catch(function (err) {
	        console.log('err', err);
	        var props = {
	          city: city,
	          report: []
	        };
	        var content = (0, _server.renderToString)(_react2.default.createElement(
	          _dataWrapper2.default,
	          { data: props },
	          _react2.default.createElement(_reactRouter.RoutingContext, renderProps)
	        ));
	        res.render('index', { content: content, props: props });
	      });
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	app.set('ipaddress', _config2.default.get('ipaddress'));
	app.set('port', _config2.default.get('port'));

	var server = app.listen(app.get('port'), app.get('ipaddress'), function (err) {
	  if (err) {
	    console.log(err);
	  }
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://%s:%s', host, port);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataWrapper = function (_React$Component) {
	  _inherits(DataWrapper, _React$Component);

	  function DataWrapper() {
	    _classCallCheck(this, DataWrapper);

	    return _possibleConstructorReturn(this, (DataWrapper.__proto__ || Object.getPrototypeOf(DataWrapper)).apply(this, arguments));
	  }

	  _createClass(DataWrapper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        data: this.props.data
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return DataWrapper;
	}(_react2.default.Component);

	exports.default = DataWrapper;


	DataWrapper.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  children: _react2.default.PropTypes.any
	};

	DataWrapper.childContextTypes = {
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var convict = __webpack_require__(8);

	var config = convict({
	    email: {
	      doc: 'default contact email',
	      format: String,
	      default: 'info@mintitmedia.com'
	    },
	    ipaddress: {
	        doc: 'IP the application runs on',
	        format: 'ipaddress',
	        default: '127.0.0.1',
	        env: 'OPENSHIFT_NODEJS_IP'
	    },
	    port: {
	        doc: 'Port the application listens on',
	        format: 'port',
	        default: '3030',
	        env: 'OPENSHIFT_NODEJS_PORT'
	    },
	    sendgrid: {
	        doc: 'Sendrid API KEY',
	        format: String,
	        default: '',
	        env: 'SENDGRID_API_KEY'
	    },
	    api: {
	      url: {
	          doc: 'API URL',
	          format: String,
	          default: 'http://127.0.0.1:3000/',
	          env: 'GC_API_URL',
	      },
	    }
	});

	config.validate();

	module.exports = config;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("convict");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var express = __webpack_require__(1);
	/*eslint-disable */
	var router = express.Router();
	/*eslint-enable */
	var conf = __webpack_require__(7);
	var sendgrid = __webpack_require__(10)(conf.get('sendgrid'));

	router.post('/send_email', function (req, res) {
	  var fromname = req.body.fromname;
	  var replyto = req.body.replyto;
	  var subject = req.body.subject;
	  var html = req.body.html;

	  var email = new sendgrid.Email({
	    to: conf.get('email'),
	    from: conf.get('email'),
	    fromname: fromname,
	    replyto: replyto,
	    subject: subject,
	    bcc: ['info@mintitmedia.com'],
	    html: html
	  });

	  sendgrid.send(email, function (err) {
	    var response = true;
	    if (err) {
	      console.error(err);
	      response = false;
	    }
	    res.send({
	      status: response
	    });
	  });
	});

	exports.default = router;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("sendgrid");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _requestUtil = __webpack_require__(12);

	var _requestUtil2 = _interopRequireDefault(_requestUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(1);
	/*eslint-disable */
	var router = express.Router();

	/*eslint-enable */
	var config = __webpack_require__(7);

	router.get('/report', function (req, res) {
	  var apiUrl = config.get('api.url') + 'user/report?city=tijuana';
	  _requestUtil2.default.get(apiUrl).then(function (results) {
	    res.status(200).send(results.entity);
	  }).catch(function (error) {
	    res.send(error);
	  });
	});

	router.post('/report', function (req, res) {
	  var apiUrl = config.get('api.url') + 'user/report';
	  var data = req.body;
	  _requestUtil2.default.post(apiUrl, data).then(function (results) {
	    res.status(200).send(results.entity);
	  }).catch(function (error) {
	    res.send(error);
	  });
	});

	exports.default = router;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rest = __webpack_require__(13);

	var _rest2 = _interopRequireDefault(_rest);

	var _mime = __webpack_require__(14);

	var _mime2 = _interopRequireDefault(_mime);

	var _errorCode = __webpack_require__(15);

	var _errorCode2 = _interopRequireDefault(_errorCode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var client = _rest2.default.wrap(_mime2.default, { mime: 'application/json' }).wrap(_errorCode2.default, { code: 300 });

	var RequestUtil = function () {
	  function RequestUtil() {
	    _classCallCheck(this, RequestUtil);
	  }

	  _createClass(RequestUtil, null, [{
	    key: 'get',
	    value: function get(url) {
	      return client({ path: url });
	    }

	    /*
	      Request method post
	      @param {string} string
	      @param {data} data
	      @returns {object}
	    */

	  }, {
	    key: 'post',
	    value: function post(url, data) {
	      return client({
	        method: 'POST',
	        path: url,
	        entity: data
	      });
	    }
	  }]);

	  return RequestUtil;
	}();

	exports.default = RequestUtil;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("rest");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("rest/interceptor/mime");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("rest/interceptor/errorCode");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _createBrowserHistory = __webpack_require__(18);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _sitemap = __webpack_require__(19);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var items = _sitemap2.default.items;

	var routes = items.children.map(function (item, index) {
	  return _react2.default.createElement(_reactRouter.Route, { path: item.url, component: item.component, key: index });
	});
	var history = process.env.TIER === 'FE' ? (0, _createBrowserHistory2.default)() : null;

	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: history },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: items.component },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: items.default }),
	    routes
	  )
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHandler = __webpack_require__(20);

	var _AppHandler2 = _interopRequireDefault(_AppHandler);

	var _home = __webpack_require__(34);

	var _home2 = _interopRequireDefault(_home);

	var _reporteUsuario = __webpack_require__(46);

	var _reporteUsuario2 = _interopRequireDefault(_reporteUsuario);

	var _survey = __webpack_require__(49);

	var _survey2 = _interopRequireDefault(_survey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  items: {
	    component: _AppHandler2.default,
	    default: _home2.default,
	    children: [{
	      title: 'Inicio',
	      url: '/inicio',
	      component: _home2.default
	    }, {
	      title: 'Reporte de Usuario',
	      url: '/reporte-usuario',
	      component: _reporteUsuario2.default
	    }, {
	      title: 'Forma Reporte de Usuario',
	      url: '/encuesta',
	      component: _survey2.default
	    }]
	  },
	  icons: [{
	    title: 'facebook',
	    url: 'https://www.facebook.com/garitacenter/'
	  }, {
	    title: 'twitter',
	    url: 'https://twitter.com/garita_center'
	  }, {
	    title: 'googleplus',
	    url: 'https://plus.google.com/102476216230239359040'
	  }]
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	var _sitemap = __webpack_require__(19);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _menu = __webpack_require__(23);

	var _menu2 = _interopRequireDefault(_menu);

	var _menuReport = __webpack_require__(25);

	var _menuReport2 = _interopRequireDefault(_menuReport);

	var _menuCities = __webpack_require__(27);

	var _menuCities2 = _interopRequireDefault(_menuCities);

	var _footer = __webpack_require__(29);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(33);

	var AppHandler = function (_React$Component) {
	  _inherits(AppHandler, _React$Component);

	  function AppHandler(props, context) {
	    _classCallCheck(this, AppHandler);

	    var _this = _possibleConstructorReturn(this, (AppHandler.__proto__ || Object.getPrototypeOf(AppHandler)).call(this, props, context));

	    _this.state = {
	      data: context.data ? context.data : window._data,
	      showOnlyContentOn: '/encuesta'
	    };
	    return _this;
	  }

	  _createClass(AppHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _gaUtilAdapter2.default.init();
	    }
	  }, {
	    key: 'renderFullContent',
	    value: function renderFullContent(content) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_menu2.default, { city: 'Tijuana / San Diego' }),
	        _react2.default.createElement(_menuCities2.default, null),
	        _react2.default.createElement(_menuReport2.default, { location: this.props.location.pathname }),
	        content,
	        _react2.default.createElement(_footer2.default, { icons: _sitemap2.default.icons })
	      );
	    }
	  }, {
	    key: 'renderJustContent',
	    value: function renderJustContent(content) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        content,
	        _react2.default.createElement(_footer2.default, { icons: _sitemap2.default.icons })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, { data: _this2.state.data });
	      });
	      var location = this.props.location;

	      var className = location.pathname.indexOf('encuesta') === -1 ? '' : style.background;
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        this.props.location.pathname !== this.state.showOnlyContentOn ? this.renderFullContent(children) : this.renderJustContent(children)
	      );
	    }
	  }]);

	  return AppHandler;
	}(_react2.default.Component);

	exports.default = AppHandler;


	AppHandler.propTypes = {
	  children: _react2.default.PropTypes.object.isRequired,
	  location: _react2.default.PropTypes.any,
	  context: _react2.default.PropTypes.any,
	  data: _react2.default.PropTypes.any
	};

	AppHandler.contextTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint max-len: [2, 500, 4] */


	var _utilGanalytics = __webpack_require__(22);

	var _utilGanalytics2 = _interopRequireDefault(_utilGanalytics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var enable = true;

	var GaUtilAdapter = function () {
	  function GaUtilAdapter() {
	    _classCallCheck(this, GaUtilAdapter);
	  }

	  _createClass(GaUtilAdapter, null, [{
	    key: 'init',
	    value: function init() {
	      if (enable) {
	        _utilGanalytics2.default.init('UA-75576478-1');
	      }
	    }
	  }, {
	    key: 'sendEvent',
	    value: function sendEvent(eventCategory, eventAction, eventLabel, eventValue) {
	      if (enable) {
	        _utilGanalytics2.default.sendEvent(eventCategory, eventAction, eventLabel, eventValue);
	      }
	    }
	  }]);

	  return GaUtilAdapter;
	}();

	exports.default = GaUtilAdapter;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("util-ganalytics");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(24);

	var MainMenu = function (_React$Component) {
	  _inherits(MainMenu, _React$Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'nav',
	        { className: style.navbar + ' navbar', id: 'menu_wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-5 col-xs-10' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.navbarBrand + ' navbar-brand', to: '/' },
	                _react2.default.createElement('img', { src: '/images/garita-center-logo.png', alt: 'GaritaCenter - reporte de garitas' })
	              ),
	              _react2.default.createElement(
	                'h1',
	                null,
	                'Reporte de Garitas'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-5 col-xs-10' },
	              _react2.default.createElement(
	                'h2',
	                { className: 'navbar-text navbar-right ' },
	                'Tijuana / San Diego'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MainMenu;
	}(_react2.default.Component);

	exports.default = MainMenu;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___cfX-h","vCenter":"style__vCenter___ZA14l","vCenterRel":"style__vCenterRel___1GkYt","hCenter":"style__hCenter___2Rj-i","inheritHeight":"style__inheritHeight___2LMcf","hideOverflow":"style__hideOverflow___3olA9","icon-general-sprite":"style__icon-general-sprite___8hFb_","navbar":"style__navbar___1jtlv","navbarBrand":"style__navbarBrand___2rqc0"};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(26);

	var MenuReport = function (_React$Component) {
	  _inherits(MenuReport, _React$Component);

	  function MenuReport() {
	    _classCallCheck(this, MenuReport);

	    return _possibleConstructorReturn(this, (MenuReport.__proto__ || Object.getPrototypeOf(MenuReport)).apply(this, arguments));
	  }

	  _createClass(MenuReport, [{
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      var item = e.target.getAttribute('data-item');
	      _gaUtilAdapter2.default.sendEvent('mainmenu', 'click', item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var location = this.props.location;

	      var reportLocation = 'reporte-usuario';
	      return _react2.default.createElement(
	        'div',
	        { className: style.mainWrapper },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav nav-tabs' },
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation', className: location.indexOf(reportLocation) === -1 ? 'active' : '' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/', onClick: this.clickHandler, 'data-item': 'homepage' },
	                'Reporte Oficial'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation', className: location.indexOf(reportLocation) !== -1 ? 'active' : '' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/reporte-usuario', onClick: this.clickHandler, 'data-item': 'reporte-usuario' },
	                'Reporte Usuarios',
	                _react2.default.createElement(
	                  'span',
	                  { className: style.notification },
	                  '99'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MenuReport;
	}(_react2.default.Component);

	exports.default = MenuReport;


	MenuReport.propTypes = {
	  location: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2bJg7","vCenter":"style__vCenter___1gceq","vCenterRel":"style__vCenterRel___3JMRJ","hCenter":"style__hCenter___RDWhc","inheritHeight":"style__inheritHeight___170iI","hideOverflow":"style__hideOverflow___1Rfch","icon-general-sprite":"style__icon-general-sprite___1I4Yq","mainWrapper":"style__mainWrapper___2Vi4a","notification":"style__notification___TJ9VB"};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(28);

	var MenuCities = function (_React$Component) {
	  _inherits(MenuCities, _React$Component);

	  function MenuCities(props) {
	    _classCallCheck(this, MenuCities);

	    var _this = _possibleConstructorReturn(this, (MenuCities.__proto__ || Object.getPrototypeOf(MenuCities)).call(this, props));

	    _this.state = {
	      showMenu: false
	    };
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }

	  _createClass(MenuCities, [{
	    key: 'clickHandler',
	    value: function clickHandler() {
	      this.setState({
	        showMenu: !this.state.showMenu
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: style.menuControl, onClick: this.clickHandler },
	          _react2.default.createElement('span', { className: style.hamburgerBar }),
	          _react2.default.createElement('span', { className: style.hamburgerBar })
	        ),
	        this.state.showMenu ? _react2.default.createElement(
	          'div',
	          { className: style.citiesList },
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              'Tijuana'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              'Mexicali'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              'Tecate'
	            )
	          )
	        ) : null
	      );
	    }
	  }]);

	  return MenuCities;
	}(_react2.default.Component);

	exports.default = MenuCities;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3JKf9","vCenter":"style__vCenter___FH6VK","vCenterRel":"style__vCenterRel___27D8B","hCenter":"style__hCenter___3N_EY","inheritHeight":"style__inheritHeight___1W-a5","hideOverflow":"style__hideOverflow___1kVZC","icon-general-sprite":"style__icon-general-sprite___JpYcO","menuControl":"style__menuControl___Spzia","hamburgerBar":"style__hamburgerBar___3TYMt","citiesList":"style__citiesList___2yMpE"};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	var _powered = __webpack_require__(30);

	var _powered2 = _interopRequireDefault(_powered);

	var _svg = __webpack_require__(32);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(31);

	var FooterAAA = function (_React$Component) {
	  _inherits(FooterAAA, _React$Component);

	  function FooterAAA() {
	    _classCallCheck(this, FooterAAA);

	    return _possibleConstructorReturn(this, (FooterAAA.__proto__ || Object.getPrototypeOf(FooterAAA)).apply(this, arguments));
	  }

	  _createClass(FooterAAA, [{
	    key: 'getIcons',
	    value: function getIcons(data) {
	      var _this2 = this;

	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'div',
	          { key: index, className: 'col-xs-3 col-sm-12 col-md-4' },
	          _react2.default.createElement(
	            'a',
	            { href: item.url, className: style.sm_icon, id: item.url, target: '_blank', onClick: _this2.clickHandler, 'data-item': item.title },
	            _react2.default.createElement(_svg2.default, { network: item.title, className: style[item.title] })
	          )
	        );
	      });
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      var item = e.currentTarget.getAttribute('data-item');
	      _gaUtilAdapter2.default.sendEvent('footer', 'click', item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.footerWrapper },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid ' + style.container },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'GaritaCenter'
	                ),
	                ' Es un servicio web con el objetivo de brindar el reporte de garitas entre M\xE9xico (Tijuana) y Estados Unidos (San Diego), en un formato amigable.'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'En ',
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'GaritaCenter'
	                ),
	                ' nos interesa tu opini\xF3n, si eres de Tijuana y cruzas seguido, m\xE1ndanos un mensaje sobre c\xF3mo podemos mejorar el reporte de garitas.'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement(
	                  'small',
	                  null,
	                  'El reporte de garitas de GaritaCenter es extraido de CBP. Los datos contenidos en este sitio son de car\xE1cter informativo.'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-4' },
	              'Amigos de GaritaCenter en Tijuana',
	              _react2.default.createElement(
	                'ul',
	                { className: style.list },
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: 'http://www.playami.com/', title: 'Directorio Playas de Tijuana', target: '_blank', onClick: this.clickHandler, 'data-item': 'playami' },
	                    'Directorio Playas de Tijuana'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: 'http://www.somospool.com', title: 'somos pool', target: '_blank', onClick: this.clickHandler, 'data-item': 'somospool' },
	                    'POOL'
	                  )
	                )
	              ),
	              _react2.default.createElement('br', null)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-2' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                this.getIcons(this.props.icons)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_powered2.default, null)
	      );
	    }
	  }]);

	  return FooterAAA;
	}(_react2.default.Component);

	exports.default = FooterAAA;


	FooterAAA.propTypes = {
	  icons: _react2.default.PropTypes.array
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(31);

	var Powered = function (_React$Component) {
	  _inherits(Powered, _React$Component);

	  function Powered() {
	    _classCallCheck(this, Powered);

	    return _possibleConstructorReturn(this, (Powered.__proto__ || Object.getPrototypeOf(Powered)).apply(this, arguments));
	  }

	  _createClass(Powered, [{
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      var item = e.currentTarget.getAttribute('data-item');
	      _gaUtilAdapter2.default.sendEvent('footer', 'click', item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.powered },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Todos los derechos reservados \xA9 GaritaCenter ',
	              _react2.default.createElement('br', null),
	              'Reporte de garitas para San Ysidro y Otay | Tijuana'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Un proyecto de \xA0',
	              _react2.default.createElement(
	                'a',
	                { href: 'http://www.mintitmedia.com', title: 'Dise\xF1o y Desarrollo Web en Tijuana', target: '_blank', onClick: this.clickHandler, 'data-item': 'mintitmedia' },
	                'MINT'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Powered;
	}(_react2.default.Component);

	exports.default = Powered;

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___24X-f","vCenter":"style__vCenter___rkH6k","vCenterRel":"style__vCenterRel___W_SE5","hCenter":"style__hCenter___rq5W3","inheritHeight":"style__inheritHeight___IbmOF","hideOverflow":"style__hideOverflow___3nmjb","icon-general-sprite":"style__icon-general-sprite___bVUR0","footerWrapper":"style__footerWrapper___zbtoF","container":"style__container___2PqEc","facebook":"style__facebook___39dVV","twitter":"style__twitter___1oyfA","googleplus":"style__googleplus___1casQ","list":"style__list___2_d4H","powered":"style__powered___2okxk"};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 1500, 4] */


	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: 'renderItems',
	    value: function renderItems(network, className) {
	      switch (network) {
	        case 'facebook':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '50', height: '50', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z', fill: '#fff' })
	          );

	        case 'twitter':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z' })
	          );

	        case 'pinterest':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { className: this.props.background, cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M14.4 18.1c-0.5 2.6-1.1 5.1-2.9 6.4 -0.6-4 0.8-6.9 1.5-10.1 -1.1-1.8 0.1-5.5 2.4-4.6 2.8 1.1-2.4 6.8 1.1 7.5 3.7 0.8 5.2-6.4 2.9-8.8 -3.3-3.4-9.7-0.1-8.9 4.8 0.2 1.2 1.4 1.5 0.5 3.2 -2.1-0.5-2.8-2.1-2.7-4.4 0.1-3.7 3.3-6.2 6.5-6.6 4-0.4 7.8 1.5 8.3 5.2 0.6 4.2-1.8 8.8-6.1 8.5C15.8 19.2 15.4 18.6 14.4 18.1' })
	          );
	        case 'instagram':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M20.6 7H9.4c-1.3 0-2.4 0.9-2.4 2.1v11.8c0 1.2 1.1 2.1 2.4 2.1h11.3c1.3 0 2.4-0.9 2.4-2.1V9.1C23 7.9 22 7 20.6 7zM18.6 9.2c0-0.3 0.2-0.5 0.5-0.5h1.7c0.3 0 0.5 0.2 0.5 0.5v1.7c0 0.3-0.2 0.5-0.5 0.5h-1.7c-0.3 0-0.5-0.2-0.5-0.5V9.2zM17.7 11.7v0c0 0 0 0 0 0H17.7zM14.9 12c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5 -2 0-3.5-1.6-3.5-3.5C11.4 13.6 13 12 14.9 12zM22 20.7c0 0.8-0.6 1.4-1.4 1.4H9.3c-0.8 0-1.4-0.6-1.4-1.4V13.3h2.9c-0.3 0.7-0.5 1.4-0.5 2.2 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7 0-0.7-0.2-1.4-0.5-2h2.8V20.7z' })
	          );

	        case 'googleplus':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '50', height: '50', viewBox: '0 0 50 50', className: className },
	            _react2.default.createElement('circle', { cx: '25', cy: '25', r: '25', fill: '#DA5031' }),
	            _react2.default.createElement('path', { d: 'M23.6 27.9c-0.5-0.7-1-1.3-1.1-2.1 -0.2-0.8 0-1.6 0.3-2.3 -0.3 0-0.7 0-1 0 -2.2 0.1-4.1-0.5-5.7-2.1 -1.2-1.2-1.8-2.6-1.9-4.2 -0.3-2.6 0.8-4.6 2.6-6.4 1.5-1.4 3.4-2.1 5.4-2.4 2-0.2 4-0.2 6-0.2C30 8.2 31.8 8.2 33.5 8.2c0.1 0 0.2 0 0.3 0 0 0 0 0.1 0 0.1 -0.8 0.5-1.5 1-2.4 1.3 -0.9 0.3-1.8 0.4-2.7 0.1 0 0 0 0.1-0.1 0.1 0.1 0.1 0.1 0.2 0.2 0.3 0.7 0.6 1.3 1.3 1.7 2.1 1.5 2.5 1.4 6.4-1.3 8.7 -0.7 0.6-1.3 1.2-2 1.8 -0.9 0.8-0.8 2.2 0.1 3 1.2 1 2.4 2 3.5 3 2.6 2.3 2.7 6.2 0.8 8.7 -1.4 1.9-3.3 3.1-5.5 3.7 -1.8 0.5-3.6 0.7-5.5 0.7 -1.9-0.1-3.8-0.5-5.5-1.4 -1.4-0.7-2.5-1.8-2.9-3.3 -0.6-1.9-0.2-3.6 1-5.1 1-1.3 2.4-2.2 4-2.7 1.2-0.4 2.4-0.6 3.6-0.8C21.8 28.2 22.7 28.1 23.6 27.9zM23.5 39.8c1.5 0.1 2.8-0.1 4-0.8 2.8-1.4 3.3-5 1-7 -0.8-0.7-1.6-1.3-2.4-2 -0.5-0.4-1.1-0.7-1.8-0.7 -0.7 0-1.4 0.1-2.1 0.2 -1.3 0.1-2.6 0.5-3.8 1.1 -3 1.6-3.1 5-1.4 6.9 0.8 0.9 1.9 1.5 3.1 1.9C21.3 39.7 22.4 39.8 23.5 39.8zM18.2 14.3c0 1.3 0.1 2.3 0.5 3.3 0.5 1.4 1.2 2.6 2.3 3.6 2 1.7 4.7 1 6-0.7 0.5-0.7 0.7-1.5 0.7-2.4 0.1-1-0.1-2-0.4-3 -0.4-1.7-1.2-3.2-2.5-4.4 -2-1.8-5.1-1.2-6.2 1.2C18.2 12.8 18.2 13.6 18.2 14.3z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M33.2 24.5c0-0.7 0-1.4 0-2.1 1.1 0 2.2 0 3.3 0 0-0.1 0-0.2 0-0.3 0-0.9 0-1.8 0-2.6 0-0.4 0.1-0.4 0.4-0.4 0.4 0 0.8 0 1.2 0 0.3 0 0.4 0.1 0.4 0.4 0 1 0 1.9 0 2.9 1.1 0 2.2 0 3.3 0 0 0.7 0 1.4 0 2.1 -0.1 0-0.2 0-0.3 0 -0.9 0-1.7 0-2.6 0 -0.4 0-0.4 0-0.4 0.4 0 0.8 0 1.6 0 2.4 0 0.5-0.1 0.5-0.5 0.5 -0.4 0-0.7 0-1.1 0 -0.4 0-0.5-0.1-0.5-0.5 0-0.8 0-1.6 0-2.4 0-0.4-0.1-0.4-0.4-0.4 -0.9 0-1.8 0-2.8 0C33.3 24.5 33.3 24.5 33.2 24.5z', fill: '#fff' })
	          );

	        case 'foursquare':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '50', height: '50', viewBox: '244.9 723.5 50 49.9' },
	            _react2.default.createElement('circle', { cx: '269.9', cy: '748.4', r: '25', fill: '#f64d78' }),
	            _react2.default.createElement('path', { d: 'M280.2 733.6c0 0-14.5 0-16.8 0s-3 1.8-3 2.9c0 1.1 0 26.8 0 26.8 0 1.2 0.7 1.7 1 1.9 0.4 0.2 1.4 0.3 2-0.4 0 0 7.9-9.2 8.1-9.4 0.2-0.2 0.2-0.2 0.4-0.2 0.4 0 3.5 0 5.1 0 2.2 0 2.5-1.5 2.7-2.5 0.2-0.8 2.3-11.6 3-15C283.3 735 282.6 733.6 280.2 733.6zM279.8 752.6c0.2-0.8 2.3-11.6 3-15M279.2 738.1l-0.7 3.7c-0.1 0.4-0.6 0.8-1 0.8 -0.5 0-6.8 0-6.8 0 -0.7 0-1.3 0.4-1.3 1.2v0.9c0 0.7 0.5 1.3 1.3 1.3 0 0 5.3 0 5.8 0 0.5 0 1 0.6 0.9 1.1 -0.1 0.6-0.6 3.3-0.7 3.6 -0.1 0.3-0.4 0.8-1 0.8 -0.5 0-4.5 0-4.5 0 -0.8 0-1.1 0.1-1.6 0.8 -0.6 0.7-5.5 6.7-5.5 6.7 0 0.1-0.1 0-0.1 0v-20.9c0-0.5 0.4-1 1-1 0 0 13 0 13.5 0C278.8 737.1 279.3 737.5 279.2 738.1z', fill: '#FFF' })
	          );

	        case 'yelp':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '50', height: '50', viewBox: '244.9 723.5 50 49.9' },
	            _react2.default.createElement('circle', { cx: '269.9', cy: '748.4', r: '25', fill: '#bc341f' }),
	            _react2.default.createElement('path', { d: 'M264 741.2c-1.1-1.8-2.2-3.5-3.2-5.3 -0.6-1-0.4-1.6 0.6-2.2 1.7-0.9 3.5-1.3 5.4-1.7 0.3-0.1 0.7-0.1 1-0.1 1.2-0.1 1.7 0.4 1.7 1.6 0.2 3.2 0.4 6.4 0.7 9.6 -0.1 0.9 0.2 1.8 0.1 2.8 -0.1 1.1-0.4 1.5-1.3 1.7 -0.8 0.2-1.2-0.5-1.6-1 -1-1.6-2-3.2-3-4.8C264.2 741.6 264.1 741.4 264 741.2z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M276 743.2c0.4-0.3 0.7-0.8 1-1.1 0.5-0.6 1.1-0.7 1.8-0.2 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.9 1.3 1.8 1.7 2.7 0.2 0.4 0.4 0.9 0.5 1.4 0.1 0.7-0.1 1.2-0.8 1.4 -2.3 0.7-4.7 1.3-7 1.8 -0.8 0.2-1.2-0.1-1.6-0.7 -0.4-0.6-0.3-1.2 0.1-1.8C273.8 746.4 275 744.8 276 743.2z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M257.7 751.5c0-1.1 0.1-2.1 0.3-3.1 0.2-1.1 0.9-1.5 1.9-1.1 2.2 0.9 4.4 1.8 6.6 2.7 0.6 0.3 0.9 0.8 0.8 1.4 0 0.6-0.3 1.1-0.9 1.3 -2.3 0.7-4.5 1.5-6.8 2.2 -0.9 0.3-1.4 0-1.7-0.9 0-0.2-0.1-0.3-0.1-0.5C257.7 752.8 257.7 752.2 257.7 751.5z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M272.7 754.6c0-1 0.9-1.7 1.9-1.4 2.2 0.7 4.4 1.5 6.6 2.2 1 0.4 1.3 1 0.9 2 -0.8 1.7-1.9 3.2-3.4 4.4 -0.8 0.7-1.5 0.6-2.1-0.3 -1.3-2-2.5-4-3.7-6.1C272.8 755.2 272.7 754.9 272.7 754.6z', fill: '#fff' }),
	            _react2.default.createElement('path', { d: 'M270.1 759.7c0 1.2 0 2.4 0 3.6 0 1-0.5 1.5-1.5 1.4 -1.9-0.2-3.7-0.9-5.3-2 -0.8-0.6-0.9-1.2-0.3-1.9 1.5-1.9 3.1-3.7 4.6-5.6 0.4-0.5 1-0.6 1.6-0.4 0.6 0.2 0.9 0.6 0.9 1.3 0 1.2 0 2.5 0 3.7C270.1 759.7 270.1 759.7 270.1 759.7z', fill: '#fff' })
	          );

	        case 'normal-lane':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', id: 'Layer_1', width: '52', height: '40', viewBox: '0 0 52.1 40' },
	            _react2.default.createElement('path', { d: 'M43.8 16.7c-1.4-6.3-4-8.5-4.1-8.6l-0.2-0.2H22.9l-0.2 0.3c-2.3 2.6-3.6 7.1-3.9 8.6 -1.2 0.4-2 1.5-2 2.8v5.8c0 1.7 1.3 3 3 3v4.3h3.5v-4.3h16.5v4.3h3.5V28.3c1.5-0.2 2.7-1.4 2.7-3V19.5C45.9 18.2 45 17.1 43.8 16.7zM23.6 9.4h15.4c0.5 0.6 2.2 2.7 3.3 7.1H20.3C20.8 14.9 21.8 11.5 23.6 9.4z', fill: '#292E47' }),
	            _react2.default.createElement('circle', { cx: '21', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('circle', { cx: '41.5', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '26', y: '20.6', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '26', y: '22.8', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '6.2', y: '6', width: '2.6', height: '28', fill: '#292E47' })
	          );

	        case 'ready-lane':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '52', height: '40', viewBox: '0 0 52.1 40' },
	            _react2.default.createElement('path', { d: 'M36.8 16.7c-1.4-6.3-4-8.5-4.1-8.6l-0.2-0.2H15.8l-0.2 0.3c-2.3 2.6-3.6 7.1-3.9 8.6 -1.2 0.4-2 1.5-2 2.8v5.8c0 1.7 1.3 3 3 3v4.3h3.5v-4.3h16.5v4.3h3.5v-4.4c1.5-0.2 2.7-1.4 2.7-3v-5.8C38.8 18.3 38 17.1 36.8 16.7zM16.5 9.4h15.4c0.5 0.6 2.2 2.7 3.3 7.1H13.3C13.7 14.9 14.8 11.5 16.5 9.4z', fill: '#292E47' }),
	            _react2.default.createElement('circle', { cx: '13.9', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('circle', { cx: '34.4', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '18.9', y: '20.7', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '18.9', y: '22.9', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '40.4', y: '12.4', width: '6.6', height: '3.2', fill: '#292E47' }),
	            _react2.default.createElement('rect', { x: '8.2', y: '34.7', width: '31.6', height: '3', fill: '#292E47' })
	          );

	        case 'sentry-lane':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '52', height: '40', viewBox: '0 0 52.1 40' },
	            _react2.default.createElement('path', { d: 'M38.8 16.7c-1.4-6.3-4-8.5-4.1-8.6l-0.2-0.2H17.9l-0.2 0.3c-2.3 2.6-3.6 7.1-3.9 8.6 -1.2 0.4-2 1.5-2 2.8v5.8c0 1.7 1.3 3 3 3v4.3h3.5v-4.3h16.5v4.3h3.5V28.4c1.5-0.2 2.7-1.4 2.7-3v-5.8C40.9 18.3 40 17.1 38.8 16.7zM18.6 9.4h15.4c0.5 0.6 2.2 2.7 3.3 7.1H15.3C15.8 14.9 16.8 11.5 18.6 9.4z', fill: '#292E47' }),
	            _react2.default.createElement('circle', { cx: '16', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('circle', { cx: '36.5', cy: '22.4', r: '2.2', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '21', y: '20.7', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '21', y: '22.9', width: '10.6', height: '1.4', fill: '#FFF' }),
	            _react2.default.createElement('rect', { x: '28.3', y: '12.4', width: '6.6', height: '3.2', fill: '#292E47' }),
	            _react2.default.createElement('rect', { x: '10.2', y: '34.7', width: '31.6', height: '3', fill: '#292E47' })
	          );

	        case 'normal-ped':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '52', height: '40', viewBox: '0 0 52.1 40' },
	            _react2.default.createElement('circle', { cx: '24.6', cy: '6.3', r: '3.3', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M31.8 34.8l-4.6-9.5 -1.9 5.1 3 6.1c0.3 0.7 1 1.1 1.8 1.1 0.3 0 0.6-0.1 0.9-0.2C31.9 37 32.3 35.8 31.8 34.8z', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M35.3 19.7l-8-6.8v5.2l5.5 4.6c0.4 0.3 0.8 0.5 1.3 0.5 0.6 0 1.1-0.2 1.5-0.7C36.3 21.7 36.2 20.4 35.3 19.7z', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M26.5 13.2c0 0 0 0 0 0 0-0.3-0.1-0.5-0.1-0.7 0 0 0 0 0 0 -0.1-0.2-0.2-0.5-0.4-0.6 0 0 0 0 0 0 0 0 0 0 0 0 -0.2-0.2-0.4-0.3-0.6-0.4 0 0 0 0 0 0 -0.2-0.1-0.5-0.1-0.7-0.1 0 0 0 0 0 0 0 0 0 0 0 0 -0.3 0-0.5 0.1-0.7 0.1 0 0 0 0 0 0 -0.2 0.1-0.5 0.3-0.6 0.4 0 0 0 0 0 0l-5.1 5.2v7.4c0 1.1 0.9 2 2 2 1.1 0 2-0.9 2-2v-5.8l0.6-0.6v6l-4.4 11c-0.4 1 0.1 2.2 1.1 2.6 0.2 0.1 0.5 0.1 0.7 0.1 0.8 0 1.5-0.5 1.8-1.2l4.7-11.7V13.2C26.5 13.2 26.5 13.2 26.5 13.2z', fill: '#292E47' })
	          );

	        case 'ready-ped':
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '52', height: '40', viewBox: '0 0 52.1 40' },
	            _react2.default.createElement('circle', { cx: '21.6', cy: '6.3', r: '3.3', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M29 35l-4.7-9.5 -1.9 5.2 3 6c0.3 0.7 1.1 1.1 1.8 1.1 0.3 0 0.6-0.1 0.9-0.2C29 37.2 29.4 36 29 35z', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M32.5 19.8l-8.1-6.8v5.2l5.5 4.7c0.4 0.3 0.8 0.5 1.3 0.5 0.6 0 1.1-0.2 1.5-0.7C33.4 21.8 33.3 20.5 32.5 19.8z', fill: '#292E47' }),
	            _react2.default.createElement('path', { d: 'M23.6 13.2c0 0 0 0 0 0 0-0.3-0.1-0.5-0.1-0.7 0 0 0 0 0 0 -0.1-0.2-0.3-0.5-0.4-0.6 0 0 0 0 0 0 0 0 0 0 0 0 -0.2-0.2-0.4-0.3-0.6-0.4 0 0 0 0 0 0 -0.2-0.1-0.5-0.1-0.7-0.1 0 0 0 0 0 0 0 0 0 0 0 0 -0.3 0-0.5 0.1-0.7 0.1 0 0 0 0 0 0 -0.2 0.1-0.5 0.3-0.6 0.4 0 0 0 0 0 0l-5.1 5.2v7.4c0 1.1 0.9 2 2 2 1.1 0 2-0.9 2-2v-5.8l0.6-0.6v6l-4.4 11c-0.4 1 0.1 2.2 1.1 2.6 0.2 0.1 0.5 0.1 0.7 0.1 0.8 0 1.5-0.5 1.8-1.2l4.7-11.7V13.2C23.6 13.2 23.6 13.2 23.6 13.2z', fill: '#292E47' }),
	            _react2.default.createElement('rect', { x: '32.6', y: '9.9', width: '6.4', height: '2.6', fill: '#292E47' })
	          );

	        default:
	          return _react2.default.createElement(
	            'svg',
	            { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	            _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	            _react2.default.createElement('path', { d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z', fill: '#fff' })
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderItems(this.props.network, this.props.className);
	    }
	  }]);

	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

	SVG.propTypes = {
	  background: _react2.default.PropTypes.string,
	  color: _react2.default.PropTypes.string,
	  network: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1Oa0i","vCenter":"style__vCenter___V9jBy","vCenterRel":"style__vCenterRel___3xytS","hCenter":"style__hCenter___9Wk6Y","inheritHeight":"style__inheritHeight___2lTtv","hideOverflow":"style__hideOverflow___3uDtP","icon-general-sprite":"style__icon-general-sprite___3Bwwe","background":"style__background___100HK"};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _block = __webpack_require__(36);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(42);

	var _block4 = _interopRequireDefault(_block3);

	var _string = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(45);

	var HomeSection = function (_React$Component) {
	  _inherits(HomeSection, _React$Component);

	  function HomeSection() {
	    _classCallCheck(this, HomeSection);

	    return _possibleConstructorReturn(this, (HomeSection.__proto__ || Object.getPrototypeOf(HomeSection)).apply(this, arguments));
	  }

	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;
	      var report = data.report;

	      var created = _lodash2.default.isArray(report) && report.length && report[0] ? report[0].created : '';
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, { data: data }),
	        _react2.default.createElement(_block4.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: style.lastUpdate },
	            'Reporte de Garitas actualizado hace ',
	            (0, _string.timeSince)(created)
	          )
	        )
	      );
	    }
	  }]);

	  return HomeSection;
	}(_react2.default.Component);

	exports.default = HomeSection;


	HomeSection.propTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _template = __webpack_require__(37);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'getTemplate',
	    value: function getTemplate(data) {
	      switch (data.toUpperCase()) {
	        case 'TIJUANA':
	          return _template2.default;
	        default:
	          return null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;
	      var report = data.report;

	      var Template = this.getTemplate(data.city);
	      return !_lodash2.default.isEmpty(data) ? _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(Template, { data: report })
	      ) : null;
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;


	Block1.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _clients = __webpack_require__(38);

	var _clients2 = _interopRequireDefault(_clients);

	var _string = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(41);

	var Template1 = function (_React$Component) {
	  _inherits(Template1, _React$Component);

	  function Template1() {
	    _classCallCheck(this, Template1);

	    return _possibleConstructorReturn(this, (Template1.__proto__ || Object.getPrototypeOf(Template1)).apply(this, arguments));
	  }

	  _createClass(Template1, [{
	    key: 'renderTime',
	    value: function renderTime(data, doAdjust) {
	      var addMinsFix = doAdjust ? 20 : 10;
	      var mins = parseInt(data, 10) || 0;
	      var adjustTime = mins + addMinsFix;
	      return (0, _string.minsToHrs)(adjustTime);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;

	      if (_lodash2.default.isArray(data) && data.length && data[0] && data[1] && data[2]) {
	        var port1 = data[0];
	        var port2 = data[1];
	        var port3 = data[2];

	        return _react2.default.createElement(
	          'div',
	          { className: style.report },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement('i', { className: style.clook })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'h2',
	                null,
	                (0, _string.toTitleCase)(port1.garita)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'h2',
	                null,
	                (0, _string.toTitleCase)(port2.garita)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.car }),
	                'Normal'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port1.content.car.normal.time, true)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port2 },
	                this.renderTime(port2.content.car.normal.time, true)
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: style.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.carReadyLane }),
	                'R.\xA0Lane'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port1.content.car.readyLine.time, false)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port2 },
	                this.renderTime(port2.content.car.readyLine.time, false)
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: style.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.carSentri }),
	                'Sentri'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port1.content.car.sentry.time, false)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port2 },
	                this.renderTime(port2.content.car.sentry.time, false)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row ' + style.pedestrianSection },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.pedestrian }),
	                'Normal'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port1.content.people.normal.time, true)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port2 },
	                this.renderTime(port2.content.people.normal.time, true)
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: style.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.pedestrianReadyLane }),
	                'R.\xA0Lane'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port1.content.people.readyLine.time, false)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port2 },
	                this.renderTime(port2.content.people.readyLine.time, false)
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: style.hr }),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-3' },
	              _react2.default.createElement(
	                'div',
	                { className: style.icon },
	                _react2.default.createElement('i', { className: style.pedestrian }),
	                'Pedwest'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-5' },
	              _react2.default.createElement(
	                'div',
	                { className: style.port1 },
	                this.renderTime(port3.content.people.normal.time, false)
	              )
	            )
	          ),
	          _react2.default.createElement(_clients2.default, null)
	        );
	      }
	      return null;
	    }
	  }]);

	  return Template1;
	}(_react2.default.Component);

	exports.default = Template1;


	Template1.propTypes = {
	  data: _react2.default.PropTypes.array.isRequired
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(39);

	var Client = function (_React$Component) {
	  _inherits(Client, _React$Component);

	  function Client() {
	    _classCallCheck(this, Client);

	    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this));

	    _this.state = {
	      showClient: false
	    };
	    _this.clients = [{
	      id: 'nutrirte',
	      title: 'Nutrirte: cambia tu vida HOY',
	      image: 'nutrirte.gif',
	      link: 'https://www.facebook.com/Nutrirte-281465582043299/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'sano',
	      title: 'Sano y Punto',
	      image: 'sano-y-punto.gif',
	      link: 'http://www.sanoypunto.com/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'smile',
	      title: 'Smile Dent',
	      image: 'smile-dent.gif',
	      link: 'https://www.facebook.com/smiledenttijuana',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'garden',
	      title: 'Garden Spa',
	      image: 'garden-spa.gif',
	      link: 'https://www.facebook.com/thegardenspa',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'Mayco',
	      title: 'Mayco Limpiadur&iacute;a',
	      image: 'mayco.gif',
	      link: 'https://www.facebook.com/maycolimpiaduria/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'ri',
	      title: 'Relaciones Inesperadas',
	      image: 'ri.gif',
	      link: 'https://www.facebook.com/RelacionesInesperadas/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'torrente',
	      title: 'Torrente',
	      image: 'torrente.gif',
	      link: 'https://www.facebook.com/TorrenteTJ/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'club54',
	      title: 'Club 54',
	      image: 'club54.gif',
	      link: 'https://www.facebook.com/club54grados/',
	      ends: '2017-05-30',
	      status: true
	    }, {
	      id: 'kids',
	      title: 'Kids Dent',
	      image: 'kids-dent.gif',
	      link: 'https://www.facebook.com/kidsdent.tijuana/',
	      ends: '2017-04-30',
	      status: true
	    }, {
	      id: 'electric',
	      title: 'Electric Coffee Roasters',
	      image: 'electric.gif',
	      link: 'https://www.facebook.com/ElectricCoffeeRoasters/',
	      ends: '2017-03-30',
	      status: true
	    }, {
	      id: 'hola',
	      title: 'Hola Bonita',
	      image: 'hola-bonita.gif',
	      link: 'http://holabonita.com.mx/',
	      ends: '2017-03-30',
	      status: true
	    }];
	    return _this;
	  }

	  _createClass(Client, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      /*eslint-disable */
	      this.setState({
	        showClient: true
	      });
	      /*eslint-enable */
	    }
	  }, {
	    key: 'getActiveClients',
	    value: function getActiveClients(data) {
	      var _this2 = this;

	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.filter(function (item) {
	          return item.status && _this2.isClientActive(item);
	        });
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      var item = e.currentTarget.getAttribute('data-item');
	      _gaUtilAdapter2.default.sendEvent('client', 'click', item);
	    }
	  }, {
	    key: 'isClientActive',
	    value: function isClientActive(data) {
	      var expiresOn = new Date(data.ends);
	      var today = new Date();
	      return today < expiresOn;
	    }
	  }, {
	    key: 'renderClient',
	    value: function renderClient() {
	      var activeClients = this.getActiveClients(this.clients);
	      if (_lodash2.default.isArray(activeClients) && activeClients.length) {
	        var index = Math.floor(Math.random() * activeClients.length);
	        var client = activeClients[index];
	        if (client) {
	          _gaUtilAdapter2.default.sendEvent('client', 'show', client.id);
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: client.link, title: client.title, target: '_blank', onClick: this.clickHandler, 'data-item': client.id },
	              _react2.default.createElement('img', { src: '/images/clients/' + client.image })
	            )
	          );
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.state.showClient ? _react2.default.createElement(
	        'div',
	        { className: style.client },
	        this.renderClient()
	      ) : null;
	    }
	  }]);

	  return Client;
	}(_react2.default.Component);

	exports.default = Client;

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"client":"style__client___3i79I"};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.minsToHrs = minsToHrs;
	exports.toTitleCase = toTitleCase;
	exports.timeSince = timeSince;
	exports.printTime = printTime;

	function printMinutes(data) {
	  if (data < 10) {
	    return '0' + data;
	  }
	  return data;
	}

	function minsToHrs(data) {
	  if (data) {
	    var hours = Math.floor(data / 60);
	    var minutes = data % 60;
	    return hours + ':' + printMinutes(minutes);
	  }
	  return data;
	}

	function toTitleCase(data) {
	  var response = data.replace(/_/g, ' ');
	  return response.replace(/\w\S*/g, function (txt) {
	    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  });
	}

	function timeSince(data) {
	  var seconds = Math.floor((new Date() - new Date(data)) / 1000);
	  var interval = Math.floor(seconds / 31536000);

	  if (interval >= 1) {
	    return interval + ' a\xF1o' + (interval > 1 ? 's' : '');
	  }
	  interval = Math.floor(seconds / 2592000);
	  if (interval >= 1) {
	    return interval + ' mes' + (interval > 1 ? 'es' : '');
	  }
	  interval = Math.floor(seconds / 86400);
	  if (interval >= 1) {
	    return interval + ' d\xEDa' + (interval > 1 ? 's' : '');
	  }
	  interval = Math.floor(seconds / 3600);
	  if (interval >= 1) {
	    return interval + ' hora' + (interval > 1 ? 's' : '');
	  }
	  interval = Math.floor(seconds / 60);
	  if (interval > 1) {
	    return interval + ' minutos';
	  }
	  return '1 minuto';
	}

	function printTime(value) {
	  var date = new Date(value);
	  var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	  if (hour < 10) {
	    hour = '0' + hour;
	  }
	  var mins = date.getMinutes();
	  if (mins < 10) {
	    mins = '0' + mins;
	  }
	  var period = date.getHours() > 12 ? 'PM' : 'AM';
	  return {
	    unity: date.getHours() === 1 || date.getHours() === 13,
	    print: hour + ':' + mins + ' ' + period
	  };
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3J7rq","vCenter":"style__vCenter___px7FK","vCenterRel":"style__vCenterRel___3-4Pc","hCenter":"style__hCenter___1FoV0","inheritHeight":"style__inheritHeight___2AId2","hideOverflow":"style__hideOverflow___33eUg","icon-general-sprite":"style__icon-general-sprite___2hbMj","report":"style__report___3oyH6","clook":"style__clook___2Z6j_","car":"style__car___I6XtV","carSentri":"style__carSentri___3O52I","carReadyLane":"style__carReadyLane___feZQo","pedestrian":"style__pedestrian___1pzB_","pedestrianReadyLane":"style__pedestrianReadyLane___1Bf3P","br":"style__br___LILTJ","hr":"style__hr___1P1Ee","icon":"style__icon___1LpsF","port1":"style__port1___33WuG","port2":"style__port2___1wOeD","times":"style__times___22Gjy","clookWrapper":"style__clookWrapper___1hPg4","pedestrianSection":"style__pedestrianSection___1a-SK","client":"style__client___2EPFN"};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Block2;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _gads = __webpack_require__(43);

	var _gads2 = _interopRequireDefault(_gads);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint max-len: [2, 500, 4] */
	var style = __webpack_require__(44);

	function Block2() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'container-fluid' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row ' + style.donuts },
	      _react2.default.createElement(_gads2.default, { client: 'ca-pub-2643588035417760', slot: '9117540736' })
	    )
	  );
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var display = false;

	var Gads = function (_React$Component) {
	  _inherits(Gads, _React$Component);

	  function Gads() {
	    _classCallCheck(this, Gads);

	    return _possibleConstructorReturn(this, (Gads.__proto__ || Object.getPrototypeOf(Gads)).apply(this, arguments));
	  }

	  _createClass(Gads, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (display) {
	        (window.adsbygoogle = window.adsbygoogle || []).push({});
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return display ? _react2.default.createElement('ins', { className: 'adsbygoogle', style: { display: 'block' }, 'data-ad-client': this.props.client, 'data-ad-slot': this.props.slot, 'data-ad-format': 'auto' }) : null;
	    }
	  }]);

	  return Gads;
	}(_react2.default.Component);

	exports.default = Gads;


	Gads.propTypes = {
	  client: _react2.default.PropTypes.string.isRequired,
	  slot: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"donuts":"style__donuts___xQ3Tf"};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___qougA","vCenter":"style__vCenter___2pche","vCenterRel":"style__vCenterRel___WRKiA","hCenter":"style__hCenter___GVDHq","inheritHeight":"style__inheritHeight___3vMr3","hideOverflow":"style__hideOverflow___DySF5","icon-general-sprite":"style__icon-general-sprite___3kaOy","lastUpdate":"style__lastUpdate___2KanV"};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(4);

	var _block = __webpack_require__(42);

	var _block2 = _interopRequireDefault(_block);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	var _requestUtil = __webpack_require__(12);

	var _requestUtil2 = _interopRequireDefault(_requestUtil);

	var _string = __webpack_require__(40);

	var _tweetsData = __webpack_require__(47);

	var _tweetsData2 = _interopRequireDefault(_tweetsData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(48);
	var enable = true;

	var ReporteUsuarioSection = function (_React$Component) {
	  _inherits(ReporteUsuarioSection, _React$Component);

	  function ReporteUsuarioSection() {
	    _classCallCheck(this, ReporteUsuarioSection);

	    var _this = _possibleConstructorReturn(this, (ReporteUsuarioSection.__proto__ || Object.getPrototypeOf(ReporteUsuarioSection)).call(this));

	    _this.state = {
	      tweets: []
	    };
	    return _this;
	  }

	  _createClass(ReporteUsuarioSection, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (enable) {
	        _requestUtil2.default.get('/user/report').then(function (results) {
	          if (_lodash2.default.isArray(results.entity) && results.entity.length) {
	            var newState = _lodash2.default.assign({}, _this2.state, {
	              tweets: results.entity
	            });
	            _this2.setState(newState);
	          }
	        });
	      } else {
	        // for testing purpose
	        /*eslint-disable */
	        var newState = _lodash2.default.assign({}, this.state, {
	          tweets: _tweetsData2.default
	        });
	        this.setState(newState);
	        /*eslint-enable */
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      _gaUtilAdapter2.default.sendEvent('survey', 'click', 'start');
	    }
	  }, {
	    key: 'renderTweets',
	    value: function renderTweets(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var className = index === 0 ? style.tweetFirst : style.tweet;
	          var date = new Date(item.created);
	          // adjust to Tijuana time
	          var time = (0, _string.printTime)(date.setHours(date.getHours() - 2));
	          return _react2.default.createElement(
	            'div',
	            { key: index, className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: className },
	                _react2.default.createElement(
	                  'div',
	                  { className: style.time },
	                  'Publicado a la',
	                  time.unity ? '' : 's',
	                  ' ',
	                  time.print
	                ),
	                _react2.default.createElement(
	                  'div',
	                  null,
	                  (0, _string.toTitleCase)(item.port),
	                  ' - ',
	                  (0, _string.toTitleCase)(item.entry),
	                  ' - ',
	                  (0, _string.toTitleCase)(item.type),
	                  ' ',
	                  _react2.default.createElement('br', null),
	                  (0, _string.toTitleCase)(item.place),
	                  ' ',
	                  _react2.default.createElement('br', null),
	                  'Llevo esperando ',
	                  (0, _string.toTitleCase)(item.time)
	                )
	              )
	            )
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.report },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: style.btn_report, to: '/encuesta', onClick: this.clickHandler },
	              '\xBFC\xF3mo te va en la l\xEDnea?',
	              _react2.default.createElement(
	                'span',
	                { className: style.subtitle },
	                'Rep\xF3rtalo aqu\xED y ayuda a los dem\xE1s'
	              )
	            )
	          ),
	          this.renderTweets(this.state.tweets),
	          _react2.default.createElement(_block2.default, null)
	        )
	      );
	    }
	  }]);

	  return ReporteUsuarioSection;
	}(_react2.default.Component);

	exports.default = ReporteUsuarioSection;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  port: 'otay',
	  type: 'carro',
	  entry: 'ready_lane',
	  place: 'en_el_parque_de_la_amistad',
	  time: '4_hrs',
	  created: '2016-08-26T18:47:28.395Z'
	}, {
	  port: 'san_ysidro',
	  type: 'carro',
	  entry: 'normal',
	  place: 'el_arco',
	  time: '15_mins',
	  created: '2016-08-30T14:53:59.147Z'
	}, {
	  port: 'san_ysidro',
	  type: 'peatonal',
	  entry: 'ready_lane',
	  place: 'las_tiendas',
	  time: '1_hra',
	  created: '2016-08-30T15:06:22.617Z'
	}];

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3Lxs4","vCenter":"style__vCenter___3kYLY","prevStep":"style__prevStep___10k1H","vCenterRel":"style__vCenterRel___1sfpl","hCenter":"style__hCenter___162iY","inheritHeight":"style__inheritHeight___2SoiS","hideOverflow":"style__hideOverflow___3NX7s","icon-general-sprite":"style__icon-general-sprite___2Xc4H","btn1":"style__btn1___FJ7-a","btn_report":"style__btn_report___2nR-t","btn_option":"style__btn_option___29b-3","btn_publish":"style__btn_publish___3K2oI","btn_entry":"style__btn_entry___1XRBP","report":"style__report___2lnJ4","reportHeader":"style__reportHeader___2a9Ex","subtitle":"style__subtitle___2kkxH","heading2":"style__heading2___326bl","heading3":"style__heading3___1E4Ul","triangleRight":"style__triangleRight___3QajC","closeButton":"style__closeButton___3Z7B_","tweet":"style__tweet___1n8tf","tweetFirst":"style__tweetFirst___e7Bwg","time":"style__time___mTgSW","recentReport":"style__recentReport___6VGDv"};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _gaUtilAdapter = __webpack_require__(21);

	var _gaUtilAdapter2 = _interopRequireDefault(_gaUtilAdapter);

	var _block = __webpack_require__(42);

	var _block2 = _interopRequireDefault(_block);

	var _questionEntry = __webpack_require__(50);

	var _questionEntry2 = _interopRequireDefault(_questionEntry);

	var _questionPlace = __webpack_require__(54);

	var _questionPlace2 = _interopRequireDefault(_questionPlace);

	var _questionTime = __webpack_require__(57);

	var _questionTime2 = _interopRequireDefault(_questionTime);

	var _questionReview = __webpack_require__(58);

	var _questionReview2 = _interopRequireDefault(_questionReview);

	var _string = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(53);

	var ReporteUsuarioSection = function (_React$Component) {
	  _inherits(ReporteUsuarioSection, _React$Component);

	  function ReporteUsuarioSection() {
	    _classCallCheck(this, ReporteUsuarioSection);

	    var _this = _possibleConstructorReturn(this, (ReporteUsuarioSection.__proto__ || Object.getPrototypeOf(ReporteUsuarioSection)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.renderBreadcrumb = _this.renderBreadcrumb.bind(_this);
	    _this.redirect = _this.redirect.bind(_this);
	    _this.state = {
	      view: 'QUESTION_ENTRY',
	      showBreadCrumb: ['QUESTION_PLACE', 'QUESTION_TIME']
	    };
	    return _this;
	  }

	  _createClass(ReporteUsuarioSection, [{
	    key: 'clickHandler',
	    value: function clickHandler(view, data) {
	      var label = '';
	      if (view === 'QUESTION_SAVE') {
	        this.redirect();
	        label = 'published';
	      } else {
	        if (data) {
	          var newState = _lodash2.default.assign({}, this.state, data, {
	            view: view
	          });
	          this.setState(newState);
	          label = Object.values(data).join(':').replace(/ /g, '_').toLowerCase();
	        }
	      }
	      _gaUtilAdapter2.default.sendEvent('survey', 'click', label.length > 3 ? label : 'back');
	    }
	  }, {
	    key: 'redirect',
	    value: function redirect() {
	      this.props.history.push('/reporte-usuario');
	    }
	  }, {
	    key: 'renderBreadcrumb',
	    value: function renderBreadcrumb() {
	      var _state = this.state,
	          showBreadCrumb = _state.showBreadCrumb,
	          view = _state.view;

	      var port = (0, _string.toTitleCase)(this.state.port || '');
	      var entry = (0, _string.toTitleCase)(this.state.entry || '');
	      var type = (0, _string.toTitleCase)(this.state.type || '');
	      var place = (0, _string.toTitleCase)(this.state.place || '');
	      return showBreadCrumb.indexOf(view.toUpperCase()) !== -1 ? _react2.default.createElement(
	        'div',
	        null,
	        port,
	        ' ',
	        _react2.default.createElement('span', { className: style.triangleRight }),
	        entry,
	        ' ',
	        _react2.default.createElement('span', { className: style.triangleRight }),
	        type,
	        ' ',
	        place ? _react2.default.createElement('span', { className: style.triangleRight }) : null,
	        place
	      ) : null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = void 0;
	      if (this.state.view === 'QUESTION_ENTRY') {
	        content = _react2.default.createElement(_questionEntry2.default, { clickHandler: this.clickHandler });
	      } else if (this.state.view === 'QUESTION_PLACE') {
	        content = _react2.default.createElement(_questionPlace2.default, { clickHandler: this.clickHandler, port: this.state.port, entry: this.state.entry, type: this.state.type });
	      } else if (this.state.view === 'QUESTION_TIME') {
	        content = _react2.default.createElement(_questionTime2.default, { clickHandler: this.clickHandler });
	      } else if (this.state.view === 'QUESTION_REVIEW') {
	        content = _react2.default.createElement(_questionReview2.default, { clickHandler: this.clickHandler, data: this.state });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: style.survey },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: style.reportHeader },
	            this.renderBreadcrumb(),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/reporte-usuario', className: style.closeButton, onClick: this.clickHandler },
	              '\xD7'
	            )
	          )
	        ),
	        content,
	        _react2.default.createElement(_block2.default, null)
	      );
	    }
	  }]);

	  return ReporteUsuarioSection;
	}(_react2.default.Component);

	exports.default = ReporteUsuarioSection;


	ReporteUsuarioSection.propTypes = {
	  history: _react2.default.PropTypes.any
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _clickOption = __webpack_require__(51);

	var _clickOption2 = _interopRequireDefault(_clickOption);

	var _svg = __webpack_require__(32);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(53);

	var QuestionPort = function (_React$Component) {
	  _inherits(QuestionPort, _React$Component);

	  function QuestionPort() {
	    _classCallCheck(this, QuestionPort);

	    var _this = _possibleConstructorReturn(this, (QuestionPort.__proto__ || Object.getPrototypeOf(QuestionPort)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionPort, [{
	    key: 'clickHandler',
	    value: function clickHandler(value) {
	      var bits = value.split('::');
	      var state = {
	        port: bits[0],
	        type: bits[1],
	        entry: bits[2]
	      };
	      this.props.clickHandler('QUESTION_PLACE', state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              'h2',
	              { className: style.heading2 },
	              '\xBFPor d\xF3nde cruzas?'
	            ),
	            _react2.default.createElement(
	              'h3',
	              { className: style.heading3 },
	              'San Ysidrio'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::carro::normal', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'normal-lane' }),
	              'Normal'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::carro::ready_lane', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'ready-lane' }),
	              'R. Lane'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::carro::sentri', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'sentry-lane' }),
	              'Sentri'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::peatonal::normal', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'normal-ped' }),
	              'Normal'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::peatonal::ready_lane', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'ready-ped' }),
	              'R. Lane'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'san_ysidro::peatonal::ped_west', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'normal-ped' }),
	              'Pedwest'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              'h3',
	              { className: style.heading3 },
	              'Otay'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'otay::carro::normal', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'normal-lane' }),
	              'Normal'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'otay::carro::ready_lane', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'ready-lane' }),
	              'R. Lane'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'otay::carro::sentri', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'sentry-lane' }),
	              'Sentri'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'otay::peatonal::normal', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'normal-ped' }),
	              'Normal'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { className: style.btn_entry, value: 'otay::peatonal::ready_lane', clickHandler: this.clickHandler },
	              _react2.default.createElement(_svg2.default, { network: 'ready-ped' }),
	              'R.Lane'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return QuestionPort;
	}(_react2.default.Component);

	exports.default = QuestionPort;


	QuestionPort.propTypes = {
	  clickHandler: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ClickOption = function (_React$Component) {
	  _inherits(ClickOption, _React$Component);

	  function ClickOption() {
	    _classCallCheck(this, ClickOption);

	    var _this = _possibleConstructorReturn(this, (ClickOption.__proto__ || Object.getPrototypeOf(ClickOption)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }

	  _createClass(ClickOption, [{
	    key: 'clickHandler',
	    value: function clickHandler() {
	      var value = this.props.value;

	      this.props.clickHandler(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;

	      return _react2.default.createElement(
	        'a',
	        { onClick: this.clickHandler, className: className || '', href: '#' },
	        this.props.children
	      );
	    }
	  }]);

	  return ClickOption;
	}(_react2.default.Component);

	exports.default = ClickOption;


	ClickOption.propTypes = {
	  children: _react2.default.PropTypes.any.isRequired,
	  value: _react2.default.PropTypes.string.isRequired,
	  clickHandler: _react2.default.PropTypes.func.isRequired,
	  className: _react2.default.PropTypes.string
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-fastclick");

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1Fkxv","vCenter":"style__vCenter___25Kv6","prevStep":"style__prevStep___DvMcx","vCenterRel":"style__vCenterRel___3kqNY","hCenter":"style__hCenter___2R96t","inheritHeight":"style__inheritHeight___4sBbG","hideOverflow":"style__hideOverflow___3Xmgq","icon-general-sprite":"style__icon-general-sprite___16WYn","btn1":"style__btn1___3m1Mq","btn_report":"style__btn_report___3H1tW","btn_option":"style__btn_option___3E6D-","btn_publish":"style__btn_publish___2nEqp","btn_entry":"style__btn_entry___3NuvN","report":"style__report___18bOt","reportHeader":"style__reportHeader___2gP-V","subtitle":"style__subtitle___27Fbx","heading2":"style__heading2___1GLQk","heading3":"style__heading3___1Bc9K","triangleRight":"style__triangleRight___1hbMD","closeButton":"style__closeButton___2vRwt","tweet":"style__tweet___34OIV","tweetFirst":"style__tweetFirst___2Ea-h","time":"style__time___2Z1G9"};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _placeOption = __webpack_require__(55);

	var _placeOption2 = _interopRequireDefault(_placeOption);

	var _placesData = __webpack_require__(56);

	var _placesData2 = _interopRequireDefault(_placesData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(53);

	var QuestionPlace = function (_React$Component) {
	  _inherits(QuestionPlace, _React$Component);

	  function QuestionPlace() {
	    _classCallCheck(this, QuestionPlace);

	    var _this = _possibleConstructorReturn(this, (QuestionPlace.__proto__ || Object.getPrototypeOf(QuestionPlace)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.backHandler = _this.backHandler.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionPlace, [{
	    key: 'clickHandler',
	    value: function clickHandler(value) {
	      var state = {
	        place: value
	      };
	      this.props.clickHandler('QUESTION_TIME', state);
	    }
	  }, {
	    key: 'backHandler',
	    value: function backHandler() {
	      this.props.clickHandler('QUESTION_ENTRY', {
	        entry: '',
	        port: '',
	        type: ''
	      });
	    }
	  }, {
	    key: 'renderQuestions',
	    value: function renderQuestions(port, type, entry) {
	      var data = _placesData2.default[port] && _placesData2.default[port][type] && _lodash2.default.isArray(_placesData2.default[port][type][entry]) ? _placesData2.default[port][type][entry] : [];
	      return _react2.default.createElement(_placeOption2.default, { data: data, btnClassName: style.btn_option, clickHandler: this.clickHandler });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          port = _props.port,
	          type = _props.type,
	          entry = _props.entry;

	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-12' },
	          _react2.default.createElement(
	            'h2',
	            { className: style.heading2 },
	            '\xBFA qu\xE9 altura estas?'
	          )
	        ),
	        this.renderQuestions(port, type, entry),
	        _react2.default.createElement(
	          'a',
	          { onClick: this.backHandler, className: style.prevStep },
	          'Volver'
	        )
	      );
	    }
	  }]);

	  return QuestionPlace;
	}(_react2.default.Component);

	exports.default = QuestionPlace;


	QuestionPlace.propTypes = {
	  clickHandler: _react2.default.PropTypes.func.isRequired,
	  port: _react2.default.PropTypes.string.isRequired,
	  entry: _react2.default.PropTypes.string.isRequired,
	  type: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _clickOption = __webpack_require__(51);

	var _clickOption2 = _interopRequireDefault(_clickOption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

	var PlaceOption = function (_React$Component) {
	  _inherits(PlaceOption, _React$Component);

	  function PlaceOption() {
	    _classCallCheck(this, PlaceOption);

	    var _this = _possibleConstructorReturn(this, (PlaceOption.__proto__ || Object.getPrototypeOf(PlaceOption)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }

	  _createClass(PlaceOption, [{
	    key: 'clickHandler',
	    value: function clickHandler(value) {
	      this.props.clickHandler(value);
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(data, btnClassName) {
	      var _this2 = this;

	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          return _react2.default.createElement(
	            _clickOption2.default,
	            { className: btnClassName, value: item, clickHandler: _this2.clickHandler, key: index },
	            item
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          data = _props.data,
	          btnClassName = _props.btnClassName;

	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12' },
	          this.renderItems(data, btnClassName)
	        )
	      );
	    }
	  }]);

	  return PlaceOption;
	}(_react2.default.Component);

	exports.default = PlaceOption;


	PlaceOption.propTypes = {
	  data: _react2.default.PropTypes.array.isRequired,
	  btnClassName: _react2.default.PropTypes.string,
	  clickHandler: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  san_ysidro: {
	    carro: {
	      ready_lane: ['En los postes amarillos', 'En el puente de las ballenas', 'Por el Palacio Municipal', 'Por el Hospital General', 'Por la 20 de noviembre'],
	      normal: ['Postes amarillos', 'Terminando las tienditas', 'Empezando las tienditas', 'Puente de las Banderas', 'Smart & Final'],
	      sentri: ['En el alto', 'La glorieta', 'Los semáforos']
	    },
	    peatonal: {
	      ready_lane: ['Antes de entrar al edificio', 'En el duty free', 'Empezando la curva'],
	      normal: ['Antes de entrar al edificio', 'En el duty free', 'Empezando la curva'],
	      ped_west: ['Terminando la escalera de caracol', 'Terminando el puente', 'A la mitad del puente', 'Empezando el puente']
	    }
	  },

	  otay: {
	    carro: {
	      ready_lane: ['A menos de 10 carros', 'Terminando el puente', 'En el Bellas Artes'],
	      normal: ['A menos de 10 carros', 'Terminando el puente', 'En el Bellas Artes'],
	      sentri: ['A menos de 10 carros', 'Terminando el puente', 'En el Bellas Artes']
	    },
	    peatonal: {
	      ready_lane: ['Antes de entrar al edificio'],
	      normal: ['Antes de entrar al edificio']
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _clickOption = __webpack_require__(51);

	var _clickOption2 = _interopRequireDefault(_clickOption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(53);

	var QuestionTime = function (_React$Component) {
	  _inherits(QuestionTime, _React$Component);

	  function QuestionTime() {
	    _classCallCheck(this, QuestionTime);

	    var _this = _possibleConstructorReturn(this, (QuestionTime.__proto__ || Object.getPrototypeOf(QuestionTime)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.backHandler = _this.backHandler.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionTime, [{
	    key: 'clickHandler',
	    value: function clickHandler(value) {
	      var state = {
	        time: value
	      };
	      this.props.clickHandler('QUESTION_REVIEW', state);
	    }
	  }, {
	    key: 'backHandler',
	    value: function backHandler() {
	      this.props.clickHandler('QUESTION_PLACE', {
	        place: ''
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'h2',
	          { className: style.heading2 },
	          '\xBFCu\xE1nto tiempo llevas esperando?'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '15_mins', clickHandler: this.clickHandler, className: style.btn_option },
	              '0:15'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '30_mins', clickHandler: this.clickHandler, className: style.btn_option },
	              '0:30'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '1_hr', clickHandler: this.clickHandler, className: style.btn_option },
	              '1:00'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '1:30_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '1:30'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '2_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '2:00'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '2:30_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '2:30'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '3_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '3:00'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '3:30_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '3:30'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '4_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '4:00'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { value: '4:30_hrs', clickHandler: this.clickHandler, className: style.btn_option },
	              '4:30'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          { onClick: this.backHandler, className: style.prevStep },
	          'Volver'
	        )
	      );
	    }
	  }]);

	  return QuestionTime;
	}(_react2.default.Component);

	exports.default = QuestionTime;


	QuestionTime.propTypes = {
	  clickHandler: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _loader = __webpack_require__(59);

	var _loader2 = _interopRequireDefault(_loader);

	var _clickOption = __webpack_require__(51);

	var _clickOption2 = _interopRequireDefault(_clickOption);

	var _requestUtil = __webpack_require__(12);

	var _requestUtil2 = _interopRequireDefault(_requestUtil);

	var _string = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(48);

	var QuestionReview = function (_React$Component) {
	  _inherits(QuestionReview, _React$Component);

	  function QuestionReview() {
	    _classCallCheck(this, QuestionReview);

	    var _this = _possibleConstructorReturn(this, (QuestionReview.__proto__ || Object.getPrototypeOf(QuestionReview)).call(this));

	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.backHandler = _this.backHandler.bind(_this);
	    _this.saveSurvey = _this.saveSurvey.bind(_this);
	    _this.renderInvalidResponse = _this.renderInvalidResponse.bind(_this);
	    _this.state = {
	      formMessage: '',
	      showLoading: false
	    };
	    return _this;
	  }

	  _createClass(QuestionReview, [{
	    key: 'clickHandler',
	    value: function clickHandler() {
	      this.saveSurvey();
	    }
	  }, {
	    key: 'backHandler',
	    value: function backHandler() {
	      this.props.clickHandler('QUESTION_TIME', {
	        time: ''
	      });
	    }
	  }, {
	    key: 'saveSurvey',
	    value: function saveSurvey() {
	      var _this2 = this;

	      var data = _lodash2.default.assign({}, this.props.data);
	      var url = '/user/report';
	      if (data && data.port && data.type && data.entry && data.place && data.time) {
	        // remove data not related to survey
	        delete data.view;
	        delete data.showBreadCrumb;
	        // todo: set city using variable
	        data.city = 'tijuana';
	        this.setState(_lodash2.default.assign({}, this.state, {
	          showLoading: true
	        }));
	        _requestUtil2.default.post(url, data).then(function (results) {
	          if (results && results.entity.status) {
	            _this2.props.clickHandler('QUESTION_SAVE');
	          } else {
	            _this2.renderInvalidResponse();
	          }
	        }, function () {
	          _this2.renderInvalidResponse();
	        });
	      } else {
	        this.setState({
	          formMessage: 'Favor de llenar todos los campos.',
	          showLoading: false,
	          status: false
	        });
	      }
	    }
	  }, {
	    key: 'renderInvalidResponse',
	    value: function renderInvalidResponse() {
	      this.setState({
	        formMessage: 'Lo sentimos, favor de intentar más tarde.',
	        showLoading: false,
	        status: false
	      });
	    }
	  }, {
	    key: 'renderPort',
	    value: function renderPort(data) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        (0, _string.toTitleCase)(data)
	      );
	    }
	  }, {
	    key: 'renderEntry',
	    value: function renderEntry(entry, type) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        (0, _string.toTitleCase)(entry),
	        ', ',
	        (0, _string.toTitleCase)(type)
	      );
	    }
	  }, {
	    key: 'renderPlace',
	    value: function renderPlace(data) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        (0, _string.toTitleCase)(data)
	      );
	    }
	  }, {
	    key: 'renderTime',
	    value: function renderTime(data) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        (0, _string.toTitleCase)(data)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;

	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            'Estos son tus resultados'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              'h2',
	              { className: style.heading2 },
	              '\xBFPor d\xF3nde cruzas?'
	            ),
	            _react2.default.createElement(
	              'h3',
	              { className: style.heading3 },
	              this.renderPort(data.port),
	              this.renderEntry(data.entry, data.type)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              'h2',
	              { className: style.heading2 },
	              '\xBFA qu\xE9 altura estas?'
	            ),
	            _react2.default.createElement(
	              'h3',
	              { className: style.heading3 },
	              this.renderPlace(data.place)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              'h2',
	              { className: style.heading2 },
	              '\xBFCu\xE1nto tiempo llevas esperando?'
	            ),
	            _react2.default.createElement(
	              'h3',
	              { className: style.heading3 },
	              this.renderTime(data.time)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            _react2.default.createElement(
	              _clickOption2.default,
	              { clickHandler: this.clickHandler, value: '', className: style.btn_publish },
	              'Publicar'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'a',
	          { onClick: this.backHandler, className: style.prevStep },
	          'Volver'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'span',
	            { className: this.state.status !== true ? 'text-danger' : 'text-success' },
	            this.state.formMessage
	          )
	        ),
	        this.state.showLoading ? _react2.default.createElement(_loader2.default, null) : null
	      );
	    }
	  }]);

	  return QuestionReview;
	}(_react2.default.Component);

	exports.default = QuestionReview;


	QuestionReview.propTypes = {
	  clickHandler: _react2.default.PropTypes.func.isRequired,
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(60);

	var Loader = function (_React$Component) {
	  _inherits(Loader, _React$Component);

	  function Loader() {
	    _classCallCheck(this, Loader);

	    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
	  }

	  _createClass(Loader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.wrapper },
	        _react2.default.createElement('div', { className: style.loader })
	      );
	    }
	  }]);

	  return Loader;
	}(_react2.default.Component);

	exports.default = Loader;

/***/ },
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1z8sB","vCenter":"style__vCenter___3iEWL","vCenterRel":"style__vCenterRel___IMEMa","hCenter":"style__hCenter___3Z_kY","inheritHeight":"style__inheritHeight___1lX1a","hideOverflow":"style__hideOverflow___2lxKJ","icon-general-sprite":"style__icon-general-sprite___yikUy","wrapper":"style__wrapper___2dK3R","loader":"style__loader___2-Uv7"};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint max-len: [2, 500, 4] */


	var _lodash = __webpack_require__(35);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _requestUtil = __webpack_require__(12);

	var _requestUtil2 = _interopRequireDefault(_requestUtil);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReportController = function () {
	  function ReportController() {
	    _classCallCheck(this, ReportController);

	    this.proxy = {};
	    this.requestsPerMinute = {};
	    this.updated = {};
	    this.apiUrl = _config2.default.get('api.url') + 'report?city=';
	  }

	  /*
	   * Checks if it's time to do an update.
	   * @param {date} lastUpdate When was last update
	   * @return {boolean} true when last udpate is minor than current time minus one minute, otherwise false
	  */


	  _createClass(ReportController, [{
	    key: 'doUpdate',
	    value: function doUpdate(lastUpdate) {
	      if (lastUpdate) {
	        var nowDate = new Date();
	        var minutesToWait = 1;
	        var lastNMinutes = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours(), nowDate.getMinutes() - minutesToWait, nowDate.getSeconds());
	        return lastUpdate < lastNMinutes ? true : false;
	      }
	      return true;
	    }

	    /*
	     * Get port report using proxy. Returns a promise which is resolved with the city report data.
	     * @param {string} city City name
	     * @return {promise} resolve(report)
	    */

	  }, {
	    key: 'getReport',
	    value: function getReport(city) {
	      var _this = this;

	      return new Promise(function (resolve, reject) {
	        var promises = [];
	        if (!_this.proxy[city] || _this.doUpdate(_this.updated[city])) {
	          console.log('Update report for ' + city + ', last update: ' + _this.updated[city] + ', new date: ' + new Date() + ', Request per Minute: ' + _this.requestsPerMinute[city]);
	          promises.push(_requestUtil2.default.get('' + _this.apiUrl + city));
	          _this.requestsPerMinute[city] = 1;
	        } else {
	          _this.requestsPerMinute[city]++;
	        }
	        Promise.all(promises).then(function (results) {
	          if (_lodash2.default.isArray(results) && results.length) {
	            _this.proxy[city] = results[0].entity;
	            _this.updated[city] = new Date();
	          }
	          resolve(_this.proxy[city]);
	        }, function () {
	          return resolve(_this.proxy[city]);
	        }).catch(function (error) {
	          return reject(error);
	        });
	      });
	    }
	  }]);

	  return ReportController;
	}();

	exports.default = ReportController;

/***/ }
/******/ ]);