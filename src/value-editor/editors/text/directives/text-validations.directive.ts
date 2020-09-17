import { IAttributes, IAugmentedJQuery, INgModelController, IScope } from 'angular';
import TextValueEditorComponent, { TextValueEditorComponentController} from '../text.value-editor.component';

/**
 * @ngdoc directive
 * @name textValidations
 * @module angularjs-value-editor.text
 *
 * @description
 *
 */
export default class TextValidationsDirective {
    public static readonly directiveName = 'textValidations';

    public restrict = 'A';

    public require = ['ngModel', `^${TextValueEditorComponent.componentName}`];

    public link($scope: IScope,
                $element: IAugmentedJQuery,
                $attrs: IAttributes,
                [ngModelController, controller]: [INgModelController, TextValueEditorComponentController]) {
        ngModelController.$validators.notBlank = notBlankValidationFactory(controller);
    }
}

function notBlankValidationFactory(textValueEditorComponentController: TextValueEditorComponentController) {
    return (modelValue: string): boolean => {
        return !textValueEditorComponentController.validations?.notBlank || (modelValue === '' || modelValue?.trim() !== '');
    };
}
