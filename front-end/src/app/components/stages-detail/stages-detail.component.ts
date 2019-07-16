import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'stages-detail',
  templateUrl: './stages-detail.component.html',
  styleUrls: ['./stages-detail.component.css']
})
export class StagesDetailComponent implements OnInit {

  @Input() visible: boolean;
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
    //traer etapas
  }

}
