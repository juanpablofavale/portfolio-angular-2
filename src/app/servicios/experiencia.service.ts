import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //URL = 'http://localhost:8080/experiencias';
  URL = AppComponent.backURL;

  constructor(private http: HttpClient) { }

  public getExperiencias(): Observable<any>{
    return this.http.get(this.URL + "/experiencias/traer");
  }

  public deleteExperiencia(id: Number): Observable<any>{
    return this.http.delete<String>(this.URL + "/experiencias/borrar/" + id);
  }

  public createExperiencia(experiencia: experiencia): Observable<any>{
    return this.http.post(this.URL + "/experiencias/crear", experiencia);
  }

  public updateExperiencia(experiencia: experiencia): Observable<any>{
    return this.http.put(this.URL + "/experiencias/editar", experiencia);
  }
}
