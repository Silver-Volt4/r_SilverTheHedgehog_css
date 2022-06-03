const fs = require("fs")
const { compile } = require("./util/compile.js");

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist/")
}
fs.writeFileSync("dist/theme.css", compile());