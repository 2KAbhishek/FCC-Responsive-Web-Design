function countOnline(usersObj) {
  // Only change code below this line
  let online = 0;
  for (let user in usersObj){
    if (usersObj[user].online){
      online++;
    }
  }
  return online;
  // Only change code above this line
}
