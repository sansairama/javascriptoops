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

class currentaccount extends BankAccount{
    constructor(name,balance=0,transact){
        super(name,balance);
        this.transact=transact
    }

    takeloan(amount){
        console.log("Loan taken is "+amount)
    }

}

const shash =  new currentaccount('Shashwat',43000,1200000);
console.log(shash)