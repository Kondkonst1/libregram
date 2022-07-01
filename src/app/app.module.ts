import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from 'src/modules/display/book/book.component';
import { DataService } from 'src/modules/services/data.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
