import hamb1Path from './assets/ham1.jpg';
import hamb2Path from './assets/ham2.jpg';
import veggiePath from './assets/veggie1.jpg';

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

  const imagesData = [
    { src: hamb1Path, alt: 'Delicious Hamburger 1', caption: 'Classic Cheeseburger' },
    { src: hamb2Path, alt: 'Delicious Hamburger 2', caption: 'Double Beef Burger' },
    { src: veggiePath, alt: 'Veggie Dish', caption: 'Fresh Veggie Delight' }
  ];

  imagesData.forEach(({ src, alt, caption }) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    const captionEl = document.createElement('p');
    captionEl.classList.add('caption');
    captionEl.textContent = caption;

    wrapper.appendChild(img);
    wrapper.appendChild(captionEl);
    container.appendChild(wrapper);
  });


  
  content.appendChild(container);
 
}

