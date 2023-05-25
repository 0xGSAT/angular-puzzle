import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homePageMessage:string = "This page hould be visible to everyone"; 
  constructor() { }

  ngOnInit(): void {
  }

}
