importScripts('/assets/js/sw-toolbox.js');
importScripts('/assets/js/sw-toolbox-cache.js');

toolbox.precache([
  '/offline.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css?family=Itim|Material+Icons&amp;subset=thai',
  '/assets/materialize.css',
  '/assets/js/materialize.js',
  '/assets/js/jquery.js',
  '/assets/critical.css',
  '/assets/main.css',
  '/assets/img/loader.gif'
])

toolbox.options.debug = false;
toolbox.options.cache.name = "spaceadv-v1";

self.addEventListener('install', function install() {
  self.skipWaiting();
})
self.addEventListener('activate', function activate(e) {
  e.waitUntil(self.clients.claim())
})

toolbox.router.get("(.*)", function get(req, vals, opts) {
  return toolbox.networkFirst(req, vals, opts)
    .catch(function(error) {
      console.log({req, vals, opts, error})
      if (req.method === "GET" && req.headers.get("accept").includes("text/html")) {
        return toolbox.cacheOnly(new Request("offline.html"), vals, opts)
      }
      throw error
    })
})

toolbox.router.get("/assets/*.css", toolbox.cacheFirst)
toolbox.router.get("/assets/js/*.js", toolbox.cacheFirst)
toolbox.router.get("/assets/img/*.jpg", toolbox.cacheFirst)
toolbox.router.get("/assets/img/*.png", toolbox.cacheFirst)
toolbox.router.get("/assets/img/*.gif", toolbox.cacheFirst)
toolbox.router.get("/assets/files/*.mp3", toolbox.cacheFirst)
toolbox.router.get("/assets/img/*.svg", toolbox.fastest)
toolbox.router.get("/manifest.json", toolbox.networkFirst)
toolbox.router.get("*.html", toolbox.networkFirst)
