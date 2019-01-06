import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemItemComponent } from './problem-item/problem-item.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { SolutionItemComponent } from './solution-item/solution-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ProblemsRoutingModule
  ],
  declarations: [ProblemsComponent, ProblemItemComponent, ProblemDetailComponent, SolutionItemComponent]
})
export class ProblemsModule { }
