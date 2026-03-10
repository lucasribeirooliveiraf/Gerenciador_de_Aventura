
function salvar_texto(){
    const titulo = document.getElementById("titulo_da_nota")
    const texto = document.getElementById("texto");
    
    

    texto.addEventListener("input", () => {
        const conteudo = texto.innerHTML;
        const conteudo_titulo = titulo.innerHTML;
        const id_aberto = notaAtual;
        
        localStorage.setItem("titulo_salvo", conteudo_titulo)
        localStorage.setItem("texto_salvo", conteudo)
        localStorage.setItem("id_aberto", id_aberto)

        const Nota = {
        id: id_aberto,
        titulo: conteudo_titulo,
        conteudo:conteudo
        };
        salvarNota(Nota)
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
    const titulo = document.getElementById("titulo_da_nota")
    const texto = document.getElementById("texto");
    const tituloSalvo = localStorage.getItem("titulo_salvo");
    const conteudoSalvo = localStorage.getItem("texto_salvo");

    if (conteudoSalvo) {
        titulo.innerHTML = tituloSalvo;
        texto.innerHTML = conteudoSalvo;
    }
    carregarPaleta();
};