// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
jQuery(document).ready(function () {
  /* ---------------------------------------------------------------------- */

  /*	Custom Functions
  /* ---------------------------------------------------------------------- */
  // Logo
  var $logo = $('#logo');

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  } // Show logo


  $('.menu .tabs a').click(function () {
    $logo.fadeIn('slow');
  }); // Hide logo

  $('.tab-profile').click(function () {
    $logo.fadeOut('slow');
  });
  /* ---------------------------------------------------------------------- */

  /*	Resume
  /* ---------------------------------------------------------------------- */
  // Rating bars

  $(".skills li .rating").each(function (index, e) {
    // Vars
    var $ratNum = 7,
        $rat = $(e).attr("data-rat"),
        $point = "<span></span>"; // Append points

    while ($ratNum > 0) {
      $(e).append($point);
      $ratNum--;
    }

    $(e).find("span").each(function (index, e) {
      if (index >= $rat) return false; // Append Disabled Rats

      $(e).animate({
        opacity: 1
      });
    });
  });
  /* ---------------------------------------------------------------------- */

  /*	About
  /* ---------------------------------------------------------------------- */
  // Profile Photo Slider
  //  $(".photo-inner ul").carouFredSel({
  //       direction           : "left",
  //     circular: true,
  //       auto    			: true,
  //       scroll 			: {
  //           items           : 1,
  //           fx 				: 'crossfade',
  //           duration        : 1500,
  //           wipe    		: true
  //       },
  //     swipe: {
  //         onTouch: true
  //     },
  //       items: {
  //           width: 153
  //       }
  //   });

  /* ---------------------------------------------------------------------- */

  /*	Menu
  /* ---------------------------------------------------------------------- */
  // Needed variables

  var $content = $("#content"); // Run easytabs

  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: 'slideDown',
    transitionOut: 'slideUp',
    animationSpeed: 600,
    tabs: ".tmenu",
    tabActiveClass: 'active'
  }); // Hover menu effect

  $content.find('.tabs li a').hover(function () {
    $(this).stop().animate({
      marginTop: "-7px"
    }, 200);
  }, function () {
    $(this).stop().animate({
      marginTop: "0px"
    }, 300);
  }); // Menu Navigation

  $(".menu .tabs").carouFredSel({
    responsive: true,
    direction: "left",
    circular: false,
    infinite: false,
    pagination: "#menu-controls",
    auto: false,
    scroll: {
      items: 1,
      duration: 300,
      wipe: true
    },
    prev: {
      button: "#menu-prev",
      key: "right"
    },
    next: {
      button: "#menu-next",
      key: "left"
    },
    swipe: {
      onTouch: true
    },
    items: {
      width: 140,
      visible: {
        min: 2,
        max: 5
      }
    }
  });
  /* ---------------------------------------------------------------------- */

  /*	Cats Filter
  /* ---------------------------------------------------------------------- */

  var $catsfilter = $('.cats-filter'); // Copy categories to item classes

  $catsfilter.find('a').click(function () {
    var currentOption = $(this).attr('data-filter');
    $(this).parent().parent().find('a').removeClass('current');
    $(this).addClass('current');
  });
  /* ---------------------------------------------------------------------- */

  /*	Portfolio
  /* ---------------------------------------------------------------------- */
  // Needed variables

  var $plist = $('#portfolio-list');
  var $pfilter = $('#portfolio-filter');

  if ($plist.length && $pfilter.length) {
    // Run Isotope
    $plist.isotope({
      filter: '*',
      layoutMode: 'masonry',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    }); // Isotope Filter

    $pfilter.find('a').click(function () {
      var selector = $(this).attr('data-filter');
      $plist.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  } // Portfolio image animation


  $plist.find('img').adipoli({
    'startEffect': 'transparent',
    'hoverEffect': 'boxRandom',
    'imageOpacity': 0.6,
    'animSpeed': 100
  });
  /* ---------------------------------------------------------------------- */

  /*	prettyPhoto
  /* ---------------------------------------------------------------------- */

  $("a[rel^='portfolio']").prettyPhoto({
    animation_speed: 'fast',

    /* fast/slow/normal */
    social_tools: '',
    theme: 'pp_default',
    horizontal_padding: 5
  });
  /* ---------------------------------------------------------------------- */

  /*	Contact Form
  /* ---------------------------------------------------------------------- */
  // Needed variables

  var $contactform = $('#contactform'),
      $success = 'Your message has been sent. Thank you!';
  $contactform.submit(function () {
    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: $(this).serialize(),
      success: function success(msg) {
        if (msg == 'SEND') {
          response = '<div class="success">' + $success + '</div>';
        } else {
          response = '<div class="error">' + msg + '</div>';
        } // Hide any previous response text


        $(".error,.success").remove(); // Show response message

        $contactform.prepend(response);
      }
    });
    return false;
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51943" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map