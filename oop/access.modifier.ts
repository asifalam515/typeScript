{
    // access modifier
    class BankAccount {
     readonly   id:number;
        name:string;
      private  balance :number;
        constructor(id:number,name:string,balane:number){
            this.balance = balane;
            this.name  =name
            this.id = id
        }
        addDeposit (amount:number){
            this.balance +=amount
        }
        getBalance(){
            console.log(`My balance is ${this.balance}`)
        }
    }
const poorAccout = new BankAccount(123,"asif",12)
poorAccout.addDeposit(1000)
poorAccout.getBalance()
}