document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputFieldString = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawInputFieldString);
    
    const withdrawTotalAmount = document.getElementById('withdraw-amount');
    const withdrawTotalAmountString = withdrawTotalAmount.innerText;
    const myTotalAmount = parseFloat(withdrawTotalAmountString);

    const currentTotalAmount = withdrawAmount + myTotalAmount;

    withdrawTotalAmount.innerText = currentTotalAmount;


    withdrawInputField.value = '';

})