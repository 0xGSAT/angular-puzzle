import { Component, OnInit } from '@angular/core';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  addressString!: String;
  constructor(private getStudentInfo: GetStudentInfoService) { }

  ngOnInit(): void {
  }

  getStudentAddress(){
    this.getStudentInfo.getStudentAddress().subscribe(
      (response) => {
        this.addressString = JSON.stringify(response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

}
