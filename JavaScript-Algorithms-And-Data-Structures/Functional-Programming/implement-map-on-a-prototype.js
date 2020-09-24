// The global variable
var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback, arr = [], i = 0) {
//   return i < this.length
//     ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
//     : arr;
// };

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  for (let item of this){
    newArray.push(callback(item));
  }
  // this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
