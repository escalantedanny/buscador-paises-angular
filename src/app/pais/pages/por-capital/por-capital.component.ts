import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino:string = '';
  placeholder:string = 'Buscar por Capital';
  respuesta:Country[] = [];
  paisesSujeridos:Country[] = [];
  hayError:boolean = false;
  mostrarSugerencias:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital( this.termino ).subscribe( capitales => {
      this.respuesta = capitales;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
  }

  sugerencias( termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital( termino )
      .subscribe( paises => this.paisesSujeridos = paises.splice(0,5)),
      (err) => this.paisesSujeridos = [];
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }

}
