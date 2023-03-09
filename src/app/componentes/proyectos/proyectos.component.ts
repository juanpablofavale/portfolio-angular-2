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

  agregar(){
    this.proyectos.push(new proyecto(0, "Nombre del proyecto", "", "Descripcion", "", 1));
  }

  guardar(proyecto: proyecto){
    proyecto.nombre = document.getElementById("nomhabilidad"+proyecto.id)!.innerText;
    proyecto.descripcion = document.getElementById("porchabilidad"+proyecto.id)!.innerText;
    if (proyecto.id!=0){
      this.proyectosService.updateProyecto(proyecto).subscribe(data =>{
        this.leerDatos()
      })
    }else{
      this.proyectosService.createProyecto(proyecto).subscribe(data =>{
        this.leerDatos()
      })
    }
  }

  borrar(proyecto: proyecto): void{
    if(proyecto.id!=0){
      this.proyectosService.deleteProyecto(proyecto.id).subscribe(data => {
        this.leerDatos()
      })
    }else{
      let indice = this.proyectos.findIndex((proy: proyecto) => proy==proyecto)
      this.proyectos.splice(indice,1)
    }
  }
}
