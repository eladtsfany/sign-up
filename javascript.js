const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('sign-up');

confirmPassword.addEventListener('change', () =>
    (password.value === confirmPassword.value) ?
        confirmPassword.classList.remove('error') : confirmPassword.classList.add('error')
);

form.addEventListener('submit', (event) => {
    if (confirmPassword.classList.contains('error')) {
        event.preventDefault();
        confirmPassword.style.backgroundColor = 'red';
    }
    else confirmPassword.style.backgroundColor = 'transparent';
})
