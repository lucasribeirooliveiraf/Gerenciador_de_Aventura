const background = document.getElementById("bg_layer")

const adicionar_imagem = document.getElementById("add_image");
const remove_imagem = document.getElementById("remove_image");

const popup = document.getElementById("popup");
const popup_notas = document.getElementById("popup_nota");

const input_bg_image = document.getElementById("input_background_image");
const confirmar = document.getElementById("confirmar_bg");


const opacidade = document.getElementById("opacity")

adicionar_imagem.addEventListener("click",() =>{
    popup.style.display = "block";
})

confirmar.addEventListener("click",() =>{
    const file = input_bg_image.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Por favor, selecione uma imagem válida.");
        return;
    }
    if (file) {
        const url = URL.createObjectURL(file);

        background.style.backgroundImage = `url("${url}")`;
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "no-repeat";
        popup.style.display = "none";
       
    }
})

opacidade.addEventListener("input",() =>{
    background.style.opacity = opacidade.value;
})


function fechar_popup(){
    popup.style.display = "none";
    popup_notas.style.display = "none";

}


remove_imagem.addEventListener("click", () => {
    background.style.backgroundImage = "none";
    deletarImagem()
});