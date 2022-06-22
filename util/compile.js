const sass = require('sass');
const { minify } = require('csso');

function hotcompile() {
    try {
        const result = minify(sass.compile("theme/main.scss").css).css;
        let imgEscaped = "";

        let i = 0;
        let beginEscape = result.indexOf("img(", i);
        let endEscape;
        let imgName;

        while (beginEscape != -1) {
            imgEscaped += result.slice(i, beginEscape);
            endEscape = result.indexOf(")", beginEscape);

            imgName = result.slice(beginEscape, endEscape).slice(4);
            if (imgName.startsWith('"')) {
                imgName = imgName.slice(1, imgName.length - 1)
            }
            console.log(imgName)


            imgEscaped += `url(http://localhost:8080/${imgName}`

            i = endEscape;
            beginEscape = result.indexOf("img(", endEscape);
        }

        imgEscaped += result.slice(i, result.length);

        return imgEscaped;
    } catch (e) {
        console.log(e)
        return "";
    }
}

function build() {
    try {
        const result = minify(sass.compile("theme/main.scss").css).css;
        let imgEscaped = "";

        let i = 0;
        let beginEscape = result.indexOf("img(", i);
        let endEscape;
        let imgName;

        while (beginEscape != -1) {
            imgEscaped += result.slice(i, beginEscape);
            endEscape = result.indexOf(")", beginEscape);

            imgName = result.slice(beginEscape, endEscape).slice(4);
            if (imgName.startsWith('"')) {
                imgName = imgName.slice(1, imgName.length - 1)
            }

            imgEscaped += `url(%%${imgName.split(".")[0]}%%`

            i = endEscape;
            beginEscape = result.indexOf("img(", endEscape);
        }

        imgEscaped += result.slice(i, result.length);

        return "/*https://github.com/rsilverthehedgehog/css*/" + imgEscaped;
    } catch (e) {
        console.log(e)
        return "";
    }
}

exports.compile = hotcompile;
exports.build = build;