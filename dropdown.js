let mostrar_notas = true
let mostrar_cores = true
let mostrar_bg = true
let mostrar_pdf = true
let mostrar_dados = true

function display_notas(){
    const notas = document.getElementById("notas")
    const icone_nota = document.getElementById("icone_nota")
    if (mostrar_notas == false){
        mostrar_notas = true
        icone_nota.className = "fa-solid fa-angle-down"
        animation_unplay(notas)
    }
    else{
        mostrar_notas = false
        notas.style.display = "block"
        icone_nota.className = "fa-solid fa-angle-up"
        animation_display(notas)
    }
    


}

function display_color(){
    const cores = document.getElementById("cores")
    const icone_cor = document.getElementById("icone_cor")
    if (mostrar_cores == false){
        mostrar_cores = true

        icone_cor.className = "fa-solid fa-angle-down"
        animation_unplay(cores)
    }
    else{
        
        mostrar_cores = false
        cores.style.display = "block"
        icone_cor.className = "fa-solid fa-angle-up"
        animation_display(cores)
    }
    

}

function display_background(){
    const bg = document.getElementById("background_change")
    const icone_bg = document.getElementById("icone_bg")
    if (mostrar_bg == false){
        mostrar_bg = true

        icone_bg.className = "fa-solid fa-angle-down"
        animation_unplay(bg)
    }
    else{
        mostrar_bg = false
        bg.style.display = "block"
        icone_bg.className = "fa-solid fa-angle-up"
        animation_display(bg)
    }
    
}

function display_pdf(){
    const pdf_display = document.getElementById("pdf_display")
    const icone_pdf = document.getElementById("icone_pdf")
    if (mostrar_pdf == false){
        mostrar_pdf = true
        icone_pdf.className = "fa-solid fa-angle-down"
        animation_unplay(pdf_display)
    }
    else{
        mostrar_pdf = false
        pdf_display.style.display = "block"
        icone_pdf.className = "fa-solid fa-angle-up"
        animation_display(pdf_display)
    }
    

}

function display_roll(){
    const dados = document.getElementById("dados")
    const icone_dice = document.getElementById("icone_dice")
    if (mostrar_dados == false){
        mostrar_dados = true
        icone_dice.className = "fa-solid fa-angle-down"
        animation_unplay(dados)
    }
    else{
        mostrar_dados = false
        dados.style.display = "block"
        icone_dice.className = "fa-solid fa-angle-up"
        animation_display(dados)
    }
    

}


function animation_display(animacao){
    animacao.style.transformOrigin = "top center";
    console.log(animacao.scrollHeight)
    
    const anim = animacao.animate(
    [
        { transform: "scaleY(0)",  height:"0px"},
        { transform: "scaleY(1)",  height:animacao.scrollHeight + "px" },
    ],
    {
        duration: 250,
        easing: "ease-in-out",
        fill: "forwards",
    }
    
    );
    anim.onfinish = () => {
        anim.cancel();
        animacao.style.height = "auto"; // libera o tamanho
    };
}
function animation_unplay(animacao){
    animacao.style.transformOrigin = "top center";
    
    const anim = animacao.animate(
    [
        { transform: "scaleY(1)", height:animacao.scrollHeight + "px"},
        { transform: "scaleY(0)", height:"0px" },
    ],
    {
        duration: 250,
        easing: "ease-in-out",
        fill: "forwards",
    }
    );
    anim.onfinish = () => {
        animacao.style.display = "none";
    };
    
}