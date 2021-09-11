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
        "./assets/images/youngFloyd.jpg",
        "./assets/images/johnMatos.jpg",
        "./assets/images/Dolores.jpg",
        "./assets/images/FloydAndDoloresyoung.jpg",
        "./assets/images/floydOnADate.jpg",
        "./assets/images/matosSiblings.jpg",
        "./assets/images/chilton.jpg",
        "./assets/images/basicCrew.jpg",
        "./assets/images/goodShot.jpg",
        "./assets/images/chaplainsOffice.jpg",
        "./assets/images/chiltonOrders.jpg",
        "./assets/images/chiltonOrders2.jpg",
        "./assets/images/travelsOfTheChilton.jpg",
        "./assets/images/theGunner.jpg",
        "./assets/images/AlpineSailor.jpg",
        "./assets/images/Radioman.jpg",
        "./assets/images/floydAndDolores.jpg",
        "./assets/images/Floydandbaby.jpg",
        "./assets/images/Floydandratpack.jpg",
        "./assets/images/floydDoloresAndFamily.jpg",
        "./assets/images/manOfTheSeaRedux.jpg",
        "./assets/images/theWholeFamily.jpg",
        "./assets/images/sailorSailing.jpg",
        "./assets/images/conversation.jpg",
        "./assets/images/floydAndPeggy.jpg",
        "./assets/images/generations.jpg",
        "./assets/images/popopAtTheBeach.jpg",
        "./assets/images/seriousConversation.jpg",
        "./assets/images/floydGoesToHiroshima.jpg",
        "./assets/images/floydAndSusan.jpg",
        "./assets/images/sailorSailing.jpg",
        "./assets/images/reachingout.jpg",
        "./assets/images/floudwithsofi.jpg",
        "./assets/images/theSelfie.jpg",
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
