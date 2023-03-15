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
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/image/upload";
  CLOUDINARY_UPLOAD_PRESET = "snrmwxop";

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

  public createImagen(file:File): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
    return this.http.post(this.CLOUDINARY_URL, formData);
  }}
