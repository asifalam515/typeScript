{
    {
        // getter and setter
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

            // ---------------getter-----------------
            get balance (){
                return this._balance
            }
        //    -----------------setter------------
        set deposit (amount:number){
            this._balance  =this.balance+amount
        }

        }
    
        
    const poorAccout = new BankAccount(123,"asif",12)
    poorAccout.deposit = 200
    const myBalance = poorAccout.balance
    console.log(myBalance)
    }
}