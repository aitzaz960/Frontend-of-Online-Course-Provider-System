import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
  public my_courses:any = [];
  public details:boolean[] = [false, false, false, false, false];
  public button_1:boolean[] = [true, true, true, true, true];
  public button_2:boolean[] = [false, false, false, false, false];
  constructor(private _courseservice: CourseService) { }

  ngOnInit(): void {
    this.my_courses = this._courseservice.getfrontendcourses();
  }

  show_details(_id: number = 0)
  {
   this.details[_id-21] = true; 
   this.button_1[_id-21] = false;
   this.button_2[_id-21] = true;
  }

  hide_details(_id: number = 0)
  {
    this.details[_id-21] = false;
    this.button_1[_id-21] = true;
    this.button_2[_id-21] = false;
  }
}
