# r/SilverTheHedgehog CSS
This repository contains the source for the r/SilverTheHedgehog old.reddit CSS. 

## How to debug
1) Get TamperMonkey or a similar browser plugin and install userscript.js.
2) Run `npm run dev`
3) Open dev console on any subreddit and type `cssDebug()`.
  - By default it will connect to localhost:1222 but you can supply a custom URL as an argument.
  - That means you can debug remotely if you have port forwarding enabled
  - The server also supports multiple browsers. You can attach both Chrome and Firefox, both will be updated.
4) When you're satisfied, kill the server with Ctrl+C