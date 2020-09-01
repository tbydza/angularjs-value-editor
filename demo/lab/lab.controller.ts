import {ValueEditorValidations} from '../../src/value-editor/kp-value-editor/kp-value-editor.component';

export default class LabController {
    public static readonly controllerName = 'labController';

    public model = {
        personDegree: '',
        personSuffixDegree: '',
        personFirstName: 'First name',
        personLastName: 'Last name',
        personBirthDate: undefined,
        emails: [{value: 'em@i.l'}],
        phoneNumbers: [{value: '609112567'}],
        username: 'Nasername',
        newPassword: 'hesloheslo'
    };

    public options = {
        'id': null,
        'text': 'Registrace',
        'fields': [{
            'label': 'Datum narození',
            'fieldName': 'personBirthDate',
            'editor': {
                'type': 'date'
            }
        }]
    };

    public validations = {
        async: {
            sendWholeForm: true
        }
    } as ValueEditorValidations;
};
