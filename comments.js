/**
 * @ngdoc module
 * @name angularjs-value-editor.aliases
 * @module angularjs-value-editor.aliases
 *
 * @description
 * Support for editor types aliasing
 *//**
 * @ngdoc type
 * @name CustomValueEditorType
 * @module angularjs-value-editor.aliases
 *
 * @requires TValueEditorType
 *
 * @description
 * ```js
 *  type CustomValueEditorType = TValueEditorType | string
 * ```
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name aliasesService
 * @module angularjs-value-editor.aliases
 *
 * @description
 * Service for working with editor aliases.
 */
/**
     * @ngdoc method
     * @name aliasesService#getAlias
     *
     * @param {CustomValueEditorType} alias Get alias settings.
     *
     * @returns {AliasDefinition} Alias definition.
     *
     * @description
     * Return alias definition.
     */
/**
     * @ngdoc method
     * @name aliasesService#isAlias
     *
     * @param {CustomValueEditorType} type Tested editor type.
     *
     * @returns {boolean} `true` if type is alias.
     *
     * @description
     * Test if type is alias.
     */
/**
 * @ngdoc provider
 * @name aliasesServiceProvider
 * @module angularjs-value-editor.aliases
 *
 * @description
 * Provider for define aliases.
 */
/**
     * @ngdoc method
     * @name aliasesServiceProvider#addAlias
     *
     * @param {CustomValueEditorType} aliasTypeName New alias.
     * @param {CustomValueEditorType} editorType Existing aliased editor.
     *
     * @returns {AliasesServiceProviderBuildOptions}
     *
     * @description
     * Add new alias.
     */
/**
     * @ngdoc method
     * @name aliasesServiceProvider#removeAlias
     *
     * @param {CustomValueEditorType} aliasTypeName Removing alias.
     *
     * @description
     * Remove alias.
     *//*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*//**
 * Abstract editor class which contains some helpers for managing and simplify template parsing.
 */
/**
     * Pre-defined component template.
     * @type {string}
     */
/**
     * Generate template URL for ng-include
     */
/**
     * This function returns model for template.
     * @returns {{}}
     */
/**
     * Updates template
     *//*@ngInject*/
/*@ngInject*/
/* try to change options via reference*/
/*@ngInject*/
/*@ngInject*/
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
 * @ngdoc service
 * @name AbstractValueEditorConfigurationService
 * @module angularjs-value-editor
 *
 * @abstract
 *
 * @description
 * See {@link AbstractValueEditorConfigurationProvider}
 */
/**
 * @ngdoc type
 * @name ConfigurationBuilder
 * @module angularjs-value-editor
 *
 * @template CONFIGURATION
 *
 * @description
 * Methods for setting and getting configuration.
 */
/**
     * @ngdoc method
     * @name ConfigurationBuilder#getConfiguration
     * @module angularjs-value-editor
     *
     * @returns {DefaultOptions<CONFIGURATION>} Current value editor options.
     *
     * @description
     * Returns current value editor options.
     *
     * {@link  AbstractValueEditorConfigurationProvider#getConfiguration}
     */
/**
     * @ngdoc method
     * @name ConfigurationBuilder#setConfiguration
     * @module angularjs-value-editor
     *
     * @param {Partial<CONFIGURATION>} configuration New value editor configuration.
     *
     * @returns {DefaultOptions<CONFIGURATION>} Complete new value editor configuration.
     *
     * @description
     * Sets new value editor configuration.
     *
     * {@link  AbstractValueEditorConfigurationProvider#setConfiguration}
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
/* If initial options are not defaults, trigger options change.*/
/**
     * This method changes options.
     * @param {OPTIONS} newOptions
     * @param {OPTIONS} oldOptions
     */
/**
     * Simplifies localization. No need to call localization service.
     * @param {string} code Message code.
     * @returns {string} Localized message.
     */
