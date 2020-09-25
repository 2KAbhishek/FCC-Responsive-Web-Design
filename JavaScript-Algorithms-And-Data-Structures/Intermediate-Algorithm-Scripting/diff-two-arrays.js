// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }

function diffArray(arr1, arr2) {
  return arr1
  .filter(elem => arr2.indexOf(elem) === -1)
  .concat(arr2.filter(elem => arr1.indexOf(elem) === -1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
