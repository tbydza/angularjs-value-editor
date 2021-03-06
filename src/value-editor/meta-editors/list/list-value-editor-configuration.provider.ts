import {DefaultOptions} from '../../typings';
import AbstractValueEditorConfigurationProvider, {AbstractValueEditorConfigurationService} from '../../abstract/abstract-value-editor-configuration.provider';
import {ValueEditorOptions, ValueEditorValidations} from '../../kp-value-editor/kp-value-editor.component';
import {CustomValueEditorType} from '../../aliases/kp-value-editor-aliases.service';
import {TextValueEditorOptions} from '../../editors/text/text-value-editor-configuration.provider';
import {TextValueEditorValidations} from '../../editors/text/text.value-editor.component';

/**
 * @ngdoc type
 * @name ListValueEditorOptions
 * @module angularjs-value-editor.list
 *
 * @template MODEL
 * @template OPTIONS
 * @template VALIDATIONS
 *
 * @property {CustomValueEditorType} subEditorType
 * @property {MODEL} newItemPrototype
 * @property {OPTIONS=} subEditorOptions
 * @property {VALIDATIONS=} subEditorValidations
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 *
 * Default value: {@link listValueEditorDefaultOptions}
 */
export interface ListValueEditorOptions<MODEL = any, OPTIONS extends ValueEditorOptions = ValueEditorOptions, VALIDATIONS extends ValueEditorValidations = ValueEditorValidations> extends ValueEditorOptions {
    subEditorType: CustomValueEditorType;
    newItemPrototype: MODEL;
    subEditorOptions?: OPTIONS;
    subEditorValidations?: VALIDATIONS;
}

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
export const LIST_VALUE_EDITOR_DEFAULT_OPTIONS: DefaultOptions<ListValueEditorOptions<string, TextValueEditorOptions, TextValueEditorValidations>> = {
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
export default class ListValueEditorConfigurationServiceProvider<MODEL = any, OPTIONS extends ValueEditorOptions = ValueEditorOptions, VALIDATIONS extends ValueEditorValidations = ValueEditorValidations> extends AbstractValueEditorConfigurationProvider<ListValueEditorOptions<MODEL, OPTIONS, VALIDATIONS>> {
    public static readonly providerName = 'listValueEditorConfigurationService';

    /*@ngInject*/
    constructor(kpValueEditorAliasesServiceProvider, listValueEditorDefaultOptions: DefaultOptions<ListValueEditorOptions<MODEL, OPTIONS, VALIDATIONS>>) {
        super(kpValueEditorAliasesServiceProvider, listValueEditorDefaultOptions);
    }
}

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
 */
export interface ListValueEditorConfigurationService<MODEL = any, OPTIONS extends ValueEditorOptions = ValueEditorOptions, VALIDATIONS extends ValueEditorValidations = ValueEditorValidations> extends AbstractValueEditorConfigurationService<ListValueEditorOptions<MODEL, OPTIONS, VALIDATIONS>> {
}
