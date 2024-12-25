{
    // destructuring
    const user = {
        id:3241234,
        name:{
            firstName:"asibul",
            lastName:"alam"
        },
        constactNo:"34212342",
        address:"Kushtia",

    }
const {address,constactNo,name:{lastName}}=user

// array destructuring
const friends = ["sakib",'tamim','mushfiq','monica','berlin']
const [bestFriend,...rest] = friends
}

