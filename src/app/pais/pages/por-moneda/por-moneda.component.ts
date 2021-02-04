import { Component } from '@angular/core';
import { Currency } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-moneda',
  templateUrl: './por-moneda.component.html',
  styles: [
  ]
})
export class PorMonedaComponent  {

  termino:string = '';
  placeholder:string = 'Buscar por Moneda';
  respuesta:Currency[] = [];
  hayError:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarMoneda( this.termino ).subscribe( monedas => {
      this.respuesta = monedas;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( event:string){
    this.hayError = false;
  }

}
