var CACHE = 'restaurant-cache';
var cacheFiles = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

self.addEventListener('install',(e) =>{
  e.waitUntil(
    caches.open(CACHE)
      .then(function (cache) {
        return cache.addAll(cacheFiles);
      })
  );
});

self.addEventListener('activate',(e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch',(e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
    .catch(err => console.log(err, e.request))
  );
});
