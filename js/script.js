// arrenging query solectors for colour sectors 
const topLeft = document.querySelector('.top-left-sector');
const topRight = document.querySelector('.top-right-sector');
const bottomLeft = document.querySelector('.bottom-left-sector');
const bottomRight = document.querySelector('.top-right-sector');

//creating a array to give random sequence in the game

const sequences = [topLeft, bottomLeft, bottomRight, topRight];

//flashing random colour from array
const flash = (sector) => {
return new Promise((resolve, reject) =>{
   sector.className += 'active';
   setTimeout(() => {
sector.className = sector.className.replace('active', '');
resolve();
   }, 1000)
});
};

let main = async () =>{
    for (let sector of sequences) {
        await flash(sector);   
    }
};
main();