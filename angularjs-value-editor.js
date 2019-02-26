(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("@kpsys/angularjs-register"), require("angular-ui-ace"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "@kpsys/angularjs-register", "angular-ui-ace"], factory);
	else if(typeof exports === 'object')
		exports["angularjs-value-editor"] = factory(require("angular"), require("@kpsys/angularjs-register"), require("angular-ui-ace"));
	else
		root["angularjs-value-editor"] = factory(root["angular"], root["@kpsys/angularjs-register"], root["angular-ui-ace"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ng_model_connector_1 = __webpack_require__(2);

var uuid_generator_1 = __webpack_require__(8);

var angular = __webpack_require__(3);

exports.EVENTS = Object.freeze({
  disabled: 'value-editor:disabled',
  options: 'value-editor:options'
});

var ValueEditorComponentController =
/*#__PURE__*/
function (_ng_model_connector_) {
  ValueEditorComponentController.$inject = ["$scope"];

  _inherits(ValueEditorComponentController, _ng_model_connector_);

  /*@ngInject*/
  function ValueEditorComponentController($scope) {
    var _this;

    _classCallCheck(this, ValueEditorComponentController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValueEditorComponentController).call(this));
    _this.$scope = $scope;
    _this.visible = true;
    return _this;
  }

  _createClass(ValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(ValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.previousOptions = angular.copy(this.options);

      if (!this.name) {
        this.name = this.generateEditorName();
      }
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(onChangesObj) {
      if (onChangesObj.disabled) {
        this.$scope.$broadcast(exports.EVENTS.disabled, {
          disabled: onChangesObj.disabled.currentValue
        });
      }
    }
    /**
     * Manually check options update. $onChanges is not applicable, because we need deep equals, which $onChanges does not perform.
     */

  }, {
    key: "$doCheck",
    value: function $doCheck() {
      if (!angular.equals(this.options, this.previousOptions)) {
        this.$scope.$broadcast(exports.EVENTS.options, {
          newOptions: this.options,
          oldOptions: this.previousOptions
        });
        this.previousOptions = angular.copy(this.options);
      }
    }
  }, {
    key: "generateEditorName",
    value: function generateEditorName() {
      return this.editorId || "".concat(this.type, "_").concat(uuid_generator_1.generateUuid());
    }
  }, {
    key: "status",
    get: function get() {
      return this.form[this.name];
    },
    set: function set(s) {//
    }
  }]);

  return ValueEditorComponentController;
}(ng_model_connector_1.default);

exports.ValueEditorComponentController = ValueEditorComponentController;
/**
 * @ngdoc component
 * @name kpValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 *
 * @param {string} editorId Input id.
 * @param {string} name Input name.
 * @param {string} placeholder Placeholder.
 * @param {string} type ValueEditor type. <.
 * @param {boolean} disabled If input is disabled. <.
 * @param {boolean} visible If input is visible. <.
 * @param {ValueEditorValidations} validations ValueEditor validations. <.
 * @param {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type.
 * @param {ng.type.ngModel.NgModelController} status Status of input.
 *
 * @description
 * Generic value editor depends on type:
 *
 * - `text`, `textarea`, `rich-textarea`: {@link component:textValueEditor}
 * - `number`: {@link component:numberValueEditor}
 */

var ValueEditorComponent = function ValueEditorComponent() {
  _classCallCheck(this, ValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel'
  };
  this.bindings = {
    editorId: '@?',
    name: '@?',
    placeholder: '@?',
    type: '<',
    disabled: '<?',
    visible: '<?',
    validations: '<?',
    options: '<?',
    status: '=?'
  };
  this.controller = ValueEditorComponentController;
  this.templateUrl = __webpack_require__(9);
};

ValueEditorComponent.componentName = 'kpValueEditor';
exports.default = ValueEditorComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ng_model_connector_1 = __webpack_require__(2);

var value_editor_component_1 = __webpack_require__(0);

var angular = __webpack_require__(3);
/**
 * Abstract base class for general value-editor features.
 */


