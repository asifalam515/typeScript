{
    // access modifier
    class BankAccount {
     readonly   id:number;
        name:string;
      private _balance :number; //no one will get it
    //   protected _balance:number // only child class (drive from parent )will get it 
        constructor(id:number,name:string,balane:number){
            this._balance = balane;
            this.name  =name
            this.id = id
        }
        addDeposit (amount:number){
            this._balance +=amount
        }
        getBalance(){
            console.log(`My balance is ${this._balance}`)
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.
        }
    }
const poorAccout = new BankAccount(123,"asif",12)
poorAccout.addDeposit(1000)
poorAccout.getBalance()
}