let wolfClicks = 0;
let clicks = 0;
let astroClicks = 0;

const wolf = document.querySelector('.wolf');
if (wolf) {
    wolf.addEventListener('click', () => {
        wolfClicks++;
        if (wolfClicks === 5) alert('tuff wolf right?');
    });
}

const maryOS = document.querySelector('#maryOS');
if (maryOS) {
    maryOS.addEventListener('click', () => {
        clicks++;
        if (clicks === 5) alert('you like clicking on wolves huh?');
    });
} 

const astroFetch = document.querySelector('#astroFetch');
if (astroFetch) {
    astroFetch.addEventListener('click', () => {
        astroClicks++;
        if (astroClicks === 5) alert('NASA pics! aint that cool?');
    });
}