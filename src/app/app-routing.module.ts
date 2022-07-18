import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { ProfileComponent } from 'src/modules/profile/components/user/components/profile/profile.component';
import { MyLibraryComponent } from 'src/modules/library/components/my-library/my-library.component';
import { BooksFeedComponent } from 'src/modules/book-twits/components/books-feed/books-feed.component';
import { UserListComponent } from 'src/modules/friends/components/user-list/user-list.component';

const rootModule: RootModule = {
  states: [
    {
      name: "profile",
      url: "/profile",
      component: ProfileComponent
    },
    {
      name: "library",
      url: "/library",
      component: MyLibraryComponent
    },
    {
      name: "book-feed",
      url: "/book-feed",
      component: BooksFeedComponent
    },
    {
      name: "friends",
      url: "/friends",
      component: UserListComponent
    },


  ],
  useHash: true
};

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }