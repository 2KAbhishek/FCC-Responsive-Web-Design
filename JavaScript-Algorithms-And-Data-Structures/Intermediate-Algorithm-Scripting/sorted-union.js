// function uniteUnique(arr) {
//   var args = Array.prototype.slice.call(arguments);
  
//   return args.reduce(function(arrA, arrB) {
//     return arrA.concat(
//       arrB.filter(function(i) {
//         return arrA.indexOf(i) === -1;
//       })
//     );
//   });
// }

// function uniteUnique() {
//   var concatArr = [];
//   var i = 0;
//   while (arguments[i]) {
//     concatArr = concatArr.concat(arguments[i]);
//     i++;
//   }
//   uniqueArray = concatArr.filter(function(item, pos) {
//     return concatArr.indexOf(item) == pos;
//   });
//   return uniqueArray;
// }

// function uniteUnique(...arrays) {
//   const flatArray = [].concat(...arrays);
//   return [...new Set(flatArray)];
// }

function uniteUnique(arr) {
  let outArr = []
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!outArr.includes(arguments[i][j]))
      // if (outArr.indexOf(arguments[i][j]) == -1)
        outArr.push(arguments[i][j]);
    }
  }
  return outArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
