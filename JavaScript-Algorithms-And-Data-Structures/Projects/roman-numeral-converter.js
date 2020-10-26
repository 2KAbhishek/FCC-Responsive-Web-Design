function convertToRoman(num) {
    var decs = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans = [
      "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let roman = "";

    for (let i = 0; i < decs.length; i++) {
        while (decs[i] <= num) {
            roman += romans[i];
            num -= decs[i];
        }
    }
    return roman;
}

convertToRoman(36);

// function convertToRoman(num) {
//   function getNumeral(digit, lowStr, midStr, nextStr) {
//     switch (true) {
//       case digit <= 3:
//         return lowStr.repeat(digit);
//       case digit === 4:
//         return lowStr + midStr;
//       case digit <= 8: // digits 5-8
//         return midStr + lowStr.repeat(digit - 5);
//       default: // digit 9
//         return lowStr + nextStr
//     }
//   }

//   let str = ""

//   // Thousands
//   str += "M".repeat(Math.floor(num/1000));
//   num %= 1000;

//   // Hundreds
//   str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
//   num %= 100;

//   // Tens
//   str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
//   num %= 10;

//   // Ones
//   str += getNumeral(num, 'I', 'V', 'X')

//   return str;
// }

// function convertToRoman(num) {
//   var romans = [
//       // 10^i 10^i*5
//       ["I", "V"], // 10^0
//       ["X", "L"], // 10^1
//       ["C", "D"], // 10^2
//       ["M"] // 10^3
//     ],
//     digits = num
//       .toString()
//       .split("")
//       .reverse()
//       .map(function(item, index) {
//         return parseInt(item);
//       }),
//     numeral = "";

//   // Loop through each digit, starting with the ones place
//   for (var i = 0; i < digits.length; i++) {
//     // Make a Roman numeral that ignores 5-multiples and shortening rules
//     numeral = romans[i][0].repeat(digits[i]) + numeral;
//     // Check for a Roman numeral 5-multiple version
//     if (romans[i][1]) {
//       numeral = numeral
//         // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
//         .replace(romans[i][0].repeat(5), romans[i][1])
//         // Shorten occurrences of 9 * 10^i
//         .replace(
//           romans[i][1] + romans[i][0].repeat(4),
//           romans[i][0] + romans[i + 1][0]
//         )
//         // Shorten occurrences of 4 * 10^i
//         .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
//     }
//   }

//   return numeral;
// }

// function convertToRoman(num) {
//   var romans = ["I", "V", "X", "L", "C", "D", "M"],
//     ints = [],
//     romanNumber = [],
//     numeral = "",
//     i;
//   while (num) {
//     ints.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   for (i = 0; i < ints.length; i++) {
//     units(ints[i]);
//   }
//   function units() {
//     numeral = romans[i * 2];
//     switch (ints[i]) {
//       case 1:
//         romanNumber.push(numeral);
//         break;
//       case 2:
//         romanNumber.push(numeral.concat(numeral));
//         break;
//       case 3:
//         romanNumber.push(numeral.concat(numeral).concat(numeral));
//         break;
//       case 4:
//         romanNumber.push(numeral.concat(romans[i * 2 + 1]));
//         break;
//       case 5:
//         romanNumber.push(romans[i * 2 + 1]);
//         break;
//       case 6:
//         romanNumber.push(romans[i * 2 + 1].concat(numeral));
//         break;
//       case 7:
//         romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
//         break;
//       case 8:
//         romanNumber.push(
//           romans[i * 2 + 1]
//             .concat(numeral)
//             .concat(numeral)
//             .concat(numeral)
//         );
//         break;
//       case 9:
//         romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
//     }
//   }
//   return romanNumber
//     .reverse()
//     .join("")
//     .toString();
// }

