import './style.css';
import { Banner } from './conponents/Banner/index.js';
import { Menu } from './conponents/Menu/index.js';
import { Gallery } from './conponents/Gallery/index.js';
import { Contact } from './conponents/Contact/index.js';
import { Header } from './conponents/Header/index.js';
import { Footer } from './conponents/Footer/index.js';

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(
  Banner(),
  Menu({}),
  Gallery(),
  Contact(),
);

pageElement.append(
  Header(),
  main,
  Footer(),
);

document.querySelector('#app').append(pageElement);
