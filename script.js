const elements = document.querySelectorAll(".btn")


elements.forEach(element => {
        element.addEventListener('click', () =>{
            let command = element.dataset['element'];
            if (command == "createLink"){
                let url = prompt("Enter the link here:", "http://");
                if (url){
                    document.execCommand(command, false, url);
                }
            }
            
            else if (command === "h1" || command === "p") {
                document.execCommand('formatBlock',true, command);
            }

            else{
                document.execCommand(command, false, null);
            }

            
        });
});

function contar_palavras(){
    const texto = document.getElementById("texto");

    const palavras = document.getElementById("palavras");

    const caracteres = document.getElementById("caracteres");

    texto.addEventListener("input", () => {
        let conteudo = texto.innerText.trim();
        
        // contar caracteres (com espaço)
        caracteres.textContent = conteudo.length + " caracteres";


        // contar palavras
        let listaPalavras = conteudo.trim().split(/\s+/);
        palavras.textContent = conteudo.trim() === "" ? 0 + " palavras" : listaPalavras.length + " palavras";
    });
}
contar_palavras();

