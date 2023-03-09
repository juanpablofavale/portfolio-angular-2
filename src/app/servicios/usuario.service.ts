import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public deleteUsuario(id: Number): Observable<any>{
    return this.http.delete<any>(this.URL + `/borrar/${id}`);
  }

  public createUsuario(usuario: usuario): Observable<any>{
    return this.http.post(this.URL + "/crear", usuario);
  }

  public updateUsuario(usuario: usuario): Observable<any>{
    return this.http.put(this.URL + "/editar", usuario);
  }
}
