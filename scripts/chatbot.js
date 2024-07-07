document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbot = document.getElementById('chatbot');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    // Toggle para abrir y cerrar el chatbot
    chatbotToggleBtn.addEventListener('click', function() {
        chatbot.classList.toggle('active');
        const isOpen = chatbot.classList.contains('active');
        chatbotToggleBtn.textContent = isOpen ? 'Cerrar Chatbot' : 'Abrir Chatbot';
        chatbot.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    // Envío de mensaje (aquí simula una respuesta del chatbot)
    chatbotSendBtn.addEventListener('click', function() {
        const message = chatbotInput.value.trim();
        if (message !== '') {
            appendMessage('user', message); // Mensaje del usuario
            setTimeout(function() {
                appendMessage('bot', '¡Hola! Aún estoy en pruebas, dame un tiempo que me prepare!'); // Respuesta del chatbot simulada
            }, 500);
            chatbotInput.value = '';
        }
    });

    // Función para añadir mensajes al chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        document.getElementById('chatbot-messages').appendChild(messageElement);
    }
});
