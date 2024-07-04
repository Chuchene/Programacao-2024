function TocaSomToim(idEelementoAudio) {
    document.querySelector(idEelementoAudio).play();
}

const Lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < Lista.length) {
    const tecla = Lista[contador ];
    const classe = tecla.classList[1];
    //console.log(classe);
    
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);
    //'som_{classe}'

    tecla.onclick = function () {
        TocaSomToim(idAudio);
    }

    contador = contador + 1;
    //console.log(contador);
tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
         tecla.classList.add('ativa');
    console.log(evento.code === 'Space' || evento.code === 'Enter');
    }
   
}
tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
}