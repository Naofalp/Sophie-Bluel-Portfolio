document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut

        if (emailInput.value === '' || passwordInput.value === '') { // Vérifie que les champs sont remplis
            alert('Veuillez remplir tous les champs.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5678/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value,
                })
            });

            if (response.ok) {
                console.log('Connexion réussie');
                window.location = 'index.html'; // Redirige l'utilisateur vers la page d'accueil
                alert('Connexion réussie !');
            } else {
                console.error('Échec de la connexion');
                let error = document.createElement('p');
                error.textContent = 'Identifiant ou mot de passe incorrect';
                /* error.style = nom classe css */
                form.parentNode.insertBefore(error, form);            }

                
        } catch (error) {
            console.error('Erreur inattendue:', error);
            alert('Une erreur est survenue lors de la connexion.');
        }
    });
});