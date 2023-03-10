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
}
