var should = require('should');
var fs = require('fs');
var fontBuildDirectoryPath = 'build/fonts/';
var fontFileName = 'iCheckMovies';

describe('Font creation tests', function () {
    describe('font files', function () {
        it('.eot file should exist', function () {
            fs.existsSync(fontBuildDirectoryPath + fontFileName + '.eot').should.be.true;
        })

        it('.svg file should exist', function () {
            fs.existsSync(fontBuildDirectoryPath + fontFileName + '.svg').should.be.true;
        })

        it('.ttf file should exist', function () {
            fs.existsSync(fontBuildDirectoryPath + fontFileName + '.ttf').should.be.true;
        })

        it('.woff file should exist', function () {
            fs.existsSync(fontBuildDirectoryPath + fontFileName + '.woff').should.be.true;
        })

        it('.eot size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.eot').size.should.be.above(0);
        })

        it('.svg size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.svg').size.should.be.above(0);
        })

        it('.ttf size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.ttf').size.should.be.above(0);
        })

        it('.woff size should be more than 0', function () {
            fs.statSync(fontBuildDirectoryPath + fontFileName + '.woff').size.should.be.above(0);
        })
    })
})