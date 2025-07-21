// Translation dictionary for all text content
const translations = {
  // Header
  "header__logo-text": {
    en: "Immigration Service",
    fr: "Service d'Immigration",
  },
  "header__logo-subtext": {
    en: "france-visas.gov",
    fr: "france-visas.gouv.fr",
  },
  // Navigation
  nav_general: {
    en: "General Information",
    fr: "Informations Générales",
  },
  nav_tourism: {
    en: "Tourism / Private Stay",
    fr: "Tourisme / Séjour Privé",
  },
  nav_professional: {
    en: "Professional purpose",
    fr: "Motif Professionnel",
  },
  nav_studies: {
    en: "Studies / Training",
    fr: "Études / Formation",
  },
  nav_family: {
    en: "Family purpose",
    fr: "Motif Familial",
  },
  nav_arrival: {
    en: "Your Arrival In france",
    fr: "Votre Arrivée En France",
  },
  // Welcome section
  welcome_title: {
    en: "Welcome to France Visas Service",
    fr: "Bienvenue au Service des Visas pour la France",
  },
  welcome_subtitle: {
    en: "Find the right visa for your trip to France",
    fr: "Trouvez le visa adapté à votre voyage en France",
  },
  // Boxes
  need_visa: {
    en: "Do you need a visa?",
    fr: "Avez-vous besoin d'un visa?",
  },
  start_application: {
    en: "Start your visa Application",
    fr: "Commencer votre demande de visa",
  },
  track_application: {
    en: "Track your application",
    fr: "Suivre votre demande",
  },
  // Coming to France section
  coming_to_france: {
    en: "Coming to France for …",
    fr: "Venir en France pour …",
  },
  tourism: {
    en: "Tourism or Private visit",
    fr: "Tourisme ou Visite privée",
  },
  business: {
    en: "Business travel",
    fr: "Voyage d'affaires",
  },
  studies: {
    en: "Studies or Training",
    fr: "Études ou Formation",
  },
  // News section
  news: {
    en: "News",
    fr: "Actualités",
  },
  fraudulent_site: {
    en: "Fraudulent Site",
    fr: "Site Frauduleux",
  },
  fraud_warning: {
    en: "visa applicants are advised to be cautious in dealing with companies that claim to offer...",
    fr: "les demandeurs de visa sont invités à faire preuve de prudence dans leurs relations avec les entreprises qui prétendent offrir...",
  },
  // Application section
  where_to_submit: {
    en: "Where to submit your Application?",
    fr: "Où soumettre votre demande?",
  },
  application_info: {
    en: "You will find all the information you need to submit your visa application, such as access to appointment booking, information on certain special cases, fees and accepted means of payment, as well as all the contact information in case of questions about your situation. You will need to select the country in which you reside and submit your visa application.",
    fr: "Vous trouverez toutes les informations nécessaires pour soumettre votre demande de visa, comme l'accès à la réservation de rendez-vous, des informations sur certains cas particuliers, les frais et les moyens de paiement acceptés, ainsi que toutes les coordonnées en cas de questions sur votre situation. Vous devrez sélectionner le pays dans lequel vous résidez et soumettre votre demande de visa.",
  },
  make_appointment: {
    en: "Make an appointment",
    fr: "Prendre rendez-vous",
  },
  // Footer
  footer_description: {
    en: "France Immigration Service - The official website for visas for France. Helping you with all your visa needs.",
    fr: "Service d'Immigration France - Le site officiel des visas pour la France. Vous aide pour tous vos besoins en matière de visa.",
  },
  quick_links: {
    en: "Quick Links",
    fr: "Liens Rapides",
  },
  contact_us: {
    en: "Contact Us",
    fr: "Contactez-nous",
  },
  email: {
    en: "Email: support@france-visas.gov",
    fr: "Email: support@france-visas.gouv.fr",
  },
  phone: {
    en: "Phone: +33 1 23 45 67 89",
    fr: "Téléphone: +33 1 23 45 67 89",
  },
  address: {
    en: "Address: 10 Rue de France, Paris, France",
    fr: "Adresse: 10 Rue de France, Paris, France",
  },
}


// Current language (default to English)
let currentLanguage = "en"

// Function to change the language
function changeLanguage() {
  // Get the selected language from the dropdown
  const languageSelect = document.getElementById("language-select")
  currentLanguage = languageSelect.value

  // Update all translatable elements on the page
  updatePageLanguage()

  // Update the HTML lang attribute
  document.documentElement.lang = currentLanguage
}

// filepath: c:\Users\kings\OneDrive\Desktop\Important project\Important project\First project\script.js
function changeLanguage() {
  const select = document.getElementById('language-select');
  const flag = document.getElementById('flag-icon');
  if (select.value === 'en') {
    flag.src = './image/US-flag (2).png'; // Add a US flag image with this filename in your image folder
    flag.alt = 'US Flag';
  } else {
    flag.src = './image/flag.jpg'; // France flag
    flag.alt = 'France Flag';
  }
}

