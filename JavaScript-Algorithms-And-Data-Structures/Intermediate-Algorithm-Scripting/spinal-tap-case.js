function spinalCase(str) {
  // return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(/\s+|_+/g, "-").toLowerCase();
  // return str.toLowerCase().split(/(?:_| )+/).join("-");
}

spinalCase('This Is Spinal Tap');
