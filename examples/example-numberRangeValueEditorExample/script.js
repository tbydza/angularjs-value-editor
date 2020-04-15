(function(angular) {
  'use strict';
angular.module('numberRangeValueEditorExample', ['angularjs-value-editor'])
 .config((numberRangeValueEditorConfigurationServiceProvider) => numberRangeValueEditorConfigurationServiceProvider.setConfiguration({
     dataSource: () => Promise.resolve(['one', 'two', 'three'])
 }));
})(window.angular);