
// src/loadContact.js
export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const container = document.createElement('div');
  container.classList.add('content');

  const title = document.createElement('h1');
  title.textContent = 'CONTACT';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Contact us for more information.';

  container.appendChild(title);
  container.appendChild(paragraph);
  content.appendChild(container);
}