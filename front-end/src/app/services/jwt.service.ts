import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String,expiresIn: String, ) {
    window.localStorage['jwtToken'] = token;
    window.localStorage['EXPIRES_IN'] = expiresIn;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('EXPIRES_IN');
  }
}
