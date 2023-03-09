import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: proyecto[] = [];

  constructor(public proyectosService: ProyectoService) { }

  ngOnInit(): void {
    this.leerDatos()
  }
  
  leerDatos(){
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data
    })
  }

  borrar(id: Number): void{
    this.proyectosService.deleteProyectos(id).subscribe(data => {
      this.leerDatos()
    })
  }
}
