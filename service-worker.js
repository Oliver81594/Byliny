const cache_name = 'byliny_cache';
const files_list = [
'/Byliny/', 
'/Byliny/register.js',
'/Byliny/manifest.json', 
'/Byliny/style.css', 
'/Byliny/js/app.js', 
'/Byliny/js/hladanie.js', 
'/Byliny/Bylina/bylina.html', 
'/Byliny/Bylina/bylina.js', 
'/Byliny/Bylina/style.css', 
'/Byliny/img/favicon.ico', 
'/Byliny/img/icons/apple-icon-180.png', 
'/Byliny/img/icons/apple-splash-640-1136.jpg', 
'/Byliny/img/icons/apple-splash-750-1334.jpg', 
'/Byliny/img/icons/apple-splash-828-1792.jpg',
'/Byliny/img/icons/apple-splash-1125-2436.jpg',
'/Byliny/img/icons/apple-splash-1136-640.jpg',
'/Byliny/img/icons/apple-splash-1170-2532.jpg',
'/Byliny/img/icons/apple-splash-1242-2208.jpg',
'/Byliny/img/icons/apple-splash-1242-2688.jpg',
'/Byliny/img/icons/apple-splash-1284-2778.jpg',
'/Byliny/img/icons/apple-splash-1334-750.jpg',
'/Byliny/img/icons/apple-splash-1536-2048.jpg',
'/Byliny/Byliny/img/icons/apple-splash-1620-2160.jpg',
'/Byliny/img/icons/apple-splash-1668-2224.jpg',
'/Byliny/img/icons/apple-splash-1668-2388.jpg',
'/Byliny/img/icons/apple-splash-2048-1536.jpg',
'/Byliny/img/icons/apple-splash-1792-828.jpg',
'/Byliny/img/icons/apple-splash-2048-2732.jpg',
'/Byliny/img/icons/apple-splash-2160-1620.jpg',
'/Byliny/img/icons/apple-splash-2208-1242.jpg',
'/Byliny/img/icons/apple-splash-2224-1668.jpg',
'/Byliny/img/icons/apple-splash-2388-1668.jpg',
'/Byliny/img/icons/apple-splash-2436-1125.jpg',
'/Byliny/img/icons/apple-splash-2532-1170.jpg',
'/Byliny/img/icons/apple-splash-2688-1242.jpg',
'/Byliny/img/icons/apple-splash-2732-2048.jpg',
'/Byliny/img/icons/apple-splash-2778-1284.jpg',
'/Byliny/img/icons/manifest-icon-192.maskable.png',
'/Byliny/img/icons/manifest-icon-512.maskable.png'];

async function preCache(){
  const cache = await caches.open(cache_name);
  return cache.addAll(files_list);
}

self.addEventListener('install', event => {
  event.waitUntil(preCache());
})

self.addEventListener('activate', event => {
  console.log("n");
})


async function fetchAssets(event){
  try{
      const response = await fetch(event.request);
      return response;
  } catch (err){
      const cache = await caches.open(cache_name);
      return cache.match(event.request);
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(fetchAssets(event));
})
