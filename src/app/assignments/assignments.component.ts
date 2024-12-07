import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AddAssignmentsComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    CommonModule,
    RenduDirective,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    AssignmentDetailComponent,
    AddAssignmentsComponent,
    RouterLink,
  ],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  titre = 'Mon Application sur les assignements';
  ajoutActive = false;
  nomDevoir = '';
  dateDeRendu = new Date();
  assignmentSelectionne!: Assignment;
  assignments: Assignment[] = []; 
  currentPage = 1;
  limit = 10;
  totalPages = 0;

  constructor(private assignmentService: AssignmentsService) {}

  ngOnInit(): void {
    this.getAssignments();

    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  // Méthode pour récupérer les assignments paginés
  getAssignments(): void {
    this.assignmentService.getAssignmentsPagine(this.currentPage, this.limit).subscribe({
      next: (data) => {
        if (Array.isArray(data.docs)) {
          this.assignments = data.docs;
          this.totalPages = data.totalPages; 
        } else {
          console.error('Les données reçues ne sont pas un tableau :', data);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      },
    });
  }

  // Méthode de navigation vers une page spécifique
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.getAssignments();
    }
  }

  assignmentClique(assignment: Assignment): void {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick(): void {
    
  }
}
