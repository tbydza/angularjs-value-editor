(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"), require("@kpsys/angularjs-histogram-slider"));
	else if(typeof define === 'function' && define.amd)
		define(["@kpsys/angularjs-register", "angular", "luxon", "@kpsys/angular-ui-bootstrap", "angular-sanitize", "ui-select", "@kpsys/angularjs-date-parser", "@kpsys/angularjs-bootstrap-datetimepicker", "angular-ui-ace", "@kpsys/angularjs-histogram-slider"], factory);
	else if(typeof exports === 'object')
		exports["angularjs-value-editor"] = factory(require("@kpsys/angularjs-register"), require("angular"), require("luxon"), require("@kpsys/angular-ui-bootstrap"), require("angular-sanitize"), require("ui-select"), require("@kpsys/angularjs-date-parser"), require("@kpsys/angularjs-bootstrap-datetimepicker"), require("angular-ui-ace"), require("@kpsys/angularjs-histogram-slider"));
	else
		root["angularjs-value-editor"] = factory(root["@kpsys/angularjs-register"], root["angular"], root["luxon"], root["@kpsys/angular-ui-bootstrap"], root["angular-sanitize"], root["ui-select"], root["@kpsys/angularjs-date-parser"], root["@kpsys/angularjs-bootstrap-datetimepicker"], root["angular-ui-ace"], root["@kpsys/angularjs-histogram-slider"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__135__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KpValueEditorComponentController = void 0;

var angular = __webpack_require__(5);

var ng_model_connector_1 = __webpack_require__(9);

var uuid_generator_1 = __webpack_require__(7);

var equals_1 = __webpack_require__(12);

var KpValueEditorComponentController = /*#__PURE__*/function (_ng_model_connector_) {
  KpValueEditorComponentController.$inject = ["aliasesService", "kpValueEditorConfigurationService", "$element"];

  _inherits(KpValueEditorComponentController, _ng_model_connector_);

  var _super = _createSuper(KpValueEditorComponentController);

  /*@ngInject*/
  function KpValueEditorComponentController(aliasesService, kpValueEditorConfigurationService, $element) {
    var _this;

    _classCallCheck(this, KpValueEditorComponentController);

    _this = _super.call(this);
    _this.aliasesService = aliasesService;
    _this.$element = $element;
    _this.isVisible = true;
    _this.optionChangeListeners = [];
    _this.configuration = kpValueEditorConfigurationService;
    return _this;
  }

  _createClass(KpValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _a, _b, _c;

      _get(_getPrototypeOf(KpValueEditorComponentController.prototype), "$onInit", this).call(this);

      if ((_c = (_b = (_a = this.universalFormController) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.preciseWatchForOptionsChanges) !== null && _c !== void 0 ? _c : this.configuration.preciseWatchForOptionsChanges) {
        this.$doCheck = this.processOptionsChange;
      } else {
        this.$onChanges = this.processOptionsChange;
      }

      this.previousOptions = angular.copy(this.options);

      if (!this.editorName) {
        this.editorName = this.editorId || this.generateEditorName();
      }
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(onChangesObj) {// initialization in $onInit section
    }
    /**
     * Manually check options update. $onChanges is not applicable, because we need deep equals, which $onChanges does not perform.
     */

  }, {
    key: "$doCheck",
    value: function $doCheck() {// initialization in $onInit section
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      this.optionChangeListeners = undefined;
    }
  }, {
    key: "registerValueEditor",
    value: function registerValueEditor(editorController) {
      this.valueEditorInstance = editorController;
    }
  }, {
    key: "resolveAlias",
    value: function resolveAlias() {
      return this.aliasesService.isAlias(this.type) ? this.aliasesService.getAlias(this.type) : this.type;
    }
  }, {
    key: "addOptionsChangeListener",
    value: function addOptionsChangeListener(listener) {
      this.optionChangeListeners.push(listener);
    }
  }, {
    key: "generateEditorName",
    value: function generateEditorName() {
      return this.editorId || "".concat(this.type, "_").concat(uuid_generator_1.generateUuid());
    }
  }, {
    key: "processOptionsChange",
    value: function processOptionsChange() {
      var _this2 = this;

      if (this.valueEditorInstance && !equals_1.customEquals(this.options, this.previousOptions)) {
        var whatChanged = equals_1.whichPropertiesAreNotEqual(this.options, this.previousOptions);
        this.valueEditorInstance.changeOptions(this.options, this.previousOptions, whatChanged);
        this.optionChangeListeners.forEach(function (listener) {
          return listener(_this2.options, _this2.previousOptions, whatChanged);
        });
        this.previousOptions = angular.copy(this.options);
      }
    }
  }]);

  return KpValueEditorComponentController;
}(ng_model_connector_1.default);

exports.KpValueEditorComponentController = KpValueEditorComponentController;
/**
 * @ngdoc component
 * @name kpValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 *
 * @param {string} editorId Input id. <.
 * @param {string} editorName Input name. <.
 * @param {string} placeholder Placeholder. <.
 * @param {string} type ValueEditor type. <.
 * @param {boolean} isDisabled If input is disabled. <.
 * @param {boolean} isVisible If input is visible. <.
 * @param {ValueEditorValidations} validations ValueEditor validations. <.
 * @param {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type. <.
 * @param {ValueEditorLocalizations} localizations Custom localizations overriding default ones.
 * @description
 * Generic value editor depends on type:
 *
 * - `text`: {@link textValueEditor}
 * - `number`: {@link numberValueEditor}
 */

var KpValueEditorComponent = function KpValueEditorComponent() {
  _classCallCheck(this, KpValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    formController: '?^^form',
    universalFormController: '?^^kpUniversalForm'
  };
  this.bindings = {
    type: '<',
    editorId: '<?',
    editorName: '<?',
    placeholder: '<?',
    isDisabled: '<?',
    isVisible: '<?',
    validations: '<?',
    options: '<?',
    localizations: '<?'
  };
  this.controller = KpValueEditorComponentController;
  this.templateUrl = __webpack_require__(27);
};

exports.default = KpValueEditorComponent;
KpValueEditorComponent.componentName = 'kpValueEditor';

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

var aliases_service_1 = __webpack_require__(8);
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
  function AbstractValueEditorConfigurationProvider(aliasesServiceProvider, defaultConfiguration) {
    _classCallCheck(this, AbstractValueEditorConfigurationProvider);

    this.aliasesServiceProvider = aliasesServiceProvider;
    this.defaultConfiguration = defaultConfiguration;
    this.currentConfiguration = new Map();
    this.currentConfiguration.set(aliases_service_1.DEFAULT_ALIAS, defaultConfiguration);
  }
  /**
   * @ngdoc method
   * @name AbstractValueEditorConfigurationProvider#forAlias
   * @module angularjs-value-editor
   *
   * @param {CustomValueEditorType} alias Alias
   *
   * @returns {ConfigurationBuilder<CONFIGURATION>} Builder
   *
   * @description
   * This method is used for aliasing configuration.
   */


  _createClass(AbstractValueEditorConfigurationProvider, [{
    key: "forAlias",
    value: function forAlias(alias) {
      var fallbackedAlias = alias;

      if (!this.aliasesServiceProvider.isAlias(alias)) {
        fallbackedAlias = aliases_service_1.DEFAULT_ALIAS;
      }

      return {
        setConfiguration: this.setAliasedConfiguration.bind(this, alias),
        getConfiguration: this.getAliasedConfiguration.bind(this, fallbackedAlias)
      };
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
      return this.getAliasedConfiguration(aliases_service_1.DEFAULT_ALIAS);
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

  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      return this.setAliasedConfiguration(aliases_service_1.DEFAULT_ALIAS, configuration);
    }
  }, {
    key: "$get",
    value: function $get() {
      return this;
    }
  }, {
    key: "setAliasedConfiguration",
    value: function setAliasedConfiguration(alias, configuration) {
      this.currentConfiguration.set(alias, Object.assign({}, this.currentConfiguration.get(alias), configuration));
      return this.currentConfiguration.get(alias);
    }
  }, {
    key: "getAliasedConfiguration",
    value: function getAliasedConfiguration(alias) {
      return Object.assign({}, this.getDefaults(), this.currentConfiguration.get(alias));
    }
  }]);

  return AbstractValueEditorConfigurationProvider;
}();

exports.default = AbstractValueEditorConfigurationProvider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyConfigurationService = void 0;

var ng_model_connector_1 = __webpack_require__(9);

var angular = __webpack_require__(5);

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var aliases_service_1 = __webpack_require__(8);

var equals_1 = __webpack_require__(12);
/**
 * Abstract base class for general value-editor features.
 *
 * @template OPTIONS
 */


var AbstractValueEditor = /*#__PURE__*/function (_ng_model_connector_) {
  _inherits(AbstractValueEditor, _ng_model_connector_);

  var _super = _createSuper(AbstractValueEditor);

  function AbstractValueEditor(configurationService, localizationService) {
    var _this;

    _classCallCheck(this, AbstractValueEditor);

    _this = _super.call(this);
    _this.configurationService = configurationService;
    _this.localizationService = localizationService;
    _this.options = angular.merge({}, _this.configurationService.forAlias(aliases_service_1.DEFAULT_ALIAS).getConfiguration());
    return _this;
  }

  _createClass(AbstractValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractValueEditor.prototype), "$onInit", this).call(this);

      this.valueEditorController.registerValueEditor(this);
      this.options = angular.merge({}, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration(), this.valueEditorController.options);
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      // If initial options are not defaults, trigger options change.
      if (!equals_1.customEquals(this.options, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration())) {
        this.onOptionsChange(this.options, undefined, equals_1.whichPropertiesAreNotEqual(this.options, this.configurationService.forAlias(this.valueEditorController.type).getConfiguration()));
      }
    }
    /**
     * This method changes options.
     * @param {OPTIONS} newOptions
     * @param {OPTIONS} oldOptions
     * @param {PropertyChangeDetection} whatChanged
     */

  }, {
    key: "changeOptions",
    value: function changeOptions(newOptions, oldOptions, whatChanged) {
      this.options = angular.copy(newOptions);
      this.onOptionsChange(newOptions, oldOptions, whatChanged);
    }
    /**
     * Simplifies localization. No need to call localization service.
     * @param {string} code Message code.
     * @returns {string} Localized message.
     */

  }, {
    key: "localize",
    value: function localize(code) {
      var _a;

      if ((_a = this.valueEditorController.localizations) === null || _a === void 0 ? void 0 : _a[code]) {
        return this.valueEditorController.localizations[code];
      }

      if (this.localizationService) {
        return this.localizationService.getLocalization(code);
      } else {
        /* istanbul ignore else */
        throw new Error('localizationService is not set');
      }
    }
  }]);

  return AbstractValueEditor;
}(ng_model_connector_1.default);

exports.default = AbstractValueEditor;
AbstractValueEditor.$inject = ['emptyConfigurationService'];

var EmptyConfigurationService = /*#__PURE__*/function (_abstract_value_edito) {
  EmptyConfigurationService.$inject = ["aliasesServiceProvider"];

  _inherits(EmptyConfigurationService, _abstract_value_edito);

  var _super2 = _createSuper(EmptyConfigurationService);

  /*@ngInject*/
  function EmptyConfigurationService(aliasesServiceProvider) {
    _classCallCheck(this, EmptyConfigurationService);

    return _super2.call(this, aliasesServiceProvider, {});
  }

  return EmptyConfigurationService;
}(abstract_value_editor_configuration_provider_1.default);

exports.EmptyConfigurationService = EmptyConfigurationService;
EmptyConfigurationService.serviceName = 'emptyConfigurationService';

/***/ }),
/* 4 */
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
      var _a;

      return (_a = this.localizations[code]) !== null && _a !== void 0 ? _a : code;
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var _templateUpdated;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var abstract_value_editor_1 = __webpack_require__(3);

var uuid_generator_1 = __webpack_require__(7);
/**
 * Abstract editor class which contains some helpers for managing and simplify template parsing.
 */


var AbstractTemplateValueEditor = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(AbstractTemplateValueEditor, _abstract_value_edito);

  var _super = _createSuper(AbstractTemplateValueEditor);

  function AbstractTemplateValueEditor(baseTemplateUrl, templatePrefix, $interpolate, $templateCache, configurationService, localizationService) {
    var _this;

    _classCallCheck(this, AbstractTemplateValueEditor);

    _this = _super.call(this, configurationService, localizationService);
    _this.baseTemplateUrl = baseTemplateUrl;
    _this.templatePrefix = templatePrefix;
    _this.$interpolate = $interpolate;
    _this.$templateCache = $templateCache;
    _this.configurationService = configurationService;
    _this.localizationService = localizationService;

    _templateUpdated.set(_assertThisInitialized(_this), false);

    _this.uuid = uuid_generator_1.generateUuid();
    return _this;
  }

  _createClass(AbstractTemplateValueEditor, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AbstractTemplateValueEditor.prototype), "$onInit", this).call(this);
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(AbstractTemplateValueEditor.prototype), "$postLink", this).call(this);

      if (!__classPrivateFieldGet(this, _templateUpdated)) {
        this.updateTemplate();
      }
    }
    /**
     * Updates template
     */

  }, {
    key: "updateTemplate",
    value: function updateTemplate() {
      __classPrivateFieldSet(this, _templateUpdated, true);

      this.$templateCache.remove(this.templateUrl);
      var newTemplateName = "".concat(this.templatePrefix, "_").concat(this.uuid, "_").concat(new Date().valueOf());
      var template = this.$templateCache.get(this.baseTemplateUrl);
      var interpolated = this.$interpolate(template)(_objectSpread({}, this.getTemplateModel()));
      this.$templateCache.put(newTemplateName, interpolated);
      this.templateUrl = newTemplateName;
    }
  }]);

  return AbstractTemplateValueEditor;
}(abstract_value_editor_1.default);

exports.default = AbstractTemplateValueEditor;
_templateUpdated = new WeakMap();
/**
 * Pre-defined component template.
 * @type {string}
 */

AbstractTemplateValueEditor.COMPONENT_TEMPLATE = '<ng-include src="$ctrl.templateUrl"></ng-include>';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUuid = void 0;
/**
 * Generates random pseudo-UUID.
 */

function generateUuid() {
  return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

exports.generateUuid = generateUuid;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AliasesServiceProviderImpl = exports.DEFAULT_ALIAS = void 0;
exports.DEFAULT_ALIAS = 'DEFAULT';

var AliasesServiceProviderImpl = /*#__PURE__*/function () {
  AliasesServiceProviderImpl.$inject = ["$injector", "$logProvider", "$windowProvider"];

  /*@ngInject*/
  function AliasesServiceProviderImpl($injector, $logProvider, $windowProvider) {
    _classCallCheck(this, AliasesServiceProviderImpl);

    this.aliases = {};
    var $window = $injector.instantiate($windowProvider.$get);
    this.$log = $injector.instantiate($logProvider.$get, {
      $window: $window
    });
  }

  _createClass(AliasesServiceProviderImpl, [{
    key: "addAlias",
    value: function addAlias(aliasTypeName, editorType) {
      if (this.aliases[aliasTypeName]) {
        throw new Error("Alias '".concat(aliasTypeName, "' is already defined"));
      }

      this.aliases[aliasTypeName] = editorType;
    }
  }, {
    key: "removeAlias",
    value: function removeAlias(aliasTypeName) {
      if (!this.aliases[aliasTypeName]) {
        this.$log.warn("Alias '".concat(aliasTypeName, "' not found."));
      }

      delete this.aliases[aliasTypeName];
    }
  }, {
    key: "getAlias",
    value: function getAlias(alias) {
      if (!this.aliases[alias]) {
        throw new Error("Alias '".concat(alias, "' not found."));
      }

      return this.aliases[alias];
    }
  }, {
    key: "isAlias",
    value: function isAlias(type) {
      return !!this.aliases[type];
    }
  }, {
    key: "$get",
    value: function $get() {
      return {
        getAlias: this.getAlias.bind(this),
        isAlias: this.isAlias.bind(this)
      };
    }
  }]);

  return AliasesServiceProviderImpl;
}();

exports.AliasesServiceProviderImpl = AliasesServiceProviderImpl;
AliasesServiceProviderImpl.providerName = 'aliasesService';

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var aliases_service_1 = __webpack_require__(8);
/**
 * @ngdoc module
 * @name angularjs-value-editor.aliases
 * @module angularjs-value-editor.aliases
 *
 * @description
 * Support for editor types aliasing
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.aliases').provider(aliases_service_1.AliasesServiceProviderImpl.providerName, aliases_service_1.AliasesServiceProviderImpl).name();

/***/ }),
/* 11 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptableValueEditorComponentController = void 0;

__webpack_require__(26);

var kp_value_editor_component_1 = __webpack_require__(1);

var angular = __webpack_require__(5);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.acceptableValueEditor';

var AcceptableValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  AcceptableValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "acceptableValueEditorLocalizationsService", "acceptableValueEditorConfigurationService", "$element"];

  _inherits(AcceptableValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(AcceptableValueEditorComponentController);

  /*@ngInject*/
  function AcceptableValueEditorComponentController($interpolate, $templateCache, acceptableValueEditorLocalizationsService, acceptableValueEditorConfigurationService, $element) {
    var _this;

    _classCallCheck(this, AcceptableValueEditorComponentController);

    _this = _super.call(this, AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, acceptableValueEditorConfigurationService, acceptableValueEditorLocalizationsService);
    _this.acceptableValueEditorLocalizationsService = acceptableValueEditorLocalizationsService;
    _this.acceptableValueEditorConfigurationService = acceptableValueEditorConfigurationService;
    _this.$element = $element;
    _this.touched = false;
    _this.uiSelectComparator = _this.uiSelectComparator.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AcceptableValueEditorComponentController, [{
    key: "hasMore",
    value: function hasMore() {
      return this.options.showFirstCount && this.getMoreCount() > 0;
    }
  }, {
    key: "getAcceptableValuesForCheckboxes",
    value: function getAcceptableValuesForCheckboxes() {
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
        if (this.options.sortComparator) {
          values.sort(this.options.sortComparator);
        }
      }

      if (count) {
        return values.slice(from, from + count);
      }

      return values;
    }
  }, {
    key: "getAcceptableValuesForUiSelect",
    value: function getAcceptableValuesForUiSelect() {
      var _a;

      if (!this.options.multiselectable && !((_a = this.valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required)) {
        var adjustedAcceptableValues = this.options.acceptableValues.slice();
        adjustedAcceptableValues.unshift(null);
        return adjustedAcceptableValues;
      }

      return this.options.acceptableValues;
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
      try {
        return this.options.sortComparator && e1 !== null && e2 !== null ? this.options.sortComparator(e1.value, e2.value) : 0;
      } catch (e) {
        throw new Error("Error in custom sortComparator: ".concat(e));
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whichOptionIsChanged) {
      if (whichOptionIsChanged.optionsTemplate || whichOptionIsChanged.singleSelectedValueTemplate || whichOptionIsChanged.multiSelectedValueTemplate || whichOptionIsChanged.searchable || whichOptionIsChanged.multiselectable || whichOptionIsChanged.sortComparator || whichOptionIsChanged.reorderable || whichOptionIsChanged.acceptableValues || whichOptionIsChanged.switchToCheckboxesThreshold || whichOptionIsChanged.selectedFirst) {
        this.baseTemplateUrl = this.checkboxesMode() ? AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL : AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL;
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
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate,
        singleSelectedValueTemplate: this.options.singleSelectedValueTemplate,
        multiSelectedValueTemplate: this.options.multiSelectedValueTemplate,
        searchable: this.options.searchable,
        multiselectable: this.options.multiselectable,
        uuid: this.uuid,
        sort: !!this.options.sortComparator,
        name: this.valueEditorController.editorName
      };
    }
  }, {
    key: "setValidationHelperTouched",
    value: function setValidationHelperTouched() {
      var _a;

      if (!this.touched) {
        (_a = angular.element(this.$element[0].querySelector('.checkboxes-validation-helper')).controller('ngModel')) === null || _a === void 0 ? void 0 : _a.$setTouched();
        this.touched = true;
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
      this.setValidationHelperTouched();

      if (this.options.multiselectable && this.options.sortModel && Array.isArray(value)) {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value.sort(this.options.sortComparator), this, true);
      } else {
        _set(_getPrototypeOf(AcceptableValueEditorComponentController.prototype), "model", value, this, true);
      }
    }
  }]);

  return AcceptableValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.AcceptableValueEditorComponentController = AcceptableValueEditorComponentController;
AcceptableValueEditorComponentController.SELECT_TEMPLATE_URL = __webpack_require__(28);
AcceptableValueEditorComponentController.CHECKBOXES_TEMPLATE_URL = __webpack_require__(29);
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
 *              }" placeholder="'Select...'">
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
 *              sortComparatorString = `(e1, e2) => ((e1 || {x: ''}).x || '').localeCompare((e2 || {x: ''}).x) * -1`;
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = AcceptableValueEditorComponentController;
};

exports.default = AcceptableValueEditorComponent;
AcceptableValueEditorComponent.componentName = 'acceptableValueEditor';

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// tested by angular team

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whichPropertiesAreNotEqual = exports.customEquals = void 0;

var angular = __webpack_require__(5);

function isRegExp(value) {
  try {
    return toString.call(value) === '[object RegExp]';
  } catch (e) {// console.log(value);
  }
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
    }
    /*else if (isRegExp(o1)) {
      if (!isRegExp(o2)) return false;
      return o1.toString() === o2.toString();
    } */
    else {
        if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || angular.isArray(o2) || angular.isDate(o2)
        /* || isRegExp(o2)*/
        ) return false;
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

exports.customEquals = customEquals;

function whichPropertiesAreNotEqual(object1, object2) {
  var changeObject = {};
  var keys = new Set(); // tslint:disable-next-line:no-unused-expression

  object1 && Object.keys(object1).forEach(keys.add.bind(keys)); // tslint:disable-next-line:no-unused-expression

  object2 && Object.keys(object2).forEach(keys.add.bind(keys));
  Array.from(keys).forEach(function (key) {
    return changeObject[key] = !(Object.prototype.hasOwnProperty.call(object1 !== null && object1 !== void 0 ? object1 : {}, key) && Object.prototype.hasOwnProperty.call(object2 !== null && object2 !== void 0 ? object2 : {}, key) && customEquals(object1[key], object2[key]));
  });
  return changeObject;
}

exports.whichPropertiesAreNotEqual = whichPropertiesAreNotEqual;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormModel = void 0;

