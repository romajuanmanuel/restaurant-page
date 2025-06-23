// src/index.js

import "./styles.css";
import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";

import logoPath from './assets/logo2.jpg';

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
    setActiveButton("home");
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    home.addEventListener("click", () => {
        loadHome();
        setActiveButton("home");
    });

    menu.addEventListener("click", () => {
        loadMenu();
        setActiveButton("menu");
    });

    contact.addEventListener("click", () => {
        loadContact();
        setActiveButton("contact");
    });

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
});
