const sass = require('sass');
const { minify } = require('csso');
const WebSocket = require('ws');
const fs = require('fs');

let clients = []

function compile() {
    try {
        const result = sass.compile("theme/main.scss");
        return minify(result.css.toString()).css;
    } catch {
        return "";
    }
}

const server = new WebSocket.WebSocketServer({
    port: 1222,
});

server.on('connection', function connection(ws) {
    clients.push(ws);
    ws.send(compile());

    ws.on("close", () => {
        clients = clients.filter(client => client !== ws);
    })
});

fs.watch('theme', { recursive: true }, function (event, filename) {
    let css = compile();
    clients.forEach(client => {
        client.send(css);
    });
});