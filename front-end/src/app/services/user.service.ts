import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { JwtService } from "./jwt.service";
import { tap,map,take } from "rxjs/operators";
import { Observable, BehaviorSubject} from 'rxjs';
import { ReplaySubject } from "rxjs";


//import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL_API = 'http://localhost:8080/api/users';
  private token: String;
  private currentUserSubject = new BehaviorSubject<User>(new User());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(private http: HttpClient, private jwtService: JwtService) { }

  registerUser(usr: User): Observable<User> {
    return this.http.post<User>(this.URL_API + '/registerUser', usr)
      .pipe(tap(
        (res: User) => {
          if (res) {
            this.setAuth(usr);
          }
        }
      ));
  }

  login(usr: User): Observable<User> {
    return this.http.post<User>(this.URL_API + '/login',usr)
      .pipe(tap(
        (res: User) => {
          if (res) {
            console.log(res)
            this.setAuth(res);
          }
        }
      ));
  }

  setAuth(usr: User) {
    // Save JWT sent from server in localstorage
    console.log(usr.accessToken,usr.expiresIn);
    this.jwtService.saveToken(usr.accessToken, usr.expiresIn);
    this.token = this.jwtService.getToken();
    // Set current user data into observable
      this.currentUserSubject.next(usr);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);

  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);

  }


  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  logout(): void {
    this.token = "";
    this.purgeAuth();

  }
}
