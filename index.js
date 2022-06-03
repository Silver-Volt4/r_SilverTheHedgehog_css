// A boring and hacky server that can pipe CSS to our userscript.
// It's not very fast, but it's good enough for now.
// It watches the filesystem and sends over a compiled CSS file once changes have been made.

const WebSocket = require('ws');
const fs = require('fs');
const { compile } = require("./util/compile.js");

let clients = []

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