var AbstractValueEditor =
/*#__PURE__*/
function (_ng_model_connector_) {
  _inherits(AbstractValueEditor, _ng_model_connector_);

  function AbstractValueEditor($scope, defaultOptions) {
    var _this;

    _classCallCheck(this, AbstractValueEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AbstractValueEditor).call(this));
    _this.$scope = $scope;
    _this.defaultOptions = defaultOptions;
    _this.options = angular.merge({}, _this.defaultOptions);
    return _this;
  }

  _createClass(AbstractValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractValueEditor.prototype), "$onInit", this).call(this);

      this.options = angular.merge({}, this.defaultOptions, this.valueEditorController.options);
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      var _this2 = this;

      this.onOptionsChange(this.options, undefined);
      this.$scope.$on(value_editor_component_1.EVENTS.options, function (event, data) {
        var newOptions = angular.merge({}, _this2.defaultOptions, data.newOptions);
        var oldOptions = angular.merge({}, _this2.defaultOptions, data.oldOptions);
        _this2.options = newOptions;

        _this2.onOptionsChange(newOptions, oldOptions);
      });
    }
  }]);

  return AbstractValueEditor;
}(ng_model_connector_1.default);

AbstractValueEditor.$inject = ['$scope'];
exports.default = AbstractValueEditor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Connects outer required ngModel with inner ngModel
 */

var NgModelConnector =
/*#__PURE__*/
function () {
  function NgModelConnector() {
    _classCallCheck(this, NgModelConnector);
  }

  _createClass(NgModelConnector, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      this.ngModelController.$render = function () {
        _this.modelValue = _this.ngModelController.$viewValue;
      };
    }
  }, {
    key: "model",
    set: function set(value) {
      this.modelValue = value;
      this.ngModelController.$setViewValue(this.modelValue);
    },
    get: function get() {
      return this.modelValue;
    }
  }]);

  return NgModelConnector;
}();

exports.default = NgModelConnector;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(6);

__webpack_require__(7);

var value_editor_component_1 = __webpack_require__(0);

var text_value_editor_component_1 = __webpack_require__(10);

var number_value_editor_component_1 = __webpack_require__(13);

var boolean_value_editor_component_1 = __webpack_require__(16);
/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */


exports.default = angularjs_register_1.default('angularjs-value-editor', ['ui.ace']).component(value_editor_component_1.default.componentName, value_editor_component_1.default).component(text_value_editor_component_1.default.componentName, text_value_editor_component_1.default).component(number_value_editor_component_1.default.componentName, number_value_editor_component_1.default).component(boolean_value_editor_component_1.default.componentName, boolean_value_editor_component_1.default).name();
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generates random pseudo-UUID.
 */

function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

exports.generateUuid = generateUuid;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var path = '/value-editor/value-editor.tpl.pug';
var html = "<div ng-form=\"$ctrl.form\" ng-switch=\"$ctrl.type\" ng-show=\"$ctrl.visible\"><text-value-editor ng-switch-when=\"text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></text-value-editor><number-value-editor ng-switch-when=\"number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-value-editor><boolean-value-editor ng-switch-when=\"boolean\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></boolean-value-editor></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(11);

var value_editor_component_1 = __webpack_require__(0);

var abstract_value_editor_1 = __webpack_require__(1);

var DEFAULT_OPTIONS = {
  type: 'text',
  aceOptions: {
    useWrapMode: false,
    showGutter: true
  }
};

