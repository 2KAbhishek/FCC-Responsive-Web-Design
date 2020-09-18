// function factorialize(num, factorial = 1) {
//   return num < 0 ? 1 : (
//     new Array(num)
//       .fill(undefined)
//       .reduce((product, val, index) => product * (index + 1), 1)
//   );
// }

// function factorialize(num, factorial = 1) {
//   if (num == 0) {
//     return factorial;
//   } else {
//     return factorialize(num - 1, factorial * num);
//   }
// }

function factorialize(num) {
  for (let i = num - 1; i > 0; i--){
    num *= i;
  }
  return num == 0? 1 : num;
}

factorialize(5);
