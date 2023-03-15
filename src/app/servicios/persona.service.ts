import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas';
  URL = AppComponent.backURL;
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/image/upload";
  CLOUDINARY_UPLOAD_PRESET = "snrmwxop";

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<any>{
    return this.http.get(this.URL + "/personas/traer");
  }

  public createPersona(persona: persona): Observable<any>{
    return this.http.post(this.URL + "/personas/crear", persona);
  }

  public updatePersona(persona: persona): Observable<any>{
    return this.http.put(this.URL + "/personas/editar", persona);
  }
  public createImagen(file:File): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
    return this.http.post(this.CLOUDINARY_URL, formData);
  }
}
