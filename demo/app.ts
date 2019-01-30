import 'angular';
import register from 'angularjs-register';
// @ts-ignore
import valueEditorModule from '../dist/angularjs-value-editor';

import DemoController from './demo.controller';

register('app', [valueEditorModule])
    .controller('demoController', DemoController);
