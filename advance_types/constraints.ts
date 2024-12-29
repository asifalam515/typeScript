{
    // enforce something
    const addCourseToStudent = <T extends{id:string;email:string;name:string}>(student:T)=>{
        const course = "next level web developement"
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({
        name:"mr x",
        id:"122",
        email:"x@gmail.com",
        devType:"NLWD"
    })
    const student2 = addCourseToStudent({
        name:"mr Y",
        id:"132",
        email:"x@gmail.com",
        hasWatch:"apple "
    })
    const student3 = addCourseToStudent({id:"123",name:"saif",email:"saif@gmail.com",emni:"emni"})
}