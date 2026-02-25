
function salvar_texto(){
    const texto = document.getElementById("texto");

    texto.addEventListener("input", () => {
        const conteudo = texto.innerHTML;
        localStorage.setItem("texto_salvo", conteudo)
    });
};
salvar_texto()

function salvarPaleta() {
    const paleta = {
        cor_letra,
        cor_clara,
        cor_escura,
        cor_fundo,
        cor_escrita
    };

    localStorage.setItem("paleta", JSON.stringify(paleta));
}

function carregarPaleta(){
    const paletaSalva = localStorage.getItem("paleta");

    if (!paletaSalva) return;

    const paleta = JSON.parse(paletaSalva);

    cor_letra = paleta.cor_letra;
    cor_clara = paleta.cor_clara;
    cor_escura = paleta.cor_escura;
    cor_fundo = paleta.cor_fundo;
    cor_escrita = paleta.cor_escrita;

    mudar_cor();
}


window.onload = function (){
    const texto = document.getElementById("texto");
    const conteudoSalvo = localStorage.getItem("texto_salvo");

    if (conteudoSalvo) {
        texto.innerHTML = conteudoSalvo;
    }
    carregarPaleta();
};