module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            clean: [
                'build/fonts',
                'build/styles'
            ]
        },

        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'build/fonts',
                destCss: 'build/styles',
                options: {
                    font: 'iCheckMovies',
                    hashes: false,
                    syntax: 'bootstrap',
                    template: 'templates/less',
                    stylesheet: 'less',
                    relativeFontPath: '@{icm-icon-font-path}@{icm-icon-font-name}',
                    htmlDemo: false
                }
            }
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

        mochacov: {
            coverage: {
                options: {
                    coveralls: true
                }
            },
            test: {
                options: {
                    reporter: 'spec'
                }
            },
            options: {
                files: 'test/*.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-mocha-cov');

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
        'mochacov:test'
    ]);

    grunt.task.registerTask('travis', [
        'mochacov:coverage'
    ]);
};