// PWAとして動かすための最小構成のサービスワーカー
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});