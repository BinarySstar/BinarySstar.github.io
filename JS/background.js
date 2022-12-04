const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `url(src/${chosenImage})`
document.body.style.backgroundImage = bgImage;