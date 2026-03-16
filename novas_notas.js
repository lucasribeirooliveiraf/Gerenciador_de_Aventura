

function abrir_popup(){
    popup_notas.style.display = "block";
}

function criar_nota(){
    const titulo = document.getElementById("titulo_nota");
    const nova_nota = document.createElement("button");
    const add_nota = document.getElementById("colocar_notas");
    popup_notas.style.display = "none";
    nova_nota.textContent = titulo.value;
    nova_nota.style.display = "block"
   

    const novaNota = {
    id: Date.now(),
    titulo: titulo.value,
    conteudo: ""
    };
    
    salvarNota(novaNota);

    nova_nota.onclick = () => abrirNota(novaNota.id);
    add_nota.appendChild(nova_nota);

    const botao_apagar = document.createElement("button")
    botao_apagar.textContent = "Delete"
    botao_apagar.onclick = () => confirmar_apagar_dados();

    nova_nota.appendChild(botao_apagar)

}