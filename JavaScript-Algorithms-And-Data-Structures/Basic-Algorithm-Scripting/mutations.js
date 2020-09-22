// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) != -1;
//     });
// }

// function mutation([ target, test ], i = 0) {
//   target = target.toLowerCase();
//   test = test.toLowerCase();
//   return i >= test.length
//     ? true
//     : !target.includes(test[i])
//       ? false
//       : mutation([ target, test ], i + 1);
// }

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  for (let char of arr[1]){
    if (arr[0].indexOf(char) === -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
