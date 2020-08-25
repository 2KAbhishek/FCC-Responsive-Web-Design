function testSize(num) {
  // Only change code below this line
  var out;
  if (num < 5) out = "Tiny";
  else if (num < 10) out = "Small";
  else if (num < 15) out = "Medium";
  else if (num < 20) out = "Large";
  else out = "Huge";

  return out;
  // Only change code above this line
}

testSize(7);
