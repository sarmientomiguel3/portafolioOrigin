import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'foto2.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foto3.jpg',
    title: 'Software de Entretenimiento ',
    info: 'En este proyecto se desarrollo un videojuego educativo utilizando tecnicas de Gamification enfocada en la enselanza de cursos de Astronomia , mi funcion en el proyecto era el desarrollodar y diseñador de interfaces ',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foto5.jpg',
    title: 'Software Variado',
    info: ' A lo largo de mis años de estudiante realize un conjunto de aplicaciones, encargando tanto del front-end y Back-de mis aplicaciones , asi como de planeamiento y participacion en diferentes aspectos de todos ellos.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foto4.jpg',
    title: 'Examenes',
    info: 'Una aplicacion con front-end y back-end enfocada en el desarrollo de banco de preguntas para la evaluacion de estudiantes.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

export const skilsData = [
  {
    id: nanoid(),
    name:"Python",
    level:"40%"
  },
  {
    id: nanoid(),
    name:"NodeJs",
    level:"50%"
  },
  {
    id: nanoid(),
    name:"ReactJs",
    level:"50%"
  },
  {
    id: nanoid(),
    name:"CSS",
    level:"90%"
  },
  {
    id: nanoid(),
    name:"PHP",
    level:"80%"
  },
  {
    id: nanoid(),
    name:"C#",
    level:"80%"
  },
  {
    id: nanoid(),
    name:"JAVA",
    level:"80%"
  },
];


// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
