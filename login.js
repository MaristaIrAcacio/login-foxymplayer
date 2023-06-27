//###################################################
//codigo de valdaçao de formulario de login

function verificar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!email || !senha){
        alert("Campos de preenchimento obrigatorio. porfavor preencher");
    }
}


//###################################################