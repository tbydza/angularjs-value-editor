import register from '@kpsys/angularjs-register';
import 'angular-ui-ace';
import ValueEditorComponent from './value-editor.component';
import TextValueEditorComponent from './editors/text/text.value-editor.component';

/**
 * @ngdoc module
 * @name angularjs-value-editor
 * @module angularjs-value-editor
 */

export default register('angularjs-value-editor', ['ui.ace'])
    .component(ValueEditorComponent.componentName, ValueEditorComponent)
    .component(TextValueEditorComponent.componentName, TextValueEditorComponent)
    .name();

/**
 * @typedef ng.type.ngModel
 * @typedef ng.type.ngModel.NgModelController
 */
