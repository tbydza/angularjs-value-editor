(function(angular) {
  'use strict';
luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
angular.module('objectValueEditorExample', ['angularjs-value-editor'])
 .config(['objectValueEditorConfigurationServiceProvider', function(objectValueEditorConfigurationServiceProvider) {
     objectValueEditorConfigurationServiceProvider.setConfiguration({
         fields: [
             {
                 label: 'Text',
                 fieldName: 'text',
                 editor: {
                     type: 'text',
                     editorName: 'texttext'
                 }
             },
             {
                 label: 'Number',
                 fieldName: 'number',
                 editor: {
                     type: 'number',
                 }
             },
             {
                 label: 'Data',
                 fieldName: 'dates',
                 editor: {
                     type: 'list',
                     editorName: 'dates',
                     options: {
                         subEditorType: 'date',
                         newItemPrototype: ''
                     }
                 }
             }
         ]
     });
 }]);
})(window.angular);