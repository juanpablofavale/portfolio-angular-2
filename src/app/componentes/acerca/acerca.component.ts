import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  persona: persona = new persona(0, "", "", "","", 0);
  estaLogueado: boolean = false;
  estaEditando: boolean = false;


  constructor(public personaService: PersonaService, public login: LoginService) { }

  ngOnInit(): void {
    this.leerDatos()
    this.estaLogueado = this.login.getLogin("jpf");
    //this.login.logOut("jpf")
  }
  
  cancelar(persona: persona){
    this.estaEditando = false
    let acerca = document.getElementById("acerca");
    acerca?.setAttribute("contenteditable", "false")
    document.getElementById("nombreAcerca")!.innerText = persona.nombre.toString();
    document.getElementById("tituloAcerca")!.innerText = persona.subtitulo.toString();
    document.getElementById("sobreMiAcerca")!.innerText = persona.acerca.toString();
  }

  editar(){
    this.estaEditando = true
    let acerca = document.getElementById("acerca");
    acerca?.setAttribute("contenteditable", "true")
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
    })
  }

  guardar(persona: persona){
    persona.nombre = document.getElementById("nombreAcerca")!.innerText;
    persona.subtitulo = document.getElementById("tituloAcerca")!.innerText;
    persona.acerca = document.getElementById("sobreMiAcerca")!.innerText;
    if(persona.id!=0){
      this.personaService.updatePersona(persona).subscribe(data =>{
        this.leerDatos()
        this.estaEditando = false;
        let acerca = document.getElementById("acerca");
        acerca?.setAttribute("contenteditable", "false")
          })
    }
  }}
