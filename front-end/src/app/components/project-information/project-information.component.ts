import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.css']
})
export class ProjectInformationComponent implements OnInit {

  @Input() currentProject: Project;
  @Output() deleteProject = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  getState(): String{
    return "Iniciado";
  }

  delete():void{
    this.deleteProject.emit(this.currentProject);
  }

}
