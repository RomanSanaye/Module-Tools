const fs = require("fs");
const path = "./sample-files";
const content = fs.readdirSync(path);
console.log(".");
console.log("..");

const files = content.map((item) => item);
console.log(files.join("\n"));
