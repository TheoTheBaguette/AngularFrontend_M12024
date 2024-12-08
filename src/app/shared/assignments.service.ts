import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import {Observable, of, forkJoin } from 'rxjs';
import { Inject } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin as rxjsForkJoin } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { bdInitialAssignments } from './Data';
@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  

  
  //backendURL = "http://localhost:8010/api/assignments";
  backendURL = "https://theo-apiangularm1-2024.onrender.com/api/assignments";

 /* assignments:Assignment[] = [
    {
      id: 1,
      nom: 'Devoir Angular à rendre',
      dateDeRendu: new Date('2024-03-15'),
      rendu: false
    },
    {
      id: 2,
      nom: 'Devoir JAVA à rendre',
      dateDeRendu: new Date('2024-03-30'),
      rendu: true
    },
    {
      id: 3,
      nom: 'Finir Feuille 3 wims',
      dateDeRendu: new Date('2024-12-30'),
      rendu: true
    }
  ];*/

  constructor(private loggingService:LoggingService, private http: HttpClient) {}

  /*
  getAssignments() : Observable<Assignment[]> {
    return of(this.assignments);
  }*/

  /*
  getAssignments(): Observable<any> {
    return this.http.get<any>(this.backendURL);
  }*/

  getAssignments(): Observable<Assignment[]> {
      return this.http.get<Assignment[]>(this.backendURL);
    }

    /*
  addAssignment(assignment:Assignment) : Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom,"ajouté");
    return of("Assignment ajouté");
  }*/

  addAssignment(assignment:Assignment) : Observable<any> {
    return this.http.post<Assignment>(this.backendURL, assignment);
  }
/*
  updateAssignment(assignment: Assignment):Observable<string> {
    return of("Assignment service: assignment modifié");
  }*/

  updateAssignment(assignment: Assignment):Observable<any> {
    return this.http.put<Assignment>(this.backendURL, assignment);
  }

/*
  deleteAssignment(assignment: Assignment):Observable<string> {
    let pos= this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);

    return of("Assignment service: assignment supprimé !");
}*/

/* si lon veut supprimer un assignment dans la base de données par exemple : {"_id":"674f6a1bd26bd534dc402cda","id":68,"nom":"TEST234","dateDeRendu":"2024-12-03T20:29:04.447Z","rendu":false,"__v":0}*/
deleteAssignment(assignment: Assignment):Observable<any> {
  return this.http.delete(`${this.backendURL}/${assignment.id}`);
  
}

/*
getAssignment(id: number): Observable<Assignment|undefined> {
  const a: Assignment|undefined = this.assignments.find(a => a.id === id);
  return of(a); 
}*/

getAssignment(id: number): Observable<any> {
  return this.http.get<any>(`${this.backendURL}/${id}`)
  .pipe(map(a => {
    a.nom += " transformé avec un pipe...";
    return a;
  }),
  tap(_ => {
    console.log("tap: assignment avec id="+id+" a été demandé");
  }),
  catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
 
  );
}

getAssignmentsPagine(page: number, limit: number): Observable<any> {
  return this.http.get<any>(`${this.backendURL}?page=${page}&limit=${limit}`);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(operation + ' a échoué ' + error.message);
    return of(result as T);
  };
}

/*
peuplerBD() {
  bdInitialAssignments.forEach(a => {
      let nouvelAssignment = new Assignment();
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.id = a.id;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;
 
      this.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);
      })
    })
  }
 
*/


// Méthode pour peupler la base avec forkJoin
peuplerBDAvecForkJoin(): Observable<any> {
  let appelsVersAddAssignment: Observable<any>[] = [];

  bdInitialAssignments.forEach((a) => {
    const nouvelAssignment: Assignment = {
      id: a.id,
      nom: a.nom,
      dateDeRendu: new Date(a.dateDeRendu),
      rendu: a.rendu,
    };

    // Ajouter chaque requête POST au tableau
    appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
  });

  
  return forkJoin(appelsVersAddAssignment);
}

}