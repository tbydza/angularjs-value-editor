import 'angular';
import 'ace-builds';
import '../dist/angularjs-value-editor.css';
import register from '@kpsys/angularjs-register';
import valueEditorModule from '../dist/angularjs-value-editor';
import DemoController from './demo.controller';

register('app', [valueEditorModule])
    .controller('demoController', DemoController);
