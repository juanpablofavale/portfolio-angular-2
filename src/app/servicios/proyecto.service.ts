import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //URL = 'http://localhost:8080/proyectos';
  URL = AppComponent.backURL;

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<any>{
    return this.http.get(this.URL + "/proyectos/traer");
  }

  public deleteProyecto(id: Number): Observable<any>{
    return this.http.delete(this.URL + "/proyectos/borrar/" + id);
  }

  public createProyecto(proyecto: proyecto): Observable<any>{
    return this.http.post(this.URL + "/proyectos/crear", proyecto);
  }

  public updateProyecto(proyecto: proyecto): Observable<any>{
    return this.http.put(this.URL + "/proyectos/editar", proyecto);
  }
}
