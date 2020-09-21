// function confirmEnding(str, target) {
//   let re = new RegExp(target + "$", "i");
//   return re.test(str);
// }

// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }


function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
