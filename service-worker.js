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
'/Byliny/img/favicon.ico'];

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
