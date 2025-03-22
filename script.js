document.getElementById("agendamento-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    let numeroWhatsApp = "5585991765726"; // Coloque o número da PH Motos com DDD

    let mensagem = `Olá, gostaria de agendar uma lavagem!%0A
    Nome: ${nome}%0A
    Telefone: ${telefone}%0A
    Data: ${data}%0A
    Hora: ${hora}`;

    let url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.location.href = url;
});
