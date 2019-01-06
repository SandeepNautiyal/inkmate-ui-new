import { Component, OnInit } from '@angular/core';

import { ProblemItemComponent } from '../problem-item/problem-item.component';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  constructor(private problemService: ProblemService) { }

  problemList: any

  ngOnInit() {
  	this.problemService.getProblemList()
  	.subscribe(resp => {
  		this.problemList = resp["prob"];
  	},
  	error => {
  		console.debug("Unable to load problem list");
  	})
  }

}
