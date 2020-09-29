function pairElement(str) {
//  var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   var arr = str.split("");
//   return arr.map(x => [x, pairs[x]]);
// }

function pairElement(str) {
  let out = [];
  for (let char of str.split('')){
    let temp = [];
    temp.push(char);
    switch (char){
      case "A":
        temp.push("T");
        break;
      case "T":
        temp.push("A");
        break;
      case "C":
        temp.push("G");
        break;
      case "G":
        temp.push("C");
        break;
    }
    out.push(temp);
  }
  return out;
}

pairElement("GCG");
