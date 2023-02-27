import { Component } from "@angular/core";

@Component({
    selector:'my-comp',
    templateUrl:'./mycomponent.html'
})
export class MyComponent{

    greet(name:string){
       alert('Hello  :: '+ name);
    }

}