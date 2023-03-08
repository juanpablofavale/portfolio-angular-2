import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }
}