function getFormModel(form) {
  var model = {};

  var _iterator = _createForOfIteratorHelper(form.$getControls()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var control = _step.value;

      if (isNgModelController(control)) {
        if (control.$name) {
          model[control.$name] = control.$modelValue;
        }
      }

      if (isFormController(control)) {
        Object.assign(model, getFormModel(control));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return model;
}

exports.getFormModel = getFormModel;

function isNgModelController(controller) {
  return typeof controller.$setTouched === 'function';
}

function isFormController(controller) {
  return typeof controller.$getControls === 'function';
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractMetaValueEditorComponentController = void 0;

var abstract_template_value_editor_1 = __webpack_require__(6);

var AbstractMetaValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  _inherits(AbstractMetaValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(AbstractMetaValueEditorComponentController);

  function AbstractMetaValueEditorComponentController() {
    _classCallCheck(this, AbstractMetaValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(AbstractMetaValueEditorComponentController, [{
    key: "trueIfUndefined",
    value: function trueIfUndefined(value) {
      if (typeof value === 'undefined') {
        return true;
      }

      return value;
    }
  }, {
    key: "showValidationError",
    value: function showValidationError(fieldName) {
      if (this.form[fieldName]) {
        var _this$form$fieldName = this.form[fieldName],
            $invalid = _this$form$fieldName.$invalid,
            _this$form$fieldName$ = _this$form$fieldName.$touched,
            $touched = _this$form$fieldName$ === void 0 ? true : _this$form$fieldName$;
        return $invalid && ($touched || this.options.forceShowErrors);
      }

      return false;
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        name: this.valueEditorController.editorName || 'DEFAULT'
      };
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, optionsChangeDetection) {//
    }
  }]);

  return AbstractMetaValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.AbstractMetaValueEditorComponentController = AbstractMetaValueEditorComponentController;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(19);

__webpack_require__(20);

var angularjs_register_1 = __webpack_require__(0);

var aliases_module_1 = __webpack_require__(10);

var acceptable_value_editor_module_1 = __webpack_require__(21);

var boolean_value_editor_module_1 = __webpack_require__(34);

var date_value_editor_module_1 = __webpack_require__(40);

var hidden_value_editor_module_1 = __webpack_require__(46);

var html_value_editor_module_1 = __webpack_require__(49);

var number_value_editor_module_1 = __webpack_require__(54);

var text_value_editor_module_1 = __webpack_require__(59);

var year_value_editor_module_1 = __webpack_require__(66);

var card_number_value_editor_module_1 = __webpack_require__(69);

var index_selection_value_editor_module_1 = __webpack_require__(74);

var autocomplete_value_editor_module_1 = __webpack_require__(79);

var password_value_editor_module_1 = __webpack_require__(84);

var signature_value_editor_module_1 = __webpack_require__(91);

var access_number_value_editor_module_1 = __webpack_require__(96);

var number_range_value_editor_module_1 = __webpack_require__(101);

var exemplar_bar_code_value_editor_module_1 = __webpack_require__(108);

var acceptable_root_value_editor_module_1 = __webpack_require__(110);

var search_text_value_editor_module_1 = __webpack_require__(121);

var searchable_value_editor_module_1 = __webpack_require__(125);

var velocity_template_value_editor_module_1 = __webpack_require__(131);

var range_value_editor_module_1 = __webpack_require__(133);

var list_value_editor_module_1 = __webpack_require__(140);

var object_value_editor_module_1 = __webpack_require__(147);

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var kp_value_editor_configuration_provider_1 = __webpack_require__(152);

var kp_universal_form_component_1 = __webpack_require__(153);

var error_messages_module_1 = __webpack_require__(155);

var pattern_description_tooltip_directive_1 = __webpack_require__(159);
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


var LOADING_SPINNER_TPL_URL = __webpack_require__(160);
/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */


exports.default = angularjs_register_1.default('angularjs-value-editor', ['ui.bootstrap', aliases_module_1.default, acceptable_value_editor_module_1.default, boolean_value_editor_module_1.default, date_value_editor_module_1.default, hidden_value_editor_module_1.default, html_value_editor_module_1.default, number_value_editor_module_1.default, text_value_editor_module_1.default, year_value_editor_module_1.default, card_number_value_editor_module_1.default, index_selection_value_editor_module_1.default, autocomplete_value_editor_module_1.default, password_value_editor_module_1.default, signature_value_editor_module_1.default, access_number_value_editor_module_1.default, number_range_value_editor_module_1.default, exemplar_bar_code_value_editor_module_1.default, acceptable_root_value_editor_module_1.default, search_text_value_editor_module_1.default, searchable_value_editor_module_1.default, velocity_template_value_editor_module_1.default, range_value_editor_module_1.default, list_value_editor_module_1.default, object_value_editor_module_1.default, error_messages_module_1.default]).constant('loadingSpinnerTemplateUrl', LOADING_SPINNER_TPL_URL).provider(abstract_value_editor_1.EmptyConfigurationService.serviceName, abstract_value_editor_1.EmptyConfigurationService).provider(kp_value_editor_configuration_provider_1.default.providerName, kp_value_editor_configuration_provider_1.default).directive(pattern_description_tooltip_directive_1.default.directiveName, pattern_description_tooltip_directive_1.default).component(kp_value_editor_component_1.default.componentName, kp_value_editor_component_1.default).component(kp_universal_form_component_1.default.componentName, kp_universal_form_component_1.default).name();
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var aliases_module_1 = __webpack_require__(10);

__webpack_require__(22);

__webpack_require__(23);

var uiSelect_decorator_1 = __webpack_require__(24);

var acceptable_value_editor_localizations_provider_1 = __webpack_require__(25);

var acceptable_value_editor_component_1 = __webpack_require__(11);

var acceptable_value_editor_configuration_provider_1 = __webpack_require__(30);

var checkboxes_validations_directive_1 = __webpack_require__(31);

var null_aware_filter_filter_1 = __webpack_require__(32);

var disable_nganimate_directive_1 = __webpack_require__(33);
/**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Acceptable value editor module.
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.acceptable', [aliases_module_1.default, 'ngSanitize', 'ui.select']).decorator(uiSelect_decorator_1.default.decoratorName, uiSelect_decorator_1.default).constant('acceptableValueEditorDefaultOptions', acceptable_value_editor_configuration_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('acceptableValueEditorDefaultLocalizations', acceptable_value_editor_localizations_provider_1.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).filter(null_aware_filter_filter_1.default.filterName, null_aware_filter_filter_1.default).provider(acceptable_value_editor_configuration_provider_1.default.providerName, acceptable_value_editor_configuration_provider_1.default).provider(acceptable_value_editor_localizations_provider_1.default.providerName, acceptable_value_editor_localizations_provider_1.default).directive(checkboxes_validations_directive_1.default.directiveName, checkboxes_validations_directive_1.default).directive(disable_nganimate_directive_1.default.directiveName, disable_nganimate_directive_1.default).component(acceptable_value_editor_component_1.default.componentName, acceptable_value_editor_component_1.default).name();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name acceptableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * See {@link acceptableValueEditorLocalizationsService}
 */


var AcceptableValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorLocalizationsServiceProvider.$inject = ["acceptableValueEditorDefaultLocalizations"];

  _inherits(AcceptableValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function AcceptableValueEditorLocalizationsServiceProvider(acceptableValueEditorDefaultLocalizations) {
    _classCallCheck(this, AcceptableValueEditorLocalizationsServiceProvider);

    return _super.call(this, acceptableValueEditorDefaultLocalizations);
  }

  return AcceptableValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AcceptableValueEditorLocalizationsServiceProvider;
AcceptableValueEditorLocalizationsServiceProvider.providerName = 'acceptableValueEditorLocalizationsService';
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
  deselectAll: 'Deselect all',
  noItemSelected: 'No item selected'
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var path = '/value-editor/kp-value-editor/kp-value-editor.tpl.pug';
var html = "<span ng-switch=\"$ctrl.resolveAlias()\" ng-show=\"$ctrl.isVisible\"><text-value-editor ng-switch-when=\"text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></text-value-editor><number-value-editor ng-switch-when=\"number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-value-editor><boolean-value-editor ng-switch-when=\"boolean\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></boolean-value-editor><hidden-value-editor ng-switch-when=\"hidden\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></hidden-value-editor><html-value-editor ng-switch-when=\"html\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></html-value-editor><date-value-editor ng-switch-when=\"date\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></date-value-editor><acceptable-value-editor ng-switch-when=\"acceptable\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></acceptable-value-editor><year-value-editor ng-switch-when=\"year\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></year-value-editor><card-number-value-editor ng-switch-when=\"card-number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></card-number-value-editor><index-selection-value-editor ng-switch-when=\"index-selection\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></index-selection-value-editor><autocomplete-value-editor ng-switch-when=\"autocomplete\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></autocomplete-value-editor><password-value-editor ng-switch-when=\"password\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></password-value-editor><signature-value-editor ng-switch-when=\"signature\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></signature-value-editor><access-number-value-editor ng-switch-when=\"access-number\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></access-number-value-editor><number-range-value-editor ng-switch-when=\"number-range\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></number-range-value-editor><acceptable-root-value-editor ng-switch-when=\"acceptable-root\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></acceptable-root-value-editor><search-text-value-editor ng-switch-when=\"search-text\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></search-text-value-editor><searchable-value-editor ng-switch-when=\"searchable\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></searchable-value-editor><range-value-editor ng-switch-when=\"range\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></range-value-editor><list-value-editor ng-switch-when=\"list\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></list-value-editor><object-value-editor ng-switch-when=\"object\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\"></object-value-editor></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/select.tpl.pug';
var html = "<ui-select input-id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"{{name}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" {{multiselectable ? 'multiple' : ''}}=\"\" close-on-select=\"{{!multiselectable}}\" sortable=\"$ctrl.options.reorderable\" ng-disabled=\"$ctrl.valueEditorController.isDisabled || $ctrl.options.acceptableValues.length === 1 && $ctrl.valueEditorController.validations.required\" ng-required=\"$ctrl.valueEditorController.validations.required\" disable-ng-animate=\"disable-ng-animate\" error-messages=\"error-messages\" error-messages-custom-class=\"acceptable-select\" data-main-input=\"data-main-input\"><ui-select-choices repeat=\"$item in $ctrl.getAcceptableValuesForUiSelect() {{sort ? '| orderBy : \\'\\' : false : $ctrl.uiSelectComparator' : ''}} {{searchable ? '| nullAwareFilter:$select.search' : ''}} track by $index\"><span ng-if=\"$item === null\" ng-bind=\"::$ctrl.localize('noItemSelected')\"></span><span ng-if=\"$item !== null\">{{optionsTemplate}}</span></ui-select-choices><ui-select-match placeholder=\"\\{\\{$ctrl.valueEditorController.placeholder\\}\\}\"><span ng-if=\"$select.selected === null\" ng-bind=\"::$ctrl.localize('noItemSelected')\"></span><span ng-if=\"$select.selected !== null\">{{multiselectable ? multiSelectedValueTemplate : singleSelectedValueTemplate}}</span></ui-select-match></ui-select>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable/checkboxes.tpl.pug';
var html = "<div class=\"checkboxes-mode\" ng-class=\"{'with-more': $ctrl.hasMore()}\" data-main-input=\"data-main-input\"><ul ng-ref=\"ulElement\"><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValuesForCheckboxes() track by $index\" ng-init=\"index = $index\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.editorName + '_' + index\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li><li class=\"more-container {{uuid}}\" ng-if=\"$ctrl.hasMore()\"><style type=\"text/css\">acceptable-value-editor #check-{{uuid}}:checked ~ ul {\n    max-height: \\{\\{ulElement[0].children[0].offsetHeight * $ctrl.getMoreCount()\\}\\}px;\n}\n</style><input class=\"more-checkbox\" id=\"check-{{uuid}}\" type=\"checkbox\" ng-model=\"expanded\"/><label class=\"more-label\" for=\"check-{{uuid}}\"><i class=\"glyphicon\" ng-class=\"expanded ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'\"></i><span ng-show=\"expanded\" ng-bind=\"$ctrl.localize('less')\"></span><span ng-hide=\"expanded\" ng-bind=\"$ctrl.localize('more') + ' (' + $ctrl.getMoreCount() + ')'\"></span></label><ul><li class=\"av-item\" ng-repeat=\"$item in $ctrl.getAcceptableValuesForCheckboxes($ctrl.options.showFirstCount, 9007199254740990) track by $index\" ng-init=\"index = $index + $ctrl.options.showFirstCount\"><div class=\"pretty p-icon p-smooth p-curve\"><input type=\"checkbox\" name=\"\\{\\{$ctrl.valueEditorController.editorName + '_' + index\\}\\}\" ng-model=\"$ctrl.checkboxModel($item)\" ng-model-options=\"{getterSetter: true}\" ng-click=\"$ctrl.updateModel($item)\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\"/><div class=\"state p-primary\"><i class=\"icon glyphicon glyphicon-ok\"></i><label><span>{{optionsTemplate}}</span></label></div></div></li></ul></li></ul><div class=\"btn-group\"><button class=\"btn btn-default btn-xs select-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === $ctrl.options.acceptableValues.length\" ng-click=\"$ctrl.model = $ctrl.options.acceptableValues.slice()\" ng-bind=\"$ctrl.localize('selectAll')\"></button><button class=\"btn btn-default btn-xs deselect-all\" type=\"button\" ng-disabled=\"$ctrl.model.length === 0\" ng-click=\"$ctrl.model = []\" ng-bind=\"$ctrl.localize('deselectAll')\"></button></div><input class=\"validation-helper\" type=\"text\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.editorName\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" error-messages=\"error-messages\" error-messages-custom-class=\"acceptable-checkboxes standalone\" checkboxes-validations=\"checkboxes-validations\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCEPTABLE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
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
  switchToCheckboxesThreshold: 13,
  __forceDisableNgAnimate: false
};
/**
 * @ngdoc provider
 * @name acceptableValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationServiceProvider}
 *
 * Default options: {@link acceptableValueEditorDefaultOptions}
 */

var AcceptableValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "acceptableValueEditorDefaultOptions"];

  _inherits(AcceptableValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function AcceptableValueEditorConfigurationServiceProvider(aliasesServiceProvider, acceptableValueEditorDefaultOptions) {
    _classCallCheck(this, AcceptableValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, acceptableValueEditorDefaultOptions);
  }

  return AcceptableValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AcceptableValueEditorConfigurationServiceProvider;
AcceptableValueEditorConfigurationServiceProvider.providerName = 'acceptableValueEditorConfigurationService';

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name checkboxesValidations
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Validation helper for acceptable value editor.
 *
 * It adds right version of required validation to acceptable value editor - checkboxes mode.
 */

var CheckboxesValidationsDirective = /*#__PURE__*/function () {
  function CheckboxesValidationsDirective() {
    _classCallCheck(this, CheckboxesValidationsDirective);

    this.restrict = 'A';
    this.require = ['ngModel', '^^kpValueEditor'];
  }

  _createClass(CheckboxesValidationsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          valueEditorController = _ref2[1];

      ngModelController.$validators.required = this.requiredValidationFactory(valueEditorController);
    }
  }, {
    key: "requiredValidationFactory",
    value: function requiredValidationFactory(valueEditorController) {
      return function (modelValue) {
        var _a;

        return !((_a = valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) || Array.isArray(modelValue) && modelValue.length > 0;
      };
    }
  }]);

  return CheckboxesValidationsDirective;
}();

exports.default = CheckboxesValidationsDirective;
CheckboxesValidationsDirective.directiveName = 'checkboxesValidations';

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


nullAwareFilter.$inject = ["$filter"];
Object.defineProperty(exports, "__esModule", {
  value: true
});

function isBlank(search) {
  return typeof search === 'undefined' || search === null || search === '';
}
/**
 * @ngdoc filter
 * @name nullAwareFilter
 * @module angularjs-value-editor.acceptable
 *
 * @template T
 *
 * @param {T[]} items Array of items
 * @param {string} search Filter expression
 *
 * @description
 * It is almost classic angular filter `filter`, but if search is null it returns original data.
 */

/*@ngInject*/


function nullAwareFilter($filter) {
  return function (items, search) {
    return isBlank(search) ? items : $filter('filter')(items, search);
  };
}

exports.default = nullAwareFilter;
nullAwareFilter.filterName = 'nullAwareFilter';

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var acceptable_value_editor_component_1 = __webpack_require__(11);

var kp_value_editor_component_1 = __webpack_require__(1);
/**
 * @ngdoc directive
 * @name disableNgAnimate
 * @module angularjs-value-editor.acceptable
 *
 * @description
 *
 */


var DisableNganimateDirective = /*#__PURE__*/function () {
  DisableNganimateDirective.$inject = ["$animate"];

  /*@ngInject*/
  function DisableNganimateDirective($animate) {
    _classCallCheck(this, DisableNganimateDirective);

    this.$animate = $animate;
    this.restrict = 'A';
    this.require = ["^^".concat(acceptable_value_editor_component_1.default.componentName), 'uiSelect', "^^".concat(kp_value_editor_component_1.default.componentName)];
  }

  _createClass(DisableNganimateDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _this = this;

      var _ref2 = _slicedToArray(_ref, 3),
          acceptableValueEditorComponentController = _ref2[0],
          uiSelectController = _ref2[1],
          kpValueEditorComponentController = _ref2[2];

      var resolveNgAnimate = function resolveNgAnimate() {
        if (acceptableValueEditorComponentController.options.__forceDisableNgAnimate) {
          uiSelectController.$animate = null;
        } else if (uiSelectController.$animate === null && _this.$animate) {
          uiSelectController.$animate = _this.$animate;
        }
      };

      kpValueEditorComponentController.addOptionsChangeListener(resolveNgAnimate.bind(this));
      resolveNgAnimate();
    }
  }]);

  return DisableNganimateDirective;
}();

exports.default = DisableNganimateDirective;
DisableNganimateDirective.directiveName = 'disableNgAnimate';

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(35);

__webpack_require__(36);

var angularjs_register_1 = __webpack_require__(0);

var boolean_value_editor_configuration_provider_1 = __webpack_require__(37);

var boolean_value_editor_component_1 = __webpack_require__(38);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BOOLEAN_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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

var BooleanValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "booleanValueEditorDefaultOptions"];

  _inherits(BooleanValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function BooleanValueEditorConfigurationServiceProvider(aliasesServiceProvider, booleanValueEditorDefaultOptions) {
    _classCallCheck(this, BooleanValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, booleanValueEditorDefaultOptions);
  }

  return BooleanValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = BooleanValueEditorConfigurationServiceProvider;
BooleanValueEditorConfigurationServiceProvider.providerName = 'booleanValueEditorConfigurationService';

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooleanValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var BooleanValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  BooleanValueEditorComponentController.$inject = ["booleanValueEditorConfigurationService"];

  _inherits(BooleanValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(BooleanValueEditorComponentController);

  /*@ngInject*/
  function BooleanValueEditorComponentController(booleanValueEditorConfigurationService) {
    _classCallCheck(this, BooleanValueEditorComponentController);

    return _super.call(this, booleanValueEditorConfigurationService);
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(39);
  this.controller = BooleanValueEditorComponentController;
};

exports.default = BooleanValueEditorComponent;
BooleanValueEditorComponent.componentName = 'booleanValueEditor';

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/boolean/boolean.value-editor.tpl.pug';
var html = "<span class=\"pretty p-icon p-smooth p-curve\" ng-class=\"{'p-has-indeterminate': $ctrl.options.nullAsIndeterminate}\"><input type=\"checkbox\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" ng-ref=\"$ctrl.inputElementModelController\" ng-ref-read=\"ngModel\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" error-messages=\"error-messages\" error-messages-custom-class=\"boolean-checkbox standalone\" data-main-input=\"data-main-input\"/><div class=\"state\"><i class=\"icon glyphicon glyphicon-ok\"></i><label></label></div><div class=\"state p-is-indeterminate\"><i class=\"icon glyphicon glyphicon-minus\"></i><label></label></div></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_date_parser_1 = __webpack_require__(41);

var angularjs_bootstrap_datetimepicker_1 = __webpack_require__(42);

var angularjs_register_1 = __webpack_require__(0);

var date_value_editor_component_1 = __webpack_require__(43);

var date_value_editor_configuration_provider_1 = __webpack_require__(45);
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
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var luxon_1 = __webpack_require__(13);

var DateValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorComponentController.$inject = ["dateValueEditorConfigurationService"];

  _inherits(DateValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorComponentController);

  /*@ngInject*/
  function DateValueEditorComponentController(dateValueEditorConfigurationService) {
    _classCallCheck(this, DateValueEditorComponentController);

    return _super.call(this, dateValueEditorConfigurationService);
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(44);
  this.controller = DateValueEditorComponentController;
};

exports.default = DateValueEditorComponent;
DateValueEditorComponent.componentName = 'dateValueEditor';

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/date/date.value-editor.tpl.pug';
var html = "<div class=\"input-group\" uib-dropdown=\"\" dropdown-append-to-body=\"\" is-open=\"datePickerOpen\"><input class=\"form-control\" type=\"text\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.editorName}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" kp-date-parser=\"kp-date-parser\" min-date=\"$ctrl.valueEditorController.validations.minDate ? $ctrl.valueEditorController.validations.minDate : null\" max-date=\"$ctrl.valueEditorController.validations.maxDate ? $ctrl.valueEditorController.validations.maxDate : null\" view-format=\"{{$ctrl.options.viewFormat}}\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/><div uib-dropdown-menu=\"\"><datetimepicker ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" datetimepicker-config=\"{minView: $ctrl.options.maximumGranularity, startView: $ctrl.startView}\" on-set-time=\"datePickerOpen = false\" before-render=\"$ctrl.dateRestriction($dates, $view)\" view-format=\"{{$ctrl.options.viewFormat}}\" kp-date-parser=\"kp-date-parser\"></datetimepicker></div><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" uib-dropdown-toggle=\"\"><span class=\"glyphicon glyphicon-calendar\"></span></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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

var DateValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  DateValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "dateValueEditorDefaultOptions"];

  _inherits(DateValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(DateValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function DateValueEditorConfigurationServiceProvider(aliasesServiceProvider, dateValueEditorDefaultOptions) {
    _classCallCheck(this, DateValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, dateValueEditorDefaultOptions);
  }

  return DateValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = DateValueEditorConfigurationServiceProvider;
DateValueEditorConfigurationServiceProvider.providerName = 'dateValueEditorConfigurationService';

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var hidden_value_editor_component_1 = __webpack_require__(47);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HiddenValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var HiddenValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  _inherits(HiddenValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HiddenValueEditorComponentController);

  function HiddenValueEditorComponentController() {
    _classCallCheck(this, HiddenValueEditorComponentController);

    return _super.apply(this, arguments);
  }

  _createClass(HiddenValueEditorComponentController, [{
    key: "onOptionsChange",

    /* istanbul ignore next */
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(48);
  this.controller = HiddenValueEditorComponentController;
};

exports.default = HiddenValueEditorComponent;
HiddenValueEditorComponent.componentName = 'hiddenValueEditor';

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/hidden/hidden.value-editor.tpl.pug';
var html = "<input type=\"hidden\" ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.editorName}}\" ng-value=\"$ctrl.model\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(50);

var angularjs_register_1 = __webpack_require__(0);

var html_value_editor_component_1 = __webpack_require__(51);

var html_value_editor_configuration_provider_1 = __webpack_require__(53);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HtmlValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var bind_decorator_1 = __webpack_require__(14);

var HtmlValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorComponentController.$inject = ["htmlValueEditorConfigurationService", "$timeout"];

  _inherits(HtmlValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorComponentController);

  /*@ngInject*/
  function HtmlValueEditorComponentController(htmlValueEditorConfigurationService, $timeout) {
    var _this;

    _classCallCheck(this, HtmlValueEditorComponentController);

    _this = _super.call(this, htmlValueEditorConfigurationService);
    _this.$timeout = $timeout;
    return _this;
  }

  _createClass(HtmlValueEditorComponentController, [{
    key: "$postLink",
    value: function $postLink() {
      _get(_getPrototypeOf(HtmlValueEditorComponentController.prototype), "$postLink", this).call(this);

      this.$timeout(this.initTrumbowyg);
    }
  }, {
    key: "$doCheck",
    value: function $doCheck() {
      var _a;

      if (this.valueEditorController.isDisabled !== this.isDisabled && ((_a = this.container) === null || _a === void 0 ? void 0 : _a.trumbowyg)) {
        this.isDisabled = this.valueEditorController.isDisabled;
        this.container.trumbowyg(this.isDisabled ? 'disable' : 'enable');
      }
    }
  }, {
    key: "$onDestroy",
    value: function $onDestroy() {
      if (this.container) {
        this.container.trumbowyg('destroy');
        this.container.off('tbwchange tbwpaste');
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions) {//
    }
  }, {
    key: "initTrumbowyg",
    value: function initTrumbowyg() {
      var _this2 = this;

      var options = _objectSpread(_objectSpread({}, this.options.editorOptions), {}, {
        disabled: this.valueEditorController.isDisabled
      });

      this.container.trumbowyg(options);
      this.container.on('tbwchange tbwpaste', function () {
        return _this2.container.triggerHandler('input');
      });

      var setTouchedHandler = function setTouchedHandler() {
        _this2.container.controller('ngModel').$setTouched();

        _this2.container.triggerHandler('input');

        _this2.container.off('tbwchange tbwpaste tbwblur', setTouchedHandler);
      };

      this.container.on('tbwchange tbwpaste tbwblur', setTouchedHandler);

      if (this.container[0].closest) {
        // IE does not support closest function on DOM
        this.container.on('tbwinit', function () {
          _this2.container[0].closest('.trumbowyg-box').classList.add('form-control');

          _this2.container.off('tbwinit');
        });
      }

      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        originalRender();

        _this2.container.trumbowyg('html', _this2.model);
      };
    }
  }]);

  return HtmlValueEditorComponentController;
}(abstract_value_editor_1.default);

__decorate([bind_decorator_1.default], HtmlValueEditorComponentController.prototype, "initTrumbowyg", null);

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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(52);
  this.controller = HtmlValueEditorComponentController;
};

exports.default = HtmlValueEditorComponent;
HtmlValueEditorComponent.componentName = 'htmlValueEditor';

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/html/html.value-editor.tpl.pug';
var html = "<textarea ng-attr-id=\"{{$ctrl.valueEditorController.editorId}}\" ng-attr-name=\"{{$ctrl.valueEditorController.editorName}}\" ng-attr-placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-ref=\"$ctrl.container\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"></textarea>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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

var HtmlValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  HtmlValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "htmlValueEditorDefaultOptions"];

  _inherits(HtmlValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(HtmlValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function HtmlValueEditorConfigurationServiceProvider(aliasesServiceProvider, htmlValueEditorDefaultOptions) {
    _classCallCheck(this, HtmlValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, htmlValueEditorDefaultOptions);
  }

  return HtmlValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = HtmlValueEditorConfigurationServiceProvider;
HtmlValueEditorConfigurationServiceProvider.providerName = 'htmlValueEditorConfigurationService';

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var number_value_editor_component_1 = __webpack_require__(55);

var number_value_editor_configuration_provider_1 = __webpack_require__(58);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberValueEditorComponentController = void 0;

__webpack_require__(56);

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var NumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorComponentController.$inject = ["numberValueEditorConfigurationService"];

  _inherits(NumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorComponentController);

  /*@ngInject*/
  function NumberValueEditorComponentController(numberValueEditorConfigurationService) {
    _classCallCheck(this, NumberValueEditorComponentController);

    return _super.call(this, numberValueEditorConfigurationService);
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(57);
  this.controller = NumberValueEditorComponentController;
};

exports.default = NumberValueEditorComponent;
NumberValueEditorComponent.componentName = 'numberValueEditor';

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number/number.value-editor.tpl.pug';
var html = "<input class=\"form-control {{$ctrl.options.hideSpinners ? 'hide-spinners' : ''}}\" type=\"number\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" step=\"{{$ctrl.options.step}}\" min=\"{{$ctrl.valueEditorController.validations.min}}\" max=\"{{$ctrl.valueEditorController.validations.max}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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

var NumberValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "numberValueEditorDefaultOptions"];

  _inherits(NumberValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(NumberValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function NumberValueEditorConfigurationServiceProvider(aliasesServiceProvider, numberValueEditorDefaultOptions) {
    _classCallCheck(this, NumberValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, numberValueEditorDefaultOptions);
  }

  return NumberValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = NumberValueEditorConfigurationServiceProvider;
NumberValueEditorConfigurationServiceProvider.providerName = 'numberValueEditorConfigurationService';

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(60);

var angularjs_register_1 = __webpack_require__(0);

var text_value_editor_component_1 = __webpack_require__(61);

var text_value_editor_configuration_provider_1 = __webpack_require__(64);

var text_value_editor_localization_provider_1 = __webpack_require__(65);
/**
 * @ngdoc module
 * @name angularjs-value-editor.text
 * @module angularjs-value-editor.text
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.text', ['ui.ace']).constant('emailRegex', '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])').constant('textValueEditorDefaultOptions', text_value_editor_configuration_provider_1.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS).constant('textValueEditorDefaultLocalizations', text_value_editor_localization_provider_1.TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(text_value_editor_configuration_provider_1.default.providerName, text_value_editor_configuration_provider_1.default).provider(text_value_editor_localization_provider_1.default.providerName, text_value_editor_localization_provider_1.default).component(text_value_editor_component_1.default.componentName, text_value_editor_component_1.default).name();
/**
 * @ngdoc constant
 * @name emailRegex
 * @module angularjs-value-editor.text
 *
 * @description
 * Regex for email validation.
 *
 * ```
 *  (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
 * ```
 */

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__60__;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextValueEditorComponentController = void 0;

__webpack_require__(62);

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var TEXT_INPUTS = ['text', 'email', 'url', 'tel'];

var TextValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorComponentController.$inject = ["textValueEditorConfigurationService", "emailRegex", "textValueEditorLocalizationsService"];

  _inherits(TextValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorComponentController);

  /*@ngInject*/
  function TextValueEditorComponentController(textValueEditorConfigurationService, emailRegex, textValueEditorLocalizationsService) {
    var _this;

    _classCallCheck(this, TextValueEditorComponentController);

    _this = _super.call(this, textValueEditorConfigurationService, textValueEditorLocalizationsService);
    _this.textValueEditorConfigurationService = textValueEditorConfigurationService;
    _this.emailRegex = emailRegex;
    return _this;
  }

  _createClass(TextValueEditorComponentController, [{
    key: "$doCheck",
    value: function $doCheck() {
      if (this.options.type === 'rich-textarea' && this.valueEditorController.isDisabled !== this.isDisabled && this.aceEditor) {
        this.isDisabled = this.valueEditorController.isDisabled;
        this.aceEditor.setReadOnly(this.isDisabled);
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
  }, {
    key: "isText",
    value: function isText() {
      return TEXT_INPUTS.includes(this.options.type);
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      var _this2 = this;

      var _a;

      if (whatChanged.type && this.options.type === 'rich-textarea') {
        if (!this.options.aceOptions) {
          this.options.aceOptions = this.textValueEditorConfigurationService.forAlias(this.valueEditorController.type).getConfiguration().aceOptions;
        }

        this.options.aceOptions.onLoad = function (ace) {
          _this2.aceEditor = ace;

          _this2.initACE();
        };
      }

      if (whatChanged.type && this.options.type === 'email' && !((_a = this.valueEditorController.validations) !== null && _a !== void 0 ? _a : {}).pattern) {
        if (!this.valueEditorController.validations) {
          this.valueEditorController.validations = {};
        }

        this.valueEditorController.validations.pattern = this.emailRegex;
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
      }); // Propagate disabled -> set Ace to readonly

      this.aceEditor.setReadOnly(this.valueEditorController.isDisabled);
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
 * - `email`
 *
 *      Email input. If pattern validation is not given, default is used.
 *
 * - `tel`
 *
 *      Telephone number input.
 *
 * - `url`
 *
 *      URL input.
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(63);
  this.controller = TextValueEditorComponentController;
};

exports.default = TextValueEditorComponent;
TextValueEditorComponent.componentName = 'textValueEditor';

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/text/text.value-editor.tpl.pug';
var html = "<!-- TEXT--><input class=\"form-control\" ng-if=\"$ctrl.isText()\" type=\"{{$ctrl.options.type}}\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/><!-- TEXTAREA--><textarea class=\"form-control\" ng-if=\"$ctrl.options.type === 'textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" rows=\"{{$ctrl.getNumberOfRows()}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-trim=\"false\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"></textarea><!-- ACE EDITOR--><div class=\"form-control ace-editor\" ng-if=\"$ctrl.options.type === 'rich-textarea'\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" ui-ace=\"$ctrl.options.aceOptions\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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

var TextValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "textValueEditorDefaultOptions"];

  _inherits(TextValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function TextValueEditorConfigurationServiceProvider(aliasesServiceProvider, textValueEditorDefaultOptions) {
    _classCallCheck(this, TextValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, textValueEditorDefaultOptions);
  }

  return TextValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = TextValueEditorConfigurationServiceProvider;
TextValueEditorConfigurationServiceProvider.providerName = 'textValueEditorConfigurationService';

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name textValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.text
 *
 * @description
 * See {@link textValueEditorLocalizationsService}
 */


var TextValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  TextValueEditorLocalizationsServiceProvider.$inject = ["textValueEditorDefaultLocalizations"];

  _inherits(TextValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(TextValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function TextValueEditorLocalizationsServiceProvider(textValueEditorDefaultLocalizations) {
    _classCallCheck(this, TextValueEditorLocalizationsServiceProvider);

    return _super.call(this, textValueEditorDefaultLocalizations);
  }

  return TextValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = TextValueEditorLocalizationsServiceProvider;
TextValueEditorLocalizationsServiceProvider.providerName = 'textValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name textValueEditorDefaultLocalizations
 * @module angularjs-value-editor.text
 *
 * @description
 * ```
 * {
 *      patternDescription: ''
 * }
 * ```
 */

exports.TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  patternDescription: ''
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var year_value_editor_component_1 = __webpack_require__(67);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var luxon_1 = __webpack_require__(13);

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
    key: "convertYearToISO",
    value: function convertYearToISO(year) {
      return year ? luxon_1.DateTime.fromFormat(String(year), 'y').toISODate() : undefined;
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
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
        return luxon_1.DateTime.fromISO(isoDate).year;
      }

      return isoDate;
    }
  }, {
    key: "modelParser",
    value: function modelParser(year) {
      if (year) {
        var parsed = luxon_1.DateTime.fromFormat(String(year), 'y').toISODate();
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(68);
  this.controller = YearValueEditorComponentController;
};

exports.default = YearValueEditorComponent;
YearValueEditorComponent.componentName = 'yearValueEditor';

/***/ }),
/* 68 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/year/year.value-editor.tpl.pug';
var html = "<kp-value-editor editor-id=\"$ctrl.valueEditorController.editorId\" editor-name=\"$ctrl.valueEditorController.editorName\" placeholder=\"$ctrl.valueEditorController.placeholder\" type=\"'date'\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" is-disabled=\"$ctrl.valueEditorController.isDisabled\" options=\"{viewFormat: 'y', maximumGranularity: 'year'}\" validations=\"{minDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.minDate), maxDate: $ctrl.convertYearToISO($ctrl.valueEditorController.validations.maxDate), required: $ctrl.valueEditorController.validations.required}\"></kp-value-editor>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var card_number_value_editor_configuration_provider_1 = __webpack_require__(70);

var card_number_value_editor_localization_provider_1 = __webpack_require__(71);

var card_number_value_editor_component_1 = __webpack_require__(72);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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
 *      requestFunction: ($additionalParameters) => Promise.resolve($additionalParameters.currentValue)
 *  }
 * ```
 */


exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  inputSize: 'sm',
  requestParameters: {},
  requestFunction:
  /* istanbul ignore next */

  /*@ngInject*/
  ["$requestParameters", "$additionalParameters", function requestFunction($requestParameters, $additionalParameters) {
    return Promise.resolve($additionalParameters.currentValue);
  }]
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

var CardNumberValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "cardNumberValueEditorDefaultOptions"];

  _inherits(CardNumberValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function CardNumberValueEditorConfigurationServiceProvider(aliasesServiceProvider, cardNumberValueEditorDefaultOptions) {
    _classCallCheck(this, CardNumberValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, cardNumberValueEditorDefaultOptions);
  }

  return CardNumberValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = CardNumberValueEditorConfigurationServiceProvider;
CardNumberValueEditorConfigurationServiceProvider.providerName = 'cardNumberValueEditorConfigurationService';

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name cardNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 * See {@link cardNumberValueEditorLocalizationsService}
 */


var CardNumberValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorLocalizationsServiceProvider.$inject = ["cardNumberValueEditorDefaultLocalizations"];

  _inherits(CardNumberValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function CardNumberValueEditorLocalizationsServiceProvider(cardNumberValueEditorDefaultLocalizations) {
    _classCallCheck(this, CardNumberValueEditorLocalizationsServiceProvider);

    return _super.call(this, cardNumberValueEditorDefaultLocalizations);
  }

  return CardNumberValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = CardNumberValueEditorLocalizationsServiceProvider;
CardNumberValueEditorLocalizationsServiceProvider.providerName = 'cardNumberValueEditorLocalizationsService';
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardNumberValueEditorComponentController = void 0;

var abstract_value_editor_1 = __webpack_require__(3);

var kp_value_editor_component_1 = __webpack_require__(1);

var CardNumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  CardNumberValueEditorComponentController.$inject = ["cardNumberValueEditorConfigurationService", "cardNumberValueEditorLocalizationsService", "$timeout", "$injector", "$log"];

  _inherits(CardNumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(CardNumberValueEditorComponentController);

  /*@ngInject*/
  function CardNumberValueEditorComponentController(cardNumberValueEditorConfigurationService, cardNumberValueEditorLocalizationsService, $timeout, $injector, $log) {
    var _this;

    _classCallCheck(this, CardNumberValueEditorComponentController);

    _this = _super.call(this, cardNumberValueEditorConfigurationService, cardNumberValueEditorLocalizationsService);
    _this.$timeout = $timeout;
    _this.$injector = $injector;
    _this.$log = $log;
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
                if (!(this.options && this.options.requestFunction)) {
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
                return this.$injector.invoke(this.options.requestFunction, this, {
                  $requestParameters: this.options.requestParameters,
                  $additionalParameters: {
                    inputName: this.valueEditorController.editorName,
                    currentValue: this.model
                  }
                });

              case 8:
                value = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                this.$timeout(function () {
                  _this2.$log.error(_context.t0);
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
 * Supported validations: {@link type:TextValueEditorValidations}
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
 *         function request($timeout) {
 *             return new Promise((resolve) => {
 *                  $timeout(() => {
 *                      resolve('Generated')
 *                  }, 1000);
 *              })
 *         }
 *         request.$inject = ['$timeout'];
 *
 *         angular.module('cardNumberValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', function() {
 *              return {requestFunction: request}
 *          });
 *
 *     </file>
 * </example>
 */

var CardNumberValueEditorComponent = function CardNumberValueEditorComponent() {
  _classCallCheck(this, CardNumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(73);
  this.controller = CardNumberValueEditorComponentController;
};

exports.default = CardNumberValueEditorComponent;
CardNumberValueEditorComponent.componentName = 'cardNumberValueEditor';

/***/ }),
/* 73 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/card-number/card-number.value-editor.tpl.pug';
var html = "<div class=\"input-group\"><div class=\"input-group-btn\"><button class=\"btn btn-default generate\" type=\"button\" ng-class=\"{{$ctrl.options.inputSize}}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-click=\"$ctrl.generate()\" ng-ref=\"$ctrl.generationButton\" uib-popover=\"{{$ctrl.popoverError}}\" popover-is-open=\"$ctrl.openPopover\" popover-trigger=\"'none'\">{{$ctrl.localize('generate')}}</button></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(75);

var angularjs_register_1 = __webpack_require__(0);

var index_selection_value_editor_component_1 = __webpack_require__(76);

var index_selection_value_editor_configuration_provider_1 = __webpack_require__(78);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexSelectionValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.indexSelectionValueEditor';

var IndexSelectionValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  IndexSelectionValueEditorComponentController.$inject = ["indexSelectionValueEditorConfigurationService", "$interpolate", "$templateCache"];

  _inherits(IndexSelectionValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(IndexSelectionValueEditorComponentController);

  /*@ngInject*/
  function IndexSelectionValueEditorComponentController(indexSelectionValueEditorConfigurationService, $interpolate, $templateCache) {
    var _this;

    _classCallCheck(this, IndexSelectionValueEditorComponentController);

    _this = _super.call(this, IndexSelectionValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, indexSelectionValueEditorConfigurationService);
    _this.indexSelectionValueEditorConfigurationService = indexSelectionValueEditorConfigurationService;
    return _this;
  }

  _createClass(IndexSelectionValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(IndexSelectionValueEditorComponentController.prototype), "$onInit", this).call(this); // normalize model


      if (this.model && !Array.isArray(this.model)) {
        this.model = [this.model];
      }
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
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate
      };
    }
  }]);

  return IndexSelectionValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.IndexSelectionValueEditorComponentController = IndexSelectionValueEditorComponentController;
IndexSelectionValueEditorComponentController.TEMPLATE_URL = __webpack_require__(77);
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = IndexSelectionValueEditorComponentController;
};

exports.default = IndexSelectionValueEditorComponent;
IndexSelectionValueEditorComponent.componentName = 'indexSelectionValueEditor';

/***/ }),
/* 77 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/index-selection/index-selection.value-editor.tpl.pug';
var html = "<div class=\"list-group\" data-main-input=\"data-main-input\"><button class=\"list-group-item\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-repeat=\"$item in $ctrl.options.items\" ng-class=\"{'active': $ctrl.isSelected($item), 'isDisabled': $ctrl.valueEditorController.isDisabled}\" ng-click=\"$ctrl.selectItem($item)\">{{optionsTemplate}}</button></div><input class=\"validation-helper\" type=\"text\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.editorName\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-required=\"$ctrl.valueEditorController.validations.required\" error-messages=\"error-messages\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDEX_SELECTION_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
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

var IndexSelectionValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  IndexSelectionValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "indexSelectionValueEditorDefaultOptions"];

  _inherits(IndexSelectionValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(IndexSelectionValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function IndexSelectionValueEditorConfigurationServiceProvider(aliasesServiceProvider, indexSelectionValueEditorDefaultOptions) {
    _classCallCheck(this, IndexSelectionValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, indexSelectionValueEditorDefaultOptions);
  }

  return IndexSelectionValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = IndexSelectionValueEditorConfigurationServiceProvider;
IndexSelectionValueEditorConfigurationServiceProvider.providerName = 'indexSelectionValueEditorConfigurationService';

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(80);

var angularjs_register_1 = __webpack_require__(0);

var autocomplete_value_editor_component_1 = __webpack_require__(81);

var autocomplete_value_editor_configuration_provider_1 = __webpack_require__(83);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 81 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutocompleteValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var angular = __webpack_require__(5);

var AutocompleteValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorComponentController.$inject = ["autocompleteValueEditorConfigurationService", "loadingSpinnerTemplateUrl", "$log", "$timeout", "$element", "$injector"];

  _inherits(AutocompleteValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorComponentController);

  /*@ngInject*/
  function AutocompleteValueEditorComponentController(autocompleteValueEditorConfigurationService, loadingSpinnerTemplateUrl, $log, $timeout, $element, $injector) {
    var _this;

    _classCallCheck(this, AutocompleteValueEditorComponentController);

    _this = _super.call(this, autocompleteValueEditorConfigurationService);
    _this.autocompleteValueEditorConfigurationService = autocompleteValueEditorConfigurationService;
    _this.loadingSpinnerTemplateUrl = loadingSpinnerTemplateUrl;
    _this.$log = $log;
    _this.$timeout = $timeout;
    _this.$element = $element;
    _this.$injector = $injector;
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
                return this.$injector.invoke(this.options.dataSource, this, {
                  $model: this.model,
                  $staticParams: this.options.staticParams
                });

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
      this.$timeout(func ? func.bind(this) :
      /* istanbul ignore next */
      function () {
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
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(82);
  this.controller = AutocompleteValueEditorComponentController;
};

exports.default = AutocompleteValueEditorComponent;
AutocompleteValueEditorComponent.componentName = 'autocompleteValueEditor';

/***/ }),
/* 82 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/autocomplete/autocomplete.value-editor.tpl.pug';
var html = "<div class=\"kp-autocomplete input-group\"><input class=\"form-control\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" ng-focus=\"$ctrl.fetchItemsIfNeed()\" uib-typeahead=\"item for item in $ctrl.items | filter : $viewValue\" typeahead-is-open=\"$ctrl.isOpen\" typeahead-min-length=\"$ctrl.minLength\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-click=\"$ctrl.open()\" ng-blur=\"$ctrl.resetMinLength()\"><i class=\"glyphicon glyphicon-chevron-down\" ng-hide=\"$ctrl.loading\"></i><ng-include class=\"autocomplete-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.loading\"></ng-include></button></span></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTOCOMPLETE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
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
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
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

var AutocompleteValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AutocompleteValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "autocompleteValueEditorDefaultOptions"];

  _inherits(AutocompleteValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AutocompleteValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function AutocompleteValueEditorConfigurationServiceProvider(aliasesServiceProvider, autocompleteValueEditorDefaultOptions) {
    _classCallCheck(this, AutocompleteValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, autocompleteValueEditorDefaultOptions);
  }

  return AutocompleteValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AutocompleteValueEditorConfigurationServiceProvider;
AutocompleteValueEditorConfigurationServiceProvider.providerName = 'autocompleteValueEditorConfigurationService';

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(85);

var angularjs_register_1 = __webpack_require__(0);

var password_value_editor_component_1 = __webpack_require__(86);

var password_value_editor_configuration_provider_1 = __webpack_require__(88);

var password_value_editor_localization_provider_1 = __webpack_require__(89);

var model_equals_directive_1 = __webpack_require__(90);
/**
 * @ngdoc module
 * @name angularjs-value-editor.password
 * @module angularjs-value-editor.password
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.password').constant('passwordValueEditorDefaultOptions', password_value_editor_configuration_provider_1.PASSWORD_VALUE_EDITOR_DEFAULT_OPTIONS).constant('passwordValueEditorDefaultLocalizations', password_value_editor_localization_provider_1.PASSWORD_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(password_value_editor_configuration_provider_1.default.providerName, password_value_editor_configuration_provider_1.default).provider(password_value_editor_localization_provider_1.default.providerName, password_value_editor_localization_provider_1.default).directive(model_equals_directive_1.ModelEqualsDirective.directiveName, model_equals_directive_1.ModelEqualsDirective).component(password_value_editor_component_1.default.componentName, password_value_editor_component_1.default).name();

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var PasswordValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorComponentController.$inject = ["passwordValueEditorConfigurationService", "passwordValueEditorLocalizationsService"];

  _inherits(PasswordValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorComponentController);

  /*@ngInject*/
  function PasswordValueEditorComponentController(passwordValueEditorConfigurationService, passwordValueEditorLocalizationsService) {
    _classCallCheck(this, PasswordValueEditorComponentController);

    return _super.call(this, passwordValueEditorConfigurationService, passwordValueEditorLocalizationsService);
  }

  _createClass(PasswordValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      _get(_getPrototypeOf(PasswordValueEditorComponentController.prototype), "$onInit", this).call(this);

      var originalRenderFunction = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        originalRenderFunction();
        _this.passwordRepetition = _this.model;
      };
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }]);

  return PasswordValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.PasswordValueEditorComponentController = PasswordValueEditorComponentController;
/**
 * @ngdoc component
 * @name passwordValueEditor
 * @module angularjs-value-editor.password
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for password input.
 *
 * Supported options: {@link type:PasswordValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="passwordValueEditorExample" module="passwordValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'password'" ng-model="model" options="{withConfirmation: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('passwordValueEditorExample', ['angularjs-value-editor'])
 *     </file>
 * </example>
 */

var PasswordValueEditorComponent = function PasswordValueEditorComponent() {
  _classCallCheck(this, PasswordValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(87);
  this.controller = PasswordValueEditorComponentController;
};

exports.default = PasswordValueEditorComponent;
PasswordValueEditorComponent.componentName = 'passwordValueEditor';

/***/ }),
/* 87 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/password/password.value-editor.tpl.pug';
var html = "<span class=\"with-confirmation\" ng-if=\"$ctrl.options.withConfirmation\"><div class=\"form-group\"><input class=\"form-control\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" kp-model-equals=\"{{$ctrl.passwordRepetition}}\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/><span class=\"help-block\"><span class=\"text-muted\" ng-show=\"!$ctrl.valueEditorController.validations.required\">{{$ctrl.localize('noChangeIfEmpty')}}</span></span></div><div class=\"form-group\"><label for=\"{{$ctrl.valueEditorController.editorId}}_repetition\">{{$ctrl.localize('confirmPassword')}}</label><input class=\"form-control confirmation\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}_repetition\" name=\"{{$ctrl.valueEditorController.editorName}}_repetition\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.passwordRepetition\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\"/></div></span><span class=\"without-confirmation\" ng-if=\"!$ctrl.options.withConfirmation\"><input class=\"form-control\" type=\"password\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/></span>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSWORD_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name passwordValueEditorDefaultOptions
 * @module angularjs-value-editor.password
 *
 * @description
 * For description see {@link PasswordValueEditorOptions}
 *
 * ```javascript
 * {
 *      withConfirmation: false
 * }
 * ```
 */


exports.PASSWORD_VALUE_EDITOR_DEFAULT_OPTIONS = {
  withConfirmation: false
};
/**
 * @ngdoc provider
 * @name passwordValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.password
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link passwordValueEditorDefaultOptions}
 */

var PasswordValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "passwordValueEditorDefaultOptions"];

  _inherits(PasswordValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function PasswordValueEditorConfigurationServiceProvider(aliasesServiceProvider, passwordValueEditorDefaultOptions) {
    _classCallCheck(this, PasswordValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, passwordValueEditorDefaultOptions);
  }

  return PasswordValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = PasswordValueEditorConfigurationServiceProvider;
PasswordValueEditorConfigurationServiceProvider.providerName = 'passwordValueEditorConfigurationService';

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSWORD_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name passwordValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.password
 *
 * @description
 * See {@link passwordValueEditorLocalizationsService}
 */


var PasswordValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  PasswordValueEditorLocalizationsServiceProvider.$inject = ["passwordValueEditorDefaultLocalizations"];

  _inherits(PasswordValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(PasswordValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function PasswordValueEditorLocalizationsServiceProvider(passwordValueEditorDefaultLocalizations) {
    _classCallCheck(this, PasswordValueEditorLocalizationsServiceProvider);

    return _super.call(this, passwordValueEditorDefaultLocalizations);
  }

  return PasswordValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = PasswordValueEditorLocalizationsServiceProvider;
PasswordValueEditorLocalizationsServiceProvider.providerName = 'passwordValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name passwordValueEditorDefaultLocalizations
 * @module angularjs-value-editor.password
 *
 * @description
 * ```
 * {
 *      patternDescription: '',
 *      confirmPassword: 'Confirm password',
 *      noChangeIfEmpty: 'If You don\'t want to change password, leave blank.'
 * }
 * ```
 */

exports.PASSWORD_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  patternDescription: '',
  confirmPassword: 'Confirm password',
  noChangeIfEmpty: 'If You don\'t want to change password, leave blank.'
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelEqualsDirective = void 0;
/**
 * @ngdoc directive
 * @name kpModelEquals
 * @module angularjs-value-editor.password
 *
 * @restrict A
 *
 * @param {string} kpModelEquals Comparing value.
 *
 * @description
 * Directive add equals validator. If input value is not equal to model value, it will fails.
 */

var ModelEqualsDirective = /*#__PURE__*/function () {
  function ModelEqualsDirective() {
    _classCallCheck(this, ModelEqualsDirective);

    this.restrict = 'A';
    this.require = 'ngModel';
  }

  _createClass(ModelEqualsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, ngModelController) {
      ngModelController.$validators['passwords-equals'] = function (modelValue) {
        var valueToCompare = $attrs[ModelEqualsDirective.directiveName];
        return !(modelValue || valueToCompare) || valueToCompare === modelValue;
      };

      $attrs.$observe(ModelEqualsDirective.directiveName, function () {
        ngModelController.$validate();
      });
    }
  }]);

  return ModelEqualsDirective;
}();

exports.ModelEqualsDirective = ModelEqualsDirective;
ModelEqualsDirective.directiveName = 'kpModelEquals';

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var signature_value_editor_component_1 = __webpack_require__(92);

var signature_value_editor_configuration_provider_1 = __webpack_require__(94);

var signature_value_editor_localization_provider_1 = __webpack_require__(95);
/**
 * @ngdoc module
 * @name angularjs-value-editor.signature
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.signature').constant('signatureValueEditorDefaultOptions', signature_value_editor_configuration_provider_1.SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('signatureValueEditorDefaultLocalizations', signature_value_editor_localization_provider_1.SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(signature_value_editor_configuration_provider_1.default.providerName, signature_value_editor_configuration_provider_1.default).provider(signature_value_editor_localization_provider_1.default.providerName, signature_value_editor_localization_provider_1.default).component(signature_value_editor_component_1.default.componentName, signature_value_editor_component_1.default).name();

/***/ }),
/* 92 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var forms_1 = __webpack_require__(15);

var SignatureValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorComponentController.$inject = ["signatureValueEditorConfigurationService", "signatureValueEditorLocalizationsService", "$injector", "$timeout", "$log"];

  _inherits(SignatureValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorComponentController);

  /*@ngInject*/
  function SignatureValueEditorComponentController(signatureValueEditorConfigurationService, signatureValueEditorLocalizationsService, $injector, $timeout, $log) {
    var _this;

    _classCallCheck(this, SignatureValueEditorComponentController);

    _this = _super.call(this, signatureValueEditorConfigurationService, signatureValueEditorLocalizationsService);
    _this.$injector = $injector;
    _this.$timeout = $timeout;
    _this.$log = $log;
    _this.items = [];
    return _this;
  }

  _createClass(SignatureValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(SignatureValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (newOptions.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var _this2 = this;

      this.$timeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var $formModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                $formModel = _this2.valueEditorController.formController ? forms_1.getFormModel(_this2.valueEditorController.formController) : undefined;
                _context.next = 4;
                return _this2.$injector.invoke(_this2.options.dataSource, _this2, {
                  $model: _this2.model,
                  $name: _this2.valueEditorController.editorName,
                  $formModel: $formModel
                });

              case 4:
                _this2.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this2.$log.error('Unable to fetch items. Error:', _context.t0);

              case 10:
                _context.prev = 10;
                _this2.showSelect = _this2.options.canDoAction && _this2.items && _this2.items.length > 0;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      })));
    }
  }]);

  return SignatureValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.SignatureValueEditorComponentController = SignatureValueEditorComponentController;
