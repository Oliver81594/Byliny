const cache_name = 'byliny_cache';
const files_list = [
'/', 
'/register.js',
'/manifest.json', 
'/style.css', 
'/js/app.js', 
'/js/hladanie.js', 
'/Bylina/bylina.html', 
'/Bylina/bylina.js', 
'/Bylina/style.css', 
'/img/favicon.ico', 
'/img/icons/apple-icon-180.png', 
'/img/icons/apple-splash-640-1136.jpg', 
'/img/icons/apple-splash-750-1334.jpg', 
'/img/icons/apple-splash-828-1792.jpg',
'/img/icons/apple-splash-1125-2436.jpg',
'/img/icons/apple-splash-1136-640.jpg',
'/img/icons/apple-splash-1170-2532.jpg',
'/img/icons/apple-splash-1242-2208.jpg',
'/img/icons/apple-splash-1242-2688.jpg',
'/img/icons/apple-splash-1284-2778.jpg',
'/img/icons/apple-splash-1334-750.jpg',
'/img/icons/apple-splash-1536-2048.jpg',
'/img/icons/apple-splash-1620-2160.jpg',
'/img/icons/apple-splash-1668-2224.jpg',
'/img/icons/apple-splash-1668-2388.jpg',
'/img/icons/apple-splash-2048-1536.jpg',
'/img/icons/apple-splash-1792-828.jpg',
'/img/icons/apple-splash-2048-2732.jpg',
'/img/icons/apple-splash-2160-1620.jpg',
'/img/icons/apple-splash-2208-1242.jpg',
'/img/icons/apple-splash-2224-1668.jpg',
'/img/icons/apple-splash-2388-1668.jpg',
'/img/icons/apple-splash-2436-1125.jpg',
'/img/icons/apple-splash-2532-1170.jpg',
'/img/icons/apple-splash-2688-1242.jpg',
'/img/icons/apple-splash-2732-2048.jpg',
'/img/icons/apple-splash-2778-1284.jpg',
'/img/icons/manifest-icon-192.maskable.png',
'/img/icons/manifest-icon-512.maskable.png'];

async function preCache(){
  const cache = await caches.open(cache_name);
  return cache.addAll(files_list);
}

self.addEventListener('install', event =>{
  event.waitUntil(preCache());
})

self.addEventListener('activate', event =>{
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

self.addEventListener('fetch', event =>{
  event.respondWith(fetchAssets(event));
})