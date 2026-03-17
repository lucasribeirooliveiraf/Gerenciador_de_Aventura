
const paletaMarrom = document.getElementById("pa1");
const paletaVermelha = document.getElementById("pa2");
const paletaPreta = document.getElementById("pa3");
const paletaDourada = document.getElementById("pa4");
const paletaRoxa = document.getElementById("pa5");

const setings = document.getElementById("setings");
const main = document.getElementById("main");
const header = document.getElementById("header");
const config = document.getElementById("configs_rpg")


let cor_letra = "#0D2B45";
let cor_clara = "#FFD4A3";
let cor_escura = "#D08159";
let cor_fundo = "#0D2B45";
let cor_escrita = "#0D2B45";
let cor_destaque = "#28008e";

paletaMarrom.addEventListener("click", () =>{
    cor_clara = "#FFD4A3";
    cor_letra = "#0D2B45";
    cor_escura = "#D08159";
    cor_fundo = "#0D2B45";
    cor_escrita = "#0D2B45";
    cor_destaque = "#28008e";
    mudar_cor();
});

paletaVermelha.addEventListener("click", () =>{
    cor_clara = "#ffc1c1";
    cor_escura = "#9e1c1e";
    cor_letra = "#ffcccc";
    cor_fundo = "#3A211C";
    cor_escrita = "#2a0303";
    cor_destaque = "#8e0000";
    mudar_cor();
    
});

paletaPreta.addEventListener("click", () =>{
    cor_clara = "#c6b7be";
    cor_escura = "#565a75";
    cor_letra = "#fafbf6";
    cor_fundo = "#0f0f1b";
    cor_escrita = "#291f1f";
    cor_destaque = "#1d0056";

    mudar_cor();
    
});


paletaDourada.addEventListener("click", () =>{
    cor_clara = "#ffb873";
    cor_escura = "#cb765c";
    cor_letra = "#ffecd6";
    cor_fundo = "#25213e";
    cor_escrita = "#333427";
    cor_destaque = "#63025b";

    mudar_cor();
    
});

paletaRoxa.addEventListener("click", () =>{
    cor_clara = "#5d3eb3";
    cor_escura = "#210f66";
    cor_letra = "#cb91f2";
    cor_fundo = "#0a0a1a";
    cor_escrita = "#ff00ff";
    cor_destaque = "#05d4d7";


    mudar_cor();
    
});

function mudar_cor(){
    document.body.style.backgroundColor = cor_fundo;
    
    setings.style.backgroundColor = cor_escura;
    header.style.backgroundColor = cor_escura;
    config.style.backgroundColor = cor_escura;
    main.style.backgroundColor = cor_clara;
    main.style.color = cor_escrita;

    config.style.color = cor_letra;
    setings.style.color = cor_letra;
    header.style.color = cor_letra;

    const negrito = document.querySelectorAll('#main b');
    const botoes = document.querySelectorAll('.setings button');
    const botoes2 = document.querySelectorAll('.configs_rpg button');

    negrito.forEach(b =>{
        b.style.color = cor_destaque;
    });

    botoes.forEach(btt =>{
        btt.style.color = cor_escrita;
        btt.style.backgroundColor = cor_clara;
    });
    botoes2.forEach(btt =>{
        btt.style.color = cor_escrita;
        btt.style.backgroundColor = cor_clara;
    });

    paletaMarrom.style="background-color: #FFD4A3; color: #28008e;";
    paletaVermelha.style="background-color: #ffc1c1; color: #8e0000;";
    paletaPreta.style="background-color: #c6b7be; color: #1d0056;";
    paletaDourada.style="background-color: #ffb873; color: #63025b;";
    paletaRoxa.style="background-color: #5d3eb3; color: #05d4d7;";

    

 
    salvarPaleta();

};
