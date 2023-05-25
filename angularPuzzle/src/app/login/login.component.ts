import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: User = new User("","");


  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(): void{
    const currentUser = new User(this.currentUser.username, this.currentUser.password);
    if(this.authService.login(this.currentUser.username, this.currentUser.password)){
      if(this.authService.isAdmin()){
        this.router.navigate(['/admin', this.authService.getCurrentUser()]);
      } else if(this.authService.isUser()){
        this.router.navigate(['/user', this.authService.getCurrentUser()]);
      }
    } 
    else 
    this.router.navigate(['/login', "Not a valid user"]);

  }


}
