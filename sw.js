// Makes the CRM installable as an app. Caches nothing on purpose: every visit loads the latest version
// from the network, so deploys reach everyone immediately.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
