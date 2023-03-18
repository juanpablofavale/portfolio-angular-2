import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  persona: persona = new persona(0, "", "", "","", 0);
  estaLogueado = AppComponent.logEado;
  estaEditando: boolean = false;
  estaCargando = true;

  constructor(public personaService: PersonaService, public login: LoginService) { }

  ngOnInit(): void {
    this.leerDatos()
    AppComponent.pagina[0]=""
    //let estado = this.login.getLogin();
    //this.estaLogueado.state = estado.logged
    //this.login.logOut("jpf")
  }

  change(persona: persona, event: any){
    this.personaService.createImagen(event.target.files[0]).subscribe(data => {
      persona.imgperfil = data.url;
    })
  }
  
  cancelar(persona: persona){
    this.estaEditando = false
    let nombre = document.getElementById("nombreAcerca");
    let titulo = document.getElementById("tituloAcerca");
    let sobremi = document.getElementById("sobreMiAcerca");
    nombre?.setAttribute("contenteditable", "false")
    titulo?.setAttribute("contenteditable", "false")
    sobremi?.setAttribute("contenteditable", "false")
    document.getElementById("nombreAcerca")!.innerText = persona.nombre.toString();
    document.getElementById("tituloAcerca")!.innerText = persona.subtitulo.toString();
    document.getElementById("sobreMiAcerca")!.innerText = persona.acerca.toString();
  }

  editar(){
    this.estaEditando = true
    let nombre = document.getElementById("nombreAcerca");
    let titulo = document.getElementById("tituloAcerca");
    let sobremi = document.getElementById("sobreMiAcerca");
    nombre?.setAttribute("contenteditable", "true")
    titulo?.setAttribute("contenteditable", "true")
    sobremi?.setAttribute("contenteditable", "true")
  }

  logIn(usr: string){
    console.log(usr)
    return this.login.setLogin(usr)
  }

  logOut(usr: string){
    return this.login.logOut(usr)
  }

  leerDatos(){
    this.personaService.getPersonas().subscribe(data => {
      this.persona = data[0]
      this.estaCargando=false;
      if (this.estaEditando){
        this.editar()
      }
    })
  }

  guardar(persona: persona){
    persona.nombre = document.getElementById("nombreAcerca")!.innerText;
    persona.subtitulo = document.getElementById("tituloAcerca")!.innerText;
    persona.acerca = document.getElementById("sobreMiAcerca")!.innerText;
    if(persona.id!=0){
      this.personaService.updatePersona(persona).subscribe(data =>{
        this.cancelar(persona)
        this.leerDatos()
          })
    }
  }}
