import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //URL = 'http://localhost:8080/educaciones';
  URL = AppComponent.backURL;

  constructor() { }

  public getLogin(nomUsr: string): boolean{
    let logged = false;
    if(window.sessionStorage.getItem("logged")==nomUsr){
      logged = true;
    }
    return logged;
  }

  public setLogin(nomUsr: string): boolean{
    let logged = false;
    if(window.sessionStorage.getItem("logged")==nomUsr){
      logged = true;
    }else{
      window.sessionStorage.setItem("logged", nomUsr)
      logged = true;
    }
    return logged;
  }

  public getUserName(): string{
    return window.sessionStorage.getItem("logged")!;
  }

  public logOut(nomUsr: string): boolean{
    let logout = false;
    if(window.sessionStorage.getItem("logged")){
      window.sessionStorage.removeItem("logged");
      logout = true;
    }
    
    return logout;
  }
}