import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tecnologia } from '../model/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  URL = 'http://localhost:8080/tecnologias';

  constructor(private http: HttpClient) { }

  public getTecnologias(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteTecnologia(id: Number): Observable<any>{
    return this.http.delete<any>(this.URL + `/borrar/${id}`);
  }

  public createTecnologia(tecnologia: tecnologia): Observable<any>{
    return this.http.post(this.URL + "/crear", tecnologia);
  }

  public updateTecnologia(tecnologia: tecnologia): Observable<any>{
    return this.http.put(this.URL + "/editar", tecnologia);
  }
}