/**
 * @ngdoc component
 * @name signatureValueEditor
 * @module angularjs-value-editor.signature
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for signature input.
 *
 * Supported options: {@link type:SignatureValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="signatureValueEditorExample" module="signatureValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'signature'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('signatureValueEditorExample', ['angularjs-value-editor'])
 *          .config((signatureValueEditorConfigurationServiceProvider) => signatureValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var SignatureValueEditorComponent = function SignatureValueEditorComponent() {
  _classCallCheck(this, SignatureValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(93);
  this.controller = SignatureValueEditorComponentController;
};

exports.default = SignatureValueEditorComponent;
SignatureValueEditorComponent.componentName = 'signatureValueEditor';

/***/ }),
/* 93 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/signature/signature.value-editor.tpl.pug';
var html = "<div class=\"input-group\" ng-if=\"$ctrl.showSelect\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" tagging=\"tagging\"><ui-select-match placeholder=\"{{$ctrl.localize('select')}}\">{{($ctrl.items | filter: $select.selected)[0]}}</ui-select-match><ui-select-choices repeat=\"$item in $ctrl.items track by $item\">{{$item}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.localize('orType')}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-if=\"!$ctrl.showSelect\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name signatureValueEditorDefaultOptions
 * @module angularjs-value-editor.signature
 *
 * @description
 * For description see {@link SignatureValueEditorOptions}
 *
 * ```javascript
 * {
 *      canDoAction: false,
 *      dataSource: () => Promise.resolve([])
 * }
 * ```
 */


