import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { usuario } from 'src/app/model/usuario.model';
import { LoginService } from 'src/app/servicios/login.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usrName = ""
  usrPass = ""
  errCred = false
  estaLogueado = AppComponent.logEado
  paginaActual = AppComponent.pagina
  
  constructor(public login: LoginService, public usuario: UsuarioService) { }

  ngOnInit(): void {
    let estado = this.login.getLogin()
    AppComponent.logEado.state = estado.logged
    if (this.estaLogueado){
      this.usrName = estado.nombre
    }else{
      this.usrName = "";
    }
  }

  logOut(){
    AppComponent.logEado.state = !this.login.logOut(this.usrName)
    this.usrName = ""
  }

  iniciar(usr: string, pass: string){
    const us = new usuario(0, usr, pass, "", "");
    try {
      this.usuario.existeUsuario(us).subscribe(data=>{
        if (data.codigo==0){
          this.usrPass=""
          let cerrar = document.getElementById("cerrar-form")
          cerrar!.click()
          AppComponent.logEado.state = this.login.setLogin(usr)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido ' + usr + "!",
            showConfirmButton: false,
            timer: 1500
          })
        }else if(data.codigo>0){
          this.usrName = ""
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Nombre de Usuario o Contraseña Incorrectos!',
            showConfirmButton: false,
            timer: 1500
          })
          this.usrPass=""
        }else{
          this.usrName = ""
          this.usrPass = ""
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error Inesperado al Intentar Iniciar Sesion',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
