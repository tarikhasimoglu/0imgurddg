"use strict";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let newUrl = "";
    if (details.url.match(/\.(gif|jpe?g|png)$/i)) {
      newUrl = "https://duckduckgo.com/iu/?u=" + details.url;
    } else {
      newUrl = details.url.replace("imgur.com", "0imgur.com");
    }
    return { redirectUrl: newUrl };
  },
  {
    urls: ["http://*.imgur.com/*", "https://www.imgur.com/*"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);
