let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)|(\s*)$/g; // Change this line
// let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, ""); // Change this line
