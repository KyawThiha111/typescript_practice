 import { FrontEndDev } from './fdInterface'; 
export interface FullstackDev extends FrontEndDev {
    willacceptAsFSD:()=>boolean;
  }