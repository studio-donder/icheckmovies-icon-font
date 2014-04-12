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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webfont');
};