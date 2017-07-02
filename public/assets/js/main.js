/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ModalityCarousel = __webpack_require__(1);
	
	var _ModalityCarousel2 = _interopRequireDefault(_ModalityCarousel);
	
	var _ModalityContent = __webpack_require__(2);
	
	var _ModalityContent2 = _interopRequireDefault(_ModalityContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Init Modality Carousel
	// var modalityCarousel = new ModalityCarousel()
	// modalityCarousel.initCarousel()
	
	// Init Modality Content
	var modalityContent = new _ModalityContent2.default();
	modalityContent.loadContent();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModalityCarousel = function () {
	    function ModalityCarousel() {
	        _classCallCheck(this, ModalityCarousel);
	
	        this.selector = '#modality-carousel';
	    }
	
	    _createClass(ModalityCarousel, [{
	        key: 'initCarousel',
	        value: function initCarousel() {
	            console.log('init');
	            $(this.selector).slick({
	                infinite: true,
	                slidesToShow: 4,
	                slidesToScroll: 3
	            });
	        }
	    }]);
	
	    return ModalityCarousel;
	}();
	
	exports.default = ModalityCarousel;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModalityCarousel = function () {
	    function ModalityCarousel() {
	        _classCallCheck(this, ModalityCarousel);
	
	        this.selector = '#modality-carousel';
	    }
	
	    _createClass(ModalityCarousel, [{
	        key: 'initCarousel',
	        value: function initCarousel() {
	            console.log('init');
	            $(this.selector).slick({
	                infinite: true,
	                slidesToShow: 4,
	                slidesToScroll: 3
	            });
	        }
	    }, {
	        key: 'loadJSON',
	        value: function loadJSON() {
	            return axios.get("/assets/json/classes.json");
	        }
	    }, {
	        key: 'loadContent',
	        value: function loadContent() {
	            var _this = this;
	
	            this.loadJSON().then(function (json) {
	
	                var classes = json.data;
	
	                var template = '\n                    {{#classes}}\n                        <div class="box-modality" data-type="{{type}}">\n                            <h3 class="title">{{title}}</h3>\n                            <p class="description">{{description}}</p>\n                        </div>\n                    {{/classes}}\n                ';
	
	                var html = Mustache.to_html(template, classes);
	
	                $(_this.selector).append(html);
	                _this.initCarousel();
	            });
	        }
	    }]);
	
	    return ModalityCarousel;
	}();
	
	exports.default = ModalityCarousel;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map