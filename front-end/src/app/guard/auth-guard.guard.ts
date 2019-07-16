/* import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from "./auth-guard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; route: ActivatedRouteSnapshot;

  constructor(private authService: AuthGuardService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    return this.checkLoggin();
  }
  
  checkLoggin(): boolean {
    if(this.authService.isAuthenticated()){
      return true;
    }
    console.log('No se encuentra logueado, redireccion a login');
    this.router.navigate(['/login']);
    return false
   /*  if (this.authService.isAuthenticated) { return false; }
    console.log('No se encuentra logueado, redireccion a login');
    this.router.navigate(['/login']);
    return false; 
  }
}


 */