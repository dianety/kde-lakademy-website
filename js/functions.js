/*Adiciona a classe para ativar a função de MediaQuery*/
function menuShow() {
    var items = document.getElementsByClassName("navbar-item-collapse");

    for( i=0 ; i < items.length ; i++ ){
        if (items[i].classList.contains("hide")) {
            items[i].classList.remove("hide")
        } else {
            items[i].classList.add("hide");
        }
    }
}

function scroll()  {
    var element = document.getElementById("sobre");
    console.log( element ) ;
    window.scrollTo(element.offsetLeft, element.offsetTop);
}
