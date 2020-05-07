import './object.value-editor.less';
import register from '@kpsys/angularjs-register';
import ObjectValueEditorComponent from './object.value-editor.component';
import ObjectValueEditorConfigurationProvider, {OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS} from './object-value-editor-configuration.provider';
import ObjectValueEditorLocalizationsProvider, {OBJECT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS} from './object-value-editor-localization.provider';

/**
 * @ngdoc module
 * @name angularjs-value-editor.object
 * @module angularjs-value-editor.object
 *
 * @description
 *
 */

export default register('angularjs-value-editor.object')
    .constant('objectValueEditorDefaultOptions', OBJECT_VALUE_EDITOR_DEFAULT_OPTIONS)
    .constant('objectValueEditorDefaultLocalizations', OBJECT_VALUE_EDITOR_DEFAULT_LOCALIZATIONS)
    .provider(ObjectValueEditorConfigurationProvider.providerName, ObjectValueEditorConfigurationProvider)
    .provider(ObjectValueEditorLocalizationsProvider.providerName, ObjectValueEditorLocalizationsProvider)
    .component(ObjectValueEditorComponent.componentName, ObjectValueEditorComponent)
    .name();
