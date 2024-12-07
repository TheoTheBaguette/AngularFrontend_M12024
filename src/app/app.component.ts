import { AssignmentsComponent } from "./assignments/assignments.component";
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AssignmentDetailComponent } from "./assignments/assignment-detail/assignment-detail.component";
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {Router} from '@angular/router';
import {AuthService} from './shared/auth.service2';
import { CommonModule } from "@angular/common";
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AssignmentsComponent,
    RouterOutlet, 
    RouterLink,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    AssignmentDetailComponent,
    MatSlideToggleModule,
    CommonModule
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des devoirs à rendre (Assignements)';
  
  constructor (private authService:AuthService, private router: Router, private assignmentsService: AssignmentsService) {}
/*
  login() {
    console.log("login");
    if(!this.authService.loggedIn) {
      this.authService.logIn();
      this.isConnected = true;
    } else {
      this.authService.logout();
      //et on redirige vers la page d'accueil
      this.router.navigate(["/home"]);
    }
  }
*/

  opened = false; 

  isAdmin(): boolean{
    return this.authService.loggedIn;
}

deconnexion() {
  console.log("deconnexion");
  this.authService.loggedIn = false;
  this.router.navigate(["/home"]);
  

}



  toggleSidenav() {
    this.opened = !this.opened;
  }
  handleClick() {
    console.log('Lien cliqué!');
  }

 // Méthode pour peupler la base
 peuplerBD() {
  this.assignmentsService.peuplerBDAvecForkJoin().subscribe(() => {
    console.log('LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES.');
    
    // Actualise la page pour refléter les nouvelles données
    window.location.reload();
  });
}
}




