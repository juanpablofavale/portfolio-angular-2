import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyectos';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteProyecto(id: Number): Observable<any>{
    return this.http.delete(this.URL + "/borrar/" + id);
  }

  public createProyecto(proyecto: proyecto): Observable<any>{
    return this.http.post(this.URL + "/crear", proyecto);
  }

  public updateProyecto(proyecto: proyecto): Observable<any>{
    return this.http.put(this.URL + "/editar", proyecto);
  }
}
