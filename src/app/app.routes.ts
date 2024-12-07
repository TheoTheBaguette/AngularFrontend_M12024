import { Routes } from '@angular/router';
import { ListeDevoirsComponent } from './components/liste-devoirs/liste-devoirs.component';
import { AjoutDevoirComponent } from './components/ajout-devoir/ajout-devoir.component';
import { ModificationDevoirComponent } from './components/modification-devoir/modification-devoir.component';
import { SuppressionDevoirComponent } from './components/suppression-devoir/suppression-devoir.component';
import { GenerationTestComponent } from './components/generation-test/generation-test.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentsComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
/*
export const routes: Routes = [
  { path: 'liste-devoirs', component: ListeDevoirsComponent },
  { path: 'ajout-devoir', component: AjoutDevoirComponent },
  { path: 'modification-devoir', component: ModificationDevoirComponent },
  { path: 'suppression-devoir', component: SuppressionDevoirComponent },
  { path: 'generation-test', component: GenerationTestComponent },
  { path: 'connexion', component: ConnexionComponent }
  
];
*/

export const routes: Routes = [
  { path: '', component: AssignmentsComponent},
  { path: 'home', component: AssignmentsComponent},
  { path: 'add', component: AddAssignmentsComponent},
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignment/:id/edit', component:EditAssignmentComponent, canActivate: [authGuard]},
  { path: 'connexion', component: ConnexionComponent }
];