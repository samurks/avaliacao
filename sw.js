let cacheName = "avaliacao-pwa";
let filesToCache = ["/", "/index.html", 
                "/pages/css/style.css", "/js/main.js", "/pages/horarios.html", "/pages/horarios", "manifest.json", "/pages/pe.html", "/pages/pe"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

