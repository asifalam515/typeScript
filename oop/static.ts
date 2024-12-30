{
    // static 
    class Counter {
      static  count:number = 0
    //   you can't use this now. you have use the class name instead of this since it is static now
        increase(){
               return Counter.count = Counter.count+1
        }
        decrease(){
            return Counter.count = Counter.count-1
        }
    }
    const instance1 = new Counter()
   //increasing in different memory
    instance1.increase()
    instance1.increase()
    instance1.increase()
    const instance2 = new Counter()
    instance2.increase()
    instance2.increase()
    instance2.increase()
    const instance3 = new Counter()

    console.log(instance3.increase())
}