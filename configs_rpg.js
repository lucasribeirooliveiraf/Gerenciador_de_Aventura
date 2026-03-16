function adicionar_pdf(){
    const adicionar_livro = document.getElementById("pdf_book");
    const pdf = document.getElementById("arquivo_pdf");
    adicionar_livro.addEventListener("change", () => {
        const arquivo = adicionar_livro.files[0];

        if (arquivo) {
            const url = URL.createObjectURL(arquivo);
            
            pdf.src = url;
            pdf.style.display = "block"
        }
    });
};

function rolar_dados(numero){
    let resultado = document.getElementById("d"+numero)
    let valor = Math.floor(Math.random() * numero) + 1
    resultado.innerText = valor
}


adicionar_pdf()