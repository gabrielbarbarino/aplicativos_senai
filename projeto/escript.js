document.querySelectorAll('form').forEach(form => {
    form.onsubmit = async function(event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(form));
        const endpoint = 'URL_DA_SUA_API'; // Substitua pela URL do seu endpoint

        try {
            const response = await fetch(endpoint, {
                method: 'POST', // Altere para 'GET', 'PUT', 'DELETE' conforme necessário
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }

            const result = await response.json();
            alert('Dados salvos: ' + JSON.stringify(result));
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
            alert('Erro ao enviar a requisição.');
        }
    };
});