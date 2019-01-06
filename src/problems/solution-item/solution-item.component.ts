import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-item',
  templateUrl: './solution-item.component.html',
  styleUrls: ['./solution-item.component.css']
})
export class SolutionItemComponent implements OnInit {

  constructor() { }

  @Input() solution: any;
  codeVisible = false;
  toggleText = "See Solution";
  ngOnInit() {
  }

  toggleCode() {
  	this.codeVisible = !this.codeVisible;
  	this.toggleText = this.toggleText === "See Solution" ? "Hide Solution" : "See Solution"
  }

}
