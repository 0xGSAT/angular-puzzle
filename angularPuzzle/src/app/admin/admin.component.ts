import { Component, OnInit } from '@angular/core';
import { Grades } from 'src/models/grades.model';
import { GetStudentInfoService } from 'src/services/get-student-info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentInfo!:Grades;
  adminMessage = "Admin Portal"
  constructor(private getStudentInfo: GetStudentInfoService) { }

  ngOnInit(): void {
  }
  getGrades(){
    this.getStudentInfo.getStudentGrades().subscribe(
      (response) => {
        this.studentInfo = response;
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

}
