const helloWorld = () => {
  const content = document.getElementById('content');
  const mainContent = document.createElement('div');
  const logo = document.createElement('div');

  mainContent.classList.add('main-content');
  logo.setAttribute('id', 'restaurant-logo');
  logo.innerHTML = 'Text';

  mainContent.appendChild(logo);
  content.appendChild(mainContent);
};

export default helloWorld;
