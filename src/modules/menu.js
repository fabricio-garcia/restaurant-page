import MenuPic from '../img/menu.jpg';

const menu = (() => {
  const renderMenu = () => {
    const content = document.getElementById('content');
    const mainContent = document.createElement('div');
    const menu = document.createElement('img');

    mainContent.classList.add('main-content');
    menu.setAttribute('id', 'menu-image');

    menu.src = MenuPic;

    mainContent.appendChild(menu);
    content.appendChild(mainContent);
  };

  return {
    renderMenu,
  };
})();

export default menu;