const fs = require("fs");
const args = process.argv.slice(2);

const filePath = args[0];

const content = fs.readFileSync(filePath, "utf-8");

process.stdout.write(content);
