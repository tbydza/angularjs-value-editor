import register from '@kpsys/angularjs-register';
import DateValueEditorComponent from './date.value-editor.component';
import DateValueEditorConfigurationProvider, {DATE_VALUE_EDITOR_DEFAULT_OPTIONS} from './date-value-editor-configuration.provider';

/**
 * @ngdoc module
 * @name angularjs-value-editor.date
 * @module angularjs-value-editor.date
 *
 * @description
 *
 */

export default register('angularjs-value-editor.date')
    .constant('dateValueEditorDefaultOptions', DATE_VALUE_EDITOR_DEFAULT_OPTIONS)
    .provider(DateValueEditorConfigurationProvider.providerName, DateValueEditorConfigurationProvider)
    .component(DateValueEditorComponent.componentName, DateValueEditorComponent)
    .name();