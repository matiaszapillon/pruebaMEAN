import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
//import { take } from 'rxjs-compat/operators/take';
import { JwtService } from '../services/jwt.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private usrService: UserService, private jwtServ: JwtService) { }



  isAuthenticated() {
   // console.log("AUTH GUARD SERVICE");
   // console.log(this.jwtServ.getToken());
  //  this.usrService.isAuthenticated.pipe(take(1)).subscribe(x => console.log(x));
    return this.usrService.isAuthenticated.pipe(take(1)).subscribe();
    //   return (this.jwtServ.getToken() != null); > Cuando no andaba el Take usaba esto.
  }




}
