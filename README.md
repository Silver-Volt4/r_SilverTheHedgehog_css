# r/SilverTheHedgehog CSS
This repository contains the source for the r/SilverTheHedgehog old.reddit CSS.  
It's set to replace the current one, someday in the future.

## How to debug
1) Get TamperMonkey or a similar browser plugin and install userscript.js.
2) Run `npm i`
3) Run `npm run dev`
4) Open dev console on any subreddit and type `cssDebug()`.
    - By default it will connect to localhost:1222 but you can supply a custom URL as an argument.
    - That means you can debug remotely if you have port forwarding enabled
    - The server also supports multiple browsers. You can attach both Chrome and Firefox, both will be updated.
5) When you're satisfied, kill the server with Ctrl+C

## Code structure
The stylesheets don't really import one another, I just throw everything into one heap. I don't have enough SCSS expertise to set it up beautifully.
If I tried to do that, it would end in a disaster.
Currently, I use folders and files to divide the code into manageable parts. Also helps me search through it.