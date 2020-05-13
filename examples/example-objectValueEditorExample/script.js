(function(angular) {
  'use strict';
luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
angular.module('objectValueEditorExample', ['angularjs-value-editor'])
 .config(['objectValueEditorConfigurationServiceProvider', function(objectValueEditorConfigurationServiceProvider) {
     objectValueEditorConfigurationServiceProvider.setConfiguration({
         fields: [
             {
                 label: 'Text',
                 type: 'text',
                 editorName: 'text'
             },
             {
                 label: 'Number',
                 type: 'number',
                 editorName: 'number'
             },
             {
                 label: 'Data',
                 type: 'list',
                 editorName: 'dates',
                 options: {
                     subEditorType: 'date',
                     newItemPrototype: ''
                 }
             }
         ]
     });
 }]);
})(window.angular);