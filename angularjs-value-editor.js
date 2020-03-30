(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"));
	else if(typeof define === 'function' && define.amd)
		define(["@kpsys/angularjs-register", "angular", "luxon", "@kpsys/angular-ui-bootstrap", "angular-sanitize", "ui-select", "@kpsys/angularjs-date-parser", "@kpsys/angularjs-bootstrap-datetimepicker", "angular-ui-ace"], factory);
	else if(typeof exports === 'object')
		exports["angularjs-value-editor"] = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"));
	else
		root["angularjs-value-editor"] = factory(root["@kpsys/angularjs-register"], root["angular"], root["luxon"], root["@kpsys/angular-ui-bootstrap"], root["angular-sanitize"], root["ui-select"], root["@kpsys/angularjs-date-parser"], root["@kpsys/angularjs-bootstrap-datetimepicker"], root["angular-ui-ace"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__50__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var angular = __webpack_require__(4);

var ng_model_connector_1 = __webpack_require__(7);

var uuid_generator_1 = __webpack_require__(5);

var equals_1 = __webpack_require__(8);

exports.EVENTS = Object.freeze({
  disabled: 'value-editor:disabled'
});

var ValueEditorComponentController = /*#__PURE__*/function (_ng_model_connector_) {
  ValueEditorComponentController.$inject = ["$scope"];

  _inherits(ValueEditorComponentController, _ng_model_connector_);

  var _super = _createSuper(ValueEditorComponentController);

  /*@ngInject*/
  function ValueEditorComponentController($scope) {
    var _this;

    _classCallCheck(this, ValueEditorComponentController);

    _this = _super.call(this);
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
      if (!equals_1.default(this.options, this.previousOptions)) {
        this.valueEditorInstance.changeOptions(this.options, this.previousOptions);
        this.previousOptions = angular.copy(this.options);
      }
    }
  }, {
    key: "registerValueEditor",
    value: function registerValueEditor(editorController) {
      this.valueEditorInstance = editorController;
    }
  }, {
    key: "generateEditorName",
    value: function generateEditorName() {
      return this.editorId || "".concat(this.type, "_").concat(uuid_generator_1.generateUuid());
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
    options: '<?'
  };
  this.controller = ValueEditorComponentController;
  this.templateUrl = __webpack_require__(20);
};

exports.default = ValueEditorComponent;
ValueEditorComponent.componentName = 'kpValueEditor';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ng_model_connector_1 = __webpack_require__(7);

var angular = __webpack_require__(4);

var equals_1 = __webpack_require__(8);

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * Abstract base class for general value-editor features.
 *
 * @template OPTIONS
 */


var AbstractValueEditor = /*#__PURE__*/function (_ng_model_connector_) {
  _inherits(AbstractValueEditor, _ng_model_connector_);

  var _super = _createSuper(AbstractValueEditor);

  function AbstractValueEditor($scope, configurationService) {
    var _this;

    _classCallCheck(this, AbstractValueEditor);

    _this = _super.call(this);
    _this.$scope = $scope;
    _this.configurationService = configurationService;
    _this.options = angular.merge({}, _this.configurationService.getConfiguration());
    return _this;
  }

  _createClass(AbstractValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractValueEditor.prototype), "$onInit", this).call(this);

      this.options = angular.merge({}, this.configurationService.getConfiguration(), this.valueEditorController.options);
      this.valueEditorController.registerValueEditor(this);
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      if (!equals_1.default(this.options, this.configurationService.getConfiguration())) {
        this.onOptionsChange(this.options, undefined, this.whichPropertiesIsNotEqual(this.options, this.configurationService.getConfiguration()));
      }
    }
  }, {
    key: "changeOptions",
    value: function changeOptions(newOptions, oldOptions) {
      this.options = newOptions;
      this.onOptionsChange(newOptions, oldOptions, this.whichPropertiesIsNotEqual(newOptions, oldOptions));
    }
  }, {
    key: "whichPropertiesIsNotEqual",
    value: function whichPropertiesIsNotEqual(options1, options2) {
      var changeObject = {};
      var keys = new Set(); // tslint:disable-next-line:no-unused-expression

      options1 && Object.keys(options1).forEach(keys.add.bind(keys)); // tslint:disable-next-line:no-unused-expression

      options2 && Object.keys(options2).forEach(keys.add.bind(keys));
      Array.from(keys).forEach(function (key) {
        return changeObject[key] = !(Object.prototype.hasOwnProperty.call(options1, key) && Object.prototype.hasOwnProperty.call(options2, key) && options1[key] === options2[key]);
      });
      return changeObject;
    }
  }]);

  return AbstractValueEditor;
}(ng_model_connector_1.default);

exports.default = AbstractValueEditor;
AbstractValueEditor.$inject = ['$scope', 'emptyConfigurationService'];

var EmptyConfigurationService = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(EmptyConfigurationService, _abstract_value_edito);

  var _super2 = _createSuper(EmptyConfigurationService);

  function EmptyConfigurationService() {
    _classCallCheck(this, EmptyConfigurationService);

    return _super2.call(this, {});
  }

  return EmptyConfigurationService;
}(abstract_value_editor_configuration_provider_1.default);

exports.EmptyConfigurationService = EmptyConfigurationService;
EmptyConfigurationService.serviceName = 'emptyConfigurationService';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc provider
 * @name AbstractValueEditorConfigurationProvider
 * @module angularjs-value-editor
 *
 * @template CONFIGURATION
 *
 * @description
 * Abstract provider for configuring editors options.
 *
 * Generic parameter `CONFIGURATION` is current value editor options type.
 */

var AbstractValueEditorConfigurationProvider = /*#__PURE__*/function () {
  function AbstractValueEditorConfigurationProvider(defaultConfiguration) {
    _classCallCheck(this, AbstractValueEditorConfigurationProvider);

    this.defaultConfiguration = defaultConfiguration;
    this.currentConfiguration = defaultConfiguration;
  }
  /**
   * @ngdoc method
   * @name AbstractValueEditorConfigurationProvider#setConfiguration
   * @module angularjs-value-editor
   *
   * @param {Partial<CONFIGURATION>} configuration New value editor configuration.
   *
   * @returns {DefaultOptions<CONFIGURATION>} Complete new value editor configuration.
   *
   * @description
   * Sets new value editor configuration.
   */


  _createClass(AbstractValueEditorConfigurationProvider, [{
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this.currentConfiguration = Object.assign({}, this.currentConfiguration, configuration);
      return this.currentConfiguration;
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorConfigurationProvider#getConfiguration
     * @module angularjs-value-editor
     *
     * @returns {DefaultOptions<CONFIGURATION>} Current value editor options.
     *
     * @description
     * Returns current value editor options.
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return Object.assign({}, this.currentConfiguration);
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorConfigurationProvider#getDefaults
     * @module angularjs-value-editor
     *
     * @returns {DefaultOptions<CONFIGURATION>} Default value editor options.
     *
     * @description
     * Returns default value editor options.
     *
     */

  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return Object.assign({}, this.defaultConfiguration);
    }
  }, {
    key: "$get",
    value: function $get() {
      return this;
    }
  }]);

  return AbstractValueEditorConfigurationProvider;
}();

exports.default = AbstractValueEditorConfigurationProvider;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc provider
 * @name AbstractValueEditorLocalizationProvider
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * Generic provider for value editor localizations.
 */

