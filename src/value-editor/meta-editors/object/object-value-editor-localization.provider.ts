import AbstractValueEditorLocalizationProvider, {
    AbstractValueEditorLocalizationService,
    ValueEditorLocalizations
} from '../../common/abstract-value-editor-localization.provider';

/**
 * @ngdoc provider
 * @name objectValueEditorLocalizationsServiceProvider
 * @module angularjs-value-editor.object
 *
 * @description
 * See {@link objectValueEditorLocalizationsService}
 */
export default class ObjectValueEditorLocalizationsProvider extends AbstractValueEditorLocalizationProvider<ObjectValueEditorLocalizations> {
    public static readonly providerName = 'objectValueEditorLocalizationsService';

    /*@ngInject*/
    constructor(objectValueEditorDefaultLocalizations: ObjectValueEditorLocalizations) {
        super(objectValueEditorDefaultLocalizations);
    }
}

/**
 * @ngdoc service
 * @name objectValueEditorLocalizationsService
 * @module angularjs-value-editor.object
 *
 * @description
 * See {@link AbstractValueEditorLocalizationService}
 */
export interface ObjectValueEditorLocalizationsService extends AbstractValueEditorLocalizationService<ObjectValueEditorLocalizations> {
}

/**
 * @ngdoc type
 * @name ObjectValueEditorLocalizations
 * @module angularjs-value-editor.object
 *
 * @description
 * Default localizations: {@link objectValueEditorDefaultLocalizations}
 */
export interface ObjectValueEditorLocalizations extends ValueEditorLocalizations {

}

/**
 * @ngdoc constant
 * @name objectValueEditorDefaultLocalizations
 * @module angularjs-value-editor.object
 *
 * @description
 * ```
 * {
 * }
 * ```
 */
export const OBJECT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS: Readonly<ObjectValueEditorLocalizations> = Object.freeze({
});
