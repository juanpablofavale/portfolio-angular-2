import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';
  public static logEado = {state: true};
  //public static backURL = "https://portfolio-backend-47s5.onrender.com"
  public static backURL = "http://localhost:8080"
}