(function(angular) {
  'use strict';
luxon.Settings.defaultLocale = luxon.DateTime.local().resolvedLocaleOpts().locale;
angular.module('dateValueEditorExample', ['angularjs-value-editor']);
})(window.angular);