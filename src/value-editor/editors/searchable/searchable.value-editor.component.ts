import {ValueEditorBindings, ValueEditorValidations} from '../../kp-value-editor/kp-value-editor.component';
import * as angular from 'angular';
import {IInterpolateService, ITemplateCacheService, ITimeoutService} from 'angular';
import {
    SearchableValueEditorConfigurationService,
    SearchableValueEditorOptions
} from './searchable-value-editor-configuration.provider';
import {SearchableValueEditorLocalizationsService} from './searchable-value-editor-localization.provider';
import AbstractTemplateValueEditor from '../../abstract/abstract-template-value-editor';
import {PropertyChangeDetection} from '../../utils/equals';
import {TValueEditorType} from '../../typings';
import AbstractValueEditorComponent from '../../abstract/abstract-value-editor-component';
import {isInjectable} from '../../utils/injectables';
import IInjectorService = angular.auto.IInjectorService;

const TEMPLATE_NAME_PREFIX = 'value-editor.searchableValueEditor';

export class SearchableValueEditorComponentController<MODEL = any> extends AbstractTemplateValueEditor<any, SearchableValueEditorOptions<MODEL>> {
    private static readonly TEMPLATE_URL = require('./searchable.value-editor.tpl.pug');

    public searching: boolean = false;
    public editing: boolean = false;

    /*@ngInject*/
    constructor(searchableValueEditorConfigurationService: SearchableValueEditorConfigurationService<MODEL>,
                searchableValueEditorLocalizationsService: SearchableValueEditorLocalizationsService,
                $interpolate: IInterpolateService,
                $templateCache: ITemplateCacheService,
                public loadingSpinnerTemplateUrl: string,
                private $timeout: ITimeoutService,
                private $injector: IInjectorService) {
        super(
            SearchableValueEditorComponentController.TEMPLATE_URL,
            TEMPLATE_NAME_PREFIX,
            $interpolate,
            $templateCache,
            searchableValueEditorConfigurationService,
            searchableValueEditorLocalizationsService
        );
    }

    protected get emptyModel(): any {
        return null;
    }

    public get hasEditModelFunction(): boolean {
        return isInjectable(this.options.editModelFunction) || angular.isFunction(this.options.editModelFunction);
    }

    public async search() {
        this.asyncCall(() => this.searching = true);

        try {
            this.model = await this.$injector.invoke(this.options.searchModelFunction, null, {
                $model: this.model,
                $additionalParameters: this.options.additionalParameters
            });
        } finally {
            this.asyncCall(() => this.searching = false);
        }
    }

    public async edit() {
        this.asyncCall(() => this.editing = true);

        try {
            this.model = await this.$injector.invoke(this.options.editModelFunction, null, {
                $model: this.model,
                $additionalParameters: this.options.additionalParameters
            });
        } finally {
            this.asyncCall(() => this.editing = false);
        }
    }

    protected onOptionsChange(newOptions: SearchableValueEditorOptions<MODEL>, oldOptions, whatChanged: PropertyChangeDetection<SearchableValueEditorOptions<MODEL>>) {
        if (whatChanged.modelTemplate) {
            this.updateTemplate();
        }
    }

    protected getTemplateModel(): {} {
        return {
            modelTemplate: this.options.modelTemplate
        };
    }

    private asyncCall(func?: () => void) {
        this.$timeout(func ? func.bind(this) : /* istanbul ignore next */ () => void 0, 0);
    }
}

/**
 * @ngdoc component
 * @name searchableValueEditor
 * @module angularjs-value-editor.searchable
 *
 * @requires ng.type.ngModel.NgModelController
 * @requires component:kpValueEditor
 *
 * @description
 * Model type: `any`
 *
 * Value editor for searchable input.
 *
 * Supported options: {@link type:SearchableValueEditorOptions}
 *
 * Supported validations: {@link type:TextValueEditorValidations}
 *
 * @example
 * <example name="searchableValueEditorExample" module="searchableValueEditorExample" frame-no-resize="true">
 *     <file name="index.html">
 *         <main>
 *              <kp-value-editor type="'searchable'" ng-model="model" placeholder="Search some value..."></kp-value-editor>
 *              <div>Model: {{model}}</div>
 *         </main>
 *     </file>
 *     <file name="script.js">
 *         angular.module('searchableValueEditorExample', ['angularjs-value-editor'])
 *         .config(['searchableValueEditorConfigurationServiceProvider', (searchableValueEditorConfigurationServiceProvider) =>
 *              searchableValueEditorConfigurationServiceProvider.setConfiguration({
 *                  searchModelFunction: ['$timeout', ($timeout) => new Promise((resolve => $timeout(() => resolve('Some result'), 1500)))]
 *              })
 *         ]);
 *     </file>
 * </example>
 */
export default class SearchableValueEditorComponent extends AbstractValueEditorComponent {
    public static readonly componentName = 'searchableValueEditor';
    public static readonly valueEditorType: TValueEditorType = 'searchable';

    public template = AbstractTemplateValueEditor.COMPONENT_TEMPLATE;

    public controller = SearchableValueEditorComponentController;
}

export interface SearchableValueEditorBindings<MODEL> extends ValueEditorBindings<SearchableValueEditorOptions<MODEL>, ValueEditorValidations> {
}