exports.SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
    return Promise.resolve([]);
  },
  canDoAction: false
};
/**
 * @ngdoc provider
 * @name signatureValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link signatureValueEditorDefaultOptions}
 */

var SignatureValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "signatureValueEditorDefaultOptions"];

  _inherits(SignatureValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function SignatureValueEditorConfigurationServiceProvider(aliasesServiceProvider, signatureValueEditorDefaultOptions) {
    _classCallCheck(this, SignatureValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, signatureValueEditorDefaultOptions);
  }

  return SignatureValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = SignatureValueEditorConfigurationServiceProvider;
SignatureValueEditorConfigurationServiceProvider.providerName = 'signatureValueEditorConfigurationService';

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name signatureValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.signature
 *
 * @description
 * See {@link signatureValueEditorLocalizationsService}
 */


var SignatureValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SignatureValueEditorLocalizationsServiceProvider.$inject = ["signatureValueEditorDefaultLocalizations"];

  _inherits(SignatureValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(SignatureValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function SignatureValueEditorLocalizationsServiceProvider(signatureValueEditorDefaultLocalizations) {
    _classCallCheck(this, SignatureValueEditorLocalizationsServiceProvider);

    return _super.call(this, signatureValueEditorDefaultLocalizations);
  }

  return SignatureValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SignatureValueEditorLocalizationsServiceProvider;
SignatureValueEditorLocalizationsServiceProvider.providerName = 'signatureValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name signatureValueEditorDefaultLocalizations
 * @module angularjs-value-editor.signature
 *
 * @description
 * ```
 * {
 *      select: 'Select...',
 *      orType: 'or type...'
 * }
 * ```
 */

exports.SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  select: 'Select...',
  orType: 'or type...',
  patternDescription: ''
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var access_number_value_editor_component_1 = __webpack_require__(97);

var access_number_value_editor_configuration_provider_1 = __webpack_require__(99);

var access_number_value_editor_localization_provider_1 = __webpack_require__(100);
/**
 * @ngdoc module
 * @name angularjs-value-editor.access-number
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.access-number').constant('accessNumberValueEditorDefaultOptions', access_number_value_editor_configuration_provider_1.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS).constant('accessNumberValueEditorDefaultLocalizations', access_number_value_editor_localization_provider_1.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(access_number_value_editor_configuration_provider_1.default.providerName, access_number_value_editor_configuration_provider_1.default).provider(access_number_value_editor_localization_provider_1.default.providerName, access_number_value_editor_localization_provider_1.default).component(access_number_value_editor_component_1.default.componentName, access_number_value_editor_component_1.default).name();

/***/ }),
/* 97 */
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessNumberValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var forms_1 = __webpack_require__(15);

var AccessNumberValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorComponentController.$inject = ["accessNumberValueEditorConfigurationService", "accessNumberValueEditorLocalizationsService", "$injector", "$timeout", "$log"];

  _inherits(AccessNumberValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorComponentController);

  /*@ngInject*/
  function AccessNumberValueEditorComponentController(accessNumberValueEditorConfigurationService, accessNumberValueEditorLocalizationsService, $injector, $timeout, $log) {
    var _this;

    _classCallCheck(this, AccessNumberValueEditorComponentController);

    _this = _super.call(this, accessNumberValueEditorConfigurationService, accessNumberValueEditorLocalizationsService);
    _this.$injector = $injector;
    _this.$timeout = $timeout;
    _this.$log = $log;
    _this.items = [];
    return _this;
  }

  _createClass(AccessNumberValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(AccessNumberValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (newOptions.canDoAction) {
        this.loadItems();
      }
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var _this2 = this;

      this.$timeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var $formModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                $formModel = _this2.valueEditorController.formController ? forms_1.getFormModel(_this2.valueEditorController.formController) : undefined;
                _context.next = 4;
                return _this2.$injector.invoke(_this2.options.dataSource, _this2, {
                  $model: _this2.model,
                  $name: _this2.valueEditorController.editorName,
                  $formModel: $formModel
                });

              case 4:
                _this2.items = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this2.$log.error('Unable to fetch items. Error:', _context.t0);

              case 10:
                _context.prev = 10;
                _this2.showSelect = _this2.options.canDoAction && _this2.items && _this2.items.length > 0;
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      })));
    }
  }, {
    key: "required",
    get: function get() {
      var _a, _b;

      return forms_1.getFormModel(this.valueEditorController.formController).issue ? false : (_b = (_a = this.valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) !== null && _b !== void 0 ? _b : false;
    }
  }]);

  return AccessNumberValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.AccessNumberValueEditorComponentController = AccessNumberValueEditorComponentController;
/**
 * @ngdoc component
 * @name accessNumberValueEditor
 * @module angularjs-value-editor.access-number
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for access number input.
 *
 * Supported options: {@link type:AccessNumberValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="accessNumberValueEditorExample" module="accessNumberValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'access-number'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('accessNumberValueEditorExample', ['angularjs-value-editor'])
 *          .config((accessNumberValueEditorConfigurationServiceProvider) => accessNumberValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var AccessNumberValueEditorComponent = function AccessNumberValueEditorComponent() {
  _classCallCheck(this, AccessNumberValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(98);
  this.controller = AccessNumberValueEditorComponentController;
};

exports.default = AccessNumberValueEditorComponent;
AccessNumberValueEditorComponent.componentName = 'accessNumberValueEditor';

/***/ }),
/* 98 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/access-number/access-number.value-editor.tpl.pug';
var html = "<div class=\"input-group\" ng-if=\"$ctrl.showSelect\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" tagging=\"tagging\"><ui-select-match placeholder=\"{{$ctrl.localize('select')}}\">{{($ctrl.items | filter: $select.selected)[0]}}</ui-select-match><ui-select-choices repeat=\"$item in $ctrl.items track by $item\">{{$item}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.localize('orType')}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-if=\"!$ctrl.showSelect\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name accessNumberValueEditorDefaultOptions
 * @module angularjs-value-editor.access-number
 *
 * @description
 * For description see {@link AccessNumberValueEditorOptions}
 *
 * ```javascript
 * {
 *      canDoAction: false,
 *      dataSource: () => Promise.resolve([])
 * }
 * ```
 */


exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_OPTIONS = {
  canDoAction: false,
  dataSource:
  /* istanbul ignore next */
  function dataSource() {
    return Promise.resolve([]);
  }
};
/**
 * @ngdoc provider
 * @name accessNumberValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link accessNumberValueEditorDefaultOptions}
 */

var AccessNumberValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "accessNumberValueEditorDefaultOptions"];

  _inherits(AccessNumberValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function AccessNumberValueEditorConfigurationServiceProvider(aliasesServiceProvider, accessNumberValueEditorDefaultOptions) {
    _classCallCheck(this, AccessNumberValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, accessNumberValueEditorDefaultOptions);
  }

  return AccessNumberValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AccessNumberValueEditorConfigurationServiceProvider;
AccessNumberValueEditorConfigurationServiceProvider.providerName = 'accessNumberValueEditorConfigurationService';

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name accessNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.access-number
 *
 * @description
 * See {@link AccessNumberValueEditorLocalizationsService}
 */


var AccessNumberValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AccessNumberValueEditorLocalizationsServiceProvider.$inject = ["accessNumberValueEditorDefaultLocalizations"];

  _inherits(AccessNumberValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AccessNumberValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function AccessNumberValueEditorLocalizationsServiceProvider(accessNumberValueEditorDefaultLocalizations) {
    _classCallCheck(this, AccessNumberValueEditorLocalizationsServiceProvider);

    return _super.call(this, accessNumberValueEditorDefaultLocalizations);
  }

  return AccessNumberValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AccessNumberValueEditorLocalizationsServiceProvider;
AccessNumberValueEditorLocalizationsServiceProvider.providerName = 'accessNumberValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name accessNumberValueEditorDefaultLocalizations
 * @module angularjs-value-editor.access-number
 *
 * @description
 * ```
 * {
 *      select: 'Select...',
 *      orType: 'or type...',
 *      patternDescription: ''
 * }
 * ```
 */

exports.ACCESS_NUMBER_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  select: 'Select...',
  orType: 'or type...',
  patternDescription: ''
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(102);

var angularjs_register_1 = __webpack_require__(0);

var number_range_value_editor_component_1 = __webpack_require__(103);

var number_range_value_editor_configuration_provider_1 = __webpack_require__(105);

var number_range_value_editor_localization_provider_1 = __webpack_require__(106);

var number_range_validations_directive_1 = __webpack_require__(107);
/**
 * @ngdoc module
 * @name angularjs-value-editor.number-range
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.number-range').constant('numberRangeValueEditorDefaultOptions', number_range_value_editor_configuration_provider_1.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('numberRangeValueEditorDefaultLocalizations', number_range_value_editor_localization_provider_1.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(number_range_value_editor_configuration_provider_1.default.providerName, number_range_value_editor_configuration_provider_1.default).provider(number_range_value_editor_localization_provider_1.default.providerName, number_range_value_editor_localization_provider_1.default).directive(number_range_validations_directive_1.default.directiveName, number_range_validations_directive_1.default).component(number_range_value_editor_component_1.default.componentName, number_range_value_editor_component_1.default).name();

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberRangeValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_value_editor_1 = __webpack_require__(3);

var angular = __webpack_require__(5);

var NumberRangeValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorComponentController.$inject = ["numberRangeValueEditorConfigurationService", "numberRangeValueEditorLocalizationsService", "$element"];

  _inherits(NumberRangeValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorComponentController);

  /*@ngInject*/
  function NumberRangeValueEditorComponentController(numberRangeValueEditorConfigurationService, numberRangeValueEditorLocalizationsService, $element) {
    var _this;

    _classCallCheck(this, NumberRangeValueEditorComponentController);

    _this = _super.call(this, numberRangeValueEditorConfigurationService, numberRangeValueEditorLocalizationsService);
    _this.$element = $element;
    return _this;
  }

  _createClass(NumberRangeValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;

      _get(_getPrototypeOf(NumberRangeValueEditorComponentController.prototype), "$onInit", this).call(this);

      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        var _a, _b, _c, _d;

        originalRender();
        _this2.modelFrom = (_b = (_a = _this2.model) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : null;
        _this2.modelTo = (_d = (_c = _this2.model) === null || _c === void 0 ? void 0 : _c.to) !== null && _d !== void 0 ? _d : null;
      };
    }
  }, {
    key: "$doCheck",
    value: function $doCheck() {
      var _a, _b, _c, _d, _e, _f;

      var isNumberInvalid = ((_c = (_b = (_a = this.fromRef) === null || _a === void 0 ? void 0 : _a.controller('ngModel').$error) === null || _b === void 0 ? void 0 : _b.number) !== null && _c !== void 0 ? _c : false) || ((_f = (_e = (_d = this.toRef) === null || _d === void 0 ? void 0 : _d.controller('ngModel').$error) === null || _e === void 0 ? void 0 : _e.number) !== null && _f !== void 0 ? _f : false);
      this.validNumber = !isNumberInvalid;
    }
  }, {
    key: "setNgModel",
    value: function setNgModel() {
      this.model = {
        from: this.modelFrom,
        to: this.modelTo
      };
    }
  }, {
    key: "setTouched",
    value: function setTouched() {
      if (!this.touched) {
        angular.element(this.$element[0].querySelector('input.validation-helper')).controller('ngModel').$setTouched();
        this.touched = true;
      }
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "validations",
    get: function get() {
      return this.valueEditorController.validations;
    }
  }]);

  return NumberRangeValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.NumberRangeValueEditorComponentController = NumberRangeValueEditorComponentController;
/**
 * @ngdoc component
 * @name numberRangeValueEditor
 * @module angularjs-value-editor.number-range
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for integer number range input.
 *
 * Supported options: {@link type:NumberRangeValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="numberRangeValueEditorExample" module="numberRangeValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'number-range'" ng-model="model" options="{canDoAction: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('numberRangeValueEditorExample', ['angularjs-value-editor'])
 *          .config((numberRangeValueEditorConfigurationServiceProvider) => numberRangeValueEditorConfigurationServiceProvider.setConfiguration({
 *              dataSource: () => Promise.resolve(['one', 'two', 'three'])
 *          }));
 *     </file>
 * </example>
 */

var NumberRangeValueEditorComponent = function NumberRangeValueEditorComponent() {
  _classCallCheck(this, NumberRangeValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(104);
  this.controller = NumberRangeValueEditorComponentController;
};

exports.default = NumberRangeValueEditorComponent;
NumberRangeValueEditorComponent.componentName = 'numberRangeValueEditor';

/***/ }),
/* 104 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/number-range/number-range.value-editor.tpl.pug';
var html = "<div class=\"form-control multi-input-group\"><div class=\"input-group from\"><label class=\"input-group-addon\" for=\"{{$ctrl.valueEditorController.editorId}}\">{{$ctrl.localize('from')}}</label><input class=\"form-control\" id=\"{{$ctrl.valueEditorController.editorId}}\" type=\"number\" ng-model=\"$ctrl.modelFrom\" ng-change=\"$ctrl.setNgModel()\" ng-ref=\"$ctrl.fromRef\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-blur=\"$ctrl.setTouched()\"/></div><div class=\"input-group to\"><label class=\"input-group-addon\" for=\"{{$ctrl.valueEditorController.editorId}}_to\">{{$ctrl.localize('to')}}</label><input class=\"form-control\" id=\"{{$ctrl.valueEditorController.editorId}}_to\" type=\"number\" ng-model=\"$ctrl.modelTo\" ng-change=\"$ctrl.setNgModel()\" ng-ref=\"$ctrl.toRef\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-blur=\"$ctrl.setTouched()\"/></div></div><input class=\"validation-helper\" type=\"text\" name=\"{{$ctrl.valueEditorController.editorName}}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" number-range-validations=\"$ctrl.validNumber\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name numberRangeValueEditorDefaultOptions
 * @module angularjs-value-editor.number-range
 *
 * @description
 * For description see {@link NumberRangeValueEditorOptions}
 *
 * ```javascript
 * {
 * }
 * ```
 */


exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = {};
/**
 * @ngdoc provider
 * @name numberRangeValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberRangeValueEditorDefaultOptions}
 */

var NumberRangeValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "numberRangeValueEditorDefaultOptions"];

  _inherits(NumberRangeValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function NumberRangeValueEditorConfigurationServiceProvider(aliasesServiceProvider, numberRangeValueEditorDefaultOptions) {
    _classCallCheck(this, NumberRangeValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, numberRangeValueEditorDefaultOptions);
  }

  return NumberRangeValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = NumberRangeValueEditorConfigurationServiceProvider;
NumberRangeValueEditorConfigurationServiceProvider.providerName = 'numberRangeValueEditorConfigurationService';

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name numberRangeValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.number-range
 *
 * @description
 * See {@link NumberRangeValueEditorLocalizationsService}
 */


var NumberRangeValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  NumberRangeValueEditorLocalizationsServiceProvider.$inject = ["numberRangeValueEditorDefaultLocalizations"];

  _inherits(NumberRangeValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(NumberRangeValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function NumberRangeValueEditorLocalizationsServiceProvider(numberRangeValueEditorDefaultLocalizations) {
    _classCallCheck(this, NumberRangeValueEditorLocalizationsServiceProvider);

    return _super.call(this, numberRangeValueEditorDefaultLocalizations);
  }

  return NumberRangeValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = NumberRangeValueEditorLocalizationsServiceProvider;
NumberRangeValueEditorLocalizationsServiceProvider.providerName = 'numberRangeValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name numberRangeValueEditorDefaultLocalizations
 * @module angularjs-value-editor.number-range
 *
 * @description
 * ```
 * {
 *      from: 'from',
 *      to: 'to'
 * }
 * ```
 */

exports.NUMBER_RANGE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  from: 'from',
  to: 'to'
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name numberRangeValidations
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 */

var NumberRangeValidationsDirective = /*#__PURE__*/function () {
  NumberRangeValidationsDirective.$inject = ["$parse"];

  /*@ngInject*/
  function NumberRangeValidationsDirective($parse) {
    _classCallCheck(this, NumberRangeValidationsDirective);

    this.$parse = $parse;
    this.restrict = 'A';
    this.require = ['ngModel', '^numberRangeValueEditor'];
  }

  _createClass(NumberRangeValidationsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          numberRangeValueEditorController = _ref2[1];

      ngModelController.$validators.required = requiredValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.min = minValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.max = maxValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.fromBiggerThanTo = fromBiggerThanToValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.toBiggerThanFrom = toBiggerThanFromValidationFactory(numberRangeValueEditorController);
      ngModelController.$validators.number = numberValidationFactory($scope, this.$parse, $attrs);
      ngModelController.$formatters.push(function (value) {
        return JSON.stringify(value);
      });
    }
  }]);

  return NumberRangeValidationsDirective;
}();

exports.default = NumberRangeValidationsDirective;
NumberRangeValidationsDirective.directiveName = 'numberRangeValidations';

function requiredValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) || Number.isInteger(modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) && Number.isInteger(modelValue === null || modelValue === void 0 ? void 0 : modelValue.to);
  };
}

function minValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a, _b, _c;

    var min = (_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.min;
    return !Number.isInteger(min) || ((_b = modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) !== null && _b !== void 0 ? _b : min) >= min && ((_c = modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) !== null && _c !== void 0 ? _c : min) >= min;
  };
}

function maxValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a, _b, _c;

    var max = (_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.max;
    return !Number.isInteger(max) || ((_b = modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) !== null && _b !== void 0 ? _b : max) <= max && ((_c = modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) !== null && _c !== void 0 ? _c : max) <= max;
  };
}

function fromBiggerThanToValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.fromBiggerThanTo) || (modelValue === null || modelValue === void 0 ? void 0 : modelValue.from) > (modelValue === null || modelValue === void 0 ? void 0 : modelValue.to);
  };
}

function toBiggerThanFromValidationFactory(numberRangeValueEditorController) {
  return function (modelValue) {
    var _a;

    return !((_a = numberRangeValueEditorController.validations) === null || _a === void 0 ? void 0 : _a.toBiggerThanFrom) || (modelValue === null || modelValue === void 0 ? void 0 : modelValue.to) > (modelValue === null || modelValue === void 0 ? void 0 : modelValue.from);
  };
}

