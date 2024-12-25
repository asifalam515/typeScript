{
    // UNION types: |
    type Developer  = "Frontend Dev" | "Backend Dev" |"Full Stack Dev"
    type TechStack = "MERN"|"LARAVEL"|"DJANGO"
    
    const newDeveloper :Developer = "Full Stack Dev"
    const myTechStack :TechStack='MERN'
    type User = {
        name:string,
        email:string,
        gender:"Male"|"Female",
        bloodGroup:"A+"|"0+"
    }
    const user :User= {
        name:"asibul alam",
        email:"asibulalam515@gmail.com",
        gender:"Female",
        bloodGroup:"A+"
    }
    type FrontEndDeveloper = {
        skills :string[],
        designation1 :"Frontend Developer"
    }
    type BackendDeveloper = {
        skills:string[],
        designation2 :"Backend Developer"
    }
    type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper
    const fullStackDeveloper :FullStackDeveloper = {
        skills : ["html","css","react","express"],
        designation1 :"Frontend Developer",
        designation2:"Backend Developer",
        
    }
}