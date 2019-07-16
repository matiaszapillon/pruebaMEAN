import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  readonly URL_API= 'http://localhost:8080/api/projects'
  projects : Project[];


  constructor(private http: HttpClient) { 

  }

  getProjectById(id: String): Observable<Project> {
    return this.http.get<Project>(`${this.URL_API}/${id}`);
  }
  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(this.URL_API);
  }
  getSuppliesByProject(id: String): any{
    return this.http.get(`${this.URL_API}/${id}/supplies`);
  }

}
