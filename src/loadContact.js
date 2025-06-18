// src/home.js
export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpiar contenido anterior
  
    const container = document.createElement('div');
    container.classList.add('tab-content');
  
    const title = document.createElement('h1');
    title.textContent = 'CONTACT ';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Enjoy the best dishes in town.';
  
    container.appendChild(title);
    container.appendChild(paragraph);
    content.appendChild(container);
  }