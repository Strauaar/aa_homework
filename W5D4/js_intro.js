// function madLib(verb, adj, noun) {
//   console.log(`We shall ${verb} the ${adj} ${noun}`)
// }
//
// madLib('make', 'best', 'guac');

// function isSubstring(searchString, subString) {
//   console.log(searchString.includes(subString));
// }
//
// isSubstring("the string", "the");

// function fizzBuzz(array) {
//   var new_arr = []
//   for (var i = 0; i < array.length; i++) {
//     if ( (array[i] % 3 == 0 || array[i] % 5 == 0) && !(array[i] % 3 == 0 && array[i] % 5 == 0) ) {
//       new_arr.push(array[i]);
//     }
//
//     else {
//         continue;
//       }
//   };
//
//   return new_arr;
// }
//
// console.log(fizzBuzz([3,5,9,10,7,15]))

// function isPrime(num) {
//   // console.log(num);
//   if (num == 2) {
//     return true;
//   }
//   if (num == 1) {
//     return false;
//   }
//   for (var i = 2; i < num; i++ ) {
//     if (num % i == 0) {
//       return false;
//     } else {
//
//     }
//   };
//   return true;
// }
//
// // console.log(isPrime(1));
//
// function sumOfNPrimes(num) {
//   var array = []
//   var sum = 0;
//   var i = 1;
//   while (array.length < num) {
//     if (isPrime(i)) {
//       sum += i;
//       array.push(i)
//     } else {
//
//     }
//     i++;
//   };
//   return sum;
// }
//
// console.log(sumOfNPrimes(4));

//Phase II

// function titleize(array, func) {
//   var names = array.map(func);
// }
//
// titleize(["Mary", "Brian", "Leo"], (name) =>{ console.log(`Mx. ${name}`) });

function Elephant(name, height, array) {
  this.name = name;
  this.height = height;
  this.array = array;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes phrrRRR`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.array.push(trick);
}

Elephant.prototype.play = function() {
  const num = Math.round(Math.random() * (this.array.length));
  console.log(`${this.name} is ${this.array[num]}`)
}

const phil = new Elephant('Phil', 72, ['playing the trumpet', 'running in circles', 'eating nuts']);

// phil.trumpet
// phil.addTrick('New Trick');
// phil.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(name) {
  console.log(`${name} is trotting by!`);
}

// herd.forEach(function(elephant) {
//   paradeHelper(elephant.name)
// });

function dinerBreakfast() {
  var whole_order = 'I\'d like scrambled eggs';
  return function add_order(order) {
    whole_order += ' and ' + order;
    console.log(`${whole_order} please.`);
  };

};

let bfastOrder = dinerBreakfast();

bfastOrder("chocolate chip pancakes");
bfastOrder("pie");











//
