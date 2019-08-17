import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from "../../guard/auth-guard.service";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private authGuardService: AuthGuardService, private usrService: UserService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm): void {
    console.log(form.value);
    //INGRESAR con perro password: perro
    this.usrService.login(form.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/home');
    },
      err => console.error('Observer got an error: ' + err));
  }
  /*   isUserValid():void{
     this.authGuardService.loggIn();
     user = new User();
     
     this.usrService.login()
     //this.router.navigateByUrl('/home');
    } */

}
