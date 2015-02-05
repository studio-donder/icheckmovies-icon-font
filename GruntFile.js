module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            clean: [
                'temp',
                'build/fonts',
                'build/styles'
            ]
        },

        less: {
            normal: {
                options: {
                    paths: ["build/styles"],
                    cleancss: false
                },
                files: {
                    "build/styles/iCheckMovies.css": "build/styles/iCheckMovies.less"
                }
            },

            minified: {
                options: {
                    paths: ["build/styles"],
                    cleancss: true
                },
                files: {
                    "build/styles/iCheckMovies.min.css": "build/styles/iCheckMovies.less"
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            }
        },

        svgmin: {
            optimize: {
                files: [{
                    expand: true,
                    cwd: 'icons/',
                    src: ['**/*.svg'],
                    dest: 'temp/icons/'
                }]
            }
        },

        webfont: {
            icons: {
                src: 'temp/icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/styles',
                options: {
                    autoHint: true,
                    destHtml: 'demo/',
                    engine: 'node',
                    font: 'iCheckMovies',
                    hashes: false,
                    htmlDemo: true,
                    htmlDemoTemplate: 'templates/demo.html',
                    relativeFontPath: '@{icm-icon-font-path}@{icm-icon-font-name}',
                    startCodepoint: 0xE001,
                    stylesheet: 'less',
                    syntax: 'bootstrap',
                    template: 'templates/less.css',
                    types: 'eot,woff,ttf,svg'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-webfont');

    grunt.task.registerTask('default', [
        'clean:clean',
        'svgmin:optimize',
        'webfont:icons',
        'less:normal',
        'less:minified'
    ]);

    grunt.task.registerTask('test', [
        'clean:clean',
        'svgmin:optimize',
        'webfont:icons',
        'less:normal',
        'less:minified',
        'mochaTest:test'
    ]);
};