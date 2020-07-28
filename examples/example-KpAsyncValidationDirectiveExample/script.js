(function(angular) {
  'use strict';
angular.module('KpAsyncValidationDirectiveExample', ['angularjs-value-editor'])
 .config(['kpAsyncValidationServiceProvider', function(kpAsyncValidationServiceProvider) {
     kpAsyncValidationServiceProvider.setValidationFunction(['$model', '$additionalParameters', '$timeout', function($model, $additionalParameters, $timeout) {
         return new Promise((resolve, reject) => {
             const delay = (Math.round(Math.random() * 1000) + 500);
             const yesNo = Math.round(Math.random() * 100) % 2 === 0;

             const result = yesNo ? resolve : reject.bind(null, `Sybila said that ${($model || '').length !== 0 ? $model : '<empty>'} is invalid...`);

             $timeout(result, delay);
         });
     }]);
 }]);
})(window.angular);