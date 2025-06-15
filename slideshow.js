const images = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg'
];

let current = 0;
const imgElement = document.getElementById("slide-image");

setInterval(() => {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
}, 3000);
