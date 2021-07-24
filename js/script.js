// arrenging query solectors for colour sectors 
const topLeft = document.querySelector('.top-left-sector');
const topRight = document.querySelector('.top-right-sector');
const bottomLeft = document.querySelector('.bottom-left-sector');
const bottomRight = document.querySelector('.top-right-sector');

//creating a array to give random sequence in the game

const sequences = [topLeft, bottomLeft, bottomRight, topRight];

//getting length of the sector and picking a random index   
const getRandomSector = () => {
   const sectors = [topLeft, bottomLeft, bottomRight, topRight]
   return sectors[parseInt(Math.random()* sectors.length)];
}
const sequence =  [getRandomSector()];
let sequenceToGuess = [...sequences]

//flashing random colour from array sequences
const flash = (sector) => {
return new Promise((resolve, reject) =>{
   sector.className += 'active';
   setTimeout(() => {
sector.className = sector.className.replace('active', '');
//setting break time between double colour flashing
setTimeout(() => {
    resolve();
}, 250);
}, 1000)
});
};

let canClick = false;

const sectorClicked = sectorClicked => {
    if(!canClick) return;
    console.log(sectorClicked);
    const expectedSector = sequenceToGuess.shift();
    if (expectedSector === sectorClicked) {
        if (sequenceToGuess.length === 0) {
    //start new round
        }
       
    } else {
        //end game
        alert('Sorry, but you did mistake');
    }
};

let main = async () =>{
    for (let sector of sequences) {
        await flash(sector);   
    }
    canClick = true;
};
main();