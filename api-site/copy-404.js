const fs = require("fs-extra");
const path = require("path");

const sourceFile = path.join(__dirname, "dist/назва-вашого-проекту/index.html");
const targetFile = path.join(__dirname, "dist/назва-вашого-проекту/404.html");

fs.copySync(sourceFile, targetFile);
console.log("404.html created successfully!");
