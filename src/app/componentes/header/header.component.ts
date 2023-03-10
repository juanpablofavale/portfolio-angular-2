import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/servicios/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usrName = "jpf"
  constructor(public login: LoginService) { }

  ngOnInit(): void {
    AppComponent.logEado.state = this.login.getLogin("jpf")
  }

  iniciar(usr: string){
    AppComponent.logEado.state = this.login.setLogin(usr)
  }
}
