import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { CurrentUserService } from 'src/services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPuzzle';
  constructor(public currentUser: CurrentUserService) { }

  isAdmin = this.currentUser.user.role ==='admin' ? true : false;
  isUser =  this.currentUser.user.role ==='user' ? true : false;

  signOut(){
    this.currentUser.user = new User;
  }
}
