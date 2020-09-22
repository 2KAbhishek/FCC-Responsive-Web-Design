// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }

// function chunkArrayInGroups(arr, size) {
//   if (arr.length <= size) {
//     return [arr];
//   } else {
//     return [arr.slice(0, size)].concat(
//       chunkArrayInGroups(arr.slice(size), size)
//     );
//   }
// }

// function chunkArrayInGroups(arr, size) {
//   var temp = [];
//   var result = [];

//   for (var a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1) temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }

//   if (temp.length !== 0) result.push(temp);
//   return result;
// }

function chunkArrayInGroups(arr, size) {
  let out = [];
  for (let i = 0; i < arr.length; i+=size){
    out.push(arr.slice(i, i + size));
  }
  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
