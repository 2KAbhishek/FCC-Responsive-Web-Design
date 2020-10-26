function rot13(str) {
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 65 || c > 90)
      decoded += String.fromCharCode(c);
    else
      decoded += String.fromCharCode((c % 26) + 65);
  }
  console.log(decoded);
  return decoded;
}

rot13("SERR PBQR PNZC");

// function rot13(str) {
//   return str.replace(/[A-Z]/g, L =>
//     String.fromCharCode((L.charCodeAt(0) % 26) + 65)
//   );
// }

// function rot13(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return str
//       .split('')
//       .map(char => {  
//         const pos = alphabet.indexOf(char);      
//         return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
//       })
//       .join('');
// }

// function rot13(str) {
//   str.toUpperCase(); // Convert `str` string to uppercase letters
//   var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
//   var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

//     for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
//       for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
//       if (arr[i] === abc[j]) {
//         arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
//       } else if (arr[i] === nop[j]) {
//         arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
//       }
//     }
//   }

//   return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
// }

// Solution with Regular expression and Array of ASCII character codes
// function rot13(str) {
//   var rotCharArray = [];
//   var regEx = /[A-Z]/;
//   str = str.split("");
//   for (var x in str) {
//     if (regEx.test(str[x])) {
//       // A more general approach
//       // possible because of modular arithmetic
//       // and cyclic nature of rot13 transform
//       rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
//     } else {
//       rotCharArray.push(str[x].charCodeAt());
//     }
//   }
//   str = String.fromCharCode.apply(String, rotCharArray);
//   return str;
// }

// function rot13(str) {
//   // Split str into a character array
//   return (
//     str
//       .split("")
//       // Iterate over each character in the array
//       .map.call(str, function(char) {
//         // Convert char to a character code
//         var x = char.charCodeAt(0);
//         // Checks if character lies between A-Z
//         if (x < 65 || x > 90) {
//           return String.fromCharCode(x); // Return un-converted character
//         }
//         //N = ASCII 78, if the character code is less than 78, shift forward 13 places
//         else if (x < 78) {
//           return String.fromCharCode(x + 13);
//         }
//         // Otherwise shift the character 13 places backward
//         return String.fromCharCode(x - 13);
//       })
//       .join("")
//   ); // Rejoin the array into a string
// }
