import { Component, OnInit,/*EventEmitter,Output */} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { Assignment } from "../assignment.model";
import { AssignmentsService } from '../../shared/assignments.service';
import { Router, RouterLink } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, FormsModule, RouterLink,MatNativeDateModule ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentsComponent implements OnInit {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  //formVisible = false;

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }
  
   /* 
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }ù*/

  titre = 'Mon Application sur les assignements';
  ajoutActive = false;
  nomDevoir = '';
  dateDeRendu = new Date();
  assignmentSelectionne!: Assignment;
  assignments: Assignment[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }


onSubmit(){
  const newAssignment = new Assignment();
  newAssignment.id = Math.floor(Math.random() * 1000);
  newAssignment.nom = this.nomDevoir;
  newAssignment.dateDeRendu = this.dateDeRendu;
  newAssignment.rendu = false;

  this.assignments.push(newAssignment);
  //this.nouvelAssignment.emit(newAssignment);
  this.assignmentsService.addAssignment(newAssignment).subscribe((message) => {
    console.log(message);
    this.router.navigate(['/home']);
  });
    
  }


 
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
    }

   


  

}