import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemsComponent } from './problems/problems.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';

const routes: Routes = [
  {path: 'problems', component: ProblemsComponent},
  {path: 'problems/:id', component: ProblemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
