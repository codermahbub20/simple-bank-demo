document.getElementById('submit-btn').addEventListener('click', function () {

    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;

    const passInput = document.getElementById('pass-input');
    const passValue = passInput.value;
    if (emailValue == 'mkrefat5@gmail.com' && passValue == 'koitamnah') {
        window.open('bank.html')
    } else {
        alert('Inavlid User, Please Provide your correct email and pass');
    }
});