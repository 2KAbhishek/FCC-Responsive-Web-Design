// const squareList = arr => {
//   return arr.reduce((sqrIntegers, num) => {
//     return Number.isInteger(num) && num > 0
//       ? sqrIntegers.concat(num * num)
//       : sqrIntegers;
//   }, []);
// };

const squareList = (arr) => {
  // Only change code below this line
  return arr.filter(elem => parseInt(elem, 10) === elem && elem > 0)
  .map(elem => elem * elem);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
