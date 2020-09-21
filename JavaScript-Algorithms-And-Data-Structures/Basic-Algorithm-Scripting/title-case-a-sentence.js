// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

function titleCase(str) {
  let titleCase = [];
  for (let word of str.toLowerCase().split(" ")) {
    word = word.replace(word[0], word[0].toUpperCase());
    titleCase.push(word);
  }
  return titleCase.join(" ");
}

titleCase("I'm a little tea pot");
