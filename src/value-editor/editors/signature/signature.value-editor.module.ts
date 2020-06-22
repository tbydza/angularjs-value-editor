import register from '@kpsys/angularjs-register';
import SignatureValueEditorComponent from './signature.value-editor.component';
import SignatureValueEditorConfigurationServiceProvider, {SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS} from './signature-value-editor-configuration.provider';
import SignatureValueEditorLocalizationsServiceProvider, {SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS} from './signature-value-editor-localization.provider';

/**
 * @ngdoc module
 * @name angularjs-value-editor.signature
 * @module angularjs-value-editor.signature
 *
 * @description
 *
 */

export default register('angularjs-value-editor.signature')
    .constant('signatureValueEditorDefaultOptions', SIGNATURE_VALUE_EDITOR_DEFAULT_OPTIONS)
    .constant('signatureValueEditorDefaultLocalizations', SIGNATURE_VALUE_EDITOR_DEFAULT_LOCALIZATIONS)
    .provider(SignatureValueEditorConfigurationServiceProvider.providerName, SignatureValueEditorConfigurationServiceProvider)
    .provider(SignatureValueEditorLocalizationsServiceProvider.providerName, SignatureValueEditorLocalizationsServiceProvider)
    .component(SignatureValueEditorComponent.componentName, SignatureValueEditorComponent)
    .name();
