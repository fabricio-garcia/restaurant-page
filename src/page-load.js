const pageLoad = () => {

  const content = document.getElementById('content');
  const imageContainer = document.createElement('aside');
  const mainContent = document.createElement('div');
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const aHome = document.createElement('a');
  const liMenu = document.createElement('li');
  const aMenu = document.createElement('a');
  const liContact = document.createElement('li');
  const aContact = document.createElement('a');
  const restaurantInfo = document.createElement('section');
  const footer = document.createElement('footer');

  imageContainer.classList.add('restaurant-logo');
  mainContent.classList.add('main-content');

  aHome.id = 'home';
  aHome.textContent = 'Home';
  aMenu.id = 'menu';
  aMenu.textContent = 'Menu';
  aContact.id = 'contact';
  aContact.textContent = 'Contact';
  footer.textContent = 'Restaurant Page'

  content.appendChild(imageContainer);
  liHome.appendChild(aHome);
  liMenu.appendChild(aMenu);
  liContact.appendChild(aContact);
  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);
  navBar.appendChild(ul);
  mainContent.appendChild(navBar);
  mainContent.appendChild(restaurantInfo);
  content.appendChild(mainContent);
  content.appendChild(footer);

}

export { pageLoad }