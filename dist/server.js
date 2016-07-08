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

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	var _requestUtil = __webpack_require__(36);

	var _requestUtil2 = _interopRequireDefault(_requestUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint max-len: [2, 500, 4] */


	var app = (0, _express2.default)();

	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({
	  extended: false
	}));

	app.use(_express2.default.static('static'));

	app.use('/api/', _api2.default);

	app.get('/*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      (function () {
	        var city = 'TIJUANA';
	        var apiUrl = _config2.default.get('api.url') + 'report?city=' + city;

	        _requestUtil2.default.get(apiUrl).then(function (results) {
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
	          res.send('error');
	        });
	      })();
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DataWrapper).apply(this, arguments));
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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _createBrowserHistory = __webpack_require__(13);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _sitemap = __webpack_require__(14);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
/* 13 */
/***/ function(module, exports) {

	module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHandler = __webpack_require__(15);

	var _AppHandler2 = _interopRequireDefault(_AppHandler);

	var _home = __webpack_require__(24);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  items: {
	    component: _AppHandler2.default,
	    default: _home2.default,
	    children: [{
	      title: 'Inicio',
	      url: '/inicio',
	      component: _home2.default
	    }]
	  },
	  icons: [{
	    title: 'facebook',
	    url: 'https://www.facebook.com/garitacenter/'
	  }, {
	    title: 'twitter',
	    url: 'https://twitter.com/garitacenter'
	  }, {
	    title: 'googleplus',
	    url: 'https://plus.google.com/102476216230239359040'
	  }]
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _sitemap = __webpack_require__(14);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _menu = __webpack_require__(16);

	var _menu2 = _interopRequireDefault(_menu);

	var _footer = __webpack_require__(18);

	var _footer2 = _interopRequireDefault(_footer);

	var _scroll = __webpack_require__(22);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _menu3 = __webpack_require__(23);

	var _menu4 = _interopRequireDefault(_menu3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppHandler = function (_React$Component) {
	  _inherits(AppHandler, _React$Component);

	  function AppHandler(props, context) {
	    _classCallCheck(this, AppHandler);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppHandler).call(this, props, context));

	    _this.state = {
	      data: context.data ? context.data : window._data
	    };
	    return _this;
	  }

	  _createClass(AppHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollHandler(true);
	      // window.addEventListener('scroll', this.onScroll, false);
	      this.googleAnalytics();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollHandler();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.onScroll, false);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	      var offset = window.pageYOffset;
	      if (offset > 186) {
	        $('#menu_wrapper').addClass('navbar-fixed-top');
	      } else {
	        $('#menu_wrapper').removeClass('navbar-fixed-top');
	      }
	    }
	  }, {
	    key: 'googleAnalytics',
	    value: function googleAnalytics() {
	      /*eslint-disable */
	      (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	          (i[r].q = i[r].q || []).push(arguments);
	        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	      ga('create', 'UA-26633604-1', 'garitacenter.com');
	      ga('send', 'pageview');
	      /*eslint-enable */
	    }
	  }, {
	    key: 'scrollHandler',
	    value: function scrollHandler(isFirstTime) {
	      var location = this.props.location;

	      (0, _scroll2.default)(location);
	      if (!isFirstTime) {
	        var bits = location.pathname.split('/');
	        (0, _menu4.default)(bits[1] || 'inicio');
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      if ($('.navbar-header button').is(':visible')) {
	        $('.navbar-header button').click();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, { data: _this2.state.data });
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_menu2.default, null),
	        children,
	        _react2.default.createElement(_footer2.default, { items: _sitemap2.default.items.children, addresses: _sitemap2.default.addresses, icons: _sitemap2.default.icons })
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
/* 16 */
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

	var style = __webpack_require__(17);

	var MainMenu = function (_React$Component) {
	  _inherits(MainMenu, _React$Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainMenu).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'nav',
	        { className: style.navbar + ' navbar navbar-fixed-top', id: 'menu_wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6 col-xs-12' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: style.navbarBrand + ' navbar-brand', to: '/inicio' },
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
	              { className: 'col-sm-6 col-xs-12' },
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
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___cfX-h","vCenter":"style__vCenter___ZA14l","vCenterRel":"style__vCenterRel___1GkYt","hCenter":"style__hCenter___2Rj-i","inheritHeight":"style__inheritHeight___2LMcf","hideOverflow":"style__hideOverflow___3olA9","icon-general-sprite":"style__icon-general-sprite___8hFb_","navbar":"style__navbar___1jtlv","navbarBrand":"style__navbarBrand___2rqc0"};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _powered = __webpack_require__(19);

	var _powered2 = _interopRequireDefault(_powered);

	var _svg = __webpack_require__(21);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(20);

	var FooterAAA = function (_React$Component) {
	  _inherits(FooterAAA, _React$Component);

	  function FooterAAA() {
	    _classCallCheck(this, FooterAAA);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterAAA).apply(this, arguments));
	  }

	  _createClass(FooterAAA, [{
	    key: 'getIcons',
	    value: function getIcons(data) {
	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'div',
	          { key: index, className: 'col-xs-3 col-sm-12 col-md-4' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: item.url, className: style.sm_icon, id: item.url, target: '_blank' },
	            _react2.default.createElement(_svg2.default, { network: item.title, className: style[item.title] })
	          )
	        );
	      });
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
	                ' Es un servicio web con el objetivo de brindar el reporte de garitas entre México (Tijuana) y Estados Unidos (San Diego), en un formato amigable.'
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
	                ' nos interesa tu opinión, si eres de Tijuana y cruzas seguido, mándanos un mensaje sobre cómo podemos mejorar el reporte de garitas.'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement(
	                  'small',
	                  null,
	                  'El reporte de gartias de GaritaCenter es extraido de CBP. Los datos contenidos en este sitio son de carácter informativo.'
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
	                    { href: 'http://www.playami.com/', title: 'Directorio Playas de Tijuana', target: '_blank' },
	                    'Directorio Playas de Tijuana'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: 'http://www.hoytoca.me/', title: 'Hoy Toca Me', target: '_blank' },
	                    'Educación Sexual'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: 'http://ciudadtijuana.info/', title: 'Ciudad Tijuana', target: '_blank' },
	                    'Ciudad Tijuana'
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
	  items: _react2.default.PropTypes.array.isRequired,
	  addresses: _react2.default.PropTypes.array,
	  icons: _react2.default.PropTypes.array
	};

/***/ },
/* 19 */
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

	var style = __webpack_require__(20);

	var Powered = function (_React$Component) {
	  _inherits(Powered, _React$Component);

	  function Powered() {
	    _classCallCheck(this, Powered);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Powered).apply(this, arguments));
	  }

	  _createClass(Powered, [{
	    key: 'render',
	    value: function render() {
	      var data = [{
	        name: 'POOL',
	        url: 'http://somospool.com',
	        title: 'somos pool'
	      }, {
	        name: 'MINT',
	        url: 'http://mintitmedia.com',
	        title: 'Diseño y Desarrollo Web en Tijuana'
	      }];

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
	              'Todos los derechos reservados © GaritaCenter'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Un proyecto de: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[1].url, title: data[1].title, target: '_blank' },
	                data[1].name
	              ),
	              '   Diseño por: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[0].url, title: data[0].title, target: '_blank' },
	                data[0].name
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
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___24X-f","vCenter":"style__vCenter___rkH6k","vCenterRel":"style__vCenterRel___W_SE5","hCenter":"style__hCenter___rq5W3","inheritHeight":"style__inheritHeight___IbmOF","hideOverflow":"style__hideOverflow___3nmjb","icon-general-sprite":"style__icon-general-sprite___bVUR0","footerWrapper":"style__footerWrapper___zbtoF","container":"style__container___2PqEc","sitemap":"style__sitemap___2b9Al","facebook":"style__facebook___39dVV","twitter":"style__twitter___1oyfA","pinterest":"style__pinterest___2_EXF","instagram":"style__instagram___1nFr4","google":"style__google___3VUw5","list":"style__list___2_d4H","contact_info":"style__contact_info___31Ajw","powered":"style__powered___2okxk","serviceTitle":"style__serviceTitle___22DP1"};

/***/ },
/* 21 */
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVG).apply(this, arguments));
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
	            { xmlns: 'http://www.w3.org/2000/svg', width: '50', height: '50', viewBox: '0 0 50 50' },
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
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint max-len: [2, 600, 4] */
	var scropllInProgress = false;

	function getScrollTo(section, elementID) {
	  var topElements = ['inicio', 'nosotros', 'equipo', 'servicios', 'contacto'];
	  if (topElements.indexOf(elementID) !== -1 || section === 'contacto') {
	    return 0;
	  }
	  return $('#' + elementID).offset().top - 220;
	}

	exports.default = function (location) {
	  // todo: get topElements from sitemap and improve exceptions "elementID"
	  var bits = location.pathname.split('/');
	  var elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
	  if ($('.menu_trigger').is(':visible') && bits.length === 1) {
	    elementID = 'inicio';
	  }
	  if (bits[1] === 'contacto') {
	    elementID = 'contacto';
	  }
	  if ($('#' + elementID).length && !scropllInProgress) {
	    scropllInProgress = true;
	    var scrollTo = getScrollTo(bits[1], elementID);
	    var srolltime = 100;
	    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
	    $(rootTag).animate({
	      scrollTop: scrollTo
	    }, srolltime, 'swing', function () {
	      scropllInProgress = false;
	    });
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (elementID) {
	  $('.navbar-nav li.active').removeClass('active');
	  $('.navbar-nav a#' + elementID).parent().addClass('active');
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(25);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(32);

	var _block4 = _interopRequireDefault(_block3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	// import Block3 from './block3';
	// <Block3 />
	var style = __webpack_require__(35);

	var HomeSection = function (_React$Component) {
	  _inherits(HomeSection, _React$Component);

	  function HomeSection() {
	    _classCallCheck(this, HomeSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeSection).apply(this, arguments));
	  }

	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;

	      return _react2.default.createElement(
	        'div',
	        { className: style.mainWrapper },
	        _react2.default.createElement(_block2.default, { data: data }),
	        _react2.default.createElement(_block4.default, null)
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(26);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _template = __webpack_require__(27);

	var _template2 = _interopRequireDefault(_template);

	var _string = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(31);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block1).apply(this, arguments));
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

	      var report = JSON.parse(data.report);
	      var created = report[0].created;
	      var Template = this.getTemplate(data.city);
	      return !_lodash2.default.isEmpty(data) ? _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'pull-right' },
	          _react2.default.createElement(
	            'div',
	            { className: style.lastUpdate },
	            'Reporte de Garitas actualizado hace ',
	            (0, _string.timeSince)(created),
	            ' minutos'
	          )
	        ),
	        _react2.default.createElement('br', { className: 'clearfix' }),
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("lodash");

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

	var _report = __webpack_require__(28);

	var _report2 = _interopRequireDefault(_report);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(30);

	var Template1 = function (_React$Component) {
	  _inherits(Template1, _React$Component);

	  function Template1() {
	    _classCallCheck(this, Template1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Template1).apply(this, arguments));
	  }

	  _createClass(Template1, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;

	      return _react2.default.createElement(
	        'div',
	        { className: style.report },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('hr', { className: style.customHr })
	        ),
	        _react2.default.createElement(_report2.default, { data: data[0] }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_report2.default, { data: data[1] })
	      );
	    }
	  }]);

	  return Template1;
	}(_react2.default.Component);

	exports.default = Template1;


	Template1.propTypes = {
	  data: _react2.default.PropTypes.array.isRequired
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _string = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(30);

	var Report1 = function (_React$Component) {
	  _inherits(Report1, _React$Component);

	  function Report1() {
	    _classCallCheck(this, Report1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Report1).apply(this, arguments));
	  }

	  _createClass(Report1, [{
	    key: 'render',
	    value: function render() {
	      var _props$data = this.props.data;
	      var content = _props$data.content;
	      var garita = _props$data.garita;
	      var car = content.car;
	      var people = content.people;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-12' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Garita de ',
	              (0, _string.toTitleCase)(garita)
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row ' + style.headers },
	          _react2.default.createElement('div', { className: 'col-xs-1' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2 col-sm-2' },
	            _react2.default.createElement('i', { className: style.car }),
	            'Normal'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            _react2.default.createElement('i', { className: style.carSentri }),
	            'Sentri'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            _react2.default.createElement('i', { className: style.carReadyLane }),
	            'R. Lane'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            _react2.default.createElement('i', { className: style.pedestrian }),
	            'Normal'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            _react2.default.createElement('i', { className: style.pedestrianSentri }),
	            'Sentry'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row ' + style.times },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              'div',
	              { className: style.clookWrapper },
	              _react2.default.createElement('i', { className: style.clook })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2 col-sm-2' },
	            (0, _string.minsToHrs)(car.normal.time)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            (0, _string.minsToHrs)(car.sentry.time)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            (0, _string.minsToHrs)(car.readyLine.time)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            (0, _string.minsToHrs)(people.normal.time)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-2' },
	            (0, _string.minsToHrs)(people.readyLine.time)
	          )
	        )
	      );
	    }
	  }]);

	  return Report1;
	}(_react2.default.Component);

	exports.default = Report1;


	Report1.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.minsToHrs = minsToHrs;
	exports.toTitleCase = toTitleCase;
	exports.timeSince = timeSince;

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

	  if (interval > 1) {
	    return interval + ' años';
	  }
	  interval = Math.floor(seconds / 2592000);
	  if (interval > 1) {
	    return interval + ' meses';
	  }
	  interval = Math.floor(seconds / 86400);
	  if (interval > 1) {
	    return interval + ' días';
	  }
	  interval = Math.floor(seconds / 3600);
	  if (interval > 1) {
	    return interval + ' horas';
	  }
	  interval = Math.floor(seconds / 60);
	  if (interval > 1) {
	    return interval + ' minutos';
	  }
	  return Math.floor(seconds) + ' segundos';
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3J7rq","vCenter":"style__vCenter___px7FK","vCenterRel":"style__vCenterRel___3-4Pc","hCenter":"style__hCenter___1FoV0","inheritHeight":"style__inheritHeight___2AId2","hideOverflow":"style__hideOverflow___33eUg","icon-general-sprite":"style__icon-general-sprite___2hbMj","report":"style__report___3oyH6","clook":"style__clook___2Z6j_","car":"style__car___I6XtV","carSentri":"style__carSentri___3O52I","carReadyLane":"style__carReadyLane___feZQo","pedestrian":"style__pedestrian___1pzB_","pedestrianSentri":"style__pedestrianSentri___1ZZJp","headers":"style__headers___InMaR","times":"style__times___22Gjy","clookWrapper":"style__clookWrapper___1hPg4","customHr":"style__customHr___2O_Nf"};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1IAv0","vCenter":"style__vCenter___3op1c","vCenterRel":"style__vCenterRel___3rmpk","hCenter":"style__hCenter___bN1_x","inheritHeight":"style__inheritHeight___3EV0T","hideOverflow":"style__hideOverflow___1jYcy","icon-general-sprite":"style__icon-general-sprite___1yG_a","title":"style__title___2u_GP","lastUpdate":"style__lastUpdate___37Mwn"};

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

	var _gads = __webpack_require__(33);

	var _gads2 = _interopRequireDefault(_gads);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(34);
	// import Loader from '../../../elements/loader';

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2(args) {
	    _classCallCheck(this, Block2);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Block2).call(this, args));

	    _this.state = {
	      showLoader: true
	    };
	    return _this;
	  }

	  _createClass(Block2, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // window.adsbygoogle = [];
	      /*eslint-disable */
	      // this.setState({
	      //   showLoader: false,
	      // });
	      /*eslint-enable */
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // { this.state.showLoader ? <Loader /> : <Gads client="ca-pub-2643588035417760" slot="9117540736" /> }
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row ' + style.ads },
	          _react2.default.createElement(_gads2.default, { client: 'ca-pub-2643588035417760', slot: '9117540736' })
	        )
	      );
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;

