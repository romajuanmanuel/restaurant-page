//src/loadMenu.js
export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 
  
    const container = document.createElement('div');
    container.classList.add('content');
  
    const title = document.createElement('h1');
    title.textContent = 'Menu ';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Menu.';
  
    container.appendChild(title);
    container.appendChild(paragraph);
    content.appendChild(container);
  }
  
  