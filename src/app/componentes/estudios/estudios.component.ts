import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: educacion[] = [];
  estaLogueado = AppComponent.logEado;
  estaEditando: boolean = false;
  file: File = new File([], "");

  constructor(public estudiosService: EducacionService) { }
  
  ngOnInit(): void {
    this.leerDatos()
  }

  change(estudios: educacion, event: any){
    this.file = event.target.files[0];
    this.estudiosService.createImagen(this.file).subscribe(data => {
      estudios.imglogo = data.url;
    })
  }

  editar(){
    this.estaEditando = true
    const editables = document.querySelectorAll(".editable")
    editables.forEach(ed => ed.setAttribute("contenteditable", "true"))
  }
  cancelar(){
    this.estaEditando = false
    const editables = document.querySelectorAll(".editable")
    editables.forEach(ed => ed.setAttribute("contenteditable", "false"))
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
    console.table(estudios)
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

  borrar(estudio: educacion): void{
    if(estudio.id!=0){
      this.estudiosService.deleteEducaciones(estudio.id).subscribe(data =>{
        this.leerDatos()
      })
    }else{
      let indice = this.estudios.findIndex((est: educacion) => est==estudio)
      this.estudios.splice(indice,1)
    }
  }
}