var AbstractValueEditorLocalizationProvider = /*#__PURE__*/function () {
  function AbstractValueEditorLocalizationProvider(defaultLocalizations) {
    _classCallCheck(this, AbstractValueEditorLocalizationProvider);

    this.localizations = Object.assign({}, defaultLocalizations);
  }
  /**
   * @ngdoc method
   * @name AbstractValueEditorLocalizationProvider#setLocalization
   * @module angularjs-value-editor
   *
   * @param {string} code Message code.
   * @param {string} message Localization message.
   *
   * @description
   * Sets one localization message to given parameter.
   */


  _createClass(AbstractValueEditorLocalizationProvider, [{
    key: "setLocalization",
    value: function setLocalization(code, message) {
      this.localizations[code] = message;
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#setAll
     * @module angularjs-value-editor
     *
     * @param {ValueEditorLocalizations} localizations
     *
     * @description
     * Sets localizations at once.
     */

  }, {
    key: "setAll",
    value: function setAll(localizations) {
      this.localizations = Object.assign({}, localizations);
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#getLocalization
     * @module angularjs-value-editor
     *
     * @param {string} code Wanted localization code.
     *
     * @returns {string} Localization message.
     *
     * @description
     * Returns specific localization message.
     */

  }, {
    key: "getLocalization",
    value: function getLocalization(code) {
      return this.localizations[code];
    }
    /**
     * @ngdoc method
     * @name AbstractValueEditorLocalizationProvider#getAll
     * @module angularjs-value-editor
     *
     * @returns {ValueEditorLocalizations} All messages.
     *
     * @description
     * Returns all localization messages.
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return Object.assign({}, this.localizations);
    }
  }, {
    key: "$get",
    value: function $get() {
      return this;
    }
  }]);

  return AbstractValueEditorLocalizationProvider;
}();

exports.default = AbstractValueEditorLocalizationProvider;

/***/ }),
/* 7 */
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

var NgModelConnector = /*#__PURE__*/function () {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var angular = __webpack_require__(4);

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}

function isWindow(obj) {
  return obj && obj.window === obj;
}

function simpleCompare(a, b) {
  return a === b || a !== a && b !== b;
}

function createMap() {
  return Object.create(null);
}
/**
 * Modified `angular.equals` function for support function check also.
 *
 * @param {any} o1
 * @param {any} o2
 *
 * @returns {boolean}
 */


function customEquals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false; // eslint-disable-next-line no-self-compare

  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN

  var t1 = _typeof(o1);

  var t2 = _typeof(o2);

  var length;
  var key;
  var keySet;

  if (t1 === t2 && t1 === 'object') {
    if (angular.isArray(o1)) {
      if (!angular.isArray(o2)) return false; // tslint:disable-next-line:no-conditional-assignment

      if ((length = o1.length) === o2.length) {
        for (key = 0; key < length; key++) {
          if (!customEquals(o1[key], o2[key])) return false;
        }

        return true;
      }
    } else if (angular.isDate(o1)) {
      if (!angular.isDate(o2)) return false;
      return simpleCompare(o1.getTime(), o2.getTime());
    } else if (isRegExp(o1)) {
      if (!isRegExp(o2)) return false;
      return o1.toString() === o2.toString();
    } else {
      if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || angular.isArray(o2) || angular.isDate(o2) || isRegExp(o2)) return false;
      keySet = createMap();

      for (key in o1) {
        if (key.charAt(0) === '$'
        /* || angular.isFunction(o1[key])*/
        ) continue;
        if (!customEquals(o1[key], o2[key])) return false;
        keySet[key] = true;
      }

      for (key in o2) {
        if (!(key in keySet) && key.charAt(0) !== '$' && angular.isDefined(o2[key])
        /* &&
        !angular.isFunction(o2[key])*/
        ) return false;
      }

      return true;
    }
  }

  return false;
}

exports.default = customEquals;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(12);

var angularjs_register_1 = __webpack_require__(0);

var acceptable_value_editor_module_1 = __webpack_require__(13);

var boolean_value_editor_module_1 = __webpack_require__(25);

var date_value_editor_module_1 = __webpack_require__(30);

var hidden_value_editor_module_1 = __webpack_require__(37);

var html_value_editor_module_1 = __webpack_require__(40);

var number_value_editor_module_1 = __webpack_require__(44);

var text_value_editor_module_1 = __webpack_require__(49);

var year_value_editor_module_1 = __webpack_require__(55);

var card_number_value_editor_module_1 = __webpack_require__(58);

var index_selection_value_editor_module_1 = __webpack_require__(63);

var autocomplete_value_editor_module_1 = __webpack_require__(67);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name loadingSpinnerTemplateUrl
 * @module angularjs-value-editor
 *
 * @description
 * AngularJS template url with SVG spinner.
 *
 * It can be used for waiting for async operations, etc...
 */
// tslint:disable-next-line:no-var-requires


var LOADING_SPINNER_TPL_URL = __webpack_require__(72);
/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */


exports.default = angularjs_register_1.default('angularjs-value-editor', ['ui.bootstrap', acceptable_value_editor_module_1.default, boolean_value_editor_module_1.default, date_value_editor_module_1.default, hidden_value_editor_module_1.default, html_value_editor_module_1.default, number_value_editor_module_1.default, text_value_editor_module_1.default, year_value_editor_module_1.default, card_number_value_editor_module_1.default, index_selection_value_editor_module_1.default, autocomplete_value_editor_module_1.default]).constant('loadingSpinnerTemplateUrl', LOADING_SPINNER_TPL_URL).service(abstract_value_editor_1.EmptyConfigurationService.serviceName, abstract_value_editor_1.EmptyConfigurationService).component(value_editor_component_1.default.componentName, value_editor_component_1.default).name();
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

__webpack_require__(14);

__webpack_require__(15);

var uiSelect_decorator_1 = __webpack_require__(16);

var acceptable_value_editor_localizations_provider_1 = __webpack_require__(17);

var acceptable_value_editor_component_1 = __webpack_require__(18);

var acceptable_value_editor_configuration_provider_1 = __webpack_require__(24);
/**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Acceptable value editor module.
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.acceptable', ['ngSanitize', 'ui.select']).decorator(uiSelect_decorator_1.default.decoratorName, uiSelect_decorator_1.default).constant('acceptableValueEditorDefaultOptions', acceptable_value_editor_configuration_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('acceptableValueEditorDefaultLocalizations', acceptable_value_editor_localizations_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(acceptable_value_editor_configuration_provider_1.default.providerName, acceptable_value_editor_configuration_provider_1.default).provider(acceptable_value_editor_localizations_provider_1.default.providerName, acceptable_value_editor_localizations_provider_1.default).component(acceptable_value_editor_component_1.default.componentName, acceptable_value_editor_component_1.default).name();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


uiSelectDecorator.$inject = ["$delegate", "acceptableValueEditorLocalizationsService"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc service
 * @name uiSelectDecorator
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * This decorator modifies placeholder behaviour in multiselectable ui-select. In original, placeholder disappears if some values is selected,
 * but empty space under items is confusing, so in terms of UX, it is better to leave placeholder visible always.
 * If all items are selected, it shows `allSelected` localization from {@link AcceptableValueEditorLocalizations}
 */

/*@ngInject*/

function uiSelectDecorator($delegate, acceptableValueEditorLocalizationsService) {
  var directive = $delegate[0];
  var link = directive.link;
  directive.require = ['^uiSelect', '^ngModel', 'uiSelectMultiple'];

  $delegate[0].compile = function () {
    return function ($scope, $element, $attrs, controllers) {
      link.apply(this, arguments);
      var $select = controllers[0];
      var uiSelectMultipleDirectiveController = controllers[2];

      uiSelectMultipleDirectiveController.getPlaceholder = function () {
        if ($select.items.length === 0) {
          return acceptableValueEditorLocalizationsService.getLocalization('allSelected');
        }

        return $select.placeholder;
      };
    };
  };

  return $delegate;
}

exports.default = uiSelectDecorator;
uiSelectDecorator.decoratorName = 'uiSelectMultipleDirective';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(6);
/**
 * @ngdoc provider
 * @name acceptableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * See {@link acceptableValueEditorLocalizationsService}
 */


var AcceptableValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorLocalizationsProvider.$inject = ["acceptableValueEditorDefaultLocalizations"];

  _inherits(AcceptableValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorLocalizationsProvider);

  /*@ngInject*/
  function AcceptableValueEditorLocalizationsProvider(acceptableValueEditorDefaultLocalizations) {
    _classCallCheck(this, AcceptableValueEditorLocalizationsProvider);

    return _super.call(this, acceptableValueEditorDefaultLocalizations);
  }

  return AcceptableValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AcceptableValueEditorLocalizationsProvider;
AcceptableValueEditorLocalizationsProvider.providerName = 'acceptableValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name acceptableValueEditorDefaultLocalizations
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * ```
 * {
 *     allSelected: 'All selected',
 *     more: 'More',
 *     less: 'Less',
 *     selectAll: 'Select all',
 *     deselectAll: 'Deselect all'
 * }
 * ```
 */

exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  allSelected: 'All selected',
  more: 'More',
  less: 'Less',
  selectAll: 'Select all',
  deselectAll: 'Deselect all'
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(19);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var uuid_generator_1 = __webpack_require__(5);

var TEMPLATE_NAME_PREFIX = 'value-editor.acceptableValueEditor';

var AcceptableValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorComponentController.$inject = ["$scope", "$interpolate", "$templateCache", "acceptableValueEditorLocalizationsService", "acceptableValueEditorConfigurationService"];

  _inherits(AcceptableValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorComponentController);

  /*@ngInject*/
  function AcceptableValueEditorComponentController($scope, $interpolate, $templateCache, acceptableValueEditorLocalizationsService, acceptableValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, AcceptableValueEditorComponentController);

    _this = _super.call(this, $scope, acceptableValueEditorConfigurationService);
    _this.$interpolate = $interpolate;
    _this.$templateCache = $templateCache;
    _this.acceptableValueEditorLocalizationsService = acceptableValueEditorLocalizationsService;
    _this.acceptableValueEditorConfigurationService = acceptableValueEditorConfigurationService;
    _this.templateName = TEMPLATE_NAME_PREFIX;
    _this.uuid = uuid_generator_1.generateUuid();
    _this.uiSelectComparator = _this.uiSelectComparator.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AcceptableValueEditorComponentController, [{
    key: "hasMore",
    value: function hasMore() {
      return this.options.showFirstCount && this.getMoreCount() > 0;
    }
  }, {
    key: "getAcceptableValues",
    value: function getAcceptableValues() {
      var _this2 = this;

      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.showFirstCount;
      var values = this.options.acceptableValues;

      if (this.options.selectedFirst) {
        var selected = this.options.acceptableValues.filter(function (value) {
          return _this2.includes(_this2.adjustToArrayIfNot(_this2.model), value);
        }).sort(this.options.sortComparator);
        var unSelected = this.options.acceptableValues.filter(function (value) {
          return !_this2.includes(_this2.adjustToArrayIfNot(_this2.model), value);
        }).sort(this.options.sortComparator);
        values = selected.concat(unSelected);
      } else {
        values.sort(this.options.sortComparator);
      }

      if (count) {
        return values.slice(from, from + count);
      }

      return values;
    }
  }, {
    key: "checkboxModel",
    value: function checkboxModel(item) {
      var _this3 = this;

      return function () {
        return _this3.isChecked(item);
      };
    }
  }, {
    key: "updateModel",
    value: function updateModel(item) {
      var newModel = this.adjustToArrayIfNot(this.model).slice();

      if (this.isChecked(item)) {
        var indexOfRemovingItem = this.getIndexOfItemInModelUsingEqualityComparator(item);
        newModel.splice(indexOfRemovingItem, 1);
      } else {
        newModel.push(item);
      }

      this.model = newModel;
    }
  }, {
    key: "uiSelectComparator",
    value: function uiSelectComparator(e1, e2) {
      return this.options.sortComparator ? this.options.sortComparator(e1.value, e2.value) : 0;
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whichOptionIsChanged) {
      if (whichOptionIsChanged.optionsTemplate || whichOptionIsChanged.singleSelectedValueTemplate || whichOptionIsChanged.multiSelectedValueTemplate || whichOptionIsChanged.searchable || whichOptionIsChanged.multiselectable || whichOptionIsChanged.sortComparator || whichOptionIsChanged.reorderable || whichOptionIsChanged.acceptableValues || whichOptionIsChanged.switchToCheckboxesThreshold || whichOptionIsChanged.selectedFirst) {
        this.updateTemplate();
      }

      if (whichOptionIsChanged.selectedFirst) {
        this.options.acceptableValues = this.options.acceptableValues.slice();
      }

      if ((whichOptionIsChanged.sortModel || whichOptionIsChanged.sortComparator) && newOptions.sortModel) {
        // trigger model sort by calling its setter and setting same value
        this.model = this.model;
      }
    }
  }, {
    key: "adjustToArrayIfNot",
    value: function adjustToArrayIfNot(value) {
      if (!value) {
        return [];
      }

      if (!Array.isArray(value)) {
        return [value];
      } else {
        return value;
      }
    }
  }, {
    key: "isChecked",
    value: function isChecked(item) {
      return this.includes(this.model, item);
    }
  }, {
    key: "includes",
    value: function includes(array, item) {
      var comparator = this.options.equalityComparator ? this.options.equalityComparator : this.acceptableValueEditorConfigurationService.getDefaults().equalityComparator;
      return Array.isArray(array) && array.some(comparator.bind(null, item));
    }
  }, {
    key: "getMoreCount",
    value: function getMoreCount() {
      return Math.max((this.options.acceptableValues || []).length - this.options.showFirstCount, 0);
    }
  }, {
    key: "checkboxesMode",
    value: function checkboxesMode() {
      return this.options.multiselectable && (this.options.switchToCheckboxesThreshold === 0 || !this.options.reorderable && this.options.acceptableValues.length > this.options.switchToCheckboxesThreshold);
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate() {
      this.$templateCache.remove(this.templateName);
      var newTemplateName = "".concat(TEMPLATE_NAME_PREFIX, "_").concat(this.uuid, "_").concat(new Date().valueOf());
      var templateUrl = this.checkboxesMode() ? AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL : AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL;
      var template = this.$templateCache.get(templateUrl);
      var interpolated = this.$interpolate(template)({
        optionsTemplate: this.options.optionsTemplate,
        singleSelectedValueTemplate: this.options.singleSelectedValueTemplate,
        multiSelectedValueTemplate: this.options.multiSelectedValueTemplate,
        searchable: this.options.searchable,
        multiselectable: this.options.multiselectable,
        uuid: this.uuid,
        sort: !!this.options.sortComparator
      });
      this.$templateCache.put(newTemplateName, interpolated);
      this.templateName = newTemplateName;
    }
  }, {
    key: "getIndexOfItemInModelUsingEqualityComparator",
    value: function getIndexOfItemInModelUsingEqualityComparator(item) {
      for (var i = 0; i < this.model.length; i++) {
        if (this.options.equalityComparator(this.model[i], item)) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "model",
    get: function get() {
      return _get(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", this);
    },
    set: function set(value) {
      if (this.options.multiselectable && this.options.sortModel) {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value.sort(this.options.sortComparator), this, true);
      } else {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value, this, true);
      }
    }
  }]);

  return AcceptableValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.AcceptableValueEditorComponentController = AcceptableValueEditorComponentController;
AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL = __webpack_require__(21);
AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL = __webpack_require__(22);
/**
 * @ngdoc component
 * @name acceptableValueEditor
 * @module angularjs-value-editor.acceptable
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * This component is for selecting value from predefined values.
 * It has two basic modes - single selectable and multi selectable - which are controlled by `multiselectable` option.
 * Multi selectable mode has two visual sub-modes: select-based and checkbox-based which are controlled by `switchToCheckboxesThreshold` option.
 *
 * Supported options: {@link type:AcceptableValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="acceptableValueEditorExample" module="acceptableValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as $ctrl">
 *              <kp-value-editor type="'acceptable'" ng-model="model" options="{
 *                  acceptableValues: $ctrl.acceptableValues,
 *                  multiselectable: $ctrl.multiselectable,
 *                  optionsTemplate: $ctrl.optionsTemplate,
 *                  singleSelectedValueTemplate: $ctrl.singleSelectedValueTemplate,
 *                  multiSelectedValueTemplate: $ctrl.multiSelectedValueTemplate,
 *                  searchable: $ctrl.searchable,
 *                  reorderable: $ctrl.reorderable,
 *                  showFirstCount: $ctrl.showFirstCount,
 *                  selectedFirst: $ctrl.selectedFirst,
 *                  sortModel: $ctrl.sortModel,
 *                  switchToCheckboxesThreshold: $ctrl.switchToCheckboxesThreshold,
 *                  sortComparator: $ctrl.sortComparator,
 *                  equalityComparator: $ctrl.equalityComparator
 *              }" placeholder="Select...">
 *              </kp-value-editor>
 *              <div>Model: {{model}}</div>
 *              <hr>
 *              Options:
 *              <div>{{$ctrl.acceptableValues}}</div>
 *              Settings:
 *              <div>multiselectable: <input type="checkbox" ng-model="$ctrl.multiselectable"></div>
 *              <div>optionsTemplate: <input type="text" ng-model="$ctrl.optionsTemplate"></div>
 *              <div>singleSelectedValueTemplate: <input type="text" ng-model="$ctrl.singleSelectedValueTemplate"></div>
 *              <div>multiSelectedValueTemplate: <input type="text" ng-model="$ctrl.multiSelectedValueTemplate"></div>
 *              <div>searchable: <input type="checkbox" ng-model="$ctrl.searchable"></div>
 *              <div>reorderable: <input type="checkbox" ng-model="$ctrl.reorderable"></div>
 *              <div>showFirstCount: <input type="number" ng-model="$ctrl.showFirstCount"></div>
 *              <div>selectedFirst: <input type="checkbox" ng-model="$ctrl.selectedFirst"></div>
 *              <div>sortModel: <input type="checkbox" ng-model="$ctrl.sortModel"></div>
 *              <div>switchToCheckboxesThreshold: <input type="number" ng-model="$ctrl.switchToCheckboxesThreshold"></div>
 *              <div>sortComparator: <input type="text" ng-model="$ctrl.sortComparatorString" ng-change="$ctrl.evalComparators()"></div>
 *              <div>equalityComparator: <input type="text" ng-model="$ctrl.equalityComparatorString" ng-change="$ctrl.evalComparators()"></div>
 *              OPTS:
 *              <div>{{$ctrl.multiselectable | json}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('acceptableValueEditorExample', ['angularjs-value-editor'])
 *          .controller('demoController', ['acceptableValueEditorDefaultOptions', class {
 *              multiselectable;
 *              optionsTemplate;
 *              singleSelectedValueTemplate;
 *              multiSelectedValueTemplate;
 *              searchable;
 *              reorderable;
 *              showFirstCount;
 *              selectedFirst;
 *              sortModel;
 *              switchToCheckboxesThreshold;
 *              sortComparatorString = '(e1, e2) => e1.x.localeCompare(e2.x)*-1';
 *              equalityComparatorString = '(e1, e2) => e1.x === e2.x';
 *
 *              constructor(acceptableValueEditorDefaultOptions) {
 *                  angular.merge(this, acceptableValueEditorDefaultOptions);
 *                  this.acceptableValues = [{x: 'a'}, {x: 'b'}, {x: 'c'}, {x: 'd'}, {x: 'e'}, {x: 'f'}, {x: 'g'}, {x: 'h'}];
 *                  this.evalComparators();
 *              }
 *
 *              evalComparators() {
 *                  let sortComparator = undefined;
 *                  let equalityComparator = undefined;
 *
 *                  try {
 *                      sortComparator = eval(this.sortComparatorString);
 *                      equalityComparator = eval(this.equalityComparatorString);
 *                  } catch (e) {
 *                      console.error('Invalid syntax');
 *                  }
 *
 *                  this.sortComparator = sortComparator;
 *                  this.equalityComparator = equalityComparator;
 *              }
 *          }]);
 *     </file>
 * </example>
 */

var AcceptableValueEditorComponent = function AcceptableValueEditorComponent() {
  _classCallCheck(this, AcceptableValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(23);
  this.controller = AcceptableValueEditorComponentController;
};

exports.default = AcceptableValueEditorComponent;
AcceptableValueEditorComponent.componentName = 'acceptableValueEditor';

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var path = '/value-editor/value-editor.tpl.pug';
var html = "<div ng-switch=\"$ctrl.type\" ng-show=\"$ctrl.visible\"><text-value-editor ng-switch-when=\"text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></text-value-editor><number-value-editor ng-switch-when=\"number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-value-editor><boolean-value-editor ng-switch-when=\"boolean\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></boolean-value-editor><hidden-value-editor ng-switch-when=\"hidden\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></hidden-value-editor><html-value-editor ng-switch-when=\"html\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></html-value-editor><date-value-editor ng-switch-when=\"date\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></date-value-editor><acceptable-value-editor ng-switch-when=\"acceptable\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></acceptable-value-editor><year-value-editor ng-switch-when=\"year\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></year-value-editor><card-number-value-editor ng-switch-when=\"card-number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></card-number-value-editor><index-selection-value-editor ng-switch-when=\"index-selection\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></index-selection-value-editor><autocomplete-value-editor ng-switch-when=\"autocomplete\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></autocomplete-value-editor></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/select.tpl.pug';
var html = "<ui-select input-id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" {{multiselectable ? 'multiple' : ''}}=\"\" close-on-select=\"{{!multiselectable}}\" sortable=\"$ctrl.options.reorderable\" ng-disabled=\"$ctrl.valueEditorController.disabled || $ctrl.options.acceptableValues.length === 1 && $ctrl.valueEditorController.validations.required\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"><ui-select-choices repeat=\"$item in $ctrl.options.acceptableValues {{sort ? '| orderBy : \\'\\' : false : $ctrl.uiSelectComparator' : ''}} {{searchable ? '| filter:$select.search' : ''}} track by $index\">{{optionsTemplate}}</ui-select-choices><ui-select-match placeholder=\"\\{\\{$ctrl.valueEditorController.placeholder\\}\\}\">{{multiselectable ? multiSelectedValueTemplate : singleSelectedValueTemplate}}</ui-select-match></ui-select>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/checkboxes.tpl.pug';
var html = "<div class=\"checkboxes-mode\" ng-class=\"{'with-more': $ctrl.hasMore()}\" data-main-input=\"data-main-input\"><ul ng-ref=\"ulElement\"><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValues() track by $index\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li><li class=\"more-container {{uuid}}\" ng-if=\"$ctrl.hasMore()\"><style type=\"text/css\">acceptable-value-editor #check-{{uuid}}:checked ~ ul {\n    max-height: {{'{' + '{ulElement[0].children[0].offsetHeight * $ctrl.getMoreCount()}' + '}'}}px;\n}\n</style><input class=\"more-checkbox\" id=\"check-{{uuid}}\" type=\"checkbox\" ng-model=\"expanded\"/><label class=\"more-label\" for=\"check-{{uuid}}\"><i class=\"glyphicon\" ng-class=\"expanded ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'\"></i><span ng-show=\"expanded\">{{ '{' + '{$ctrl.acceptableValueEditorLocalizationsService.getLocalization(\"less\")}' + '}' }}</span><span ng-hide=\"expanded\">{{ '{' + '{$ctrl.acceptableValueEditorLocalizationsService.getLocalization(\"more\")}' + '}' }} ({{ '{' + '{$ctrl.getMoreCount()}' + '}' }})</span></label><ul><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValues($ctrl.options.showFirstCount, 9007199254740990) track by $index\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.disabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li></ul></li></ul><div class=\"btn-group\"><button class=\"btn btn-default btn-xs select-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === $ctrl.options.acceptableValues.length\" ng-click=\"$ctrl.model = $ctrl.options.acceptableValues.slice()\">{{ '{' + '{$ctrl.acceptableValueEditorLocalizationsService.getLocalization(\"selectAll\")}' + '}' }}</button><button class=\"btn btn-default btn-xs deselect-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === 0\" ng-click=\"$ctrl.model = []\">{{ '{' + '{$ctrl.acceptableValueEditorLocalizationsService.getLocalization(\"deselectAll\")}' + '}' }}</button></div></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/acceptable.value-editor.tpl.pug';
var html = "<ng-include src=\"$ctrl.templateName\"></ng-include>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);

var angular = __webpack_require__(4);
/**
 * @ngdoc constant
 * @name acceptableValueEditorDefaultOptions
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * For description see {@link AcceptableValueEditorOptions}
 *
 * ```javascript
 *  {
 *      cssClasses: ['form-control'],
 *      acceptableValues: [],
 *      multiselectable: false,
 *      searchable: true,
 *      optionsTemplate: '{{$item}}',
 *      singleSelectedValueTemplate: '{{$select.selected}}',
 *      multiSelectedValueTemplate: '{{$item}}',
 *      equalityComparator: angular.equals,
 *      reorderable: false,
 *      showFirstCount: 0,
 *      selectedFirst: false,
 *      sortComparator: undefined,
 *      sortModel: false,
 *      switchToCheckboxesThreshold: 13
 *  }
 * ```
 */


exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  cssClasses: ['form-control'],
  acceptableValues: [],
  multiselectable: false,
  searchable: true,
  optionsTemplate: '{{$item}}',
  singleSelectedValueTemplate: '{{$select.selected}}',
  multiSelectedValueTemplate: '{{$item}}',
  equalityComparator: angular.equals,
  reorderable: false,
  showFirstCount: 0,
  selectedFirst: false,
  sortComparator: undefined,
  sortModel: false,
  switchToCheckboxesThreshold: 13
};
/**
 * @ngdoc provider
 * @name acceptableValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableValueEditorDefaultOptions}
 */

var AcceptableValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorConfigurationProvider.$inject = ["acceptableValueEditorDefaultOptions"];

  _inherits(AcceptableValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorConfigurationProvider);

  /*@ngInject*/
  function AcceptableValueEditorConfigurationProvider(acceptableValueEditorDefaultOptions) {
    _classCallCheck(this, AcceptableValueEditorConfigurationProvider);

    return _super.call(this, acceptableValueEditorDefaultOptions);
  }

  return AcceptableValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AcceptableValueEditorConfigurationProvider;
AcceptableValueEditorConfigurationProvider.providerName = 'acceptableValueEditorConfigurationService';

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var boolean_value_editor_configuration_provider_1 = __webpack_require__(26);

var boolean_value_editor_component_1 = __webpack_require__(27);
/**
 * @ngdoc module
 * @name angularjs-value-editor.boolean
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.boolean').constant('booleanValueEditorDefaultOptions', boolean_value_editor_configuration_provider_1.BOOLEAN_VALUE_EDITOR_DEFAULT_OPTIONS).provider(boolean_value_editor_configuration_provider_1.default.providerName, boolean_value_editor_configuration_provider_1.default).component(boolean_value_editor_component_1.default.componentName, boolean_value_editor_component_1.default).name();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name booleanValueEditorDefaultOptions
 * @module angularjs-value-editor.boolean
 *
 * @description
 * For description see {@link BooleanValueEditorOptions}
 *
 * ```javascript
 *  {
 *      type: 'checkbox',
 *      trueValue: undefined,
 *      falseValue: undefined,
 *      nullAsIndeterminate: false
 *  }
 * ```
 */


exports.BOOLEAN_VALUE_EDITOR_DEFAULT_OPTIONS = {
  type: 'checkbox',
  trueValue: undefined,
  falseValue: undefined,
  nullAsIndeterminate: false
};
/**
 * @ngdoc provider
 * @name booleanValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link booleanValueEditorDefaultOptions}
 */

var BooleanValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorConfigurationProvider.$inject = ["booleanValueEditorDefaultOptions"];

  _inherits(BooleanValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorConfigurationProvider);

  /*@ngInject*/
  function BooleanValueEditorConfigurationProvider(booleanValueEditorDefaultOptions) {
    _classCallCheck(this, BooleanValueEditorConfigurationProvider);

    return _super.call(this, booleanValueEditorDefaultOptions);
  }

  return BooleanValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = BooleanValueEditorConfigurationProvider;
BooleanValueEditorConfigurationProvider.providerName = 'booleanValueEditorConfigurationService';

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(28);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var BooleanValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorComponentController.$inject = ["$scope", "booleanValueEditorConfigurationService"];

  _inherits(BooleanValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorComponentController);

  /*@ngInject*/
  function BooleanValueEditorComponentController($scope, booleanValueEditorConfigurationService) {
    _classCallCheck(this, BooleanValueEditorComponentController);

    return _super.call(this, $scope, booleanValueEditorConfigurationService);
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
 * @module angularjs-value-editor.boolean
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
  this.templateUrl = __webpack_require__(29);
  this.controller = BooleanValueEditorComponentController;
};

exports.default = BooleanValueEditorComponent;
BooleanValueEditorComponent.componentName = 'booleanValueEditor';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/boolean/boolean.value-editor.tpl.pug';
var html = "<span class=\"pretty p-icon p-smooth p-curve {{$ctrl.options.cssClasses.join(' ')}}\" ng-class=\"{'p-has-indeterminate': $ctrl.options.nullAsIndeterminate}\"><input type=\"checkbox\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-ref=\"$ctrl.inputElementModelController\" ng-ref-read=\"ngModel\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" data-main-input=\"data-main-input\"/><div class=\"state\"><i class=\"icon glyphicon glyphicon-ok\"></i><label></label></div><div class=\"state p-is-indeterminate\"><i class=\"icon glyphicon glyphicon-minus\"></i><label></label></div></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_date_parser_1 = __webpack_require__(31);

var angularjs_bootstrap_datetimepicker_1 = __webpack_require__(32);

var angularjs_register_1 = __webpack_require__(0);

var date_value_editor_component_1 = __webpack_require__(33);

var date_value_editor_configuration_provider_1 = __webpack_require__(36);
/**
 * @ngdoc module
 * @name angularjs-value-editor.date
 * @module angularjs-value-editor.date
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.date', [angularjs_date_parser_1.default, angularjs_bootstrap_datetimepicker_1.default]).constant('dateValueEditorDefaultOptions', date_value_editor_configuration_provider_1.DATE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(date_value_editor_configuration_provider_1.default.providerName, date_value_editor_configuration_provider_1.default).component(date_value_editor_component_1.default.componentName, date_value_editor_component_1.default).name();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(34);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var luxon_1 = __webpack_require__(9);

var DateValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorComponentController.$inject = ["$scope", "dateValueEditorConfigurationService"];

  _inherits(DateValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorComponentController);

  /*@ngInject*/
  function DateValueEditorComponentController($scope, dateValueEditorConfigurationService) {
    _classCallCheck(this, DateValueEditorComponentController);

    return _super.call(this, $scope, dateValueEditorConfigurationService);
  }

  _createClass(DateValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(DateValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.startView = this.options.maximumGranularity;
    }
  }, {
    key: "dateRestriction",
    value: function dateRestriction(dates, view) {
      if (!this.valueEditorController.validations) {
        return;
      }

      var minDate = luxon_1.DateTime.fromISO(this.valueEditorController.validations.minDate);
      var maxDate = luxon_1.DateTime.fromISO(this.valueEditorController.validations.maxDate);

      if (!maxDate.isValid && !minDate.isValid) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(dates),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var date = _step.value;
          date.selectable = (!minDate.isValid || minDate.startOf(view) <= date.dateTime.startOf(view)) && (!maxDate.isValid || date.dateTime.startOf(view) <= maxDate.startOf(view));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whichOptionChanged) {
      if (whichOptionChanged.maximumGranularity) {
        if (newOptions.maximumGranularity === 'minute') {
          this.startView = 'day';
        } else {
          this.startView = newOptions.maximumGranularity;
        }
      }
    }
  }]);

  return DateValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.DateValueEditorComponentController = DateValueEditorComponentController;
/**
 * @ngdoc component
 * @name dateValueEditor
 * @module angularjs-value-editor.date
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for date input.
 *
 * Supported options: {@link type:DateValueEditorOptions}
 *
 * Supported validations: {@link type:DateValueEditorValidations}
 *
 * @example
 * <example name="dateValueEditorExample" module="dateValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'date'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('dateValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var DateValueEditorComponent = function DateValueEditorComponent() {
  _classCallCheck(this, DateValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(35);
  this.controller = DateValueEditorComponentController;
};

exports.default = DateValueEditorComponent;
DateValueEditorComponent.componentName = 'dateValueEditor';

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/date/date.value-editor.tpl.pug';
var html = "<div class=\"input-group\" uib-dropdown=\"\" dropdown-append-to-body=\"\" is-open=\"datePickerOpen\"><input type=\"text\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" kp-date-parser=\"kp-date-parser\" min-date=\"$ctrl.valueEditorController.validations.minDate ? $ctrl.valueEditorController.validations.minDate : null\" max-date=\"$ctrl.valueEditorController.validations.maxDate ? $ctrl.valueEditorController.validations.maxDate : null\" view-format=\"{{$ctrl.options.viewFormat}}\" data-main-input=\"data-main-input\"/><div uib-dropdown-menu=\"\"><datetimepicker ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" datetimepicker-config=\"{minView: $ctrl.options.maximumGranularity, startView: $ctrl.startView}\" on-set-time=\"datePickerOpen = false\" before-render=\"$ctrl.dateRestriction($dates, $view)\" view-format=\"{{$ctrl.options.viewFormat}}\" kp-date-parser=\"kp-date-parser\"></datetimepicker></div><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" uib-dropdown-toggle=\"\"><span class=\"glyphicon glyphicon-calendar\"></span></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name dateValueEditorDefaultOptions
 * @module angularjs-value-editor.date
 *
 * @description
 * For description see {@link DateValueEditorOptions}
 *
 * ```javascript
 *  {
 *      cssClasses: ['form-control'],
 *      maximumGranularity: 'day',
 *      viewFormat: 'd.L.y'
 *  }
 * ```
 */


exports.DATE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  cssClasses: ['form-control'],
  maximumGranularity: 'day',
  viewFormat: 'd.L.y'
};
/**
 * @ngdoc provider
 * @name dateValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.date
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link dateValueEditorDefaultOptions}
 */

var DateValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorConfigurationProvider.$inject = ["dateValueEditorDefaultOptions"];

  _inherits(DateValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorConfigurationProvider);

  /*@ngInject*/
  function DateValueEditorConfigurationProvider(dateValueEditorDefaultOptions) {
    _classCallCheck(this, DateValueEditorConfigurationProvider);

    return _super.call(this, dateValueEditorDefaultOptions);
  }

  return DateValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = DateValueEditorConfigurationProvider;
DateValueEditorConfigurationProvider.providerName = 'dateValueEditorConfigurationService';

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var hidden_value_editor_component_1 = __webpack_require__(38);
/**
 * @ngdoc module
 * @name angularjs-value-editor.hidden
 * @module angularjs-value-editor.hidden
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.hidden').component(hidden_value_editor_component_1.default.componentName, hidden_value_editor_component_1.default).name();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var HiddenValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(HiddenValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HiddenValueEditorComponentController);

  function HiddenValueEditorComponentController() {
    _classCallCheck(this, HiddenValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(HiddenValueEditorComponentController, [{
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }]);

  return HiddenValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.HiddenValueEditorComponentController = HiddenValueEditorComponentController;
/**
 * @ngdoc component
 * @name hiddenValueEditor
 * @module angularjs-value-editor.hidden
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for store any value.
 *
 * Supported options: {@link type:ValueEditorOptions}
 *
 * Supported validations: None
 *
 * @example
 * <example name="hiddenValueEditorExample" module="hiddenValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'hidden'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('hiddenValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var HiddenValueEditorComponent = function HiddenValueEditorComponent() {
  _classCallCheck(this, HiddenValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(39);
  this.controller = HiddenValueEditorComponentController;
};

exports.default = HiddenValueEditorComponent;
HiddenValueEditorComponent.componentName = 'hiddenValueEditor';

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/hidden/hidden.value-editor.tpl.pug';
var html = "<input type=\"hidden\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-class=\"$ctrl.options.cssClasses\" ng-value=\"$ctrl.model\" ng-disabled=\"$ctrl.valueEditorController.disabled\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var html_value_editor_component_1 = __webpack_require__(41);

var html_value_editor_configuration_provider_1 = __webpack_require__(43);
/**
 * @ngdoc module
 * @name angularjs-value-editor.html-editor
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.html').constant('htmlValueEditorDefaultOptions', html_value_editor_configuration_provider_1.HTML_VALUE_EDITOR_DEFAULT_OPTIONS).provider(html_value_editor_configuration_provider_1.default.providerName, html_value_editor_configuration_provider_1.default).component(html_value_editor_component_1.default.componentName, html_value_editor_component_1.default).name();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var HtmlValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorComponentController.$inject = ["$scope", "htmlValueEditorConfigurationService"];

  _inherits(HtmlValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorComponentController);

  /*@ngInject*/
  function HtmlValueEditorComponentController($scope, htmlValueEditorConfigurationService) {
    _classCallCheck(this, HtmlValueEditorComponentController);

    return _super.call(this, $scope, htmlValueEditorConfigurationService);
  }

  _createClass(HtmlValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(HtmlValueEditorComponentController.prototype), "$postLink", this).call(this);

      this.$scope.$applyAsync(this.initTrumbowyg.bind(this));
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      this.container.trumbowyg('destroy');

      if (this.disabledEventDeregisterer) {
        this.disabledEventDeregisterer();
      }

      this.container.off('tbwchange tbwpaste');
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }, {
    key: "initTrumbowyg",
    value: function initTrumbowyg() {
      var _this = this;

      var options = _objectSpread({}, this.options.editorOptions, {
        disabled: this.valueEditorController.disabled
      });

      this.container.trumbowyg(options);
      this.container.on('tbwchange tbwpaste', function () {
        return _this.container.triggerHandler('input');
      });
      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        originalRender();

        _this.container.trumbowyg('html', _this.model);
      };

      this.disabledEventDeregisterer = this.$scope.$on(value_editor_component_1.EVENTS.disabled, function (event, _ref) {
        var disabled = _ref.disabled;
        return _this.container.trumbowyg(disabled ? 'disable' : 'enable');
      });
    }
  }]);

  return HtmlValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.HtmlValueEditorComponentController = HtmlValueEditorComponentController;
