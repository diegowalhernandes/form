const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por Favor, preencha o seu nome");
        return;
    }

    //verifica se o email está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, prencha o seu email");
        return;
    }

    //Verifica se a senha é valida
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ser no mínino 8 dígitos.");
        return;
    }

    //verifica se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    // Verifica se a mensagee está preenchida
    if (messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//função que valida email
function isEmailValid(email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true
    }

    return false
}

//Função Valida senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits) {
        //senha válida
        return true
    }

    //senha inválida
    return false
}