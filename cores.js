
const paletaMarrom = document.getElementById("pa1");
const paletaVermelha = document.getElementById("pa2");
const paleta3 = document.getElementById("pa3");

const setings = document.getElementById("setings");
const main = document.getElementById("main");
const header = document.getElementById("header");

cor_letra = "#0D2B45";
cor_clara = "#FFD4A3";
cor_escura = "#D08159";
cor_fundo = "#0D2B45"

paletaMarrom.addEventListener("click", () =>{
    cor_clara = "#FFD4A3"
    cor_letra = "#0D2B45";
    cor_escura = "#D08159"
    cor_fundo = "#0D2B45"
    mudar_cor()
});

paletaVermelha.addEventListener("click", () =>{
    cor_clara = "#ffc1c1"
    cor_escura = "#850000"
    cor_letra = "#ffcccc";
    cor_fundo = "#000000"

    mudar_cor()
    
});

function mudar_cor(){
    document.body.style.backgroundColor = cor_fundo
    setings.style.backgroundColor = cor_escura;
    header.style.backgroundColor = cor_escura;
    main.style.backgroundColor = cor_clara;
    

    setings.style.Color = cor_letra;
    main.style.Color = cor_letra;


};

