document.addEventListener('DOMContentLoaded', function() {
    const errorElement = document.getElementById('errorMessage');
    const loginForm = document.getElementById('loginForm');

    
    const urlParams = new URLSearchParams(window.location.search);
    const initialError = urlParams.get('error');
    if (initialError) {
        errorElement.textContent = initialError;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorElement.textContent = '';
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            errorElement.textContent = 'Username dan password harus diisi y!';
            return;
        }

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw err; });
            }
            return response.json();
        })
        .then(data => {
            window.location.href = '/dashboard';
        })
        .catch(error => {
            errorElement.textContent = error.message || 'Terjadi kesalahan pada saat login';
        });
    });
});
