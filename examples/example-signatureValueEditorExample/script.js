(function(angular) {
  'use strict';
angular.module('signatureValueEditorExample', ['angularjs-value-editor'])
 .config((signatureValueEditorConfigurationServiceProvider) => signatureValueEditorConfigurationServiceProvider.setConfiguration({
     dataSource: () => Promise.resolve(['one', 'two', 'three'])
 }));
})(window.angular);