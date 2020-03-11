import pageLoad from './modules/page-load';
import menu from './modules/menu';
import contact from './modules/contact';

import './css/style.css';

const renderPage = () => {
  pageLoad.renderNavBar();
  pageLoad.renderMainPage();
  pageLoad.renderRestaurantLogo();
  pageLoad.renderFooter();
};

window.addEventListener('load', () => {
  document.getElementById('btnMenu').addEventListener('click', () => {
    document.querySelector('.main-content').remove();
    menu.showMenu();
  });

  document.getElementById('btnContact').addEventListener('click', () => {
    document.querySelector('.main-content').remove();
    contact();
  });

  document.getElementById('btnHome').addEventListener('click', () => {
    document.querySelector('.main-content').remove();
    pageLoad.renderRestaurantLogo();
  });
});

renderPage();