function numberValidationFactory($scope, $parse, $attrs) {
  return function () {
    return $parse($attrs[NumberRangeValidationsDirective.directiveName])($scope);
  };
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var exemplar_bar_code_value_editor_config_1 = __webpack_require__(109);
/**
 * @ngdoc module
 * @name angularjs-value-editor.exemplar-bar-code
 * @module angularjs-value-editor.exemplar-bar-code
 *
 * @description
 * `exemplar-bar-code` value editor is only {@link aliasesService alias} for {@link textValueEditor text-value-editor} with default {@link TextValueEditorOptions options}:
 * ```
 *  {
 *      type: 'text'
 *  }
 * ```
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.exemplar-bar-code').config(exemplar_bar_code_value_editor_config_1.default).name();

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exemplarBarCodeValueEditorConfig.$inject = ["aliasesServiceProvider", "textValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
var EXEMPLAR_BAR_CODE_ALIAS = 'exemplar-bar-code';
/*@ngInject*/

function exemplarBarCodeValueEditorConfig(aliasesServiceProvider, textValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(EXEMPLAR_BAR_CODE_ALIAS, 'text');
  textValueEditorConfigurationServiceProvider.forAlias(EXEMPLAR_BAR_CODE_ALIAS).setConfiguration({
    type: 'text'
  });
}

exports.default = exemplarBarCodeValueEditorConfig;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(111);

var angularjs_register_1 = __webpack_require__(0);

var angular_tree_control_1 = __webpack_require__(112);

var acceptable_root_value_editor_configuration_provider_1 = __webpack_require__(114);

var acceptable_root_value_editor_localization_provider_1 = __webpack_require__(115);

var acceptable_root_value_editor_component_1 = __webpack_require__(116);

var acceptable_root_value_editor_1 = __webpack_require__(119);

var acceptable_root_required_validations_directive_1 = __webpack_require__(120);
/**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable-root
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.acceptable-root', [angular_tree_control_1.default]).config(acceptable_root_value_editor_1.acceptableRootValueEditorConfig).constant('acceptableRootValueEditorDefaultOptions', acceptable_root_value_editor_configuration_provider_1.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_OPTIONS).constant('acceptableRootValueEditorDefaultLocalizations', acceptable_root_value_editor_localization_provider_1.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(acceptable_root_value_editor_configuration_provider_1.default.providerName, acceptable_root_value_editor_configuration_provider_1.default).provider(acceptable_root_value_editor_localization_provider_1.default.providerName, acceptable_root_value_editor_localization_provider_1.default).directive(acceptable_root_required_validations_directive_1.default.directiveName, acceptable_root_required_validations_directive_1.default).component(acceptable_root_value_editor_component_1.default.componentName, acceptable_root_value_editor_component_1.default).name();

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni cas... :-(

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(113);

var angular = __webpack_require__(5);

function createPath(startScope) {
  return function path() {
    var currentPath = [];
    var scope = startScope;
    var prevNode;

    while (scope && scope.$node !== startScope.synteticRoot) {
      if (prevNode !== scope.$node) {
        currentPath.push(scope.$node);
      }

      prevNode = scope.$node;
      scope = scope.$parent;
    }

    return currentPath;
  };
}

function ensureDefault(obj, prop, value) {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
  }
}

function defaultIsLeaf(node, $scope) {
  return !(node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) || (node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren].length) === 0;
}

function shallowCopy(src, dst) {
  if (angular.isArray(src)) {
    dst = dst || [];

    for (var i = 0; i < src.length; i++) {
      dst[i] = src[i];
    }
  } else if (angular.isObject(src)) {
    dst = dst || {};

    for (var key in src) {
      if (Object.hasOwnProperty.call(src, key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
  }

  return dst || src;
}

function defaultEquality(a, b, $scope) {
  if (!a || !b) {
    return false;
  }

  a = shallowCopy(a);
  a[$scope.options.nodeChildren] = [];
  b = shallowCopy(b);
  b[$scope.options.nodeChildren] = [];
  return angular.equals(a, b);
}

function defaultIsSelectable() {
  return true;
}

function ensureAllDefaultOptions($scope) {
  ensureDefault($scope.options, 'multiSelection', false);
  ensureDefault($scope.options, 'nodeChildren', 'children');
  ensureDefault($scope.options, 'dirSelectable', 'true');
  ensureDefault($scope.options, 'injectClasses', {});
  ensureDefault($scope.options.injectClasses, 'ul', '');
  ensureDefault($scope.options.injectClasses, 'li', '');
  ensureDefault($scope.options.injectClasses, 'liSelected', '');
  ensureDefault($scope.options.injectClasses, 'iExpanded', '');
  ensureDefault($scope.options.injectClasses, 'iCollapsed', '');
  ensureDefault($scope.options.injectClasses, 'iLeaf', '');
  ensureDefault($scope.options.injectClasses, 'label', '');
  ensureDefault($scope.options.injectClasses, 'labelSelected', '');
  ensureDefault($scope.options, 'equality', defaultEquality);
  ensureDefault($scope.options, 'isLeaf', defaultIsLeaf);
  ensureDefault($scope.options, 'allowDeselect', true);
  ensureDefault($scope.options, 'isSelectable', defaultIsSelectable);
}

exports.default = angular.module('treeControl', []).constant('treeConfig', {
  templateUrl: null
}).directive('treecontrol', ['$compile', function ($compile) {
  /**
   * @param cssClass - the css class
   * @param addClassProperty - should we wrap the class name with class=""
   */
  function classIfDefined(cssClass, addClassProperty) {
    if (cssClass) {
      if (addClassProperty) {
        return "class=\"".concat(cssClass, "\"");
      } else {
        return cssClass;
      }
    } else {
      return '';
    }
  }

  return {
    restrict: 'EA',
    require: 'treecontrol',
    transclude: true,
    scope: {
      treeModel: '=',
      selectedNode: '=?',
      selectedNodes: '=?',
      expandedNodes: '=?',
      onSelection: '&',
      onNodeToggle: '&',
      options: '=?',
      orderBy: '=?',
      reverseOrder: '@',
      filterExpression: '=?',
      filterComparator: '=?'
    },
    controller: ['$scope', '$templateCache', '$interpolate', 'treeConfig', function treecontrolController($scope, $templateCache, $interpolate, treeConfig) {
      $scope.options = $scope.options || {};
      ensureAllDefaultOptions($scope);
      $scope.selectedNodes = $scope.selectedNodes || [];
      $scope.expandedNodes = $scope.expandedNodes || [];
      $scope.expandedNodesMap = {};

      for (var i = 0; i < $scope.expandedNodes.length; i++) {
        $scope.expandedNodesMap["a".concat(i)] = $scope.expandedNodes[i];
      }

      $scope.parentScopeOfTree = $scope.$parent;

      function isSelectedNode(node) {
        if (!$scope.options.multiSelection && $scope.options.equality(node, $scope.selectedNode, $scope)) {
          return true;
        } else if ($scope.options.multiSelection && $scope.selectedNodes) {
          return $scope.selectedNodes.some(function (child) {
            return $scope.options.equality(node, child, $scope);
          });
        }
      }

      $scope.headClass = function headClass(node) {
        var liSelectionClass = classIfDefined($scope.options.injectClasses.liSelected, false);
        var injectSelectionClass = '';

        if (liSelectionClass && isSelectedNode(node)) {
          injectSelectionClass = " ".concat(liSelectionClass);
        }

        if ($scope.options.isLeaf(node, $scope)) {
          return "tree-leaf".concat(injectSelectionClass);
        }

        if ($scope.expandedNodesMap[this.$id]) {
          return "tree-expanded".concat(injectSelectionClass);
        } else {
          return "tree-collapsed".concat(injectSelectionClass);
        }
      };

      $scope.iBranchClass = function iBranchClass() {
        if ($scope.expandedNodesMap[this.$id]) {
          return classIfDefined($scope.options.injectClasses.iExpanded);
        } else {
          return classIfDefined($scope.options.injectClasses.iCollapsed);
        }
      };

      $scope.nodeExpanded = function nodeExpanded() {
        return !!$scope.expandedNodesMap[this.$id];
      };

      $scope.selectNodeHead = function selectNodeHead() {
        var transcludedScope = this;
        var expanding = $scope.expandedNodesMap[transcludedScope.$id] === undefined;
        $scope.expandedNodesMap[transcludedScope.$id] = expanding ? transcludedScope.$node : undefined;

        if (expanding) {
          $scope.expandedNodes.push(transcludedScope.$node);
        } else {
          var index;

          for (var _i = 0; _i < $scope.expandedNodes.length && !index; _i++) {
            if ($scope.options.equality($scope.expandedNodes[_i], transcludedScope.$node, $scope)) {
              index = _i;
            }
          }

          if (index !== undefined) {
            $scope.expandedNodes.splice(index, 1);
          }
        }

        if ($scope.onNodeToggle) {
          var parentNode = transcludedScope.$parent.$node === transcludedScope.synteticRoot ? null : transcludedScope.$parent.$node;
          var path = createPath(transcludedScope);
          $scope.onNodeToggle({
            node: transcludedScope.$node,
            $parentNode: parentNode,
            $path: path,
            $index: transcludedScope.$index,
            $first: transcludedScope.$first,
            $middle: transcludedScope.$middle,
            $last: transcludedScope.$last,
            $odd: transcludedScope.$odd,
            $even: transcludedScope.$even,
            expanded: expanding
          });
        }
      };

      $scope.selectNodeLabel = function selectNodeLabel(selectedNode) {
        var transcludedScope = this;

        if (!$scope.options.isLeaf(selectedNode, $scope) && (!$scope.options.dirSelectable || !$scope.options.isSelectable(selectedNode))) {
          // Branch node is not selectable, expand
          this.selectNodeHead();
        } else if ($scope.options.isLeaf(selectedNode, $scope) && !$scope.options.isSelectable(selectedNode)) {
          // Leaf node is not selectable
          return;
        } else {
          var selected = false;

          if ($scope.options.multiSelection) {
            var pos = -1;

            for (var _i2 = 0; _i2 < $scope.selectedNodes.length; _i2++) {
              if ($scope.options.equality(selectedNode, $scope.selectedNodes[_i2], $scope)) {
                pos = _i2;
                break;
              }
            }

            if (pos === -1) {
              $scope.selectedNodes.push(selectedNode);
              selected = true;
            } else {
              $scope.selectedNodes.splice(pos, 1);
            }
          } else {
            if (!$scope.options.equality(selectedNode, $scope.selectedNode, $scope)) {
              $scope.selectedNode = selectedNode;
              selected = true;
            } else {
              if ($scope.options.allowDeselect) {
                $scope.selectedNode = undefined;
              } else {
                $scope.selectedNode = selectedNode;
                selected = true;
              }
            }
          }

          if ($scope.onSelection) {
            var parentNode = transcludedScope.$parent.$node === transcludedScope.synteticRoot ? null : transcludedScope.$parent.$node;
            var path = createPath(transcludedScope);
            $scope.onSelection({
              node: selectedNode,
              selected: selected,
              $parentNode: parentNode,
              $path: path,
              $index: transcludedScope.$index,
              $first: transcludedScope.$first,
              $middle: transcludedScope.$middle,
              $last: transcludedScope.$last,
              $odd: transcludedScope.$odd,
              $even: transcludedScope.$even,
              selectedNode: $scope.selectedNode,
              selectedNodes: $scope.selectedNodes
            });
          }
        }
      };

      $scope.hasCheckedAnyChild = function hasCheckedAnyChild(node) {
        var _a;

        return (_a = node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.some(function (child) {
          return isSelectedNode(child) || hasCheckedAnyChild(child);
        });
      };

      $scope.hasCheckedAllChildren = function hasCheckedAllChildren(node) {
        var _a, _b;

        return (_b = (_a = node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.every(function (child) {
          if (child[$scope.options.nodeChildren]) {
            return isSelectedNode(child) && hasCheckedAllChildren(child);
          }

          return isSelectedNode(child);
        })) !== null && _b !== void 0 ? _b : true;
      };

      function expandSelectedNodesRecursive(node) {
        var _iterator = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;

            if ($scope.hasCheckedAnyChild(child)) {
              $scope.expandedNodes.push(child);
            }

            if (node[$scope.options.nodeChildren]) {
              expandSelectedNodesRecursive(child);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      $scope.expandSelectedNodes = function expandSelectedNodes(node) {
        if ($scope.hasCheckedAnyChild(node)) {
          $scope.expandedNodes.push(node);
        }

        expandSelectedNodesRecursive(node);
      };

      $scope.selectAllChildren = function selectAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator2 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (!isSelectedNode(child)) {
                $scope.selectedNodes.push(child);
              }

              selectAllChildren(child);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };

      $scope.deselectAllChildren = function deselectAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator3 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var child = _step3.value;

              for (var _i3 = 0; _i3 < $scope.selectedNodes.length; _i3++) {
                if ($scope.options.equality($scope.selectedNodes[_i3], child, $scope)) {
                  $scope.selectedNodes.splice(_i3, 1);
                  break;
                }
              }

              deselectAllChildren(child);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      };

      function expandAllChildren(node) {
        if (node[$scope.options.nodeChildren]) {
          var _iterator4 = _createForOfIteratorHelper(node[$scope.options.nodeChildren]),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var child = _step4.value;

              if (!isExpandedNode(child)) {
                $scope.expandedNodes.push(child);
              }

              expandAllChildren(child);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }

      $scope.expandSelfAndAllChildren = function expandSelfAndAllChildren(node) {
        if (!isExpandedNode(node)) {
          this.expandedNodes.push(node);
        }

        expandAllChildren(node);
      };

      function isExpandedNode(node) {
        return $scope.expandedNodes.some(function (child) {
          return $scope.options.equality(node, child, $scope);
        });
      }

      function hasExpandedAllChildren(node) {
        return !(node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren]) || (node === null || node === void 0 ? void 0 : node[$scope.options.nodeChildren].every(function (child) {
          var _a, _b;

          return isExpandedNode(child) && hasExpandedAllChildren(child) || ((_b = (_a = child[$scope.options.nodeChildren]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) === 0;
        }));
      }

      $scope.isExpandedAndAllChildrenToo = function isExpandedAndAllChildrenToo(node) {
        return isExpandedNode(node) && hasExpandedAllChildren(node);
      };

      $scope.expandOrSelectAll = function expandOrSelectAll(node) {
        if ($scope.isExpandedAndAllChildrenToo(node)) {
          if ($scope.options.multiSelection) {
            if ($scope.hasCheckedAllChildren(node)) {
              $scope.deselectAllChildren(node);
            } else {
              $scope.selectAllChildren(node);
            }

            if ($scope.onSelection) {
              $scope.onSelection({
                selectedNode: $scope.selectedNode,
                selectedNodes: $scope.selectedNodes
              });
            }
          }
        } else {
          $scope.expandSelfAndAllChildren(node);
        }
      };

      $scope.isSelectedNode = isSelectedNode;

      $scope.selectedClass = function selectedClass() {
        var isThisNodeSelected = isSelectedNode(this.$node);
        var labelSelectionClass = classIfDefined($scope.options.injectClasses.labelSelected, false);
        var injectSelectionClass = '';

        if (labelSelectionClass && isThisNodeSelected) {
          injectSelectionClass = " ".concat(labelSelectionClass);
        }

        return isThisNodeSelected ? "tree-selected".concat(injectSelectionClass) : '';
      };

      $scope.unselectableClass = function unselectableClass() {
        var isThisNodeUnselectable = !$scope.options.isSelectable(this.$node);
        var labelUnselectableClass = classIfDefined($scope.options.injectClasses.labelUnselectable, false);
        return isThisNodeUnselectable ? "tree-unselectable ".concat(labelUnselectableClass) : '';
      }; // tree template


      $scope.isReverse = function isReverse() {
        return !($scope.reverseOrder === 'false' || $scope.reverseOrder === 'False' || $scope.reverseOrder === '' || $scope.reverseOrder === false);
      };

      $scope.orderByFunc = function orderByFunc() {
        return $scope.orderBy;
      };

      var templateOptions = {
        orderBy: $scope.orderBy ? ' | orderBy:orderByFunc():isReverse()' : '',
        ulClass: classIfDefined($scope.options.injectClasses.ul, true),
        nodeChildren: $scope.options.nodeChildren,
        liClass: classIfDefined($scope.options.injectClasses.li, true),
        iLeafClass: classIfDefined($scope.options.injectClasses.iLeaf, false),
        labelClass: classIfDefined($scope.options.injectClasses.label, false)
      };
      var template;
      var templateUrl = $scope.options.templateUrl || treeConfig.templateUrl;

      if (templateUrl) {
        template = $templateCache.get(templateUrl);
      }

      if (!template) {
        template = '<ul {{options.ulClass}} >' + '<li ng-repeat="$node in $node.{{options.nodeChildren}} | filter:filterExpression:filterComparator {{options.orderBy}}" ng-class="headClass($node)" {{options.liClass}}' + 'set-node-to-data>' + '<i class="tree-branch-head" ng-class="iBranchClass()" ng-click="selectNodeHead($node)"></i>' + '<i class="tree-leaf-head {{options.iLeafClass}}"></i>' + '<div class="tree-label {{options.labelClass}}" ng-class="[selectedClass(), unselectableClass()]" ng-click="selectNodeLabel($node)" tree-transclude></div>' + '<treeitem ng-if="nodeExpanded()"></treeitem>' + '</li>' + '</ul>';
      }

      this.template = $compile($interpolate(template)({
        options: templateOptions
      }));
    }],
    compile: function compile(element, attrs, childTranscludeFn) {
      return function (scope, $element, $attrs, treemodelController) {
        scope.$watch('treeModel', function updateNodeOnRootScope(newValue) {
          if (angular.isArray(newValue)) {
            if (angular.isDefined(scope.$node) && angular.equals(scope.$node[scope.options.nodeChildren], newValue)) {
              return;
            }

            scope.$node = {};
            scope.synteticRoot = scope.$node;
            scope.$node[scope.options.nodeChildren] = newValue;
          } else {
            if (angular.equals(scope.$node, newValue)) {
              return;
            }

            scope.$node = newValue;
          }
        });
        scope.$watchCollection('expandedNodes', function (newValue) {
          var notFoundIds = 0;
          var newExpandedNodesMap = {};
          var $liElements = $element.find('li');
          var existingScopes = []; // find all nodes visible on the tree and the scope $id of the scopes including them

          angular.forEach($liElements, function (liElement) {
            var $liElement = angular.element(liElement);
            var liScope = {
              $id: $liElement.data('scope-id'),
              $node: $liElement.data('$node')
            };
            existingScopes.push(liScope);
          }); // iterate over the newValue, the new expanded nodes, and for each find it in the existingNodesAndScopes
          // if found, add the mapping $id -> node into newExpandedNodesMap
          // if not found, add the mapping num -> node into newExpandedNodesMap

          angular.forEach(newValue, function (newExNode) {
            var found = false;

            for (var i = 0; i < existingScopes.length && !found; i++) {
              var existingScope = existingScopes[i];

              if (scope.options.equality(newExNode, existingScope.$node, scope)) {
                newExpandedNodesMap[existingScope.$id] = existingScope.$node;
                found = true;
              }
            }

            if (!found) {
              newExpandedNodesMap["a".concat(notFoundIds++)] = newExNode;
            }
          });
          scope.expandedNodesMap = newExpandedNodesMap;
        }); // Rendering template for a root node

        treemodelController.template(scope, function (clone) {
          $element.html('').append(clone);
        }); // save the transclude function from compile (which is not bound to a scope as apposed to the one from link)
        // we can fix this to work with the link transclude function with angular 1.2.6. as for angular 1.2.0 we need
        // to keep using the compile function

        scope.$treeTransclude = childTranscludeFn;
      };
    }
  };
}]).directive('setNodeToData', ['$parse', function () {
  return {
    restrict: 'A',
    link: function link($scope, $element) {
      $element.data('$node', $scope.$node);
      $element.data('scope-id', $scope.$id);
    }
  };
}]).directive('treeitem', function () {
  return {
    restrict: 'E',
    require: '^treecontrol',
    link: function link(scope, element, attrs, treemodelController) {
      // Rendering template for the current node
      treemodelController.template(scope, function (clone) {
        element.html('').append(clone);
      });
    }
  };
}).directive('treeTransclude', function () {
  return {
    controller: ['$scope', function ($scope) {
      ensureAllDefaultOptions($scope);
    }],
    link: function link(scope, element) {
      if (!scope.options.isLeaf(scope.$node, scope)) {
        angular.forEach(scope.expandedNodesMap, function (node, id) {
          if (scope.options.equality(node, scope.$node, scope)) {
            scope.expandedNodesMap[scope.$id] = scope.$node;
            scope.expandedNodesMap[id] = undefined;
          }
        });
      }

      if (!scope.options.multiSelection && scope.options.equality(scope.$node, scope.selectedNode, scope)) {
        scope.selectedNode = scope.$node;
      } else if (scope.options.multiSelection) {
        var newSelectedNodes = [];

        for (var i = 0; i < scope.selectedNodes.length; i++) {
          if (scope.options.equality(scope.$node, scope.selectedNodes[i], scope)) {
            newSelectedNodes.push(scope.$node);
          }
        }

        scope.selectedNodes = newSelectedNodes;
      } // create a scope for the transclusion, whos parent is the parent of the tree control


      scope.transcludeScope = scope.parentScopeOfTree.$new();
      scope.transcludeScope.$node = scope.$node;
      scope.transcludeScope.$path = createPath(scope);
      scope.transcludeScope.$parentNode = scope.$parent.$node === scope.synteticRoot ? null : scope.$parent.$node;
      scope.transcludeScope.$index = scope.$index;
      scope.transcludeScope.$first = scope.$first;
      scope.transcludeScope.$middle = scope.$middle;
      scope.transcludeScope.$last = scope.$last;
      scope.transcludeScope.$odd = scope.$odd;
      scope.transcludeScope.$even = scope.$even;
      scope.$on('$destroy', function () {
        scope.transcludeScope.$destroy();
      });
      scope.$treeTransclude(scope.transcludeScope, function (clone) {
        element.empty();
        element.append(clone);
      });
    }
  };
}).name;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);

var angular = __webpack_require__(5);
/**
 * @ngdoc constant
 * @name acceptableRootValueEditorDefaultOptions
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * For description see {@link AcceptableRootValueEditorOptions}
 *
 * ```javascript
 *  {
 *      acceptableValue: null,
 *      multiselect: false,
 *      disabledItems: [],
 *      equalityComparator: angular.equals,
 *      optionsTemplate: '{{$node}}'
 *  }
 * ```
 */


exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_OPTIONS = {
  acceptableValue: null,
  multiselect: false,
  disabledItems: [],
  equalityComparator: angular.equals,
  optionsTemplate: '{{$node}}'
};
/**
 * @ngdoc provider
 * @name acceptableRootValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableRootValueEditorDefaultOptions}
 */

var AcceptableRootValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableRootValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "acceptableRootValueEditorDefaultOptions"];

  _inherits(AcceptableRootValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableRootValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function AcceptableRootValueEditorConfigurationServiceProvider(aliasesServiceProvider, acceptableRootValueEditorDefaultOptions) {
    _classCallCheck(this, AcceptableRootValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, acceptableRootValueEditorDefaultOptions);
  }

  return AcceptableRootValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = AcceptableRootValueEditorConfigurationServiceProvider;
AcceptableRootValueEditorConfigurationServiceProvider.providerName = 'acceptableRootValueEditorConfigurationService';

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name acceptableRootValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * See {@link acceptableRootValueEditorLocalizationsService}
 */


var AcceptableRootValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  AcceptableRootValueEditorLocalizationsServiceProvider.$inject = ["acceptableRootValueEditorDefaultLocalizations"];

  _inherits(AcceptableRootValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(AcceptableRootValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function AcceptableRootValueEditorLocalizationsServiceProvider(acceptableRootValueEditorDefaultLocalizations) {
    _classCallCheck(this, AcceptableRootValueEditorLocalizationsServiceProvider);

    return _super.call(this, acceptableRootValueEditorDefaultLocalizations);
  }

  return AcceptableRootValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = AcceptableRootValueEditorLocalizationsServiceProvider;
AcceptableRootValueEditorLocalizationsServiceProvider.providerName = 'acceptableRootValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name acceptableRootValueEditorDefaultLocalizations
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * ```
 * {
 *      cannotSelect: '(cannot select)',
 *      showAll: 'Show all',
 *      deselectAll: 'Deselect all',
 *      selectAll: 'Select all'
 * }
 * ```
 */

exports.ACCEPTABLE_ROOT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  cannotSelect: '(cannot select)',
  showAll: 'Show all',
  deselectAll: 'Deselect all',
  selectAll: 'Select all'
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni cas... :-(

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptableRootValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var bind_decorator_1 = __webpack_require__(14);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.acceptableRootValueEditor';

var AcceptableRootValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  AcceptableRootValueEditorComponentController.$inject = ["acceptableRootValueEditorConfigurationService", "acceptableRootValueEditorLocalizationsService", "$interpolate", "$templateCache"];

  _inherits(AcceptableRootValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(AcceptableRootValueEditorComponentController);

  /*@ngInject*/
  function AcceptableRootValueEditorComponentController(acceptableRootValueEditorConfigurationService, acceptableRootValueEditorLocalizationsService, $interpolate, $templateCache) {
    _classCallCheck(this, AcceptableRootValueEditorComponentController);

    return _super.call(this, AcceptableRootValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, acceptableRootValueEditorConfigurationService, acceptableRootValueEditorLocalizationsService);
  }

  _createClass(AcceptableRootValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      _get(_getPrototypeOf(AcceptableRootValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.multiselect && !Array.isArray(this.model)) {
        this.model = [];
      }

      this.internalAcceptableValues = [this.options.acceptableValue];
      this.treeOptions = {
        nodeChildren: 'children',
        equality: this.options.equalityComparator,
        multiSelection: this.options.multiselect,
        templateUrl: AcceptableRootValueEditorComponentController.TREECONTROL_TEMPLATE_URL,
        isSelectable: this.isSelectable
      }; // expanded is always first level

      this.expandedNodes = [this.options.acceptableValue];
      var originalRender = this.ngModelController.$render;

      this.ngModelController.$render = function () {
        var _a;

        originalRender();

        if (_this.options.multiselect) {
          _this.selectedNodes = (_a = _this.model) !== null && _a !== void 0 ? _a : [];
        } else {
          _this.selectedNodes = _this.model;
        }
      };
    }
  }, {
    key: "select",
    value: function select(selectedNode, selectedNodes) {
      if (this.options.multiselect) {
        this.model = selectedNodes.slice();
      } else {
        this.model = selectedNode;
      }
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      var _this2 = this;

      return !this.options.disabledItems.some(function (disabledItem) {
        return _this2.options.equalityComparator(disabledItem, node);
      });
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.optionsTemplate || whatChanged.multiselect) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        optionsTemplate: this.options.optionsTemplate,
        multiselect: this.options.multiselect
      };
    }
  }]);

  return AcceptableRootValueEditorComponentController;
}(abstract_template_value_editor_1.default);