// Function to update all translatable elements on the page
function updatePageLanguage() {
  // Update header logo text
  const logoText = document.querySelector(".header__logo-text")
  if (logoText) {
    logoText.textContent = translations["header__logo-text"][currentLanguage]
  }

  const logoSubtext = document.querySelectorAll(".header__logo-text")[1]
  if (logoSubtext) {
    logoSubtext.textContent = translations["header__logo-subtext"][currentLanguage]
  }

  // Update navigation items
  const navItems = document.querySelectorAll(".header__nav li a")
  if (navItems.length >= 6) {
    navItems[0].textContent = translations["nav_general"][currentLanguage]
    navItems[1].textContent = translations["nav_tourism"][currentLanguage]
    navItems[2].textContent = translations["nav_professional"][currentLanguage]
    navItems[3].textContent = translations["nav_studies"][currentLanguage]
    navItems[4].textContent = translations["nav_family"][currentLanguage]
    navItems[5].textContent = translations["nav_arrival"][currentLanguage]
  }

  // Update welcome section
  const welcomeTitle = document.querySelector(".content h3")
  if (welcomeTitle) {
    welcomeTitle.textContent = translations["welcome_title"][currentLanguage]
  }

  const welcomeSubtitle = document.querySelector(".content p")
  if (welcomeSubtitle) {
    welcomeSubtitle.textContent = translations["welcome_subtitle"][currentLanguage]
  }

  // Update boxes
  const boxLinks = document.querySelectorAll(".box a")
  if (boxLinks.length >= 3) {
    // Extract the icon from each link
    const needVisaIcon = boxLinks[0].innerHTML.split("</i>")[0] + "</i> "
    const startAppIcon = boxLinks[1].innerHTML.split("</i>")[0] + "</i> "
    const trackAppIcon = boxLinks[2].innerHTML.split("</i>")[0] + "</i> "

    boxLinks[0].innerHTML = needVisaIcon + translations["need_visa"][currentLanguage]
    boxLinks[1].innerHTML = startAppIcon + translations["start_application"][currentLanguage]
    boxLinks[2].innerHTML = trackAppIcon + translations["track_application"][currentLanguage]
  }

  // Update "Coming to France" section
  const comingToFranceTitle = document.querySelectorAll(".content h2")[0]
  if (comingToFranceTitle) {
    comingToFranceTitle.textContent = translations["coming_to_france"][currentLanguage]
  }

  const comingToFranceLinks = document.querySelectorAll(".content__text a")
  if (comingToFranceLinks.length >= 3) {
    // Extract the icons
    const tourismIcon = comingToFranceLinks[0].innerHTML.split("</i>")[0] + "</i> "
    const businessIcon = comingToFranceLinks[1].innerHTML.split("</i>")[0] + "</i> "
    const studiesIcon = comingToFranceLinks[2].innerHTML.split("</i>")[0] + "</i> "

    comingToFranceLinks[0].innerHTML = tourismIcon + translations["tourism"][currentLanguage]
    comingToFranceLinks[1].innerHTML = businessIcon + translations["business"][currentLanguage]
    comingToFranceLinks[2].innerHTML = studiesIcon + translations["studies"][currentLanguage]
  }

  // Update News section
  const newsTitle = document.querySelectorAll(".content h2")[1]
  if (newsTitle) {
    newsTitle.textContent = translations["news"][currentLanguage]
  }

  const fraudulentSiteLink = document.querySelectorAll(".News .content__text a")[0]
  if (fraudulentSiteLink) {
    const fraudIcon = fraudulentSiteLink.innerHTML.split("</i>")[0] + "</i> "
    fraudulentSiteLink.innerHTML = fraudIcon + translations["fraudulent_site"][currentLanguage]
  }

  const fraudWarning = document.querySelector(".News .content__text p")
  if (fraudWarning) {
    fraudWarning.textContent = translations["fraud_warning"][currentLanguage]
  }

  // Update Application section
  const whereToSubmit = document.querySelector(".application_content")
  if (whereToSubmit) {
    whereToSubmit.textContent = translations["where_to_submit"][currentLanguage]
  }

  const applicationInfo = document.querySelector(".application p")
  if (applicationInfo) {
    applicationInfo.textContent = translations["application_info"][currentLanguage]
  }

  const makeAppointment = document.querySelector(".application button")
  if (makeAppointment) {
    makeAppointment.textContent = translations["make_appointment"][currentLanguage]
  }

  // Update Footer
  const footerDescription = document.querySelector(".footer__description")
  if (footerDescription) {
    footerDescription.textContent = translations["footer_description"][currentLanguage]
  }

  const quickLinks = document.querySelector(".footer__links h3")
  if (quickLinks) {
    quickLinks.textContent = translations["quick_links"][currentLanguage]
  }

  const contactUs = document.querySelector(".footer__contact h3")
  if (contactUs) {
    contactUs.textContent = translations["contact_us"][currentLanguage]
  }

  const contactInfo = document.querySelectorAll(".footer__contact p")
  if (contactInfo.length >= 3) {
    contactInfo[0].textContent = translations["email"][currentLanguage]
    contactInfo[1].textContent = translations["phone"][currentLanguage]
    contactInfo[2].textContent = translations["address"][currentLanguage]
  }

  const footerLinks = document.querySelectorAll(".footer__links ul li a")
  if (footerLinks.length >= 3) {
    footerLinks[0].textContent = translations["nav_general"][currentLanguage]
    footerLinks[1].textContent = translations["nav_tourism"][currentLanguage]
    footerLinks[2].textContent = translations["nav_professional"][currentLanguage]
  }
}

// Initialize the page with the default language
document.addEventListener("DOMContentLoaded", () => {
  // Set the initial language based on the dropdown
  const languageSelect = document.getElementById("language-select")
  if (languageSelect) {
    currentLanguage = languageSelect.value
    updatePageLanguage()
  }
})












