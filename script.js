const loginBtn = document.querySelector('#login-btn');
const loginArea = document.querySelector('#login-area');
const transactionArea = document.querySelector('#transaction-area');
const deposit = document.querySelector('#deposit');
const depositAmount = document.querySelector('#deposit-amount');
const currentDeposit = document.querySelector('#current-deposit');
const withdraw = document.querySelector('#withdraw');
const withdrawAmount = document.querySelector('#withdraw-amount');
const currentWithdraw = document.querySelector('#current-withdraw');
const currentBalance = document.querySelector('#current-balance');

transactionArea.style.display = 'none';

loginBtn.addEventListener('click', function () {
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});

deposit.addEventListener('click', function () {
  if (depositAmount.value < 1) {
    alert('Deposit can"t be less than 1');
  } else {
    const depositNumber = parseFloat(depositAmount.value);
    const currentDepositNumber = parseFloat(currentDeposit.innerText);
    const totalDeposit = depositNumber + currentDepositNumber;

    currentDeposit.innerText = totalDeposit;
    depositAmount.value = null;

    const currentBalanceNumber = parseFloat(currentBalance.innerText);
    const totalBalance = depositNumber + currentBalanceNumber;

    currentBalance.innerText = totalBalance;
  }
});

withdraw.addEventListener('click', function () {
  if (withdrawAmount.value < 1) {
    alert('Withdraw can"t be less than 1');
  } else {
    const withdrawNumber = parseFloat(withdrawAmount.value);
    const currentWithdrawNumber = parseFloat(currentWithdraw.innerText);
    const currentBalanceNumber = parseFloat(currentBalance.innerText);

    if (withdrawNumber <= currentBalanceNumber) {
      const totalWithdraw = withdrawNumber + currentWithdrawNumber;

      currentWithdraw.innerText = totalWithdraw;
      withdrawAmount.value = null;

      const totalBalance = currentBalanceNumber - withdrawNumber;

      currentBalance.innerText = totalBalance;
    } else {
      alert('insufficient balance!');
    }
  }
});
