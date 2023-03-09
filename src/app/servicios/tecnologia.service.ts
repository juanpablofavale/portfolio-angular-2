import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  URL = 'http://localhost:8080/tecnologias';

  constructor(private http: HttpClient) { }

  public getTecnologias(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteTecnologias(id: Number): Observable<any>{
    return this.http.delete<any>(this.URL + `/borrar/${id}`);
  }
}
