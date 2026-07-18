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

// Captura dos novos elementos do Alerta Flutuante
const customAlert = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
const btnAlertConfirm = document.getElementById("btnAlertConfirm");

const tipo = "erro"; // Variável para armazenar o campo que precisa de foco

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
        mostrarAlerta("Por favor, preencha todos os campos.", email, tipo);
        return;
    }

    if (!validarEmail(emailValue)) {
        mostrarAlerta("O e-mail inserido não é válido. Verifique a digitação.", email, tipo);
        return;
    }

    if (passwordValue.length < 6) {
        mostrarAlerta("A senha deve ter pelo menos 6 caracteres.", password, tipo);
        return;
    }

    // Caso de Sucesso: passamos 'sucesso' no terceiro parâmetro para ativar o verde
    mostrarAlerta("Login realizado com sucesso! Redirecionando...", null, 'sucesso');
    console.log("Formulário válido. Email:", emailValue, "Senha:", passwordValue);

    email.value = "";
    password.value = "";
    email.focus();
    
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*==================================
FUNÇÕES DO ALERTA FLUTUANTE
==================================*/
function mostrarAlerta(mensagem, elementoFoco, tipo) {
    alertMessage.textContent = mensagem;
    customAlert.style.display = "flex"; // Mostra o fundo e o card
    

    const alertCard = customAlert.querySelector(".alert-box");

    if (tipo === "sucesso") {
        alertCard.classList.add("success");
        // altera o titulo do model para sucesso
        document.querySelector(".alert-box h3").textContent = "Sucesso!";
    }else {
        alertCard.classList.remove("success");
        document.querySelector(".alert-box h3").textContent = "Aviso Importante!";
    }
}

// Fecha o alerta quando o usuário clica no botão "Ok, entendi"
btnAlertConfirm.addEventListener("click", () => {
    customAlert.style.display = "none"; // Esconde o alerta
    if (tipo === "sucess") {
        mostrarAlerta(null,null, tipo); // Reseta o tipo para erro para a próxima vez que o alerta for chamado
    }
});