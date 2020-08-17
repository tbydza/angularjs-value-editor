(function(angular) {
  'use strict';
angular.module('rangeValueEditorExample', ['angularjs-value-editor'])
 .controller('controller', class {
     options = {
         currentValueTemplate: `
             <input type="number" ng-model="$from" ng-change="$setFrom($from)" min="{{$options.min}}" max="{{$options.max}}">
             -
             <input type="number" ng-model="$to" ng-change="$setTo($to)" min="{{$options.min}}" max="{{$options.max}}">
         `
     };
 });
})(window.angular);