console.clear();

document.getElementById('deposit-btn').addEventListener('click', () => {
  const depositInput = document.getElementById('deposit-input');
  let floatInput = parseFloat(depositInput.value);

  const depositAmount = document.getElementById('deposit-amount');
  let floatAmount = parseFloat(depositAmount.innerText);

  const balanceAmount = document.getElementById('balance-amount');
  let floatBalance = parseFloat(balanceAmount.innerText);

  if (floatInput > 0 && !isNaN(floatInput)) {
    // for updating deposit tab
    floatAmount += floatInput;
    depositAmount.innerText = floatAmount;

    // for updating balance tab
    floatBalance += floatInput;
    balanceAmount.innerText = floatBalance;

    depositInput.value = '';
  } else {
    alert('invalid input');
    depositInput.value = '';
  }
});
