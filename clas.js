class BankAccount{
    constructor(name,balance=0){
        this.name=name;
        this.balance=balance;
        this.accountnumber=Date.now();
    }
    deposit(amount){
       this.balance+=amount;
    }
    withdrawl(amount)
    {
        this.balance-=amount;
    }
}

const shash = new BankAccount('shash',2900);
shash.deposit(100);
shash.withdrawl(1500);
console.log(shash)
