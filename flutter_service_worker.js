'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f9399734607f5adc4d05741def2e5ba3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/objects/62/238c39716b3ed8e7a9184eff96043f399f8268": "be45d03ee826bb5893bacea4fecab3e0",
".git/objects/bf/dabb7d4f349a2e6913eb2a70787e01c164cb08": "95364e8904c95062788358a6fd01a645",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/82/e6b6deddbfbe887aca424a76d6339b253d8b66": "703ccd61090c9e6babe89fa38f3b6299",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4b/b9805c6a7547e1c7450157ebdf49f56bc803e9": "14fea594ed2046bb5af0d5faa9b18671",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/16/d9fb4208d2b2ed64034314a032978f4645370b": "a064771c7fc118a235efd55929c8febc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6ddfdb9805e0168b2ccb56e6e6b125373aee96": "a2944a8220af3d37b374b8f7fd50e6c0",
".git/objects/0c/27a83be6d73a2bb39a25ce3580ca0eb35829ed": "35c2ec9b381e7010c26850754cb9917b",
".git/objects/a0/b9724f00bb96697385ba8420741a2be9500afe": "e5fda6d154bb003552795ea89d31250a",
".git/objects/d5/38930865a468ce5f76f2f04903df2a10b8ca88": "f4509a78c631ea0e62e49186d772b966",
".git/objects/32/0ed9945087cf3c3706303e6304e6184dd4a12a": "b798f4dd5edf4bb4fc04400a26d527bd",
".git/objects/32/200dc3ceb26adf2ac66eebb802b2a0cc612aed": "cf2bf930e307dfc3a09660daad418899",
".git/objects/5f/3b763cb7f809ab103ef51a6220e3092100b579": "bc539de90bac100a83c1d9c78404ab13",
".git/objects/1e/fda42682ef086dccc9b75241b16e2ddedec91d": "85f2c50c63f2050c6e4912649885c9f8",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/95/81ef82423c1c115c2fb173839abe8ea9e3ff25": "ce762d7aab2b8897584522a265beebfd",
".git/objects/59/2ccd20073f76a663c56fe0176397149782565c": "f62220b171d651e35bb386ab9cb488f9",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/19/c7b0928e368604e16a11a971e85a373362d656": "8849a616609483f4c20c266d52b5ad64",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/5e/6e8bfff09d0c95f1249a642c9100dafb129e9f": "53d66a5c382900cd9319437bfc677bef",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/7e/49d8186905cd7bdd73728673a13b143d286986": "71deacb7793977d120079a6d3fe402a2",
".git/objects/41/1f0317866670f2902c10d0c485487303b21fc5": "441b07c55556392a07b279938ddaa955",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/59be5bb7ba90c31133c616f157d39de75ede67": "fe3212702136ab4e38c32e6dfef2164f",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/28/d069714b53964e3a5e2880a2d848dcab4da3e2": "17c589a74bd8dd56468c38b845f35f74",
".git/objects/45/bc68511379f692ebe6e85b00f85307e65484fd": "c93e9218514da4067487788dc0cc2518",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ba/73bb34ee1a612a0816c5a73aa3096ca4060dc0": "46a7466504a45d2351c8d96b92712619",
".git/objects/c4/dbe3348261ff8a2ba714723dcc0ee43da5bdf9": "e80c55de1f13183cb25c9f631efe263d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "2bb1c9bd22623a939483d6e9056aff76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "386a5250964901cbc13c760495919739",
".git/refs/heads/master": "386a5250964901cbc13c760495919739",
".git/index": "a718e8c63c8284c19a459cfbe6271007",
".git/logs/HEAD": "2b639cd3fc245aab3debc5455ff63dd0",
".git/logs/refs/remotes/origin/master": "b14f45a2b23b47687d2287c2aa2faaa7",
".git/logs/refs/heads/master": "2b639cd3fc245aab3debc5455ff63dd0",
".git/config": "dce6063d24462d216f815684dfa5a3e1",
"assets/NOTICES": "1750f2ff3dd7baa0276c2b7ab41217c7",
"assets/AssetManifest.json": "5d477838695448fa09e3a15d304c0b1d",
"assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/web/assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/web/assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/web/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/web/assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/web/assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/images/cookies.png": "e1c3723d2b2bad29732d1321e1d72d12",
"assets/images/programmer-3.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Inconsolata-Regular.ttf": "ed256edfa0728c24fec78767235703d4",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/AquateScript.ttf": "bb411c549c026817d94dc4a8213b2432",
"assets/FontManifest.json": "acaf8573af2a351766b601896a679989",
"main.dart.js": "2a0faa1cf2e510e9c55a8adc72440cd3",
"manifest.json": "2e785809788cc2180edf0c4eaa866334",
"index.html": "ce93a2650e2a0d5b22eeb541579eaac7",
"/": "ce93a2650e2a0d5b22eeb541579eaac7"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
