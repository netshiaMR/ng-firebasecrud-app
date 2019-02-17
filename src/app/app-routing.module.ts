import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DepartmentsComponent } from './components/departments/departments.component';

const routes: Routes = [
  {path : '', component: HomePageComponent},
  {path : 'employees', component: EmployeesComponent},
  {path : 'projects', component: ProjectsComponent},
  {path : 'departments', component: DepartmentsComponent},
  {path : 'about', component: AboutPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
