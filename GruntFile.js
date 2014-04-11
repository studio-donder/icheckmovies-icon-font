module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'build/fonts'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
};