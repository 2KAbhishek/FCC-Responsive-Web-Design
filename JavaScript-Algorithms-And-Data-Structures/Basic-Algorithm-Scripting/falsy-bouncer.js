function bouncer(arr) {
  let out = [];
  for (let elem of arr){
    if (elem){
      out.push(elem);
    }
  }
  return out;
  // return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
