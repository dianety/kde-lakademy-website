/*Adicione e remove a classe hide aos elementos que possuem a classe .navbar-item-collapse*/
function menuShow() {
    var items = document.getElementsByClassName("navbar-item-collapse");

    for( i=0 ; i < items.length ; i++ ){
        if (items[i].classList.contains("hide")) {
            items[i].classList.remove("hide")
        } else {
            items[i].classList.add("hide");
        }
    }

    if( dropdownIsOpen() ){
        dropdownShow();
    }
}

/*Adicione e remove a classe hide aos elementos que possuem a classe .navbar-collapse-dropdown-item*/
function dropdownShow() {
    var items = document.getElementsByClassName("navbar-collapse-dropdown-item");

    for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains("hide")) {
            items[i].classList.remove("hide")
        } else {
            items[i].classList.add("hide");
        }
    }
}

function dropdownIsOpen(){
    var items = document.getElementsByClassName("navbar-collapse-dropdown-item");
    return !items[i].classList.contains("hide") ;
}


