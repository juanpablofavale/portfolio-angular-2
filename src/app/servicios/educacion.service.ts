import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //URL = 'http://localhost:8080/educaciones';
  URL = AppComponent.backURL;
  CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/image/upload";
  CLOUDINARY_UPLOAD_PRESET = "snrmwxop";
  
  constructor(private http: HttpClient) { }

  public getEducaciones(): Observable<any>{
    return this.http.get(this.URL + "/educaciones/traer");
  }

  public deleteEducaciones(id: Number): Observable<any>{
    return this.http.delete(this.URL + "/educaciones/borrar/" + id);
  }

  public createEducacion(educacion: educacion): Observable<any>{
    return this.http.post(this.URL + "/educaciones/crear", educacion);
  }

  public updateEducacion(educacion: educacion): Observable<any>{
    return this.http.put(this.URL + "/educaciones/editar", educacion);
  }

  public createImagen(file:File): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET);
    return this.http.post(this.CLOUDINARY_URL, formData);
  }
}

/*
const imagePreview = document.getElementById("img-preview")
const imageUploader = document.getElementById("img-uploader")
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzkrvbxjc/upload"
const CLOUDINARY_UPLOAD_PRESET = "snrmwxop"
let urlImage = ""
let obj = {}


imageUploader.addEventListener("change",async (e)=>{
    const file = e.target.files[0]
    
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)

    const res = await fetch(CLOUDINARY_URL, {method: 'POST', body: formData})
    const data = await res.json()
    console.log(data)
    obj = data
    urlImage = data.url
    imagePreview.src = urlImage
})
*/