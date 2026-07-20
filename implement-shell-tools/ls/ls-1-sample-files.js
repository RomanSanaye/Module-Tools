const fs = require("fs");
const path = "./sample-files";
const contents = fs.readdirSync(path).filter((file) => !file.startsWith("."));

console.log(contents.join("\n"));
