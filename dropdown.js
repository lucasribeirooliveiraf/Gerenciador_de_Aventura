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
        notas.style.display = "none"
        icone_nota.className = "fa-solid fa-angle-down"
    }
    else{
        mostrar_notas = false
        notas.style.display = "block"
        icone_nota.className = "fa-solid fa-angle-up"
    }

}

function display_color(){
    const cores = document.getElementById("cores")
    const icone_cor = document.getElementById("icone_cor")
    if (mostrar_cores == false){
        mostrar_cores = true
        cores.style.display = "none"
        icone_cor.className = "fa-solid fa-angle-down"
    }
    else{
        mostrar_cores = false
        cores.style.display = "block"
        icone_cor.className = "fa-solid fa-angle-up"
    }

}

function display_background(){
    const bg = document.getElementById("background_change")
    const icone_bg = document.getElementById("icone_bg")
    if (mostrar_bg == false){
        mostrar_bg = true
        bg.style.display = "none"
        icone_bg.className = "fa-solid fa-angle-down"
    }
    else{
        mostrar_bg = false
        bg.style.display = "block"
        icone_bg.className = "fa-solid fa-angle-up"
    }

}

function display_pdf(){
    const pdf_display = document.getElementById("pdf_display")
    const icone_pdf = document.getElementById("icone_pdf")
    if (mostrar_pdf == false){
        mostrar_pdf = true
        pdf_display.style.display = "none"
        icone_pdf.className = "fa-solid fa-angle-down"
    }
    else{
        mostrar_pdf = false
        pdf_display.style.display = "block"
        icone_pdf.className = "fa-solid fa-angle-up"
    }

}

function display_roll(){
    const dados = document.getElementById("dados")
    const icone_dice = document.getElementById("icone_dice")
    if (mostrar_dados == false){
        mostrar_dados = true
        dados.style.display = "none"
        icone_dice.className = "fa-solid fa-angle-down"
    }
    else{
        mostrar_dados = false
        dados.style.display = "block"
        icone_dice.className = "fa-solid fa-angle-up"
    }

}


