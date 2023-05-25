import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/services/current-user.service';
import { AuthenticationService } from '../../services/authentication.service';

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