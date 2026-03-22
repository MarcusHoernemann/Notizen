// PWA SERVICE WORKER REGISTRATION MIT FEHLER-DIAGNOSE
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log("LCARS System: Service Worker registriert", reg))
            .catch(err => console.error("LCARS System: Service Worker Fehler", err));
    });
}
