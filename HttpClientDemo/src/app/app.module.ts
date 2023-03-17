import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { HomeComponent } from './home/home.component';
import { AgePipe } from './age.pipe';
import { DemoService } from './demo.service';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent , MyComponent, HomeComponent, AgePipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
