const fs = require("fs");
const filePath = "./sample-files/1.txt";

const content = fs.readFileSync(filePath, "utf-8");

process.stdout.write(content);