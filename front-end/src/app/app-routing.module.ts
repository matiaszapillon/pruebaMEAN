import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterEmployeeComponent } from "./components/register-employee/register-employee.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AppComponent } from "./app.component";
import { ProjectInformationComponent } from "./components/project-information/project-information.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from './guard/auth-guard';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  /*   { path: '', component: HomeComponent, canActivate: [AuthGuardGuard] }, */
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]   
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: 'registerEmployee', component: RegisterEmployeeComponent,  },
      { path: 'employees', component: EmployeesComponent,  },
      { path: 'projects', component: ProjectsComponent  },
      { path: 'projectDetail/:id', component: ProjectDetailComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Ver Resolve-guard para pasar datos dinamicamente a los links
//Ver guia route y link children para pasar de Project to projectDetails pasando el ID.

/* Route guards: USAR PARA SEGURIDAD.
The guard might return its boolean answer synchronously. But in many cases, the guard can't produce an answer synchronously. The guard could ask the user a question, save changes to the server, or fetch fresh data. These are all asynchronous operations.

Sirve para que el usuario no setee directamente la url en la pagina y se direccione de una, por capaz antes tenes que guardar datos, loguear el usuario, preguntar si desea descartar cambios, etc.

Basicamente es como una frenada previa a la url de la pagina que seteo el user . (Por ejemplo se puede usar el CanActivate que es una interface que permite devolver true o false dependiendo ciertas validaciones)
 */