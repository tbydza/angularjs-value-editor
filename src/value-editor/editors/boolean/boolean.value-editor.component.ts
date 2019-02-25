import './boolean.value-editor.scss';
import ValueEditorComponent, {
    ValueEditorBindings,
    ValueEditorOptions,
    ValueEditorValidations
} from '../../value-editor.component';
import {IAugmentedJQuery, IScope} from 'angular';
import AbstractValueEditor from '../abstract-value-editor';
import angular = require('angular');

const DEFAULT_OPTIONS: BooleanValueEditorOptions = {
    type: 'checkbox',
    trueValue: undefined,
    falseValue: undefined,
    nullAsIndeterminate: false
};

export type TBooleanValueEditorType = 'checkbox' | 'switch';

export class BooleanValueEditorComponentController<MODEL = boolean> extends AbstractValueEditor<MODEL, BooleanValueEditorOptions> {
    public inputElement: IAugmentedJQuery;

    /*@ngInject*/
    constructor($scope: IScope) {
        super($scope, DEFAULT_OPTIONS);
    }

    protected onOptionsChange(newOptions: BooleanValueEditorOptions, oldOptions: BooleanValueEditorOptions) {
        if (this.options.trueValue || this.options.falseValue) {
            this.ngModelController.$formatters.push(this.formatToCustomValue.bind(this));
            this.ngModelController.$parsers.push(this.parseFromCustomValue.bind(this));
        }

        if (this.options.nullAsIndeterminate) {
            this.ngModelController.$parsers.push(this.parseIndeterminate.bind(this));
            this.ngModelController.$formatters.push(this.formatIndeterminate.bind(this));
        }

        this.ngModelController.$processModelValue();
    }

    private formatToCustomValue(value: MODEL): boolean {
        if (value === this.options.trueValue && this.valueEditorController.options.trueValue !== undefined) {
            return true;
        }

        if (value === this.options.falseValue && this.valueEditorController.options.falseValue !== undefined) {
            return false;
        }

        return undefined;
    }

    private parseFromCustomValue(value: boolean): MODEL | boolean {
        if (value === true && this.valueEditorController.options.trueValue !== undefined) {
            return this.options.trueValue;
        }

        if (value === false && this.valueEditorController.options.falseValue !== undefined) {
            return this.options.falseValue;
        }

        return value;
    }

    private parseIndeterminate<T>(value: T): T {
        (this.inputElement[0] as HTMLInputElement).indeterminate = this.options.nullAsIndeterminate && value === null;

        return value;
    }

    private formatIndeterminate<T>(value: T): T {
        (this.inputElement[0] as HTMLInputElement).indeterminate = this.options.nullAsIndeterminate && value === null;

        return value;
    }
}

/**
 * @ngdoc component
 * @name booleanValueEditor
 * @module angularjs-value-editor
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
 */
export default class BooleanValueEditorComponent {
    public static componentName = 'booleanValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public templateUrl = require('./boolean.value-editor.tpl.pug');

    public controller = BooleanValueEditorComponentController;
}

/**
 * @ngdoc type
 * @name BooleanValueEditorOptions
 * @module angularjs-value-editor
 *
 * @property {string} [type=checkbox] Type of display: `'checkbox'` or `'switch'`.
 * @property [trueValue=undefined] Custom value if editor is `true`. If undefined, `true` is used.
 * @property [falseValue=undefined] Custom value if editor is `false`. If undefined, `false` is used.
 * @property {boolean} [nullAsIndeterminate=false] If true, `null` model value is displayed as indeterminate state.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 * Default value:
 * ```javascript
 *
 *  {
 *      type: 'checkbox',
 *      trueValue: undefined,
 *      falseValue: undefined,
 *      nullAsIndeterminate: false
 *  }
 * ```
 */
export interface BooleanValueEditorOptions extends ValueEditorOptions {
    type?: TBooleanValueEditorType;
    trueValue?: any;
    falseValue?: any;
    nullAsIndeterminate?: boolean;
}

export interface BooleanValueEditorBindings extends ValueEditorBindings<BooleanValueEditorOptions, ValueEditorValidations> {
}
