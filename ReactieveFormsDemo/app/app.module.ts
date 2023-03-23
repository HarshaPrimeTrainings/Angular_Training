import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { HomeComponent } from './home/home.component';
import { AgePipe } from './age.pipe';
import { DemoService } from './demo.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent , MyComponent, HomeComponent, AgePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
