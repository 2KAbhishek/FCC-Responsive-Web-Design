// const sumAll = arr => {
//   const startNum = arr[0];
//   const endNum = arr[1];

//   // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
//   // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//   const numCount = Math.abs(startNum - endNum) + 1;

//   // Using Arithmetic Progression summing formula
//   const sum = ((startNum + endNum) * numCount) / 2;
//   return sum;
// }

// function sumAll(arr) {
//   var sum = 0;
//   for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumAll([ first, last ] ) {
//  const step = first - last < 0 ? 1 : -1;
//  return first !== last
//    ? first + sumAll([ first + step, last ])
//    : first;
// }

function sumAll(arr) {
  // var max = Math.max(arr[0], arr[1]);
  // var min = Math.min(arr[0], arr[1]);
  let smaller = arr[0] < arr[1] ? arr[0] : arr[1];
  let larger = arr[1] > arr[0] ? arr[1] : arr[0];
  let sum = 0;

  for (let i = smaller; i <= larger; i++){
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
