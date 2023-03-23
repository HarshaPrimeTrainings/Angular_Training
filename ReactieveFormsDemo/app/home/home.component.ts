import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  msg:any;
  constructor(private demoserv:DemoService){
    this.msg = demoserv.greet();
}
}
