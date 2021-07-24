// arrenging query solectors for colour sectors 
let topLeft = document.querySelector('.top-left-sector');
let topRight = document.querySelector('.top-right-sector');
let bottomLeft = document.querySelector('.bottom-left-sector');
let bottomRight = document.querySelector('.top-right-sector');

//creating a array to give random sequence in the game

let sequences = [topLeft, bottomLeft, bottomRight, topRight];

let flash = (sector) {
return new Promise((resolve, reject) {
   sector.className += 'active';
   setTimeout(() {
sector.className = sector.className.replace('active', '');
resolve();
   }, 500)
});
};
