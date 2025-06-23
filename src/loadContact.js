// src/loadContact.js
import './styles.css'; // asegúrate de tener .map-container en tu CSS

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

  // --- Sección de mapa ---
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

  
  window.initMap = function() {
    const ubicacion = { lat: -34.6037, lng: -58.3816 }; 
    const map = new google.maps.Map(mapDiv, {
      center: ubicacion,
      zoom: 14,
      disableDefaultUI: false,
    });
    new google.maps.Marker({
      position: ubicacion,
      map,
      title: 'Aquí estamos',
    });
  };

  if (!document.getElementById('gmaps-script')) {
    const script = document.createElement('script');
    script.id = 'gmaps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5BxRk49t26wig7BvE9EWgK8YYjwHvqw&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
