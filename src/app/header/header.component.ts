import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedlevel: any;
  selectedlang: any;
  selectedrating: any; 
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    console.log("Button Pressed");
  }

  apply_filters()
  {

  }

  public levelValueChanged(selected: any): void {
    this.selectedlevel = selected;
    console.log("New data ", + this.selectedlevel); // should display the selected option.
  }
  public langValueChanged(selected: any): void {
    this.selectedlang = selected;
    console.log("New data ", + this.selectedlang); // should display the selected option.
  }
  public ratingValueChanged(selected: any): void {
    this.selectedrating = selected;
    console.log("New data ", + this.selectedrating); // should display the selected option.
  }
}
