// ==UserScript==
// @name         Trần Quang Vinh Tool - UGPhone
// @namespace    vinh-ugphone
// @version      1.0.0
// @description  Tiện ích UGPhone by TRUM DEV ROBLOX
// @author       Trần Quang Vinh
// @match        *://*.ugphone.com/toc-portal/*
// @icon         https://i.postimg.cc/Rhv19Fgs/icon128.png
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.info
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const SOURCE_CODE_URL = 'https://raw.githubusercontent.com/developerVNRoblox/vinhtool-user/refs/heads/main/vinhtool-core.js';

  console.log("VinhTool Loader: Đang tải script chính từ GitHub...");

  fetch(`${SOURCE_CODE_URL}?_=${Date.now()}`, { cache: "no-store" })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return res.text();
    })
    .then(script => {
      if (document.body) eval(script);
      else {
        const observer = new MutationObserver(() => {
          if (document.body) {
            observer.disconnect();
            eval(script);
          }
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
      }
    })
    .catch(err => {
      console.error("VinhTool Loader: Không thể tải script từ GitHub!", err);
    });
})();
