import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-idioma',
  templateUrl: './por-idioma.component.html',
  styles: [
  ]
})
export class PorIdiomaComponent  {

  termino:string = '';
  placeholder:string = 'Buscar por Idioma';
  respuesta:Country[] = [];
  idiomaSujeridos:Country[] = [];
  hayError:boolean = false;
  mostrarSugerencias:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( this.termino ).subscribe( idiomas => {
      this.respuesta = idiomas;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarIdioma( termino )
      .subscribe( idiomas => {
        this.idiomaSujeridos = idiomas.splice(0,5)
      }),
      (err) => {
        this.mostrarSugerencias = false;
        this.idiomaSujeridos = [];
      };
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }

}
