; (function (w, d, undefined) {
  'use strict';

  /* [RAILS_INJECT] */ var DATA_URLS = [];
  var DATA_URLS = [
    { "key": "666666", "url": "https://pagetemplate.vercel.app" },
    { "key": "666666", "url": "https://pagetemplate.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=general&keyword=%E3%83%9E%E3%82%A4%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9&_matchtype=b&gad_source=1&gad_campaignid=17397601097&gbraid=0AAAAACPKK676rzUrlHjUpD6y2_SIR0wPp&gclid=CjwKCAjwuanRBhBSEiwAY5y6VzP4BvCubkzQcdKQtRtXxtR-6TUJVgKZKvTocWhE0o_zPzGQSCIdTxoCi7cQAvD_BwE" },
    { "key": "82361000131", "url": "https://site-template-hp.vercel.app" },
    { "key": "442", "url": "https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_temp_portfolio&stacked=h" }
  ];

  var SCRIPT_ID = 'js-meo-script-review-hp';
  var GROUP_SRC_RE = /\/review_hp\/groups?\//i;

  var groupScript = null;
  try {
    groupScript = d.currentScript || d.getElementById(SCRIPT_ID);
    console.log('groupScript', groupScript)
  } catch (e) { }

  if (!groupScript) return;

  if (groupScript.__meoLoaded) return;
  groupScript.__meoLoaded = true;

  var apiBase = '';
  try {
    var baseMatch = (groupScript.src || '').match(/^(https?:\/\/[^\/]+)/i);
    apiBase = baseMatch ? baseMatch[1] : '';
  } catch (e) { }

  if (!apiBase) return;

  function normalizeUrl(url) {
    if (!url || typeof url !== 'string') return '';
    try {
      var hash = url.indexOf('#');
      if (hash !== -1) url = url.substring(0, hash);
      url = url.replace(/\/+$/, '');
      return url;
    } catch (e) {
      return url || '';
    }
  }

  var currentUrl = '';
  try {
    currentUrl = normalizeUrl(w.location.href);
  } catch (e) { }

  if (!currentUrl) return;

  var matchedKey = null;
  try {
    for (var j = 0; j < DATA_URLS.length; j++) {
      var entry = DATA_URLS[j];
      if (entry && entry.key && entry.url) {
        if (normalizeUrl(entry.url) === currentUrl) {
          matchedKey = String(entry.key);
          break;
        }
      }
    }
  } catch (e) { }

  if (!matchedKey) return;

  try {
    groupScript.removeAttribute('id');

    var gmbScript = d.createElement('script');
    gmbScript.id = SCRIPT_ID;
    gmbScript.charset = 'UTF-8';
    gmbScript.async = true;
    gmbScript.type = 'text/javascript';
    gmbScript.src = apiBase
      + '/review_hp/gmb/'
      + encodeURIComponent(matchedKey)
      + '/schema.js';
    gmbScript.onerror = function () { };

    var parent = groupScript.parentNode;
    var next = groupScript.nextSibling;

    if (parent) {
      parent.insertBefore(gmbScript, next || null);
    } else {
      (d.head || d.documentElement).appendChild(gmbScript);
    }
  } catch (e) { }

}(window, document));
