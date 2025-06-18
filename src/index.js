// src/index.js

import "./styles.css";
import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";

document.addEventListener("DOMContentLoaded", () => {
    loadHome(); // Cargar página inicial

    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    home.addEventListener("click", () => {
        loadHome();
    });

    menu.addEventListener("click", () => {

        loadMenu();
    });

    contact.addEventListener("click", () => {
        loadContact();
    });
});
