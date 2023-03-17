import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DemoService {

  greet():string{
   return "Hello Good Morning From Demoservice";
  }
}
