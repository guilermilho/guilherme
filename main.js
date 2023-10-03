function tocar (){
    document.querySelector('#som_tecla_pom').play();
}

const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const tecla = lista[Contador];
    const classe = tecla.classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    tecla.onclick = function(){
        tocar(idSom);
    }
    
    Contador = Contador + 1;
    //console.log(Contador);

    tecla.onkeydown = function (){
tecla.classList.add('ativa');
console.log(evento.code === 'Space'||evento.code === 'Enter');

    }
    tecla.onkeyup = function(){
tecla.classList.remove('ativa');
}
}