/**
 * @ngdoc component
 * @name htmlValueEditor
 * @module angularjs-value-editor.html-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 * @requires http://jquery.com/ jQuery
 * @requires https://alex-d.github.io/Trumbowyg/documentation/#installation Trumbowyg dependencies and plugins.
 *
 * @description
 * Value editor for formatted text input.
 *
 * Component uses <a href="https://alex-d.github.io/Trumbowyg/documentation/#basic-options">Trumbowyg editor</a>,
 * because it is lightweight, (almost) libraries agnostic with possibility to be, in near future, jQuery less.
 *
 * It is required to attach also table and colors plugins - more info how to do it can be find in Trumbowyg site.
 * For attaching SVGs via webpack use this configuration:
 * ```javascript
 *      $.trumbowyg.svgPath = require('trumbowyg/dist/ui/icons.svg');
 * ```
 *
 * Supported options: {@link type:HtmlValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="htmlValueEditorExample" module="htmlValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/ui/trumbowyg.min.css">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/colors/ui/trumbowyg.colors.min.css">
 *         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/table/ui/trumbowyg.table.min.css">
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/trumbowyg.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/colors/trumbowyg.colors.min.js"></script>
 *         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/plugins/table/trumbowyg.table.min.js"></script>
 *         <main>
 *             <em>Example probably doesn't work, because jQuery is need to be load before angular. You can use >>Edit in Plunker<< button and prepend jQuery script tag before angular.</em>
 *             <em>Hmmm... It isn't all yet. You must load SVG icons, but plunker doesn't allow CORS requests. No help...</em>
 *              <kp-value-editor type="'html'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('htmlValueEditorExample', ['angularjs-value-editor']);
 *         $(document).ready(() => {
 *             $.trumbowyg.svgPath = 'https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.14.0/ui/icons.svg';
 *         });
 *     </file>
 * </example>
 */

