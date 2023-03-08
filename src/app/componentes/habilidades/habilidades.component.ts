import { Component, OnInit } from '@angular/core';
import { tecnologia } from 'src/app/model/tecnologia.model';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: tecnologia[] = []
  constructor(public habilidadesService: TecnologiaService) { }

  ngOnInit(): void {
    this.habilidadesService.getTecnologias().subscribe(data => {
      this.habilidades = data
    })
  }

}
