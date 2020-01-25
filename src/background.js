'use strict';

chrome.runtime.onInstalled.addListener(function () {
    alert("WELCOME WELCOME, CONGRATS 😁 YOU'VE BEEN HACKED 😈😈");
    alert("JK JK 😆");
});

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let newUrl = "";
        if (details.url.match(/\.(gif|jpe?g|png)$/i)) {
            newUrl = "https://duckduckgo.com/iu/?u=" + details.url;
        } else {
            newUrl = details.url.replace("imgur.com", "0imgur.com");
        }
        return { redirectUrl: newUrl };
    },
    {
        urls: [
            "*://*.imgur.com/*",
            "*://www.imgur.com/*"],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function (tab) {
    alert('Please don\'t touch me. I\'m busy working ☹️😢😭');
});