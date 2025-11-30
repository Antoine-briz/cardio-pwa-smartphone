// ------- sw.js : PWA hors-ligne pour l'app de réanimation -------

const CACHE_NAME = "cardio-icu-v1";

// Tous les fichiers à pré-cacher (HTML, CSS, JS, images, Excel)
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",

  // Icônes PWA
  "./icons/icon-192.png",
  "./icons/icon-512.png",

  // Images (union de tout ce qui est dans app.js + ancien sw.js)
  "./img/BLSE.png",
  "./img/SARM.png",
  "./img/abdo.png",
  "./img/acineto.png",
  "./img/adaptee.png",
  "./img/ampC.png",
  "./img/anesthesie.png",
  "./img/antibioprophylaxie.png",
  "./img/antibioprophylaxies.png",
  "./img/bandeau.png",
  "./img/carba.png",
  "./img/cec.png",
  "./img/dermohypodermite.png",
  "./img/dialyse.png",
  "./img/duree.png",
  "./img/ecmo.png",
  "./img/endocardite.png",
  "./img/erv.png",
  "./img/fabrice.png",
  "./img/mediastinite.png",
  "./img/modalite.png",
  "./img/modalites.png",
  "./img/neuro.png",
  "./img/pneumonie.png",
  "./img/proba.png",
  "./img/pyo.png",
  "./img/reanimation.png",
  "./img/rein.png",
  "./img/sepsis.png",
  "./img/steno.png",
  "./img/titre.png",
  "./img/urinaire.png",

  // Images appelées sans le "./img/" dans app.js
  "assistances.png",
  "cardiostruct.png",
  "cec.png",
  "chircec.png",
  "consultation.png",
  "dialyse.png",
  "eto.png",
  "eto_bibliotheque.png",
  "fa.png",
  "formules.png",
  "img/anesthesie.png",
  "img/antibiotherapie.png",
  "img/cec.png",
  "img/chadsvasc.png",
  "img/reanimation.png",
  "prescription.png",
  "radiovasc.png",
  "saignement.png",
  "transplantation.png",
  "vasculaire.png",

  // Fichier Excel (planning médical)
  "files/planning_medical.xlsx",
];

// INSTALL : pré-cache tous les fichiers définis ci-dessus
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// ACTIVATE : nettoie les anciens caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null))
      )
    )
  );
  self.clients.claim();
});

// FETCH : stratégie hors-ligne (cache d'abord pour le local)
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // On laisse tranquilles les requêtes externes (Euroscore 2, etc.)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Navigation (documents HTML) : on essaie le réseau puis le cache
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      (async () => {
        try {
          const networkResp = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put("./index.html", networkResp.clone());
          return networkResp;
        } catch (e) {
          const cached = await caches.match("./index.html");
          if (cached) return cached;
          return new Response("Offline", {
            status: 503,
            statusText: "Offline",
          });
        }
      })()
    );
    return;
  }

  // Pour le reste (CSS, JS, images, Excel, etc.) : cache d'abord, puis réseau
  event.respondWith(
    (async () => {
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) {
        // En arrière-plan, on tente une mise à jour silencieuse
        fetch(req)
          .then(async (networkResp) => {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(req, networkResp.clone());
          })
          .catch(() => {});
        return cached;
      }

      try {
        const networkResp = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        await cache.put(req, networkResp.clone());
        return networkResp;
      } catch (e) {
        // Si on est hors ligne et que ce n'était pas en cache : rien à faire
        return new Response("", { status: 504, statusText: "Offline" });
      }
    })()
  );
});
