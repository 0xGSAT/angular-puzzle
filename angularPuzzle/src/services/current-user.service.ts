import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public user:User = new User;
  constructor() {
    if(localStorage.getItem('user') && localStorage.getItem('authToken')){
      this.user = JSON.parse(localStorage.getItem('user') || "");
    }
  }


}
