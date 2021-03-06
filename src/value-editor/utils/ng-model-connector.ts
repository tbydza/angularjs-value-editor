import {INgModelController, IOnInit} from 'angular';

/**
 * Connects outer required ngModel with inner ngModel
 */
export default class NgModelConnector<MODEL = any> implements IOnInit {
    protected ngModelController: INgModelController;
    private modelValue: MODEL;

    public $onInit(): void {
        this.ngModelController.$render = () => {
            this.modelValue = this.ngModelController.$viewValue;
        };
    }

    public get model(): MODEL {
        return this.modelValue;
    }

    public set model(value: MODEL) {
        this.modelValue = value;
        this.ngModelController.$setViewValue(this.modelValue);
    }
}
