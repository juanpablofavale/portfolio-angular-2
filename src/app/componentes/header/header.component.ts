import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usrName = "jpf"
  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }

  iniciar(usr: string){
    console.log(usr)
    console.log(this.login.setLogin(usr))
  }
}
