export {}
import { FrontEndDev } from "./interfaces/fdInterface";
import { FullstackDev } from "./interfaces/fsdInterface";
let applicant:FrontEndDev;
let applicantForFS:FullstackDev;
const developerRecruit = (name: string, age:number,languages:string[]):FullstackDev=>{
   applicantForFS = {
    name:name,
    age:age,
    languages:languages,
    isReactDev:()=>{
        const foundReact = applicantForFS.languages.find(lan=>lan.toLowerCase()==="react");
        if(!foundReact){
            return false
        }
        return true
    },
    willAcceptAsFD:()=>{
        if(!applicantForFS.isReactDev()){
            console.log("We can't accept you as a FD!");
            return false;
        }
        console.log("You are hired as a FD!")
        return true;
    },
    willacceptAsFSD:()=>{
      const BEfound = applicantForFS.languages.find(lan=>lan.toLowerCase()==="java"||lan.toLowerCase()==="express");
      if(!BEfound){
        console.log(`We can't hire you as a FSD.`)
        return false;
      }
      console.log(`You are hired as a FSD with ${BEfound}`)
      return true
    }
   }

   return {name:applicantForFS.name,age:applicantForFS.age,languages:applicantForFS.languages,isReactDev:applicantForFS.isReactDev,willAcceptAsFD:applicantForFS.willAcceptAsFD,willacceptAsFSD:applicantForFS.willacceptAsFSD}
}

let applicantName = "Kyaw Thiha";
let applicantAge = 21;
let applicantLanguages = ["React","TS","Java"];
const {name,age,languages,isReactDev,willAcceptAsFD,willacceptAsFSD} = developerRecruit(applicantName,applicantAge,applicantLanguages);

console.log(isReactDev())
console.log(willAcceptAsFD())
console.log(willacceptAsFSD())