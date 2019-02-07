import NgModelConnector from '../ng-model-connector';
import ValueEditorComponent, {
    ValueEditorBindings,
    ValueEditorComponentController,
    ValueEditorOptions,
    ValueEditorValidations
} from '../../value-editor.component';
import {IPostLink} from 'angular';

const DEFAULT_OPTIONS: TextValueEditorOptions = {
    type: 'text'
};

export class TextValueEditorComponentController extends NgModelConnector<string> implements IPostLink {
    public valueEditorController: ValueEditorComponentController<string, TextValueEditorOptions, TextValueEditorValidations>;
    public options: TextValueEditorOptions;

    public $postLink(): void {
        this.options = Object.assign({}, DEFAULT_OPTIONS, this.valueEditorController.options);
    }

    /**
     * Get number of rows between nim and max range.
     */
    public getNumberOfRows(minRows: number = 1, maxRows: number = 10): number {
        if (this.model) {
            return Math.min(Math.max(this.countRowsInString(this.model), minRows), maxRows);
        }

        return minRows;
    }

    /**
     * Try to count rows in string. if string is without `\n`, it tries to estimate number of rows. Always return value greater then 0.
     */
    private countRowsInString(str: string = ''): number {
        const rowsCount = ((str.match(/\n/g) || []).length) + 1;

        if (rowsCount === 1) {
            return Math.floor(str.length / 60) + 1;
        }

        return rowsCount;
    }
}

/**
 * @ngdoc component
 * @name textValueEditor
 * @module angularjs-value-editor
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Value editor for text input.
 * Depending on type are four versions:
 * - `text`
 *
 *      Common text input.
 *
 * - `textarea`
 *
 *      Textarea value editor.
 *
 * - `rich-textarea`.
 *
 *      [ACE editor](https://ace.c9.io).
 *
 * @example
 * <example name="textValueEditorExample" module="textValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'text'" ng-model="model"></kp-value-editor>
 *              <div>{{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('textValueEditorExample', ['angularjs-value-editor']);
 *     </file>
 * </example>
 */
export default class TextValueEditorComponent {
    public static componentName = 'textValueEditor';

    public require = {
        ngModelController: 'ngModel',
        valueEditorController: `^${ValueEditorComponent.componentName}`
    };

    public templateUrl = require('./text.value-editor.tpl.pug');

    public controller = TextValueEditorComponentController;
}

type TTextValueEditorType = 'text' | 'textarea' | 'rich-textarea';

export interface TextValueEditorOptions extends ValueEditorOptions {
    type?: TTextValueEditorType;
}

export interface TextValueEditorValidations extends ValueEditorValidations {
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
}

export interface TextValueEditorBindings extends ValueEditorBindings<TextValueEditorOptions, TextValueEditorValidations> {
}

/**
 * @ngdoc type
 * @name TextValueEditorOptions
 * @module angularjs-value-editor
 *
 * @property {string} type Input type. Possible values are `text`, `number`, `textarea`, `rich-textarea`.
 *
 * @description
 * Extends {@link type:ValueEditorOptions}
 */

/**
 * @ngdoc type
 * @name TextValueEditorValidations
 * @module angularjs-value-editor
 *
 * @property {number=} minlength Min length.
 * @property {number=} maxlength Max length.
 * @property {string=} pattern Regexp pattern.
 *
 * @description
 * Extends {@link type:ValueEditorValidations}
 */
