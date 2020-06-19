(function(angular) {
  'use strict';
angular.module('acceptableValueEditorExample', ['angularjs-value-editor'])
 .controller('demoController', ['acceptableValueEditorDefaultOptions', class {
     multiselectable;
     optionsTemplate;
     singleSelectedValueTemplate;
     multiSelectedValueTemplate;
     searchable;
     reorderable;
     showFirstCount;
     selectedFirst;
     sortModel;
     switchToCheckboxesThreshold;
     sortComparatorString = `(e1, e2) => ((e1 || {x: ''}).x || '').localeCompare((e2 || {x: ''}).x) * -1`;
     equalityComparatorString = '(e1, e2) => e1.x === e2.x';

     constructor(acceptableValueEditorDefaultOptions) {
         angular.merge(this, acceptableValueEditorDefaultOptions);
         this.acceptableValues = [{x: 'a'}, {x: 'b'}, {x: 'c'}, {x: 'd'}, {x: 'e'}, {x: 'f'}, {x: 'g'}, {x: 'h'}];
         this.evalComparators();
     }

     evalComparators() {
         let sortComparator = undefined;
         let equalityComparator = undefined;

         try {
             sortComparator = eval(this.sortComparatorString);
             equalityComparator = eval(this.equalityComparatorString);
         } catch (e) {
             console.error('Invalid syntax');
         }

         this.sortComparator = sortComparator;
         this.equalityComparator = equalityComparator;
     }
 }]);
})(window.angular);