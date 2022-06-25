self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('byliny_cache').then(function(cache) {
      return cache.addAll([
        // your list of cache keys to store in cache
        'index.html',
        'register.js',
        'manifest.json',
        'style.css'
      ])
    })
  );
});
