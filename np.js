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

const shash = new BankAccount('shashwat',3890)
shash.add_balance(100)
console.log(shash)