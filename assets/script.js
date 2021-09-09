if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("service-worker.js")
    .then((registration) => {
        console.log("Service Worker Online.")
    })
    .catch((error) => {
        console.log("Service Worker halted. Tracing error.")
        console.log(error)
    })
}