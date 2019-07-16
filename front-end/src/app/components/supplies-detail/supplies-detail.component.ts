import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'supplies-detail',
  templateUrl: './supplies-detail.component.html',
  styleUrls: ['./supplies-detail.component.css']
})
export class SuppliesDetailComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private projServic: ProjectService) { }
  @Input() visible: boolean;
  @Input() project: Project;
  private supply : any;

  ngOnInit() {

    this.getSuppliesByProject();


  }
  getSuppliesByProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projServic.getSuppliesByProject(id).subscribe(sup => {
       sup.forEach(s => {
        this.project.supplies.push(s);
      }); 
   //   this.project.supplies.push(sup);
      console.log(this.project);
    })
  }
  onSelectionChange(sup: any):void{
    this.supply = sup;
  }

  navigateToSuppliesPage():void{
    //Obtener insumos que no pertenezcan al proyecto y mandar el array a la pagina.
    this.router.navigate(['/home/employees'], {state: {data: {proj: this.project}}});
    
  }
}