/***/ },
/* 33 */
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


	var Gads = function (_React$Component) {
	  _inherits(Gads, _React$Component);

	  function Gads() {
	    _classCallCheck(this, Gads);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gads).apply(this, arguments));
	  }

	  _createClass(Gads, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (window.adsbygoogle = window.adsbygoogle || []).push({});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('ins', { className: 'adsbygoogle', style: { display: 'block' }, 'data-ad-client': this.props.client, 'data-ad-slot': this.props.slot, 'data-ad-format': 'auto' });
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
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ads":"style__ads___14d7M"};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainWrapper":"style__mainWrapper___12ofC"};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _request = __webpack_require__(37);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestUtil = function () {
	  function RequestUtil() {
	    _classCallCheck(this, RequestUtil);
	  }

	  _createClass(RequestUtil, null, [{
	    key: 'get',
	    value: function get(url) {
	      return new Promise(function (resolve, reject) {
	        (0, _request2.default)(url, function (error, response, html) {
	          if (error) {
	            reject(error);
	          } else {
	            resolve(html);
	          }
	        });
	      });
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
	      return new Promise(function (resolve, reject) {
	        (0, _request2.default)({
	          url: url,
	          method: 'POST',
	          json: data
	        }, function (error, response, body) {
	          if (!error && response.statusCode === 201) {
	            resolve(body);
	          } else {
	            reject(error || body);
	          }
	        });
	      });
	    }
	  }]);

	  return RequestUtil;
	}();

	exports.default = RequestUtil;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ }
/******/ ]);