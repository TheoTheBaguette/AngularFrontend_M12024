import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service2';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { connect } from 'http2';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCardModule, FormsModule, CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
      console.log('connexion réussie admin')
      
    } else {
      console.log('username attendu :' + this.username + ' password attendu :' + this.password);
      this.errorMessage = 'Identifiant ou mot de passe incorrect';
    }
  }
}


