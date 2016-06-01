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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /* eslint max-len: [2, 500, 4] */


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
	      var props = {};
	      var content = (0, _server.renderToString)(_react2.default.createElement(
	        _dataWrapper2.default,
	        { data: props },
	        _react2.default.createElement(_reactRouter.RoutingContext, renderProps)
	      ));
	      res.render('index', { content: content, props: props });
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
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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

	var _home = __webpack_require__(28);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(30);

	var _about2 = _interopRequireDefault(_about);

	var _services = __webpack_require__(32);

	var _services2 = _interopRequireDefault(_services);

	var _contact = __webpack_require__(34);

	var _contact2 = _interopRequireDefault(_contact);

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
	      title: 'Nosotros',
	      url: '/nosotros',
	      component: _about2.default
	    }, {
	      title: 'Servicios',
	      url: '/servicios',
	      component: _services2.default
	    }, {
	      title: 'Contacto',
	      url: '/contacto',
	      component: _contact2.default
	    }]
	  },
	  icons: [{
	    title: 'facebook',
	    url: 'https://www.facebook.com/'
	  }],
	  addresses: [{
	    title: 'Tijuana',
	    tel: '(664) 634-1615 / 684-7425'
	  }, {
	    title: 'Mexicali',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Ensenada',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Farmacia de la Piel',
	    tel: '(664) 684-8288'
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

	var _scroll = __webpack_require__(26);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _menu3 = __webpack_require__(27);

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
	      data: context.data ? context.data : {}
	    };
	    return _this;
	  }

	  _createClass(AppHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollHandler(true);
	      window.addEventListener('scroll', this.onScroll, false);
	      // this.googleAnalytics();
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
	      // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	      // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	      // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	      // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	      // ga('create', 'UA--', 'auto');
	      // ga('send', 'pageview');
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
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_menu2.default, { items: _sitemap2.default.items.children, icons: _sitemap2.default.icons, onClick: this.clickHandler }),
	        this.props.children,
	        _react2.default.createElement(_footer2.default, { items: _sitemap2.default.items.children, addresses: _sitemap2.default.addresses })
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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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

	var style = process.env.TIER === 'FE' ? __webpack_require__(17) : {};

	var MainMenu = function (_React$Component) {
	  _inherits(MainMenu, _React$Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainMenu).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: 'getItems',
	    value: function getItems(data) {
	      var _this2 = this;

	      return data.map(function (item, index) {
	        var title = item.title;
	        var url = item.url;

	        var elementID = url.replace('/', '');
	        var className = style.navbarNavAnchor;
	        var onClick = _this2.props.onClick;

	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: url, className: className, id: elementID, onClick: onClick },
	            title
	          )
	        );
	      });
	    }
	  }, {
	    key: 'getIcons',
	    value: function getIcons(data) {
	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement('a', { href: item.url, className: style[item.title], id: item.url, target: '_blank' })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      /*eslint-disable */
	      return _react2.default.createElement(
	        'nav',
	        { className: style.navbarDefault + ' navbar navbar-default', id: 'menu_wrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: style.navbarHeader + ' navbar-header' },
	            _react2.default.createElement(
	              'button',
	              { type: 'button', className: 'navbar-toggle collapsed menu_trigger', 'data-toggle': 'collapse', 'data-target': '#mainmenu', 'aria-expanded': 'false' },
	              _react2.default.createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' })
	            ),
	            _react2.default.createElement(_reactRouter.Link, { className: style.navbarBrand + ' navbar-brand', to: '/inicio' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: style.navbarCollapse + ' collapse navbar-collapse', id: 'mainmenu' },
	            _react2.default.createElement(
	              'ul',
	              { className: style.socialNetwork },
	              this.getIcons(this.props.icons)
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: style.navbarNav + ' nav navbar-nav' },
	              this.getItems(this.props.items)
	            )
	          )
	        )
	      );
	      /*eslint-enable */
	    }
	  }]);

	  return MainMenu;
	}(_react2.default.Component);

	exports.default = MainMenu;


	MainMenu.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  icons: _react2.default.PropTypes.array,
	  location: _react2.default.PropTypes.any,
	  onClick: _react2.default.PropTypes.func.isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___cfX-h","sm_icon":"style__sm_icon___3hlQn","facebook":"style__facebook___5X5oX","vCenter":"style__vCenter___ZA14l","navbarBrand":"style__navbarBrand___2rqc0","navbarNavAnchor":"style__navbarNavAnchor___37QYF","vCenterRel":"style__vCenterRel___1GkYt","hCenter":"style__hCenter___2Rj-i","inheritHeight":"style__inheritHeight___2LMcf","hideOverflow":"style__hideOverflow___3olA9","icon-sprites":"style__icon-sprites___1xY5y","navbarDefault":"style__navbarDefault___aolZK","navbarHeader":"style__navbarHeader___2FrdS","navbarNav":"style__navbarNav___1r3v1","navbarCollapse":"style__navbarCollapse___3blFh","socialNetwork":"style__socialNetwork___ZI__H"};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _brand = __webpack_require__(19);

	var _brand2 = _interopRequireDefault(_brand);

	var _powered = __webpack_require__(21);

	var _powered2 = _interopRequireDefault(_powered);

	var _addresses = __webpack_require__(22);

	var _addresses2 = _interopRequireDefault(_addresses);

	var _sitemap = __webpack_require__(23);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _services = __webpack_require__(24);

	var _services2 = _interopRequireDefault(_services);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

	var FooterAAA = function (_React$Component) {
	  _inherits(FooterAAA, _React$Component);

	  function FooterAAA() {
	    _classCallCheck(this, FooterAAA);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterAAA).apply(this, arguments));
	  }

	  _createClass(FooterAAA, [{
	    key: 'render',
	    value: function render() {
	      var addresses = this.props.addresses;


	      return _react2.default.createElement(
	        'div',
	        { className: style.footerWrapper },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(_brand2.default, null),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-2' },
	              _react2.default.createElement(_sitemap2.default, { data: this.props.items })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-10 ' + style.leftBorder },
	              _react2.default.createElement(_services2.default, null),
	              _react2.default.createElement(_addresses2.default, { data: addresses })
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
	  addresses: _react2.default.PropTypes.array
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

	var FooterTop = function (_React$Component) {
	  _inherits(FooterTop, _React$Component);

	  function FooterTop() {
	    _classCallCheck(this, FooterTop);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterTop).apply(this, arguments));
	  }

	  _createClass(FooterTop, [{
	    key: 'render',
	    value: function render() {
	      var fbLink = 'https://www.facebook.com/InterbrokersSeguros/';
	      return _react2.default.createElement(
	        'div',
	        { className: 'row ' + style.brand },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-8' },
	          _react2.default.createElement(
	            'div',
	            { className: style.pad45 },
	            _react2.default.createElement(_reactRouter.Link, { className: style.logo, to: '/inicio' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12 col-sm-4' },
	          _react2.default.createElement(
	            'a',
	            { className: style.facebook, href: fbLink, title: 'Lasermedica en Facebook', target: '_blank' },
	            'Síguenos en'
	          )
	        )
	      );
	    }
	  }]);

	  return FooterTop;
	}(_react2.default.Component);

	exports.default = FooterTop;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___24X-f","vCenter":"style__vCenter___rkH6k","facebook":"style__facebook___39dVV","vCenterRel":"style__vCenterRel___W_SE5","hCenter":"style__hCenter___rq5W3","inheritHeight":"style__inheritHeight___IbmOF","hideOverflow":"style__hideOverflow___3nmjb","icon-sprites":"style__icon-sprites___2GHz5","logo":"style__logo___cJ3xP","footerWrapper":"style__footerWrapper___zbtoF","brand":"style__brand___1i--U","sitemap":"style__sitemap___2b9Al","pad30":"style__pad30___qxXET","serviceTitle":"style__serviceTitle___22DP1","serviceElement":"style__serviceElement___2mBih","leftBorder":"style__leftBorder___134Rw","contactBlock":"style__contactBlock___3UFvQ","addresses":"style__addresses___3X2Na","powered":"style__powered___2okxk"};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

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
	              'Todos los derechos reservados © Lasermedica'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Un proyecto de: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[0].url, title: data[0].title, target: '_blank' },
	                data[0].name
	              ),
	              '   Código por: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[1].url, title: data[1].title, target: '_blank' },
	                data[1].name
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

	var Addresses = function (_React$Component) {
	  _inherits(Addresses, _React$Component);

	  function Addresses() {
	    _classCallCheck(this, Addresses);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Addresses).apply(this, arguments));
	  }

	  _createClass(Addresses, [{
	    key: 'renderAddress',
	    value: function renderAddress(item, index) {
	      return _react2.default.createElement(
	        'div',
	        { className: style.addresses + ' col-xs-12 col-sm-3', key: index },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h4',
	            null,
	            item.title,
	            ':'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            item.tel
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var itemsEl = this.props.data.map(function (item, index) {
	        return _this2.renderAddress(item, index);
	      });

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
	              _reactRouter.Link,
	              { className: style.contactBlock, to: 'contacto', title: 'Contáctanos' },
	              'Contáctanos'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          itemsEl
	        )
	      );
	    }
	  }]);

	  return Addresses;
	}(_react2.default.Component);

	exports.default = Addresses;


	Addresses.propTypes = {
	  data: _react2.default.PropTypes.array
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

	var SiteMap = function (_React$Component) {
	  _inherits(SiteMap, _React$Component);

	  function SiteMap() {
	    _classCallCheck(this, SiteMap);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SiteMap).apply(this, arguments));
	  }

	  _createClass(SiteMap, [{
	    key: 'getItems',
	    value: function getItems(data) {
	      var _this2 = this;

	      var items = data.map(function (item, index) {
	        var children = item.children ? _this2.getItems(item.children) : null;

	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: item.url },
	            item.title
	          ),
	          children
	        );
	      }, this);
	      return _react2.default.createElement(
	        'div',
	        { className: 'row ' + style.sitemap },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-12 ' + style.pad30 },
	          _react2.default.createElement(
	            'ul',
	            null,
	            items
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.getItems(this.props.data);
	    }
	  }]);

	  return SiteMap;
	}(_react2.default.Component);

	exports.default = SiteMap;


	SiteMap.propTypes = {
	  data: _react2.default.PropTypes.array.isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _lodash = __webpack_require__(25);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import dbServices from '../../../sections/services/db';

	var style = process.env.TIER === 'FE' ? __webpack_require__(20) : {};

	var Services = function (_React$Component) {
	  _inherits(Services, _React$Component);

	  function Services() {
	    _classCallCheck(this, Services);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Services).apply(this, arguments));
	  }

	  _createClass(Services, [{
	    key: 'getServicesData',
	    value: function getServicesData(data) {
	      var getItems = function getItems(children) {
	        var i = 0;
	        var len = children.length;
	        for (; i < len; i++) {
	          if (children[i].type.toUpperCase() === 'LIST') {
	            return children[i].children;
	          }
	        }
	      };

	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item) {
	          return {
	            href: item.href,
	            title: item.title,
	            items: getItems(item.children)
	          };
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'renderServices',
	    value: function renderServices(data) {
	      var renderServiceChildren = function renderServiceChildren(href, items) {
	        var className = items.length > 5 ? 'col-xs-12 col-md-6' : 'col-sm-12';
	        return items.map(function (service, index) {
	          return _react2.default.createElement(
	            'div',
	            { className: className + ' ' + style.serviceElement, key: index },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: href + service.href, title: service.title },
	                service.title
	              )
	            )
	          );
	        });
	      };
	      var servicesEl = data.map(function (item, index) {
	        var childrenEl = renderServiceChildren(item.href, item.items);
	        return _react2.default.createElement(
	          'div',
	          { className: 'col-sm-4', key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: style.serviceTitle, to: item.href, title: item.title },
	            item.title
	          ),
	          childrenEl
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        servicesEl
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var servicesData = []; // this.getServicesData(dbServices);

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.renderServices(servicesData)
	      );
	    }
	  }]);

	  return Services;
	}(_react2.default.Component);

	exports.default = Services;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeSection = function (_React$Component) {
	  _inherits(HomeSection, _React$Component);

	  function HomeSection() {
	    _classCallCheck(this, HomeSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeSection).apply(this, arguments));
	  }

	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null)
	      );
	    }
	  }]);

	  return HomeSection;
	}(_react2.default.Component);

	exports.default = HomeSection;

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block1).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'bloque1home'
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

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

	var _block = __webpack_require__(31);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutSection = function (_React$Component) {
	  _inherits(AboutSection, _React$Component);

	  function AboutSection() {
	    _classCallCheck(this, AboutSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutSection).apply(this, arguments));
	  }

	  _createClass(AboutSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null)
	      );
	    }
	  }]);

	  return AboutSection;
	}(_react2.default.Component);

	exports.default = AboutSection;

/***/ },
/* 31 */
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

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block1).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'bloque1about'
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

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

	var _block = __webpack_require__(33);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ServicesSection = function (_React$Component) {
	  _inherits(ServicesSection, _React$Component);

	  function ServicesSection() {
	    _classCallCheck(this, ServicesSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ServicesSection).apply(this, arguments));
	  }

	  _createClass(ServicesSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null)
	      );
	    }
	  }]);

	  return ServicesSection;
	}(_react2.default.Component);

	exports.default = ServicesSection;

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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block1).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'bloque1services'
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

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

	var _block = __webpack_require__(35);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactSection = function (_React$Component) {
	  _inherits(ContactSection, _React$Component);

	  function ContactSection() {
	    _classCallCheck(this, ContactSection);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactSection).apply(this, arguments));
	  }

	  _createClass(ContactSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null)
	      );
	    }
	  }]);

	  return ContactSection;
	}(_react2.default.Component);

	exports.default = ContactSection;

/***/ },
/* 35 */
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

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block1).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'bloque1contacto'
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

/***/ }
/******/ ]);