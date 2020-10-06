// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var a = 2 * Math.PI;
//   var newArr = [];

//   var getOrbPeriod = function(obj) {
//     var c = Math.pow(earthRadius + obj.avgAlt, 3);
//     var b = Math.sqrt(c / GM);
//     var orbPeriod = Math.round(a * b);
//     // create new object
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };

//   for (var elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }
//   return newArr;
// }

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var newArr = [];
//   //Looping through each key in arr object
//   for (var elem in arr) {
//     //Rounding off the orbital period value
//     var orbitalPer = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
//     );
//     //Adding new object with orbitalPeriod property
//     newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
//   }
//   return newArr;
// }

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   // Create new array to prevent modification of the original
//   var newArr = JSON.parse(JSON.stringify(arr));
//   // Loop through each item in the array arr
//   newArr.forEach(function(item) {
//     // Calculate the Orbital period value
//     var tmp = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
//     );
//     //Delete the avgAlt property
//     delete item.avgAlt;
//     //Add orbitalPeriod property
//     item.orbitalPeriod = tmp;
//   });
//   return newArr;

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
