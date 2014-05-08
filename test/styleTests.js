var should = require('should');
var fs = require('fs');
var styleBuildDirectoryPath = 'build/styles/';
var styleFileName = 'iCheckMovies';

describe('Style creation tests', function () {
    describe('style file', function () {
        it('.css file should exist', function () {
            fs.existsSync(styleBuildDirectoryPath + styleFileName + '.css').should.be.true;
        })

        it('.less file should exist', function () {
            fs.existsSync(styleBuildDirectoryPath + styleFileName + '.less').should.be.true;
        })

        it('.min.css file should exist', function () {
            fs.existsSync(styleBuildDirectoryPath + styleFileName + '.min.css').should.be.true;
        })

        it('.css size should be more than 0', function () {
            fs.statSync(styleBuildDirectoryPath + styleFileName + '.css').size.should.be.above(0);
        })

        it('.less size should be more than 0', function () {
            fs.statSync(styleBuildDirectoryPath + styleFileName + '.less').size.should.be.above(0);
        })

        it('.min.css size should be more than 0', function () {
            fs.statSync(styleBuildDirectoryPath + styleFileName + '.min.css').size.should.be.above(0);
        })
    })
})