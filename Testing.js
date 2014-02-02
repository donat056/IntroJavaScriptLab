/**
 * Created by donat056 on 2/1/14.
 */

var assert = require("assert");
var countCharacters = require('./Functions').countCharacters;
var changeFont = require('./Functions').changeFont;
var makeEdition = require('./Functions').makeEdition;
var highlight = require('./Functions').highlight;
var changeColor = require('./Functions').changeColor;

describe('Create paragraph', function(){
    describe('test 1', function(){
        it('should create a paragraph with given text', function(){
            assert.equal(createParagraph("Blah"), "<p>Blah</p>");
        })
    });

    describe('testSave', function(){
        it('should save the given text', function(){
            var saved = makeEdition();
            saved.save("Blah");
            assert.equal(saved.getArray(0), "Blah");
        })
    });

    describe('testUndo', function(){
        it('should revert to last save', function(){
            var saved = makeEdition();
            saved.save("Blah");
            saved.save("BLAHH");
            assert.equal(saved.getArray(1), "BLAHH");
            var old = saved.undo();
            assert.equal(old, "BLAHH");
            var older = saved.undo();
            assert.equal(older, "Blah");
            var oldest = saved.undo();
            assert.equal(oldest, null);
        })
    });

    describe('countCharacters', function(){
        describe('countTest', function(){
            it('Should count number of characters', function(){
                assert.equal(countCharacters("I have characters"), "17");
            })
        })
    });

    describe('countCharacters', function(){
        describe('emptyCountTest', function(){
            it('Should count number of characters of empty', function(){
                assert.equal(countCharacters(""), "0");
            })
        })
    });

    describe('countCharacters', function(){
        describe('spaceCountTest', function(){
            it('Should count number of characters of a space', function(){
                assert.equal(countCharacters(" "), "1");
            })
        })
    });

});