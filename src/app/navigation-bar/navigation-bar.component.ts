import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  public pagePath = "./navigation-bar.component.html"
  constructor() { }

  ngOnInit(): void {
  }

  show_frontend()
  {
    console.log("Frontend Course Selected");
  }
  show_backend()
  {
    console.log("Backend Selected");
  }
  show_mean()
  {
    console.log("MEAN Stack Courses selected");
  }
  show_mern()
  {
    console.log("MERN Stack courses selected");
  }
  show_fullstack()
  {
    console.log("Full Stack Courses Selected");
  }
}
