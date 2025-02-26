export interface FrontEndDev {
    name: string,
    age:number,
    languages:string[],
    isReactDev: ()=> boolean;
    willAcceptAsFD:()=>boolean;
}
