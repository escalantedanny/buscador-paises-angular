import { Component } from '@angular/core';
import { Language } from '../../interfaces/pais.interface';
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
  respuesta:Language[] = [];
  hayError:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarIdioma( this.termino ).subscribe( idiomas => {
      this.respuesta = idiomas;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( event:string){
    this.hayError = false;
  }

}