/* istanbul ignore else */
/**
     * This method is called always, when value editor options is changed with old and new options object merged with default options.
     * @param {OPTIONS} newOptions New options.
     * @param {OPTIONS} oldOptions Old options.
     * @param {OptionsChangeDetection<OPTIONS>} optionsChangeDetection Object whose keys are name of changed properties and value is boolean status of change.
     */
/* tslint:disable-next-line:no-unused-expression*/
/* tslint:disable-next-line:no-unused-expression*/
/*@ngInject*//**
 * Connects outer required ngModel with inner ngModel
 *//**
 * @ngdoc type
 * @name AcceptableRootValueEditorOptions
 * @module angularjs-value-editor.acceptable-root
 *
 * @template MODEL
 *
 * @property {MODEL} acceptableValue Tree of acceptable values. Every node should has array of child nodes in property `children`.
 * @property {boolean} multiselect If `true`, it will be multiselectable.
 * @property {MODEL[]} disabledItems Disabled items.
 * @property {function(MODEL, MODEL): boolean} equalityComparator Same as {@link type:AcceptableValueEditorOptions#equalityComparator}
 * @property {string} optionsTemplate Angular template for displaying value in tree. Current option is accessible via `$node` variable name.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Defaults: {@link acceptableRootValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name acceptableRootValueEditorConfigurationService
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link acceptableRootValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name acceptableRootValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * See {@link acceptableRootValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name acceptableRootValueEditorLocalizationsService
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name AcceptableRootValueEditorLocalizations
 * @module angularjs-value-editor.acceptable-root
 *
 * @param {string} cannotSelect
 * @param {string} showAll
 * @param {string} deselectAll
 * @param {string} selectAll
 *
 *
 * @description
 * Default localizations: {@link acceptableRootValueEditorDefaultLocalizations}
 */
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
 *//* istanbul ignore file */
/* neni cas... :-(*/
/*@ngInject*/
/* expanded is always first level*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.acceptable-root
 * @module angularjs-value-editor.acceptable-root
 *
 * @description
 *
 *//*@ngInject*//* istanbul ignore file */
/* neni cas... :-(*/
/**
         * @param cssClass - the css class
         * @param addClassProperty - should we wrap the class name with class=""
         */
