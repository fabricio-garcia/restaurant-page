import Logo from '../img/logo.png';

const pageLoad = (() => {
  const renderNavBar = () => {
    const content = document.getElementById('content');
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const aHome = document.createElement('a');
    const liMenu = document.createElement('li');
    const aMenu = document.createElement('a');
    const liContact = document.createElement('li');
    const aContact = document.createElement('a');

    aHome.classList.add('links');
    aMenu.classList.add('links');
    aContact.classList.add('links');

    aHome.id = 'home';
    aHome.textContent = 'Home';
    aMenu.id = 'menu';
    aMenu.textContent = 'Menu';
    aContact.id = 'contact';
    aContact.textContent = 'Contact';

    liHome.appendChild(aHome);
    liMenu.appendChild(aMenu);
    liContact.appendChild(aContact);
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);
    navBar.appendChild(ul);
    content.appendChild(navBar);
  };

  const renderMainPage = () => {
    const content = document.getElementById('content');
    const imageContainer = document.createElement('aside');

    imageContainer.classList.add('restaurant-logo');

    content.appendChild(imageContainer);
  };

  const renderRestaurantLogo = () => {
    const content = document.getElementById('content');
    const mainContent = document.createElement('div');
    const restaurantInfo = document.createElement('section');
    const logo = document.createElement('img');

    mainContent.classList.add('main-content');

    logo.src = Logo;
    restaurantInfo.appendChild(logo);

    mainContent.appendChild(restaurantInfo);
    content.appendChild(mainContent);
  };

  const renderFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    const linkGitHub = document.createElement('a');
    const author = document.createElement('p');
    const copyright = document.createElement('p');

    copyright.classList.add('copyright');
    linkGitHub.setAttribute('href', 'https://github.com/fabricio-garcia');
    author.textContent = 'Fabricio Garcia';
    copyright.textContent = '©2020';

    linkGitHub.appendChild(author);
    footer.appendChild(linkGitHub);
    footer.appendChild(copyright);
    content.appendChild(footer);
  };

  return {
    renderNavBar,
    renderMainPage,
    renderRestaurantLogo,
    renderFooter,
  };
})();

export default pageLoad;
