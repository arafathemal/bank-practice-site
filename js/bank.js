// function diye korar niyom
function getDepositValue(){
    const depositInput = document.getElementById('deposit-input');
    const currentAmountText = depositInput.value;
    const currentAmount = parseFloat(currentAmountText);
    depositInput.value ='';
    return currentAmount;
}




// deposit handlare
document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const currentAmountText = depositInput.value;
    // const currentAmount = parseFloat(currentAmountText);
    const currentAmount= getDepositValue();
    //////////////
    const depositAmount = document.getElementById('deposit-amount');
    const preDepositText = depositAmount.innerText;
    const preDeposit = parseFloat(preDepositText);
    const currentDeposit = preDeposit + currentAmount;
    depositAmount.innerText = currentDeposit;
    // balance
    const balanceInput = document.getElementById('balance-input');
    const preBalanceText = balanceInput.innerText;
    const preBalance = parseFloat(preBalanceText);
    const newBalance = preBalance + currentAmount;
    balanceInput.innerText = newBalance;
    depositInput.value ='';

})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const currentWithdrawText = withdrawInput.value;
    const currentWithdraw = parseFloat(currentWithdrawText);
    const withdrawAmount = document.getElementById('withdraw-amount');
    const preWithdrawAmountText = withdrawAmount.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawAmountText);
    const totalWithdraw = preWithdrawAmount + currentWithdraw;
    withdrawAmount.innerText = totalWithdraw;

    // balance
    const balanceInput = document.getElementById('balance-input');
    const preBalanceText = balanceInput.innerText;
    const preBalance = parseFloat(preBalanceText);
    const newBalance = preBalance - currentWithdraw;
    balanceInput.innerText = newBalance;
    withdrawInput.value ='';
})