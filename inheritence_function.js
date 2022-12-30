function BankAccount(name,balance=0) {
    this.name = name
    this.balance = balance 
    this.account_number = Date.now()

    this.add_balance = (amount) =>{
        this.balance+=amount
    }
    this.withdrawl = (amount) =>{
        this.balance-=amount
    }
}

function currentaccount(name,balance,transac){
    BankAccount.call(this,name,balance);
    this.transac=transac;

    currentaccount.prototype.personal_loan=function(amount){
        console.log("Personal loan taken is" +amount)
    }

    currentaccount.prototype = Object.create(BankAccount.prototype) // helps to create prototypes in bankaccount to prototype object in current account for more info check console and prototype chain
}

const shash = new currentaccount('Shashwat',10000,30000)
console.log(shash)