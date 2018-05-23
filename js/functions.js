
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

function validateForm(){

    var msg = "", nome = "", email = "", type = "", utilizador = "", dominio="" ;

    var nome  = document.getElementById( "nome" ).value;
    var email = document.getElementById( "email" ).value;

    if( nome != "" && email != "" ){

        if ( email.indexOf('@') != -1 && email.indexOf('.') != -1 ) {

            utilizador = email.substring( 0, email.indexOf('@') ) ;
            dominio = email.substring( email.indexOf('@') , email.length ) ;

            if ( utilizador.length >= 1 && dominio.length >= 3 ){
                msg = "Sucesso! Sua inscrição foi confirmada!"
                type = "success-message";
            } else {
                msg = "Informe um e-mail correto!"
                type = "error-message";
            }
        }else{
            msg = "Informe um e-mail correto!"
            type = "error-message";
        }
    } else {
        msg="Informe os campos corretamente!"
        type = "error-message";
    }

    document.getElementById( 'form-output').innerHTML = "<p class=\""+type+"\"> " + msg + "</>"

}

function cleanOutput(){
    if( document.getElementById('form-output').innerHTML.match( "error-message" ) ){
        document.getElementById('form-output').innerHTML = "" ;
    }
}
