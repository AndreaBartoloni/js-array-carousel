pathImg = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp" ];

let inserireImmagine = "";
for (let i = 0; i < pathImg.length; i++){
    const percorsoImmagine = pathImg[i];
    inserireImmagine += `<img src="${percorsoImmagine}">`;
}

document.getElementById("container").innerHTML = inserireImmagine;

let currentImg = 0;
const images = document.querySelectorAll(".img1", ".img2", ".img3", ".img4", ".img5");