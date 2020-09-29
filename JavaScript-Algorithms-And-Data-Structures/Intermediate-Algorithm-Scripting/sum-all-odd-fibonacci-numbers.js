// function sumFibs(num) {
//   // Perform checks for the validity of the input
//   if (num <= 0) return 0;

//   // Create an array of fib numbers till num
//   const arrFib = [1, 1];
//   let nextFib = 0;

//   // We put the new Fibonacci numbers to the front so we
//   // don't need to calculate the length of the array on each
//   // iteration
//   while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
//     arrFib.unshift(nextFib);
//   }

//   // We filter the array to get the odd numbers and reduce them to get their sum.
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }

// function sumFibs(num) {
//   var prevNumber = 0;
//   var currNumber = 1;
//   var result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }

//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

function sumFibs(num) {
  let a = 1, b = 1;
  let arr = [a];
  
  while (a <= num){
    if (a % 2 != 0){
      arr.push(a);
    }
    let temp = a;
    a += b;
    b = temp;
  }
  return arr.reduce((a, sum) => sum + a, 0);
}

sumFibs(75025);
