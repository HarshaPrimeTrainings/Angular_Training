import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  message:any;
  
  @Output()
  secret =new EventEmitter();
  
  sendData(arg:any){
    this.secret.emit(arg);
  }
}
