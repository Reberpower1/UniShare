
    document.getElementById('message-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        var messageInput = document.getElementById('message-input');
        var message = messageInput.value;

        if (message.trim() !== '') {
            appendMessage(message);
            messageInput.value = ''; // Limpa o campo de entrada após o envio da mensagem
        }
    });

    function appendMessage(message) {
        var chatMessages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática para a parte inferior
    }