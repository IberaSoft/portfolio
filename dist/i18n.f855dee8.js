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
var locale = window.navigator.userLanguage || window.navigator.language;
var translations = {
  // English translations
  "en": {
    "page-title": "Juan Cruz Llorens | Portfolio",
    "header": "Juan Cruz Llorens",
    "job-title": "FRONT END DEVELOPER",
    "social-profiles": "Social Profiles",
    "intro1": "Hi, my name is Juan Cruz and i am a Front End Developer with more than 10 years of experience with solid knowledges of project management tools and latest software development techniques.",
    "solutions": "SOLUTIONS",
    "how-contact": "CONTACT ME",
    "intro2": "We can work together to design websites, application development, e-commerce websites or any other custom applications.",
    "intro3": "If you would need a quotes or have any questions, please contact me anytime and i will respond as soon as possible.",
    // MENU
    "profile": "Profile",
    "resume": "Resume",
    "certificates": "Certificates",
    "portfolio": "Portfolio",
    "contact": "Contact",
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
    "download-resume-en": "Download resume as PDF format",
    // EXPERIENCE
    "experience-heading": "Experience",
    "job-position-sfe": "Front End Developer",
    "job-timeline-sfe": "Mar 2016 - Present",
    "company-name-sfe": "William Hill - Full Time",
    "job-location-sfe": "Gibratlar, Gibraltar",
    "jd-sfe-1": "Working as part of agile development teams to deliver robust, engaging, and usable solutions.",
    "jd-sfe-2": "Taking personal responsibility for components’ technical delivery – collaborative with senior developers and architects to design robust, scalable technical solutions.",
    "jd-sfe-3": "Collaborating with Product Managers to keep on track with the project's delivery plan and timelines.",
    "jd-sfe-4": "Working closely with the UX Team to improve the website and applications for a global audience.",
    "jd-sfe-5": "Debugging and resolving the problems by identifying and analyzing the root cause of the problem.",
    "jd-sfe-6": "Working on CI/CD releasing to production new features and bug fixes via the most efficient delivery method.",
    "jd-sfe-7": "Maintaining automated unit and integration test cases with Jest, React Testing Library, and Cypress.",
    "jd-sfe-8": "Integration to the company's website of 3rd-party software applications.",
    "jd-sfe-9": "Contributed to developing an animated Football Scoreboard for all devices that helped to increase visits for in-play matches.",
    "jd-sfe-10": "Awarded with the second position at the William Hill Hackathon 2017.",
    "job-position-luxui": "Lead UX / UI Developer",
    "job-timeline-luxui": "Jul 2015 - Feb 2016",
    "company-name-luxui": "Betfred - Full Time",
    "job-location-luxui": "Gibratlar, Gibraltar",
    "jd-luxui-1": "Designing and developing mockups for the main website with Photoshop.",
    "jd-luxui-2": "Creating clean and maintainable cross-browser compatible code with SASS and HTML5.",
    "jd-luxui-3": "Implementing the Bootstrap Framework to provide an excellent UX regardless of devices or platform.",
    "jd-luxui-4": "Utilization of a work environment with Gulp to automate test-runs, linting and minification.",
    "jd-luxui-5": "Developing a responsive and engaging front end web application using AngularJS and Babel (to transpile ECMAScript 6 code).",
    "jd-luxui-6": "Continuous integration and deployments to test and production environments with Git, TFS 2013 and Octopus Deploy.",
    "jd-luxui-7": "Assisting other developers with code and best-practice related questions.",
    "job-position-fe": "Front End Developer",
    "job-timeline-fe": "Ene 2013 - Jun 2015",
    "company-name-fe": "Betfred - Full Time",
    "job-location-fe": "Gibratlar, Gibraltar",
    "jd-fe-1": "Involved in all levels of an agile SDLC and in constant communication with all departments and senior management. I always ensure adherence to architecture standards, code consistency and maintainability to deliver quality software on time.",
    "jd-fe-2": "Developing for Sitecore CMS, within ASP.NET and C# environment.",
    "jd-fe-3": "Deploying to staging and production servers.",
    "jd-fe-4": "Working with QA and testing departments to ensure thorough system testing.",
    "jd-fe-5": "Involved in the Front End Development using the latest technologies like Bootstrap(LESS) and AngularJS, using development tools like tasks management (Gulp/Grunt) and package manager (bower), including source control version like Git/TFS.",
    "jd-fe-6": "Complete development of web applications for internal use of the company with the latest technologies.",
    "job-position-wd": "Designer and Web Developer",
    "job-timeline-wd": "Ene 2009 - Ene 2013",
    "company-name-wd": "IberaSoft - Freelance",
    "job-location-wd": "Fuengirola, Spain",
    "jd-wd-1": "Designed and developed themes for CMS like Joomla! , Wordpress and Prestashop.",
    "jd-wd-2": "Designed and developed PHP/MySQL Admin panels with CRUD capabilities for commercial management.",
    "jd-wd-3": "Domains and Hosting Reselling Management (WHM/cPanel/Virtuozzo/ WHMCS Platforms).",
    "job-position-ife": "Internship as Frontend Developer",
    "job-timeline-ife": "May 2012 - Aug 2012",
    "company-name-ife": "CloudCIX - Full Time",
    "job-location-ife": "Cork, Irleland",
    "jd-ife-1": "Complete company website redesign, logo vectorization, infographics and advertising for local newspaper.",
    "jd-ife-2": "Front end development for a company website based on Service Oriented Architecture (SOA) and ASP.NET (MVC3 Razor).",
    "job-position-dwd": "Designer and Web Developer",
    "job-timeline-dwd": "Aug 2011 - Nov 2011",
    "company-name-dwd": "Kwik Save Stores - Full Time",
    "job-location-dwd": "Benalmadena, Spain",
    "jd-dwd-1": "Designed, developed and maintained the Company E-Commerce Web Site with Prestashop.",
    "jd-dwd-2": "Completed flyers, catalogues, menus, banners and discount cards designed in Photoshop and InDesign for marketing campaigns.",
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
    // PORTFOLIO
    "portfolio-heading": "Some of the projects i'm proud with from 2009 to 2013",
    "all": "All",
    "design": "Design",
    "mobile": "Mobile Apps",
    "web": "Web Apps",
    "project": "Course Projects",
    "img-title-14": "Cork Internet eXchange",
    "img-category-14": "Web Development",
    "img-title-13": "Discount Me",
    "img-category-13": "Mobile Apps",
    "img-title-12": "Your Kwik Save",
    "img-category-12": "E-Commerce Web Site",
    "img-title-11": "Bulldog Frances Trinidad",
    "img-category-11": "Web Development",
    "img-title-10": "Lavaiswiss",
    "img-category-10": "Web Development",
    "img-title-9": "ECMY Construcciones",
    "img-category-9": "Web Development",
    "img-title-8": "Costa del Sol Gardens",
    "img-category-8": "Web Development",
    "img-title-7": "DeliMar Restaurant",
    "img-category-7": "Design",
    "img-title-6": "Clinica Dental Cima",
    "img-category-6": "Web Development",
    "img-title-5": "Cursos de Odontologia",
    "img-category-5": "Web Development",
    "img-title-4": "Fun Holydays",
    "img-category-4": "Design",
    "img-title-3": "Distribuidores en el Mundo",
    "img-category-3": "Backend Development",
    "img-title-2": "Ventas Isthetime",
    "img-category-2": "Backend Development",
    "img-title-1": "C&C Architects",
    "img-category-1": "Design",
    // CONTACT
    "contact-info": "Contact info",
    "contact-form-title": "Let's keep in touch",
    "contact-name": "Your Name",
    "contact-email": "Your Email",
    "contact-message": "Your Message",
    "contact-btn-text": "Send your message",
    // OTHERS
    "copy-right": "© Copyright 2009 - 2022 | All rights reserved.",
    "page-not-found": "Page not found",
    "page-not-found-msg": "Sorry, but the page you were trying to view does not exist."
  },
  // Spanish translations
  "es": {
    "page-title": "Juan Cruz Llorens | Portafolio",
    "header": "Juan Cruz Llorens",
    "job-title": "FRONT END DEVELOPER",
    "social-profiles": "Perfiles Sociales",
    "intro1": "Hola, Mi nombre es Juan Cruz y soy un Desarrollador Front End con más de 10 años de experiencia con conocimientos sólidos en herramientas de gestión de proyectos, procesos y técnicas más avanzadas en desarrollo de software.",
    "solutions": "SOLUCIONES",
    "how-contact": "HABLEMOS",
    "intro2": "Podemos trabajar juntos en el diseño de sitios webs, desarrollo de aplicaciones, comercio electrónico, diseño de impresión u otras solicitudes personalizadas.",
    "intro3": "Si desea consultar presupuestos o realizar alguna pregunta, por favor contacteme y le respondere a la mayor brevedad posible.",
    // MENU
    "profile": "Perfil",
    "resume": "Resume",
    "certificates": "Certificados",
    "portfolio": "Portafolio",
    "contact": "Contacto",
    // RESUME-SKILLS
    "skills-heading-1": "Lenguajes de Programacion",
    "s1-1": "HTML5/CSS3",
    "s1-2": "Javascript",
    "s1-3": "TypeScript",
    "s1-4": "React/Redux",
    "s1-5": "NodeJS",
    "skills-heading-2": "Herramientas & Tecnologias",
    "s2-1": "Atlassian Jira/Confluence",
    "s2-2": "Figma/Simply",
    "s2-3": "MS VSCode",
    "s2-4": "Gitlab/Github",
    "s2-5": "Docker",
    "s2-6": "AWS",
    "s2-7": "Webpack",
    "s2-8": "Git",
    "skills-heading-3": "Buenas Practicas",
    "s3-1": "Estandares Web",
    "s3-2": "Accesibilidad",
    "s3-3": "Usabilidad",
    "s3-4": "Validacion",
    "s3-5": "Optimizacion SEO",
    "s3-6": "Compatibilidad",
    "skills-heading-4": "Idiomas",
    "s4-1": "Español",
    "s4-2": "Ingles",
    "download-resume-es": "Descargue el curriculum en formato PDF",
    // EXPERIENCE
    "experience-heading": "Experiencia",
    "job-position-sfe": "Desarrolador Front End",
    "job-timeline-sfe": "Mar 2016 - Presente",
    "company-name-sfe": "William Hill - A Tiempo Completo",
    "job-location-sfe": "Gibratlar, Gibraltar",
    "jd-sfe-1": "Trabaje como parte de equipos de desarrollo ágiles para ofrecer soluciones sólidas, atractivas y utilizables.",
    "jd-sfe-2": "Asumida la responsabilidad personal de la entrega técnica de los componentes: en colaboración con desarrolladores y arquitectos senior para diseñar soluciones técnicas robustas y escalables.",
    "jd-sfe-3": "Colaboracion con los Gerentes de Producto para mantenerse al día con el plan de entrega y los plazos del proyecto.",
    "jd-sfe-4": "Trabaje en estrecha colaboración con el equipo de UX para mejorar el sitio web y las aplicaciones para una audiencia global.",
    "jd-sfe-5": "Depuración y resolución de problemas identificando y analizando la causa raíz del problema.",
    "jd-sfe-6": "Trabaje en el lanzamiento de CI/CD para la producción de nuevas funciones y correcciones de errores a través del método de entrega más eficiente.",
    "jd-sfe-7": "Mantenimiento de casos de prueba de unidad e integración automatizados con Jest, React Testing Library y Cypress.",
    "jd-sfe-8": "Integración a la web de la empresa de aplicaciones software de terceros.",
    "jd-sfe-9": "Contribuí al desarrollo de un marcador de fútbol animado para todos los dispositivos que ayudó a aumentar las visitas a los partidos en vivo.",
    "jd-sfe-10": "Premiado con la segunda posición en el William Hill Hackathon 2017.",
    "job-position-luxui": "Lead UX / UI Developer",
    "job-timeline-luxui": "Jul 2015 - Feb 2016",
    "company-name-luxui": "Betfred - A Tiempo Completo",
    "job-location-luxui": "Gibratlar, Gibraltar",
    "jd-luxui-1": "Diseño y desarrollo de maquetas para la web principal de la empresa con Photoshop.",
    "jd-luxui-2": "Creación de código compatible entre navegadores limpio y fácil de mantener con SASS y HTML5.",
    "jd-luxui-3": "Implementación de Bootstrap para proporcionar una excelente UX independientemente del dispositivo o plataforma.",
    "jd-luxui-4": "Utilización de un entorno de trabajo con Gulp para automatizar tests, limpiar y minificar del código.",
    "jd-luxui-5": "Desarrollo front-end de una aplicación web robusta y atractiva usando AngularJS y Babel (para compilar el código en ECMAScript 6).",
    "jd-luxui-6": "Integración continua del código y despliegues a entornos de prueba y producción con Git, TFS2013 y Octopus Deploy.",
    "jd-luxui-7": "Asistencia a otros desarrolladores con preguntas relacionadas al código y buenas prácticas.",
    "job-position-fe": "Desarrolador Front End",
    "job-timeline-fe": "Ene 2013 - Jun 2015",
    "company-name-fe": "Betfred - A Tiempo Completo",
    "job-location-fe": "Gibratlar, Gibraltar",
    "jd-fe-1": "Intervengo en todos los niveles del ciclo de vida del software. En constante comunicación con todos los departamentos y la alta dirección. Garantizando que se cumplan todas las normas de la arquitectura, la consistencia del código y la capacidad de mantenimiento.",
    "jd-fe-2": "Desarrollo para Sitecore CMS en un entorno con .NET y C#.",
    "jd-fe-3": "Implementación en los servidores de prueba y producción.",
    "jd-fe-4": "Trabajo con los departamentos de pruebas y control de calidad para asegurar el funcionamiento del sistema completo.",
    "jd-fe-5": "Involucrado en el desarrollo del front-end utilizando últimas tecnologías como Bootstrap (LESS) y AngularJS, herramientas de desarrollo para la gestión de tareas (Gulp/Grunt), y gestores de paquetes (Bower), incluyendo control versiones como Git/TFS.",
    "jd-fe-6": "Desarrollo completo de aplicaciones web para uso interno de la empresa con las últimas tecnologías.",
    "job-position-wd": "Diseñador y Desarrollador Web",
    "job-timeline-wd": "Ene 2009 - Ene 2013",
    "company-name-wd": "IberaSoft - Autonomo",
    "job-location-wd": "Fuengirola, Spain",
    "jd-wd-1": "Diseño y Desarrollo de plantillas para Joomla!, Wordpress y Prestashop.",
    "jd-wd-2": "Completo diseño y desarrollo desde PSD a PHP/HTML5/CSS3/Java Script (jQuery).",
    "jd-wd-3": "Gestion de Dominios y Hosting con plataformas WHM/cPanel, Virtuozzo y WHMCS).",
    "job-position-ife": "Becado como Frontend Developer",
    "job-timeline-ife": "May 2012 - Ago 2012",
    "company-name-ife": "CloudCIX - A Tiempo Completo",
    "job-location-ife": "Cork, Irlanda",
    "jd-ife-1": "Rediseño del sitio web de la empresa con Bootstrap. Vectorización de logos con Illustrator. Diseño de infografías en Photoshop. Publicidad para el periódico local en InDesign. ",
    "jd-ife-2": "Desarrollo del Front-End para website basado en arquitectura orientada a servicios (SOA) y ASP.NET (MVC3 Razor).",
    "job-position-dwd": "Diseñador y Desarrollador Web",
    "job-timeline-dwd": "Ago 2011 - Nov 2011",
    "company-name-dwd": "Kwik Save Stores - A Tiempo Completo",
    "job-location-dwd": "Benalmadena, Spain",
    "jd-dwd-1": "Análisis, Diseño, Desarrollo y Mantenimiento de un Sitio Web de la empresa de comercio electrónico con Prestashop. ",
    "jd-dwd-2": "Diseño completo de folletos, catalogos, menus, banners and tarjetas de descuento diseñadas en Photoshop e InDesign para campañas de marketing.",
    // EDUCATION
    "education-heading": "Educación",
    "education-institution-1": "Universidad Tecnológica Nacional (FRR). Argentina.",
    "education-timeline-1": "1997",
    "education-title-1": "Ingeniero en Sistemas de la Información",
    "education-description-1": "",
    "education-institution-2": "Escuela Normal Superior 'Manuel F. Mantilla'. Argentina.",
    "education-timeline-2": "1987 - 1991",
    "education-title-2": "Bachiller",
    "education-description-2": "Titulo de Bachiller (Homologado por el Ministerio de Educación de España.). Graduado con la Medalla al Mejor Promedio de mi promocion.",
    // CERTIFICATIONS AND COURSES
    "certificate-logos": "Tecnologias",
    "certificate-heading": "Certificados",
    "certificate-institution-1": "FORMAN (Centro de Formación en Comunicaciones y Tecnologías de la Información). Málaga, Spain.",
    "certificate-timeline-1": "2012",
    "certificate-main-title-1": "Microsoft Certified Professional (MCP) and (MCTS)",
    "certificate-title-1": "Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3",
    "certificate-number-1": "Number Certificado: E092-2043",
    "certificate-title-2": "Microsoft Certified Professional: Microsoft Certified Professional",
    "certificate-number-2": "Number Certificado: E092-2038",
    "certificate-title-3": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Presentation Foundation Applications",
    "certificate-number-3": "Number Certificado: D686-2820",
    "certificate-title-4": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ASP.NET Applications",
    "certificate-number-4": "Number Certificado: D669-2800",
    "certificate-title-5": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ADO.NET Applications",
    "certificate-number-5": "Number Certificado: D627-0446",
    "certificate-title-6": "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Forms Applications",
    "certificate-number-6": "Number Certificado: D590-2692",
    "course-heading": "Cursos",
    "course-institution-1": "Nibisoft S.L.. Málaga, España.",
    "course-timeline-1": "2011 (780 Hours)",
    "course-title-1": "Microsoft .NET-MCTS Expert Developer",
    "course-description-1": "",
    "course-institution-2": "Instituto Municipal para Formación y Empresa (IMFE). Málaga, España.",
    "course-timeline-2": "2010 (984 Hours)",
    "course-title-2": "Computer Applications Programmer",
    "course-description-2": "",
    "course-institution-3": "Instituto Municipal para Formación y Empresa” (IMFE). Málaga, España.",
    "course-timeline-3": "2009 (364 Hours)",
    "course-title-3": "Web Design and Multimedia",
    "course-description-3": "",
    "course-institution-4": "Centro de Formación Rafael Salinas. Málaga, España.",
    "course-timeline-4": "2009 (60 Hours)",
    "course-title-4": "Advanced PHP",
    "course-description-4": "",
    // PORTFOLIO
    "portfolio-heading": "Algunos de mis trabajos desde 2009 al 2013",
    "all": "Todos",
    "design": "Diseño",
    "mobile": "Mobile Apps",
    "web": "Web Apps",
    "project": "Proyectos de Cursos",
    "img-title-14": "Cork Internet eXchange",
    "img-category-14": "Desarrollo Web",
    "img-title-13": "Discount Me",
    "img-category-13": "Mobile Apps",
    "img-title-12": "Your Kwik Save",
    "img-category-12": "Sitio web E-Commerce",
    "img-title-11": "Bulldog Frances Trinidad",
    "img-category-11": "Desarrollo Web",
    "img-title-10": "Lavaiswiss",
    "img-category-10": "Desarrollo Web",
    "img-title-9": "ECMY Construcciones",
    "img-category-9": "Desarrollo Web",
    "img-title-8": "Costa del Sol Gardens",
    "img-category-8": "Desarrollo Web",
    "img-title-7": "DeliMar Restaurant",
    "img-category-7": "Diseño",
    "img-title-6": "Clinica Dental Cima",
    "img-category-6": "Desarrollo Web",
    "img-title-5": "Cursos de Odontologia",
    "img-category-5": "Desarrollo Web",
    "img-title-4": "Fun Holydays",
    "img-category-4": "Diseño",
    "img-title-3": "Distribuidores en el Mundo",
    "img-category-3": "Desarrollo del Backend",
    "img-title-2": "Ventas Isthetime",
    "img-category-2": "Desarrollo del Backend",
    "img-title-1": "C&C Architects",
    "img-category-1": "Diseño",
    // CONTACT
    "contact-info": "Información de contacto",
    "contact-form-title": "Envieme un mensaje",
    "contact-name": "Su nombre",
    "contact-email": "Su correo electrónico",
    "contact-message": "Su mensaje",
    "contact-btn-text": "Enviar mensaje",
    // OTHERS
    "copy-right": "© Copyright 2009 - 2022 | Todos los derechos reservados.",
    "page-not-found": "Pagina no encontrada",
    "page-not-found-msg": "Lo sentimos, la página que está buscando no se ha encontrado."
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60627" + '/');

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