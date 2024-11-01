import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  figma,
  PoleEmploi,
  LeroyMerlin,
  Webhelp,
  Audi,
  Free,
  Amsolution,
  Opac,
  NineOneOne,
  Hattsbabyhaven,
  Hattstravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end",
    icon: web,
  },
  {
    title: "React Js",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const testimonials = [
  {
    testimonial:
      "Admission en Bac + 3 Développeur Full Stack en alternance I 2024 – 2026. l’école des spécialistes du développement web Cloud Campus",
    name: "Cloud Campus Paris",
    
  },
  {
    testimonial:
      "Bac + 2 Développeur web et web mobile I 2023 École supérieur des métiers du numérique La Manu I Compiègne I RNCP311114",
    name: "Chris Brown",
    
  },
  {
    testimonial:
      "BTS Négociation relation client I 2015-2016 Lycée Boucher de Perthès – Abbeville",
  },
];

const experiences = [
  {
    title: "Conseiller en télécommunication",
    company_name: "Free",
    icon: Free,
    iconBg: "#383E56",
    date: "Juillet 2024 à Aujourd'hui",
    points: [
      "Gestion et suivi des dossiers.",
      "Conseil clientèle et traitement des demandes client.",
      "Promotion des offres box et mobile.",
      "Souscription des contrats.",
    ],
  },
  {
    title: "Stagiaire développeur web front-end",
    company_name: "Am Solution",
    icon: Amsolution,
    iconBg: "#E6DEDD",
    date: "Juillet 2023 - Août 2023",
    points: [
      "Concevoir, développer et maintenir le site web.",
      "Assurer le développement front-end en utilisant HTML, CSS, JavaScript.",
      "Collaborer avec l'équipe pour créer des expériences utilisateur exceptionnelles.",
      "Concevoir une maquette d’interface web et créer une page web responsive .",
    ],
  },
  {
    title: "Conseiller organisme hlm",
    company_name: "Opac de l'Oise",
    icon: Opac,
    iconBg: "#383E56",
    date: "Décembre 2021 - Mai 2024 ",
    points: [
      "Gestion et suivi des dossiers locataire.",
      "Visite et état des lieux des logements.",
    ],
  },
  {
    title: "Conseiller en énergie",
    company_name: "Web-help",
    icon: Webhelp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Juillet 2021",
    points: [
      "Gestion des appels téléphoniques.",
      "Gestion des mailings, souscription des contrats.",
      "Traitement des demandes client et orientation.",
    ],
  },
  {
    title: "Conseiller client",
    company_name: "Leroy Merlin",
    icon: LeroyMerlin,
    iconBg: "#E6DEDD",
    date: "Janvier 2019 - Octobre 2020",
    points: [
      "Accueil et définition des besoins.",
      "Conseil à la clientèle.",
      "Encaissement, Mise en rayon.",
    ],
  },
  {
    title: "Conseiller emploi",
    company_name: "Pôle emploi",
    icon: PoleEmploi,
    iconBg: "#E6DEDD",
    date: "Juillet 2017 - Août 2018",
    points: [
      "Sourcing et recrutement.",
      "Conduite d'entretien.",
      "Rédaction des offres d'emploi.",
      "Gestion des appels téléphoniques."
    ],
  },
  {
    title: "Apprenti technicien automobile",
    company_name: "Audi Volkswagen",
    icon: Audi,
    iconBg: "#E6DEDD",
    date: "Septembre 2011 - Octobre 2014",
    points: [
      "Entretien des véhicules automobiles.",
      "Technicité panne.",
    ],
  },
];




const projects = [
  {
    name: "Hatt's car prestige",
    description:
      "Un site web permettant aux utilisateurs de rechercher, réserver et gérer la location de voitures de luxe, offrant une solution pratique et efficace pour une expérience exceptionnelle.",
      tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: NineOneOne,
    source_code_link: "https://github.com/Mehdi60x",
  },
  {
    name: "Hatt's baby haven",
    description:
      "Bienvenue chez Hatt's Baby Haven, votre boutique dédiée aux produits essentiels pour bébé ! Découvrez une sélection soignée d'articles de qualité pour le confort, la sécurité et le bonheur de votre tout-petit..",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "red-text-gradient",
      },
       {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
     
    ],
    image: Hattsbabyhaven,
    source_code_link: "https://github.com/Mehdi60x",
  },
  {
    name: "Hatt's travel.com",
    description:
      "Hatt's Travel.com ! Un site pour des voyages inoubliables aux quatre coins du monde. Laissez-nous transformer vos rêves d'évasion en réalité, avec des destinations et des expériences qui vous ressemblent..",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "red-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Hattstravel,
    source_code_link: "https://github.com/Mehdi60x",
  },
];

export { services, technologies,testimonials, experiences, projects };
