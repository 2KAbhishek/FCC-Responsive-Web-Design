function whatIsInAName(collection, source) {
  // Only change code below this line
  let srcKeys = Object.keys(source);

  // return collection.filter(function(obj) {
  //   return srcKeys.every(function(key) {
  //     return obj.hasOwnProperty(key) && obj[key] === source[key];
  //   });
  // });

  // return collection.filter(function(obj) {
  //   return srcKeys
  //     .map(function(key) {
  //       return obj.hasOwnProperty(key) && obj[key] === source[key];
  //     })
  //     .reduce(function(a, b) {
  //       return a && b;
  //     });
  // });

  return collection.filter(function(obj){
    for (let key of srcKeys){
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false
      }
    }
    return true;
  });
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
