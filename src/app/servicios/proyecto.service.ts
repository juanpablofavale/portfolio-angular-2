import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyectos';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteProyectos(id: Number): Observable<any>{
    return this.http.delete(this.URL + "/borrar/" + id);
  }
}
