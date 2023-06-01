import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { CurrentUserService } from 'src/services/current-user.service';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homePageMessage:string = "Welcome to Home Page :)"; 
  infoString: string = "";
  isDisabled!:boolean;
  studentInfo!: User;
  errorString = "Please Login as User!";
  isErrorDisplayed = false;

  constructor(private getStudentInfo: GetStudentInfoService, private currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }
  
  isInfoDisabled(): boolean {
    return !(this.currentUser.user.role==='user' || this.currentUser.user.role==='admin');
  }


  getUserData(){
    this.getStudentInfo.getGeneralInfo().subscribe(
      (response) => {
        this.infoString = JSON.stringify(response);
        this.studentInfo = response;
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  getErrorMessage(){
    this.isErrorDisplayed = true;
    return this.isErrorDisplayed;
  }
}
