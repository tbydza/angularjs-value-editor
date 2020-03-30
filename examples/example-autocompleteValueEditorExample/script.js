(function(angular) {
  'use strict';
angular.module('autocompleteValueEditorExample', ['angularjs-value-editor'])
.controller('demoController', ['$timeout', class {

constructor($timeout) {
    this.$timeout = $timeout;
}

items = [
       'one',
       'two',
       'three',
       'four'
   ];

   dataSource = () => new Promise((resolve) => this.$timeout(resolve(this.items), 1000));
}]);
})(window.angular);