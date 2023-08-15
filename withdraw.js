console.clear();

document.getElementById('withdraw-btn').addEventListener('click', () => {
  const withdrawInput = document.getElementById('withdraw-input');
  let floatWithdrawInput = parseFloat(withdrawInput.value);

  const withdrawAmount = document.getElementById('withdraw-amount');
  let floatWithdrawAmount = parseFloat(withdrawAmount.innerText);

  const balanceAmount = document.getElementById('balance-amount');
  let floatBalance = parseFloat(balanceAmount.innerText);

  if (
    floatWithdrawInput <= 0 ||
    floatWithdrawInput > floatBalance ||
    isNaN(floatWithdrawInput)
  ) {
    withdrawInput.value = '';
    return alert('Invalid Input');
  }
  // for updating withdraw tab
  floatWithdrawAmount += floatWithdrawInput;
  withdrawAmount.innerText = floatWithdrawAmount;

  // for updating balance tab
  floatBalance -= floatWithdrawInput;
  balanceAmount.innerText = floatBalance;

  withdrawInput.value = '';
});
