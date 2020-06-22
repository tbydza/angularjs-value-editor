(function(angular) {
  'use strict';
function request($timeout) {
    return new Promise((resolve) => {
         $timeout(() => {
             resolve('Generated')
         }, 1000);
     })
}
request.$inject = ['$timeout'];

angular.module('cardNumberValueEditorExample', ['angularjs-value-editor'])
 .controller('ctrl', function() {
     return {requestFunction: request}
 });
})(window.angular);