var HtmlValueEditorComponent = function HtmlValueEditorComponent() {
  _classCallCheck(this, HtmlValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(42);
  this.controller = HtmlValueEditorComponentController;
};

exports.default = HtmlValueEditorComponent;
HtmlValueEditorComponent.componentName = 'htmlValueEditor';

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/html/html.value-editor.tpl.pug';
var html = "<textarea ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.name}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-ref=\"$ctrl.container\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"></textarea>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name htmlValueEditorDefaultOptions
 * @module angularjs-value-editor.html-editor
 *
 * @description
 * For description see {@link HtmlValueEditorOptions}
 *
 * Default value:
 *
 * ```javascript
 * {
 *      editorOptions: {
 *          btns: [
 *              ['formatting'],
 *              ['bold', 'italic', 'underline', 'del', 'removeformat'],
 *              ['superscript', 'subscript'],
 *              ['foreColor', 'backColor'],
 *              ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
 *              ['unorderedList', 'orderedList'],
 *              ['table'],
 *              ['link', 'insertImage'],
 *              ['fullscreen', 'viewHTML']
 *          ]
 *      }
 *  }
 * ```
 */


exports.HTML_VALUE_EDITOR_DEFAULT_OPTIONS = {
  editorOptions: {
    btns: [['formatting'], ['bold', 'italic', 'underline', 'del', 'removeformat'], ['superscript', 'subscript'], ['foreColor', 'backColor'], ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'], ['unorderedList', 'orderedList'], ['table'], ['link', 'insertImage'], ['fullscreen', 'viewHTML']]
  }
};
/**
 * @ngdoc provider
 * @name htmlValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link htmlValueEditorDefaultOptions}
 */

var HtmlValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorConfigurationProvider.$inject = ["htmlValueEditorDefaultOptions"];

  _inherits(HtmlValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorConfigurationProvider);

  /*@ngInject*/
  function HtmlValueEditorConfigurationProvider(htmlValueEditorDefaultOptions) {
    _classCallCheck(this, HtmlValueEditorConfigurationProvider);

    return _super.call(this, htmlValueEditorDefaultOptions);
  }

  return HtmlValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = HtmlValueEditorConfigurationProvider;
HtmlValueEditorConfigurationProvider.providerName = 'htmlValueEditorConfigurationService';

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var number_value_editor_component_1 = __webpack_require__(45);

var number_value_editor_configuration_provider_1 = __webpack_require__(48);
/**
 * @ngdoc module
 * @name angularjs-value-editor.number
 * @module angularjs-value-editor.number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.number').constant('numberValueEditorDefaultOptions', number_value_editor_configuration_provider_1.NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).provider(number_value_editor_configuration_provider_1.default.providerName, number_value_editor_configuration_provider_1.default).component(number_value_editor_component_1.default.componentName, number_value_editor_component_1.default).name();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(46);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var NumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorComponentController.$inject = ["$scope", "numberValueEditorConfigurationService"];

  _inherits(NumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorComponentController);

  /*@ngInject*/
  function NumberValueEditorComponentController($scope, numberValueEditorConfigurationService) {
    _classCallCheck(this, NumberValueEditorComponentController);

    return _super.call(this, $scope, numberValueEditorConfigurationService);
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
 * @module angularjs-value-editor.number
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
  this.templateUrl = __webpack_require__(47);
  this.controller = NumberValueEditorComponentController;
};

exports.default = NumberValueEditorComponent;
NumberValueEditorComponent.componentName = 'numberValueEditor';

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number/number.value-editor.tpl.pug';
var html = "<input class=\"{{$ctrl.options.hideSpinners ? 'hide-spinners' : ''}}\" type=\"number\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" step=\"{{$ctrl.options.step}}\" min=\"{{$ctrl.valueEditorController.validations.min}}\" max=\"{{$ctrl.valueEditorController.validations.max}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name numberValueEditorDefaultOptions
 * @module angularjs-value-editor.number
 *
 * @description
 * For description see {@link NumberValueEditorOptions}
 *
 * Default value:
 * ```javascript
 *  {
 *      decimal: false,
 *      step: 1,
 *      hideSpinners: false
 *  }
 * ```
 */


exports.NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  decimal: false,
  step: 1,
  hideSpinners: false
};
/**
 * @ngdoc provider
 * @name numberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberValueEditorDefaultOptions}
 */

var NumberValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorConfigurationProvider.$inject = ["numberValueEditorDefaultOptions"];

  _inherits(NumberValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorConfigurationProvider);

  /*@ngInject*/
  function NumberValueEditorConfigurationProvider(numberValueEditorDefaultOptions) {
    _classCallCheck(this, NumberValueEditorConfigurationProvider);

    return _super.call(this, numberValueEditorDefaultOptions);
  }

  return NumberValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = NumberValueEditorConfigurationProvider;
NumberValueEditorConfigurationProvider.providerName = 'numberValueEditorConfigurationService';

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(50);

var angularjs_register_1 = __webpack_require__(0);

var text_value_editor_component_1 = __webpack_require__(51);

var text_value_editor_configuration_provider_1 = __webpack_require__(54);
/**
 * @ngdoc module
 * @name angularjs-value-editor.text
 * @module angularjs-value-editor.text
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.text', ['ui.ace']).constant('textValueEditorDefaultOptions', text_value_editor_configuration_provider_1.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS).provider(text_value_editor_configuration_provider_1.default.providerName, text_value_editor_configuration_provider_1.default).component(text_value_editor_component_1.default.componentName, text_value_editor_component_1.default).name();

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__50__;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(52);

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var TextValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorComponentController.$inject = ["$scope", "textValueEditorConfigurationService"];

  _inherits(TextValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorComponentController);

  /*@ngInject*/
  function TextValueEditorComponentController($scope, textValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, TextValueEditorComponentController);

    _this = _super.call(this, $scope, textValueEditorConfigurationService);
    _this.textValueEditorConfigurationService = textValueEditorConfigurationService;
    return _this;
  }
  /**
   * Get number of rows between nim and max range.
   */


  _createClass(TextValueEditorComponentController, [{
    key: "getNumberOfRows",
    value: function getNumberOfRows() {
      var minRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var maxRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      if (this.model) {
        return Math.min(Math.max(this.countRowsInString(this.model), minRows), maxRows);
      }

      return minRows;
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      var _this2 = this;

      if (whatChanged.type && this.options.type === 'rich-textarea') {
        if (!this.options.aceOptions) {
          this.options.aceOptions = this.textValueEditorConfigurationService.getConfiguration().aceOptions;
        }

        this.options.aceOptions.onLoad = function (ace) {
          _this2.aceEditor = ace;

          _this2.initACE();
        };
      }
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
      var _this3 = this;

      // Original directive doesn't sets model to touched if ACE editor is blurred. This fixes it.
      this.aceEditor.on('blur', function () {
        _this3.ngModelController.$setTouched();

        _this3.$scope.$apply();
      }); // Propagate disabled -> set Ace to readonly

      this.aceEditor.setReadOnly(this.valueEditorController.disabled);
      this.$scope.$on(value_editor_component_1.EVENTS.disabled, function (event, _ref) {
        var disabled = _ref.disabled;

        _this3.aceEditor.setReadOnly(disabled);
      });
    }
  }]);

  return TextValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.TextValueEditorComponentController = TextValueEditorComponentController;
