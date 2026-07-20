const fs = require("fs");
const path = "../ls";
const files = fs.readdirSync(path);
console.log(files.join("\n"));
