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
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/image/upload";
  CLOUDINARY_UPLOAD_PRESET = "snrmwxop";

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
  public createImagen(file:File): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
    return this.http.post(this.CLOUDINARY_URL, formData);
  }
}
