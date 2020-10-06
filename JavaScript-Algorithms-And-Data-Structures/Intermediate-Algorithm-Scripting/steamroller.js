// function steamrollArray(arr, flatArr = []) {
//   const elem = arr.pop();
//   return elem
//     ? !Array.isArray(elem)
//       ? steamrollArray(arr, [elem, ...flatArr])
//       : steamrollArray(arr.concat(elem), flatArr)
//     : flatArr;
// }

// function steamrollArray(val,flatArr=[]) {
//   val.forEach(item => {
//     if (Array.isArray(item)) steamrollArray(item, flatArr);
//     else flatArr.push(item);
//   });
//   return flatArr;
// }

// function steamrollArray(arr) {
//   return arr
//     .toString()
//     .replace(",,", ",") // "1,2,,3" => "1,2,3"
//     .split(",") // ['1','2','3']
//     .map(function(v) {
//       if (v == "[object Object]") {
//         // bring back empty objects
//         return {};
//       } else if (isNaN(v)) {
//         // if not a number (string)
//         return v;
//       } else {
//         return parseInt(v); // if a number in a string, convert it
//       }
//     });
// }

// function steamrollArray(arr) {
//   let flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

function steamrollArray(arr) {
  let flatArr = [];
  function flatten(arr,flatArr){
    if (!Array.isArray(arr)){
      flatArr.push(arr);
    } else{
      for (let item of arr){
        flatten(item, flatArr);
      }
    }
  }
  flatten(arr, flatArr);
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]], []);
