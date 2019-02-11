module.exports = (grunt) => {
    const pkg = grunt.file.readJSON("package.json");

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
	                            `${process.env.EXAMPLES_SCRIPTS_URL_PREFIX || ''}/angularjs-value-editor.documentation.vendors.js`,
	                            `${process.env.EXAMPLES_SCRIPTS_URL_PREFIX || ''}/angularjs-value-editor.documentation.js`
                            ],
                            stylesheets: [
                                `${process.env.EXAMPLES_SCRIPTS_URL_PREFIX || ''}/angularjs-value-editor.documentation.css`
                            ]
                        }
                    }
                }],
                deploymentTarget: 'default'
            },
            api: {
                title: 'AngularJS Value Editor Doc',
                version: pkg.version,
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