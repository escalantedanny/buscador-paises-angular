import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorMonedaComponent } from './pages/por-moneda/por-moneda.component';
import { PorIdiomaComponent } from './pages/por-idioma/por-idioma.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



@NgModule({
  declarations: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    PorMonedaComponent, 
    PorIdiomaComponent, 
    VerPaisComponent, 
    ListadoComponent, 
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    PorMonedaComponent, 
    PorIdiomaComponent, 
    VerPaisComponent,
    ListadoComponent, 
    BusquedaComponent
  ]
})
export class PaisModule { }
