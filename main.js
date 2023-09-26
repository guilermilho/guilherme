function TocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {
    const tecla = lista[contador]
    const classe = tecla.classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    tecla.onclick = function(){
        tocar(idSom);
    }
    
    Contador = Contador + 1;
    //console.log(Contador);

tecla.ClassList.add('ativa');
tecla.ClassLista.remove(ativa);
}
