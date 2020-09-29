// function translatePigLatin(str, charPos = 0) {
//   return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
//     ? str + (charPos === 0 ? 'way' : 'ay')
//     : charPos === str.length
//       ? str + 'ay'
//       : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// }

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }

// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }

function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      if (i != 0)
        return str.substr(i) + str.substr(0,i) + "ay";
      else 
        return (str + "way");
    } 
  }
  return (str + "ay");
}

translatePigLatin("consonant");
