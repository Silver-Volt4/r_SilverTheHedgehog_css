# r/SilverTheHedgehog Custom CSS
This repository contains the source for the r/SilverTheHedgehog old.reddit stylesheet.  

## How to debug
1) Obtain TamperMonkey or a similar userscript plugin, then install [userscript.js](https://raw.githubusercontent.com/Silver-Volt4/r_SilverTheHedgehog_css/refs/heads/main/userscript.js).  
2) `npm i && npm run dev` to run the server  
3) Run `cssDebug()` from the dev console when on old.reddit  
    - By default it will connect to localhost:1222 but you can supply a custom URL as an argument  
    - The server supports multiple connections; you can, for example, attach both Chrome and Firefox and see your code reflect in both  
    - The script will re-inject itself automatically on page load, so don't be shy to navigate away!  
4) When you're satisfied, kill the server with Ctrl+C  

## Code structure
The stylesheets aren't "namespaced" so to speak, nor import each others' code. They're split mostly for the sake of organisation; i.e. stuff that's related to the sidebar goes in one file, stuff related to the comments section goes to another and so on.
