/*@ngInject*/
/*@ngInject*/
/* try to change options via reference*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*//**
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
/**
 * @ngdoc service
 * @name AbstractValueEditorConfigurationService
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * See {@link AbstractValueEditorConfigurationProvider}
 *//*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*//**
 * @ngdoc provider
 * @name AbstractValueEditorLocalizationProvider
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * Generic provider for value editor localizations.
 */
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
/**
 * @ngdoc type
 * @name ValueEditorLocalizations
 * @module angularjs-value-editor
 *
 * @description
 * All value editor localizations must be object with all string typed properties.
 *
 * ```
 *      interface ValueEditorLocalizations {
 *          [key: string]: string;
 *      }
 * ```
 */
/**
 * @ngdoc service
 * @name AbstractValueEditorLocalizationService
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * See {@link AbstractValueEditorLocalizationProvider}
 *//**
 * Abstract base class for general value-editor features.
 *
 * @template OPTIONS
 */
/**
     * This method is called always, when value editor options is changed with old and new options object merged with default options.
     * @param {OPTIONS} newOptions New options.
     * @param {OPTIONS} oldOptions Old options.
     * @param {OptionsChangeDetection<OPTIONS>} optionsChangeDetection Object whose keys are name of changed properties and value is boolean status of change.
     */
/* tslint:disable-next-line:no-unused-expression*/
/* tslint:disable-next-line:no-unused-expression*//**
 * @ngdoc type
 * @name AcceptableValueEditorOptions
 * @module angularjs-value-editor.acceptable
 *
 * @template VALUE
 *
 * @property {VALUE[]} acceptableValues Array of predefined values.
 * @property {boolean} multiselectable If true, value editor will accept multiple values and init model as empty array if not.
 * @property {string} optionsTemplate Angular template for displaying options. Current option is accessible via `$item` variable name.
 * @property {string} singleSelectedValueTemplate Angular template for displaying selected value in single select mode. Current option is accessible via `$select.selected` variable name.
 * @property {string} multiSelectedValueTemplate Angular template for displaying selected value in multiple select mode. Current option is accessible via `$item` variable name.
 * @property {boolean} searchable If true, select component will have search input. Applicable only for select mode.
 * @property {boolean} reorderable If true, multi-select component will have capability for manual ordering selected items. Applicable only for multiple select mode.
 * @property {function(VALUE, VALUE): number} sortComparator If defined, options will be sorted using this comparator function.
 * @property {boolean} sortModel It true, model will be sorted using `comparator`. Applicable only for multiselectable mode.
 * @property {number} switchToCheckboxesThreshold If count of options is bigger then this threshold, value editor switches into checkbox mode. If threshold is `0`, value editor forces into checkbox mode. Applicable only for multiselectable, non-reorderable mode.
 * @property {number} showFirstCount If count of options is bigger than this value, value editor shows only given count checkboxes and rest of options is hidden. Applicable only for multiselectable, checkbox mode.
 * @property {boolean} selectedFirst If `true`, selected options will be moved on top of options. Applicable only for multiselectable, checkbox mode.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link acceptableValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name acceptableValueEditorConfigurationService
 * @module angularjs-value-editor.acceptable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name acceptableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * See {@link acceptableValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name acceptableValueEditorLocalizationsService
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name AcceptableValueEditorLocalizations
 * @module angularjs-value-editor.acceptable
 *
 * @property {string} allSelected
 * @property {string} more
 * @property {string} less
 * @property {string} selectAll
 * @property {string} deselectAll
 *
 * @description
 * Default localizations: {@link acceptableValueEditorDefaultLocalizations}
 */
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
 *//*@ngInject*/
/* TODO: Add some localizations and placeholder tests*//*@ngInject*/
/* trigger model sort by calling its setter and setting same value*/
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
/**
 * @ngdoc type
 * @name AcceptableValueEditorValidations
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 */
/* tslint:disable-next-line:no-empty-interface*//**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * Acceptable value editor module.
 *//**
 * @ngdoc service
 * @name uiSelectDecorator
 * @module angularjs-value-editor.acceptable
 *
 * @description
 * This decorator modifies placeholder behaviour in multiselectable ui-select. In original, placeholder disappears if some values is selected,
 * but empty space under items is confusing, so in terms of UX, it is better to leave placeholder visible always.
 * If all items are selected, it shows `allSelected` localization from {@link AcceptableValueEditorLocalizations}
 */
