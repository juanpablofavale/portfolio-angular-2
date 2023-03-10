import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { tecnologia } from 'src/app/model/tecnologia.model';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: tecnologia[] = []
  estaLogueado = AppComponent.logEado;
  estaEditando: boolean = false;

  constructor(public habilidadesService: TecnologiaService) { }

  ngOnInit(): void {
    this.leerDatos()
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
  leerDatos(): void{
    this.habilidadesService.getTecnologias().subscribe(data => {
      this.habilidades = data
    })
  }

  agregar(){
    this.habilidades.push(new tecnologia(0,"Nombre", "", 50, 1));
  }

  guardar(habilidades: tecnologia){
    habilidades.nombre = document.getElementById("nomhabilidad"+habilidades.id)!.innerText;
    habilidades.porcentaje = Number.parseInt(document.getElementById("porchabilidad"+habilidades.id)!.innerText);
    if (habilidades.id!=0){
      this.habilidadesService.updateTecnologia(habilidades).subscribe(data =>{
        this.leerDatos()
      })
    }else{
      this.habilidadesService.createTecnologia(habilidades).subscribe(data =>{
        this.leerDatos()
      })
    }
  }

  borrar(tecnologia: tecnologia): void{
    if(tecnologia.id!=0){
      this.habilidadesService.deleteTecnologia(tecnologia.id).subscribe(data => {
        this.leerDatos();
      });
    }else{
      let indice = this.habilidades.findIndex((tecno: tecnologia) => tecno==tecnologia)
      this.habilidades.splice(indice,1)
    }
    }
  }