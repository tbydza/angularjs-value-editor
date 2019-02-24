import './boolean.value-editor.scss';
import ValueEditorComponent, {
    ValueEditorBindings,
    ValueEditorOptions,
    ValueEditorValidations
} from '../../value-editor.component';
import {IOnInit, IScope} from 'angular';
import AbstractValueEditor from '../abstract-value-editor';
import angular = require('angular');

const DEFAULT_OPTIONS: BooleanValueEditorOptions = {
    type: 'checkbox',
    trueValue: true,
    falseValue: false
};

export type TBooleanValueEditorType = 'checkbox' | 'switch';

export class BooleanValueEditorComponentController<MODEL = boolean> extends AbstractValueEditor<MODEL, BooleanValueEditorOptions> implements IOnInit {

    /*@ngInject*/
    constructor($scope: IScope) {
        super($scope, DEFAULT_OPTIONS);
    }

    public $onInit(): void {
        super.$onInit();

        if (this.valueEditorController.options && (this.valueEditorController.options.trueValue || this.valueEditorController.options.falseValue)) {
            this.ngModelController.$formatters.push(this.formatValue.bind(this));
            this.ngModelController.$parsers.push(this.parseValue.bind(this));
        }
    }

    protected onOptionsChange(newOptions: BooleanValueEditorOptions, oldOptions: BooleanValueEditorOptions) {
        //
    }

    private parseValue(value: boolean): MODEL | boolean {
        if (value === true && this.valueEditorController.options.trueValue !== undefined) {
            return this.options.trueValue;
        }

        if (value === false && this.valueEditorController.options.falseValue !== undefined) {
            return this.options.falseValue;
        }

        return value;
    }

    private formatValue(value: MODEL): boolean {
        if (value === this.options.trueValue && this.valueEditorController.options.trueValue !== undefined) {
            return true;
        }

        if (value === this.options.falseValue && this.valueEditorController.options.falseValue !== undefined) {
            return false;
        }

        return undefined;
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
 * @property {string=} type Type of display: `'checkbox'` or `'switch'`.
 * @property [trueValue] Custom value if editor is `true`.
 * @property [falseValue] Custom value if editor is `false`.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 * Default value:
 * ```javascript
 *  {
 *      type: 'checkbox',
 *      trueValue: true,
 *      falseValue: false
 *  }
 * ```
 */
export interface BooleanValueEditorOptions extends ValueEditorOptions {
    type?: TBooleanValueEditorType;
    trueValue?: any;
    falseValue?: any;
}

export interface BooleanValueEditorBindings extends ValueEditorBindings<BooleanValueEditorOptions, ValueEditorValidations> {
}
