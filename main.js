function TocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const classe = Lista[Contador].classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`:
    //console.log(idSom);

    lista[Contador].onclick = function(){
        tocar(idSom);
    }
    
    Contador = Contador + 1;
    //console.log(Contador);
}
