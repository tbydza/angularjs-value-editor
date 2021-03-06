/* istanbul ignore file */

import {DefaultOptions} from '../../typings';
import AbstractValueEditorConfigurationProvider, {AbstractValueEditorConfigurationService} from '../../abstract/abstract-value-editor-configuration.provider';
import {ValueEditorOptions} from '../../kp-value-editor/kp-value-editor.component';
import {Injectable} from 'angular';

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
 * | Injectable&nbsp;argument&nbsp;name | Description                        |
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
 * | Injectable&nbsp;argument&nbsp;name | Description                        |
 * | ------------------------ | ---------------------------------- |
 * | `$model`                 | Current model                      |
 * | `$additionalParameters`  | Additional parameters from options |
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link searchableValueEditorDefaultOptions}
 */
export interface SearchableValueEditorOptions<MODEL> extends ValueEditorOptions {
    modelTemplate?: string;
    additionalParameters?: {} | undefined;
    // tslint:disable-next-line:ban-types
    searchModelFunction?: Injectable<Function | ((...args: any[]) => PromiseLike<MODEL>)>;
    // tslint:disable-next-line:ban-types
    editModelFunction?: Injectable<Function | ((...args: any[]) => PromiseLike<MODEL>)>;
}

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
export const SEARCHABLE_VALUE_EDITOR_DEFAULT_OPTIONS: DefaultOptions<SearchableValueEditorOptions<never>> = {
    modelTemplate: '{{$model}}',
    additionalParameters: undefined,
    searchModelFunction: async () => {throw new Error('searchModelFunction is not set')},
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
export default class SearchableValueEditorConfigurationServiceProvider<MODEL> extends AbstractValueEditorConfigurationProvider<SearchableValueEditorOptions<MODEL>> {
    public static readonly providerName = 'searchableValueEditorConfigurationService';

    /*@ngInject*/
    constructor(kpValueEditorAliasesServiceProvider, searchableValueEditorDefaultOptions: DefaultOptions<SearchableValueEditorOptions<MODEL>>) {
        super(kpValueEditorAliasesServiceProvider, searchableValueEditorDefaultOptions);
    }
}

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
 */
export interface SearchableValueEditorConfigurationService<MODEL> extends AbstractValueEditorConfigurationService<SearchableValueEditorOptions<MODEL>> {
}
