import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component' ;
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AuthGuard } from './guard/auth-guard';
import { SuppliesDetailComponent } from './components/supplies-detail/supplies-detail.component';
import { StagesDetailComponent } from './components/stages-detail/stages-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    RegisterEmployeeComponent,
    ProjectsComponent,
    ProjectInformationComponent,
    LoginComponent,
    HomeComponent,
    ProjectDetailComponent,
    SuppliesDetailComponent,
    StagesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
