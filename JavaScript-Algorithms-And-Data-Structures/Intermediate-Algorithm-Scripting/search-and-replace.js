// function myReplace(str, before, after) {
//   const myArr = str.split(" ");
//   const [wordToReplace] = myArr.filter(item => item === before);
//   return wordToReplace[0].toUpperCase() !== wordToReplace[0]
//     ? myArr.map(item => (item === before ? after : item)).join(" ")
//     : myArr
//         .map(item =>
//           item === before ? after[0].toUpperCase() + after.slice(1) : item
//         )
//         .join(" ");
// }

function myReplace(str, before, after) {
  // if (/^[A-Z]/.test(before)) {
  if (before[0].toUpperCase() === before[0]){
    after = after.replace(after[0],after[0].toUpperCase());
    // after = after.charAt(0).toUpperCase() + after.slice(1);
    // after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after.toLowerCase();
  }
  return str.replace(before,after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
