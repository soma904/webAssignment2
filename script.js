document.getElementById('registrationForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        alert('Please fill all required fields.');
        e.preventDefault();
    }
});