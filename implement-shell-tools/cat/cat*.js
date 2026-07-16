const fs = require("fs");
const folderPath = "./sample-files";
const content = fs.readdirSync(folderPath);

const txtFiles = content.filter((file) => file.endsWith(".txt"));
process.stdout.write(txtFiles.join("\n"));
