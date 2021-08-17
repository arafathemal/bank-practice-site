// function diye korar niyom
function getDepositValue(inputId){
    const inputField = document.getElementById(inputId);
    const currentAmountText = inputField.value;
    const currentAmount = parseFloat(currentAmountText);
    inputField.value ='';
    return currentAmount;
}
function getUpdateAmount(inputAmount, amount){
    const amountField = document.getElementById(inputAmount);
    const preTotalText = amountField.innerText;
    const preTotalAmount = parseFloat(preTotalText);
    const currentTotalAmount = preTotalAmount + amount;
    amountField.innerText = currentTotalAmount;

}
function getUpdateBalance(){
    const balanceInput = document.getElementById('balance-input');
    const preBalanceText = balanceInput.innerText;
    const preBalance = parseFloat(preBalanceText);
    return preBalance;
}
function updateBalance(amount, isAdd){
    const balanceInput = document.getElementById('balance-input');
    // const preBalanceText = balanceInput.innerText;
    // const preBalance = parseFloat(preBalanceText);
    const preBalance = getUpdateBalance();
    if(isAdd == true){
        balanceInput.innerText = preBalance + amount;
    }
    else{
        balanceInput.innerText = preBalance - amount;
    }
}




// deposit handlare
document.getElementById('deposit-btn').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const currentAmountText = depositInput.value;
    // const currentAmount = parseFloat(currentAmountText);

    //////////////get deposit update//
    // const depositAmount = document.getElementById('deposit-amount');
    // const preDepositText = depositAmount.innerText;
    // const preDeposit = parseFloat(preDepositText);
    // const currentDeposit = preDeposit + currentAmount;
    // depositAmount.innerText = currentDeposit;

    // balance
    // const balanceInput = document.getElementById('balance-input');
    // const preBalanceText = balanceInput.innerText;
    // const preBalance = parseFloat(preBalanceText);
    // const newBalance = preBalance + currentAmount;
    // balanceInput.innerText = newBalance;
    const currentAmount = getDepositValue('deposit-input');
    if(currentAmount > 0){
        getUpdateAmount('deposit-amount', currentAmount);
        updateBalance(currentAmount, true);
    }
    

})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const currentWithdrawText = withdrawInput.value;
    // const currentWithdraw = parseFloat(currentWithdrawText);

    ////////////////// 
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const preWithdrawAmountText = withdrawAmount.innerText;
    // const preWithdrawAmount = parseFloat(preWithdrawAmountText);
    // const totalWithdraw = preWithdrawAmount + currentWithdraw;
    // withdrawAmount.innerText = totalWithdraw;

    // balance
    // const balanceInput = document.getElementById('balance-input');
    // const preBalanceText = balanceInput.innerText;
    // const preBalance = parseFloat(preBalanceText);
    // const newBalance = preBalance - currentWithdraw;
    // balanceInput.innerText = newBalance;

    const currentWithdraw = getDepositValue('withdraw-input');
    const totalUpdateBalance = getUpdateBalance();
    if(currentWithdraw > 0 && currentWithdraw < totalUpdateBalance){
        getUpdateAmount('withdraw-amount', currentWithdraw);
        updateBalance(currentWithdraw,false);
    }
    
})