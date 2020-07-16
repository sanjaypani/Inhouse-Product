import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log("Before isUserLoggedIn :::::: " + this.isUserLoggedIn());
    if (username === 'Sanjay' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log("After isUserLoggedIn :::::: " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
