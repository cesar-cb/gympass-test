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
	
	var _Modality = __webpack_require__(1);
	
	var _Modality2 = _interopRequireDefault(_Modality);
	
	var _Menu = __webpack_require__(2);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Init Modality
	var modality = new _Modality2.default();
	modality.init();
	
	// Init Mobile Menu Toggle
	var menu = new _Menu2.default();

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
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            this.loadJSON().then(function (json) {
	
	                var classes = json.data;
	
	                var template = '\n                    {{#classes}}\n                        <article class="box-modality" data-type="{{type}}">\n                            <h3 class="title">{{title}}</h3>\n                            <p class="description">{{description}}</p>\n                        </article>\n                    {{/classes}}\n                ';
	
	                var html = Mustache.to_html(template, classes);
	
	                $(_this.selector).append(html);
	
	                _this.initCarousel();
	            });
	        }
	    }, {
	        key: 'initCarousel',
	        value: function initCarousel() {
	            var _this2 = this;
	
	            $(this.selector).on('init', function (event, slick, currentSlide, nextSlide) {
	                _this2.toggleTypes();
	            });
	
	            $(this.selector).slick({
	                slidesToShow: 4,
	                slidesToScroll: 2,
	                infinite: false,
	                arrows: false,
	                dots: true,
	                responsive: [{
	                    breakpoint: 1024,
	                    settings: {
	                        slidesToShow: 2,
	                        slidesToScroll: 2,
	                        infinite: false,
	                        arrows: false,
	                        dots: true
	                    }
	                }, {
	                    breakpoint: 480,
	                    settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        infinite: false,
	                        arrows: false,
	                        dots: true
	                    }
	                }]
	            });
	        }
	    }, {
	        key: 'loadJSON',
	        value: function loadJSON() {
	            return axios.get("/assets/json/classes.json");
	        }
	    }, {
	        key: 'toggleTypes',
	        value: function toggleTypes() {
	
	            var self = this;
	
	            $('.js-choose-type').on('change', function () {
	
	                $('.js-choose-type').not(this).prop('checked', false);
	
	                var type = $(this).attr('id');
	
	                var box = $('.box-modality');
	
	                box.css('display', 'block');
	
	                if ($(this).is(":checked")) {
	                    $(self.selector).slick('slickUnfilter');
	                    $(self.selector).slick('slickFilter', '.box-modality[data-type="' + type + '"]');
	                } else {
	                    $(self.selector).slick('slickUnfilter');
	                }
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
	
	var Menu = function () {
	    function Menu() {
	        _classCallCheck(this, Menu);
	
	        this.toggleSelector = '.js-toggle-menu';
	        this.menu = '.js-header-menu';
	
	        this.init();
	    }
	
	    _createClass(Menu, [{
	        key: 'init',
	        value: function init() {
	            var self = this;
	
	            $(this.toggleSelector).on('click', function () {
	                $(self.menu).toggleClass('-open');
	            });
	        }
	    }]);
	
	    return Menu;
	}();
	
	exports.default = Menu;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map