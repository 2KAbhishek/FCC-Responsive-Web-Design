// function sumPrimes(num) {
//   var res = 0;

//   // Function to get the primes up to max in an array
//   function getPrimes(max) {
//     var sieve = [];
//     var i;
//     var j;
//     var primes = [];
//     for (i = 2; i <= max; ++i) {
//       if (!sieve[i]) {
//         // i has not been marked -- it is prime
//         primes.push(i);
//         for (j = i << 1; j <= max; j += i) {
//           sieve[j] = true;
//         }
//       }
//     }

//     return primes;
//   }

//   // Add the primes
//   var primes = getPrimes(num);
//   for (var p = 0; p < primes.length; p++) {
//     res += primes[p];
//   }

//   return res;
// }

// function sumPrimes(num) {
//   let i = 1;
//   let sum = 0;
//   while (i <= num) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//     i++;
//   }
//   return sum;
// }

// function sumPrimes(num) {
//   // function to check if the number presented is prime
//   function isPrime(number) {
//     for (let i = 2; i <= number; i++) {
//       if (number % i === 0 && number != i) {
//         // return true if it is divisible by any number that is not itself.
//         return false;
//       }
//     }
//     // if it passes the for loops conditions it is a prime
//     return true;
//   }
//   // 1 is not a prime, so return nothing, also stops the recursive calls.
//   if (num === 1) {
//     return 0;
//   }
//   // Check if your number is not prime
//   if (isPrime(num) === false) {
//     // for non primes check the next number down from your maximum number, do not add anything to your answer
//     return sumPrimes(num - 1);
//   }

//   // Check if your number is prime
//   if (isPrime(num) === true) {
//     // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
//     return num + sumPrimes(num - 1);
//   }
// }

// function sumPrimes(num) {
//   let nums = Array.from({ length: num + 1 })
//     .map((_, i) => i)
//     .slice(2);
//   for (let n in nums) {
//     nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
//   }
//   return nums.reduce((prevSum, cur) => prevSum + cur);
// }

// function sumPrimes(num) {
//   let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
//   let onlyPrimes = arr.filter(n => {
//     let m = n - 1;
//     while (m > 1 && m >= Math.sqrt(n)) {
//       if (n % m === 0) return false;
//       m--;
//     }
//     return true;
//   });
//   return onlyPrimes.reduce((a, b) => a + b);
// }

function sumPrimes(num) {
  let sum = 0;

  for (let cur = 2; cur <= num; cur++){
    if (isPrime(cur)) sum += cur;
  }
  return sum;
}

function isPrime(num){
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }
  return true;
}

sumPrimes(10);
