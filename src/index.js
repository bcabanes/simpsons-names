var uniqueRandomArray = require('unique-random-array');
var simpsonsNames = require('./simpsons-names.json');

module.exports = {
  all: simpsonsNames,
  random: uniqueRandomArray(simpsonsNames)
};