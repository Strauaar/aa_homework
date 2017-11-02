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

function isPrime(num) {
  // console.log(num);
  if (num == 2) {
    return true;
  }
  if (num == 1) {
    return false;
  }
  for (var i = 2; i < num; i++ ) {
    if (num % i == 0) {
      return false;
    } else {

    }
  };
  return true;
}

// console.log(isPrime(1));

function sumOfNPrimes(num) {
  var array = []
  var sum = 0;
  var i = 1;
  while (array.length < num) {
    if (isPrime(i)) {
      sum += i;
      array.push(i)
    } else {

    }
    i++;
  };
  return sum;
}

console.log(sumOfNPrimes(4));
