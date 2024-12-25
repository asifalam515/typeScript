{
    // nullable type /unknown type
const searchName = (value:string|null)=>{
    if(value){
        console.log("searching..........")
    }
    else{
        console.log("there nothing to search")
    }
}
// searchName(null)


// unknow data type 
const getSpeedMeterPerSecond=(value:unknown)=>{
    if(typeof value ==="number"){
        const convertedSpeed = (1000*value)/3600
        console.log(`answser is ${convertedSpeed} meter per second `)
    }
    else if(typeof value === "string"){
        const [v,unit] =value.split(" ") 
        const convertedSpeed = (1000* parseFloat(v))/3600
        console.log(`answser is ${convertedSpeed} meter per second `)
    }
    else{
        console.log("no valid inpupt is provided")
    }
}
getSpeedMeterPerSecond(`100 mPersecond`)

const throError = (msg:string):never =>{
    throw new Error(msg)
}
}