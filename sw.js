/* 高桌文法研究中心 · offline shell
   Bump CACHE_VERSION whenever the site content changes. */
const CACHE_VERSION = "gtl-v24";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./grammar.html",
  "./mind.html",
  "./social.html",
  "./love.html",
  "./creation.html",
  "./library.html",
  "./404.html",
  "./manifest.webmanifest",
  "./assets/css/style.css",
  "./assets/fonts/cormorant-garamond-latin-400-normal.woff2",
  "./assets/fonts/cormorant-garamond-latin-400-italic.woff2",
  "./assets/fonts/cormorant-garamond-latin-600-normal.woff2",
  "./assets/fonts/cormorant-garamond-latin-700-normal.woff2",
  "./assets/js/site.js",
  "./assets/js/content/home.js",
  "./assets/js/content/grammar.js",
  "./assets/js/content/mind.js",
  "./assets/js/content/social.js",
  "./assets/js/content/love.js",
  "./assets/js/content/creation.js",
  "./assets/js/content/library.js",
  "./assets/img/brand/ambience-wide.jpg",
  "./assets/img/brand/ambience-portrait.jpg",
  "./assets/img/brand/source-ambience.jpg",
  "./assets/img/brand/ambience-wide-soft.jpg",
  "./assets/img/brand/ambience-portrait-soft.jpg",
  "./assets/img/brand/logo-mark-256.png",
  "./assets/img/brand/logo-full-256.png",
  "./assets/img/brand/logo-full-512.png",
  "./assets/img/brand/favicon-64.png",
  "./assets/img/brand/icon-192.png",
  "./assets/img/brand/icon-512.png",
  "./assets/img/brand/icon-maskable-512.png",
  "./assets/img/brand/apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function (cache) { return cache.addAll(CORE_ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys
          .filter(function (key) { return key !== CACHE_VERSION && key.indexOf("gtl-") === 0; })
          .map(function (key) { return caches.delete(key); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then(function (cache) { cache.put(request, copy); });
          }
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (cached) {
            return cached || caches.match("./index.html");
          });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cached) {
      const network = fetch(request)
        .then(function (response) {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then(function (cache) { cache.put(request, copy); });
          }
          return response;
        })
        .catch(function () { return cached; });
      return cached || network;
    })
  );
});
