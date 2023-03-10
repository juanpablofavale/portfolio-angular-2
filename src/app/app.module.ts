import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { Routes, RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {path: '', title: 'Portfolio - Juan Pablo Favale', component: AcercaComponent},
  {path: 'index', title: 'Portfolio - Juan Pablo Favale', component: AcercaComponent},
  {path: 'estudios', title: 'Estudios - Juan Pablo Favale', component: EstudiosComponent},
  {path: 'habilidades', title: 'Habilidades - Juan Pablo Favale', component: HabilidadesComponent},
  {path: 'proyectos', title: 'Proyectos - Juan Pablo Favale', component: ProyectosComponent},
  {path: '**', title: 'Portfolio - Juan Pablo Favale', component: AcercaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcercaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
