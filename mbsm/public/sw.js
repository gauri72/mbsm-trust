// The site no longer runs as a PWA. Browsers that installed the old service
// worker still check this URL for updates; this replacement wipes the old
// caches, unregisters itself and reloads open tabs so they get the live site.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      windows.forEach(client => client.navigate(client.url));
    })()
  );
});