/**
 * @ngdoc component
 * @name textValueEditor
 * @module angularjs-value-editor.text
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
  this.templateUrl = __webpack_require__(53);
  this.controller = TextValueEditorComponentController;
};

exports.default = TextValueEditorComponent;
TextValueEditorComponent.componentName = 'textValueEditor';

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/text/text.value-editor.tpl.pug';
var html = "<!-- TEXT--><input ng-if=\"$ctrl.options.type === 'text'\" type=\"{{$ctrl.options.type}}\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"/><!-- TEXTAREA--><textarea ng-if=\"$ctrl.options.type === 'textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" rows=\"{{$ctrl.getNumberOfRows()}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-trim=\"false\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></textarea><!-- ACE EDITOR--><div class=\"ace-editor\" ng-if=\"$ctrl.options.type === 'rich-textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" ng-class=\"$ctrl.options.cssClasses\" ui-ace=\"$ctrl.options.aceOptions\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" data-main-input=\"data-main-input\"></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name textValueEditorDefaultOptions
 * @module angularjs-value-editor.text
 *
 * @description
 * For description see {@link TextValueEditorOptions}
 *
 * ```javascript
 *  {
 *      type: 'text',
 *      aceOptions: {
 *          useWrapMode: false,
 *          showGutter: true
 *      }
 *  }
 * ```
 */


exports.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS = {
  type: 'text',
  aceOptions: {
    useWrapMode: false,
    showGutter: true
  }
};
/**
 * @ngdoc provider
 * @name textValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.text
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link textValueEditorDefaultOptions}
 */

var TextValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorConfigurationProvider.$inject = ["textValueEditorDefaultOptions"];

  _inherits(TextValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorConfigurationProvider);

  /*@ngInject*/
  function TextValueEditorConfigurationProvider(textValueEditorDefaultOptions) {
    _classCallCheck(this, TextValueEditorConfigurationProvider);

    return _super.call(this, textValueEditorDefaultOptions);
  }

  return TextValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = TextValueEditorConfigurationProvider;
TextValueEditorConfigurationProvider.providerName = 'textValueEditorConfigurationService';

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var year_value_editor_component_1 = __webpack_require__(56);
/**
 * @ngdoc module
 * @name angularjs-value-editor.year
 * @module angularjs-value-editor.year
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.year').component(year_value_editor_component_1.default.componentName, year_value_editor_component_1.default).name();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var luxon_1 = __webpack_require__(9);

var YearValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(YearValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(YearValueEditorComponentController);

  function YearValueEditorComponentController() {
    _classCallCheck(this, YearValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(YearValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(YearValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.ngModelController.$parsers.push(this.modelFormatter);
      this.ngModelController.$formatters.push(this.modelParser);
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "convertYearToISO",
    value: function convertYearToISO(year) {
      var retVal = year ? luxon_1.DateTime.fromFormat(String(year), 'y').toISODate() : undefined; // console.log(retVal);

      return retVal;
    }
  }, {
    key: "convertISOToYear",
    value: function convertISOToYear(date) {
      return date ? luxon_1.DateTime.fromISO(date).year : undefined;
    }
  }, {
    key: "modelFormatter",
    value: function modelFormatter(isoDate) {
      if (isoDate) {
        // console.log(isoDate);
        return luxon_1.DateTime.fromISO(isoDate).year;
      }

      return isoDate;
    }
  }, {
    key: "modelParser",
    value: function modelParser(year) {
      if (year) {
        var parsed = luxon_1.DateTime.fromFormat(String(year), 'y').toISODate(); // console.log(parsed);

        return parsed;
      }

      return year;
    }
  }]);

  return YearValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.YearValueEditorComponentController = YearValueEditorComponentController;
/**
 * @ngdoc component
 * @name yearValueEditor
 * @module angularjs-value-editor.year
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for year input.
 *
 * Supported options: {@link type:YearValueEditorOptions}
 *
 * Supported validations: {@link type:YearValueEditorValidations}
 *
 * @example
 * <example name="yearValueEditorExample" module="yearValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'year'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('yearValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */

var YearValueEditorComponent = function YearValueEditorComponent() {
  _classCallCheck(this, YearValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(57);
  this.controller = YearValueEditorComponentController;
};

exports.default = YearValueEditorComponent;
YearValueEditorComponent.componentName = 'yearValueEditor';

/***/ }),
/* 57 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/year/year.value-editor.tpl.pug';
var html = "<kp-value-editor class=\"{{$ctrl.options.cssClasses}}\" editor-id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" type=\"'date'\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" disabled=\"$ctrl.valueEditorController.disabled\" options=\"{viewFormat: 'y', maximumGranularity: 'year'}\" validations=\"{minDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.minDate), maxDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.maxDate), required: $ctrl.valueEditorController.validations.required}\"></kp-value-editor>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var card_number_value_editor_configuration_provider_1 = __webpack_require__(59);

var card_number_value_editor_localization_provider_1 = __webpack_require__(60);

var card_number_value_editor_component_1 = __webpack_require__(61);
/**
 * @ngdoc module
 * @name angularjs-value-editor.card-number
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.card-number').constant('cardNumberValueEditorDefaultOptions', card_number_value_editor_configuration_provider_1.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).constant('cardNumberValueEditorDefaultLocalizations', card_number_value_editor_localization_provider_1.CARD_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(card_number_value_editor_configuration_provider_1.default.providerName, card_number_value_editor_configuration_provider_1.default).provider(card_number_value_editor_localization_provider_1.default.providerName, card_number_value_editor_localization_provider_1.default).component(card_number_value_editor_component_1.default.componentName, card_number_value_editor_component_1.default).name();

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name cardNumberValueEditorDefaultOptions
 * @module angularjs-value-editor.card-number
 *
 * @description
 * For description see {@link CardNumberValueEditorOptions}
 *
 * ```javascript
 *  {
 *      inputSize: 'sm',
 *      requestParameters: {},
 *      requestFunction: (requestParameters, additionalParameters) => Promise.resolve(additionalParameters.currentValue)
 *  }
 * ```
 */


exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  inputSize: 'sm',
  requestParameters: {},
  requestFunction: function requestFunction(requestParameters, additionalParameters) {
    return Promise.resolve(additionalParameters.currentValue);
  }
};
/**
 * @ngdoc provider
 * @name cardNumberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link cardNumberValueEditorDefaultOptions}
 */

var CardNumberValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorConfigurationProvider.$inject = ["cardNumberValueEditorDefaultOptions"];

  _inherits(CardNumberValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorConfigurationProvider);

  /*@ngInject*/
  function CardNumberValueEditorConfigurationProvider(cardNumberValueEditorDefaultOptions) {
    _classCallCheck(this, CardNumberValueEditorConfigurationProvider);

    return _super.call(this, cardNumberValueEditorDefaultOptions);
  }

  return CardNumberValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = CardNumberValueEditorConfigurationProvider;
CardNumberValueEditorConfigurationProvider.providerName = 'cardNumberValueEditorConfigurationService';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_localization_provider_1 = __webpack_require__(6);
/**
 * @ngdoc provider
 * @name cardNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 * See {@link cardNumberValueEditorLocalizationsService}
 */


var CardNumberValueEditorLocalizationsProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorLocalizationsProvider.$inject = ["cardNumberValueEditorDefaultLocalizations"];

  _inherits(CardNumberValueEditorLocalizationsProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorLocalizationsProvider);

  /*@ngInject*/
  function CardNumberValueEditorLocalizationsProvider(cardNumberValueEditorDefaultLocalizations) {
    _classCallCheck(this, CardNumberValueEditorLocalizationsProvider);

    return _super.call(this, cardNumberValueEditorDefaultLocalizations);
  }

  return CardNumberValueEditorLocalizationsProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = CardNumberValueEditorLocalizationsProvider;
CardNumberValueEditorLocalizationsProvider.providerName = 'cardNumberValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name cardNumberValueEditorDefaultLocalizations
 * @module angularjs-value-editor.card-number
 *
 * @description
 * ```
 * {
 *     generate: 'Generate'
 * }
 * ```
 */

exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  generate: 'Generate'
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_1 = __webpack_require__(2);

var value_editor_component_1 = __webpack_require__(1);

var CardNumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorComponentController.$inject = ["$scope", "cardNumberValueEditorConfigurationService", "cardNumberValueEditorLocalizationsService", "$timeout"];

  _inherits(CardNumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorComponentController);

  /*@ngInject*/
  function CardNumberValueEditorComponentController($scope, cardNumberValueEditorConfigurationService, cardNumberValueEditorLocalizationsService, $timeout) {
    var _this;

    _classCallCheck(this, CardNumberValueEditorComponentController);

    _this = _super.call(this, $scope, cardNumberValueEditorConfigurationService);
    _this.cardNumberValueEditorLocalizationsService = cardNumberValueEditorLocalizationsService;
    _this.$timeout = $timeout;
    return _this;
  }

  _createClass(CardNumberValueEditorComponentController, [{
    key: "generate",
    value: function () {
      var _generate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var originalButtonCursor, value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.options && typeof this.options.requestFunction === 'function')) {
                  _context.next = 26;
                  break;
                }

                originalButtonCursor = this.generationButton[0].style.cursor;
                this.generationButton[0].disabled = true;
                this.generationButton[0].style.cursor = 'wait';
                this.$timeout(function () {
                  return _this2.openPopover = false;
                });
                _context.prev = 5;
                _context.next = 8;
                return this.options.requestFunction(this.options.requestParameters, {
                  inputName: this.valueEditorController.name,
                  currentValue: this.model
                });

              case 8:
                value = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                this.$timeout(function () {
                  _this2.openPopover = true;
                  _this2.popoverError = _context.t0;
                });

              case 14:
                _context.prev = 14;
                this.generationButton[0].disabled = false;
                this.generationButton[0].style.cursor = originalButtonCursor;
                return _context.finish(14);

              case 18:
                if (!value) {
                  _context.next = 24;
                  break;
                }

                if (!(typeof value === 'string')) {
                  _context.next = 23;
                  break;
                }

                this.model = value;
                _context.next = 24;
                break;

              case 23:
                throw new TypeError("Type of response value must be string: ".concat(value));

              case 24:
                _context.next = 27;
                break;

              case 26:
                throw new TypeError("requestFunction option is not Function: ".concat(this.options.requestFunction));

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 11, 14, 18]]);
      }));

      function generate() {
        return _generate.apply(this, arguments);
      }

      return generate;
    }()
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }]);

  return CardNumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.CardNumberValueEditorComponentController = CardNumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name cardNumberValueEditor
 * @module angularjs-value-editor.card-number
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for card-number input with possibility to generation from backend.
 *
 * Supported options: {@link type:CardNumberValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="cardNumberValueEditorExample" module="cardNumberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'card-number'" ng-model="model" options="{requestFunction: $ctrl.requestFunction}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('cardNumberValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              requestFunction() {
 *                  return new Promise((resolve) => {
 *                      setTimeout(() => {
 *                          resolve('Generated')
 *                      }, 1000);
 *                  });
 *              }
 *          });
 *     </file>
 * </example>
 */

var CardNumberValueEditorComponent = function CardNumberValueEditorComponent() {
  _classCallCheck(this, CardNumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(62);
  this.controller = CardNumberValueEditorComponentController;
};

exports.default = CardNumberValueEditorComponent;
CardNumberValueEditorComponent.componentName = 'cardNumberValueEditor';

/***/ }),
/* 62 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/card-number/card-number.value-editor.tpl.pug';
var html = "<div class=\"input-group\"><div class=\"input-group-btn\"><button class=\"btn btn-default generate\" type=\"button\" ng-class=\"{{$ctrl.options.inputSize}}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-click=\"$ctrl.generate()\" ng-ref=\"$ctrl.generationButton\" uib-popover=\"{{$ctrl.popoverError}}\" popover-is-open=\"$ctrl.openPopover\" popover-trigger=\"'none'\">{{$ctrl.cardNumberValueEditorLocalizationsService.getLocalization('generate')}}</button></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-class=\"$ctrl.options.cssClasses\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var index_selection_value_editor_component_1 = __webpack_require__(64);

var index_selection_value_editor_configuration_provider_1 = __webpack_require__(66);
/**
 * @ngdoc module
 * @name angularjs-value-editor.index-selection
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.index-selection').constant('indexSelectionValueEditorDefaultOptions', index_selection_value_editor_configuration_provider_1.INDEX_SELECTION_VALUE_EDITOR_DEFAULT_OPTIONS).provider(index_selection_value_editor_configuration_provider_1.default.providerName, index_selection_value_editor_configuration_provider_1.default).component(index_selection_value_editor_component_1.default.componentName, index_selection_value_editor_component_1.default).name();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var uuid_generator_1 = __webpack_require__(5);

var TEMPLATE_NAME_PREFIX = 'value-editor.indexSelectionValueEditor';

var IndexSelectionValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  IndexSelectionValueEditorComponentController.$inject = ["$scope", "indexSelectionValueEditorConfigurationService", "$interpolate", "$templateCache"];

  _inherits(IndexSelectionValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(IndexSelectionValueEditorComponentController);

  /*@ngInject*/
  function IndexSelectionValueEditorComponentController($scope, indexSelectionValueEditorConfigurationService, $interpolate, $templateCache) {
    var _this;

    _classCallCheck(this, IndexSelectionValueEditorComponentController);

    _this = _super.call(this, $scope, indexSelectionValueEditorConfigurationService);
    _this.indexSelectionValueEditorConfigurationService = indexSelectionValueEditorConfigurationService;
    _this.$interpolate = $interpolate;
    _this.$templateCache = $templateCache;
    _this.templateName = TEMPLATE_NAME_PREFIX;
    _this.uuid = uuid_generator_1.generateUuid();
    return _this;
  }

  _createClass(IndexSelectionValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(IndexSelectionValueEditorComponentController.prototype), "$onInit", this).call(this); // normalize model


      if (this.model && !Array.isArray(this.model)) {
        this.model = [this.model];
      }

      this.template = this.$templateCache.get(IndexSelectionValueEditorComponentController.TEMPLATE_URL);
      this.updateTemplate();
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      if (this.model !== undefined && this.model !== null) {
        var comparator = this.options.equalityComparator ? this.options.equalityComparator : this.indexSelectionValueEditorConfigurationService.getDefaults().equalityComparator;
        return comparator(this.model, item);
      }

      return false;
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.model = [item.id];
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.optionsTemplate) {
        this.updateTemplate();
      }
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate() {
      this.$templateCache.remove(this.templateName);
      var newTemplateName = "".concat(TEMPLATE_NAME_PREFIX, "_").concat(this.uuid, "_").concat(new Date().valueOf());
      var interpolated = this.$interpolate(this.template)({
        optionsTemplate: this.options.optionsTemplate
      });
      this.$templateCache.put(newTemplateName, interpolated);
      this.templateName = newTemplateName;
    }
  }]);

  return IndexSelectionValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.IndexSelectionValueEditorComponentController = IndexSelectionValueEditorComponentController;
IndexSelectionValueEditorComponentController.TEMPLATE_URL = __webpack_require__(65);
/**
 * @ngdoc component
 * @name indexSelectionValueEditor
 * @module angularjs-value-editor.index-selection
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for index select.
 *
 * From some unknown reason, model is array.
 *
 * Supported options: {@link type:ValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="indexSelectionValueEditorExample" module="indexSelectionValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as dc">
 *              <kp-value-editor type="'index-selection'" ng-model="model" options="{items: dc.items, optionsTemplate: '{{$item.text}}'}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('indexSelectionValueEditorExample', ['angularjs-value-editor'])
 *         .controller('demoController', class {
 *              items = [
 *                {
 *                    id: 1,
 *                    text: 'one'
 *                },
 *                {
 *                    id: 2,
 *                    text: 'two'
 *                },
 *                {
 *                    id: 3,
 *                    text: 'three'
 *                },
 *                {
 *                    id: 4,
 *                    text: 'four'
 *                }
 *            ];
 *         });
 *     </file>
 * </example>
 */

