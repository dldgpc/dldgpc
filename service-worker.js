/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "50a7eb8965ca8b5c2dcfa2927cde8520"
  },
  {
    "url": "about/index.html",
    "revision": "1a5e228db88d1e362eed460720a0a4bf"
  },
  {
    "url": "assets/css/0.styles.29bb0032.css",
    "revision": "9a920c3a9aa30a654ab26fdfb2a594be"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1c432666.js",
    "revision": "b87941fae30bfd8174f045759eb7bb3b"
  },
  {
    "url": "assets/js/11.3b3ea28c.js",
    "revision": "377029999fbe420da95104ccd9bdad22"
  },
  {
    "url": "assets/js/12.8643a8b6.js",
    "revision": "a7dd6149993f6b2e57476ad8d7ce83eb"
  },
  {
    "url": "assets/js/13.1034e7c1.js",
    "revision": "01fe99316c69be888c0a2fd131b79e9e"
  },
  {
    "url": "assets/js/14.2e152644.js",
    "revision": "4b6c38c0071d4cd7bf9c3910d46dd440"
  },
  {
    "url": "assets/js/15.f08b603a.js",
    "revision": "6fad592456f450e8a87ecf973f087a17"
  },
  {
    "url": "assets/js/16.01dfd2af.js",
    "revision": "4ad4340e6346974cfe0993d914d7d6a6"
  },
  {
    "url": "assets/js/17.1379320d.js",
    "revision": "e1c3041f9b64d4d61e2d5487547b8d1a"
  },
  {
    "url": "assets/js/18.821ce3a4.js",
    "revision": "67bacfc4fea84a33780808ecd7a9907e"
  },
  {
    "url": "assets/js/19.f98ba226.js",
    "revision": "12a3f3bceef3c5cc39c8feae1fc05daa"
  },
  {
    "url": "assets/js/2.c802b766.js",
    "revision": "2feebdba4b92c265df3baee37fa59b5c"
  },
  {
    "url": "assets/js/20.b603396f.js",
    "revision": "5ec3eb66df368cc3aaaa92ae42fbfcb3"
  },
  {
    "url": "assets/js/21.2b258f48.js",
    "revision": "4db0f076bc4e59759b7af5e7bf2b389d"
  },
  {
    "url": "assets/js/22.31dd4b62.js",
    "revision": "ce2c4eca8e2a0c315d2ea8a00485f113"
  },
  {
    "url": "assets/js/23.a186c9ec.js",
    "revision": "4973082634522bc747ff994aef405072"
  },
  {
    "url": "assets/js/24.79f2da9b.js",
    "revision": "631653dd95c9019932d87c6aeb314687"
  },
  {
    "url": "assets/js/25.ee74ffcc.js",
    "revision": "c3e9b852c7572e838c51353607bb4a32"
  },
  {
    "url": "assets/js/26.56a0ff93.js",
    "revision": "03c1b3895877be2f61a289295d6e3730"
  },
  {
    "url": "assets/js/27.e82b09cf.js",
    "revision": "7c78a14ed9054b388559e35e607d8332"
  },
  {
    "url": "assets/js/28.e7181b29.js",
    "revision": "33adce4ba710bb6f2a8b5cf16f2441b8"
  },
  {
    "url": "assets/js/3.f5f6328f.js",
    "revision": "e396f6132aa5d105d140e200844b22bf"
  },
  {
    "url": "assets/js/4.2f3a2bfc.js",
    "revision": "be6efbcbd3ce4173b7eb87c3762a79cc"
  },
  {
    "url": "assets/js/5.5ffc22f4.js",
    "revision": "43455648758972d068d1361e8ee7d844"
  },
  {
    "url": "assets/js/6.8427891a.js",
    "revision": "cdd91e88455b751947b70297c1617a3b"
  },
  {
    "url": "assets/js/7.9305c1c5.js",
    "revision": "d5ee316b6e2066e39d1eba4caad18b0f"
  },
  {
    "url": "assets/js/8.e2dfeb66.js",
    "revision": "0336a9c9a83b8b7a620097b19c7a8f5d"
  },
  {
    "url": "assets/js/9.5feeefff.js",
    "revision": "ea050cca93e995f90cd20d5b331b7cb1"
  },
  {
    "url": "assets/js/app.9b5fa907.js",
    "revision": "a176dcb637799391b8f865827543a73b"
  },
  {
    "url": "frontend/framework/BootStrap.html",
    "revision": "d3ead2e0dbb91619c4bc4cab15905cde"
  },
  {
    "url": "frontend/framework/VueJs框架.html",
    "revision": "4db44dd1948c9b9a0a381998289ff20f"
  },
  {
    "url": "frontend/index.html",
    "revision": "17e62da4ba540095aeec56085487461c"
  },
  {
    "url": "frontend/Technology/NodeJs.html",
    "revision": "0ddb2a10e7901f5878db4a8271c06bd7"
  },
  {
    "url": "frontend/Technology/前端理论.html",
    "revision": "77c48622876db9c4e5d26af5ae2116e4"
  },
  {
    "url": "frontend/Web网页优化.html",
    "revision": "12e55513de552f75a67a9188d7f0a2a8"
  },
  {
    "url": "handbook/index.html",
    "revision": "16e636e6808e4b2b32e65272c99e3c96"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c3230f3f2d8e3df954b46cc754ff4684"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "4aa72f0e5a318db5521f4451802526f0"
  },
  {
    "url": "img/psb.jpg",
    "revision": "79e4689d021ecbea8797037f007b903b"
  },
  {
    "url": "index.html",
    "revision": "de3e16f4336a6a0d215641b5191b0c49"
  },
  {
    "url": "interview/index.html",
    "revision": "694c8f49e25cc651745f894af27a985e"
  },
  {
    "url": "rearend/framework/Mybaits学习总结.html",
    "revision": "4e8ddfe08c3620557fdfeaed9aa69375"
  },
  {
    "url": "rearend/framework/Mybatis.html",
    "revision": "894ea4e63df1ce07e69d21570ba61af3"
  },
  {
    "url": "rearend/framework/Spring.html",
    "revision": "cb21fda1fb6f6857fafd8b358df60fd5"
  },
  {
    "url": "rearend/framework/Springboot+SpringCloud.html",
    "revision": "7915dd5f2b862d05bbcbe1c4052799fe"
  },
  {
    "url": "rearend/framework/SpringMVC.html",
    "revision": "53f433b5162c66c17da56c0c51b57210"
  },
  {
    "url": "rearend/index.html",
    "revision": "a09a8914ecda19135bf83fa658a2ea81"
  },
  {
    "url": "rearend/Technology/后端理论.html",
    "revision": "a94a98cd063ba4de812d2ba6ad4a7981"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
