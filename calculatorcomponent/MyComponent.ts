import { Component } from "@angular/core";

@Component({
    selector:'my-comp',
    templateUrl:'./mycomponent.html'
})
export class MyComponent{

   result:number = 0;

    addition(a:any,b:any){
        this.result = Number(a)+Number(b);
   }

   subtraction(a:any,b:any){
        this.result =  Number(a)-Number(b);
   }

   divide(a:any,b:any){
    this.result =  Number(a)/Number(b);
   }

   multply(a:any,b:any){
    this.result =  Number(a)*Number(b);
   }
}