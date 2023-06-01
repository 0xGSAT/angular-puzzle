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

  userId!: number;
  password!: string;
  errorString!: string;

  constructor(private router: Router, private authService: AuthenticationService, public currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }

  loginAsUser(){
    if(this.password === undefined || this.userId === undefined){
      this.errorString = "Error!!! Please fill in the info.";
    } else {
      this.currentUser.user.userId = this.userId;
      this.currentUser.user.password = this.password;
      this.authService.loginAsUser().subscribe(
        (response) => {
          this.currentUser.user.role = response.role;
          this.router.navigate(['/user']);
          let {password, ...storeUser }: User = this.currentUser.user;
          localStorage.setItem('user', JSON.stringify(storeUser));
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }

  loginAsAdmin(){
    if(this.password === undefined || this.userId === undefined){
      this.errorString = "Error!!! Please fill in the info.";
    } else {
      this.currentUser.user.userId = this.userId;
      this.currentUser.user.password = this.password;
      this.authService.loginAsAdmin().subscribe(
        (response) => {
          this.currentUser.user.role = response.role;
          this.router.navigate(['/admin']);
          let {password, ...storeUser }: User = this.currentUser.user;
          localStorage.setItem('user', JSON.stringify(storeUser));
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }

}
