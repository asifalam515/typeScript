{
    function add(num1:number,num2:number):number{
        return num1+num2
    }

    const addTwo = (num1:number,num2:number):number=>num1+num2
    const ans = addTwo(32,23)
    // console.log(ans)

    const user={
        name:"sakib",
        balance :100,
        addBalance(amount:number){
            console.log(`your amount is ${this.balance +amount}`)
        }
    }
    user.addBalance(200)
}