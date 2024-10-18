document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Coleta os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const feedback = Array.from(document.querySelectorAll('input[name="feedback"]:checked')).map(el => el.value);
    const comments = document.getElementById('comments').value;

    // Simula o armazenamento dos dados
    const data = {
        name,
        email,
        rating,
        feedback,
        comments
    };

    document.getElementById('storageSimulation').textContent += JSON.stringify(data, null, 2);
    
    // Limpa o formulário após a simulação
    this.reset();
});