import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {JQ_TOKEN} from "./services/JQuery.service";

declare let jQuery:Object;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
