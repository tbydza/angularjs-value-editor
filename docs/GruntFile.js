module.exports = (grunt) => {
    grunt.initConfig({
        'dgeni-alive': {
            options: {
                packages: [
                    'dgeni-packages/jsdoc',
                    'dgeni-packages/ngdoc',
                    'dgeni-packages/links',
                    'dgeni-packages/examples',
                    './packages/jsdoc-ext',
                    './packages/ngdoc-ext',
                    './packages/links-ext',
                    './packages/examples-ext'
                ],
                deployments: [{
                    name: 'default',
                    examples: {
                        commonFiles: {
                            scripts: [
	                            '/angularjs-value-editor.documentation.vendors.js',
	                            '/angularjs-value-editor.documentation.js'
                            ],
                            stylesheets: []
                        }
                    }
                }],
                deploymentTarget: 'default'
            },
            api: {
                title: 'AngularJS Value Editor Doc',
                version: '1.0',
                expand: false,
                dest: 'dist/docs',
                src: [
                    'dist/docs/angularjs-value-editor.documentation.js',
                    'src/**/*.ngdoc'
                ]
            }
        }
    });

    grunt.loadNpmTasks('dgeni-alive');

    grunt.registerTask('docs', ['dgeni-alive']);
};