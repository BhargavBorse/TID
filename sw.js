self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
  });
  self.skipWaiting();
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });
  
  // fetching part
  // const filesToCache = [
  //   '/',
  //   'login.html',
  //   'index.html',
  //   'reminder.html',
  //   'event.html',
  //   'saved-images.html',
  //   'assets/css/main.css',
  //   'assets/css/material-kit.css',
  //   'assets/css/material-kit-min.css',
  //   'assets/css/prof_pic_upload.css',
  //   'assets/css/util.css',
  //   'assets/img/backlit-clouds-dusk-853168 - Copy.jpg',
  //   'assets/img/backlit-clouds-dusk-853168.jpg',
  //   'assets/img/favicon.jpg',
  //   'assets/js/material-kit.js',
  //   'assets/js/material-kit-min.js',
  //   'assets/js/prof_pic_upload.js',
  //   'lightbox/src/css/lightbox.css',
  //   'lightbox/src/js/lightbox.js',
  //   'lightbox/src/images/close.png',
  //   'lightbox/src/images/next.png',
  //   'lightbox/src/images/prev.png',
  //   'lightbox/src/images/loading.gif'
    
  // ];
  
  // const staticCacheName = 'pages-cache-v1';
  
  // self.addEventListener('install', event => {
  //   console.log('Attempting to install service worker and cache static assets');
  //   event.waitUntil(
  //     caches.open(staticCacheName)
  //     .then(cache => {
  //       return cache.addAll(filesToCache);
  //     })
  //   );
  // });
  // self.addEventListener('fetch', event => {
  //   console.log('Fetch event for ', event.request.url);
  //   event.respondWith(
  //     caches.match(event.request)
  //     .then(response => {
  //       if (response) {
  //         console.log('Found ', event.request.url, ' in cache');
  //         return response;
  //       }
  //       console.log('Network request for ', event.request.url);
  //       return fetch(event.request)
  
  //       // TODO 4 - Add fetched files to the cache
  
  //     }).catch(error => {
  
  //       // TODO 6 - Respond with custom offline page
  
  //     })
  //   );
  // });  