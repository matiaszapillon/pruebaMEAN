import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() currentProject: Project;
  showSup: Boolean = false;
  showStag: Boolean = false;

  constructor(private route: ActivatedRoute, private projService: ProjectService) { }

  ngOnInit() {
    console.log("call method");
    this.getProjectById();
  }
  getProjectById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projService.getProjectById(id).subscribe(proj => {
      this.currentProject = proj;
      this.currentProject.supplies = [];
      console.log(this.currentProject);
    })
  }

  showSupplies(): void {
    this.showSup = true;
    this.showStag = false;
  }
  showStages(): void {
    this.showStag = true;
    this.showSup = false;
  }
}
