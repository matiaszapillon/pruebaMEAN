import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { JwtService } from "./jwt.service";
//import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL_API = 'http://localhost:8080/api/users'
  private currentUserSubject = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient,  private jwtService: JwtService) { }

  login(usr: User): Observable<User>{
    return this.http.post<User>(this.URL_API + `/login`,usr);
  }


}
