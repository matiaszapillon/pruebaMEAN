import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from "./auth-guard.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;


    constructor(private authGuarda : AuthGuardService, private router: Router){

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Boolean {
      if(this.authGuarda.isAuthenticated){
          return true;
      }
      this.router.navigateByUrl("/login");
      //this.router.navigate(['/login']);
      return false;
    }
    
    checkLogin(): Boolean {
    if (this.authGuarda.isAuthenticated) { return true; }

    this.router.navigateByUrl("/login");
    //this.router.navigate(['/login']);
    return false;
    }
    


}
