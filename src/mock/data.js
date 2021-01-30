import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aleksandar|Developpeur Junior', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je m\'appelle',
  name: 'Aleksandar ',
  subtitle: 'Developpeur FullStack Junior',
  cta: 'Me decouvrir ',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_0749.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'votrankCover.png',
    title: 'Vot\'rank',
    info: "Il s\'agit d'un site permettant d'effectuer des votes ou des sondages par le biais de classements. Chaque positions dans le classement rapporte un certain nombre de points,les points sont comptabilisés et les résultats affichés sous forme de diagramme ",
    info2: "Le site à été conçu grâce a CodeIgniter 4 un framework PHP, il y regroupe également du bootstrap et librairies JavaScript. La persistance des données est assurée par MySQL, où l'on stocke les membres inscrits ainsi que les votes crées.",
    url: 'http://votranks.epizy.com/',
    repo: 'https://github.com/Drkilla/VotrankHosted', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GiteMain.png',
    title: 'Gite de Montagne',
    info: "Il s'agit d'une application de gestion de réservations de chambres pour un gite de montagne. Chaque chambre est bloquée une fois réservée, pour une date donnée  et ne peuvent plus être réservées pendant cet intervalle  afin d'éviter une double réservation",
    info2: 'Application de gestion entièrement écrite en C# et WPF persistance des données avec SQL server via VisualStudio 2019.',
    url: '',
    repo: 'https://github.com/Drkilla/GiteMontagne', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Boutique de e-commerce(en cours)',
    info: "Il s'agit d'un site de e-commerce avec espace membre, possibilité d'avoir une page d'administration pour que l'utilisateur admin puisse ajouter ou modifier les articles",
    info2: "Site en cours de création avec le framework Symfony 5",
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sa.stanojevicaleksandar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aleksandar-stanojevic002/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Drkilla',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
