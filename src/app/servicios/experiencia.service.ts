import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencias';

  constructor(private http: HttpClient) { }

  public getExperiencias(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteExperiencia(id: Number): Observable<any>{
    return this.http.delete<String>(this.URL + "/borrar/" + id);
  }

  public createExperiencia(experiencia: experiencia): Observable<any>{
    return this.http.post(this.URL + "/crear", experiencia);
  }

  public updateExperiencia(experiencia: experiencia): Observable<any>{
    return this.http.put(this.URL + "/editar", experiencia);
  }
}
