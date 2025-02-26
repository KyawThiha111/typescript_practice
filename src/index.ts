export {}

//Type aliases allow you to define custom data types that can be reused through your code.

type junior = {
    name: string,
    age:number,
    languages: string[]
}
type Senior = {
    bio:junior,
    experience:number
}
let juniorDev:junior;
let seniorDev:Senior;
juniorDev = {
    name:"Kyaw Thiha",
    age:21,
    languages:["React","Typescript","Express","Nextjs","Python"]
}
seniorDev = {
    bio:{
        name:"Kyaw Thiha",
        age:24,
        languages:["Javascript","Express","Next","Python","Django"]
    },
    experience:3
}
console.log(juniorDev.languages.toString())
console.log(seniorDev.bio.languages.toString())