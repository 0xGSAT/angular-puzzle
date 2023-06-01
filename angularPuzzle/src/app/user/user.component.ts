import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { CurrentUserService } from 'src/services/current-user.service';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  addressString!: String;
  studentInfo!: User;
  constructor(private getStudentInfo: GetStudentInfoService, public currentUser: CurrentUserService) { }

  ngOnInit(): void {
  }

  getStudentAddress(){
    this.getStudentInfo.getStudentAddress().subscribe(
      (response) => {
        this.addressString = JSON.stringify(response);
        this.studentInfo = response;
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

}
