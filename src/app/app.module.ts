import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { FormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/layout/header/header.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { DepartmentComponent } from './components/departments/department/department.component';
import { DepartmentListComponent } from './components/departments/department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    MenuComponent,
    AboutPageComponent,
    HomePageComponent,
    EmployeesComponent,
    ProjectsComponent,
    DepartmentsComponent,
    ProjectComponent,
    ProjectListComponent,
    DepartmentComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
