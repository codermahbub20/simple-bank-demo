document.getElementById('deposit-btn').addEventListener('click',function(){

   const depositInputField = document.getElementById('deposit-input');
   const newDepositamountString = depositInputField.value;
   const newDepositamount = parseFloat(newDepositamountString);

   const totalAmount = document.getElementById('depo-amount');

   const previousAmountString = totalAmount.innerText;
   const previousAmount = parseFloat(previousAmountString);
   const currentDepositAmount = previousAmount + newDepositamount;
   totalAmount.innerText = currentDepositAmount;

   const balanceTotalAmount = document.getElementById('balance-total');
   const balanceTotalAmountString = balanceTotalAmount.innerText;
   const totalBalance = parseFloat(balanceTotalAmountString);

   const currentBalance = totalBalance + newDepositamount;
   balanceTotalAmount.innerText = currentBalance;

   depositInputField.value = '';
})