import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './maskable-icons/maskable_icon.png',
  './maskable-icons/maskable_icon_x48.png',
  './maskable-icons/maskable_icon_x72.png',
  './maskable-icons/maskable_icon_x96.png',
  './maskable-icons/maskable_icon_x128.png',
  './maskable-icons/maskable_icon_x192.png',
  './maskable-icons/maskable_icon_x384.png',
  './maskable-icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
