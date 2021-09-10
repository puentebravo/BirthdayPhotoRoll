self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./slideshow.html",
        "./acknowledgements.html",
        "./assets/images/kidflorian.jpg",
        "./assets/images/manofthesea.jpg",
        "./assets/images/reachingout.jpg",
        "./assets/images/floydwithsofi.jpg",
        "./assets/script.js",
        "./assets/style.css",
      ]);
    })
  );
  console.log("Execute");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