/* Branch node is not selectable, expand*/
/* Leaf node is not selectable*/
/* tree template*/
/* find all nodes visible on the tree and the scope $id of the scopes including them*/
/* iterate over the newValue, the new expanded nodes, and for each find it in the existingNodesAndScopes*/
/* if found, add the mapping $id -> node into newExpandedNodesMap*/
/* if not found, add the mapping num -> node into newExpandedNodesMap*/
/* Rendering template for a root node*/
/* save the transclude function from compile (which is not bound to a scope as apposed to the one from link)*/
/* we can fix this to work with the link transclude function with angular 1.2.6. as for angular 1.2.0 we need*/
/* to keep using the compile function*/
/* Rendering template for the current node*/
/* create a scope for the transclusion, whos parent is the parent of the tree control*//**
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
 * @property {function(VALUE, VALUE): boolean} equalityComparator Custom equality comparator.
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
 * @name AccessNumberValueEditorOptions
 * @module angularjs-value-editor.access-number
 *
 * @property {boolean} canDoAction If `true`, value editor perform request via `dataSource` function and sets values from response to select.
 * @property {function(): Promise<string[]>} dataSource
 * ```
 * function dataSource($model: string, $name: string, $formModel: {}, ...args) => PromiseLike<string[]>
 * ```
 * Function invoked via [$injector.invoke](https://docs.angularjs.org/api/auto/service/$injector#invoke) with following locals:
 *
 * - `$model`: Actual model value
 * - `$name`: Input name
 * - `$formModel`: Actual form model if form is present (wrapping this value editor)
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link accessNumberValueEditorDefaultOptions}
 */
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
/* istanbul ignore next */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name accessNumberValueEditorConfigurationService
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link accessNumberValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name accessNumberValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.access-number
 *
 * @description
 * See {@link AccessNumberValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name AccessNumberValueEditorLocalizationsService
 * @module angularjs-value-editor.access-number
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name AccessNumberValueEditorLocalizations
 * @module angularjs-value-editor.access-number
 *
 * @property {string} select Placeholder for select.
 * @property {string} orType Placeholder for input if select is visible.
 *
 * @description
 * Default localizations: {@link accessNumberValueEditorDefaultLocalizations}
 */
/**
 * @ngdoc constant
 * @name accessNumberValueEditorDefaultLocalizations
 * @module angularjs-value-editor.access-number
 *
 * @description
 * ```
 * {
 *      select: 'Select...',
 *      orType: 'or type...'
 * }
 * ```
 *//*@ngInject*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.access-number
 * @module angularjs-value-editor.access-number
 *
 * @description
 *
 *//*@ngInject*/
/* @ts-ignore*//**
 * @ngdoc type
 * @name AutocompleteValueEditorOptions
 * @module angularjs-value-editor.autocomplete
 *
 * @property {function(AutocompleteRequestParams): Promise<string[]>} dataSource
 * ```
 * <PARAMS extends AutocompleteRequestParams> function(params?: PARAMS): Promise<string[]>
 * ```
 * Function, which makes request and returns string array of values for autocomplete.
 *
 * Params are {@link AutocompleteRequestParams} merged with `staticParams` from options.
 *
 * @property {object} staticParams Any static params, which are passed to `dataSource` function.
 * @property {string} minLength Pull down popup input string length threshold.
 *
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link autocompleteValueEditorDefaultOptions}
 */
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
/* istanbul ignore next */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name autocompleteValueEditorConfigurationService
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link autocompleteValueEditorDefaultOptions}
 *//**
 * @ngdoc type
 * @name AutocompleteRequestParams
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 * ```javascript
 * interface AutocompleteRequestParams {
 *       query: string;
 * }
 * ```
 */
/*@ngInject*/
/**/
/* istanbul ignore next */
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.autocomplete
 * @module angularjs-value-editor.autocomplete
 *
 * @description
 *
 *//*@ngInject*//**
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
/* istanbul ignore next */
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
/*@ngInject*//*@ngInject*//**
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
 *//*@ngInject*//* istanbul ignore next */
/**/
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
 * @ngdoc type
 * @name IndexSelectionValueEditorOptions
 * @module angularjs-value-editor.index-selection
 *
 * @template ID
 * @template VALUE
 *
 * @property {VALUE[]} items Array of predefined values.
 * @property {string} optionsTemplate Angular template for displaying options. Current option is accessible via `$item` variable name.
 * @property {function(ID, VALUE): boolean} equalityComparator If defined, options will compared with this comparator. It is comparing model and selecting item.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link indexSelectionValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name indexSelectionValueEditorConfigurationService
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link indexSelectionValueEditorDefaultOptions}
 *//*@ngInject*/
/* normalize model*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.index-selection
 * @module angularjs-value-editor.index-selection
 *
 * @description
 *
 *//*@ngInject*/
/* @ts-ignore*//**
 * @ngdoc directive
 * @name numberRangeValidations
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 */
/*@ngInject*//**
 * @ngdoc type
 * @name NumberRangeValueEditorOptions
 * @module angularjs-value-editor.number-range
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link numberRangeValueEditorDefaultOptions}
 */
