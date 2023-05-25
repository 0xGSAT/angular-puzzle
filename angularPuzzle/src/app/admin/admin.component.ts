import { Component, OnInit } from '@angular/core';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  gradesString!:string;
  constructor(private getStudentInfo: GetStudentInfoService) { }

  ngOnInit(): void {
  }
  getGrades(){
    this.getStudentInfo.getStudentGrades().subscribe(
      (response) => {
        this.gradesString = JSON.stringify(response);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

}
