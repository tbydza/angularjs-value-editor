(function(angular) {
  'use strict';
angular.module('indexSelectionValueEditorExample', ['angularjs-value-editor'])
.controller('demoController', class {
     items = [
       {
           id: 1,
           text: 'one'
       },
       {
           id: 2,
           text: 'two'
       },
       {
           id: 3,
           text: 'three'
       },
       {
           id: 4,
           text: 'four'
       }
   ];
});
})(window.angular);