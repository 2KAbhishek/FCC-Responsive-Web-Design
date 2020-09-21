// function findElement(arr, func) {
//   return arr.find(func);
// }

// function findElement(arr, func) {
//   return arr[arr.map(func).indexOf(true)];
// }

function findElement(arr, func) {
  for (let num of arr){
    if (func(num)) {
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
