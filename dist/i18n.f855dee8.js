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
})({"js/i18n.js":[function(require,module,exports) {
// Get browser language
var locale = window.navigator.userLanguage || window.navigator.language; // We can have as many locales here as we want,
// and use any locales we want. We have English
// and Arabic as locales here as examples.

var translations = {
  // English translations
  "en": {
    "page-title": "juan cruz llorens | portfolio",
    "header": "juan cruz llorens",
    "job-title": "front end developer",
    "social-profiles": "social profiles",
    "intro1": "hi, my name is juan cruz and i am a front end developer with more than 10 years of experience with solid knowledges of project management tools and latest software development techniques.",
    "solutions": "solutions",
    "how-contact": "contact me",
    "intro2": "we can work together to design websites, application development, e-commerce websites or any other custom applications.",
    "intro3": "if you would need a quotes or have any questions, please contact me anytime and i will respond as soon as possible.",
    // MENU
    "profile": "profile",
    "resume": "resume",
    "certificates": "certificates",
    "portfolio": "portfolio",
    "contact": "contact",
    // RESUME-SKILLS
    "skills-heading-1": "Programming Languages",
    "s1-1": "HTML5/CSS3",
    "s1-2": "Javascript",
    "s1-3": "TypeScript",
    "s1-4": "React/Redux",
    "s1-5": "NodeJS",
    "skills-heading-2": "Tools & Technologies",
    "s2-1": "Atlassian Jira/Confluence",
    "s2-2": "Figma/Simply",
    "s2-3": "MS VSCode",
    "s2-4": "Gitlab/Github",
    "s2-5": "Docker",
    "s2-6": "AWS",
    "s2-7": "Webpack",
    "s2-8": "Git",
    "skills-heading-3": "Best Practices",
    "s3-1": "Web Standards",
    "s3-2": "Accessibility",
    "s3-3": "Usability",
    "s3-4": "Validation",
    "s3-5": "SEO principles",
    "s3-6": "Compatibility",
    "skills-heading-4": "Languages",
    "s4-1": "Spanish",
    "s4-2": "English",
    "download-resume": "Download resume as PDF format",
    // EXPERIENCE
    "experience-heading": "Experience",
    "job-position-1": "Experience 1",
    "job-timeline-1": "Experience 2",
    "company-name-1": "Experience 3",
    "job-location-1": "Experience 3",
    "job-description-1": "Experience 3",
    "job-position-2": "Experience 1",
    "job-timeline-2": "Experience 2",
    "company-name-2": "Experience 3",
    "job-location-2": "Experience 3",
    "job-description-2": "Experience 3",
    "job-position-3": "Experience 1",
    "job-timeline-3": "Experience 2",
    "company-name-3": "Experience 3",
    "job-location-3": "Experience 3",
    "job-description-3": "Experience 3",
    "job-position-4": "Experience 1",
    "job-timeline-4": "Experience 2",
    "company-name-4": "Experience 3",
    "job-location-4": "Experience 3",
    "job-description-4": "Experience 3",
    "job-position-5": "Experience 1",
    "job-timeline-5": "Experience 2",
    "company-name-5": "Experience 3",
    "job-location-5": "Experience 3",
    "job-description-5": "Experience 3",
    // EDUCATION
    "education-heading": "Education",
    "education-institution-1": "Universidad Tecnológica Nacional (FRR). Argentina.",
    "education-timeline-1": "1997",
    "education-title-1": "System Engineer",
    "education-description-1": "",
    "education-institution-2": "Escuela Normal Superior 'Manuel F. Mantilla'. Argentina.",
    "education-timeline-2": "1987 - 1991",
    "education-title-2": "High School Degree",
    "education-description-2": "High School Degree (Homologated by the Ministry of Education of Spain). Awarded with Medal of Merit for Best Student of my class.",
    // CERTIFICATIONS AND COURSES
    "certificate-logos": "Technologies",
    "certificate-heading": "Certificates",
    "certificate-institution-1": "FORMAN (Centro de Formación en Comunicaciones y Tecnologías de la Información). Málaga, Spain.",
    "certificate-timeline-1": "2012",
    "certificate-main-title-1": "Microsoft Certified Professional (MCP) and (MCTS)",
    "certificate-title-1": "Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3",
    "certificate-number-1": "Certification Number: E092-2043",
    "certificate-title-2": "Microsoft Certified Professional: Microsoft Certified Professional",
    "certificate-number-2": "Certification Number: E092-2038",
    "certificate-title-3": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Presentation Foundation Applications",
    "certificate-number-3": "Certification Number: D686-2820",
    "certificate-title-4": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ASP.NET Applications",
    "certificate-number-4": "Certification Number: D669-2800",
    "certificate-title-5": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ADO.NET Applications",
    "certificate-number-5": "Certification Number: D627-0446",
    "certificate-title-6": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Forms Applications",
    "certificate-number-6": "Certification Number: D590-2692",
    "course-heading": "Courses",
    "course-institution-1": "Nibisoft S.L.. Málaga, Spain.",
    "course-timeline-1": "2011 (780 Hours)",
    "course-title-1": "Microsoft .NET-MCTS Expert Developer",
    "course-description-1": "",
    "course-institution-2": "Instituto Municipal para Formación y Empresa (IMFE). Málaga, Spain.",
    "course-timeline-2": "2010 (984 Hours)",
    "course-title-2": "Computer Applications Programmer",
    "course-description-2": "",
    "course-institution-3": "Instituto Municipal para Formación y Empresa” (IMFE). Málaga, Spain.",
    "course-timeline-3": "2009 (364 Hours)",
    "course-title-3": "Web Design and Multimedia",
    "course-description-3": "",
    "course-institution-4": "Centro de Formación Rafael Salinas. Málaga, Spain.",
    "course-timeline-4": "2009 (60 Hours)",
    "course-title-4": "Advanced PHP",
    "course-description-4": "",
    // CONTACT
    "contact-info": "contact info",
    "contact-form-title": "Let's keep in touch",
    "contact-name": "Your Name",
    "contact-email": "Your Email",
    "contact-message": "Your Message",
    "contact-btn-text": "Send your message",
    // OTHERS
    "copy-right": "© Copyright 2009 - 2022 | All rights reserved."
  },
  // Arabic translations
  "es": {
    "page-title": "Juan Cruz Llorens | Portafolio",
    "header": "Juan Cruz Llorens",
    "job-title": "DESARROLLADOR FRONT END"
  }
}; // When the page content is ready...

document.addEventListener("DOMContentLoaded", function () {
  document // Find all elements that have the key attribute
  .querySelectorAll("[data-i18n-key]").forEach(translateElement);
}); // Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key

function translateElement(element) {
  var key = element.getAttribute("data-i18n-key");
  var translation = translations[locale][key];
  element.innerText = translation;
}
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55047" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/i18n.js"], null)
//# sourceMappingURL=/i18n.f855dee8.js.map