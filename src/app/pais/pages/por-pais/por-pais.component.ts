import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    a {
      text-decoration:none;
    }
    `
  ]
})
export class PorPaisComponent  {

  termino:string = '';
  placeholder:string = 'Buscar por País';
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
    this.paisService.buscarPais( this.termino ).subscribe( paises => {
      this.respuesta = paises;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSujeridos = paises.splice(0,5)),
      (err) => this.paisesSujeridos = [];
  }

  buscarSugerido( termino: string){
    this.buscar( termino );
  }

}
