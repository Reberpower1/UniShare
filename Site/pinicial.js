document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar lógica para validar o login e a senha

    // Redirecionar para a página inicial
    window.location.href = "index.html";
});



