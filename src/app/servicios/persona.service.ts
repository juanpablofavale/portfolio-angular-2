import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<any>{
    return this.http.get(this.URL + "/traer");
  }

  public createPersona(persona: persona): Observable<any>{
    return this.http.post(this.URL + "/crear", persona);
  }

  public updatePersona(persona: persona): Observable<any>{
    return this.http.put(this.URL + "/editar", persona);
  }
}
