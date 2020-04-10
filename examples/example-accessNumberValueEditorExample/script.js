(function(angular) {
  'use strict';
angular.module('accessNumberValueEditorExample', ['angularjs-value-editor'])
 .config((accessNumberValueEditorConfigurationServiceProvider) => accessNumberValueEditorConfigurationServiceProvider.setConfiguration({
     dataSource: () => Promise.resolve(['one', 'two', 'three'])
 }));
})(window.angular);