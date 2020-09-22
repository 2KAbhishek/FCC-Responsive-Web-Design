// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }

// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((a, b) => a - b)
//     .indexOf(num);
// }

// function getIndexToIns(arr, num) {
//   var index = arr
//     .sort((curr, next) => curr - next)
//     .findIndex(currNum => num <= currNum);
//   return index === -1 ? arr.length : index;
// }

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
