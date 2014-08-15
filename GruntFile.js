module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            clean: [
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

        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/styles',
                options: {
                    htmlDemo: false,
                    engine: 'node',
                    font: 'iCheckMovies',
                    hashes: false,
                    relativeFontPath: '@{icm-icon-font-path}@{icm-icon-font-name}',
                    startCodepoint: 0xE001,
                    stylesheet: 'less',
                    syntax: 'bootstrap',
                    template: 'templates/less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.task.registerTask('default', [
        'clean:clean',
        'webfont:icons',
        'less:normal',
        'less:minified'
    ]);

    grunt.task.registerTask('test', [
        'clean:clean',
        'webfont:icons',
        'less:normal',
        'less:minified',
        'mochaTest:test'
    ]);
};