{
    function add(number1:number,number2:number):number{
return number1+number2
    }

    const addArrow = (num1:number,num2:number=0):number=>num1 +num2

    // method => function inside an object
    const user= {
        name:"asibul alam",
        balance :0,
        addBalance (amount:number):string{
            return `your balance is ${this.balance +amount}`
        },

    }


    const numbers :number [] =[1,4,56,2,4,6]
    const squareNum:number[] = numbers.map((number:number):number=>number*number)
    console.log(squareNum)
}