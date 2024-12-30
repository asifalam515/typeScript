{
    // abstraction in typeScript
    // way 1:using interface
    // way 2:using abstract class


    // we are getting idea here
    interface Vechicle1 {
       startEngine():void
       stopEngine():void
       move():void

    }
    // real implementation happening here
     class Car1 implements Vechicle1{
        startEngine(): void {
            console.log("I am starting car engine")
        }
        stopEngine(): void {
            console.log(" i am stopping the car engne")
        }
        move(): void {
            console.log(`I am moving the cart`)
        }
        test(){
            console.log(`i am testing`)
        }
     }
     const toyotaCar = new Car1()
     toyotaCar.startEngine()

     abstract  class Car2 {
// abstract methon can't have impelementation . it can have only idea.you have to impelement it to the child class
       abstract  startEngine(): void 
      abstract  stopEngine(): void 
      abstract  move(): void 
     }
     class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("starting the engine")
        }
        stopEngine(): void {
            console.log("stopped the engine")
 
        }
        move(): void {
            console.log("the car is started to moving")

        }
     }
    }