AcceptableRootValueEditorComponentController.TEMPLATE_URL = __webpack_require__(117);
AcceptableRootValueEditorComponentController.TREECONTROL_TEMPLATE_URL = __webpack_require__(118);

__decorate([bind_decorator_1.default], AcceptableRootValueEditorComponentController.prototype, "isSelectable", null);

exports.AcceptableRootValueEditorComponentController = AcceptableRootValueEditorComponentController;
/**
 * @ngdoc component
 * @name acceptableRootValueEditor
 * @module angularjs-value-editor.acceptable-root
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for tree selection.
 *
 * It has two aliases:
 *
 *  - `single-acceptable-root`
 *  - `multiple-acceptable-root`
 *
 * Supported options: {@link type:AcceptableRootValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="acceptableRootValueEditorExample" module="acceptableRootValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'multiple-acceptable-root'" ng-model="model" options="{acceptableValue: $ctrl.acceptableValue, optionsTemplate: '{{$node.text}}'}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('acceptableRootValueEditorExample', ['angularjs-value-editor'])
 *          .controller('ctrl', class {
 *              acceptableValue = {
 *                  text: '0',
 *                  children: [
 *                      {
 *                          text: '1'
 *                      },
 *                      {
 *                          text: '2',
 *                          children: [
 *                              {
 *                                  text: '2-1'
 *                              },
 *                              {
 *                                  text: '2-2'
 *                              }
 *                          ]
 *                      }
 *                  ]
 *              };
 *          });
 *     </file>
 * </example>
 */

var AcceptableRootValueEditorComponent = function AcceptableRootValueEditorComponent() {
  _classCallCheck(this, AcceptableRootValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = AcceptableRootValueEditorComponentController;
};

exports.default = AcceptableRootValueEditorComponent;
AcceptableRootValueEditorComponent.componentName = 'acceptableRootValueEditor';

/***/ }),
/* 117 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable-root/acceptable-root.value-editor.tpl.pug';
var html = "<treecontrol class=\"tree-boot\" tree-model=\"$ctrl.internalAcceptableValues\" options=\"$ctrl.treeOptions\" {{multiselect ? 'selected-nodes' : 'selected-node'}}=\"$ctrl.selectedNodes\" on-selection=\"$ctrl.select(selectedNode, selectedNodes)\" expanded-nodes=\"$ctrl.expandedNodes\"><span ng-class=\"{'text-muted': !$ctrl.isSelectable(node)}\">{{optionsTemplate}}</span><span class=\"text-muted\" ng-if=\"!$ctrl.isSelectable(node)\">(\\{\\{$ctrl.localize('cannotSelect')\\}\\})</span></treecontrol><input class=\"validation-helper\" type=\"text\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.editorName\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true }\" acceptable-root-required-validations=\"acceptable-root-required-validations\" error-messages=\"error-messages\" error-messages-custom-class=\"acceptable-root standalone\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/acceptable-root/treecontrol-custom-template.tpl.html';
var html = "<ul {{options.ulClass}} ng-class=\"'tree-list'\">\n    <li ng-repeat=\"$node in $node.{{options.nodeChildren}} | filter:filterExpression:filterComparator {{options.orderBy}}\"\n        ng-class=\"headClass($node)\"\n        {{options.liClass}}\n        set-node-to-data>\n\n        <div class=\"item\" ng-class=\"{'has-children': $node.children.length > 0, 'has-not-children': !$node.children || $node.children.length === 0}\">\n            <div class=\"switcher\" ng-click=\"selectNodeHead($node)\">\n                <i class=\"tree-branch-head glyphicon glyphicon-triangle-right\" ng-class=\"iBranchClass()\"></i>\n            </div>\n\n            <div class=\"content\" ng-class=\"selectedClass()\">\n                <div class=\"tree-label {{options.labelClass}}\" ng-class=\"unselectableClass()\" ng-click=\"selectNodeHead($node)\" tree-transclude></div>\n\n                <div class=\"selector\" ng-click=\"selectNodeLabel($node)\">\n                    <i class=\"tcf tcf-checkmark-empty\" ng-hide=\"selectedClass()\"></i>\n                    <i class=\"tcf tcf-checkmark\" ng-show=\"selectedClass()\"></i>\n                </div>\n            </div>\n\n            {{'{' + '{checkedAllChildren = hasCheckedAllChildren($node);' +\n              'checkedAnyChild = hasCheckedAnyChild($node);' +\n              'expandedAndAllChildrenToo = isExpandedAndAllChildrenToo($node);' +\n              '\\'\\'' +\n              '}' + '}' }}\n\n            <div class=\"multiselector\"\n                 ng-class=\"{'checked': checkedAllChildren, 'semi-checked': checkedAnyChild, 'clickable': options.multiSelection || (!options.multiSelection && !expandedAndAllChildrenToo)}\"\n                 ng-click=\"expandOrSelectAll($node)\"\n                 ng-attr-title=\"{{ '{' + '{!expandedAndAllChildrenToo ? $ctrl.localize(\\'showAll\\') :' +\n                                           'options.multiSelection && expandedAndAllChildrenToo && checkedAllChildren ? $ctrl.localize(\\'deselectAll\\') : ' +\n                                           'options.multiSelection && expandedAndAllChildrenToo && !checkedAllChildren ? $ctrl.localize(\\'selectAll\\') : \\'\\'}' + '}' }}\">\n                <!-- Unselect all children -->\n                <i class=\"tcf tcf-checkmark-double\" ng-show=\"checkedAllChildren\"></i>\n                <!-- Select all children -->\n                <i class=\"tcf tcf-checkmark-double-semi\" ng-show=\"checkedAnyChild && !checkedAllChildren\"></i>\n                <!-- Select all children -->\n                <i class=\"tcf tcf-checkmark-double-empty\" ng-show=\"!checkedAllChildren && !checkedAnyChild\"></i>\n                <!-- Expand all children -->\n                <i class=\"glyphicon glyphicon-arrow-down\" ng-show=\"!expandedAndAllChildrenToo\"></i>\n            </div>\n        </div>\n\n        <treeitem ng-if=\"nodeExpanded()\"></treeitem>\n    </li>\n</ul>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


acceptableRootValueEditorConfig.$inject = ["aliasesServiceProvider", "acceptableRootValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptableRootValueEditorConfig = void 0;
var SINGLE_ACCEPTABLE_ROOT_ALIAS = 'single-acceptable-root';
var MULTIPLE_ACCEPTABLE_ROOT_ALIAS = 'multiple-acceptable-root';
/*@ngInject*/

function acceptableRootValueEditorConfig(aliasesServiceProvider, acceptableRootValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(SINGLE_ACCEPTABLE_ROOT_ALIAS, 'acceptable-root');
  acceptableRootValueEditorConfigurationServiceProvider.forAlias(SINGLE_ACCEPTABLE_ROOT_ALIAS).setConfiguration({
    multiselect: false
  });
  aliasesServiceProvider.addAlias(MULTIPLE_ACCEPTABLE_ROOT_ALIAS, 'acceptable-root');
  acceptableRootValueEditorConfigurationServiceProvider.forAlias(MULTIPLE_ACCEPTABLE_ROOT_ALIAS).setConfiguration({
    multiselect: true
  });
}

exports.acceptableRootValueEditorConfig = acceptableRootValueEditorConfig;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name acceptableRootRequiredValidations
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 */

var AcceptableRootRequiredValidationsDirective = /*#__PURE__*/function () {
  function AcceptableRootRequiredValidationsDirective() {
    _classCallCheck(this, AcceptableRootRequiredValidationsDirective);

    this.restrict = 'A';
    this.require = ['ngModel', '^^kpValueEditor'];
  }

  _createClass(AcceptableRootRequiredValidationsDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          valueEditorController = _ref2[1];

      ngModelController.$validators.required = this.requiredValidationFactory(valueEditorController);
      valueEditorController.addOptionsChangeListener(function () {
        return ngModelController.$validate();
      });
    }
  }, {
    key: "requiredValidationFactory",
    value: function requiredValidationFactory(valueEditorController) {
      return function (modelValue) {
        var _a, _b;

        if (valueEditorController.valueEditorInstance.options.multiselect) {
          return !((_a = valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) || Array.isArray(modelValue) && modelValue.length > 0;
        } else {
          return !((_b = valueEditorController.validations) === null || _b === void 0 ? void 0 : _b.required) || modelValue;
        }
      };
    }
  }]);

  return AcceptableRootRequiredValidationsDirective;
}();

exports.default = AcceptableRootRequiredValidationsDirective;
AcceptableRootRequiredValidationsDirective.directiveName = 'acceptableRootRequiredValidations';

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var search_text_value_editor_localization_provider_1 = __webpack_require__(122);

var search_text_value_editor_component_1 = __webpack_require__(123);
/**
 * @ngdoc module
 * @name angularjs-value-editor.search-text
 * @module angularjs-value-editor.search-text
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.search-text').constant('searchTextValueEditorDefaultLocalizations', search_text_value_editor_localization_provider_1.SEARCH_TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(search_text_value_editor_localization_provider_1.default.providerName, search_text_value_editor_localization_provider_1.default).component(search_text_value_editor_component_1.default.componentName, search_text_value_editor_component_1.default).name();

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCH_TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name searchTextValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.search-text
 *
 * @description
 * See {@link searchTextValueEditorLocalizationsService}
 */


var SearchTextValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchTextValueEditorLocalizationsServiceProvider.$inject = ["searchTextValueEditorDefaultLocalizations"];

  _inherits(SearchTextValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(SearchTextValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function SearchTextValueEditorLocalizationsServiceProvider(searchTextValueEditorDefaultLocalizations) {
    _classCallCheck(this, SearchTextValueEditorLocalizationsServiceProvider);

    return _super.call(this, searchTextValueEditorDefaultLocalizations);
  }

  return SearchTextValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SearchTextValueEditorLocalizationsServiceProvider;
SearchTextValueEditorLocalizationsServiceProvider.providerName = 'searchTextValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name searchTextValueEditorDefaultLocalizations
 * @module angularjs-value-editor.search-text
 *
 * @description
 * ```
 * {
 *      startsWith: 'Starts with',
 *      equals: 'Equals',
 *      patternDescription: ''
 * }
 * ```
 */

exports.SEARCH_TEXT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  startsWith: 'Starts with',
  equals: 'Equals',
  patternDescription: ''
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchTextValueEditorComponentController = exports.SearchTextValueEditorModelExtension = void 0;

var abstract_value_editor_1 = __webpack_require__(3);

var kp_value_editor_component_1 = __webpack_require__(1);
/**
 * @ngdoc type
 * @name SearchTextValueEditorModelExtension
 * @module angularjs-value-editor.search-text
 *
 * @description
 * Enum of possible `extensions`.
 *
 * ```
 * enum SearchTextValueEditorModelExtension {
 *      STARTS_WITH = 'startsWith',
 *      EQUALS = 'equals'
 *  }
 * ```
 */


var SearchTextValueEditorModelExtension;

(function (SearchTextValueEditorModelExtension) {
  SearchTextValueEditorModelExtension["STARTS_WITH"] = "startsWith";
  SearchTextValueEditorModelExtension["EQUALS"] = "equals";
})(SearchTextValueEditorModelExtension = exports.SearchTextValueEditorModelExtension || (exports.SearchTextValueEditorModelExtension = {}));

var SearchTextValueEditorComponentController = /*#__PURE__*/function (_abstract_value_edito) {
  SearchTextValueEditorComponentController.$inject = ["emptyConfigurationService", "searchTextValueEditorLocalizationsService"];

  _inherits(SearchTextValueEditorComponentController, _abstract_value_edito);

  var _super = _createSuper(SearchTextValueEditorComponentController);

  /*@ngInject*/
  function SearchTextValueEditorComponentController(emptyConfigurationService, searchTextValueEditorLocalizationsService) {
    var _this;

    _classCallCheck(this, SearchTextValueEditorComponentController);

    _this = _super.call(this, emptyConfigurationService, searchTextValueEditorLocalizationsService);
    _this.searchTextValueEditorLocalizationsService = searchTextValueEditorLocalizationsService;
    _this.extensions = Object.values(SearchTextValueEditorModelExtension);
    return _this;
  }

  _createClass(SearchTextValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(SearchTextValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.normalizeModel();
    }
    /* istanbul ignore next */

  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "normalizeModel",
    value: function normalizeModel() {
      // @ts-ignore
      if (_typeof(this.model) !== 'object') {
        this.model = {
          extension: undefined,
          row: ''
        };
      }

      if (!this.model.extension) {
        this.model.extension = SearchTextValueEditorModelExtension.STARTS_WITH;
      } // this.model.extension is not a member of SearchTextValueEditorModelExtension enum


      if (!Object.values(SearchTextValueEditorModelExtension).includes(this.model.extension)) {
        this.model.extension = SearchTextValueEditorModelExtension.STARTS_WITH;
      }

      if (typeof this.model.row !== 'string') {
        this.model.row = '';
      }
    }
  }]);

  return SearchTextValueEditorComponentController;
}(abstract_value_editor_1.default);

exports.SearchTextValueEditorComponentController = SearchTextValueEditorComponentController;
/**
 * @ngdoc component
 * @name searchTextValueEditor
 * @module angularjs-value-editor.search-text
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for search-text input with possibility to generation from backend.
 *
 * No options needed.
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="searchTextValueEditorExample" module="searchTextValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main ng-controller="ctrl as $ctrl">
 *              <kp-value-editor type="'search-text'" ng-model="model" options="{requestFunction: $ctrl.requestFunction}"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('searchTextValueEditorExample', ['angularjs-value-editor'])
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

var SearchTextValueEditorComponent = function SearchTextValueEditorComponent() {
  _classCallCheck(this, SearchTextValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.templateUrl = __webpack_require__(124);
  this.controller = SearchTextValueEditorComponentController;
};

exports.default = SearchTextValueEditorComponent;
SearchTextValueEditorComponent.componentName = 'searchTextValueEditor';

/***/ }),
/* 124 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/search-text/search-text.value-editor.tpl.pug';
var html = "<div class=\"input-group\"><div class=\"input-group-addon input-group-select\"><ui-select ng-model=\"$ctrl.model.extension\" ng-model-options=\"{getterSetter: true}\" search-enabled=\"false\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" tagging=\"tagging\"><ui-select-match>{{$ctrl.localize(($ctrl.extensions | filter: $select.selected)[0])}}</ui-select-match><ui-select-choices repeat=\"$extension in $ctrl.extensions track by $extension\">{{$ctrl.localize($extension)}}</ui-select-choices></ui-select></div><input class=\"form-control\" type=\"text\" id=\"{{$ctrl.valueEditorController.editorId}}\" name=\"{{$ctrl.valueEditorController.editorName}}\" placeholder=\"{{$ctrl.valueEditorController.placeholder}}\" ng-model=\"$ctrl.model.row\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" ng-minlength=\"$ctrl.valueEditorController.validations.minlength\" ng-maxlength=\"$ctrl.valueEditorController.validations.maxlength\" ng-pattern=\"$ctrl.valueEditorController.validations.pattern\" pattern-description-tooltip=\"pattern-description-tooltip\" error-messages=\"error-messages\" data-main-input=\"data-main-input\"/></div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(126);

var angularjs_register_1 = __webpack_require__(0);

var searchable_value_editor_component_1 = __webpack_require__(127);

var searchable_value_editor_configuration_provider_1 = __webpack_require__(129);

var searchable_value_editor_localization_provider_1 = __webpack_require__(130);
/**
 * @ngdoc module
 * @name angularjs-value-editor.searchable
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.searchable').constant('searchableValueEditorDefaultOptions', searchable_value_editor_configuration_provider_1.SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS).constant('searchableValueEditorDefaultLocalizations', searchable_value_editor_localization_provider_1.SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(searchable_value_editor_configuration_provider_1.default.providerName, searchable_value_editor_configuration_provider_1.default).provider(searchable_value_editor_localization_provider_1.default.providerName, searchable_value_editor_localization_provider_1.default).component(searchable_value_editor_component_1.default.componentName, searchable_value_editor_component_1.default).name();

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchableValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.searchableValueEditor';

var SearchableValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  SearchableValueEditorComponentController.$inject = ["searchableValueEditorConfigurationService", "searchableValueEditorLocalizationsService", "$interpolate", "$templateCache", "loadingSpinnerTemplateUrl", "$timeout", "$injector"];

  _inherits(SearchableValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(SearchableValueEditorComponentController);

  /*@ngInject*/
  function SearchableValueEditorComponentController(searchableValueEditorConfigurationService, searchableValueEditorLocalizationsService, $interpolate, $templateCache, loadingSpinnerTemplateUrl, $timeout, $injector) {
    var _this;

    _classCallCheck(this, SearchableValueEditorComponentController);

    _this = _super.call(this, SearchableValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, searchableValueEditorConfigurationService, searchableValueEditorLocalizationsService);
    _this.loadingSpinnerTemplateUrl = loadingSpinnerTemplateUrl;
    _this.$timeout = $timeout;
    _this.$injector = $injector;
    _this.searching = false;
    _this.editing = false;
    return _this;
  }

  _createClass(SearchableValueEditorComponentController, [{
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.asyncCall(function () {
                  return _this2.searching = true;
                });
                _context.prev = 1;
                _context.next = 4;
                return this.$injector.invoke(this.options.searchModelFunction, null, {
                  $model: this.model,
                  $additionalParameters: this.options.additionalParameters
                });

              case 4:
                this.model = _context.sent;

              case 5:
                _context.prev = 5;
                this.asyncCall(function () {
                  return _this2.searching = false;
                });
                return _context.finish(5);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1,, 5, 8]]);
      }));

      function search() {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "edit",
    value: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.asyncCall(function () {
                  return _this3.editing = true;
                });
                _context2.prev = 1;
                _context2.next = 4;
                return this.$injector.invoke(this.options.editModelFunction, null, {
                  $model: this.model,
                  $additionalParameters: this.options.additionalParameters
                });

              case 4:
                this.model = _context2.sent;

              case 5:
                _context2.prev = 5;
                this.asyncCall(function () {
                  return _this3.editing = false;
                });
                return _context2.finish(5);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1,, 5, 8]]);
      }));

      function edit() {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {
      if (whatChanged.modelTemplate) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        modelTemplate: this.options.modelTemplate
      };
    }
  }, {
    key: "asyncCall",
    value: function asyncCall(func) {
      this.$timeout(func ? func.bind(this) :
      /* istanbul ignore next */
      function () {
        return void 0;
      }, 0);
    }
  }, {
    key: "hasEditModelFunction",
    get: function get() {
      return typeof this.options.editModelFunction === 'function';
    }
  }]);

  return SearchableValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.SearchableValueEditorComponentController = SearchableValueEditorComponentController;
SearchableValueEditorComponentController.TEMPLATE_URL = __webpack_require__(128);
/**
 * @ngdoc component
 * @name searchableValueEditor
 * @module angularjs-value-editor.searchable
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for searchable input.
 *
 * Supported options: {@link type:SearchableValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="searchableValueEditorExample" module="searchableValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'searchable'" ng-model="model" placeholder="Search some value..."></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('searchableValueEditorExample', ['angularjs-value-editor'])
 *         .config(['searchableValueEditorConfigurationServiceProvider', (searchableValueEditorConfigurationServiceProvider) =>
 *              searchableValueEditorConfigurationServiceProvider.setConfiguration({
 *                  searchModelFunction: ['$timeout', ($timeout) => new Promise((resolve => $timeout(() => resolve('Some result'), 1500)))]
 *              })
 *         ]);
 *     </file>
 * </example>
 */

var SearchableValueEditorComponent = function SearchableValueEditorComponent() {
  _classCallCheck(this, SearchableValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = SearchableValueEditorComponentController;
};

exports.default = SearchableValueEditorComponent;
SearchableValueEditorComponent.componentName = 'searchableValueEditor';

/***/ }),
/* 128 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/searchable/searchable.value-editor.tpl.pug';
var html = "\\{\\{$model = $ctrl.model; ''\\}\\}<span class=\"model-value\" ng-if=\"$ctrl.model\">{{modelTemplate}}</span><span class=\"text-muted\" ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.valueEditorController.placeholder\"></span><button class=\"search-button btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled || $ctrl.searching\" ng-click=\"$ctrl.search()\"><span class=\"glyphicon glyphicon-search\" ng-show=\"!$ctrl.searching\"></span><ng-include class=\"glyphicon searchable-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.searching\"></ng-include><span ng-if=\"$ctrl.model\" ng-bind=\"$ctrl.localize('searchOther')\"></span><span ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.localize('search')\"></span></button><button class=\"edit-button btn btn-default\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled || $ctrl.editing\" ng-show=\"$ctrl.hasEditModelFunction\" ng-click=\"$ctrl.edit()\"><span class=\"glyphicon glyphicon-pencil\" ng-show=\"!$ctrl.editing\"></span><ng-include class=\"glyphicon searchable-loading-svg\" src=\"$ctrl.loadingSpinnerTemplateUrl\" ng-show=\"$ctrl.editing\"></ng-include><span ng-if=\"$ctrl.model\" ng-bind=\"$ctrl.localize('editValue')\"></span><span ng-if=\"!$ctrl.model\" ng-bind=\"$ctrl.localize('createNew')\"></span></button><input class=\"validation-helper\" type=\"text\" id=\"\\{\\{$ctrl.valueEditorController.editorId\\}\\}\" name=\"\\{\\{$ctrl.valueEditorController.editorName\\}\\}\" ng-model=\"$ctrl.model\" ng-model-options=\"{ getterSetter: true}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-required=\"$ctrl.valueEditorController.validations.required\" error-messages=\"error-messages\" error-messages-custom-class=\"searchable standalone\" data-main-input=\"data-main-input\"/>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name searchableValueEditorDefaultOptions
 * @module angularjs-value-editor.searchable
 *
 * @description
 * For description see {@link SearchableValueEditorOptions}
 *
 * ```javascript
 * {
 *      modelTemplate: '{{$model}}',
 *      additionalParameters: undefined,
 *      searchModelFunction: async () => {throw new Error('searchModelFunction is not set')},
 *      editModelFunction: undefined
 * }
 * ```
 */


exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  modelTemplate: '{{$model}}',
  additionalParameters: undefined,
  searchModelFunction: function () {
    var _searchModelFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new Error('searchModelFunction is not set');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function searchModelFunction() {
      return _searchModelFunction.apply(this, arguments);
    }

    return searchModelFunction;
  }(),
  editModelFunction: undefined
};
/**
 * @ngdoc provider
 * @name searchableValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link searchableValueEditorDefaultOptions}
 */

var SearchableValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchableValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "searchableValueEditorDefaultOptions"];

  _inherits(SearchableValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(SearchableValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function SearchableValueEditorConfigurationServiceProvider(aliasesServiceProvider, searchableValueEditorDefaultOptions) {
    _classCallCheck(this, SearchableValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, searchableValueEditorDefaultOptions);
  }

  return SearchableValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = SearchableValueEditorConfigurationServiceProvider;
SearchableValueEditorConfigurationServiceProvider.providerName = 'searchableValueEditorConfigurationService';

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name searchableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.searchable
 *
 * @description
 * See {@link searchableValueEditorLocalizationsService}
 */


var SearchableValueEditorLocalizationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  SearchableValueEditorLocalizationServiceProvider.$inject = ["searchableValueEditorDefaultLocalizations"];

  _inherits(SearchableValueEditorLocalizationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(SearchableValueEditorLocalizationServiceProvider);

  /*@ngInject*/
  function SearchableValueEditorLocalizationServiceProvider(searchableValueEditorDefaultLocalizations) {
    _classCallCheck(this, SearchableValueEditorLocalizationServiceProvider);

    return _super.call(this, searchableValueEditorDefaultLocalizations);
  }

  return SearchableValueEditorLocalizationServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = SearchableValueEditorLocalizationServiceProvider;
SearchableValueEditorLocalizationServiceProvider.providerName = 'searchableValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name searchableValueEditorDefaultLocalizations
 * @module angularjs-value-editor.searchable
 *
 * @description
 * ```
 * {
 *      search: 'Search',
 *      searchOther: 'Search other',
 *      editValue: 'Edit value',
 *      createNew: 'Create new'
 * }
 * ```
 */

exports.SEARCHABLE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  search: 'Search',
  searchOther: 'Search other',
  editValue: 'Edit value',
  createNew: 'Create new'
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var velocity_template_value_editor_config_1 = __webpack_require__(132); // import VelocityTemplateValueEditorComponent from './velocity-template.value-editor.component';

/**
 * @ngdoc module
 * @name angularjs-value-editor.velocity-template
 * @module angularjs-value-editor.velocity-template
 *
 * @description
 * `velocity-template` value editor is only {@link aliasesService alias} for {@link textValueEditor text-value-editor} with default {@link TextValueEditorOptions options}:
 * ```
 *  {
 *      type: 'rich-textarea'
 *  }
 * ```
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.velocity-template').config(velocity_template_value_editor_config_1.default) // .component(VelocityTemplateValueEditorComponent.componentName, VelocityTemplateValueEditorComponent)
.name();

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


velocityTemplateValueEditorConfig.$inject = ["aliasesServiceProvider", "textValueEditorConfigurationServiceProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
var VELOCITY_TEMPLATE_ALIAS = 'velocity-template';
/*@ngInject*/

function velocityTemplateValueEditorConfig(aliasesServiceProvider, textValueEditorConfigurationServiceProvider) {
  aliasesServiceProvider.addAlias(VELOCITY_TEMPLATE_ALIAS, 'text');
  textValueEditorConfigurationServiceProvider.forAlias(VELOCITY_TEMPLATE_ALIAS).setConfiguration({
    type: 'rich-textarea'
  });
}

exports.default = velocityTemplateValueEditorConfig;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(134);

var angularjs_register_1 = __webpack_require__(0);

var angularjs_histogram_slider_1 = __webpack_require__(135);

var range_value_editor_component_1 = __webpack_require__(136);

var range_value_editor_configuration_provider_1 = __webpack_require__(138);

var model_transformer_directive_1 = __webpack_require__(139);
/**
 * @ngdoc module
 * @name angularjs-value-editor.range
 * @module angularjs-value-editor.range
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.range', [angularjs_histogram_slider_1.default]).constant('rangeValueEditorDefaultOptions', range_value_editor_configuration_provider_1.RANGE_VALUE_EDITOR_DEFAULT_OPTIONS).provider(range_value_editor_configuration_provider_1.default.providerName, range_value_editor_configuration_provider_1.default).directive(model_transformer_directive_1.default.directiveName, model_transformer_directive_1.default).component(range_value_editor_component_1.default.componentName, range_value_editor_component_1.default).name();

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__135__;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// neni moc co testovat... viz. testy

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var _internalModel;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var TEMPLATE_NAME_PREFIX = 'value-editor.rangeValueEditor';

var RangeValueEditorComponentController = /*#__PURE__*/function (_abstract_template_va) {
  RangeValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "rangeValueEditorConfigurationService"];

  _inherits(RangeValueEditorComponentController, _abstract_template_va);

  var _super = _createSuper(RangeValueEditorComponentController);

  /*@ngInject*/
  function RangeValueEditorComponentController($interpolate, $templateCache, rangeValueEditorConfigurationService) {
    var _this;

    _classCallCheck(this, RangeValueEditorComponentController);

    _this = _super.call(this, RangeValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, rangeValueEditorConfigurationService);

    _internalModel.set(_assertThisInitialized(_this), void 0);

    return _this;
  }

  _createClass(RangeValueEditorComponentController, [{
    key: "$doCheck",
    value: function $doCheck() {
      var _a, _b, _c, _d;

      if (((_a = __classPrivateFieldGet(this, _internalModel)) === null || _a === void 0 ? void 0 : _a.from) !== ((_b = this.model) === null || _b === void 0 ? void 0 : _b.from) || ((_c = __classPrivateFieldGet(this, _internalModel)) === null || _c === void 0 ? void 0 : _c.to) !== ((_d = this.model) === null || _d === void 0 ? void 0 : _d.to)) {
        __classPrivateFieldSet(this, _internalModel, Object.assign({}, this.model));
      }
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, whatChanged) {//
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return {
        currentValueTemplate: this.options.currentValueTemplate
      };
    }
  }, {
    key: "internalModel",
    get: function get() {
      return __classPrivateFieldGet(this, _internalModel);
    },
    set: function set(value) {
      this.model = value;
    }
  }]);

  return RangeValueEditorComponentController;
}(abstract_template_value_editor_1.default);

exports.RangeValueEditorComponentController = RangeValueEditorComponentController;
_internalModel = new WeakMap();
RangeValueEditorComponentController.TEMPLATE_URL = __webpack_require__(137);
/**
 * @ngdoc component
 * @name rangeValueEditor
 * @module angularjs-value-editor.range
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for range input.
 *
 * Supported options: {@link type:RangeValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="rangeValueEditorExample" module="rangeValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'range'" ng-model="model" options="{withConfirmation: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('rangeValueEditorExample', ['angularjs-value-editor'])
 *     </file>
 * </example>
 */

var RangeValueEditorComponent = function RangeValueEditorComponent() {
  _classCallCheck(this, RangeValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = RangeValueEditorComponentController;
};

exports.default = RangeValueEditorComponent;
RangeValueEditorComponent.componentName = 'rangeValueEditor';

/***/ }),
/* 137 */
/***/ (function(module, exports) {

var path = '/value-editor/editors/range/range.value-editor.tpl.pug';
var html = "<div class=\"curent-value\">{{currentValueTemplate}}</div><td-slider ng-model=\"$ctrl.internalModel\" ng-model-options=\"{ getterSetter: true}\" slider-model-transformer=\"$ctrl.options.extremesAsNull\" min=\"$ctrl.options.min\" max=\"$ctrl.options.max\" snap=\"$ctrl.options.snap\" snap-points=\"$ctrl.options.snapPoints\" pit-points=\"$ctrl.options.pitPoints\" on-values-updated=\"$from = $values[0]; $to = $values[1]\" data-main-input=\"data-main-input\"></td-slider>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name rangeValueEditorDefaultOptions
 * @module angularjs-value-editor.range
 *
 * @description
 * For description see {@link RangeValueEditorOptions}
 *
 * ```javascript
 * {
 *     extremesAsNull: true,
 *     min: 0,
 *     max: 0,
 *     snap: false,
 *     snapPoints: undefined,
 *     pitPoints: undefined,
 *     currentValueTemplate: '{{$from}} - {{$to}}'
 * }
 * ```
 */


exports.RANGE_VALUE_EDITOR_DEFAULT_OPTIONS = {
  extremesAsNull: true,
  min: 0,
  max: 0,
  snap: false,
  snapPoints: undefined,
  pitPoints: undefined,
  currentValueTemplate: '{{$from}} - {{$to}}'
};
/**
 * @ngdoc provider
 * @name rangeValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link rangeValueEditorDefaultOptions}
 */

var RangeValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  RangeValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "rangeValueEditorDefaultOptions"];

  _inherits(RangeValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(RangeValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function RangeValueEditorConfigurationServiceProvider(aliasesServiceProvider, rangeValueEditorDefaultOptions) {
    _classCallCheck(this, RangeValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, rangeValueEditorDefaultOptions);
  }

  return RangeValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = RangeValueEditorConfigurationServiceProvider;
RangeValueEditorConfigurationServiceProvider.providerName = 'rangeValueEditorConfigurationService';

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* istanbul ignore file */
// uncomment after write some test for component

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name sliderModelTransformer
 * @module angularjs-value-editor.range
 *
 * @restrict A
 * @element td-slider
 *
 * @requires ngModel
 * @requires tdSlider
 *
 * @param {boolean} sliderModelTransformer If true, transform selected extremes as `null`.
 *
 * @description
 * Directive transforms ngModel from object `{from: XXX, to: YYY}` to array `[XXX, YYY]`
 * If selected values are minimum and maximum values from slider and `sliderModelTransformer` param is `true`, then model will be transformed to `null`.
 */

var SliderModelTransformerDirective = /*#__PURE__*/function () {
  SliderModelTransformerDirective.$inject = ["$parse"];

  /*@ngInject*/
  function SliderModelTransformerDirective($parse) {
    _classCallCheck(this, SliderModelTransformerDirective);

    this.$parse = $parse;
    this.restrict = 'A';
    this.require = ['ngModel', 'tdSlider'];
  }

  _createClass(SliderModelTransformerDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          sliderController = _ref2[1];

      var extremesAsNull = this.$parse($attrs[SliderModelTransformerDirective.directiveName])($scope);
      ngModelController.$formatters.push(this.formatter(sliderController, extremesAsNull));
      ngModelController.$parsers.push(this.parser(sliderController, extremesAsNull));
    }
  }, {
    key: "formatter",
    value: function formatter(sliderComponentController, extremesAsNull) {
      return function (model) {
        var from = model === null || model === void 0 ? void 0 : model.from;
        var to = model === null || model === void 0 ? void 0 : model.to;

        if (typeof (model === null || model === void 0 ? void 0 : model.from) === 'undefined' || model.from === null && extremesAsNull) {
          from = sliderComponentController.min;
        }

        if (typeof (model === null || model === void 0 ? void 0 : model.to) === 'undefined' || model.to === null && extremesAsNull) {
          to = sliderComponentController.max;
        }

        var result = [from, to];
        return result;
      };
    }
  }, {
    key: "parser",
    value: function parser(sliderComponentController, extremesAsNull) {
      return function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            minimum = _ref4[0],
            maximum = _ref4[1];

        var from = minimum;
        var to = maximum;

        if (extremesAsNull && from === sliderComponentController.min) {
          from = null;
        }

        if (extremesAsNull && to === sliderComponentController.max) {
          to = null;
        }

        return {
          from: from,
          to: to
        };
      };
    }
  }]);

  return SliderModelTransformerDirective;
}();

exports.default = SliderModelTransformerDirective;
SliderModelTransformerDirective.directiveName = 'sliderModelTransformer';

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(141);

var angularjs_register_1 = __webpack_require__(0);

var list_value_editor_component_1 = __webpack_require__(142);

var list_value_editor_configuration_provider_1 = __webpack_require__(144);

var list_value_editor_localization_provider_1 = __webpack_require__(145);

var list_required_validation_component_1 = __webpack_require__(146);
/**
 * @ngdoc module
 * @name angularjs-value-editor.list
 * @module angularjs-value-editor.list
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.list').constant('listValueEditorDefaultOptions', list_value_editor_configuration_provider_1.LIST_VALUE_EDITOR_DEFAULT_OPTIONS).constant('listValueEditorDefaultLocalizations', list_value_editor_localization_provider_1.LIST_VALUE_EDITOR_DEFAULT_LOCALIZATIONS).provider(list_value_editor_configuration_provider_1.default.providerName, list_value_editor_configuration_provider_1.default).provider(list_value_editor_localization_provider_1.default.providerName, list_value_editor_localization_provider_1.default).component(list_required_validation_component_1.default.componentName, list_required_validation_component_1.default).component(list_value_editor_component_1.default.componentName, list_value_editor_component_1.default).name();

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var angular = __webpack_require__(5);

var abstract_template_value_editor_1 = __webpack_require__(6);

var abstract_meta_value_editor_component_1 = __webpack_require__(16);

var TEMPLATE_NAME_PREFIX = 'value-editor.listValueEditor';

var ListValueEditorComponentController = /*#__PURE__*/function (_abstract_meta_value_) {
  ListValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "listValueEditorConfigurationService", "listValueEditorLocalizationsService", "$timeout"];

  _inherits(ListValueEditorComponentController, _abstract_meta_value_);

  var _super = _createSuper(ListValueEditorComponentController);

  /*@ngInject*/
  function ListValueEditorComponentController($interpolate, $templateCache, listValueEditorConfigurationService, listValueEditorLocalizationsService, $timeout) {
    var _this;

    _classCallCheck(this, ListValueEditorComponentController);

    _this = _super.call(this, ListValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, listValueEditorConfigurationService, listValueEditorLocalizationsService);
    _this.$timeout = $timeout;
    return _this;
  }

  _createClass(ListValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this2 = this;

      _get(_getPrototypeOf(ListValueEditorComponentController.prototype), "$onInit", this).call(this);

      this.$timeout(function () {
        var _a, _b;

        _this2.normalizeModelIfNeeded();

        if (((_a = _this2.valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) && ((_b = _this2.model) === null || _b === void 0 ? void 0 : _b.length) < 1) {
          _this2.model.push(_this2.options.newItemPrototype);
        }
      });
    }
  }, {
    key: "addItem",
    value: function addItem() {
      this.normalizeModelIfNeeded();
      this.model.push(angular.fromJson(angular.toJson(this.options.newItemPrototype)));
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      if (this.canRemoveItems()) {
        this.model.splice(index, 1);
      }
    }
  }, {
    key: "canRemoveItems",
    value: function canRemoveItems() {
      var _a, _b;

      return Array.isArray(this.model) && (this.model.length > 0 && !((_a = this.valueEditorController.validations) === null || _a === void 0 ? void 0 : _a.required) || this.model.length > 1 && ((_b = this.valueEditorController.validations) === null || _b === void 0 ? void 0 : _b.required));
    }
  }, {
    key: "adjustForceShowErrors",
    value: function adjustForceShowErrors(subEditorOptions) {
      if (subEditorOptions) {
        subEditorOptions.forceShowErrors = subEditorOptions.forceShowErrors || this.options.forceShowErrors;
      }

      return subEditorOptions;
    }
  }, {
    key: "normalizeModelIfNeeded",
    value: function normalizeModelIfNeeded() {
      if (!Array.isArray(this.model)) {
        this.model = [];
      }
    }
  }]);

  return ListValueEditorComponentController;
}(abstract_meta_value_editor_component_1.AbstractMetaValueEditorComponentController);

exports.ListValueEditorComponentController = ListValueEditorComponentController;
ListValueEditorComponentController.TEMPLATE_URL = __webpack_require__(143);
/**
 * @ngdoc component
 * @name listValueEditor
 * @module angularjs-value-editor.list
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for list input.
 *
 * Supported options: {@link type:ListValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="listValueEditorExample" module="listValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'list'" ng-model="model" options="{withConfirmation: true}"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('listValueEditorExample', ['angularjs-value-editor'])
 *     </file>
 * </example>
 */

var ListValueEditorComponent = function ListValueEditorComponent() {
  _classCallCheck(this, ListValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName)
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = ListValueEditorComponentController;
};

exports.default = ListValueEditorComponent;
ListValueEditorComponent.componentName = 'listValueEditor';

/***/ }),
/* 143 */
/***/ (function(module, exports) {

var path = '/value-editor/meta-editors/list/list.value-editor.tpl.pug';
var html = "<div class=\"panel panel-default\" id=\"{{$ctrl.valueEditorController.editorId}}\" ng-form=\"{{name}}\"><list-required-validation name=\"{{name}}_required_validation_helper\" ng-model=\"$ctrl.model.length\" ng-model-options=\"{ getterSetter: true }\" enabled=\"$ctrl.valueEditorController.validations.required\"></list-required-validation><div class=\"panel-body\"><div class=\"list-item\" ng-repeat-start=\"itemModel in $ctrl.model track by $index\"><div class=\"list-item-content\" ng-class=\"{'has-error': $ctrl.showValidationError('{{name}}_' + $index), 'has-not-error': !$ctrl.showValidationError('{{name}}_' + $index)}\"><kp-value-editor editor-id=\"$index\" editor-name=\"'{{name}}_' + $index\" placeholder=\"$ctrl.valueEditorController.placeholder\" ng-model=\"$ctrl.model[$index]\" ng-model-options=\"{ getterSetter: true }\" type=\"$ctrl.options.subEditorType\" is-disabled=\"$ctrl.valueEditorController.isDisabled\" is-visible=\"$ctrl.trueIfUndefined($ctrl.valueEditorController.isVisible)\" validations=\"$ctrl.options.subEditorValidations\" options=\"$ctrl.adjustForceShowErrors($ctrl.options.subEditorOptions)\"></kp-value-editor></div><div class=\"list-item-delete-button\"><button class=\"btn btn-default remove\" type=\"button\" ng-attr-title=\"\\{\\{$ctrl.localize('remove')\\}\\}\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-show=\"$ctrl.canRemoveItems()\" ng-click=\"$ctrl.removeItem($index)\"><i class=\"glyphicon glyphicon-trash\"></i></button></div></div><hr ng-repeat-end=\"ng-repeat-end\" ng-if=\"!$last\"/></div><div class=\"panel-footer\"><button class=\"btn btn-default btn-block btn-xs add\" type=\"button\" ng-disabled=\"$ctrl.valueEditorController.isDisabled\" ng-click=\"$ctrl.addItem()\"><i class=\"glyphicon glyphicon-plus\"></i><span ng-bind=\"$ctrl.localize('add')\"></span></button></div></div>\\{\\{$ctrl.form = {{name}}; ''\\}\\}";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIST_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name listValueEditorDefaultOptions
 * @module angularjs-value-editor.list
 *
 * @description
 * For description see {@link ListValueEditorOptions}
 *
 * ```javascript
 * {
 *      subEditorType: 'text',
 *      newItemPrototype: '',
 *      subEditorOptions: undefined,
 *      subEditorValidations: undefined
 * }
 * ```
 */


exports.LIST_VALUE_EDITOR_DEFAULT_OPTIONS = {
  subEditorType: 'text',
  newItemPrototype: '',
  subEditorOptions: undefined,
  subEditorValidations: undefined
};
/**
 * @ngdoc provider
 * @name listValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.list
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link listValueEditorDefaultOptions}
 */

var ListValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  ListValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "listValueEditorDefaultOptions"];

  _inherits(ListValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(ListValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function ListValueEditorConfigurationServiceProvider(aliasesServiceProvider, listValueEditorDefaultOptions) {
    _classCallCheck(this, ListValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, listValueEditorDefaultOptions);
  }

  return ListValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = ListValueEditorConfigurationServiceProvider;
ListValueEditorConfigurationServiceProvider.providerName = 'listValueEditorConfigurationService';

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIST_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name listValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.list
 *
 * @description
 * See {@link listValueEditorLocalizationsService}
 */


var ListValueEditorLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  ListValueEditorLocalizationsServiceProvider.$inject = ["listValueEditorDefaultLocalizations"];

  _inherits(ListValueEditorLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(ListValueEditorLocalizationsServiceProvider);

  /*@ngInject*/
  function ListValueEditorLocalizationsServiceProvider(listValueEditorDefaultLocalizations) {
    _classCallCheck(this, ListValueEditorLocalizationsServiceProvider);

    return _super.call(this, listValueEditorDefaultLocalizations);
  }

  return ListValueEditorLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = ListValueEditorLocalizationsServiceProvider;
ListValueEditorLocalizationsServiceProvider.providerName = 'listValueEditorLocalizationsService';
/**
 * @ngdoc constant
 * @name listValueEditorDefaultLocalizations
 * @module angularjs-value-editor.list
 *
 * @description
 * ```
 * {
 *     add: 'Add',
 *     remove: 'Remove'
 * }
 * ```
 */

exports.LIST_VALUE_EDITOR_DEFAULT_LOCALIZATIONS = Object.freeze({
  add: 'Add',
  remove: 'Remove'
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRequiredValidationComponentController = void 0;

var ListRequiredValidationComponentController = /*#__PURE__*/function () {
  function ListRequiredValidationComponentController() {
    _classCallCheck(this, ListRequiredValidationComponentController);
  }

  _createClass(ListRequiredValidationComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      this.ngModelController.$validators['list-required'] = function (modelValue) {
        return !_this.enabled || modelValue > 0;
      };
    }
  }]);

  return ListRequiredValidationComponentController;
}();

exports.ListRequiredValidationComponentController = ListRequiredValidationComponentController;
/**
 * @ngdoc component
 * @name listRequiredValidation
 * @module angularjs-value-editor.list
 *
 * @param {boolean} enabled Is validation enabled?
 *
 * @description
 * Helper for required validation for {@link component:ListValueEditorComponent list value editor}
 */

var ListRequiredValidationComponent = function ListRequiredValidationComponent() {
  _classCallCheck(this, ListRequiredValidationComponent);

  this.require = {
    ngModelController: 'ngModel'
  };
  this.bindings = {
    enabled: '<'
  };
  this.controller = ListRequiredValidationComponentController;
};

exports.default = ListRequiredValidationComponent;
ListRequiredValidationComponent.componentName = 'listRequiredValidation';

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(148);

var angularjs_register_1 = __webpack_require__(0);

var object_value_editor_component_1 = __webpack_require__(149);

var object_value_editor_configuration_provider_1 = __webpack_require__(151);
/**
 * @ngdoc module
 * @name angularjs-value-editor.object
 * @module angularjs-value-editor.object
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.object').constant('objectValueEditorDefaultOptions', object_value_editor_configuration_provider_1.OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS).provider(object_value_editor_configuration_provider_1.default.providerName, object_value_editor_configuration_provider_1.default).component(object_value_editor_component_1.default.componentName, object_value_editor_component_1.default).name();

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectValueEditorComponentController = void 0;

var kp_value_editor_component_1 = __webpack_require__(1);

var abstract_template_value_editor_1 = __webpack_require__(6);

var abstract_meta_value_editor_component_1 = __webpack_require__(16);

var uuid_generator_1 = __webpack_require__(7);

var TEMPLATE_NAME_PREFIX = 'value-editor.objectValueEditor';

var ObjectValueEditorComponentController = /*#__PURE__*/function (_abstract_meta_value_) {
  ObjectValueEditorComponentController.$inject = ["$interpolate", "$templateCache", "objectValueEditorConfigurationService"];

  _inherits(ObjectValueEditorComponentController, _abstract_meta_value_);

  var _super = _createSuper(ObjectValueEditorComponentController);

  /*@ngInject*/
  function ObjectValueEditorComponentController($interpolate, $templateCache, objectValueEditorConfigurationService) {
    _classCallCheck(this, ObjectValueEditorComponentController);

    return _super.call(this, ObjectValueEditorComponentController.TEMPLATE_URL, TEMPLATE_NAME_PREFIX, $interpolate, $templateCache, objectValueEditorConfigurationService);
  }

  _createClass(ObjectValueEditorComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(ObjectValueEditorComponentController.prototype), "$onInit", this).call(this);

      if (this.options.__withoutNgForm) {
        if (this.formController) {
          this.form = this.formController;
        } else {
          // @ts-ignore Init form with anything
          this.form = {};
        }
      }
    }
  }, {
    key: "transformFieldEditor",
    value: function transformFieldEditor(fieldEditor, fieldName) {
      if (typeof this.options.attributesTransformation === 'function') {
        fieldEditor = this.options.attributesTransformation(fieldEditor);
      }

      if (!fieldEditor.editorId) {
        fieldEditor.editorId = uuid_generator_1.generateUuid();
      }

      if (!fieldEditor.editorName && fieldName) {
        fieldEditor.editorName = fieldName;
      }

      if (this.options.forceShowErrors) {
        if (!fieldEditor.options) {
          fieldEditor.options = {};
        }

        fieldEditor.options.forceShowErrors = true;
      }

      return fieldEditor;
    }
  }, {
    key: "onOptionsChange",
    value: function onOptionsChange(newOptions, oldOptions, optionsChangeDetection) {
      _get(_getPrototypeOf(ObjectValueEditorComponentController.prototype), "onOptionsChange", this).call(this, newOptions, oldOptions, optionsChangeDetection);

      if (optionsChangeDetection.labelsWidth) {
        this.updateTemplate();
      }
    }
  }, {
    key: "getTemplateModel",
    value: function getTemplateModel() {
      return Object.assign({
        labelsWidth: this.options.labelsWidth,
        inputsWidth: 12 - this.options.labelsWidth,
        withoutNgForm: this.options.__withoutNgForm
      }, _get(_getPrototypeOf(ObjectValueEditorComponentController.prototype), "getTemplateModel", this).call(this));
    }
  }]);

  return ObjectValueEditorComponentController;
}(abstract_meta_value_editor_component_1.AbstractMetaValueEditorComponentController);

exports.ObjectValueEditorComponentController = ObjectValueEditorComponentController;
ObjectValueEditorComponentController.TEMPLATE_URL = __webpack_require__(150);
/**
 * @ngdoc component
 * @name objectValueEditor
 * @module angularjs-value-editor.object
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for object input.
 *
 * Supported options: {@link type:ObjectValueEditorOptions}
 *
 * Supported validations: {@link type:ValueEditorValidations}
 *
 * @example
 * <example name="objectValueEditorExample" module="objectValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'object'" ng-model="model"></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('objectValueEditorExample', ['angularjs-value-editor'])
 *          .config(['objectValueEditorConfigurationServiceProvider', function(objectValueEditorConfigurationServiceProvider) {
 *              objectValueEditorConfigurationServiceProvider.setConfiguration({
 *                  fields: [
 *                      {
 *                          label: 'Text',
 *                          fieldName: 'text',
 *                          editor: {
 *                              type: 'text',
 *                              editorName: 'texttext'
 *                          }
 *                      },
 *                      {
 *                          label: 'Number',
 *                          fieldName: 'number',
 *                          editor: {
 *                              type: 'number',
 *                          }
 *                      },
 *                      {
 *                          label: 'Data',
 *                          fieldName: 'dates',
 *                          editor: {
 *                              type: 'list',
 *                              editorName: 'dates',
 *                              options: {
 *                                  subEditorType: 'date',
 *                                  newItemPrototype: ''
 *                              }
 *                          }
 *                      }
 *                  ]
 *              });
 *          }]);
 *     </file>
 * </example>
 */

