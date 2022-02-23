'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d911a85c4a0a60054f4e14cc72617d9e",
"index.html": "40ff2a537c7f3031dd23338eae63e77f",
"/": "40ff2a537c7f3031dd23338eae63e77f",
"main.dart.js": "50cc1b754ff9a95673ecf4595b89c5f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fa0e6cdc33041a9440974e6a396877b9",
"assets/AssetManifest.json": "40d4c2c93f793199f50658607bb70590",
"assets/NOTICES": "a181386252f1e2dabfb3835217c498db",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/game14.png": "8a1ada68aaf69b8c04aa36eb8bb91ac6",
"assets/assets/images/beyazins.png": "c2672c7298f77f94e588f7ada165efbc",
"assets/assets/images/coming.png": "67b66db82af222703835068dccf2067f",
"assets/assets/images/game15.png": "878929498d934cfae64eba82b0bcff7d",
"assets/assets/images/game17.png": "3fdb2c6acdaa516bc3bd3447c8f15f59",
"assets/assets/images/beyaztwitter.png": "4384d1239f37b4fd1b4e14cb306eb7e8",
"assets/assets/images/doga.png": "7b70521b9a1ef48674be362b0e9b3efa",
"assets/assets/images/game16.png": "3eaa64487fe1054fdcbb3b1271ebd415",
"assets/assets/images/game12.png": "a58c083288e26b6ec5d4651f48d0c6d2",
"assets/assets/images/mail.png": "55f86d6a19f3532176e5e2013930ab33",
"assets/assets/images/game13.png": "54d281978f85022e62c6df680500bef8",
"assets/assets/images/game11.png": "8635ce6587ddcbe21132ecdd6fd869bc",
"assets/assets/images/pixelbeyaz.png": "84fde46ad338cd77907b21d7ce0dbc30",
"assets/assets/images/instagram.png": "1d9f34b13f8ae47bbd7bbdb0bac0bedd",
"assets/assets/images/game10.png": "014a1e83a4335311c7e58c8c2d896a0f",
"assets/assets/images/game2.png": "165fbdd9d6197a3605bb46b063fdc57a",
"assets/assets/images/berk.png": "05f34e8ceec2ed22c6a0a549dfc6e347",
"assets/assets/images/game3.png": "7588f74fece6a0e8268cb4eed4da04eb",
"assets/assets/images/game1.png": "b23871ee3bc4262510533caa8166cde4",
"assets/assets/images/okan.png": "84e136a14f716b404d6dfba9bdd6e4a2",
"assets/assets/images/samet.png": "c6af01148a4326b45d52563e143f973d",
"assets/assets/images/kare.png": "16c6e5f9e047007b14195c8b00d367db",
"assets/assets/images/circle.png": "f7af0ccd95f42076082b4b7a22b66bba",
"assets/assets/images/game4.png": "f3cf2c98b5a81653b8d242ef1965a25e",
"assets/assets/images/game5.png": "f100ae2a964bb7a426848782f3fb859c",
"assets/assets/images/googlestore.png": "1a1428f47db1f722a27c164653a9e7f1",
"assets/assets/images/game7.png": "a2b890256d25f83ebe93f0ac07e3064b",
"assets/assets/images/appstore.png": "331c69684e7c30bb5de5bc30f55f0ad4",
"assets/assets/images/game6.png": "bb71cce3f1f1e448ac10e2f9ac8be1e7",
"assets/assets/images/back2.png": "e03482d1a0dceb9c2bc3e58c533ec674",
"assets/assets/images/back3.png": "a4f22b0074f58ffb3d82aa4292363f9e",
"assets/assets/images/back1.png": "bc59e5e4bdb926dca180490207a141f8",
"assets/assets/images/game8.png": "0bbb45df32b663d8bd4e52347f451ec9",
"assets/assets/images/linkdin.png": "1fbfa5ba8022c458559e6d4a00656d30",
"assets/assets/images/game9.png": "e8472aac55d05d1b654ccda7f62f41fe",
"assets/assets/images/logo.png": "7064daca675fc69f244bdb49ee188771",
"assets/assets/images/twitter.png": "566f0d9088b0157ffa7497edafe5b23a",
"assets/assets/images/game21.png": "3575b58daf1dc2d9629c1363282c3900",
"assets/assets/images/game20.png": "f9ad7abac937800f0d0b1ac73172930c",
"assets/assets/images/game22.png": "67b66db82af222703835068dccf2067f",
"assets/assets/images/yusuf.png": "8f14d3187cfc8b0bf60252f413546f32",
"assets/assets/images/square.png": "85bb0a6c7b4777676a87afc80a91904f",
"assets/assets/images/game18.png": "280b80f062cb67beb91a9acca4995ef5",
"assets/assets/images/beyazlink.png": "2dab0a06690c05adc42e720601a21289",
"assets/assets/images/game19.png": "f32440ed7cf2c1788116b260fff41670",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
