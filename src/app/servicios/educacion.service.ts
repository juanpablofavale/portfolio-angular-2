import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educaciones';

  constructor(private http: HttpClient) { }

  public getEducaciones(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteEducaciones(id: Number): Observable<any>{
    return this.http.delete(this.URL + "/borrar/" + id);
  }

  public createEducacion(educacion: educacion): Observable<any>{
    return this.http.post(this.URL + "/crear", educacion);
  }

  public updateEducacion(educacion: educacion): Observable<any>{
    return this.http.put(this.URL + "/editar", educacion);
  }
}
