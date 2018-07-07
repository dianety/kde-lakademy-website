
function menuShow()
{
    let items = document.getElementsByClassName("navbar-item-collapse");

    for( i=0 ; i < items.length ; i++ ){
        if (items[i].classList.contains("hide")) {
            items[i].classList.remove("hide");
            continue;
        }

        items[i].classList.add("hide");
    }

    if( dropdownIsOpen() ){
        dropdownShow();
    }
}


function dropdownShow()
{
    let items = document.getElementsByClassName("navbar-collapse-dropdown-item");

    for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains("hide")) {
            items[i].classList.remove("hide");
            continue;
        }

        items[i].classList.add("hide");
    }
}

function dropdownIsOpen()
{
    let items = document.getElementsByClassName("navbar-collapse-dropdown-item");
    return !items[i].classList.contains("hide") ;
}

function validateForm()
{
    let msg = "", type = "", utilizador = "", dominio="" ;

    let nome  = document.getElementById( "nome" ).value;
    let email = document.getElementById( "email" ).value;

    if( nome == "" || email == "" ) {
        msg = "Nome e Email são obrigatórios!";
        type = "error-message";

        generateFormValidationMessage(msg, type);

        return;
    }

    if (validateEmailForRegister(email) !== true) {
        return;
    }

    msg = "Sucesso! Sua inscrição foi confirmada!";
    type = "success-message";

    generateFormValidationMessage(msg, type);
}

function generateFormValidationMessage (msg, type)
{
    document.getElementById( 'form-output').innerHTML = "<p class=\""+type+"\"> " + msg + "</>"
}

function validateEmailForRegister(email)
{
    if ( email.indexOf('@') == -1 || email.indexOf('.') == -1 ) {
        msg = "Informe um e-mail correto!"
        type = "error-message";

        return generateFormValidationMessage(msg, type);
    }

    utilizador = email.substring( 0, email.indexOf('@') ) ;
    dominio = email.substring(utilizador.length + 1);

    if ( utilizador.length < 1 || dominio.length < 4 ) {
        msg = "Informe um e-mail correto!";
        type = "error-message";

        return generateFormValidationMessage(msg, type);
    }

    return true;
}

function cleanOutput(){
    if( document.getElementById('form-output').innerHTML.match( "error-message" ) ){
        document.getElementById('form-output').innerHTML = "" ;
    }
}
