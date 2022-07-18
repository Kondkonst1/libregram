import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {
//будет возвращать секции, соответствующие стейту

  constructor(
    protected userService: UserService,
  ) { 
    this.init();
  }

  protected init(): void{
    this.setLayuots (this.userService.isAuth(), '/');
  } 

  protected setLayuots(isAuth: boolean, state: string) {


  }
}
