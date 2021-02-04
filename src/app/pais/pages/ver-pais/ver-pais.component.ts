import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor( 
      private ActiveRoute: ActivatedRoute, 
      private paisService:PaisService ) { }

      // con Herramientas de RxJS para peticiones
  ngOnInit(): void {
    this.ActiveRoute.params
      .pipe(
        switchMap( (params) => this.paisService.detallePais( params.id) ),
        tap( console.log)
      )
      .subscribe( pais => this.pais = pais )

    // con Herramientas de Angular para peticiones
    //   this.ActiveRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.detallePais( id ).subscribe( pais => {
    //       console.log(pais);
    //     });
    //   } );

    }

}
