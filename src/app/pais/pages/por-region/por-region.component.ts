import { Component } from '@angular/core';
import { Country, RegionalBloc } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['europe', 'asia', 'americas', 'oceania', 'africa'];
  regionActiva:string = '';
  termino:string = '';
  placeholder:string = 'Buscar por Región';
  respuesta:Country[] = [];
  hayError:boolean = false;

  constructor( private paisService:PaisService ) { }

  activarRegion( region:string ) {
    this.regionActiva = region;
    this.paisService.buscarRegion( this.regionActiva ).subscribe( paises => {
      this.respuesta = paises;
    }, (err) => {
      this.hayError = true;
      this.respuesta = [];
    });
    
  }

  sugerencias( event:string){
    this.hayError = false;
  }

  getClaseCSS( region:string ){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
