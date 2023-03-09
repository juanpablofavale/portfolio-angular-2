import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: educacion[] = [];

  constructor(public estudiosService: EducacionService) { }

  ngOnInit(): void {
    this.leerDatos()
  }
  
  leerDatos(){
    this.estudiosService.getEducaciones().subscribe(data => {
      this.estudios = data
    })
  }

  agregar(){
    this.estudios.push(new educacion(0,"","Institucion","Titulo","YYYY","YYYY",1))
  }

  guardar(estudios: educacion){
    estudios.nombreinstitucion = document.getElementById("institucion"+estudios.id)!.innerText;
    estudios.titulo = document.getElementById("titulo"+estudios.id)!.innerText;
    estudios.fechadesde = (document.getElementById("fecha"+estudios.id)!.innerText).substring(0,4);
    estudios.fechahasta = (document.getElementById("fecha"+estudios.id)!.innerText).substring(6,11);
    if(estudios.id==0){
      this.estudiosService.createEducacion(estudios).subscribe(data =>{
        this.leerDatos()
      })
    }else{
      this.estudiosService.updateEducacion(estudios).subscribe(data =>{
        this.leerDatos()
      })
    }
  }

  borrar(id: Number): void{
    if(id!=0){
      this.estudiosService.deleteEducaciones(id).subscribe(data =>{
        this.leerDatos()
      })
    }else{
      this.estudios.pop()
    }
  }
}
