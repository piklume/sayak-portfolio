import { Projects } from '../types';

export const BUTTON_LIST = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
];

export const MENU_LIST = [
  {
    name: 'Home',
    path: '/',
  },
  ...BUTTON_LIST,
];

export const PROJECTS_DATA_LIST: Projects = [
  {
    id: 'crwn',
    name: 'Crown Clothing',
    path: '/crwnclothing.png',
    title: 'E-commerce Website',
    shortDescription:
      'This is a fully featured E-commerce lifestyle shop built using ReactJs',
    liveLink: 'https://sdcrwnclothing.herokuapp.com/',
    sourceFE: 'https://github.com/piklume/crwn-clothing',
    sourceBE: undefined,
  },
  {
    id: 'brain',
    name: 'Magic Brain',
    path: '/magicbrain.png',
    title: 'Face Detection Magic Brain',
    shortDescription: 'Use AI to detect faces in your pictures!',
    liveLink: 'https://piklume.github.io/facerecognitionbrain/',
    sourceFE: 'https://github.com/piklume/facerecognitionbrain',
    sourceBE: 'https://github.com/piklume/facerecongnitionapi',
  },
];
