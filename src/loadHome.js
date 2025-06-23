
// src/loadHome.js
export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const container = document.createElement('div');
  container.classList.add('content');

  const title = document.createElement('h1');
  title.textContent = 'Home ';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Enjoy the best dishes in town.';

  container.appendChild(title);
  container.appendChild(paragraph);
  content.appendChild(container);
}

