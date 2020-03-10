import pageLoad from './modules/page-load';
import menu from './modules/menu';
import './css/style.css';

const renderPage = () => {
  pageLoad.renderNavBar();
  pageLoad.renderMainPage();
  pageLoad.renderRestaurantLogo();
  pageLoad.renderFooter();
};

window.addEventListener('load', () => {
  document.getElementById('btnMenu').addEventListener('click', () => {
    // document.getElementById('restaurant-logo').setAttribute('hidden', true);
    document.querySelector('.main-content').remove();
    menu.showMenu();
  });

  document.getElementById('home').addEventListener('click', () => {
    document.querySelector('.main-content').remove();
    pageLoad.renderRestaurantLogo();
  });
});

renderPage();