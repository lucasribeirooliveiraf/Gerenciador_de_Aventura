function salvar_texto(){

    const titulo = document.getElementById("titulo_da_nota");
    const texto = document.getElementById("texto");

    function salvar(){

        const conteudo = texto.innerHTML;
        const conteudo_titulo = titulo.innerText;
        let id_aberto = notaAtual;
        if (id_aberto == undefined){
            id_aberto =   Number(localStorage.getItem("id_aberto"));
        }
        localStorage.setItem("titulo_salvo", conteudo_titulo);
        localStorage.setItem("texto_salvo", conteudo);
        localStorage.setItem("id_aberto", id_aberto);
        
        const Nota = {
            id: id_aberto,
            titulo: conteudo_titulo,
            conteudo: conteudo
        };
        console.log(Nota.id)
        salvarNota(Nota);
        carregarNotas()

    }

    titulo.addEventListener("input", salvar);
    texto.addEventListener("input", salvar);
}


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

    const titulo = document.getElementById("titulo_da_nota");
    const texto = document.getElementById("texto");

    const tituloSalvo = localStorage.getItem("titulo_salvo");
    const conteudoSalvo = localStorage.getItem("texto_salvo");

    if (conteudoSalvo) {
        titulo.innerText = tituloSalvo;
        texto.innerHTML = conteudoSalvo;
    }

    carregarPaleta();
    salvar_texto();
};



function confirmar_apagar_dados(){
    const popup_apagar = document.getElementById("popup_apagar");
    popup_apagar.style.display = "block"
}


function deletar_dados(){
    const transaction = database.transaction(["notas"], "readwrite");

    const store = transaction.objectStore("notas");

    let id_aberto = notaAtual;
    if (id_aberto == undefined){
        id_aberto =   Number(localStorage.getItem("id_aberto"));
    }
    const deleteRequest = store.delete(id_aberto);
  
    deleteRequest.onsuccess = function() {
        console.log("Registro deletado com sucesso!");
        fechar_popup();
        carregarNotas();
  };
}