/* tslint:disable-next-line:no-empty-interface*/
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name numberRangeValueEditorConfigurationService
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link numberRangeValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name numberRangeValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.number-range
 *
 * @description
 * See {@link NumberRangeValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name NumberRangeValueEditorLocalizationsService
 * @module angularjs-value-editor.number-range
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name NumberRangeValueEditorLocalizations
 * @module angularjs-value-editor.number-range
 *
 * @property {string} from
 * @property {string} to
 *
 * @description
 * Default localizations: {@link numberRangeValueEditorDefaultLocalizations}
 */
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
 *//**
 * @ngdoc type
 * @name NumberRangeValueEditorModel
 * @module angularjs-value-editor.number-range
 *
 * @description
 * Model of number-range-value-editor
 *
 * ```js
 *  {
 *      from: number,
 *      to: number
 *  }
 * ```
 */
/*@ngInject*/
/* istanbul ignore next */
/**/
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
/**
 * @ngdoc type
 * @name NumberRangeValueEditorValidations
 * @module angularjs-value-editor.number-range
 *
 * @property {number} min Min number for both inputs.
 * @property {number} max Max number for both inputs.
 * @property {boolean} fromBiggerThanTo From has to be bigger then to.
 * @property {boolean} toBiggerThanFrom To has to be bigger then from.
 *
 * @description
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.number-range
 * @module angularjs-value-editor.number-range
 *
 * @description
 *
 *//*@ngInject*/
/* allow insert invalid number*//**
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
 *//**
 * @ngdoc type
 * @name PasswordValueEditorOptions
 * @module angularjs-value-editor.password
 *
 * @property {boolean} withConfirmation If `true`, it renders two inputs - main and confirmation. If models don't match, it shows implicit equals validation.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link passwordValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name passwordValueEditorConfigurationService
 * @module angularjs-value-editor.password
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link passwordValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name passwordValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.password
 *
 * @description
 * See {@link passwordValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name passwordValueEditorLocalizationsService
 * @module angularjs-value-editor.password
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name PasswordValueEditorLocalizations
 * @module angularjs-value-editor.password
 *
 * @property {string} patternDescription Password pattern description.
 * @property {string} confirmPassword Label above confirmation input.
 * @property {string} noChangeIfEmpty Text next to password pattern, informing about possibility to leave both inputs blank.
 * @property {string} helpTextsSeparator Separator between pattern and leave blank messages.
 *
 * @description
 * Default localizations: {@link passwordValueEditorDefaultLocalizations}
 */
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
 *      noChangeIfEmpty: 'If You don\'t want to change password, leave blank.',
 *      helpTextsSeparator: ' | '
 * }
 * ```
 *//*@ngInject*/
/**/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.password
 * @module angularjs-value-editor.password
 *
 * @description
 *
 *//*@ngInject*//* istanbul ignore file */
/* uncomment after write some test for component*/
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
/*@ngInject*/
/*SliderComponentController*//**
 * @ngdoc type
 * @name RangeValueEditorOptions
 * @module angularjs-value-editor.range
 *
 * @property {boolean} extremesAsNull If `true`, extremes will be transformed to `null`.
 * @property {number} min Minimum value
 * @property {number} max Maximum value
 * @property {boolean} snap If `true` handlers will snap to defined `snapPoints`.
 * @property {number[]} snapPoints Definition of snap points.
 * @property {number[]} pitPoints Definition where to be placed pits.
 * @property {string} currentValueTemplate Template of displaying current value of slider model above slider. From a to values are accessible via `$from` resp. `$to` variables.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link rangeValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name rangeValueEditorConfigurationService
 * @module angularjs-value-editor.range
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link rangeValueEditorDefaultOptions}
 *//* istanbul ignore file */
/* neni moc co testovat... viz. testy*/
/*@ngInject*/
/**/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.range
 * @module angularjs-value-editor.range
 *
 * @description
 *
 *//*@ngInject*/
/* nothing to require*/
/* component does not support disabling for this time*//**
 * @ngdoc provider
 * @name searchTextValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.search-text
 *
 * @description
 * See {@link searchTextValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name searchTextValueEditorLocalizationsService
 * @module angularjs-value-editor.search-text
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name SearchTextValueEditorLocalizations
 * @module angularjs-value-editor.search-text
 *
 * @property {string} generate
 *
 * @description
 * Default localizations: {@link searchTextValueEditorDefaultLocalizations}
 */
/**
 * @ngdoc constant
 * @name searchTextValueEditorDefaultLocalizations
 * @module angularjs-value-editor.search-text
 *
 * @description
 * ```
 * {
 *      startsWith: 'Starts with',
 *      equals: 'Equals'
 * }
 * ```
 *//*@ngInject*//**
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
/**
 * @ngdoc type
 * @name SearchTextValueEditorModel
 * @module angularjs-value-editor.search-text
 *
 * @description
 * ```
 * interface SearchTextValueEditorModel {
 *      extension: SearchTextValueEditorModelExtension;
 *      row: string;
 *  }
 * ```
 *
 */
/*@ngInject*/
/* istanbul ignore next */
/**/
/* @ts-ignore*/
/* this.model.extension is not a member of SearchTextValueEditorModelExtension enum*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.search-text
 * @module angularjs-value-editor.search-text
 *
 * @description
 *
 *//* istanbul ignore file */
/**
 * @ngdoc type
 * @name SearchableValueEditorOptions
 * @module angularjs-value-editor.searchable
 *
 * @property {string} modelTemplate Template for displaying model
 * @property {{}} additionalParameters Additional parameters passed to `searchModelFunction` and `editModelFunction`
 * @property {Injectable<Function>} searchModelFunction
 * ```
 * function(...args: any[]) => Promise<MODEL>
 * ```
 * Searching angularjs injectable function. Returns model value in promise.
 *
 * | Injectable argument name | Description                        |
 * | ------------------------ | ---------------------------------- |
 * | `$model`                 | Current model                      |
 * | `$additionalParameters`  | Additional parameters from options |
 *
 * @property {Injectable<Function>} editModelFunction
 * ```
 * function(...args: any[]) => Promise<MODEL>
 * ```
 * Function that calls edit value. Returns new model in promise.
 *
 * | Injectable argument name | Description                        |
 * | ------------------------ | ---------------------------------- |
 * | `$model`                 | Current model                      |
 * | `$additionalParameters`  | Additional parameters from options |
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link searchableValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name searchableValueEditorConfigurationService
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link searchableValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name searchableValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.searchable
 *
 * @description
 * See {@link searchableValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name searchableValueEditorLocalizationsService
 * @module angularjs-value-editor.searchable
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name SearchableValueEditorLocalizations
 * @module angularjs-value-editor.searchable
 *
 * @property {string} search
 * @property {string} searchOther
 * @property {string} editValue
 * @property {string} createNew
 *
 * @description
 * Default localizations: {@link searchableValueEditorDefaultLocalizations}
 */
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
 *//*@ngInject*/
/* istanbul ignore next */
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.searchable
 * @module angularjs-value-editor.searchable
 *
 * @description
 *
 *//* tslint:disable-next-line:variable-name*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*/
/*@ngInject*//**
 * @ngdoc type
 * @name SignatureValueEditorOptions
 * @module angularjs-value-editor.signature
 *
 * @property {boolean} canDoAction If `true`, value editor perform request via `dataSource` function and sets values from response to select.
 * @property {function(): Promise<string[]>} dataSource
 * ```
 * function dataSource($model: string, $name: string, $formModel: {}, ...args) => PromiseLike<string[]>
 * ```
 * Function invoked via [$injector.invoke](https://docs.angularjs.org/api/auto/service/$injector#invoke) with following locals:
 *
 * - `$model`: Actual model value
 * - `$name`: Input name
 * - `$formModel`: Actual form model if form is present (wrapping this value editor)
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link signatureValueEditorDefaultOptions}
 */
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
/* istanbul ignore next */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name signatureValueEditorConfigurationService
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link signatureValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name signatureValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.signature
 *
 * @description
 * See {@link signatureValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name signatureValueEditorLocalizationsService
 * @module angularjs-value-editor.signature
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name SignatureValueEditorLocalizations
 * @module angularjs-value-editor.signature
 *
 * @property {string} select Placeholder for select.
 * @property {string} orType Placeholder for input if select is visible.
 *
 * @description
 * Default localizations: {@link signatureValueEditorDefaultLocalizations}
 */
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
 *//*@ngInject*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.signature
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 *//*@ngInject*//**
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
/*@ngInject*//*
import ValueEditorComponent, {ValueEditorBindings, ValueEditorValidations} from '../../value-editor.component';
import AbstractValueEditor, {OptionsChangeDetection} from '../abstract-value-editor';
import * as angular from 'angular';

import * as ace from 'brace';

console.log(ace);

declare global {
    interface Window {
        ace: any;
    }
}


export class VelocityTemplateValueEditorComponentController extends AbstractValueEditor<string, never> {

    protected onOptionsChange(newOptions: never, oldOptions, whatChanged: OptionsChangeDetection<never>) {
        //
    }
}

/!**
 * @ngdoc component
 * @name velocityTemplateValueEditor
 * @module angularjs-value-editor.velocity-template
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for velocityTemplate input.
 *
 * Supported options: {@link type:VelocityTemplateValueEditorOptions}
 *
 * Supported validations: {@link type:VelocityTemplateValueEditorValidations}
 *
 * @example
 * <example name="velocityTemplateValueEditorExample" module="velocityTemplateValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'velocity-template'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('velocityTemplateValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 *!/
export default class VelocityTemplateValueEditorComponent {
    public static componentName = 'velocityTemplateValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public templateUrl = require('./velocity-template.value-editor.tpl.pug');

    public controller = VelocityTemplateValueEditorComponentController;
}

/!**
 * @ngdoc type
 * @name VelocityTemplateValueEditorValidations
 * @module angularjs-value-editor.velocity-template
 *
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 *!/
export interface VelocityTemplateValueEditorValidations extends ValueEditorValidations {
    minDate?: number;
    maxDate?: number;
}

export interface VelocityTemplateValueEditorBindings extends ValueEditorBindings<never, VelocityTemplateValueEditorValidations> {
}
*//*@ngInject*//* import VelocityTemplateValueEditorComponent from './velocity-template.value-editor.component';*/
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
/* .component(VelocityTemplateValueEditorComponent.componentName, VelocityTemplateValueEditorComponent)*//*@ngInject*//* istanbul ignore next */
/**/
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
 *//*@ngInject*//*@ngInject*/
/**
 * @ngdoc component
 * @name kpUniversalForm
 * @module angularjs-value-editor
 *
 * @param {KpUniversalFormComponentSettings} formSettings Definition of form content.
 * @param {string=} name Name of the form. Due to internal reason, it must be in accordance with `^[a-zA-Z0-9._]*$` regexp.
 * @param {function(IFormController)=} formController Connecting to controller.
 * @param {function(IFormController)=} formController.$formController Exposed form controller.
 * @param {function(Event)=} submitFunction Function called on submit form.
 * @param {Event=} submitFunction.$event Submit event.
 * @param {ObjectValueEditorLabelsWidth=} labelsWidth See {@link ObjectValueEditorOptions}. Default value is `2`.
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
 *                          type: 'text',
 *                          editorName: 'text',
 *                          validations: {
 *                              required: true
 *                          }
 *                      },
 *                      {
 *                          label: 'Number',
 *                          type: 'number',
 *                          editorName: 'number'
 *                      },
 *                      {
 *                          label: 'Data',
 *                          type: 'list',
 *                          editorName: 'dates',
 *                          options: {
 *                              subEditorType: 'date',
 *                              newItemPrototype: '',
 *                              subEditorValidations: {
 *                                  required: true
 *                              }
 *                          },
 *                          validations: {
 *                              required: true
 *                          }
 *                      }
 *                  ]
 *              };
 *          });
 *     </file>
 * </example>
 *//* tslint:disable:prefer-const */
/*@ngInject*//**
 * @ngdoc provider
 * @name valueEditorConfigurationServiceProvider
 * @module angularjs-value-editor
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link ValueEditorConfigurationService}
 */
/**
 * @ngdoc service
 * @name ValueEditorConfigurationService
 * @module angularjs-value-editor
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options:
 * ```
 *  {
 *      debugMode: false
 *  }
 * ```
 *//* Bindings */
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
 * @param {string} editorId Input id. <.
 * @param {string} editorName Input name. <.
 * @param {string} placeholder Placeholder. <.
 * @param {string} type ValueEditor type. <.
 * @param {boolean} disabled If input is disabled. <.
 * @param {boolean} visible If input is visible. <.
 * @param {ValueEditorValidations} validations ValueEditor validations. <.
 * @param {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type. <.
 *
 * @description
 * Generic value editor depends on type:
 *
 * - `text`: {@link textValueEditor}
 * - `number`: {@link numberValueEditor}
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
 */
/**
 * @ngdoc type
 * @name ValueEditorBindings
 * @module angularjs-value-editor
 *
 * @property {string} editorId Input id.
 * @property {string} editorName Input name.
 * @property {string} placeholder Placeholder.
 * @property {string} type ValueEditor type.
 * @property {boolean} disabled If input is disabled.
 * @property {boolean} visible If input is visible.
 * @property {ValueEditorValidations} validations ValueEditor validations.
 * @property {ValueEditorOptions} options ValueEditor options. Type depends on ValueEditor type.
 *
 * @description
 * {@link kpValueEditor} attributes definition.
 *//**//**
 * @ngdoc component
 * @name listRequiredValidation
 * @module angularjs-value-editor.list
 *
 * @param {boolean} enabled Is validation enabled?
 *
 * @description
 * Helper for required validation for {@link component:ListValueEditorComponent list value editor}
 *//**
 * @ngdoc type
 * @name ListValueEditorOptions
 * @module angularjs-value-editor.list
 *
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link listValueEditorDefaultOptions}
 */
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
 * }
 * ```
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name listValueEditorConfigurationService
 * @module angularjs-value-editor.list
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link listValueEditorDefaultOptions}
 *//**
 * @ngdoc provider
 * @name listValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.list
 *
 * @description
 * See {@link listValueEditorLocalizationsService}
 */
