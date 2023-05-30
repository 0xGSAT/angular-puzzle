import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { CurrentUserService } from 'src/services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private currentUser: CurrentUserService, private router: Router) {}

  canActivate(): boolean {
    if (this.currentUser.user.role === 'user') {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
  
}
