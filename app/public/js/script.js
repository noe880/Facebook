 document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                window.location.href = data.redirect; // Redirección
            } else {
                alert(data.message || 'Error en el inicio de sesión');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión');
        }
    });