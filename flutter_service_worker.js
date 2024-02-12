'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5ba21efe7f8ced4b1291c8160f4e148f",
"assets/AssetManifest.bin.json": "72a2ec4dd63269e400f96413268f1541",
"assets/AssetManifest.json": "5e52336bfc0404623174f7891a6e6d75",
"assets/assets/designs/auth-bg.png": "7f92dff9029df2d64589416d343e8d6c",
"assets/assets/designs/b525dcf939878baf304106d3d4734a44.png": "45620ad8fd7623d6e865d071637cfa81",
"assets/assets/designs/bed75332ea2ff21bc848d0aa242b3cf1.pdf": "c37db4373288193a72aa870ddae19b23",
"assets/assets/designs/K6UVT.png": "9c30ee2b266214583c84ab5a5957d0a9",
"assets/assets/fonts/IndianRupee.ttf": "6019cdf0a78a3583e090f7c2e641b550",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/images/app/auth-bg.jpg": "771e558cb2edbbb130a5d83cd0588370",
"assets/assets/images/app/auth-bg2.jpg": "9d2d6827c7db0ef12cd93b15ad0f59b0",
"assets/assets/images/app/bg-min.jpg": "cbecca0ce5c64b649fb254ae3d1a76ab",
"assets/assets/images/app/logo.png": "a3c361d902ee692c69e8b48aae34632d",
"assets/assets/images/app/logo_l_black.png": "3da9a80e747ce9bdfcde5b7ac1af43a7",
"assets/assets/images/app/logo_l_white.png": "83b932652c624585847ac8e8fe01bb86",
"assets/assets/images/app/logo_l_white1.png": "d455ae3d49ee74339c9a714beccfc574",
"assets/assets/images/flags/ic_ar.png": "ead63c82d77a99b1c50230f75153b47f",
"assets/assets/images/flags/ic_de.png": "be44cab6fec15f70e2c84862838aeb6e",
"assets/assets/images/flags/ic_fr.png": "40dc814b25b14060af3bb7ecb3adb39b",
"assets/assets/images/flags/ic_india.png": "a5f4b487e6b01ff36c6ab3b0017ad34d",
"assets/assets/images/flags/ic_us.png": "da547d78f0813ecfca786901eca9e9a5",
"assets/assets/images/icons/checkout/icons8-billing-machine-96.png": "c9c72e080a95f1491a25bed1cd3be4c4",
"assets/assets/images/icons/checkout/icons8-delivery-96.png": "f57f3b46632298c8da974e06f3ac1904",
"assets/assets/images/icons/checkout/icons8-payment-method-64.png": "3011cdef49618d8941d670564d7599ac",
"assets/assets/images/icons/checkout/icons8-thumbs-up-96.png": "be2d96fecfe1df477e7d7b2b691d1b78",
"assets/assets/images/icons/checkout/icons8-worldwide-delivery-96.png": "9fc9944cc768a9bb64054f14ddf457cc",
"assets/assets/images/icons/coin-dummy.png": "9e34088394a3b9b9cc5ba3d6311f756b",
"assets/assets/images/icons/flutter_wave_logo.png": "9289ea279440b8142138f531be1cafb4",
"assets/assets/images/icons/ic_about_us.png": "9e40d67502f5f9fd1b9bc51b73f357a0",
"assets/assets/images/icons/ic_active_location.png": "420b825b6e4375c93631df95648ffd21",
"assets/assets/images/icons/ic_android_12.png": "85c56a5b7edb773b9bc72801cf8ebd7e",
"assets/assets/images/icons/ic_arrow_left.png": "c5f743155303bb7d2227b1581ddfc431",
"assets/assets/images/icons/ic_arrow_right.png": "0473d1d15284b8fcb65d76d2d2c5a888",
"assets/assets/images/icons/ic_buy.png": "29c963d31eb2d0d0f0c056fbb667b565",
"assets/assets/images/icons/ic_calendar.png": "06250e9091b512c9dcfdde2c66cc1213",
"assets/assets/images/icons/ic_call.png": "86b410990dc2eb78a133a6ed533eed29",
"assets/assets/images/icons/ic_calling.png": "f06e4aa76998063c80a8e47c29ebf590",
"assets/assets/images/icons/ic_category.png": "3111c2e6ee478f7637643c14e0a043d9",
"assets/assets/images/icons/ic_chat.png": "e3d3453cf42d386102594163bd69ff61",
"assets/assets/images/icons/ic_check_update.png": "6f9ff8ce913cb3aba67f826911d40b6b",
"assets/assets/images/icons/ic_confirm_check.png": "9826cf94beae945d38ee6fc4fbb8872e",
"assets/assets/images/icons/ic_darkmode.png": "8259dd0b5a621492e034a2b8518b6677",
"assets/assets/images/icons/ic_delete.png": "c2f8a2d324228e00cbda099b74c5f012",
"assets/assets/images/icons/ic_delete_account.png": "85904786da7665d1621bea2b651dbb02",
"assets/assets/images/icons/ic_delete_dialog.png": "1b625625673acb5b8e7afbb35cc3898b",
"assets/assets/images/icons/ic_diagonal_left_down_arrow.png": "f8f9c2610d34cf5809265ffcea84d5dd",
"assets/assets/images/icons/ic_diagonal_right_up_arrow.png": "822b9227293b1dcbb2a7b204ceb3d03d",
"assets/assets/images/icons/ic_document.png": "0c83001afcd5ac6386a1bdadcfba466e",
"assets/assets/images/icons/ic_edit_square.png": "b76a29277f01d9478e345eb73a1f1344",
"assets/assets/images/icons/ic_email.png": "d531be7f753e52ba4f000b09f7c9b01c",
"assets/assets/images/icons/ic_facebook.png": "5c0e6980fc15a5f6cdabab688f12d1da",
"assets/assets/images/icons/ic_featured.png": "7d8479c65cfbd6afb46810363f815d5a",
"assets/assets/images/icons/ic_fill_category.png": "032e8ac08dac950534c5447dcc50d731",
"assets/assets/images/icons/ic_fill_chat.png": "1dc7db478fd613d85e839bc01dae57b6",
"assets/assets/images/icons/ic_fill_filter.png": "76cdb5021b33b2d833b1cf34024c1c5d",
"assets/assets/images/icons/ic_fill_heart.png": "d92fd1ac8c2c9743de807f919ce87330",
"assets/assets/images/icons/ic_fill_home.png": "ec04e605d7763df657a00af3e9e65088",
"assets/assets/images/icons/ic_fill_notification.png": "252791f89ff29c7b312847ddd2573ab7",
"assets/assets/images/icons/ic_fill_profile.png": "2cd6b596a64827d683b101c4ac83008f",
"assets/assets/images/icons/ic_fill_ticket.png": "c73aa31de036ac01a30eecd99825fdb7",
"assets/assets/images/icons/ic_fill_wallet.png": "79507f6feaab416639bfdbb269d62eb5",
"assets/assets/images/icons/ic_filter.png": "18009b022a40b9d7a6bc7139facdc41c",
"assets/assets/images/icons/ic_heart.png": "89e4afd90f01f957afba5f0ea18d87f7",
"assets/assets/images/icons/ic_helpandsupport.png": "a65566bd622e4959b5d0c5e1d9e9b2e3",
"assets/assets/images/icons/ic_hide.png": "a1b7ecf4fa949a1a1494e30130e44073",
"assets/assets/images/icons/ic_home.png": "e183d64245abdf7678373c9231b485b6",
"assets/assets/images/icons/ic_info.png": "88c675f59697ca0faf375d3d1b254c43",
"assets/assets/images/icons/ic_instagram.png": "4f0a0af6e3156fcb746cc496bad33d50",
"assets/assets/images/icons/ic_language.png": "5d54482d707a26f80fe57d06da7d9fa5",
"assets/assets/images/icons/ic_linkedIN.png": "9281925c90176d2c9be5aa9e2eb98c35",
"assets/assets/images/icons/ic_location.png": "84613702387c2df7c25ce0921a961071",
"assets/assets/images/icons/ic_lock.png": "5d5bde273d8865d3a522720b43b1fcf8",
"assets/assets/images/icons/ic_message.png": "89c9a578586ce472ce0ae6205fca81fd",
"assets/assets/images/icons/ic_notification.png": "4787f8f3493cd3a1e2d5679213b01170",
"assets/assets/images/icons/ic_notification_user.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/icons/ic_no_photo.png": "424ca6d9fa7f40beecd76611c9b0cd95",
"assets/assets/images/icons/ic_profile2.png": "5fc3b12cb76581efd75c577b222959e7",
"assets/assets/images/icons/ic_search.png": "a7df26aaf160b08e91e3b64ef07fdc19",
"assets/assets/images/icons/ic_selectImage.png": "feb8aca5acbacc5be558bcd064242296",
"assets/assets/images/icons/ic_services_address.png": "84613702387c2df7c25ce0921a961071",
"assets/assets/images/icons/ic_setting.png": "f8f6e2f31fb4e24af4521a95f7acff1d",
"assets/assets/images/icons/ic_shield_done.png": "37816efb84ea2795ddcaeaa5df3aae9d",
"assets/assets/images/icons/ic_show.png": "b8e02af44c23aa2968720f818c1a8ca4",
"assets/assets/images/icons/ic_slider_status.png": "a8e991ce0e07f3967d0463bee423bf77",
"assets/assets/images/icons/ic_star.png": "950a303b56a8142c346c74bba58428e4",
"assets/assets/images/icons/ic_stars.png": "0c58603e1166663d612e8767f503f3a0",
"assets/assets/images/icons/ic_star_fill.png": "1d3dd885d4032586f8286d1ca038a8e3",
"assets/assets/images/icons/ic_ticket.png": "93898707b13310a5058cfd53e41087c2",
"assets/assets/images/icons/ic_twitter.png": "f637e93385cb1d4892a3b235ad4dce26",
"assets/assets/images/icons/ic_un_fill_wallet.png": "2f2458b6d5ce504a56797f446134d3f7",
"assets/assets/images/icons/ic_verified.png": "78357d63a5c8727f4cd2f05638dc9f09",
"assets/assets/images/icons/ic_whatsapp.png": "b85b3ffd53c2dd4031ffb4d09d856bcf",
"assets/assets/images/icons/ic_youtube.png": "4d4d815e5c8e9a299e4bb898814b8381",
"assets/assets/images/icons/paypal_logo.png": "18961d1adf47758bdb21431a86baa2e1",
"assets/assets/images/icons/razorpay_logo.png": "034dc77dee20162fa90eb418cf286473",
"assets/assets/images/icons/stripe_logo.png": "c715fd0c572d579238426ede81facda2",
"assets/assets/images/icons/wallet-card-bg.jpg": "ed664143437fbffeece837bb501205a4",
"assets/assets/images/referandearn.png": "93bd411389ccb8757551fa1ce08e8f6c",
"assets/assets/images/update.avif": "ef3dec0f8b58ab886577b79e074c7fb5",
"assets/assets/images/user_green.png": "9afcbf8023225cc4576b2a9d765c60d2",
"assets/assets/images/user_inactive.png": "2f87740933fdcb5cb93d83f8f414b342",
"assets/assets/images/user_null.png": "6f47a25536f16fd6a2bf925fb4de795d",
"assets/assets/lotties/71686-add-item.json": "cb7563b1b36b2197d3b10443b54e8ff6",
"assets/assets/lotties/chat_loading.json": "4312b6b6f1ff8daecae2f8e1abb458c4",
"assets/assets/lotties/ecom-store.json": "c04934acab1ef5bce62b932e98c8d27a",
"assets/assets/lotties/empty-box.json": "8c8eb89772082c0c80e31c10da5fb7c4",
"assets/assets/lotties/page-not-found.json": "6fa7fafdd3f290c939b15aaf7bbca2af",
"assets/assets/lotties/rocket.json": "dba7d152fb9377bc5d14221027dcfff5",
"assets/assets/lotties/support.json": "8028feef2b2122a7304e15627b67f26b",
"assets/assets/lotties/team.json": "78708454d2994ec54c2e48bc8f788770",
"assets/assets/lotties/uploading.json": "3e2980e2d1ec14a6371e9474fce7d542",
"assets/assets/lotties/uploading_arrow.json": "e2567947bf3a16afba16894cec3b5b8c",
"assets/assets/lotties/uploading_circle_arrow.json": "3ef0f8eeae3a769bcc34d0e86046ce7b",
"assets/assets/rive/empty_message.riv": "9711db4921581cc0fa3783fd37ad4ebb",
"assets/assets/svgs/arrow-right-336-svgrepo-com.svg": "edb38e3d1c033550ca024d70af10f07a",
"assets/FontManifest.json": "ab80f6637b29cbf01d2aef1564e1bac4",
"assets/fonts/MaterialIcons-Regular.otf": "ccc9413b3648636711b4c200d72663e8",
"assets/NOTICES": "411d6929042456c1079178a563f32466",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fd835dc31cba43ff974abd616b1e3f62",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0e44238499df0dc9b4a3a3b6e61771c4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6671b5c8501b172723632cbc3164eb6a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ee6991a6787ab40991f35611fc0c4a05",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a773a3a16d55e1263a8f95ed17e92c98",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "2f5202758e7e361b727931bec0eb3595",
"icons/Icon-512.png": "6b5de2470b6a7b868de6d188cd6462fc",
"icons/Icon-maskable-192.png": "2f5202758e7e361b727931bec0eb3595",
"icons/Icon-maskable-512.png": "6b5de2470b6a7b868de6d188cd6462fc",
"index.html": "bb3080e4404962755e35e76a594ee4f3",
"/": "bb3080e4404962755e35e76a594ee4f3",
"main.dart.js": "af589f1fd0a4bf9170819ffb69a7845c",
"manifest.json": "41c02ecb569fa219de09c1d431303e74",
"version.json": "b6e2bcd6e6e8606cac949270ac8e11e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
