
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{3,})(?=\w*\d{2,})/; // Change this line
// var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
