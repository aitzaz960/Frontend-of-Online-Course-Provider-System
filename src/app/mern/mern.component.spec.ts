import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MERNComponent } from './mern.component';

describe('MERNComponent', () => {
  let component: MERNComponent;
  let fixture: ComponentFixture<MERNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MERNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MERNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
