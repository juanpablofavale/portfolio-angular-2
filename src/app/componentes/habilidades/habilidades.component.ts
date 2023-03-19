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
  estaCargando = true;

  constructor(public habilidadesService: TecnologiaService) { }

  ngOnInit(): void {
    AppComponent.pagina[0]="/habilidades"
    this.leerDatos()
  }

  change(habilidades: tecnologia, event: any){
    this.habilidadesService.createImagen(event.target.files[0]).subscribe(data => {
      habilidades.imglogo = data.url;
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
    editables.forEach(ed => ed.setAttribute("contenteditable", "false"))
  }

  leerDatos(): void{
    this.habilidadesService.getTecnologias().subscribe(data => {
      this.habilidades = data
      this.estaCargando = false;
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
        this.cancela()
        })
    }else{
      this.habilidadesService.createTecnologia(habilidades).subscribe(data =>{
        this.leerDatos()
        this.cancela()
        })
    }
  }

  borrar(tecnologia: tecnologia): void{
    if(tecnologia.id!=0){
      this.habilidadesService.deleteTecnologia(tecnologia.id).subscribe(data => {
        this.leerDatos()
      });
    }else{
      let indice = this.habilidades.findIndex((tecno: tecnologia) => tecno==tecnologia)
      this.habilidades.splice(indice,1)
    }
    }
  }