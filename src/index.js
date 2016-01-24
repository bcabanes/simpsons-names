import uniqueRandomArray from 'unique-random-array';
import simpsonsNames from './simpsons-names.json';

var getRandomItem = uniqueRandomArray(simpsonsNames);

module.exports = {
  all: simpsonsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }

  var randomItems = [];
  for (var i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}