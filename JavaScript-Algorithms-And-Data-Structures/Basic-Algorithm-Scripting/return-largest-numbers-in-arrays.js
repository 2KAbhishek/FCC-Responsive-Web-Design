// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null));
// }

// function largestOfFour(arr, finalArr = []) {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
// }

function largestOfFour(arr) {
  let biggies = []
  for (let a of arr){
  biggies.push(Math.max(...a));
  }
  return biggies;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
