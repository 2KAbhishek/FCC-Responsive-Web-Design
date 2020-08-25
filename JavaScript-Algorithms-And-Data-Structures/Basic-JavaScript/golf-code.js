var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var out;

  if (strokes === 1) out = names[0];
  else if (strokes <= par - 2) out = names[1];
  else if (strokes === par - 1) out = names[2];
  else if (strokes === par) out = names[3];
  else if (strokes === par + 1) out = names[4];
  else if (strokes === par + 2) out = names[5];
  else out = names[6];

  return out;
  // Only change code above this line
}

golfScore(5, 4);
