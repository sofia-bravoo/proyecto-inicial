const reproducir=()=>{

    let video1=document.getElementById("video1")
    video1.play()
}

const pausar=()=>{

    let video1=document.getElementById("video1")
    video1.pause()
}



let botondD=document.getElementsByClassName('boton-general')

botondD.addEventListener("click", ()=>{
    document.querySelector('.boton-general').style.boxshadow=none;
})