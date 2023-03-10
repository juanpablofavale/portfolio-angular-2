import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: experiencia[] = []
  estaLogueado = AppComponent.logEado;
  estaEditando: boolean = false;

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.leerDatos()
  }
  editar(){
    this.estaEditando = true
  }
  leerDatos(): void{
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencia = data
    })
  }

  borrar(id: Number): void{
    this.experienciaService.deleteExperiencia(id).subscribe(data => {
      this.leerDatos();
    });
    }
}
