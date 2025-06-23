// src/index.js
import "./styles.css";
import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";
import logoPath from './assets/logo2.jpg';

// Variables globales para Google Maps
export let gmap;
export const gmapCenter = { lat: -34.6037, lng: -58.3816 };

// Callback global que la API de Maps invoca
window.initMap = function() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return;
  gmap = new google.maps.Map(mapDiv, {
    center: gmapCenter,
    zoom: 14,
    disableDefaultUI: false,
  });
  new google.maps.Marker({
    position: gmapCenter,
    map: gmap,
    title: 'Aquí estamos',
  });
};

// Función para forzar redibujo y recentrar el mapa
export function refreshMap() {
  if (gmap) {
    setTimeout(() => {
      google.maps.event.trigger(gmap, 'resize');
      gmap.setCenter(gmapCenter);
    }, 200);
  }
}

// Inicialización de la aplicación
function initApp() {
  const homeBtn    = document.getElementById("home");
  const menuBtn    = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", () => {
    loadHome();
    setActiveButton("home");
  });

  menuBtn.addEventListener("click", () => {
    loadMenu();
    setActiveButton("menu");
  });

  contactBtn.addEventListener("click", () => {
    loadContact();
    setActiveButton("contact");
    refreshMap();
  });

  // Carga inicial
  loadHome();
  setActiveButton("home");

  // Inserta logo
  const logoImg = document.createElement('img');
  logoImg.src = logoPath;
  logoImg.alt = 'Logo';
  logoImg.classList.add('logo-img');
  document.querySelector('.logo').appendChild(logoImg);

  function setActiveButton(id) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(btn => btn.classList.remove("active"));
    const active = document.getElementById(id);
    if (active) active.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inyecta la API de Google Maps una sola vez
  if (!document.getElementById('gmaps-script')) {
    const script = document.createElement('script');
    script.id = 'gmaps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5BxRk49t26wig7BvE9EWgK8YYjwHvqw&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  initApp();
});
