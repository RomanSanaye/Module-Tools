const fs = require("fs");
const folderPath = "./sample-files";
const content = fs.readdirSync(folderPath);

const txtFiles = content.filter((file) => file.endsWith(".txt"));
const numberedLine = txtFiles.map((line, index) => {
  return `${index + 1} ${line}`;
});
process.stdout.write(numberedLine.join("\n"));
