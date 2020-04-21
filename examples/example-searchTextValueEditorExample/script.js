(function(angular) {
  'use strict';
angular.module('searchTextValueEditorExample', ['angularjs-value-editor'])
 .controller('ctrl', class {
     requestFunction() {
         return new Promise((resolve) => {
             setTimeout(() => {
                 resolve('Generated')
             }, 1000);
         });
     }
 });
})(window.angular);