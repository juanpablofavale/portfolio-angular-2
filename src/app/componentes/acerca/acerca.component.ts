import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  persona: persona = new persona(0, "", "", "","", 0);
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => {
      this.persona = data[0]
      console.table(this.persona)
    })
  }
}
