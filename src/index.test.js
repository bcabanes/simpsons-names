var expect = require('chai').expect;
var simpsons = require('./index');

describe('simpsons-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(simpsons.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Homer J. Simpson`', function() {
      expect(simpsons.all).to.include('Homer J. Simpson');
    });
  });

  describe('random', function() {
    it('should return a random item from simpsons.all', function() {
      var randomItem = simpsons.random();
      expect(simpsons.all).to.include(randomItem);
    });
  });
});