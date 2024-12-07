import { Component, Input, OnInit } from "@angular/core";
import { Assignment } from "../assignment.model";
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {AssignmentsService} from '../../shared/assignments.service';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import { MatNativeDateModule } from '@angular/material/core';
import { AuthService } from '../../shared/auth.service2';



@Component({
    selector: 'app-assignment-detail',
    standalone: true,  // Ajoute cette ligne
    templateUrl: './assignment-detail.component.html',
    styleUrls: ['./assignment-detail.component.css'],
    imports : [MatCardModule, CommonModule, MatCheckboxModule, MatNativeDateModule,RouterLink]
})


export class AssignmentDetailComponent  {


    constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute, private router:Router, private authService: AuthService) {}
    ngOnInit(): void {
        this.getAssignment();
    }

    /*@Input()*/ assignementTransmis!:Assignment;

    onAssignmentRendu(){
        this.assignementTransmis.rendu = true;

        this.assignmentsService.updateAssignment(this.assignementTransmis)
        .subscribe(message => {
            console.log(message);
            this.router.navigate(["/home"]);
        });
    }

    deleteElem() {
        console.log("deleteElem");
    }

    OnDelete(){
        this.assignmentsService.deleteAssignment(this.assignementTransmis)
        .subscribe((message) =>{
             console.log(message);
      //@ts-ignore
       /*this.assignementTransmis=null;*/
       this.router.navigate(["/home"]);
        });
    }

    getAssignment(): void {
        const id = +this.route.snapshot.params['id'];
        this.assignmentsService.getAssignment(id)
        .subscribe(assignment => this.assignementTransmis = assignment!);

    }

    onClickEdit() {
        this.router.navigate(["/assignment", this.assignementTransmis.id, 'edit'], 
        { queryParams: { nom: this.assignementTransmis.nom }, fragment: 'edition' });
    }

    isAdmin(): boolean{
        return this.authService.loggedIn;
    }
}

    