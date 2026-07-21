const fs = require("fs");
const file = "./sample-files/3.txt";
const content = fs.readFileSync(file, "utf-8");

let characters = 0;

const char = content.length;
characters += char;
console.log(characters, file);
