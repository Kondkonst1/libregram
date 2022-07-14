import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from 'src/modules/library/components/book/book.component';
import { SearchComponent } from 'src/modules/library/components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksFeedComponent } from 'src/modules/book-twits/components/books-feed/books-feed.component';
import { UserCardComponent } from 'src/modules/friends/components/user-card/user-card.component';
import { UserListComponent } from 'src/modules/friends/components/user-list/user-list.component';
import { MyLibraryComponent } from 'src/modules/library/components/my-library/my-library.component';
import { TwitsComponent } from 'src/modules/profile/components/twits/twits.component';
import { LoginComponent } from 'src/modules/profile/components/user/components/login/login.component';
import { ProfileComponent } from 'src/modules/profile/components/user/components/profile/profile.component';
import { SignupComponent } from 'src/modules/profile/components/user/components/signup/signup.component';

import { DataService } from 'src/modules/services/data.service';
import { LayoutsService } from 'src/modules/services/layouts.service';
import { UserService } from 'src/modules/services/user.service';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchComponent,
    BooksFeedComponent,
    UserCardComponent,
    UserListComponent,
    MyLibraryComponent,
    TwitsComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [ 
    DataService,
    LayoutsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
