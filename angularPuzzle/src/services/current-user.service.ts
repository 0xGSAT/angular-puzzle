import { Injectable } from '@angular/core';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public user:User = new User;
  constructor() {}
}