/*@ngInject*/
/**
 * @ngdoc service
 * @name listValueEditorLocalizationsService
 * @module angularjs-value-editor.list
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
/**
 * @ngdoc type
 * @name ListValueEditorLocalizations
 * @module angularjs-value-editor.list
 *
 * @description
 * Default localizations: {@link listValueEditorDefaultLocalizations}
 */
/**
 * @ngdoc constant
 * @name listValueEditorDefaultLocalizations
 * @module angularjs-value-editor.list
 *
 * @description
 * ```
 * {
 * }
 * ```
 *//*@ngInject*/
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
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.list
 * @module angularjs-value-editor.list
 *
 * @description
 *
 *//**
     * Simulates click on add button
     * @returns {HTMLElement}
     */
/* add input*/
/* select last added input*/
/**
     * Simulates click on remove button
     * @param {number} index
     */
/*@ngInject*/
/* expect(() => removeItemOnIndex(0)).toThrow();*//**
 * @ngdoc type
 * @name ObjectValueEditorFieldSettings
 * @module angularjs-value-editor.object
 *
 * @requires ValueEditorBindings
 *
 * @description
 * Definition of {@link objectValueEditor} fields.
 *
 * ```
 *      type ObjectValueEditorFieldSettings = ValueEditorBindings & {label: string};
 * ```
 */
