/* Public offline shell only. Personal records and configuration never enter CacheStorage. */
const CACHE='companion-generic-ui-v8';
const FILES=['./','./index.html','./app.js','./styles.css','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==location.origin)return;event.respondWith(fetch(request).then(response=>{if(response.ok&&FILES.some(path=>new URL(path,location.href).pathname===new URL(request.url).pathname)){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}return response;}).catch(()=>caches.match(request)));});

/* Open or focus app when a visible reminder is tapped. No background schedule or push provider is configured. */
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil((async()=>{const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});for(const client of clients){if(client.url.includes(self.registration.scope)&&'focus'in client)return client.focus()}return self.clients.openWindow('./index.html')})())});
