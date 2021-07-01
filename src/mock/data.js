import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aleksandar|Developpeur Junior', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon portefolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Bonjour, je m'appelle",
  name: 'Aleksandar ',
  subtitle: 'Developpeur Junior',
  cta: 'Me decouvrir ',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_4925.jpg',
  paragraphOne:
    "Je m'appelle Aleksandar Stanojevic, je suis un jeune développeur back-end. Bien que junior, mon interêt pour le developpement me pousse à vouloir monter en compétence au plus vite. Ayant toujours baigné dans l'univers high-tech, j'ai aujourd'hui décidé de mettre en osmose ma vie professionnelle et ma passion pour l'informatique.Je suis une personne curieuse et prête à apprendre sur n'importe quelle technologie",
  paragraphTwo:
    "Pour me définir, nous pouvons en premier lieu parler de l'high-tech, mais je suis également passionné par l'automobile. Ayant toujours été très manuel en voulant toucher au hardware de mon premier ordinateur, j'aime aussi la mécanique automobile. Cela m'a aidé à parfaire mon sens du détail et aussi à comprendre l'intérêt de finir un produit parfait. Cela m'aide autant lorsque que je développe que lorsque je dois identifier un problème dans la vie courante.",
  paragraphThree:
    "Skills : HTML | CSS | JAVASCRIPT   PHP | C# |   Frameworks : Symfony 5 | CodeIgniter 4 | .NET | ASP.NET MVC | React  N'hesitez pas a consulter mon CV. ",
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'votrankCover.png',
    title: "Vot'rank",
    info:
      "Il s'agit d'un site permettant d'effectuer des votes ou des sondages par le biais de classements. Chaque positions dans le classement rapporte un certain nombre de points,les points sont comptabilisés et les résultats affichés sous forme de diagramme ",
    info2:
      "Le site à été conçu grâce a CodeIgniter 4 un framework PHP, il y regroupe également du bootstrap et librairies JavaScript. La persistance des données est assurée par MySQL, où l'on stocke les membres inscrits ainsi que les votes crées.",
    url: 'http://votranks.epizy.com/',
    repo: 'https://github.com/Drkilla/VotrankHosted', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GiteMain.png',
    title: 'Gite de Montagne',
    info:
      "Il s'agit d'une application de gestion de réservations de chambres pour un gite de montagne. Chaque chambre est bloquée une fois réservée, pour une date donnée  et ne peuvent plus être réservées pendant cet intervalle  afin d'éviter une double réservation",
    info2:
      'Application de gestion entièrement écrite en C# et WPF persistance des données avec SQL server via VisualStudio 2019.',
    url: '',
    repo: 'https://github.com/Drkilla/GiteMontagne', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jojotissu.png',
    title: 'Boutique de e-commerce(en cours)',
    info:
      "Il s'agit d'un site de e-commerce de vente de créations,avec espace membre, back office pour la gestion administrateur(ajout de produits,gestion des utilisateur,recapitulatif des commandes effectuées par les clients).",
    info2: 'Site en cours de création avec le framework Symfony 5',
    url: '',
    repo: 'https://github.com/Drkilla/boutiquefrancaisev2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'leatseat.png',
    title: 'Letseat',
    info:
      "Projet pour l'entreprise Letseat au quel j'ai pu contribuer lors de mon stage, developpement de la création de plats;refonte du panier et de la confirmation de commande",
    info2: 'Le site a été créé grâce au Framework Symfony 5',
    url: 'https://www.letseat.fr/',
    repo: '', // if no repo, the button will not show up
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
