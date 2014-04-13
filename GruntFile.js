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
            beautyfied: {
                options: {
                    paths: ["build/styles"],
                    cleancss: true
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-webfont');

    grunt.task.registerTask('build', [
        'clean:clean',
        'webfont:icons',
        'less:beautyfied',
        'less:minified'
    ]);
};