/**
 * @ngdoc type
 * @name ObjectValueEditorLabelsWidth
 * @module angularjs-value-editor.object
 *
 * @description
 * Possible values of width of labels of {@link objectValueEditor}.
 *
 * ```
 *      type ObjectValueEditorLabelsWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
 * ```
 *
 */
/**
 * @ngdoc type
 * @name ObjectValueEditorOptions
 * @module angularjs-value-editor.object
 *
 * @property {ObjectValueEditorFieldSettings} fields Definition of editor fields
 * @property {function(ValueEditorBindings): ValueEditorBindings} attributesTransformation Function that transforms ValueEditorBindings.
 * It is useful for situation when You have `name` from backend and You want to have `id` of value editor to be same as `name`.
 *
 * Example:
 * ```
 *      function(attrs) { attrs.editorId = attrs.editorName; return attrs;}
 * ```
 *
 * @property {ObjectValueEditorLabelsWidth} labelsWidth Width of labels of {@link objectValueEditor} in [Bootstrap](https://getbootstrap.com/docs/3.4/css/#grid-options) `col`s.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link objectValueEditorDefaultOptions}
 */
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
/*@ngInject*/
/**
 * @ngdoc service
 * @name objectValueEditorConfigurationService
 * @module angularjs-value-editor.object
 *
 * @description
 *
 * See {@link AbstractValueEditorConfigurationProvider}
 *
 * Default options: {@link objectValueEditorDefaultOptions}
 */
