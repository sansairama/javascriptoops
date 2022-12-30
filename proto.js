function BankAccount(name,balance=0){
    this.name=name;
    this.balance=balance;
    this.account_number=Date.now();
}

const shash = new BankAccount('shash',1000)
BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdrawl= function(amount){
    this.balance-=amount;
}

shash.deposit(1000);
shash.withdrawl(200)
console.log(shash)
