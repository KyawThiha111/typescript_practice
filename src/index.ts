export {}

class JuniorDev{
    name:string;
    readonly age:number;
    languages:string[];
    constructor(x:string,y:number,z:string[]){
      this.name = x,
      this.age = y,
      this.languages =z
    }
    information():void{
         console.log(`${this.name} is ${this.age} years old!`)
         console.log("He can code in", this.languages.toString())
    }
}

class SeniorDev extends JuniorDev{
    experience:number;
    constructor(x:string,y:number,z:string[],e:number){
      super(x,y,z);
      this.experience = e
    }
    information(): void {
        console.log(`The senior ${this.name} has ${this.experience}-year-experience`);
        console.log(`In ${this.languages.toString()}`)
    }
}
let employeeArr:SeniorDev[] = [];
const senior1 = new SeniorDev("Kyaw Thiha",24,["Javascript","Express","Python","React"],3)
const senior2 = new SeniorDev("MHK",25,["Javascript","Express","C#"],6)
employeeArr.push(senior2);
 console.log(employeeArr)