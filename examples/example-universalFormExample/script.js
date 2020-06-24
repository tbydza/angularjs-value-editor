(function(angular) {
  'use strict';
luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
angular.module('universalFormExample', ['angularjs-value-editor'])
 .controller('controller', class {
     formSettings = {
         header: '<h3>Header</h3>',
         footer: '<hr><h4>Footer</h4>',
         fields: [
             {
                 label: 'Text',
                 fieldName: 'text',
                 editor: {
                     type: 'text',
                     editorName: 'text',
                     validations: {
                         required: true
                     }
                 }
             },
             {
                 label: 'Number',
                 fieldName: 'number',
                 editor: {
                     type: 'number',
                     editorName: 'number'
                 }
             },
             {
                 label: 'Data',
                 fieldName: 'date',
                 editor: {
                     type: 'list',
                     editorName: 'dates',
                     options: {
                         subEditorType: 'date',
                         newItemPrototype: '',
                         subEditorValidations: {
                             required: true
                         }
                     },
                     validations: {
                         required: true
                     }
                 }
             }
         ]
     };
 });
})(window.angular);