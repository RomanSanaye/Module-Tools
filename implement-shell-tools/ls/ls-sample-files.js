const fs = require("fs");
const folderPath = "./sample-files";
const contents = fs.readdirSync(folderPath);

console.log(contents.join(" "));
