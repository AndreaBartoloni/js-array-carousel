pathImg = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp" ];
// // //Inserisco le immagini nel DOM
let inserireImmagine = "";
for (let i = 0; i < pathImg.length; i++){
    const percorsoImmagine = pathImg[i];
    inserireImmagine += `<img src="${percorsoImmagine}">`;
}

document.getElementById("container").innerHTML += inserireImmagine;

//Imposto la prima immagine come attiva
let presentImg = 0;
const images = document.querySelectorAll("#container img");
images[presentImg].classList.add("active");


document.getElementById("next").addEventListener("click", function () {

    if(presentImg < images.length - 1){
        images[presentImg].classList.remove("active");
        presentImg++;
        images[presentImg].classList.add("active");
    }

});
document.getElementById("prev").addEventListener("click", function () {

    if(presentImg > 0){
        images[presentImg].classList.remove("active");
        presentImg--;
        images[presentImg].classList.add("active");
    }

});