var IndexSelectionValueEditorComponent = function IndexSelectionValueEditorComponent() {
  _classCallCheck(this, IndexSelectionValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.template = '<ng-include src="$ctrl.templateName"></ng-include>';
  this.controller = IndexSelectionValueEditorComponentController;
};

exports.default = IndexSelectionValueEditorComponent;
IndexSelectionValueEditorComponent.componentName = 'indexSelectionValueEditor';

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/index-selection/index-selection.value-editor.tpl.pug';
var html = "<div class=\"list-group\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" ng-class=\"$ctrl.options.cssClasses\" data-main-input=\"data-main-input\"><button class=\"list-group-item\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-repeat=\"$item in $ctrl.options.items\" ng-class=\"{'active': $ctrl.isSelected($item), 'disabled': $ctrl.valueEditorController.disabled}\" ng-click=\"$ctrl.selectItem($item)\">{{optionsTemplate}}</button></div><input type=\"hidden\" name=\"\\{\\{$ctrl.valueEditorController.name\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);

var angular = __webpack_require__(4);
/**
 * @ngdoc constant
 * @name indexSelectionValueEditorDefaultOptions
 * @module angularjs-value-editor.index-selection
 *
 * @description
 * For description see {@link IndexSelectionValueEditorOptions}
 *
 * ```javascript
 *  {
 *      items: [],
 *      optionsTemplate: '{{$item}}',
 *      equalityComparator: (model, item) => angular.equals(Array.isArray(model) ? model[0] : model, item.id)
 *  }
 * ```
 */


exports.INDEX_SELECTION_VALUE_EDITOR_DEFAULT_OPTIONS = {
  items: [],
  optionsTemplate: '{{$item}}',
  equalityComparator: function equalityComparator(model, item) {
    return angular.equals(Array.isArray(model) ? model[0] : model, item.id);
  }
};
/**
 * @ngdoc provider
 * @name indexSelectionValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link indexSelectionValueEditorDefaultOptions}
 */

var IndexSelectionValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  IndexSelectionValueEditorConfigurationProvider.$inject = ["indexSelectionValueEditorDefaultOptions"];

  _inherits(IndexSelectionValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(IndexSelectionValueEditorConfigurationProvider);

  /*@ngInject*/
  function IndexSelectionValueEditorConfigurationProvider(indexSelectionValueEditorDefaultOptions) {
    _classCallCheck(this, IndexSelectionValueEditorConfigurationProvider);

    return _super.call(this, indexSelectionValueEditorDefaultOptions);
  }

  return IndexSelectionValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = IndexSelectionValueEditorConfigurationProvider;
IndexSelectionValueEditorConfigurationProvider.providerName = 'indexSelectionValueEditorConfigurationService';

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(68);

var angularjs_register_1 = __webpack_require__(0);

var autocomplete_value_editor_component_1 = __webpack_require__(69);

var autocomplete_value_editor_configuration_provider_1 = __webpack_require__(71);
/**
 * @ngdoc module
 * @name angularjs-value-editor.autocomplete
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.autocomplete').constant('autocompleteValueEditorDefaultOptions', autocomplete_value_editor_configuration_provider_1.AUTOCOMPLETE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(autocomplete_value_editor_configuration_provider_1.default.providerName, autocomplete_value_editor_configuration_provider_1.default).component(autocomplete_value_editor_component_1.default.componentName, autocomplete_value_editor_component_1.default).name();

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(2);

var angular = __webpack_require__(4);

var AutocompleteValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorComponentController.$inject = ["$scope", "autocompleteValueEditorConfigurationService", "loadingSpinnerTemplateUrl", "$log", "$timeout", "$element"];

  _inherits(AutocompleteValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorComponentController);

  /*@ngInject*/
  function AutocompleteValueEditorComponentController($scope, autocompleteValueEditorConfigurationService, loadingSpinnerTemplateUrl, $log, $timeout, $element) {
    var _this;

    _classCallCheck(this, AutocompleteValueEditorComponentController);

    _this = _super.call(this, $scope, autocompleteValueEditorConfigurationService);
    _this.autocompleteValueEditorConfigurationService = autocompleteValueEditorConfigurationService;
    _this.loadingSpinnerTemplateUrl = loadingSpinnerTemplateUrl;
    _this.$log = $log;
    _this.$timeout = $timeout;
    _this.$element = $element;
    _this.items = [];
    return _this;
  }

  _createClass(AutocompleteValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(AutocompleteValueEditorComponentController.prototype), "$postLink", this).call(this);

      var inputElement = this.$element[0].querySelector('input');
      this.inputNgModelController = angular.element(inputElement).controller('ngModel');
    }
  }, {
    key: "fetchItemsIfNeed",
    value: function () {
      var _fetchItemsIfNeed = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.items === null || Array.isArray(this.items) && this.items.length === 0)) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.fetchItems();

              case 4:
                this.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                this.$log.error('Cannot load items, error:', _context.t0);

              case 10:
                _context.next = 13;
                break;

              case 12:
                this.asyncCall();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function fetchItemsIfNeed() {
        return _fetchItemsIfNeed.apply(this, arguments);
      }

      return fetchItemsIfNeed;
    }()
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchItemsIfNeed();

              case 2:
                this.minLength = 0;
                this.asyncCall(function () {
                  return _this2.inputNgModelController.$parsers.forEach(function (parser) {
                    return parser(_this2.model);
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function open() {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "resetMinLength",
    value: function resetMinLength() {
      var _this3 = this;

      this.asyncCall(function () {
        return _this3.minLength = _this3.options.minLength;
      });
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "fetchItems",
    value: function () {
      var _fetchItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var items;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.asyncCall(function () {
                  return _this4.loading = true;
                });
                _context3.prev = 1;
                _context3.next = 4;
                return this.options.dataSource(Object.assign({}, {
                  query: this.model
                }, this.options.staticParams));

              case 4:
                items = _context3.sent;
                this.$log.debug('Loaded items: ', items);
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                this.$log.error('kp-autocomplete: Loading items failed, setting []: ', _context3.t0);
                items = [];

              case 12:
                _context3.prev = 12;
                this.asyncCall(function () {
                  return _this4.loading = false;
                });
                return _context3.finish(12);

              case 15:
                if (!items.some(function (item) {
                  return typeof item !== 'string';
                })) {
                  _context3.next = 17;
                  break;
                }

                throw new TypeError('Loaded items are not string values.');

              case 17:
                return _context3.abrupt("return", items);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8, 12, 15]]);
      }));

      function fetchItems() {
        return _fetchItems.apply(this, arguments);
      }

      return fetchItems;
    }()
  }, {
    key: "asyncCall",
    value: function asyncCall(func) {
      this.$timeout(func ? func.bind(this) : function () {
        return void 0;
      }, 0);
    }
  }]);

  return AutocompleteValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.AutocompleteValueEditorComponentController = AutocompleteValueEditorComponentController;
/**
 * @ngdoc component
 * @name autocompleteValueEditor
 * @module angularjs-value-editor.autocomplete
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for autocompletion input.
 *
 * Supported options: {@link type:AutocompleteValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="autocompleteValueEditorExample" module="autocompleteValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="demoController as dc">
 *              <kp-value-editor type="'autocomplete'" ng-model="model" options="{dataSource: dc.dataSource}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('autocompleteValueEditorExample', ['angularjs-value-editor'])
 *         .controller('demoController', ['$timeout', class {
 *
 *         constructor($timeout) {
 *             this.$timeout = $timeout;
 *         }
 *
 *         items = [
 *                'one',
 *                'two',
 *                'three',
 *                'four'
 *            ];
 *
 *            dataSource = () => new Promise((resolve) => this.$timeout(resolve(this.items), 1000));
 *         }]);
 *     </file>
 * </example>
 */

var AutocompleteValueEditorComponent = function AutocompleteValueEditorComponent() {
  _classCallCheck(this, AutocompleteValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(70);
  this.controller = AutocompleteValueEditorComponentController;
};

exports.default = AutocompleteValueEditorComponent;
AutocompleteValueEditorComponent.componentName = 'autocompleteValueEditor';

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/autocomplete/autocomplete.value-editor.tpl.pug';
var html = "<div class=\"kp-autocomplete input-group\"><input class=\"form-control\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.name}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" ng-focus=\"$ctrl.fetchItemsIfNeed()\" uib-typeahead=\"item for item in $ctrl.items | filter : $viewValue\" typeahead-is-open=\"$ctrl.isOpen\" typeahead-min-length=\"$ctrl.minLength\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" data-main-input=\"data-main-input\"/><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.disabled\" ng-click=\"$ctrl.open()\" ng-blur=\"$ctrl.resetMinLength()\"><i class=\"glyphicon glyphicon-chevron-down\" ng-hide=\"$ctrl.loading\"></i><ng-include class=\"autocomplete-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.loading\"></ng-include></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_configuration_provider_1 = __webpack_require__(3);
/**
 * @ngdoc constant
 * @name autocompleteValueEditorDefaultOptions
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 * For description see {@link AutocompleteValueEditorOptions}
 *
 * ```javascript
 * {
 *     minLength: 1,
 *     dataSource: () => Promise.resolve([]),
 *     staticParams: {}
 * }
 * ```
 */


exports.AUTOCOMPLETE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  dataSource: function dataSource() {
    return Promise.resolve([]);
  },
  minLength: 1,
  staticParams: {}
};
/**
 * @ngdoc provider
 * @name autocompleteValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link autocompleteValueEditorDefaultOptions}
 */

var AutocompleteValueEditorConfigurationProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorConfigurationProvider.$inject = ["autocompleteValueEditorDefaultOptions"];

  _inherits(AutocompleteValueEditorConfigurationProvider, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorConfigurationProvider);

  /*@ngInject*/
  function AutocompleteValueEditorConfigurationProvider(autocompleteValueEditorDefaultOptions) {
    _classCallCheck(this, AutocompleteValueEditorConfigurationProvider);

    return _super.call(this, autocompleteValueEditorDefaultOptions);
  }

  return AutocompleteValueEditorConfigurationProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AutocompleteValueEditorConfigurationProvider;
AutocompleteValueEditorConfigurationProvider.providerName = 'autocompleteValueEditorConfigurationService';

/***/ }),
/* 72 */
/***/ (function(module, exports) {

var path = '/home/travis/build/kp-sys/angularjs-value-editor/src/value-editor/resources/loading-spinner.svg';
var html = "<svg class=\"lds-spinner\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 20 60 60\" preserveAspectRatio=\"xMidYMid\">\n    <g transform=\"rotate(0 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9230769230769231s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(27.692307692307693 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8461538461538461s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(55.38461538461539 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(83.07692307692308 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6923076923076923s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(110.76923076923077 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6153846153846154s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(138.46153846153845 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5384615384615384s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(166.15384615384616 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.46153846153846156s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(193.84615384615384 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38461538461538464s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(221.53846153846155 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3076923076923077s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(249.23076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23076923076923078s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(276.9230769230769 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.15384615384615385s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(304.61538461538464 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.07692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(332.3076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n</svg>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
/******/ ]);
});