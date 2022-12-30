class BankAccount{
    name
    #balance
    constructor(name,balance=0){
        this.name=name;
        this.#balance=balance;
        this.accountnumber=Date.now();
    }
    deposit(amount){
       this.#balance+=amount;
    }
    withdrawl(amount)
    {
        this.#balance-=amount;
    }
    set balance(amount){
        this.#balance=amount
    }
    get balance(){
        console.log(this.#balance)
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

const karun = new BankAccount('Karun',5000)
karun.balance = 6000
console.log(karun.balance)
console.log(karun)