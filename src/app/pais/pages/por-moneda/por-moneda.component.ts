import { Component } from '@angular/core';
import { Country, Currency } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-moneda',
  templateUrl: './por-moneda.component.html',
  styles: [
  ]
})
export class PorMonedaComponent  {

  termino:string             = '';
  placeholder:string         = 'Buscar por Moneda';
  respuesta:Country[]        = [];
  paisesSujeridos:Country[]  = [];
  monedasSujeridos:Country[] = [];
  hayError:boolean           = false;
  mostrarSugerencias:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( this.termino ).subscribe( monedas => {
      this.respuesta = monedas;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarMoneda( termino )
      .subscribe( monedas => {
        this.monedasSujeridos = monedas.splice(0,5)
      }),
      (err) => {
        this.mostrarSugerencias = false;
        this.monedasSujeridos = [];
      };
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }

}
