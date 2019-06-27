import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Project } from 'src/app/models/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projService: ProjectService) { }
  selectedProject: Project;

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projService.getProjects()
    .subscribe(res => {
      this.projService.projects = res as  Project[];
      console.log(res);
    });
  }
  onSelectedProject(p: Project):void{
    this.selectedProject = p;
    console.log(this.selectedProject);
  }

  deleteSelectedProject(P: Project): void{
    console.log('Eliminar proyecto: ',P);
  }

/* 
  Este metodo se usaria si retorna Any

    searchpopularMovies(): void {
    this.service.searchPopularMovies().subscribe((response:any)=> this.popularMovies = response.movies);
    //this.service.searchPopularMovies().subscribe((response:any)=> console.log(response.results));

  } */



}
