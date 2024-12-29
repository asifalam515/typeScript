{
    // generics with interface
   interface Developer<T,X =null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    }
    smartWatch:T,
    bike?:X
   }
   interface PoorDeveloper{
    brand:string;
    ram:number;
    display:string;
   }
   const poorDeveloper:Developer<PoorDeveloper>={
    name:"asif",
    computer :{
        brand:"hp",
        model:"x",
        releaseYear:2020
    },
    smartWatch:{
        brand:"xiaomi",
        ram:256,
        display:"amoled"
    }
   }

    interface SamsungWatch
        {
            brand:string;
            model:string;
            ram:number;
            sleepTrack:boolean;
            heartTrack:boolean
        
           
    }
    interface YamahaBike {
        model:string;
        capacity:string
    }
   const richDev:Developer<SamsungWatch,YamahaBike>={
    name:"sakib",
    computer :{
        brand:"apple",
        model:"x",
        releaseYear:2020
    },

    smartWatch:{
        brand:"samsung",
        model:"xdr"
        ,
        ram:256,
        heartTrack:true,
        sleepTrack :true
    },
    bike:{
        model:"yamaha",
        capacity:"100cc"
    }
   }
}