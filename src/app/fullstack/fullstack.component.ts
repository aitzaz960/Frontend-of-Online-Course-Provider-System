import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css']
})
export class FullstackComponent implements OnInit {
  public my_courses:any = [];
  public details:boolean[] = [false, false, false, false, false];
  public button_1:boolean[] = [true, true, true, true, true];
  public button_2:boolean[] = [false, false, false, false, false];
  constructor(private route: ActivatedRoute, private _courseservice: CourseService) {   }

  ngOnInit(): void {
    this.my_courses = this._courseservice.getfullstackcourses();
  }

  show_details(_id: number = 0)
  {
   this.details[_id-1] = true; 
   this.button_1[_id-1] = false;
   this.button_2[_id-1] = true;
  }

  hide_details(_id: number = 0)
  {
    this.details[_id-1] = false;
    this.button_1[_id-1] = true;
    this.button_2[_id-1] = false;
  }
}
