// function dropElements(arr, func) {
//   return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
// }

// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }

// function dropElements(arr, func, i = 0) {
//   return i < arr.length && !func(arr[i])
//     ? (dropElements(arr.slice(i + 1), func, i))
//     : arr;
// }

function dropElements(arr, func) {
   let len = arr.length;
   for (let i = 0; i < len; i++){
     if (func(arr[0])){
       return arr;
     }
    arr.shift();
   }
   return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
