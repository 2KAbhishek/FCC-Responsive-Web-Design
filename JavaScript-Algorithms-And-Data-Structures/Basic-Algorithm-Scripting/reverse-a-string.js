function reverseString(str) {
  // let arrStr = [];
  // for (let i = 0; i < str.length; i++){
  //   arrStr.push(str.charAt(i));
  // }
  // arrStr = arrStr.reverse();
  // str = arrStr.join("");
  // console.log(str);

  // for (let reversedStr = "", i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str[i];
  // }
  // return reversedStr;

  return str.split("").reverse().join("");
}

reverseString("hello");
