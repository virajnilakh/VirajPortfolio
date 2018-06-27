import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  constructor() { }
  @Input('class.bg-primary') toggle:boolean;

  ngOnInit() {
  }

}
