declare global {
    interface Window {
        jQuery: JQueryStatic;
        $: JQueryStatic;
    }
}

import * as jQuery from 'jquery';
import 'angular';
import register from '@kpsys/angularjs-register';
import './required-vendors';
import valueEditorModule from '../dist/angularjs-value-editor';
import '../dist/angularjs-value-editor.css';
import DemoController from './demo.controller';

window.$ = window.jQuery = jQuery;

register('app', [valueEditorModule])
    .controller('demoController', DemoController);
