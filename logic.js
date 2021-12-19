let audio = document.getElementById("pista");
let controlador = document.getElementById("Musica");
let regularMusica = 0;

function reproducirMusica(){
    switch(regularMusica){
        case 0:
            regularMusica = 1;
            audio.play();
            controlador.innerHTML = "ON";
            controlador.style.color = "var(--color-on-musica)";
            break;
        case 1:
            regularMusica = 0;
            audio.pause();
            controlador.innerHTML = "OFF";
            controlador.style.color = "var(--color-off-musica)";
    }
}