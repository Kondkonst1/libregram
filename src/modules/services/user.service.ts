import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAuthenticated: boolean = false;

  //login, signup, logout, createUserProfile 

  constructor() { }

  public isAuth(): boolean {
    return this.isAuthenticated;
  }
}
