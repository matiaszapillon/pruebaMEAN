import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Cuando seleccione un empleado en la interfaz, lo voy a almacenar en Employee.
  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API= 'http://localhost:8080/api/employees'

  constructor(private http: HttpClient) {
    
   this.selectedEmployee = new Employee();
   }
 //Aca estan los multiples metodos q vamos a reutilizar, entre las que estan hacer 
 //las consultas a todos los empleados
    getEmployees(){
    //Metodo que trae los empleados del servidor
      return this.http.get(this.URL_API) ;     
    }
  
    postEmployee(employee : Employee){
      return this.http.post(this.URL_API, employee) ;
      //Hago un post a la base de datos para crear un empleado y desp lo actualizado en el front
      this.putEmployee(employee);
    }

    putEmployee(employee : Employee){
     
      return this.http.put(this.URL_API + `/${employee._id}`, employee) ;
    }
    deleteEmployee(employee: Employee){
      return this.http.delete(this.URL_API + `/${employee._id}`)
    }
}