/*@ngInject*//**
 * @ngdoc type
 * @name TBooleanValueEditorType
 * @module
 *
 * @description
 * Possible values are: `'checkbox' | 'switch'`.
 */
/**
 * @ngdoc type
 * @name BooleanValueEditorOptions
 * @module angularjs-value-editor.boolean
 *
 * @property {string} [type=checkbox] Type of display: `'checkbox'` or `'switch'`.
 * @property [trueValue=undefined] Custom value if editor is `true`. If undefined, `true` is used.
 * @property [falseValue=undefined] Custom value if editor is `false`. If undefined, `false` is used.
 * @property {boolean} [nullAsIndeterminate=false] If true, `null` model value is displayed as indeterminate state.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link booleanValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name booleanValueEditorConfigurationService
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link booleanValueEditorDefaultOptions}
 *//*@ngInject*/
/* @ts-ignore - $$element is not typed, because it's internal API*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.boolean
 * @module angularjs-value-editor.boolean
 *
 * @description
 *
 *//*@ngInject*//**
 * @ngdoc type
 * @name CardNumberValueEditorAdditionalRequestParameters
 * @module angularjs-value-editor.card-number
 *
 * @property {string} inputName Value editor name.
 * @property {string} currentValue Current input value.
 *
 * @description
 * Additional parameters for request function.
 */
/**
 * @ngdoc type
 * @name CardNumberValueEditorOptions
 * @module angularjs-value-editor.card-number
 *
 * @property {string} inputSize Bootstrap input size.
 * @property {Object} requestParameters Request parameters.
 * @property {function} requestFunction Function providing generation of card number.
 *  ```
 *  function (requestParameters?: {}, additionalParameters?: CardNumberValueEditorAdditionalRequestParameters): PromiseLike<string>;
 *  ```
 *  - **requestParameters**: Parameters from {@link CardNumberValueEditorOptions}.requestParameters
 *  - **additionalParameters**: Some {@link CardNumberValueEditorAdditionalRequestParameters additional parameters}.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link cardNumberValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name cardNumberValueEditorConfigurationService
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link cardNumberValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name cardNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.card-number
 *
 * @description
 * See {@link cardNumberValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name cardNumberValueEditorLocalizationsService
 * @module angularjs-value-editor.card-number
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name CardNumberValueEditorLocalizations
 * @module angularjs-value-editor.card-number
 *
 * @property {string} generate
 *
 * @description
 * Default localizations: {@link cardNumberValueEditorDefaultLocalizations}
 */
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
 *//*@ngInject*//*@ngInject*/
/**/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.card-number
 * @module angularjs-value-editor.card-number
 *
 * @description
 *
 *//**
 * @ngdoc type
 * @name TDateValueEditorGranularity
 * @module angularjs-value-editor.date
 *
 * @description
 * Date picker maximum granularity.
 *
 * Possible values are: `'minute' | 'hour' | 'day' | 'month' | 'year'`.
 */
/**
 * @ngdoc type
 * @name DateValueEditorOptions
 * @module angularjs-value-editor.date
 *
 * @property {TDateValueEditorGranularity=} maximumGranularity Set maximum date resolution.
 * @property {string=} viewFormat How to format date in input.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 * Default value:
 * ```javascript
 *  {
 *      maximumGranularity: 'day',
 *      viewFormat: 'd.L.y'
 *  }
 * ```
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name dateValueEditorConfigurationService
 * @module angularjs-value-editor.date
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link dateValueEditorDefaultOptions}
 *//*@ngInject*/
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
/**
 * @ngdoc type
 * @name DateValueEditorValidations
 * @module angularjs-value-editor.date
 *
 * @property {string=} minDate Minimum date in ISO format.
 * @property {string=} maxDate Maximum date in ISO format.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.date
 * @module angularjs-value-editor.date
 *
 * @description
 *
 *//* tslint:disable:variable-name */
/* TODO: Write some more test, for example: Test for some settings options and for min/max validations.*/
/*@ngInject*//**/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.hidden
 * @module angularjs-value-editor.hidden
 *
 * @description
 *
 *//*@ngInject*//**
 * @ngdoc type
 * @name HtmlValueEditorOptions
 * @module angularjs-value-editor.html-editor
 *
 * @property editorOptions <a href="https://alex-d.github.io/Trumbowyg/documentation/#basic-options">Trumbowyg options</a>
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link htmlValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name htmlValueEditorConfigurationService
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link htmlValueEditorDefaultOptions}
 *//*@ngInject*/
