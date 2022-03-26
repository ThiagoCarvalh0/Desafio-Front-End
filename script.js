const img = 'url(./imagens/background1.jpg)';
const img2 = 'url(./imagens/background.jpg)';

const backg = document.querySelector("main");

const btn = document.querySelector(".botao");
const btn1 = document.querySelector(".botao3");

btn.addEventListener('click', function(){
    backg.style.backgroundImage = img;
})

btn1.addEventListener('click', function(){ 
    backg.style.backgroundImage = img2;
})