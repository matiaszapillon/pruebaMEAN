import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from "./auth-guard.service";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; route: ActivatedRouteSnapshot;

  constructor(private authService: AuthGuardService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    return this.checkLoggin();
  }

  checkLoggin(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("ESTA AUTENTICADO.");
      return true;
    }
    console.log('No se encuentra logueado, por favor logueese.');
    this.router.navigate(['/login']);
    return false;
  }
}


