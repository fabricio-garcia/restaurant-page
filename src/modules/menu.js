import MenuPic from '../img/menu.jpg';

const menu = (() => {
  const renderMenu = () => {
    const content = document.getElementById('content');
    const mainContent = document.createElement('div');
    const menu = document.createElement('img');

    mainContent.classList.add('main-content');
    menu.setAttribute('id', 'btnMenu');

    menu.src = MenuPic;

    mainContent.appendChild(menu);
    content.appendChild(mainContent);
  };

  const showMenu = () => {
    renderMenu();
  };

  return {
    showMenu,
  };
})();

export default menu;