import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list:string[] = ['Nokia','Samsung','Apple','Htc','Asus'];

  prodcuts:any[] = [{"pid":123,"pname":'Mobile',"satus":'orderd'},
                    {"pid":456,"pname":'Book',"satus":'Delivered'},
                    {"pid":789,"pname":'Laptop',"satus":'Returnded'},
                    {"pid":258,"pname":'Perfume',"satus":'Shipped'}                  
                  ]


  promo:string = '';

  getpromotion(promo:any){
    this.promo = promo;
  }


}
