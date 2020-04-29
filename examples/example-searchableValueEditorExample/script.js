(function(angular) {
  'use strict';
angular.module('searchableValueEditorExample', ['angularjs-value-editor'])
.config(['searchableValueEditorConfigurationServiceProvider', (searchableValueEditorConfigurationServiceProvider) =>
     searchableValueEditorConfigurationServiceProvider.setConfiguration({
         searchModelFunction: ['$timeout', ($timeout) => new Promise((resolve => $timeout(() => resolve('Some result'), 1500)))]
     })
]);
})(window.angular);