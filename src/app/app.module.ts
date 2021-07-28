import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { MEANComponent } from './mean/mean.component';
import { MERNComponent } from './mern/mern.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CourseService } from './course.service';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: FullstackComponent}, 
  {path: 'frontend', component: FrontendComponent},
  {path: 'backend', component: BackendComponent},
  {path: 'MEAN', component: MEANComponent}, 
  {path: 'MERN', component: MERNComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullstackComponent,
    MEANComponent,
    MERNComponent,
    FrontendComponent,
    BackendComponent,
    NavigationBarComponent,
    AllcoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
