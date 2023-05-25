import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/services/current-user.service';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homePageMessage:string = "This page hould be visible to everyone"; 
  infoString: string = "";
  isDisabled!:boolean;
  constructor(private getStudentInfo: GetStudentInfoService, private currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }
  
  isInfoDisabled(): boolean {
    return !(this.currentUser.user.role==='user');
  }


  getUserData(){
    this.getStudentInfo.getGeneralInfo().subscribe(
      (response) => {
        this.infoString = JSON.stringify(response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
