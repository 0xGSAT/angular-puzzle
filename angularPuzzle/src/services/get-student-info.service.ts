import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStudentInfoService {

  constructor(private http: HttpClient) { }
  infoURL:string = "http://demo6308572.mockable.io/student/account";
  addressURL: string = "http://demo6308572.mockable.io/student/address";
  gradesURL: string = "http://demo6308572.mockable.io/student/grades";

  getGeneralInfo():Observable<any>{
    return this.http.get(this.infoURL);
  }

  getStudentAddress():Observable<any>{
    return this.http.get(this.addressURL);
  }
  getStudentGrades():Observable<any>{
    return this.http.get(this.gradesURL);
  }
}