/* if true, it does not render ng-form around nested fields. This functionality use kp-universal-form.*//*@ngInject*/
/* @ts-ignore Init form with anything*/
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
 *                          type: 'text',
 *                          editorName: 'text'
 *                      },
 *                      {
 *                          label: 'Number',
 *                          type: 'number',
 *                          editorName: 'number'
 *                      },
 *                      {
 *                          label: 'Data',
 *                          type: 'list',
 *                          editorName: 'dates',
 *                          options: {
 *                              subEditorType: 'date',
 *                              newItemPrototype: ''
 *                          }
 *                      }
 *                  ]
 *              });
 *          }]);
 *     </file>
 * </example>
 *//**
 * @ngdoc module
 * @name angularjs-value-editor.object
 * @module angularjs-value-editor.object
 *
 * @description
 *
 *//*@ngInject*//**
 * @ngdoc type
 * @name TMetaValueEditor
 * @module angularjs-value-editor
 *
 * @description
 * Meta-value editor types.
 *
 * ```
 * type TValueEditorTypeAliases =
 *  'list' |
 *  'object';
 * ```
 */
/**
 * @ngdoc type
 * @name TValueEditorTypeAliases
 * @module angularjs-value-editor
 *
 * @description
 * Aliased value editor types.
 *
 * ```
 * type TValueEditorTypeAliases =
 *  'exemplar-bar-code' |
 *  'single-acceptable-root' |
 *  'multiple-acceptable-root' |
 *  'velocity-template';
 * ```
 */
/**
 * @ngdoc type
 * @name TValueEditorType
 * @module angularjs-value-editor
 *
 * @requires TValueEditorTypeAliases
 *
 * @description
 * Value editor types.
 *
 * ```js
 * type TValueEditorType =
 *      TValueEditorTypeAliases |
 *      'text' |
 *      'number' |
 *      'boolean' |
 *      'hidden' |
 *      'html' |
 *      'date' |
 *      'acceptable' |
 *      'year' |
 *      'card-number' |
 *      'index-selection' |
 *      'autocomplete' |
 *      'password' |
 *      'signature' |
 *      'access-number' |
 *      'number-range' |
 *      'acceptable-root' |
 *      'search-text' |
 *      'searchable' |
 *      'range';
 * ```
 */
/**
 * Make all properties required except properties of ValueEditorOptions
 *//* istanbul ignore file */
/* tested by angular team*/
/**
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
/* tslint:disable-next-line*//**
 * @ngdoc constant
 * @name loadingSpinnerTemplateUrl
 * @module angularjs-value-editor
 *
 * @description
 * AngularJS template url with SVG spinner.
 *
 * It can be used for waiting for async operations, etc...
 */
/* tslint:disable-next-line:no-var-requires*/
/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */
/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */