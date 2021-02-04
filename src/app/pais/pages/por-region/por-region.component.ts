import { Component } from '@angular/core';
import { RegionalBloc } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {


  termino:string = '';
  placeholder:string = 'Buscar por Región';
  respuesta:RegionalBloc[] = [];
  hayError:boolean = false;

  constructor( private paisService:PaisService ) { }

  buscar( termino: string ) {
    //if(this.termino.trim().length === 0){ return; }
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarRegion( this.termino ).subscribe( paises => {
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
