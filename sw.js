const CACHE_NAME = 'lcars-kb-v0.1.27'; // Version erhöht!
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'logo.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Erzwingt die sofortige Übernahme
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