/**/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.html-editor
 * @module angularjs-value-editor.html-editor
 *
 * @description
 *
 *//*@ngInject*//* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* tslint:disable-next-line:no-namespace*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*/
/* noinspection JSUnusedLocalSymbols*//**
 * Connects outer required ngModel with inner ngModel
 *//**
 * @ngdoc type
 * @name NumberValueEditorOptions
 * @module angularjs-value-editor.number
 *
 * @property {boolean=} decimal Allow to input decimal numbers.
 * @property {number=} step Step
 * @property {boolean=} hideSpinners If true, number input hide spinner buttons.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link numberValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name numberValueEditorConfigurationService
 * @module angularjs-value-editor.number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberValueEditorDefaultOptions}
 *//*@ngInject*/
/**/
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
/**
 * @ngdoc type
 * @name NumberValueEditorValidations
 * @module angularjs-value-editor.number
 *
 * @property {number=} minlength Min length.
 * @property {number=} maxlength Max length.
 * @property {number=} min Minimum value.
 * @property {number=} max Maximum value.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.number
 * @module angularjs-value-editor.number
 *
 * @description
 *
 *//*@ngInject*/
/* working only in Firefox*//**
 * @ngdoc type
 * @name TTextValueEditorType
 * @module angularjs-value-editor.text
 *
 * @description
 * This type defines type of text editor.
 *
 * - `text`: Classic HTML input element.
 * - `textarea`: Classic HTML textarea element.
 * - `rich-textarea`: ACE editor with some syntax highlight.
 *
 * Possible values are: `'text' | 'textarea' | 'rich-textarea'`.
 *
 */
/**
 * @ngdoc type
 * @name TextValueEditorOptions
 * @module angularjs-value-editor.text
 *
 * @property {TTextValueEditorType} type Input type. Possible values are `text`, `textarea`, `rich-textarea`.
 * @property {object} aceOptions Options for ACE editor. Applicable only if `type` is `'rich-textarea'`.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link textValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name textValueEditorConfigurationService
 * @module angularjs-value-editor.text
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link textValueEditorDefaultOptions}
 *//*@ngInject*/
/**
     * Get number of rows between nim and max range.
     */
/**
     * Try to count rows in string. if string is without `\n`, it tries to estimate number of rows. Always return value greater then 0.
     */
/* Original directive doesn't sets model to touched if ACE editor is blurred. This fixes it.*/
/* Propagate disabled -> set Ace to readonly*/
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
/**
 * @ngdoc type
 * @name TextValueEditorValidations
 * @module angularjs-value-editor.text
 *
 * @property {number=} minlength Min length.
 * @property {number=} maxlength Max length.
 * @property {string=} pattern Regexp pattern.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.text
 * @module angularjs-value-editor.text
 *
 * @description
 *
 *//*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*//**/
/* console.log(retVal);*/
/* console.log(isoDate);*/
/* console.log(parsed);*/
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
/**
 * @ngdoc type
 * @name YearValueEditorValidations
 * @module angularjs-value-editor.year
 *
 * @property {number=} minDate Min year.
 * @property {number=} maxDate Max year.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.year
 * @module angularjs-value-editor.year
 *
 * @description
 *
 *//*@ngInject*//**
 * Make all properties required except properties of ValueEditorOptions
 *//**
 * Modified `angular.equals` function for support function check also.
 *
 * @param {any} o1
 * @param {any} o2
 *
 * @returns {boolean}
 */
/* eslint-disable-next-line no-self-compare*/
/* NaN === NaN*/
/* tslint:disable-next-line:no-conditional-assignment*/
/* || angular.isFunction(o1[key])*/
/* &&
                    !angular.isFunction(o2[key])*//**
 * Generates random pseudo-UUID.
 */
/* tslint:disable-next-line*//* Bindings */
/* Internal */
/*@ngInject*/
/**
     * Manually check options update. $onChanges is not applicable, because we need deep equals, which $onChanges does not perform.
     */
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
/**
 * @ngdoc type
 * @name ValueEditorValidations
 * @module angularjs-value-editor
 *
 * @property {boolean=} required Optional required validation.
 */
/**
 * @ngdoc type
 * @name ValueEditorOptions
 * @module angularjs-value-editor
 *
 * @property {string[]} [cssClasses] Optional additional CSS classes
 *//**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */