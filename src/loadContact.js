// src/loadContact.js
import './styles.css';

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

  // Sección de mapa
  const mapSection = document.createElement('section');
  mapSection.classList.add('map-section');

  const mapTitle = document.createElement('h2');
  mapTitle.textContent = 'Find Us Here';

  const mapDiv = document.createElement('div');
  mapDiv.id = 'map';
  mapDiv.classList.add('map-container');

  mapSection.appendChild(mapTitle);
  mapSection.appendChild(mapDiv);
  container.appendChild(mapSection);
  content.appendChild(container);
}
