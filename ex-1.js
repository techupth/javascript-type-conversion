let accountBalance = 400;
let depositAmountFromUser = "10";

depositAmountFromUser = Number(depositAmountFromUser);

accountBalance = accountBalance + Number(depositAmountFromUser);

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
