import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:number):string {
    
    if(value<18){
        return 'Not Eligible';
    }
    return 'Eligible';
  }

}
