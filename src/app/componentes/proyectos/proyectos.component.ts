import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: proyecto[] = [];
  estaLogueado = AppComponent.logEado;
  estaEditando: boolean = false;
  estaCargando = true;
  file: File = new File([], "");

  constructor(public proyectosService: ProyectoService) { }

  ngOnInit(): void {
    AppComponent.pagina[0]="/proyectos"
    this.leerDatos()
  }

  change(proyectos: proyecto, event: any){
    this.file = event.target.files[0];
    this.proyectosService.createImagen(this.file).subscribe(data => {
      proyectos.imagen = data.url;
  })
  }  
  
  editar(){
    this.estaEditando = true
    const editables = document.querySelectorAll(".editable")
    editables.forEach(ed => ed.setAttribute("contenteditable", "true"))
  }
  
  cancelar(){
    this.cancela()
    this.leerDatos()
  }
  
  cancela(){
    this.estaEditando = false
    const editables = document.querySelectorAll(".editable")
    editables.forEach(ed => ed.setAttribute("contenteditable", "true"))
  }

  leerDatos(){
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data
      this.estaCargando = false
    })
  }

  agregar(){
    this.proyectos.push(new proyecto(0, "Nombre del proyecto", "", "Descripcion", "Enlace", 1));
  }

  guardar(proyecto: proyecto){
    proyecto.nombre = document.getElementById("nomproyecto" + proyecto.id)!.innerText;
    proyecto.descripcion = document.getElementById("descproyecto" + proyecto.id)!.innerText;
    proyecto.enlace = document.getElementById("link" + proyecto.id)!.innerText;
    if (proyecto.id!=0){
      this.proyectosService.updateProyecto(proyecto).subscribe(data =>{
        this.leerDatos()
        this.cancela()
      })
    }else{
      this.proyectosService.createProyecto(proyecto).subscribe(data =>{
        this.leerDatos()
        this.cancela()
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
