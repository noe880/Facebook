     document.getElementById('codeForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('si estas leyendo esto consigue un pasatiempo')
        const formData = {
            username: e.target.code.value,
        };
        
        try {
            const response = await fetch('/code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                alert(data.message || 'Error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión');
        }
    });

         document.getElementById('codeForm2').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('hola')
        const formData = {
            username: e.target.code2.value,
        };
        
        try {
            const response = await fetch('/code', {
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
                alert(data.message || 'Error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión');
        }
    });