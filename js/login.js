//  button handler
document.getElementById('submit-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputEmail = inputField.value;
    inputField.value = '';

    const passwordField = document.getElementById('password-field');
    const inputPassword = passwordField.value;

    if(inputEmail == 'hemal@gmail.com' && inputPassword == 'hemal'){
        window.location.href = 'bank-money.html';

    }


})