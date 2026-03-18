let database;
let notaAtual;
const request = window.indexedDB.open("Gerenciador_rpg", 2);

request.onerror = (event) => {
    alert("Ocorreu algum erro com a database!");
    console.error(`Database error: ${event.target.error?.message}`);

};

request.onupgradeneeded = (event) => {

    database = event.target.result;

 
    if(!database.objectStoreNames.contains("Imagem_fundo")){
        database.createObjectStore("Imagem_fundo", { keyPath: "id" });
    }

    if(!database.objectStoreNames.contains("notas")){
        database.createObjectStore("notas", { keyPath: "id" });
    }
};

document.getElementById("input_background_image").addEventListener("change", function () {

    const file = this.files[0];

    salvarImagem(file);

});

function salvarImagem(file) {
    if (!database) {
        console.error("Database ainda não carregou");
        return;
    }

    const transaction = database.transaction(["Imagem_fundo"], "readwrite");
    const store = transaction.objectStore("Imagem_fundo");
    
    const imagem = {
        id: "background",
        arquivo: file
    };

    store.put(imagem);
}

function deletarImagem(){
    const transaction = database.transaction(["Imagem_fundo"], "readwrite");
    const store = transaction.objectStore("Imagem_fundo");

    const deleteRequest = store.delete("background");
  
    deleteRequest.onsuccess = function() {
        console.log("Registro deletado com sucesso!");
  };
}

function carregarImagem() {

    const transaction = database.transaction(["Imagem_fundo"], "readonly");
    const store = transaction.objectStore("Imagem_fundo");

    const request = store.get("background");

    request.onsuccess = function () {

        const resultado = request.result;

        if (resultado) {

            const url = URL.createObjectURL(resultado.arquivo);
            console.log(`url(${url})`)
            background.style.backgroundImage = `url(${url})`;
            background.style.backgroundSize = "cover";
            background.style.backgroundPosition = "center";
            background.style.backgroundRepeat = "no-repeat";
        }
    };
}

function salvarNota(nota) {
    if (!database) {
        console.error("Database ainda não carregou");
        return;
    }
    const transaction = database.transaction(["notas"], "readwrite");

    const store = transaction.objectStore("notas");

    store.put(nota);

}

function abrirNota(id) {

    const transaction = database.transaction(["notas"], "readonly");

    const store = transaction.objectStore("notas");

    const request = store.get(id);

    request.onsuccess = function() {

        const nota = request.result;
        notaAtual = nota.id;
        const titulo = document.getElementById("titulo_da_nota");
        const texto = document.getElementById("texto");
        titulo.innerHTML = nota.titulo;
        texto.innerHTML = nota.conteudo;


    };

}

function carregarNotas(){

    const transaction = database.transaction(["notas"], "readonly");
    const store = transaction.objectStore("notas");

    const request = store.getAll();

    request.onsuccess = function(){

        const notas = request.result;
        
        if(notas.length === 0){

            const notaPadrao = criarNotaPadrao();

            adicionarNotaLista(notaPadrao);

            abrirNota(notaPadrao.id);

            return;
        }
        const lista = document.getElementById("colocar_notas");

        lista.innerHTML = "";

        notas.forEach(nota => {

            adicionarNotaLista(nota);

        });
        mudar_cor();

    };

}

function adicionarNotaLista(nota){

    const lista = document.getElementById("colocar_notas");

    const botao = document.createElement("button");
    botao.style.display = "block"

    botao.textContent = nota.titulo || "Nota";

    botao.onclick = () => abrirNota(nota.id);

    lista.appendChild(botao);
    const botao_apagar = document.createElement("button")
    botao_apagar.textContent = "Delete"
    botao_apagar.onclick = () => confirmar_apagar_dados();

    botao.appendChild(botao_apagar)
    mudar_cor();
   
}

request.onsuccess = function (event) {
    database = event.target.result;

    carregarImagem();
    carregarNotas()
};

function criarNotaPadrao(){

    const nota = {
        id:  Date.now(),
        titulo: "First Adventure",
        conteudo: "Write here your tale!"
    };

    salvarNota(nota);

    return nota;
}