var ObjectValueEditorComponent = function ObjectValueEditorComponent() {
  _classCallCheck(this, ObjectValueEditorComponent);

  this.require = {
    ngModelController: 'ngModel',
    valueEditorController: "^".concat(kp_value_editor_component_1.default.componentName),
    formController: '^^?form'
  };
  this.template = abstract_template_value_editor_1.default.COMPONENT_TEMPLATE;
  this.controller = ObjectValueEditorComponentController;
};

exports.default = ObjectValueEditorComponent;
ObjectValueEditorComponent.componentName = 'objectValueEditor';

/***/ }),
/* 150 */
/***/ (function(module, exports) {

var path = '/value-editor/meta-editors/object/object.value-editor.tpl.pug';
var html = "<fieldset class=\"form-horizontal\" {{withoutNgForm ? '' : 'ng-form'}}=\"{{withoutNgForm ? '' : name}}\"><div class=\"form-group \\{\\{transformedFieldEditor.editorName\\}\\}\" ng-class=\"{'has-error': $ctrl.showValidationError(transformedFieldEditor.editorName), 'has-not-error': !$ctrl.showValidationError(transformedFieldEditor.editorName)}\" ng-repeat=\"field in $ctrl.options.fields\" ng-init=\"showDebugInfo = true; transformedFieldEditor = $ctrl.transformFieldEditor(field.editor, field.fieldName)\" ng-show=\"$ctrl.trueIfUndefined(transformedFieldEditor.isVisible)\"><label class=\"control-label col-sm-{{labelsWidth}}\" ng-class=\"{'required': transformedFieldEditor.validations.required}\" ng-if=\"field.label\" ng-attr-for=\"\\{\\{transformedFieldEditor.editorId\\}\\}\" ng-bind=\"field.label\"></label><div ng-class=\"field.label ? 'col-sm-{{inputsWidth}}' : 'col-sm-12'\"><kp-value-editor editor-id=\"transformedFieldEditor.editorId\" editor-name=\"transformedFieldEditor.editorName\" placeholder=\"transformedFieldEditor.placeholder\" ng-model=\"$ctrl.model[field.fieldName]\" ng-model-options=\"{ getterSetter: true }\" type=\"transformedFieldEditor.type\" is-disabled=\"transformedFieldEditor.disabled || $ctrl.valueEditorController.isDisabled\" is-visible=\"$ctrl.trueIfUndefined($ctrl.valueEditorController.isVisible)\" validations=\"transformedFieldEditor.validations\" options=\"transformedFieldEditor.options\" localizations=\"transformedFieldEditor.localizations\"></kp-value-editor><button class=\"btn btn-default debug-info\" type=\"button\" title=\"Show / hide debug info\" ng-click=\"showDebugInfo = !showDebugInfo\" ng-show=\"$ctrl.valueEditorController.configuration.debugMode\"><i class=\"glyphicon glyphicon-cog\"></i></button><pre ng-bind=\"$ctrl.form[transformedFieldEditor.editorName] | json\" ng-if=\"$ctrl.valueEditorController.configuration.debugMode\" uib-collapse=\"showDebugInfo\"></pre></div></div></fieldset>{{withoutNgForm ? '' : '{' + '{$ctrl.form = ' + name + '; \\'\\'}' + '}'}}";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS = void 0;

var abstract_value_editor_configuration_provider_1 = __webpack_require__(2);
/**
 * @ngdoc constant
 * @name objectValueEditorDefaultOptions
 * @module angularjs-value-editor.object
 *
 * @description
 * For description see {@link ObjectValueEditorOptions}
 *
 * ```javascript
 * {
 *      fields: [],
 *      attributesTransformation: undefined,
 *      labelsWidth: 2
 * }
 * ```
 */


exports.OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS = {
  fields: [],
  attributesTransformation: undefined,
  labelsWidth: 2,
  __withoutNgForm: false
};
/**
 * @ngdoc provider
 * @name objectValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor.object
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link objectValueEditorDefaultOptions}
 */

var ObjectValueEditorConfigurationServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  ObjectValueEditorConfigurationServiceProvider.$inject = ["aliasesServiceProvider", "objectValueEditorDefaultOptions"];

  _inherits(ObjectValueEditorConfigurationServiceProvider, _abstract_value_edito);

  var _super = _createSuper(ObjectValueEditorConfigurationServiceProvider);

  /*@ngInject*/
  function ObjectValueEditorConfigurationServiceProvider(aliasesServiceProvider, objectValueEditorDefaultOptions) {
    _classCallCheck(this, ObjectValueEditorConfigurationServiceProvider);

    return _super.call(this, aliasesServiceProvider, objectValueEditorDefaultOptions);
  }

  return ObjectValueEditorConfigurationServiceProvider;
}(abstract_value_editor_configuration_provider_1.default);

exports.default = ObjectValueEditorConfigurationServiceProvider;
ObjectValueEditorConfigurationServiceProvider.providerName = 'objectValueEditorConfigurationService';

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @ngdoc provider
 * @name kpValueEditorConfigurationServiceProvider
 * @module angularjs-value-editor
 *
 * @property {boolean} debugMode Enable / disable debug mode. It show / hide information section below value editor.
 * @property {boolean} preciseWatchForOptionsChanges It enables deep watching for changes in value editors options.
 * If watching for changes is not needed, it's recommended set it to `false` due to high system requirements.
 * (It makes deep equal of options in each digest cycle).
 *
 * @description
 * * Default options:
 * ```
 *  {
 *      debugMode: false,
 *      preciseWatchForOptionsChanges: false
 *  }
 * ```
 *
 * Provider for {@link kpValueEditorConfigurationService}
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _debugMode, _preciseWatchForOptionsChanges;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var KpValueEditorConfigurationServiceProvider = /*#__PURE__*/function () {
  function KpValueEditorConfigurationServiceProvider() {
    _classCallCheck(this, KpValueEditorConfigurationServiceProvider);

    _debugMode.set(this, false);

    _preciseWatchForOptionsChanges.set(this, false);
  }

  _createClass(KpValueEditorConfigurationServiceProvider, [{
    key: "setDebugMode",
    value: function setDebugMode(isEnabled) {
      __classPrivateFieldSet(this, _debugMode, isEnabled);
    }
  }, {
    key: "setPreciseWatchForOptionsChanges",
    value: function setPreciseWatchForOptionsChanges(isEnabled) {
      __classPrivateFieldSet(this, _preciseWatchForOptionsChanges, isEnabled);
    }
  }, {
    key: "$get",
    value: function $get() {
      var _this = this;

      return Object.defineProperties({}, {
        debugMode: {
          get: function get() {
            return __classPrivateFieldGet(_this, _debugMode);
          }
        },
        preciseWatchForOptionsChanges: {
          get: function get() {
            return __classPrivateFieldGet(_this, _preciseWatchForOptionsChanges);
          }
        }
      });
    }
  }]);

  return KpValueEditorConfigurationServiceProvider;
}();

exports.default = KpValueEditorConfigurationServiceProvider;
_debugMode = new WeakMap(), _preciseWatchForOptionsChanges = new WeakMap();
KpValueEditorConfigurationServiceProvider.providerName = 'kpValueEditorConfigurationService';

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KpUniversalFormComponentController = void 0;

var ng_model_connector_1 = __webpack_require__(9);

var uuid_generator_1 = __webpack_require__(7);

var TEMPLATE_PREFIX = 'valueEditor.universal-form';

var KpUniversalFormComponentController = /*#__PURE__*/function (_ng_model_connector_) {
  KpUniversalFormComponentController.$inject = ["$interpolate", "$templateCache", "$timeout", "$log"];

  _inherits(KpUniversalFormComponentController, _ng_model_connector_);

  var _super = _createSuper(KpUniversalFormComponentController);

  /*@ngInject*/
  function KpUniversalFormComponentController($interpolate, $templateCache, $timeout, $log) {
    var _this;

    _classCallCheck(this, KpUniversalFormComponentController);

    _this = _super.call(this);
    _this.$interpolate = $interpolate;
    _this.$templateCache = $templateCache;
    _this.$timeout = $timeout;
    _this.$log = $log;
    _this.uuid = uuid_generator_1.generateUuid();
    return _this;
  }

  _createClass(KpUniversalFormComponentController, [{
    key: "$onInit",
    value: function $onInit() {
      _get(_getPrototypeOf(KpUniversalFormComponentController.prototype), "$onInit", this).call(this);

      this.validateName();
      this.updateTemplate();
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      var _this2 = this;

      if (this.formController) {
        this.$timeout(function () {
          return _this2.formController({
            $formController: _this2.internalFormController
          });
        });
      }
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate() {
      this.$templateCache.remove(this.templateUrl);
      var newTemplateName = "".concat(TEMPLATE_PREFIX, "_").concat(this.uuid, "_").concat(new Date().valueOf());
      var template = this.$templateCache.get(KpUniversalFormComponentController.TEMPLATE_URL);
      var interpolated = this.$interpolate(template)({
        name: this.name
      });
      this.$templateCache.put(newTemplateName, interpolated);
      this.templateUrl = newTemplateName;
    }
  }, {
    key: "validateName",
    value: function validateName() {
      if (!this.name) {
        this.name = 'universalForm';
      }

      if (!/^[a-zA-Z0-9._]*$/.test(this.name)) {
        this.$log.warn("Invalid value of attribute name - ".concat(this.name, ". Fallbacking to default name 'universalForm'."));
      }
    }
  }]);

  return KpUniversalFormComponentController;
}(ng_model_connector_1.default);

exports.KpUniversalFormComponentController = KpUniversalFormComponentController;
KpUniversalFormComponentController.TEMPLATE_URL = __webpack_require__(154);
/**
 * @ngdoc component
 * @name kpUniversalForm
 * @module angularjs-value-editor
 *
 * @param {KpUniversalFormComponentSettings} formSettings Definition of form content.
 * @param {string=} name Name of the form. Due to internal reason, it must be in accordance with `^[a-zA-Z0-9._]*$` regexp.
 * @param {function(IFormController)=} formController Connecting to controller.
 * @param {function(IFormController)=} formController.$formController Exposed form controller.
 * @param {function(Event)=} onSubmit Function called on submit form.
 * @param {Event=} onSubmit.$event Submit event.
 * @param {ObjectValueEditorLabelsWidth=} labelsWidth See {@link ObjectValueEditorOptions}. Default value is `2`.
 * @param {boolean=} forceShowErrors If `true` it displays all validation error messages.
 * @param {KpUniversalFormComponentOptions=} options Specific options for universal form.
 *
 * @description
 * Component for generating forms by definition passed via `formSettings` attribute.
 *
 * @example
 * <example name="universalFormExample" module="universalFormExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main class="container" ng-controller="controller as $ctrl">
 *              <kp-universal-form ng-model="model" name="myForm" form-settings="$ctrl.formSettings" form-controller="formController = $formController"></kp-universal-form>
 *              <div>Model:</div>
 *              <pre ng-bind="model | json"></pre>
 *              <div>Form controller:</div>
 *              <pre ng-bind="formController | json"></pre>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
 *         angular.module('universalFormExample', ['angularjs-value-editor'])
 *          .controller('controller', class {
 *              formSettings = {
 *                  header: '<h3>Header</h3>',
 *                  footer: '<hr><h4>Footer</h4>',
 *                  fields: [
 *                      {
 *                          label: 'Text',
 *                          fieldName: 'text',
 *                          editor: {
 *                              type: 'text',
 *                              editorName: 'text',
 *                              validations: {
 *                                  required: true
 *                              }
 *                          }
 *                      },
 *                      {
 *                          label: 'Number',
 *                          fieldName: 'number',
 *                          editor: {
 *                              type: 'number',
 *                              editorName: 'number'
 *                          }
 *                      },
 *                      {
 *                          label: 'Data',
 *                          fieldName: 'date',
 *                          editor: {
 *                              type: 'list',
 *                              editorName: 'dates',
 *                              options: {
 *                                  subEditorType: 'date',
 *                                  newItemPrototype: '',
 *                                  subEditorValidations: {
 *                                      required: true
 *                                  }
 *                              },
 *                              validations: {
 *                                  required: true
 *                              }
 *                          }
 *                      }
 *                  ]
 *              };
 *          });
 *     </file>
 * </example>
 */

var KpUniversalFormComponent = function KpUniversalFormComponent() {
  _classCallCheck(this, KpUniversalFormComponent);

  this.require = {
    ngModelController: 'ngModel'
  };
  this.bindings = {
    formSettings: '<',
    name: '@?',
    formController: '&?',
    onSubmit: '&?',
    labelsWidth: '@?',
    forceShowErrors: '<?',
    options: '<?'
  };
  this.controller = KpUniversalFormComponentController;
  this.template = '<ng-include src="$ctrl.templateUrl"></ng-include>';
};

exports.default = KpUniversalFormComponent;
KpUniversalFormComponent.componentName = 'kpUniversalForm';

/***/ }),
/* 154 */
/***/ (function(module, exports) {

var path = '/value-editor/kp-universal-form/kp-universal-form.tpl.pug';
var html = "<form name=\"{{name}}\" ng-submit=\"$ctrl.onSubmit({$event: $event})\" novalidate=\"novalidate\"><p class=\"text-info text-info-up\" ng-if=\"$ctrl.formSettings.header\" ng-bind-html=\"$ctrl.formSettings.header\"></p><kp-value-editor type=\"'object'\" ng-model=\"$ctrl.model\" ng-model-options=\"{getterSetter: true}\" options=\"{fields: $ctrl.formSettings.fields, __withoutNgForm: true, {{labelsWidth ? 'labelsWidth: $ctrl.labelsWidth,' : ''}} forceShowErrors: $ctrl.forceShowErrors }\"></kp-value-editor><p class=\"text-info text-info-bottom\" ng-if=\"$ctrl.formSettings.footer\" ng-bind-html=\"$ctrl.formSettings.footer\"></p><!-- invisible submit button - due to html specification, form doesn't submit by enter when submit button is missing--><!-- see https://github.com/angular/angular.js/issues/6017#issuecomment-50808489--><button type=\"submit\" style=\"display: none;\">ok</button></form>\\{\\{ $ctrl.internalFormController = {{name}}; '' \\}\\}";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var angularjs_register_1 = __webpack_require__(0);

var error_messages_localization_provider_1 = __webpack_require__(156);

var error_messages_directive_1 = __webpack_require__(157);
/**
 * @ngdoc module
 * @name angularjs-value-editor.error-messages
 * @module angularjs-value-editor.error-messages
 *
 * @description
 *
 */


exports.default = angularjs_register_1.default('angularjs-value-editor.error-messages').constant('valueEditorErrorMessagesDefaultLocalizations', error_messages_localization_provider_1.VALUE_EDITOR_ERROR_MESSAGES_DEFAULT_LOCALIZATIONS).provider(error_messages_localization_provider_1.default.providerName, error_messages_localization_provider_1.default).directive(error_messages_directive_1.default.directiveName, error_messages_directive_1.default).name();

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALUE_EDITOR_ERROR_MESSAGES_DEFAULT_LOCALIZATIONS = void 0;

var abstract_value_editor_localization_provider_1 = __webpack_require__(4);
/**
 * @ngdoc provider
 * @name valueEditorErrorMessagesLocalizationsServiceProvider
 * @module angularjs-value-editor.error-messages
 *
 * @description
 * See {@link valueEditorErrorMessagesLocalizationsService}
 */


var ValueEditorErrorMessagesLocalizationsServiceProvider = /*#__PURE__*/function (_abstract_value_edito) {
  ValueEditorErrorMessagesLocalizationsServiceProvider.$inject = ["valueEditorErrorMessagesDefaultLocalizations"];

  _inherits(ValueEditorErrorMessagesLocalizationsServiceProvider, _abstract_value_edito);

  var _super = _createSuper(ValueEditorErrorMessagesLocalizationsServiceProvider);

  /*@ngInject*/
  function ValueEditorErrorMessagesLocalizationsServiceProvider(valueEditorErrorMessagesDefaultLocalizations) {
    _classCallCheck(this, ValueEditorErrorMessagesLocalizationsServiceProvider);

    return _super.call(this, valueEditorErrorMessagesDefaultLocalizations);
  }

  return ValueEditorErrorMessagesLocalizationsServiceProvider;
}(abstract_value_editor_localization_provider_1.default);

exports.default = ValueEditorErrorMessagesLocalizationsServiceProvider;
ValueEditorErrorMessagesLocalizationsServiceProvider.providerName = 'valueEditorErrorMessagesLocalizationsService';
/**
 * @ngdoc constant
 * @name valueEditorErrorMessagesDefaultLocalizations
 * @module angularjs-value-editor.error-messages
 *
 * @description
 * ```
 * {
 *  required: 'This field is required',
 *  minlength: 'Too short',
 *  maxlength: 'Too long',
 *  pattern: 'Input does not match pattern',
 *  number: 'Value is not a number',
 *  min: 'Too low',
 *  max: 'Too high',
 *  fromBiggerThanTo: 'From is higher than to',
 *  toBiggerThanFrom: 'To is higher than from',
 *  minDate: 'Date is too in past',
 *  maxDate: 'Date is too in future',
 *  'list-required': 'List cannot be empty'
 * }
 * ```
 */

exports.VALUE_EDITOR_ERROR_MESSAGES_DEFAULT_LOCALIZATIONS = Object.freeze({
  required: 'This field is required',
  minlength: 'Too short',
  maxlength: 'Too long',
  pattern: 'Input does not match pattern',
  number: 'Value is not a number',
  min: 'Too low',
  max: 'Too high',
  fromBiggerThanTo: 'From is higher than to',
  toBiggerThanFrom: 'To is higher than from',
  minDate: 'Date is too in past',
  maxDate: 'Date is too in future',
  'list-required': 'List cannot be empty',
  'passwords-equals': 'Passwords do not match'
});

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _templateObject() {
  var data = _taggedTemplateLiteral(["custom class: ", ", right position: ", ", message: ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(158);

var angular = __webpack_require__(5);

function template(strings, customClass, rightPosition, message) {
  return "<div class=\"error-message not-visible ".concat(customClass, "\" style=\"right: calc(10% + ").concat(rightPosition, "px)\">").concat(message, "</div>");
}
/**
 * @ngdoc directive
 * @name errorMessages
 * @module angularjs-value-editor.error-messages
 *
 * @param {string} errorMessagesCustomClass Custom CSS class to add to error message element.
 *
 * @description
 *
 */


var ErrorMessagesDirective = /*#__PURE__*/function () {
  ErrorMessagesDirective.$inject = ["valueEditorErrorMessagesLocalizationsService", "$timeout"];

  /*@ngInject*/
  function ErrorMessagesDirective(valueEditorErrorMessagesLocalizationsService, $timeout) {
    _classCallCheck(this, ErrorMessagesDirective);

    this.$timeout = $timeout;
    this.restrict = 'A';
    this.priority = 1;
    this.require = ['ngModel', '^^kpValueEditor'];
    this.localize = valueEditorErrorMessagesLocalizationsService.getLocalization.bind(valueEditorErrorMessagesLocalizationsService);
  }

  _createClass(ErrorMessagesDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, _ref) {
      var _this = this;

      var _ref2 = _slicedToArray(_ref, 2),
          ngModelController = _ref2[0],
          kpValueEditorController = _ref2[1];

      $scope.appendedElements = {}; // <editor-fold defaultstate="collapsed" desc=" Functions... ">

      function getErrorType(index, errorsObject) {
        var _a;

        return (_a = Object.keys(errorsObject)) === null || _a === void 0 ? void 0 : _a[index];
      }

      function getErrorsCount(errorsObject) {
        return Object.keys(errorsObject).length;
      }

      function getSerializedErrors(errorsObject) {
        var errors = [];

        for (var i = 0; i < getErrorsCount(errorsObject); i++) {
          errors.push(getErrorType(i, errorsObject));
        }

        return errors.sort().reduce(function (previousValue, currentValue) {
          return previousValue + currentValue;
        }, '');
      }

      function arraySubtraction(from, what) {
        return (from || []).slice().reduce(function (acc, element) {
          if (!what.includes(element)) {
            acc.push(element);
          }

          return acc;
        }, []);
      } // </editor-fold>


      var processErrors = function processErrors() {
        var _a;

        if (ngModelController.$touched || ((_a = kpValueEditorController.valueEditorInstance.options.forceShowErrors) !== null && _a !== void 0 ? _a : false)) {
          if (getSerializedErrors(ngModelController.$error) !== getSerializedErrors($scope.appendedElements)) {
            var errorsToRemove = arraySubtraction(Object.keys($scope.appendedElements), Object.keys(ngModelController.$error));
            var errorsToAdd = arraySubtraction(Object.keys(ngModelController.$error), Object.keys($scope.appendedElements));
            errorsToRemove.forEach(function (error) {
              $scope.appendedElements[error].classList.add('not-visible');

              _this.$timeout(function () {
                var _a;

                (_a = $scope.appendedElements[error]) === null || _a === void 0 ? void 0 : _a.remove();
                delete $scope.appendedElements[error];
              }, 150);
            });
            errorsToAdd.forEach(function (error, index) {
              var _a;

              var element = angular.element(template(_templateObject(), (_a = $attrs.errorMessagesCustomClass) !== null && _a !== void 0 ? _a : '', 20 * index, _this.localize(error)));
              $scope.appendedElements[error] = element[0];
              kpValueEditorController.$element.after(element);

              _this.$timeout(function () {
                return element.removeClass('not-visible');
              });
            });
          }
        }

        return true;
      };

      var removeWatcher = $scope.$watch(function () {
        return ngModelController.$touched;
      }, function (isTouched) {
        if (isTouched) {
          processErrors();
          removeWatcher();
        }
      });
      ngModelController.$validators.__validationMessageListener = processErrors;
    }
  }]);

  return ErrorMessagesDirective;
}();

exports.default = ErrorMessagesDirective;
ErrorMessagesDirective.directiveName = 'errorMessages';

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ngdoc directive
 * @name patternDescriptionTooltip
 * @module angularjs-value-editor
 *
 * @requires ^^kpValueEditor
 *
 * @description
 * This directive adds tooltip on input, if valueEditor has defined non-empty localization named `patternDescription`.
 */

var PatternDescriptionTooltipDirective = /*#__PURE__*/function () {
  PatternDescriptionTooltipDirective.$inject = ["$compile"];

  /*@ngInject*/
  function PatternDescriptionTooltipDirective($compile) {
    _classCallCheck(this, PatternDescriptionTooltipDirective);

    this.$compile = $compile;
    this.restrict = 'A';
    this.terminal = true;
    this.priority = 800;
    this.require = '^^kpValueEditor';
  }

  _createClass(PatternDescriptionTooltipDirective, [{
    key: "link",
    value: function link($scope, $element, $attrs, kpValueEditorController) {
      var _a;

      $element.removeAttr($attrs[PatternDescriptionTooltipDirective.directiveName]);
      var patternDescription = (_a = kpValueEditorController.localizations) === null || _a === void 0 ? void 0 : _a.patternDescription;

      if (patternDescription) {
        $attrs.$set('uib-tooltip', patternDescription);
        $attrs.$set('tooltip-placement', 'top-left');
        $attrs.$set('tooltip-trigger', "'focus'");
      }

      this.$compile($element)($scope);
    }
  }]);

  return PatternDescriptionTooltipDirective;
}();

exports.default = PatternDescriptionTooltipDirective;
PatternDescriptionTooltipDirective.directiveName = 'patternDescriptionTooltip';

/***/ }),
/* 160 */
/***/ (function(module, exports) {

var path = '/home/travis/build/kp-sys/angularjs-value-editor/src/value-editor/resources/loading-spinner.svg';
var html = "<svg class=\"lds-spinner\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"20 20 60 60\" preserveAspectRatio=\"xMidYMid\">\n    <g transform=\"rotate(0 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9230769230769231s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(27.692307692307693 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8461538461538461s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(55.38461538461539 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(83.07692307692308 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6923076923076923s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(110.76923076923077 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6153846153846154s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(138.46153846153845 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5384615384615384s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(166.15384615384616 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.46153846153846156s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(193.84615384615384 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.38461538461538464s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(221.53846153846155 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3076923076923077s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(249.23076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.23076923076923078s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(276.9230769230769 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.15384615384615385s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(304.61538461538464 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.07692307692307693s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n    <g transform=\"rotate(332.3076923076923 50 50)\">\n        <rect x=\"47.5\" y=\"24.5\" rx=\"8.075\" ry=\"4.165\" width=\"5\" height=\"11\" fill=\"#000000\">\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n        </rect>\n    </g>\n</svg>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
/******/ ]);
});