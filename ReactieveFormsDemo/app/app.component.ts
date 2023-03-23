import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoService } from './demo.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  signupForm : FormGroup = new FormGroup({});

  ngOnInit(){
  this.signupForm =   new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gen':new FormControl(null)
    });
  }

  submitDetails(){
   
    console.log(this.signupForm);
  
  }


}
