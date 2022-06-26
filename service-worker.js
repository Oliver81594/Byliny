const cache_name = 'byliny_cache';
const files_list = [
'/', 
'/register.js',
'/manifest.json', 
'/style.css', 
'/js/app.js', 
'/js/hladanie.js', 
//'/Bylina/bylina.html', 
//'/Bylina/bylina.js', 
//'/Bylina/style.css'];

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
