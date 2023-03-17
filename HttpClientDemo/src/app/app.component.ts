import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  constructor(private usrServ:UserService){
            
  }

  diplayUser(){
    this.usrServ.getUsers().subscribe( data =>  this.users = data);
  }

ngOnInit(){
  
}

}
