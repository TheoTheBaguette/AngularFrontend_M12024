import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  private currentUser: { username: string; role: string } | null = null;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = { username: user.username, role: user.role };
       /**
   * verifier si admin
   */

    console.log("checking for admin");
    const isUserAdmin = new Promise(
        (resolve, reject) => {
            resolve(this.currentUser)
        }
    );
    console.log("user is admin: ", isUserAdmin);
    /** mettre login true */
    this.loggedIn = true;

      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  isLogged(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): Promise<boolean> {

    // logic to determine if the user is an admin
    console.log('checking for admin');
    return Promise.resolve(true); // or Promise.resolve(false){
    
    
  }

  getCurrentUser(): { username: string; role: string } | null {
    return this.currentUser;
  }
}
