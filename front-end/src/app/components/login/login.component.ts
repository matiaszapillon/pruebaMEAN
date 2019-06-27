import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from "../../guard/auth-guard.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private authGuardService: AuthGuardService ) { }

  ngOnInit() {
  }

  isUserValid():void{
   this.authGuardService.loggIn();
   this.router.navigateByUrl('/home');
  }

}
