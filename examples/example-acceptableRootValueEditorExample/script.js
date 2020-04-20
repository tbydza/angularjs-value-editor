(function(angular) {
  'use strict';
angular.module('acceptableRootValueEditorExample', ['angularjs-value-editor'])
 .controller('ctrl', class {
     acceptableValue = {
         text: '0',
         children: [
             {
                 text: '1'
             },
             {
                 text: '2',
                 children: [
                     {
                         text: '2-1'
                     },
                     {
                         text: '2-2'
                     }
                 ]
             }
         ]
     };
 });
})(window.angular);