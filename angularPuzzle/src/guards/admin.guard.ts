import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CurrentUserService } from 'src/services/current-user.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private currentUser: CurrentUserService, private router: Router) {}

  canActivate(): boolean {
    if (this.currentUser.user.role === 'admin') {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}