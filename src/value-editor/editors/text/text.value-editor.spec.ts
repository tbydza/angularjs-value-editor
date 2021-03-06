import valueEditorModule from '../../value-editor.module';
import * as angular from 'angular';
import ValueEditorMocker, {ScopeWithBindings} from '../../../../test/utils/value-editor-mocker';
import {TextValueEditorBindings} from './text.value-editor.component';
import 'ace-builds';
import objectContaining = jasmine.objectContaining;

describe('text-value-editor', () => {

    let valueEditorMocker: ValueEditorMocker<TextValueEditorBindings>;
    let $scope: ScopeWithBindings<string, TextValueEditorBindings>;

    beforeEach(() => {
        angular.mock.module(valueEditorModule);

        inject(/*@ngInject*/ ($compile, $rootScope) => {
            $scope = $rootScope.$new();
            valueEditorMocker = new ValueEditorMocker<TextValueEditorBindings>($compile, $scope);
        });
    });

    describe('type: text', () => {

        it('should change model on input', () => {
            valueEditorMocker.create('text');
            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe('hello');
        });

        it('should change value if model is changed', () => {
            valueEditorMocker.create('text');

            $scope.model = 'hello';
            $scope.$apply();

            const inputValue = valueEditorMocker.getInputElement<HTMLInputElement>().value;

            expect(inputValue).toBe('hello');
        });

        it('should have working required validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', validations: {required: true}}, true);

            valueEditorMocker.getInputElement<HTMLInputElement>().value = '';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({required: true});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working minlength validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', validations: {minlength: 3}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'h';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({minlength: true});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working maxlength validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', validations: {maxlength: 3}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({maxlength: true});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hel';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working pattern validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', validations: {pattern: '[0-9]*'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({pattern: true});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = '1234';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working input disabling', () => {
            valueEditorMocker.create('text', {editorName: 'text', isDisabled: true});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect(valueEditorMocker.getInputElement<HTMLInputElement>().disabled).toBe(true);
        });

        it('should display prefix and suffix', () => {
            const element = valueEditorMocker.create('text', {
                options: {
                    prefix: 'PREFIX',
                    suffix: 'SUFFIX'
                }
            });

            const prefixText = element.querySelector('.prefix').textContent;
            const suffixText = element.querySelector('.suffix').textContent;

            expect(prefixText).toBe('PREFIX');
            expect(suffixText).toBe('SUFFIX');
        });

        it('should add prefix and suffix to model', () => {
            const PREFIX = 'prefix';
            const SUFFIX = 'suffix';

            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {
                    type: 'text',
                    prefix: PREFIX,
                    suffix: SUFFIX,
                    includePrefixAndSuffixToModel: true
                }
            });

            const inputElement = valueEditorMocker.getInputElement<HTMLInputElement>();
            inputElement.value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe(`${PREFIX}hello${SUFFIX}`);
        });

        it('should parse prefix and suffix from model', () => {
            const PREFIX = 'prefix';
            const SUFFIX = 'suffix';

            $scope.model = `${PREFIX}hello${SUFFIX}`;

            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {
                    type: 'text',
                    prefix: PREFIX,
                    suffix: SUFFIX,
                    includePrefixAndSuffixToModel: true
                }
            });

            const inputElement = valueEditorMocker.getInputElement<HTMLInputElement>();
            valueEditorMocker.triggerHandlerOnInput('input');

            expect(inputElement.value).toBe(`hello`);
        });

        it('should have working trimming', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'text', trim: true}});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = '   hello  ';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe('hello');
        });

        it('should have working emptyAsNull option', () => {
            valueEditorMocker.create('text', {options: {emptyAsNull: true}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe('hello');

            valueEditorMocker.getInputElement<HTMLInputElement>().value = '';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBeNull();
        });

        it('should validate length including prefix and suffix if includePrefixAndSuffixToModel is set to true', () => {
            const PREFIX = '123';
            const SUFFIX = '456';

            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {
                    type: 'text',
                    prefix: PREFIX,
                    suffix: SUFFIX,
                    includePrefixAndSuffixToModel: true
                },
                validations: {
                    minlength: 9,
                    maxlength: 12
                }
            });

            const inputElement = valueEditorMocker.getInputElement<HTMLInputElement>();
            inputElement.value = '12';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({minlength: true});

            inputElement.value = '123456';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});

            inputElement.value = '1234567';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({maxlength: true});
        });

        it('should validate length except prefix and suffix if includePrefixAndSuffixToModel is set to false', () => {
            const PREFIX = '123';
            const SUFFIX = '456';

            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {
                    type: 'text',
                    prefix: PREFIX,
                    suffix: SUFFIX,
                    includePrefixAndSuffixToModel: false
                },
                validations: {
                    minlength: 3,
                    maxlength: 6
                }
            });

            const inputElement = valueEditorMocker.getInputElement<HTMLInputElement>();
            inputElement.value = '12';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({minlength: true});

            inputElement.value = '12345';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});

            inputElement.value = '1234567';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({maxlength: true});
        });

    });

    describe('type: textarea', () => {

        it('should be textarea input', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'textarea'}});
            const inputElement = valueEditorMocker.getInputElement<HTMLTextAreaElement>();

            expect(inputElement.tagName.toLowerCase()).toBe('textarea');
        });

        it('should change model on input', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'textarea'}});
            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe('hello');
        });

        it('should change value if model is changed', () => {
            valueEditorMocker.create('text');

            $scope.model = 'hello';
            $scope.$apply();

            const inputValue = valueEditorMocker.getInputElement<HTMLTextAreaElement>().value;

            expect(inputValue).toBe('hello');
        });

        it('should have working required validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'textarea'},
                validations: {required: true}
            });

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = '';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({required: true});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working minlength validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'textarea'},
                validations: {minlength: 3}
            });

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'h';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({minlength: true});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working maxlength validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'textarea'},
                validations: {maxlength: 3}
            });

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({maxlength: true});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hel';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working pattern validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'textarea'},
                validations: {pattern: '[0-9]*'}
            });

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            $scope.$apply();

            expect($scope.form.text.$error).toEqual({pattern: true});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = '1234';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working input disabling', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'textarea'}, isDisabled: true});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect(valueEditorMocker.getInputElement<HTMLTextAreaElement>().disabled).toBe(true);
        });

        it('should have working rows calculation', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'textarea'}});
            const inputElement = valueEditorMocker.getInputElement<HTMLTextAreaElement>();

            inputElement.value = 'There\nare\nsome\nrows';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect(inputElement.rows).toBe(4);
        });

        it('should have working emptyAsNull option', () => {
            valueEditorMocker.create('text', {options: {type: 'textarea', emptyAsNull: true}});

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBe('hello');

            valueEditorMocker.getInputElement<HTMLTextAreaElement>().value = '';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.model).toBeNull();
        });

    });

    describe('type: rich-textarea', () => {

        it('should be div with ace editor', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'rich-textarea'}});
            const inputElement = valueEditorMocker.getInputElement<HTMLTextAreaElement>();

            expect(inputElement.tagName.toLowerCase()).toBe('div');
            expect(inputElement.classList).toContain('ace-editor');
        });

        it('should change model on input', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'rich-textarea'}});

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hello');

            $scope.$apply();

            expect($scope.model).toBe('hello');
        });

        it('should change value if model is changed', () => {
            valueEditorMocker.create('text');

            $scope.model = 'hello';
            $scope.$apply();

            const inputValue = valueEditorMocker.getInputElement<HTMLTextAreaElement>().value;

            expect(inputValue).toBe('hello');
        });

        it('should have working required validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'rich-textarea'},
                validations: {required: true}
            });

            expect($scope.form.text.$error).toEqual({required: true});

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hello');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working minlength validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'rich-textarea'},
                validations: {minlength: 3}
            });

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('h');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({minlength: true});

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hello');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working maxlength validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'rich-textarea'},
                validations: {maxlength: 3}
            });

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hello');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({maxlength: true});

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hel');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working pattern validation', () => {
            valueEditorMocker.create('text', {
                editorName: 'text',
                options: {type: 'rich-textarea'},
                validations: {pattern: '[0-9]*'}
            });

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('hello');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({pattern: true});

            (window as any).ace.edit(valueEditorMocker.getInputElement()).setValue('1234');
            $scope.$apply();

            expect($scope.form.text.$error).toEqual({});
        });

        it('should have working input disabling', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'rich-textarea'}, isDisabled: true});

            const aceEditorTextarea = valueEditorMocker.getInputElement<HTMLDivElement>().querySelector('textarea');

            expect(aceEditorTextarea.attributes.getNamedItem('readonly')).not.toBe(null);

            $scope.isDisabled = false;
            $scope.$apply();

            expect(aceEditorTextarea.attributes.getNamedItem('readonly')).toBe(null);
        });

        it('should have working touched state', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'rich-textarea'}});

            const focusEvent = document.createEvent('HTMLEvents');
            focusEvent.initEvent('focus', true, false);

            valueEditorMocker.getInputElement<HTMLDivElement>().querySelector('textarea').dispatchEvent(focusEvent);

            expect($scope.form.text.$touched).toBe(false);

            const blurEvent = document.createEvent('HTMLEvents');
            blurEvent.initEvent('blur', true, false);

            valueEditorMocker.getInputElement<HTMLDivElement>().querySelector('textarea').dispatchEvent(blurEvent);

            expect($scope.form.text.$touched).toBe(true);
        });
    });

    describe('transition between types', () => {
        it('should keep disabled state', () => {
            valueEditorMocker.create('text', {editorName: 'text', isDisabled: true, options: {type: 'text'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect(valueEditorMocker.getInputElement<HTMLInputElement>().disabled).toBe(true);

            $scope.options = {type: 'textarea'};
            $scope.$apply();

            expect(valueEditorMocker.getInputElement().tagName.toLowerCase()).toBe('textarea');
            expect(valueEditorMocker.getInputElement<HTMLTextAreaElement>().disabled).toBe(true);

            $scope.options = {type: 'rich-textarea'};
            $scope.$apply();

            expect(valueEditorMocker.getInputElement().tagName.toLowerCase()).toBe('div');
            const aceEditorTextarea = valueEditorMocker.getInputElement<HTMLDivElement>().querySelector('textarea');
            expect(aceEditorTextarea.attributes.getNamedItem('readonly')).not.toBe(null);
        });

    });

    describe('type: email', () => {
        it('should be email input', () => {
            valueEditorMocker.create('text', {options: {type: 'email'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().type = 'email';

        });

        it('should have implicit email validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'email'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual(objectContaining({email: true}));

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'a@b.c';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });
    });

    describe('type: url', () => {
        it('should be url input', () => {
            valueEditorMocker.create('text', {options: {type: 'url'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().type = 'url';
        });

        it('should have implicit email validation', () => {
            valueEditorMocker.create('text', {editorName: 'text', options: {type: 'url'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'hello';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual(objectContaining({url: true}));

            valueEditorMocker.getInputElement<HTMLInputElement>().value = 'http://kpsys.cz';
            valueEditorMocker.triggerHandlerOnInput('input');

            expect($scope.form.text.$error).toEqual({});
        });

    });

    describe('type: tel', () => {
        it('should be tel input', () => {
            valueEditorMocker.create('text', {options: {type: 'tel'}});

            valueEditorMocker.getInputElement<HTMLInputElement>().type = 'tel';
        });
    });
});
