import { Injectable } from '@angular/core';
import { User } from 'src/models/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userLoginURL:string = "https://demo6308572.mockable.io/student/user";
  private adminLoginURL:string = "https://demo6308572.mockable.io/student/admin";

  constructor(private http: HttpClient) { }

  loginAsAdmin(): Observable<any>{
    return this.http.get(this.adminLoginURL);
  }

  loginAsUser(): Observable<any>{
    return this.http.get(this.userLoginURL);;
  }
  

  // isUser(): boolean{
  //   if (this.getCurrentUser() !== undefined && this.getCurrentUser() !== null && this.getCurrentUser().role === 'user') {
  //     // User object is returned
  //     console.log('User object:', this.getCurrentUser());
  //     return true;
  //   } 
  //   console.log('User object not found');
  //   return false;
  // }

  // isAdmin(): boolean{
  //   if (this.getCurrentUser() !== undefined && this.getCurrentUser() !== null && this.getCurrentUser().role === 'admin') {
  //     // User object is returned
  //     console.log('Admin object:', this.getCurrentUser());
  //     return true;
  //   }
  //   console.log('Admin object not found');
  //   return false;
  // }

}
