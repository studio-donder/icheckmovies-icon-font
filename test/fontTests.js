var should = require('should');
var fs = require('fs');
var fontBuildDirectoryPath = 'build/fonts/';
var fontFileName = 'iCheckMovies';

describe('Font creation tests', function () {
    describe('font files', function () {
        it('.eot file should exist', function () {
            fs.exists(fontBuildDirectoryPath + fontFileName + '.eot', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.svg file should exist', function () {
            fs.exists(fontBuildDirectoryPath + fontFileName + '.svg', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.ttf file should exist', function () {
            fs.exists(fontBuildDirectoryPath + fontFileName + '.ttf', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.woff file should exist', function () {
            fs.exists(fontBuildDirectoryPath + fontFileName + '.woff', function (fileExists) {
                fileExists.should.be.true;
            });
        })

        it('.eot size should be more than 0', function () {
            fs.stat(fontBuildDirectoryPath + fontFileName + '.eot', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })

        it('.svg size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.svg', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })

        it('.ttf size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.ttf', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })

        it('.woff size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.woff', function (err, stats) {
                stats.size.should.be.above(0);
            });
        })
    })
})