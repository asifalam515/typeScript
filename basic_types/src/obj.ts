{
    const user:{
        firstName:string;
        middleName?:string; //optional type
        lastName:string;
        isMarried?:boolean;
        // type => literal type ==>value will works as type
        company:"Programming Hero"
         //readonly :you can't change the value .only can read
         salary:number
    } = {
        firstName:"asibul",
        isMarried:true,
        lastName:"alam",
        company:"Programming Hero",
        salary:10000
    }
}