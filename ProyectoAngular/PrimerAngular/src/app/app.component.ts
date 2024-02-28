import { Component, OnInit } from '@angular/core';
// import { Cursos } from './models/cursos';
// import { RespuestaCurso } from './models/respuestacurso';
// // import importa librerias o clases
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'primerAngular';

  pestanaActiva: string = 'pestana1';
  cambiarPestana(pestana: string){
    this.pestanaActiva = pestana;
  }
  // Atributos
  // arregloDatos: Cursos[] = [
  //   { id: "1", nombre : "html5", descripcion : "111",  tiempo : "1", usuario : "Prof Mario" },
  //   { id: "2", nombre : "css3", descripcion : "222",  tiempo : "22", usuario : "Prof Mario" },
  //   { id: "3", nombre : "js", descripcion : "333",  tiempo : "333", usuario : "Prof Mario" },
  //   { id: "4", nombre : "jquery", descripcion : "444",  tiempo : "444", usuario : "Prof Mario" },
  //   { id: "5", nombre : "bootstrap", descripcion : "555",  tiempo : "5555", usuario : "Prof Mario" }
  // ]


  // arregloDatos: Cursos[] = [];
   

  // constructor(private http: HttpClient ) {}


  ngOnInit(): void {
     this.obtenerDatos();
  }


  obtenerDatos(){
}
}