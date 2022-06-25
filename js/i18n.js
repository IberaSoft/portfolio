// Get browser language
const locale = window.navigator.userLanguage || window.navigator.language;

// We can have as many locales here as we want,
// and use any locales we want. We have English
// and Arabic as locales here as examples.
const translations = {
  // English translations
  "en": {
    "page-title" : "juan cruz llorens | portfolio",
    "header" : "juan cruz llorens",
    "job-title" : "front end developer",
    "social-profiles" : "social profiles",
    "intro1" : "hi, my name is juan cruz and i am a front end developer with more than 10 years of experience with solid knowledges of project management tools and latest software development techniques.",
    "solutions" : "solutions",
    "how-contact" : "contact me",
    "intro2" : "we can work together to design websites, application development, e-commerce websites or any other custom applications.",
    "intro3" : "if you would need a quotes or have any questions, please contact me anytime and i will respond as soon as possible.",

    // MENU
    "profile" : "profile",
    "resume" : "resume",
    "certificates" : "certificates",
    "portfolio" : "portfolio",
    "contact" : "contact",

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
    "download-resume" : "Download resume as PDF format",

    // EXPERIENCE
    "experience-heading" : "Experience",
    "job-position-1" : "Experience 1",
    "job-timeline-1" : "Experience 2",
    "company-name-1" : "Experience 3",
    "job-location-1" : "Experience 3",
    "job-description-1" : "Experience 3",

    "job-position-2" : "Experience 1",
    "job-timeline-2" : "Experience 2",
    "company-name-2" : "Experience 3",
    "job-location-2" : "Experience 3",
    "job-description-2" : "Experience 3",

    "job-position-3" : "Experience 1",
    "job-timeline-3" : "Experience 2",
    "company-name-3" : "Experience 3",
    "job-location-3" : "Experience 3",
    "job-description-3" : "Experience 3",

    "job-position-4" : "Experience 1",
    "job-timeline-4" : "Experience 2",
    "company-name-4" : "Experience 3",
    "job-location-4" : "Experience 3",
    "job-description-4" : "Experience 3",

    "job-position-5" : "Experience 1",
    "job-timeline-5" : "Experience 2",
    "company-name-5" : "Experience 3",
    "job-location-5" : "Experience 3",
    "job-description-5" : "Experience 3",

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

    // CONTACT
    "contact-info" : "contact info",
    "contact-form-title" : "Let's keep in touch",
    "contact-name" : "Your Name",
    "contact-email" : "Your Email",
    "contact-message" : "Your Message",
    "contact-btn-text" : "Send your message",

    // OTHERS
    "copy-right" : "© Copyright 2009 - 2022 | All rights reserved.",
  },

  // Arabic translations
  "es": {
    "page-title": "Juan Cruz Llorens | Portafolio",
    "header": "Juan Cruz Llorens",
    "job-title": "DESARROLLADOR FRONT END"
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