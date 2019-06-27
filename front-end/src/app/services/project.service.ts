import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly URL_API= 'http://localhost:8080/api/projects'
  projects : Project[];


  constructor(private http: HttpClient) { 

  }


  getProjects() {

    return this.http.get(this.URL_API);
  }

}
