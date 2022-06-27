// Get browser language
const locale = window.navigator.userLanguage || window.navigator.language;

const translations = {
  // English translations
  "en": {
    "page-title" : "Juan Cruz Llorens | Portfolio",
    "header" : "Juan Cruz Llorens",
    "job-title" : "FRONT END DEVELOPER",
    "social-profiles" : "Social Profiles",
    "intro1" : "Hi, my name is Juan Cruz and i am a Front End Developer with more than 10 years of experience with solid knowledges of project management tools and latest software development techniques.",
    "solutions" : "SOLUTIONS",
    "how-contact" : "CONTACT ME",
    "intro2" : "We can work together to design websites, application development, e-commerce websites or any other custom applications.",
    "intro3" : "If you would need a quotes or have any questions, please contact me anytime and i will respond as soon as possible.",

    // MENU
    "profile" : "Profile",
    "resume" : "Resume",
    "certificates" : "Certificates",
    "portfolio" : "Portfolio",
    "contact" : "Contact",

    // RESUME-SKILLS
    "skills-heading-1" : "Programming Languages",
    "s1-1" : "HTML5/CSS3",
    "s1-2" : "Javascript",
    "s1-3" : "TypeScript",
    "s1-4" : "React/Redux",
    "s1-5" : "NodeJS",
    "skills-heading-2" : "Tools & Technologies",
    "s2-1" : "Atlassian Jira/Confluence",
    "s2-2" : "Figma/Simply",
    "s2-3" : "MS VSCode",
    "s2-4" : "Gitlab/Github",
    "s2-5" : "Docker",
    "s2-6" : "AWS",
    "s2-7" : "Webpack",
    "s2-8" : "Git",
    "skills-heading-3" : "Best Practices",
    "s3-1" : "Web Standards",
    "s3-2" : "Accessibility",
    "s3-3" : "Usability",
    "s3-4" : "Validation",
    "s3-5" : "SEO principles",
    "s3-6" : "Compatibility",
    "skills-heading-4" : "Languages",
    "s4-1" : "Spanish",
    "s4-2" : "English",
    "download-resume-en" : "Download resume as PDF format",

    // EXPERIENCE
    "experience-heading" : "Experience",
    "job-position-sfe" : "Front End Developer",
    "job-timeline-sfe" : "Mar 2016 - Present",
    "company-name-sfe" : "William Hill - Full Time",
    "job-location-sfe" : "Gibratlar, Gibraltar",
    "jd-sfe-1" : "Working as part of agile development teams to deliver robust, engaging, and usable solutions.",
    "jd-sfe-2" : "Taking personal responsibility for components’ technical delivery – collaborative with senior developers and architects to design robust, scalable technical solutions.",
    "jd-sfe-3" : "Collaborating with Product Managers to keep on track with the project's delivery plan and timelines.",
    "jd-sfe-4" : "Working closely with the UX Team to improve the website and applications for a global audience.",
    "jd-sfe-5" : "Debugging and resolving the problems by identifying and analyzing the root cause of the problem.",
    "jd-sfe-6" : "Working on CI/CD releasing to production new features and bug fixes via the most efficient delivery method.",
    "jd-sfe-7" : "Maintaining automated unit and integration test cases with Jest, React Testing Library, and Cypress.",
    "jd-sfe-8" : "Integration to the company's website of 3rd-party software applications.",
    "jd-sfe-9" : "Contributed to developing an animated Football Scoreboard for all devices that helped to increase visits for in-play matches.",
    "jd-sfe-10" : "Awarded with the second position at the William Hill Hackathon 2017.",

    "job-position-luxui" : "Lead UX / UI Developer",
    "job-timeline-luxui" : "Jul 2015 - Feb 2016",
    "company-name-luxui" : "Betfred - Full Time",
    "job-location-luxui" : "Gibratlar, Gibraltar",
    "jd-luxui-1" : "Designing and developing mockups for the main website with Photoshop.",
    "jd-luxui-2" : "Creating clean and maintainable cross-browser compatible code with SASS and HTML5.",
    "jd-luxui-3" : "Implementing the Bootstrap Framework to provide an excellent UX regardless of devices or platform.",
    "jd-luxui-4" : "Utilization of a work environment with Gulp to automate test-runs, linting and minification.",
    "jd-luxui-5" : "Developing a responsive and engaging front end web application using AngularJS and Babel (to transpile ECMAScript 6 code).",
    "jd-luxui-6" : "Continuous integration and deployments to test and production environments with Git, TFS 2013 and Octopus Deploy.",
    "jd-luxui-7" : "Assisting other developers with code and best-practice related questions.",

    "job-position-fe" : "Front End Developer",
    "job-timeline-fe" : "Ene 2013 - Jun 2015",
    "company-name-fe" : "Betfred - Full Time",
    "job-location-fe" : "Gibratlar, Gibraltar",
    "jd-fe-1" : "Involved in all levels of an agile SDLC and in constant communication with all departments and senior management. I always ensure adherence to architecture standards, code consistency and maintainability to deliver quality software on time.",
    "jd-fe-2" : "Developing for Sitecore CMS, within ASP.NET and C# environment.",
    "jd-fe-3" : "Deploying to staging and production servers.",
    "jd-fe-4" : "Working with QA and testing departments to ensure thorough system testing.",
    "jd-fe-5" : "Involved in the Front End Development using the latest technologies like Bootstrap(LESS) and AngularJS, using development tools like tasks management (Gulp/Grunt) and package manager (bower), including source control version like Git/TFS.",
    "jd-fe-6" : "Complete development of web applications for internal use of the company with the latest technologies.",

    "job-position-wd" : "Designer and Web Developer",
    "job-timeline-wd" : "Ene 2009 - Ene 2013",
    "company-name-wd" : "IberaSoft - Freelance",
    "job-location-wd" : "Fuengirola, Spain",
    "jd-wd-1" : "Designed and developed themes for CMS like Joomla! , Wordpress and Prestashop.",
    "jd-wd-2" : "Designed and developed PHP/MySQL Admin panels with CRUD capabilities for commercial management.",
    "jd-wd-3" : "Domains and Hosting Reselling Management (WHM/cPanel/Virtuozzo/ WHMCS Platforms).",

    "job-position-ife" : "Internship as Frontend Developer",
    "job-timeline-ife" : "May 2012 - Aug 2012",
    "company-name-ife" : "CloudCIX - Full Time",
    "job-location-ife" : "Cork, Irleland",
    "jd-ife-1" : "Complete company website redesign, logo vectorization, infographics and advertising for local newspaper.",
    "jd-ife-2" : "Front end development for a company website based on Service Oriented Architecture (SOA) and ASP.NET (MVC3 Razor).",

    "job-position-dwd" : "Designer and Web Developer",
    "job-timeline-dwd" : "Aug 2011 - Nov 2011",
    "company-name-dwd" : "Kwik Save Stores - Full Time",
    "job-location-dwd" : "Benalmadena, Spain",
    "jd-dwd-1" : "Designed, developed and maintained the Company E-Commerce Web Site with Prestashop.",
    "jd-dwd-2" : "Completed flyers, catalogues, menus, banners and discount cards designed in Photoshop and InDesign for marketing campaigns.",

    // EDUCATION
    "education-heading" : "Education",
    "education-institution-1" : "Universidad Tecnológica Nacional (FRR). Argentina.",
    "education-timeline-1" : "1997",
    "education-title-1" : "System Engineer",
    "education-description-1" : "",

    "education-institution-2" : "Escuela Normal Superior 'Manuel F. Mantilla'. Argentina.",
    "education-timeline-2" : "1987 - 1991",
    "education-title-2" : "High School Degree",
    "education-description-2" : "High School Degree (Homologated by the Ministry of Education of Spain). Awarded with Medal of Merit for Best Student of my class.",

    // CERTIFICATIONS AND COURSES
    "certificate-logos" : "Technologies",
    "certificate-heading" : "Certificates",
    "certificate-institution-1" : "FORMAN (Centro de Formación en Comunicaciones y Tecnologías de la Información). Málaga, Spain.",
    "certificate-timeline-1" : "2012",
    "certificate-main-title-1" : "Microsoft Certified Professional (MCP) and (MCTS)",

    "certificate-title-1" : "Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3",
    "certificate-number-1" : "Certification Number: E092-2043",
    "certificate-title-2" : "Microsoft Certified Professional: Microsoft Certified Professional",
    "certificate-number-2" : "Certification Number: E092-2038",
    "certificate-title-3" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Presentation Foundation Applications",
    "certificate-number-3" : "Certification Number: D686-2820",
    "certificate-title-4" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ASP.NET Applications",
    "certificate-number-4" : "Certification Number: D669-2800",
    "certificate-title-5" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ADO.NET Applications",
    "certificate-number-5" : "Certification Number: D627-0446",
    "certificate-title-6" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Forms Applications",
    "certificate-number-6" : "Certification Number: D590-2692",

    "course-heading" : "Courses",
    "course-institution-1" : "Nibisoft S.L.. Málaga, Spain.",
    "course-timeline-1" : "2011 (780 Hours)",
    "course-title-1" : "Microsoft .NET-MCTS Expert Developer",
    "course-description-1" : "",

    "course-institution-2" : "Instituto Municipal para Formación y Empresa (IMFE). Málaga, Spain.",
    "course-timeline-2" : "2010 (984 Hours)",
    "course-title-2" : "Computer Applications Programmer",
    "course-description-2" : "",

    "course-institution-3" : "Instituto Municipal para Formación y Empresa” (IMFE). Málaga, Spain.",
    "course-timeline-3" : "2009 (364 Hours)",
    "course-title-3" : "Web Design and Multimedia",
    "course-description-3" : "",

    "course-institution-4" : "Centro de Formación Rafael Salinas. Málaga, Spain.",
    "course-timeline-4" : "2009 (60 Hours)",
    "course-title-4" : "Advanced PHP",
    "course-description-4" : "",

    // PORTFOLIO
    "portfolio-heading" : "Some of the projects i'm proud with",
    "all" : "All",
    "design" : "Design",
    "mobile" : "Mobile Apps",
    "web" : "Web Apps",
    "course" : "Course Projects",

    "design-title-1" : "Kwik Save Stores",
    "design-category-1" : "Design",

    "mobile-title-1" : "Discount Me",
    "mobile-category-1" : "Web & Mobile App",

    "web-title-1" : "Kwik Save Stores",
    "web-category-1" : "Web Apps",

    "course-title-1" : "Kwik Save Stores",
    "course-category-1" : "Course Projects",


    // CONTACT
    "contact-info" : "Contact info",
    "contact-form-title" : "Let's keep in touch",
    "contact-name" : "Your Name",
    "contact-email" : "Your Email",
    "contact-message" : "Your Message",
    "contact-btn-text" : "Send your message",

    // OTHERS
    "copy-right" : "© Copyright 2009 - 2022 | All rights reserved.",
  },

  // Spanish translations
  "es": {
    "page-title" : "Juan Cruz Llorens | Portafolio",
    "header" : "Juan Cruz Llorens",
    "job-title" : "FRONT END DEVELOPER",
    "social-profiles" : "Perfiles Sociales",
    "intro1" : "Hola, Mi nombre es Juan Cruz y soy un Desarrollador Front End con más de 10 años de experiencia con conocimientos sólidos en herramientas de gestión de proyectos, procesos y técnicas más avanzadas en desarrollo de software.",
    "solutions" : "SOLUCIONES",
    "how-contact" : "HABLEMOS",
    "intro2" : "Podemos trabajar juntos en el diseño de sitios webs, desarrollo de aplicaciones, comercio electrónico, diseño de impresión u otras solicitudes personalizadas.",
    "intro3" : "Si desea consultar presupuestos o realizar alguna pregunta, por favor contacteme y le respondere a la mayor brevedad posible.",

    // MENU
    "profile" : "Perfil",
    "resume" : "Resume",
    "certificates" : "Certificados",
    "portfolio" : "Portafolio",
    "contact" : "Contacto",

    // RESUME-SKILLS
    "skills-heading-1" : "Lenguajes de Programacion",
    "s1-1" : "HTML5/CSS3",
    "s1-2" : "Javascript",
    "s1-3" : "TypeScript",
    "s1-4" : "React/Redux",
    "s1-5" : "NodeJS",
    "skills-heading-2" : "Herramientas & Tecnologias",
    "s2-1" : "Atlassian Jira/Confluence",
    "s2-2" : "Figma/Simply",
    "s2-3" : "MS VSCode",
    "s2-4" : "Gitlab/Github",
    "s2-5" : "Docker",
    "s2-6" : "AWS",
    "s2-7" : "Webpack",
    "s2-8" : "Git",
    "skills-heading-3" : "Buenas Practicas",
    "s3-1" : "Estandares Web",
    "s3-2" : "Accesibilidad",
    "s3-3" : "Usabilidad",
    "s3-4" : "Validacion",
    "s3-5" : "Optimizacion SEO",
    "s3-6" : "Compatibilidad",
    "skills-heading-4" : "Idiomas",
    "s4-1" : "Español",
    "s4-2" : "Ingles",
    "download-resume-es" : "Descargue el curriculum en formato PDF",

    // EXPERIENCE
    "experience-heading" : "Experiencia",
    "job-position-sfe" : "Desarrolador Front End",
    "job-timeline-sfe" : "Mar 2016 - Presente",
    "company-name-sfe" : "William Hill - A Tiempo Completo",
    "job-location-sfe" : "Gibratlar, Gibraltar",
    "jd-sfe-1" : "Trabaje como parte de equipos de desarrollo ágiles para ofrecer soluciones sólidas, atractivas y utilizables.",
    "jd-sfe-2" : "Asumida la responsabilidad personal de la entrega técnica de los componentes: en colaboración con desarrolladores y arquitectos senior para diseñar soluciones técnicas robustas y escalables.",
    "jd-sfe-3" : "Colaboracion con los Gerentes de Producto para mantenerse al día con el plan de entrega y los plazos del proyecto.",
    "jd-sfe-4" : "Trabaje en estrecha colaboración con el equipo de UX para mejorar el sitio web y las aplicaciones para una audiencia global.",
    "jd-sfe-5" : "Depuración y resolución de problemas identificando y analizando la causa raíz del problema.",
    "jd-sfe-6" : "Trabaje en el lanzamiento de CI/CD para la producción de nuevas funciones y correcciones de errores a través del método de entrega más eficiente.",
    "jd-sfe-7" : "Mantenimiento de casos de prueba de unidad e integración automatizados con Jest, React Testing Library y Cypress.",
    "jd-sfe-8" : "Integración a la web de la empresa de aplicaciones software de terceros.",
    "jd-sfe-9" : "Contribuí al desarrollo de un marcador de fútbol animado para todos los dispositivos que ayudó a aumentar las visitas a los partidos en vivo.",
    "jd-sfe-10" : "Premiado con la segunda posición en el William Hill Hackathon 2017.",

    "job-position-luxui" : "Lead UX / UI Developer",
    "job-timeline-luxui" : "Jul 2015 - Feb 2016",
    "company-name-luxui" : "Betfred - A Tiempo Completo",
    "job-location-luxui" : "Gibratlar, Gibraltar",
    "jd-luxui-1" : "Diseño y desarrollo de maquetas para la web principal de la empresa con Photoshop.",
    "jd-luxui-2" : "Creación de código compatible entre navegadores limpio y fácil de mantener con SASS y HTML5.",
    "jd-luxui-3" : "Implementación de Bootstrap para proporcionar una excelente UX independientemente del dispositivo o plataforma.",
    "jd-luxui-4" : "Utilización de un entorno de trabajo con Gulp para automatizar tests, limpiar y minificar del código.",
    "jd-luxui-5" : "Desarrollo front-end de una aplicación web robusta y atractiva usando AngularJS y Babel (para compilar el código en ECMAScript 6).",
    "jd-luxui-6" : "Integración continua del código y despliegues a entornos de prueba y producción con Git, TFS2013 y Octopus Deploy.",
    "jd-luxui-7" : "Asistencia a otros desarrolladores con preguntas relacionadas al código y buenas prácticas.",

    "job-position-fe" : "Desarrolador Front End",
    "job-timeline-fe" : "Ene 2013 - Jun 2015",
    "company-name-fe" : "Betfred - A Tiempo Completo",
    "job-location-fe" : "Gibratlar, Gibraltar",
    "jd-fe-1" : "Intervengo en todos los niveles del ciclo de vida del software. En constante comunicación con todos los departamentos y la alta dirección. Garantizando que se cumplan todas las normas de la arquitectura, la consistencia del código y la capacidad de mantenimiento.",
    "jd-fe-2" : "Desarrollo para Sitecore CMS en un entorno con .NET y C#.",
    "jd-fe-3" : "Implementación en los servidores de prueba y producción.",
    "jd-fe-4" : "Trabajo con los departamentos de pruebas y control de calidad para asegurar el funcionamiento del sistema completo.",
    "jd-fe-5" : "Involucrado en el desarrollo del front-end utilizando últimas tecnologías como Bootstrap (LESS) y AngularJS, herramientas de desarrollo para la gestión de tareas (Gulp/Grunt), y gestores de paquetes (Bower), incluyendo control versiones como Git/TFS.",
    "jd-fe-6" : "Desarrollo completo de aplicaciones web para uso interno de la empresa con las últimas tecnologías.",

    "job-position-wd" : "Diseñador y Desarrollador Web",
    "job-timeline-wd" : "Ene 2009 - Ene 2013",
    "company-name-wd" : "IberaSoft - Autonomo",
    "job-location-wd" : "Fuengirola, Spain",
    "jd-wd-1" : "Diseño y Desarrollo de plantillas para Joomla!, Wordpress y Prestashop.",
    "jd-wd-2" : "Completo diseño y desarrollo desde PSD a PHP/HTML5/CSS3/Java Script (jQuery).",
    "jd-wd-3" : "Gestion de Dominios y Hosting con plataformas WHM/cPanel, Virtuozzo y WHMCS).",

    "job-position-ife" : "Becado como Frontend Developer",
    "job-timeline-ife" : "May 2012 - Ago 2012",
    "company-name-ife" : "CloudCIX - A Tiempo Completo",
    "job-location-ife" : "Cork, Irlanda",
    "jd-ife-1" : "Rediseño del sitio web de la empresa con Bootstrap. Vectorización de logos con Illustrator. Diseño de infografías en Photoshop. Publicidad para el periódico local en InDesign. ",
    "jd-ife-2" : "Desarrollo del Front-End para website basado en arquitectura orientada a servicios (SOA) y ASP.NET (MVC3 Razor).",

    "job-position-dwd" : "Diseñador y Desarrollador Web",
    "job-timeline-dwd" : "Ago 2011 - Nov 2011",
    "company-name-dwd" : "Kwik Save Stores - A Tiempo Completo",
    "job-location-dwd" : "Benalmadena, Spain",
    "jd-dwd-1" : "Análisis, Diseño, Desarrollo y Mantenimiento de un Sitio Web de la empresa de comercio electrónico con Prestashop. ",
    "jd-dwd-2" : "Diseño completo de folletos, catalogos, menus, banners and tarjetas de descuento diseñadas en Photoshop e InDesign para campañas de marketing.",

    // EDUCATION
    "education-heading" : "Educación",
    "education-institution-1" : "Universidad Tecnológica Nacional (FRR). Argentina.",
    "education-timeline-1" : "1997",
    "education-title-1" : "Ingeniero en Sistemas de la Información",
    "education-description-1" : "",

    "education-institution-2" : "Escuela Normal Superior 'Manuel F. Mantilla'. Argentina.",
    "education-timeline-2" : "1987 - 1991",
    "education-title-2" : "Bachiller",
    "education-description-2" : "Titulo de Bachiller (Homologado por el Ministerio de Educación de España.). Graduado con la Medalla al Mejor Promedio de mi promocion.",

    // CERTIFICATIONS AND COURSES
    "certificate-logos" : "Tecnologias",
    "certificate-heading" : "Certificados",
    "certificate-institution-1" : "FORMAN (Centro de Formación en Comunicaciones y Tecnologías de la Información). Málaga, Spain.",
    "certificate-timeline-1" : "2012",
    "certificate-main-title-1" : "Microsoft Certified Professional (MCP) and (MCTS)",

    "certificate-title-1" : "Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3",
    "certificate-number-1" : "Number Certificado: E092-2043",
    "certificate-title-2" : "Microsoft Certified Professional: Microsoft Certified Professional",
    "certificate-number-2" : "Number Certificado: E092-2038",
    "certificate-title-3" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Presentation Foundation Applications",
    "certificate-number-3" : "Number Certificado: D686-2820",
    "certificate-title-4" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ASP.NET Applications",
    "certificate-number-4" : "Number Certificado: D669-2800",
    "certificate-title-5" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, ADO.NET Applications",
    "certificate-number-5" : "Number Certificado: D627-0446",
    "certificate-title-6" : "Microsoft® Certified Technology Specialist: .NET Framework 3.5, Windows Forms Applications",
    "certificate-number-6" : "Number Certificado: D590-2692",

    "course-heading" : "Cursos",
    "course-institution-1" : "Nibisoft S.L.. Málaga, Spain.",
    "course-timeline-1" : "2011 (780 Hours)",
    "course-title-1" : "Microsoft .NET-MCTS Expert Developer",
    "course-description-1" : "",

    "course-institution-2" : "Instituto Municipal para Formación y Empresa (IMFE). Málaga, Spain.",
    "course-timeline-2" : "2010 (984 Hours)",
    "course-title-2" : "Computer Applications Programmer",
    "course-description-2" : "",

    "course-institution-3" : "Instituto Municipal para Formación y Empresa” (IMFE). Málaga, Spain.",
    "course-timeline-3" : "2009 (364 Hours)",
    "course-title-3" : "Web Design and Multimedia",
    "course-description-3" : "",

    "course-institution-4" : "Centro de Formación Rafael Salinas. Málaga, Spain.",
    "course-timeline-4" : "2009 (60 Hours)",
    "course-title-4" : "Advanced PHP",
    "course-description-4" : "",

    // PORTFOLIO
    "portfolio-heading" : "Algunos de mis trabajos",
    "all" : "Todos",
    "design" : "Diseño",
    "mobile" : "Mobile Apps",
    "web" : "Web Apps",
    "course" : "Proyectos de Cursos",

    "design-title-1" : "Kwik Save Stores",
    "design-category-1" : "Design",

    "mobile-title-1" : "Discount Me",
    "mobile-category-1" : "Web & Mobile App",

    "web-title-1" : "Kwik Save Stores",
    "web-category-1" : "Web Apps",

    "course-title-1" : "Kwik Save Stores",
    "course-category-1" : "Proyectos de Cursos",

    // CONTACT
    "contact-info" : "Información de contacto",
    "contact-form-title" : "Envieme un mensaje",
    "contact-name" : "Su nombre",
    "contact-email" : "Su correo electrónico",
    "contact-message" : "Su mensaje",
    "contact-btn-text" : "Enviar mensaje",

    // OTHERS
    "copy-right" : "© Copyright 2009 - 2022 | Todos los derechos reservados.",
  },
};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}