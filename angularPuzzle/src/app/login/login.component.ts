import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthenticationService } from 'src/services/authentication.service';
import { CurrentUserService } from 'src/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId!:number;
  password!:string;

  constructor(private router: Router, private authService: AuthenticationService, public currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }

  loginAsUser(){
    this.currentUser.user.userId = this.userId;
    this.currentUser.user.password = this.password;
    this.authService.loginAsUser().subscribe(
      (response) => {
        this.currentUser.user.role = response.role;
        this.router.navigate(['/user']); 
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  loginAsAdmin(){
    this.currentUser.user.userId = this.userId;
    this.currentUser.user.password = this.password;
    this.authService.loginAsAdmin().subscribe(
      (response) => {
        this.currentUser.user.role = response.role;
        this.router.navigate(['/admin']); 
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
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


}
