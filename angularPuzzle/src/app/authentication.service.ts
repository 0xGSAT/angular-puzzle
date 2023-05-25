import { Injectable } from '@angular/core';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: any; 

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(username: string, password: string): boolean {
    if(username==='user' && password ==='user'){
      this.currentUser = new User(username, password);
      this.currentUser.role = 'user'
      return true;
    } else if(username==='admin' && password ==='admin') {
      this.currentUser = new User(username, password);
      this.currentUser.role = 'admin';
      return true;
    }
    return false;
  }

  isUser(): boolean{
    if (this.getCurrentUser() !== undefined && this.getCurrentUser() !== null && this.getCurrentUser().role === 'user') {
      // User object is returned
      console.log('User object:', this.getCurrentUser());
      return true;
    } 
    console.log('User object not found');
    return false;
  }

  isAdmin(): boolean{
    if (this.getCurrentUser() !== undefined && this.getCurrentUser() !== null && this.getCurrentUser().role === 'admin') {
      // User object is returned
      console.log('Admin object:', this.getCurrentUser());
      return true;
    }
    console.log('Admin object not found');
    return false;
  }

}
