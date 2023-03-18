import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //URL = 'http://localhost:8080/usuarios';
  URL = AppComponent.backURL;
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/image/upload";
  CLOUDINARY_UPLOAD_PRESET = "snrmwxop";

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any>{
    return this.http.get(this.URL + "/usuarios/traer");
  }

  public deleteUsuario(id: Number): Observable<any>{
    return this.http.delete<any>(this.URL + `/usuarios/borrar/${id}`);
  }

  public createUsuario(usuario: usuario): Observable<any>{
    return this.http.post(this.URL + "/usuarios/crear", usuario);
  }

  public updateUsuario(usuario: usuario): Observable<any>{
    return this.http.put(this.URL + "/usuarios/editar", usuario);
  }
  public existeUsuario(usuario: usuario): Observable<any>{
    return this.http.post(this.URL + "/usuarios/existe", usuario);
  }
  public createImagen(file:File): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
    return this.http.post(this.CLOUDINARY_URL, formData);
  }
}
