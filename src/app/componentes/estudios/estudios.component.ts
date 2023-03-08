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
    this.estudiosService.getEducaciones().subscribe(data => {
      this.estudios = data
      console.table(this.estudios)
    })
  }

}
