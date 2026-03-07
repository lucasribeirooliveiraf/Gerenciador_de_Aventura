// abir database
let database;
const request = window.indexedDB.open("Gerenciador_rpg", 1);

request.onerror = (event) => {
    alert("Ocorreu algum erro com a database!");
    console.error(`Database error: ${event.target.error?.message}`);
  // Do something with request.error!
};

request.onupgradeneeded = (event) => {
  // Save the IDBDatabase interface
  database = event.target.result;

  // Create an objectStore for this database
  const objectStore = database.createObjectStore("Imagem_fundo", { keyPath: "id" });
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
            background.style.backgroundImage = `url("${url}")`;
            background.style.backgroundSize = "cover";
            background.style.backgroundPosition = "center";
            background.style.backgroundRepeat = "no-repeat";
        }
    };
}


request.onsuccess = function (event) {
    database = event.target.result;

    carregarImagem();
};


