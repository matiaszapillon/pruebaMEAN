import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
logged : Boolean = false;

  isAuthenticated(): Boolean {
        return this.logged;
    }
  loggIn():void{
    this.logged = true;
  }

  constructor() { }
}
