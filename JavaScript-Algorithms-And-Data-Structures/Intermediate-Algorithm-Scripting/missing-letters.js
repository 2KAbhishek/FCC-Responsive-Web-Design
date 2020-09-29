// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }

// function fearNotLetter(str) {
//   var allChars = "";
//   var notChars = new RegExp("[^" + str + "]", "g");
//   for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
//     allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
//   return allChars.match(notChars)
//     ? allChars.match(notChars).join("")
//     : undefined;
// }

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    if (code != str.charCodeAt(0) + i)
      return String.fromCharCode(code - 1);
  }
}

fearNotLetter("abce");
