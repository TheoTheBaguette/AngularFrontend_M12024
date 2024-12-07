/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn() {
    this.loggedIn=true;
    console.log("True");
  }
  logout() {
    this.loggedIn = false;
    console.log("False");
  }

  isAdmin() {
    console.log("checking for admin");
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn)
      }
    );
    console.log("user is admin: ", isUserAdmin);
    return isUserAdmin;
  }

}
*/