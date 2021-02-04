import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

  termino:string = '';
  placeholder:string = 'Buscar por País';
  respuesta:Country[] = [];
  hayError:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( this.termino ).subscribe( paises => {
      this.respuesta = paises;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( event:string){
    this.hayError = false;
  }

}
