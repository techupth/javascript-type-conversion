let accountBalance = 400;
let depositAmountFromUser = "10";

// accountBalance = accountBalance + depositAmountFromUser;
// debug with explicit type conversion
accountBalance = accountBalance + Number(depositAmountFromUser);

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
