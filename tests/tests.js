var assert = require('assert');
var hello = require('../lib/hello');

describe('hello', function(){
    it('says hello world', function(done){
        assert.equal(hello(), 'hello world');
        setTimeout(done, 400);
    });
    it('says hello to person', function(done){
        assert.equal(hello('Bob'), 'hello Bob');
        setTimeout(done, 400);
    });
});
