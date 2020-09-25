// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(Boolean);
// }

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

function destroyer(arr, ...targets) {
  return arr.filter(elem => ![...targets].includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
