var should = require('should');
var fs = require('fs');
var styleBuildDirectoryPath = 'build/styles/';
var styleFileName = 'iCheckMovies';

describe('Style creation tests', function () {
    describe('style file', function () {
        it('.css file should exist', function () {
            fs.exists(styleBuildDirectoryPath + styleFileName + '.css', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.less file should exist', function () {
            fs.exists(styleBuildDirectoryPath + styleFileName + '.less', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.min.css file should exist', function () {
            fs.exists(styleBuildDirectoryPath + styleFileName + '.min.css', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.css size should be more than 0', function () {
            fs.stat(styleBuildDirectoryPath + styleFileName + '.css', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })

        it('.less size should be more than 0', function () {
            fs.stat(styleBuildDirectoryPath + styleFileName + '.less', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })

        it('.min.css size should be more than 0', function () {
            fs.stat(styleBuildDirectoryPath + styleFileName + '.min.css', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })
    })
})