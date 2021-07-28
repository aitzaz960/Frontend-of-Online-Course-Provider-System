import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { MEANComponent } from './mean/mean.component';
import { MERNComponent } from './mern/mern.component';

const routes: Routes = [
  {path: 'fullstack', component:FullstackComponent},
  {path: 'frontend', component:FrontendComponent},
  {path: 'backend', component:BackendComponent},
  {path: 'mean', component: MEANComponent},
  {path: 'mern', component: MERNComponent},
  {path: 'allcourses', component: AllcoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