var TextValueEditorComponentController =
/*#__PURE__*/
function (_abstract_value_edito) {
  TextValueEditorComponentController.$inject = ["$scope"];

  _inherits(TextValueEditorComponentController, _abstract_value_edito);

  /*@ngInject*/
  function TextValueEditorComponentController($scope) {
    _classCallCheck(this, TextValueEditorComponentController);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextValueEditorComponentController).call(this, $scope, DEFAULT_OPTIONS));
  }

  _createClass(TextValueEditorComponentController, [{
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {
      var _this = this;

      if (this.options.type === 'rich-textarea') {
        this.options.aceOptions.onLoad = function (ace) {
          _this.aceEditor = ace;

          _this.initACE();
        };
      }
    }
    /**
     * Get number of rows between nim and max range.
     */

  }, {
    key: "getNumberOfRows",
    value: function getNumberOfRows() {
      var minRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      if (this.model) {
        return Math.min(Math.max(this.countRowsInString(this.model), minRows), maxRows);
      }

      return minRows;
    }
    /**
     * Try to count rows in string. if string is without `\n`, it tries to estimate number of rows. Always return value greater then 0.
     */

  }, {
    key: "countRowsInString",
    value: function countRowsInString() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var rowsCount = (str.match(/\n/g) || []).length + 1;

      if (rowsCount === 1) {
        return Math.floor(str.length / 60) + 1;
      }

      return rowsCount;
    }
  }, {
    key: "initACE",
    value: function initACE() {
      var _this2 = this;

      // Original directive doesn't sets model to touched if ACE editor is blurred. This fixes it.
      this.aceEditor.on('blur', function () {
        _this2.valueEditorController.status.$setTouched();

        _this2.$scope.$apply();
      }); // Propagate disabled -> set Ace to readonly

      this.aceEditor.setReadOnly(this.valueEditorController.disabled);
      this.$scope.$on(value_editor_component_1.EVENTS.disabled, function (event, _ref) {
        var disabled = _ref.disabled;

        _this2.aceEditor.setReadOnly(disabled);
      });
    }
  }]);

  return TextValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.TextValueEditorComponentController = TextValueEditorComponentController;
/**
 * @ngdoc component
 * @name textValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for text input.
 * Depending on type are four versions:
 * - `text`
 *
 *      Common text input.
 *
 * - `textarea`
 *
 *      Textarea value editor.
 *
 * - `rich-textarea`.
 *
 *      [ACE editor](https://ace.c9.io).
 *
 * Supported options: {@link type:TextValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="textValueEditorExample" module="textValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'text'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('textValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var TextValueEditorComponent = function TextValueEditorComponent() {
  _classCallCheck(this, TextValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(12);
  this.controller = TextValueEditorComponentController;
};

TextValueEditorComponent.componentName = 'textValueEditor';
exports.default = TextValueEditorComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/text/text.value-editor.tpl.pug';
var html = "<!-- TEXT--><input ng-if=\"$ctrl.options.type === 'text'\" type=\"{{$ctrl.options.type}}\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/><!-- TEXTAREA--><textarea ng-if=\"$ctrl.options.type === 'textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" rows=\"{{$ctrl.getNumberOfRows()}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-trim=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></textarea><!-- ACE EDITOR--><div class=\"ace-editor\" ng-if=\"$ctrl.options.type === 'rich-textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-class=\"$ctrl.options.cssClasses\" ui-ace=\"$ctrl.options.aceOptions\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(14);

var value_editor_component_1 = __webpack_require__(0);

var abstract_value_editor_1 = __webpack_require__(1);

var DEFAULT_OPTIONS = {
  decimal: false,
  step: 1,
  hideSpinners: false
};

var NumberValueEditorComponentController =
/*#__PURE__*/
function (_abstract_value_edito) {
  NumberValueEditorComponentController.$inject = ["$scope"];

  _inherits(NumberValueEditorComponentController, _abstract_value_edito);

  /*@ngInject*/
  function NumberValueEditorComponentController($scope) {
    _classCallCheck(this, NumberValueEditorComponentController);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumberValueEditorComponentController).call(this, $scope, DEFAULT_OPTIONS));
  }

  _createClass(NumberValueEditorComponentController, [{
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }]);

  return NumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.NumberValueEditorComponentController = NumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name numberValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for number input.
 *
 * Supported options: {@link type:NumberValueEditorOptions}
 *
 * Supported validations: {@link type:NumberValueEditorValidations}
 *
 * @example
 * <example name="numberValueEditorExample" module="numberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'number'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('numberValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var NumberValueEditorComponent = function NumberValueEditorComponent() {
  _classCallCheck(this, NumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(15);
  this.controller = NumberValueEditorComponentController;
};

NumberValueEditorComponent.componentName = 'numberValueEditor';
exports.default = NumberValueEditorComponent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number/number.value-editor.tpl.pug';
var html = "<input class=\"{{$ctrl.options.hideSpinners ? 'hide-spinners' : ''}}\" type=\"number\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" step=\"{{$ctrl.options.step}}\" min=\"{{$ctrl.valueEditorController.validations.min}}\" max=\"{{$ctrl.valueEditorController.validations.max}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(17);

