import Logo from '../img/logo.png';

const pageLoad = (() => {
  const renderNavBar = () => {
    const content = document.getElementById('content');
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const btnHome = document.createElement('button');
    const liMenu = document.createElement('li');
    const btnMenu = document.createElement('button');
    const liContact = document.createElement('li');
    const btnContact = document.createElement('button');

    btnHome.classList.add('links');
    btnMenu.classList.add('links');
    btnContact.classList.add('links');

    btnHome.id = 'home-button';
    btnHome.textContent = 'Home';
    btnMenu.id = 'menu-button';
    btnMenu.textContent = 'Menu';
    btnContact.id = 'Contact';
    btnContact.textContent = 'contact-button';

    liHome.appendChild(btnHome);
    liMenu.appendChild(btnMenu);
    liContact.appendChild(btnContact);
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);
    navBar.appendChild(ul);
    content.appendChild(navBar);
  };

  const renderMainPage = () => {
    const content = document.getElementById('content');
    const imageContainer = document.createElement('aside');

    imageContainer.classList.add('image-container');

    content.appendChild(imageContainer);
  };

  const renderRestaurantLogo = () => {
    const content = document.getElementById('content');
    const mainContent = document.createElement('div');
    const logo = document.createElement('img');

    mainContent.classList.add('main-content');
    logo.setAttribute('id', 'restaurant-logo');
    logo.src = Logo;

    mainContent.appendChild(logo);
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
