const tanah = document.querySelectorAll('.tanah');
const pocong = document.querySelectorAll('.pocong');
const papanskor = document.querySelector('.papan-skor');
const sound = document.querySelector('#sound');

let tanahsebelumnnya;
let selesai;
let skor;

function randomtanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const trandom = tanah[t];
    if( trandom == tanahsebelumnnya ) {
        randomtanah(tanah);
    }
    tanahsebelumnnya = trandom;
    return trandom;
}

function randomwaktu(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}

function munculkanpocong() {
    const trandom = randomtanah(tanah);
    const wrandom = randomwaktu(500, 1000);
    trandom.classList.add('muncul');

    setTimeout(() => {
    trandom.classList.remove('muncul');
    if (!selesai) {
        munculkanpocong();
}
    }, wrandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanskor.textContent = 0;
    munculkanpocong();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    sound.play();
    papanskor.textContent = skor;
}

pocong.forEach(t => {
    t.addEventListener('click', pukul);
});