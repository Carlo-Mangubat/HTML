document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username=document.getElementById('Username').value;
    const password=document.getElementById('Password').value;

    if (username === 'admin' && password === 'password') {
        // punta next page pag tama
        alert('Login successful!');
        window.location.href = 'secondpage.html';
    } else {
        // or else, stay parin sa first page
        alert('Invalid username and password');
        document.getElementById('Username').value = ''; // ma c-clear username
        document.getElementById('Password').value = ''; // pati yung password kasi mali
    }
});
