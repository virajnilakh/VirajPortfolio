import { Project } from './../projects/projects.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('project') project:Project;
  constructor() { }

  ngOnInit() {
  }

}