var value_editor_component_1 = __webpack_require__(0);

var abstract_value_editor_1 = __webpack_require__(1);

var DEFAULT_OPTIONS = {
  type: 'checkbox',
  trueValue: undefined,
  falseValue: undefined,
  nullAsIndeterminate: false
};

var BooleanValueEditorComponentController =
/*#__PURE__*/
function (_abstract_value_edito) {
  BooleanValueEditorComponentController.$inject = ["$scope"];

  _inherits(BooleanValueEditorComponentController, _abstract_value_edito);

  /*@ngInject*/
  function BooleanValueEditorComponentController($scope) {
    _classCallCheck(this, BooleanValueEditorComponentController);

    return _possibleConstructorReturn(this, _getPrototypeOf(BooleanValueEditorComponentController).call(this, $scope, DEFAULT_OPTIONS));
  }

  _createClass(BooleanValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(BooleanValueEditorComponentController.prototype), "$postLink", this).call(this);

      this.ngModelController.$formatters.push(this.formatToCustomValue.bind(this));
      this.ngModelController.$parsers.push(this.parseFromCustomValue.bind(this));
      this.ngModelController.$parsers.push(this.adjustIndeterminateState.bind(this));
      this.ngModelController.$formatters.push(this.adjustIndeterminateState.bind(this));
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {
      this.ngModelController.$processModelValue();
    }
  }, {
    key: "formatToCustomValue",
    value: function formatToCustomValue(value) {
      if (this.options.trueValue !== undefined && value === this.options.trueValue) {
        return true;
      }

      if (this.options.falseValue !== undefined && value === this.options.falseValue) {
        return false;
      }

      return value;
    }
  }, {
    key: "parseFromCustomValue",
    value: function parseFromCustomValue(value) {
      if (this.options.trueValue !== undefined && value === true) {
        return this.options.trueValue;
      }

      if (this.options.falseValue !== undefined && value === false) {
        return this.options.falseValue;
      }

      return value;
    }
  }, {
    key: "adjustIndeterminateState",
    value: function adjustIndeterminateState(value) {
      // @ts-ignore - $$element is not typed, because it's internal API
      this.inputElementModelController.$$element[0].indeterminate = this.options.nullAsIndeterminate && value === null;
      var isInvalid = this.valueEditorController.validations && this.valueEditorController.validations.required && this.options.nullAsIndeterminate && (value === null || value === undefined);
      this.inputElementModelController.$setValidity('required', !isInvalid);
      return value;
    }
  }]);

  return BooleanValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.BooleanValueEditorComponentController = BooleanValueEditorComponentController;
/**
 * @ngdoc component
 * @name booleanValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for boolean input.
 *
 * Supported options: {@link type:BooleanValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * This value editor supports custom model value substitution via options parameters `trueValue` and `falseValue`.
 *
 * @example
 * <example name="booleanValueEditorExample" module="booleanValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'boolean'" ng-model="model"></kp-value-editor>
 *              <div>{{model | json}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('booleanValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var BooleanValueEditorComponent = function BooleanValueEditorComponent() {
  _classCallCheck(this, BooleanValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(18);
  this.controller = BooleanValueEditorComponentController;
};

BooleanValueEditorComponent.componentName = 'booleanValueEditor';
exports.default = BooleanValueEditorComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/boolean/boolean.value-editor.tpl.pug';
var html = "<span class=\"pretty p-icon p-smooth p-curve {{$ctrl.options.cssClasses.join(' ')}}\" ng-class=\"{'p-has-indeterminate': $ctrl.options.nullAsIndeterminate}\"><input type=\"checkbox\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-ref=\"$ctrl.inputElementModelController\" ng-ref-read=\"ngModel\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" data-main-input=\"data-main-input\"/><div class=\"state\"><i class=\"icon glyphicon glyphicon-ok\"></i><label></label></div><div class=\"state p-is-indeterminate\"><i class=\"icon glyphicon glyphicon-minus\"></i><label></label></div></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
/******/ ]);
});