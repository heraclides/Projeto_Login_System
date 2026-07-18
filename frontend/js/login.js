/*==================================

LOGIN SYSTEM

login.js

==================================*/

/*========================

CAPTURA DOS ELEMENTOS

========================*/

const form = document.querySelector("#loginForm");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const btnLogin = document.querySelector("#btnLogin");

/*========================

TESTES

========================*/

console.log(email);

console.log(password);

console.log(btnLogin);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario();
})

function validarFormulario() {
   const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("Por favor, preencha todos os campos.");
        email.focus();
        return;
    }

    if (!validarEmail(emailValue)){
        alert("Por favor, preencha um email válido.");
        email.focus();
        return;
    }

    if (passwordValue.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        email.focus();
        return;
    }   
    
    alert("Login realizado com sucesso!");
    console.log("Formulário válido. Email:", emailValue, "Senha:", passwordValue);

    email.value = "";
    password.value = "";
    email.focus();
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);  
}