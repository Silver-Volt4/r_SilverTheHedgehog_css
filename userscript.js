// ==UserScript==
// @name         Old reddit theme debugger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://old.reddit.com/r/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (localStorage.cssDebug) {
        try {
            window.cssDbgWs = new WebSocket(localStorage.cssDebug);
            window.cssDbgWs.onopen = function () {
                document.querySelector("link[title=applied_subreddit_stylesheet]").remove()
                let stl = document.createElement("style");
                stl.id = "cssDebug";
                stl.innerHTML = "";
                document.head.appendChild(stl);
            };

            window.cssDbgWs.onmessage = function (e) {
                document.querySelector('#cssDebug').innerHTML = e.data;
            }

            window.cssDbgWs.onerror = function (e) {
                localStorage.removeItem("cssDebug");
            }
        } catch {
            localStorage.removeItem("cssDebug");
        }

    }

    window.cssDebug = function (address) {
        localStorage.setItem("cssDebug", address | "ws://127.0.0.1:1222");
        window.location.reload();
    }

    window.cssUndebug = function () {
        localStorage.removeItem("cssDebug");
    }
})();