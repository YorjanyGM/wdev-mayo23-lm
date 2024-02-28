import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// se necesita el cliente http
import { HttpClientModule } from '@angular/common/http';
import { GruposComponent } from './grupos/grupos.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';


import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    CursosComponent,
    EstudiantesComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
