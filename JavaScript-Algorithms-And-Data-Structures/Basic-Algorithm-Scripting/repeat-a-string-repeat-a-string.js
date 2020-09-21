// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }

function repeatStringNumTimes(str, num) {
  let temp = "";
  while (num > 0){
    temp += str;
    num--;
  }
  return temp;
}

repeatStringNumTimes("abc", 3);
