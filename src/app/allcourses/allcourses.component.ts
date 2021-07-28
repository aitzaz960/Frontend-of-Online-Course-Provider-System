import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {
  public my_courses:any = [];
  public course_details:any = [];
  public details:boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  public button_1:boolean[] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  public button_2:boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]; 
  constructor(private _courseservice: CourseService) { }

  ngOnInit(): void {
    this.my_courses = this._courseservice.getCourses();
  }

  getCoursebyId(id: number)
  {
    this.course_details = this._courseservice.getCoursebyID(id);
  }

  show_details(_id: number = 0)
  {
   this.details[_id] = true; 
   this.button_1[_id] = false;
   this.button_2[_id] = true;
  }

  hide_details(_id: number = 0)
  {
    this.details[_id] = false;
    this.button_1[_id] = true;
    this.button_2[_id] = false;
  }
}
