function TocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

const classe = lista[Contador].classList[1];
console.log(classe)

while (Contador <ListaDeSons.length) {
    lista[Contador].onclick = function(){
        tocar('#som_tecla_toin');
    }
    Contador = Contador + 1;
    console.log(Contador);
}
