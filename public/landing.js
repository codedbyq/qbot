document.addEventListener("DOMContentLoaded", () => {

    // close the chatbot when x is clicked
    const closeBtn = document.getElementById('close_btn');
    closeBtn.addEventListener('click', () => {
        const chatbot = document.getElementById('wrapper');
        const openChat = document.getElementById('open_chat');
        
        chatbot.classList.add('close');
        chatbot.classList.remove('connected');
        openChat.classList.add('show')
        openChat.classList.remove('hidden');
    });

    // open the chatbot when chat button is clicked
    const openChat = document.getElementById('open_chat');
    openChat.addEventListener('click', () => {
        const chatbot = document.getElementById('wrapper');
        
        chatbot.classList.remove('close');
        chatbot.classList.add('connected');
        openChat.classList.remove('show')
        openChat.classList.add('hidden');
    })
    
});